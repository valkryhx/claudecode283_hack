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
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  oo
} from "B:/~BUN/root/chunk-1a6hgte8.js";
import {
  Gi,
  yh,
  rs
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  qn
} from "B:/~BUN/root/chunk-pet3tnhj.js";
import {
  ge
} from "B:/~BUN/root/chunk-51erc9xb.js";
import {
  LM,
  cm
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Y7n,
  FK,
  X7n,
  J7n
} from "B:/~BUN/root/chunk-5dh7ejty.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S,
  hn
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function ce() {}

function A1e(ae) {
  let i = w(55),
    {
      offer: o,
      entry: d,
      credentials: K,
      onDone: f
    } = ae,
    [Q, fe] = g(!1),
    x = T(!1),
    v = Gi(oo),
    {
      refusedWithin: b,
      noteRefused: C
    } = rs(),
    V = yh(),
    E, k, m, j, H, X, U, A, B, P, R, W, I, Y, D;
  if (i[0] !== Q || i[1] !== K || i[2] !== d || i[3] !== v || i[4] !== C || i[5] !== o || i[6] !== f || i[7] !== b || i[8] !== V) {
    X = hn;
    Oe: {
      let c = LM();
      let u = FK(o);
      let l;
      if (i[24] !== o) l = Y7n(o),
      i[24] = o,
      i[25] = l;
      else l = i[25];
      let q = l;
      let h;
      if (i[26] !== v || i[27] !== C || i[28] !== b) h = function p() {
        if (v() || b(oo)) {
          return C(), !0
        }
        return !1
      },
      i[26] = v,
      i[27] = C,
      i[28] = b,
      i[29] = h;
      else h = i[29];
      let p = h;
      let F;
      if (i[30] !== d || i[31] !== o || i[32] !== f || i[33] !== p) F = function m() {
        if (x.current || p()) {
          return
        }
        x.current = !0, f(X7n(d, o))
      },
      i[30] = d,
      i[31] = o,
      i[32] = f,
      i[33] = p,
      i[34] = F;
      else F = i[34];m = F;D = function D() {
        if (x.current || p()) {
          return
        }
        x.current = !0, fe(!0), J7n(d, K, o).then(f).catch(() => {
          f({
            outcome: "unavailable",
            text: cm(o.origin === "wall" ? c.unconfirmedLine : c.unconfirmedAnytimeLine, u)
          })
        })
      };
      if (Q) {
        let L;
        if (i[35] === S) L = e(n, {
          dimColor: !0,
          children: "Resetting your limits\u2026 this usually takes a few seconds"
        }), i[35] = L;
        else L = i[35];
        X = e(ge, {
          title: cm(c.confirmTitle, u),
          onCancel: ce,
          exitOnCtrlCD: !0,
          color: "suggestion",
          hideInputGuide: !0,
          children: L
        });
        break Oe
      }
      k = ge;W = cm(c.confirmTitle, u);I = m;Y = "suggestion";
      let L;
      if (i[36] !== q) L = q === void 0 ? null : e(n, {
        children: q
      }),
      i[36] = q,
      i[37] = L;
      else L = i[37];H = r(s, {
        flexDirection: "column",
        children: [L, e(n, {
          children: cm(c.confirmBody, u)
        }), e(n, {
          dimColor: !0,
          children: cm(c.confirmDetail, u)
        })]
      });E = qn;j = p;U = V;A = oo;B = !0;P = cm(c.confirmYes, u);R = cm(c.confirmNo, u)
    }
    i[0] = Q, i[1] = K, i[2] = d, i[3] = v, i[4] = C, i[5] = o, i[6] = f, i[7] = b, i[8] = V, i[9] = E, i[10] = k, i[11] = m, i[12] = j, i[13] = H, i[14] = X, i[15] = U, i[16] = A, i[17] = B, i[18] = P, i[19] = R, i[20] = W, i[21] = I, i[22] = Y, i[23] = D
  } else E = i[9], k = i[10], m = i[11], j = i[12], H = i[13], X = i[14], U = i[15], A = i[16], B = i[17], P = i[18], R = i[19], W = i[20], I = i[21], Y = i[22], D = i[23];
  if (X !== hn) return X;
  let l;
  if (i[38] !== E || i[39] !== m || i[40] !== j || i[41] !== U || i[42] !== A || i[43] !== B || i[44] !== P || i[45] !== R || i[46] !== D) l = e(E, {
    refuseInput: j,
    openedAt: U,
    windowMs: A,
    hideIndexes: B,
    confirmLabel: P,
    cancelLabel: R,
    onConfirm: D,
    onCancel: m
  }), i[38] = E, i[39] = m, i[40] = j, i[41] = U, i[42] = A, i[43] = B, i[44] = P, i[45] = R, i[46] = D, i[47] = l;
  else l = i[47];
  let h;
  if (i[48] !== k || i[49] !== H || i[50] !== l || i[51] !== W || i[52] !== I || i[53] !== Y) h = r(k, {
    title: W,
    onCancel: I,
    color: Y,
    children: [H, l]
  }), i[48] = k, i[49] = H, i[50] = l, i[51] = W, i[52] = I, i[53] = Y, i[54] = h;
  else h = i[54];
  return h
}
export {
  A1e
};
