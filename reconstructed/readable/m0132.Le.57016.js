/* ==============================================================================
 * m0132.Le   [m0132_0xc24a4bb.js @ 57016]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 57016
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Le(e) {
  switch (typeof e) {
    case "string":
      return [e];
    case "object":
      if (e === null) return [];
      return Array.isArray(e) ? e.flatMap(Le) : Object.entries(e).flatMap(([t, o]) => [t, ...Le(o)]);
    default:
      return []
  }
}
