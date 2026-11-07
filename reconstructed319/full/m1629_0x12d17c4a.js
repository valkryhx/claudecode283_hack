// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  $z
} from "B:/~BUN/root/chunk-q2rjek8y.js";
import {
  Rf
} from "B:/~BUN/root/chunk-q8eknvfd.js";
var d = new W(() => ({
  degraded: !1
}));

function t() {
  return d.of(H().host)
}

function rde(n, r) {
  if (n !== Rf) return;
  let e = t();
  if (r === void 0) {
    e.degraded = !1;
    return
  }
  let o = $z(r);
  if (o === "downstream_unreachable") e.degraded = !0;
  else if (o === "downstream_error") e.degraded = !1
}

function Imi() {
  return t().degraded
}
export {
  rde,
  Imi
};
