/* ==============================================================================
 * m0132.Eo   [m0132_0xc24a4bb.js @ 171921]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 171921
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Eo(e, {
  clause: t,
  event: o,
  registration: r
}) {
  let n = Tp(e, t, o),
    s = (u, d) => e.framed(r, () => n(u, d)),
    {
      matcher: i
    } = t,
    a = o === "engine.create" ? void 0 : Ep(e, t),
    f = a === void 0 ? void 0 : (u, d) => e.framed(r, () => a(u, d)),
    m = i === void 0 ? {
      run: s
    } : {
      run: Ap(e, {
        matcher: i,
        event: o,
        run: s
      }),
      matcher: i
    };
  return f === void 0 ? m : {
    ...m,
    catch: f
  }
}
