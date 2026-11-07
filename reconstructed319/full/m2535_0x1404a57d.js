// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  xo
} from "B:/~BUN/root/chunk-tzwf3sbj.js";
import {
  si,
  Qc,
  so,
  ti,
  Ze
} from "B:/~BUN/root/chunk-cpzw87wr.js";
import {
  v$,
  d_
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Jn
} from "B:/~BUN/root/chunk-yd5nr5hc.js";
import {
  ke
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  uGt,
  iFo,
  Xme,
  Wjr,
  aFo,
  lFo,
  dFo
} from "B:/~BUN/root/chunk-r4qq9v7n.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w,
  Pn
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();

function ge() {}

function rUe(ce) {
  let t = S(55),
    {
      offer: o,
      entry: l,
      credentials: d,
      onDone: a
    } = ce,
    [u, I] = y(!1),
    T = A(!1),
    b = si(xo),
    {
      refusedWithin: C,
      noteRefused: h
    } = so(),
    K = Qc(),
    m, i, v, f, R, z, V, k, E, W, g, U, D, P, x;
  if (t[0] !== u || t[1] !== d || t[2] !== l || t[3] !== b || t[4] !== h || t[5] !== o || t[6] !== a || t[7] !== C || t[8] !== K) {
    z = Pn;
    io: {
      let c = v$();
      let L = Xme(o);
      let H;
      if (t[24] !== o) H = iFo(o),
      t[24] = o,
      t[25] = H;
      else H = t[25];
      let J = H;
      let Y;
      if (t[26] !== b || t[27] !== h || t[28] !== C) Y = function N() {
        if (b() || C(xo)) {
          return h(), !0
        }
        return !1
      },
      t[26] = b,
      t[27] = h,
      t[28] = C,
      t[29] = Y;
      else Y = t[29];
      let N = Y;
      let le;
      if (t[30] !== l || t[31] !== o || t[32] !== a || t[33] !== N) le = function v() {
        if (T.current || N()) {
          return
        }
        T.current = !0, a(aFo(l, o))
      },
      t[30] = l,
      t[31] = o,
      t[32] = a,
      t[33] = N,
      t[34] = le;
      else le = t[34];v = le;x = function x() {
        if (T.current || N()) {
          return
        }
        T.current = !0, I(!0), dFo(l, d, o).then(a).catch(() => {
          a({
            outcome: "unavailable",
            text: d_(o.origin === "wall" ? c.unconfirmedLine : c.unconfirmedAnytimeLine, L)
          })
        })
      };
      if (u) {
        const Q = d_(c.confirmTitle, L);
        let ue;
        if (t[35] === w) ue = e(n, {
          dimColor: !0,
          children: "Resetting your limits\u2026 this usually takes a few seconds"
        }), t[35] = ue;
        else ue = t[35];
        z = e(ke, {
          title: Q,
          onCancel: ge,
          exitOnCtrlCD: !0,
          color: "suggestion",
          hideInputGuide: !0,
          children: ue
        });
        break io
      }
      i = ke;U = d_(c.confirmTitle, L);D = v;P = "suggestion";
      let Q;
      if (t[36] !== J) Q = J === void 0 ? null : e(n, {
        children: J
      }),
      t[36] = J,
      t[37] = Q;
      else Q = t[37];R = r(s, {
        flexDirection: "column",
        children: [Q, e(n, {
          children: d_(c.confirmBody, L)
        }), e(n, {
          dimColor: !0,
          children: d_(c.confirmDetail, L)
        })]
      });m = Jn;f = N;V = K;k = xo;E = !0;W = d_(c.confirmYes, L);g = d_(c.confirmNo, L)
    }
    t[0] = u, t[1] = d, t[2] = l, t[3] = b, t[4] = h, t[5] = o, t[6] = a, t[7] = C, t[8] = K, t[9] = m, t[10] = i, t[11] = v, t[12] = f, t[13] = R, t[14] = z, t[15] = V, t[16] = k, t[17] = E, t[18] = W, t[19] = g, t[20] = U, t[21] = D, t[22] = P, t[23] = x
  } else m = t[9], i = t[10], v = t[11], f = t[12], R = t[13], z = t[14], V = t[15], k = t[16], E = t[17], W = t[18], g = t[19], U = t[20], D = t[21], P = t[22], x = t[23];
  if (z !== Pn) return z;
  let H;
  if (t[38] !== m || t[39] !== v || t[40] !== f || t[41] !== V || t[42] !== k || t[43] !== E || t[44] !== W || t[45] !== g || t[46] !== x) H = e(m, {
    refuseInput: f,
    openedAt: V,
    windowMs: k,
    hideIndexes: E,
    confirmLabel: W,
    cancelLabel: g,
    onConfirm: x,
    onCancel: v
  }), t[38] = m, t[39] = v, t[40] = f, t[41] = V, t[42] = k, t[43] = E, t[44] = W, t[45] = g, t[46] = x, t[47] = H;
  else H = t[47];
  let Y;
  if (t[48] !== i || t[49] !== R || t[50] !== H || t[51] !== U || t[52] !== D || t[53] !== P) Y = r(i, {
    title: U,
    onCancel: D,
    color: P,
    children: [R, H]
  }), t[48] = i, t[49] = R, t[50] = H, t[51] = U, t[52] = D, t[53] = P, t[54] = Y;
  else Y = t[54];
  return Y
}
j();

