/* ==============================================================================
 * m0132.Ea   [m0132_0xc24a4bb.js @ 140832]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 140832
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ea(e) {
  let t = Cn.runInContext("Error", e),
    o = Function.prototype[Symbol.hasInstance];
  Cn.runInContext("(isError => { const ordinary = Function.prototype[Symbol.hasInstance]; Object.defineProperty(Error, Symbol.hasInstance, { value: function hasInstance(value) { return this === Error ? isError(value) : ordinary.call(this, value) } }) })", e)(k0((r) => ddn(r) || ho(() => o.call(t, r))))
}
