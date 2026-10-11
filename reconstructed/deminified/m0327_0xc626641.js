// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { sp, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { a, Nn } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Xd } from "B:/~BUN/root/chunk-y04k89s2.js";
import { HI } from "B:/~BUN/root/chunk-290k5gh5.js";
function Tst() {
  return r() !== null;
}
function r() {
  if (a.CLAUDE_CODE_DISABLE_AGENT_VIEW) return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (HI()?.settings.disableAgentView === !0) return "is disabled by the 'disableAgentView' setting";
  return null;
}
function fw() {
  return !Tst();
}
async function Cst(e = {}) {
  if (HI() === null) {
    let {
      getSettingsWithErrors: getSettingsWithErrors
    } = await import("B:/~BUN/root/chunk-bkfhtpzp.js");
    getSettingsWithErrors();
  }
  if (e.kickGrowthBook !== !1) sp().catch(() => {});
}
function BPt() {
  return Nn.CLAUDE_CODE_FLEET_PAST_SESSIONS === !0 || x("tengu_fleet_past_sessions", !1);
}
function eKe() {
  return fw();
}
function pV() {
  return !1;
}
function rLe() {
  return x("tengu_amber_anchor", !1);
}
function hEr() {
  return x("tengu_copper_lantern", !1);
}
function i() {
  return x("tengu_quiet_harbor", !1) ? "ask" : "transient";
}
function M$n() {
  let CLAUDE_CODE_DAEMON_COLD_START = process.env.CLAUDE_CODE_DAEMON_COLD_START;
  if (CLAUDE_CODE_DAEMON_COLD_START === "transient" || CLAUDE_CODE_DAEMON_COLD_START === "ask") return CLAUDE_CODE_DAEMON_COLD_START;
  let n = HI()?.settings.daemonColdStart;
  if (n !== void 0) return n;
  return i();
}
function kp() {
  return rLe() ? "daemon" : "background service";
}
function JZ() {
  return Xd(kp());
}
function nae(e) {
  return eKe() ? ` \u2014 run 'claude daemon ${e}'` : "";
}
function oLe(e, n) {
  let o = n ?? r() ?? "is not available in this environment";
  process.stderr.write(`'${e}' ${o}.
`), process.exit(1);
}
var xtn = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";
function D$n() {
  return !1;
}
function yEr() {
  return !!a.CLAUDE_AGENTS_SELECT;
}
function _Er() {
  let e = Ne(process.env[xtn]);
  return delete process.env[xtn], e;
}
export { Tst, fw, Cst, BPt, eKe, pV, rLe, hEr, M$n, kp, JZ, nae, oLe, xtn, D$n, yEr, _Er };