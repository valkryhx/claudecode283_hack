// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";

function IHt(r, o = "aborted") {
  let {
    reason: t
  } = r;
  return t instanceof Error ? t.message : t === void 0 ? o : String(t)
}
var Dua = (r) => `the answer is not plain data: ${r}`;
class $e extends Error {
  name = "HooksError";
  telemetryMessage = "function hooks error (message not reported: it may contain plugin details)";
  thrownName
}

function FUn(r, o) {
  if (!D(r)) throw new $e(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);
  return r
}

function zxs(r) {
  if (!(r instanceof Error)) return;
  let o = r.cause;
  return typeof o === "string" ? o : void 0
}
var eYi = (r) => typeof r === "object" && r !== null && ("aborted" in r) && typeof r.addEventListener === "function" && typeof r.removeEventListener === "function";
var don = (r) => `next() argument is not plain data: ${r}`;
var lwo = (r, o) => `${r}: arguments are not plain data: ${o}`;
class _Re extends $e {}
var tYi = (r) => r.reason instanceof _Re;
var Gxs = (r, o) => o === !0 ? new _Re(r) : new $e(r);
var pPr = (r) => r.reason instanceof _Re ? {
  isSettled: !0
} : {};
var Lua = (r) => r instanceof _Re ? new $e(r.message) : r;
var e = new WeakMap;

function mPr(r, o) {
  if (typeof r === "object" && r !== null) e.set(r, o);
  return r
}
var Vxs = (r) => typeof r === "object" && r !== null ? e.get(r) : void 0;
class dwo extends $e {
  asked;
  constructor(r, o) {
    super(r);
    this.asked = o
  }
}
var n = new WeakSet;
var cwo = (r) => typeof r === "object" && r !== null && n.has(r);

function hPr(r) {
  if (typeof r === "object" && r !== null) n.add(r);
  return r
}

function p() {
  let r = new WeakMap;
  return {
    mark(o, t) {
      if (typeof o === "object" && o !== null && t !== void 0) r.set(o, t);
      return o
    },
    of(o) {
      return typeof o === "object" && o !== null ? r.get(o) : void 0
    }
  }
}
var s = p();
var MHt = (r, o) => s.mark(r, o);
var FNe = (r) => new $e(`${r}: its environment was unloaded`);
var gPr = (r, o, t) => ({
  plugin: r,
  op: o,
  message: t
});

function Nua(r, o) {
  let t = FNe(r);
  return MHt(t, gPr(r, o, t.message))
}
var yPr = (r) => s.of(r);
export {
  IHt,
  Dua,
  $e,
  FUn,
  zxs,
  eYi,
  don,
  lwo,
  _Re,
  tYi,
  Gxs,
  pPr,
  Lua,
  mPr,
  Vxs,
  dwo,
  cwo,
  hPr,
  MHt,
  FNe,
  gPr,
  Nua,
  yPr
};
