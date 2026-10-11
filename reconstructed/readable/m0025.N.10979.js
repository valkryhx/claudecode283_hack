/* ==============================================================================
 * m0025.N   [m0025_0xbf5baa8.js @ 10979]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0025_0xbf5baa8.js  字符偏移 10979
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
N = (e) => {
  let r = n.basename(a);
  return {
    data: n.join(c.XDG_DATA_HOME || n.join(a, ".local", "share"), e),
    config: n.join(c.XDG_CONFIG_HOME || n.join(a, ".config"), e),
    cache: n.join(c.XDG_CACHE_HOME || n.join(a, ".cache"), e),
    log: n.join(c.XDG_STATE_HOME || n.join(a, ".local", "state"), e),
    temp: n.join(m, r, e)
  }
}
