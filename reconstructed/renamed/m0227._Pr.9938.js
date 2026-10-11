/* ==========================================================================
 * m0227._Pr   [m0227_0xc482590.js @ 9938]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function _Pr(e) {
  if (e.alwaysAllowRules.command === void 0 && e.pollEventDeliveryGuard === !0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      command: void 0
    },
    pollEventDeliveryGuard: !0
  };
}
