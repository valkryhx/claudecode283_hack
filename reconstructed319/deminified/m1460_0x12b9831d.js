// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { E0 } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var SRt = E0(() => a().rowStaged);
function m() {
  return a().attestationEnforcement;
}
function Xci() {
  return m() === "not_enforced";
}
var v = /^[A-Za-z_$][\w$.]{0,63}$/;
function r3e(e) {
  try {
    let t = e instanceof Error ? e.name : typeof e;
    return typeof t === "string" && v.test(t) ? t : "unnamed";
  } catch {
    return "unnamed";
  }
}
function b(e, t) {
  if (e === void 0) return "deliver";
  if (t === e) return "repeat";
  return e === "served" && t === "refused" ? "deliver" : "out_of_order";
}
function g(e) {
  return typeof e === "object" && e !== null && "then" in e && typeof e.then === "function";
}
function y(e, t) {
  if (!g(e)) return;
  Promise.resolve(e).catch(s => {
    try {
      t?.(r3e(s));
    } catch {}
  });
}
function w() {
  let e,
    t = [],
    s = !1,
    c = [],
    f = r => () => {
      t = t.filter(item => item !== r);
    },
    h = (r, n, o) => {
      try {
        return y(r.listener(n, f(r)), o), null;
      } catch (error) {
        return r3e(error);
      }
    },
    l = ({
      verdict: verdict,
      onRejected: onRejected
    }) => {
      e = verdict;
      let o = t,
        listeners = 0,
        threw = [];
      for (let u of o) {
        if (!t.includes(u)) continue;
        listeners++;
        let S = h(u, verdict, onRejected);
        if (S !== null) threw.push(S);
      }
      if (verdict !== "served") t = [];
      return {
        listeners: listeners,
        threw: threw
      };
    },
    p = () => {
      let r = [];
      while (c.length > 0) r.push(...l(c.shift()).threw);
      return r;
    };
  return {
    current: () => e,
    subscribe: listener => {
      let n = {
          listener: listener
        },
        o = f(n);
      if (e === void 0) return t = [...t, n], o;
      let i = e;
      if (i === "served") t = [...t, n];
      let d = s;
      s = !0;
      try {
        let u = listener(i, o);
        if (g(u)) Promise.resolve(u).catch(() => {});
      } catch (error) {
        throw o(), error;
      } finally {
        if (!d) p(), s = !1;
      }
      return o;
    },
    publish: (verdict_2, onRejected_2) => {
      let basis = c.at(-1)?.verdict ?? e,
        i = b(basis, verdict_2);
      if (i === "repeat") return {
        kind: "repeat"
      };
      if (i === "out_of_order") return {
        kind: "out_of_order",
        basis: basis
      };
      if (c.push({
        verdict: verdict_2,
        onRejected: onRejected_2
      }), s) return {
        kind: "queued"
      };
      s = !0;
      try {
        let d = l(c.shift());
        return {
          kind: "delivered",
          listeners: d.listeners,
          threw: [...d.threw, ...p()]
        };
      } finally {
        c.length = 0, s = !1;
      }
    },
    reset: () => {
      e = void 0, t = [], s = !1, c.length = 0;
    }
  };
}
var V = new W(() => ({
  rowStaged: De(),
  streamReconnected: De(),
  attestationEnforcement: "unknown",
  verdict: w()
}));
function a() {
  return V.of(H().host);
}
var Jci = Object.freeze({
    current: () => a().verdict.current(),
    subscribe: e => a().verdict.subscribe(e)
  }),
  Qci = (e, t) => a().verdict.publish(e, t);
export { SRt, Xci, r3e, Jci, Qci };