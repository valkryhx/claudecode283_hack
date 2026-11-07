// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  jt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  bk,
  OO,
  MJ
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  JUt
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  o,
  I,
  C,
  u,
  xt
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var Vst = p(() => xt({
    name: o().optional()
  })),
  y = p(() => u({
    results: C(Vst()),
    opt_in_required: I().optional(),
    message: o().nullish()
  }));

function eBe(e) {
  return !Array.isArray(e) && e.opt_in_required === !0
}
class pOe extends Error {
  constructor(e) {
    super(e);
    this.name = "ConnectorRegistryUnavailableError"
  }
}
var h = 15000,
  S = "/api/oauth/organizations/:orgUUID/mcp/connectors/search",
  R = "/api/oauth/organizations/:orgUUID/mcp/connectors/suggest",
  w = "/api/oauth/organizations/:orgUUID/mcp/connectors/list";
async function l(e, n, r, a) {
  let i = await jt.post(e, n, {
    auth: "teleport-org",
    timeout: h,
    signal: r,
    credentials: a
  });
  if (!i.ok) throw Error(i.reason === "no-auth" ? "Not authenticated with a claude.ai account." : `connector route unavailable: ${i.reason}`);
  if (i.status >= 400) {
    let c = u({
      error: u({
        type: o(),
        message: o()
      })
    }).safeParse(i.data);
    throw Error(c.success ? `connector route ${i.status} ${c.data.error.type}: ${c.data.error.message}` : `connector route ${i.status}`)
  }
  let s = y().safeParse(i.data);
  if (!s.success) throw Error("malformed connector response");
  if (s.data.opt_in_required) return {
    opt_in_required: !0,
    message: s.data.message ?? "Enable connector suggestions in your Claude settings to use this."
  };
  return s.data.results
}

function _(e) {
  if (bk("allow_connector_suggest")) return;
  let n = OO("allow_connector_suggest"),
    r = e === "search" ? "Connector search" : "Connector lookup";
  throw m(e === "search" ? "connector_suggest_search" : "connector_suggest_lookup", n === "org_denied" ? "policy_denied" : n === "unregistered" ? "policy_mirror_unregistered" : n === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), new pOe(MJ("allow_connector_suggest", r, "is") ?? `${r} is unavailable right now; please try again.`)
}
async function Mei(e, n, r) {
  _("search");
  let a = await l(S, {
    keywords: e,
    include_custom: !0
  }, n, r);
  if (!eBe(a)) g("connector_suggest_search");
  return a
}
async function Dei(e, n, r) {
  _("lookup");
  let a = await l(R, {
    uuids: e
  }, n, r);
  if (!eBe(a)) g("connector_suggest_lookup");
  return a
}

function sJn(e, n, r) {
  let a = JUt.peek(r)?.read?.(),
    i = new Set;
  for (let s of n) {
    if (s.type === "disabled") continue;
    let c = s.config,
      f = ("headers" in c ? c.headers?.["X-MCP-Server-ID"] : void 0) ?? a?.[s.name];
    if (f) i.add(f.toLowerCase())
  }
  return e.map((s) => {
    let c = typeof s.installedServerId === "string" ? s.installedServerId : void 0;
    return {
      ...s,
      enabledInChat: c !== void 0 && i.has(c.toLowerCase())
    }
  })
}
async function Lei(e, n) {
  let r = await l(w, {}, e, n);
  if (!eBe(r)) g("connector_suggest_list");
  return r
}

function uTt(e, n) {
  t(`[connector-suggest] ${e} failed: ${d(n)}`, {
    level: "error"
  }), m(e === "search" ? "connector_suggest_search" : e === "lookup" ? "connector_suggest_lookup" : "connector_suggest_list", "fetch_failed")
}
export {
  Vst,
  eBe,
  pOe,
  Mei,
  Dei,
  sJn,
  Lei,
  uTt
};
