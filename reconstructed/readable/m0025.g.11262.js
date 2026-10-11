/* ==============================================================================
 * m0025.g   [m0025_0xbf5baa8.js @ 11262]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0025_0xbf5baa8.js  字符偏移 11262
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function g(e, {
  suffix: r = "nodejs"
} = {}) {
  if (typeof e !== "string") throw TypeError(`Expected a string, got ${typeof e}`);
  if (r) e += `-${r}`;
  if (l.platform === "darwin") return x(e);
  if (l.platform === "win32") return M(e);
  return N(e)
}
