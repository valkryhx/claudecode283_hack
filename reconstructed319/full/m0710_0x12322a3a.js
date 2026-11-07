// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  H,
  st,
  rf
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Djt
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  vte,
  itt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Ube,
  jPs,
  eS,
  at,
  Pfe,
  rt,
  cC,
  Vt,
  Rt,
  hn,
  Ybe,
  Fl
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  CDe,
  aPn,
  mi,
  kmr,
  mIt,
  lPn
} from "B:/~BUN/root/chunk-pmr34yc8.js";
import {
  Fi
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  $Q,
  z3t,
  JC,
  zdr,
  Yde,
  C9,
  aA,
  GT,
  Oy,
  lmr
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  sMt
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  p6o
} from "B:/~BUN/root/chunk-hx5a1a0a.js";
import {
  own,
  Otr,
  D3r,
  q6e,
  swn,
  fdi,
  Itr
} from "B:/~BUN/root/chunk-v9az3a6f.js";
import {
  randomUUID as D
} from "crypto";
var V = "later",
  U = "Your claude.ai usage limit has reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.",
  X = "tengu_lantern_wick_resume_by_model",
  L = "Your claude.ai usage is available again before the usage-limit reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.";

function odi(e) {
  return e === U || e === L || M3r() && e.trim() === x().trim()
}
var E = 3,
  O = [60000, 300000],
  Y = 30000,
  J = 90000,
  Z = 1800000,
  ee = 21600000;

function te() {
  return {
    state: {
      phase: "idle"
    },
    consecutiveRearms: 0,
    continuationsSinceHumanPrompt: 0,
    armedAtMs: 0,
    lastArmedResetsAtSeconds: 0,
    lastObservedMs: null,
    takeoverUuids: new Set,
    queuedBeforeArmUuids: new Set,
    handoffInProgress: !1,
    dispatchingTakeoverUuids: new Set,
    pendingContinuationUuid: null,
    activeTurnClaim: null,
    episodeArmOrigin: "dialog",
    sleptThroughReset: !1,
    confirmingMainModel: !1,
    recheckRequestedWhileConfirming: !1,
    armedResetKeys: new Set,
    autoArmDedupeResetKeys: new Set,
    changed: De(),
    events: De(),
    autoContinueKeyPresence: "unscanned",
    storageV5: void 0,
    unsubscribeSettingsChanges: null,
    unknowableRescanDelayMs: 2000,
    unknowableRescanTimer: void 0,
    revocationRescan: "idle",
    revocationRescanGeneration: 0,
    limitsSubscriptionStarted: !1,
    unsubscribeQuotaRejected: null,
    unsubscribeSessionSwitch: null
  }
}
var oe = new W(te);

function i() {
  let e = H().host,
    t = oe.of(e),
    o = zdr.of(e);
  if (!o.provided) o.provide(() => r(t));
  return t
}

function w(e, t, o = 0) {
  if (typeof e !== "number" && typeof e !== "string") return t;
  let n = Number(e);
  if (!Number.isFinite(n) || n < 0) return t;
  return Math.min(Math.max(Math.round(n), o), ee)
}
var ne = 60000;

function Ttr() {
  return T(i())
}

function T(e) {
  return Otr(e.autoContinueKeyPresence)
}

function sdi(e) {
  let t = i();
  if (e === "auto_restore_cancel") return;
  if (!r(t)) return;
  Q(t, "conversation_reset")
}
var ae = 2;
async function h(e, t = ae) {
  try {
    e.autoContinueKeyPresence = await itt("autoContinueAtUsageLimit", e.storageV5)
  } catch (o) {
    e.autoContinueKeyPresence = "unknowable", a(o)
  }
  if (e.autoContinueKeyPresence !== "unknowable") e.revocationRescan = "idle", e.revocationRescanGeneration++;
  if (clearTimeout(e.unknowableRescanTimer), e.autoContinueKeyPresence === "unknowable" && t > 0) e.unknowableRescanTimer = setTimeout((o, n) => {
    h(o, n)
  }, e.unknowableRescanDelayMs, e, t - 1), e.unknowableRescanTimer.unref?.()
}

