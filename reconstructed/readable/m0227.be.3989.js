/* ==============================================================================
 * m0227.be   [m0227_0xc482590.js @ 3989]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 3989
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function be(e, n) {
  if (e === n) return !0;
  let [r, s] = e.length <= n.length ? [e, n] : [n, e];
  if (s.length - r.length > 1) return !1;
  let E = 0,
    l = 0,
    g = 0;
  while (E < r.length && l < s.length) {
    if (r[E] === s[l]) {
      E++, l++;
      continue
    }
    if (g > 0) return !1;
    if (g++, r.length === s.length) E++;
    l++
  }
  return g === 0 || E === r.length
}
