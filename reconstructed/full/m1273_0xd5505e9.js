// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  pe
} from "B:/~BUN/root/chunk-nf4z9ga7.js";
import {
  Js,
  tL,
  s,
  n,
  Yc,
  Wbe
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  Zn,
  hVt
} from "B:/~BUN/root/chunk-1x7a47hz.js";
import {
  ie
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  Jm
} from "B:/~BUN/root/chunk-trcn2d68.js";
import {
  Xkr
} from "B:/~BUN/root/chunk-6wgkxd9a.js";
import {
  uje,
  rIe,
  x8r
} from "B:/~BUN/root/chunk-93kq3f21.js";
import {
  Ba
} from "B:/~BUN/root/chunk-vf07m8qt.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  jqe
} from "B:/~BUN/root/chunk-efz11ra0.js";
import {
  Gp,
  X,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  Ede
} from "B:/~BUN/root/chunk-z1enakv9.js";
N();
N();

function he(g, x) {
  return e(s, {
    children: g
  }, x)
}
var oe = 0.4;

function _(c) {
  let d = w(10),
    {
      patch: i,
      dim: o,
      width: t
    } = c,
    [f] = Zn(),
    u;
  if (d[0] !== o || d[1] !== i.lines || d[2] !== i.oldStart || d[3] !== f || d[4] !== t) u = Y(i.lines, i.oldStart, t, o, f), d[0] = o, d[1] = i.lines, d[2] = i.oldStart, d[3] = f, d[4] = t, d[5] = u;
  else u = d[5];
  let a = u,
    h;
  if (d[6] !== a) h = a.map(he), d[6] = a, d[7] = h;
  else h = d[7];
  let b;
  if (d[8] !== h) b = e(s, {
    flexDirection: "column",
    flexGrow: 1,
    children: h
  }), d[8] = h, d[9] = b;
  else b = d[9];
  return b
}

function fe(c) {
  return c.map((i) => {
    let o = i.startsWith("+") ? "add" : i.startsWith("-") ? "remove" : "nochange",
      {
        code: t,
        truncatedChars: f
      } = uje(i, 1);
    return {
      code: t,
      i: 0,
      type: o,
      originalCode: t,
      truncatedChars: f
    }
  })
}

function se(c) {
  let i = [],
    o = 0;
  while (o < c.length) {
    let t = c[o];
    if (!t) {
      o++;
      continue
    }
    if (t.type === "remove") {
      let f = [t],
        d = o + 1;
      while (d < c.length && c[d]?.type === "remove") {
        let a = c[d];
        if (a) f.push(a);
        d++
      }
      let u = [];
      while (d < c.length && c[d]?.type === "add") {
        let a = c[d];
        if (a) u.push(a);
        d++
      }
      if (f.length > 0 && u.length > 0) {
        let a = Math.min(f.length, u.length);
        for (let h = 0; h < a; h++) {
          let b = f[h],
            g = u[h];
          if (b && g) b.wordDiff = !0, g.wordDiff = !0, b.matchedLine = g, g.matchedLine = b
        }
        i.push(...f.filter(Boolean)), i.push(...u.filter(Boolean)), o = d
      } else i.push(t), o++
    } else i.push(t), o++
  }
  return i
}

function ae(c, i) {
  return Xkr(c, i, {
    ignoreCase: !1
  })
}

