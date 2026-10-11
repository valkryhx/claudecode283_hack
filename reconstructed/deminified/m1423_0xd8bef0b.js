// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { Wer } from "B:/~BUN/root/chunk-trcn2d68.js";
import { b, J } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Zn } from "B:/~BUN/root/chunk-1x7a47hz.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { n, Jr } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Le } from "B:/~BUN/root/chunk-dk0c0nrh.js";
import { oU } from "B:/~BUN/root/chunk-bxbr6qzf.js";
import { q_ } from "B:/~BUN/root/chunk-y1h4hnnm.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { tEr } from "B:/~BUN/root/chunk-pwpgxxsc.js";
import { Vt, Pe, X, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
N();
N();
var c = Vt(!1);
function gwn(r) {
  let s = w(2),
    {
      children: children
    } = r,
    o;
  if (s[0] !== children) o = e(c.Provider, {
    value: !0,
    children: children
  }), s[0] = children, s[1] = o;else o = s[1];
  return o;
}
function u() {
  return Pe(c);
}
function P(r) {
  try {
    let t = J(r),
      s = b(t),
      o = r.replaceAll("\\/", "/").replace(/\s+/g, ""),
      m = s.replace(/\s+/g, "");
    if (o !== m) return r;
    return b(t, null, 2);
  } catch {
    return r;
  }
}
var A = 1e4;
function L(r) {
  if (r.length > A) return r;
  return r.split(`
`).map(P).join(`
`);
}
var C = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,
  I = 1e5;
function hwn(r, themeName) {
  if (r.length > I) return r;
  let s = o => o.replace(C, m => q_(m, void 0, {
    themeName: themeName
  }));
  if (!r.includes(Wer)) return s(r);
  return r.split(`
`).map(item => item.includes(Wer) ? item : s(item)).join(`
`);
}
function uT(r) {
  let l = w(14),
    {
      content: content,
      verbose: verbose,
      isError: isError,
      isWarning: isWarning
    } = r,
    {
      columns: columns
    } = ve(),
    [g] = Zn(),
    G = u(),
    h = Pe(oU),
    U = verbose || G,
    v;
  if (l[0] !== content || l[1] !== g) v = hwn(L(content), g), l[0] = content, l[1] = g, l[2] = v;else v = l[2];
  let a = v,
    R;
  fr: {
    if (U) {
      let i;
      if (l[3] !== a) i = f(a), l[3] = a, l[4] = i;else i = l[4];
      R = i;
      break fr;
    }
    let i;
    if (l[5] !== columns || l[6] !== a || l[7] !== h) i = f(tEr(a, columns, h)), l[5] = columns, l[6] = a, l[7] = h, l[8] = i;else i = l[8];
    R = i;
  }
  let children_2 = R,
    color = isError ? "error" : isWarning ? "warning" : void 0,
    children_3;
  if (l[9] !== children_2) children_3 = e(Jr, {
    children: children_2
  }), l[9] = children_2, l[10] = children_3;else children_3 = l[10];
  let E;
  if (l[11] !== color || l[12] !== children_3) E = e(Le, {
    children: e(n, {
      color: color,
      children: children_3
    })
  }), l[11] = color, l[12] = children_3, l[13] = E;else E = l[13];
  return E;
}
function f(r) {
  return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g, "");
}
export { gwn, hwn, uT };