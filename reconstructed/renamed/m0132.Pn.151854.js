/* ==========================================================================
 * m0132.Pn   [m0132_0xc24a4bb.js @ 151854]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Pn(e, t, o) {
  let r = j2o(o);
  if (r !== void 0) return Pt(t, r, e.wrapMethod);
  if (o.owner === $he) {
    let n = e.local[t];
    if (!n) throw new De(`${e.pluginName}: the interface table names core as the owner of $.${t}, which core does not provide`);
    return n;
  }
  return Aa(e, t, o);
}
