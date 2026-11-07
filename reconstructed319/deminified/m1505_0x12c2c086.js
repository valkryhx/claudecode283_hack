// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { tw, G5 } from "B:/~BUN/root/chunk-game8aqv.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { yt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { im } from "B:/~BUN/root/chunk-22y97556.js";
import { z$ } from "B:/~BUN/root/chunk-hskja58z.js";
import { $r } from "B:/~BUN/root/chunk-xbnyqyft.js";
import { zX, O3 } from "B:/~BUN/root/chunk-jy87sa4x.js";
function c6e(o) {
  return l() && !O3(z$) && (o === void 0 || r(o));
}
function l() {
  if (!im()) return !1;
  if (zX() || tw()) return !1;
  if (i.CLAUDE_CODE_ENTRYPOINT === "local-agent") return !1;
  let o = yt().skillOverrides?.[z$];
  if (o === "off" || o === "user-invocable-only") return !1;
  let e = G5();
  if (e !== void 0 && !e.includes(z$)) return !1;
  return !0;
}
function r(o) {
  return o.some(item => ht(item, $r));
}
export { c6e };