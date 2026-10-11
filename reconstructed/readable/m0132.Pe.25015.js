/* ==============================================================================
 * m0132.Pe   [m0132_0xc24a4bb.js @ 25015]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 25015
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Pe(e) {
  let t = e instanceof De && e.thrownName !== void 0 ? {
    name: e.thrownName
  } : e;
  return `errorKind=${e instanceof Error?Ym(t)??"Error":"unknown"} errorChars=${String(l(e)).length}`
}
