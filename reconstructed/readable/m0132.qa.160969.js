/* ==============================================================================
 * m0132.qa   [m0132_0xc24a4bb.js @ 160969]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 160969
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function qa(e) {
  if (e === void 0) return;
  let t = G(e) ? Object.keys(e).filter((r) => r !== "breakdown" && r !== "columns") : [];
  return G(e) && t.length === 0 ? void 0 : "takes { breakdown, columns } or nothing" + (t.length > 0 ? ` (not ${t.join(", ")})` : "")
}
