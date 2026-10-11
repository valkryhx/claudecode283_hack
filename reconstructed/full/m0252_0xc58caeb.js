// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  q,
  j,
  yu
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  cC,
  ia,
  x,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  tt
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  Q0
} from "B:/~BUN/root/chunk-e7p62566.js";
import {
  Ld
} from "B:/~BUN/root/chunk-snmb1kqg.js";
import {
  Je
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  n_
} from "B:/~BUN/root/chunk-aw2zngte.js";
import {
  spawnSync as h
} from "child_process";

function C() {
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
  }
}
var hB = C();

function f() {
  if (!a.TMUX) return !1;
  if (a.TERM_PROGRAM !== "iTerm.app") return !1;
  let e = a.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux")
}

function g(e) {
  if (e.tmuxControlModeProbed = f(), e.tmuxControlModeProbed) return;
  if (!a.TMUX) return;
  if (a.TERM_PROGRAM) return;
  let n = Q0("tmux");
  if (n === null) return;
  let r;
  try {
    r = h(n, ["display-message", "-p", "#{client_control_mode}"], {
      encoding: "utf8",
      timeout: 2000,
      cwd: void 0,
      env: process.env,
      windowsHide: !0
    })
  } catch {
    return
  }
  if (r.status !== 0) return;
  e.tmuxControlModeProbed = r.stdout.trim() === "1"
}

function eee(e = hB) {
  if (e.tmuxControlModeProbed === void 0) g(e);
  return e.tmuxControlModeProbed ?? !1
}

function u() {
  if (O() !== "windows") return !1;
  return Boolean(a.SSH_CONNECTION || a.SSH_CLIENT || a.SSH_TTY)
}
class c {
  latched = !1;
  mode = void 0;
  persisted = !1;
  upsellImpression = void 0;
  latchFromEnv() {
    if (this.latched) return;
    this.latched = !0, this.mode = a.CLAUDE_CODE_TUI_TRIAL === "fullscreen" ? "fullscreen" : void 0, a.unset("CLAUDE_CODE_TUI_TRIAL")
  }
}
var S = new q(() => new c);

function jtn() {
  return S.of(j().host)
}

function J_o() {
  jtn().latchFromEnv()
}

function Dst() {
  let e = jtn();
  return e.latchFromEnv(), e.mode
}

function YPt() {
  return le().fullscreenAutoDisabled?.version === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION
}

function s() {
  return a.CLAUDE_CODE_NO_FLICKER === !1 || a.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN
}
var Lst = 3;

function d() {
  try {
    if (cC()) return !1;
    let e = le();
    return e.firstStartVersion !== void 0 && (e.fullscreenUpsellSeenCount ?? 0) < Lst
  } catch {
    return
  }
}

function p(e) {
  if (e.freshInstallCached !== void 0) return e.freshInstallCached;
  let n = d();
  if (n !== void 0) e.freshInstallCached = n;
  return n ?? !1
}

function Tl(e = hB) {
  if (Ld() === "local-agent") return !1;
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return !0;
  if (n_()) return !1;
  if (s()) return !1;
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff) return !1;
  if (eee(e)) {
    if (!e.loggedTmuxCcDisable) e.loggedTmuxCcDisable = !0, t("fullscreen disabled: tmux -CC (iTerm2 integration mode) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override");
    return !1
  }
  if (u()) {
    if (!e.loggedWinSshDisable) e.loggedWinSshDisable = !0, t("fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override");
    return !1
  }
  switch (Je().tui ?? Dst()) {
    case "fullscreen":
      return !0;
    case "default":
      return !1
  }
  if (p(e)) return !0;
  if (T(e)) return !0;
  if (e.gbGateCached === void 0) {
    let n = ia("tengu_pewter_brook", !1);
    e.gbGateCached = n.value, e.gbGateSource = n.source
  }
  return e.gbGateCached
}

