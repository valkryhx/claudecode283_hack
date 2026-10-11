/* ==============================================================================
 * m0855.Wor   [m0855_0xd10e439.js @ 1676]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0855_0xd10e439.js  字符偏移 1676
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Wor(e, t) {
  let r = e.toLowerCase();
  if (r === "auto" || r === "unset") return {
    value: void 0
  };
  if (r === "ultracode" && fx(t)) return {
    value: "xhigh"
  };
  let n = bhe(e);
  return n ? {
    value: n
  } : null
}
