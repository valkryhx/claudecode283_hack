/* ==============================================================================
 * m0227.$e   [m0227_0xc482590.js @ 18080]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 18080
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function $e(e) {
  let n = S(e, "type"),
    r;
  if (typeof n === "string" && Q.has(n)) r = [n];
  else if (Array.isArray(n) && n.length > 0 && n.every((s) => typeof s === "string" && Q.has(s))) r = n.slice();
  else return;
  if (S(e, "nullable") === !0 && !r.includes("null")) r.push("null");
  return r
}
