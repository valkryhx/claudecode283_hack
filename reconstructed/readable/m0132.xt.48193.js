/* ==============================================================================
 * m0132.xt   [m0132_0xc24a4bb.js @ 48193]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 48193
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function xt(e, t) {
  let o = e.key !== t.key,
    r = $n(e.provider) !== $n(t.provider);
  return (o ? "a changed key (pinned)" : void 0) ?? (r ? "a changed provider (pinned: a fact)" : void 0)
}
