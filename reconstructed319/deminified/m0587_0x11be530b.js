// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { createHash as g } from "crypto";
function t0n(r) {
  return r.configErrorReason === "url_empty" || !r.configError && "url" in r && r.url.trim() === "";
}
function wys(r) {
  let {
      scope: scope,
      pluginSource: pluginSource,
      pluginPath: pluginPath,
      relayed: relayed,
      pluginEndpointTemplated: pluginEndpointTemplated,
      pluginOfficialSourceVouched: pluginOfficialSourceVouched,
      agentSource: agentSource,
      declaredIn: declaredIn,
      configError: configError,
      configErrorReason: configErrorReason,
      expandedFromEnv: expandedFromEnv,
      configuredCommand: configuredCommand,
      redialToRelearnRegistration: redialToRelearnRegistration,
      ...l
    } = r,
    e = l;
  if (delete e.tools, delete e.discoveryCache, delete e.cachedInitResponse, delete e.cachedDiscoverResponse, delete e.discoverSupport, delete e.eligible, delete e.ineligibleReason, delete e.enterpriseManaged, e.type !== "claudeai-proxy") delete e.displayName;
  if (e.type === "stdio" || e.type === void 0 && "command" in e) e.type = "stdio", e.args = e.args ?? [];
  let a = typeof e.url === "string" && URL.canParse(e.url) ? /^([^?#]*\?)([^#]*)(.*)$/s.exec(e.url) : null;
  if (a) {
    let [, d = "", n = "", o = ""] = a;
    e.url = d + n.split("&").sort((itemA, itemB) => {
      let s = tt(itemA, "="),
        p = tt(itemB, "=");
      return s < p ? -1 : s > p ? 1 : 0;
    }).join("&") + o;
  }
  if (t0n(r)) e.unconfigured = !0;
  if (agentSource !== void 0) e.agentSource = agentSource;
  return _(e, (d, n) => {
    if (n && typeof n === "object" && !Array.isArray(n)) {
      let o = n,
        t = Object.create(null);
      for (let i of Object.keys(o).sort()) t[i] = o[i];
      return t;
    }
    return n;
  });
}
function S1(r) {
  return g("sha256").update(wys(r)).digest("hex").slice(0, 16);
}
function mr(r, c) {
  return `${r}-${S1(c)}`;
}
export { t0n, wys, S1, mr };