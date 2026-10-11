/* ==========================================================================
 * m0132.Ea   [m0132_0xc24a4bb.js @ 140832]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ea(e) {
  let t = Cn.runInContext("Error", e),
    o = Function.prototype[Symbol.hasInstance];
  Cn.runInContext("(isError => { const ordinary = Function.prototype[Symbol.hasInstance]; Object.defineProperty(Error, Symbol.hasInstance, { value: function hasInstance(value) { return this === Error ? isError(value) : ordinary.call(this, value) } }) })", e)(k0(r => ddn(r) || ho(() => o.call(t, r))));
}
