// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Vh } from "B:/~BUN/root/chunk-b3jc87kv.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { kse } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { L8 } from "B:/~BUN/root/chunk-fnfdeqaa.js";
import { el } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Mor, Dor, Uui } from "B:/~BUN/root/chunk-vah5p5v2.js";
import { nee } from "B:/~BUN/root/chunk-j5zjtxy5.js";
import { kn } from "B:/~BUN/root/chunk-t7d2hp9h.js";
import { o, I, oe, u, me } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { randomUUID as x } from "crypto";
var b3e = "confirm_";
function Kat(e) {
  let r = se(e);
  return nee() && r.shouldAvoidPermissionPrompts !== !0 && r.mode !== "dontAsk";
}
async function uge(e) {
  let {
    toolUseContext: toolUseContext,
    source: source
  } = e;
  if (!Kat(toolUseContext)) return {
    kind: "unanswered",
    reason: "no_one_to_ask"
  };
  let n;
  try {
    n = await T(e);
  } catch (error) {
    if (toolUseContext.abortController.signal.aborted) t(`confirmWithUser(${source}): ask aborted with the turn: ${d(error)}`), n = {
      kind: "aborted"
    };else a(error), n = {
      kind: "unanswered",
      reason: "error"
    };
  }
  let l = {
    source_hash: kn(source)
  };
  switch (n.kind) {
    case "chose":
    case "declined":
    case "aborted":
      g("permission_confirm_with_user", {
        ...l,
        answer: f(n.kind)
      });
      break;
    case "unanswered":
      if (n.reason === "error") m("permission_confirm_with_user", "error", l);else c("permission_confirm_with_user", n.reason, l);
      break;
  }
  return n;
}
async function T({
  canUseTool: canUseTool,
  toolUseContext: toolUseContext_2,
  source: source_2,
  header: header,
  question: question,
  choices: choices,
  personOnly: personOnly
}) {
  let h = L8.inputSchema.safeParse({
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
  if (!h.success) throw new R(`confirmWithUser(${source_2}): the question does not satisfy the AskUserQuestion schema: ${h.error.message}`, "confirmWithUser: the question does not satisfy the AskUserQuestion schema");
  let C = await L8.checkPermissions(h.data, toolUseContext_2);
  if (C.behavior !== "ask") throw new R(`confirmWithUser(${source_2}): AskUserQuestion.checkPermissions answered ${C.behavior}, not ask`, "confirmWithUser: AskUserQuestion.checkPermissions did not answer ask");
  let W = {
      ...C,
      forcedByCaller: !0,
      ...(personOnly === !0 && {
        personOnly: !0
      })
    },
    U = `${b3e}${x()}`,
    active = Vh.of(toolUseContext_2.session).active;
  active?.watchConfirmAnswerEvent(U);
  let answerEventId,
    V = await canUseTool(L8, h.data, toolUseContext_2, el({
      content: []
    }), U, W).finally(() => {
      kse(toolUseContext_2.session, U), answerEventId = active?.takeConfirmAnswerEventId(U);
    }),
    _ = E(V, W, toolUseContext_2.abortController.signal, question, choices);
  return _.kind === "chose" && answerEventId !== void 0 ? {
    ..._,
    answerEventId: answerEventId
  } : _;
}
function E(e, r, i, n, l) {
  if (Mor(e, r)) return {
    kind: "unanswered",
    reason: "no_one_to_ask"
  };
  if (i.aborted) return {
    kind: "aborted"
  };
  switch (e.behavior) {
    case "allow":
      {
        let s = v().safeParse(e.updatedInput);
        if (!s.success) return {
          kind: "unanswered",
          reason: "no_selection"
        };
        if (s.data.followUp === !0) return {
          kind: "declined"
        };
        let typedAnswer = O(s.data.answers?.[n]);
        if (typedAnswer === "") return {
          kind: "unanswered",
          reason: "no_selection"
        };
        let h = l.find(item => y(item.label) === typedAnswer);
        return h !== void 0 ? {
          kind: "chose",
          value: h.value
        } : {
          kind: "declined",
          typedAnswer: typedAnswer
        };
      }
    case "deny":
      if (e.decisionReason.type === "other" && Uui(e.decisionReason.reason)) return {
        kind: "unanswered",
        reason: "host_closed"
      };
      if (e.decisionReason.type === "asyncAgent" || e.decisionReason.type === "other" && Dor(e.decisionReason.reason)) return {
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
var v = p(() => u({
  answers: me(o(), oe()).optional(),
  followUp: I().optional()
}));
function O(e) {
  if (typeof e === "string") return y(e);
  if (Array.isArray(e)) return y(e.filter(item => typeof item === "string").join(", "));
  return "";
}
function y(e) {
  return e.replace(/\s+/g, " ").trim();
}
export { b3e, Kat, uge };