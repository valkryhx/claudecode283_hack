// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Po, w7, Uae } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { Js } from "B:/~BUN/root/chunk-yr3hf5bg.js";
import { Zr } from "B:/~BUN/root/chunk-eev762xg.js";
import { ir, Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { sHe, hT, be, Ga, cHe, Cr, Ob, xKe } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { d$n } from "B:/~BUN/root/chunk-2xc4webm.js";
import { $y } from "B:/~BUN/root/chunk-vy3btdd1.js";
function fd(o) {
  let t = be("policySettings")?.strictPluginOnlyCustomization;
  if (t === !0) return !0;
  if (Array.isArray(t)) return t.includes(o);
  return !1;
}
var h = new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
function y3(o) {
  return o !== void 0 && h.has(o);
}
function c(o) {
  return o;
}
function AGi() {
  return null;
}
function xGi(o) {
  return !1;
}
function ECr(o) {
  return null;
}
var g = "cli";
class f {
  snapshotKey = () => g;
  snapshotsBySessionId = new Map();
  setSnapshotKey(o) {
    this.snapshotKey = o;
  }
  current() {
    let o = this.snapshotKey(),
      t = this.snapshotsBySessionId.get(o);
    if (!t) t = {
      initialHooksConfig: null
    }, this.snapshotsBySessionId.set(o, t);
    return t;
  }
  store(o) {
    let t = this.current();
    if (t.initialHooksConfig = o, $y()) t.userHooksConfig = be("userSettings")?.hooks ?? {};else delete t.userHooksConfig;
    try {
      t.policyHooksConfig = be("policySettings")?.hooks ?? {};
    } catch {
      t.policyHooksConfig = "unreadable";
    }
  }
  evict(o) {
    if (o === g) return;
    this.snapshotsBySessionId.delete(o);
  }
}
var m = new W(() => new f());
function e() {
  return Po(m);
}
function r() {
  let o = be("policySettings");
  if (o?.disableAllHooks === !0) return {};
  if (o?.allowManagedHooksOnly === !0 || Zr()) return o?.hooks ?? {};
  if (fd("hooks")) return o?.hooks ?? {};
  let t = Cr();
  if (t.disableAllHooks === !0) {
    if (!TCr()) return o?.hooks ?? {};
    return l();
  }
  if (sHe()) return l();
  return c(t.hooks ?? {});
}
var S = ["userSettings", "flagSettings", "policySettings"];
function l() {
  return H(S.filter(Kt).map(item => be(item)?.hooks));
}
function eHn(o, t) {
  let n = new Set((l()[t] ?? []).map(Js));
  return o.filter(item => n.has(Js(item)));
}
function H(o) {
  let t = {};
  for (let n of o) for (let [s, u] of Object.entries(n ?? {})) {
    let i = s;
    t[i] = [...(t[i] ?? []), ...(u ?? [])];
  }
  return t;
}
function TCr() {
  return d() && !J_();
}
function CEs() {
  return d() && J_();
}
function d() {
  if (!$y() || Zr() || fd("hooks") || Cr().disableAllHooks !== !0) return !1;
  return be("policySettings")?.allowManagedHooksOnly !== !0 && S.filter(Kt).every(item => be(item)?.disableAllHooks !== !0);
}
function g_(o = Cr().disableAllHooks) {
  return Zr() || Tse(o);
}
function Tse(o = Cr().disableAllHooks) {
  let t = be("policySettings");
  if (t?.allowManagedHooksOnly === !0) return !0;
  if (o === !0 && t?.disableAllHooks !== !0) return !0;
  return !1;
}
function qNt() {
  return p() || J_();
}
function p() {
  return Zr() || be("policySettings")?.allowManagedHooksOnly === !0;
}
function REs() {
  return $m() || p() || fd("hooks");
}
function y() {
  return Ga("userSettings");
}
function AEs() {
  let o = y();
  return o?.disableAllHooks === !0 || o === null && hT("userSettings").length > 0;
}
function J_() {
  return xKe(Ob()).length > 0 || w7() && cHe();
}
function CCr() {
  return qNt() || fd("hooks");
}
function $m() {
  return be("policySettings")?.disableAllHooks === !0;
}
function Eee() {
  return $m() || Tse();
}
function xEs() {
  e().store(r()), Uae();
}
function Xq(o) {
  ir(o), e().store(r()), Uae();
}
async function ann(o) {
  let t = await d$n(o);
  try {
    e().store(r()), Uae();
  } finally {
    t?.();
  }
}
function* PEs() {
  for (let o of e().snapshotsBySessionId.values()) if (o.initialHooksConfig !== null) yield o.initialHooksConfig;
}
function O1() {
  let o = e().current();
  if (o.initialHooksConfig === null) ir(), e().store(r()), Uae();
  return o.initialHooksConfig;
}
function Vgo() {
  return O1(), e().current().policyHooksConfig ?? "unreadable";
}
function Kgo() {
  return O1(), e().current().userHooksConfig ?? ($y() ? be("userSettings")?.hooks ?? {} : {});
}
export { fd, y3, AGi, xGi, ECr, eHn, TCr, CEs, g_, Tse, qNt, REs, AEs, J_, CCr, $m, Eee, xEs, Xq, ann, PEs, O1, Vgo, Kgo };