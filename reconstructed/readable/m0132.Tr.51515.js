/* ==============================================================================
 * m0132.Tr   [m0132_0xc24a4bb.js @ 51515]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 51515
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Tr(e) {
  if (!G(e)) return "no { stream, text } (not an object)";
  if (!(e.stream === "stdout" || e.stream === "stderr")) return 'a stream that is neither "stdout" nor "stderr"';
  return typeof e.text === "string" && e.text !== "" ? void 0 : "a text that is not a non-empty string"
}
