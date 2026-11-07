// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _Vn } from "B:/~BUN/root/chunk-eh2eewfd.js";
import { Sjt } from "B:/~BUN/root/chunk-knd5e3p7.js";
import { je } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var F0r = "HKLM\\SOFTWARE\\Policies\\ClaudeCode",
  H0r = "HKCU\\SOFTWARE\\Policies\\ClaudeCode",
  dzn = "Settings";
var Z7i = 5000,
  sFs = 2097152,
  $0r = "/mnt/c/Windows/System32/reg.exe",
  eQi = "unable to find the specified registry key or value",
  r0 = "/mnt/c/Program Files/ClaudeCode",
  o = he({
    isCoworkCloud: void 0
  }, e => {
    e.isCoworkCloud = void 0;
  });
function JCo() {
  if (o.isCoworkCloud === void 0) {
    let CLAUDE_CODE_ENTRYPOINT = process.env.CLAUDE_CODE_ENTRYPOINT;
    o.isCoworkCloud = _Vn.some(item => item === CLAUDE_CODE_ENTRYPOINT);
  }
  return o.isCoworkCloud;
}
function tQi() {
  o.isCoworkCloud = void 0, JCo();
}
function Han() {
  return !1;
}
export { F0r, H0r, dzn, Z7i, sFs, $0r, eQi, r0, JCo, tQi, Han };