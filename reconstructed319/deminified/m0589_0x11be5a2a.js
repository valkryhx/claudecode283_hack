// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ye, LE, er, dv } from "B:/~BUN/root/chunk-game8aqv.js";
import { $o, hf } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { be, kte } from "B:/~BUN/root/chunk-7wn6n2hd.js";
var JBi = ["host", "none"],
  Ovr = "none";
function fCe(e) {
  return e === "none";
}
function Ivr({
  permissionPromptTool: permissionPromptTool,
  sdkUrl: sdkUrl
}) {
  return sdkUrl ? "stdio" : permissionPromptTool;
}
function mue(e) {
  return e !== void 0 && e !== "none";
}
function tee() {
  if (er()) return !1;
  return $o().some(item => !hf.has(item) && be(item)?.permissions?.denyInsteadOfPrompting === !0) || kte().some(item => item.permissions?.denyInsteadOfPrompting === !0);
}
function Mvr(e) {
  let denyInsteadOfPrompting = tee();
  if (denyInsteadOfPrompting === (e.denyInsteadOfPrompting === !0)) return e;
  return {
    ...e,
    denyInsteadOfPrompting: denyInsteadOfPrompting,
    shouldAvoidPermissionPrompts: denyInsteadOfPrompting || e.avoidsPromptsByNature === !0
  };
}
function XSs() {
  if (dv().length > 0 && ye()) return !1;
  if (ye() && !mue(LE())) return !1;
  return !0;
}
function nee() {
  return !tee() && XSs();
}
export { JBi, Ovr, fCe, Ivr, mue, tee, Mvr, XSs, nee };