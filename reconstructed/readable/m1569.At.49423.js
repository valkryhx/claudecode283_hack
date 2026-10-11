/* ==============================================================================
 * m1569.At   [m1569_0xdceb889.js @ 49423]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 49423
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function At(e, r) {
  for (let n of Object.values(e.all())) {
    if (n.type !== "local_workflow" || n.workflowRunId !== r) continue;
    switch (n.status) {
      case "pending":
      case "running":
        return "open";
      case "killed":
        return "killed";
      case "completed":
      case "failed":
      case "paused":
        return "settled"
    }
  }
  return "unknown"
}
