// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { hme } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { u7 } from "B:/~BUN/root/chunk-ypcq7162.js";
import { QY, yd } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { wTn, vTn, Des } from "B:/~BUN/root/chunk-ep8vhpwd.js";
import { an } from "B:/~BUN/root/chunk-31x8pa20.js";
import { o, M, oe, u, fe } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { randomUUID as V } from "crypto";
var kEt = "confirm_";
function Lqe(e) {
  let r = le(e);
  return QY() && r.shouldAvoidPermissionPrompts !== !0 && r.mode !== "dontAsk";
}
async function Wrt(e) {
  let {
    toolUseContext: toolUseContext,
    source: source
  } = e;
  if (!Lqe(toolUseContext)) return {
    kind: "unanswered",
    reason: "no_one_to_ask"
  };
  let s;
  try {
    s = await b(e);
  } catch (error) {
    if (toolUseContext.abortController.signal.aborted) t(`confirmWithUser(${source}): ask aborted with the turn: ${d(error)}`), s = {
      kind: "aborted"
    };else l(error), s = {
      kind: "unanswered",
      reason: "error"
    };
  }
  let a = {
    source_hash: an(source)
  };
  switch (s.kind) {
    case "chose":
    case "declined":
    case "aborted":
      g("permission_confirm_with_user", {
        ...a,
        answer: c(s.kind)
      });
      break;
    case "unanswered":
      if (s.reason === "error") m("permission_confirm_with_user", "error", a);else p("permission_confirm_with_user", s.reason, a);
      break;
  }
  return s;
}
async function b({
  canUseTool: canUseTool,
  toolUseContext: toolUseContext_2,
  source: source_2,
  header: header,
  question: question,
  choices: choices,
  personOnly: personOnly
}) {
  let h = u7.inputSchema.safeParse({
    questions: [{
      question: question,
      header: header,
      options: choices.map(({
        label: label,
        description: description
      }) => ({
        label: label,
        description: description ?? ""
      })),
      multiSelect: !1
    }],
    metadata: {
      source: source_2
    }
  });
  if (!h.success) throw new x(`confirmWithUser(${source_2}): the question does not satisfy the AskUserQuestion schema: ${h.error.message}`, "confirmWithUser: the question does not satisfy the AskUserQuestion schema");
  let U = await u7.checkPermissions(h.data, toolUseContext_2);
  if (U.behavior !== "ask") throw new x(`confirmWithUser(${source_2}): AskUserQuestion.checkPermissions answered ${U.behavior}, not ask`, "confirmWithUser: AskUserQuestion.checkPermissions did not answer ask");
  let w = {
      ...U,
      forcedByCaller: !0,
      ...(personOnly === !0 && {
        personOnly: !0
      })
    },
    _ = `${kEt}${V()}`,
    y = await canUseTool(u7, h.data, toolUseContext_2, yd({
      content: []
    }), _, w).finally(() => hme(toolUseContext_2.session, _));
  return P(y, w, toolUseContext_2.abortController.signal, question, choices);
}
function P(e, r, i, s, a) {
  if (wTn(e, r)) return {
    kind: "unanswered",
    reason: "no_one_to_ask"
  };
  if (i.aborted) return {
    kind: "aborted"
  };
  switch (e.behavior) {
    case "allow":
      {
        let n = T().safeParse(e.updatedInput);
        if (!n.success) return {
          kind: "unanswered",
          reason: "no_selection"
        };
        if (n.data.followUp === !0) return {
          kind: "declined"
        };
        let typedAnswer = R(n.data.answers?.[s]);
        if (typedAnswer === "") return {
          kind: "unanswered",
          reason: "no_selection"
        };
        let h = a.find(item => C(item.label) === typedAnswer);
        return h !== void 0 ? {
          kind: "chose",
          value: h.value
        } : {
          kind: "declined",
          typedAnswer: typedAnswer
        };
      }
    case "deny":
      if (e.decisionReason.type === "other" && Des(e.decisionReason.reason)) return {
        kind: "unanswered",
        reason: "host_closed"
      };
      if (e.decisionReason.type === "asyncAgent" || e.decisionReason.type === "other" && vTn(e.decisionReason.reason)) return {
        kind: "unanswered",
        reason: "no_one_to_ask"
      };
      return {
        kind: "declined"
      };
    case "ask":
      return {
        kind: "declined"
      };
  }
}
var T = f(() => u({
  answers: fe(o(), oe()).optional(),
  followUp: M().optional()
}));
function R(e) {
  if (typeof e === "string") return C(e);
  if (Array.isArray(e)) return C(e.filter(item => typeof item === "string").join(", "));
  return "";
}
function C(e) {
  return e.replace(/\s+/g, " ").trim();
}
export { kEt, Lqe, Wrt };