// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Bt,
  aTi
} from "B:/~BUN/root/chunk-27h4st9h.js";
var Ijr = {
    create: "Cloud session active",
    attach: "Attached to cloud session",
    moved: "Cloud session ready"
  },
  Mjr = " \xB7 code here or at ";

function n(e, s) {
  return `${Ijr[e]}${Mjr}${s}`
}

function u3n(e, s, o) {
  let t = n(e, s);
  return o ? aTi(e, s, t) : Bt(t, "info")
}
export {
  Ijr,
  Mjr,
  u3n
};
