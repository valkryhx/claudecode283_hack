// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  py
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  ss
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  Yk
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  GL,
  Sf,
  FT,
  Crn,
  sy,
  XCr
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  ZB,
  ADt,
  LF,
  dr,
  YTe
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  wMe
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  WVt
} from "B:/~BUN/root/chunk-j92898s3.js";
import {
  lc
} from "B:/~BUN/root/chunk-twqr14hq.js";
import {
  Xj
} from "B:/~BUN/root/chunk-6wjpaxb7.js";
import {
  H3
} from "B:/~BUN/root/chunk-c1275ktq.js";
var M9r = {
  approvalAttested: !1
};

function _kn(e, o) {
  if (!o) return e;
  return {
    ...e,
    sandbox: e.sandbox === "required" || o.sandbox === "required" ? "required" : "tool_default",
    background: e.background === "forbidden" || o.background === "forbidden" ? "forbidden" : "tool_default",
    pinCwd: e.pinCwd || o.pinCwd === !0,
    scrubCredentialEnv: e.scrubCredentialEnv || o.scrubCredentialEnv === !0,
    maxTimeoutMs: m(e.maxTimeoutMs, o.maxTimeoutMs)
  }
}

function m(e, o) {
  if (o === void 0 || o <= 0) return e;
  return e === void 0 ? o : Math.min(e, o)
}
var p = 50000,
  f = Crn,
  g = 4,
  y = 45000,
  c = {
    sandbox: "tool_default",
    background: "forbidden",
    pinCwd: !0,
    scrubCredentialEnv: !0,
    maxTimeoutMs: y,
    get additionalDenyRead() {
      return wMe()
    },
    get additionalDenyWrite() {
      return wMe()
    }
  },
  _ = "Approvals are asked in this session. This machine's rules and hooks still apply. Commands run as they would locally in that folder (sandboxed when its settings sandbox them), foreground only, from the project directory, without credential variables, up to 45 s each.",
  z_t = new Set(["dangerouslyDisableSandbox", ...[]]);

function D9r(e = {}) {
  return {
    name: "interim_floor",
    kind: "personal_machine",
    requireEnvelope: !0,
    admission: "device_binding",
    stance: {
      mode: "session",
      honorLocalRules: !0,
      onAsk: "session",
      askOnDestructive: e.askOnDestructive ?? !1
    },
    limits: {
      max_call_ms: p,
      max_command_ms: c.maxTimeoutMs,
      max_request_bytes: f,
      max_in_flight: g
    },
    serves: (n) => Xj.has(n.name) && py(n).supported,
    constraints: (n, s) => {
      let i = py(n);
      return _kn(c, i.supported ? i.tighten : void 0)
    },
    refusedInputFields: (n) => {
      let s = py(n);
      return (s.supported ? s.refusedInputFields ?? [] : []).filter((r) => !z_t.has(r))
    },
    notes: () => _
  }
}
var gQe = 8,
  S = 256,
  k = 16,
  bkn = 512;

function L9r(e, o, n) {
  return o === e.toolName && H3(o, ss(n, [dr, YTe])) === H3(o, e.evaluatedInput)
}

function N9r(e) {
  return {
    behavior: "deny",
    message: e !== void 0 && e.trim() !== "" ? sy(e) : "The person declined this call in the session \u2014 it did not run.",
    decisionReason: {
      type: "other",
      reason: WVt
    },
    decideLocation: "ask-path"
  }
}
async function H9r(e, o, n, s) {
  if (o === void 0 || o.length === 0 || !ZB()) return;
  let i = o.flatMap((t) => {
      let a = GL().safeParse(t);
      return a.success && a.data.type === "addRules" && a.data.behavior === "allow" && a.data.rules.length > 0 && a.data.rules.length <= k && a.data.rules.every((u) => u.toolName.length <= bkn && (u.ruleContent?.length ?? 0) <= bkn && E(u, s)) ? [a.data] : []
    }),
    r = ADt(i.map((t) => t.destination === "session" || t.destination === "localSettings" ? t : {
      ...t,
      destination: "session"
    })),
    l = r.filter((t) => t.destination === "session"),
    d = r.filter((t) => t.destination === "localSettings");
  if (r.length > 0 && i.some((t) => t.destination !== "session" && t.destination !== "localSettings")) n.destinationDowngraded = !0;
  if (l.length > 0) e.sessionPermissionUpdates = [...e.sessionPermissionUpdates, ...l].slice(-S);
  if (d.length > 0) await LF(d);
  if (r.length > 0) lc(n.callId, "standing approval kept", {
    session_rules: l.length,
    local_settings_rules: d.length,
    downgraded: n.destinationDowngraded
  })
}

function E(e, o) {
  let n = o.input.command;
  return e.toolName === o.toolName && typeof n === "string" && e.ruleContent !== void 0 && e.ruleContent === n.trim() && !e.ruleContent.includes("*")
}

function T(e) {
  if (e === "none") return;
  let o = XCr(v(Yk()));
  return o === void 0 ? void 0 : {
    auto_mode: o
  }
}

function v(e) {
  return e
}

function F9r(e) {
  let o = sy(e.ask.message);
  return {
    envelope: {
      v: Sf,
      outcome: "needs_approval",
      ...e.facts.envelope && {
        call_id: e.facts.envelope.call_id
      },
      target: e.target,
      ask_id: e.askId,
      tool: e.toolName,
      input: e.ask.input,
      message: o,
      ...e.ask.decisionReason !== void 0 && {
        decision_reason: e.ask.decisionReason
      },
      ...e.ask.suggestions.length > 0 && {
        suggestions: [...e.ask.suggestions]
      },
      classifier_eligible: e.ask.classifierEligible,
      prior_answer_ok: e.ask.priorAnswerOk,
      ...e.notes.length > 0 && {
        notes: [...e.notes]
      },
      ...e.ask.classifierEligible && T(e.hostRules),
      elicitation: {
        mode: "form",
        message: o,
        requestedSchema: {
          type: "object",
          properties: {
            decision: {
              type: "string",
              enum: ["allow", "deny"],
              description: `Whether ${e.toolName} may run this call on ${e.target.name}`
            },
            feedback: {
              type: "string",
              description: "Optional words for Claude with the decision"
            }
          },
          required: ["decision"]
        },
        _meta: {
          [FT]: {
            ask_id: e.askId,
            ...e.facts.envelope && {
              call_id: e.facts.envelope.call_id
            },
            input_fingerprint: e.inputFingerprint,
            classifier_eligible: e.ask.classifierEligible,
            prior_answer_ok: e.ask.priorAnswerOk
          }
        }
      }
    },
    content: [{
      type: "text",
      text: `${e.toolName} on ${e.target.name} needs approval in this session before it runs: ${o}`
    }]
  }
}

function $9r(e, o, n) {
  return {
    envelope: {
      v: Sf,
      outcome: "acknowledged",
      ...o.envelope && {
        call_id: o.envelope.call_id
      },
      target: e,
      ask_id: n
    },
    content: [{
      type: "text",
      text: `The refusal was recorded on ${e.name} \u2014 nothing ran.`
    }]
  }
}
export {
  M9r,
  _kn,
  z_t,
  D9r,
  gQe,
  bkn,
  L9r,
  N9r,
  H9r,
  F9r,
  $9r
};
