/* ==========================================================================
 * m0132.Xr   [m0132_0xc24a4bb.js @ 99382]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Xr(e, t) {
  if (t.component !== "UserMessage") return;
  let o = Vr.find(r => $n(e[r]) !== $n(t.props[r]));
  if (o === void 0) return;
  return `a props.${o} other than the engine drew (the row names its message's origin, sender and task and how the view draws it; a rewrite changes the text alone)`;
}
