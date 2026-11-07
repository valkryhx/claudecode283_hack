// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  pta,
  Ow
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  rt,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  sd,
  Te,
  Pd,
  us,
  Ci
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
var x = 1568,
  h = {
    firstParty: 2000,
    bedrock: 2000,
    vertex: 2000,
    foundry: 2000,
    anthropicAws: 2000,
    anthropicGoogleCloud: 2000,
    mantle: 2000,
    gateway: 2000
  };

function I(e) {
  return us() && v("tengu_mossy_gray", !1) === !0 ? 1 / 0 : h[Pd(e)]
}

function Al(e) {
  let n = _(),
    t = e ? rt(e) : void 0,
    i = t ? sd(t)?.image_limits : void 0,
    m = void 0,
    a = I(e),
    c = a,
    g = Math.min(i?.maxWidth ?? Ow.maxWidth, a),
    u = Math.min(i?.maxHeight ?? Ow.maxHeight, a),
    o = Math.min(r((void 0)?.maxWidth, g), c),
    d = Math.min(r((void 0)?.maxHeight, u), c),
    f = i?.maxImageTokens,
    s = i?.maxBase64Size ?? n;
  if (f === void 0 && o === Ow.maxWidth && d === Ow.maxHeight && s === Ow.maxBase64Size) return Ow;
  return {
    maxWidth: o,
    maxHeight: d,
    maxImageTokens: f,
    rejectMaxWidth: Math.max(g, o),
    rejectMaxHeight: Math.max(u, d),
    maxBase64Size: s,
    targetRawSize: s * 3 / 4
  }
}

function $Li(e) {
  let n = e ? rt(e) : void 0,
    t = n ? sd(n)?.image_limits : void 0;
  if (t?.maxWidth === void 0 || t.maxHeight === void 0) return;
  let i = void 0,
    m = Math.min(t.maxWidth, r(i?.maxWidth, t.maxWidth)),
    a = Math.min(t.maxHeight, r(i?.maxHeight, t.maxHeight));
  if (m <= Ow.maxWidth || a <= Ow.maxHeight) return;
  return {
    ...Ow,
    maxWidth: m,
    maxHeight: a,
    maxImageTokens: t.maxImageTokens
  }
}

function r(e, n) {
  return e === void 0 ? n : Math.max(x, e)
}

function _() {
  if (Te() === "firstParty" && Ci() && v("tengu_crimson_vector", !1)) return pta;
  return Ow.maxBase64Size
}
export {
  Al,
  $Li
};
