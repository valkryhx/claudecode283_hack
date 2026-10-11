// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  D$n
} from "B:/~BUN/root/chunk-8b53pnky.js";
import {
  tnn
} from "B:/~BUN/root/chunk-0av24qsq.js";
import {
  fVt
} from "B:/~BUN/root/chunk-1x7a47hz.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  QJe
} from "B:/~BUN/root/chunk-jpnyq4t7.js";
import {
  Dre
} from "B:/~BUN/root/chunk-ppvvc2j3.js";
import {
  aKe,
  HL
} from "B:/~BUN/root/chunk-rfp59gnb.js";
import {
  e
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  CYt,
  KZe,
  nkt
} from "B:/~BUN/root/chunk-qq6w89ha.js";
import {
  R,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
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

function j6r(i, n, t) {
  if (!t) return;
  let r;
  if (i === "auto") {
    if (n === void 0) return;
    r = n
  } else r = nkt(i);
  return tnn(r) ? s.light : s.dark
}

function l() {
  let t = w(4),
    [i, n] = g(CYt),
    r, o;
  if (t[0] === S) r = () => KZe(() => n(CYt())), o = [], t[0] = r, t[1] = o;
  else r = t[0], o = t[1];
  R(r, o);
  let m;
  if (t[2] !== i) m = j6r(fVt(), i, D$n()), t[2] = i, t[3] = m;
  else m = t[3];
  return m
}

function Lbn(i) {
  let m = w(9),
    {
      children: n,
      mouseTracking: t,
      killRing: r
    } = i,
    o = l(),
    c;
  if (m[0] !== n || m[1] !== r) c = e(QJe, {
    handle: r,
    children: n
  }), m[0] = n, m[1] = r, m[2] = c;
  else c = m[2];
  let f = c;
  if (aKe()) {
    let d;
    if (m[3] !== t) d = t ?? HL(), m[3] = t, m[4] = d;
    else d = m[4];
    let p;
    if (m[5] !== o || m[6] !== d || m[7] !== f) p = e(Dre, {
      mouseTracking: d,
      surface: o,
      children: f
    }), m[5] = o, m[6] = d, m[7] = f, m[8] = p;
    else p = m[8];
    return p
  }
  return f
}

function rqo() {
  if (O() === "windows" || a.WT_SESSION) process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1"
}
export {
  j6r,
  Lbn,
  rqo
};
