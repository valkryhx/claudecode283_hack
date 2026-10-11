// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Nt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { Dt } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { z0, Bq, Aye } from "B:/~BUN/root/chunk-4h4gje25.js";
import { o, M, C, u, ut } from "B:/~BUN/root/chunk-n8qdr73v.js";
var OIe = f(() => ut({
    name: o().optional()
  })),
  y = f(() => u({
    results: C(OIe()),
    opt_in_required: M().optional(),
    message: o().nullish()
  }));
function jue(e) {
  return !Array.isArray(e) && e.opt_in_required === !0;
}
class ConnectorRegistryUnavailableError extends Error {
  constructor(e) {
    super(e);
    this.name = "ConnectorRegistryUnavailableError";
  }
}
var timeout = 15000,
  S = "/api/oauth/organizations/:orgUUID/mcp/connectors/search",
  R = "/api/oauth/organizations/:orgUUID/mcp/connectors/suggest",
  w = "/api/oauth/organizations/:orgUUID/mcp/connectors/list";
async function d(e, n, signal, credentials) {
  let i = await Dt.post(e, n, {
    auth: "teleport-org",
    timeout: timeout,
    signal: signal,
    credentials: credentials
  });
  if (!i.ok) throw Error(i.reason === "no-auth" ? "Not authenticated with a claude.ai account." : `connector route unavailable: ${i.reason}`);
  if (i.status >= 400) {
    let c = u({
      error: u({
        type: o(),
        message: o()
      })
    }).safeParse(i.data);
    throw Error(c.success ? `connector route ${i.status} ${c.data.error.type}: ${c.data.error.message}` : `connector route ${i.status}`);
  }
  let s = y().safeParse(i.data);
  if (!s.success) throw Error("malformed connector response");
  if (s.data.opt_in_required) return {
    opt_in_required: !0,
    message: s.data.message ?? "Enable connector suggestions in your Claude settings to use this."
  };
  return s.data.results;
}
function p(e) {
  if (z0("allow_connector_suggest")) return;
  let n = Bq("allow_connector_suggest"),
    r = e === "search" ? "Connector search" : "Connector lookup";
  throw m(e === "search" ? "connector_suggest_search" : "connector_suggest_lookup", n === "org_denied" ? "policy_denied" : n === "unregistered" ? "policy_mirror_unregistered" : n === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), new ConnectorRegistryUnavailableError(Aye("allow_connector_suggest", r, "is") ?? `${r} is unavailable right now; please try again.`);
}
async function LJr(keywords, n, r) {
  p("search");
  let a = await d(S, {
    keywords: keywords,
    include_custom: !0
  }, n, r);
  if (!jue(a)) _("connector_suggest_search");
  return a;
}
async function NJr(uuids, n, r) {
  p("lookup");
  let a = await d(R, {
    uuids: uuids
  }, n, r);
  if (!jue(a)) _("connector_suggest_lookup");
  return a;
}
function vqt(e, n, r) {
  let a = I.peek(r)?.read?.(),
    i = new Set();
  for (let s of n) {
    if (s.type === "disabled") continue;
    let config = s.config,
      g = ("headers" in config ? config.headers?.["X-MCP-Server-ID"] : void 0) ?? a?.[s.name];
    if (g) i.add(g.toLowerCase());
  }
  return e.map(item => {
    let c = typeof item.installedServerId === "string" ? item.installedServerId : void 0;
    return {
      ...item,
      enabledInChat: c !== void 0 && i.has(c.toLowerCase())
    };
  });
}
var I = new Nt(() => ({}));
async function HJr(e, n) {
  let r = await d(w, {}, e, n);
  if (!jue(r)) _("connector_suggest_list");
  return r;
}
function Kje(e, n) {
  t(`[connector-suggest] ${e} failed: ${l(n)}`, {
    level: "error"
  }), m(e === "search" ? "connector_suggest_search" : e === "lookup" ? "connector_suggest_lookup" : "connector_suggest_list", "fetch_failed");
}
export { OIe, jue, ConnectorRegistryUnavailableError as moe, LJr, NJr, vqt, HJr, Kje };