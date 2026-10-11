/* ==============================================================================
 * m0132.Di   [m0132_0xc24a4bb.js @ 110127]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 110127
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Di = {
  event: "agent.spawn",
  restoreArgument: (e, t) => W(an, e, t),
  checkArgument(e, t) {
    return wt({
      keys: RNt,
      passed: e,
      received: t,
      explanation: `the identity of the spawn and its parent is pinned; a rewrite keeps ${RNt.join(", ")}`
    }) ?? pn(e, t)
  },
  check: C((e) => ct(e, "{ model }", (t) => typeof t.model === "string"))
};
