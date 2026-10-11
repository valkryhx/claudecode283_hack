/* ==========================================================================
 * m1460.no   [m1460_0xd973957.js @ 18351]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function no(o, l) {
  if (o.status === "not-started") return "Not started yet";
  return l ? `No ${l} agents` : "No agents";
}
