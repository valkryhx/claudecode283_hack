// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Zs
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";

function _en(n) {
  return le() && Zs(n) === "turn-abort"
}

function BSa(n) {
  return le() && n !== null && typeof n === "object" && "asyncDispatched" in n && n.asyncDispatched === !0
}
export {
  _en,
  BSa
};
