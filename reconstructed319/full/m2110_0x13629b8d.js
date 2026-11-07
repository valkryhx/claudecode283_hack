// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Bs
} from "B:/~BUN/root/chunk-gvasf6q6.js";
import {
  KD,
  ha
} from "B:/~BUN/root/chunk-q2rjek8y.js";
async function mpn(n, i) {
  if (await KD() === Bs) return {
    cleared: !1,
    reason: "credential_store_failed"
  };
  let c = import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpAuthModule(),
    t = new Set,
    e = {
      cleared: !0
    };
  for (let r of i) {
    if (r.type !== "http" && r.type !== "sse") continue;
    let a = ha(n, r);
    if (t.has(a)) continue;
    t.add(a);
    let o = await c.revokeServerTokens(n, r);
    if (!o.cleared && (e.cleared || o.reason === "credential_store_failed")) e = o
  }
  if (!e.cleared && e.reason === "credential_store_failed") return e;
  let s = await KD();
  if (s === Bs || [...t].some((r) => s?.mcpOAuth?.[r] !== void 0)) return {
    cleared: !1,
    reason: "credential_store_failed"
  };
  return e
}
export {
  mpn
};
