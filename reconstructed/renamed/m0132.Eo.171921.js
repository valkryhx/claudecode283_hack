/* ==========================================================================
 * m0132.Eo   [m0132_0xc24a4bb.js @ 171921]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
  };
}
