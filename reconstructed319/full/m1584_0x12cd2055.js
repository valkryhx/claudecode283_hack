// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  dG
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  m3,
  EX
} from "B:/~BUN/root/chunk-78494p3w.js";

function TLe() {
  return le() && m3() && !dG()
}

function ISa(t) {
  return TLe() && EX(t)
}
var E = 750,
  b = 3000;

function MSa() {
  return {
    debounceMs: E,
    maxWaitMs: b
  }
}

function DSa({
  news: t,
  subscribe: m,
  signal: n,
  settled: o,
  debounceMs: a,
  maxWaitMs: p
}) {
  return new Promise((f) => {
    let r = !1,
      i, u, c = m(s);

    function e() {
      if (r) return;
      r = !0, clearTimeout(i), clearTimeout(u), c(), n.removeEventListener("abort", e), o?.removeEventListener("abort", d), f()
    }

    function d() {
      s()
    }

    function s() {
      if (r || t().length === 0 && o?.aborted !== !0) return;
      if (clearTimeout(i), i = setTimeout(e, a), u === void 0) u = setTimeout(e, p)
    }
    if (n.aborted) {
      e();
      return
    }
    n.addEventListener("abort", e, {
      once: !0
    }), o?.addEventListener("abort", d, {
      once: !0
    }), s()
  })
}
export {
  TLe,
  ISa,
  MSa,
  DSa
};
