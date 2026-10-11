// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { urt, EVe, prt } from "B:/~BUN/root/chunk-3jyp964r.js";
function h(s) {
  let o = prt(s),
    a = Math.min(o.length, urt());
  return 2 + s.name.length + 2 + a + 1;
}
function CJe(s, o, a) {
  let p = new Map();
  for (let n of s) {
    if (n.type !== "prompt" || n.disableModelInvocation) continue;
    let t = n.pluginInfo?.pluginManifest.name;
    if (!t) continue;
    let chars = h(n),
      r = p.get(t) ?? [];
    r.push({
      name: n.name,
      chars: chars,
      approxTokens: Math.round(chars / o)
    }), p.set(t, r);
  }
  let byPlugin = [...p.entries()].map(([pluginName, skills]) => {
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
    c = byPlugin.reduce((acc, item) => acc + item.chars, 0),
    i = EVe(a, o),
    overBudget = c > i,
    totalChars = overBudget ? i : c;
  return {
    byPlugin: byPlugin,
    totalChars: totalChars,
    totalTokens: Math.round(totalChars / o),
    overBudget: overBudget,
    budgetTokens: Math.round(i / o)
  };
}
export { CJe };