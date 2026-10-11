/* ==========================================================================
 * m0567.U   [m0567_0xcdd6311.js @ 5365]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function U(e, s, r, o) {
  let n = !1;
  if (o.update(e, a => {
    if (a.status !== "running") return a;
    let i = a.agentControllers?.get(s);
    if (i && !i.signal.aborted) i.abort(new DOMException(r, "AbortError")), n = !0;
    return a;
  }), n) _(r === "user-skip" ? "task_local_workflow_skip_agent" : "task_local_workflow_retry_agent");
  return n;
}
