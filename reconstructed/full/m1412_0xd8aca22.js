// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Gt
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  wt
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  JAe
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  Oc
} from "B:/~BUN/root/chunk-q52x4j16.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  oU
} from "B:/~BUN/root/chunk-bxbr6qzf.js";
import {
  Le
} from "B:/~BUN/root/chunk-dk0c0nrh.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Lr
} from "B:/~BUN/root/chunk-m4ehcybg.js";
import {
  Vt,
  Pe,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();
var x = Vt(!1);

function EJe(a) {
  let t = w(2),
    {
      children: o
    } = a,
    l;
  if (t[0] !== o) l = e(x.Provider, {
    value: !0,
    children: o
  }), t[0] = o, t[1] = l;
  else l = t[1];
  return l
}

function Ed() {
  let l = w(3),
    a = Pe(x),
    o = Pe(oU),
    t = Oc("app:toggleTranscript", "Global", "ctrl+o");
  if (a || o) {
    return null
  }
  let i;
  if (l[0] === S) i = {
    keyCase: "lower"
  }, l[0] = i;
  else i = l[0];
  let m;
  if (l[1] !== t) m = e(n, {
    dimColor: !0,
    children: e(F, {
      chord: t,
      action: "expand",
      parens: !0,
      format: i
    })
  }), l[1] = t, l[2] = m;
  else m = l[2];
  return m
}

function c_(a) {
  let u = w(8),
    {
      count: o,
      unit: t,
      expandable: l
    } = a,
    i = t === void 0 ? "line" : t,
    m = l === void 0 ? !1 : l;
  if (o <= 0) {
    return null
  }
  let p;
  if (u[0] !== o || u[1] !== i) p = JAe(o, i), u[0] = o, u[1] = i, u[2] = p;
  else p = u[2];
  let c;
  if (u[3] !== m) c = m && r(V, {
    children: [" ", e(Ed, {})]
  }), u[3] = m, u[4] = c;
  else c = u[4];
  let d;
  if (u[5] !== p || u[6] !== c) d = r(n, {
    dimColor: !0,
    children: [p, c]
  }), u[5] = p, u[6] = c, u[7] = d;
  else d = u[7];
  return d
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
      i++, o++
    }
    if (o > 10) return !0
  }
  return !1
}

function X(a, o) {
  let t = 0;
  for (let l = 0; l <= o; l++) {
    if (t = a.indexOf(`
`, t), t === -1) return !1;
    t++
  }
  return !0
}

function eje(a) {
  return a.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "")
}

function Fp(a) {
  let m = w(25),
    {
      result: o,
      verbose: t,
      verbatim: l
    } = a,
    i = l === void 0 ? !1 : l,
    u, p, c, d, g, v, L;
  if (m[0] !== o || m[1] !== i || m[2] !== t) {
    let R;
    if (typeof o !== "string") R = "Tool execution failed";
    else {
      let E = (i ? wt(o) : eje(wt(Lr(o, "tool_use_error") ?? o)).replace(/<\/?error>/g, "")).trim();
      if (!t && !i && E.startsWith("InputValidationError: ")) R = "Invalid tool parameters";
      else if (E.startsWith("Error: ") || E.startsWith("Cancelled: ")) R = E;
      else R = `Error: ${E}`
    }
    d = Gt(R, `
`) + 1 - TJe;
    c = Le;
    p = s;
    L = "column";
    u = n;
    g = "error";
    v = t ? R : R.split(`
`).slice(0, TJe).join(`
`);
    m[0] = o, m[1] = i, m[2] = t, m[3] = u, m[4] = p, m[5] = c, m[6] = d, m[7] = g, m[8] = v, m[9] = L
  } else u = m[3], p = m[4], c = m[5], d = m[6], g = m[7], v = m[8], L = m[9];
  let A;
  if (m[10] !== u || m[11] !== g || m[12] !== v) A = e(u, {
    color: g,
    children: v
  }), m[10] = u, m[11] = g, m[12] = v, m[13] = A;
  else A = m[13];
  let h;
  if (m[14] !== d || m[15] !== t) h = !t && e(c_, {
    count: d,
    expandable: !0
  }), m[14] = d, m[15] = t, m[16] = h;
  else h = m[16];
  let y;
  if (m[17] !== p || m[18] !== L || m[19] !== A || m[20] !== h) y = r(p, {
    flexDirection: L,
    children: [A, h]
  }), m[17] = p, m[18] = L, m[19] = A, m[20] = h, m[21] = y;
  else y = m[21];
  let B;
  if (m[22] !== c || m[23] !== y) B = e(c, {
    children: y
  }), m[22] = c, m[23] = y, m[24] = B;
  else B = m[24];
  return B
}
export {
  EJe,
  Ed,
  c_,
  TJe,
  pZn,
  eje,
  Fp
};
