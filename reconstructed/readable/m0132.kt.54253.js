/* ==============================================================================
 * m0132.kt   [m0132_0xc24a4bb.js @ 54253]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 54253
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function kt(e, t) {
  let {
    blocks: o,
    instructionFiles: r
  } = e;
  if (!Array.isArray(o)) return e;
  for (let i = 0; i < o.length; i += 1) {
    let p = o[i];
    if (!(Object.hasOwn(o, i) && G(p) && typeof p.name === "string" && typeof p.text === "string")) return e
  }
  if (!(r === void 0 || Vt(r))) return e;
  let s = {
    blocks: o,
    instructionFiles: r
  };
  return {
    ...e,
    ...qs(s, t)
  }
}
