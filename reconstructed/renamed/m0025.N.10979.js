/* ==========================================================================
 * m0025.N   [m0025_0xbf5baa8.js @ 10979]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
N = e => {
  let r = n.basename(a);
  return {
    data: n.join(c.XDG_DATA_HOME || n.join(a, ".local", "share"), e),
    config: n.join(c.XDG_CONFIG_HOME || n.join(a, ".config"), e),
    cache: n.join(c.XDG_CACHE_HOME || n.join(a, ".cache"), e),
    log: n.join(c.XDG_STATE_HOME || n.join(a, ".local", "state"), e),
    temp: n.join(m, r, e)
  };
}
