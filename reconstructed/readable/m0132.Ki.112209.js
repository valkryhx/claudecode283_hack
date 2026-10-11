/* ==============================================================================
 * m0132.Ki   [m0132_0xc24a4bb.js @ 112209]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 112209
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Ki = {
  event: "tool.call",
  restoreArgument: (e, t) => W(Bl, e, t),
  checkArgument: At,
  pinnedKeys: jl,
  settle: ln,
  stripResult: cn,
  check: C((e, t, o) => {
    let r = e.deny === void 0;
    return ct(e, "{ result }", (n) => Object.hasOwn(n, "result")) ?? (r ? Ss(e.context, e.result, (o ?? []).filter((n) => n.deny === void 0)) : void 0)
  }),
  measure: (e, t, o) => gt(e.context, ...o.map((r) => r.context)),
  carry: gLr
};
