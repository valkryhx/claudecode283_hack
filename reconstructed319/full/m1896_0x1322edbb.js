// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Wn
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  P5,
  Axe
} from "B:/~BUN/root/chunk-jdtvghyw.js";
var e = /[\p{Cc}\p{Cf}\p{Cs}\p{Mn}\p{Me}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;

function Rle(t, n) {
  if (typeof t !== "string") return "";
  let r = Wn(t).replace(/\r$/, "");
  if (e.test(r)) return "";
  if (n !== void 0) return r.trim() === "" ? "" : Axe(r, n).trim();
  return r.trim() === "" ? "" : P5(r).trim()
}
export {
  Rle
};
