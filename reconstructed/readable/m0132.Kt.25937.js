/* ==============================================================================
 * m0132.Kt   [m0132_0xc24a4bb.js @ 25937]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 25937
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Kt(e) {
  if (!(e instanceof Error)) return ut(String(e));
  let o = e instanceof De ? e.thrownName : e.name,
    r = o === void 0 ? "" : `${o}: `;
  return ut(`${r}${e.message}`)
}
