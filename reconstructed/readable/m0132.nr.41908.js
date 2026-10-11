/* ==============================================================================
 * m0132.nr   [m0132_0xc24a4bb.js @ 41908]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 41908
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function nr(e) {
  if (!Array.isArray(e)) return e;
  let t = [];
  for (let o = 0; o < e.length; o += 1) {
    if (!Object.hasOwn(e, o)) {
      t.push(void 0);
      continue
    }
    let r = e[o];
    t.push(G(r) ? Object.fromEntries(Object.keys(r).map((n) => [n, r[n]])) : r)
  }
  return t
}
