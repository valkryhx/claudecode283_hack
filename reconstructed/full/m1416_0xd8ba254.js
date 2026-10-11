// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Nt,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  R,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var Vue = "continue";

function nQr(t, e, n) {
  if (n && e === Vue && t === Vue + "/") return "/";
  if (e.startsWith("/") && t.length === Vue.length + e.length + 1 && t.startsWith(Vue + e)) return t.slice(Vue.length);
  return t
}
class o {
  lastResult = null;
  listeners = new Set;
  inFlight = null
}
var l = new Nt(() => new o);

function i() {
  return l.of(j())
}

function wEn(t) {
  let e = i();
  e.lastResult = t;
  for (let n of e.listeners) n(t)
}

function rQr() {
  return i().inFlight
}

function Jnr(t) {
  i().inFlight = t
}

function oQr() {
  wEn(null), i().inFlight = null
}

function Qnr() {
  let [t, e] = g(() => i().lastResult);
  return R(() => {
    let n = i();
    return e(n.lastResult), n.listeners.add(e), () => {
      n.listeners.delete(e)
    }
  }, []), t
}
export {
  Vue,
  nQr,
  wEn,
  rQr,
  Jnr,
  oQr,
  Qnr
};
