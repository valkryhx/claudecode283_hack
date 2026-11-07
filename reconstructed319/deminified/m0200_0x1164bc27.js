// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pua, Oua, Uxs } from "B:/~BUN/root/chunk-2gz7xsvb.js";
import { Ef } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var e = he(Ef(), o => o.set(null));
function Rua(o) {
  let t = o !== void 0 && o !== null;
  e.set(t ? Pua(o) : null);
}
function Aua(o) {
  return Uxs(o) !== void 0 ? e.get() ?? void 0 : void 0;
}
function xua(o, t) {
  if (Uxs(o) !== void 0) e.set(t ?? null);
}
function NNe(o) {
  let paths = Uxs(o),
    table = e.get() ?? Oua;
  return paths === void 0 ? void 0 : {
    table: table,
    paths: paths
  };
}
export { Rua, Aua, xua, NNe };