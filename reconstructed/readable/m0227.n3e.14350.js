/* ==============================================================================
 * m0227.n3e   [m0227_0xc482590.js @ 14350]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 14350
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function n3e(e) {
  if (e.reason === "root_not_object") return "the API only accepts an object-rooted tool input schema, so every request would be rejected";
  return e.scope === "whole" ? "no output can satisfy this schema, so StructuredOutput validation would fail on every attempt" : "one property or item sub-schema admits no value, so any output that fills it in fails validation"
}
