/* ==============================================================================
 * m1569.fr   [m1569_0xdceb889.js @ 26291]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 26291
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function fr(e, r, n) {
  let {
    addr: s,
    by: a
  } = r;
  for (;;) {
    if (!a.startsWith("rule:")) return s;
    let w = Number(a.slice(5));
    if (!Number.isSafeInteger(w) || w < 0 || w >= s || !e.within(w, n)) return;
    let h = e.rows[w];
    if (!h) return;
    s = w, a = h.by
  }
}
