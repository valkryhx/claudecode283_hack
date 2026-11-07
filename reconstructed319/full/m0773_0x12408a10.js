// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  OKe
} from "B:/~BUN/root/chunk-h7w5pt14.js";
import {
  AT
} from "B:/~BUN/root/chunk-mzfrv3wm.js";

function p(e, i, o, l) {
  var n = e.length,
    t = l ? n : -1;
  while ((l ? t-- : ++t < n) && i(e[t], t, e));
  return o ? OKe(e, l ? 0 : t, l ? t + 1 : n) : OKe(e, l ? t + 1 : 0, l ? n : t)
}
var u = p;

function b(e, i) {
  return e && e.length ? u(e, AT(i, 3)) : []
}
var KZn = b;
export {
  KZn
};
