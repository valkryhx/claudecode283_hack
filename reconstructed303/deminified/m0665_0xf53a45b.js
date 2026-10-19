// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Dat } from "B:/~BUN/root/chunk-9grc6xh0.js";
function uYr(s, r = []) {
  let content = s.message.content;
  if (!Array.isArray(content)) return "";
  let o = Dat();
  if (o.size === 0) return "";
  return content.flatMap(item => {
    if (item.type !== "tool_use") return [];
    if (!o.has(item.name)) return r.filter(n => n.replCallId === item.id).map(item => item.text);
    let i = item.input?.text;
    return typeof i === "string" ? [i] : [];
  }).filter(Boolean).join(`
`);
}
var p = 8;
class pYr {
  #t = [];
  note(replCallId, r) {
    let text = r.text;
    if (typeof text !== "string" || !text) return;
    if (this.#t.push({
      replCallId: replCallId,
      text: text
    }), this.#t.length > p) this.#t.shift();
  }
  take() {
    return this.#t.splice(0);
  }
  clear() {
    this.#t.length = 0;
  }
}
export { uYr, pYr };