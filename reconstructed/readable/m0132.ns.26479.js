/* ==============================================================================
 * m0132.ns   [m0132_0xc24a4bb.js @ 26479]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 26479
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ns({
  error: e,
  handler: t,
  site: o,
  effect: r,
  cause: n
}) {
  let s = Ye(t, l(e));
  if (kc().log(`hook failed: ${t.name}: ${Pe(e)} (${o.event}; ${r})`, "error"), !q(t)) kc().hookFailed({
    plugin: t.name,
    environmentId: t.environmentId,
    event: o.event,
    reason: s,
    effect: r,
    hasOverrun: !1,
    skip: t.isHop === !0 ? void 0 : rs(e, n)
  });
  return s
}
