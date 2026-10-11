/* ==============================================================================
 * m0132.Fn   [m0132_0xc24a4bb.js @ 183981]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 183981
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Fn(e) {
  if (!e) return "a rejection that is not an Error";
  if (Eh(e)) return "a rejection that is not plain data";
  let t = Object.getOwnPropertyDescriptor(e, "message")?.value;
  return typeof t === "string" ? t : Fn(Object.getPrototypeOf(e))
}
