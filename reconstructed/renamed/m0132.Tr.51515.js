/* ==========================================================================
 * m0132.Tr   [m0132_0xc24a4bb.js @ 51515]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Tr(e) {
  if (!G(e)) return "no { stream, text } (not an object)";
  if (!(e.stream === "stdout" || e.stream === "stderr")) return 'a stream that is neither "stdout" nor "stderr"';
  return typeof e.text === "string" && e.text !== "" ? void 0 : "a text that is not a non-empty string";
}
