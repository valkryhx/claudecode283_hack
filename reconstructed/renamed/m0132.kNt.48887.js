/* ==========================================================================
 * m0132.kNt   [m0132_0xc24a4bb.js @ 48887]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function kNt(e) {
  let t = typeof e === "boolean" || typeof e === "string" || Number.isFinite(e),
    o = Array.isArray(e) && e.every(n => typeof n === "string");
  return t || o ? void 0 : "a value that is not a boolean, a string, a number or a list of strings";
}
