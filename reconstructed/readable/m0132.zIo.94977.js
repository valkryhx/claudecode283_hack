/* ==============================================================================
 * m0132.zIo   [m0132_0xc24a4bb.js @ 94977]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 94977
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function zIo(e) {
  let t = new Set;
  return (o) => {
    let r = o === void 0 ? tt : qz[o];
    return (n) => {
      if (!r.includes(n) || t.has(n)) return;
      t.add(n), kc().log(`${e}: $.ui.resolve: <${n}> was withheld by a ui.resolve hook; it draws a fragment`, "warn")
    }
  }
}
