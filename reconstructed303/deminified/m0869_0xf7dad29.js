// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ult, F_s, lSr, Vw, gU, Ef, ty } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { iP, Mw } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Wo } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { wy } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Xy, me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Qf, gO, zc } from "B:/~BUN/root/chunk-472kxa0t.js";
import { kCo, lon } from "B:/~BUN/root/chunk-c44qc88s.js";
var a = lSr.filter(item => item !== "userSettings");
function XVe(e) {
  if (kCo()) return !1;
  if (lon()) return !0;
  return (e ?? lkt()).length > 0;
}
function lkt(e = _rr()) {
  let r = [...e];
  if (i("project")) r.push(".mcp.json");
  if (i("local")) r.push(`${wy()} (local-scope MCP servers for this project)`);
  return r;
}
function c(e, r) {
  if (gO()) return !1;
  let o = r?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, l]) => {
    if (Object.hasOwn(o, t)) return !1;
    let source = l.source;
    if (source.source === "url") return !!source.headersHelper && /^https:\/\//i.test(source.url) && zc(source) && !u(t, source.url);
    if (source.source === "settings") return zc(source) && !p(t) && source.plugins.some(item => !!item.headersHelper && typeof item.source === "object" && item.source.source === "archive" && !Qf(`${item.name}@${t}`));
    return !1;
  });
}
function u(e, url) {
  let o = Wo();
  if (a.some(item => o.includes(item) && Object.hasOwn(me(item)?.extraKnownMarketplaces ?? {}, e))) return !0;
  return F_s({
    source: "url",
    url: url
  }, e) !== void 0;
}
function p(e) {
  return Object.hasOwn(Vw(), e);
}
function i(e) {
  if (Mw() || ty()) return !1;
  let {
    servers: servers
  } = Ef(e, {
    expandVars: !1
  });
  return Object.entries(servers).some(([o, t]) => "headersHelper" in t && !!t.headersHelper && !(e === "project" && ult(o) === "rejected") && gU(o, t));
}
function _rr() {
  if (iP()) return [];
  let e = Wo(),
    r = e.includes("localSettings") ? me("localSettings") : null,
    o = [];
  if (e.includes("projectSettings") && !Xy() && c(me("projectSettings"), r)) o.push(".claude/settings.json");
  if (c(r)) o.push(".claude/settings.local.json");
  return o;
}
export { XVe, lkt, _rr };