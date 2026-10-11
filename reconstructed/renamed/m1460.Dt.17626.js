/* ==========================================================================
 * m1460.Dt   [m1460_0xd973957.js @ 17626]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Dt(o, l) {
  if (o.state === "done") return "done";
  if (o.state === "error") {
    if (o.skipped) return "skipped";
    if (o.blocked) return "blocked";
    return "failed";
  }
  if (!l) return "interrupted";
  return o.queuedAt != null && o.startedAt == null ? "queued" : "running";
}
