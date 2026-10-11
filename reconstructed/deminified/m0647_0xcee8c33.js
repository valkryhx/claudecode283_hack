// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y$n } from "B:/~BUN/root/chunk-y39emrp9.js";
import { r6n } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { kb, t8n, uH } from "B:/~BUN/root/chunk-4rk7cwxz.js";
function m(r, e) {
  var t = [];
  return y$n(r, function (o, f, i) {
    if (e(o, f, i)) t.push(o);
  }), t;
}
var a = m;
function n(r, e) {
  var t = kb(r) ? t8n : a;
  return t(r, r6n(uH(e, 3)));
}
var RH = n;
export { RH };