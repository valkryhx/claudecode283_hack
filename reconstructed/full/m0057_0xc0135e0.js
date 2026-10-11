// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  we,
  hm,
  VI,
  wBe
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  xn
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  AsyncLocalStorage as n
} from "async_hooks";
var e = new n;

function Xx(t, r) {
  return e.run({
    cwd: xn(t)
  }, r)
}

function v_e(t, r) {
  return Xx(t ?? oe(), r)
}

function wde() {
  return e.getStore() !== void 0
}

function i1t(t) {
  let r = e.getStore();
  if (r) r.cwd = xn(t);
  else wBe(t)
}

function a1t() {
  return e.getStore()?.cwd ?? VI()
}

function pg() {
  if (e.getStore()?.cwd === void 0 && hm() === null) return null;
  return oe()
}

function oe() {
  try {
    return a1t()
  } catch {
    return we()
  }
}
export {
  Xx,
  v_e,
  wde,
  i1t,
  a1t,
  pg,
  oe
};
