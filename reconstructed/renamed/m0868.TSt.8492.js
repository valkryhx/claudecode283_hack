/* ==========================================================================
 * m0868.TSt   [m0868_0xd1234ad.js @ 8492]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function TSt(o, s, n) {
  return (await kSe(s, n)).find(d => d.name === o);
}
