/* ==========================================================================
 * m0132.Ft   [m0132_0xc24a4bb.js @ 21421]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ft(e) {
  let t = [];
  for (let o = e; o !== void 0; o = o.beneath) if (o.entry !== void 0) t.push(o.entry);
  return t.length === 0 ? LIo : Object.freeze(t);
}
