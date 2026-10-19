// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { j, we, q_, Eg, gye } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { BXn } from "B:/~BUN/root/chunk-2nzykvzr.js";
var mDe = "CLAUDE_CODE_HOST_SKILL_CATALOG";
var qBr = {
    cli: !0,
    mcp: !0,
    "sdk-cli": !0,
    "sdk-ts": !0,
    "sdk-py": !0,
    bench: !0,
    "claude-vscode": !0,
    "claude-code-github-action": !0,
    "local-agent": !0,
    local_agent: !0,
    "claude-desktop": !0,
    remote: !0,
    remote_baku: !0,
    remote_cowork: !0,
    remote_trigger: !0,
    remote_cowork_trigger: !0,
    remote_desktop: !0,
    remote_mobile: !0,
    remote_projects: !0,
    claude_in_slack: !0,
    "claude-in-slack": !0,
    "claude-in-teams": !0,
    "claude-desktop-3p": !0,
    "claude-security": !0,
    "ssh-remote": !0,
    "claude-coworker": !0,
    "claude-coworker-terminal": !0
  },
  IXn = new Set(["remote", "remote_baku", "remote_cowork", "remote_trigger", "remote_cowork_trigger", "remote_desktop", "remote_mobile", "remote_projects", "claude_in_slack", "claude-in-slack", "claude-in-teams"]);
