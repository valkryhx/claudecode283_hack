// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { an } from "B:/~BUN/root/chunk-27h4st9h.js";
var p = new Set(["hook_blocking_error", "hook_additional_context", "hook_stopped_continuation", "hook_system_message"]);
function vei() {
  return {
    messages: [],
    committed: 0,
    halted: !1
  };
}
function wyn(e) {
  return e.type === "attachment" && p.has(e.attachment.type);
}
function xhe(e) {
  return e.type === "attachment" && e.attachment.type === "hook_stopped_continuation";
}
function Eei(e) {
  let t = e.messages.slice(e.committed);
  return e.committed = e.messages.length, t;
}
function oJn(e, t, toolUseID, message) {
  if (e.halted) return;
  e.halted = !0, e.messages.push(an({
    type: "hook_stopped_continuation",
    message: message,
    hookName: `PreToolUse:${t}`,
    toolUseID: toolUseID,
    hookEvent: "PreToolUse"
  }));
}
var xWo = "This tool call did not run. A hook returned continue: false for another tool call from the same piece of code, so every further tool call from it is refused. The hook's reason is sent with that code's result.",
  Tei = "A tool call from code is refused when a PreToolUse hook that matches it doesn't finish, or fails without giving an answer. If the code made many calls at once, or one with a very large input, make this call again on its own. If it fails again, tell the user which hook it is so that they can fix it, and don't change the hook yourself.",
  m = 50,
  l = 50000,
  d = 200,
  content = `Some hook messages weren't shown: each message is shown once, and at most ${d} for one piece of code.`;
function Cei() {
  return {
    sent: new Set(),
    messages: 0,
    characters: 0,
    noted: !1,
    systemSent: new Set(),
    systemNoted: !1
  };
}
function u(e) {
  let attachment = e.attachment;
  return attachment.type === "hook_additional_context" ? attachment.content.join(`
`) : "";
}
function Rei(e, t) {
  let o = [],
    n = !1,
    a;
  for (let s of t) {
    let attachment_2 = s.attachment,
      r = attachment_2.type;
    if (r === "hook_stopped_continuation" || r === "hook_blocking_error") {
      o.push(s);
      continue;
    }
    if (attachment_2.type === "hook_system_message") {
      if (e.systemSent.has(attachment_2.content) || e.systemSent.size >= d) {
        a ??= s;
        continue;
      }
      e.systemSent.add(attachment_2.content), o.push(s);
      continue;
    }
    let i = u(s),
      h = `${r}\x00${i}`;
    if (e.sent.has(h)) {
      n = !0;
      continue;
    }
    if (e.messages >= m || e.characters + i.length > l) {
      n = !0;
      continue;
    }
    e.sent.add(h), e.messages++, e.characters += i.length, o.push(s);
  }
  if (n && !e.noted) e.noted = !0, o.push(an({
    type: "hook_additional_context",
    content: [`Claude Code left out hook messages from this code's tool calls that repeated one already sent, or that went past the limit of ${m} messages or ${l.toLocaleString("en-US")} characters in one run of code. Block reasons and stops are always sent.`],
    hookName: "PostToolUse",
    toolUseID: "repl-hook-feedback-limit",
    hookEvent: "PostToolUse"
  }));
  if (a !== void 0 && a.attachment.type === "hook_system_message" && !e.systemNoted) e.systemNoted = !0, o.push(an({
    type: "hook_system_message",
    content: content,
    hookName: "Claude Code",
    toolUseID: a.attachment.toolUseID,
    hookEvent: a.attachment.hookEvent
  }));
  return o;
}
export { vei, wyn, xhe, Eei, oJn, xWo, Tei, Cei, Rei };