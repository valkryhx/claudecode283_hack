/* ==============================================================================
 * m0567.QK   [m0567_0xcdd6311.js @ 5061]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0567_0xcdd6311.js  字符偏移 5061
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function QK(e, s, r) {
  if (s.get(e)?.status === "running" && nb(e) && !utn(e)) p("task_kill_missing_loop_entry", "local_workflow");
  let o = L(e, s, "killed", {
    notified: !0
  });
  if (o) o.v2Run?.kill(r), _R(o.ownerAgentId, `workflow:${e}`, s), Tp(e), Si(e, "stopped", {
    toolUseId: o.toolUseId,
    summary: o.description
  }), lfe(e);
  return o !== null
}
