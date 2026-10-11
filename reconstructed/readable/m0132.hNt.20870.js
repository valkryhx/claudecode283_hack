/* ==============================================================================
 * m0132.hNt   [m0132_0xc24a4bb.js @ 20870]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 20870
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function hNt(e) {
  if (typeof e === "string") return e;
  if (e === null || typeof e !== "object" && typeof e !== "function") return String(e);
  return typeof e === "function" ? "[function]" : "[object]"
}
