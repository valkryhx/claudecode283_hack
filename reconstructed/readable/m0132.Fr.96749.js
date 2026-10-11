/* ==============================================================================
 * m0132.Fr   [m0132_0xc24a4bb.js @ 96749]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 96749
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Fr(e) {
  switch (typeof e) {
    case "boolean":
      return 5;
    case "string":
      return e.length + 2;
    case "number":
      return String(e).length;
    default:
      return e === null ? 5 : void 0
  }
}
