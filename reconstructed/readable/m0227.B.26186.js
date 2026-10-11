/* ==============================================================================
 * m0227.B   [m0227_0xc482590.js @ 26186]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 26186
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function B(e, n) {
  let r = e;
  for (let s of n.split("/").slice(1)) {
    let E = s.replaceAll("~1", "/").replaceAll("~0", "~");
    if (Array.isArray(r)) r = r[Number(E)];
    else if (G(r) && Object.hasOwn(r, E)) r = r[E];
    else return
  }
  return r
}
