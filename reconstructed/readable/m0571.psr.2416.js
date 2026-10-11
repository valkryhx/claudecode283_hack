/* ==============================================================================
 * m0571.psr   [m0571_0xcddb07e.js @ 2416]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0571_0xcddb07e.js  字符偏移 2416
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function psr(r) {
  let a = r ? ETn() : void 0;
  if (r && a !== void 0) return j(r, a);
  let n = m(),
    i;
  try {
    i = await k(n)
  } catch {
    return []
  }
  let l = (await Promise.all(i.filter((s) => s.endsWith(".json")).map(async (s) => {
    try {
      let o = await h(p(n, s), "utf8"),
        e = J(o);
      return d(e, s.replace(/\.json$/, ""))
    } catch (o) {
      return t(`Failed to parse workflow snapshot ${s}: ${o instanceof Error?o.message:o}`), null
    }
  }))).filter((s) => s !== null);
  return l.sort((s, o) => o.startTime - s.startTime), l
}
