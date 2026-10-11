/* ==============================================================================
 * m0869.ct   [m0869_0xd12567a.js @ 40291]
 * --------------------------------------------------------------------------
 * 作用: token 预算检查：spent>=total 时发 tengu_workflow_budget_cap_exceeded 并抛 Wo。
 * 标识: A=budget 对象  X=已告警标志
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 40291
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ct() {
  if (A?.total == null || A.total <= 0) return;
  let M = A.getTurnSpent();
  if (M < A.total) return;
  if (!X) X = !0, i("tengu_workflow_budget_cap_exceeded", {
    spent: M,
    budget: A.total,
    agentCount: ge
  });
  throw new Wo(M, A.total)
}
