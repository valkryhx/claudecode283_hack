/* ==============================================================================
 * m0132.jx   [m0132_0xc24a4bb.js @ 176178]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 176178
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function jx(e) {
  let t = Reflect.get(e, "result");
  return typeof t === "object" && t !== null && "then" in t && typeof t.then === "function" ? t : Promise.reject(new De("the stream carries no result of its own"))
}
