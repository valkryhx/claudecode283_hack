/* ==========================================================================
 * m0132.sr   [m0132_0xc24a4bb.js @ 42771]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function sr(e, t) {
  if ($n(e.origin) !== $n(t.origin)) return "a changed origin (the engine set it; next(e) passes it on)";
  return typeof e.text === "string" ? void 0 : "no { text } (a string)";
}
