// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { sT, OC } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { fs } from "B:/~BUN/root/chunk-290k5gh5.js";
import { la } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { mC, he } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { IGe, Dho, Fvr, _k, zW, wp, m_ } from "B:/~BUN/root/chunk-3jyp964r.js";
import { vf, WT, Ep } from "B:/~BUN/root/chunk-384x2wn9.js";
import { e0r, mDt } from "B:/~BUN/root/chunk-d36ctpgs.js";
var a = Fvr.filter(item => item !== "userSettings");
function LPe(e) {
  if (e0r()) return !1;
  if (mDt()) return !0;
  return (e ?? MSn()).length > 0;
}
function MSn(e = DSn()) {
  let r = [...e];
  if (i("project")) r.push(".mcp.json");
  if (i("local")) r.push(`${la()} (local-scope MCP servers for this project)`);
  return r;
}
function c(e, r) {
  if (WT()) return !1;
  let o = r?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, l]) => {
    if (Object.hasOwn(o, t)) return !1;
    let source = l.source;
    if (source.source === "url") return !!source.headersHelper && /^https:\/\//i.test(source.url) && Ep(source) && !u(t, source.url);
    if (source.source === "settings") return Ep(source) && !p(t) && source.plugins.some(item => !!item.headersHelper && typeof item.source === "object" && item.source.source === "archive" && !vf(`${item.name}@${t}`));
    return !1;
  });
}
function u(e, url) {
  let o = fs();
  if (a.some(item => o.includes(item) && Object.hasOwn(he(item)?.extraKnownMarketplaces ?? {}, e))) return !0;
  return Dho({
    source: "url",
    url: url
  }, e) !== void 0;
}
function p(e) {
  return Object.hasOwn(_k(), e);
}
function i(e) {
  if (OC() || m_()) return !1;
  let {
    servers: servers
  } = wp(e, {
    expandVars: !1
  });
  return Object.entries(servers).some(([o, t]) => "headersHelper" in t && !!t.headersHelper && !(e === "project" && IGe(o) === "rejected") && zW(o, t));
}
function DSn() {
  if (sT()) return [];
  let e = fs(),
    r = e.includes("localSettings") ? he("localSettings") : null,
    o = [];
  if (e.includes("projectSettings") && !mC() && c(he("projectSettings"), r)) o.push(".claude/settings.json");
  if (c(r)) o.push(".claude/settings.local.json");
  return o;
}
export { LPe, MSn, DSn };