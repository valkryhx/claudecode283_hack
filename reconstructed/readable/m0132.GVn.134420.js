/* ==============================================================================
 * m0132.GVn   [m0132_0xc24a4bb.js @ 134420]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 134420
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function GVn(e) {
  let {
    e: t,
    site: o,
    bottom: r
  } = e, n = ua(e.handlers), i = ca(r ?? (() => async function*() {
    return await mLr(o)
  }()), n.length, o.event), p = n.reduceRight((m, u, d) => Gd({
    handler: u,
    index: d,
    below: m,
    site: o,
    budgetMs: e.budgetMs ?? Dhe,
    origin: e.origin ?? fFe,
    nothingBelow: r === void 0 && d === n.length - 1
  }), i), a = e.signal ?? new AbortController().signal, f = e.floors ?? z6e;
  return u1(async function*() {
    try {
      return yield* p(t, a, {
        run: ft(),
        floors: f
      })
    } catch (m) {
      throw kc().log(`hooks stream chain failed: ${Pe(m)}`, "error"), m
    }
  })
}
