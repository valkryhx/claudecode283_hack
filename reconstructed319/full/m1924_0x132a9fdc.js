// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  vs
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  o,
  oe,
  C,
  u,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var yei = "Resumed agent. Its final report is not in this message.",
  _ei = "Resumed agent. Its final report follows this JSON, framed by the harness.";

function cWo({
  displayName: e,
  content: n
}) {
  return `Resumed agent ${e}. Result:

${vs(n,`
`)||"(no text output)"}`
}
var uWo = p(() => u({
  message: o().optional(),
  display: o().optional(),
  inlineHandback: u({
    displayName: o(),
    content: C(u({
      type: T("text"),
      text: o()
    }))
  }).optional().catch(void 0),
  routing: oe().optional(),
  request_id: oe().optional(),
  target: oe().optional()
}));

function fWo(e) {
  if (e.routing) return;
  if (e.request_id !== void 0 && e.target !== void 0) return;
  return e.display ?? (e.inlineHandback ? cWo(e.inlineHandback) : e.message)
}

function bei(e) {
  let n = uWo().safeParse(e);
  return n.success ? fWo(n.data) ?? "" : ""
}
export {
  yei,
  _ei,
  cWo,
  uWo,
  fWo,
  bei
};