function T(e = hB) {
  return e.downsellGateCached ??= x("tengu_amber_creek", !1), e.downsellGateCached
}

function aKe(e = hB) {
  if (n_()) return !1;
  if (s()) return !1;
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff || YPt()) return !1;
  if (u()) return !1;
  if (eee(e)) return !1;
  switch (Je().tui) {
    case "fullscreen":
      return !0;
    case "default":
      return !1
  }
  return !0
}

function UM(e = hB) {
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if (n_()) return "sr_auto_off";
  if (s()) return "env_off";
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return "env_on";
  if (e.crashAutoOff) return "crash_auto_off";
  if (eee(e)) return "tmux_cc_auto_off";
  if (u()) return "win_ssh_auto_off";
  let n = Je().tui;
  switch (n ?? Dst()) {
    case "fullscreen":
      return n === "fullscreen" ? "settings_on" : "upsell_trial_on";
    case "default":
      return "settings_off"
  }
  if (e.freshInstallCached ?? d()) return "fresh_install_on";
  if (e.downsellGateCached ?? x("tengu_amber_creek", !1)) return "downsell_on";
  return e.gbGateCached ?? x("tengu_pewter_brook", !1) ? "gb_on" : "gb_off"
}

function Wtn(e) {
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
      return "default"
  }
}

function ztn(e) {
  return e === "env_off" || e === "sr_auto_off" || e === "tmux_cc_auto_off" || e === "win_ssh_auto_off"
}

function Q_o(e = hB) {
  return cC() && e.gbGateSource === "fallback"
}

function Z_o() {
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return "on";
  if (a.CLAUDE_CODE_NO_FLICKER === !1) return "off";
  return
}

function HL() {
  if (a.CLAUDE_CODE_DISABLE_MOUSE !== void 0) return a.CLAUDE_CODE_DISABLE_MOUSE ? "off" : "full";
  if (a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== void 0) return a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS ? "scroll" : "full";
  return "full"
}
class _ {
  observed = !1;
  changed = Me();
  subscribe = this.changed.subscribe;
  get hasObserved() {
    return this.observed
  }
  note() {
    if (this.observed) return;
    this.observed = !0, this.changed.emit()
  }
}
var i = new q(() => new _);

function LEr() {
  i.of(j().host).note()
}

function XPt() {
  return i.of(j().host).hasObserved
}

function JPt(e) {
  return i.of(j().host).subscribe(e)
}

function SR(e = hB) {
  return yu() && Tl(e)
}
async function ebo(e = hB) {
  if (!a.TMUX) return null;
  if (!SR(e) || eee(e)) return null;
  if (e.checkedTmuxMouseHint) return null;
  e.checkedTmuxMouseHint = !0;
  let n = await o(e, "mouse");
  if (n === null || n === "on") return null;
  return "tmux detected \xB7 scroll with PgUp/PgDn \xB7 or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll"
}
var D = {
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
    cacheKey: r,
    args: m
  } = D[n];
  return e[r] ??= tt("tmux", [...m], {
    useCwd: !1,
    timeout: 2000
  }).then(({
    stdout: b,
    code: E
  }) => E === 0 ? b.trim() : null), e[r]
}

function tbo(e = hB) {
  if (!a.TMUX || f()) return;
  o(e, "mouse"), o(e, "focus-events")
}
async function nbo(e = hB) {
  if (!a.TMUX) return null;
  if (eee(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = !0;
  let n = await o(e, "focus-events");
  if (n === null || n === "on") return null;
  return "tmux focus-events off \xB7 add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking"
}
export {
  hB,
  eee,
  jtn,
  J_o,
  Dst,
  YPt,
  Lst,
  Tl,
  aKe,
  UM,
  Wtn,
  ztn,
  Q_o,
  Z_o,
  HL,
  LEr,
  XPt,
  JPt,
  SR,
  ebo,
  tbo,
  nbo
};
