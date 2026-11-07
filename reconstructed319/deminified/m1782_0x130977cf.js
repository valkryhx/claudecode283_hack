// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Br } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { Se, $Ve } from "B:/~BUN/root/chunk-x24hm796.js";
import { bae } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { oa, LY, s, n, qs, Gp, Ss } from "B:/~BUN/root/chunk-qey16aan.js";
import { whn, Zc, i2t } from "B:/~BUN/root/chunk-31b4g6te.js";
import { PDe } from "B:/~BUN/root/chunk-bw0w9zyr.js";
import { hK } from "B:/~BUN/root/chunk-wcj4tqqj.js";
import { n5n, $vt, Vot, r5n } from "B:/~BUN/root/chunk-gappgpaq.js";
import { Ic } from "B:/~BUN/root/chunk-c7kw6nqt.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { My, O, Z, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Pjt } from "B:/~BUN/root/chunk-tr26qctc.js";
import { Zn } from "B:/~BUN/root/chunk-12nc74pv.js";
import { w, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
import { extname as Wt } from "path";
var ie = 500;
function Hvt(o, a, code, language, work = {
  left: Number.MAX_SAFE_INTEGER
}) {
  let variant = `${language}\x00${PDe.pluginGrammarGeneration}\x00${$Ve()}`,
    d = Pjt(variant, code),
    m = o.get(d);
  if (m !== void 0) {
    if (o.delete(d), m.code === code && m.variant === variant) return o.set(d, m), work.left -= m.work, m.highlighted;
  }
  let left = work.left,
    highlighted = a.highlight(code, {
      language: language,
      work: work
    });
  if (o.size >= ie) {
    let p = o.keys().next().value;
    if (p !== void 0) o.delete(p);
  }
  return o.set(d, {
    variant: variant,
    code: code,
    highlighted: highlighted,
    work: left - work.left
  }), highlighted;
}
function M(text) {
  let markers = new Map();
  if (text.length <= n5n) return {
    text: text,
    markers: markers
  };
  return {
    text: text.split(`
`).map((item, index) => {
      let {
        code: code_2,
        truncatedChars: truncatedChars
      } = $vt(item);
      if (truncatedChars > 0) return markers.set(index, Vot(truncatedChars)), code_2;
      return item;
    }).join(`
`),
    markers: markers
  };
}
function C(o, a) {
  if (a.size === 0) return o;
  return o.split(`
`).map((item, index) => {
    let u = a.get(index);
    return u ? item + Se.dim(u) : item;
  }).join(`
`);
}
function q(o) {
  let m = S(16),
    {
      code: code_3,
      filePath: filePath,
      dim: dim,
      skipColoring: skipColoring
    } = o,
    dimColor = dim === void 0 ? !1 : dim,
    d = skipColoring === void 0 ? !1 : skipColoring,
    codeWithSpaces,
    c;
  if (m[0] !== code_3 || m[1] !== dimColor || m[2] !== d) {
    c = Pn;
    pt: {
      codeWithSpaces = bae(code_3);
      if (d) {
        let {
          text: text_2,
          markers: markers_2
        } = M(codeWithSpaces);
        const children = e(qs, {
          children: C(text_2, markers_2)
        });
        let W;
        if (m[5] !== dimColor || m[6] !== children) W = e(n, {
          dimColor: dimColor,
          children: children
        }), m[5] = dimColor, m[6] = children, m[7] = W;else W = m[7];
        c = W;
        break pt;
      }
    }
    m[0] = code_3, m[1] = dimColor, m[2] = d, m[3] = codeWithSpaces, m[4] = c;
  } else codeWithSpaces = m[3], c = m[4];
  if (c !== Pn) return c;
  let f;
  if (m[8] !== filePath) f = Wt(filePath).slice(1), m[8] = filePath, m[9] = f;else f = m[9];
  let language_2 = f,
    children_2;
  if (m[10] !== codeWithSpaces || m[11] !== language_2) children_2 = e(at, {
    codeWithSpaces: codeWithSpaces,
    language: language_2
  }), m[10] = codeWithSpaces, m[11] = language_2, m[12] = children_2;else children_2 = m[12];
  let Y;
  if (m[13] !== dimColor || m[14] !== children_2) Y = e(n, {
    dimColor: dimColor,
    children: children_2
  }), m[13] = dimColor, m[14] = children_2, m[15] = Y;else Y = m[15];
  return Y;
}
function at(o) {
  let g = S(7),
    {
      codeWithSpaces: codeWithSpaces_2,
      language: language_3
    } = o,
    u;
  if (g[0] === w) u = hK(), g[0] = u;else u = g[0];
  let l = u,
    {
      highlightedCode: highlightedCode
    } = LY(),
    pluginGrammarGeneration = PDe.pluginGrammarGeneration,
    h;
  if (g[1] !== codeWithSpaces_2 || g[2] !== highlightedCode || g[3] !== language_3) {
    pt: {
      let {
        text: text_3,
        markers: markers_3
      } = M(codeWithSpaces_2);
      let P = "markdown";
      if (language_3) {
        if (l.supportsLanguage(language_3)) P = language_3;else t(`Language not supported while highlighting code, falling back to markdown: ${language_3}`);
      }
      ;
      try {
        h = C(Hvt(highlightedCode, l, text_3, P), markers_3);
      } catch (error) {
        let W = error;
        if (W instanceof Error && W.message.includes("Unknown language")) {
          h = (t(`Language not supported while highlighting code, falling back to markdown: ${W}`), C(Hvt(highlightedCode, l, text_3, "markdown"), markers_3));
          break pt;
        }
        h = C(text_3, markers_3);
      }
    }
    g[1] = codeWithSpaces_2, g[2] = highlightedCode, g[3] = language_3, g[4] = h;
  } else h = g[4];
  let children_3 = h,
    f;
  if (g[5] !== children_3) f = e(qs, {
    children: children_3
  }), g[5] = children_3, g[6] = f;else f = g[6];
  return f;
}
function Me(children_4, Xe) {
  return e(n, {
    children: e(qs, {
      children: children_4
    })
  }, Xe);
}
function Re() {
  return 1;
}
function Fe(_e, tt) {
  return tt === 0 || Zn(_e).trim() !== "" ? [tt] : [];
}
var St = 80,
  $w = My(function (a) {
    let G = S(40),
      {
        code: code_4,
        filePath: filePath_2,
        width: width,
        dim: dim_2,
        startLine: startLine,
        lineNumbers: lineNumbers
      } = a,
      dim_3 = dim_2 === void 0 ? !1 : dim_2,
      c = startLine === void 0 ? 1 : startLine,
      p = lineNumbers === void 0 ? !0 : lineNumbers,
      ref = A(null),
      [f, W] = y(St),
      pt = width || f,
      [x] = Br(),
      skipColoring_2 = Ic().syntaxHighlightingDisabled ?? !1,
      I;
    if (G[0] !== code_4 || G[1] !== filePath_2 || G[2] !== skipColoring_2) {
      _e: {
        if (skipColoring_2) {
          I = null;
          break _e;
        }
        let tt = r5n();
        if (!tt) {
          I = null;
          break _e;
        }
        I = new tt(bae(code_4), filePath_2);
      }
      G[0] = code_4, G[1] = filePath_2, G[2] = skipColoring_2, G[3] = I;
    } else I = G[3];
    let _ = I,
      Qt,
      Vt;
    if (G[4] !== width) Qt = () => {
      if (!width && ref.current) {
        let {
          width: width_2
        } = Ss(ref.current);
        if (width_2 > 0) W(width_2 - 2);
      }
    }, Vt = [width], G[4] = width, G[5] = Qt, G[6] = Vt;else Qt = G[5], Vt = G[6];
    O(Qt, Vt);
    let Zt;
    if (G[7] !== code_4) Zt = V(code_4), G[7] = code_4, G[8] = Zt;else Zt = G[8];
    let Ae = String(Zt).length + 2,
      bt;
    Ci: {
      if (!p || c === 1) {
        bt = null;
        break Ci;
      }
      let te = V(code_4);
      let digits = String(c + te - 1).length;
      const extraCols = Math.max(0, digits - String(te).length);
      let b;
      if (G[9] !== digits || G[10] !== extraCols) b = {
        digits: digits,
        extraCols: extraCols
      }, G[9] = digits, G[10] = extraCols, G[11] = b;else b = G[11];
      bt = b;
    }
    let yt = bt,
      $e = oa() || c !== 1,
      E;
    Gi: {
      if (_ === null) {
        E = null;
        break Gi;
      }
      let v = pt - (yt?.extraCols ?? 0) + (p ? 0 : Ae);
      if (p && !$e) {
        let lines;
        if (G[12] !== _ || G[13] !== v || G[14] !== dim_3 || G[15] !== x) lines = _.render(x, v, dim_3) ?? [], G[12] = _, G[13] = v, G[14] = dim_3, G[15] = x, G[16] = lines;else lines = G[16];
        let N;
        if (G[17] !== lines) N = {
          split: !1,
          lines: lines
        }, G[17] = lines, G[18] = N;else N = G[18];
        E = N;
        break Gi;
      }
      let b;
      if (G[19] !== _ || G[20] !== v || G[21] !== dim_3 || G[22] !== x) b = _.renderSplit(x, v, dim_3), G[19] = _, G[20] = v, G[21] = dim_3, G[22] = x, G[23] = b;else b = G[23];
      let {
        gutters: gutters,
        contents: contents
      } = b;
      let N;
      if (G[24] !== contents || G[25] !== gutters) N = {
        split: !0,
        gutters: gutters,
        contents: contents
      }, G[24] = contents, G[25] = gutters, G[26] = N;else N = G[26];
      E = N;
    }
    let k = E,
      b;
    Ni: {
      if (yt === null || k === null || !k.split) {
        b = null;
        break Ni;
      }
      let {
        digits: digits_2
      } = yt;
      let N;
      if (G[27] !== digits_2 || G[28] !== k.gutters || G[29] !== c) {
        let kt = c;
        N = k.gutters.map(item => {
          if (Zn(item).trim() === "") {
            return " ".repeat(digits_2 + 2);
          }
          let ve = kt;
          return kt = kt + 1, ` ${String(ve).padStart(digits_2)} `;
        });
        G[27] = digits_2, G[28] = k.gutters, G[29] = c, G[30] = N;
      } else N = G[30];
      b = N;
    }
    let Ct = b,
      N;
    if (G[31] !== code_4 || G[32] !== dim_3 || G[33] !== Ct || G[34] !== filePath_2 || G[35] !== p || G[36] !== k || G[37] !== c || G[38] !== skipColoring_2) N = e(s, {
      ref: ref,
      children: k ? e(s, {
        flexDirection: "column",
        children: k.split ? k.contents.map((ee, index) => !p ? e(n, {
          children: e(qs, {
            children: ee
          })
        }, index) : e(ft, {
          gutter: k.gutters[index],
          content: ee,
          displayGutter: Ct?.[index]
        }, index)) : k.lines.map(Me)
      }) : r(s, {
        flexDirection: "column",
        children: [p && c !== 1 && r(n, {
          dimColor: !0,
          children: ["\u2026 from line ", c]
        }), e(q, {
          code: code_4,
          filePath: filePath_2,
          dim: dim_3,
          skipColoring: skipColoring_2
        })]
      })
    }), G[31] = code_4, G[32] = dim_3, G[33] = Ct, G[34] = filePath_2, G[35] = p, G[36] = k, G[37] = c, G[38] = skipColoring_2, G[39] = N;else N = G[39];
    return N;
  });
function OWr(o, a, i) {
  let m = S(8),
    [g] = Br(),
    l = Ic().syntaxHighlightingDisabled ?? !1,
    d;
  if (m[0] !== o || m[1] !== a || m[2] !== l || m[3] !== g || m[4] !== i) {
    W: {
      let h = l ? null : r5n();
      if (h === null) {
        let {
          text: text_4,
          markers: markers_4
        } = M(bae(o));
        let P = whn([C(text_4, markers_4)]);
        let f = P.split(`
`);
        if (f.length > 1 && f.at(-1) === "") f.pop();
        if (i2t(P, i).width <= i) {
          d = f.map(Re);
          break W;
        }
        let pt;
        if (m[6] !== i) pt = x => Math.max(1, Dt(Zc(x.replace(/\r$/, ""), i, "wrap"), `
`) + 1), m[6] = i, m[7] = pt;else pt = m[7];
        d = f.map(pt);
        break W;
      }
      let {
        gutters: gutters_2
      } = new h(bae(o), a).renderSplit(g, i, !1);
      let D = gutters_2.flatMap(Fe);
      d = D.map((item, index) => (D[index + 1] ?? gutters_2.length) - item);
    }
    m[0] = o, m[1] = a, m[2] = l, m[3] = g, m[4] = i, m[5] = d;
  } else d = m[5];
  return d;
}
function V(o) {
  let a = Dt(o, `
`) + 1;
  return o.endsWith(`
`) ? a - 1 : a;
}
function ft(o) {
  let u = S(8),
    {
      gutter: a,
      content: i,
      displayGutter: g
    } = o,
    l;
  if (u[0] !== g || u[1] !== a) l = e(Gp, {
    fromLeftEdge: !0,
    children: g === void 0 ? e(n, {
      children: e(qs, {
        children: a
      })
    }) : e(n, {
      dimColor: !0,
      children: g
    })
  }), u[0] = g, u[1] = a, u[2] = l;else l = u[2];
  let d;
  if (u[3] !== i) d = e(n, {
    children: e(qs, {
      children: i
    })
  }), u[3] = i, u[4] = d;else d = u[4];
  let m;
  if (u[5] !== l || u[6] !== d) m = r(s, {
    flexDirection: "row",
    children: [l, d]
  }), u[5] = l, u[6] = d, u[7] = m;else m = u[7];
  return m;
}
export { Hvt, $w, OWr };