/* ==========================================================================
 * m0869.vTn   [m0869_0xd12567a.js @ 24712]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function vTn(e, r, s, g, f) {
  let w = f.probes.get(e);
  if (w) return w;
  let A = Tr(e, r, s, g).then(F => {
    if (F.kind !== "restore") f.probes.delete(e);
    return F;
  });
  return f.probes.set(e, A), A;
}
