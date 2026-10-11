/* ==========================================================================
 * m0132.hn   [m0132_0xc24a4bb.js @ 115037]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function hn(e) {
  if (!G(e)) return `no kind (a chunk is an object; got ${e === null ? "null" : typeof e})`;
  let t = xn(e);
  return t === void 0 ? void 0 : `kind ${String(e.kind)} but no ${t}`;
}
