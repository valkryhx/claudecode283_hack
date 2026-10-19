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
  s,
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  No
} from "B:/~BUN/root/chunk-5xxjpbgm.js";
import {
  Za,
  l_,
  cs
} from "B:/~BUN/root/chunk-nbjke4gr.js";
import {
  pU,
  xh
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  lr
} from "B:/~BUN/root/chunk-v8w1g8ga.js";
import {
  be
} from "B:/~BUN/root/chunk-nyga36vf.js";
import {
  $Vr,
  KQ,
  UVr,
  BVr
} from "B:/~BUN/root/chunk-ga160ee8.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  S,
  yn
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();

function ce() {}

function ftt(ae) {
  let i = w(55),
    {
      offer: o,
      entry: d,
      credentials: K,
      onDone: f
    } = ae,
    [Q, fe] = y(!1),
    x = A(!1),
    g = Za(No),
    {
      refusedWithin: b,
      noteRefused: C
    } = cs(),
    V = l_(),
    E, k, m, j, H, X, U, N, P, R, W, I, T, Y, D;
  if (i[0] !== Q || i[1] !== K || i[2] !== d || i[3] !== g || i[4] !== C || i[5] !== o || i[6] !== f || i[7] !== b || i[8] !== V) {
    X = yn;
    Oe: {
      let c = pU();
      let u = KQ(o);
      let l;
      if (i[24] !== o) l = $Vr(o),
      i[24] = o,
      i[25] = l;
      else l = i[25];
      let q = l;
      let h;
      if (i[26] !== g || i[27] !== C || i[28] !== b) h = function p() {
        if (g() || b(No)) {
          return C(), !0
        }
        return !1
      },
      i[26] = g,
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
        x.current = !0, f(UVr(d, o))
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
        x.current = !0, fe(!0), BVr(d, K, o).then(f).catch(() => {
          f({
            outcome: "unavailable",
            text: xh(o.origin === "wall" ? c.unconfirmedLine : c.unconfirmedAnytimeLine, u)
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
        X = e(be, {
          title: xh(c.confirmTitle, u),
          onCancel: ce,
          exitOnCtrlCD: !0,
          color: "suggestion",
          hideInputGuide: !0,
          children: L
        });
        break Oe
      }
      k = be;I = xh(c.confirmTitle, u);T = m;Y = "suggestion";
      let L;
      if (i[36] !== q) L = q === void 0 ? null : e(n, {
        children: q
      }),
      i[36] = q,
      i[37] = L;
      else L = i[37];H = r(s, {
        flexDirection: "column",
        children: [L, e(n, {
          children: xh(c.confirmBody, u)
        }), e(n, {
          dimColor: !0,
          children: xh(c.confirmDetail, u)
        })]
      });E = lr;j = p;U = V;N = No;P = !0;R = xh(c.confirmYes, u);W = xh(c.confirmNo, u)
    }
    i[0] = Q, i[1] = K, i[2] = d, i[3] = g, i[4] = C, i[5] = o, i[6] = f, i[7] = b, i[8] = V, i[9] = E, i[10] = k, i[11] = m, i[12] = j, i[13] = H, i[14] = X, i[15] = U, i[16] = N, i[17] = P, i[18] = R, i[19] = W, i[20] = I, i[21] = T, i[22] = Y, i[23] = D
  } else E = i[9], k = i[10], m = i[11], j = i[12], H = i[13], X = i[14], U = i[15], N = i[16], P = i[17], R = i[18], W = i[19], I = i[20], T = i[21], Y = i[22], D = i[23];
  if (X !== yn) return X;
  let l;
  if (i[38] !== E || i[39] !== m || i[40] !== j || i[41] !== U || i[42] !== N || i[43] !== P || i[44] !== R || i[45] !== W || i[46] !== D) l = e(E, {
    refuseInput: j,
    openedAt: U,
    windowMs: N,
    hideIndexes: P,
    confirmLabel: R,
    cancelLabel: W,
    onConfirm: D,
    onCancel: m
  }), i[38] = E, i[39] = m, i[40] = j, i[41] = U, i[42] = N, i[43] = P, i[44] = R, i[45] = W, i[46] = D, i[47] = l;
  else l = i[47];
  let h;
  if (i[48] !== k || i[49] !== H || i[50] !== l || i[51] !== I || i[52] !== T || i[53] !== Y) h = r(k, {
    title: I,
    onCancel: T,
    color: Y,
    children: [H, l]
  }), i[48] = k, i[49] = H, i[50] = l, i[51] = I, i[52] = T, i[53] = Y, i[54] = h;
  else h = i[54];
  return h
}
export {
  ftt
};
