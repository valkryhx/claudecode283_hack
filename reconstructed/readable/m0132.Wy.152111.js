/* ==============================================================================
 * m0132.Wy   [m0132_0xc24a4bb.js @ 152111]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 152111
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Wy(e, {
  table: t,
  beneath: o,
  isObserving: r
}) {
  let n = Object.assign(Object.create(null), e.slots);
  for (let [s, i] of Object.entries(t)) {
    let a = r && i.withheldBy === void 0 ? Oa(e, s, i) : Pn(e, s, i);
    n[s] = a, o.set(a, {
      name: s,
      descriptor: i
    })
  }
  return n
}
