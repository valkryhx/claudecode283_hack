// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
var s = ["boot_process", "boot_session", "boot_load", "boot_init", "boot_mcp", "boot_hydrate", "boot_connect", "open", "attachments", "prepare", "schemas", "normalize", "build"],
  o = ["stream", "permission", "tool", "send"],
  i = ["uploads", "telemetry"];
var a = ["rest", "after_stream", ...s, ...o, ...i];

function r() {}
var t = he({
  clock: void 0
}, (e) => {
  e.clock = void 0
});

function u$i(e) {
  t.clock?.setPhase(e)
}

function f$i(e, n) {
  t.clock?.setPhaseWithin(e, n)
}

function p$i(e, n) {
  t.clock?.endPhaseWithin(e, n)
}

function SZt(e) {
  return t.clock?.openWindow(e) ?? r
}

function G_s(e) {
  return t.clock?.enterSpan(e) ?? "not_clocked"
}

function V_s(e) {
  t.clock?.leaveSpan(e)
}
export {
  u$i,
  f$i,
  p$i,
  SZt,
  G_s,
  V_s
};
