// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  As
} from "B:/~BUN/root/chunk-q8sf8fhe.js";
import {
  Dt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Jfe
} from "B:/~BUN/root/chunk-x24hm796.js";
import {
  ot,
  s,
  n,
  qs,
  che,
  Ia,
  Ss
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Zc,
  Dm,
  Kj
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  Wu
} from "B:/~BUN/root/chunk-emd6eb45.js";
import {
  va
} from "B:/~BUN/root/chunk-crjx6seq.js";
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  rw
} from "B:/~BUN/root/chunk-s3r3s87f.js";
import {
  mv
} from "B:/~BUN/root/chunk-h37egt7q.js";
import {
  JR,
  est,
  nI,
  Zf
} from "B:/~BUN/root/chunk-cpzw87wr.js";
import {
  n_
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  Dmn,
  $7,
  M0,
  hc,
  U7
} from "B:/~BUN/root/chunk-md70d2gd.js";
import {
  _Gt
} from "B:/~BUN/root/chunk-merv3av7.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  z_,
  Jt,
  hy,
  ve,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
j();
var Ze = 32,
  oe = 2,
  Z = 2,
  Pe = 2,
  we = "wrap-trim",
  De = !0,
  xe = Jt(void 0),
  Ee = Jt(!1),
  pe = Jt(!1);

function en({
  children: o,
  ...t
}) {
  let d = As(Re()),
    a = A(null),
    [u] = y(() => new Set),
    l = Ia(() => {
      let [i] = u;
      return i && Ss(i).width || a.current && Ss(a.current).width || d.columns
    }),
    P = mv(),
    [k] = y(() => new WeakMap),
    p = z_.toArray(o),
    f = p.filter(Ge),
    b = Math.min(Math.max(0, ...f.map((i) => ce(U7(i.props.label)))), Math.max(Ze, l - Z - oe - Math.max(_Gt, ...f.map((i) => ze(i.props.children))))),
    m = l - Z - b - oe < _Gt,
    w = f.filter((i) => !C(i.props.children, J)),
    v = $7(t.isDisabled),
    x = m ? l - Z - Pe : l - Z - b - oe,
    [M, h, E] = Zf(void 0),
    [O, F] = y(void 0),
    I = A(null),
    {
      focusManager: X
    } = ve(Dm),
    W = rw({
      isActive: !0,
      columns: x,
      backspaceExitsOnEmpty: !1,
      onExit: () => L(!0, !0),
      onCancel: () => L(!1),
      onExitUp: () => L(!0, !0),
      onExitDown: () => L(!0, !0)
    });

  function L(i, D = !1) {
    let c = E();
    if (c === void 0) return !0;
    let T = f.find((N) => N.key === c.key)?.props.children,
      g = W.queryRef.current,
      R = i && g !== c.from && C(T, G) ? T.props.validate?.(g) ?? null : null;
    if (R !== null && D) return F({
      draft: g,
      reason: R
    }), !1;
    if (h(void 0), F(void 0), I.current && X?.activeElement === I.current) X.blur();
    if (!i || R !== null || !C(T, G) || T.props.disabled) return !0;
    if (g !== c.from) Te(k, T.props, g), T.props.onChange(g);
    return !0
  }

  function q(i) {
    let D = i?.props.children;
    if (!C(D, G) || D.props.disabled || typeof i?.key !== "string") return Tn(D, k);
    let c = {
      key: i.key,
      from: Mn(D.props, k)
    };
    return {
      accept: () => {
        L(!0), W.setQuery(c.from), h(c)
      }
    }
  }
  let B = p.map((i, D) => {
    if (!Ge(i)) return hy(i) && i.type === hc.Heading ? i : e(hc.Heading, {
      children: i
    }, hy(i) ? i.key : D);
    let {
      children: c
    } = i.props, T = U7(i.props.label), g = M?.key === i.key && O?.draft === W.query ? O.reason : void 0, R = g ?? U7(i.props.description), N = R ? Dt(Zc(R, Math.max(1, l - Z), we), `
`) + 1 : 0, V = !(!v || t.onDisabledRowClick !== void 0) || M?.key === i.key ? void 0 : q(i).accept, Q = C(c, re) || C(c, ie) || C(c, se) ? ze(c) : 0, U = e(Qe, {
      label: T,
      description: R,
      ink: i.props.ink,
      refused: g !== void 0,
      onClick: V && ((Y) => {
        if (P(Y) || $7(t.isDisabled) && t.onDisabledRowClick === void 0) return;
        V()
      }),
      labelColumn: b,
      stacked: m,
      targetWidth: Math.max(0, Math.min(Q, x)),
      rowLines: C(c, J) ? void 0 : u,
      children: e(xe, {
        value: M?.key === i.key && !v && C(c, G) && !c.props.disabled ? {
          editor: W,
          room: x,
          input: I,
          end: L
        } : void 0,
        children: c
      })
    });
    return C(c, J) ? e(hc.Heading, {
      children: U
    }, i.key) : e(hc.Item, {
      declareCursor: M?.key !== i.key,
      lines: (m ? 2 : 1) + N,
      children: U
    }, i.key)
  });
  if (w.length === 0) return r(s, {
    ref: a,
    flexDirection: "column",
    children: [B.length === 0 && t.emptyMessage && e(n, {
      dimColor: !0,
      children: t.emptyMessage
    }), B.map((i, D) => e(nI, {
      isFocused: !1,
      styled: !1,
      children: i
    }, hy(i) ? i.key : D))]
  });
  let _ = e(hc, {
    ...t,
    rowClick: "move",
    onFocus: (i) => {
      if (w[i]?.key !== E()?.key) L(!0);
      t.onFocus?.(i)
    },
    onSelect: (i) => {
      if (E() !== void 0) {
        L(!0, !0);
        return
      }
      q(w[i]).accept?.()
    },
    onRowKeyDown: (i, D) => {
      if (E() !== void 0) {
        W.handleKeyDown(i);
        return
      }
      if (i.ctrl || i.meta) return;
      let c = q(w[D]),
        T = i.key === " " ? c.accept : i.key === "left" ? c.previous : i.key === "right" ? c.next : void 0;
      if (T === void 0) return;
      i.preventDefault(), T()
    },
    children: B
  });
  return e(s, {
    ref: a,
    flexDirection: "column",
    children: e(Ee, {
      value: v,
      children: _
    })
  })
}

