/* ==========================================================================
 * m0132.Us   [m0132_0xc24a4bb.js @ 50976]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Us = {
  event: "ui.open",
  check: K("ui.open").check,
  checkArgument: (e, t) => e.id !== t.id ? "a changed id (the pane being opened; next(e) passes it on)" : void 0
};