function We(x) {
  return {
    label: uGt(x),
    value: x.kind
  }
}

function Ue(c) {
  return {
    label: c.text,
    value: c.kind,
    disabled: !0
  }
}

function Qkt(ce) {
  let t = S(30),
    {
      offers: o,
      unusable: l,
      entry: d,
      credentials: a,
      onDone: u
    } = ce,
    [I, T] = y(null),
    b = A(!1),
    C = si(xo),
    {
      refusedWithin: h,
      noteRefused: K
    } = so();
  if (I !== null) {
    let m;
    if (t[0] !== I || t[1] !== a || t[2] !== d || t[3] !== u) m = e(rUe, {
      offer: I,
      entry: d,
      credentials: a,
      onDone: u
    }), t[0] = I, t[1] = a, t[2] = d, t[3] = u, t[4] = m;
    else m = t[4];
    return m
  }
  let m;
  if (t[5] !== C || t[6] !== K || t[7] !== h) m = function i() {
    if (C() || h(xo)) {
      return K(), !0
    }
    return !1
  }, t[5] = C, t[6] = K, t[7] = h, t[8] = m;
  else m = t[8];
  let i = m,
    v;
  if (t[9] !== d || t[10] !== o || t[11] !== u || t[12] !== i) v = function f() {
    if (b.current || i()) {
      return
    }
    b.current = !0, u(lFo(d, o))
  }, t[9] = d, t[10] = o, t[11] = u, t[12] = i, t[13] = v;
  else v = t[13];
  let f = v,
    R;
  if (t[14] !== d || t[15] !== o || t[16] !== i) R = function E(z) {
    let k = o.find((V) => V.kind === z);
    if (k === void 0 || b.current || i()) {
      return
    }
    Wjr(d, k), T(k)
  }, t[14] = d, t[15] = o, t[16] = i, t[17] = R;
  else R = t[17];
  let E = R,
    W;
  if (t[18] !== o || t[19] !== l) W = [...o.map(We), ...l.map(Ue)], t[18] = o, t[19] = l, t[20] = W;
  else W = t[20];
  let g = W,
    U;
  if (t[21] === w) U = v$(), t[21] = U;
  else U = t[21];
  let D;
  if (t[22] !== E || t[23] !== f || t[24] !== g || t[25] !== i) D = e(Ze, {
    options: g,
    onChange: E,
    onCancel: f,
    refuseInput: i,
    selectedValue: ti,
    hideIndexes: !0,
    visibleOptionCount: g.length
  }), t[22] = E, t[23] = f, t[24] = g, t[25] = i, t[26] = D;
  else D = t[26];
  let P;
  if (t[27] !== f || t[28] !== D) P = e(ke, {
    title: U.chooseTitle,
    onCancel: f,
    color: "suggestion",
    children: D
  }), t[27] = f, t[28] = D, t[29] = P;
  else P = t[29];
  return P
}
export {
  rUe,
  Qkt
};
