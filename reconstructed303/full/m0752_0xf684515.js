// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  we
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  X
} from "B:/~BUN/root/chunk-yrjpmz6e.js";
import {
  gp
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  DAt,
  Vio,
  h6e,
  Ys,
  S6,
  Ef
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  kr,
  oje
} from "B:/~BUN/root/chunk-t3p4x0tq.js";
import {
  Df
} from "B:/~BUN/root/chunk-h2myanpn.js";
import {
  uXe,
  fIe,
  iMr
} from "B:/~BUN/root/chunk-pbq7kcha.js";
import {
  E1,
  w7,
  kTt,
  NRe,
  Zar
} from "B:/~BUN/root/chunk-hw809fek.js";
async function H$(r) {
  let n = performance.now(),
    i = !1,
    e, a = NRe(),
    o = !1;
  if (Zar()) t("[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)"), e = performance.now(), await w7(), i = !0, o = !0;
  else if (!a && !fIe());
  else if (r.hasDynamicMcpConfig || !r.pluginStateReliable || we() || await d(r.storageV5)) {
    if (a) t("[mcp-policy-cold-start] waiting on remote managed-settings load"), e = performance.now(), await E1(), i = !0;
    o = !0
  } else t("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible");
  if (e !== void 0 && oje("mcp_policy_settings_wait_ms") === void 0) {
    let s = performance.now() - e,
      c = kTt();
    kr("mcp_policy_settings_wait_ms", s, e), X(c ? "warn" : "info", "mcp_policy_settings_wait", {
      waited_ms: Math.round(s),
      timed_out: c
    })
  }
  if (uXe("settings", () => !i ? "not_awaited" : kTt() ? "timed_out" : "completed", {
      since: i ? n : void 0
    }), o && fIe()) {
    if (t("[mcp-policy-cold-start] waiting on the policy-limits verdict (compliance taints feed config ${VAR} expansion)"), await iMr() === "timed_out") t("[mcp-policy-cold-start] policy-limits verdict did not land within the cold-start budget; loading MCP configs without it")
  }
}
async function d(r) {
  for (let n of S6)
    if (Object.keys(Ef(n, {
        expandVars: !1
      }).servers).length > 0) return !0;
  if (h6e()) return !0;
  try {
    for (let {
        record: e
      }
      of Vio(DAt()))
      for (let [a, o] of Object.entries(e ?? {}))
        if ((o === !0 || Array.isArray(o)) && !Df(a)) return !0;
    let {
      enabled: n,
      errors: i
    } = await Ys(r);
    if (i.length > 0) return !0;
    for (let e of n)
      if (!e.isBuiltin || e.mcpServers !== void 0 && Object.keys(e.mcpServers).length > 0) return !0
  } catch {
    return !0
  }
  return gp()
}
export {
  H$
};
