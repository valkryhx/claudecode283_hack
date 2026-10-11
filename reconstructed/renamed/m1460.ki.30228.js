/* ==========================================================================
 * m1460.ki   [m1460_0xd973957.js @ 30228]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ki(o, l) {
  let a = 0;
  for (let u of l) {
    if (o < u.end) break;
    a += u.growth;
  }
  return o + a;
}
