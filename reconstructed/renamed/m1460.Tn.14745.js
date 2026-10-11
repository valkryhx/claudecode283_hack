/* ==========================================================================
 * m1460.Tn   [m1460_0xd973957.js @ 14745]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Tn(o, l) {
  if (o.result === null) return l && o.fromLastResponse ? "running" : "unanswered";
  return o.result.isError ? "error" : "ok";
}
