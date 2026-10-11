/* ==========================================================================
 * m0132.I2o   [m0132_0xc24a4bb.js @ 37968]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function I2o(e, t) {
  let o = new Set(t.map(r => `${r.kind}\x00${r.path}`));
  return e.filter(r => !o.has(`${r.kind}\x00${r.path}`));
}
