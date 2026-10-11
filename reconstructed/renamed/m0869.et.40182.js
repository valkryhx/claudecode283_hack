/* ==========================================================================
 * m0869.et  ->  assertAgentCap   [m0869_0xd12567a.js @ 40182]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function assertAgentCap() {
  if (agentCount < AGENT_CAP) return;
  if (!capWarned) capWarned = !0, trackEvent("tengu_workflow_agent_cap_exceeded", {
    agentCount: agentCount
  });
  throw new WorkflowAgentCapError();
}
