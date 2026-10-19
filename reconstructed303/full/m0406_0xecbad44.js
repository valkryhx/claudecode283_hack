// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  we
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  tt,
  qe,
  E,
  Il
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";

function o() {
  let e = Il()?.pewter_owl_model;
  if (typeof e === "string" && e !== "") return e;
  return E("tengu_pewter_owl_model", "")
}

function r(e) {
  if (a.CLAUDE_CODE_PEWTER_OWL !== void 0) return a.CLAUDE_CODE_PEWTER_OWL;
  if (we()) return !1;
  let t = o();
  if (t !== "" && !qe(tt()).includes(t)) return !1;
  return E(`tengu_${e}`, !1) || Il()?.[e] === !0
}

function YPe() {
  if (a.CLAUDE_CODE_PEWTER_OWL_TOOL !== void 0) return a.CLAUDE_CODE_PEWTER_OWL_TOOL;
  return r("pewter_owl_tool")
}

function Vwo() {
  return r("pewter_owl_brief")
}
export {
  YPe,
  Vwo
};
