/* ==============================================================================
 * m0132.Jt   [m0132_0xc24a4bb.js @ 46327]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 46327
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Jt(e, t) {
  let {
    description: o,
    argumentHint: r,
    isHidden: n
  } = e;
  if (typeof o !== "string") return "no { description } (a string)";
  if (!(r === void 0 || typeof r === "string")) return "an argumentHint that is not a string";
  if (typeof n !== "boolean") return "no { isHidden } (a boolean)";
  let a = o === t.description || o.length <= NS,
    f = r === void 0 || r === t.argumentHint || r.length <= NS;
  return a && f ? void 0 : `a description or argumentHint over ${NS} characters`
}
