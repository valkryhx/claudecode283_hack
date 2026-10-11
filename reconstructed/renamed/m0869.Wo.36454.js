/* ==========================================================================
 * m0869.Wo  ->  WorkflowBudgetExceededError   [m0869_0xd12567a.js @ 36454]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
class WorkflowBudgetExceededError extends Error {
  constructor(spent, total) {
    super(`Workflow token budget exceeded (${spent.toLocaleString()} / ${total.toLocaleString()} output tokens). Stopping further agent() calls. In-flight agents will complete; their results are preserved.`);
    this.name = "WorkflowBudgetExceededError";
  }
}
