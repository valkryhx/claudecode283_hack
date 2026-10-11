/* ==========================================================================
 * m0132.um   [m0132_0xc24a4bb.js @ 28885]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var um = e => ps(e).map(t => {
  let o = t.hop;
  return o === void 0 ? t.members[0] : as(o, t.members);
});
