/* ==========================================================================
 * m0132.Dp   [m0132_0xc24a4bb.js @ 179113]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Dp(e) {
  let {
      context: t,
      wrapMethod: o,
      cloneIn: r,
      pluginName: n,
      vmClone: s
    } = e,
    i = $p.runInContext(Ay, t),
    p = zIo(n);
  return (a, f) => {
    if (!G(a)) return s(a);
    let m = Object.keys(a).filter(Sc).filter(d => mdn.nameOf(a[d]) === d),
      u = i(Object.entries(jIo(a, d => o(y => r(d(y))), p(f))), m);
    for (let d of m) {
      let y = u[d];
      if (typeof y === "function") mdn.mark(y, d);
    }
    return u;
  };
}