function Qe(o) {
  let h = S(54),
    {
      label: t,
      description: d,
      ink: a,
      refused: u,
      onClick: l,
      labelColumn: P,
      stacked: k,
      targetWidth: p,
      rowLines: f,
      children: b
    } = o,
    m = M0(),
    w = ot(),
    [v, x] = est(l !== void 0),
    M = ve(Dmn);
  if (w) {
    let E;
    if (h[0] !== t) E = r(n, {
      children: [t, ","]
    }), h[0] = t, h[1] = E;
    else E = h[1];
    let O;
    if (h[2] !== b || h[3] !== E) O = r(s, {
      children: [E, b]
    }), h[2] = b, h[3] = E, h[4] = O;
    else O = h[4];
    let F;
    if (h[5] !== d) F = d && e(n, {
      children: d
    }), h[5] = d, h[6] = F;
    else F = h[6];
    let I;
    if (h[7] !== O || h[8] !== F) I = r(s, {
      flexDirection: "column",
      children: [O, F]
    }), h[7] = O, h[8] = F, h[9] = I;
    else I = h[9];
    return I
  }
  let E;
  if (h[10] !== f) E = (X) => {
    let W = X?.parentNode;
    if (!f || !W) {
      return
    }
    return f.add(W), () => {
      f.delete(W)
    }
  }, h[10] = f, h[11] = E;
  else E = h[11];
  const O = k ? "column" : "row",
    F = k ? void 0 : P,
    I = k ? 0 : oe,
    L = a === "locked",
    q = m && a !== "locked" ? "suggestion" : void 0;
  let B;
  if (h[12] !== t || h[13] !== L || h[14] !== q) B = e(n, {
    dimColor: L,
    color: q,
    wrap: "truncate-end",
    children: t
  }), h[12] = t, h[13] = L, h[14] = q, h[15] = B;
  else B = h[15];
  let _;
  if (h[16] !== F || h[17] !== I || h[18] !== B) _ = e(s, {
    width: F,
    marginRight: I,
    flexShrink: 0,
    children: B
  }), h[16] = F, h[17] = I, h[18] = B, h[19] = _;
  else _ = h[19];
  const i = k ? Pe : 0,
    D = v ? JR : void 0;
  let c;
  if (h[20] !== M || h[21] !== l) c = l && ((T) => {
    if (!M(T)) l(T)
  }), h[20] = M, h[21] = l, h[22] = c;
  else c = h[22];
  let g;
  if (h[23] !== l || h[24] !== x) g = l && (() => x(!0)), h[23] = l, h[24] = x, h[25] = g;
  else g = h[25];
  let R;
  if (h[26] !== l || h[27] !== x) R = l && (() => x(!1)), h[26] = l, h[27] = x, h[28] = R;
  else R = h[28];
  const N = a !== void 0;
  let K;
  if (h[29] !== b || h[30] !== N) K = e(pe, {
    value: N,
    children: b
  }), h[29] = b, h[30] = N, h[31] = K;
  else K = h[31];
  let V;
  if (h[32] !== D || h[33] !== c || h[34] !== g || h[35] !== R || h[36] !== K || h[37] !== p) V = e(s, {
    minWidth: p,
    backgroundColor: D,
    onClick: c,
    onMouseEnter: g,
    onMouseLeave: R,
    children: K
  }), h[32] = D, h[33] = c, h[34] = g, h[35] = R, h[36] = K, h[37] = p, h[38] = V;
  else V = h[38];
  let Q;
  if (h[39] !== V || h[40] !== i) Q = e(s, {
    paddingLeft: i,
    children: V
  }), h[39] = V, h[40] = i, h[41] = Q;
  else Q = h[41];
  let U;
  if (h[42] !== Q || h[43] !== O || h[44] !== _) U = r(s, {
    flexDirection: O,
    children: [_, Q]
  }), h[42] = Q, h[43] = O, h[44] = _, h[45] = U;
  else U = h[45];
  let Y;
  if (h[46] !== d || h[47] !== u || h[48] !== f) Y = d && e(n, {
    dimColor: !u,
    color: u ? "error" : void 0,
    wrap: f === void 0 ? "truncate-end" : we,
    children: d
  }), h[46] = d, h[47] = u, h[48] = f, h[49] = Y;
  else Y = h[49];
  let Je;
  if (h[50] !== E || h[51] !== U || h[52] !== Y) Je = r(s, {
    ref: E,
    flexDirection: "column",
    children: [U, Y]
  }), h[50] = E, h[51] = U, h[52] = Y, h[53] = Je;
  else Je = h[53];
  return Je
}

