// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { g, c, Lr, Ls } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Qd } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { dr, Gvo, Vvo, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
import { CJ } from "B:/~BUN/root/chunk-grwykqvw.js";
import { Z1, l_t } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { s9, Edt, d2, FQ, gF, Ex, jo } from "B:/~BUN/root/chunk-27h4st9h.js";
import { L6n } from "B:/~BUN/root/chunk-j7mptrzh.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
var k = "tengu_fluttering_rose";
function C() {
  return v(k, !1) === !0;
}
var zLo = new Set(["id_jag_with_auto_connect", "auto_connect", "auth_allows_auto_connect"]);
async function I6n(n, r, e, s) {
  if (!C() || e.type !== "sse" && e.type !== "http" || !(await L6n(n, r, e))) return;
  let t = bt(),
    a = l_t(r, {
      ...e,
      redialToRelearnRegistration: void 0
    }, await Z1()) ? t.claudeAiConfigsFetch : null,
    {
      listed: listed,
      connectorNames: connectorNames,
      connectors: connectors
    } = D6n(a === null ? {} : await a, e),
    i;
  switch (e.scope) {
    case "local":
    case "user":
    case "project":
      i = {
        kind: "register-app",
        fixer: "you"
      };
      break;
    case "enterprise":
    case "managed":
      i = {
        kind: "register-app",
        fixer: "administrator"
      };
      break;
    case "dynamic":
    case "agent":
    case "claudeai":
      i = {
        kind: "register-app",
        fixer: Qd(e) ? "plugin-author" : "configurer"
      };
      break;
  }
  let [o] = connectors;
  if (connectors.some(item => item.ineligibleReason === "connected")) i = {
    kind: "connected",
    connectorNames: connectorNames
  };else if (connectors.some(item => zLo.has(item.ineligibleReason ?? ""))) i = {
    kind: "organization-connects"
  };else if (o !== void 0) i = {
    kind: "connect",
    connectorNames: connectorNames,
    url: (connectors.length === 1 && o.ineligibleReason ? FQ(o) : null) ?? d2()
  };else if (!listed && a !== null && t.claudeAiConnectorListSettledSeq === t.claudeAiConnectorListFetchSeq) {
    if (t.officialUrls === void 0 && (s === "mcp_login" || t.officialUrlsFetchAwaitsLookup)) await Gvo();
    await t.officialUrlsFetch;
    let u = CJ(e);
    if (u !== void 0 && Vvo(u)) switch (dr()) {
      case "pro":
      case "max":
        i = {
          kind: "connect",
          url: d2(),
          connectorNames: connectorNames
        };
        break;
      case "team":
      case "enterprise":
        i = {
          kind: "ask-admin"
        };
        break;
      case null:
        break;
    }
  }
  let h = {
    advice: f(i.kind),
    site: f(s)
  };
  switch (i.kind) {
    case "connected":
    case "connect":
    case "organization-connects":
      await Lr("mcp_registration_advice", h);
      break;
    case "ask-admin":
    case "register-app":
      await Ls("mcp_registration_advice", "no_route_known", h);
      break;
  }
  return i;
}
async function M6n(n, r, {
  storageV5: storageV5,
  credentials: credentials
}) {
  let t = bt();
  if (t.claudeAiConnectorListStatus !== "settled") return m("list_unavailable", r);
  let claudeAiConfigsFetch = t.claudeAiConfigsFetch;
  Edt();
  let {
    connectorNames: connectorNames_2,
    connectors: connectors_2
  } = D6n(await s9(credentials), n);
  if (t.claudeAiConnectorListSettledSeq !== t.claudeAiConnectorListFetchSeq) return t.claudeAiConfigsFetch ??= claudeAiConfigsFetch, m("list_unavailable", r);
  let l = connectors_2.some(item => item.ineligibleReason === "connected");
  if (!l && connectors_2.every(item => item.eligible === !1)) return m("not_connected", r);
  let i = import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule();
  for (let o of connectorNames_2) await i.removeMcpAuthCacheEntry(o, storageV5);
  return m(l ? "connected" : "state_unknown", r);
}
function ppn(n) {
  switch (n.kind) {
    case "connected":
      return "This service doesn't accept sign-ins from Claude Code. It's already connected through your claude.ai account, and its tools load as a claude.ai connector. If they're missing, restart Claude Code.";
    case "connect":
      return "This service doesn't accept sign-ins from Claude Code. Connect it on claude.ai to use it here.";
    case "organization-connects":
      return "This service doesn't accept sign-ins from Claude Code. Your organization connects it for you on claude.ai. If its tools are missing, ask your admin.";
    case "ask-admin":
      return "This service doesn't accept sign-ins from Claude Code. No claude.ai connector for it is available to you. Your organization's Owner or admin can add one or give you access.";
    case "register-app":
      switch (n.fixer) {
        case "you":
          return "This service doesn't accept sign-ins from Claude Code. To fix that, register an app with the service (redirect URL http://localhost:<port>/callback), then remove this server and add it again with the same options plus --client-id <id>, --callback-port <port> and, if the service issues a secret, --client-secret.";
        case "plugin-author":
          return "This service doesn't accept sign-ins from Claude Code. The plugin's author can fix that by registering an app with the service.";
        case "administrator":
          return "This service doesn't accept sign-ins from Claude Code. Your administrator can fix that by registering an app with the service.";
        case "configurer":
          return "This service doesn't accept sign-ins from Claude Code. Whoever configured this server can fix that by registering an app with the service.";
      }
  }
}
function m(n, r) {
  let e = {
    waited_ms: Date.now() - r
  };
  switch (n) {
    case "connected":
    case "not_connected":
      g("mcp_claudeai_handoff", {
        ...e,
        outcome: f(n)
      });
      break;
    case "state_unknown":
    case "list_unavailable":
      c("mcp_claudeai_handoff", n, e);
      break;
  }
  return n;
}
function D6n(n, r) {
  let e = gF(r),
    s = Ro(n, a => e !== null && gF(a) === e),
    t = Ro(Ex(s).allowed, (a, p) => !jo(p));
  return {
    listed: Object.keys(s).length > 0,
    connectorNames: Object.keys(t),
    connectors: Object.values(t).flatMap(item => item.type === "claudeai-proxy" ? [item] : [])
  };
}
export { zLo, I6n, M6n, ppn, D6n };