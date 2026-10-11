/* ==============================================================================
 * m0025.fBo   [m0025_0xbf5baa8.js @ 12074]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0025_0xbf5baa8.js  字符偏移 12074
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function fBo(e) {
  let r = e,
    s = r.indexOf(FD);
  while (s >= 0) {
    let o = r.indexOf(gxe, s);
    if (o < 0) break;
    r = r.slice(0, s) + r.slice(o + gxe.length), s = r.indexOf(FD)
  }
  return r
}
