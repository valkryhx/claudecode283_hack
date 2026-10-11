/* ==========================================================================
 * m0132.OVn   [m0132_0xc24a4bb.js @ 96110]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function OVn(e, t, o) {
  if (!(mN(e) && e >= 1 && e <= o.columns)) return `columns must be a whole number from 1 to ${o.columns}`;
  return mN(t) && t >= 1 && t <= o.rows ? void 0 : `rows must be a whole number from 1 to ${o.rows}`;
}
