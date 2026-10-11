/* ==============================================================================
 * m0132.Oy   [m0132_0xc24a4bb.js @ 141639]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 141639
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Oy = `(fn => {
  try {
    return typeof fn === 'function' &&
      Object.prototype.toString.call(fn) === '[object AsyncGeneratorFunction]'
  } catch {
    return false
  }
})`;
