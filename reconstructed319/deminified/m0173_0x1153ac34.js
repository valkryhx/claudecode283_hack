// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { BSt } from "B:/~BUN/root/chunk-dzqsqewb.js";
import { AsyncLocalStorage as g } from "async_hooks";
var h = "tengu_sturdy_lantern",
  o = new BSt();
function HXi(e) {
  return o.register(e);
}
var n = new g();
function mAe(e) {
  return n.run(!0, e);
}
function $Xi() {
  return n.getStore() !== !0 && o.read(h, !0);
}
class d {
  reader = null;
  register(e) {
    let reader = this.reader;
    return this.reader = e, reader;
  }
}
var s = new d();
function UXi(e) {
  return s.register(e);
}
function b() {
  let reader_2 = s.reader;
  if (!reader_2) return !0;
  try {
    let {
      value: value,
      source: source,
      defaultHost: defaultHost
    } = reader_2("tengu_warm_sunrise", !0);
    return value !== !1 || source !== "payload" || !defaultHost;
  } catch {
    return !0;
  }
}
function SDr(e) {
  return e !== "-rm" || b();
}
class l {
  reader = null;
  register(e) {
    let reader_3 = this.reader;
    return this.reader = e, reader_3;
  }
}
var i = new l();
function BXi(e) {
  return i.register(e);
}
function c(e) {
  let reader_4 = i.reader;
  if (!reader_4) return !0;
  try {
    let {
      value: value_2,
      source: source_2,
      defaultHost: defaultHost_2
    } = reader_4(e, !0);
    return value_2 !== !1 || source_2 !== "payload" || !defaultHost_2;
  } catch {
    return !0;
  }
}
function jXi() {
  return c("tengu_vast_puddle");
}
function WXi() {
  return c("tengu_snappy_tower");
}
class p {
  reader = null;
  register(e) {
    let reader_5 = this.reader;
    return this.reader = e, reader_5;
  }
}
var R = new p();
function zXi(e) {
  return R.register(e);
}
function Njn() {
  let reader_6 = R.reader;
  if (!reader_6) return !0;
  try {
    let {
      value: value_3,
      source: source_3,
      defaultHost: defaultHost_3
    } = reader_6("tengu_staged_pumpkin", !0);
    return value_3 !== !1 || source_3 !== "payload" || !defaultHost_3;
  } catch {
    return !0;
  }
}
import { AsyncLocalStorage as m } from "async_hooks";
var _ = "tengu_nested_ripple";
class f {
  reader = null;
  register(e) {
    let reader_7 = this.reader;
    return this.reader = e, reader_7;
  }
}
var G = new f();
function GXi(e) {
  return G.register(e);
}
function VXi() {
  let reader_8 = G.reader;
  if (!reader_8) return !0;
  try {
    let {
      value: value_4,
      source: source_4,
      defaultHost: defaultHost_4
    } = reader_8(_, !0);
    return value_4 !== !1 || source_4 !== "payload" || !defaultHost_4;
  } catch {
    return !0;
  }
}
var u = new m();
async function n0s(e) {
  let r = u.getStore() ?? {
      reading: "refuse",
      refusals: 0
    },
    refusals = r.refusals;
  return [await u.run(r, e), r.refusals > refusals ? r.firstReason : void 0];
}
function KXi(e) {
  let r = u.getStore();
  if (r !== void 0 && r.reading === "refuse") r.refusals += 1, r.firstReason ??= e;
}
function xUt(e) {
  return u.run({
    reading: "rule off",
    refusals: 0
  }, e);
}
function r0s(e) {
  return u.run({
    reading: "as bash reads it",
    refusals: 0
  }, e);
}
function qXi() {
  let e = u.getStore()?.reading;
  return e === "rule off" || e === "as bash reads it";
}
function RTo() {
  return u.getStore()?.reading === "as bash reads it";
}
export { HXi, mAe, $Xi, UXi, SDr, BXi, jXi, WXi, zXi, Njn, GXi, VXi, n0s, KXi, xUt, r0s, qXi, RTo };