function Ctr() {
  let e = vte("autoContinueAtUsageLimit")[0]?.source;
  return e === void 0 || e === "userSettings"
}

function XCt(e) {
  return Rt() && hn()?.billingType !== "usage_based" && JC(e) && e.dailyCapPaused !== !0 && fdi()
}

function QOe() {
  return i().state
}

function idi() {
  let e = i();
  return e.state.phase === "armed" && e.episodeArmOrigin === "auto"
}

function N(e) {
  let t = mi();
  if (t.status === "rejected" && t.resetsAt !== void 0) e.armedResetKeys.add(t.resetsAt)
}

function oat(e) {
  return i().armedResetKeys.has(e)
}

function YG() {
  return i().state.phase === "armed"
}

function r(e) {
  return e.state.phase === "armed" || e.state.phase === "stale" || e.activeTurnClaim !== null || e.dispatchingTakeoverUuids.size > 0 || aA().some((t) => A(e, t)) || lmr((t) => A(e, t))
}

function se(e) {
  return Yde(e) && C9(e)
}

function A(e, t) {
  return t.uuid !== void 0 && (t.uuid === e.pendingContinuationUuid || e.takeoverUuids.has(t.uuid))
}

function M3r() {
  return r(i())
}

function sat(e) {
  return y(i(), e)
}

function y(e, t) {
  return t === "armed" || t === "stale" || M(e)
}

function Gqt() {
  return M(i())
}

function M(e) {
  let t = e.pendingContinuationUuid;
  return t !== null && aA().some((o) => o.uuid === t)
}

function Vqt(e) {
  return e !== void 0 && e === i().pendingContinuationUuid
}

function Kqt(e) {
  return i().events.subscribe(e)
}

function i6o(e) {
  return i().changed.subscribe(e)
}

function R(e, t) {
  e.state = t, e.changed.emit()
}

function ue() {
  let e = D3r(),
    t = w(e.jitterMinMs, Y),
    o = Math.max(t, w(e.jitterMaxMs, J));
  return Math.round(t + Math.random() * (o - t))
}

function ie(e, t, o) {
  let n = e * 1000 + ue();
  if (t === null) return n;
  let s = O[t] ?? O.at(-1) ?? 0;
  return Math.max(n, o + s)
}

function a6o(e, t = Date.now(), o = "dialog", n) {
  return q(i(), e, t, o, n)
}

function q(e, t, o, n, s) {
  if (!XCt(t)) return !1;
  if (z(e, s), e.consecutiveRearms = 0, n === "dialog") e.continuationsSinceHumanPrompt = 0;
  e.takeoverUuids.clear(), e.dispatchingTakeoverUuids.clear(), e.queuedBeforeArmUuids.clear();
  for (let u of aA())
    if (se(u) || u.mode === "bash" && C9(u)) u.uuid ??= D(), e.queuedBeforeArmUuids.add(u.uuid);
  return e.armedAtMs = o, g("quota_auto_resume"), l("tengu_quota_auto_resume_offer_armed", {
    origin: f(n)
  }), B(e, t.resetsAt ?? 0, null, o, n), e.events.emit("armed"), !0
}

function l6o(e, t = Date.now(), o) {
  let n = i();
  if (!XCt(e)) return !1;
  if (n.handoffInProgress) return !1;
  if (!T(n) || !Itr()) return !1;
  if (Fl()) return !1;
  let s = e.resetsAt ?? 0;
  if (s * 1000 - t > z3t) return !1;
  if (_e(e.rateLimitType, at())) return !1;
  if (r(n) || n.autoArmDedupeResetKeys.has(s)) return !1;
  if (n.continuationsSinceHumanPrompt >= E) return j(n, s, "continuation_cap"), !1;
  if (!q(n, e, t, "auto", o)) return !1;
  return n.events.emit("auto-armed"), !0
}

