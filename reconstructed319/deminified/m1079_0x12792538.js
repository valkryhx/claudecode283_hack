// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bP, Ck } from "B:/~BUN/root/chunk-game8aqv.js";
import { $o, Kt, LA } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Sg, ML, ip } from "B:/~BUN/root/chunk-esnm3r09.js";
import { gh } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { m5 } from "B:/~BUN/root/chunk-fjzk7kwf.js";
import { Ym, be, Ga } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { zxt, dEi, zro, zE, eR, Uh, cg } from "B:/~BUN/root/chunk-27h4st9h.js";
import { $ho, Itn } from "B:/~BUN/root/chunk-tdekz3md.js";
var p = zro.filter(item => item !== "userSettings"),
  i = {
    projectSettings: ".claude/settings.json",
    localSettings: ".claude/settings.local.json"
  };
function _st(e) {
  if ($ho()) return !1;
  if (Itn()) return !0;
  let o = LA.filter(item => !Kt(item)).map(item => i[item]);
  return (e ?? H2t()).some(item => !o.includes(item));
}
function H2t(e = $Gr()) {
  let o = [...e];
  if (l("project")) o.push(".mcp.json");
  if (l("local")) o.push(`${gh()} (local-scope MCP servers for this project)`);
  return o;
}
function c(e, o) {
  if (ML()) return !1;
  let r = o?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, a]) => {
    if (Object.hasOwn(r, t)) return !1;
    let source = a.source;
    if (source.source === "url") return !!source.headersHelper && /^https:\/\//i.test(source.url) && ip(source) && !u(t, source.url);
    if (source.source === "settings") return ip(source) && !f(t) && source.plugins.some(item => !!item.headersHelper && typeof item.source === "object" && item.source.source === "archive" && !Sg(`${item.name}@${t}`));
    return !1;
  });
}
function u(e, url) {
  let r = $o();
  if (p.some(item => r.includes(item) && Object.hasOwn(be(item)?.extraKnownMarketplaces ?? {}, e))) return !0;
  return dEi({
    source: "url",
    url: url
  }, e) !== void 0;
}
function f(e) {
  return Object.hasOwn(zE(), e);
}
function l(e) {
  if (Ck() || cg()) return !1;
  let {
    servers: servers
  } = Uh(e, {
    expandVars: !1
  });
  return Object.entries(servers).some(([r, t]) => "headersHelper" in t && !!t.headersHelper && !(e === "project" && zxt(r) === "rejected") && (m5(t.url) || eR(r, t)));
}
function $Gr() {
  if (bP()) return [];
  let e = [];
  if (!Ym() && c(Ga("projectSettings"), be("localSettings"))) e.push(i.projectSettings);
  if (c(Ga("localSettings"))) e.push(i.localSettings);
  return e;
}
export { _st, H2t, $Gr };