// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { l6e, TS } from "B:/~BUN/root/chunk-y781qzhe.js";
import { STe } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { Zn } from "B:/~BUN/root/chunk-12nc74pv.js";
var k7n = "\x1B]8;;",
  v7n = "\x07";
function ES(e, r, t) {
  let s = r === void 0 ? void 0 : Zn(r),
    n = s === void 0 || e2o(e, s);
  if (!(n && (t?.assumeSupport ?? !1) && process.stdout.isTTY === !0 && (l6e() ?? !0) || (t?.supportsHyperlinks ?? TS()))) {
    let i = t?.shownUrlStart ?? "";
    if (r !== void 0 && !n) return `${r}${i} (${e})`;
    return `${i}${e}`;
  }
  let o = ((t?.themeName ? STe(t.themeName) : !1) ? Se.blue : Se.blueBright)(r ?? e);
  return `${k7n}${e}${v7n}${o}${k7n}${v7n}`;
}
function e2o(e, r) {
  return r === e || e === `http://${r}` || e === `https://${r}`;
}
export { k7n, v7n, ES, e2o };