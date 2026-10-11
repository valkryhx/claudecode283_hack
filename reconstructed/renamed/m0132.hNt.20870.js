/* ==========================================================================
 * m0132.hNt   [m0132_0xc24a4bb.js @ 20870]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function hNt(e) {
  if (typeof e === "string") return e;
  if (e === null || typeof e !== "object" && typeof e !== "function") return String(e);
  return typeof e === "function" ? "[function]" : "[object]";
}
