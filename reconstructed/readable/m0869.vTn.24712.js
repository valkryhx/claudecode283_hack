/* ==============================================================================
 * m0869.vTn   [m0869_0xd12567a.js @ 24712]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 24712
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function vTn(e, r, s, g, f) {
  let w = f.probes.get(e);
  if (w) return w;
  let A = Tr(e, r, s, g).then((F) => {
    if (F.kind !== "restore") f.probes.delete(e);
    return F
  });
  return f.probes.set(e, A), A
}
