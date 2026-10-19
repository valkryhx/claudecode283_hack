// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { BTe } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { br, Zwn } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { pde } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { mi, cz, s, n, ot, Iu, ILe } from "B:/~BUN/root/chunk-damrp3r8.js";
import { qu } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { jwo } from "B:/~BUN/root/chunk-x4gdh7dq.js";
import { Qtt, yVe, l5o } from "B:/~BUN/root/chunk-mq92kyt9.js";
import { hd } from "B:/~BUN/root/chunk-q6bapw2s.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { hdt } from "B:/~BUN/root/chunk-qdaqzk6w.js";
import { ng, Z, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
B();
B();
function ge(children, x) {
  return e(s, {
    children: children
  }, x);
}
var de = 0.4;
function _(d) {
  let c = w(10),
    {
      patch: patch,
      dim: dim,
      width: width
    } = d,
    [a] = br(),
    l;
  if (c[0] !== dim || c[1] !== patch.lines || c[2] !== patch.oldStart || c[3] !== a || c[4] !== width) l = U(patch.lines, patch.oldStart, width, dim, a), c[0] = dim, c[1] = patch.lines, c[2] = patch.oldStart, c[3] = a, c[4] = width, c[5] = l;else l = c[5];
  let f = l,
    children_2;
  if (c[6] !== f) children_2 = f.map(ge), c[6] = f, c[7] = children_2;else children_2 = c[7];
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
        code: o,
        truncatedChars: truncatedChars
      } = Qtt(item, 1);
    return {
      code: o,
      i: 0,
      type: type,
      originalCode: o,
      truncatedChars: truncatedChars
    };
  });
}
function le(d) {
  let i = [],
    t = 0;
  while (t < d.length) {
    let o = d[t];
    if (!o) {
      t++;
      continue;
    }
    if (o.type === "remove") {
      let a = [o],
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
        i.push(...a.filter(Boolean)), i.push(...l.filter(Boolean)), t = c;
      } else i.push(o), t++;
    } else i.push(o), t++;
  }
  return i;
}
function ue(d, i) {
  return jwo(d, i, {
    ignoreCase: !1
  });
}
function me(d, i, t, dimColor, a) {
  let {
    type: type_2,
    i: i_2,
    wordDiff: wordDiff,
    matchedLine: matchedLine,
    originalCode: originalCode
  } = d;
  if (!wordDiff || !matchedLine) return null;
  let m = type_2 === "remove" ? originalCode : matchedLine.originalCode,
    x = type_2 === "remove" ? matchedLine.originalCode : originalCode,
    b = ue(m, x),
    H = m.length + x.length;
  if (b.filter(item => item.added || item.removed).reduce((acc, item) => acc + item.value.length, 0) / H > de || dimColor) return null;
  let N = type_2 === "add" ? "+" : "-",
    v = N.length,
    g = Math.max(1, i - t - 1 - v),
    C = [],
    content = [],
    contentWidth = 0;
  if (b.forEach((item, index) => {
    let S = !1,
      backgroundColor;
    if (type_2 === "add") {
      if (item.added) S = !0, backgroundColor = "diffAddedWord";else if (!item.removed) S = !0;
    } else if (type_2 === "remove") {
      if (item.removed) S = !0, backgroundColor = "diffRemovedWord";else if (!item.added) S = !0;
    }
    if (!S) return;
    qu(item.value, g, "wrap").split(`
`).forEach((M, O) => {
      if (!M) return;
      if (O > 0 || contentWidth + ie(M) > g) {
        if (content.length > 0) C.push({
          content: [...content],
          contentWidth: contentWidth
        }), content = [], contentWidth = 0;
      }
      content.push(e(n, {
        backgroundColor: backgroundColor,
        children: M
      }, `part-${index}-${O}`)), contentWidth += ie(M);
    });
  }), content.length > 0) C.push({
    content: content,
    contentWidth: contentWidth
  });
  let k = d.truncatedChars > 0 ? yVe(d.truncatedChars) : "",
    y = -1;
  if (k && C.length > 0) {
    if (C.at(-1).contentWidth + ie(k) > g) C.push({
      content: [],
      contentWidth: 0
    });
    y = C.length - 1;
  }
  return C.map(({
    content: h,
    contentWidth: contentWidth_2
  }, index) => {
    let P = `${type_2}-${i_2}-${index}`,
      backgroundColor_2 = type_2 === "add" ? dimColor ? "diffAddedDimmed" : "diffAdded" : dimColor ? "diffRemovedDimmed" : "diffRemoved",
      A = index === 0 ? i_2 : void 0,
      M = (A !== void 0 ? A.toString().padStart(t) : " ".repeat(t)) + " ",
      children_3 = index === y ? k : "",
      j = M.length + v + contentWidth_2 + ie(children_3),
      re = Math.max(0, i - j);
    return r(s, {
      flexDirection: "row",
      children: [e(Iu, {
        fromLeftEdge: !0,
        children: r(n, {
          color: a ? "text" : void 0,
          backgroundColor: backgroundColor_2,
          dimColor: dimColor,
          children: [M, N]
        })
      }), e(n, {
        color: a ? "text" : void 0,
        backgroundColor: backgroundColor_2,
        dimColor: dimColor,
        children: h
      }), children_3 ? e(n, {
        dimColor: !0,
        children: children_3
      }) : null, e(n, {
        "aria-hidden": !0,
        color: a ? "text" : void 0,
        backgroundColor: backgroundColor_2,
        dimColor: dimColor,
        children: " ".repeat(re)
      })]
    }, P);
  });
}
function U(d, i, t, dimColor_2, a) {
  let c = Math.max(1, Math.floor(t)),
    l = fe(d),
    f = le(l),
    u = pe(f, i),
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
      let y = me(item, c, m, dimColor_2, a);
      if (y !== null) return y;
    }
    let v = 2,
      g = Math.max(1, c - m - 1 - v),
      L = qu(code, g, "wrap").split(`
`),
      D = item.truncatedChars > 0 ? yVe(item.truncatedChars) : "",
      k = -1;
    if (D && L.length > 0) {
      let y = L.at(-1);
      if (ie(y) + ie(D) > g) L.push("");
      k = L.length - 1;
    }
    return L.map((y, index) => {
      let T = `${type_3}-${i_4}-${index}`,
        S = index === 0 ? i_4 : void 0,
        P = (S !== void 0 ? S.toString().padStart(m) : " ".repeat(m)) + " ",
        E = type_3 === "add" ? "+" : type_3 === "remove" ? "-" : " ",
        children_4 = index === k ? D : "",
        M = P.length + 1 + ie(y) + ie(children_4),
        O = Math.max(0, c - M),
        backgroundColor_3 = type_3 === "add" ? dimColor_2 ? "diffAddedDimmed" : "diffAdded" : type_3 === "remove" ? dimColor_2 ? "diffRemovedDimmed" : "diffRemoved" : void 0;
      return r(s, {
        flexDirection: "row",
        children: [e(Iu, {
          fromLeftEdge: !0,
          children: r(n, {
            color: a ? "text" : void 0,
            backgroundColor: backgroundColor_3,
            dimColor: dimColor_2 || type_3 === "nochange",
            children: [P, E]
          })
        }), e(n, {
          color: a ? "text" : void 0,
          backgroundColor: backgroundColor_3,
          dimColor: dimColor_2,
          children: y
        }), children_4 ? e(n, {
          dimColor: !0,
          children: children_4
        }) : null, e(n, {
          "aria-hidden": !0,
          color: a ? "text" : void 0,
          backgroundColor: backgroundColor_3,
          dimColor: dimColor_2,
          children: " ".repeat(O)
        })]
      }, T);
    });
  });
}
function pe(d, i) {
  let i_5 = i,
    o = [],
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
        i_5++, o.push(b);
        break;
      case "add":
        i_5++, o.push(b);
        break;
      case "remove":
        {
          o.push(b);
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
              D = {
                code: code_3,
                type: type_5,
                i: i_5,
                originalCode: originalCode_3,
                truncatedChars: truncatedChars_3,
                wordDiff: wordDiff_4,
                matchedLine: matchedLine_4
              };
            o.push(D), H++;
          }
          i_5 -= H;
          break;
        }
    }
  }
  return o;
}
var oe = ["diffAdded", "diffRemoved", "diffAddedDimmed", "diffRemovedDimmed", "diffAddedWord", "diffRemovedWord"];
function X(d) {
  if (!d) return;
  let i;
  for (let t of oe) {
    let o = d[t];
    if (o !== void 0) i ??= {}, i[t] = o;
  }
  return i;
}
function I(d, i, t, o, a, c, l, f, u, R) {
  let m = l5o();
  if (!m) return null;
  let x = R ? hdt(i) : 0,
    gutterWidth = x > 0 && x < f ? x : 0,
    H = l ? oe.map(item => l[item] ?? "").join(",") : "",
    W = `${c}|${H}|${f}|${u ? 1 : 0}|${gutterWidth}|${he.level}|${t ?? ""}|${o}`,
    p = d.get(i),
    N = p?.get(W);
  if (N) return N;
  let v = new m(i, t, o, a),
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
  if (!p) p = new Map(), d.set(i, p);
  if (p.size >= 4) p.clear();
  return p.set(W, g), g;
}
function ee(d) {
  if (!d.lines.some(item => item.includes("\t"))) return d;
  let lines_2 = d.lines.map(item => item.slice(0, 1) + pde(item.slice(1)));
  return {
    ...d,
    lines: lines_2
  };
}
var c8 = ng(function (i) {
  let p = w(19),
    {
      patch: patch_2,
      dim: dim_2,
      filePath: filePath,
      firstLine: firstLine,
      fileContent: fileContent,
      width: width_2,
      skipHighlighting: skipHighlighting
    } = i,
    R = skipHighlighting === void 0 ? !1 : skipHighlighting,
    [m] = br(),
    x = X(Zwn()),
    H = hd().syntaxHighlightingDisabled ?? !1,
    W = ot(),
    N;
  if (p[0] !== W || p[1] !== patch_2) N = W ? ee(patch_2) : patch_2, p[0] = W, p[1] = patch_2, p[2] = N;else N = p[2];
  let patch_3 = N,
    width_5 = Math.max(1, Math.floor(width_2)),
    C = mi(),
    {
      structuredDiff: structuredDiff
    } = cz(),
    D = R || H || W ? null : I(structuredDiff, patch_2, firstLine, filePath, fileContent ?? null, m, x, width_5, dim_2, C);
  if (!D) {
    const width_3 = W ? width_2 - 1 : width_2;
    let y;
    if (p[3] !== dim_2 || p[4] !== patch_3 || p[5] !== width_3) y = e(s, {
      children: e(_, {
        patch: patch_3,
        dim: dim_2,
        width: width_3
      })
    }), p[3] = dim_2, p[4] = patch_3, p[5] = width_3, p[6] = y;else y = p[6];
    return y;
  }
  if (D.split) {
    let {
      gutterWidth: h,
      gutters: T,
      contents: S
    } = D;
    let k;
    if (p[7] !== h || p[8] !== T) k = e(Iu, {
      fromLeftEdge: !0,
      flexShrink: 0,
      children: e(ILe, {
        lines: T,
        width: h
      })
    }), p[7] = h, p[8] = T, p[9] = k;else k = p[9];
    const width_4 = width_5 - h;
    let P;
    if (p[10] !== S || p[11] !== width_4) P = e(ILe, {
      lines: S,
      width: width_4
    }), p[10] = S, p[11] = width_4, p[12] = P;else P = p[12];
    let E;
    if (p[13] !== k || p[14] !== P) E = r(s, {
      flexDirection: "row",
      children: [k, P]
    }), p[13] = k, p[14] = P, p[15] = E;else E = p[15];
    return E;
  }
  let k;
  if (p[16] !== D.lines || p[17] !== width_5) k = e(s, {
    children: e(ILe, {
      lines: D.lines,
      width: width_5
    })
  }), p[16] = D.lines, p[17] = width_5, p[18] = k;else k = p[18];
  return k;
});
function dY({
  hunks: hunks,
  dim: dim_3,
  width: width_6,
  filePath: filePath_2,
  firstLine: firstLine_2,
  fileContent: fileContent_2
}) {
  return BTe(hunks.map((l, index) => e(s, {
    flexDirection: "column",
    children: e(c8, {
      patch: l,
      dim: dim_3,
      width: width_6,
      filePath: filePath_2,
      firstLine: firstLine_2,
      fileContent: fileContent_2
    })
  }, `hunk-${index}`)), l => e(Iu, {
    fromLeftEdge: !0,
    children: e(n, {
      dimColor: !0,
      children: "..."
    })
  }, `ellipsis-${l}`));
}
export { c8, dY };