// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { Js, tL, s, n, Yc, Wbe } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { Zn, hVt } from "B:/~BUN/root/chunk-1x7a47hz.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Jm } from "B:/~BUN/root/chunk-trcn2d68.js";
import { Xkr } from "B:/~BUN/root/chunk-6wgkxd9a.js";
import { uje, rIe, x8r } from "B:/~BUN/root/chunk-93kq3f21.js";
import { Ba } from "B:/~BUN/root/chunk-vf07m8qt.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { jqe } from "B:/~BUN/root/chunk-efz11ra0.js";
import { Gp, X, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { Ede } from "B:/~BUN/root/chunk-z1enakv9.js";
N();
N();
function he(children, x) {
  return e(s, {
    children: children
  }, x);
}
var oe = 0.4;
function _(c) {
  let d = w(10),
    {
      patch: patch,
      dim: dim,
      width: width
    } = c,
    [f] = Zn(),
    u;
  if (d[0] !== dim || d[1] !== patch.lines || d[2] !== patch.oldStart || d[3] !== f || d[4] !== width) u = Y(patch.lines, patch.oldStart, width, dim, f), d[0] = dim, d[1] = patch.lines, d[2] = patch.oldStart, d[3] = f, d[4] = width, d[5] = u;else u = d[5];
  let a = u,
    children_2;
  if (d[6] !== a) children_2 = a.map(he), d[6] = a, d[7] = children_2;else children_2 = d[7];
  let b;
  if (d[8] !== children_2) b = e(s, {
    flexDirection: "column",
    flexGrow: 1,
    children: children_2
  }), d[8] = children_2, d[9] = b;else b = d[9];
  return b;
}
function fe(c) {
  return c.map(item => {
    let type = item.startsWith("+") ? "add" : item.startsWith("-") ? "remove" : "nochange",
      {
        code: t,
        truncatedChars: truncatedChars
      } = uje(item, 1);
    return {
      code: t,
      i: 0,
      type: type,
      originalCode: t,
      truncatedChars: truncatedChars
    };
  });
}
function se(c) {
  let i = [],
    o = 0;
  while (o < c.length) {
    let t = c[o];
    if (!t) {
      o++;
      continue;
    }
    if (t.type === "remove") {
      let f = [t],
        d = o + 1;
      while (d < c.length && c[d]?.type === "remove") {
        let a = c[d];
        if (a) f.push(a);
        d++;
      }
      let u = [];
      while (d < c.length && c[d]?.type === "add") {
        let a = c[d];
        if (a) u.push(a);
        d++;
      }
      if (f.length > 0 && u.length > 0) {
        let a = Math.min(f.length, u.length);
        for (let h = 0; h < a; h++) {
          let b = f[h],
            g = u[h];
          if (b && g) b.wordDiff = !0, g.wordDiff = !0, b.matchedLine = g, g.matchedLine = b;
        }
        i.push(...f.filter(Boolean)), i.push(...u.filter(Boolean)), o = d;
      } else i.push(t), o++;
    } else i.push(t), o++;
  }
  return i;
}
function ae(c, i) {
  return Xkr(c, i, {
    ignoreCase: !1
  });
}
function le(c, i, o, dimColor, f) {
  let {
    type: type_2,
    i: i_2,
    wordDiff: wordDiff,
    matchedLine: matchedLine,
    originalCode: originalCode
  } = c;
  if (!wordDiff || !matchedLine) return null;
  let g = type_2 === "remove" ? originalCode : matchedLine.originalCode,
    x = type_2 === "remove" ? matchedLine.originalCode : originalCode,
    L = ae(g, x),
    P = g.length + x.length;
  if (L.filter(item => item.added || item.removed).reduce((acc, item) => acc + item.value.length, 0) / P > oe || dimColor) return null;
  let S = type_2 === "add" ? "+" : "-",
    D = S.length,
    C = Math.max(1, i - o - 1 - D),
    l = [],
    content = [],
    contentWidth = 0;
  if (L.forEach((item, index) => {
    let v = !1,
      backgroundColor;
    if (type_2 === "add") {
      if (item.added) v = !0, backgroundColor = "diffAddedWord";else if (!item.removed) v = !0;
    } else if (type_2 === "remove") {
      if (item.removed) v = !0, backgroundColor = "diffRemovedWord";else if (!item.added) v = !0;
    }
    if (!v) return;
    Jm(item.value, C, "wrap").split(`
`).forEach((H, O) => {
      if (!H) return;
      if (O > 0 || contentWidth + ie(H) > C) {
        if (content.length > 0) l.push({
          content: [...content],
          contentWidth: contentWidth
        }), content = [], contentWidth = 0;
      }
      content.push(e(n, {
        backgroundColor: backgroundColor,
        children: H
      }, `part-${index}-${O}`)), contentWidth += ie(H);
    });
  }), content.length > 0) l.push({
    content: content,
    contentWidth: contentWidth
  });
  let T = c.truncatedChars > 0 ? rIe(c.truncatedChars) : "",
    W = -1;
  if (T && l.length > 0) {
    if (l.at(-1).contentWidth + ie(T) > C) l.push({
      content: [],
      contentWidth: 0
    });
    W = l.length - 1;
  }
  return l.map(({
    content: m,
    contentWidth: contentWidth_2
  }, index) => {
    let E = `${type_2}-${i_2}-${index}`,
      backgroundColor_2 = type_2 === "add" ? dimColor ? "diffAddedDimmed" : "diffAdded" : dimColor ? "diffRemovedDimmed" : "diffRemoved",
      B = index === 0 ? i_2 : void 0,
      H = (B !== void 0 ? B.toString().padStart(o) : " ".repeat(o)) + " ",
      children_3 = index === W ? T : "",
      j = H.length + D + contentWidth_2 + ie(children_3),
      ne = Math.max(0, i - j);
    return r(s, {
      flexDirection: "row",
      children: [e(Yc, {
        fromLeftEdge: !0,
        children: r(n, {
          color: f ? "text" : void 0,
          backgroundColor: backgroundColor_2,
          dimColor: dimColor,
          children: [H, S]
        })
      }), e(n, {
        color: f ? "text" : void 0,
        backgroundColor: backgroundColor_2,
        dimColor: dimColor,
        children: m
      }), children_3 ? e(n, {
        dimColor: !0,
        children: children_3
      }) : null, e(n, {
        color: f ? "text" : void 0,
        backgroundColor: backgroundColor_2,
        dimColor: dimColor,
        children: " ".repeat(ne)
      })]
    }, E);
  });
}
function Y(c, i, o, dimColor_2, f) {
  let d = Math.max(1, Math.floor(o)),
    u = fe(c),
    a = se(u),
    h = ue(a, i),
    b = Math.max(...h.map(({
      i: i_3
    }) => i_3), 0),
    g = Math.max(b.toString().length + 1, 0);
  return h.flatMap(item => {
    let {
      type: type_3,
      code: code,
      i: i_4,
      wordDiff: wordDiff_2,
      matchedLine: matchedLine_2
    } = item;
    if (wordDiff_2 && matchedLine_2) {
      let W = le(item, d, g, dimColor_2, f);
      if (W !== null) return W;
    }
    let D = 2,
      C = Math.max(1, d - g - 1 - D),
      p = Jm(code, C, "wrap").split(`
`),
      k = item.truncatedChars > 0 ? rIe(item.truncatedChars) : "",
      T = -1;
    if (k && p.length > 0) {
      let W = p.at(-1);
      if (ie(W) + ie(k) > C) p.push("");
      T = p.length - 1;
    }
    return p.map((W, index) => {
      let M = `${type_3}-${i_4}-${index}`,
        v = index === 0 ? i_4 : void 0,
        E = (v !== void 0 ? v.toString().padStart(g) : " ".repeat(g)) + " ",
        A = type_3 === "add" ? "+" : type_3 === "remove" ? "-" : " ",
        children_4 = index === T ? k : "",
        H = E.length + 1 + ie(W) + ie(children_4),
        O = Math.max(0, d - H),
        backgroundColor_3 = type_3 === "add" ? dimColor_2 ? "diffAddedDimmed" : "diffAdded" : type_3 === "remove" ? dimColor_2 ? "diffRemovedDimmed" : "diffRemoved" : void 0;
      return r(s, {
        flexDirection: "row",
        children: [e(Yc, {
          fromLeftEdge: !0,
          children: r(n, {
            color: f ? "text" : void 0,
            backgroundColor: backgroundColor_3,
            dimColor: dimColor_2 || type_3 === "nochange",
            children: [E, A]
          })
        }), e(n, {
          color: f ? "text" : void 0,
          backgroundColor: backgroundColor_3,
          dimColor: dimColor_2,
          children: W
        }), children_4 ? e(n, {
          dimColor: !0,
          children: children_4
        }) : null, e(n, {
          color: f ? "text" : void 0,
          backgroundColor: backgroundColor_3,
          dimColor: dimColor_2,
          children: " ".repeat(O)
        })]
      }, M);
    });
  });
}
function ue(c, i) {
  let i_5 = i,
    t = [],
    f = [...c];
  while (f.length > 0) {
    let d = f.shift(),
      {
        code: code_2,
        type: type_4,
        originalCode: originalCode_2,
        truncatedChars: truncatedChars_2,
        wordDiff: wordDiff_3,
        matchedLine: matchedLine_3
      } = d,
      L = {
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
        i_5++, t.push(L);
        break;
      case "add":
        i_5++, t.push(L);
        break;
      case "remove":
        {
          t.push(L);
          let P = 0;
          while (f[0]?.type === "remove") {
            i_5++;
            let y = f.shift(),
              {
                code: code_3,
                type: type_5,
                originalCode: originalCode_3,
                truncatedChars: truncatedChars_3,
                wordDiff: wordDiff_4,
                matchedLine: matchedLine_4
              } = y,
              k = {
                code: code_3,
                type: type_5,
                i: i_5,
                originalCode: originalCode_3,
                truncatedChars: truncatedChars_3,
                wordDiff: wordDiff_4,
                matchedLine: matchedLine_4
              };
            t.push(k), P++;
          }
          i_5 -= P;
          break;
        }
    }
  }
  return t;
}
var te = ["diffAdded", "diffRemoved", "diffAddedDimmed", "diffRemovedDimmed", "diffAddedWord", "diffRemovedWord"];
function J(c) {
  if (!c) return;
  let i;
  for (let o of te) {
    let t = c[o];
    if (t !== void 0) i ??= {}, i[o] = t;
  }
  return i;
}
function Q(c, i, o, t, f, d, u, a, h, b) {
  let g = x8r();
  if (!g) return null;
  let x = b ? jqe(i) : 0,
    gutterWidth = x > 0 && x < a ? x : 0,
    P = u ? te.map(item => u[item] ?? "").join(",") : "",
    y = `${d}|${P}|${a}|${h ? 1 : 0}|${gutterWidth}|${pe.level}|${o ?? ""}|${t}`,
    R = c.get(i),
    S = R?.get(y);
  if (S) return S;
  let D = new g(i, o, t, f),
    C;
  if (gutterWidth > 0) {
    let {
      gutters: gutters,
      contents: contents
    } = D.renderSplit(d, a, h, u);
    C = {
      split: !0,
      gutterWidth: gutterWidth,
      gutters: gutters,
      contents: contents
    };
  } else {
    let lines = D.render(d, a, h, u);
    if (lines === null) return null;
    C = {
      split: !1,
      lines: lines
    };
  }
  if (!R) R = new Map(), c.set(i, R);
  if (R.size >= 4) R.clear();
  return R.set(y, C), C;
}
var X2 = Gp(function (i) {
  let C = w(16),
    {
      patch: patch_2,
      dim: dim_2,
      filePath: filePath,
      firstLine: firstLine,
      fileContent: fileContent,
      width: width_2,
      skipHighlighting: skipHighlighting
    } = i,
    b = skipHighlighting === void 0 ? !1 : skipHighlighting,
    [g] = Zn(),
    x = J(hVt()),
    P = Ba().syntaxHighlightingDisabled ?? !1,
    width_4 = Math.max(1, Math.floor(width_2)),
    R = Js(),
    {
      structuredDiff: structuredDiff
    } = tL(),
    D = b || P ? null : Q(structuredDiff, patch_2, firstLine, filePath, fileContent ?? null, g, x, width_4, dim_2, R);
  if (!D) {
    let l;
    if (C[0] !== dim_2 || C[1] !== patch_2 || C[2] !== width_2) l = e(s, {
      children: e(_, {
        patch: patch_2,
        dim: dim_2,
        width: width_2
      })
    }), C[0] = dim_2, C[1] = patch_2, C[2] = width_2, C[3] = l;else l = C[3];
    return l;
  }
  if (D.split) {
    let {
      gutterWidth: p,
      gutters: k,
      contents: T
    } = D;
    let l;
    if (C[4] !== p || C[5] !== k) l = e(Yc, {
      fromLeftEdge: !0,
      flexShrink: 0,
      children: e(Wbe, {
        lines: k,
        width: p
      })
    }), C[4] = p, C[5] = k, C[6] = l;else l = C[6];
    const width_3 = width_4 - p;
    let m;
    if (C[7] !== T || C[8] !== width_3) m = e(Wbe, {
      lines: T,
      width: width_3
    }), C[7] = T, C[8] = width_3, C[9] = m;else m = C[9];
    let M;
    if (C[10] !== l || C[11] !== m) M = r(s, {
      flexDirection: "row",
      children: [l, m]
    }), C[10] = l, C[11] = m, C[12] = M;else M = C[12];
    return M;
  }
  let l;
  if (C[13] !== D.lines || C[14] !== width_4) l = e(s, {
    children: e(Wbe, {
      lines: D.lines,
      width: width_4
    })
  }), C[13] = D.lines, C[14] = width_4, C[15] = l;else l = C[15];
  return l;
});
function Lj({
  hunks: hunks,
  dim: dim_3,
  width: width_5,
  filePath: filePath_2,
  firstLine: firstLine_2,
  fileContent: fileContent_2
}) {
  return Ede(hunks.map((u, index) => e(s, {
    flexDirection: "column",
    children: e(X2, {
      patch: u,
      dim: dim_3,
      width: width_5,
      filePath: filePath_2,
      firstLine: firstLine_2,
      fileContent: fileContent_2
    })
  }, `hunk-${index}`)), u => e(Yc, {
    fromLeftEdge: !0,
    children: e(n, {
      dimColor: !0,
      children: "..."
    })
  }, `ellipsis-${u}`));
}
export { X2, Lj };