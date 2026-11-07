// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  zs
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Ap,
  U_
} from "B:/~BUN/root/chunk-xt7xbt1n.js";
import {
  ub
} from "B:/~BUN/root/chunk-qxf1yra6.js";
import {
  $w
} from "B:/~BUN/root/chunk-415ykk3s.js";
import {
  Ye
} from "B:/~BUN/root/chunk-4swxab5a.js";
import {
  B7
} from "B:/~BUN/root/chunk-cyz63hzp.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var D = 10;

function the(Y) {
  let t = S(39),
    {
      file_path: o,
      operation: p,
      patch: h,
      firstLine: C,
      fileContent: L,
      content: v,
      style: k,
      verbose: m
    } = Y,
    {
      columns: q
    } = Re(),
    d;
  if (t[0] !== p) d = r(n, {
    dimColor: !0,
    children: ["User rejected ", p, " to "]
  }), t[0] = p, t[1] = d;
  else d = t[1];
  let c;
  if (t[2] !== o || t[3] !== m) c = m ? o : zs(o), t[2] = o, t[3] = m, t[4] = c;
  else c = t[4];
  let P;
  if (t[5] !== o || t[6] !== c) P = e(n, {
    bold: !0,
    dimColor: !0,
    children: e(ub, {
      filePath: o,
      children: c
    })
  }), t[5] = o, t[6] = c, t[7] = P;
  else P = t[7];
  let H;
  if (t[8] !== d || t[9] !== P) H = r(s, {
    flexDirection: "row",
    children: [d, P]
  }), t[8] = d, t[9] = P, t[10] = H;
  else H = t[10];
  let i = H;
  if (k === "condensed" && !m) {
    let l;
    if (t[11] !== i) l = e(Ye, {
      children: i
    }), t[11] = i, t[12] = l;
    else l = t[12];
    return l
  }
  if (p === "write" && v !== void 0) {
    let a, l;
    if (t[13] !== v || t[14] !== m) {
      let u = v.split(`
`);
      a = u.length - D;
      l = m ? v : u.slice(0, D).join(`
`);
      t[13] = v, t[14] = m, t[15] = a, t[16] = l
    } else a = t[15], l = t[16];
    let b = l;
    const f = b || "(No content)";
    const x = q - 12;
    let _;
    if (t[17] !== o || t[18] !== f || t[19] !== x) _ = e($w, {
      code: f,
      filePath: o,
      width: x,
      dim: !0
    }), t[17] = o, t[18] = f, t[19] = x, t[20] = _;
    else _ = t[20];
    let A;
    if (t[21] !== a || t[22] !== m) A = !m && e(U_, {
      count: a
    }), t[21] = a, t[22] = m, t[23] = A;
    else A = t[23];
    let z;
    if (t[24] !== _ || t[25] !== A || t[26] !== i) z = e(Ye, {
      children: r(s, {
        flexDirection: "column",
        children: [i, _, A]
      })
    }), t[24] = _, t[25] = A, t[26] = i, t[27] = z;
    else z = t[27];
    return z
  }
  if (!h || h.length === 0) {
    let l;
    if (t[28] !== i) l = e(Ye, {
      children: i
    }), t[28] = i, t[29] = l;
    else l = t[29];
    return l
  }
  const l = q - 12;
  let f;
  if (t[30] !== L || t[31] !== o || t[32] !== C || t[33] !== h || t[34] !== l) f = e(B7, {
    hunks: h,
    dim: !0,
    width: l,
    filePath: o,
    firstLine: C,
    fileContent: L
  }), t[30] = L, t[31] = o, t[32] = C, t[33] = h, t[34] = l, t[35] = f;
  else f = t[35];
  let x;
  if (t[36] !== f || t[37] !== i) x = e(Ye, {
    children: r(s, {
      flexDirection: "column",
      children: [i, f]
    })
  }), t[36] = f, t[37] = i, t[38] = x;
  else x = t[38];
  return x
}

function at(_) {
  return _.startsWith("+")
}

function mt(A, z) {
  return A + U(z.lines, at)
}

function pt(ht) {
  return ht.startsWith("-")
}

function dt(vt, Pt) {
  return vt + U(Pt.lines, pt)
}

function imn(Y) {
  let c = S(25),
    {
      filePath: o,
      structuredPatch: p,
      firstLine: h,
      fileContent: C,
      style: L,
      verbose: v,
      previewHint: k,
      collapsed: m
    } = Y,
    {
      columns: q
    } = Re(),
    t = p.reduce(mt, 0),
    d = p.reduce(dt, 0),
    P;
  if (c[0] !== t) P = t > 0 ? r(ne, {
    children: ["Added ", e(n, {
      bold: !0,
      children: t
    }), " ", t > 1 ? "lines" : "line"]
  }) : null, c[0] = t, c[1] = P;
  else P = c[1];
  const H = t > 0 && d > 0 ? ", " : null;
  let i;
  if (c[2] !== t || c[3] !== d) i = d > 0 ? r(ne, {
    children: [t === 0 ? "R" : "r", "emoved ", e(n, {
      bold: !0,
      children: d
    }), " ", d > 1 ? "lines" : "line"]
  }) : null, c[2] = t, c[3] = d, c[4] = i;
  else i = c[4];
  let l;
  if (c[5] !== P || c[6] !== H || c[7] !== i) l = r(n, {
    children: [P, H, i]
  }), c[5] = P, c[6] = H, c[7] = i, c[8] = l;
  else l = c[8];
  let a = l;
  if (k) {
    if (L !== "condensed" && !v) {
      let u;
      if (c[9] !== k) u = e(Ye, {
        children: e(n, {
          dimColor: !0,
          children: k
        })
      }), c[9] = k, c[10] = u;
      else u = c[10];
      return u
    }
  } else if (L === "condensed" && !v) {
    return a
  } else if (m && !v && t + d > 0) {
    let u;
    if (c[11] === w) u = e(Ap, {}), c[11] = u;
    else u = c[11];
    let b;
    if (c[12] !== a) b = e(Ye, {
      children: r(n, {
        children: [a, " ", u]
      })
    }), c[12] = a, c[13] = b;
    else b = c[13];
    return b
  }
  let u;
  if (c[14] !== a) u = e(n, {
    children: a
  }), c[14] = a, c[15] = u;
  else u = c[15];
  const b = q - 12;
  let f;
  if (c[16] !== C || c[17] !== o || c[18] !== h || c[19] !== p || c[20] !== b) f = e(B7, {
    hunks: p,
    dim: !1,
    width: b,
    filePath: o,
    firstLine: h,
    fileContent: C
  }), c[16] = C, c[17] = o, c[18] = h, c[19] = p, c[20] = b, c[21] = f;
  else f = c[21];
  let x;
  if (c[22] !== u || c[23] !== f) x = e(Ye, {
    children: r(s, {
      flexDirection: "column",
      children: [u, f]
    })
  }), c[22] = u, c[23] = f, c[24] = x;
  else x = c[24];
  return x
}
export {
  the,
  imn
};
