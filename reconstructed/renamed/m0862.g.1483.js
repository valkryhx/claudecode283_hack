/* ==========================================================================
 * m0862.g   [m0862_0xd11f1fb.js @ 1483]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function g(e, n) {
  b.lastIndex = n;
  let t = b.exec(e);
  if (!t || T(e, n + t[0].length)) return;
  return t[0];
}
