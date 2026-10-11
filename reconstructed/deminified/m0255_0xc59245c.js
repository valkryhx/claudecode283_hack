// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { bo } from "B:/~BUN/root/chunk-846280n0.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
var o = 3,
  _ = "tengu_hazel_trellis";
function gv() {
  let CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH = a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
  if (CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH !== void 0) return CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
  let t = bo();
  if (t.maxSubagentSpawnDepthFromGrowthBook === void 0) {
    let {
        getFeatureValue_CACHED_MAY_BE_STALE: getFeatureValue_CACHED_MAY_BE_STALE
      } = import.meta.require("B:/~BUN/root/chunk-7qwqa2vj.js"),
      e = getFeatureValue_CACHED_MAY_BE_STALE(_, o);
    t.maxSubagentSpawnDepthFromGrowthBook = typeof e === "number" && Number.isInteger(e) && e >= 1 ? e : o;
  }
  return t.maxSubagentSpawnDepthFromGrowthBook;
}
export { gv };