function adi(e, t, o = Date.now(), n) {
  try {
    let s = e && t === "completed" ? lPn(o) : null;
    if (s === null) return !1;
    let u = i();
    if (r(u)) return G(u, s, "main_thread"), u.state.phase === "armed" && u.state.resetsAtSeconds === s.resetsAt;
    return l6o(s, o, n)
  } catch (s) {
    return a(s), !1
  }
}

function B(e, t, o, n, s = "dialog") {
  k(e), e.episodeArmOrigin = s, e.lastArmedResetsAtSeconds = t, e.autoArmDedupeResetKeys.add(t), e.armedResetKeys.add(t), N(e), e.activeTurnClaim = null, e.sleptThroughReset = !1, e.lastObservedMs = n;
  let u = ie(t, o, n);
  l("tengu_quota_auto_resume_armed", {
    resets_in_sec: Math.max(0, Math.round(t - n / 1000)),
    rearm: o === null ? 0 : o + 1
  }), R(e, {
    phase: "armed",
    resetsAtSeconds: t,
    fireAtMs: u,
    consecutiveRearms: e.consecutiveRearms
  })
}

function iat() {
  re(i())
}

function Xhe(e) {
  return (...t) => {
    let o = e(...t);
    if (o !== !1) iat();
    return o
  }
}
async function re(e) {
  if (e.state.phase !== "armed") return;
  if (e.confirmingMainModel) {
    e.recheckRequestedWhileConfirming = !0;
    return
  }
  e.confirmingMainModel = !0;
  try {
    for (;;) {
      if (e.recheckRequestedWhileConfirming = !1, Pfe(eS()) !== null) return;
      let t = at(),
        o = e.state,
        n = await mIt(t, void 0, e.storageV5);
      if (e.state.phase !== "armed" || _(e)) return;
      if (e.recheckRequestedWhileConfirming || at() !== t || e.state !== o) continue;
      if (n === null || !Re(n)) return;
      ce(e);
      return
    }
  } catch (t) {
    a(t)
  } finally {
    e.confirmingMainModel = !1
  }
}

function ce(e) {
  K(e, L), l("tengu_quota_auto_resume_fired", {
    rearm: e.consecutiveRearms,
    waited_ms: Math.max(0, Math.round(Date.now() - e.armedAtMs)),
    early: 1
  }), e.lastObservedMs = null, R(e, {
    phase: "idle"
  }), e.events.emit("fired-now")
}

function de(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
      return !0;
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return !1
  }
}

function le(e) {
  switch (e) {
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return !0;
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
      return !1
  }
}

function XG(e) {
  Q(i(), e)
}

function Q(e, t) {
  if (r(e)) N(e);
  if (le(t)) e.autoArmDedupeResetKeys.clear();
  let o = y(e, e.state.phase);
  if (C(e) && e.state.phase === "idle") l("tengu_quota_auto_resume_cancelled", {
    reason: f(t)
  });
  if (b(e, t), o && de(t)) e.events.emit("cancelled")
}
var Rtr = {
  background_handoff: "Automatic continue cancelled \xB7 this session moved to the background, so the task will not resume on its own when the usage limit resets",
  relaunch: "Automatic continue cancelled \xB7 Claude Code relaunched during the wait, so the task will not resume on its own when the usage limit resets (send a prompt then to continue)",
  desktop_handoff: "Automatic continue cancelled \xB7 this session moved to Claude Desktop, so the task will not resume on its own when the usage limit resets (continue it there)",
  cloud_handoff: "Automatic continue cancelled \xB7 sending this session to the cloud, so the task will not resume here on its own when the usage limit resets (continue it in the cloud session)",
  process_exit: "Automatic continue cancelled \xB7 Claude Code exited during the wait, so the task will not resume on its own when the usage limit resets (send a prompt after the reset to continue)"
};

