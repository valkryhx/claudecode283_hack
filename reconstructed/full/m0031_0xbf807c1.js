// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ne
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  q,
  j,
  Te,
  dA
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
var A5n = {
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
};
var u = new Set(Object.keys(A5n));

function l(e) {
  return u.has(e)
}

function Ld() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e && l(e) ? e : void 0
}

function IUo() {
  switch (Ld()) {
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
      return
  }
}
var r = new Set(["claude-desktop", "claude-desktop-3p", "local-agent"]);

function zc() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && r.has(e)
}

function Chn() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === "claude-desktop" || e === "local-agent" ? a.CLAUDE_CODE_DESKTOP_APP_VERSION : void 0
}
var p = new Set(["claude-desktop-3p", "local-agent"]);

function lxe() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && p.has(e)
}

function u1t(e) {
  return r.has(e === "local_agent" ? "local-agent" : e)
}

function OUo(e) {
  return e !== void 0 && (r.has(e) || e === "claude-vscode" || e.startsWith("sdk-"))
}
var x5n = new Set(["claude-desktop", "claude-desktop-3p"]);

function ore() {
  let e = oH();
  return e !== void 0 && x5n.has(e) && !n().childSession
}

function E() {
  let e = oH();
  return e !== void 0 && r.has(e)
}

function T_e() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === "remote_trigger" || e === "remote_cowork_trigger"
}

function A2() {
  {
    let e = a.CLAUDE_CODE_ENTRYPOINT;
    return a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && a.CLAUDE_CODE_USE_GATEWAY && (e !== void 0 && x5n.has(e) || i())
  }
  return !1
}

function P5n() {
  return A2() && i()
}

function i() {
  return a.CLAUDE_CODE_HOST_GATEWAY_LINEAGE && !!a.CLAUDE_CODE_HOST_CREDS_FILE
}
var MUo = "claude-desktop-3p";

function x2() {
  return a.CLAUDE_CODE_ENTRYPOINT === "remote_cowork"
}
var s = new Set(["remote_cowork", "remote_cowork_trigger"]);

function P2() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && s.has(e)
}

function n9e() {
  let e = oH();
  return e !== void 0 && s.has(e)
}

function CC() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && c.has(e)
}
var c = new Set(["claude_in_slack", "claude-in-slack"]);

function DUo() {
  let e = oH();
  return e !== void 0 && c.has(e)
}

function rBe() {
  return a.CLAUDE_CODE_ENTRYPOINT === "claude-in-teams"
}

function Rhn() {
  return CC() || rBe()
}
var _ = new Set(["remote", "remote_baku", "remote_cowork", "remote_trigger", "remote_cowork_trigger", "remote_desktop", "remote_mobile", "remote_projects", "claude_in_slack", "claude-in-slack", "claude-in-teams"]);

function Ahn() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && _.has(e)
}

function Pzr() {
  return a.CLAUDE_CODE_ENTRYPOINT?.startsWith("remote") === !0
}
var S = new Set(["remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_trigger"]);

function LUo() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return Boolean(a.CLAUDE_CODE_REMOTE) && e !== void 0 && S.has(e)
}
var f = new Set(["claude_in_slack", "claude-in-slack", "claude-in-teams", "remote_trigger", "remote_cowork_trigger", "remote_cowork", "remote_baku"]);

function NUo() {
  if (Ne(a.CLAUDE_CODE_HIDE_SETTINGS_HINT)) return !1;
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === void 0 || !f.has(e)
}

function rH() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === "sdk-ts" || e === "sdk-py" || e === "sdk-cli"
}
class d {
  entrypoint = void 0;
  interactive = !1;
  spawnedByAttendedSession = void 0;
  childSession = !1;
  claudecode = !1;
  coworkFrameArtifacts = !1;
  hostScheduledRun = !1;
  setEntrypoint(e) {
    this.entrypoint = e
  }
  setInteractive(e) {
    this.interactive = e
  }
  setSpawnedByAttendedSession(e) {
    this.spawnedByAttendedSession = e
  }
  setChildSession(e) {
    this.childSession = e
  }
  setClaudecode(e) {
    this.claudecode = e
  }
  setCoworkFrameArtifacts(e) {
    this.coworkFrameArtifacts = e
  }
  setHostScheduledRun(e) {
    this.hostScheduledRun = e
  }
}
var T = new q(() => new d);

