/* ==============================================================================
 * m0869.tsr   [m0869_0xd12567a.js @ 29905]
 * --------------------------------------------------------------------------
 * 作用: 子 workflow 拒绝桩：子 workflow 里调用 workflow() 直接 reject（只能嵌一层）。
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 29905
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function tsr() {
  return Promise.reject(Error("workflow() cannot be called from within a child workflow \u2014 nesting is limited to one level. Inline the inner script or call its agents directly."))
}
