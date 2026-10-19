// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Io } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { o, oe, T, u, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
var u7o = "Resumed agent. Its final report is not in this message.",
  p7o = "Resumed agent. Its final report follows this JSON, framed by the harness.";
function B5r({
  displayName: displayName,
  content: content
}) {
  return `Resumed agent ${displayName}. Result:

${Io(content, `
`) || "(no text output)"}`;
}
var j5r = f(() => u({
  message: o().optional(),
  display: o().optional(),
  inlineHandback: u({
    displayName: o(),
    content: T(u({
      type: C("text"),
      text: o()
    }))
  }).optional().catch(void 0),
  routing: oe().optional(),
  request_id: oe().optional(),
  target: oe().optional()
}));
function W5r(e) {
  if (e.routing) return;
  if (e.request_id !== void 0 && e.target !== void 0) return;
  return e.display ?? (e.inlineHandback ? B5r(e.inlineHandback) : e.message);
}
function f7o(e) {
  let n = j5r().safeParse(e);
  return n.success ? W5r(n.data) ?? "" : "";
}
export { u7o, p7o, B5r, j5r, W5r, f7o };