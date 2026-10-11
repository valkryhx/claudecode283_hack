/* ==============================================================================
 * m0132.cn   [m0132_0xc24a4bb.js @ 111729]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 111729
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function cn(e, t) {
  let {
    isReadOnly: o,
    ...r
  } = e;
  if (r.deny !== void 0 || r.ref === void 0) return r;
  let n = t.findLast((p) => p.ref === r.ref),
    s = $n(r.result);
  return n !== void 0 && n.isReadOnly === !0 && (r.result === void 0 || r.result === n.result || s !== void 0 && s === $n(n.result)) ? {
    ...r,
    isReadOnly: !0
  } : r
}
