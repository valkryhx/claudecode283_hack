// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Bzr
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  Qi
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  ue,
  ve,
  Eoe,
  Zt,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var oI = 150,
  xo = 250,
  r$o = 700,
  phn = 1000,
  z7 = 600;

function ra(n, r, t = oI) {
  let e = n() - r;
  if (e >= 0) return e < t;
  return r <= Date.now()
}

function L5n(n) {
  let r = Qi(),
    [t, e] = y(() => ({
      key: n,
      at: Date.now()
    }));
  if (t.key !== n) e({
    key: n,
    at: Date.now()
  });
  let a = nE(t.at);
  return function() {
    return ra(r, a(t.at))
  }
}

function nE(n) {
  let [r] = y(() => n !== 0 && Date.now() - n >= oI ? n : 0), t = n === r ? 0 : n, e = A({
    stamp: 0,
    at: 0,
    painted: !1
  }), a = ve(Bzr) ?? s;
  return Eoe(() => {
    if (t === 0 || e.current.stamp === t && e.current.painted) return;
    let o = e.current.stamp === t ? e.current.at : t;
    e.current = {
      stamp: t,
      at: o,
      painted: !1
    };
    let u = a(() => {
      e.current = {
        stamp: t,
        at: Math.max(e.current.at, Date.now()),
        painted: !0
      }, u()
    });
    return u
  }, [t, a]), Zt(() => {
    if (t !== 0 && e.current.stamp === t && !e.current.painted) e.current = {
      stamp: t,
      at: Math.max(t, Date.now()),
      painted: !1
    }
  }, [t]), ue((o) => o === e.current.stamp ? e.current.at : o, [])
}

function s() {
  return () => {}
}
export {
  oI,
  xo,
  r$o,
  phn,
  z7,
  ra,
  L5n,
  nE
};
