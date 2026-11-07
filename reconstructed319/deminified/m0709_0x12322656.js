// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ml } from "B:/~BUN/root/chunk-game8aqv.js";
import { Ct } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { n0 } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Gt, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
function own() {
  return n0("autoContinueAtUsageLimit")[0];
}
function Otr(e) {
  return own() ?? e === "absent";
}
var u = "tengu_marble_heron";
function D3r() {
  let e = n();
  return o(e) ? e : {};
}
function q6e() {
  let e = n();
  return r(o(e) ? e.enabled : e);
}
function swn() {
  return Ml() && !Gt() && !Ct();
}
function fdi() {
  return swn() && q6e();
}
function Itr() {
  return r(D3r().autoArm);
}
function n() {
  return v(u, {});
}
function o(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function r(e) {
  if (e === void 0) return !0;
  if (typeof e === "string") {
    let t = e.trim().toLowerCase();
    return t !== "" && t !== "false" && t !== "0";
  }
  return Boolean(e);
}
export { own, Otr, D3r, q6e, swn, fdi, Itr };