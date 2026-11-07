// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ye,
  LE,
  er,
  dv
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  $o,
  hf
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  be,
  kte
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
var JBi = ["host", "none"],
  Ovr = "none";

function fCe(e) {
  return e === "none"
}

function Ivr({
  permissionPromptTool: e,
  sdkUrl: n
}) {
  return n ? "stdio" : e
}

function mue(e) {
  return e !== void 0 && e !== "none"
}

function tee() {
  if (er()) return !1;
  return $o().some((e) => !hf.has(e) && be(e)?.permissions?.denyInsteadOfPrompting === !0) || kte().some((e) => e.permissions?.denyInsteadOfPrompting === !0)
}

function Mvr(e) {
  let n = tee();
  if (n === (e.denyInsteadOfPrompting === !0)) return e;
  return {
    ...e,
    denyInsteadOfPrompting: n,
    shouldAvoidPermissionPrompts: n || e.avoidsPromptsByNature === !0
  }
}

function XSs() {
  if (dv().length > 0 && ye()) return !1;
  if (ye() && !mue(LE())) return !1;
  return !0
}

function nee() {
  return !tee() && XSs()
}
export {
  JBi,
  Ovr,
  fCe,
  Ivr,
  mue,
  tee,
  Mvr,
  XSs,
  nee
};
