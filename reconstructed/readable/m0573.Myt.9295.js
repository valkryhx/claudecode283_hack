/* ==============================================================================
 * m0573.Myt   [m0573_0xcde50bc.js @ 9295]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0573_0xcde50bc.js  字符偏移 9295
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Myt(e, n) {
  let o = x(e),
    s = o.shells.length > 0 || o.workflows.length > 0 || o.agents.length > 0 || o.unresumedAgents.length > 0 || o.unresumedWorkflows.length > 0 || o.frameLive.length > 0 ? E(o, n) : void 0,
    h = new Set([...o.shells, ...o.workflows, ...o.agents].map((u) => u.id));
  return Bwn(e, h), s
}
