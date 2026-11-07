// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Dt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Br
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  Se,
  $Ve
} from "B:/~BUN/root/chunk-x24hm796.js";
import {
  bae
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  oa,
  LY,
  s,
  n,
  qs,
  Gp,
  Ss
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  whn,
  Zc,
  i2t
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  PDe
} from "B:/~BUN/root/chunk-bw0w9zyr.js";
import {
  hK
} from "B:/~BUN/root/chunk-wcj4tqqj.js";
import {
  n5n,
  $vt,
  Vot,
  r5n
} from "B:/~BUN/root/chunk-gappgpaq.js";
import {
  Ic
} from "B:/~BUN/root/chunk-c7kw6nqt.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  My,
  O,
  Z,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  Pjt
} from "B:/~BUN/root/chunk-tr26qctc.js";
import {
  Zn
} from "B:/~BUN/root/chunk-12nc74pv.js";
import {
  w,
  Pn
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
import {
  extname as Wt
} from "path";
var ie = 500;

function Hvt(o, a, i, g, u = {
  left: Number.MAX_SAFE_INTEGER
}) {
  let l = `${g}\x00${PDe.pluginGrammarGeneration}\x00${$Ve()}`,
    d = Pjt(l, i),
    m = o.get(d);
  if (m !== void 0) {
    if (o.delete(d), m.code === i && m.variant === l) return o.set(d, m), u.left -= m.work, m.highlighted
  }
  let h = u.left,
    c = a.highlight(i, {
      language: g,
      work: u
    });
  if (o.size >= ie) {
    let p = o.keys().next().value;
    if (p !== void 0) o.delete(p)
  }
  return o.set(d, {
    variant: l,
    code: i,
    highlighted: c,
    work: h - u.left
  }), c
}

function M(o) {
  let a = new Map;
  if (o.length <= n5n) return {
    text: o,
    markers: a
  };
  return {
    text: o.split(`
`).map((u, l) => {
      let {
        code: d,
        truncatedChars: m
      } = $vt(u);
      if (m > 0) return a.set(l, Vot(m)), d;
      return u
    }).join(`
`),
    markers: a
  }
}

function C(o, a) {
  if (a.size === 0) return o;
  return o.split(`
`).map((i, g) => {
    let u = a.get(g);
    return u ? i + Se.dim(u) : i
  }).join(`
`)
}

function q(o) {
  let m = S(16),
    {
      code: a,
      filePath: i,
      dim: g,
      skipColoring: u
    } = o,
    l = g === void 0 ? !1 : g,
    d = u === void 0 ? !1 : u,
    h, c;
  if (m[0] !== a || m[1] !== l || m[2] !== d) {
    c = Pn;
    pt: {
      h = bae(a);
      if (d) {
        let {
          text: p,
          markers: P
        } = M(h);
        const f = e(qs, {
          children: C(p, P)
        });
        let W;
        if (m[5] !== l || m[6] !== f) W = e(n, {
          dimColor: l,
          children: f
        }), m[5] = l, m[6] = f, m[7] = W;
        else W = m[7];
        c = W;
        break pt
      }
    }
    m[0] = a, m[1] = l, m[2] = d, m[3] = h, m[4] = c
  } else h = m[3], c = m[4];
  if (c !== Pn) return c;
  let f;
  if (m[8] !== i) f = Wt(i).slice(1), m[8] = i, m[9] = f;
  else f = m[9];
  let x = f,
    W;
  if (m[10] !== h || m[11] !== x) W = e(at, {
    codeWithSpaces: h,
    language: x
  }), m[10] = h, m[11] = x, m[12] = W;
  else W = m[12];
  let Y;
  if (m[13] !== l || m[14] !== W) Y = e(n, {
    dimColor: l,
    children: W
  }), m[13] = l, m[14] = W, m[15] = Y;
  else Y = m[15];
  return Y
}

function at(o) {
  let g = S(7),
    {
      codeWithSpaces: a,
      language: i
    } = o,
    u;
  if (g[0] === w) u = hK(), g[0] = u;
  else u = g[0];
  let l = u,
    {
      highlightedCode: d
    } = LY(),
    m = PDe.pluginGrammarGeneration,
    h;
  if (g[1] !== a || g[2] !== d || g[3] !== i) {
    pt: {
      let {
        text: c,
        markers: p
      } = M(a);
      let P = "markdown";
      if (i) {
        if (l.supportsLanguage(i)) P = i;
        else t(`Language not supported while highlighting code, falling back to markdown: ${i}`)
      };
      try {
        h = C(Hvt(d, l, c, P), p)
      } catch (f) {
        let W = f;
        if (W instanceof Error && W.message.includes("Unknown language")) {
          h = (t(`Language not supported while highlighting code, falling back to markdown: ${W}`), C(Hvt(d, l, c, "markdown"), p));
          break pt
        }
        h = C(c, p)
      }
    }
    g[1] = a,
    g[2] = d,
    g[3] = i,
    g[4] = h
  }
  else h = g[4];
  let x = h,
    f;
  if (g[5] !== x) f = e(qs, {
    children: x
  }), g[5] = x, g[6] = f;
  else f = g[6];
  return f
}

function Me(Be, Xe) {
  return e(n, {
    children: e(qs, {
      children: Be
    })
  }, Xe)
}

function Re() {
  return 1
}

function Fe(_e, tt) {
  return tt === 0 || Zn(_e).trim() !== "" ? [tt] : []
}
var St = 80,
  $w = My(function(a) {
    let G = S(40),
      {
        code: i,
        filePath: g,
        width: u,
        dim: l,
        startLine: d,
        lineNumbers: m
      } = a,
      h = l === void 0 ? !1 : l,
      c = d === void 0 ? 1 : d,
      p = m === void 0 ? !0 : m,
      P = A(null),
      [f, W] = y(St),
      pt = u || f,
      [x] = Br(),
      D = Ic().syntaxHighlightingDisabled ?? !1,
      I;
    if (G[0] !== i || G[1] !== g || G[2] !== D) {
      _e: {
        if (D) {
          I = null;
          break _e
        }
        let tt = r5n();
        if (!tt) {
          I = null;
          break _e
        }
        I = new tt(bae(i), g)
      }
      G[0] = i,
      G[1] = g,
      G[2] = D,
      G[3] = I
    }
    else I = G[3];
    let _ = I,
      Qt, Vt;
    if (G[4] !== u) Qt = () => {
      if (!u && P.current) {
        let {
          width: Yt
        } = Ss(P.current);
        if (Yt > 0) W(Yt - 2)
      }
    }, Vt = [u], G[4] = u, G[5] = Qt, G[6] = Vt;
    else Qt = G[5], Vt = G[6];
    O(Qt, Vt);
    let Zt;
    if (G[7] !== i) Zt = V(i), G[7] = i, G[8] = Zt;
    else Zt = G[8];
    let Ae = String(Zt).length + 2,
      bt;
    Ci: {
      if (!p || c === 1) {
        bt = null;
        break Ci
      }
      let te = V(i);
      let et = String(c + te - 1).length;
      const E = Math.max(0, et - String(te).length);
      let b;
      if (G[9] !== et || G[10] !== E) b = {
        digits: et,
        extraCols: E
      },
      G[9] = et,
      G[10] = E,
      G[11] = b;
      else b = G[11];bt = b
    }
    let yt = bt,
      $e = oa() || c !== 1,
      E;
    Gi: {
      if (_ === null) {
        E = null;
        break Gi
      }
      let v = pt - (yt?.extraCols ?? 0) + (p ? 0 : Ae);
      if (p && !$e) {
        let b;
        if (G[12] !== _ || G[13] !== v || G[14] !== h || G[15] !== x) b = _.render(x, v, h) ?? [], G[12] = _, G[13] = v, G[14] = h, G[15] = x, G[16] = b;
        else b = G[16];
        let N;
        if (G[17] !== b) N = {
          split: !1,
          lines: b
        }, G[17] = b, G[18] = N;
        else N = G[18];
        E = N;
        break Gi
      }
      let b;
      if (G[19] !== _ || G[20] !== v || G[21] !== h || G[22] !== x) b = _.renderSplit(x, v, h),
      G[19] = _,
      G[20] = v,
      G[21] = h,
      G[22] = x,
      G[23] = b;
      else b = G[23];
      let {
        gutters: xt,
        contents: wt
      } = b;
      let N;
      if (G[24] !== wt || G[25] !== xt) N = {
        split: !0,
        gutters: xt,
        contents: wt
      },
      G[24] = wt,
      G[25] = xt,
      G[26] = N;
      else N = G[26];E = N
    }
    let k = E,
      b;
    Ni: {
      if (yt === null || k === null || !k.split) {
        b = null;
        break Ni
      }
      let {
        digits: it
      } = yt;
      let N;
      if (G[27] !== it || G[28] !== k.gutters || G[29] !== c) {
        let kt = c;
        N = k.gutters.map((Ie) => {
          if (Zn(Ie).trim() === "") {
            return " ".repeat(it + 2)
          }
          let ve = kt;
          return kt = kt + 1, ` ${String(ve).padStart(it)} `
        });
        G[27] = it, G[28] = k.gutters, G[29] = c, G[30] = N
      } else N = G[30];b = N
    }
    let Ct = b,
      N;
    if (G[31] !== i || G[32] !== h || G[33] !== Ct || G[34] !== g || G[35] !== p || G[36] !== k || G[37] !== c || G[38] !== D) N = e(s, {
      ref: P,
      children: k ? e(s, {
        flexDirection: "column",
        children: k.split ? k.contents.map((ee, rt) => !p ? e(n, {
          children: e(qs, {
            children: ee
          })
        }, rt) : e(ft, {
          gutter: k.gutters[rt],
          content: ee,
          displayGutter: Ct?.[rt]
        }, rt)) : k.lines.map(Me)
      }) : r(s, {
        flexDirection: "column",
        children: [p && c !== 1 && r(n, {
          dimColor: !0,
          children: ["\u2026 from line ", c]
        }), e(q, {
          code: i,
          filePath: g,
          dim: h,
          skipColoring: D
        })]
      })
    }), G[31] = i, G[32] = h, G[33] = Ct, G[34] = g, G[35] = p, G[36] = k, G[37] = c, G[38] = D, G[39] = N;
    else N = G[39];
    return N
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
          text: c,
          markers: p
        } = M(bae(o));
        let P = whn([C(c, p)]);
        let f = P.split(`
`);
        if (f.length > 1 && f.at(-1) === "") f.pop();
        if (i2t(P, i).width <= i) {
          d = f.map(Re);
          break W
        }
        let pt;
        if (m[6] !== i) pt = (x) => Math.max(1, Dt(Zc(x.replace(/\r$/, ""), i, "wrap"), `
`) + 1), m[6] = i, m[7] = pt;
        else pt = m[7];
        d = f.map(pt);
        break W
      }
      let {
        gutters: Y
      } = new h(bae(o), a).renderSplit(g, i, !1);
      let D = Y.flatMap(Fe);d = D.map((I, G) => (D[G + 1] ?? Y.length) - I)
    }
    m[0] = o,
    m[1] = a,
    m[2] = l,
    m[3] = g,
    m[4] = i,
    m[5] = d
  }
  else d = m[5];
  return d
}

function V(o) {
  let a = Dt(o, `
`) + 1;
  return o.endsWith(`
`) ? a - 1 : a
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
  }), u[0] = g, u[1] = a, u[2] = l;
  else l = u[2];
  let d;
  if (u[3] !== i) d = e(n, {
    children: e(qs, {
      children: i
    })
  }), u[3] = i, u[4] = d;
  else d = u[4];
  let m;
  if (u[5] !== l || u[6] !== d) m = r(s, {
    flexDirection: "row",
    children: [l, d]
  }), u[5] = l, u[6] = d, u[7] = m;
  else m = u[7];
  return m
}
export {
  Hvt,
  $w,
  OWr
};
