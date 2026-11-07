// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { st } from "B:/~BUN/root/chunk-game8aqv.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Xbe, URe, ea, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { vt, t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { dN, gAo } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Kv } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { be, mh } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { jl } from "B:/~BUN/root/chunk-rzc1dapy.js";
import { lso } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ni } from "B:/~BUN/root/chunk-ghar8fn5.js";
import { q_ } from "B:/~BUN/root/chunk-5gm1xyqv.js";
function CVt() {
  return v("tengu_harbor_kite_mode_emit", !0);
}
function O() {
  switch (w().decidedBy) {
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
  P = new Set(Kv);
function fyn(e) {
  if (e !== null) Ni().inbound.shuttingDown = !1, I(), Ni().inbound.modeAtUnwire = void 0;else {
    let getCurrentMode = Ni().inbound.getCurrentMode;
    if (getCurrentMode !== null) try {
      Ni().inbound.modeAtUnwire = getCurrentMode();
    } catch {
      Ni().inbound.modeAtUnwire = void 0;
    }
  }
  if (Ni().inbound.getCurrentMode = e, e !== null) QUe("mode-changed");
}
function pyn(e) {
  Ni().inbound.onPeerHeld = e;
}
function pWo(e) {
  Ni().inbound.sendPeerReceipt = e;
}
function Sei(origin, n) {
  Ni().inbound.sendPeerReceipt?.({
    mode: "prompt",
    agentId: st(),
    value: "",
    origin: origin
  }, n);
}
function aTt(e) {
  let inbound = Ni().inbound;
  if (inbound.publishAvailability = e, inbound.unsubscribeAvailabilityRefresh?.(), inbound.unsubscribeAvailabilityRefresh = null, e) RVt(), inbound.unsubscribeAvailabilityRefresh = ea(RVt);
}
function RVt() {
  Ni().inbound.publishAvailability?.(PVt() === void 0);
}
function mWo(e) {
  Ni().inbound.recordCorrespondent = e;
}
var F = 750;
function I() {
  if (Ni().inbound.shutdownSettleHandle === null) Ni().inbound.shutdownSettleHandle = vt(myn);
}
async function myn() {
  let inbound_2 = Ni().inbound;
  if (inbound_2.shutdownSettleHandle?.(), inbound_2.shutdownSettleHandle = null, inbound_2.shuttingDown = !0, inbound_2.held.length === 0) return;
  let n = inbound_2.held.splice(0, inbound_2.held.length);
  t(`[cross-session-inbound] shutdown: settling ${n.length} still-held peer message(s) as expired`);
  let o = [];
  for (let s of n) o.push(inbound_2.sendPeerReceipt?.(s, "expired")), inbound_2.onPeerHoldDropped?.(s, "expired");
  await Promise.race([Promise.allSettled(o), J(F, void 0, {
    unref: !0
  })]);
}
function hWo(e) {
  let {
    inbound: inbound_3
  } = Ni();
  return inbound_3.held.includes(e) ? inbound_3.announced.get(e) : void 0;
}
function hyn(e) {
  Ni().inbound.onPeerHoldDropped = e;
}
function gyn(e) {
  Ni().inbound.onPeerHoldReleased = e;
}
function XUe() {
  return w().value;
}
function w() {
  let value, decidedBy;
  for (let o of ["policySettings", "flagSettings", "userSettings"]) {
    if (!Kt(o)) continue;
    let s = be(o)?.crossSessionInbound;
    if (s !== void 0) {
      value = s, decidedBy = o;
      break;
    }
  }
  for (let o of ["localSettings", "projectSettings"]) {
    if (!Kt(o)) continue;
    let s = be(o)?.crossSessionInbound;
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
  return mh().errors.some(item => item.path === gAo && item.severity === "warning" && !item.statusOnly);
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
function _() {
  return jl("receive") ? void 0 : {
    policy: "refuse",
    refuseCause: "kill-switch"
  };
}
function H() {
  let e = _();
  if (e) return e;
  let n = XUe();
  if (n !== void 0) return h(n);
  let o = R();
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
  let n = _();
  if (n) return n;
  return k(e, !1);
}
function E(e) {
  return k(e, !0);
}
function k(e, n) {
  let o = XUe();
  if (o !== void 0) return h(o);
  if (e?.selfSent) return {
    policy: "accept"
  };
  let s = R();
  if (s === null || !P.has(s.mode)) {
    if (s !== null) t(`[cross-session-inbound] unrecognized permission mode '${s.mode}' (fail-closed \u2192 hold)`);
    return {
      policy: "hold",
      holdCause: "mode-unknown"
    };
  }
  let i = AVt(s),
    a = n || CVt() ? e?.fromMode : void 0;
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
  return e.mode === "bypassPermissions" || dN(e.mode, e.isBypassPermissionsModeAvailable);
}
function AVt(e) {
  return C(e) ? "bypass" : "prompting";
}
function XYe() {
  return H().policy;
}
function gWo(e) {
  return S(e).policy;
}
function R() {
  let getCurrentMode_2 = Ni().inbound.getCurrentMode;
  if (getCurrentMode_2 === null) return t("[cross-session-inbound] permission-mode getter not wired (fail-closed \u2192 hold)"), null;
  try {
    return getCurrentMode_2();
  } catch (error) {
    return t(`[cross-session-inbound] mode getter threw (${d(error)}; fail-closed \u2192 hold)`), null;
  }
}
function yWo() {
  if (XUe() !== void 0) return !1;
  let e = R();
  if (e === null || !P.has(e.mode)) return !1;
  return C(e);
}
function yyn(e) {
  return x(e, S(b(e)));
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
    n = lso(s, {
      receipt: "caller"
    });
  } else n = lso(e, {
    receipt: "caller"
  });
  if (!n.admitted) return Ni().inbound.sendPeerReceipt?.(e, "dropped", {
    dropReason: n.reason,
    droppedMsgIds: []
  }), !1;
  return Ni().inbound.recordCorrespondent?.(e), !0;
}
function x(e, n) {
  let inbound_4 = Ni().inbound;
  switch (RVt(), n.policy) {
    case "accept":
      return A("policy-accepts"), g("peer_inbound_gate"), "accept";
    case "refuse":
      return JUe(n.refuseCause === "kill-switch" ? m(e) : `crossSessionInbound=refuse: ${m(e)}`, n.refuseCause), inbound_4.sendPeerReceipt?.(e, "refused"), "refused";
    case "hold":
      {
        let {
          holdCause: holdCause
        } = n;
        if (inbound_4.shuttingDown) return t(`[cross-session-inbound] shutdown: not parking a late peer message \u2014 settled as expired: ${m(e)}`), inbound_4.sendPeerReceipt?.(e, "expired"), c("peer_inbound_gate", "shutdown_expired"), "refused";
        if (inbound_4.held.length >= Q) {
          let i = inbound_4.held.shift();
          if (i) t(`[cross-session-inbound] hold buffer full \u2014 evicted oldest as expired: ${m(i)}`), inbound_4.sendPeerReceipt?.(i, "expired"), inbound_4.onPeerHoldDropped?.(i, "expired");
        }
        if (inbound_4.held.push(e), I(), t(`[cross-session-inbound] held inbound peer message (${inbound_4.held.length} held, cause=${holdCause}): ${m(e)}`), c("peer_inbound_gate", "held"), inbound_4.onPeerHeld) inbound_4.onPeerHeld(e, inbound_4.held.length, holdCause), inbound_4.announced.set(e, holdCause);
        return inbound_4.sendPeerReceipt?.(e, "held"), "held";
      }
  }
}
function _yn(e) {
  if (!e) return "ungated";
  if (e.kind === "peer") return "hostInjected" in e && e.hostInjected === !0 ? "host-injected" : "peer";
  if (e.kind === "task-notification" && "subkind" in e && e.subkind === "peer-send-message") return "coordinator";
  return "ungated";
}
function lTt({
  ingressOrigin: ingressOrigin,
  inboundOrigin: inboundOrigin,
  envelopePeer = !1
}) {
  return envelopePeer || _yn(ingressOrigin) !== "ungated" && !B(ingressOrigin) || inboundOrigin === Xbe;
}
function B(e) {
  return !!e && e.kind === "peer" && !("hostInjected" in e && e.hostInjected === !0) && "inbound_origin" in e && e.inbound_origin === URe;
}
function xVt(e, n) {
  switch (_yn(e)) {
    case "peer":
      return yyn(n);
    case "host-injected":
      return _Wo(n);
    case "coordinator":
      return G(n);
    case "ungated":
      return "accept";
  }
}
function dTt(e) {
  switch (_yn(e)) {
    case "peer":
      return PVt();
    case "coordinator":
    case "host-injected":
      return XUe() === "refuse" ? "opt-out" : void 0;
    case "ungated":
      return;
  }
}
function PVt() {
  let e = H();
  if (e.policy !== "refuse") return;
  return e.refuseCause;
}
function j() {
  let e = XUe();
  return e !== void 0 ? h(e) : {
    policy: "accept"
  };
}
function G(e) {
  let n = XUe();
  if (n === void 0) return "accept";
  return x(e, h(n));
}
function _Wo(e) {
  return x(e, E(b(e)));
}
function JUe(e, n) {
  if (RVt(), n === "kill-switch") {
    t(`[cross-session-inbound] refused inbound peer message \u2014 cross-session messaging disabled (kill switch) (${e})`), c("peer_inbound_gate", "kill_switch");
    return;
  }
  if (n === "declared-peer-deny-list") {
    t(`[cross-session-inbound] refused host-declared peer message \u2014 its frame states disallowed_tools, which a peer's turn cannot hold (${e})`, {
      level: "error"
    }), c("peer_inbound_gate", "declared_peer_deny_list");
    return;
  }
  t(`[cross-session-inbound] refused inbound peer message (${e})`), c("peer_inbound_gate", "refused");
}
function QUe(e) {
  return RVt(), A(e);
}
function M(e) {
  switch (_yn(e.origin)) {
    case "coordinator":
      return j();
    case "host-injected":
      return E(b(e));
    case "peer":
    case "ungated":
      return S(b(e));
  }
}
function A(e) {
  let inbound_5 = Ni().inbound,
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
  let p = [];
  for (let r of i) if (D(r)) p.push(r), g("peer_inbound_gate");else inbound_5.onPeerHoldDropped?.(r, "dropped");
  if (t(`[cross-session-inbound] released ${i.length} held peer message(s) (${e}) \u2014 ${p.length} admitted by the ingress guard; ${held.length} still held`), p.length > 0) inbound_5.onPeerHoldReleased?.(p, e);
  for (let r of p) inbound_5.sendPeerReceipt?.(r, "delivered");
  return i.length;
}
function OVt(e, n) {
  let inbound_6 = Ni().inbound,
    s = inbound_6.held.indexOf(e);
  if (s === -1) return "gone";
  let [i] = inbound_6.held.splice(s, 1);
  if (!i) return "gone";
  if (n === "approve") {
    let u = M(i);
    if (u.policy === "refuse") {
      let p = u.refuseCause === "kill-switch";
      return t(`[cross-session-inbound] held peer message approved but policy is now refuse (${p ? "kill switch" : "opt-out"}) \u2014 dropped`), inbound_6.sendPeerReceipt?.(i, "refused"), inbound_6.onPeerHoldDropped?.(i, "refused"), "dropped";
    }
    if (!D(i)) return t("[cross-session-inbound] held peer message approved but DROPPED by the ingress guard on release"), inbound_6.onPeerHoldDropped?.(i, "dropped"), "dropped-by-guard";
    return t("[cross-session-inbound] held peer message APPROVED \u2014 released to queue"), g("peer_inbound_gate"), inbound_6.onPeerHoldReleased?.([i], "approved"), inbound_6.sendPeerReceipt?.(i, "delivered"), "delivered";
  }
  t(`[cross-session-inbound] held peer message ${n === "deny" ? "DENIED" : "EXPIRED/CANCELLED"} \u2014 dropped with denial receipt`);
  let a = n === "deny" ? "denied" : "expired";
  return inbound_6.sendPeerReceipt?.(i, a), "dropped";
}
function wei() {
  return Ni().inbound.held;
}
function IVt() {
  return Ni().inbound.held.length;
}
function bWo() {
  return Ni().inbound.shuttingDown;
}
function m(e) {
  let n = e.origin?.kind === "peer" && typeof e.origin.from === "string" ? e.origin.from : "unknown",
    o = typeof e.value === "string" ? e.value : "[blocks]";
  return `from=${q_(n)} "${q_(o, 60)}"`;
}
export { CVt, fyn, pyn, pWo, Sei, aTt, RVt, mWo, myn, hWo, hyn, gyn, XUe, AVt, XYe, gWo, yWo, yyn, _yn, lTt, xVt, dTt, PVt, _Wo, JUe, QUe, OVt, wei, IVt, bWo };