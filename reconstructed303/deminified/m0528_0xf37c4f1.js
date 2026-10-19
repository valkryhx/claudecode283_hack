// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { kp } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Tt } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { JO } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Ht, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
function P6t() {
  return JO("autoContinueAtUsageLimit")[0];
}
function tPn(e) {
  return P6t() ?? e === "absent";
}
var u = "tengu_marble_heron";
function ycr() {
  let e = n();
  return o(e) ? e : {};
}
function iFe() {
  let e = n();
  return r(o(e) ? e.enabled : e);
}
function O6t() {
  return kp() && !Ht() && !Tt();
}
function his() {
  return O6t() && iFe();
}
function nPn() {
  return r(ycr().autoArm);
}
function n() {
  return E(u, {});
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
export { P6t, tPn, ycr, iFe, O6t, his, nPn };