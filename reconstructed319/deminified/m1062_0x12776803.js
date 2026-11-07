// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Jt, ve, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var rE = Jt(null);
function Bl() {
  return ve(rE) !== null;
}
function As(o) {
  let c = S(3),
    l = ve(rE),
    n;
  if (c[0] !== l || c[1] !== o) n = l ? {
    rows: l.rows,
    columns: l.columns
  } : o, c[0] = l, c[1] = o, c[2] = n;else n = c[2];
  return n;
}
function jPe() {
  return ve(rE)?.scrollViewport ?? null;
}
function nEt() {
  return ve(rE)?.claimScrollBox ?? null;
}
export { rE, Bl, As, jPe, nEt };