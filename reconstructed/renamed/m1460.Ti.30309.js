/* ==========================================================================
 * m1460.Ti   [m1460_0xd973957.js @ 30309]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ti(o, l) {
  let a = 0;
  for (let u of l) {
    let d = u.end + a;
    if (o < d) break;
    if (o < d + u.growth) return u.end;
    a += u.growth;
  }
  return o - a;
}
