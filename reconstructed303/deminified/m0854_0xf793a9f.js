// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { iNe, Ev } from "B:/~BUN/root/chunk-sk7eej8z.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { ea } from "B:/~BUN/root/chunk-53tmhe2j.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { n, zt } from "B:/~BUN/root/chunk-damrp3r8.js";
import { V } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { J9 } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { P, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
B();
var Der = "current-pr";
function IVr(d, url) {
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
function S(d, o, i) {
  return;
}
function MVr(d, o, i) {
  P(() => {
    if (o === void 0) return;
    S(d, o, i === "cr" || i === "mr");
  }, [d, o, i]);
}
function fe(ge) {
  return ge.settings?.prUrlTemplate;
}
function Ire(d) {
  let c = w(41),
    {
      number: number,
      url: url_2,
      reviewState: reviewState,
      bold: bold,
      color: color,
      dimColor: dimColor,
      inverse: inverse,
      underline: underline,
      hidePrefix: hidePrefix,
      kind: kind
    } = d,
    be = underline === void 0 ? !0 : underline,
    R = kind === "cr" && !1,
    m = kind === "mr",
    C = m ? "!" : "#",
    I = V(fe),
    ee;
  if (c[0] !== R || c[1] !== m || c[2] !== I || c[3] !== url_2) ee = R || m ? url_2 : J9(url_2, I), c[0] = R, c[1] = m, c[2] = I, c[3] = url_2, c[4] = ee;else ee = c[4];
  let url_3 = ee,
    re,
    oe;
  if (c[5] !== R || c[6] !== m || c[7] !== url_2 || c[8] !== url_3) re = () => {
    S(url_3, url_2, R || m);
  }, oe = [url_3, url_2, R, m], c[5] = R, c[6] = m, c[7] = url_2, c[8] = url_3, c[9] = re, c[10] = oe;else re = c[9], oe = c[10];
  P(re, oe);
  let te;
  if (c[11] !== color || c[12] !== reviewState) te = color ?? J(reviewState), c[11] = color, c[12] = reviewState, c[13] = te;else te = c[13];
  let color_2 = te,
    dimColor_2 = !inverse && (dimColor || !color_2 && !bold),
    ne;
  if (c[14] !== bold || c[15] !== dimColor_2 || c[16] !== C || c[17] !== inverse || c[18] !== number || c[19] !== color_2) ne = r(n, {
    color: color_2,
    dimColor: dimColor_2,
    bold: bold,
    inverse: inverse,
    children: [C, number]
  }), c[14] = bold, c[15] = dimColor_2, c[16] = C, c[17] = inverse, c[18] = number, c[19] = color_2, c[20] = ne;else ne = c[20];
  let fallback = ne,
    U;
  if (c[21] !== bold || c[22] !== dimColor || c[23] !== hidePrefix || c[24] !== m) U = !hidePrefix && r(Q, {
    children: [e(n, {
      dimColor: dimColor || !bold,
      children: m ? "MR" : "PR"
    }), " "]
  }), c[21] = bold, c[22] = dimColor, c[23] = hidePrefix, c[24] = m, c[25] = U;else U = c[25];
  const underline_2 = !inverse && be;
  let children;
  if (c[26] !== bold || c[27] !== dimColor_2 || c[28] !== C || c[29] !== inverse || c[30] !== number || c[31] !== color_2 || c[32] !== underline_2) children = r(n, {
    color: color_2,
    dimColor: dimColor_2,
    underline: underline_2,
    bold: bold,
    inverse: inverse,
    children: [C, number]
  }), c[26] = bold, c[27] = dimColor_2, c[28] = C, c[29] = inverse, c[30] = number, c[31] = color_2, c[32] = underline_2, c[33] = children;else children = c[33];
  let O;
  if (c[34] !== fallback || c[35] !== children || c[36] !== url_3) O = e(zt, {
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
function J(d) {
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
function Hw(d) {
  let s = w(10),
    {
      added: added,
      removed: removed,
      bold: bold_2
    } = d;
  if (added === 0 && removed === 0) {
    return null;
  }
  let f;
  if (s[0] !== added || s[1] !== bold_2) f = added > 0 && r(n, {
    color: "diffAddedWord",
    bold: bold_2,
    children: ["+", added]
  }), s[0] = added, s[1] = bold_2, s[2] = f;else f = s[2];
  const b = added > 0 && removed > 0 && " ";
  let u;
  if (s[3] !== bold_2 || s[4] !== removed) u = removed > 0 && r(n, {
    color: "diffRemovedWord",
    bold: bold_2,
    children: ["-", removed]
  }), s[3] = bold_2, s[4] = removed, s[5] = u;else u = s[5];
  let x;
  if (s[6] !== f || s[7] !== b || s[8] !== u) x = r(n, {
    children: [f, b, u]
  }), s[6] = f, s[7] = b, s[8] = u, s[9] = x;else x = s[9];
  return x;
}
export { Hw, Der, IVr, MVr, Ire };