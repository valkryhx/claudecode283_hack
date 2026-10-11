/* ==============================================================================
 * m0227.bPr   [m0227_0xc482590.js @ 11355]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 11355
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function bPr(e) {
  let n = [],
    r = 0;
  for (let s of e) {
    let E = s.pollEvent?.envelope ?? "",
      l = Buffer.byteLength(E, "utf8");
    if (n.length > 0 && (n.length >= hPr || r + l > ge)) break;
    n.push(s), r += l
  }
  return n
}
