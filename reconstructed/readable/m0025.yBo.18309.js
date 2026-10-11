/* ==============================================================================
 * m0025.yBo   [m0025_0xbf5baa8.js @ 18309]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0025_0xbf5baa8.js  字符偏移 18309
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function yBo(e) {
  let r = new Set;
  if (process.env.P4PORT) r.add("perforce");
  try {
    let s = e ?? ce().cwd(),
      o = new Set(await v(s));
    for (let [i, u] of H)
      if (o.has(i)) r.add(u)
  } catch {}
  return [...r]
}
