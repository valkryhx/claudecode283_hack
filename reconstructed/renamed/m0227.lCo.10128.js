/* ==========================================================================
 * m0227.lCo   [m0227_0xc482590.js @ 10128]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function lCo(e, n, r) {
  if (r?.skipSkillPermissionReset !== !0) {
    let s = x("tengu_iridescent_pascal", !1);
    e.setToolPermissionContext(E => {
      let l = E.alwaysAllowRules.command;
      if (s && E.pollEventDeliveryGuard === void 0 && (l === n || l !== void 0 && n !== void 0 && l.length === n.length && l.every((g, p) => g === n[p]))) return E;
      return {
        ...E,
        alwaysAllowRules: {
          ...E.alwaysAllowRules,
          command: n
        },
        pollEventDeliveryGuard: void 0
      };
    });
  } else if (r.pollEventDelivery === !0 || r.pollEmptyDispatch === !0) e.setToolPermissionContext(s => _Pr(s));
}