function GYs() {
  let e = a.CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID;
  return e ? {
    accountUuid: e,
    organizationUuid: a.CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID || void 0
  } : void 0;
}
var Xjo = new Set(Object.keys(qBr));
function _(e) {
  return Xjo.has(e);
}
function ip() {
  return Jjo(a.CLAUDE_CODE_ENTRYPOINT);
}
function Jjo(e) {
  return e && _(e) ? e : void 0;
}
function VYs() {
  switch (ip()) {
    case "claude-desktop":
    case "claude-desktop-3p":
    case "remote_desktop":
      return "Claude Desktop";
    case "remote_mobile":
      return "Mobile";
    case "local-agent":
    case "remote_cowork":
      return "Cowork";
    case "claude_in_slack":
    case "claude-in-slack":
      return "Claude Tag in Slack";
    case "claude-in-teams":
      return "Claude Tag in Teams";
    case "claude-code-github-action":
      return "GitHub Actions";
    default:
      return;
  }
}
var r = new Set(["claude-desktop", "claude-desktop-3p", "local-agent"]);
function Cu() {
  let CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT !== void 0 && r.has(CLAUDE_CODE_ENTRYPOINT);
}
function MXn() {
  let CLAUDE_CODE_ENTRYPOINT_2 = a.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_2 === "claude-desktop" || CLAUDE_CODE_ENTRYPOINT_2 === "local-agent" ? a.CLAUDE_CODE_DESKTOP_APP_VERSION : void 0;
}
var S = new Set(["claude-desktop-3p", "local-agent"]);
function _Ge() {
  let CLAUDE_CODE_ENTRYPOINT_3 = a.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_3 !== void 0 && S.has(CLAUDE_CODE_ENTRYPOINT_3);
}
function Pmn(e) {
  return r.has(e === "local_agent" ? "local-agent" : e);
}
function qYs(e) {
  return e !== void 0 && (r.has(e) || e === "claude-vscode" || e.startsWith("sdk-"));
}
var KBr = new Set(["claude-desktop", "claude-desktop-3p"]);
function OTe() {
  let e = vb();
  return e !== void 0 && KBr.has(e) && !n().childSession;
}
function j4() {
  return OTe() && !pI();
}
function KYs() {
  return !1;
}
function f() {
  let e = vb();
  return e !== void 0 && r.has(e);
}
function gDe() {
  let CLAUDE_CODE_ENTRYPOINT_4 = a.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_4 === "remote_trigger" || CLAUDE_CODE_ENTRYPOINT_4 === "remote_cowork_trigger";
}
function uI() {
  {
    let CLAUDE_CODE_ENTRYPOINT_5 = a.CLAUDE_CODE_ENTRYPOINT;
    return a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && a.CLAUDE_CODE_USE_GATEWAY && (CLAUDE_CODE_ENTRYPOINT_5 !== void 0 && KBr.has(CLAUDE_CODE_ENTRYPOINT_5) || u());
  }
  return !1;
}
function YBr() {
  return uI() && u();
}
function u() {
  return a.CLAUDE_CODE_HOST_GATEWAY_LINEAGE && !!a.CLAUDE_CODE_HOST_CREDS_FILE;
}
var DXn = "claude-desktop-3p";
function B_() {
  return a.CLAUDE_CODE_ENTRYPOINT === "remote_cowork";
}
function zW() {
  return Eg() && gye() === "remote_cowork";
}
var i = new Set(BXn);
function fF() {
  let CLAUDE_CODE_ENTRYPOINT_6 = a.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_6 !== void 0 && i.has(CLAUDE_CODE_ENTRYPOINT_6);
}
function D5() {
  let e = vb();
  return e !== void 0 && i.has(e);
}
function hDe() {
  let e = Eg() ? gye() : void 0;
  return e !== void 0 && i.has(e);
}
function oP() {
  return D5() || hDe();
}
function LXn() {
  return Qjo() || hDe();
}
function uE() {
  return a.CLAUDE_CODE_SESSION_ORIGIN === "claude_ai_chat";
}
function VS() {
  return uE() && oP();
}
function NXn() {
  return uE() && (hDe() || XBr());
}
function z2() {
  let CLAUDE_CODE_ENTRYPOINT_7 = a.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_7 !== void 0 && c.has(CLAUDE_CODE_ENTRYPOINT_7);
}
var c = new Set(["claude_in_slack", "claude-in-slack"]);
function YYs() {
  let e = vb();
  return e !== void 0 && c.has(e);
}
function TZe() {
  return a.CLAUDE_CODE_ENTRYPOINT === "claude-in-teams";
}
function FXn() {
  return z2() || TZe();
}
function bde() {
  let CLAUDE_CODE_ENTRYPOINT_8 = a.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_8 !== void 0 && IXn.has(CLAUDE_CODE_ENTRYPOINT_8);
}
function jhe() {
  return l(a.CLAUDE_CODE_ENTRYPOINT);
}
function l(e) {
  return e?.startsWith("remote") === !0;
}
var C = new Set(["remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_trigger"]);
function XYs() {
  let CLAUDE_CODE_ENTRYPOINT_9 = a.CLAUDE_CODE_ENTRYPOINT;
  return Boolean(a.CLAUDE_CODE_REMOTE) && CLAUDE_CODE_ENTRYPOINT_9 !== void 0 && C.has(CLAUDE_CODE_ENTRYPOINT_9);
}
var O = new Set(["claude_in_slack", "claude-in-slack", "claude-in-teams", "remote_trigger", "remote_cowork_trigger", "remote_cowork", "remote_baku"]);
function HXn() {
  if (Fe(a.CLAUDE_CODE_HIDE_SETTINGS_HINT)) return !1;
  let CLAUDE_CODE_ENTRYPOINT_10 = a.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_10 === void 0 || !O.has(CLAUDE_CODE_ENTRYPOINT_10);
}
function GW() {
  let CLAUDE_CODE_ENTRYPOINT_11 = a.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_11 === "sdk-ts" || CLAUDE_CODE_ENTRYPOINT_11 === "sdk-py" || CLAUDE_CODE_ENTRYPOINT_11 === "sdk-cli";
}
class E {
  entrypoint = void 0;
  interactive = !1;
  spawnedByAttendedSession = void 0;
  childSession = !1;
  hasRemoteSessionOrContainerId = !1;
  claudecode = !1;
  coworkFrameArtifacts = !1;
  hostScheduledRun = !1;
  desktopSkillSwitches = !1;
  hostUnattendedGrant = void 0;
  chromeTabGroupKey = void 0;
  hostAssignedGroup = void 0;
  hostSkillCatalog = void 0;
  desktopSkillsPluginDir = void 0;
  remoteControlOwnerDeclared = !1;
  setEntrypoint(e) {
    this.entrypoint = e;
  }
  setInteractive(e) {
    this.interactive = e;
  }
  setSpawnedByAttendedSession(e) {
    this.spawnedByAttendedSession = e;
  }
  setChildSession(e) {
    this.childSession = e;
  }
  setHasRemoteSessionOrContainerId(e) {
    this.hasRemoteSessionOrContainerId = e;
  }
  setClaudecode(e) {
    this.claudecode = e;
  }
  setCoworkFrameArtifacts(e) {
    this.coworkFrameArtifacts = e;
  }
  setHostScheduledRun(e) {
    this.hostScheduledRun = e;
  }
  setDesktopSkillSwitches(e) {
    this.desktopSkillSwitches = e;
  }
  setHostUnattendedGrant(e) {
    this.hostUnattendedGrant = e;
  }
  setChromeTabGroupKey(e) {
    this.chromeTabGroupKey = e;
  }
  setHostSkillCatalog(e) {
    this.hostSkillCatalog = e;
  }
  setDesktopSkillsPluginDir(e) {
    this.desktopSkillsPluginDir = e;
  }
  setRemoteControlOwnerDeclared(e) {
    this.remoteControlOwnerDeclared = e;
  }
  setHostAssignedGroup(e) {
    this.hostAssignedGroup = e;
  }
}
var D = new z(() => new E());
function n() {
  return D.of(j().host);
}
function vb() {
  return n().entrypoint;
}
var p = new Set(["claude-vscode", "claude-desktop", "claude-desktop-3p", "local-agent", "local_agent", "remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_cowork", "ssh-remote", "claude-in-slack", "claude_in_slack", "claude-in-teams", "claude-coworker", "claude-coworker-terminal"]),
  JYs = new Set([...p].filter(l));
