/* ==========================================================================
 * m0132.as   [m0132_0xc24a4bb.js @ 28426]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var as = (e, t) => ({
  name: t.map(o => o.name).join("+"),
  tier: t[0]?.tier,
  tiers: L(t.map(Ce)),
  ...(t.at(-1)?.answersForEngine && {
    answersForEngine: !0
  }),
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
