// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  Myt
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  Gt
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Rw,
  nR,
  m4
} from "B:/~BUN/root/chunk-h9p45fg5.js";
import {
  o,
  M,
  T,
  u,
  _t
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var Sqe = f(() => _t({
    name: o().optional()
  })),
  C = f(() => u({
    results: T(Sqe()),
    opt_in_required: M().optional(),
    message: o().nullish()
  }));

function hRe(e) {
  return !Array.isArray(e) && e.opt_in_required === !0
}
class T_e extends Error {
  constructor(e) {
    super(e);
    this.name = "ConnectorRegistryUnavailableError"
  }
}
var y = 15000,
  h = "/api/oauth/organizations/:orgUUID/mcp/connectors/search",
  S = "/api/oauth/organizations/:orgUUID/mcp/connectors/suggest",
  R = "/api/oauth/organizations/:orgUUID/mcp/connectors/list";
async function l(e, n, r, a) {
  let i = await Gt.post(e, n, {
    auth: "teleport-org",
    timeout: y,
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
  let s = C().safeParse(i.data);
  if (!s.success) throw Error("malformed connector response");
  if (s.data.opt_in_required) return {
    opt_in_required: !0,
    message: s.data.message ?? "Enable connector suggestions in your Claude settings to use this."
  };
  return s.data.results
}

function _(e) {
  if (Rw("allow_connector_suggest")) return;
  let n = nR("allow_connector_suggest"),
    r = e === "search" ? "Connector search" : "Connector lookup";
  throw m(e === "search" ? "connector_suggest_search" : "connector_suggest_lookup", n === "org_denied" ? "policy_denied" : n === "unregistered" ? "policy_mirror_unregistered" : n === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), new T_e(m4("allow_connector_suggest", r, "is") ?? `${r} is unavailable right now; please try again.`)
}
async function _7o(e, n, r) {
  _("search");
  let a = await l(h, {
    keywords: e,
    include_custom: !0
  }, n, r);
  if (!hRe(a)) g("connector_suggest_search");
  return a
}
async function b7o(e, n, r) {
  _("lookup");
  let a = await l(S, {
    uuids: e
  }, n, r);
  if (!hRe(a)) g("connector_suggest_lookup");
  return a
}

function vEn(e, n, r) {
  let a = Myt.peek(r)?.read?.(),
    i = new Set;
  for (let s of n) {
    if (s.type === "disabled") continue;
    let c = s.config,
      p = ("headers" in c ? c.headers?.["X-MCP-Server-ID"] : void 0) ?? a?.[s.name];
    if (p) i.add(p.toLowerCase())
  }
  return e.map((s) => {
    let c = typeof s.installedServerId === "string" ? s.installedServerId : void 0;
    return {
      ...s,
      enabledInChat: c !== void 0 && i.has(c.toLowerCase())
    }
  })
}
async function S7o(e, n) {
  let r = await l(R, {}, e, n);
  if (!hRe(r)) g("connector_suggest_list");
  return r
}

function Trt(e, n) {
  t(`[connector-suggest] ${e} failed: ${d(n)}`, {
    level: "error"
  }), m(e === "search" ? "connector_suggest_search" : e === "lookup" ? "connector_suggest_lookup" : "connector_suggest_list", "fetch_failed")
}
export {
  Sqe,
  hRe,
  T_e,
  _7o,
  b7o,
  vEn,
  S7o,
  Trt
};
