/* ==========================================================================
 * m0132.Ho   [m0132_0xc24a4bb.js @ 21818]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ho({
  handler: e,
  tier: t,
  index: o,
  site: r,
  e: n,
  descent: s
}) {
  let {
    run: i,
    floors: p
  } = s;
  if (p.length === 0 || q(e)) return;
  let m = (e.isHop === !0 ? e.tiers ?? [] : [t]).map(k => z2o(p, k)),
    d = m.length > 0 && m.every(k => k !== void 0) ? m[0] : void 0;
  if (d === void 0) return;
  let y = `bypassed by ${d}`;
  kc().log(`${e.name}: ${r.event} ${y} (tier ${t}); beneath runs`), Ve(i, {
    index: o,
    plugin: e.name,
    tier: t,
    event: r.event,
    outcome: "skipped",
    reason: y,
    ms: 0,
    received: n,
    returned: void 0
  });
  let c = ft();
  return i.beneath = c, {
    run: c,
    floors: p
  };
}
