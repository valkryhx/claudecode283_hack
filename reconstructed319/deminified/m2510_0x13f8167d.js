// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { j5t, sOt, iOt, W5t } from "B:/~BUN/root/chunk-27h4st9h.js";
function h(e, o) {
  let p = iOt(e),
    s = Math.min(p.length, j5t());
  return 2 + W5t(e, o).length + 2 + s + 1;
}
function yGt(e, o, p) {
  let s = new Map();
  for (let n of e) {
    if (n.type !== "prompt" || n.disableModelInvocation) continue;
    let t = n.pluginInfo?.pluginManifest.name;
    if (!t) continue;
    let chars = h(n, e),
      r = s.get(t) ?? [];
    r.push({
      name: n.name,
      chars: chars,
      approxTokens: Math.round(chars / o)
    }), s.set(t, r);
  }
  let byPlugin = [...s.entries()].map(([pluginName, skills]) => {
      skills.sort((itemA, itemB) => itemB.chars - itemA.chars);
      let chars_2 = skills.reduce((acc, item) => acc + item.chars, 0);
      return {
        pluginName: pluginName,
        skillCount: skills.length,
        chars: chars_2,
        approxTokens: Math.round(chars_2 / o),
        skills: skills
      };
    }).sort((itemA, itemB) => itemB.chars - itemA.chars),
    m = byPlugin.reduce((acc, item) => acc + item.chars, 0),
    c = sOt(p, o),
    overBudget = m > c,
    totalChars = overBudget ? c : m;
  return {
    byPlugin: byPlugin,
    totalChars: totalChars,
    totalTokens: Math.round(totalChars / o),
    overBudget: overBudget
  };
}
export { yGt };