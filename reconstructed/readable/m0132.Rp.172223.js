/* ==============================================================================
 * m0132.Rp   [m0132_0xc24a4bb.js @ 172223]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 172223
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Rp(e, t, o) {
  let r;
  for (let [n, s] of e.clauses.entries()) {
    if (!(x6(s.pattern, t) && !o.includes(n))) continue;
    let p = Eo(e, {
      clause: s,
      event: t,
      registration: n
    });
    r = r === void 0 ? p : vp(e, {
      outer: r,
      inner: p,
      pattern: s.pattern
    })
  }
  return r
}
