/* ==============================================================================
 * m0132.hn   [m0132_0xc24a4bb.js @ 115037]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 115037
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function hn(e) {
  if (!G(e)) return `no kind (a chunk is an object; got ${e===null?"null":typeof e})`;
  let t = xn(e);
  return t === void 0 ? void 0 : `kind ${String(e.kind)} but no ${t}`
}