function Atr(e) {
  let t = i();
  if (t.handoffInProgress = !0, !r(t)) return !1;
  let o = y(t, t.state.phase);
  return Q(t, e), o
}

function K6e() {
  i().handoffInProgress = !1
}

function xtr(e, {
  dispatching: t = !1
} = {}) {
  let o = i();
  if (o.continuationsSinceHumanPrompt = 0, !r(o)) return;
  if (F(o), o.takeoverUuids.add(e), t) o.dispatchingTakeoverUuids.add(e);
  o.changed.emit()
}

function k(e, {
  keepIfDrained: t = !1
} = {}) {
  if (e.pendingContinuationUuid === null) return !1;
  let o = e.pendingContinuationUuid,
    n = Oy((s) => s.uuid === o).length > 0;
  if (n || !t) e.pendingContinuationUuid = null, e.changed.emit();
  return n
}

function me(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "setting_off":
    case "manual_submit":
    case "conversation_reset":
    case "killswitch":
    case "rearm_cap":
    case "continuation_cap":
    case "horizon_exceeded":
    case "continuation_dropped":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return !0;
    case "fired":
    case "stale":
      return !1
  }
}

function b(e, t) {
  if (e.state.phase === "idle") return;
  if (me(t)) l("tengu_quota_auto_resume_cancelled", {
    reason: f(t)
  });
  R(e, {
    phase: "idle"
  })
}

function d6o(e, t) {
  let o = i();
  if (o.state.phase !== "armed" || _(o)) return "idle";
  let n = o.lastObservedMs ?? o.state.fireAtMs;
  o.lastObservedMs = e;
  let s = e - n,
    u = w(D3r().graceMs, Z, ne);
  if (s > u && e >= o.state.fireAtMs) o.sleptThroughReset = !0;
  if (t || e < o.state.fireAtMs) return "pending";
  if (o.sleptThroughReset) return o.sleptThroughReset = !1, c("quota_auto_resume", "stale"), l("tengu_quota_auto_resume_stale", {
    late_by_ms: Math.round(e - o.state.fireAtMs)
  }), R(o, {
    phase: "stale"
  }), o.events.emit("stale"), "stale";
  return K(o), l("tengu_quota_auto_resume_fired", {
    rearm: o.state.consecutiveRearms,
    waited_ms: Math.max(0, Math.round(e - o.armedAtMs))
  }), b(o, "fired"), "fired"
}

function x() {
  let e = p6o(X, at());
  if (aPn()) {
    let t = Djt(e);
    if (t === null || /[/@]/.test(t) || $Q.includes(t) || sMt(t) !== t) {
      if (e !== void 0 && e.trim() !== "") c("usage_limit_served_text_rejected", "resume_prompt");
      return U
    }
    if (e !== void 0 && t !== e.trim()) c("usage_limit_served_text_altered", "resume_prompt");
    return t
  }
  return e !== void 0 && e.trim() !== "" ? e : U
}

function K(e, t = x()) {
  k(e), e.continuationsSinceHumanPrompt++;
  let o = D();
  e.pendingContinuationUuid = o, e.activeTurnClaim = null, e.changed.emit(), GT({
    agentId: st(),
    mode: "prompt",
    priority: V,
    value: t,
    uuid: o,
    origin: {
      kind: "auto-continuation"
    },
    isMeta: !0,
    skipSlashCommands: !0,
    workload: Ybe
  })
}

function c6o() {
  return u6o() ? x() : null
}

function u6o() {
  let e = i();
  return e.state.phase === "stale" && !_(e)
}

function ldi(e) {
  let t = i(),
    o = t.pendingContinuationUuid;
  if (o === null || !e.some((n) => n.uuid === o)) return e;
  if (!_(t)) return e;
  return e.filter((n) => n.uuid !== o)
}

