/* ==============================================================================
 * m0132.as   [m0132_0xc24a4bb.js @ 28426]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 28426
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var as = (e, t) => ({
  name: t.map((o) => o.name).join("+"),
  tier: t[0]?.tier,
  tiers: L(t.map(Ce)),
  ...t.at(-1)?.answersForEngine && {
    answersForEngine: !0
  },
  budgetMs: 0,
  isHop: !0,
  run: (o, r, {
    call: n,
    floors: s,
    cutAt: i
  }) => e.run({
    members: t,
    e: o,
    call: n,
    signal: r.signal,
    origin: r.origin,
    floors: s,
    cutAt: i
  })
});
