/* ==============================================================================
 * m0227.ee   [m0227_0xc482590.js @ 18596]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 18596
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ee(e, n) {
  return e.some((r) => {
    switch (r) {
      case "null":
        return n === null;
      case "boolean":
        return typeof n === "boolean";
      case "string":
        return typeof n === "string";
      case "number":
        return typeof n === "number" && Number.isFinite(n);
      case "integer":
        return typeof n === "number" && Number.isInteger(n);
      case "array":
        return Array.isArray(n);
      case "object":
        return G(n);
      default:
        return !0
    }
  })
}
