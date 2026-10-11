/* ==============================================================================
 * m0869.et   [m0869_0xd12567a.js @ 40182]
 * --------------------------------------------------------------------------
 * 作用: agent 总数上限检查（1000）：超限发 tengu_workflow_agent_cap_exceeded 并抛 Mo。
 * 标识: ge=当前 agent 计数  xo=1000
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 40182
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function et() {
  if (ge < xo) return;
  if (!C) C = !0, i("tengu_workflow_agent_cap_exceeded", {
    agentCount: ge
  });
  throw new Mo
}
