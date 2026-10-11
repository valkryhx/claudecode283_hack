/* ==========================================================================
 * m0025.yBo   [m0025_0xbf5baa8.js @ 18309]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function yBo(e) {
  let r = new Set();
  if (process.env.P4PORT) r.add("perforce");
  try {
    let s = e ?? ce().cwd(),
      o = new Set(await v(s));
    for (let [i, u] of H) if (o.has(i)) r.add(u);
  } catch {}
  return [...r];
}
