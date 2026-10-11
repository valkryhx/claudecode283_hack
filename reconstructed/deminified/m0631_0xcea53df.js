// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Te } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { rf } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ztt, vhr, EMe, Ti, GW, wp } from "B:/~BUN/root/chunk-3jyp964r.js";
import { SI } from "B:/~BUN/root/chunk-gbtzpa3e.js";
import { Vct } from "B:/~BUN/root/chunk-385v01s9.js";
import { Ehe, lGn } from "B:/~BUN/root/chunk-fhmaxxy1.js";
import { $5, M7e, qsr, FWe, JTn } from "B:/~BUN/root/chunk-7r4zb9xn.js";
async function qD(o) {
  let r = performance.now(),
    i = !1,
    e = FWe(),
    n = !1;
  if (JTn()) t("[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)"), await M7e(), i = !0, n = !0;else if (!e && !Ehe()) ;else if (o.hasDynamicMcpConfig || !o.pluginStateReliable || Te() || (await s(o.storageV5))) {
    if (e) t("[mcp-policy-cold-start] waiting on remote managed-settings load"), await $5(), i = !0;
    n = !0;
  } else t("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible");
  if (Vct("settings", () => !i ? "not_awaited" : qsr() ? "timed_out" : "completed", {
    since: i ? r : void 0
  }), n && Ehe()) {
    if (t("[mcp-policy-cold-start] waiting on the policy-limits verdict (compliance taints feed config ${VAR} expansion)"), (await lGn()) === "timed_out") t("[mcp-policy-cold-start] policy-limits verdict did not land within the cold-start budget; loading MCP configs without it");
  }
}
async function s(o) {
  for (let r of GW) if (Object.keys(wp(r, {
    expandVars: !1
  }).servers).length > 0) return !0;
  if (EMe()) return !0;
  try {
    for (let {
      record: record
    } of vhr(Ztt())) for (let [n, a] of Object.entries(record ?? {})) if ((a === !0 || Array.isArray(a)) && !SI(n)) return !0;
    let {
      enabled: enabled,
      errors: errors
    } = await Ti(o);
    if (errors.length > 0) return !0;
    for (let e of enabled) if (!e.isBuiltin || e.mcpServers !== void 0 && Object.keys(e.mcpServers).length > 0) return !0;
  } catch {
    return !0;
  }
  return rf();
}
export { qD };