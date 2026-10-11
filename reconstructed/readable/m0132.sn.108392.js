/* ==============================================================================
 * m0132.sn   [m0132_0xc24a4bb.js @ 108392]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 108392
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function sn(e, t) {
  let o = e.ifVersion !== t.ifVersion,
    r = $n(e.previous) !== $n(t.previous);
  return vt(e, t) ?? (o ? "a changed ifVersion (the condition is the caller's)" : void 0) ?? (r ? "a changed previous (the host stamps it)" : void 0)
}
