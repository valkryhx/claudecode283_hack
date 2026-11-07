// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
var co = "REPL",
  Iee = "Eval",
  Fnn = "Code";

function Ka(o) {
  return o === co || o === Iee
}

function gR(o) {
  if (o === co) return !0;
  return le() && o === Iee
}

function Dse(o) {
  return le() && Ka(o) ? Fnn : o
}
export {
  co,
  Iee,
  Fnn,
  Ka,
  gR,
  Dse
};
