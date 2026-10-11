/* ==============================================================================
 * m0132.Ap   [m0132_0xc24a4bb.js @ 171634]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 171634
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ap(e, {
  matcher: t,
  event: o,
  run: r
}) {
  let n = new Set,
    s = {
      count: 0
    };
  return (i, p) => {
    if (e.stamped(() => vdt(t, i))) return r(i, p);
    if (s.count >= DLr) return p(i);
    s.count += 1;
    let f = e.stamped(() => xNt(t, i));
    if (f !== void 0 && !n.has(f.path)) n.add(f.path), kc().log(MLr(e.pluginName, o, f), "warn");
    return p(i)
  }
}
