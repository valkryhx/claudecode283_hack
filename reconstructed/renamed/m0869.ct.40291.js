/* ==========================================================================
 * m0869.ct  ->  assertBudget   [m0869_0xd12567a.js @ 40291]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function assertBudget() {
  if (budget?.total == null || budget.total <= 0) return;
  let spent = budget.getTurnSpent();
  if (spent < budget.total) return;
  if (!budgetWarned) budgetWarned = !0, trackEvent("tengu_workflow_budget_cap_exceeded", {
    spent: spent,
    budget: budget.total,
    agentCount: agentCount
  });
  throw new WorkflowBudgetExceededError(spent, budget.total);
}
