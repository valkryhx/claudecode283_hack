// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { pn, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { br } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { he, PMe } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { m$ } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { mi, cz, s, n, Go, Iu, Ws } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Gxe } from "B:/~BUN/root/chunk-5vcgesja.js";
import { m1 } from "B:/~BUN/root/chunk-c050gts0.js";
import { xSn, Qtt, yVe, Tqr } from "B:/~BUN/root/chunk-mq92kyt9.js";
import { hd } from "B:/~BUN/root/chunk-q6bapw2s.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { ng, P, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { rJn } from "B:/~BUN/root/chunk-qvy7wp4j.js";
import { S, yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
import { extname as bt } from "path";
var jt = 500;
function Jtt(l, a, code, language) {
  let variant = `${language}\x00${Gxe.pluginGrammarGeneration}\x00${PMe()}`,
    o = rJn(variant, code),
    m = l.get(o);
  if (m !== void 0) {
    if (l.delete(o), m.code === code && m.variant === variant) return l.set(o, m), m.highlighted;
  }
  let highlighted = a.highlight(code, {
    language: language
  });
  if (l.size >= jt) {
    let g = l.keys().next().value;
    if (g !== void 0) l.delete(g);
  }
  return l.set(o, {
    variant: variant,
    code: code,
    highlighted: highlighted
  }), highlighted;
}
function X(text) {
  let markers = new Map();
  if (text.length <= xSn) return {
    text: text,
    markers: markers
  };
  return {
    text: text.split(`
`).map((item, index) => {
      let {
        code: code_2,
        truncatedChars: truncatedChars
      } = Qtt(item);
      if (truncatedChars > 0) return markers.set(index, yVe(truncatedChars)), code_2;
      return item;
    }).join(`
`),
    markers: markers
  };
}
function L(l, a) {
  if (a.size === 0) return l;
  return l.split(`
`).map((item, index) => {
    let d = a.get(index);
    return d ? item + he.dim(d) : item;
  }).join(`
`);
}
function j(l) {
  let c = w(16),
    {
      code: code_3,
      filePath: filePath,
      dim: dim,
      skipColoring: skipColoring
    } = l,
    dimColor = dim === void 0 ? !1 : dim,
    m = skipColoring === void 0 ? !1 : skipColoring,
    codeWithSpaces,
    h;
  if (c[0] !== code_3 || c[1] !== dimColor || c[2] !== m) {
    h = yn;
    ce: {
      codeWithSpaces = m$(code_3);
      if (m) {
        let {
          text: text_2,
          markers: markers_2
        } = X(codeWithSpaces);
        const children = e(Go, {
          children: L(text_2, markers_2)
        });
        let C;
        if (c[5] !== dimColor || c[6] !== children) C = e(n, {
          dimColor: dimColor,
          children: children
        }), c[5] = dimColor, c[6] = children, c[7] = C;else C = c[7];
        h = C;
        break ce;
      }
    }
    c[0] = code_3, c[1] = dimColor, c[2] = m, c[3] = codeWithSpaces, c[4] = h;
  } else codeWithSpaces = c[3], h = c[4];
  if (h !== yn) return h;
  let x;
  if (c[8] !== filePath) x = bt(filePath).slice(1), c[8] = filePath, c[9] = x;else x = c[9];
  let language_2 = x,
    children_2;
  if (c[10] !== codeWithSpaces || c[11] !== language_2) children_2 = e(nt, {
    codeWithSpaces: codeWithSpaces,
    language: language_2
  }), c[10] = codeWithSpaces, c[11] = language_2, c[12] = children_2;else children_2 = c[12];
  let At;
  if (c[13] !== dimColor || c[14] !== children_2) At = e(n, {
    dimColor: dimColor,
    children: children_2
  }), c[13] = dimColor, c[14] = children_2, c[15] = At;else At = c[15];
  return At;
}
function nt(l) {
  let u = w(7),
    {
      codeWithSpaces: codeWithSpaces_2,
      language: language_3
    } = l,
    d;
  if (u[0] === S) d = m1(), u[0] = d;else d = u[0];
  let o = d,
    {
      highlightedCode: highlightedCode
    } = cz(),
    pluginGrammarGeneration = Gxe.pluginGrammarGeneration,
    g;
  if (u[1] !== codeWithSpaces_2 || u[2] !== highlightedCode || u[3] !== language_3) {
    ce: {
      let {
        text: text_3,
        markers: markers_3
      } = X(codeWithSpaces_2);
      let F = "markdown";
      if (language_3) {
        if (o.supportsLanguage(language_3)) F = language_3;else t(`Language not supported while highlighting code, falling back to markdown: ${language_3}`);
      }
      ;
      try {
        g = L(Jtt(highlightedCode, o, text_3, F), markers_3);
      } catch (error) {
        let C = error;
        if (C instanceof Error && C.message.includes("Unknown language")) {
          g = (t(`Language not supported while highlighting code, falling back to markdown: ${C}`), L(Jtt(highlightedCode, o, text_3, "markdown"), markers_3));
          break ce;
        }
        g = L(text_3, markers_3);
      }
    }
    u[1] = codeWithSpaces_2, u[2] = highlightedCode, u[3] = language_3, u[4] = g;
  } else g = u[4];
  let children_3 = g,
    x;
  if (u[5] !== children_3) x = e(Go, {
    children: children_3
  }), u[5] = children_3, u[6] = x;else x = u[6];
  return x;
}
function me(children_4, xe) {
  return e(n, {
    children: e(Go, {
      children: children_4
    })
  }, xe);
}
var Wt = 80,
  Uw = ng(function (a) {
    let G = w(40),
      {
        code: code_4,
        filePath: filePath_2,
        width: width,
        dim: dim_2,
        startLine: startLine,
        lineNumbers: lineNumbers
      } = a,
      dim_3 = dim_2 === void 0 ? !1 : dim_2,
      h = startLine === void 0 ? 1 : startLine,
      k = lineNumbers === void 0 ? !0 : lineNumbers,
      ref = A(null),
      [x, C] = y(Wt),
      ce = width || x,
      [p] = br(),
      skipColoring_2 = hd().syntaxHighlightingDisabled ?? !1,
      z;
    if (G[0] !== code_4 || G[1] !== filePath_2 || G[2] !== skipColoring_2) {
      Ye: {
        if (skipColoring_2) {
          z = null;
          break Ye;
        }
        let _t = Tqr();
        if (!_t) {
          z = null;
          break Ye;
        }
        z = new _t(m$(code_4), filePath_2);
      }
      G[0] = code_4, G[1] = filePath_2, G[2] = skipColoring_2, G[3] = z;
    } else z = G[3];
    let D = z,
      vt,
      It;
    if (G[4] !== width) vt = () => {
      if (!width && ref.current) {
        let {
          width: width_2
        } = Ws(ref.current);
        if (width_2 > 0) C(width_2 - 2);
      }
    }, It = [width], G[4] = width, G[5] = vt, G[6] = It;else vt = G[5], It = G[6];
    P(vt, It);
    let zt;
    if (G[7] !== code_4) zt = K(code_4), G[7] = code_4, G[8] = zt;else zt = G[8];
    let fe = String(zt).length + 2,
      ut;
    Ze: {
      if (!k || h === 1) {
        ut = null;
        break Ze;
      }
      let Ot = K(code_4);
      let digits = String(h + Ot - 1).length;
      const extraCols = Math.max(0, digits - String(Ot).length);
      let f;
      if (G[9] !== digits || G[10] !== extraCols) f = {
        digits: digits,
        extraCols: extraCols
      }, G[9] = digits, G[10] = extraCols, G[11] = f;else f = G[11];
      ut = f;
    }
    let mt = ut,
      pe = mi() || h !== 1,
      E;
    ei: {
      if (D === null) {
        E = null;
        break ei;
      }
      let v = ce - (mt?.extraCols ?? 0) + (k ? 0 : fe);
      if (k && !pe) {
        let lines;
        if (G[12] !== D || G[13] !== v || G[14] !== dim_3 || G[15] !== p) lines = D.render(p, v, dim_3) ?? [], G[12] = D, G[13] = v, G[14] = dim_3, G[15] = p, G[16] = lines;else lines = G[16];
        let W;
        if (G[17] !== lines) W = {
          split: !1,
          lines: lines
        }, G[17] = lines, G[18] = W;else W = G[18];
        E = W;
        break ei;
      }
      let f;
      if (G[19] !== D || G[20] !== v || G[21] !== dim_3 || G[22] !== p) f = D.renderSplit(p, v, dim_3), G[19] = D, G[20] = v, G[21] = dim_3, G[22] = p, G[23] = f;else f = G[23];
      let {
        gutters: gutters,
        contents: contents
      } = f;
      let W;
      if (G[24] !== contents || G[25] !== gutters) W = {
        split: !0,
        gutters: gutters,
        contents: contents
      }, G[24] = contents, G[25] = gutters, G[26] = W;else W = G[26];
      E = W;
    }
    let b = E,
      f;
    ii: {
      if (mt === null || b === null || !b.split) {
        f = null;
        break ii;
      }
      let {
        digits: digits_2
      } = mt;
      let W;
      if (G[27] !== digits_2 || G[28] !== b.gutters || G[29] !== h) {
        let ft = h;
        W = b.gutters.map(item => {
          if (pn(item).trim() === "") {
            return " ".repeat(digits_2 + 2);
          }
          let ye = ft;
          return ft = ft + 1, ` ${String(ye).padStart(digits_2)} `;
        });
        G[27] = digits_2, G[28] = b.gutters, G[29] = h, G[30] = W;
      } else W = G[30];
      f = W;
    }
    let pt = f,
      W;
    if (G[31] !== code_4 || G[32] !== dim_3 || G[33] !== pt || G[34] !== filePath_2 || G[35] !== k || G[36] !== b || G[37] !== h || G[38] !== skipColoring_2) W = e(s, {
      ref: ref,
      children: b ? e(s, {
        flexDirection: "column",
        children: b.split ? b.contents.map((Xt, index) => !k ? e(n, {
          children: e(Go, {
            children: Xt
          })
        }, index) : e(gt, {
          gutter: b.gutters[index],
          content: Xt,
          displayGutter: pt?.[index]
        }, index)) : b.lines.map(me)
      }) : r(s, {
        flexDirection: "column",
        children: [k && h !== 1 && r(n, {
          dimColor: !0,
          children: ["\u2026 from line ", h]
        }), e(j, {
          code: code_4,
          filePath: filePath_2,
          dim: dim_3,
          skipColoring: skipColoring_2
        })]
      })
    }), G[31] = code_4, G[32] = dim_3, G[33] = pt, G[34] = filePath_2, G[35] = k, G[36] = b, G[37] = h, G[38] = skipColoring_2, G[39] = W;else W = G[39];
    return W;
  });
function K(l) {
  let a = $t(l, `
`) + 1;
  return l.endsWith(`
`) ? a - 1 : a;
}
function gt(l) {
  let d = w(8),
    {
      gutter: a,
      content: i,
      displayGutter: u
    } = l,
    o;
  if (d[0] !== u || d[1] !== a) o = e(Iu, {
    fromLeftEdge: !0,
    children: u === void 0 ? e(n, {
      children: e(Go, {
        children: a
      })
    }) : e(n, {
      dimColor: !0,
      children: u
    })
  }), d[0] = u, d[1] = a, d[2] = o;else o = d[2];
  let m;
  if (d[3] !== i) m = e(n, {
    children: e(Go, {
      children: i
    })
  }), d[3] = i, d[4] = m;else m = d[4];
  let c;
  if (d[5] !== o || d[6] !== m) c = r(s, {
    flexDirection: "row",
    children: [o, m]
  }), d[5] = o, d[6] = m, d[7] = c;else c = d[7];
  return c;
}
export { Jtt, Uw };