function n() {
  return T.of(j().host)
}

function oH() {
  return n().entrypoint
}
var O = new Set(["claude-vscode", "claude-desktop", "claude-desktop-3p", "local-agent", "local_agent", "remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_cowork", "ssh-remote", "claude-in-slack", "claude_in_slack", "claude-in-teams", "claude-coworker", "claude-coworker-terminal"]);

function kde() {
  let e = a.CLAUDE_CODE_SESSION_KIND;
  if (e === "bg" || e === "daemon" || e === "daemon-worker" || dA() !== void 0) return !1;
  let t = n();
  if (t.interactive) return !0;
  return !t.childSession && t.entrypoint !== void 0 && O.has(t.entrypoint)
}

function HUo() {
  return n().spawnedByAttendedSession === !0
}

function xhn() {
  return n().childSession
}

function hu() {
  return E() && !n().childSession
}

function r9e() {
  let e = n();
  return e.entrypoint !== void 0 && (s.has(e.entrypoint) || e.entrypoint === "local-agent" || e.entrypoint === "local_agent") && !e.childSession
}
var C = new Set(["remote", "remote_projects", "remote_desktop", "remote_mobile", "ssh-remote"]);

function FUo() {
  let e = n();
  return e.entrypoint !== void 0 && C.has(e.entrypoint) && !e.childSession && !e.claudecode
}

function zw() {
  let e = n();
  return e.entrypoint === "claude-vscode" && !e.childSession && !e.claudecode
}

function DY(e = Te()) {
  let t = hu() && !n().claudecode;
  return e && !t && !zw()
}

function Qx() {
  return n().claudecode
}

function Izr() {
  return n().coworkFrameArtifacts
}

function $Uo() {
  return n().hostScheduledRun
}

function UUo(e) {
  D(e);
  let t = n();
  t.setInteractive(!e), t.setSpawnedByAttendedSession(a.CLAUDE_CODE_SESSION_ATTENDED), t.setEntrypoint(a.CLAUDE_CODE_ENTRYPOINT), t.setChildSession(Boolean(a.CLAUDE_CODE_CHILD_SESSION)), t.setClaudecode(Boolean(a.CLAUDECODE)), t.setCoworkFrameArtifacts(a.CLAUDE_CODE_COWORK_FRAME_ARTIFACTS), t.setHostScheduledRun(a.CLAUDE_CODE_HOST_SCHEDULED_RUN)
}

function D(e) {
  if (a.CLAUDE_CODE_ENTRYPOINT) {
    if (a.CLAUDE_CODE_ENTRYPOINT === "local_agent") a.set("CLAUDE_CODE_ENTRYPOINT", "local-agent");
    if (a.CLAUDE_CODE_ENTRYPOINT === "cli" && e) a.set("CLAUDE_CODE_ENTRYPOINT", "sdk-cli");
    return
  }
  let t = process.argv.slice(2),
    o = t.indexOf("mcp");
  if (o !== -1 && t[o + 1] === "serve") {
    a.set("CLAUDE_CODE_ENTRYPOINT", "mcp");
    return
  }
  if (Ne(a.CLAUDE_CODE_ACTION)) {
    a.set("CLAUDE_CODE_ENTRYPOINT", "claude-code-github-action");
    return
  }
  a.set("CLAUDE_CODE_ENTRYPOINT", e ? "sdk-cli" : "cli")
}

function N(e) {
  let t = e.indexOf("--");
  return t === -1 ? e : e.slice(0, t)
}

function BUo(e) {
  let t = N(e);
  if (t.includes("-r") || t.includes("--resume") || t.includes("--from-pr") || t.some((o) => o.startsWith("--resume=") || o.startsWith("--from-pr="))) return "resume";
  if (t.includes("-c") || t.includes("--continue")) return "continue";
  return "fresh"
}
export {
  A5n,
  Ld,
  IUo,
  zc,
  Chn,
  lxe,
  u1t,
  OUo,
  x5n,
  ore,
  T_e,
  A2,
  P5n,
  MUo,
  x2,
  P2,
  n9e,
  CC,
  DUo,
  rBe,
  Rhn,
  Ahn,
  Pzr,
  LUo,
  NUo,
  rH,
  oH,
  kde,
  HUo,
  xhn,
  hu,
  r9e,
  FUo,
  zw,
  DY,
  Qx,
  Izr,
  $Uo,
  UUo,
  BUo
};
