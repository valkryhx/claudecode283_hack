// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  gHe,
  tLr
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  z9t
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  mv
} from "B:/~BUN/root/chunk-h37egt7q.js";
import {
  AGt
} from "B:/~BUN/root/chunk-206ebgh5.js";
import {
  Nvt
} from "B:/~BUN/root/chunk-ve4gzwvf.js";
import {
  LM
} from "B:/~BUN/root/chunk-fd5dzvk6.js";
import {
  Hh
} from "B:/~BUN/root/chunk-81tfbmye.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Jt,
  ve,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();

function RGt(d) {
  let x = S(17),
    {
      command: o,
      args: a,
      color: m
    } = d,
    t = a === void 0 ? o : `${o} ${a}`,
    i;
  if (x[0] === w) i = z9t(), x[0] = i;
  else i = x[0];
  let U = i,
    [C, h] = y(!1),
    b = mv();
  if (!U) {
    let c;
    if (x[1] !== m || x[2] !== t) c = r(n, {
      underline: !0,
      color: m,
      children: ["/", t]
    }), x[1] = m, x[2] = t, x[3] = c;
    else c = x[3];
    return c
  }
  let c;
  if (x[4] !== o || x[5] !== t || x[6] !== b) c = (v) => {
    if (b(v)) {
      return
    }
    l("tengu_slash_link_clicked", {
      command: f(o)
    }), U(t, {
      kind: "human"
    })
  }, x[4] = o, x[5] = t, x[6] = b, x[7] = c;
  else c = x[7];
  let k, p;
  if (x[8] === w) k = () => h(!0), p = () => h(!1), x[8] = k, x[9] = p;
  else k = x[8], p = x[9];
  let u;
  if (x[10] !== m || x[11] !== C || x[12] !== t) u = r(n, {
    underline: !0,
    bold: C,
    color: m,
    children: ["/", t]
  }), x[10] = m, x[11] = C, x[12] = t, x[13] = u;
  else u = x[13];
  let T;
  if (x[14] !== c || x[15] !== u) T = e(s, {
    onClick: c,
    onMouseEnter: k,
    onMouseLeave: p,
    children: u
  }), x[14] = c, x[15] = u, x[16] = T;
  else T = x[16];
  return T
}
j();
j();
var kUe = Jt(!1),
  Fmn = Jt(!1);
var vne = Jt(!1);

function HPe(d) {
  let p = S(26),
    {
      tone: o,
      text: a,
      detail: m,
      subLines: t,
      linkify: x
    } = d,
    i = x ? LM : n,
    C = ve(Fmn) ? " " : d.state === "live" && !d.reducedMotion ? tLr[d.frame % tLr.length] : gHe,
    h = o === "gold" ? "warning" : o === "red" ? "error" : void 0,
    b = o === "red";
  const c = o === "dim",
    v = o === "red" ? "error:" : o === "gold" ? "warning:" : void 0,
    k = o === "dim";
  let u;
  if (p[0] !== C || p[1] !== h || p[2] !== c || p[3] !== v || p[4] !== k) u = r(n, {
    "aria-hidden": c,
    "aria-label": v,
    italic: !0,
    color: h,
    dimColor: k,
    children: [C, " "]
  }), p[0] = C, p[1] = h, p[2] = c, p[3] = v, p[4] = k, p[5] = u;
  else u = p[5];
  const T = b ? "error" : void 0,
    I = !b;
  let L;
  if (p[6] !== i || p[7] !== a) L = e(i, {
    children: a
  }), p[6] = i, p[7] = a, p[8] = L;
  else L = p[8];
  let R;
  if (p[9] !== i || p[10] !== m) R = m !== void 0 && r(n, {
    dimColor: !0,
    children: [" \xB7 ", e(i, {
      children: m
    })]
  }), p[9] = i, p[10] = m, p[11] = R;
  else R = p[11];
  let H;
  if (p[12] !== T || p[13] !== I || p[14] !== L || p[15] !== R) H = r(n, {
    italic: !0,
    color: T,
    dimColor: I,
    children: [L, R]
  }), p[12] = T, p[13] = I, p[14] = L, p[15] = R, p[16] = H;
  else H = p[16];
  let M;
  if (p[17] !== i || p[18] !== t) M = t?.map((ne, re) => e(n, {
    dimColor: !0,
    children: e(i, {
      children: ne
    })
  }, re)), p[17] = i, p[18] = t, p[19] = M;
  else M = p[19];
  let N;
  if (p[20] !== H || p[21] !== M) N = r(s, {
    flexDirection: "column",
    flexGrow: 1,
    children: [H, M]
  }), p[20] = H, p[21] = M, p[22] = N;
  else N = p[22];
  let z;
  if (p[23] !== N || p[24] !== u) z = r(s, {
    flexDirection: "row",
    children: [u, N]
  }), p[23] = N, p[24] = u, p[25] = z;
  else z = p[25];
  return z
}

function $E(d) {
  let o = AGt(),
    a = Nvt()?.isQueued === !0;
  return !d && !o && !a && Hh()
}

function iHo(d) {
  let o = $E(d),
    a = Nvt();
  return a?.isQueued === !0 ? a.noticeSystemLines : o
}
export {
  RGt,
  kUe,
  Fmn,
  vne,
  HPe,
  $E,
  iHo
};
