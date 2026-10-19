// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { zn, Sn } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { is, S0e } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { i_t, Bm, Gx } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Je } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { HU, HLt, Rj } from "B:/~BUN/root/chunk-c44qc88s.js";
import { cu as v_2, EM, EVn, cc, XRo, OS } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Yq, fee } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { BAe } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { cwn, fwn as reason } from "B:/~BUN/root/chunk-sx40pnv6.js";
import { s_e } from "B:/~BUN/root/chunk-dvhmfxf8.js";
import { Ed } from "B:/~BUN/root/chunk-zta47hte.js";
import { iX } from "B:/~BUN/root/chunk-25qdy3nw.js";
import { Ur, nIe } from "B:/~BUN/root/chunk-hdc8p5sh.js";
function m() {
  try {
    return E("tengu_violin_table", !1) === !0;
  } catch {
    return !1;
  }
}
function J5o(e) {
  return e.outcome === "needs_approval" ? e.suggestions ?? [] : [];
}
function _Kr(e, toolName_2) {
  let [t, ...r] = e;
  if (t === void 0 || r.length > 0 || !s_e(toolName_2)) return;
  let {
    toolName: toolName,
    ruleContent: ruleContent
  } = zn(t);
  return toolName === toolName_2 && ruleContent !== void 0 && Sn({
    toolName: toolName_2,
    ruleContent: ruleContent
  }) === t && S0e(ruleContent).type !== "exact" ? {
    toolName: toolName_2,
    ruleContent: ruleContent
  } : void 0;
}
function Vtr() {
  if (!m()) return !1;
  try {
    return Bm().errors.length === 0 && !Je.isSandboxEnabledInSettings() && !Je.isSandboxingEnabled();
  } catch {
    return !1;
  }
}
function p(e, n) {
  let t = _Kr(n.offered, n.toolName);
  return Vtr() && t !== void 0 && e.toolName === t.toolName && e.ruleContent === t.ruleContent;
}
function Q5o(e) {
  return e.offeredStandingUpdates.length > 0 && Vtr() ? [...e.sessionPermissionUpdates, ...e.offeredStandingUpdates] : e.sessionPermissionUpdates;
}
var max_call_ms = 50000,
  max_request_bytes = EVn,
  max_in_flight = 4,
  maxTimeoutMs = 45000,
  g = {
    sandbox: "tool_default",
    background: "forbidden",
    pinCwd: !0,
    scrubCredentialEnv: !0,
    maxTimeoutMs: maxTimeoutMs,
    get additionalDenyRead() {
      return BAe();
    },
    get additionalDenyWrite() {
      return BAe();
    }
  },
  v = "Approvals are asked in this session. This machine's rules and hooks still apply. Commands run as they would locally in that folder (sandboxed when its settings sandbox them), foreground only, from the project directory, without credential variables, up to 45 s each.",
  w2t = new Set(["dangerouslyDisableSandbox", ...[]]);
function Z5o(e = {}) {
  return {
    name: "interim_floor",
    kind: "personal_machine",
    requireEnvelope: !0,
    admission: "device_binding",
    stance: {
      mode: "session",
      honorLocalRules: !0,
      onAsk: "session",
      askOnDestructive: e.askOnDestructive ?? !1,
      unattended: "own_record"
    },
    limits: {
      max_call_ms: max_call_ms,
      max_command_ms: g.maxTimeoutMs,
      max_request_bytes: max_request_bytes,
      max_in_flight: max_in_flight
    },
    serves: t => fee.has(t.name) && OS(t).supported,
    constraints: (t, r) => {
      let i = OS(t);
      return cwn(g, i.supported ? i.tighten : void 0);
    },
    refusedInputFields: t => {
      let r = OS(t);
      return (r.supported ? r.refusedInputFields ?? [] : []).filter(item => !w2t.has(item));
    },
    notes: () => v
  };
}
var mnt = 8,
  e8o = 1800000,
  qtr = 300000,
  _ = 256,
  k = 16,
  lwn = 512;
