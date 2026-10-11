/* ==============================================================================
 * m1569.Pr   [m1569_0xdceb889.js @ 70707]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 70707
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Pr(e, r) {
  for (let [s, a] of Object.entries(r.taskRegistry?.all() ?? {})) {
    if (a.type !== "local_workflow" || a.workflowRunId !== e) continue;
    if (a.status === "running") return `Workflow ${e} is still running (task ${s}). Stop it first with ${og}({taskId: "${s}"}) before resuming.`;
    if (!nb(s)) return a.status === "paused" ? `Workflow ${e} is paused but its run has not exited yet (task ${s}); its agents are being stopped. Resuming now would run two copies of its agents against the same journal \u2014 wait for it to exit.` : `Workflow ${e} is not running but its run has not exited yet (task ${s}). Resuming now would run two copies of its agents against the same journal. Run ${og}({taskId: "${s}"}) on it or wait for it to exit.`
  }
  let n = r.toolState.get(xe).byId.get(e);
  if (n !== void 0 && !n.isKilled && n.isActive) return `Workflow ${e} is still running. Wait for it to settle, or stop it first with ${og}, before resuming.`;
  return
}
