/* ==========================================================================
 * m0132.ns   [m0132_0xc24a4bb.js @ 26479]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
  return s;
}
