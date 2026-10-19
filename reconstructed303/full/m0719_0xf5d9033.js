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
  fc
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  sn,
  mp
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  o,
  T,
  u
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var l = f(() => T(u({
  marketplace: o(),
  plugin: o()
})));

function Lar() {
  let e = E("tengu_harbor_ledger", []),
    n = l().safeParse(e);
  return n.success ? n.data : []
}

function W$() {
  return sn("allow_channels") && E("tengu_harbor", !1)
}

function yTt() {
  if (!E("tengu_harbor", !1)) return !0;
  let e = mp("allow_channels");
  return e !== null && e !== "cache_miss" && e !== "route_missing"
}

function D4t(e) {
  if (!e) return !1;
  let {
    name: n,
    marketplace: r
  } = fc(e);
  if (!r) return !1;
  return Lar().some((t) => t.plugin === n && t.marketplace === r)
}
export {
  Lar,
  W$,
  yTt,
  D4t
};
