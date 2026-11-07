// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { XU } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Px, W_r, RXe, fDt } from "B:/~BUN/root/chunk-qk8tvzkn.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
function Sb(r, o, t) {
  let n = W_r(Px),
    e = RXe(r, o, n);
  if (e === void 0) {
    let i = `${r}:${o}`,
      loggedShortcutFallbacks = Px.loggedShortcutFallbacks;
    if (!loggedShortcutFallbacks.has(i)) loggedShortcutFallbacks.add(i), fDt(r, o, t, "action_not_found");
    return t;
  }
  return e === null ? "" : e;
}
function h() {
  let r = Sb("app:toggleTranscript", "Global", "ctrl+o");
  return Se.dim(`(${r} to expand)`);
}
var d = 3,
  u = 10;
function b(r, o) {
  let t = r.split(`
`),
    n = [];
  for (let i of t) {
    let s = ce(i);
    if (s <= o) n.push(i.trimEnd());else {
      let a = 0;
      while (a < s) {
        let c = Bun.sliceAnsi(i, a, a + o);
        n.push(c.trimEnd()), a += o;
      }
    }
  }
  let e = n.length - d;
  if (e === 1) return {
    aboveTheFold: n.slice(0, d + 1).join(`
`).trimEnd(),
    remainingLines: 0
  };
  return {
    aboveTheFold: n.slice(0, d).join(`
`).trimEnd(),
    remainingLines: Math.max(0, e)
  };
}
function zas(r, o, t = !1) {
  let n = r.trimEnd();
  if (!n) return "";
  let e = Math.max(o - u, 10),
    i = d * e * 4,
    s = n.length > i,
    a = s ? n.slice(0, i) : n,
    {
      aboveTheFold: aboveTheFold,
      remainingLines: remainingLines
    } = b(a, e),
    m = remainingLines;
  if (s) {
    let g = 0,
      f = -1;
    for (;;) {
      if (f = n.indexOf(`
`, f + 1), f === -1) break;
      g++;
    }
    let p = Math.max(g + 1, Math.ceil(n.length / e));
    m = Math.max(remainingLines, p - d);
  }
  return [aboveTheFold, m > 0 ? Se.dim(XU(m) + (t ? "" : ` ${h()}`)) : ""].filter(Boolean).join(`
`);
}
function e1(r, o) {
  if (typeof r !== "string") return !1;
  let t = r.trimEnd(),
    n = 0,
    e = 0;
  for (let l = 0; l <= d; l++) {
    if (n = t.indexOf(`
`, n), n === -1) break;
    e++, n++;
  }
  if (n !== -1 && n < t.length) return !0;
  if (o === void 0) return !1;
  let i = Math.max(o - u, 10),
    s = d + 1,
    a = d * i * 4;
  if (t.length > a) return !0;
  if (e === 0) {
    let l = s * i;
    if (t.length <= l) return !1;
    return ce(t) > l;
  }
  let c = 0;
  for (let l of t.split(`
`)) if (c += Math.max(1, Math.ceil(ce(l) / i)), c > s) return !0;
  return !1;
}
export { Sb, zas, e1 };