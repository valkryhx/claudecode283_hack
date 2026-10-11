/* ==============================================================================
 * m0132.FIo   [m0132_0xc24a4bb.js @ 38558]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 38558
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function FIo(e, t) {
  return e.length === t.length && e.every((o, r) => {
    let n = t[r];
    return n !== void 0 && o.path === n.path && o.kind === n.kind && o.content === n.content && o.parent === n.parent
  })
}
