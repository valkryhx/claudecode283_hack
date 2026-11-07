// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Bp } from "B:/~BUN/root/chunk-bvb659eh.js";
import { types as d } from "util";
import { isContext as c } from "vm";
var {
    isProxy: isProxy
  } = d,
  s = c,
  r = typeof Bun > "u" ? void 0 : Bun.ant?.isVmContextGlobal,
  f = Bp(),
  {
    add: add,
    has: has
  } = WeakSet.prototype,
  {
    apply: apply
  } = Reflect,
  weakSet = new WeakSet();
function rYi(t, e) {
  if (e !== void 0 && f && !s(e) && r?.(e) !== !0) throw Error("Refusing to make a node:vm context: this Bun cannot recognize a context's global, so sandbox checks could be bypassed. Run Claude Code's native build, whose runtime can.");
  if (apply(add, weakSet, [t]), e !== void 0) apply(add, weakSet, [e]);
}
function x(t) {
  return apply(has, weakSet, [t]);
}
function pd(t) {
  return isProxy(t) || x(t) || typeof t === "object" && t !== null && (s(t) || r?.(t) === !0);
}
export { rYi, pd };