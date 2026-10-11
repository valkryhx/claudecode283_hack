/* ==============================================================================
 * m0025.pmt   [m0025_0xbf5baa8.js @ 9907]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0025_0xbf5baa8.js  字符偏移 9907
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function pmt(e) {
  if (e.type !== "user") return !1;
  let r = e.message?.content;
  return Array.isArray(r) && r.some((s) => s?.type === "text" && typeof s.text === "string" && s.text.startsWith(`<${x_e}>`))
}