function H(o) {
  let m = S(15),
    {
      spoken: t,
      disabled: d,
      before: a,
      after: u,
      children: l
    } = o,
    P = d === void 0 ? !1 : d,
    k = M0(),
    p = ve(pe);
  if (ot()) {
    const b = P && ", unavailable";
    let w;
    if (m[0] !== t || m[1] !== b) w = r(n, {
      children: [t, b]
    }), m[0] = t, m[1] = b, m[2] = w;
    else w = m[2];
    return w
  }
  const b = P || p;
  let w;
  if (m[3] !== a) w = a && e(n, {
    dimColor: !0,
    children: a
  }), m[3] = a, m[4] = w;
  else w = m[4];
  const v = k && !P && !p ? "suggestion" : void 0;
  let x;
  if (m[5] !== l || m[6] !== v) x = e(n, {
    color: v,
    children: l
  }), m[5] = l, m[6] = v, m[7] = x;
  else x = m[7];
  let M;
  if (m[8] !== u) M = u && e(n, {
    dimColor: !0,
    children: u
  }), m[8] = u, m[9] = M;
  else M = m[9];
  let h;
  if (m[10] !== b || m[11] !== w || m[12] !== x || m[13] !== M) h = r(n, {
    dimColor: b,
    wrap: "truncate-end",
    children: [w, x, M]
  }), m[10] = b, m[11] = w, m[12] = x, m[13] = M, m[14] = h;
  else h = m[14];
  return h
}

