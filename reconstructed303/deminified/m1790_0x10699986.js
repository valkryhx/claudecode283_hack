// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { HWs, Jl, Qi, En, E, ir } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { vb, JYs, Sy } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { rcn } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Ao } from "B:/~BUN/root/chunk-s6czymtt.js";
import { G4e, jfr } from "B:/~BUN/root/chunk-2w966ew9.js";
import { l0s } from "B:/~BUN/root/chunk-w6et565n.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { y_ } from "B:/~BUN/root/chunk-s6jt7ap6.js";
import { Xw } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { RUe, KR } from "B:/~BUN/root/chunk-r1z1wgpe.js";
import { Q6r, tQo, Z6r } from "B:/~BUN/root/chunk-f9ac1atx.js";
import { uqe } from "B:/~BUN/root/chunk-kyvzxx43.js";
import { tl } from "B:/~BUN/root/chunk-k8727s7d.js";
import { Fv } from "B:/~BUN/root/chunk-2j35ee92.js";
import { fr } from "B:/~BUN/root/chunk-c6mbjdcy.js";
function Lor() {
  return Sy() && !E("tengu_melodic_ember", !1);
}
function WJo(e, r) {
  if (!Sy()) return () => {};
  let o = e();
  return Jl(() => {
    let t = e(),
      n = o && !t;
    if (o = t, n) r();
  });
}
var T = "tengu_ccr_sdk_mcp_remote_manifests";
function Nor() {
  return ir("tengu_sdk_mcp_manifests", !0);
}
var f = "sdk_mcp_tools_list_changed",
  g = "sdk_mcp_manifests";
function zJo(e) {
  if (!E("tengu_sdk_mcp_manifests", !0)) return [];
  return e?.isRemoteTransport() !== !0 || G4e(e.sessionWriters()) && m() ? [f, g] : [f];
}
function GJo(e) {
  return e.includes("sdkMcpServerManifests") ? c(e, 0) : void 0;
}
var d = ["payload", "request", "sdkMcpServerManifests"];
function c(e, r) {
  return l0s(e, (o, t) => {
    if (o !== d[r]) return t;
    return r === d.length - 1 ? "{}" : c(t, r + 1) ?? t;
  });
}
function m() {
  return E(T, !1);
}
var maxFrameAgeMs = 300000,
  maxStatementAgeMs = 300000;
function h({
  origin: origin,
  frameCreatedAt: frameCreatedAt,
  sessionWriters: sessionWriters,
  now = Date.now()
}) {
  if (origin !== "host_per_send") return "no_origin_marker";
  let n = jfr({
    frameCreatedAt: frameCreatedAt,
    sessionWriters: sessionWriters,
    maxFrameAgeMs: maxFrameAgeMs,
    maxStatementAgeMs: maxStatementAgeMs,
    now: now
  });
  if (n !== void 0) return n;
  return;
}
async function VJo(e) {
  let r = h(e);
  if (r !== void 0) return r;
  if (m()) return;
  return (await je(Qi().catch(() => null), 0)) !== void 0 ? "flag_off" : "flag_unsettled";
}
var S = !1;
function x() {
  let e = Ao(),
    r = En(HWs, S);
  return e.servedOnFacts ??= r.value === !0 && r.source === "payload", e.servedOnFacts;
}
var b = "ui_",
  _ = "ui_detach",
  A = "remote_cowork",
  W = new Set([A, "remote_mobile"]),
  i = "vscode";
function xkn(e) {
  let r = vb();
  return !e.redactsWhatItPersists && (!e.isRemoteTransport || fr() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) && (W.has(r ?? "") || JYs.has(r ?? "") && x()));
}
function u() {
  return y_() && !Lor();
}
function ooe(e) {
  return u() && xkn(e) && (!e.isRemoteTransport || G4e(e.sessionWriters));
}
function qJo(e, r) {
  return e.isRemoteTransport && !r && u() && xkn(e);
}
function z6r() {
  return E("tengu_calm_osprey", !0);
}
function art(e) {
  return typeof e === "string" && e.startsWith(b);
}
function KJo(e) {
  try {
    let r = e();
    return r.isRemoteTransport && r.leavesBelowFloor;
  } catch (error) {
    return l(H(error)), !0;
  }
}
function Pkn(e, now_2) {
  return jfr({
    frameCreatedAt: e.createdAt,
    sessionWriters: e.sessionWriters,
    maxFrameAgeMs: maxFrameAgeMs,
    maxStatementAgeMs: maxStatementAgeMs,
    now: now_2
  });
}
function Okn(e, r, o = Date.now) {
  if (!art(e)) return !1;
  try {
    let t = r(),
      n = !t.isRemoteTransport || (t.isAtFloor || t.leavesBelowFloor && e === _) && Pkn(t, o()) === void 0,
      R = e === _ && t.isAnySurfaceAttached;
    return !(xkn(t) && n && (R || u()));
  } catch (error) {
    return l(H(error)), !0;
  }
}
function YJo(e, r) {
  return e.isRemoteTransport && r && y_() && !G4e(e.sessionWriters);
}
function k() {
  try {
    return tl("prompt.submit", void 0, Ne().loadedModules.filter(item => !Fv(item)));
  } catch (error) {
    return l(H(error)), !0;
  }
}
function G6r() {
  return k() || KR() || uqe();
}
function V6r() {
  return G6r() || !M();
}
function M() {
  let e = Ne();
  return !e.hookRegistrationOwed && e.hookRegistrationInFlight === void 0 && e.hooksUnknownCause === void 0 && !RUe();
}
function For(e) {
  try {
    let r = e();
    if (!(ooe(r) && (!r.isRemoteTransport || vb() === A))) return [];
    return V6r() ? [Q6r, tQo] : [Q6r];
  } catch (error) {
    return l(error), [];
  }
}
function q6r(component, surface) {
  return tl(Xw, surface === i ? {
    component: component,
    surface: surface
  } : {
    component: component
  });
}
function XJo(e) {
  return e === i ? Ne().hookRegistrationInFlight?.catch(() => {}) : void 0;
}
function Hor(e) {
  try {
    if (!Sy() || !ooe(e()) || !M()) return [];
    return [Z6r, ...rcn().options.filter(item => q6r(item, i)).map(item => `${Z6r}:${item}`)];
  } catch (error) {
    return l(H(error)), [];
  }
}
export { Lor, WJo, Nor, zJo, GJo, maxStatementAgeMs as irt, VJo, xkn, ooe, qJo, z6r, art, KJo, Pkn, Okn, YJo, G6r, V6r, For, q6r, XJo, Hor };