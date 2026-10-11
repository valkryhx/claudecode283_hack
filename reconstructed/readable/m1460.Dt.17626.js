/* ==============================================================================
 * m1460.Dt   [m1460_0xd973957.js @ 17626]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 17626
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Dt(o, l) {
  if (o.state === "done") return "done";
  if (o.state === "error") {
    if (o.skipped) return "skipped";
    if (o.blocked) return "blocked";
    return "failed"
  }
  if (!l) return "interrupted";
  return o.queuedAt != null && o.startedAt == null ? "queued" : "running"
}