function Se(o) {
  let d = S(2),
    {
      children: t
    } = o,
    a;
  if (d[0] !== t) a = e(ne, {
    children: t
  }), d[0] = t, d[1] = a;
  else a = d[1];
  return a
}

function re(o) {
  let l = S(4),
    {
      value: t,
      disabled: d
    } = o;
  const a = String(t),
    u = String(t);
  let P;
  if (l[0] !== d || l[1] !== a || l[2] !== u) P = e(H, {
    spoken: a,
    disabled: d,
    children: u
  }), l[0] = d, l[1] = a, l[2] = u, l[3] = P;
  else P = l[3];
  return P
}

function ie(o) {
  let P = S(8),
    {
      value: t,
      options: d,
      disabled: a
    } = o,
    u = ve(Ee),
    l = M0(),
    k;
  if (P[0] !== d || P[1] !== t) k = d.find((p) => p.value === t)?.label ?? t, P[0] = d, P[1] = t, P[2] = k;
  else k = P[2];
  let f = k,
    b = !a && !u && (l || !De);
  const m = b ? "\u2039 " : void 0,
    w = b ? " \u203A" : void 0;
  let v;
  if (P[3] !== a || P[4] !== f || P[5] !== m || P[6] !== w) v = e(H, {
    spoken: f,
    disabled: a,
    before: m,
    after: w,
    children: f
  }), P[3] = a, P[4] = f, P[5] = m, P[6] = w, P[7] = v;
  else v = P[7];
  return v
}

function fe(o) {
  let l = S(5),
    {
      children: t,
      disabled: d
    } = o;
  const a = t ? `${t}, opens` : "opens",
    u = t ? " \u203A" : "\u203A";
  let P;
  if (l[0] !== t || l[1] !== d || l[2] !== a || l[3] !== u) P = e(H, {
    spoken: a,
    disabled: d,
    after: u,
    children: t
  }), l[0] = t, l[1] = d, l[2] = a, l[3] = u, l[4] = P;
  else P = l[4];
  return P
}

function se(o) {
  let u = S(4),
    {
      children: t,
      disabled: d
    } = o;
  const a = t ? `${t}, button` : "button";
  let l;
  if (u[0] !== t || u[1] !== d || u[2] !== a) l = e(H, {
    spoken: a,
    disabled: d,
    children: t
  }), u[0] = t, u[1] = d, u[2] = a, u[3] = l;
  else l = u[3];
  return l
}

function J(o) {
  let u = S(6),
    {
      children: t,
      disabled: d
    } = o;
  const a = t || "empty";
  let l;
  if (u[0] !== t) l = t || e(n, {
    dimColor: !0,
    children: "\u2014"
  }), u[0] = t, u[1] = l;
  else l = u[1];
  let P;
  if (u[2] !== d || u[3] !== a || u[4] !== l) P = e(H, {
    spoken: a,
    disabled: d,
    children: l
  }), u[2] = d, u[3] = a, u[4] = l, u[5] = P;
  else P = u[5];
  return P
}

