// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, kp } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { bt, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Ce, ue, Idn } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { szo } from "B:/~BUN/root/chunk-xf0m410v.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { yo } from "B:/~BUN/root/chunk-9kme2ye7.js";
import { am as isGone } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { Nq, j7t, sd, aH, M$n } from "B:/~BUN/root/chunk-j2ppas05.js";
import { ys } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { hostname as v } from "os";
var w = 2,
  D = 1e4,
  O = 600000,
  R = 2592000000;
function S() {
  try {
    return v();
  } catch {
    return "unknown";
  }
}
function P(now) {
  return {
    now: now,
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION,
    host: S(),
    platform: I(),
    ownPid: process.pid,
    isGone: isGone
  };
}
function _(e, n) {
  let o = n.stickyStrikes ?? w,
    s = {
      ...e.fullscreenBootPending
    },
    fullscreenAutoDisabled = e.fullscreenAutoDisabled,
    d = e.fullscreenBootStrikes?.version === n.version ? e.fullscreenBootStrikes.count : 0;
  if (fullscreenAutoDisabled && fullscreenAutoDisabled.version !== n.version) fullscreenAutoDisabled = void 0;
  let newStrikes = 0,
    f = !1,
    POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  for (let [m, p] of Object.entries(s)) {
    let k = Number(m);
    if (!Number.isInteger(k) || k < 1 || typeof p !== "object" || !p) {
      delete s[m];
      continue;
    }
    let g = Math.max(0, n.now - p.startedAt);
    if (p.host !== n.host || p.platform !== n.platform) {
      if (g > R) delete s[m];
      continue;
    }
    if (p.died !== void 0 || k === n.ownPid || n.isGone(k)) {
      if (delete s[m], p.version === n.version) newStrikes += 1, POSITIVE_INFINITY = Math.min(POSITIVE_INFINITY, g);
    } else if (g > O) delete s[m];else f = !0;
  }
  let decision = {
    kind: "none"
  };
  if (fullscreenAutoDisabled) decision = {
    kind: "disabled"
  };else if (newStrikes > 0) {
    d += newStrikes;
    let pendingAgeMs = Number.isFinite(POSITIVE_INFINITY) ? POSITIVE_INFINITY : 0;
    if (d >= o) fullscreenAutoDisabled = {
      version: n.version,
      at: n.now,
      strikes: d
    }, decision = {
      kind: "tripped",
      strikes: d,
      newStrikes: newStrikes,
      pendingAgeMs: pendingAgeMs
    }, d = 0;else decision = {
      kind: "strike",
      strikes: d,
      newStrikes: newStrikes,
      pendingAgeMs: pendingAgeMs
    };
  } else if (f) decision = {
    kind: "pending_alive"
  };
  return {
    next: {
      fullscreenBootPending: Object.keys(s).length > 0 ? s : void 0,
      fullscreenBootStrikes: d > 0 ? {
        count: d,
        version: n.version
      } : void 0,
      fullscreenAutoDisabled: fullscreenAutoDisabled
    },
    decision: decision
  };
}
function B(e, n) {
  let o = s => Object.keys(s.fullscreenBootPending ?? {}).sort().join(",");
  return o(e) !== o(n) || (e.fullscreenBootStrikes?.count ?? 0) !== (n.fullscreenBootStrikes?.count ?? 0) || e.fullscreenBootStrikes?.version !== n.fullscreenBootStrikes?.version || e.fullscreenAutoDisabled?.version !== n.fullscreenAutoDisabled?.version || e.fullscreenAutoDisabled?.at !== n.fullscreenAutoDisabled?.at;
}
function BEn() {
  let e = ue();
  return e.fullscreenAutoDisabled?.version === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION || e.fullscreenBootStrikes?.version === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION && e.fullscreenBootStrikes.count > 0;
}
var x = `Claude Code's fullscreen renderer didn't finish starting last time on this machine, so this launch is using the classic renderer. It will try fullscreen again next launch; /tui default keeps the classic renderer.
`,
  T = `Claude Code's fullscreen renderer has repeatedly failed to start on this machine, so it has been turned off here. Run /tui fullscreen to try it again (this also resets after an update).
`;
function _Zo(e) {
  let n = e?.state ?? Nq,
    o = aH(n);
  if (o === "env_on" || o === "bg_forced_on" || a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) return {
    kind: "none"
  };
  let s = P(e?.now ?? Date.now()),
    u = ue(),
    {
      next: next,
      decision: decision_2
    } = _(u, s);
  if (B(u, next)) Ce(f => {
    let y = _(f, s).next;
    return B(f, y) ? {
      ...f,
      ...y
    } : f;
  }, e?.storageV5);
  if (decision_2.kind === "strike" || decision_2.kind === "tripped" || decision_2.kind === "disabled") {
    n.crashAutoOff = !0;
    let overrides_fullscreen = M$n(o) === "fullscreen";
    if (decision_2.kind !== "disabled") {
      if (i("tengu_fullscreen_crash_auto_off", {
        sticky: decision_2.kind === "tripped",
        strikes: decision_2.strikes,
        new_strikes: decision_2.newStrikes,
        pending_age_ms: decision_2.pendingAgeMs,
        would_be_entry_path: c(o),
        overrides_fullscreen: overrides_fullscreen
      }), overrides_fullscreen) process.stderr.write(decision_2.kind === "tripped" ? T : x);
    }
    t(`fullscreen disabled: a previous fullscreen launch on this machine died before it was healthy (${decision_2.kind}) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override`);
  } else if (decision_2.kind !== "none") t(`fullscreen boot canary: ${decision_2.kind}`);
  return decision_2;
}
function cir(e) {
  return Ce(n => n.fullscreenAutoDisabled === void 0 && n.fullscreenBootStrikes === void 0 ? n : {
    ...n,
    fullscreenAutoDisabled: void 0,
    fullscreenBootStrikes: void 0
  }, e);
}
var F = new Set(["settings_on", "upsell_trial_on", "ant_default", "fresh_install_on", "downsell_on", "gb_on"]);
class C {
  canary = {
    status: "idle"
  };
  recordMaybeOnDisk = void 0;
  exitHook = void 0;
  retire() {
    if (this.canary.status === "armed") {
      if (this.canary.cleanup(), this.canary.timer !== void 0) clearTimeout(this.canary.timer);
    }
    if (this.canary = {
      status: "idle"
    }, this.recordMaybeOnDisk = void 0, this.exitHook !== void 0) process.off("exit", this.exitHook), this.exitHook = void 0;
  }
}
var M = new z(() => new C());
function b() {
  return M.of(j().host);
}
function E(e, n, o) {
  let s = e.fullscreenBootPending?.[String(n)] !== void 0;
  if (!s && !(o && e.fullscreenBootStrikes)) return e;
  let fullscreenBootPending = e.fullscreenBootPending;
  if (s && fullscreenBootPending) {
    let {
      [String(n)]: d,
      ...r
    } = fullscreenBootPending;
    fullscreenBootPending = Object.keys(r).length > 0 ? r : void 0;
  }
  return {
    ...e,
    fullscreenBootPending: fullscreenBootPending,
    fullscreenBootStrikes: o ? void 0 : e.fullscreenBootStrikes
  };
}
function N(e) {
  if (e.exitHook !== void 0) return;
  e.exitHook = () => {
    if (e.recordMaybeOnDisk !== void 0 && ys()) {
      let recordMaybeOnDisk = e.recordMaybeOnDisk;
      Idn(o => E(o, recordMaybeOnDisk, !1));
    }
  }, process.on("exit", e.exitHook);
}
async function bZo(e) {
  let n = e?.state ?? Nq,
    o = b();
  if (o.canary.status !== "idle") return o.canary.status === "armed";
  if (!kp() || a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) return !1;
  if (!n.crashAutoOff && j7t() && F.has(aH(n))) n.crashAutoOff = !0, t("fullscreen disabled: turned off on this machine after repeated failed starts (recorded sticky auto-disable, honoured at REPL mount) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override");
  if (!sd(n)) return !1;
  if (!F.has(aH(n))) return !1;
  let pid = process.pid,
    u = {
      startedAt: Date.now(),
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      host: S(),
      platform: I()
    },
    cleanup = bt(() => A(o, o.canary.status === "armed" && o.canary.firstFrameAt !== void 0 && (process.exitCode === void 0 || process.exitCode === 0) && !szo() ? "healthy" : "withdrawn"));
  N(o), o.canary = {
    status: "armed",
    pid: pid,
    cleanup: cleanup,
    onHealthy: e?.onHealthy,
    healthyAfterMs: e?.healthyAfterMs ?? D,
    firstFrameAt: void 0,
    timer: void 0,
    storageV5: e?.storageV5
  }, o.recordMaybeOnDisk = pid, yo("fullscreen_canary_arm_start");
  try {
    await Ce(r => ({
      ...r,
      fullscreenBootPending: {
        ...r.fullscreenBootPending,
        [String(pid)]: u
      }
    }), e?.storageV5);
  } catch (error) {
    l(error);
  } finally {
    yo("fullscreen_canary_armed");
  }
  return o.canary.status === "armed";
}
function SZo(e = Date.now()) {
  let n = b();
  if (n.canary.status !== "armed" || n.canary.firstFrameAt !== void 0) return;
  n.canary.firstFrameAt = e, n.canary.timer = setTimeout(o => {
    A(o, "healthy").catch(l);
  }, n.canary.healthyAfterMs, n), n.canary.timer.unref?.();
}
async function A(e, n) {
  if (e.canary.status !== "armed") return;
  let {
    pid: pid_2,
    cleanup: cleanup_2,
    timer: timer,
    onHealthy: onHealthy,
    storageV5: storageV5
  } = e.canary;
  if (e.canary = {
    status: "settled"
  }, cleanup_2(), timer !== void 0) clearTimeout(timer);
  if (await Ce(f => E(f, pid_2, n === "healthy"), storageV5), e.recordMaybeOnDisk === pid_2) e.recordMaybeOnDisk = void 0;
  if (t(`fullscreen boot canary: ${n}`), n === "healthy" && onHealthy) try {
    await onHealthy();
  } catch (error) {
    l(error);
  }
}
async function jEn() {
  let e = b();
  if (e.canary.status !== "armed") return !1;
  let {
    pid: pid_3,
    cleanup: cleanup_3,
    timer: timer_2,
    storageV5: storageV5_2
  } = e.canary;
  if (e.canary = {
    status: "settled"
  }, cleanup_3(), timer_2 !== void 0) clearTimeout(timer_2);
  if (e.recordMaybeOnDisk === pid_3) e.recordMaybeOnDisk = void 0;
  let d = !1;
  return await Ce(r => {
    let f = r.fullscreenBootPending?.[String(pid_3)];
    if (f === void 0 || f.died !== void 0) return r;
    return d = !0, {
      ...r,
      fullscreenBootPending: {
        ...r.fullscreenBootPending,
        [String(pid_3)]: {
          ...f,
          died: "render_error"
        }
      }
    };
  }, storageV5_2), t("fullscreen boot canary: failure recorded"), d;
}
export { BEn, _Zo, cir, bZo, SZo, jEn };