/* ==============================================================================
 * m0132.Dp   [m0132_0xc24a4bb.js @ 179113]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 179113
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Dp(e) {
  let {
    context: t,
    wrapMethod: o,
    cloneIn: r,
    pluginName: n,
    vmClone: s
  } = e, i = $p.runInContext(Ay, t), p = zIo(n);
  return (a, f) => {
    if (!G(a)) return s(a);
    let m = Object.keys(a).filter(Sc).filter((d) => mdn.nameOf(a[d]) === d),
      u = i(Object.entries(jIo(a, (d) => o((y) => r(d(y))), p(f))), m);
    for (let d of m) {
      let y = u[d];
      if (typeof y === "function") mdn.mark(y, d)
    }
    return u
  }
}
