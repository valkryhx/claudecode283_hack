/* ==========================================================================
 * m0132.R_   [m0132_0xc24a4bb.js @ 1679]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function R_(e) {
  for (let t of Object.values(e)) if (typeof t === "function") Object.setPrototypeOf(t, null);
  return Object.setPrototypeOf(e, null), Object.freeze(e);
}
