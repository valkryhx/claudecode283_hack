/* ==============================================================================
 * m0132.iD   [m0132_0xc24a4bb.js @ 34880]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 34880
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function iD(e) {
  if (!Array.isArray(e)) return;
  let t = e.length,
    o = [];
  for (let r = 0; r < t; r += 1) {
    let n = e[r];
    if (!(Object.hasOwn(e, r) && typeof n === "string")) return;
    o.push(n)
  }
  return o
}
