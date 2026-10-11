/* ==========================================================================
 * m0025.gK   [m0025_0xbf5baa8.js @ 10316]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function gK(e) {
  return e.sort((r, s) => {
    let o = s.modified.getTime() - r.modified.getTime();
    if (o !== 0) return o;
    return s.created.getTime() - r.created.getTime();
  });
}
