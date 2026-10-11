/* ==========================================================================
 * m0132.or   [m0132_0xc24a4bb.js @ 40770]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function or(e) {
  if (e !== void 0 && !vNt(e)) return "a context that is not a list of texts";
  return (iD(e) ?? []).some(o => o === "") ? "a context with an empty entry" : void 0;
}
