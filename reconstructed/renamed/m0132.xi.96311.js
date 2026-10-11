/* ==========================================================================
 * m0132.xi   [m0132_0xc24a4bb.js @ 96311]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function* xi(e) {
  if (Array.isArray(e)) {
    for (let t of e) yield [1, t];
    return;
  }
  for (let [t, o] of Object.entries(e)) yield [t.length + 4, o];
}
