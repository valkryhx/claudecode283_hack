/* ==========================================================================
 * m0132.Kr   [m0132_0xc24a4bb.js @ 98738]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Kr(e, t) {
  return t.component === "CommandOutput" && e.command !== t.props.command ? "a props.command other than the engine drew (the name is the command that printed the row; a rewrite changes the row alone)" : void 0;
}
