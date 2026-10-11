/* ==========================================================================
 * m0132.ip   [m0132_0xc24a4bb.js @ 164252]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var ip = e => G(e) ? Object.fromEntries(sp.flatMap(t => {
  let o = e[t];
  if (o === void 0) return [];
  return [[t, Array.isArray(o) ? [...o] : o]];
})) : void 0;
