// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  LQr,
  jAn
} from "B:/~BUN/root/chunk-gdmeytqh.js";
import {
  lxe,
  xgs
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  o,
  oe,
  T,
  u,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var n = 1,
  a = 64,
  s = "offer",
  t = f(() => o().regex(lxe).refine(xgs)),
  c = f(() => u({
    v: C(n),
    head: t(),
    branch: o().min(1).max(LQr).refine(jAn),
    ancestors: T(oe()).max(a).pipe(T(t()))
  }));

function t6o(e) {
  let r = c().safeParse(e[s]);
  return r.success ? r.data : null
}
export {
  t6o
};
