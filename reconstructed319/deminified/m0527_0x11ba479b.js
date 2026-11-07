// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ms, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { i, Ar } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Ua } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { ij } from "B:/~BUN/root/chunk-6n5g80b8.js";
function MXt() {
  return r() !== null;
}
function r() {
  if (i.CLAUDE_CODE_DISABLE_AGENT_VIEW) return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (ij()?.settings.disableAgentView === !0) return "is disabled by the 'disableAgentView' setting";
  return null;
}
function KT() {
  return !MXt();
}
var s = "tengu_fleetview_simple";
function Els() {
  return i.CLAUDE_CODE_FLEETVIEW_SIMPLE || v(s, !1);
}
async function DXt(e = {}) {
  if (ij() === null) {
    let {
      getSettingsWithErrors: getSettingsWithErrors
    } = await import("B:/~BUN/root/chunk-bfmgajst.js");
    getSettingsWithErrors();
  }
  if (e.kickGrowthBook !== !1) ms().catch(() => {});
}
function MPn() {
  return Ar.CLAUDE_CODE_FLEET_PAST_SESSIONS === !0 || v("tengu_fleet_past_sessions", !1);
}
function D9e() {
  return KT();
}
function loe() {
  return !1;
}
function L9e() {
  return v("tengu_amber_anchor", !1);
}
function Tls() {
  return v("tengu_copper_lantern", !1);
}
function bio() {
  let CLAUDE_CODE_DAEMON_COLD_START = process.env.CLAUDE_CODE_DAEMON_COLD_START;
  if (CLAUDE_CODE_DAEMON_COLD_START === "transient" || CLAUDE_CODE_DAEMON_COLD_START === "ask") return CLAUDE_CODE_DAEMON_COLD_START;
  let t = ij()?.settings.daemonColdStart;
  if (t !== void 0) return t;
  return "transient";
}
function py() {
  return L9e() ? "daemon" : "background service";
}
function zEe() {
  return Ua(py());
}
function UIt(e) {
  return D9e() ? ` \u2014 run 'claude daemon ${e}'` : "";
}
function DPn() {
  let e = `${py()} did not respond \u2014 it may be stalled`;
  if (!D9e()) return e;
  return L9e() ? `${e}${UIt("restart")}` : `${e}${UIt("stop --any")} (ends background sessions)`;
}
function yut(e, t) {
  let o = t ?? r() ?? "is not available in this environment";
  process.stderr.write(`'${e}' ${o}.
`), process.exit(1);
}
var phr = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";
function Sio() {
  return !1;
}
function Cls() {
  return !!i.CLAUDE_AGENTS_SELECT;
}
function Rls() {
  let e = Pe(process.env[phr]);
  return delete process.env[phr], e;
}
export { MXt, KT, Els, DXt, MPn, D9e, loe, L9e, Tls, bio, py, zEe, UIt, DPn, yut, phr, Sio, Cls, Rls };