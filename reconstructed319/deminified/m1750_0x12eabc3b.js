// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { wT, uj } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { PR } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Tie } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { ECr } from "B:/~BUN/root/chunk-79dw4seg.js";
import { lz } from "B:/~BUN/root/chunk-tdekz3md.js";
import { zGr, U2t, B2t, VGr, KGr, qGr, YGr, XGr } from "B:/~BUN/root/chunk-eth4txve.js";
import { join as i, resolve as f } from "path";
function VUo(o, {
  backstop = !1
} = {}) {
  return o.allowRules.sources.length > 0 || o.additionalDirectories.sources.length > 0 || !backstop && (o.hookSources.length > 0 || o.commandHelperSources.length > 0);
}
function KUo() {
  return {
    allowRules: U2t(),
    additionalDirectories: B2t(),
    hookSources: [],
    commandHelperSources: []
  };
}
function e9n(o) {
  let t = f(o),
    m = uj(t, PR),
    r = wT(i(t, ".claude", "settings.json")).settings,
    c = i(m, ".claude", "settings.local.json"),
    a = i(t, ".claude", "settings.local.json"),
    s = [wT(c).settings, ...(a === c ? [] : [wT(a).settings])].filter(item => item !== null),
    localSettings = s.length === 0 ? null : {
      permissions: {
        additionalDirectories: s.flatMap(item => item.permissions?.additionalDirectories ?? [])
      }
    },
    u = {
      projectSettings: r,
      localSettings: localSettings
    },
    p = {
      sources: [["projectSettings", ".claude/settings.json"], ["localSettings", ".claude/settings.local.json"]],
      read: e => u[e] ?? null,
      rules: e => e === "localSettings" ? s.flatMap(item => lz(item, e)) : lz(u[e] ?? null, e)
    },
    d = e => KGr(e) || qGr(e) || YGr(e) || VGr(e) || XGr(e),
    hookSources = [],
    commandHelperSources = [];
  if (zGr(r)) hookSources.push(".claude/settings.json");
  if (s.some(zGr)) hookSources.push(".claude/settings.local.json");
  let g = ECr(t);
  if (g !== null) hookSources.push(Tie(g));
  if (d(r)) commandHelperSources.push(".claude/settings.json");
  if (s.some(d)) commandHelperSources.push(".claude/settings.local.json");
  return {
    allowRules: U2t(p),
    additionalDirectories: B2t(p),
    hookSources: hookSources,
    commandHelperSources: commandHelperSources
  };
}
export { VUo, KUo, e9n };