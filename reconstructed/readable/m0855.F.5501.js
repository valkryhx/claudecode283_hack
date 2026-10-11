/* ==============================================================================
 * m0855.F   [m0855_0xd10e439.js @ 5501]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0855_0xd10e439.js  字符偏移 5501
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function F(e, t = !0, r, n) {
  let s = e.toLowerCase();
  if (s === "auto" || s === "unset") return O(t, r, n);
  if (s === "ultracode") return R(r);
  let o = bhe(e);
  if (!o) return {
    message: `Invalid argument: ${e}. Valid options are: ${g(it())}`
  };
  return w(o, t, r, n)
}
