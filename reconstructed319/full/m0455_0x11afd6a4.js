// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  kr
} from "B:/~BUN/root/chunk-dm4rzkqc.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
var n = 3;
var _ = "tengu_hazel_trellis";

function iR() {
  let e = i.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
  if (e !== void 0) return e;
  let t = kr();
  if (t.maxSubagentSpawnDepthFromGrowthBook === void 0) {
    let {
      getFeatureValue_CACHED_MAY_BE_STALE: a
    } = import.meta.require("B:/~BUN/root/chunk-hckxtg11.js"), {
      getCachedClientData: A
    } = import.meta.require("B:/~BUN/root/chunk-9tp6zqq1.js"), o = A()?.[_], r = u(o) ? o : a(_, n);
    t.maxSubagentSpawnDepthFromGrowthBook = u(r) ? r : n
  }
  return t.maxSubagentSpawnDepthFromGrowthBook
}

function u(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 1
}
export {
  iR
};