function le(c, i, o, t, f) {
  let {
    type: d,
    i: u,
    wordDiff: a,
    matchedLine: h,
    originalCode: b
  } = c;
  if (!a || !h) return null;
  let g = d === "remove" ? b : h.originalCode,
    x = d === "remove" ? h.originalCode : b,
    L = ae(g, x),
    P = g.length + x.length;
  if (L.filter((m) => m.added || m.removed).reduce((m, M) => m + M.value.length, 0) / P > oe || t) return null;
  let S = d === "add" ? "+" : "-",
    D = S.length,
    C = Math.max(1, i - o - 1 - D),
    l = [],
    p = [],
    k = 0;
  if (L.forEach((m, M) => {
      let v = !1,
        E;
      if (d === "add") {
        if (m.added) v = !0, E = "diffAddedWord";
        else if (!m.removed) v = !0
      } else if (d === "remove") {
        if (m.removed) v = !0, E = "diffRemovedWord";
        else if (!m.added) v = !0
      }
      if (!v) return;
      Jm(m.value, C, "wrap").split(`
`).forEach((H, O) => {
        if (!H) return;
        if (O > 0 || k + ie(H) > C) {
          if (p.length > 0) l.push({
            content: [...p],
            contentWidth: k
          }), p = [], k = 0
        }
        p.push(e(n, {
          backgroundColor: E,
          children: H
        }, `part-${M}-${O}`)), k += ie(H)
      })
    }), p.length > 0) l.push({
    content: p,
    contentWidth: k
  });
  let T = c.truncatedChars > 0 ? rIe(c.truncatedChars) : "",
    W = -1;
  if (T && l.length > 0) {
    if (l.at(-1).contentWidth + ie(T) > C) l.push({
      content: [],
      contentWidth: 0
    });
    W = l.length - 1
  }
  return l.map(({
    content: m,
    contentWidth: M
  }, v) => {
    let E = `${d}-${u}-${v}`,
      A = d === "add" ? t ? "diffAddedDimmed" : "diffAdded" : t ? "diffRemovedDimmed" : "diffRemoved",
      B = v === 0 ? u : void 0,
      H = (B !== void 0 ? B.toString().padStart(o) : " ".repeat(o)) + " ",
      O = v === W ? T : "",
      j = H.length + D + M + ie(O),
      ne = Math.max(0, i - j);
    return r(s, {
      flexDirection: "row",
      children: [e(Yc, {
        fromLeftEdge: !0,
        children: r(n, {
          color: f ? "text" : void 0,
          backgroundColor: A,
          dimColor: t,
          children: [H, S]
        })
      }), e(n, {
        color: f ? "text" : void 0,
        backgroundColor: A,
        dimColor: t,
        children: m
      }), O ? e(n, {
        dimColor: !0,
        children: O
      }) : null, e(n, {
        color: f ? "text" : void 0,
        backgroundColor: A,
        dimColor: t,
        children: " ".repeat(ne)
      })]
    }, E)
  })
}

function Y(c, i, o, t, f) {
  let d = Math.max(1, Math.floor(o)),
    u = fe(c),
    a = se(u),
    h = ue(a, i),
    b = Math.max(...h.map(({
      i: x
    }) => x), 0),
    g = Math.max(b.toString().length + 1, 0);
  return h.flatMap((x) => {
    let {
      type: L,
      code: P,
      i: y,
      wordDiff: R,
      matchedLine: S
    } = x;
    if (R && S) {
      let W = le(x, d, g, t, f);
      if (W !== null) return W
    }
    let D = 2,
      C = Math.max(1, d - g - 1 - D),
      p = Jm(P, C, "wrap").split(`
`),
      k = x.truncatedChars > 0 ? rIe(x.truncatedChars) : "",
      T = -1;
    if (k && p.length > 0) {
      let W = p.at(-1);
      if (ie(W) + ie(k) > C) p.push("");
      T = p.length - 1
    }
    return p.map((W, m) => {
      let M = `${L}-${y}-${m}`,
        v = m === 0 ? y : void 0,
        E = (v !== void 0 ? v.toString().padStart(g) : " ".repeat(g)) + " ",
        A = L === "add" ? "+" : L === "remove" ? "-" : " ",
        B = m === T ? k : "",
        H = E.length + 1 + ie(W) + ie(B),
        O = Math.max(0, d - H),
        j = L === "add" ? t ? "diffAddedDimmed" : "diffAdded" : L === "remove" ? t ? "diffRemovedDimmed" : "diffRemoved" : void 0;
      return r(s, {
        flexDirection: "row",
        children: [e(Yc, {
          fromLeftEdge: !0,
          children: r(n, {
            color: f ? "text" : void 0,
            backgroundColor: j,
            dimColor: t || L === "nochange",
            children: [E, A]
          })
        }), e(n, {
          color: f ? "text" : void 0,
          backgroundColor: j,
          dimColor: t,
          children: W
        }), B ? e(n, {
          dimColor: !0,
          children: B
        }) : null, e(n, {
          color: f ? "text" : void 0,
          backgroundColor: j,
          dimColor: t,
          children: " ".repeat(O)
        })]
      }, M)
    })
  })
}

