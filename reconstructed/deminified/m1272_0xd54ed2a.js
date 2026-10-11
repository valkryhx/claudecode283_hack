// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Zn } from "B:/~BUN/root/chunk-1x7a47hz.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { Y0 } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { Js, tL, s, n, Jr, Yc, Xi } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Mke } from "B:/~BUN/root/chunk-6wgkxd9a.js";
import { JD } from "B:/~BUN/root/chunk-5dn8wsxz.js";
import { FGt, uje, rIe, fer } from "B:/~BUN/root/chunk-93kq3f21.js";
import { Ba } from "B:/~BUN/root/chunk-vf07m8qt.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Gp, R, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { _Bo } from "B:/~BUN/root/chunk-zhkdb3ds.js";
import { S, hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();
import { extname as yt } from "path";
var jt = 500;
function B(a, d, i, language) {
  let o = _Bo(`${language}\x00${Mke.pluginGrammarGeneration}`, i),
    l = a.get(o);
  if (l !== void 0) return a.delete(o), a.set(o, l), l;
  let c = d.highlight(i, {
    language: language
  });
  if (a.size >= jt) {
    let f = a.keys().next().value;
    if (f !== void 0) a.delete(f);
  }
  return a.set(o, c), c;
}
function j(text) {
  let markers = new Map();
  if (text.length <= FGt) return {
    text: text,
    markers: markers
  };
  return {
    text: text.split(`
`).map((item, index) => {
      let {
        code: code,
        truncatedChars: truncatedChars
      } = uje(item);
      if (truncatedChars > 0) return markers.set(index, rIe(truncatedChars)), code;
      return item;
    }).join(`
`),
    markers: markers
  };
}
function P(a, d) {
  if (d.size === 0) return a;
  return a.split(`
`).map((item, index) => {
    let o = d.get(index);
    return o ? item + pe.dim(o) : item;
  }).join(`
`);
}
function q(a) {
  let f = w(16),
    {
      code: code_2,
      filePath: filePath,
      dim: dim,
      skipColoring: skipColoring
    } = a,
    dimColor = dim === void 0 ? !1 : dim,
    c = skipColoring === void 0 ? !1 : skipColoring,
    codeWithSpaces,
    h;
  if (f[0] !== code_2 || f[1] !== dimColor || f[2] !== c) {
    h = hn;
    fe: {
      codeWithSpaces = Y0(code_2);
      if (c) {
        let {
          text: text_2,
          markers: markers_2
        } = j(codeWithSpaces);
        const children = e(Jr, {
          children: P(text_2, markers_2)
        });
        let x;
        if (f[5] !== dimColor || f[6] !== children) x = e(n, {
          dimColor: dimColor,
          children: children
        }), f[5] = dimColor, f[6] = children, f[7] = x;else x = f[7];
        h = x;
        break fe;
      }
    }
    f[0] = code_2, f[1] = dimColor, f[2] = c, f[3] = codeWithSpaces, f[4] = h;
  } else codeWithSpaces = f[3], h = f[4];
  if (h !== hn) return h;
  let W;
  if (f[8] !== filePath) W = yt(filePath).slice(1), f[8] = filePath, f[9] = W;else W = f[9];
  let language_2 = W,
    children_2;
  if (f[10] !== codeWithSpaces || f[11] !== language_2) children_2 = e(ot, {
    codeWithSpaces: codeWithSpaces,
    language: language_2
  }), f[10] = codeWithSpaces, f[11] = language_2, f[12] = children_2;else children_2 = f[12];
  let It;
  if (f[13] !== dimColor || f[14] !== children_2) It = e(n, {
    dimColor: dimColor,
    children: children_2
  }), f[13] = dimColor, f[14] = children_2, f[15] = It;else It = f[15];
  return It;
}
function ot(a) {
  let u = w(7),
    {
      codeWithSpaces: codeWithSpaces_2,
      language: language_3
    } = a,
    o;
  if (u[0] === S) o = JD(), u[0] = o;else o = u[0];
  let l = o,
    {
      highlightedCode: highlightedCode
    } = tL(),
    pluginGrammarGeneration = Mke.pluginGrammarGeneration,
    m;
  if (u[1] !== codeWithSpaces_2 || u[2] !== highlightedCode || u[3] !== language_3) {
    fe: {
      let {
        text: text_3,
        markers: markers_3
      } = j(codeWithSpaces_2);
      let A = "markdown";
      if (language_3) {
        if (l.supportsLanguage(language_3)) A = language_3;else t(`Language not supported while highlighting code, falling back to markdown: ${language_3}`);
      }
      ;
      try {
        m = P(B(highlightedCode, l, text_3, A), markers_3);
      } catch (error) {
        let x = error;
        if (x instanceof Error && x.message.includes("Unknown language")) {
          m = (t(`Language not supported while highlighting code, falling back to markdown: ${x}`), P(B(highlightedCode, l, text_3, "markdown"), markers_3));
          break fe;
        }
        m = P(text_3, markers_3);
      }
    }
    u[1] = codeWithSpaces_2, u[2] = highlightedCode, u[3] = language_3, u[4] = m;
  } else m = u[4];
  let children_3 = m,
    W;
  if (u[5] !== children_3) W = e(Jr, {
    children: children_3
  }), u[5] = children_3, u[6] = W;else W = u[6];
  return W;
}
function he(children_4, Ne) {
  return e(n, {
    children: e(Jr, {
      children: children_4
    })
  }, Ne);
}
var St = 80,
  d_ = Gp(function (d) {
    let L = w(40),
      {
        code: code_3,
        filePath: filePath_2,
        width: width,
        dim: dim_2,
        startLine: startLine,
        lineNumbers: lineNumbers
      } = d,
      dim_3 = dim_2 === void 0 ? !1 : dim_2,
      h = startLine === void 0 ? 1 : startLine,
      k = lineNumbers === void 0 ? !0 : lineNumbers,
      ref = T(null),
      [W, x] = g(St),
      fe = width || W,
      [b] = Zn(),
      skipColoring_2 = Ba().syntaxHighlightingDisabled ?? !1,
      v;
    if (L[0] !== code_3 || L[1] !== filePath_2 || L[2] !== skipColoring_2) {
      Qe: {
        if (skipColoring_2) {
          v = null;
          break Qe;
        }
        let Tt = fer();
        if (!Tt) {
          v = null;
          break Qe;
        }
        v = new Tt(Y0(code_3), filePath_2);
      }
      L[0] = code_3, L[1] = filePath_2, L[2] = skipColoring_2, L[3] = v;
    } else v = L[3];
    let F = v,
      zt,
      Ot;
    if (L[4] !== width) zt = () => {
      if (!width && ref.current) {
        let {
          width: width_2
        } = Xi(ref.current);
        if (width_2 > 0) x(width_2 - 2);
      }
    }, Ot = [width], L[4] = width, L[5] = zt, L[6] = Ot;else zt = L[5], Ot = L[6];
    R(zt, Ot);
    let vt;
    if (L[7] !== code_3) vt = V(code_3), L[7] = code_3, L[8] = vt;else vt = L[8];
    let be = String(vt).length + 2,
      mt;
    Ve: {
      if (!k || h === 1) {
        mt = null;
        break Ve;
      }
      let Bt = V(code_3);
      let digits = String(h + Bt - 1).length;
      const extraCols = Math.max(0, digits - String(Bt).length);
      let p;
      if (L[9] !== digits || L[10] !== extraCols) p = {
        digits: digits,
        extraCols: extraCols
      }, L[9] = digits, L[10] = extraCols, L[11] = p;else p = L[11];
      mt = p;
    }
    let ct = mt,
      ye = Js() || h !== 1,
      D;
    Ze: {
      if (F === null) {
        D = null;
        break Ze;
      }
      let I = fe - (ct?.extraCols ?? 0) + (k ? 0 : be);
      if (k && !ye) {
        let lines;
        if (L[12] !== F || L[13] !== I || L[14] !== dim_3 || L[15] !== b) lines = F.render(b, I, dim_3) ?? [], L[12] = F, L[13] = I, L[14] = dim_3, L[15] = b, L[16] = lines;else lines = L[16];
        let G;
        if (L[17] !== lines) G = {
          split: !1,
          lines: lines
        }, L[17] = lines, L[18] = G;else G = L[18];
        D = G;
        break Ze;
      }
      let p;
      if (L[19] !== F || L[20] !== I || L[21] !== dim_3 || L[22] !== b) p = F.renderSplit(b, I, dim_3), L[19] = F, L[20] = I, L[21] = dim_3, L[22] = b, L[23] = p;else p = L[23];
      let {
        gutters: gutters,
        contents: contents
      } = p;
      let G;
      if (L[24] !== contents || L[25] !== gutters) G = {
        split: !0,
        gutters: gutters,
        contents: contents
      }, L[24] = contents, L[25] = gutters, L[26] = G;else G = L[26];
      D = G;
    }
    let y = D,
      p;
    tn: {
      if (ct === null || y === null || !y.split) {
        p = null;
        break tn;
      }
      let {
        digits: digits_2
      } = ct;
      let G;
      if (L[27] !== digits_2 || L[28] !== y.gutters || L[29] !== h) {
        let pt = h;
        G = y.gutters.map(item => {
          if (wt(item).trim() === "") {
            return " ".repeat(digits_2 + 2);
          }
          let We = pt;
          return pt = pt + 1, ` ${String(We).padStart(digits_2)} `;
        });
        L[27] = digits_2, L[28] = y.gutters, L[29] = h, L[30] = G;
      } else G = L[30];
      p = G;
    }
    let bt = p,
      G;
    if (L[31] !== code_3 || L[32] !== dim_3 || L[33] !== bt || L[34] !== filePath_2 || L[35] !== k || L[36] !== y || L[37] !== h || L[38] !== skipColoring_2) G = e(s, {
      ref: ref,
      children: y ? e(s, {
        flexDirection: "column",
        children: y.split ? y.contents.map((Ut, index) => !k ? e(n, {
          children: e(Jr, {
            children: Ut
          })
        }, index) : e(gt, {
          gutter: y.gutters[index],
          content: Ut,
          displayGutter: bt?.[index]
        }, index)) : y.lines.map(he)
      }) : r(s, {
        flexDirection: "column",
        children: [k && h !== 1 && r(n, {
          dimColor: !0,
          children: ["\u2026 from line ", h]
        }), e(q, {
          code: code_3,
          filePath: filePath_2,
          dim: dim_3,
          skipColoring: skipColoring_2
        })]
      })
    }), L[31] = code_3, L[32] = dim_3, L[33] = bt, L[34] = filePath_2, L[35] = k, L[36] = y, L[37] = h, L[38] = skipColoring_2, L[39] = G;else G = L[39];
    return G;
  });
function V(a) {
  let d = Gt(a, `
`) + 1;
  return a.endsWith(`
`) ? d - 1 : d;
}
function gt(a) {
  let o = w(8),
    {
      gutter: d,
      content: i,
      displayGutter: u
    } = a,
    l;
  if (o[0] !== u || o[1] !== d) l = e(Yc, {
    fromLeftEdge: !0,
    children: u === void 0 ? e(n, {
      children: e(Jr, {
        children: d
      })
    }) : e(n, {
      dimColor: !0,
      children: u
    })
  }), o[0] = u, o[1] = d, o[2] = l;else l = o[2];
  let c;
  if (o[3] !== i) c = e(n, {
    children: e(Jr, {
      children: i
    })
  }), o[3] = i, o[4] = c;else c = o[4];
  let f;
  if (o[5] !== l || o[6] !== c) f = r(s, {
    flexDirection: "row",
    children: [l, c]
  }), o[5] = l, o[6] = c, o[7] = f;else f = o[7];
  return f;
}
export { d_ };