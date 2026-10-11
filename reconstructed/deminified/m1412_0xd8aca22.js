// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { JAe } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Oc } from "B:/~BUN/root/chunk-q52x4j16.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { oU } from "B:/~BUN/root/chunk-bxbr6qzf.js";
import { Le } from "B:/~BUN/root/chunk-dk0c0nrh.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Lr } from "B:/~BUN/root/chunk-m4ehcybg.js";
import { Vt, Pe, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();
var x = Vt(!1);
function EJe(a) {
  let t = w(2),
    {
      children: children
    } = a,
    l;
  if (t[0] !== children) l = e(x.Provider, {
    value: !0,
    children: children
  }), t[0] = children, t[1] = l;else l = t[1];
  return l;
}
function Ed() {
  let l = w(3),
    a = Pe(x),
    o = Pe(oU),
    chord = Oc("app:toggleTranscript", "Global", "ctrl+o");
  if (a || o) {
    return null;
  }
  let format;
  if (l[0] === S) format = {
    keyCase: "lower"
  }, l[0] = format;else format = l[0];
  let m;
  if (l[1] !== chord) m = e(n, {
    dimColor: !0,
    children: e(F, {
      chord: chord,
      action: "expand",
      parens: !0,
      format: format
    })
  }), l[1] = chord, l[2] = m;else m = l[2];
  return m;
}
function c_(a) {
  let u = w(8),
    {
      count: count,
      unit: unit,
      expandable: expandable
    } = a,
    i = unit === void 0 ? "line" : unit,
    m = expandable === void 0 ? !1 : expandable;
  if (count <= 0) {
    return null;
  }
  let p;
  if (u[0] !== count || u[1] !== i) p = JAe(count, i), u[0] = count, u[1] = i, u[2] = p;else p = u[2];
  let c;
  if (u[3] !== m) c = m && r(V, {
    children: [" ", e(Ed, {})]
  }), u[3] = m, u[4] = c;else c = u[4];
  let d;
  if (u[5] !== p || u[6] !== c) d = r(n, {
    dimColor: !0,
    children: [p, c]
  }), u[5] = p, u[6] = c, u[7] = d;else d = u[7];
  return d;
}
var TJe = 10;
function pZn(a) {
  if (typeof a === "string") return X(a, 9);
  if (!Array.isArray(a)) return !1;
  let o = 0;
  for (let t of a) {
    if (o += 1, o > 10) return !0;
    if (t.type !== "text") continue;
    let l = t.text,
      i = 0;
    while (o <= 10) {
      if (i = l.indexOf(`
`, i), i === -1) break;
      i++, o++;
    }
    if (o > 10) return !0;
  }
  return !1;
}
function X(a, o) {
  let t = 0;
  for (let l = 0; l <= o; l++) {
    if (t = a.indexOf(`
`, t), t === -1) return !1;
    t++;
  }
  return !0;
}
function eje(a) {
  return a.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "");
}
function Fp(a) {
  let m = w(25),
    {
      result: result,
      verbose: verbose,
      verbatim: verbatim
    } = a,
    i = verbatim === void 0 ? !1 : verbatim,
    u,
    p,
    c,
    count_2,
    color,
    children_2,
    flexDirection;
  if (m[0] !== result || m[1] !== i || m[2] !== verbose) {
    let R;
    if (typeof result !== "string") R = "Tool execution failed";else {
      let E = (i ? wt(result) : eje(wt(Lr(result, "tool_use_error") ?? result)).replace(/<\/?error>/g, "")).trim();
      if (!verbose && !i && E.startsWith("InputValidationError: ")) R = "Invalid tool parameters";else if (E.startsWith("Error: ") || E.startsWith("Cancelled: ")) R = E;else R = `Error: ${E}`;
    }
    count_2 = Gt(R, `
`) + 1 - TJe;
    c = Le;
    p = s;
    flexDirection = "column";
    u = n;
    color = "error";
    children_2 = verbose ? R : R.split(`
`).slice(0, TJe).join(`
`);
    m[0] = result, m[1] = i, m[2] = verbose, m[3] = u, m[4] = p, m[5] = c, m[6] = count_2, m[7] = color, m[8] = children_2, m[9] = flexDirection;
  } else u = m[3], p = m[4], c = m[5], count_2 = m[6], color = m[7], children_2 = m[8], flexDirection = m[9];
  let A;
  if (m[10] !== u || m[11] !== color || m[12] !== children_2) A = e(u, {
    color: color,
    children: children_2
  }), m[10] = u, m[11] = color, m[12] = children_2, m[13] = A;else A = m[13];
  let h;
  if (m[14] !== count_2 || m[15] !== verbose) h = !verbose && e(c_, {
    count: count_2,
    expandable: !0
  }), m[14] = count_2, m[15] = verbose, m[16] = h;else h = m[16];
  let children_3;
  if (m[17] !== p || m[18] !== flexDirection || m[19] !== A || m[20] !== h) children_3 = r(p, {
    flexDirection: flexDirection,
    children: [A, h]
  }), m[17] = p, m[18] = flexDirection, m[19] = A, m[20] = h, m[21] = children_3;else children_3 = m[21];
  let B;
  if (m[22] !== c || m[23] !== children_3) B = e(c, {
    children: children_3
  }), m[22] = c, m[23] = children_3, m[24] = B;else B = m[24];
  return B;
}
export { EJe, Ed, c_, TJe, pZn, eje, Fp };