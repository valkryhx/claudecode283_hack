// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { l6e, TS } from "B:/~BUN/root/chunk-y781qzhe.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { xa } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { n, sn } from "B:/~BUN/root/chunk-qey16aan.js";
import { G } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { moe } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { O, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
j();
var Ujr = "current-pr";
function eFo(l, url) {
  if (!l || !url) return null;
  let d = l.kind === "cr" && !1,
    u = l.kind === "mr";
  return {
    prefix: u ? "MR" : "PR",
    label: `${u ? "!" : "#"}${l.number}`,
    url: url,
    dedupUrl: l.url,
    color: te(l.reviewState)
  };
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
      return;
  }
}
function T(l, o, d) {
  return;
}
function tFo(l, o, d) {
  O(() => {
    if (o === void 0) return;
    T(l, o, d === "cr" || d === "mr");
  }, [l, o, d]);
}
function pe(ce) {
  return ce.settings?.prUrlTemplate;
}
function Yme(l) {
  let m = S(39),
    {
      number: number,
      url: url_2,
      reviewState: reviewState,
      bold: bold,
      color: color,
      dimColor: dimColor,
      underline: underline,
      hidePrefix: hidePrefix,
      kind: kind
    } = l,
    underline_2 = underline === void 0 ? !0 : underline,
    b = kind === "cr" && !1,
    a = kind === "mr",
    C = a ? "!" : "#",
    A = G(pe),
    V;
  if (m[0] !== b || m[1] !== a || m[2] !== A || m[3] !== url_2) V = b || a ? url_2 : moe(url_2, A), m[0] = b, m[1] = a, m[2] = A, m[3] = url_2, m[4] = V;else V = m[4];
  let url_3 = V,
    X,
    Z;
  if (m[5] !== b || m[6] !== a || m[7] !== url_2 || m[8] !== url_3) X = () => {
    T(url_3, url_2, b || a);
  }, Z = [url_3, url_2, b, a], m[5] = b, m[6] = a, m[7] = url_2, m[8] = url_3, m[9] = X, m[10] = Z;else X = m[9], Z = m[10];
  O(X, Z);
  let ee;
  if (m[11] !== color || m[12] !== reviewState) ee = color ?? z(reviewState), m[11] = color, m[12] = reviewState, m[13] = ee;else ee = m[13];
  let color_2 = ee,
    dimColor_2 = dimColor || !color_2 && !bold,
    re;
  if (m[14] !== bold || m[15] !== dimColor_2 || m[16] !== C || m[17] !== number || m[18] !== color_2) re = r(n, {
    color: color_2,
    dimColor: dimColor_2,
    bold: bold,
    children: [C, number]
  }), m[14] = bold, m[15] = dimColor_2, m[16] = C, m[17] = number, m[18] = color_2, m[19] = re;else re = m[19];
  let fallback = re,
    L;
  if (m[20] !== bold || m[21] !== dimColor || m[22] !== hidePrefix || m[23] !== a) L = !hidePrefix && r(ne, {
    children: [e(n, {
      dimColor: dimColor || !bold,
      children: a ? "MR" : "PR"
    }), " "]
  }), m[20] = bold, m[21] = dimColor, m[22] = hidePrefix, m[23] = a, m[24] = L;else L = m[24];
  let children;
  if (m[25] !== bold || m[26] !== dimColor_2 || m[27] !== C || m[28] !== number || m[29] !== color_2 || m[30] !== underline_2) children = r(n, {
    color: color_2,
    dimColor: dimColor_2,
    underline: underline_2,
    bold: bold,
    children: [C, number]
  }), m[25] = bold, m[26] = dimColor_2, m[27] = C, m[28] = number, m[29] = color_2, m[30] = underline_2, m[31] = children;else children = m[31];
  let U;
  if (m[32] !== fallback || m[33] !== children || m[34] !== url_3) U = e(sn, {
    url: url_3,
    fallback: fallback,
    assumeSupport: !0,
    children: children
  }), m[32] = fallback, m[33] = children, m[34] = url_3, m[35] = U;else U = m[35];
  let oe;
  if (m[36] !== L || m[37] !== U) oe = r(n, {
    children: [L, U]
  }), m[36] = L, m[37] = U, m[38] = oe;else oe = m[38];
  return oe;
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
      return;
  }
}
function UC(l) {
  let s = S(10),
    {
      added: added,
      removed: removed,
      bold: bold_2
    } = l;
  if (added === 0 && removed === 0) {
    return null;
  }
  let p;
  if (s[0] !== added || s[1] !== bold_2) p = added > 0 && r(n, {
    color: "diffAddedWord",
    bold: bold_2,
    children: ["+", added]
  }), s[0] = added, s[1] = bold_2, s[2] = p;else p = s[2];
  const f = added > 0 && removed > 0 && " ";
  let P;
  if (s[3] !== bold_2 || s[4] !== removed) P = removed > 0 && r(n, {
    color: "diffRemovedWord",
    bold: bold_2,
    children: ["-", removed]
  }), s[3] = bold_2, s[4] = removed, s[5] = P;else P = s[5];
  let y;
  if (s[6] !== p || s[7] !== f || s[8] !== P) y = r(n, {
    children: [p, f, P]
  }), s[6] = p, s[7] = f, s[8] = P, s[9] = y;else y = s[9];
  return y;
}
export { UC, Ujr, eFo, tFo, Yme };