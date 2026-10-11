/* ==========================================================================
 * m0227.Pe   [m0227_0xc482590.js @ 4253]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Pe(e, n) {
  for (let r of [n.length - 1, n.length, n.length + 1]) {
    if (r <= 0 || r > e.length) continue;
    for (let s = 0; s + r <= e.length; s++) if (be(e.slice(s, s + r), n)) return !0;
  }
  return !1;
}
