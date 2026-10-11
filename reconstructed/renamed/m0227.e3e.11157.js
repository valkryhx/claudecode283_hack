/* ==========================================================================
 * m0227.e3e   [m0227_0xc482590.js @ 11157]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function e3e(e) {
  if (e.pollEvent === void 0) return d(Error("poll-event command without pollEvent payload")), "";
  return e.pollEvent.envelope;
}