function G(o) {
  let p = S(75),
    {
      value: t,
      placeholder: d,
      disabled: a
    } = o,
    u = ve(xe),
    l = ot(),
    P = Wu();
  if (u === void 0) {
    const k = `${t||"empty"}, edit text`;
    let f;
    if (p[0] !== d || p[1] !== t) f = t || e(n, {
      dimColor: !0,
      children: d
    }), p[0] = d, p[1] = t, p[2] = f;
    else f = p[2];
    let b;
    if (p[3] !== a || p[4] !== k || p[5] !== f) b = e(H, {
      spoken: k,
      disabled: a,
      children: f
    }), p[3] = a, p[4] = k, p[5] = f, p[6] = b;
    else b = p[6];
    return b
  }
  let {
    editor: m,
    input: w,
    end: v
  } = u, x, M, h, E, O, k, F, I, f, b, X, W, L, q, B, _;
  if (p[7] !== u.room || p[8] !== m || p[9] !== v || p[10] !== w || p[11] !== l || p[12] !== P) {
    let i = va.fromText(m.query, u.room, m.cursorOffset);
    let D = P && !l && !Kj() ? " " : "";
    let c;
    if (p[29] !== v) c = () => v(!0, !0) ? !1 : void 0, p[29] = v, p[30] = c;
    else c = p[30];
    let T = c;
    O = n_;
    F = "Select";
    let g;
    if (p[31] !== v) g = {
      action: "select:cancel",
      run: () => {
        v(!1)
      }
    }, p[31] = v, p[32] = g;
    else g = p[32];
    let R;
    if (p[33] !== m) R = {
      action: "select:first",
      run: () => m.setCursorOffset(0)
    }, p[33] = m, p[34] = R;
    else R = p[34];
    let N;
    if (p[35] !== m) N = {
      action: "select:last",
      run: () => m.setCursorOffset(m.queryRef.current.length)
    }, p[35] = m, p[36] = N;
    else N = p[36];
    let K, V;
    if (p[37] !== T) K = {
      action: "select:previous",
      run: T
    }, V = {
      action: "select:next",
      run: T
    }, p[37] = T, p[38] = K, p[39] = V;
    else K = p[38], V = p[39];
    if (p[40] !== g || p[41] !== R || p[42] !== N || p[43] !== K || p[44] !== V) I = [g, R, N, K, V], p[40] = g, p[41] = R, p[42] = N, p[43] = K, p[44] = V, p[45] = I;
    else I = p[45];
    E = s;
    if (p[46] !== v) _ = (Q) => v(Q.relatedTarget !== null), p[46] = v, p[47] = _;
    else _ = p[47];
    h = che;
    X = w;
    W = !0;
    L = {
      line: 0,
      column: i.getPosition().column,
      visible: !0
    };
    if (p[48] !== m) q = (U) => {
      if (m.handleKeyDown(U), U.defaultPrevented) U.stopImmediatePropagation()
    }, p[48] = m, p[49] = q;
    else q = p[49];
    B = m.handlePaste;
    M = n;
    f = "truncate-end";
    b = !0;
    x = qs;
    k = i.render(D, "", Jfe, void 0, 1, void 0, void 0, l);
    p[7] = u.room, p[8] = m, p[9] = v, p[10] = w, p[11] = l, p[12] = P, p[13] = x, p[14] = M, p[15] = h, p[16] = E, p[17] = O, p[18] = k, p[19] = F, p[20] = I, p[21] = f, p[22] = b, p[23] = X, p[24] = W, p[25] = L, p[26] = q, p[27] = B, p[28] = _
  } else x = p[13], M = p[14], h = p[15], E = p[16], O = p[17], k = p[18], F = p[19], I = p[20], f = p[21], b = p[22], X = p[23], W = p[24], L = p[25], q = p[26], B = p[27], _ = p[28];
  let c;
  if (p[50] !== x || p[51] !== k) c = e(x, {
    children: k
  }), p[50] = x, p[51] = k, p[52] = c;
  else c = p[52];
  let g;
  if (p[53] !== M || p[54] !== c || p[55] !== f || p[56] !== b) g = e(M, {
    wrap: f,
    "aria-preserve-whitespace": b,
    children: c
  }), p[53] = M, p[54] = c, p[55] = f, p[56] = b, p[57] = g;
  else g = p[57];
  let R;
  if (p[58] !== h || p[59] !== g || p[60] !== X || p[61] !== W || p[62] !== L || p[63] !== q || p[64] !== B) R = e(h, {
    ref: X,
    autoFocus: W,
    caret: L,
    onKeyDown: q,
    onPaste: B,
    children: g
  }), p[58] = h, p[59] = g, p[60] = X, p[61] = W, p[62] = L, p[63] = q, p[64] = B, p[65] = R;
  else R = p[65];
  let N;
  if (p[66] !== E || p[67] !== R || p[68] !== _) N = e(E, {
    onBlur: _,
    children: R
  }), p[66] = E, p[67] = R, p[68] = _, p[69] = N;
  else N = p[69];
  let K;
  if (p[70] !== O || p[71] !== F || p[72] !== I || p[73] !== N) K = e(O, {
    scope: F,
    bindings: I,
    children: N
  }), p[70] = O, p[71] = F, p[72] = I, p[73] = N, p[74] = K;
  else K = p[74];
  return K
}

