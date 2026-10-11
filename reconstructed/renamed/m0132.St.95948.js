/* ==========================================================================
 * m0132.St   [m0132_0xc24a4bb.js @ 95948]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function St(e) {
  if (Array.isArray(e)) return "an array";
  if (e === null) return "null";
  if (e === void 0) return "missing";
  return typeof e === "object" ? "an object" : `a ${typeof e}`;
}
