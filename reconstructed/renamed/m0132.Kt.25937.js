/* ==========================================================================
 * m0132.Kt   [m0132_0xc24a4bb.js @ 25937]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Kt(e) {
  if (!(e instanceof Error)) return ut(String(e));
  let o = e instanceof De ? e.thrownName : e.name,
    r = o === void 0 ? "" : `${o}: `;
  return ut(`${r}${e.message}`);
}
