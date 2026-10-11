/* ==========================================================================
 * m0132.jIo   [m0132_0xc24a4bb.js @ 93517]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function jIo(e, t, o) {
  let r = {};
  for (let [n, s] of Object.entries(e)) if (typeof s === "function") r[n] = t(s);
  for (let n of tt) if (!r[n]) o(n), r[n] = t(di);
  return r;
}
