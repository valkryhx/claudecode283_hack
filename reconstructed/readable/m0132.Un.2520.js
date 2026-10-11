/* ==============================================================================
 * m0132.Un   [m0132_0xc24a4bb.js @ 2520]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 2520
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Un(e, t) {
  if (G(t)) {
    let o = Object.create(null);
    for (let r of Object.keys(t).toSorted()) Object.defineProperty(o, r, {
      value: t[r],
      enumerable: !0
    });
    return o
  }
  return t
}
