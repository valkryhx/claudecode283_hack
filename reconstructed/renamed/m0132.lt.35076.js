/* ==========================================================================
 * m0132.lt   [m0132_0xc24a4bb.js @ 35076]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function lt(e, t) {
  let o = new Map();
  for (let r of e) o.set(r, (o.get(r) ?? 0) + 1);
  for (let r of t) {
    let n = o.get(r) ?? 0;
    if (n === 0) return !1;
    o.set(r, n - 1);
  }
  return !0;
}
