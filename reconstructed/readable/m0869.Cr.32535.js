/* ==============================================================================
 * m0869.Cr   [m0869_0xd12567a.js @ 32535]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 32535
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Cr(e, r, s) {
  if (s?.aborted) return Promise.resolve();
  let g = new AbortController,
    f = () => g.abort();
  return s?.addEventListener("abort", f, {
    once: !0
  }), Promise.race([e, Q(r, g.signal)]).finally(() => {
    g.abort(), s?.removeEventListener("abort", f)
  })
}
