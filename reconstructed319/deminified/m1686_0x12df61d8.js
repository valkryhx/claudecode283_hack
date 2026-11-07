// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { O, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
j();
var BBe = "continue";
function Mdi(t, e, n) {
  if (n && e === BBe && t === BBe + "/") return "/";
  if (e.startsWith("/") && t.length === BBe.length + e.length + 1 && t.startsWith(BBe + e)) return t.slice(BBe.length);
  return t;
}
class o {
  lastResult = null;
  listeners = new Set();
  inFlight = null;
}
var l = new Je(() => new o());
function i() {
  return l.of(H());
}
function $3r(t) {
  let e = i();
  e.lastResult = t;
  for (let n of e.listeners) n(t);
}
function Ddi() {
  return i().inFlight;
}
function R6o(t) {
  i().inFlight = t;
}
function Ldi() {
  $3r(null), i().inFlight = null;
}
function Ndi() {
  let [t, e] = y(() => i().lastResult);
  return O(() => {
    let n = i();
    return e(n.lastResult), n.listeners.add(e), () => {
      n.listeners.delete(e);
    };
  }, []), t;
}
export { BBe, Mdi, $3r, Ddi, R6o, Ldi, Ndi };