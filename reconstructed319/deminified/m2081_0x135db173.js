// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { wme } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ees } from "B:/~BUN/root/chunk-27h4st9h.js";
import { uDt } from "B:/~BUN/root/chunk-vy4t7613.js";
import { _t } from "B:/~BUN/root/chunk-3a409jmn.js";
function Lst() {
  try {
    return uDt() || ees({
      kind: "bridge"
    });
  } catch (error) {
    return a(F(error)), !0;
  }
}
var e = /\u2028|\u2029/g,
  t = "tengu_sober_inkwell";
function o() {
  return _t(t, {
    safe: !0
  });
}
function Y1o(r) {
  return _(r).replace(e, n => n === "\u2028" ? "\\u2028" : "\\u2029");
}
function CK(r) {
  if (o()) return wme(_(r));
  return Y1o(r);
}
function X1o(r, n) {
  if (o()) return wme(_(r, null, n));
  return _(r, null, n);
}
export { Y1o, CK, X1o, Lst };