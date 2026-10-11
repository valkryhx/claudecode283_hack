/* ==============================================================================
 * m0132.Pn   [m0132_0xc24a4bb.js @ 151854]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 151854
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Pn(e, t, o) {
  let r = j2o(o);
  if (r !== void 0) return Pt(t, r, e.wrapMethod);
  if (o.owner === $he) {
    let n = e.local[t];
    if (!n) throw new De(`${e.pluginName}: the interface table names core as the owner of $.${t}, which core does not provide`);
    return n
  }
  return Aa(e, t, o)
}
