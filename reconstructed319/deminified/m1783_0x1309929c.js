// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Br, W5n } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { hwe } from "B:/~BUN/root/chunk-bkfncj77.js";
import { oa, ot, LY, s, n, Gp, xYe } from "B:/~BUN/root/chunk-qey16aan.js";
import { Zc } from "B:/~BUN/root/chunk-31b4g6te.js";
import { bxs } from "B:/~BUN/root/chunk-ajvcvya3.js";
import { $vt, Vot, O8s } from "B:/~BUN/root/chunk-gappgpaq.js";
import { Ic } from "B:/~BUN/root/chunk-c7kw6nqt.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { My, Z, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { THt } from "B:/~BUN/root/chunk-y2759c1p.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { D$e } from "B:/~BUN/root/chunk-5ha2avah.js";
j();
j();
function pe(children, C) {
  return e(s, {
    children: children
  }, C);
}
var ie = 0.4;
function _(d) {
  let c = S(10),
    {
      patch: patch,
      dim: dim,
      width: width
    } = d,
    [a] = Br(),
    l;
  if (c[0] !== dim || c[1] !== patch.lines || c[2] !== patch.oldStart || c[3] !== a || c[4] !== width) l = U(patch.lines, patch.oldStart, width, dim, a), c[0] = dim, c[1] = patch.lines, c[2] = patch.oldStart, c[3] = a, c[4] = width, c[5] = l;else l = c[5];
  let f = l,
    children_2;
  if (c[6] !== f) children_2 = f.map(pe), c[6] = f, c[7] = children_2;else children_2 = c[7];
  let R;
  if (c[8] !== children_2) R = e(s, {
    flexDirection: "column",
    flexGrow: 1,
    children: children_2
  }), c[8] = children_2, c[9] = R;else R = c[9];
  return R;
}
function fe(d) {
  return d.map(item => {
    let type = item.startsWith("+") ? "add" : item.startsWith("-") ? "remove" : "nochange",
      {
        code: i,
        truncatedChars: truncatedChars
      } = $vt(item, 1);
    return {
      code: i,
      i: 0,
      type: type,
      originalCode: i,
      truncatedChars: truncatedChars
    };
  });
}
function le(d) {
  let o = [],
    t = 0;
  while (t < d.length) {
    let i = d[t];
    if (!i) {
      t++;
      continue;
    }
    if (i.type === "remove") {
      let a = [i],
        c = t + 1;
      while (c < d.length && d[c]?.type === "remove") {
        let f = d[c];
        if (f) a.push(f);
        c++;
      }
      let l = [];
      while (c < d.length && d[c]?.type === "add") {
        let f = d[c];
        if (f) l.push(f);
        c++;
      }
      if (a.length > 0 && l.length > 0) {
        let f = Math.min(a.length, l.length);
        for (let u = 0; u < f; u++) {
          let R = a[u],
            m = l[u];
          if (R && m) R.wordDiff = !0, m.wordDiff = !0, R.matchedLine = m, m.matchedLine = R;
        }
        o.push(...a.filter(Boolean)), o.push(...l.filter(Boolean)), t = c;
      } else o.push(i), t++;
    } else o.push(i), t++;
  }
  return o;
}
function ue(d, o) {
  return bxs(d, o, {
    ignoreCase: !1
  });
}
function he(d, o, t, i, a) {
  let {
    type: type_2,
    i: i_2,
    wordDiff: wordDiff,
    matchedLine: matchedLine,
    originalCode: originalCode
  } = d;
  if (!wordDiff || !matchedLine) return null;
  let m = type_2 === "remove" ? originalCode : matchedLine.originalCode,
    C = type_2 === "remove" ? matchedLine.originalCode : originalCode,
    b = ue(m, C),
    H = m.length + C.length;
  if (b.filter(item => item.added || item.removed).reduce((acc, item) => acc + item.value.length, 0) / H > ie || i) return null;
  let N = type_2 === "add" ? "+" : "-",
    v = N.length,
    g = Math.max(1, o - t - 1 - v),
    x = [],
    content = [],
    contentWidth = 0;
  if (b.forEach((item, index) => {
    let y = !1,
      backgroundColor;
    if (type_2 === "add") {
      if (item.added) y = !0, backgroundColor = "diffAddedWord";else if (!item.removed) y = !0;
    } else if (type_2 === "remove") {
      if (item.removed) y = !0, backgroundColor = "diffRemovedWord";else if (!item.added) y = !0;
    }
    if (!y) return;
    Zc(item.value, g, "wrap").split(`
`).forEach((M, O) => {
      if (!M) return;
      if (O > 0 || contentWidth + ce(M) > g) {
        if (content.length > 0) x.push({
          content: [...content],
          contentWidth: contentWidth
        }), content = [], contentWidth = 0;
      }
      content.push(e(n, {
        backgroundColor: backgroundColor,
        children: M
      }, `part-${index}-${O}`)), contentWidth += ce(M);
    });
  }), content.length > 0) x.push({
    content: content,
    contentWidth: contentWidth
  });
  let D = d.truncatedChars > 0 ? Vot(d.truncatedChars) : "",
    w = -1;
  if (D && x.length > 0) {
    if (x.at(-1).contentWidth + ce(D) > g) x.push({
      content: [],
      contentWidth: 0
    });
    w = x.length - 1;
  }
  return x.map(({
    content: h,
    contentWidth: contentWidth_2
  }, index) => {
    let P = `${type_2}-${i_2}-${index}`,
      backgroundColor_2 = type_2 === "add" ? "diffAdded" : "diffRemoved",
      B = index === 0 ? i_2 : void 0,
      M = (B !== void 0 ? B.toString().padStart(t) : " ".repeat(t)) + " ",
      children_3 = index === w ? D : "",
      A = M.length + v + contentWidth_2 + ce(children_3),
      re = Math.max(0, o - A);
    return r(s, {
      flexDirection: "row",
      children: [e(Gp, {
        fromLeftEdge: !0,
        children: r(n, {
          color: a ? "text" : void 0,
          backgroundColor: backgroundColor_2,
          children: [M, N]
        })
      }), e(n, {
        color: a ? "text" : void 0,
        backgroundColor: backgroundColor_2,
        children: h
      }), children_3 ? e(n, {
        dimColor: !0,
        children: children_3
      }) : null, e(n, {
        "aria-hidden": !0,
        color: a ? "text" : void 0,
        backgroundColor: backgroundColor_2,
        children: " ".repeat(re)
      })]
    }, P);
  });
}
function U(d, o, t, dimColor, a) {
  let c = Math.max(1, Math.floor(t)),
    l = fe(d),
    f = le(l),
    u = me(f, o),
    R = Math.max(...u.map(({
      i: i_3
    }) => i_3), 0),
    m = Math.max(R.toString().length + 1, 0);
  return u.flatMap(item => {
    let {
      type: type_3,
      code: code,
      i: i_4,
      wordDiff: wordDiff_2,
      matchedLine: matchedLine_2
    } = item;
    if (wordDiff_2 && matchedLine_2) {
      let w = he(item, c, m, dimColor, a);
      if (w !== null) return w;
    }
    let v = 2,
      g = Math.max(1, c - m - 1 - v),
      L = Zc(code, g, "wrap").split(`
`),
      k = item.truncatedChars > 0 ? Vot(item.truncatedChars) : "",
      D = -1;
    if (k && L.length > 0) {
      let w = L.at(-1);
      if (ce(w) + ce(k) > g) L.push("");
      D = L.length - 1;
    }
    return L.map((w, index) => {
      let T = `${type_3}-${i_4}-${index}`,
        y = index === 0 ? i_4 : void 0,
        P = (y !== void 0 ? y.toString().padStart(m) : " ".repeat(m)) + " ",
        E = type_3 === "add" ? "+" : type_3 === "remove" ? "-" : " ",
        children_4 = index === D ? k : "",
        M = P.length + 1 + ce(w) + ce(children_4),
        O = Math.max(0, c - M),
        backgroundColor_3 = type_3 === "add" ? dimColor ? "diffAddedDimmed" : "diffAdded" : type_3 === "remove" ? dimColor ? "diffRemovedDimmed" : "diffRemoved" : void 0;
      return r(s, {
        flexDirection: "row",
        children: [e(Gp, {
          fromLeftEdge: !0,
          children: r(n, {
            color: a ? "text" : void 0,
            backgroundColor: backgroundColor_3,
            dimColor: dimColor || type_3 === "nochange",
            children: [P, E]
          })
        }), e(n, {
          color: a ? "text" : void 0,
          backgroundColor: backgroundColor_3,
          dimColor: dimColor,
          children: w
        }), children_4 ? e(n, {
          dimColor: !0,
          children: children_4
        }) : null, e(n, {
          "aria-hidden": !0,
          color: a ? "text" : void 0,
          backgroundColor: backgroundColor_3,
          dimColor: dimColor,
          children: " ".repeat(O)
        })]
      }, T);
    });
  });
}
function me(d, o) {
  let i_5 = o,
    i = [],
    a = [...d];
  while (a.length > 0) {
    let c = a.shift(),
      {
        code: code_2,
        type: type_4,
        originalCode: originalCode_2,
        truncatedChars: truncatedChars_2,
        wordDiff: wordDiff_3,
        matchedLine: matchedLine_3
      } = c,
      b = {
        code: code_2,
        type: type_4,
        i: i_5,
        originalCode: originalCode_2,
        truncatedChars: truncatedChars_2,
        wordDiff: wordDiff_3,
        matchedLine: matchedLine_3
      };
    switch (type_4) {
      case "nochange":
        i_5++, i.push(b);
        break;
      case "add":
        i_5++, i.push(b);
        break;
      case "remove":
        {
          i.push(b);
          let H = 0;
          while (a[0]?.type === "remove") {
            i_5++;
            let W = a.shift(),
              {
                code: code_3,
                type: type_5,
                originalCode: originalCode_3,
                truncatedChars: truncatedChars_3,
                wordDiff: wordDiff_4,
                matchedLine: matchedLine_4
              } = W,
              k = {
                code: code_3,
                type: type_5,
                i: i_5,
                originalCode: originalCode_3,
                truncatedChars: truncatedChars_3,
                wordDiff: wordDiff_4,
                matchedLine: matchedLine_4
              };
            i.push(k), H++;
          }
          i_5 -= H;
          break;
        }
    }
  }
  return i;
}
var oe = ["diffAdded", "diffRemoved", "diffAddedDimmed", "diffRemovedDimmed", "diffAddedWord", "diffRemovedWord"];
function X(d) {
  if (!d) return;
  let o;
  for (let t of oe) {
    let i = d[t];
    if (i !== void 0) o ??= {}, o[t] = i;
  }
  return o;
}
function I(d, o, t, i, a, c, l, f, u, R) {
  let m = O8s();
  if (!m) return null;
  let C = R ? THt(o) : 0,
    gutterWidth = C > 0 && C < f ? C : 0,
    H = l ? oe.map(item => l[item] ?? "").join(",") : "",
    W = `${c}|${H}|${f}|${u ? 1 : 0}|${gutterWidth}|${Se.level}|${t ?? ""}|${i}`,
    p = d.get(o),
    N = p?.get(W);
  if (N) return N;
  let v = new m(o, t, i, a),
    g;
  if (gutterWidth > 0) {
    let {
      gutters: gutters,
      contents: contents
    } = v.renderSplit(c, f, u, l);
    g = {
      split: !0,
      gutterWidth: gutterWidth,
      gutters: gutters,
      contents: contents
    };
  } else {
    let lines = v.render(c, f, u, l);
    if (lines === null) return null;
    g = {
      split: !1,
      lines: lines
    };
  }
  if (!p) p = new Map(), d.set(o, p);
  if (p.size >= 4) p.clear();
  return p.set(W, g), g;
}
function ee(d) {
  if (!d.lines.some(item => item.includes("\t"))) return d;
  let lines_2 = d.lines.map(item => item.slice(0, 1) + hwe(item.slice(1)));
  return {
    ...d,
    lines: lines_2
  };
}
var Ene = My(function (o) {
  let p = S(19),
    {
      patch: patch_2,
      dim: dim_2,
      filePath: filePath,
      firstLine: firstLine,
      fileContent: fileContent,
      width: width_2,
      skipHighlighting: skipHighlighting
    } = o,
    R = skipHighlighting === void 0 ? !1 : skipHighlighting,
    [m] = Br(),
    C = X(W5n()),
    H = Ic().syntaxHighlightingDisabled ?? !1,
    W = ot(),
    N;
  if (p[0] !== W || p[1] !== patch_2) N = W ? ee(patch_2) : patch_2, p[0] = W, p[1] = patch_2, p[2] = N;else N = p[2];
  let patch_3 = N,
    width_5 = Math.max(1, Math.floor(width_2)),
    x = oa(),
    {
      structuredDiff: structuredDiff
    } = LY(),
    k = R || H || W ? null : I(structuredDiff, patch_2, firstLine, filePath, fileContent ?? null, m, C, width_5, dim_2, x);
  if (!k) {
    const width_3 = W ? width_2 - 1 : width_2;
    let w;
    if (p[3] !== dim_2 || p[4] !== patch_3 || p[5] !== width_3) w = e(s, {
      children: e(_, {
        patch: patch_3,
        dim: dim_2,
        width: width_3
      })
    }), p[3] = dim_2, p[4] = patch_3, p[5] = width_3, p[6] = w;else w = p[6];
    return w;
  }
  if (k.split) {
    let {
      gutterWidth: h,
      gutters: T,
      contents: y
    } = k;
    let D;
    if (p[7] !== h || p[8] !== T) D = e(Gp, {
      fromLeftEdge: !0,
      flexShrink: 0,
      children: e(xYe, {
        lines: T,
        width: h
      })
    }), p[7] = h, p[8] = T, p[9] = D;else D = p[9];
    const width_4 = width_5 - h;
    let P;
    if (p[10] !== y || p[11] !== width_4) P = e(xYe, {
      lines: y,
      width: width_4
    }), p[10] = y, p[11] = width_4, p[12] = P;else P = p[12];
    let E;
    if (p[13] !== D || p[14] !== P) E = r(s, {
      flexDirection: "row",
      children: [D, P]
    }), p[13] = D, p[14] = P, p[15] = E;else E = p[15];
    return E;
  }
  let D;
  if (p[16] !== k.lines || p[17] !== width_5) D = e(s, {
    children: e(xYe, {
      lines: k.lines,
      width: width_5
    })
  }), p[16] = k.lines, p[17] = width_5, p[18] = D;else D = p[18];
  return D;
});
function B7({
  hunks: hunks,
  dim: dim_3,
  width: width_6,
  filePath: filePath_2,
  firstLine: firstLine_2,
  fileContent: fileContent_2
}) {
  return D$e(hunks.map((l, index) => e(s, {
    flexDirection: "column",
    children: e(Ene, {
      patch: l,
      dim: dim_3,
      width: width_6,
      filePath: filePath_2,
      firstLine: firstLine_2,
      fileContent: fileContent_2
    })
  }, `hunk-${index}`)), l => e(Gp, {
    fromLeftEdge: !0,
    children: e(n, {
      dimColor: !0,
      children: "..."
    })
  }, `ellipsis-${l}`));
}
export { Ene, B7 };