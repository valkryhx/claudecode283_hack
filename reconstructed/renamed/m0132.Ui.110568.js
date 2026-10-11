/* ==========================================================================
 * m0132.Ui   [m0132_0xc24a4bb.js @ 110568]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ui(e) {
  let t = {};
  for (let o of mn) if (Object.hasOwn(e, o)) t[o] = e[o];
  return Object.keys(t).length === 0 ? void 0 : t;
}
