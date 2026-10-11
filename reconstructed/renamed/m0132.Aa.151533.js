/* ==========================================================================
 * m0132.Aa   [m0132_0xc24a4bb.js @ 151533]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Aa(e, t, o) {
  let r = {};
  for (let n of o.methods) r[n] = e.wrapMethod((...s) => e.callInterface({
    owner: o.owner,
    name: t,
    method: n,
    args: s
  }));
  return R_(r);
}
