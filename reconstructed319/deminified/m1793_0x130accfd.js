// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ot, s, pl } from "B:/~BUN/root/chunk-qey16aan.js";
import { HPe } from "B:/~BUN/root/chunk-n5qt0bp0.js";
import { gp } from "B:/~BUN/root/chunk-nyy541yq.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
var t = 150;
function CGt(M) {
  let p = S(8),
    {
      tone: tone,
      text: text
    } = M,
    T = gp(),
    N = ot(),
    reducedMotion = T || N,
    [ref, P] = pl(reducedMotion ? null : t);
  const frame = Math.floor(P / t);
  let children;
  if (p[0] !== reducedMotion || p[1] !== frame || p[2] !== text || p[3] !== tone) children = e(HPe, {
    state: "live",
    tone: tone,
    text: text,
    linkify: !1,
    frame: frame,
    reducedMotion: reducedMotion
  }), p[0] = reducedMotion, p[1] = frame, p[2] = text, p[3] = tone, p[4] = children;else children = p[4];
  let m;
  if (p[5] !== ref || p[6] !== children) m = e(s, {
    ref: ref,
    flexDirection: "column",
    children: children
  }), p[5] = ref, p[6] = children, p[7] = m;else m = p[7];
  return m;
}
var FPe = 0;
export { CGt, FPe };