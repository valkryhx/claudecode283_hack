// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { sI, EF } from "B:/~BUN/root/chunk-rdxve5qj.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { xFt, OFt } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Oc } from "B:/~BUN/root/chunk-q52x4j16.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { X, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
var v = "cyan_FOR_SUBAGENTS_ONLY";
function UC(a) {
  if (!a) return v;
  if (EF(a)) return sI[a];
  return `ansi:${a}`;
}
N();
var format = {
  keyCase: "lower"
};
function y5(a) {
  let o = w(19),
    {
      displayName: displayName,
      qualifier: qualifier,
      count: count,
      addMargin: addMargin,
      fallbackLabel: fallbackLabel,
      body: body
    } = a,
    h = count === void 0 ? 1 : count,
    D = addMargin === void 0 ? !0 : addMargin,
    chord = Oc("app:toggleTranscript", "Global", "ctrl+o"),
    A;
  if (o[0] !== displayName || o[1] !== fallbackLabel) A = xFt(displayName) || fallbackLabel, o[0] = displayName, o[1] = fallbackLabel, o[2] = A;else A = o[2];
  let u = A,
    P;
  if (o[3] !== body) P = body ? OFt(body) : "", o[3] = body, o[4] = P;else P = o[4];
  let i = P;
  const marginTop = D ? 1 : 0;
  let q;
  if (o[5] === S) q = r(n, {
    "aria-hidden": !0,
    children: [Z.pointerSmall, " "]
  }), o[5] = q;else q = o[5];
  const y = h === 1 ? "Message" : `${h} messages`,
    T = qualifier ? ` (${qualifier})` : "";
  let p;
  if (o[6] !== i) p = i ? r(n, {
    italic: !0,
    children: [": ", i]
  }) : "", o[6] = i, o[7] = p;else p = o[7];
  let l;
  if (o[8] !== chord) l = e(F, {
    chord: chord,
    action: "expand",
    parens: !0,
    format: format
  }), o[8] = chord, o[9] = l;else l = o[9];
  let children;
  if (o[10] !== u || o[11] !== l || o[12] !== y || o[13] !== T || o[14] !== p) children = r(n, {
    dimColor: !0,
    children: [q, y, " from @", u, T, p, " ", l]
  }), o[10] = u, o[11] = l, o[12] = y, o[13] = T, o[14] = p, o[15] = children;else children = o[15];
  let G;
  if (o[16] !== children || o[17] !== marginTop) G = e(s, {
    marginTop: marginTop,
    children: children
  }), o[16] = children, o[17] = marginTop, o[18] = G;else G = o[18];
  return G;
}
export { UC, y5 };