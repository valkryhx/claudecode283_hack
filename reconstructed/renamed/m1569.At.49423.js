/* ==========================================================================
 * m1569.At   [m1569_0xdceb889.js @ 49423]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
        return "settled";
    }
  }
  return "unknown";
}
