/* ==========================================================================
 * m0132.hdn   [m0132_0xc24a4bb.js @ 125695]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var hdn = e => ({
  input_tokens: e.input_tokens,
  output_tokens: e.output_tokens,
  cache_read_input_tokens: e.cache_read_input_tokens ?? 0,
  cache_creation_input_tokens: e.cache_creation_input_tokens ?? 0
});
