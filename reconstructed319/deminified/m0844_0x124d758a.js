// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Aoe } from "B:/~BUN/root/chunk-p8898990.js";
function $6o(s, r = []) {
  let content = s.message.content;
  if (!Array.isArray(content)) return "";
  let o = Aoe();
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
class cat {
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
export { $6o, cat };