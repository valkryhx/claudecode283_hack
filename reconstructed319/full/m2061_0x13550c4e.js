// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Jt,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  it
} from "B:/~BUN/root/chunk-09e9xfa4.js";
j();
var n = "script:",
  Jzt = Jt(null);

function Apn(t) {
  return `${n}${t}`
}

function SNo(t) {
  return t.startsWith(n)
}

function Qzt(t) {
  return it(t) && typeof t.code === "string" && t.code.trim() !== "" ? t.code : void 0
}
export {
  Jzt,
  Apn,
  SNo,
  Qzt
};
