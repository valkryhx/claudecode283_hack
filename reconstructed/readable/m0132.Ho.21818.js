/* ==============================================================================
 * m0132.Ho   [m0132_0xc24a4bb.js @ 21818]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 21818
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
  let m = (e.isHop === !0 ? e.tiers ?? [] : [t]).map((k) => z2o(p, k)),
    d = m.length > 0 && m.every((k) => k !== void 0) ? m[0] : void 0;
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
  }
}
