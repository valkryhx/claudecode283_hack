/* ==========================================================================
 * m0132.ct   [m0132_0xc24a4bb.js @ 34616]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ct(e, t, o) {
  if (e.deny === void 0) return o(e) ? void 0 : `neither ${t} nor { deny }`;
  return typeof e.deny === "string" ? o(e) ? `a deny beside ${t}` : void 0 : "a deny that is not a string";
}
