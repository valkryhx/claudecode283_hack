/* ==============================================================================
 * m0132.OVn   [m0132_0xc24a4bb.js @ 96110]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 96110
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function OVn(e, t, o) {
  if (!(mN(e) && e >= 1 && e <= o.columns)) return `columns must be a whole number from 1 to ${o.columns}`;
  return mN(t) && t >= 1 && t <= o.rows ? void 0 : `rows must be a whole number from 1 to ${o.rows}`
}
