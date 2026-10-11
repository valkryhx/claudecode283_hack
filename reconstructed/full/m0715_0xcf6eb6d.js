// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  xs
} from "B:/~BUN/root/chunk-p4t9nwg2.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  fP,
  W,
  ys
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  Pe,
  R,
  sn,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();

function z() {
  return xs().get(process.stdout)?.invalidatePrevFrame()
}

function F(e) {
  return e.activeOverlays.size > 0
}

function I(e) {
  return x(e.activeOverlays)
}

function K(e) {
  return bvn(e.activeOverlays)
}

function M(e) {
  for (const t of e.activeOverlays) {
    if (u.has(t)) {
      return !0
    }
  }
  return !1
}

function j(e) {
  for (const t of e.activeOverlays) {
    if (f.has(t)) {
      return !0
    }
  }
  return !1
}
var E = new Set(["autocomplete"]),
  _ = new Set(["above-prompt-input", "above-prompt-select"]),
  u = new Set(["history-search"]),
  f = new Set(["elicitation", "elicitation-url"]),
  $be = 2;

function vi(e, t) {
  let S = w(8),
    r = t === void 0 ? !0 : t,
    n = Pe(fP)?.setState,
    O, b;
  if (S[0] !== r || S[1] !== e || S[2] !== n) O = () => {
    if (!r || !n) {
      return
    }
    return n((c) => {
      if (c.activeOverlays.has(e)) {
        return c
      }
      let y = new Set(c.activeOverlays);
      return y.add(e), {
        ...c,
        activeOverlays: y
      }
    }), () => {
      n((v) => {
        if (!v.activeOverlays.has(e)) {
          return v
        }
        let A = new Set(v.activeOverlays);
        return A.delete(e), {
          ...v,
          activeOverlays: A
        }
      })
    }
  }, b = [e, r, n], S[0] = r, S[1] = e, S[2] = n, S[3] = O, S[4] = b;
  else O = S[3], b = S[4];
  R(O, b);
  let h, m;
  if (S[5] !== r) h = () => {
    if (!r) {
      return
    }
    return z
  }, m = [r], S[5] = r, S[6] = h, S[7] = m;
  else h = S[6], m = S[7];
  sn(h, m)
}

function Rer() {
  return W(F)
}

function x(e) {
  for (let t of e)
    if (!_.has(t)) return !0;
  return !1
}

function qGt() {
  return W(I)
}

function bvn(e) {
  for (let t of e)
    if (!E.has(t)) return !0;
  return !1
}

function J2() {
  return W(K)
}

function WJe() {
  return ys(M) ?? !1
}

function Svn() {
  return ys(j) ?? !1
}
export {
  $be,
  vi,
  Rer,
  qGt,
  bvn,
  J2,
  WJe,
  Svn
};
