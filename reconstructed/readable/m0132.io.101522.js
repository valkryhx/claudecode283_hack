/* ==============================================================================
 * m0132.io   [m0132_0xc24a4bb.js @ 101522]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 101522
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function io(e, t) {
  if (!BCe(e) || !Object.hasOwn(e, t)) return;
  let o = e[t];
  if (typeof o === "string") return [o];
  return Array.isArray(o) && o.length > 0 && o.every((n) => typeof n === "string") ? o : void 0
}
