// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { iV } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { pL } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Mf } from "B:/~BUN/root/chunk-bp7zxkzq.js";
import { Die, Ofe, DPs } from "B:/~BUN/root/chunk-6t9vgqfx.js";
function i7t() {
  return pL() && !Mf().backgroundDeadlineDisabled;
}
function Amo() {
  return i7t() && E("tengu_cosmic_shore", !0);
}
var o = 600000;
function a7t() {
  return iV() ? Math.max(o, Die()) : DPs();
}
function Owr(e) {
  return Amo() ? l7t(e) : void 0;
}
function l7t(e) {
  return Math.min(e ?? a7t(), Ofe());
}
function $Hn() {
  return i7t() ? `Set to true to run this command in the background. With it, \`timeout\` limits how long the command may run in the background before it is stopped (default ${a7t()} ms, max ${Ofe()} ms).` : "Set to true to run this command in the background.";
}
function UHn() {
  return i7t() ? ` With \`run_in_background\` the timeout is instead how long the command may run in the background (default ${a7t()}ms / ${Math.round(a7t() / 60000)} minutes, max ${Ofe()}ms / ${Math.round(Ofe() / 3600000)} hours); at that limit it is stopped and you are notified.` : "";
}
var nSs = ["user", "classifier", "auto_mode", "hook"];
function xmo(e) {
  let n = e.behavior === "allow" ? e.decisionReason : void 0;
  switch (n?.type) {
    case "permissionPromptTool":
      return "user";
    case "classifier":
      return n.classifier === "auto-mode" && n.classifierAllowed === !0 ? "classifier" : void 0;
    case "mode":
      return n.mode === "auto" && n.denialLimitRun !== !0 && n.scriptCheckDeferred !== !0 ? "auto_mode" : void 0;
    case "hook":
      return "hook";
    default:
      return;
  }
}
export { i7t, Amo, a7t, Owr, l7t, $Hn, UHn, nSs, xmo };