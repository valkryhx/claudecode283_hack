// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  at,
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  P,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
var $Re = "continue";

function Jns(t, e, n) {
  if (n && e === $Re && t === $Re + "/") return "/";
  if (e.startsWith("/") && t.length === $Re.length + e.length + 1 && t.startsWith($Re + e)) return t.slice($Re.length);
  return t
}
class o {
  lastResult = null;
  listeners = new Set;
  inFlight = null
}
var l = new at(() => new o);

function i() {
  return l.of(j())
}

function hlr(t) {
  let e = i();
  e.lastResult = t;
  for (let n of e.listeners) n(t)
}

function Qns() {
  return i().inFlight
}

function FJr(t) {
  i().inFlight = t
}

function Zns() {
  hlr(null), i().inFlight = null
}

function ers() {
  let [t, e] = y(() => i().lastResult);
  return P(() => {
    let n = i();
    return e(n.lastResult), n.listeners.add(e), () => {
      n.listeners.delete(e)
    }
  }, []), t
}
export {
  $Re,
  Jns,
  hlr,
  Qns,
  FJr,
  Zns,
  ers
};
