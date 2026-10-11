/* ==========================================================================
 * m0132.ar   [m0132_0xc24a4bb.js @ 43316]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ar(e, t) {
  let {
    refusal: o,
    ...r
  } = e;
  return o !== void 0 && r.isFilled === !1 && t.some(s => s.refusal === o) ? {
    ...r,
    refusal: o
  } : r;
}
