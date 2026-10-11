/* ==========================================================================
 * m0132.Ki   [m0132_0xc24a4bb.js @ 112209]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Ki = {
  event: "tool.call",
  restoreArgument: (e, t) => W(Bl, e, t),
  checkArgument: At,
  pinnedKeys: jl,
  settle: ln,
  stripResult: cn,
  check: C((e, t, o) => {
    let r = e.deny === void 0;
    return ct(e, "{ result }", n => Object.hasOwn(n, "result")) ?? (r ? Ss(e.context, e.result, (o ?? []).filter(n => n.deny === void 0)) : void 0);
  }),
  measure: (e, t, o) => gt(e.context, ...o.map(r => r.context)),
  carry: gLr
};
