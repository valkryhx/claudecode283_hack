// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  vUt,
  uH,
  jz,
  Ijn
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  ia
} from "B:/~BUN/root/chunk-q793s85g.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  re
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  Z,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var G = "cyan_FOR_SUBAGENTS_ONLY";

function jN(a) {
  if (!a) return G;
  if (jz(a)) return uH[a];
  return `ansi:${a}`
}
j();
var N = {
  keyCase: "lower"
};

function ehe(a) {
  let o = S(19),
    {
      displayName: f,
      qualifier: E,
      count: k,
      addMargin: M,
      fallbackLabel: c,
      body: t
    } = a,
    R = k === void 0 ? 1 : k,
    H = M === void 0 ? !0 : M,
    b = ia("app:toggleTranscript", "Global", "ctrl+o"),
    h;
  if (o[0] !== f || o[1] !== c) h = vUt(f) || c, o[0] = f, o[1] = c, o[2] = h;
  else h = o[2];
  let u = h,
    A;
  if (o[3] !== t) A = t ? Ijn(t) : "", o[3] = t, o[4] = A;
  else A = o[4];
  let i = A;
  const g = H ? 1 : 0;
  let P;
  if (o[5] === w) P = r(n, {
    "aria-hidden": !0,
    children: [re.pointerSmall, " "]
  }), o[5] = P;
  else P = o[5];
  const y = R === 1 ? "Message" : `${R} messages`,
    T = E ? ` (${E})` : "";
  let p;
  if (o[6] !== i) p = i ? r(n, {
    italic: !0,
    children: [": ", i]
  }) : "", o[6] = i, o[7] = p;
  else p = o[7];
  let l;
  if (o[8] !== b) l = e(Y, {
    chord: b,
    action: "expand",
    parens: !0,
    format: N
  }), o[8] = b, o[9] = l;
  else l = o[9];
  let m;
  if (o[10] !== u || o[11] !== l || o[12] !== y || o[13] !== T || o[14] !== p) m = r(n, {
    dimColor: !0,
    children: [P, y, " from @", u, T, p, " ", l]
  }), o[10] = u, o[11] = l, o[12] = y, o[13] = T, o[14] = p, o[15] = m;
  else m = o[15];
  let q;
  if (o[16] !== m || o[17] !== g) q = e(s, {
    marginTop: g,
    children: m
  }), o[16] = m, o[17] = g, o[18] = q;
  else q = o[18];
  return q
}
export {
  jN,
  ehe
};
