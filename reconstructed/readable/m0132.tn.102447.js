/* ==============================================================================
 * m0132.tn   [m0132_0xc24a4bb.js @ 102447]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 102447
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function tn(e, t) {
  let o = Object.keys(e).filter((n) => n !== "surface" && n !== "component");
  return t || o.length === 0 ? void 0 : `resolved ahead of time, once per surface and component; a matcher here takes surface and component only, not ${o.join(", ")}`
}
