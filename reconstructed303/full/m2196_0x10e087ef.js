// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Te
} from "B:/~BUN/root/chunk-smy4yvhm.js";
import {
  F
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  ce
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  Gu,
  d_
} from "B:/~BUN/root/chunk-653rvs3k.js";
import {
  Uw
} from "B:/~BUN/root/chunk-f2zqsz1c.js";
import {
  ze
} from "B:/~BUN/root/chunk-yqm8ptb8.js";
import {
  dY
} from "B:/~BUN/root/chunk-satnn8a8.js";
import {
  Q,
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
import {
  relative as G
} from "path";
var _ = 10;

function Nre(I) {
  let t = w(38),
    {
      file_path: l,
      operation: p,
      patch: h,
      firstLine: R,
      fileContent: C,
      content: v,
      style: L,
      verbose: m
    } = I,
    {
      columns: q
    } = Te(),
    d;
  if (t[0] !== p) d = r(n, {
    color: "subtle",
    children: ["User rejected ", p, " to "]
  }), t[0] = p, t[1] = d;
  else d = t[1];
  let c;
  if (t[2] !== l || t[3] !== m) c = m ? l : G(ce(), l), t[2] = l, t[3] = m, t[4] = c;
  else c = t[4];
  let P;
  if (t[5] !== c) P = e(n, {
    bold: !0,
    color: "subtle",
    children: c
  }), t[5] = c, t[6] = P;
  else P = t[6];
  let k;
  if (t[7] !== d || t[8] !== P) k = r(s, {
    flexDirection: "row",
    children: [d, P]
  }), t[7] = d, t[8] = P, t[9] = k;
  else k = t[9];
  let o = k;
  if (L === "condensed" && !m) {
    let i;
    if (t[10] !== o) i = e(ze, {
      children: o
    }), t[10] = o, t[11] = i;
    else i = t[11];
    return i
  }
  if (p === "write" && v !== void 0) {
    let a, i;
    if (t[12] !== v || t[13] !== m) {
      let u = v.split(`
`);
      a = u.length - _;
      i = m ? v : u.slice(0, _).join(`
`);
      t[12] = v, t[13] = m, t[14] = a, t[15] = i
    } else a = t[14], i = t[15];
    let x = i;
    const f = x || "(No content)";
    const b = q - 12;
    let H;
    if (t[16] !== l || t[17] !== f || t[18] !== b) H = e(Uw, {
      code: f,
      filePath: l,
      width: b,
      dim: !0
    }), t[16] = l, t[17] = f, t[18] = b, t[19] = H;
    else H = t[19];
    let A;
    if (t[20] !== a || t[21] !== m) A = !m && e(d_, {
      count: a
    }), t[20] = a, t[21] = m, t[22] = A;
    else A = t[22];
    let z;
    if (t[23] !== H || t[24] !== A || t[25] !== o) z = e(ze, {
      children: r(s, {
        flexDirection: "column",
        children: [o, H, A]
      })
    }), t[23] = H, t[24] = A, t[25] = o, t[26] = z;
    else z = t[26];
    return z
  }
  if (!h || h.length === 0) {
    let i;
    if (t[27] !== o) i = e(ze, {
      children: o
    }), t[27] = o, t[28] = i;
    else i = t[28];
    return i
  }
  const i = q - 12;
  let f;
  if (t[29] !== C || t[30] !== l || t[31] !== R || t[32] !== h || t[33] !== i) f = e(dY, {
    hunks: h,
    dim: !0,
    width: i,
    filePath: l,
    firstLine: R,
    fileContent: C
  }), t[29] = C, t[30] = l, t[31] = R, t[32] = h, t[33] = i, t[34] = f;
  else f = t[34];
  let b;
  if (t[35] !== f || t[36] !== o) b = e(ze, {
    children: r(s, {
      flexDirection: "column",
      children: [o, f]
    })
  }), t[35] = f, t[36] = o, t[37] = b;
  else b = t[37];
  return b
}

function ht(H) {
  return H.startsWith("+")
}

function at(A, z) {
  return A + F(z.lines, ht)
}

function vt(Pt) {
  return Pt.startsWith("-")
}

function pt(bt, xt) {
  return bt + F(xt.lines, vt)
}

function FGt(I) {
  let c = w(25),
    {
      filePath: l,
      structuredPatch: p,
      firstLine: h,
      fileContent: R,
      style: C,
      verbose: v,
      previewHint: L,
      collapsed: m
    } = I,
    {
      columns: q
    } = Te(),
    t = p.reduce(at, 0),
    d = p.reduce(pt, 0),
    P;
  if (c[0] !== t) P = t > 0 ? r(Q, {
    children: ["Added ", e(n, {
      bold: !0,
      children: t
    }), " ", t > 1 ? "lines" : "line"]
  }) : null, c[0] = t, c[1] = P;
  else P = c[1];
  const k = t > 0 && d > 0 ? ", " : null;
  let o;
  if (c[2] !== t || c[3] !== d) o = d > 0 ? r(Q, {
    children: [t === 0 ? "R" : "r", "emoved ", e(n, {
      bold: !0,
      children: d
    }), " ", d > 1 ? "lines" : "line"]
  }) : null, c[2] = t, c[3] = d, c[4] = o;
  else o = c[4];
  let i;
  if (c[5] !== P || c[6] !== k || c[7] !== o) i = r(n, {
    children: [P, k, o]
  }), c[5] = P, c[6] = k, c[7] = o, c[8] = i;
  else i = c[8];
  let a = i;
  if (L) {
    if (C !== "condensed" && !v) {
      let u;
      if (c[9] !== L) u = e(ze, {
        children: e(n, {
          dimColor: !0,
          children: L
        })
      }), c[9] = L, c[10] = u;
      else u = c[10];
      return u
    }
  } else if (C === "condensed" && !v) {
    return a
  } else if (m && !v && t + d > 0) {
    let u;
    if (c[11] === S) u = e(Gu, {}), c[11] = u;
    else u = c[11];
    let x;
    if (c[12] !== a) x = e(ze, {
      children: r(n, {
        children: [a, " ", u]
      })
    }), c[12] = a, c[13] = x;
    else x = c[13];
    return x
  }
  let u;
  if (c[14] !== a) u = e(n, {
    children: a
  }), c[14] = a, c[15] = u;
  else u = c[15];
  const x = q - 12;
  let f;
  if (c[16] !== R || c[17] !== l || c[18] !== h || c[19] !== p || c[20] !== x) f = e(dY, {
    hunks: p,
    dim: !1,
    width: x,
    filePath: l,
    firstLine: h,
    fileContent: R
  }), c[16] = R, c[17] = l, c[18] = h, c[19] = p, c[20] = x, c[21] = f;
  else f = c[21];
  let b;
  if (c[22] !== u || c[23] !== f) b = e(ze, {
    children: r(s, {
      flexDirection: "column",
      children: [u, f]
    })
  }), c[22] = u, c[23] = f, c[24] = b;
  else b = c[24];
  return b
}
export {
  Nre,
  FGt
};
