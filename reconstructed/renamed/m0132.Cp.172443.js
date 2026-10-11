/* ==========================================================================
 * m0132.Cp   [m0132_0xc24a4bb.js @ 172443]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    } = e,
    {
      matcher: a
    } = t,
    f = d => a === void 0 || i(() => vdt(a, d)),
    m = d => async (y, c) => s(f(y) ? await p(o, () => n(d, [r, y, c])) : c(y)),
    u = t.catch;
  return {
    kind: "generator",
    registration: o,
    matcher: a,
    open: m(t.hook),
    ...(u !== void 0 && {
      catch: m(u)
    })
  };
}
