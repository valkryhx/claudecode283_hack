/* ==============================================================================
 * m0132.Ohe   [m0132_0xc24a4bb.js @ 14254]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 14254
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ohe(e, t = "Error", o) {
  let r = () => `${t}: ${e}`;
  return Object.setPrototypeOf(r, null), Object.freeze(r), Object.freeze({
    __proto__: null,
    name: t,
    message: e,
    stack: o ?? `${t}: ${e}`,
    toString: r
  })
}
