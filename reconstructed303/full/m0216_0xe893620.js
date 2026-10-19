// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  LXn
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  L_
} from "B:/~BUN/root/chunk-8pmnanyd.js";

function GU(o, n) {
  let e = L_(o, "fable_5_mitigations", n);
  if (e !== void 0) return e;
  if (o === "claude-mythos-5") return !0;
  return !1
}

function oIe(o) {
  return !LXn() && L_(o, "fable_5_1_prompt_bundle") === !0
}

function X1e(o) {
  return o.startsWith("claude-fable-")
}

function iHs(o) {
  return o.startsWith("claude-mythos-")
}

function Cqn(o) {
  return !1
}
export {
  GU,
  oIe,
  X1e,
  iHs,
  Cqn
};
