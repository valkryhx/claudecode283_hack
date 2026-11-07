// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { hf } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { $y } from "B:/~BUN/root/chunk-vy3btdd1.js";
import { G2e } from "B:/~BUN/root/chunk-1ppr2tqn.js";
import { Tc } from "B:/~BUN/root/chunk-3xdsa4p8.js";
function VZn(o) {
  if (!o || Object.keys(o).length === 0) return !1;
  for (let n of Tc) {
    let e = o[n];
    if (!e || e.length === 0) continue;
    for (let r of e) if ((r.hooks?.length ?? 0) > 0) return !0;
  }
  return !1;
}
function Bii(o, n, e, r, m = !1, personal = !1, checkout = !1, p) {
  if (!e || Object.keys(e).length === 0) return;
  G2e(e, p);
  let s = 0;
  for (let i of Tc) {
    let f = e[i];
    if (!f || f.length === 0) continue;
    let a = i;
    if (m && i === "Stop") a = "SubagentStop", t(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`);
    for (let c of f) {
      let S = c.matcher ?? "",
        hooks = c.hooks;
      if (!hooks || hooks.length === 0) continue;
      for (let h of hooks) o.add(n, a, S, h, {
        personal: personal,
        checkout: checkout
      }), s++;
    }
  }
  if (s > 0) t(`Registered ${s} frontmatter hook(s) from ${r} for session ${n}`);
}
function TCt(o) {
  return $y() && o !== void 0 && hf.has(o);
}
export { VZn, Bii, TCt };