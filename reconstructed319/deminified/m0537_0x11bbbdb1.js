// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { at, rt, v, Bd } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
function n(t) {
  let e = t?.pewter_owl_model;
  if (typeof e === "string" && e !== "") return e;
  return v("tengu_pewter_owl_model", "");
}
function o(t) {
  if (i.CLAUDE_CODE_PEWTER_OWL !== void 0) return i.CLAUDE_CODE_PEWTER_OWL;
  if (ye()) return !1;
  let e = Bd(),
    r = n(e);
  if (r !== "" && !rt(at()).includes(r)) return !1;
  return v(`tengu_${t}`, !1) || e?.[t] === !0;
}
function xXe() {
  if (i.CLAUDE_CODE_PEWTER_OWL_TOOL !== void 0) return i.CLAUDE_CODE_PEWTER_OWL_TOOL;
  return o("pewter_owl_tool");
}
function Aps() {
  return o("pewter_owl_brief");
}
export { xXe, Aps };