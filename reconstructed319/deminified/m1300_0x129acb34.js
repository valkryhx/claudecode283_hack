// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { dwt } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { A6, nWe } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
function Q7n(text) {
  if (typeof text === "string") return [{
    type: "text",
    text: text
  }];
  if (!Array.isArray(text)) return [];
  return text.filter(item => item !== null && typeof item === "object" && !Array.isArray(item));
}
var regExp = new RegExp(`<(${dwt.join("|")})>[\\s\\S]*?(?:</\\1>|$)`, "g");
function m(r) {
  return r.replace(regExp, "").trim();
}
function i(r) {
  return Q7n(r).flatMap(item => item.type === "text" && typeof item.text === "string" ? [item.text] : []).map(m).filter(item => item !== "");
}
function Z7n(r, e) {
  let n = [],
    o = new Set();
  for (let t of r) {
    if (t.type === "attachment" && typeof t.attachment === "object" && t.attachment !== null && nWe(t)) {
      let s = t.attachment.type === "queued_command" ? t.attachment.prompt : "",
        source_uuid = t.attachment.source_uuid;
      if (typeof source_uuid === "string") {
        if (o.has(source_uuid)) continue;
        o.add(source_uuid);
      }
      for (let u of i(s)) n.push(`[User]: ${Q(u, e.userTextChars)}`);
      continue;
    }
    if (t.type === "user" && t.message) {
      if (t.isCompactSummary) {
        for (let s of i(t.message.content)) n.push(`[Summary of earlier conversation]: ${Q(s, e.userTextChars)}`);
        continue;
      }
      if (!A6(t) || typeof t.uuid === "string" && o.has(t.uuid)) continue;
      for (let s of i(t.message.content)) n.push(`[User]: ${Q(s, e.userTextChars)}`);
    } else if (t.type === "assistant" && t.message) {
      for (let s of Q7n(t.message.content)) if (s.type === "text" && typeof s.text === "string") n.push(`[Assistant]: ${Q(s.text, e.assistantTextChars)}`);else if (s.type === "tool_use" && typeof s.name === "string") n.push(`[Tool: ${s.name}]`);
    }
  }
  return n;
}
export { Q7n, Z7n };