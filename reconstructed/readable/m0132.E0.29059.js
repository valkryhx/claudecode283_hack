/* ==============================================================================
 * m0132.E0   [m0132_0xc24a4bb.js @ 29059]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 29059
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function E0({
  e,
  handlers: t,
  site: o,
  signal: r = new AbortController().signal,
  cutAt: n,
  budgetMs: s = o.budgetMs ?? Dhe,
  bottom: i,
  origin: p = fFe,
  floors: a = z6e,
  trace: f
}) {
  let m = um(t),
    u = gf({
      bottom: i ?? (() => mLr(o)),
      index: m.length,
      event: o.event
    }),
    d = ft(),
    y = SNt();
  return m.reduceRight((c, k, A) => {
    let x = A === m.length - 1;
    return ym({
      handler: k,
      index: A,
      below: c,
      site: o,
      budgetMs: s,
      cutAt: n,
      origin: p,
      nothingBelow: i === void 0 && x,
      answersForEngine: y && x && k.answersForEngine === !0
    })
  }, u)(e, r, {
    run: d,
    floors: a
  }).then((c) => (f?.(Ft(d)), c)).catch((c) => {
    if (!Ne(c, r)) kc().log(`hooks chain failed: ${Pe(c)}`, "error");
    throw c
  })
}
