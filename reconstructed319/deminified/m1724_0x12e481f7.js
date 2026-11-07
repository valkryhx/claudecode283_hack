// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { rn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { u_e } from "B:/~BUN/root/chunk-pp5rqp7s.js";
var r = "tengu_harp_forepillar";
function lfn() {
  return rn(r, !1) === !0;
}
function tYs(e, t) {
  if (e === t) return "launch_dir";
  return u_e(e, t) ? "inside_launch_dir" : "elsewhere";
}
export { lfn, tYs };