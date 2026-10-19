// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { BXn } from "B:/~BUN/root/chunk-2nzykvzr.js";
import { Lbt } from "B:/~BUN/root/chunk-zpzjr56x.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { Ue } from "B:/~BUN/root/chunk-ef0msk7r.js";
var n8n = "HKLM\\SOFTWARE\\Policies\\ClaudeCode",
  r8n = "HKCU\\SOFTWARE\\Policies\\ClaudeCode",
  Hun = "Settings";
var oqs = 5000,
  t$o = 2097152,
  o8n = "/mnt/c/Windows/System32/reg.exe",
  Vx = "/mnt/c/Program Files/ClaudeCode",
  o = He({
    isCoworkCloud: void 0
  }, e => {
    e.isCoworkCloud = void 0;
  });
function VHr() {
  if (o.isCoworkCloud === void 0) {
    let CLAUDE_CODE_ENTRYPOINT = process.env.CLAUDE_CODE_ENTRYPOINT;
    o.isCoworkCloud = BXn.some(item => item === CLAUDE_CODE_ENTRYPOINT);
  }
  return o.isCoworkCloud;
}
function sqs() {
  o.isCoworkCloud = void 0, VHr();
}
function _Bt() {
  return !1;
}
export { n8n, r8n, Hun, oqs, t$o, o8n, Vx, VHr, sqs, _Bt };