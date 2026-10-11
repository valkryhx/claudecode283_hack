/* ==============================================================================
 * m0025.M   [m0025_0xbf5baa8.js @ 10752]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0025_0xbf5baa8.js  字符偏移 10752
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
M = (e) => {
  let r = c.APPDATA || n.join(a, "AppData", "Roaming"),
    s = c.LOCALAPPDATA || n.join(a, "AppData", "Local");
  return {
    data: n.join(s, e, "Data"),
    config: n.join(r, e, "Config"),
    cache: n.join(s, e, "Cache"),
    log: n.join(s, e, "Log"),
    temp: n.join(m, e)
  }
}
