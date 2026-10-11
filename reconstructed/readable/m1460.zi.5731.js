/* ==============================================================================
 * m1460.zi   [m1460_0xd973957.js @ 5731]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 5731
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function zi(o) {
  if (o === void 0 || o === null) return [];
  return (typeof o === "object" && !Array.isArray(o) ? Object.entries(o) : [
    ["input", o]
  ]).map(([a, u]) => {
    let d;
    if (typeof u === "string") d = u;
    else try {
      d = b(u) ?? String(u)
    } catch {
      d = String(u)
    }
    return {
      key: a,
      ...as(d, Ui)
    }
  })
}
