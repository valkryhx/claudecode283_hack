// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  dwt
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  A6,
  nWe
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";

function Q7n(r) {
  if (typeof r === "string") return [{
    type: "text",
    text: r
  }];
  if (!Array.isArray(r)) return [];
  return r.filter((e) => e !== null && typeof e === "object" && !Array.isArray(e))
}
var p = new RegExp(`<(${dwt.join("|")})>[\\s\\S]*?(?:</\\1>|$)`, "g");

function m(r) {
  return r.replace(p, "").trim()
}

function i(r) {
  return Q7n(r).flatMap((e) => e.type === "text" && typeof e.text === "string" ? [e.text] : []).map(m).filter((e) => e !== "")
}

function Z7n(r, e) {
  let n = [],
    o = new Set;
  for (let t of r) {
    if (t.type === "attachment" && typeof t.attachment === "object" && t.attachment !== null && nWe(t)) {
      let s = t.attachment.type === "queued_command" ? t.attachment.prompt : "",
        a = t.attachment.source_uuid;
      if (typeof a === "string") {
        if (o.has(a)) continue;
        o.add(a)
      }
      for (let u of i(s)) n.push(`[User]: ${Q(u,e.userTextChars)}`);
      continue
    }
    if (t.type === "user" && t.message) {
      if (t.isCompactSummary) {
        for (let s of i(t.message.content)) n.push(`[Summary of earlier conversation]: ${Q(s,e.userTextChars)}`);
        continue
      }
      if (!A6(t) || typeof t.uuid === "string" && o.has(t.uuid)) continue;
      for (let s of i(t.message.content)) n.push(`[User]: ${Q(s,e.userTextChars)}`)
    } else if (t.type === "assistant" && t.message) {
      for (let s of Q7n(t.message.content))
        if (s.type === "text" && typeof s.text === "string") n.push(`[Assistant]: ${Q(s.text,e.assistantTextChars)}`);
        else if (s.type === "tool_use" && typeof s.name === "string") n.push(`[Tool: ${s.name}]`)
    }
  }
  return n
}
export {
  Q7n,
  Z7n
};
