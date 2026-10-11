/* ==========================================================================
 * m0132.nr   [m0132_0xc24a4bb.js @ 41908]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function nr(e) {
  if (!Array.isArray(e)) return e;
  let t = [];
  for (let o = 0; o < e.length; o += 1) {
    if (!Object.hasOwn(e, o)) {
      t.push(void 0);
      continue;
    }
    let r = e[o];
    t.push(G(r) ? Object.fromEntries(Object.keys(r).map(n => [n, r[n]])) : r);
  }
  return t;
}
