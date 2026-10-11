// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { E, Bi } from "B:/~BUN/root/chunk-n8qdr73v.js";
function a0(e = E()) {
  return Bi(_Te, e);
}
function _Te(e) {
  if (typeof e === "string") {
    let n = e.trim();
    if (/^[-+]?\d+(\.\d+)?$/.test(n)) {
      let r = Number(n);
      if (Number.isFinite(r)) return r;
    }
  }
  return e;
}
var V0t = "modelFacingMessage";
export { a0, _Te, V0t };