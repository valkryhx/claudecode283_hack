// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  bP,
  Ck
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  $o,
  Kt,
  LA
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  Sg,
  ML,
  ip
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  gh
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  m5
} from "B:/~BUN/root/chunk-fjzk7kwf.js";
import {
  Ym,
  be,
  Ga
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  zxt,
  dEi,
  zro,
  zE,
  eR,
  Uh,
  cg
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  $ho,
  Itn
} from "B:/~BUN/root/chunk-tdekz3md.js";
var p = zro.filter((e) => e !== "userSettings"),
  i = {
    projectSettings: ".claude/settings.json",
    localSettings: ".claude/settings.local.json"
  };

function _st(e) {
  if ($ho()) return !1;
  if (Itn()) return !0;
  let o = LA.filter((r) => !Kt(r)).map((r) => i[r]);
  return (e ?? H2t()).some((r) => !o.includes(r))
}

function H2t(e = $Gr()) {
  let o = [...e];
  if (l("project")) o.push(".mcp.json");
  if (l("local")) o.push(`${gh()} (local-scope MCP servers for this project)`);
  return o
}

function c(e, o) {
  if (ML()) return !1;
  let r = o?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, a]) => {
    if (Object.hasOwn(r, t)) return !1;
    let s = a.source;
    if (s.source === "url") return !!s.headersHelper && /^https:\/\//i.test(s.url) && ip(s) && !u(t, s.url);
    if (s.source === "settings") return ip(s) && !f(t) && s.plugins.some((n) => !!n.headersHelper && typeof n.source === "object" && n.source.source === "archive" && !Sg(`${n.name}@${t}`));
    return !1
  })
}

function u(e, o) {
  let r = $o();
  if (p.some((t) => r.includes(t) && Object.hasOwn(be(t)?.extraKnownMarketplaces ?? {}, e))) return !0;
  return dEi({
    source: "url",
    url: o
  }, e) !== void 0
}

function f(e) {
  return Object.hasOwn(zE(), e)
}

function l(e) {
  if (Ck() || cg()) return !1;
  let {
    servers: o
  } = Uh(e, {
    expandVars: !1
  });
  return Object.entries(o).some(([r, t]) => ("headersHelper" in t) && !!t.headersHelper && !(e === "project" && zxt(r) === "rejected") && (m5(t.url) || eR(r, t)))
}

function $Gr() {
  if (bP()) return [];
  let e = [];
  if (!Ym() && c(Ga("projectSettings"), be("localSettings"))) e.push(i.projectSettings);
  if (c(Ga("localSettings"))) e.push(i.localSettings);
  return e
}
export {
  _st,
  H2t,
  $Gr
};
