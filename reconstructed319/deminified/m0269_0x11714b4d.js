// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { C7 } from "B:/~BUN/root/chunk-eev762xg.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { fea } from "B:/~BUN/root/chunk-begxsvab.js";
import { Np, E_, hM } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
function yTs() {
  return x() !== "windows";
}
function PX(e, o, r = "command") {
  {
    let s = o === void 0 ? "claude" : `claude ${o}`;
    return yTs() ? `${r === "step" ? "run " : ""}${hM}=${e} ${s}` : `set the environment variable ${hM} to ${e}, then run ${s}`;
  }
  return "";
}
var n = he({
  settled: void 0,
  open: !1,
  foresee: void 0
}, e => {
  e.settled = void 0, e.open = !1, e.foresee = void 0;
});
function OX() {
  return n.settled ?? {
    state: "not_asked"
  };
}
function wRr(e) {
  if (n.settled !== void 0) return;
  if (n.settled = e, n.open = !1, e.state === "on") fea(!0);
}
function k2i() {
  n.open = n.settled === void 0;
}
function kRr() {
  return n.open;
}
function vRr() {
  return n.settled === void 0 || n.settled.state === "on";
}
function v2i(e) {
  n.foresee = e;
}
function E2i() {
  try {
    return n.foresee === void 0 || n.settled === void 0 ? "unknown" : n.foresee();
  } catch {
    return "unknown";
  }
  return "unknown";
}
function xyo(e) {
  switch (e) {
    case "bad_value":
      return `${hM} must be 1 to turn it on`;
    case "own_settings":
      return "it has to be turned on in ~/.claude/settings.json, because managed settings or ~/.claude.json also set the variable";
    case "admin":
      return "your organization's settings don't allow it";
    case "admin_unread":
      return "Claude Code couldn't read your organization's settings or policy (starting Claude Code again may help)";
    case "credential_changed":
      return "Claude Code checked your organization's policy with a different credential than the one it now uses (starting Claude Code again will check it with this one)";
    case "compliance":
      return "it isn't offered yet to organizations under HIPAA or zero data retention";
    case "otel":
      return `OpenTelemetry is on (CLAUDE_CODE_ENABLE_TELEMETRY or ENABLE_BETA_TRACING_DETAILED), and ${Np} doesn't yet send it an event for each tool call`;
    case "runtime":
      return "it needs Claude Code's native build (see code.claude.com/docs/en/setup)";
    case "engine":
      return `this version of Claude Code didn't pass a check that only ${Np} needs (updating Claude Code may help)`;
    case "no_bash":
      return "for now it needs Git for Windows (Bash) on Windows";
    case "entrypoint":
      return "for now it only works in the interactive terminal";
    case "unattended":
      return "for now it doesn't work in background jobs, in teammates' panes or with Remote Control";
    case "no_setup":
      return "Claude Code skipped the start-up steps that check for it (it skips them while CI or IS_DEMO is set)";
    case "tools":
      return "this launch's tool options (--restricted, --tools, --disallowedTools or a deny rule) leave it out";
    case "agent_teams":
      return "it can't be used together with agent teams yet";
    case "credentials":
      return "for now it doesn't work with an API key helper, ANTHROPIC_AUTH_TOKEN or custom auth headers";
    case "provider":
      return "for now it only works with the Anthropic API";
    case "model":
      return "for now it only works with Opus 5.5 and Sonnet 5.5";
    case "no_flags":
      return `it needs settings that Claude Code downloads from Anthropic, and this session doesn't download them (DISABLE_TELEMETRY, DO_NOT_TRACK, CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC or ${C7() ?? "CLAUDE_CODE_DISABLE_FEATURE_FLAGS"} turns that off)`;
    case "gate":
      return "it isn't open to your account yet, or Claude Code couldn't check whether it is";
    case "mods":
      return "it doesn't yet work with an installed mod (a plugin with JavaScript hooks) that checks tool calls";
    case "declined":
      return "you chose not to turn it on";
    case "unsaved":
      return "Claude Code couldn't save your answer in ~/.claude.json";
  }
  return "";
}
function ERr(e) {
  if (e === "declined") return `${E_} is off for this session, as you chose. To stop being asked, remove ${hM} from your shell or settings.json.`;
  return `${E_} isn't available: ${xyo(e)}. Starting with the ordinary tools.`;
}
function T2i() {
  return `${E_} is on \xB7 this session can be resumed only with ${Np} on`;
}
function aQe() {
  return `This session is in ${E_}, which background sessions can't use yet, so it can't be moved or copied to the background.`;
}
function _Ts() {
  return `To use Remote Control, quit Claude Code and start it again with ${hM} set to 0.`;
}
function C2i() {
  return `Remote Control isn't available in ${E_} yet, so this session isn't connected. ${_Ts()}`;
}
function bTs() {
  return `Signed in. Restarting Claude Code to check ${E_} for this account\u2026`;
}
function STs(e) {
  return `Signed in. Claude Code has to restart to check ${E_} for this account, and ${e}, so this session is ending instead. Your sign-in is saved. To go on with this conversation, ${PX(1, "--resume", "step")} and choose it.`;
}
function i(e) {
  switch (e) {
    case "shell":
      return "the shell environment";
    case "userSettings":
      return "user settings";
    case "flagSettings":
      return "--settings";
  }
  return "";
}
function R2i(e) {
  {
    let o = OX();
    switch (o.state) {
      case "on":
        return `${e ? "on (experimental)" : "on (experimental), but this session uses the ordinary tools"} \xB7 ${hM} in ${i(o.source)}`;
      case "refused":
        return `off \xB7 ${xyo(o.why)}`;
      case "not_asked":
        return;
    }
  }
  return;
}
export { yTs, PX, OX, wRr, k2i, kRr, vRr, v2i, E2i, xyo, ERr, T2i, aQe, _Ts, C2i, bTs, STs, R2i };