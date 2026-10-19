// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Pfe as maxWaitMs_2 } from "B:/~BUN/root/chunk-pp32733x.js";
import { da } from "B:/~BUN/root/chunk-0zewma8k.js";
import { uo, _c } from "B:/~BUN/root/chunk-b0487zs4.js";
function $Cr(o, e) {
  if (o.type !== "pending") return !1;
  let n = uo(o.name);
  return !e.some(item => _c(item, o.name, n));
}
async function UCr(o, e, n) {
  let {
      maxWaitMs: maxWaitMs,
      until: until,
      pollMs = 50
    } = n,
    i = r => r.clients.some(item => e(item, r));
  if (!i(o())) return;
  let p = Date.now() + maxWaitMs;
  while (Date.now() < p) {
    await Y(pollMs);
    let r = o();
    if (until?.(r) || !i(r)) return;
  }
}
function Kwo(o) {
  return o.some(hve);
}
function hve(o) {
  return "role" in o.config && o.config.role === "comms";
}
function $ut(o) {
  return o.mcpInfo?.role === "comms";
}
function Mie(o) {
  if (da()) return o.filter(item => !$ut(item));
  return o;
}
async function o8e(o) {
  if (!da()) return;
  await UCr(o, (e, n) => $Cr(e, n.tools) && !hve(e), {
    maxWaitMs: maxWaitMs_2
  });
}
export { $Cr, UCr, Kwo, hve, $ut, Mie, o8e };