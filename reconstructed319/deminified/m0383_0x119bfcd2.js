// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { to, Dd } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { zZ as maxWaitMs_2 } from "B:/~BUN/root/chunk-nk52yc3v.js";
import { Da } from "B:/~BUN/root/chunk-tc6a3318.js";
function QQt(o, e) {
  if (o.type !== "pending") return !1;
  let n = to(o.name);
  return !e.some(item => Dd(item, o.name, n));
}
async function ZQt(o, e, n) {
  let {
      maxWaitMs: maxWaitMs,
      until: until
    } = n,
    i = r => r.clients.some(item => e(item, r));
  if (!i(o())) return;
  let c = Date.now() + maxWaitMs;
  while (Date.now() < c) {
    await J(50);
    let r = o();
    if (until?.(r) || !i(r)) return;
  }
}
function Sys(o) {
  return o.some(V0e);
}
function V0e(o) {
  return "role" in o.config && o.config.role === "comms";
}
function _0t(o) {
  return o.mcpInfo?.role === "comms";
}
function K0e(o) {
  if (Da()) return o.filter(item => !_0t(item));
  return o;
}
async function Ipt(o) {
  if (!Da()) return;
  await ZQt(o, (e, n) => QQt(e, n.tools) && !V0e(e), {
    maxWaitMs: maxWaitMs_2
  });
}
export { QQt, ZQt, Sys, V0e, _0t, K0e, Ipt };