// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ye
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ote
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  Vf
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  cdt,
  wlr,
  bct,
  ki,
  rZ,
  Uh
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  qr,
  QCe
} from "B:/~BUN/root/chunk-vmp6vbba.js";
import {
  Gf
} from "B:/~BUN/root/chunk-zstr1969.js";
import {
  agt,
  S2e,
  crn
} from "B:/~BUN/root/chunk-rc0vwsyy.js";
import {
  xB,
  RP,
  _qt,
  jOe,
  ver
} from "B:/~BUN/root/chunk-7e6w46ha.js";
async function e$(r) {
  let n = performance.now(),
    o = !1,
    e, a = jOe(),
    i = !1;
  if (ver()) t("[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)"), e = performance.now(), await RP(), o = !0, i = !0;
  else if (!a && !S2e());
  else if (r.hasDynamicMcpConfig || !r.pluginStateReliable || ye() || await m(r.storageV5)) {
    if (a) t("[mcp-policy-cold-start] waiting on remote managed-settings load"), e = performance.now(), await xB(), o = !0;
    i = !0
  } else t("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible");
  if (e !== void 0 && QCe("mcp_policy_settings_wait_ms") === void 0) {
    let s = performance.now() - e,
      c = _qt();
    qr("mcp_policy_settings_wait_ms", s, e);
    let d = c ? "timed_out" : jOe() || ver() ? "load_failed" : "ok";
    V(d === "ok" ? "info" : "warn", "mcp_policy_settings_wait", {
      waited_ms: Math.round(s),
      timed_out: c,
      outcome: d,
      ...Ote() && {
        stored_copy: "not_read"
      }
    })
  }
  if (agt("settings", () => !o ? "not_awaited" : _qt() ? "timed_out" : "completed", {
      since: o ? n : void 0
    }), i && S2e()) {
    if (t("[mcp-policy-cold-start] waiting on the policy-limits verdict (compliance taints feed config ${VAR} expansion)"), await crn() === "timed_out") t("[mcp-policy-cold-start] policy-limits verdict did not land within the cold-start budget; loading MCP configs without it")
  }
}
async function m(r) {
  for (let n of rZ)
    if (Object.keys(Uh(n, {
        expandVars: !1
      }).servers).length > 0) return !0;
  if (bct()) return !0;
  try {
    for (let {
        record: e
      }
      of wlr(cdt()))
      for (let [a, i] of Object.entries(e ?? {}))
        if ((i === !0 || Array.isArray(i)) && !Gf(a)) return !0;
    let {
      enabled: n,
      errors: o
    } = await ki(r);
    if (o.length > 0) return !0;
    for (let e of n)
      if (!e.isBuiltin || e.mcpServers !== void 0 && Object.keys(e.mcpServers).length > 0) return !0
  } catch {
    return !0
  }
  return Vf()
}
export {
  e$
};
