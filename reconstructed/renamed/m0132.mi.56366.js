/* ==========================================================================
 * m0132.mi   [m0132_0xc24a4bb.js @ 56366]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var mi = {
  event: "ui.blit",
  check: K("ui.blit").check,
  checkArgument: (e, t) => e.requestId !== t.requestId || e.key !== t.key || ("source" in e && e.source !== void 0) !== ("source" in t && t.source !== void 0) ? "a changed requestId, key or kind (the Raster or Image being blitted; next(e) passes them on)" : void 0
};
