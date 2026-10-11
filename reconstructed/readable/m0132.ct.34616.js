/* ==============================================================================
 * m0132.ct   [m0132_0xc24a4bb.js @ 34616]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 34616
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ct(e, t, o) {
  if (e.deny === void 0) return o(e) ? void 0 : `neither ${t} nor { deny }`;
  return typeof e.deny === "string" ? o(e) ? `a deny beside ${t}` : void 0 : "a deny that is not a string"
}
