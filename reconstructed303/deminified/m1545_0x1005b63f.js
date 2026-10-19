// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { kN, _G } from "B:/~BUN/root/chunk-bvhc5fp3.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { wyt, $cn } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Fa } from "B:/~BUN/root/chunk-a3hh790f.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { Z, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
var v = "cyan_FOR_SUBAGENTS_ONLY";
function EI(a) {
  if (!a) return v;
  if (_G(a)) return kN[a];
  return `ansi:${a}`;
}
B();
var format = {
  keyCase: "lower"
};
function Lre(a) {
  let o = w(19),
    {
      displayName: displayName,
      qualifier: qualifier,
      count: count,
      addMargin: addMargin,
      fallbackLabel: fallbackLabel,
      body: body
    } = a,
    R = count === void 0 ? 1 : count,
    D = addMargin === void 0 ? !0 : addMargin,
    chord = Fa("app:toggleTranscript", "Global", "ctrl+o"),
    h;
  if (o[0] !== displayName || o[1] !== fallbackLabel) h = wyt(displayName) || fallbackLabel, o[0] = displayName, o[1] = fallbackLabel, o[2] = h;else h = o[2];
  let u = h,
    A;
  if (o[3] !== body) A = body ? $cn(body) : "", o[3] = body, o[4] = A;else A = o[4];
  let i = A;
  const marginTop = D ? 1 : 0;
  let P;
  if (o[5] === S) P = r(n, {
    "aria-hidden": !0,
    children: [te.pointerSmall, " "]
  }), o[5] = P;else P = o[5];
  const y = R === 1 ? "Message" : `${R} messages`,
    T = qualifier ? ` (${qualifier})` : "";
  let p;
  if (o[6] !== i) p = i ? r(n, {
    italic: !0,
    children: [": ", i]
  }) : "", o[6] = i, o[7] = p;else p = o[7];
  let l;
  if (o[8] !== chord) l = e(q, {
    chord: chord,
    action: "expand",
    parens: !0,
    format: format
  }), o[8] = chord, o[9] = l;else l = o[9];
  let children;
  if (o[10] !== u || o[11] !== l || o[12] !== y || o[13] !== T || o[14] !== p) children = r(n, {
    dimColor: !0,
    children: [P, y, " from @", u, T, p, " ", l]
  }), o[10] = u, o[11] = l, o[12] = y, o[13] = T, o[14] = p, o[15] = children;else children = o[15];
  let G;
  if (o[16] !== children || o[17] !== marginTop) G = e(s, {
    marginTop: marginTop,
    children: children
  }), o[16] = children, o[17] = marginTop, o[18] = G;else G = o[18];
  return G;
}
export { EI, Lre };