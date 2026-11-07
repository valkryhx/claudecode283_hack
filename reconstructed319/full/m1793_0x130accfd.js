// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  ot,
  s,
  pl
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  HPe
} from "B:/~BUN/root/chunk-n5qt0bp0.js";
import {
  gp
} from "B:/~BUN/root/chunk-nyy541yq.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
var t = 150;

function CGt(M) {
  let p = S(8),
    {
      tone: n,
      text: i
    } = M,
    T = gp(),
    N = ot(),
    o = T || N,
    [c, P] = pl(o ? null : t);
  const f = Math.floor(P / t);
  let r;
  if (p[0] !== o || p[1] !== f || p[2] !== i || p[3] !== n) r = e(HPe, {
    state: "live",
    tone: n,
    text: i,
    linkify: !1,
    frame: f,
    reducedMotion: o
  }), p[0] = o, p[1] = f, p[2] = i, p[3] = n, p[4] = r;
  else r = p[4];
  let m;
  if (p[5] !== c || p[6] !== r) m = e(s, {
    ref: c,
    flexDirection: "column",
    children: r
  }), p[5] = c, p[6] = r, p[7] = m;
  else m = p[7];
  return m
}
var FPe = 0;
export {
  CGt,
  FPe
};
