/* ==============================================================================
 * m0132.vi   [m0132_0xc24a4bb.js @ 104118]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 104118
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var vi = {
  event: "ui.scroll",
  restoreArgument: (e, t) => W(po, e, t),
  checkArgument: (e, t) => {
    let o = pe(po, e, t),
      r = mN(e.offset);
    return o ?? (r ? void 0 : "an offset that is not a whole row number (0 or more)")
  },
  check: C(Ko)
};
