/* ==========================================================================
 * m0227.fe   [m0227_0xc482590.js @ 24035]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function fe(e, n, r) {
  if (--n.n < 0 || r > Ge) return !0;
  if (typeof e !== "object" || e === null) return !1;
  for (let s of Object.values(e)) if (fe(s, n, r + 1)) return !0;
  return !1;
}
