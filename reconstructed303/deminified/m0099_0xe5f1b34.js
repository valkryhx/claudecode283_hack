// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Wo } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { Tc, Pw, Kx } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { me } from "B:/~BUN/root/chunk-1gpjpba6.js";
var GG = ["userSettings", "flagSettings", "policySettings"];
function ege(t) {
  let i = new Set(Wo()),
    e = ale(t),
    options,
    mcpServers;
  for (let s of GG) {
    if (!i.has(s)) continue;
    let g = me(s)?.pluginConfigs;
    for (let u of e) {
      let o = g?.[u];
      if (o?.options) options = {
        ...options,
        ...o.options
      };
      if (o?.mcpServers) {
        mcpServers = mcpServers ?? {};
        for (let [l, c] of Object.entries(o.mcpServers)) mcpServers[l] = {
          ...mcpServers[l],
          ...c
        };
      }
    }
  }
  return {
    options: options,
    mcpServers: mcpServers
  };
}
function ale(t) {
  let i = Kx(t);
  if (i.length > 0) return [...i.toReversed(), t];
  let e = `@${Tc}`,
    n = t.endsWith(e) ? t.slice(0, -e.length) : "";
  return n !== "" && !n.includes("@") ? [n, t] : [t];
}
function H4n(t) {
  let i = new Set(Wo()),
    e;
  for (let n of GG) {
    if (!i.has(n)) continue;
    let r = W3(me(n)?.enabledPlugins, t);
    if (r !== void 0) e = r;
  }
  return e;
}
function HHt(t, i) {
  let written = Pw(i),
    n = Kx(written);
  if (n.length === 0) return {
    deciding: i,
    written: i,
    replaced: []
  };
  let replaced = n.filter(item => t?.[item] !== void 0);
  return {
    deciding: t?.[written] === void 0 ? replaced[0] ?? written : written,
    written: written,
    replaced: replaced
  };
}
function W3(t, i) {
  let e = Pw(i);
  return [e, ...Kx(e), i].map(item => t?.[item]).find(item => item !== void 0);
}
export { GG, ege, ale, H4n, HHt, W3 };