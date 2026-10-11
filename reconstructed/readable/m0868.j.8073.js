/* ==============================================================================
 * m0868.j   [m0868_0xd1234ad.js @ 8073]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0868_0xd1234ad.js  字符偏移 8073
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function j(o, s) {
  if (Br("workflows") || OWe()) return [...CSt()];
  let [n, i] = await Promise.all([b(o, s), P(s)]), d = S(i), w = CSt(), e = new Map(w.map((k) => [k.name, k])), r = O(d, e);
  for (let k of r) e.set(k.name, k);
  let l = O(n, e),
    f = new Set(l.map((k) => k.name)),
    u = r.filter((k) => !f.has(k.name)),
    c = new Set([...f, ...u.map((k) => k.name)]);
  return [...w.filter((k) => !c.has(k.name)), ...u, ...l]
}