function ue(c, i) {
  let o = i,
    t = [],
    f = [...c];
  while (f.length > 0) {
    let d = f.shift(),
      {
        code: u,
        type: a,
        originalCode: h,
        truncatedChars: b,
        wordDiff: g,
        matchedLine: x
      } = d,
      L = {
        code: u,
        type: a,
        i: o,
        originalCode: h,
        truncatedChars: b,
        wordDiff: g,
        matchedLine: x
      };
    switch (a) {
      case "nochange":
        o++, t.push(L);
        break;
      case "add":
        o++, t.push(L);
        break;
      case "remove": {
        t.push(L);
        let P = 0;
        while (f[0]?.type === "remove") {
          o++;
          let y = f.shift(),
            {
              code: R,
              type: S,
              originalCode: D,
              truncatedChars: C,
              wordDiff: l,
              matchedLine: p
            } = y,
            k = {
              code: R,
              type: S,
              i: o,
              originalCode: D,
              truncatedChars: C,
              wordDiff: l,
              matchedLine: p
            };
          t.push(k), P++
        }
        o -= P;
        break
      }
    }
  }
  return t
}
var te = ["diffAdded", "diffRemoved", "diffAddedDimmed", "diffRemovedDimmed", "diffAddedWord", "diffRemovedWord"];

function J(c) {
  if (!c) return;
  let i;
  for (let o of te) {
    let t = c[o];
    if (t !== void 0) i ??= {}, i[o] = t
  }
  return i
}

function Q(c, i, o, t, f, d, u, a, h, b) {
  let g = x8r();
  if (!g) return null;
  let x = b ? jqe(i) : 0,
    L = x > 0 && x < a ? x : 0,
    P = u ? te.map((l) => u[l] ?? "").join(",") : "",
    y = `${d}|${P}|${a}|${h?1:0}|${L}|${pe.level}|${o??""}|${t}`,
    R = c.get(i),
    S = R?.get(y);
  if (S) return S;
  let D = new g(i, o, t, f),
    C;
  if (L > 0) {
    let {
      gutters: l,
      contents: p
    } = D.renderSplit(d, a, h, u);
    C = {
      split: !0,
      gutterWidth: L,
      gutters: l,
      contents: p
    }
  } else {
    let l = D.render(d, a, h, u);
    if (l === null) return null;
    C = {
      split: !1,
      lines: l
    }
  }
  if (!R) R = new Map, c.set(i, R);
  if (R.size >= 4) R.clear();
  return R.set(y, C), C
}
var X2 = Gp(function(i) {
  let C = w(16),
    {
      patch: o,
      dim: t,
      filePath: f,
      firstLine: d,
      fileContent: u,
      width: a,
      skipHighlighting: h
    } = i,
    b = h === void 0 ? !1 : h,
    [g] = Zn(),
    x = J(hVt()),
    P = Ba().syntaxHighlightingDisabled ?? !1,
    y = Math.max(1, Math.floor(a)),
    R = Js(),
    {
      structuredDiff: S
    } = tL(),
    D = b || P ? null : Q(S, o, d, f, u ?? null, g, x, y, t, R);
  if (!D) {
    let l;
    if (C[0] !== t || C[1] !== o || C[2] !== a) l = e(s, {
      children: e(_, {
        patch: o,
        dim: t,
        width: a
      })
    }), C[0] = t, C[1] = o, C[2] = a, C[3] = l;
    else l = C[3];
    return l
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
    }), C[4] = p, C[5] = k, C[6] = l;
    else l = C[6];
    const W = y - p;
    let m;
    if (C[7] !== T || C[8] !== W) m = e(Wbe, {
      lines: T,
      width: W
    }), C[7] = T, C[8] = W, C[9] = m;
    else m = C[9];
    let M;
    if (C[10] !== l || C[11] !== m) M = r(s, {
      flexDirection: "row",
      children: [l, m]
    }), C[10] = l, C[11] = m, C[12] = M;
    else M = C[12];
    return M
  }
  let l;
  if (C[13] !== D.lines || C[14] !== y) l = e(s, {
    children: e(Wbe, {
      lines: D.lines,
      width: y
    })
  }), C[13] = D.lines, C[14] = y, C[15] = l;
  else l = C[15];
  return l
});

function Lj({
  hunks: c,
  dim: i,
  width: o,
  filePath: t,
  firstLine: f,
  fileContent: d
}) {
  return Ede(c.map((u, a) => e(s, {
    flexDirection: "column",
    children: e(X2, {
      patch: u,
      dim: i,
      width: o,
      filePath: t,
      firstLine: f,
      fileContent: d
    })
  }, `hunk-${a}`)), (u) => e(Yc, {
    fromLeftEdge: !0,
    children: e(n, {
      dimColor: !0,
      children: "..."
    })
  }, `ellipsis-${u}`))
}
export {
  X2,
  Lj
};
