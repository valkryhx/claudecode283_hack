// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  Sio
} from "B:/~BUN/root/chunk-fc7k1zas.js";
import {
  STe
} from "B:/~BUN/root/chunk-apgsnbqk.js";
import {
  U5n
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s2t
} from "B:/~BUN/root/chunk-waswqpwd.js";
import {
  _Pe
} from "B:/~BUN/root/chunk-x46ek4kz.js";
import {
  N9e,
  HP
} from "B:/~BUN/root/chunk-p2ta953m.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Str,
  Uqt,
  QSn
} from "B:/~BUN/root/chunk-qed5a8pe.js";
import {
  O,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
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

function z6s(n, t, o) {
  if (!o) return;
  let r;
  if (n === "auto") {
    if (t === void 0) return;
    r = t
  } else r = QSn(n);
  return STe(r) ? s.light : s.dark
}

function l() {
  let o = S(4),
    [n, t] = y(Str),
    r, m;
  if (o[0] === w) r = () => Uqt(() => t(Str())), m = [], o[0] = r, o[1] = m;
  else r = o[0], m = o[1];
  O(r, m);
  let f;
  if (o[2] !== n) f = z6s(U5n(), n, Sio()), o[2] = n, o[3] = f;
  else f = o[3];
  return f
}

function b1r(n) {
  let f = S(9),
    {
      children: t,
      mouseTracking: o,
      killRing: r
    } = n,
    m = l(),
    c;
  if (f[0] !== t || f[1] !== r) c = e(s2t, {
    handle: r,
    children: t
  }), f[0] = t, f[1] = r, f[2] = c;
  else c = f[2];
  let a = c;
  if (N9e()) {
    let d;
    if (f[3] !== o) d = o ?? HP(), f[3] = o, f[4] = d;
    else d = f[4];
    let p;
    if (f[5] !== m || f[6] !== d || f[7] !== a) p = e(_Pe, {
      mouseTracking: d,
      surface: m,
      children: a
    }), f[5] = m, f[6] = d, f[7] = a, f[8] = p;
    else p = f[8];
    return p
  }
  return a
}

function Ema() {
  if (x() === "windows" || i.WT_SESSION) process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1"
}
export {
  z6s,
  b1r,
  Ema
};
