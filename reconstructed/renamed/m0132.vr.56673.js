/* ==========================================================================
 * m0132.vr   [m0132_0xc24a4bb.js @ 56673]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function vr(e) {
  let t = G(e) ? e.tool_use_id : null;
  return t === void 0 || typeof t === "string" ? t : null;
}
