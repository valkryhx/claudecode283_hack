// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { at } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { $Vn } from "B:/~BUN/root/chunk-hkc0g0wr.js";
var t = new at(() => ({
  byToolUse: new Map()
}));
function S9r(n, e, i) {
  t.of(n).byToolUse.set(e, i), $Vn(n, e, () => {
    STn(n, e);
  });
}
function STn(n, e) {
  t.peek(n)?.byToolUse.delete(e);
}
function lni(n, e) {
  return e !== void 0 && t.peek(n)?.byToolUse.has(e) === !0;
}
function w9r(n, e) {
  if (e === void 0) return;
  let i = t.peek(n)?.byToolUse.get(e);
  return STn(n, e), i;
}
export { S9r, STn, lni, w9r };