// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  yJ
} from "B:/~BUN/root/chunk-1s0yt4vj.js";

function tXn(t, n) {
  return t.isSynthetic === !0 && t.shouldQuery === !1 && t.priority !== "now" && yJ(t) && (typeof n === "string" || Array.isArray(n) && n.every((e) => typeof e === "object" && e !== null && ("type" in e) && e.type === "text")) && !("file_attachments" in t) && !("pasted_content" in t) && !("inline_pastes" in t)
}
export {
  tXn
};
