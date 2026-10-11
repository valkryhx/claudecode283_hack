/* ==============================================================================
 * m0132.Ps   [m0132_0xc24a4bb.js @ 46753]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 46753
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Ps = {
  event: "command.describe",
  restoreArgument: (e, t) => W(["provider"], e, t),
  checkArgument: (e, t) => {
    if (e.command !== t.command) return "a changed command (the engine lists and caches by it)";
    if (e.immediate !== t.immediate) return "a changed immediate (read only: the command declares whether it runs mid-turn; next(e) passes it on)";
    return $n(e.provider) === $n(t.provider) ? Jt(e, t) : "a changed provider (pinned: who provides the command is a fact)"
  },
  check: C(Jt)
};
