// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { cPt, dlt, uPt, pPt } from "B:/~BUN/root/chunk-9grc6xh0.js";
function h(e, o) {
  let p = uPt(e),
    s = Math.min(p.length, cPt());
  return 2 + pPt(e, o).length + 2 + s + 1;
}
function Ywt(e, o, p) {
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
    c = byPlugin.reduce((acc, item) => acc + item.chars, 0),
    i = dlt(p, o),
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
export { Ywt };