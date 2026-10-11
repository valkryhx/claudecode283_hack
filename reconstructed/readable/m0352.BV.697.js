/* ==============================================================================
 * m0352.BV   [m0352_0xc63a7b9.js @ 697]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0352_0xc63a7b9.js  字符偏移 697
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function BV(n, s, r) {
  let e = !1,
    i;
  return s.update(n, (t) => {
    if (i = t, t.notified) return t;
    if (e = !0, r?.skipStampIfRunning && t.status === "running") return t;
    return {
      ...t,
      notified: !0
    }
  }), {
    claimed: e,
    task: i
  }
}