function fe(e) {
  if (e.episodeArmOrigin !== "auto" || T(e)) return e.revocationRescan = "idle", !1;
  if (own() === void 0 && e.autoContinueKeyPresence === "unknowable") {
    if (e.revocationRescan === "idle") {
      e.revocationRescan = "pending";
      let t = ++e.revocationRescanGeneration;
      return h(e).finally(() => {
        if (e.revocationRescan === "pending" && t === e.revocationRescanGeneration) e.revocationRescan = "done"
      }), !1
    }
    if (e.revocationRescan === "pending") return !1
  }
  return e.revocationRescan = "idle", !0
}

function _(e) {
  if (!q6e()) return v(e, "killswitch"), !0;
  if (fe(e)) return v(e, "setting_off"), !0;
  return !1
}

function F(e) {
  if (k(e, {
      keepIfDrained: !0
    }), e.state.phase === "stale") l("tengu_quota_auto_resume_stale_resumed", {}), e.lastObservedMs = null, b(e, "stale");
  else if (e.state.phase === "armed") e.lastObservedMs = null, b(e, "manual_submit")
}

function v(e, t) {
  l("tengu_quota_auto_resume_cancelled", {
    reason: f(t)
  }), C(e), R(e, {
    phase: "idle"
  }), e.events.emit(t === "horizon_exceeded" ? "horizon-exceeded" : t === "rearm_cap" || t === "continuation_cap" ? "cap-exhausted" : "disabled")
}

function j(e, t, o) {
  m("quota_auto_resume", o), e.autoArmDedupeResetKeys.add(t), v(e, o)
}

function pe(e, t) {
  return e.episodeArmOrigin === "auto" && t * 1000 - Date.now() > z3t
}

function ddi(e) {
  let t = i();
  for (let p of e.turnUuids) t.dispatchingTakeoverUuids.delete(p);
  if (e.isHumanTakeover) t.continuationsSinceHumanPrompt = 0;
  let o = t.pendingContinuationUuid !== null && e.turnUuids.includes(t.pendingContinuationUuid),
    n = e.turnUuids.some((p) => t.takeoverUuids.has(p)),
    s = y(t, t.state.phase) || o,
    u = e.isHumanTakeover && !n && e.humanCommandUuids.length > 0 && e.humanCommandUuids.every((p) => p !== void 0 && t.queuedBeforeArmUuids.has(p)),
    d = null;
  if (u && !o) return null;
  if (u) d = "continuation";
  else if (e.isHumanTakeover && (n || s)) d = "takeover", F(t);
  else if (o) d = "continuation";
  if (d === null) return null;
  if (t.activeTurnClaim !== null) a(Error("quota auto-resume: a turn claimed the episode while another claim was outstanding"));
  let I = {
    kind: d,
    queried: e.willQuery
  };
  return t.activeTurnClaim = I, t.changed.emit(), I
}

function cdi(e, t) {
  let o = i();
  for (let u of t) o.dispatchingTakeoverUuids.delete(u);
  if (e !== null) {
    if (e !== o.activeTurnClaim) return;
    if (o.activeTurnClaim = null, o.changed.emit(), o.state.phase !== "idle") return;
    if (aA().some((u) => A(o, u))) return;
    if (C(o), e.kind === "continuation" && !e.queried) P(o);
    return
  }
  let n = o.pendingContinuationUuid !== null && t.includes(o.pendingContinuationUuid);
  if ((n || t.some((u) => o.takeoverUuids.has(u))) && o.state.phase === "idle" && o.activeTurnClaim === null && !aA().some((u) => A(o, u))) {
    if (C(o), n) P(o)
  }
}

function P(e) {
  m("quota_auto_resume", "continuation_dropped"), l("tengu_quota_auto_resume_cancelled", {
    reason: f("continuation_dropped")
  }), e.events.emit("continuation-dropped")
}

function C(e) {
  e.consecutiveRearms = 0, e.lastArmedResetsAtSeconds = 0, e.episodeArmOrigin = "dialog", e.revocationRescan = "idle", e.revocationRescanGeneration++, e.takeoverUuids.clear(), e.dispatchingTakeoverUuids.clear(), e.queuedBeforeArmUuids.clear(), e.lastObservedMs = null, e.activeTurnClaim = null;
  let t = k(e);
  return e.changed.emit(), t
}

