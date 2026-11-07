// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  tS,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  V4
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  yOe
} from "B:/~BUN/root/chunk-y4fgbjen.js";
import {
  al
} from "B:/~BUN/root/chunk-27h4st9h.js";

function UJn(e, r, n, s, i) {
  return s || tS(n) || e.suppressesAlwaysAllowRule?.(r, !v("tengu_valiant_crayon", !1)) === !0 && !(i ?? []).some((o) => (o.type === "addRules" || o.type === "replaceRules") && o.behavior === "allow" && o.rules.some((t) => t.ruleContent !== void 0)) || void 0
}

function ZVt(e, r, n) {
  if (al(e.decisionReason, V4) !== void 0 || yOe(n)) return !0;
  if (r.requiresUserInteraction?.()) return !0;
  return e.forcedByCaller === !0 || e.personOnly === !0
}
export {
  UJn,
  ZVt
};
