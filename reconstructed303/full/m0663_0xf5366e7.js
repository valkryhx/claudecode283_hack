// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  x,
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  hme
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  le
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  u7
} from "B:/~BUN/root/chunk-ypcq7162.js";
import {
  QY,
  yd
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  wTn,
  vTn,
  Des
} from "B:/~BUN/root/chunk-ep8vhpwd.js";
import {
  an
} from "B:/~BUN/root/chunk-31x8pa20.js";
import {
  o,
  M,
  oe,
  u,
  fe
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  randomUUID as V
} from "crypto";
var kEt = "confirm_";

function Lqe(e) {
  let r = le(e);
  return QY() && r.shouldAvoidPermissionPrompts !== !0 && r.mode !== "dontAsk"
}
async function Wrt(e) {
  let {
    toolUseContext: r,
    source: i
  } = e;
  if (!Lqe(r)) return {
    kind: "unanswered",
    reason: "no_one_to_ask"
  };
  let s;
  try {
    s = await b(e)
  } catch (n) {
    if (r.abortController.signal.aborted) t(`confirmWithUser(${i}): ask aborted with the turn: ${d(n)}`), s = {
      kind: "aborted"
    };
    else l(n), s = {
      kind: "unanswered",
      reason: "error"
    }
  }
  let a = {
    source_hash: an(i)
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
      if (s.reason === "error") m("permission_confirm_with_user", "error", a);
      else p("permission_confirm_with_user", s.reason, a);
      break
  }
  return s
}
async function b({
  canUseTool: e,
  toolUseContext: r,
  source: i,
  header: s,
  question: a,
  choices: n,
  personOnly: k
}) {
  let h = u7.inputSchema.safeParse({
    questions: [{
      question: a,
      header: s,
      options: n.map(({
        label: W,
        description: A
      }) => ({
        label: W,
        description: A ?? ""
      })),
      multiSelect: !1
    }],
    metadata: {
      source: i
    }
  });
  if (!h.success) throw new x(`confirmWithUser(${i}): the question does not satisfy the AskUserQuestion schema: ${h.error.message}`, "confirmWithUser: the question does not satisfy the AskUserQuestion schema");
  let U = await u7.checkPermissions(h.data, r);
  if (U.behavior !== "ask") throw new x(`confirmWithUser(${i}): AskUserQuestion.checkPermissions answered ${U.behavior}, not ask`, "confirmWithUser: AskUserQuestion.checkPermissions did not answer ask");
  let w = {
      ...U,
      forcedByCaller: !0,
      ...k === !0 && {
        personOnly: !0
      }
    },
    _ = `${kEt}${V()}`,
    y = await e(u7, h.data, r, yd({
      content: []
    }), _, w).finally(() => hme(r.session, _));
  return P(y, w, r.abortController.signal, a, n)
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
    case "allow": {
      let n = T().safeParse(e.updatedInput);
      if (!n.success) return {
        kind: "unanswered",
        reason: "no_selection"
      };
      if (n.data.followUp === !0) return {
        kind: "declined"
      };
      let k = R(n.data.answers?.[s]);
      if (k === "") return {
        kind: "unanswered",
        reason: "no_selection"
      };
      let h = a.find((U) => C(U.label) === k);
      return h !== void 0 ? {
        kind: "chose",
        value: h.value
      } : {
        kind: "declined",
        typedAnswer: k
      }
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
      }
  }
}
var T = f(() => u({
  answers: fe(o(), oe()).optional(),
  followUp: M().optional()
}));

function R(e) {
  if (typeof e === "string") return C(e);
  if (Array.isArray(e)) return C(e.filter((r) => typeof r === "string").join(", "));
  return ""
}

function C(e) {
  return e.replace(/\s+/g, " ").trim()
}
export {
  kEt,
  Lqe,
  Wrt
};
