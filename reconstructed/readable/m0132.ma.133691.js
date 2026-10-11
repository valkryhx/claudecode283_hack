/* ==============================================================================
 * m0132.ma   [m0132_0xc24a4bb.js @ 133691]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 133691
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var ma = (e, t) => ({
  name: t.map((o) => o.name).join("+"),
  tier: t[0]?.tier,
  tiers: L(t.map(Ce)),
  budgetMs: 0,
  isHop: !0,
  run: (o, r, {
    open: n,
    floors: s
  }) => e.run({
    members: t,
    e: o,
    open: n,
    signal: r.signal,
    origin: r.origin,
    floors: s
  })
});
