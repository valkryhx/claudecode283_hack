/* ==========================================================================
 * m0025.M   [m0025_0xbf5baa8.js @ 10752]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
M = e => {
  let r = c.APPDATA || n.join(a, "AppData", "Roaming"),
    s = c.LOCALAPPDATA || n.join(a, "AppData", "Local");
  return {
    data: n.join(s, e, "Data"),
    config: n.join(r, e, "Config"),
    cache: n.join(s, e, "Cache"),
    log: n.join(s, e, "Log"),
    temp: n.join(m, e)
  };
}
