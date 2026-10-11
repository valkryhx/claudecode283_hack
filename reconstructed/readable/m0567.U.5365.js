/* ==============================================================================
 * m0567.U   [m0567_0xcdd6311.js @ 5365]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0567_0xcdd6311.js  字符偏移 5365
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function U(e, s, r, o) {
  let n = !1;
  if (o.update(e, (a) => {
      if (a.status !== "running") return a;
      let i = a.agentControllers?.get(s);
      if (i && !i.signal.aborted) i.abort(new DOMException(r, "AbortError")), n = !0;
      return a
    }), n) _(r === "user-skip" ? "task_local_workflow_skip_agent" : "task_local_workflow_retry_agent");
  return n
}
