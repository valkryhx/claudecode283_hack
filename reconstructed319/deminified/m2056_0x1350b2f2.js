// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { jlr, jxt } from "B:/~BUN/root/chunk-27h4st9h.js";
var l = /^[CDG][A-Z0-9]{6,}$/;
function F8o(e) {
  let n = e.replace(/^#/, "");
  return l.test(n) ? `https://slack.com/app_redirect?channel=${n}` : null;
}
var t = new Set(["slack_send_message", "slack_post_message"]),
  uiTableKey = "mcp-slack-send";
function vor(e) {
  return t.has(e);
}
function Lui(e) {
  let n = e.channel_id ?? e.channel;
  if (typeof n !== "string") return null;
  let r = jlr(n);
  if (!r) return null;
  return {
    label: `#${r.replace(/^#/, "")}`,
    url: F8o(n)
  };
}
function Eor() {
  return {
    uiTableKey: uiTableKey,
    userFacingName() {
      return "Slacked";
    },
    renderToolUseMessage(e, n) {
      return n.verbose ? jxt(e, n) : "";
    }
  };
}
export { F8o, uiTableKey as H8o, vor, Lui, Eor };