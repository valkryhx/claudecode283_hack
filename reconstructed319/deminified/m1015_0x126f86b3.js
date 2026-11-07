// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Bzr } from "B:/~BUN/root/chunk-31b4g6te.js";
import { Qi } from "B:/~BUN/root/chunk-qey16aan.js";
import { ue, ve, Eoe, Zt, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var oI = 150,
  xo = 250,
  r$o = 700,
  phn = 1000,
  z7 = 600;
function ra(n, r, t = oI) {
  let e = n() - r;
  if (e >= 0) return e < t;
  return r <= Date.now();
}
function L5n(key) {
  let r = Qi(),
    [t, e] = y(() => ({
      key: key,
      at: Date.now()
    }));
  if (t.key !== key) e({
    key: key,
    at: Date.now()
  });
  let a = nE(t.at);
  return function () {
    return ra(r, a(t.at));
  };
}
function nE(n) {
  let [r] = y(() => n !== 0 && Date.now() - n >= oI ? n : 0),
    stamp = n === r ? 0 : n,
    e = A({
      stamp: 0,
      at: 0,
      painted: !1
    }),
    a = ve(Bzr) ?? s;
  return Eoe(() => {
    if (stamp === 0 || e.current.stamp === stamp && e.current.painted) return;
    let at = e.current.stamp === stamp ? e.current.at : stamp;
    e.current = {
      stamp: stamp,
      at: at,
      painted: !1
    };
    let u = a(() => {
      e.current = {
        stamp: stamp,
        at: Math.max(e.current.at, Date.now()),
        painted: !0
      }, u();
    });
    return u;
  }, [stamp, a]), Zt(() => {
    if (stamp !== 0 && e.current.stamp === stamp && !e.current.painted) e.current = {
      stamp: stamp,
      at: Math.max(stamp, Date.now()),
      painted: !1
    };
  }, [stamp]), ue(o => o === e.current.stamp ? e.current.at : o, []);
}
function s() {
  return () => {};
}
export { oI, xo, r$o, phn, z7, ra, L5n, nE };