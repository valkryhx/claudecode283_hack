// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Mme } from "B:/~BUN/root/chunk-vz9zea4j.js";
function XF(t, e) {
  return r => t(S => c(S, e, S[e], r(S[e])));
}
function jUn(t) {
  return e => t(r => {
    let S = e(r);
    return Object.is(S, r) ? r : {
      ...r,
      ...S
    };
  });
}
function OPr(t) {
  return {
    getSnapshot: t.getSnapshot,
    getState: t.getState,
    setState: jUn(t.setState),
    subscribe: t.subscribe
  };
}
function $Ne(t, e, r) {
  return {
    get: () => t()[r],
    set: XF(e, r)
  };
}
function Ugt(t, e) {
  return (r, S) => ({
    get: () => r()[t] ?? e,
    set: a => S(s => {
      let n = s[t] ?? e;
      return c(s, t, n, a(n));
    })
  });
}
function aYi(t) {
  let e = t;
  return {
    get: () => e,
    set: r => {
      e = r(e);
    }
  };
}
function Hs(t, e) {
  let r = t,
    S = new Set(),
    a = e && Mme(e),
    s = () => r;
  return {
    getSnapshot: s,
    getState: s,
    setState: n => {
      let oldState = r,
        newState = n(oldState);
      if (Object.is(newState, oldState)) return;
      r = newState, a?.({
        newState: newState,
        oldState: oldState
      });
      for (let u of S) u();
    },
    subscribe: n => {
      let o = Mme(n);
      return S.add(o), () => S.delete(o);
    }
  };
}
function c(t, e, r, S) {
  return Object.is(S, r) ? t : {
    ...t,
    [e]: S
  };
}
export { XF, jUn, OPr, $Ne, Ugt, aYi, Hs };