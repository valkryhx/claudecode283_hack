// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Ga } from "B:/~BUN/root/chunk-fszjvjk0.js";
import { n, bt } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Kbe, Ny } from "B:/~BUN/root/chunk-0rtwbec7.js";
import { W } from "B:/~BUN/root/chunk-h23911wn.js";
import { RV } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { R, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
function l_(d) {
  let s = w(10),
    {
      added: added,
      removed: removed,
      bold: bold
    } = d;
  if (added === 0 && removed === 0) {
    return null;
  }
  let f;
  if (s[0] !== added || s[1] !== bold) f = added > 0 && r(n, {
    color: "diffAddedWord",
    bold: bold,
    children: ["+", added]
  }), s[0] = added, s[1] = bold, s[2] = f;else f = s[2];
  const b = added > 0 && removed > 0 && " ";
  let u;
  if (s[3] !== bold || s[4] !== removed) u = removed > 0 && r(n, {
    color: "diffRemovedWord",
    bold: bold,
    children: ["-", removed]
  }), s[3] = bold, s[4] = removed, s[5] = u;else u = s[5];
  let x;
  if (s[6] !== f || s[7] !== b || s[8] !== u) x = r(n, {
    children: [f, b, u]
  }), s[6] = f, s[7] = b, s[8] = u, s[9] = x;else x = s[9];
  return x;
}
N();
N();
var fyt = "current-pr";
function G7n(d, url) {
  if (!d || !url) return null;
  let i = d.kind === "cr" && !1,
    l = d.kind === "mr";
  return {
    prefix: l ? "MR" : "PR",
    label: `${l ? "!" : "#"}${d.number}`,
    url: url,
    dedupUrl: d.url,
    color: de(d.reviewState)
  };
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
      return;
  }
}
function h(d, o, i) {
  return;
}
function V7n(d, o, i) {
  R(() => {
    if (o === void 0) return;
    h(d, o, i === "cr" || i === "mr");
  }, [d, o, i]);
}
function fe(ge) {
  return ge.settings?.prUrlTemplate;
}
function h5(d) {
  let c = w(41),
    {
      number: number,
      url: url_2,
      reviewState: reviewState,
      bold: bold_2,
      color: color,
      dimColor: dimColor,
      inverse: inverse,
      underline: underline,
      hidePrefix: hidePrefix,
      kind: kind
    } = d,
    be = underline === void 0 ? !0 : underline,
    g = kind === "cr" && !1,
    m = kind === "mr",
    C = m ? "!" : "#",
    B = W(fe),
    ee;
  if (c[0] !== g || c[1] !== m || c[2] !== B || c[3] !== url_2) ee = g || m ? url_2 : RV(url_2, B), c[0] = g, c[1] = m, c[2] = B, c[3] = url_2, c[4] = ee;else ee = c[4];
  let url_3 = ee,
    re,
    oe;
  if (c[5] !== g || c[6] !== m || c[7] !== url_2 || c[8] !== url_3) re = () => {
    h(url_3, url_2, g || m);
  }, oe = [url_3, url_2, g, m], c[5] = g, c[6] = m, c[7] = url_2, c[8] = url_3, c[9] = re, c[10] = oe;else re = c[9], oe = c[10];
  R(re, oe);
  let te;
  if (c[11] !== color || c[12] !== reviewState) te = color ?? X(reviewState), c[11] = color, c[12] = reviewState, c[13] = te;else te = c[13];
  let color_2 = te,
    dimColor_2 = !inverse && (dimColor || !color_2 && !bold_2),
    ne;
  if (c[14] !== bold_2 || c[15] !== dimColor_2 || c[16] !== C || c[17] !== inverse || c[18] !== number || c[19] !== color_2) ne = r(n, {
    color: color_2,
    dimColor: dimColor_2,
    bold: bold_2,
    inverse: inverse,
    children: [C, number]
  }), c[14] = bold_2, c[15] = dimColor_2, c[16] = C, c[17] = inverse, c[18] = number, c[19] = color_2, c[20] = ne;else ne = c[20];
  let fallback = ne,
    U;
  if (c[21] !== bold_2 || c[22] !== dimColor || c[23] !== hidePrefix || c[24] !== m) U = !hidePrefix && r(V, {
    children: [e(n, {
      dimColor: dimColor || !bold_2,
      children: m ? "MR" : "PR"
    }), " "]
  }), c[21] = bold_2, c[22] = dimColor, c[23] = hidePrefix, c[24] = m, c[25] = U;else U = c[25];
  const underline_2 = !inverse && be;
  let children;
  if (c[26] !== bold_2 || c[27] !== dimColor_2 || c[28] !== C || c[29] !== inverse || c[30] !== number || c[31] !== color_2 || c[32] !== underline_2) children = r(n, {
    color: color_2,
    dimColor: dimColor_2,
    underline: underline_2,
    bold: bold_2,
    inverse: inverse,
    children: [C, number]
  }), c[26] = bold_2, c[27] = dimColor_2, c[28] = C, c[29] = inverse, c[30] = number, c[31] = color_2, c[32] = underline_2, c[33] = children;else children = c[33];
  let O;
  if (c[34] !== fallback || c[35] !== children || c[36] !== url_3) O = e(bt, {
    url: url_3,
    fallback: fallback,
    assumeSupport: !0,
    children: children
  }), c[34] = fallback, c[35] = children, c[36] = url_3, c[37] = O;else O = c[37];
  let ie;
  if (c[38] !== O || c[39] !== U) ie = r(n, {
    children: [U, O]
  }), c[38] = O, c[39] = U, c[40] = ie;else ie = c[40];
  return ie;
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
      return;
  }
}
export { l_, fyt, G7n, V7n, h5 };