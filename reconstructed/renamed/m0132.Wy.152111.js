/* ==========================================================================
 * m0132.Wy   [m0132_0xc24a4bb.js @ 152111]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Wy(e, {
  table: t,
  beneath: o,
  isObserving: r
}) {
  let n = Object.assign(Object.create(null), e.slots);
  for (let [s, i] of Object.entries(t)) {
    let a = r && i.withheldBy === void 0 ? Oa(e, s, i) : Pn(e, s, i);
    n[s] = a, o.set(a, {
      name: s,
      descriptor: i
    });
  }
  return n;
}
