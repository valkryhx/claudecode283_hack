// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { yr, mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { WKe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { mh } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Ge } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { MNt } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { Gk } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { H8n } from "B:/~BUN/root/chunk-zr472vkx.js";
import { rOe } from "B:/~BUN/root/chunk-s6ayq4b7.js";
import { q1e } from "B:/~BUN/root/chunk-27h4st9h.js";
import { hce } from "B:/~BUN/root/chunk-cxcakgnv.js";
function i() {
  try {
    return v("tengu_violin_table", !1) === !0;
  } catch {
    return !1;
  }
}
function OXs(e) {
  return e.outcome === "needs_approval" ? e.suggestions ?? [] : [];
}
function TUo(e, toolName_2) {
  let [t, ...r] = e;
  if (t === void 0 || r.length > 0 || !rOe(toolName_2)) return;
  let {
    toolName: toolName,
    ruleContent: ruleContent
  } = yr(t);
  return toolName === toolName_2 && ruleContent !== void 0 && mn({
    toolName: toolName_2,
    ruleContent: ruleContent
  }) === t && WKe(ruleContent).type !== "exact" ? {
    toolName: toolName_2,
    ruleContent: ruleContent
  } : void 0;
}
function RGr() {
  if (!i()) return !1;
  try {
    return mh().errors.length === 0 && !Ge.isSandboxEnabledInSettings() && !Ge.isSandboxingEnabled();
  } catch {
    return !1;
  }
}
function IXs(e, o) {
  let t = TUo(o.offered, o.toolName);
  return RGr() && t !== void 0 && e.toolName === t.toolName && e.ruleContent === t.ruleContent;
}
function MXs(e) {
  return e.offeredStandingUpdates.length > 0 && RGr() ? [...e.sessionPermissionUpdates, ...e.offeredStandingUpdates] : e.sessionPermissionUpdates;
}
var max_call_ms = 50000,
  max_request_bytes = MNt,
  max_in_flight = 4,
  maxTimeoutMs = 45000,
  a = {
    sandbox: "tool_default",
    background: "forbidden",
    pinCwd: !0,
    scrubCredentialEnv: !0,
    maxTimeoutMs: maxTimeoutMs,
    get additionalDenyRead() {
      return q1e();
    },
    get additionalDenyWrite() {
      return q1e();
    }
  },
  p = "Approvals are asked in this session. This machine's rules and hooks still apply. Commands run as they would locally in that folder (sandboxed when its settings sandbox them), foreground only, from the project directory, without credential variables, up to 45 s each.",
  ngn = new Set(["dangerouslyDisableSandbox", ...[]]);
function DXs(e = {}) {
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
      max_command_ms: a.maxTimeoutMs,
      max_request_bytes: max_request_bytes,
      max_in_flight: max_in_flight
    },
    serves: t => hce.has(t.name) && Gk(t).supported,
    constraints: (t, r) => {
      let s = Gk(t);
      return H8n(a, s.supported ? s.tighten : void 0);
    },
    refusedInputFields: t => {
      let r = Gk(t);
      return (r.supported ? r.refusedInputFields ?? [] : []).filter(item => !ngn.has(item));
    },
    notes: () => p
  };
}
var PEt = 8,
  R2t = 512;
function Ske() {
  try {
    return v("tengu_violin_fhole", !1) === !0;
  } catch {
    return !1;
  }
}
export { OXs, TUo, RGr, IXs, MXs, ngn, DXs, PEt, R2t, Ske };