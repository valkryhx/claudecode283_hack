/* ==========================================================================
 * m0025.E   [m0025_0xbf5baa8.js @ 11533]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function E(e) {
  let r = e.replace(/[^a-zA-Z0-9]/g, "-");
  if (r.length <= y) return r;
  return `${r.slice(0, y)}-${Math.abs(QJ(e)).toString(36)}`;
}
