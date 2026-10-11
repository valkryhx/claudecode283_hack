/* ==========================================================================
 * m0868.h   [m0868_0xd1234ad.js @ 1628]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function h(o, s, n, i, d) {
  let w = ce(),
    e;
  try {
    e = await w.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(e.map(async l => {
    if (!(l.isFile() || l.isSymbolicLink())) return null;
    if (!l.name.endsWith(".js")) return null;
    return v(F(o, l.name), s, n, i, d);
  }))).filter(l => l !== null);
}
