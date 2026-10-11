/* ==============================================================================
 * m0132.yt   [m0132_0xc24a4bb.js @ 37069]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 37069
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function yt(e) {
  if (e === void 0) return;
  if (!Array.isArray(e)) return "instructionFiles that is not a list of { path, kind, content }";
  let t = new Set;
  for (let o = 0; o < e.length; o += 1) {
    let r = e[o],
      n = zo(r, o);
    if (n !== void 0) return n;
    let s = Jo(r);
    if (t.has(s)) return `two instruction files with the path ${s}`;
    t.add(s)
  }
  return
}
