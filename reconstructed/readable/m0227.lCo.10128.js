/* ==============================================================================
 * m0227.lCo   [m0227_0xc482590.js @ 10128]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 10128
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function lCo(e, n, r) {
  if (r?.skipSkillPermissionReset !== !0) {
    let s = x("tengu_iridescent_pascal", !1);
    e.setToolPermissionContext((E) => {
      let l = E.alwaysAllowRules.command;
      if (s && E.pollEventDeliveryGuard === void 0 && (l === n || l !== void 0 && n !== void 0 && l.length === n.length && l.every((g, p) => g === n[p]))) return E;
      return {
        ...E,
        alwaysAllowRules: {
          ...E.alwaysAllowRules,
          command: n
        },
        pollEventDeliveryGuard: void 0
      }
    })
  } else if (r.pollEventDelivery === !0 || r.pollEmptyDispatch === !0) e.setToolPermissionContext((s) => _Pr(s))
}
