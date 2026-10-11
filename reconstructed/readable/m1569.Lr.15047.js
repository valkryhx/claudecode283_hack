/* ==============================================================================
 * m1569.Lr   [m1569_0xdceb889.js @ 15047]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 15047
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Lr(e) {
  if (Ge(e)) {
    let r = e.$atleast;
    if (!Number.isSafeInteger(r) || r < 0) throw new P("atleast(N, pattern): N must be a non-negative integer", "world: bad threshold count");
    return {
      $atleast: r,
      of: Ce(e.of)
    }
  }
  return Ce(e)
}
