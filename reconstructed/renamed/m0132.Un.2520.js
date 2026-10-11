/* ==========================================================================
 * m0132.Un   [m0132_0xc24a4bb.js @ 2520]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Un(e, t) {
  if (G(t)) {
    let o = Object.create(null);
    for (let r of Object.keys(t).toSorted()) Object.defineProperty(o, r, {
      value: t[r],
      enumerable: !0
    });
    return o;
  }
  return t;
}