function t8o(e, n, t) {
  return n === e.toolName && iX(n, is(t, [Ur, nIe])) === iX(n, e.evaluatedInput);
}
function n8o(e) {
  return {
    behavior: "deny",
    message: e !== void 0 && e.trim() !== "" ? cc(e) : "The person declined this call in the session \u2014 it did not run.",
    decisionReason: {
      type: "other",
      reason: reason
    },
    decideLocation: "ask-path"
  };
}
async function r8o(e, n, t, r) {
  if (n === void 0 || n.length === 0 || !HU()) return;
  let i = HLt(n.flatMap(item => {
    let s = Yq().safeParse(item),
      [l, ...S] = s.success && s.data.type === "addRules" && s.data.behavior === "allow" ? s.data.rules : [];
    return l !== void 0 && S.length === 0 && (l.ruleContent?.length ?? 0) <= lwn && p(l, r) ? [{
      type: "addRules",
      behavior: "allow",
      destination: "session",
      rules: [l]
    }] : [];
  }));
  if (i.length > 0) e.offeredStandingUpdates = [...e.offeredStandingUpdates, ...i].slice(-_), Ed(t.callId, "offered standing rule held", {
    rules: i.length
  });
  let a = n.flatMap(item => {
      let s = Yq().safeParse(item);
      return s.success && s.data.type === "addRules" && s.data.behavior === "allow" && s.data.rules.length > 0 && s.data.rules.length <= k && s.data.rules.every(item => item.toolName.length <= lwn && (item.ruleContent?.length ?? 0) <= lwn && O(item, r)) ? [s.data] : [];
    }),
    d = HLt(a.map(item => item.destination === "session" || item.destination === "localSettings" ? item : {
      ...item,
      destination: "session"
    })),
    c = d.filter(item => item.destination === "session"),
    u = d.filter(item => item.destination === "localSettings");
  if (d.length > 0 && a.some(item => item.destination !== "session" && item.destination !== "localSettings")) t.destinationDowngraded = !0;
  let f = i_t() ? u.map(item => ({
    ...item,
    destination: "session"
  })) : [];
  if (c.length + f.length > 0) e.sessionPermissionUpdates = [...e.sessionPermissionUpdates, ...c, ...f].slice(-_);
  if (u.length > 0) await Rj(u);
  if (d.length > 0) Ed(t.callId, "standing approval kept", {
    session_rules: c.length,
    local_settings_rules: u.length,
    downgraded: t.destinationDowngraded
  });
}
function O(e, n) {
  let command = n.input.command;
  return e.toolName === n.toolName && typeof command === "string" && e.ruleContent !== void 0 && e.ruleContent === command.trim() && !e.ruleContent.includes("*");
}
function C(e) {
  if (e === "none") return;
  let auto_mode = XRo(T(Gx()));
  return auto_mode === void 0 ? void 0 : {
    auto_mode: auto_mode
  };
}
function T(e) {
  return e;
}
function o8o(e) {
  let message = cc(e.ask.message);
  return {
    envelope: {
      v: v_2,
      outcome: "needs_approval",
      ...(e.facts.envelope && {
        call_id: e.facts.envelope.call_id
      }),
      target: e.target,
      ask_id: e.askId,
      tool: e.toolName,
      input: e.ask.input,
      message: message,
      ...(e.ask.decisionReason !== void 0 && {
        decision_reason: e.ask.decisionReason
      }),
      ...(e.ask.suggestions.length > 0 && {
        suggestions: [...e.ask.suggestions]
      }),
      classifier_eligible: e.ask.classifierEligible,
      prior_answer_ok: e.ask.priorAnswerOk,
      ...(e.notes.length > 0 && {
        notes: [...e.notes]
      }),
      ...(e.ask.classifierEligible && C(e.hostRules)),
      elicitation: {
        mode: "form",
        message: message,
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
          [EM]: {
            ask_id: e.askId,
            ...(e.facts.envelope && {
              call_id: e.facts.envelope.call_id
            }),
            input_fingerprint: e.inputFingerprint,
            classifier_eligible: e.ask.classifierEligible,
            prior_answer_ok: e.ask.priorAnswerOk
          }
        }
      }
    },
    content: [{
      type: "text",
      text: `${e.toolName} on ${e.target.name} needs approval in this session before it runs: ${message}`
    }]
  };
}
function s8o(target, n, ask_id) {
  return {
    envelope: {
      v: v_2,
      outcome: "acknowledged",
      ...(n.envelope && {
        call_id: n.envelope.call_id
      }),
      target: target,
      ask_id: ask_id
    },
    content: [{
      type: "text",
      text: `The refusal was recorded on ${target.name} \u2014 nothing ran.`
    }]
  };
}
function ice() {
  try {
    return E("tengu_violin_fhole", !1) === !0;
  } catch {
    return !1;
  }
}
export { J5o, _Kr, Vtr, Q5o, w2t, Z5o, mnt, e8o, qtr, lwn, t8o, n8o, r8o, o8o, s8o, ice };