// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { FE } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { tt, M5 } from "B:/~BUN/root/chunk-n8cnxns2.js";
function o(n) {
  return M5(tt(n, "."), " ");
}
function tys(n) {
  return /^con(in|out)\$$/i.test(o(n));
}
var e = /[<>"|?*\\\x00-\x1f]/;
function DFi(n) {
  return n.split("/").some(item => e.test(item));
}
function u0t(n) {
  return n.split("/").some(item => item.includes(":") || item.endsWith(".") || item.endsWith(" ") || FE(o(item).replace(/ {2,}/g, " ")) || tys(item));
}
var r = /^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;
function i(n) {
  return M5(tt(n, ":"), ". ");
}
function WDn(n) {
  return n.split("/").some(item => r.test(i(item)));
}
export { tys, DFi, u0t, WDn };