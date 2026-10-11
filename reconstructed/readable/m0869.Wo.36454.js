/* ==============================================================================
 * m0869.Wo   [m0869_0xd12567a.js @ 36454]
 * --------------------------------------------------------------------------
 * 作用: WorkflowBudgetExceededError：token 预算超限时抛出的错误类。
 * 标识: e=spent  r=total
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 36454
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
class Wo extends Error {
  constructor(e, r) {
    super(`Workflow token budget exceeded (${e.toLocaleString()} / ${r.toLocaleString()} output tokens). Stopping further agent() calls. In-flight agents will complete; their results are preserved.`);
    this.name = "WorkflowBudgetExceededError"
  }
}
