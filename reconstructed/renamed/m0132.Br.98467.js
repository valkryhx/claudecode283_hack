/* ==========================================================================
 * m0132.Br   [m0132_0xc24a4bb.js @ 98467]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Br(e, t) {
  let o = Object.hasOwn(t.props, "onScreen") ? t.props.onScreen : void 0;
  return NVn.has(t.component) && $n(e.onScreen) !== $n(o) ? "a props.onScreen other than the surface reported (the surface says what its viewport shows; a rewrite changes the drawing alone)" : void 0;
}
