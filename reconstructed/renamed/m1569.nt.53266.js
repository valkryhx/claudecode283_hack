/* ==========================================================================
 * m1569.nt   [m1569_0xdceb889.js @ 53266]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function nt(e) {
  let r = 0;
  for (let n of e) if (n.addr >= r) r = n.addr + 1;
  return r;
}
