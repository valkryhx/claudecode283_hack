// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { _g } from "B:/~BUN/root/chunk-8z3a373v.js";
import { Fe, ws } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { nWo, UXn } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { dfe } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { MG } from "B:/~BUN/root/chunk-hkc0g0wr.js";
var L6t = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE",
  N6t = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL",
  xCt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED",
  F6t = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON";
function Ris(e) {
  return e.toolPermissionContext.proactivityBaseline === void 0 ? void 0 : e;
}
function mPn({
  toolPermissionContext: toolPermissionContext
}) {
  let proactivityBaseline = toolPermissionContext.proactivityBaseline;
  return proactivityBaseline === void 0 ? {} : {
    [L6t]: proactivityBaseline.mode
  };
}
function gPn({
  proactivityLevel: proactivityLevel,
  toolPermissionContext: toolPermissionContext_2
}) {
  let n = {
    [N6t]: proactivityLevel
  };
  if (toolPermissionContext_2.startupModeDecidedByProactivityLevel !== void 0) n[xCt] = "1";
  if (MG()) n[F6t] = "1";
  return n;
}
function Ais({
  toolPermissionContext: toolPermissionContext_3
}) {
  return toolPermissionContext_3.startupModeDecidedByProactivityLevel === void 0 ? {
    [xCt]: "0"
  } : {};
}
function xis(e) {
  return UXn(e) !== "fresh" || nWo(e).some(item => item === "--permission-mode" || item.startsWith("--permission-mode="));
}
function Pis(e) {
  let CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE;
  a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE");
  let n = _g(CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE);
  if (n === "bypassPermissions" && !e) return;
  return n;
}
function Ois() {
  let CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
  if (a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL"), dfe(CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL)) return CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
  a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON");
  return;
}
function Iis() {
  let CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON;
  return a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON"), Fe(CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON);
}
function Mis() {
  return dfe(a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL) && Fe(a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON);
}
function hPn() {
  let CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED;
  if (a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), Fe(CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED)) return !0;
  if (ws(CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED)) return !1;
  return;
}
export { L6t, N6t, xCt, F6t, Ris, mPn, gPn, Ais, xis, Pis, Ois, Iis, Mis, hPn };