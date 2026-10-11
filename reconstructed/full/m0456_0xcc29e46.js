// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  yu
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Lt
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  hC
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  vt,
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";

function ukt() {
  return hC("autoContinueAtUsageLimit")[0]
}

function MYt(e) {
  return ukt() ?? e === "absent"
}
var u = "tengu_marble_heron";

function NAn() {
  let e = n();
  return o(e) ? e : {}
}

function awe() {
  let e = n();
  return r(o(e) ? e.enabled : e)
}

function pkt() {
  return yu() && !vt() && !Lt()
}

function oso() {
  return pkt() && awe()
}

function DYt() {
  return r(NAn().autoArm)
}

function n() {
  return x(u, {})
}

function o(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e)
}

function r(e) {
  if (e === void 0) return !0;
  if (typeof e === "string") {
    let t = e.trim().toLowerCase();
    return t !== "" && t !== "false" && t !== "0"
  }
  return Boolean(e)
}
export {
  ukt,
  MYt,
  NAn,
  awe,
  pkt,
  oso,
  DYt
};
