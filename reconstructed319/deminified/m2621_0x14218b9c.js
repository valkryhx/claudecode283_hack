// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { zs } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Ap, U_ } from "B:/~BUN/root/chunk-xt7xbt1n.js";
import { ub } from "B:/~BUN/root/chunk-qxf1yra6.js";
import { $w } from "B:/~BUN/root/chunk-415ykk3s.js";
import { Ye } from "B:/~BUN/root/chunk-4swxab5a.js";
import { B7 } from "B:/~BUN/root/chunk-cyz63hzp.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var D = 10;
function the(Y) {
  let t = S(39),
    {
      file_path: o,
      operation: operation,
      patch: h,
      firstLine: firstLine,
      fileContent: fileContent,
      content: content,
      style: style,
      verbose: verbose
    } = Y,
    {
      columns: columns
    } = Re(),
    d;
  if (t[0] !== operation) d = r(n, {
    dimColor: !0,
    children: ["User rejected ", operation, " to "]
  }), t[0] = operation, t[1] = d;else d = t[1];
  let children;
  if (t[2] !== o || t[3] !== verbose) children = verbose ? o : zs(o), t[2] = o, t[3] = verbose, t[4] = children;else children = t[4];
  let P;
  if (t[5] !== o || t[6] !== children) P = e(n, {
    bold: !0,
    dimColor: !0,
    children: e(ub, {
      filePath: o,
      children: children
    })
  }), t[5] = o, t[6] = children, t[7] = P;else P = t[7];
  let H;
  if (t[8] !== d || t[9] !== P) H = r(s, {
    flexDirection: "row",
    children: [d, P]
  }), t[8] = d, t[9] = P, t[10] = H;else H = t[10];
  let children_2 = H;
  if (style === "condensed" && !verbose) {
    let l;
    if (t[11] !== children_2) l = e(Ye, {
      children: children_2
    }), t[11] = children_2, t[12] = l;else l = t[12];
    return l;
  }
  if (operation === "write" && content !== void 0) {
    let count, l;
    if (t[13] !== content || t[14] !== verbose) {
      let u = content.split(`
`);
      count = u.length - D;
      l = verbose ? content : u.slice(0, D).join(`
`);
      t[13] = content, t[14] = verbose, t[15] = count, t[16] = l;
    } else count = t[15], l = t[16];
    let b = l;
    const code = b || "(No content)";
    const width = columns - 12;
    let _;
    if (t[17] !== o || t[18] !== code || t[19] !== width) _ = e($w, {
      code: code,
      filePath: o,
      width: width,
      dim: !0
    }), t[17] = o, t[18] = code, t[19] = width, t[20] = _;else _ = t[20];
    let A;
    if (t[21] !== count || t[22] !== verbose) A = !verbose && e(U_, {
      count: count
    }), t[21] = count, t[22] = verbose, t[23] = A;else A = t[23];
    let z;
    if (t[24] !== _ || t[25] !== A || t[26] !== children_2) z = e(Ye, {
      children: r(s, {
        flexDirection: "column",
        children: [children_2, _, A]
      })
    }), t[24] = _, t[25] = A, t[26] = children_2, t[27] = z;else z = t[27];
    return z;
  }
  if (!h || h.length === 0) {
    let l;
    if (t[28] !== children_2) l = e(Ye, {
      children: children_2
    }), t[28] = children_2, t[29] = l;else l = t[29];
    return l;
  }
  const width_2 = columns - 12;
  let f;
  if (t[30] !== fileContent || t[31] !== o || t[32] !== firstLine || t[33] !== h || t[34] !== width_2) f = e(B7, {
    hunks: h,
    dim: !0,
    width: width_2,
    filePath: o,
    firstLine: firstLine,
    fileContent: fileContent
  }), t[30] = fileContent, t[31] = o, t[32] = firstLine, t[33] = h, t[34] = width_2, t[35] = f;else f = t[35];
  let x;
  if (t[36] !== f || t[37] !== children_2) x = e(Ye, {
    children: r(s, {
      flexDirection: "column",
      children: [children_2, f]
    })
  }), t[36] = f, t[37] = children_2, t[38] = x;else x = t[38];
  return x;
}
function at(_) {
  return _.startsWith("+");
}
function mt(A, z) {
  return A + U(z.lines, at);
}
function pt(ht) {
  return ht.startsWith("-");
}
function dt(vt, Pt) {
  return vt + U(Pt.lines, pt);
}
function imn(Y) {
  let c = S(25),
    {
      filePath: filePath,
      structuredPatch: p,
      firstLine: firstLine_2,
      fileContent: fileContent_2,
      style: style_2,
      verbose: verbose_2,
      previewHint: k,
      collapsed: collapsed
    } = Y,
    {
      columns: columns_2
    } = Re(),
    children_3 = p.reduce(mt, 0),
    children_4 = p.reduce(dt, 0),
    P;
  if (c[0] !== children_3) P = children_3 > 0 ? r(ne, {
    children: ["Added ", e(n, {
      bold: !0,
      children: children_3
    }), " ", children_3 > 1 ? "lines" : "line"]
  }) : null, c[0] = children_3, c[1] = P;else P = c[1];
  const H = children_3 > 0 && children_4 > 0 ? ", " : null;
  let i;
  if (c[2] !== children_3 || c[3] !== children_4) i = children_4 > 0 ? r(ne, {
    children: [children_3 === 0 ? "R" : "r", "emoved ", e(n, {
      bold: !0,
      children: children_4
    }), " ", children_4 > 1 ? "lines" : "line"]
  }) : null, c[2] = children_3, c[3] = children_4, c[4] = i;else i = c[4];
  let l;
  if (c[5] !== P || c[6] !== H || c[7] !== i) l = r(n, {
    children: [P, H, i]
  }), c[5] = P, c[6] = H, c[7] = i, c[8] = l;else l = c[8];
  let children_5 = l;
  if (k) {
    if (style_2 !== "condensed" && !verbose_2) {
      let u;
      if (c[9] !== k) u = e(Ye, {
        children: e(n, {
          dimColor: !0,
          children: k
        })
      }), c[9] = k, c[10] = u;else u = c[10];
      return u;
    }
  } else if (style_2 === "condensed" && !verbose_2) {
    return children_5;
  } else if (collapsed && !verbose_2 && children_3 + children_4 > 0) {
    let u;
    if (c[11] === w) u = e(Ap, {}), c[11] = u;else u = c[11];
    let b;
    if (c[12] !== children_5) b = e(Ye, {
      children: r(n, {
        children: [children_5, " ", u]
      })
    }), c[12] = children_5, c[13] = b;else b = c[13];
    return b;
  }
  let u;
  if (c[14] !== children_5) u = e(n, {
    children: children_5
  }), c[14] = children_5, c[15] = u;else u = c[15];
  const width_3 = columns_2 - 12;
  let f;
  if (c[16] !== fileContent_2 || c[17] !== filePath || c[18] !== firstLine_2 || c[19] !== p || c[20] !== width_3) f = e(B7, {
    hunks: p,
    dim: !1,
    width: width_3,
    filePath: filePath,
    firstLine: firstLine_2,
    fileContent: fileContent_2
  }), c[16] = fileContent_2, c[17] = filePath, c[18] = firstLine_2, c[19] = p, c[20] = width_3, c[21] = f;else f = c[21];
  let x;
  if (c[22] !== u || c[23] !== f) x = e(Ye, {
    children: r(s, {
      flexDirection: "column",
      children: [u, f]
    })
  }), c[22] = u, c[23] = f, c[24] = x;else x = c[24];
  return x;
}
export { the, imn };