function ze(o) {
  if (C(o, re)) return ce("false");
  if (C(o, ie)) return Math.max(0, ...o.props.options.map((t) => te(t.label))) + (o.props.disabled ? 0 : ce("\u2039  \u203A"));
  if (C(o, fe)) {
    let {
      children: t
    } = o.props;
    return t ? te(t) + ce(" \u203A") : ce("\u203A")
  }
  if (C(o, se)) return te(o.props.children ?? "");
  if (C(o, J)) return te(o.props.children || "\u2014");
  if (C(o, G)) return te(o.props.value || (o.props.placeholder ?? "")) + 1;
  return 0
}

function S8s(o) {
  let t = U7(o);
  return 2 + (t ? Dt(t, " ") + 1 : 0)
}

function te(o) {
  return Math.max(0, ...o.split(`
`).map((t) => ce(t)))
}

function Tn(o, t) {
  if (C(o, re) && !o.props.disabled) {
    let d = Dn.bind(void 0, o.props, t);
    return {
      accept: d,
      previous: d,
      next: d
    }
  }
  if (C(o, ie) && !o.props.disabled) {
    let {
      props: d
    } = o, a = (u) => () => {
      let l = d.options.length,
        P = d.options.findIndex((f) => f.value === (t.get(d) ?? d.value)),
        k = Math.max(P, u === 1 ? -1 : 0),
        p = d.options[(k + u + l) % l];
      if (p === void 0) return;
      Te(t, d, p.value), d.onChange(p.value)
    };
    return {
      accept: a(1),
      next: a(1),
      previous: a(-1)
    }
  }
  if (C(o, fe) && !o.props.disabled) return {
    accept: o.props.onOpen,
    next: o.props.onOpen
  };
  if (C(o, se) && !o.props.disabled) return {
    accept: o.props.onPress
  };
  return {}
}

function Dn(o, t) {
  let d = !(t.get(o) ?? o.value);
  Te(t, o, d), o.onChange(d)
}

function Te(o, t, d) {
  o.set(t, d), queueMicrotask(() => o.delete(t))
}

function Mn(o, t) {
  let d = t.get(o);
  return typeof d === "string" ? d : o.value
}

function Ge(o) {
  return hy(o) && o.type === Se
}

function C(o, t) {
  return hy(o) && o.type === t
}
var Wb = Object.assign(en, {
  Field: Se,
  Toggle: re,
  Select: ie,
  Text: G,
  Link: fe,
  Button: se,
  Value: J
});
export {
  S8s,
  Wb
};
