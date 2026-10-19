// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  pn,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  $t
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  br
} from "B:/~BUN/root/chunk-g5gf7tps.js";
import {
  he,
  PMe
} from "B:/~BUN/root/chunk-4qqgabd5.js";
import {
  m$
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  mi,
  cz,
  s,
  n,
  Go,
  Iu,
  Ws
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  Gxe
} from "B:/~BUN/root/chunk-5vcgesja.js";
import {
  m1
} from "B:/~BUN/root/chunk-c050gts0.js";
import {
  xSn,
  Qtt,
  yVe,
  Tqr
} from "B:/~BUN/root/chunk-mq92kyt9.js";
import {
  hd
} from "B:/~BUN/root/chunk-q6bapw2s.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  ng,
  P,
  Z,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  rJn
} from "B:/~BUN/root/chunk-qvy7wp4j.js";
import {
  S,
  yn
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
import {
  extname as bt
} from "path";
var jt = 500;

function Jtt(l, a, i, u) {
  let d = `${u}\x00${Gxe.pluginGrammarGeneration}\x00${PMe()}`,
    o = rJn(d, i),
    m = l.get(o);
  if (m !== void 0) {
    if (l.delete(o), m.code === i && m.variant === d) return l.set(o, m), m.highlighted
  }
  let c = a.highlight(i, {
    language: u
  });
  if (l.size >= jt) {
    let g = l.keys().next().value;
    if (g !== void 0) l.delete(g)
  }
  return l.set(o, {
    variant: d,
    code: i,
    highlighted: c
  }), c
}

function X(l) {
  let a = new Map;
  if (l.length <= xSn) return {
    text: l,
    markers: a
  };
  return {
    text: l.split(`
`).map((d, o) => {
      let {
        code: m,
        truncatedChars: c
      } = Qtt(d);
      if (c > 0) return a.set(o, yVe(c)), m;
      return d
    }).join(`
`),
    markers: a
  }
}

function L(l, a) {
  if (a.size === 0) return l;
  return l.split(`
`).map((i, u) => {
    let d = a.get(u);
    return d ? i + he.dim(d) : i
  }).join(`
`)
}

function j(l) {
  let c = w(16),
    {
      code: a,
      filePath: i,
      dim: u,
      skipColoring: d
    } = l,
    o = u === void 0 ? !1 : u,
    m = d === void 0 ? !1 : d,
    g, h;
  if (c[0] !== a || c[1] !== o || c[2] !== m) {
    h = yn;
    ce: {
      g = m$(a);
      if (m) {
        let {
          text: k,
          markers: F
        } = X(g);
        const x = e(Go, {
          children: L(k, F)
        });
        let C;
        if (c[5] !== o || c[6] !== x) C = e(n, {
          dimColor: o,
          children: x
        }), c[5] = o, c[6] = x, c[7] = C;
        else C = c[7];
        h = C;
        break ce
      }
    }
    c[0] = a, c[1] = o, c[2] = m, c[3] = g, c[4] = h
  } else g = c[3], h = c[4];
  if (h !== yn) return h;
  let x;
  if (c[8] !== i) x = bt(i).slice(1), c[8] = i, c[9] = x;
  else x = c[9];
  let p = x,
    C;
  if (c[10] !== g || c[11] !== p) C = e(nt, {
    codeWithSpaces: g,
    language: p
  }), c[10] = g, c[11] = p, c[12] = C;
  else C = c[12];
  let At;
  if (c[13] !== o || c[14] !== C) At = e(n, {
    dimColor: o,
    children: C
  }), c[13] = o, c[14] = C, c[15] = At;
  else At = c[15];
  return At
}

function nt(l) {
  let u = w(7),
    {
      codeWithSpaces: a,
      language: i
    } = l,
    d;
  if (u[0] === S) d = m1(), u[0] = d;
  else d = u[0];
  let o = d,
    {
      highlightedCode: m
    } = cz(),
    c = Gxe.pluginGrammarGeneration,
    g;
  if (u[1] !== a || u[2] !== m || u[3] !== i) {
    ce: {
      let {
        text: h,
        markers: k
      } = X(a);
      let F = "markdown";
      if (i) {
        if (o.supportsLanguage(i)) F = i;
        else t(`Language not supported while highlighting code, falling back to markdown: ${i}`)
      };
      try {
        g = L(Jtt(m, o, h, F), k)
      } catch (x) {
        let C = x;
        if (C instanceof Error && C.message.includes("Unknown language")) {
          g = (t(`Language not supported while highlighting code, falling back to markdown: ${C}`), L(Jtt(m, o, h, "markdown"), k));
          break ce
        }
        g = L(h, k)
      }
    }
    u[1] = a,
    u[2] = m,
    u[3] = i,
    u[4] = g
  }
  else g = u[4];
  let p = g,
    x;
  if (u[5] !== p) x = e(Go, {
    children: p
  }), u[5] = p, u[6] = x;
  else x = u[6];
  return x
}

function me(ke, xe) {
  return e(n, {
    children: e(Go, {
      children: ke
    })
  }, xe)
}
var Wt = 80,
  Uw = ng(function(a) {
    let G = w(40),
      {
        code: i,
        filePath: u,
        width: d,
        dim: o,
        startLine: m,
        lineNumbers: c
      } = a,
      g = o === void 0 ? !1 : o,
      h = m === void 0 ? 1 : m,
      k = c === void 0 ? !0 : c,
      F = A(null),
      [x, C] = y(Wt),
      ce = d || x,
      [p] = br(),
      _ = hd().syntaxHighlightingDisabled ?? !1,
      z;
    if (G[0] !== i || G[1] !== u || G[2] !== _) {
      Ye: {
        if (_) {
          z = null;
          break Ye
        }
        let _t = Tqr();
        if (!_t) {
          z = null;
          break Ye
        }
        z = new _t(m$(i), u)
      }
      G[0] = i,
      G[1] = u,
      G[2] = _,
      G[3] = z
    }
    else z = G[3];
    let D = z,
      vt, It;
    if (G[4] !== d) vt = () => {
      if (!d && F.current) {
        let {
          width: Tt
        } = Ws(F.current);
        if (Tt > 0) C(Tt - 2)
      }
    }, It = [d], G[4] = d, G[5] = vt, G[6] = It;
    else vt = G[5], It = G[6];
    P(vt, It);
    let zt;
    if (G[7] !== i) zt = K(i), G[7] = i, G[8] = zt;
    else zt = G[8];
    let fe = String(zt).length + 2,
      ut;
    Ze: {
      if (!k || h === 1) {
        ut = null;
        break Ze
      }
      let Ot = K(i);
      let Q = String(h + Ot - 1).length;
      const E = Math.max(0, Q - String(Ot).length);
      let f;
      if (G[9] !== Q || G[10] !== E) f = {
        digits: Q,
        extraCols: E
      },
      G[9] = Q,
      G[10] = E,
      G[11] = f;
      else f = G[11];ut = f
    }
    let mt = ut,
      pe = mi() || h !== 1,
      E;
    ei: {
      if (D === null) {
        E = null;
        break ei
      }
      let v = ce - (mt?.extraCols ?? 0) + (k ? 0 : fe);
      if (k && !pe) {
        let f;
        if (G[12] !== D || G[13] !== v || G[14] !== g || G[15] !== p) f = D.render(p, v, g) ?? [], G[12] = D, G[13] = v, G[14] = g, G[15] = p, G[16] = f;
        else f = G[16];
        let W;
        if (G[17] !== f) W = {
          split: !1,
          lines: f
        }, G[17] = f, G[18] = W;
        else W = G[18];
        E = W;
        break ei
      }
      let f;
      if (G[19] !== D || G[20] !== v || G[21] !== g || G[22] !== p) f = D.renderSplit(p, v, g),
      G[19] = D,
      G[20] = v,
      G[21] = g,
      G[22] = p,
      G[23] = f;
      else f = G[23];
      let {
        gutters: ht,
        contents: ct
      } = f;
      let W;
      if (G[24] !== ct || G[25] !== ht) W = {
        split: !0,
        gutters: ht,
        contents: ct
      },
      G[24] = ct,
      G[25] = ht,
      G[26] = W;
      else W = G[26];E = W
    }
    let b = E,
      f;
    ii: {
      if (mt === null || b === null || !b.split) {
        f = null;
        break ii
      }
      let {
        digits: V
      } = mt;
      let W;
      if (G[27] !== V || G[28] !== b.gutters || G[29] !== h) {
        let ft = h;
        W = b.gutters.map((be) => {
          if (pn(be).trim() === "") {
            return " ".repeat(V + 2)
          }
          let ye = ft;
          return ft = ft + 1, ` ${String(ye).padStart(V)} `
        });
        G[27] = V, G[28] = b.gutters, G[29] = h, G[30] = W
      } else W = G[30];f = W
    }
    let pt = f,
      W;
    if (G[31] !== i || G[32] !== g || G[33] !== pt || G[34] !== u || G[35] !== k || G[36] !== b || G[37] !== h || G[38] !== _) W = e(s, {
      ref: F,
      children: b ? e(s, {
        flexDirection: "column",
        children: b.split ? b.contents.map((Xt, Y) => !k ? e(n, {
          children: e(Go, {
            children: Xt
          })
        }, Y) : e(gt, {
          gutter: b.gutters[Y],
          content: Xt,
          displayGutter: pt?.[Y]
        }, Y)) : b.lines.map(me)
      }) : r(s, {
        flexDirection: "column",
        children: [k && h !== 1 && r(n, {
          dimColor: !0,
          children: ["\u2026 from line ", h]
        }), e(j, {
          code: i,
          filePath: u,
          dim: g,
          skipColoring: _
        })]
      })
    }), G[31] = i, G[32] = g, G[33] = pt, G[34] = u, G[35] = k, G[36] = b, G[37] = h, G[38] = _, G[39] = W;
    else W = G[39];
    return W
  });

function K(l) {
  let a = $t(l, `
`) + 1;
  return l.endsWith(`
`) ? a - 1 : a
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
  }), d[0] = u, d[1] = a, d[2] = o;
  else o = d[2];
  let m;
  if (d[3] !== i) m = e(n, {
    children: e(Go, {
      children: i
    })
  }), d[3] = i, d[4] = m;
  else m = d[4];
  let c;
  if (d[5] !== o || d[6] !== m) c = r(s, {
    flexDirection: "row",
    children: [o, m]
  }), d[5] = o, d[6] = m, d[7] = c;
  else c = d[7];
  return c
}
export {
  Jtt,
  Uw
};
