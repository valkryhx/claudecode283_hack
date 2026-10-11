/* ==============================================================================
 * m0862.B   [m0862_0xd11f1fb.js @ 5480]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 5480
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function B(e) {
  if (typeof e !== "object" || e === null || !("loc" in e)) return !1;
  let n = e.loc;
  return typeof n === "object" && n !== null && "line" in n && typeof n.line === "number" && "column" in n && typeof n.column === "number"
}
