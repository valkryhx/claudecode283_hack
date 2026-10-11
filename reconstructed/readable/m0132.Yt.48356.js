/* ==============================================================================
 * m0132.Yt   [m0132_0xc24a4bb.js @ 48356]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 48356
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Yt(e, t) {
  let {
    label: o,
    description: r,
    isHidden: n
  } = e;
  if (!(typeof o === "string" && o !== "")) return "no { label } (a non-empty string)";
  if (typeof n !== "boolean") return "no { isHidden } (a boolean)";
  if (r !== void 0 && typeof r !== "string") return "a description that is not a string";
  let i = o === t.label || o.length <= NS,
    p = r === void 0 || r === t.description || r.length <= NS;
  return i && p ? void 0 : `a label or description over ${NS} characters`
}
