/* ==============================================================================
 * m0132.kNt   [m0132_0xc24a4bb.js @ 48887]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 48887
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function kNt(e) {
  let t = typeof e === "boolean" || typeof e === "string" || Number.isFinite(e),
    o = Array.isArray(e) && e.every((n) => typeof n === "string");
  return t || o ? void 0 : "a value that is not a boolean, a string, a number or a list of strings"
}
