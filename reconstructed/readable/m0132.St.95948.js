/* ==============================================================================
 * m0132.St   [m0132_0xc24a4bb.js @ 95948]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 95948
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function St(e) {
  if (Array.isArray(e)) return "an array";
  if (e === null) return "null";
  if (e === void 0) return "missing";
  return typeof e === "object" ? "an object" : `a ${typeof e}`
}
