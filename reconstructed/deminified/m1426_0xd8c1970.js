// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { eo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { o, ae, C, u, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
var CJr = "Resumed agent. Its final report is not in this message.",
  RJr = "Resumed agent. Its final report follows this JSON, framed by the harness.";
function unr({
  displayName: displayName,
  content: content
}) {
  return `Resumed agent ${displayName}. Result:

${eo(content, `
`) || "(no text output)"}`;
}
var pnr = f(() => u({
  message: o().optional(),
  display: o().optional(),
  inlineHandback: u({
    displayName: o(),
    content: C(u({
      type: A("text"),
      text: o()
    }))
  }).optional().catch(void 0),
  routing: ae().optional(),
  request_id: ae().optional(),
  target: ae().optional()
}));
function fnr(e) {
  if (e.routing) return;
  if (e.request_id !== void 0 && e.target !== void 0) return;
  return e.display ?? (e.inlineHandback ? unr(e.inlineHandback) : e.message);
}
function AJr(e) {
  let n = pnr().safeParse(e);
  return n.success ? fnr(n.data) ?? "" : "";
}
export { CJr, RJr, unr, pnr, fnr, AJr };