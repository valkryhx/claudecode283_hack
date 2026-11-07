// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  oLe,
  zpt
} from "B:/~BUN/root/chunk-e8znf4zw.js";
import {
  Ii
} from "B:/~BUN/root/chunk-bfwh5k9e.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  D0,
  G,
  xs
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  ve,
  O,
  Zt,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function V() {
  return Ii().get(process.stdout)?.invalidatePrevFrame()
}

function g(e) {
  return e.activeOverlays.size > 0
}

function K(e) {
  return d(e.activeOverlays)
}

function P(e) {
  return EYe(e.activeOverlays)
}

function M(e) {
  for (const t of e.activeOverlays) {
    if (v.has(t)) {
      return !0
    }
  }
  return !1
}

function Q(e) {
  for (const t of e.activeOverlays) {
    if (f.has(t) || t === zpt()) {
      return !0
    }
  }
  return !1
}
var T = new Set(["autocomplete"]),
  C = new Set(["above-prompt-input", "above-prompt-select"]),
  v = new Set(["history-search"]);
var f = new Set(["elicitation", "elicitation-url", oLe, ...[], ...[]]),
  ake = 2;

function Za(e, t) {
  let R = S(8),
    r = t === void 0 ? !0 : t,
    n = ve(D0)?.setState,
    x, A;
  if (R[0] !== r || R[1] !== e || R[2] !== n) x = () => {
    if (!r || !n) {
      return
    }
    return n((c) => {
      if (c.activeOverlays.has(e)) {
        return c
      }
      let b = new Set(c.activeOverlays);
      return b.add(e), {
        ...c,
        activeOverlays: b
      }
    }), () => {
      n((u) => {
        if (!u.activeOverlays.has(e)) {
          return u
        }
        let N = new Set(u.activeOverlays);
        return N.delete(e), {
          ...u,
          activeOverlays: N
        }
      })
    }
  }, A = [e, r, n], R[0] = r, R[1] = e, R[2] = n, R[3] = x, R[4] = A;
  else x = R[3], A = R[4];
  O(x, A);
  let y, m;
  if (R[5] !== r) y = () => {
    if (!r) {
      return
    }
    return V
  }, m = [r], R[5] = r, R[6] = y, R[7] = m;
  else y = R[6], m = R[7];
  Zt(y, m)
}

function JHo() {
  return G(g)
}

function d(e) {
  for (let t of e)
    if (!C.has(t)) return !0;
  return !1
}

function C5n() {
  return G(K)
}

function EYe(e) {
  for (let t of e)
    if (!T.has(t)) return !0;
  return !1
}

function _K() {
  return G(P)
}

function JGt() {
  return xs(M) ?? !1
}

function pzr() {
  return xs(Q) ?? !1
}
export {
  ake,
  Za,
  JHo,
  C5n,
  EYe,
  _K,
  JGt,
  pzr
};
