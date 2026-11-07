// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  $o
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  hp,
  wk,
  i0
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  be
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
var uV = ["userSettings", "flagSettings", "policySettings"];

function SRe(e) {
  let r = new Set($o()),
    n = Mbe(e),
    t, s;
  for (let i of uV) {
    if (!r.has(i)) continue;
    let u = be(i)?.pluginConfigs;
    for (let c of n) {
      let o = u?.[c];
      if (o?.options) t = {
        ...t,
        ...o.options
      };
      if (o?.mcpServers) {
        s = s ?? {};
        for (let [g, f] of Object.entries(o.mcpServers)) s[g] = {
          ...s[g],
          ...f
        }
      }
    }
  }
  return {
    options: t,
    mcpServers: s
  }
}

function Mbe(e) {
  let r = l.get(e);
  if (r !== void 0) return [r, e];
  let n = i0(e);
  if (n.length > 0) return [...n.toReversed(), e];
  let t = `@${hp}`,
    s = e.endsWith(t) ? e.slice(0, -t.length) : "";
  return s !== "" && !s.includes("@") ? [s, e] : [e]
}
var l = he(new Map, (e) => {
  e.clear()
});

function qxs(e) {
  l.clear();
  for (let [r, n] of e) l.set(r, n)
}

function RPr(e) {
  let r = new Set($o()),
    n;
  for (let t of uV) {
    if (!r.has(t)) continue;
    let s = Vee(be(t)?.enabledPlugins, e);
    if (s !== void 0) n = s
  }
  return n
}

function hon(e, r) {
  let n = wk(r),
    t = i0(n);
  if (t.length === 0) return {
    deciding: r,
    written: r,
    replaced: []
  };
  let s = t.filter((i) => e?.[i] !== void 0);
  return {
    deciding: e?.[n] === void 0 ? s[0] ?? n : n,
    written: n,
    replaced: s
  }
}

function Vee(e, r) {
  let n = wk(r);
  return [n, ...i0(n), r].map((t) => e?.[t]).find((t) => t !== void 0)
}
export {
  uV,
  SRe,
  Mbe,
  qxs,
  RPr,
  hon,
  Vee
};
