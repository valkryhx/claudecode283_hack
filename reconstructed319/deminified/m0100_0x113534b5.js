// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { gme } from "B:/~BUN/root/chunk-tr26qctc.js";
var iVn = `

This is how Claude Code surfaces a prompt a plugin submits between ` + "turns \u2014 it starts this turn in the user's place. Address the message above.",
  j1s = t => "The " + t + ` plugin sent a message:
`,
  wPo = t => `Prompt from the ${t} plugin`,
  m = t => typeof t === "object" && t !== null && "text" in t && typeof t.text === "string" && t.text !== "",
  _ = t => t.length > 28 && t.startsWith("The ") && t.endsWith(` plugin sent a message:
`);
function Kdn(t, n) {
  let r = t.slice(0, t.indexOf(`
`) + 1);
  return m(n) && _(r) && t === r + n.text + iVn ? {
    label: r.slice(4, -24),
    text: n.text
  } : void 0;
}
function l(t, n, r) {
  let s = Kdn(t, n);
  if (s === void 0) return t;
  return `${wPo(s.label)}${r}${s.text}`;
}
var Zte = (t, n) => l(t, n, ": "),
  W1s = (t, n) => l(t, n, `
`);
var z1s = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/,
  f = /<command-name>(.*?)<\/command-name>/;
function YSt(t, n, r = "stored") {
  if (t.type !== "user") return;
  if (t.isMeta === !0 || t.isCompactSummary === !0) return;
  let s = t.message;
  if (!s) return;
  let content = s.content,
    u = r === "shown" && typeof content === "string" ? Zte(content, t.pluginPrompt) : content,
    c = u !== content,
    p = [];
  if (typeof u === "string") p.push(u);else if (Array.isArray(content)) for (let e of content) {
    if (!e || typeof e !== "object") continue;
    if (e.type === "tool_result") return;
    if (e.type === "text" && typeof e.text === "string") p.push(e.text);
  }
  for (let e of p) {
    let o = gme(e).replaceAll(`
`, " ").trim();
    if (!o) continue;
    let a = c ? null : f.exec(o);
    if (a) {
      if (!n.commandFallback) n.commandFallback = a[1];
      continue;
    }
    let g = c ? null : /<bash-input>([\s\S]*?)<\/bash-input>/.exec(o);
    if (g) return `! ${g[1].trim()}`;
    if (z1s.test(o)) continue;
    if (o.length > 200) o = Q(o, 200).trim() + "\u2026";
    return o;
  }
  return;
}
export { iVn, j1s, wPo, Kdn, Zte, W1s, z1s, YSt };