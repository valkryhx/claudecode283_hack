/* ==============================================================================
 * m0132.Gi   [m0132_0xc24a4bb.js @ 113097]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 113097
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Gi = {
  event: "tool.describe",
  restoreArgument: (e, t) => W(["provider"], e, t),
  checkArgument: (e, t) => {
    if (typeof e.tool !== "string") return "no { tool }";
    if (e.tool !== t.tool) return "a changed tool (the engine caches the description by it)";
    if ($n(e.provider) !== $n(t.provider)) return "a changed provider (pinned: who provides the tool is a fact)";
    if (!(e.isDeferred === void 0 || typeof e.isDeferred === "boolean")) return "an isDeferred that is not a boolean";
    return typeof e.description === "string" ? void 0 : "no { description }"
  },
  measureArgument: (e, t) => te(e.description, t.description),
  restoreResult: (e, t, o) => {
    if (e.isDeferred !== void 0) return e;
    let n = t.at(-1)?.isDeferred ?? o.isDeferred;
    return n === void 0 ? e : {
      ...e,
      isDeferred: n
    }
  },
  check: C((e) => {
    if (typeof e.description !== "string") return "no { description } (a string)";
    return e.isDeferred === void 0 || typeof e.isDeferred === "boolean" ? void 0 : "an isDeferred that is not a boolean"
  }),
  measure: Ze("description")
};
