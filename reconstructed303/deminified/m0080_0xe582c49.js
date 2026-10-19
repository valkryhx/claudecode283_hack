// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { DTe } from "B:/~BUN/root/chunk-qvy7wp4j.js";
var Mjo = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/,
  a = /<command-name>(.*?)<\/command-name>/;
function _Ze(e, i) {
  if (e.type !== "user") return;
  if (e.isMeta === !0 || e.isCompactSummary === !0) return;
  let s = e.message;
  if (!s) return;
  let content = s.content,
    o = [];
  if (typeof content === "string") o.push(content);else if (Array.isArray(content)) for (let t of content) {
    if (!t || typeof t !== "object") continue;
    if (t.type === "tool_result") return;
    if (t.type === "text" && typeof t.text === "string") o.push(t.text);
  }
  for (let t of o) {
    let n = DTe(t).replaceAll(`
`, " ").trim();
    if (!n) continue;
    let c = a.exec(n);
    if (c) {
      if (!i.commandFallback) i.commandFallback = c[1];
      continue;
    }
    let u = /<bash-input>([\s\S]*?)<\/bash-input>/.exec(n);
    if (u) return `! ${u[1].trim()}`;
    if (Mjo.test(n)) continue;
    if (n.length > 200) n = ne(n, 200).trim() + "\u2026";
    return n;
  }
  return;
}
export { Mjo, _Ze };