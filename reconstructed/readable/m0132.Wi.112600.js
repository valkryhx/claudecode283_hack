/* ==============================================================================
 * m0132.Wi   [m0132_0xc24a4bb.js @ 112600]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 112600
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Wi = {
  event: "tool.check",
  restoreArgument: (e, t) => W(["tool_use_id"], e, t),
  checkArgument: (e, t) => wt({
    keys: yn,
    passed: e,
    received: t,
    explanation: "the tool, its input and the call are the question and are pinned; a hook answers { decision }, it does not ask about another call"
  }),
  settle: dn,
  check: C((e) => {
    let {
      decision: t,
      reason: o,
      rule: r
    } = e;
    if (!fn(t)) return `no { decision } (one of ${sOo.join(", ")})`;
    return [o, r].every((s) => s === void 0 || typeof s === "string") ? void 0 : "a reason or rule that is not a string"
  })
};
