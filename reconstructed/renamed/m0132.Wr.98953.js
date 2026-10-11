/* ==========================================================================
 * m0132.Wr   [m0132_0xc24a4bb.js @ 98953]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Wr(e, t) {
  return t.component === "Pane" && e.placement !== t.props.placement ? "a props.placement other than the surface drew (the surface places the pane; a rewrite changes the drawing alone)" : void 0;
}
