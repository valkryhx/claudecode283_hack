/* ==========================================================================
 * m0567.QK   [m0567_0xcdd6311.js @ 5061]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function QK(e, s, r) {
  if (s.get(e)?.status === "running" && nb(e) && !utn(e)) p("task_kill_missing_loop_entry", "local_workflow");
  let o = L(e, s, "killed", {
    notified: !0
  });
  if (o) o.v2Run?.kill(r), _R(o.ownerAgentId, `workflow:${e}`, s), Tp(e), Si(e, "stopped", {
    toolUseId: o.toolUseId,
    summary: o.description
  }), lfe(e);
  return o !== null;
}
