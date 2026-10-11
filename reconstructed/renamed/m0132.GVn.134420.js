/* ==========================================================================
 * m0132.GVn   [m0132_0xc24a4bb.js @ 134420]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function GVn(e) {
  let {
      e: t,
      site: o,
      bottom: r
    } = e,
    n = ua(e.handlers),
    i = ca(r ?? (() => async function* () {
      return await mLr(o);
    }()), n.length, o.event),
    p = n.reduceRight((m, u, d) => Gd({
      handler: u,
      index: d,
      below: m,
      site: o,
      budgetMs: e.budgetMs ?? Dhe,
      origin: e.origin ?? fFe,
      nothingBelow: r === void 0 && d === n.length - 1
    }), i),
    a = e.signal ?? new AbortController().signal,
    f = e.floors ?? z6e;
  return u1(async function* () {
    try {
      return yield* p(t, a, {
        run: ft(),
        floors: f
      });
    } catch (m) {
      throw kc().log(`hooks stream chain failed: ${Pe(m)}`, "error"), m;
    }
  });
}
