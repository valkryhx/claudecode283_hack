/* ==============================================================================
 * m0132.wp   [m0132_0xc24a4bb.js @ 169934]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 169934
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function wp(e, t) {
  let {
    pattern: o,
    matcher: r
  } = t;
  if (r !== void 0) {
    let n = W6e(o),
      s = n ? PNt.filter((i) => x6(o, i)) : [o];
    for (let i of s) {
      let p = $Ce(i).checkMatcher?.(r, n);
      if (p !== void 0) throw new De(`${e.pluginName}: ${i}: ${p}`)
    }
  }
  e.clauses = [...e.clauses, t]
}
