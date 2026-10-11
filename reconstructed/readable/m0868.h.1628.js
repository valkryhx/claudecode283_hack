/* ==============================================================================
 * m0868.h   [m0868_0xd1234ad.js @ 1628]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0868_0xd1234ad.js  字符偏移 1628
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function h(o, s, n, i, d) {
  let w = ce(),
    e;
  try {
    e = await w.readdir(o)
  } catch {
    return []
  }
  return (await Promise.all(e.map(async (l) => {
    if (!(l.isFile() || l.isSymbolicLink())) return null;
    if (!l.name.endsWith(".js")) return null;
    return v(F(o, l.name), s, n, i, d)
  }))).filter((l) => l !== null)
}
