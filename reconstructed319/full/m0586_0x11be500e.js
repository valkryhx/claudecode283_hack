// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  FE
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  tt,
  M5
} from "B:/~BUN/root/chunk-n8cnxns2.js";

function o(n) {
  return M5(tt(n, "."), " ")
}

function tys(n) {
  return /^con(in|out)\$$/i.test(o(n))
}
var e = /[<>"|?*\\\x00-\x1f]/;

function DFi(n) {
  return n.split("/").some((t) => e.test(t))
}

function u0t(n) {
  return n.split("/").some((t) => t.includes(":") || t.endsWith(".") || t.endsWith(" ") || FE(o(t).replace(/ {2,}/g, " ")) || tys(t))
}
var r = /^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;

function i(n) {
  return M5(tt(n, ":"), ". ")
}

function WDn(n) {
  return n.split("/").some((t) => r.test(i(t)))
}
export {
  tys,
  DFi,
  u0t,
  WDn
};
