// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  l6e,
  TS
} from "B:/~BUN/root/chunk-y781qzhe.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  xa
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  n,
  sn
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  G
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  moe
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  O,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
j();
var Ujr = "current-pr";

function eFo(l, o) {
  if (!l || !o) return null;
  let d = l.kind === "cr" && !1,
    u = l.kind === "mr";
  return {
    prefix: u ? "MR" : "PR",
    label: `${u?"!":"#"}${l.number}`,
    url: o,
    dedupUrl: l.url,
    color: te(l.reviewState)
  }
}

function te(l) {
  switch (l) {
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

function T(l, o, d) {
  return
}

function tFo(l, o, d) {
  O(() => {
    if (o === void 0) return;
    T(l, o, d === "cr" || d === "mr")
  }, [l, o, d])
}

function pe(ce) {
  return ce.settings?.prUrlTemplate
}

function Yme(l) {
  let m = S(39),
    {
      number: o,
      url: d,
      reviewState: u,
      bold: s,
      color: p,
      dimColor: f,
      underline: P,
      hidePrefix: y,
      kind: Q
    } = l,
    Y = P === void 0 ? !0 : P,
    b = Q === "cr" && !1,
    a = Q === "mr",
    C = a ? "!" : "#",
    A = G(pe),
    V;
  if (m[0] !== b || m[1] !== a || m[2] !== A || m[3] !== d) V = b || a ? d : moe(d, A), m[0] = b, m[1] = a, m[2] = A, m[3] = d, m[4] = V;
  else V = m[4];
  let R = V,
    X, Z;
  if (m[5] !== b || m[6] !== a || m[7] !== d || m[8] !== R) X = () => {
    T(R, d, b || a)
  }, Z = [R, d, b, a], m[5] = b, m[6] = a, m[7] = d, m[8] = R, m[9] = X, m[10] = Z;
  else X = m[9], Z = m[10];
  O(X, Z);
  let ee;
  if (m[11] !== p || m[12] !== u) ee = p ?? z(u), m[11] = p, m[12] = u, m[13] = ee;
  else ee = m[13];
  let _ = ee,
    v = f || !_ && !s,
    re;
  if (m[14] !== s || m[15] !== v || m[16] !== C || m[17] !== o || m[18] !== _) re = r(n, {
    color: _,
    dimColor: v,
    bold: s,
    children: [C, o]
  }), m[14] = s, m[15] = v, m[16] = C, m[17] = o, m[18] = _, m[19] = re;
  else re = m[19];
  let I = re,
    L;
  if (m[20] !== s || m[21] !== f || m[22] !== y || m[23] !== a) L = !y && r(ne, {
    children: [e(n, {
      dimColor: f || !s,
      children: a ? "MR" : "PR"
    }), " "]
  }), m[20] = s, m[21] = f, m[22] = y, m[23] = a, m[24] = L;
  else L = m[24];
  let x;
  if (m[25] !== s || m[26] !== v || m[27] !== C || m[28] !== o || m[29] !== _ || m[30] !== Y) x = r(n, {
    color: _,
    dimColor: v,
    underline: Y,
    bold: s,
    children: [C, o]
  }), m[25] = s, m[26] = v, m[27] = C, m[28] = o, m[29] = _, m[30] = Y, m[31] = x;
  else x = m[31];
  let U;
  if (m[32] !== I || m[33] !== x || m[34] !== R) U = e(sn, {
    url: R,
    fallback: I,
    assumeSupport: !0,
    children: x
  }), m[32] = I, m[33] = x, m[34] = R, m[35] = U;
  else U = m[35];
  let oe;
  if (m[36] !== L || m[37] !== U) oe = r(n, {
    children: [L, U]
  }), m[36] = L, m[37] = U, m[38] = oe;
  else oe = m[38];
  return oe
}

function z(l) {
  switch (l) {
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

function UC(l) {
  let s = S(10),
    {
      added: o,
      removed: d,
      bold: u
    } = l;
  if (o === 0 && d === 0) {
    return null
  }
  let p;
  if (s[0] !== o || s[1] !== u) p = o > 0 && r(n, {
    color: "diffAddedWord",
    bold: u,
    children: ["+", o]
  }), s[0] = o, s[1] = u, s[2] = p;
  else p = s[2];
  const f = o > 0 && d > 0 && " ";
  let P;
  if (s[3] !== u || s[4] !== d) P = d > 0 && r(n, {
    color: "diffRemovedWord",
    bold: u,
    children: ["-", d]
  }), s[3] = u, s[4] = d, s[5] = P;
  else P = s[5];
  let y;
  if (s[6] !== p || s[7] !== f || s[8] !== P) y = r(n, {
    children: [p, f, P]
  }), s[6] = p, s[7] = f, s[8] = P, s[9] = y;
  else y = s[9];
  return y
}
export {
  UC,
  Ujr,
  eFo,
  tFo,
  Yme
};
