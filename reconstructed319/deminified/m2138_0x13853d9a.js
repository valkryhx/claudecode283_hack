// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { O6i, ea, ms, pn, v, rn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Zu, Vna, _f } from "B:/~BUN/root/chunk-65j2302z.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { fjn } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { kr } from "B:/~BUN/root/chunk-dm4rzkqc.js";
import { nde, nJr } from "B:/~BUN/root/chunk-agzytztq.js";
import { W$i } from "B:/~BUN/root/chunk-jj9s326a.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { Zw } from "B:/~BUN/root/chunk-sa4785jr.js";
import { OZ } from "B:/~BUN/root/chunk-vke7wtay.js";
import { VE } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { xI } from "B:/~BUN/root/chunk-vy4t7613.js";
import { G1o, LQs, V1o } from "B:/~BUN/root/chunk-s726q9kd.js";
import { Lst } from "B:/~BUN/root/chunk-xtdkv9sv.js";
import { Li } from "B:/~BUN/root/chunk-zeshc0ep.js";
import { vm } from "B:/~BUN/root/chunk-78gy49b7.js";
function Y2r() {
  return _f() && !v("tengu_melodic_ember", !0);
}
function gQs(e, r) {
  if (!_f()) return () => {};
  let o = e();
  return ea(() => {
    let t = e(),
      n = o && !t;
    if (o = t, n) r();
  });
}
var R = "tengu_ccr_sdk_mcp_remote_manifests";
function nXn() {
  return rn("tengu_sdk_mcp_manifests", !0);
}
var d = "sdk_mcp_tools_list_changed",
  T = "sdk_mcp_manifests";
function yQs(e) {
  if (!v("tengu_sdk_mcp_manifests", !0)) return [];
  return e?.isRemoteTransport() !== !0 || nde(e.sessionWriters()) && S() ? [d, T] : [d];
}
function _Qs(e) {
  return e.includes("sdkMcpServerManifests") ? m(e, 0) : void 0;
}
var c = ["payload", "request", "sdkMcpServerManifests"];
function m(e, r) {
  return W$i(e, (o, t) => {
    if (o !== c[r]) return t;
    return r === c.length - 1 ? "{}" : m(t, r + 1) ?? t;
  });
}
function S() {
  return v(R, !1);
}
var maxFrameAgeMs = 300000,
  maxStatementAgeMs = 300000;
function g({
  origin: origin,
  frameCreatedAt: frameCreatedAt,
  sessionWriters: sessionWriters,
  now = Date.now()
}) {
  if (origin !== "host_per_send") return "no_origin_marker";
  let n = nJr({
    frameCreatedAt: frameCreatedAt,
    sessionWriters: sessionWriters,
    maxFrameAgeMs: maxFrameAgeMs,
    maxStatementAgeMs: maxStatementAgeMs,
    now: now
  });
  if (n !== void 0) return n;
  return;
}
async function bQs(e) {
  let r = g(e);
  if (r !== void 0) return r;
  if (S()) return;
  return (await we(ms().catch(() => null), 0)) !== void 0 ? "flag_off" : "flag_unsettled";
}
var p = !1;
function x() {
  let e = kr(),
    r = pn(O6i, p);
  return e.servedOnFacts ??= r.value === !0 && r.source === "payload", e.servedOnFacts;
}
var b = "ui_",
  _ = "ui_detach",
  E = "remote_cowork",
  W = new Set([E, "remote_mobile"]),
  u = "vscode";
function rXn(e) {
  let r = Zu();
  return !e.redactsWhatItPersists && (!e.isRemoteTransport || tn() && Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) && (W.has(r ?? "") || Vna.has(r ?? "") && x()));
}
function f() {
  return Zw() && !Y2r();
}
function vhe(e) {
  return f() && rXn(e) && (!e.isRemoteTransport || nde(e.sessionWriters));
}
function SQs(e, r) {
  return e.isRemoteTransport && !r && f() && rXn(e);
}
function N1o() {
  return v("tengu_calm_osprey", !0);
}
function JEt(e) {
  return typeof e === "string" && e.startsWith(b);
}
function wQs(e) {
  try {
    let r = e();
    return r.isRemoteTransport && r.leavesBelowFloor;
  } catch (error) {
    return a(F(error)), !0;
  }
}
function oXn(e, now_2) {
  return nJr({
    frameCreatedAt: e.createdAt,
    sessionWriters: e.sessionWriters,
    maxFrameAgeMs: maxFrameAgeMs,
    maxStatementAgeMs: maxStatementAgeMs,
    now: now_2
  });
}
function sXn(e, r, o = Date.now) {
  if (!JEt(e)) return !1;
  try {
    let t = r(),
      n = !t.isRemoteTransport || (t.isAtFloor || t.leavesBelowFloor && e === _) && oXn(t, o()) === void 0,
      M = e === _ && t.isAnySurfaceAttached;
    return !(rXn(t) && n && (M || f()));
  } catch (error) {
    return a(F(error)), !0;
  }
}
function kQs(e, r) {
  return e.isRemoteTransport && r && Zw() && !nde(e.sessionWriters);
}
function k() {
  try {
    return Li("prompt.submit", void 0, Ae().loadedModules.filter(item => !vm(item)));
  } catch (error) {
    return a(F(error)), !0;
  }
}
function F1o() {
  return k() || xI() || Lst();
}
function H1o() {
  return F1o() || !A();
}
function A() {
  let e = Ae();
  return !e.hookRegistrationOwed && e.hookRegistrationInFlight === void 0 && e.hooksUnknownCause === void 0 && !OZ();
}
function X2r(e) {
  try {
    let r = e();
    if (!(vhe(r) && (!r.isRemoteTransport || Zu() === E))) return [];
    return H1o() ? [G1o, LQs] : [G1o];
  } catch (error) {
    return a(error), [];
  }
}
function $1o(component, surface) {
  return Li(VE, surface === u ? {
    component: component,
    surface: surface
  } : {
    component: component
  });
}
function vQs(e) {
  return e === u ? Ae().hookRegistrationInFlight?.catch(() => {}) : void 0;
}
function J2r(e) {
  try {
    if (!_f() || !vhe(e()) || !A()) return [];
    return [V1o, ...fjn().options.filter(item => $1o(item, u)).map(item => `${V1o}:${item}`)];
  } catch (error) {
    return a(F(error)), [];
  }
}
export { Y2r, gQs, nXn, yQs, _Qs, maxStatementAgeMs as XEt, bQs, rXn, vhe, SQs, N1o, JEt, wQs, oXn, sXn, kQs, F1o, H1o, X2r, $1o, vQs, J2r };