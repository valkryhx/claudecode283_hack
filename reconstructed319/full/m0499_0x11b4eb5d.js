// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  H,
  Ml
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Oh,
  pn,
  v,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  wN
} from "B:/~BUN/root/chunk-83p1z1q5.js";
import {
  yf
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  yt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Rm
} from "B:/~BUN/root/chunk-amar4116.js";
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
var x9 = C();

function a() {
  if (!i.TMUX) return !1;
  if (i.TERM_PROGRAM !== "iTerm.app") return !1;
  let e = i.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux")
}

function g(e) {
  if (e.tmuxControlModeProbed = a(), e.tmuxControlModeProbed) return;
  if (!i.TMUX) return;
  if (i.TERM_PROGRAM) return;
  let n = wN("tmux");
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

function qEe(e = x9) {
  if (e.tmuxControlModeProbed === void 0) g(e);
  return e.tmuxControlModeProbed ?? !1
}

function u() {
  if (x() !== "windows") return !1;
  return Boolean(i.SSH_CONNECTION || i.SSH_CLIENT || i.SSH_TTY)
}
class c {
  latched = !1;
  mode = void 0;
  persisted = !1;
  upsellImpression = void 0;
  latchFromEnv() {
    if (this.latched) return;
    this.latched = !0, this.mode = i.CLAUDE_CODE_TUI_TRIAL === "fullscreen" ? "fullscreen" : void 0, i.unset("CLAUDE_CODE_TUI_TRIAL")
  }
}
var S = new W(() => new c);

function Ehr() {
  return S.of(H().host)
}

function yAi() {
  Ehr().latchFromEnv()
}

function NXt() {
  let e = Ehr();
  return e.latchFromEnv(), e.mode
}

function FPn() {
  return fe().fullscreenAutoDisabled?.version === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION
}

function s() {
  return i.CLAUDE_CODE_NO_FLICKER === !1 || i.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN
}
var FXt = 3;

function d() {
  try {
    if (Oh()) return !1;
    let e = fe();
    return e.firstStartVersion !== void 0 && (e.fullscreenUpsellSeenCount ?? 0) < FXt
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

function Kd(e = x9) {
  if (yf() === "local-agent") return !1;
  if (i.CLAUDE_CODE_SESSION_KIND === "bg") return !0;
  if (Rm()) return !1;
  if (s()) return !1;
  if (i.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff) return !1;
  if (qEe(e)) {
    if (!e.loggedTmuxCcDisable) e.loggedTmuxCcDisable = !0, t("fullscreen disabled: tmux -CC (iTerm2 integration mode) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override");
    return !1
  }
  if (u()) {
    if (!e.loggedWinSshDisable) e.loggedWinSshDisable = !0, t("fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override");
    return !1
  }
  switch (yt().tui ?? NXt()) {
    case "fullscreen":
      return !0;
    case "default":
      return !1
  }
  if (p(e)) return !0;
  if (T(e)) return !0;
  if (e.gbGateCached === void 0) {
    let n = pn("tengu_pewter_brook", !1);
    e.gbGateCached = n.value, e.gbGateSource = n.source
  }
  return e.gbGateCached
}

function T(e = x9) {
  return e.downsellGateCached ??= v("tengu_amber_creek", !1), e.downsellGateCached
}

function N9e(e = x9) {
  if (Rm()) return !1;
  if (s()) return !1;
  if (i.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff || FPn()) return !1;
  if (u()) return !1;
  if (qEe(e)) return !1;
  switch (yt().tui) {
    case "fullscreen":
      return !0;
    case "default":
      return !1
  }
  return !0
}

function TW(e = x9) {
  if (i.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if (Rm()) return "sr_auto_off";
  if (s()) return "env_off";
  if (i.CLAUDE_CODE_NO_FLICKER === !0) return "env_on";
  if (e.crashAutoOff) return "crash_auto_off";
  if (qEe(e)) return "tmux_cc_auto_off";
  if (u()) return "win_ssh_auto_off";
  let n = yt().tui;
  switch (n ?? NXt()) {
    case "fullscreen":
      return n === "fullscreen" ? "settings_on" : "upsell_trial_on";
    case "default":
      return "settings_off"
  }
  if (e.freshInstallCached ?? d()) return "fresh_install_on";
  if (e.downsellGateCached ?? v("tengu_amber_creek", !1)) return "downsell_on";
  return e.gbGateCached ?? v("tengu_pewter_brook", !1) ? "gb_on" : "gb_off"
}

function Thr(e) {
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

function Chr(e) {
  return e === "env_off" || e === "sr_auto_off" || e === "tmux_cc_auto_off" || e === "win_ssh_auto_off"
}

function _Ai(e = x9) {
  return Oh() && e.gbGateSource === "fallback"
}

function bAi() {
  if (i.CLAUDE_CODE_NO_FLICKER === !0) return "on";
  if (i.CLAUDE_CODE_NO_FLICKER === !1) return "off";
  return
}

function HP() {
  if (i.CLAUDE_CODE_DISABLE_MOUSE !== void 0) return i.CLAUDE_CODE_DISABLE_MOUSE ? "off" : "full";
  if (i.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== void 0) return i.CLAUDE_CODE_DISABLE_MOUSE_CLICKS ? "scroll" : "full";
  return "full"
}
class _ {
  observed = !1;
  changed = De();
  subscribe = this.changed.subscribe;
  get hasObserved() {
    return this.observed
  }
  note() {
    if (this.observed) return;
    this.observed = !0, this.changed.emit()
  }
}
var l = new W(() => new _);

function Hls() {
  l.of(H().host).note()
}

function F9e() {
  return l.of(H().host).hasObserved
}

function H9e(e) {
  return l.of(H().host).subscribe(e)
}

function SF(e = x9) {
  return Ml() && Kd(e)
}
async function SAi(e = x9) {
  if (!i.TMUX) return null;
  if (!SF(e) || qEe(e)) return null;
  if (e.checkedTmuxMouseHint) return null;
  e.checkedTmuxMouseHint = !0;
  let n = await o(e, "mouse");
  if (n === null || n === "on") return null;
  return "tmux detected \xB7 scroll with PgUp/PgDn \xB7 or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll"
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
    cacheKey: r,
    args: m
  } = O[n];
  return e[r] ??= ut("tmux", [...m], {
    useCwd: !1,
    timeout: 2000
  }).then(({
    stdout: b,
    code: E
  }) => E === 0 ? b.trim() : null), e[r]
}

function wAi(e = x9) {
  if (!i.TMUX || a()) return;
  o(e, "mouse"), o(e, "focus-events")
}
async function kAi(e = x9) {
  if (!i.TMUX) return null;
  if (qEe(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = !0;
  let n = await o(e, "focus-events");
  if (n === null || n === "on") return null;
  return "tmux focus-events off \xB7 add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking"
}
export {
  x9,
  qEe,
  Ehr,
  yAi,
  NXt,
  FPn,
  FXt,
  Kd,
  N9e,
  TW,
  Thr,
  Chr,
  _Ai,
  bAi,
  HP,
  Hls,
  F9e,
  H9e,
  SF,
  SAi,
  wAi,
  kAi
};
