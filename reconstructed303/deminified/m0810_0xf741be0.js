// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { Tvr } from "B:/~BUN/root/chunk-78zw0pmb.js";
import { J3e } from "B:/~BUN/root/chunk-d69870x4.js";
import { Xwn } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Jvt } from "B:/~BUN/root/chunk-2jzp4p89.js";
import { Dye } from "B:/~BUN/root/chunk-0b70xt1j.js";
import { s3e, rj } from "B:/~BUN/root/chunk-j2ppas05.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Wxn, pCt, v6t } from "B:/~BUN/root/chunk-cy4hjzy6.js";
import { P, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
var s = {
  light: {
    background: "#f9f9f7",
    foreground: "#000000"
  },
  dark: {
    background: "#1f1f1e",
    foreground: "#ffffff"
  }
};
function o6o(i, n, t) {
  if (!t) return;
  let r;
  if (i === "auto") {
    if (n === void 0) return;
    r = n;
  } else r = v6t(i);
  return J3e(r) ? s.light : s.dark;
}
function l() {
  let t = w(4),
    [i, n] = y(Wxn),
    r,
    o;
  if (t[0] === S) r = () => pCt(() => n(Wxn())), o = [], t[0] = r, t[1] = o;else r = t[0], o = t[1];
  P(r, o);
  let m;
  if (t[2] !== i) m = o6o(Xwn(), i, Tvr()), t[2] = i, t[3] = m;else m = t[3];
  return m;
}
function kZn(i) {
  let m = w(9),
    {
      children: children,
      mouseTracking: mouseTracking,
      killRing: r
    } = i,
    surface = l(),
    c;
  if (m[0] !== children || m[1] !== r) c = e(Jvt, {
    handle: r,
    children: children
  }), m[0] = children, m[1] = r, m[2] = c;else c = m[2];
  let children_2 = c;
  if (s3e()) {
    let mouseTracking_2;
    if (m[3] !== mouseTracking) mouseTracking_2 = mouseTracking ?? rj(), m[3] = mouseTracking, m[4] = mouseTracking_2;else mouseTracking_2 = m[4];
    let p;
    if (m[5] !== surface || m[6] !== mouseTracking_2 || m[7] !== children_2) p = e(Dye, {
      mouseTracking: mouseTracking_2,
      surface: surface,
      children: children_2
    }), m[5] = surface, m[6] = mouseTracking_2, m[7] = children_2, m[8] = p;else p = m[8];
    return p;
  }
  return children_2;
}
function _ei() {
  if (I() === "windows" || a.WT_SESSION) process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1";
}
export { o6o, kZn, _ei };