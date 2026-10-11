// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  Je
} from "B:/~BUN/root/chunk-3rzkfay5.js";

function Ub(t) {
  return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS || (t ?? Je()).disableBundledSkills === !0
}

function ycn(t, e) {
  return t.type === "prompt" && t.source === "builtin" && Ub(e)
}
export {
  Ub,
  ycn
};
