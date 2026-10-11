/* ==============================================================================
 * m0132.jo   [m0132_0xc24a4bb.js @ 24278]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 24278
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function jo(e, t, o) {
  if (t.length === 0) throw new De(`${o.plugin}: next.to() names no tier`);
  let r = Edt(o.tier);
  return t.toReversed().reduce((n, s) => {
    if (!JVn(s)) throw new De(`${o.plugin}: next.to names "${String(s)}", which is not a tier a dispatch continues at (append, builtin, core)`);
    if (r.length === 0) throw new De(`${o.plugin}: next.to is available to managed plugins (prependPlugins / appendPlugins) only, not to a ${o.tier} hook`);
    if (!r.includes(s)) throw new De(`${o.plugin}: next.to("${s}") skips nothing from ${o.tier}; a ${o.tier} hook may continue at ` + Edt(o.tier).join(", "));
    return G2o(n, {
      from: o.tier,
      to: s,
      plugin: o.plugin
    })
  }, e)
}
