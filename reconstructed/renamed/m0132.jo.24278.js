/* ==========================================================================
 * m0132.jo   [m0132_0xc24a4bb.js @ 24278]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    });
  }, e);
}
