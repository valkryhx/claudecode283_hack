/* ==========================================================================
 * m0227.be   [m0227_0xc482590.js @ 3989]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function be(e, n) {
  if (e === n) return !0;
  let [r, s] = e.length <= n.length ? [e, n] : [n, e];
  if (s.length - r.length > 1) return !1;
  let E = 0,
    l = 0,
    g = 0;
  while (E < r.length && l < s.length) {
    if (r[E] === s[l]) {
      E++, l++;
      continue;
    }
    if (g > 0) return !1;
    if (g++, r.length === s.length) E++;
    l++;
  }
  return g === 0 || E === r.length;
}
