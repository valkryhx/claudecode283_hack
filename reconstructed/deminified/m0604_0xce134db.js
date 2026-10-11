// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { cu } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { o, C, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
var l = f(() => C(u({
  marketplace: o(),
  plugin: o()
})));
function hEn() {
  let e = x("tengu_harbor_ledger", []),
    n = l().safeParse(e);
  return n.success ? n.data : [];
}
function qQ() {
  return x("tengu_harbor", !1);
}
function Lbt(e) {
  if (!e) return !1;
  let {
    name: name,
    marketplace: marketplace
  } = cu(e);
  if (!marketplace) return !1;
  return hEn().some(item => item.plugin === name && item.marketplace === marketplace);
}
export { hEn, qQ, Lbt };