/* ==============================================================================
 * m0227.z0t   [m0227_0xc482590.js @ 22656]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 22656
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function z0t(e, n) {
  if (e?.type !== "tool_use" || e.name !== bi) return null;
  if (e.id !== void 0 && n.has(e.id)) return null;
  let r = e.input,
    s = r !== null && typeof r === "object" && "text" in r ? r.text : void 0;
  return typeof s === "string" && s.length > 0 ? s : null
}
