// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  BSt
} from "B:/~BUN/root/chunk-dzqsqewb.js";
import {
  AsyncLocalStorage as g
} from "async_hooks";
var h = "tengu_sturdy_lantern",
  o = new BSt;

function HXi(e) {
  return o.register(e)
}
var n = new g;

function mAe(e) {
  return n.run(!0, e)
}

function $Xi() {
  return n.getStore() !== !0 && o.read(h, !0)
}
class d {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r
  }
}
var s = new d;

function UXi(e) {
  return s.register(e)
}

function b() {
  let e = s.reader;
  if (!e) return !0;
  try {
    let {
      value: r,
      source: a,
      defaultHost: t
    } = e("tengu_warm_sunrise", !0);
    return r !== !1 || a !== "payload" || !t
  } catch {
    return !0
  }
}

function SDr(e) {
  return e !== "-rm" || b()
}
class l {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r
  }
}
var i = new l;

function BXi(e) {
  return i.register(e)
}

function c(e) {
  let r = i.reader;
  if (!r) return !0;
  try {
    let {
      value: a,
      source: t,
      defaultHost: F
    } = r(e, !0);
    return a !== !1 || t !== "payload" || !F
  } catch {
    return !0
  }
}

function jXi() {
  return c("tengu_vast_puddle")
}

function WXi() {
  return c("tengu_snappy_tower")
}
class p {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r
  }
}
var R = new p;

function zXi(e) {
  return R.register(e)
}

function Njn() {
  let e = R.reader;
  if (!e) return !0;
  try {
    let {
      value: r,
      source: a,
      defaultHost: t
    } = e("tengu_staged_pumpkin", !0);
    return r !== !1 || a !== "payload" || !t
  } catch {
    return !0
  }
}
import {
  AsyncLocalStorage as m
} from "async_hooks";
var _ = "tengu_nested_ripple";
class f {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r
  }
}
var G = new f;

function GXi(e) {
  return G.register(e)
}

function VXi() {
  let e = G.reader;
  if (!e) return !0;
  try {
    let {
      value: r,
      source: a,
      defaultHost: t
    } = e(_, !0);
    return r !== !1 || a !== "payload" || !t
  } catch {
    return !0
  }
}
var u = new m;
async function n0s(e) {
  let r = u.getStore() ?? {
      reading: "refuse",
      refusals: 0
    },
    a = r.refusals;
  return [await u.run(r, e), r.refusals > a ? r.firstReason : void 0]
}

function KXi(e) {
  let r = u.getStore();
  if (r !== void 0 && r.reading === "refuse") r.refusals += 1, r.firstReason ??= e
}

function xUt(e) {
  return u.run({
    reading: "rule off",
    refusals: 0
  }, e)
}

function r0s(e) {
  return u.run({
    reading: "as bash reads it",
    refusals: 0
  }, e)
}

function qXi() {
  let e = u.getStore()?.reading;
  return e === "rule off" || e === "as bash reads it"
}

function RTo() {
  return u.getStore()?.reading === "as bash reads it"
}
export {
  HXi,
  mAe,
  $Xi,
  UXi,
  SDr,
  BXi,
  jXi,
  WXi,
  zXi,
  Njn,
  GXi,
  VXi,
  n0s,
  KXi,
  xUt,
  r0s,
  qXi,
  RTo
};
