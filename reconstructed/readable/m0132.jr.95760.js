/* ==============================================================================
 * m0132.jr   [m0132_0xc24a4bb.js @ 95760]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 95760
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function jr(e, t) {
  let o = Fe(e, t);
  if (o !== void 0) return o;
  if (e.kind !== t.kind) return `a kind other than the ${t.kind} it was given`;
  return typeof e.value === "string" ? void 0 : "no { value } string"
}
