/* ==============================================================================
 * m0862.I   [m0862_0xd11f1fb.js @ 1241]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 1241
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function I(e, n) {
  let t = d(e, n);
  if (e[t] === ";") return t + 1;
  if (t >= e.length) return n;
  if (!v.test(e.slice(n, t))) return;
  let r = g(e, t);
  if (r === void 0 || r === "in" || r === "instanceof") return;
  return n
}