function Re(e) {
  return e.status !== "rejected" || e.isUsingOverage === !0 || e.overageInUse === !0
}

function G(e, t, o) {
  if (!JC(t) || t.dailyCapPaused === !0 || !swn()) return;
  let n = t.resetsAt ?? 0;
  if (r(e) && qqt(t.rateLimitType, at())) e.autoArmDedupeResetKeys.add(n);
  if (e.state.phase === "armed") {
    if (n * 1000 > e.state.fireAtMs && qqt(t.rateLimitType, at())) S(e, n, null);
    return
  }
  if (M(e)) return;
  if (e.state.phase === "stale") return;
  let s = e.activeTurnClaim;
  if (s === null) return;
  if (o !== "main_thread") return;
  if (s.kind === "takeover") {
    if (e.consecutiveRearms = 0, S(e, qqt(t.rateLimitType, at()) ? n : e.lastArmedResetsAtSeconds, null) && e.episodeArmOrigin === "auto") e.events.emit("taken-over");
    return
  }
  if (e.continuationsSinceHumanPrompt >= E) {
    j(e, n, "rearm_cap");
    return
  }
  let u = e.consecutiveRearms;
  e.consecutiveRearms++, S(e, n, u)
}

function S(e, t, o) {
  if (_(e)) return !1;
  if (pe(e, t)) return v(e, "horizon_exceeded"), !1;
  return B(e, t, o, Date.now(), e.episodeArmOrigin), e.events.emit("rearmed"), !0
}

function _e(e, t) {
  if (e !== "seven_day_opus" && e !== "seven_day_sonnet") return !1;
  if (qqt(e, t)) return !1;
  let o = Pfe(eS());
  if (e === "seven_day_opus" && o === "opus") return !1;
  if (e === "seven_day_sonnet" && o === "sonnet") return !1;
  return !0
}

function qqt(e, t) {
  switch (e) {
    case "five_hour":
    case "seven_day":
    case "overage":
      return !0;
    case "seven_day_opus":
      return Ube(rt(t));
    case "seven_day_sonnet":
      return jPs(rt(t));
    case "seven_day_overage_included": {
      let o = cC(Vt(t));
      if (o === null) return !1;
      let n = o.toLowerCase();
      return CDe().some((s) => s.toLowerCase() === n)
    }
    case void 0:
      return !1
  }
  return !1
}

function Ptr(e, t) {
  return qqt(e.rateLimitType, t) || rt(e.model, {
    identity: !0
  }) === rt(t, {
    identity: !0
  })
}

function f6o(e) {
  z(i(), e)
}

function z(e, t) {
  if (e.limitsSubscriptionStarted) return;
  e.limitsSubscriptionStarted = !0, e.storageV5 = t, e.unsubscribeQuotaRejected = kmr((o, n) => G(e, o, n)), h(e), e.unsubscribeSettingsChanges = Fi.subscribe(() => {
    h(e)
  }), e.unsubscribeSessionSwitch = rf((o, n) => {
    if ($Be(n)) Q(e, "conversation_reset"), e.handoffInProgress = !1
  })
}

function $Be(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "remote_attach":
      return !0;
    case "fork":
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return !1
  }
}
export {
  odi,
  Ttr,
  sdi,
  Ctr,
  XCt,
  QOe,
  idi,
  oat,
  YG,
  M3r,
  sat,
  Gqt,
  Vqt,
  Kqt,
  i6o,
  a6o,
  l6o,
  adi,
  iat,
  Xhe,
  XG,
  Rtr,
  Atr,
  K6e,
  xtr,
  d6o,
  c6o,
  u6o,
  ldi,
  ddi,
  cdi,
  qqt,
  Ptr,
  f6o,
  $Be
};
