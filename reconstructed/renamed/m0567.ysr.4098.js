/* ==========================================================================
 * m0567.ysr   [m0567_0xcdd6311.js @ 4098]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ysr(e, s, r, o, n, a) {
  let i = L(e, n, "completed", {
    result: s,
    agentCount: r,
    logs: o,
    terminal: a
  });
  if (i) YIr(i.outputFile, b({
    summary: i.summary,
    agentCount: r,
    logs: o,
    result: s,
    workflowProgress: i.workflowProgress.filter(u => u.type !== "workflow_log"),
    totalTokens: i.totalTokens,
    totalToolCalls: i.totalToolCalls
  }, null, 2)).catch(u => t(`Failed to write workflow output for ${e}: ${u instanceof Error ? u.message : u}`)), _("task_local_workflow");
}
