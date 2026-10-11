/* ==============================================================================
 * m0132.Dr   [m0132_0xc24a4bb.js @ 97964]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 97964
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Dr(e, t) {
  for (let r of ["surface", "component", "requestId", "element", "module"])
    if (e[r] !== t[r]) return `{ ${r} } rewritten; only data may change`;
  if (!("data" in e) || e.data === void 0) return "no { data }";
  let o = TNt(e.data);
  return o === void 0 ? void 0 : `data ${o}`
}
