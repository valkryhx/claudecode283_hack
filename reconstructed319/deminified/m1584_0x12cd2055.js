// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { dG } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { m3, EX } from "B:/~BUN/root/chunk-78494p3w.js";
function TLe() {
  return le() && m3() && !dG();
}
function ISa(t) {
  return TLe() && EX(t);
}
var debounceMs = 750,
  maxWaitMs = 3000;
function MSa() {
  return {
    debounceMs: debounceMs,
    maxWaitMs: maxWaitMs
  };
}
function DSa({
  news: news,
  subscribe: subscribe,
  signal: signal,
  settled: settled,
  debounceMs: debounceMs_2,
  maxWaitMs: maxWaitMs_2
}) {
  return new Promise(f => {
    let r = !1,
      i,
      u,
      c = subscribe(s);
    function e() {
      if (r) return;
      r = !0, clearTimeout(i), clearTimeout(u), c(), signal.removeEventListener("abort", e), settled?.removeEventListener("abort", d), f();
    }
    function d() {
      s();
    }
    function s() {
      if (r || news().length === 0 && settled?.aborted !== !0) return;
      if (clearTimeout(i), i = setTimeout(e, debounceMs_2), u === void 0) u = setTimeout(e, maxWaitMs_2);
    }
    if (signal.aborted) {
      e();
      return;
    }
    signal.addEventListener("abort", e, {
      once: !0
    }), settled?.addEventListener("abort", d, {
      once: !0
    }), s();
  });
}
export { TLe, ISa, MSa, DSa };