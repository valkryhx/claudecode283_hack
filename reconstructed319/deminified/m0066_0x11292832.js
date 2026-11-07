// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H, ye, Sh, er, v7 } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { kjs, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { _Vn } from "B:/~BUN/root/chunk-eh2eewfd.js";
var jqe = "CLAUDE_CODE_HOST_SKILL_CATALOG";
var DPo = {
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
  rHr = new Set(["remote", "remote_baku", "remote_cowork", "remote_trigger", "remote_cowork_trigger", "remote_desktop", "remote_mobile", "remote_projects", "claude_in_slack", "claude-in-slack", "claude-in-teams"]),
  LPo = new Set(["remote_trigger", "remote_cowork_trigger"]),
  _jt = ["remote", "remote_desktop", "remote_mobile"],
  bjt = "cli";
function Bna(e) {
  return /^(?!sdk)[a-z][a-z0-9_-]{0,31}$/.test(e);
}
function oHr() {
  let e = i.CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID;
  return e ? {
    accountUuid: e,
    organizationUuid: i.CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID || void 0
  } : void 0;
}
var djs = new Set(Object.keys(DPo));
function _(e) {
  return djs.has(e);
}
function yf() {
  return mVn(i.CLAUDE_CODE_ENTRYPOINT);
}
function mVn(e) {
  return e && _(e) ? e : void 0;
}
var r = new Set(["claude-desktop", "claude-desktop-3p", "local-agent"]);
function id() {
  let CLAUDE_CODE_ENTRYPOINT = i.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT !== void 0 && r.has(CLAUDE_CODE_ENTRYPOINT);
}
function sHr() {
  let CLAUDE_CODE_ENTRYPOINT_2 = i.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_2 === "claude-desktop" || CLAUDE_CODE_ENTRYPOINT_2 === "local-agent" ? i.CLAUDE_CODE_DESKTOP_APP_VERSION : void 0;
}
var S = new Set(["claude-desktop-3p", "local-agent"]);
function wnt() {
  let CLAUDE_CODE_ENTRYPOINT_3 = i.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_3 !== void 0 && S.has(CLAUDE_CODE_ENTRYPOINT_3);
}
function twt(e) {
  return r.has(e === "local_agent" ? "local-agent" : e);
}
function jna(e) {
  return e !== void 0 && (r.has(e) || e === "claude-vscode" || e.startsWith("sdk-"));
}
var ncn = new Set(["claude-desktop", "claude-desktop-3p"]);
function a$e() {
  let e = Zu();
  return e !== void 0 && ncn.has(e) && !n().childSession;
}
function IH() {
  return a$e() && !Ek();
}
function Wna() {
  return !1;
}
function NPo() {
  let e = Zu();
  return e !== void 0 && r.has(e);
}
function Sj() {
  let e = er() ? v7() : i.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && LPo.has(e);
}
function EN() {
  {
    let CLAUDE_CODE_ENTRYPOINT_4 = i.CLAUDE_CODE_ENTRYPOINT;
    return i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && i.CLAUDE_CODE_USE_GATEWAY && (CLAUDE_CODE_ENTRYPOINT_4 !== void 0 && ncn.has(CLAUDE_CODE_ENTRYPOINT_4) || E());
  }
  return !1;
}
function iHr() {
  return EN() && E();
}
function E() {
  return i.CLAUDE_CODE_HOST_GATEWAY_LINEAGE && !!i.CLAUDE_CODE_HOST_CREDS_FILE;
}
var aHr = "claude-desktop-3p";
function Fp() {
  return i.CLAUDE_CODE_ENTRYPOINT === "remote_cowork";
}
function QS() {
  return er() && v7() === "remote_cowork";
}
var s = new Set(_Vn);
function nB() {
  let CLAUDE_CODE_ENTRYPOINT_5 = i.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_5 !== void 0 && s.has(CLAUDE_CODE_ENTRYPOINT_5);
}
function pG() {
  let e = Zu();
  return e !== void 0 && s.has(e);
}
function xC() {
  let e = er() ? v7() : void 0;
  return e !== void 0 && s.has(e);
}
function I_() {
  return pG() || xC();
}
function lHr() {
  return nB() || I_() || Boolean(i.CLAUDE_CODE_SKILL_PROPOSALS);
}
function dHr() {
  return cjs() || xC();
}
function ry() {
  return i.CLAUDE_CODE_SESSION_ORIGIN === "claude_ai_chat";
}
function ng() {
  return ry() && I_();
}
function tK() {
  return ry() && (xC() || knt());
}
function v5() {
  let CLAUDE_CODE_ENTRYPOINT_6 = i.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_6 !== void 0 && c.has(CLAUDE_CODE_ENTRYPOINT_6);
}
var c = new Set(["claude_in_slack", "claude-in-slack"]);
function zna() {
  let e = Zu();
  return e !== void 0 && c.has(e);
}
function nwt() {
  return i.CLAUDE_CODE_ENTRYPOINT === "claude-in-teams";
}
function Wqe() {
  return v5() || nwt();
}
function Twe() {
  let CLAUDE_CODE_ENTRYPOINT_7 = i.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_7 !== void 0 && rHr.has(CLAUDE_CODE_ENTRYPOINT_7);
}
function pme() {
  return FPo(i.CLAUDE_CODE_ENTRYPOINT);
}
function FPo(e) {
  return e?.startsWith("remote") === !0;
}
var O = new Set(["remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_trigger"]);
function Gna() {
  let CLAUDE_CODE_ENTRYPOINT_8 = i.CLAUDE_CODE_ENTRYPOINT;
  return Boolean(i.CLAUDE_CODE_REMOTE) && CLAUDE_CODE_ENTRYPOINT_8 !== void 0 && O.has(CLAUDE_CODE_ENTRYPOINT_8);
}
var C = new Set(["claude_in_slack", "claude-in-slack", "claude-in-teams", "remote_trigger", "remote_cowork_trigger", "remote_cowork", "remote_baku"]);
function cHr() {
  if (Pe(i.CLAUDE_CODE_HIDE_SETTINGS_HINT)) return !1;
  let CLAUDE_CODE_ENTRYPOINT_9 = i.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_9 === void 0 || !C.has(CLAUDE_CODE_ENTRYPOINT_9);
}
function aY() {
  let CLAUDE_CODE_ENTRYPOINT_10 = i.CLAUDE_CODE_ENTRYPOINT;
  return CLAUDE_CODE_ENTRYPOINT_10 === "sdk-ts" || CLAUDE_CODE_ENTRYPOINT_10 === "sdk-py" || CLAUDE_CODE_ENTRYPOINT_10 === "sdk-cli";
}
class l {
  entrypoint = void 0;
  interactive = !1;
  spawnedByAttendedSession = void 0;
  childSession = !1;
  hasRemoteSessionOrContainerId = !1;
  claudecode = !1;
  hostManagedRunnerChild = !1;
  coworkFrameArtifacts = !1;
  hostScheduledRun = !1;
  desktopSkillSwitches = !1;
  desktopConnectorNames = !1;
  desktopWorkflowLimitWait = !1;
  hostUnattendedGrant = void 0;
  chromeTabGroupKey = void 0;
  hostAssignedGroup = void 0;
  hostGuest = void 0;
  hostTestVm = void 0;
  hostSkillCatalog = void 0;
  desktopSkillsPluginDir = void 0;
  remoteControlOwnerDeclared = !1;
  remoteRelayMark = void 0;
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
  setHostManagedRunnerChild(e) {
    this.hostManagedRunnerChild = e;
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
  setDesktopConnectorNames(e) {
    this.desktopConnectorNames = e;
  }
  setDesktopWorkflowLimitWait(e) {
    this.desktopWorkflowLimitWait = e;
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
  setRemoteRelayMark(e) {
    this.remoteRelayMark = this.remoteRelayMark === !0 || e;
  }
  setHostGuest(e) {
    this.hostGuest = e;
  }
  setHostTestVm(e) {
    this.hostTestVm = e;
  }
  setHostAssignedGroup(e) {
    this.hostAssignedGroup = e;
  }
}
var f = new W(() => new l());
function n() {
  return f.of(H().host);
}
function Zu() {
  return n().entrypoint;
}
var p = new Set(["claude-vscode", "claude-desktop", "claude-desktop-3p", "local-agent", "local_agent", "remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_cowork", "ssh-remote", "claude-in-slack", "claude_in_slack", "claude-in-teams", "claude-coworker", "claude-coworker-terminal"]),
  Vna = new Set([...p].filter(FPo));
function TN() {
  let CLAUDE_CODE_SESSION_KIND = i.CLAUDE_CODE_SESSION_KIND;
  if (CLAUDE_CODE_SESSION_KIND === "bg" || CLAUDE_CODE_SESSION_KIND === "daemon" || CLAUDE_CODE_SESSION_KIND === "daemon-worker" || Sh() !== void 0) return !1;
  let t = n();
  if (t.interactive) return !0;
  return !t.childSession && t.entrypoint !== void 0 && p.has(t.entrypoint);
}
function Kna() {
  return n().spawnedByAttendedSession === !0;
}
function vk() {
  return n().childSession;
}
function Hp() {
  return NPo() && !n().childSession;
}
function cjs() {
  let e = n();
  return gVn() || e.entrypoint !== void 0 && s.has(e.entrypoint) && !e.childSession;
}
function knt() {
  return pG() && hVn();
}
var D = new Set([..._Vn, "remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_trigger"]);
function hVn() {
  let e = n();
  return e.entrypoint !== void 0 && D.has(e.entrypoint) && e.hasRemoteSessionOrContainerId && !e.childSession && i.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}
function gVn() {
  let e = n();
  return (e.entrypoint === "local-agent" || e.entrypoint === "local_agent") && !e.childSession;
}
var T = new Set(["remote", "remote_projects", "remote_desktop", "remote_mobile", "ssh-remote"]);
function uHr() {
  let e = n();
  return e.entrypoint !== void 0 && T.has(e.entrypoint) && !e.childSession && !e.claudecode;
}
function HPo() {
  let e = n();
  return e.remoteRelayMark !== !1 || e.entrypoint === "ssh-remote" || i.CLAUDE_CODE_ENTRYPOINT === "ssh-remote" || kjs();
}
function fHr() {
  let {
    entrypoint: entrypoint,
    interactive: interactive
  } = n();
  return entrypoint !== void 0 && !interactive && (rHr.has(entrypoint) || entrypoint.startsWith("remote"));
}
function rwt() {
  return _f() || IH();
}
function _f() {
  let e = n();
  return e.entrypoint === "claude-vscode" && !e.childSession && !e.claudecode;
}
function qna() {
  let e = n();
  return (e.entrypoint === "sdk-ts" || e.entrypoint === "sdk-py" || e.entrypoint === "sdk-cli") && !e.childSession && !e.claudecode && !HPo();
}
function OT(e = ye()) {
  let t = Hp() && !n().claudecode;
  return e && !t && !_f();
}
function Ek() {
  return n().claudecode;
}
function ujs() {
  return n().coworkFrameArtifacts;
}
function lY() {
  return n().hostScheduledRun;
}
function Yna() {
  return n().desktopSkillSwitches;
}
function fjs() {
  return n().desktopWorkflowLimitWait;
}
function Xna() {
  return n().desktopConnectorNames;
}
function Jna() {
  return n().hostUnattendedGrant;
}
function pjs() {
  return n().chromeTabGroupKey;
}
function yVn() {
  return n().hostSkillCatalog;
}
function mjs() {
  return n().desktopSkillsPluginDir;
}
function Qna(e) {
  R(e);
  let t = n();
  t.setInteractive(!e), t.setSpawnedByAttendedSession(i.CLAUDE_CODE_SESSION_ATTENDED), t.setEntrypoint(i.CLAUDE_CODE_ENTRYPOINT), t.setRemoteRelayMark(kjs()), t.setChildSession(Boolean(i.CLAUDE_CODE_CHILD_SESSION)), t.setHasRemoteSessionOrContainerId(Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID || i.CLAUDE_CODE_CONTAINER_ID)), t.setClaudecode(Boolean(i.CLAUDECODE)), t.setHostManagedRunnerChild(i.CLAUDE_CODE_REMOTE === !0 && i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted" && i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && i.ANTHROPIC_BASE_URL !== void 0), t.setCoworkFrameArtifacts(i.CLAUDE_CODE_COWORK_FRAME_ARTIFACTS), t.setHostScheduledRun(i.CLAUDE_CODE_HOST_SCHEDULED_RUN), t.setDesktopSkillSwitches(i.CLAUDE_CODE_DESKTOP_SKILL_SWITCHES), t.setHostUnattendedGrant(i.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED), i.unset("CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED"), t.setChromeTabGroupKey(i.CLAUDE_CODE_REMOTE_SESSION_ID ? i.CLAUDE_CHROME_TAB_GROUP_KEY : void 0);
  let o = knt() && Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID);
  if (t.setHostSkillCatalog(o ? i.CLAUDE_CODE_HOST_SKILL_CATALOG : void 0), i.unset("CLAUDE_CHROME_TAB_GROUP_KEY"), o) i.unset(jqe);
  let a = Hp();
  if (t.setDesktopSkillsPluginDir(a ? i.CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR : void 0), t.setDesktopWorkflowLimitWait(IH() && i.CLAUDE_CODE_DESKTOP_WORKFLOW_LIMIT_WAIT), a) i.unset("CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR"), i.unset("CLAUDE_CODE_DESKTOP_WORKFLOW_LIMIT_WAIT");
  let d = NPo();
  if (t.setDesktopConnectorNames(d && i.CLAUDE_CODE_DESKTOP_CONNECTOR_NAMES), d) i.unset("CLAUDE_CODE_DESKTOP_CONNECTOR_NAMES");
}
function R(e) {
  if (i.CLAUDE_CODE_ENTRYPOINT) {
    if (i.CLAUDE_CODE_ENTRYPOINT === "local_agent") i.set("CLAUDE_CODE_ENTRYPOINT", "local-agent");
    if (i.CLAUDE_CODE_ENTRYPOINT === "cli" && e) i.set("CLAUDE_CODE_ENTRYPOINT", "sdk-cli");
    return;
  }
  let t = process.argv.slice(2),
    o = t.indexOf("mcp");
  if (o !== -1 && t[o + 1] === "serve") {
    i.set("CLAUDE_CODE_ENTRYPOINT", "mcp");
    return;
  }
  if (Pe(i.CLAUDE_CODE_ACTION)) {
    i.set("CLAUDE_CODE_ENTRYPOINT", "claude-code-github-action");
    return;
  }
  i.set("CLAUDE_CODE_ENTRYPOINT", e ? "sdk-cli" : "cli");
}
function hjs(e) {
  let t = e.indexOf("--");
  return t === -1 ? e : e.slice(0, t);
}
function pHr(e) {
  let t = hjs(e);
  if (t.includes("-r") || t.includes("--resume") || t.includes("--from-pr") || t.some(item => item.startsWith("--resume=") || item.startsWith("--from-pr="))) return "resume";
  if (t.includes("-c") || t.includes("--continue")) return "continue";
  return "fresh";
}
export { jqe, DPo, rHr, LPo, _jt, bjt, Bna, oHr, djs, yf, mVn, id, sHr, wnt, twt, jna, ncn, a$e, IH, Wna, NPo, Sj, EN, iHr, aHr, Fp, QS, nB, pG, xC, I_, lHr, dHr, ry, ng, tK, v5, zna, nwt, Wqe, Twe, pme, FPo, Gna, cHr, aY, Zu, Vna, TN, Kna, vk, Hp, cjs, knt, hVn, gVn, uHr, HPo, fHr, rwt, _f, qna, OT, Ek, ujs, lY, Yna, fjs, Xna, Jna, pjs, yVn, mjs, Qna, hjs, pHr };