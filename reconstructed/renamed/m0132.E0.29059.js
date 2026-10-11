/* ==========================================================================
 * m0132.E0   [m0132_0xc24a4bb.js @ 29059]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    });
  }, u)(e, r, {
    run: d,
    floors: a
  }).then(c => (f?.(Ft(d)), c)).catch(c => {
    if (!Ne(c, r)) kc().log(`hooks chain failed: ${Pe(c)}`, "error");
    throw c;
  });
}
