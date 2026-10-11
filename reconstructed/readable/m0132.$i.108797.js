/* ==============================================================================
 * m0132.$i   [m0132_0xc24a4bb.js @ 108797]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 108797
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var $i = {
  event: "agent.offer",
  restoreArgument: (e, t) => W(["provider"], e, t),
  checkArgument: (e, t) => {
    if (typeof e.agent !== "string") return "no { agent }";
    if (e.agent !== t.agent) return "a changed agent (the hooks beneath match on it)";
    if (typeof e.description !== "string") return "no { description }";
    if (e.source !== t.source) return "a changed source (the hooks beneath match on it)";
    return $n(e.provider) === $n(t.provider) ? void 0 : "a changed provider (pinned: who provides the agent is a fact)"
  },
  check: C((e) => typeof e.isOffered === "boolean" ? void 0 : "no { isOffered } (a boolean)")
};
