// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { qTn, KTn } from "B:/~BUN/root/chunk-78kr43tp.js";
var l = /^[CDG][A-Z0-9]{6,}$/;
function T9r(e) {
  let n = e.replace(/^#/, "");
  return l.test(n) ? `https://slack.com/app_redirect?channel=${n}` : null;
}
var t = new Set(["slack_send_message", "slack_post_message"]),
  uiTableKey = "mcp-slack-send";
function zTn(e) {
  return t.has(e);
}
function Hes(e) {
  let n = e.channel_id ?? e.channel;
  if (typeof n !== "string") return null;
  let r = qTn(n);
  if (!r) return null;
  return {
    label: `#${r.replace(/^#/, "")}`,
    url: T9r(n)
  };
}
function GTn() {
  return {
    uiTableKey: uiTableKey,
    userFacingName() {
      return "Slacked";
    },
    renderToolUseMessage(e, n) {
      return n.verbose ? KTn(e, n) : "";
    }
  };
}
export { T9r, uiTableKey as C9r, zTn, Hes, GTn };