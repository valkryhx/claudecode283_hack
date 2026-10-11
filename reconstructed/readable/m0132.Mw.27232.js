/* ==============================================================================
 * m0132.Mw   [m0132_0xc24a4bb.js @ 27232]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 27232
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Mw(e, t) {
  if (e === void 0) return () => {};
  if (e.aborted) return t.abort(e.reason), () => {};
  let o = () => t.abort(e.reason);
  return e.addEventListener("abort", o, {
    once: !0
  }), () => e.removeEventListener("abort", o)
}
