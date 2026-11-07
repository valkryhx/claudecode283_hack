// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { dHr } from "B:/~BUN/root/chunk-65j2302z.js";
import { Aw } from "B:/~BUN/root/chunk-8f4z6bdn.js";
function fz(o, n) {
  let e = Aw(o, "fable_5_mitigations", n);
  if (e !== void 0) return e;
  if (o === "claude-mythos-5") return !0;
  return !1;
}
function o2e(o) {
  return !dHr() && Aw(o, "fable_5_1_prompt_bundle") === !0;
}
function iQe(o) {
  return o.startsWith("claude-fable-");
}
function g2i(o) {
  return o.startsWith("claude-mythos-");
}
function yRr(o) {
  return !1;
}
export { fz, o2e, iQe, g2i, yRr };