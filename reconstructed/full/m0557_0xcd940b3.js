// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  P,
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  pte
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  E4
} from "B:/~BUN/root/chunk-95q529cj.js";
import {
  x8,
  bc
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  P5t,
  I5t
} from "B:/~BUN/root/chunk-c42jr7s7.js";
import {
  pn
} from "B:/~BUN/root/chunk-8j4yaj30.js";
import {
  o,
  M,
  ae,
  u,
  fe
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  randomUUID as V
} from "crypto";
var ket = "confirm_";

function Ykt(e) {
  let r = me(e);
  return x8() && r.shouldAvoidPermissionPrompts !== !0 && r.mode !== "dontAsk"
}
async function c2e(e) {
  let {
    toolUseContext: r,
    source: i
  } = e;
  if (!Ykt(r)) return {
    kind: "unanswered",
    reason: "no_one_to_ask"
  };
  let n;
  try {
    n = await b(e)
  } catch (s) {
    if (r.abortController.signal.aborted) t(`confirmWithUser(${i}): ask aborted with the turn: ${l(s)}`), n = {
      kind: "aborted"
    };
    else d(s), n = {
      kind: "unanswered",
      reason: "error"
    }
  }
  let a = {
    source_hash: pn(i)
  };
  switch (n.kind) {
    case "chose":
    case "declined":
    case "aborted":
      _("permission_confirm_with_user", {
        ...a,
        answer: c(n.kind)
      });
      break;
    case "unanswered":
      if (n.reason === "error") m("permission_confirm_with_user", "error", a);
      else p("permission_confirm_with_user", n.reason, a);
      break
  }
  return n
}
async function b({
  canUseTool: e,
  toolUseContext: r,
  source: i,
  header: n,
  question: a,
  choices: s,
  personOnly: k
}) {
  let h = E4.inputSchema.safeParse({
    questions: [{
      question: a,
      header: n,
      options: s.map(({
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
  if (!h.success) throw new P(`confirmWithUser(${i}): the question does not satisfy the AskUserQuestion schema: ${h.error.message}`, "confirmWithUser: the question does not satisfy the AskUserQuestion schema");
  let U = await E4.checkPermissions(h.data, r);
  if (U.behavior !== "ask") throw new P(`confirmWithUser(${i}): AskUserQuestion.checkPermissions answered ${U.behavior}, not ask`, "confirmWithUser: AskUserQuestion.checkPermissions did not answer ask");
  let w = {
      ...U,
      forcedByCaller: !0,
      ...k === !0 && {
        personOnly: !0
      }
    },
    g = `${ket}${V()}`,
    y = await e(E4, h.data, r, bc({
      content: []
    }), g, w).finally(() => pte(r.session, g));
  return x(y, w, r.abortController.signal, a, s)
}

function x(e, r, i, n, a) {
  if (P5t(e, r)) return {
    kind: "unanswered",
    reason: "no_one_to_ask"
  };
  if (i.aborted) return {
    kind: "aborted"
  };
  switch (e.behavior) {
    case "allow": {
      let s = T().safeParse(e.updatedInput);
      if (!s.success) return {
        kind: "unanswered",
        reason: "no_selection"
      };
      if (s.data.followUp === !0) return {
        kind: "declined"
      };
      let k = I(s.data.answers?.[n]);
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
      if (e.decisionReason.type === "asyncAgent" || e.decisionReason.type === "other" && I5t(e.decisionReason.reason)) return {
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
  answers: fe(o(), ae()).optional(),
  followUp: M().optional()
}));

function I(e) {
  if (typeof e === "string") return C(e);
  if (Array.isArray(e)) return C(e.filter((r) => typeof r === "string").join(", "));
  return ""
}

function C(e) {
  return e.replace(/\s+/g, " ").trim()
}
export {
  ket,
  Ykt,
  c2e
};
