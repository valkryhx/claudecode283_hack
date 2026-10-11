/* ==============================================================================
 * m0132.Tp   [m0132_0xc24a4bb.js @ 170174]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 170174
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Tp({
  engine: e,
  interfaces: t,
  invoke: o
}, {
  pattern: r,
  hook: n
}, s) {
  let i = s === "engine.create",
    p = W6e(r) ? r : void 0;
  return i ? t.wrap(n, p) : async (a, f) => await o(n, [e, a, f])
}
