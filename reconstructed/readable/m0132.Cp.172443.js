/* ==============================================================================
 * m0132.Cp   [m0132_0xc24a4bb.js @ 172443]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 172443
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Cp(e, {
  clause: t,
  registration: o
}) {
  let {
    engine: r,
    invoke: n,
    iterate: s,
    stamped: i,
    framed: p
  } = e, {
    matcher: a
  } = t, f = (d) => a === void 0 || i(() => vdt(a, d)), m = (d) => async (y, c) => s(f(y) ? await p(o, () => n(d, [r, y, c])) : c(y)), u = t.catch;
  return {
    kind: "generator",
    registration: o,
    matcher: a,
    open: m(t.hook),
    ...u !== void 0 && {
      catch: m(u)
    }
  }
}
