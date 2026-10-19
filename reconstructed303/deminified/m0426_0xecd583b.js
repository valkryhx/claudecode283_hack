// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ao } from "B:/~BUN/root/chunk-s6czymtt.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
var n = 3;
var _ = "tengu_hazel_trellis";
function $k() {
  let CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH = a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
  if (CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH !== void 0) return CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
  let t = Ao();
  if (t.maxSubagentSpawnDepthFromGrowthBook === void 0) {
    let {
        getFeatureValue_CACHED_MAY_BE_STALE: getFeatureValue_CACHED_MAY_BE_STALE
      } = import.meta.require("B:/~BUN/root/chunk-xvnv0v80.js"),
      {
        getCachedClientData: getCachedClientData
      } = import.meta.require("B:/~BUN/root/chunk-jjv9dd80.js"),
      o = getCachedClientData()?.[_],
      r = u(o) ? o : getFeatureValue_CACHED_MAY_BE_STALE(_, n);
    t.maxSubagentSpawnDepthFromGrowthBook = u(r) ? r : n;
  }
  return t.maxSubagentSpawnDepthFromGrowthBook;
}
function u(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 1;
}
export { $k };