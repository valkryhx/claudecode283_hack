// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ze } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { mge, aMe, Jl, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { bt, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { tF, X$r } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { nn } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { tE } from "B:/~BUN/root/chunk-8z3a373v.js";
import { me, Bm } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Ki } from "B:/~BUN/root/chunk-19m6yp46.js";
import { _mo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { ga } from "B:/~BUN/root/chunk-vqar0j99.js";
import { ph } from "B:/~BUN/root/chunk-pwz0pnkt.js";
function Xkt() {
  return E("tengu_harbor_kite_mode_emit", !0);
}
function O() {
  switch (I().decidedBy) {
    case "policySettings":
      return "managed-setting";
    case "repoSettings":
      return "repo-setting";
    case "invalidSetting":
      return "invalid-setting";
    case "flagSettings":
    case "userSettings":
    case void 0:
      return "explicit-setting";
  }
}
var f = {
    accept: 0,
    hold: 1,
    refuse: 2
  },
  Q = 100,
  P = new Set(tE);
function Sqt(e) {
  if (e !== null) ga().inbound.shuttingDown = !1, x(), ga().inbound.modeAtUnwire = void 0;else {
    let getCurrentMode = ga().inbound.getCurrentMode;
    if (getCurrentMode !== null) try {
      ga().inbound.modeAtUnwire = getCurrentMode();
    } catch {
      ga().inbound.modeAtUnwire = void 0;
    }
  }
  if (ga().inbound.getCurrentMode = e, e !== null) eNe("mode-changed");
}
function wqt(e) {
  ga().inbound.onPeerHeld = e;
}
function z5r(e) {
  ga().inbound.sendPeerReceipt = e;
}
function m7o(origin, n) {
  ga().inbound.sendPeerReceipt?.({
    mode: "prompt",
    agentId: Ze(),
    value: "",
    origin: origin
  }, n);
}
function vqt(e) {
  let inbound = ga().inbound;
  if (inbound.publishAvailability = e, inbound.unsubscribeAvailabilityRefresh?.(), inbound.unsubscribeAvailabilityRefresh = null, e) Jkt(), inbound.unsubscribeAvailabilityRefresh = Jl(Jkt);
}
function Jkt() {
  ga().inbound.publishAvailability?.(eEt() === void 0);
}
function G5r(e) {
  ga().inbound.recordCorrespondent = e;
}
var F = 750;
function x() {
  if (ga().inbound.shutdownSettleHandle === null) ga().inbound.shutdownSettleHandle = bt(kqt);
}
async function kqt() {
  let inbound_2 = ga().inbound;
  if (inbound_2.shutdownSettleHandle?.(), inbound_2.shutdownSettleHandle = null, inbound_2.shuttingDown = !0, inbound_2.held.length === 0) return;
  let n = inbound_2.held.splice(0, inbound_2.held.length);
  t(`[cross-session-inbound] shutdown: settling ${n.length} still-held peer message(s) as expired`);
  let o = [];
  for (let s of n) o.push(inbound_2.sendPeerReceipt?.(s, "expired")), inbound_2.onPeerHoldDropped?.(s, "expired");
  await Promise.race([Promise.allSettled(o), Y(F, void 0, {
    unref: !0
  })]);
}
function V5r(e) {
  let {
    inbound: inbound_3
  } = ga();
  return inbound_3.held.includes(e) ? inbound_3.announced.get(e) : void 0;
}
function Eqt(e) {
  ga().inbound.onPeerHoldDropped = e;
}
function Tqt(e) {
  ga().inbound.onPeerHoldReleased = e;
}
function krt() {
  return I().value;
}
function I() {
  let value, decidedBy;
  for (let o of ["policySettings", "flagSettings", "userSettings"]) {
    if (!nn(o)) continue;
    let s = me(o)?.crossSessionInbound;
    if (s !== void 0) {
      value = s, decidedBy = o;
      break;
    }
  }
  for (let o of ["localSettings", "projectSettings"]) {
    if (!nn(o)) continue;
    let s = me(o)?.crossSessionInbound;
    if (s === void 0) continue;
    if (f[s] > f[value ?? "accept"]) value = s, decidedBy = "repoSettings";else if (s !== "accept" && value !== void 0 && f[s] === f[value] && decidedBy !== "policySettings") decidedBy = "repoSettings";
  }
  if (f[value ?? "accept"] < f.hold && N()) value = "hold", decidedBy = "invalidSetting";
  return {
    value: value,
    decidedBy: decidedBy
  };
}
function N() {
  return Bm().errors.some(item => item.path === X$r && item.severity === "warning" && !item.statusOnly);
}
function h(e) {
  switch (e) {
    case "accept":
      return {
        policy: "accept"
      };
    case "hold":
      return {
        policy: "hold",
        holdCause: O()
      };
    case "refuse":
      return {
        policy: "refuse",
        refuseCause: "opt-out"
      };
  }
}
function w() {
  return Ki() ? void 0 : {
    policy: "refuse",
    refuseCause: "kill-switch"
  };
}
function H() {
  let e = w();
  if (e) return e;
  let n = krt();
  if (n !== void 0) return h(n);
  let o = v();
  if (o === null) return {
    policy: "hold",
    holdCause: "mode-unknown"
  };
  if (!P.has(o.mode)) return t(`[cross-session-inbound] unrecognized permission mode '${o.mode}' (fail-closed \u2192 hold)`), {
    policy: "hold",
    holdCause: "mode-unknown"
  };
  return C(o) ? {
    policy: "hold",
    holdCause: "bypass-default"
  } : {
    policy: "accept"
  };
}
function S(e) {
  let n = w();
  if (n) return n;
  return k(e, !1);
}
function _(e) {
  return k(e, !0);
}
function k(e, n) {
  let o = krt();
  if (o !== void 0) return h(o);
  if (e?.selfSent) return {
    policy: "accept"
  };
  let s = v();
  if (s === null || !P.has(s.mode)) {
    if (s !== null) t(`[cross-session-inbound] unrecognized permission mode '${s.mode}' (fail-closed \u2192 hold)`);
    return {
      policy: "hold",
      holdCause: "mode-unknown"
    };
  }
  let i = Qkt(s),
    a = n || Xkt() ? e?.fromMode : void 0;
  if (a !== void 0) return a === i ? {
    policy: "accept"
  } : {
    policy: "hold",
    holdCause: "mode-mismatch"
  };
  return i === "bypass" ? {
    policy: "hold",
    holdCause: "no-mode-asserted"
  } : {
    policy: "accept"
  };
}
function C(e) {
  return e.mode === "bypassPermissions" || tF(e.mode, e.isBypassPermissionsModeAvailable);
}
function Qkt(e) {
  return C(e) ? "bypass" : "prompting";
}
function QLe() {
  return H().policy;
}
function q5r(e) {
  return S(e).policy;
}
function v() {
  let getCurrentMode_2 = ga().inbound.getCurrentMode;
  if (getCurrentMode_2 === null) return t("[cross-session-inbound] permission-mode getter not wired (fail-closed \u2192 hold)"), null;
  try {
    return getCurrentMode_2();
  } catch (error) {
    return t(`[cross-session-inbound] mode getter threw (${d(error)}; fail-closed \u2192 hold)`), null;
  }
}
function K5r() {
  if (krt() !== void 0) return !1;
  let e = v();
  if (e === null || !P.has(e.mode)) return !1;
  return C(e);
}
function Cqt(e) {
  return R(e, S(b(e)));
}
function b(e) {
  let n = e.origin;
  if (!n || n.kind !== "peer") return;
  return {
    fromMode: n.fromMode,
    selfSent: n.selfSent
  };
}
function D(e) {
  let n;
  if (e.priority === "later") {
    let {
      priority: priority,
      ...s
    } = e;
    n = _mo(s, {
      receipt: "caller"
    });
  } else n = _mo(e, {
    receipt: "caller"
  });
  if (!n.admitted) return ga().inbound.sendPeerReceipt?.(e, "dropped", {
    dropReason: n.reason,
    droppedMsgIds: []
  }), !1;
  return ga().inbound.recordCorrespondent?.(e), !0;
}
function R(e, n) {
  let inbound_4 = ga().inbound;
  switch (Jkt(), n.policy) {
    case "accept":
      return A("policy-accepts"), g("peer_inbound_gate"), "accept";
    case "refuse":
      return ZLe(n.refuseCause === "kill-switch" ? m(e) : `crossSessionInbound=refuse: ${m(e)}`, n.refuseCause), inbound_4.sendPeerReceipt?.(e, "refused"), "refused";
    case "hold":
      {
        let {
          holdCause: holdCause
        } = n;
        if (inbound_4.shuttingDown) return t(`[cross-session-inbound] shutdown: not parking a late peer message \u2014 settled as expired: ${m(e)}`), inbound_4.sendPeerReceipt?.(e, "expired"), p("peer_inbound_gate", "shutdown_expired"), "refused";
        if (inbound_4.held.length >= Q) {
          let i = inbound_4.held.shift();
          if (i) t(`[cross-session-inbound] hold buffer full \u2014 evicted oldest as expired: ${m(i)}`), inbound_4.sendPeerReceipt?.(i, "expired"), inbound_4.onPeerHoldDropped?.(i, "expired");
        }
        if (inbound_4.held.push(e), x(), t(`[cross-session-inbound] held inbound peer message (${inbound_4.held.length} held, cause=${holdCause}): ${m(e)}`), p("peer_inbound_gate", "held"), inbound_4.onPeerHeld) inbound_4.onPeerHeld(e, inbound_4.held.length, holdCause), inbound_4.announced.set(e, holdCause);
        return inbound_4.sendPeerReceipt?.(e, "held"), "held";
      }
  }
}
function Rqt(e) {
  if (!e) return "ungated";
  if (e.kind === "peer") return "hostInjected" in e && e.hostInjected === !0 ? "host-injected" : "peer";
  if (e.kind === "task-notification" && "subkind" in e && e.subkind === "peer-send-message") return "coordinator";
  return "ungated";
}
function Aqt({
  ingressOrigin: ingressOrigin,
  inboundOrigin: inboundOrigin,
  envelopePeer = !1
}) {
  return envelopePeer || Rqt(ingressOrigin) !== "ungated" && !B(ingressOrigin) || inboundOrigin === mge;
}
function B(e) {
  return !!e && e.kind === "peer" && !("hostInjected" in e && e.hostInjected === !0) && "inbound_origin" in e && e.inbound_origin === aMe;
}
function xqt(e, n) {
  switch (Rqt(e)) {
    case "peer":
      return Cqt(n);
    case "host-injected":
      return Y5r(n);
    case "coordinator":
      return G(n);
    case "ungated":
      return "accept";
  }
}
function Zkt(e) {
  switch (Rqt(e)) {
    case "peer":
      return eEt();
    case "coordinator":
    case "host-injected":
      return krt() === "refuse" ? "opt-out" : void 0;
    case "ungated":
      return;
  }
}
function eEt() {
  let e = H();
  if (e.policy !== "refuse") return;
  return e.refuseCause;
}
function j() {
  let e = krt();
  return e !== void 0 ? h(e) : {
    policy: "accept"
  };
}
function G(e) {
  let n = krt();
  if (n === void 0) return "accept";
  return R(e, h(n));
}
function Y5r(e) {
  return R(e, _(b(e)));
}
function ZLe(e, n) {
  if (Jkt(), n === "kill-switch") {
    t(`[cross-session-inbound] refused inbound peer message \u2014 cross-session messaging disabled (kill switch) (${e})`), p("peer_inbound_gate", "kill_switch");
    return;
  }
  t(`[cross-session-inbound] refused inbound peer message (${e})`), p("peer_inbound_gate", "refused");
}
function eNe(e) {
  return Jkt(), A(e);
}
function M(e) {
  switch (Rqt(e.origin)) {
    case "coordinator":
      return j();
    case "host-injected":
      return _(b(e));
    case "peer":
    case "ungated":
      return S(b(e));
  }
}
function A(e) {
  let inbound_5 = ga().inbound,
    held = inbound_5.held;
  if (held.length === 0) return 0;
  let s = [],
    i = [],
    a = [],
    u = 0,
    y = 0;
  for (let r of held) {
    let l = M(r);
    if (l.policy === "accept") i.push(r);else if (l.policy === "refuse") {
      if (u += 1, l.refuseCause === "kill-switch") y += 1;
      inbound_5.sendPeerReceipt?.(r, "refused"), inbound_5.onPeerHoldDropped?.(r, "refused");
    } else if (s.push(r), inbound_5.announced.get(r) !== l.holdCause) a.push([r, l.holdCause]);
  }
  held.length = 0, held.push(...s);
  for (let [r, l] of a) inbound_5.announced.set(r, l), inbound_5.onPeerHeld?.(r, held.length, l);
  if (u > 0) t(y === u ? `[cross-session-inbound] gate off \u2014 dropped ${u} parked peer message(s) (cross-session messaging disabled)` : `[cross-session-inbound] dropped ${u} held peer message(s) \u2014 policy is now refuse`);
  if (i.length === 0) return 0;
  let c = [];
  for (let r of i) if (D(r)) c.push(r), g("peer_inbound_gate");else inbound_5.onPeerHoldDropped?.(r, "dropped");
  if (t(`[cross-session-inbound] released ${i.length} held peer message(s) (${e}) \u2014 ${c.length} admitted by the ingress guard; ${held.length} still held`), c.length > 0) inbound_5.onPeerHoldReleased?.(c, e);
  for (let r of c) inbound_5.sendPeerReceipt?.(r, "delivered");
  return i.length;
}
function tEt(e, n) {
  let inbound_6 = ga().inbound,
    s = inbound_6.held.indexOf(e);
  if (s === -1) return "gone";
  let [i] = inbound_6.held.splice(s, 1);
  if (!i) return "gone";
  if (n === "approve") {
    let u = M(i);
    if (u.policy === "refuse") {
      let c = u.refuseCause === "kill-switch";
      return t(`[cross-session-inbound] held peer message approved but policy is now refuse (${c ? "kill switch" : "opt-out"}) \u2014 dropped`), inbound_6.sendPeerReceipt?.(i, "refused"), inbound_6.onPeerHoldDropped?.(i, "refused"), "dropped";
    }
    if (!D(i)) return t("[cross-session-inbound] held peer message approved but DROPPED by the ingress guard on release"), inbound_6.onPeerHoldDropped?.(i, "dropped"), "dropped-by-guard";
    return t("[cross-session-inbound] held peer message APPROVED \u2014 released to queue"), g("peer_inbound_gate"), inbound_6.onPeerHoldReleased?.([i], "approved"), inbound_6.sendPeerReceipt?.(i, "delivered"), "delivered";
  }
  t(`[cross-session-inbound] held peer message ${n === "deny" ? "DENIED" : "EXPIRED/CANCELLED"} \u2014 dropped with denial receipt`);
  let a = n === "deny" ? "denied" : "expired";
  return inbound_6.sendPeerReceipt?.(i, a), "dropped";
}
function g7o() {
  return ga().inbound.held;
}
function nEt() {
  return ga().inbound.held.length;
}
function X5r() {
  return ga().inbound.shuttingDown;
}
function m(e) {
  let n = e.origin?.kind === "peer" && typeof e.origin.from === "string" ? e.origin.from : "unknown",
    o = typeof e.value === "string" ? e.value : "[blocks]";
  return `from=${ph(n)} "${ph(o, 60)}"`;
}
export { Xkt, Sqt, wqt, z5r, m7o, vqt, Jkt, G5r, kqt, V5r, Eqt, Tqt, krt, Qkt, QLe, q5r, K5r, Cqt, Rqt, Aqt, xqt, Zkt, eEt, Y5r, ZLe, eNe, tEt, g7o, nEt, X5r };