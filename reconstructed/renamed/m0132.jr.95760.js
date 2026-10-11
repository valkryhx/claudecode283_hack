/* ==========================================================================
 * m0132.jr   [m0132_0xc24a4bb.js @ 95760]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function jr(e, t) {
  let o = Fe(e, t);
  if (o !== void 0) return o;
  if (e.kind !== t.kind) return `a kind other than the ${t.kind} it was given`;
  return typeof e.value === "string" ? void 0 : "no { value } string";
}
