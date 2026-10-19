// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { j, kp } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { $m, En, E, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { pF } from "B:/~BUN/root/chunk-j704adqd.js";
import { ip } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { op } from "B:/~BUN/root/chunk-htbmes7q.js";
import { spawnSync as C } from "child_process";
function g() {
  return {
    loggedTmuxCcDisable: !1,
    loggedWinSshDisable: !1,
    checkedTmuxMouseHint: !1,
    checkedTmuxFocusHint: !1,
    tmuxControlModeProbed: void 0,
    tmuxMouseOptionProbe: void 0,
    tmuxFocusOptionProbe: void 0,
    gbGateCached: void 0,
    gbGateSource: void 0,
    downsellGateCached: void 0,
    freshInstallCached: void 0,
    crashAutoOff: !1
  };
}
var Nq = g();
function f() {
  if (!a.TMUX) return !1;
  if (a.TERM_PROGRAM !== "iTerm.app") return !1;
  let e = a.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux");
}
function x(e) {
  if (e.tmuxControlModeProbed = f(), e.tmuxControlModeProbed) return;
  if (!a.TMUX) return;
  if (a.TERM_PROGRAM) return;
  let n = pF("tmux");
  if (n === null) return;
  let r;
  try {
    r = C(n, ["display-message", "-p", "#{client_control_mode}"], {
      encoding: "utf8",
      timeout: 2000,
      cwd: void 0,
      env: process.env,
      windowsHide: !0
    });
  } catch {
    return;
  }
  if (r.status !== 0) return;
  e.tmuxControlModeProbed = r.stdout.trim() === "1";
}
function Bpe(e = Nq) {
  if (e.tmuxControlModeProbed === void 0) x(e);
  return e.tmuxControlModeProbed ?? !1;
}
function u() {
  if (I() !== "windows") return !1;
  return Boolean(a.SSH_CONNECTION || a.SSH_CLIENT || a.SSH_TTY);
}
class c {
  latched = !1;
  mode = void 0;
  persisted = !1;
  upsellImpression = void 0;
  latchFromEnv() {
    if (this.latched) return;
    this.latched = !0, this.mode = a.CLAUDE_CODE_TUI_TRIAL === "fullscreen" ? "fullscreen" : void 0, a.unset("CLAUDE_CODE_TUI_TRIAL");
  }
}
var S = new z(() => new c());
function I$n() {
  return S.of(j().host);
}
function Hws() {
  I$n().latchFromEnv();
}
function CIt() {
  let e = I$n();
  return e.latchFromEnv(), e.mode;
}
function j7t() {
  return ue().fullscreenAutoDisabled?.version === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION;
}
function s() {
  return a.CLAUDE_CODE_NO_FLICKER === !1 || a.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN;
}
var RIt = 3;
function d() {
  try {
    if ($m()) return !1;
    let e = ue();
    return e.firstStartVersion !== void 0 && (e.fullscreenUpsellSeenCount ?? 0) < RIt;
  } catch {
    return;
  }
}
function p(e) {
  if (e.freshInstallCached !== void 0) return e.freshInstallCached;
  let n = d();
  if (n !== void 0) e.freshInstallCached = n;
  return n ?? !1;
}
function sd(e = Nq) {
  if (ip() === "local-agent") return !1;
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return !0;
  if (op()) return !1;
  if (s()) return !1;
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff) return !1;
  if (Bpe(e)) {
    if (!e.loggedTmuxCcDisable) e.loggedTmuxCcDisable = !0, t("fullscreen disabled: tmux -CC (iTerm2 integration mode) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override");
    return !1;
  }
  if (u()) {
    if (!e.loggedWinSshDisable) e.loggedWinSshDisable = !0, t("fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override");
    return !1;
  }
  switch (ut().tui ?? CIt()) {
    case "fullscreen":
      return !0;
    case "default":
      return !1;
  }
  if (p(e)) return !0;
  if (T(e)) return !0;
  if (e.gbGateCached === void 0) {
    let n = En("tengu_pewter_brook", !1);
    e.gbGateCached = n.value, e.gbGateSource = n.source;
  }
  return e.gbGateCached;
}
function T(e = Nq) {
  return e.downsellGateCached ??= E("tengu_amber_creek", !1), e.downsellGateCached;
}
function s3e(e = Nq) {
  if (op()) return !1;
  if (s()) return !1;
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff || j7t()) return !1;
  if (u()) return !1;
  if (Bpe(e)) return !1;
  switch (ut().tui) {
    case "fullscreen":
      return !0;
    case "default":
      return !1;
  }
  return !0;
}
function aH(e = Nq) {
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if (op()) return "sr_auto_off";
  if (s()) return "env_off";
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return "env_on";
  if (e.crashAutoOff) return "crash_auto_off";
  if (Bpe(e)) return "tmux_cc_auto_off";
  if (u()) return "win_ssh_auto_off";
  let tui = ut().tui;
  switch (tui ?? CIt()) {
    case "fullscreen":
      return tui === "fullscreen" ? "settings_on" : "upsell_trial_on";
    case "default":
      return "settings_off";
  }
  if (e.freshInstallCached ?? d()) return "fresh_install_on";
  if (e.downsellGateCached ?? E("tengu_amber_creek", !1)) return "downsell_on";
  return e.gbGateCached ?? E("tengu_pewter_brook", !1) ? "gb_on" : "gb_off";
}
function M$n(e) {
  switch (e) {
    case "env_on":
    case "bg_forced_on":
    case "settings_on":
    case "upsell_trial_on":
    case "ant_default":
    case "fresh_install_on":
    case "downsell_on":
    case "gb_on":
      return "fullscreen";
    case "env_off":
    case "sr_auto_off":
    case "crash_auto_off":
    case "tmux_cc_auto_off":
    case "win_ssh_auto_off":
    case "settings_off":
    case "gb_off":
      return "default";
  }
}
function D$n(e) {
  return e === "env_off" || e === "sr_auto_off" || e === "tmux_cc_auto_off" || e === "win_ssh_auto_off";
}
function $ws(e = Nq) {
  return $m() && e.gbGateSource === "fallback";
}
function Uws() {
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return "on";
  if (a.CLAUDE_CODE_NO_FLICKER === !1) return "off";
  return;
}
function rj() {
  if (a.CLAUDE_CODE_DISABLE_MOUSE !== void 0) return a.CLAUDE_CODE_DISABLE_MOUSE ? "off" : "full";
  if (a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== void 0) return a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS ? "scroll" : "full";
  return "full";
}
class _ {
  observed = !1;
  changed = Me();
  subscribe = this.changed.subscribe;
  get hasObserved() {
    return this.observed;
  }
  note() {
    if (this.observed) return;
    this.observed = !0, this.changed.emit();
  }
}
var i = new z(() => new _());
function bgo() {
  i.of(j().host).note();
}
function W7t() {
  return i.of(j().host).hasObserved;
}
function z7t(e) {
  return i.of(j().host).subscribe(e);
}
function dM(e = Nq) {
  return kp() && sd(e);
}
async function Bws(e = Nq) {
  if (!a.TMUX) return null;
  if (!dM(e) || Bpe(e)) return null;
  if (e.checkedTmuxMouseHint) return null;
  e.checkedTmuxMouseHint = !0;
  let n = await o(e, "mouse");
  if (n === null || n === "on") return null;
  return "tmux detected \xB7 scroll with PgUp/PgDn \xB7 or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll";
}
var O = {
  mouse: {
    cacheKey: "tmuxMouseOptionProbe",
    args: ["show", "-Av", "mouse"]
  },
  "focus-events": {
    cacheKey: "tmuxFocusOptionProbe",
    args: ["show", "-gv", "focus-events"]
  }
};
function o(e, n) {
  let {
    cacheKey: cacheKey,
    args: args
  } = O[n];
  return e[cacheKey] ??= lt("tmux", [...args], {
    useCwd: !1,
    timeout: 2000
  }).then(({
    stdout: stdout,
    code: code
  }) => code === 0 ? stdout.trim() : null), e[cacheKey];
}
function jws(e = Nq) {
  if (!a.TMUX || f()) return;
  o(e, "mouse"), o(e, "focus-events");
}
async function Wws(e = Nq) {
  if (!a.TMUX) return null;
  if (Bpe(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = !0;
  let n = await o(e, "focus-events");
  if (n === null || n === "on") return null;
  return "tmux focus-events off \xB7 add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking";
}
export { Nq, Bpe, I$n, Hws, CIt, j7t, RIt, sd, s3e, aH, M$n, D$n, $ws, Uws, rj, bgo, W7t, z7t, dM, Bws, jws, Wws };