// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Ed, c_ } from "B:/~BUN/root/chunk-qg1rz74p.js";
import { d_ } from "B:/~BUN/root/chunk-h89fwq58.js";
import { Le } from "B:/~BUN/root/chunk-dk0c0nrh.js";
import { Lj } from "B:/~BUN/root/chunk-q7jerdh3.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
import { relative as G } from "path";
var _ = 10;
function u5(I) {
  let t = w(38),
    {
      file_path: l,
      operation: operation,
      patch: h,
      firstLine: firstLine,
      fileContent: fileContent,
      content: content,
      style: style,
      verbose: verbose
    } = I,
    {
      columns: columns
    } = ve(),
    d;
  if (t[0] !== operation) d = r(n, {
    color: "subtle",
    children: ["User rejected ", operation, " to "]
  }), t[0] = operation, t[1] = d;else d = t[1];
  let children;
  if (t[2] !== l || t[3] !== verbose) children = verbose ? l : G(oe(), l), t[2] = l, t[3] = verbose, t[4] = children;else children = t[4];
  let P;
  if (t[5] !== children) P = e(n, {
    bold: !0,
    color: "subtle",
    children: children
  }), t[5] = children, t[6] = P;else P = t[6];
  let k;
  if (t[7] !== d || t[8] !== P) k = r(s, {
    flexDirection: "row",
    children: [d, P]
  }), t[7] = d, t[8] = P, t[9] = k;else k = t[9];
  let children_2 = k;
  if (style === "condensed" && !verbose) {
    let i;
    if (t[10] !== children_2) i = e(Le, {
      children: children_2
    }), t[10] = children_2, t[11] = i;else i = t[11];
    return i;
  }
  if (operation === "write" && content !== void 0) {
    let count, i;
    if (t[12] !== content || t[13] !== verbose) {
      let u = content.split(`
`);
      count = u.length - _;
      i = verbose ? content : u.slice(0, _).join(`
`);
      t[12] = content, t[13] = verbose, t[14] = count, t[15] = i;
    } else count = t[14], i = t[15];
    let x = i;
    const code = x || "(No content)";
    const width = columns - 12;
    let H;
    if (t[16] !== l || t[17] !== code || t[18] !== width) H = e(d_, {
      code: code,
      filePath: l,
      width: width,
      dim: !0
    }), t[16] = l, t[17] = code, t[18] = width, t[19] = H;else H = t[19];
    let A;
    if (t[20] !== count || t[21] !== verbose) A = !verbose && e(c_, {
      count: count
    }), t[20] = count, t[21] = verbose, t[22] = A;else A = t[22];
    let F;
    if (t[23] !== H || t[24] !== A || t[25] !== children_2) F = e(Le, {
      children: r(s, {
        flexDirection: "column",
        children: [children_2, H, A]
      })
    }), t[23] = H, t[24] = A, t[25] = children_2, t[26] = F;else F = t[26];
    return F;
  }
  if (!h || h.length === 0) {
    let i;
    if (t[27] !== children_2) i = e(Le, {
      children: children_2
    }), t[27] = children_2, t[28] = i;else i = t[28];
    return i;
  }
  const width_2 = columns - 12;
  let f;
  if (t[29] !== fileContent || t[30] !== l || t[31] !== firstLine || t[32] !== h || t[33] !== width_2) f = e(Lj, {
    hunks: h,
    dim: !0,
    width: width_2,
    filePath: l,
    firstLine: firstLine,
    fileContent: fileContent
  }), t[29] = fileContent, t[30] = l, t[31] = firstLine, t[32] = h, t[33] = width_2, t[34] = f;else f = t[34];
  let b;
  if (t[35] !== f || t[36] !== children_2) b = e(Le, {
    children: r(s, {
      flexDirection: "column",
      children: [children_2, f]
    })
  }), t[35] = f, t[36] = children_2, t[37] = b;else b = t[37];
  return b;
}
function ht(H) {
  return H.startsWith("+");
}
function at(A, F) {
  return A + U(F.lines, ht);
}
function vt(Pt) {
  return Pt.startsWith("-");
}
function pt(bt, xt) {
  return bt + U(xt.lines, vt);
}
function qht(I) {
  let c = w(25),
    {
      filePath: filePath,
      structuredPatch: p,
      firstLine: firstLine_2,
      fileContent: fileContent_2,
      style: style_2,
      verbose: verbose_2,
      previewHint: L,
      collapsed: collapsed
    } = I,
    {
      columns: columns_2
    } = ve(),
    children_3 = p.reduce(at, 0),
    children_4 = p.reduce(pt, 0),
    P;
  if (c[0] !== children_3) P = children_3 > 0 ? r(V, {
    children: ["Added ", e(n, {
      bold: !0,
      children: children_3
    }), " ", children_3 > 1 ? "lines" : "line"]
  }) : null, c[0] = children_3, c[1] = P;else P = c[1];
  const k = children_3 > 0 && children_4 > 0 ? ", " : null;
  let o;
  if (c[2] !== children_3 || c[3] !== children_4) o = children_4 > 0 ? r(V, {
    children: [children_3 === 0 ? "R" : "r", "emoved ", e(n, {
      bold: !0,
      children: children_4
    }), " ", children_4 > 1 ? "lines" : "line"]
  }) : null, c[2] = children_3, c[3] = children_4, c[4] = o;else o = c[4];
  let i;
  if (c[5] !== P || c[6] !== k || c[7] !== o) i = r(n, {
    children: [P, k, o]
  }), c[5] = P, c[6] = k, c[7] = o, c[8] = i;else i = c[8];
  let children_5 = i;
  if (L) {
    if (style_2 !== "condensed" && !verbose_2) {
      let u;
      if (c[9] !== L) u = e(Le, {
        children: e(n, {
          dimColor: !0,
          children: L
        })
      }), c[9] = L, c[10] = u;else u = c[10];
      return u;
    }
  } else if (style_2 === "condensed" && !verbose_2) {
    return children_5;
  } else if (collapsed && !verbose_2 && children_3 + children_4 > 0) {
    let u;
    if (c[11] === S) u = e(Ed, {}), c[11] = u;else u = c[11];
    let x;
    if (c[12] !== children_5) x = e(Le, {
      children: r(n, {
        children: [children_5, " ", u]
      })
    }), c[12] = children_5, c[13] = x;else x = c[13];
    return x;
  }
  let u;
  if (c[14] !== children_5) u = e(n, {
    children: children_5
  }), c[14] = children_5, c[15] = u;else u = c[15];
  const width_3 = columns_2 - 12;
  let f;
  if (c[16] !== fileContent_2 || c[17] !== filePath || c[18] !== firstLine_2 || c[19] !== p || c[20] !== width_3) f = e(Lj, {
    hunks: p,
    dim: !1,
    width: width_3,
    filePath: filePath,
    firstLine: firstLine_2,
    fileContent: fileContent_2
  }), c[16] = fileContent_2, c[17] = filePath, c[18] = firstLine_2, c[19] = p, c[20] = width_3, c[21] = f;else f = c[21];
  let b;
  if (c[22] !== u || c[23] !== f) b = e(Le, {
    children: r(s, {
      flexDirection: "column",
      children: [u, f]
    })
  }), c[22] = u, c[23] = f, c[24] = b;else b = c[24];
  return b;
}
export { u5, qht };