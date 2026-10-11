// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { vqr, kqr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { E5n } from "B:/~BUN/root/chunk-g2vddtj4.js";
function n() {
  let e = kqr(),
    o = e === void 0 ? E5n() : void 0,
    [msSinceSessionStart, s] = e !== void 0 ? [Math.max(0, Date.now() - e), "session_switch"] : o !== void 0 ? [Math.max(0, Date.now() - o), "spawn_stamp"] : [Math.round(process.uptime() * 1000), "process_start"];
  return {
    msSinceSessionStart: msSinceSessionStart,
    startAnchor: c(s),
    isRemoteSession: Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)
  };
}
function t(e) {
  let o = vqr();
  if (o.has(e)) return !1;
  return o.add(e), !0;
}
function T9t(toolCount, o) {
  if (toolCount === 0 || !t("tools_added")) return;
  i("tengu_chrome_tools_added", {
    ...n(),
    toolCount: toolCount,
    discoverySource: c(o)
  });
}
function iao(e) {
  if (!t("bridge_connected")) return;
  i("tengu_chrome_bridge_connected", {
    ...n(),
    bridgeStatus: ue(e)
  });
}
function aao() {
  if (!t("extension_connected")) return;
  i("tengu_chrome_extension_connected", n());
}
function lao(tokenAccountMismatch) {
  i("tengu_chrome_tool_call_disconnected", {
    ...n(),
    tokenAccountMismatch: tokenAccountMismatch
  });
}
export { T9t, iao, aao, lao };