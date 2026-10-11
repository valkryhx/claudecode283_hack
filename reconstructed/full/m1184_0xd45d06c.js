// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  xq
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Ac
} from "B:/~BUN/root/chunk-dv435n4g.js";
var d = new q(() => ({
  degraded: !1
}));

function t() {
  return d.of(j().host)
}

function a8(n, r) {
  if (n !== Ac) return;
  let e = t();
  if (r === void 0) {
    e.degraded = !1;
    return
  }
  let o = xq(r);
  if (o === "downstream_unreachable") e.degraded = !0;
  else if (o === "downstream_error") e.degraded = !1
}

function Cio() {
  return t().degraded
}
export {
  a8,
  Cio
};
