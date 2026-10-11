/* ==========================================================================
 * m0132.Kz   [m0132_0xc24a4bb.js @ 96906]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Kz(e) {
  if (e === null) return "null";
  let t = typeof e === "object";
  return Array.isArray(e) ? "an array" : t ? "an object" : `a ${typeof e}`;
}
