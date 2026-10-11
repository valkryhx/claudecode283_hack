// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Ga
} from "B:/~BUN/root/chunk-fszjvjk0.js";
import {
  n,
  bt
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  Kbe,
  Ny
} from "B:/~BUN/root/chunk-0rtwbec7.js";
import {
  W
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  RV
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  R,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";

function l_(d) {
  let s = w(10),
    {
      added: o,
      removed: i,
      bold: l
    } = d;
  if (o === 0 && i === 0) {
    return null
  }
  let f;
  if (s[0] !== o || s[1] !== l) f = o > 0 && r(n, {
    color: "diffAddedWord",
    bold: l,
    children: ["+", o]
  }), s[0] = o, s[1] = l, s[2] = f;
  else f = s[2];
  const b = o > 0 && i > 0 && " ";
  let u;
  if (s[3] !== l || s[4] !== i) u = i > 0 && r(n, {
    color: "diffRemovedWord",
    bold: l,
    children: ["-", i]
  }), s[3] = l, s[4] = i, s[5] = u;
  else u = s[5];
  let x;
  if (s[6] !== f || s[7] !== b || s[8] !== u) x = r(n, {
    children: [f, b, u]
  }), s[6] = f, s[7] = b, s[8] = u, s[9] = x;
  else x = s[9];
  return x
}
N();
N();
var fyt = "current-pr";

function G7n(d, o) {
  if (!d || !o) return null;
  let i = d.kind === "cr" && !1,
    l = d.kind === "mr";
  return {
    prefix: l ? "MR" : "PR",
    label: `${l?"!":"#"}${d.number}`,
    url: o,
    dedupUrl: d.url,
    color: de(d.reviewState)
  }
}

function de(d) {
  switch (d) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return
  }
}

function h(d, o, i) {
  return
}

function V7n(d, o, i) {
  R(() => {
    if (o === void 0) return;
    h(d, o, i === "cr" || i === "mr")
  }, [d, o, i])
}

function fe(ge) {
  return ge.settings?.prUrlTemplate
}

function h5(d) {
  let c = w(41),
    {
      number: o,
      url: i,
      reviewState: l,
      bold: s,
      color: f,
      dimColor: b,
      inverse: u,
      underline: x,
      hidePrefix: I,
      kind: Z
    } = d,
    be = x === void 0 ? !0 : x,
    g = Z === "cr" && !1,
    m = Z === "mr",
    C = m ? "!" : "#",
    B = W(fe),
    ee;
  if (c[0] !== g || c[1] !== m || c[2] !== B || c[3] !== i) ee = g || m ? i : RV(i, B), c[0] = g, c[1] = m, c[2] = B, c[3] = i, c[4] = ee;
  else ee = c[4];
  let v = ee,
    re, oe;
  if (c[5] !== g || c[6] !== m || c[7] !== i || c[8] !== v) re = () => {
    h(v, i, g || m)
  }, oe = [v, i, g, m], c[5] = g, c[6] = m, c[7] = i, c[8] = v, c[9] = re, c[10] = oe;
  else re = c[9], oe = c[10];
  R(re, oe);
  let te;
  if (c[11] !== f || c[12] !== l) te = f ?? X(l), c[11] = f, c[12] = l, c[13] = te;
  else te = c[13];
  let P = te,
    k = !u && (b || !P && !s),
    ne;
  if (c[14] !== s || c[15] !== k || c[16] !== C || c[17] !== u || c[18] !== o || c[19] !== P) ne = r(n, {
    color: P,
    dimColor: k,
    bold: s,
    inverse: u,
    children: [C, o]
  }), c[14] = s, c[15] = k, c[16] = C, c[17] = u, c[18] = o, c[19] = P, c[20] = ne;
  else ne = c[20];
  let G = ne,
    U;
  if (c[21] !== s || c[22] !== b || c[23] !== I || c[24] !== m) U = !I && r(V, {
    children: [e(n, {
      dimColor: b || !s,
      children: m ? "MR" : "PR"
    }), " "]
  }), c[21] = s, c[22] = b, c[23] = I, c[24] = m, c[25] = U;
  else U = c[25];
  const D = !u && be;
  let F;
  if (c[26] !== s || c[27] !== k || c[28] !== C || c[29] !== u || c[30] !== o || c[31] !== P || c[32] !== D) F = r(n, {
    color: P,
    dimColor: k,
    underline: D,
    bold: s,
    inverse: u,
    children: [C, o]
  }), c[26] = s, c[27] = k, c[28] = C, c[29] = u, c[30] = o, c[31] = P, c[32] = D, c[33] = F;
  else F = c[33];
  let O;
  if (c[34] !== G || c[35] !== F || c[36] !== v) O = e(bt, {
    url: v,
    fallback: G,
    assumeSupport: !0,
    children: F
  }), c[34] = G, c[35] = F, c[36] = v, c[37] = O;
  else O = c[37];
  let ie;
  if (c[38] !== O || c[39] !== U) ie = r(n, {
    children: [U, O]
  }), c[38] = O, c[39] = U, c[40] = ie;
  else ie = c[40];
  return ie
}

function X(d) {
  switch (d) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return
  }
}
export {
  l_,
  fyt,
  G7n,
  V7n,
  h5
};
