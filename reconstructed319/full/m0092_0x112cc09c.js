// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  cnt,
  Mdn
} from "B:/~BUN/root/chunk-0mf55a06.js";
import {
  AT
} from "B:/~BUN/root/chunk-mzfrv3wm.js";
import {
  unt,
  bwe,
  ome,
  _xe
} from "B:/~BUN/root/chunk-3cca501e.js";
import {
  VR
} from "B:/~BUN/root/chunk-67erjrg5.js";
import {
  l7
} from "B:/~BUN/root/chunk-99vcrndq.js";

function a(r, t, m, n) {
  if (!VR(r)) return r;
  t = bwe(t, r);
  var o = -1,
    e = t.length,
    s = e - 1,
    i = r;
  while (i != null && ++o < e) {
    var f = ome(t[o]),
      u = m;
    if (f === "__proto__" || f === "constructor" || f === "prototype") return r;
    if (o != s) {
      var p = i[f];
      if (u = n ? n(p, f, i) : void 0, u === void 0) u = VR(p) ? p : unt(t[o + 1]) ? [] : {}
    }
    cnt(i, f, u), i = i[f]
  }
  return r
}
var l = a;

function d(r, t, m) {
  var n = -1,
    o = t.length,
    e = {};
  while (++n < o) {
    var s = t[n],
      i = _xe(r, s);
    if (m(i, s)) l(e, bwe(s, r), i)
  }
  return e
}
var nPo = d;

function x(r, t) {
  if (r == null) return {};
  var m = l7(Mdn(r), function(n) {
    return [n]
  });
  return t = AT(t), nPo(r, m, function(n, o) {
    return t(n, o[0])
  })
}
var Ro = x;
export {
  nPo,
  Ro
};
