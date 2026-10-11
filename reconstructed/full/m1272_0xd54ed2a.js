// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Gt
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  Zn
} from "B:/~BUN/root/chunk-1x7a47hz.js";
import {
  pe
} from "B:/~BUN/root/chunk-nf4z9ga7.js";
import {
  wt
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  Y0
} from "B:/~BUN/root/chunk-8hs4bwwk.js";
import {
  Js,
  tL,
  s,
  n,
  Jr,
  Yc,
  Xi
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  Mke
} from "B:/~BUN/root/chunk-6wgkxd9a.js";
import {
  JD
} from "B:/~BUN/root/chunk-5dn8wsxz.js";
import {
  FGt,
  uje,
  rIe,
  fer
} from "B:/~BUN/root/chunk-93kq3f21.js";
import {
  Ba
} from "B:/~BUN/root/chunk-vf07m8qt.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Gp,
  R,
  X,
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  _Bo
} from "B:/~BUN/root/chunk-zhkdb3ds.js";
import {
  S,
  hn
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();
import {
  extname as yt
} from "path";
var jt = 500;

function B(a, d, i, u) {
  let o = _Bo(`${u}\x00${Mke.pluginGrammarGeneration}`, i),
    l = a.get(o);
  if (l !== void 0) return a.delete(o), a.set(o, l), l;
  let c = d.highlight(i, {
    language: u
  });
  if (a.size >= jt) {
    let f = a.keys().next().value;
    if (f !== void 0) a.delete(f)
  }
  return a.set(o, c), c
}

function j(a) {
  let d = new Map;
  if (a.length <= FGt) return {
    text: a,
    markers: d
  };
  return {
    text: a.split(`
`).map((o, l) => {
      let {
        code: c,
        truncatedChars: f
      } = uje(o);
      if (f > 0) return d.set(l, rIe(f)), c;
      return o
    }).join(`
`),
    markers: d
  }
}

function P(a, d) {
  if (d.size === 0) return a;
  return a.split(`
`).map((i, u) => {
    let o = d.get(u);
    return o ? i + pe.dim(o) : i
  }).join(`
`)
}

function q(a) {
  let f = w(16),
    {
      code: d,
      filePath: i,
      dim: u,
      skipColoring: o
    } = a,
    l = u === void 0 ? !1 : u,
    c = o === void 0 ? !1 : o,
    m, h;
  if (f[0] !== d || f[1] !== l || f[2] !== c) {
    h = hn;
    fe: {
      m = Y0(d);
      if (c) {
        let {
          text: k,
          markers: A
        } = j(m);
        const W = e(Jr, {
          children: P(k, A)
        });
        let x;
        if (f[5] !== l || f[6] !== W) x = e(n, {
          dimColor: l,
          children: W
        }), f[5] = l, f[6] = W, f[7] = x;
        else x = f[7];
        h = x;
        break fe
      }
    }
    f[0] = d, f[1] = l, f[2] = c, f[3] = m, f[4] = h
  } else m = f[3], h = f[4];
  if (h !== hn) return h;
  let W;
  if (f[8] !== i) W = yt(i).slice(1), f[8] = i, f[9] = W;
  else W = f[9];
  let b = W,
    x;
  if (f[10] !== m || f[11] !== b) x = e(ot, {
    codeWithSpaces: m,
    language: b
  }), f[10] = m, f[11] = b, f[12] = x;
  else x = f[12];
  let It;
  if (f[13] !== l || f[14] !== x) It = e(n, {
    dimColor: l,
    children: x
  }), f[13] = l, f[14] = x, f[15] = It;
  else It = f[15];
  return It
}

function ot(a) {
  let u = w(7),
    {
      codeWithSpaces: d,
      language: i
    } = a,
    o;
  if (u[0] === S) o = JD(), u[0] = o;
  else o = u[0];
  let l = o,
    {
      highlightedCode: c
    } = tL(),
    f = Mke.pluginGrammarGeneration,
    m;
  if (u[1] !== d || u[2] !== c || u[3] !== i) {
    fe: {
      let {
        text: h,
        markers: k
      } = j(d);
      let A = "markdown";
      if (i) {
        if (l.supportsLanguage(i)) A = i;
        else t(`Language not supported while highlighting code, falling back to markdown: ${i}`)
      };
      try {
        m = P(B(c, l, h, A), k)
      } catch (W) {
        let x = W;
        if (x instanceof Error && x.message.includes("Unknown language")) {
          m = (t(`Language not supported while highlighting code, falling back to markdown: ${x}`), P(B(c, l, h, "markdown"), k));
          break fe
        }
        m = P(h, k)
      }
    }
    u[1] = d,
    u[2] = c,
    u[3] = i,
    u[4] = m
  }
  else m = u[4];
  let b = m,
    W;
  if (u[5] !== b) W = e(Jr, {
    children: b
  }), u[5] = b, u[6] = W;
  else W = u[6];
  return W
}

function he(xe, Ne) {
  return e(n, {
    children: e(Jr, {
      children: xe
    })
  }, Ne)
}
var St = 80,
  d_ = Gp(function(d) {
    let L = w(40),
      {
        code: i,
        filePath: u,
        width: o,
        dim: l,
        startLine: c,
        lineNumbers: f
      } = d,
      m = l === void 0 ? !1 : l,
      h = c === void 0 ? 1 : c,
      k = f === void 0 ? !0 : f,
      A = T(null),
      [W, x] = g(St),
      fe = o || W,
      [b] = Zn(),
      _ = Ba().syntaxHighlightingDisabled ?? !1,
      v;
    if (L[0] !== i || L[1] !== u || L[2] !== _) {
      Qe: {
        if (_) {
          v = null;
          break Qe
        }
        let Tt = fer();
        if (!Tt) {
          v = null;
          break Qe
        }
        v = new Tt(Y0(i), u)
      }
      L[0] = i,
      L[1] = u,
      L[2] = _,
      L[3] = v
    }
    else v = L[3];
    let F = v,
      zt, Ot;
    if (L[4] !== o) zt = () => {
      if (!o && A.current) {
        let {
          width: Xt
        } = Xi(A.current);
        if (Xt > 0) x(Xt - 2)
      }
    }, Ot = [o], L[4] = o, L[5] = zt, L[6] = Ot;
    else zt = L[5], Ot = L[6];
    R(zt, Ot);
    let vt;
    if (L[7] !== i) vt = V(i), L[7] = i, L[8] = vt;
    else vt = L[8];
    let be = String(vt).length + 2,
      mt;
    Ve: {
      if (!k || h === 1) {
        mt = null;
        break Ve
      }
      let Bt = V(i);
      let Y = String(h + Bt - 1).length;
      const D = Math.max(0, Y - String(Bt).length);
      let p;
      if (L[9] !== Y || L[10] !== D) p = {
        digits: Y,
        extraCols: D
      },
      L[9] = Y,
      L[10] = D,
      L[11] = p;
      else p = L[11];mt = p
    }
    let ct = mt,
      ye = Js() || h !== 1,
      D;
    Ze: {
      if (F === null) {
        D = null;
        break Ze
      }
      let I = fe - (ct?.extraCols ?? 0) + (k ? 0 : be);
      if (k && !ye) {
        let p;
        if (L[12] !== F || L[13] !== I || L[14] !== m || L[15] !== b) p = F.render(b, I, m) ?? [], L[12] = F, L[13] = I, L[14] = m, L[15] = b, L[16] = p;
        else p = L[16];
        let G;
        if (L[17] !== p) G = {
          split: !1,
          lines: p
        }, L[17] = p, L[18] = G;
        else G = L[18];
        D = G;
        break Ze
      }
      let p;
      if (L[19] !== F || L[20] !== I || L[21] !== m || L[22] !== b) p = F.renderSplit(b, I, m),
      L[19] = F,
      L[20] = I,
      L[21] = m,
      L[22] = b,
      L[23] = p;
      else p = L[23];
      let {
        gutters: ht,
        contents: ft
      } = p;
      let G;
      if (L[24] !== ft || L[25] !== ht) G = {
        split: !0,
        gutters: ht,
        contents: ft
      },
      L[24] = ft,
      L[25] = ht,
      L[26] = G;
      else G = L[26];D = G
    }
    let y = D,
      p;
    tn: {
      if (ct === null || y === null || !y.split) {
        p = null;
        break tn
      }
      let {
        digits: Z
      } = ct;
      let G;
      if (L[27] !== Z || L[28] !== y.gutters || L[29] !== h) {
        let pt = h;
        G = y.gutters.map((ke) => {
          if (wt(ke).trim() === "") {
            return " ".repeat(Z + 2)
          }
          let We = pt;
          return pt = pt + 1, ` ${String(We).padStart(Z)} `
        });
        L[27] = Z, L[28] = y.gutters, L[29] = h, L[30] = G
      } else G = L[30];p = G
    }
    let bt = p,
      G;
    if (L[31] !== i || L[32] !== m || L[33] !== bt || L[34] !== u || L[35] !== k || L[36] !== y || L[37] !== h || L[38] !== _) G = e(s, {
      ref: A,
      children: y ? e(s, {
        flexDirection: "column",
        children: y.split ? y.contents.map((Ut, tt) => !k ? e(n, {
          children: e(Jr, {
            children: Ut
          })
        }, tt) : e(gt, {
          gutter: y.gutters[tt],
          content: Ut,
          displayGutter: bt?.[tt]
        }, tt)) : y.lines.map(he)
      }) : r(s, {
        flexDirection: "column",
        children: [k && h !== 1 && r(n, {
          dimColor: !0,
          children: ["\u2026 from line ", h]
        }), e(q, {
          code: i,
          filePath: u,
          dim: m,
          skipColoring: _
        })]
      })
    }), L[31] = i, L[32] = m, L[33] = bt, L[34] = u, L[35] = k, L[36] = y, L[37] = h, L[38] = _, L[39] = G;
    else G = L[39];
    return G
  });

function V(a) {
  let d = Gt(a, `
`) + 1;
  return a.endsWith(`
`) ? d - 1 : d
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
  }), o[0] = u, o[1] = d, o[2] = l;
  else l = o[2];
  let c;
  if (o[3] !== i) c = e(n, {
    children: e(Jr, {
      children: i
    })
  }), o[3] = i, o[4] = c;
  else c = o[4];
  let f;
  if (o[5] !== l || o[6] !== c) f = r(s, {
    flexDirection: "row",
    children: [l, c]
  }), o[5] = l, o[6] = c, o[7] = f;
  else f = o[7];
  return f
}
export {
  d_
};
