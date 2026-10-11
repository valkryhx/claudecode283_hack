/* ==========================================================================
 * m0025.x   [m0025_0xbf5baa8.js @ 10570]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
x = e => {
  let r = n.join(a, "Library");
  return {
    data: n.join(r, "Application Support", e),
    config: n.join(r, "Preferences", e),
    cache: n.join(r, "Caches", e),
    log: n.join(r, "Logs", e),
    temp: n.join(m, e)
  };
}
