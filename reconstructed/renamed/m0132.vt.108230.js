/* ==========================================================================
 * m0132.vt   [m0132_0xc24a4bb.js @ 108230]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function vt(e, t) {
  return e.plugin !== t.plugin || e.key !== t.key || e.id !== t.id ? "a changed reference (plugin, key and id say which value; next(e) passes them on)" : void 0;
}
