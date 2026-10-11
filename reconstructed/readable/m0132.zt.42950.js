/* ==============================================================================
 * m0132.zt   [m0132_0xc24a4bb.js @ 42950]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 42950
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var zt = (e, t, o = {
  restored: [],
  passedProblem: () => {
    return
  }
}) => ({
  event: e,
  restoreArgument: (r, n) => W(["origin", ...o.restored], r, n),
  checkArgument: (r, n) => sr(r, n) ?? o.passedProblem(r),
  measureArgument: (r, n) => te(r.text, n.text),
  check: C((r) => typeof r[t] === "boolean" ? void 0 : `no { ${t} } (true or false)`)
});
