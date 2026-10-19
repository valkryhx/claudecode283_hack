// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Rw,
  dVs,
  m4
} from "B:/~BUN/root/chunk-h9p45fg5.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  ut
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  U4n
} from "B:/~BUN/root/chunk-edng3c86.js";

function WK(i) {
  return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS || (i ?? ut()).disableBundledSkills === !0
}
var uDr = "allow_bundled_skills";

function $je() {
  return !Rw(uDr)
}

function t() {
  return dVs() ?? U4n
}

function VG(i) {
  return $je() && !t().includes(i)
}

function gte(i, e) {
  return WK(e) || VG(i)
}

function qBs() {
  return m4(uDr, "Bundled skills", "are")
}

function $4n(i) {
  let e = $je();
  return `${WK(i)}:${e}:${e?t().join(","):""}`
}

function pDr(i, e) {
  return i.type === "prompt" && i.source === "builtin" && gte(i.name, e)
}
export {
  WK,
  uDr,
  $je,
  VG,
  gte,
  qBs,
  $4n,
  pDr
};
