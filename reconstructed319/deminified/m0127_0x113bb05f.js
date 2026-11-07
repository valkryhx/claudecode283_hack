// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { $o } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { hp, wk, i0 } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { be } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var uV = ["userSettings", "flagSettings", "policySettings"];
function SRe(e) {
  let r = new Set($o()),
    n = Mbe(e),
    options,
    mcpServers;
  for (let i of uV) {
    if (!r.has(i)) continue;
    let u = be(i)?.pluginConfigs;
    for (let c of n) {
      let o = u?.[c];
      if (o?.options) options = {
        ...options,
        ...o.options
      };
      if (o?.mcpServers) {
        mcpServers = mcpServers ?? {};
        for (let [g, f] of Object.entries(o.mcpServers)) mcpServers[g] = {
          ...mcpServers[g],
          ...f
        };
      }
    }
  }
  return {
    options: options,
    mcpServers: mcpServers
  };
}
function Mbe(e) {
  let r = l.get(e);
  if (r !== void 0) return [r, e];
  let n = i0(e);
  if (n.length > 0) return [...n.toReversed(), e];
  let t = `@${hp}`,
    s = e.endsWith(t) ? e.slice(0, -t.length) : "";
  return s !== "" && !s.includes("@") ? [s, e] : [e];
}
var l = he(new Map(), e => {
  e.clear();
});
function qxs(e) {
  l.clear();
  for (let [r, n] of e) l.set(r, n);
}
function RPr(e) {
  let r = new Set($o()),
    n;
  for (let t of uV) {
    if (!r.has(t)) continue;
    let s = Vee(be(t)?.enabledPlugins, e);
    if (s !== void 0) n = s;
  }
  return n;
}
function hon(e, r) {
  let written = wk(r),
    t = i0(written);
  if (t.length === 0) return {
    deciding: r,
    written: r,
    replaced: []
  };
  let replaced = t.filter(item => e?.[item] !== void 0);
  return {
    deciding: e?.[written] === void 0 ? replaced[0] ?? written : written,
    written: written,
    replaced: replaced
  };
}
function Vee(e, r) {
  let n = wk(r);
  return [n, ...i0(n), r].map(item => e?.[item]).find(item => item !== void 0);
}
export { uV, SRe, Mbe, qxs, RPr, hon, Vee };