function G2() {
  let CLAUDE_CODE_SESSION_KIND = a.CLAUDE_CODE_SESSION_KIND;
  if (CLAUDE_CODE_SESSION_KIND === "bg" || CLAUDE_CODE_SESSION_KIND === "daemon" || CLAUDE_CODE_SESSION_KIND === "daemon-worker" || q_() !== void 0) return !1;
  let t = n();
  if (t.interactive) return !0;
  return !t.childSession && t.entrypoint !== void 0 && p.has(t.entrypoint);
}
function QYs() {
  return n().spawnedByAttendedSession === !0;
}
function L5() {
  return n().childSession;
}
function ju() {
  return f() && !n().childSession;
}
function Qjo() {
  let e = n();
  return Omn() || e.entrypoint !== void 0 && i.has(e.entrypoint) && !e.childSession;
}
function XBr() {
  let e = n();
  return D5() && e.hasRemoteSessionOrContainerId && !e.childSession && a.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}
function Omn() {
  let e = n();
  return (e.entrypoint === "local-agent" || e.entrypoint === "local_agent") && !e.childSession;
}
var T = new Set(["remote", "remote_projects", "remote_desktop", "remote_mobile", "ssh-remote"]);
function ZYs() {
  let e = n();
  return e.entrypoint !== void 0 && T.has(e.entrypoint) && !e.childSession && !e.claudecode;
}
function e6s() {
  let {
    entrypoint: entrypoint,
    interactive: interactive
  } = n();
  return entrypoint !== void 0 && !interactive && (IXn.has(entrypoint) || entrypoint.startsWith("remote"));
}
function $Xn() {
  return Sy() || j4();
}
function Sy() {
  let e = n();
  return e.entrypoint === "claude-vscode" && !e.childSession && !e.claudecode;
}
function pL(e = we()) {
  let t = ju() && !n().claudecode;
  return e && !t && !Sy();
}
function pI() {
  return n().claudecode;
}
function Zjo() {
  return n().coworkFrameArtifacts;
}
function yDe() {
  return n().hostScheduledRun;
}
function t6s() {
  return n().desktopSkillSwitches;
}
function n6s() {
  return n().hostUnattendedGrant;
}
function eWo() {
  return n().chromeTabGroupKey;
}
function sjt() {
  return n().hostSkillCatalog;
}
function tWo() {
  return n().desktopSkillsPluginDir;
}
function r6s(e) {
  g(e);
  let t = n();
  t.setInteractive(!e), t.setSpawnedByAttendedSession(a.CLAUDE_CODE_SESSION_ATTENDED), t.setEntrypoint(a.CLAUDE_CODE_ENTRYPOINT), t.setChildSession(Boolean(a.CLAUDE_CODE_CHILD_SESSION)), t.setHasRemoteSessionOrContainerId(Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID || a.CLAUDE_CODE_CONTAINER_ID)), t.setClaudecode(Boolean(a.CLAUDECODE)), t.setCoworkFrameArtifacts(a.CLAUDE_CODE_COWORK_FRAME_ARTIFACTS), t.setHostScheduledRun(a.CLAUDE_CODE_HOST_SCHEDULED_RUN), t.setDesktopSkillSwitches(a.CLAUDE_CODE_DESKTOP_SKILL_SWITCHES), t.setHostUnattendedGrant(a.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED), a.unset("CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED"), t.setChromeTabGroupKey(a.CLAUDE_CODE_REMOTE_SESSION_ID ? a.CLAUDE_CHROME_TAB_GROUP_KEY : void 0);
  let o = XBr() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID);
  if (t.setHostSkillCatalog(o ? a.CLAUDE_CODE_HOST_SKILL_CATALOG : void 0), a.unset("CLAUDE_CHROME_TAB_GROUP_KEY"), o) a.unset(mDe);
  let s = ju();
  if (t.setDesktopSkillsPluginDir(s ? a.CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR : void 0), s) a.unset("CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR");
}
function g(e) {
  if (a.CLAUDE_CODE_ENTRYPOINT) {
    if (a.CLAUDE_CODE_ENTRYPOINT === "local_agent") a.set("CLAUDE_CODE_ENTRYPOINT", "local-agent");
    if (a.CLAUDE_CODE_ENTRYPOINT === "cli" && e) a.set("CLAUDE_CODE_ENTRYPOINT", "sdk-cli");
    return;
  }
  let t = process.argv.slice(2),
    o = t.indexOf("mcp");
  if (o !== -1 && t[o + 1] === "serve") {
    a.set("CLAUDE_CODE_ENTRYPOINT", "mcp");
    return;
  }
  if (Fe(a.CLAUDE_CODE_ACTION)) {
    a.set("CLAUDE_CODE_ENTRYPOINT", "claude-code-github-action");
    return;
  }
  a.set("CLAUDE_CODE_ENTRYPOINT", e ? "sdk-cli" : "cli");
}
function nWo(e) {
  let t = e.indexOf("--");
  return t === -1 ? e : e.slice(0, t);
}
function UXn(e) {
  let t = nWo(e);
  if (t.includes("-r") || t.includes("--resume") || t.includes("--from-pr") || t.some(item => item.startsWith("--resume=") || item.startsWith("--from-pr="))) return "resume";
  if (t.includes("-c") || t.includes("--continue")) return "continue";
  return "fresh";
}
export { mDe, qBr, IXn, GYs, Xjo, ip, Jjo, VYs, Cu, MXn, _Ge, Pmn, qYs, KBr, OTe, j4, KYs, gDe, uI, YBr, DXn, B_, zW, fF, D5, hDe, oP, LXn, uE, VS, NXn, z2, YYs, TZe, FXn, bde, jhe, XYs, HXn, GW, vb, JYs, G2, QYs, L5, ju, Qjo, XBr, Omn, ZYs, e6s, $Xn, Sy, pL, pI, Zjo, yDe, t6s, n6s, eWo, sjt, tWo, r6s, nWo, UXn };