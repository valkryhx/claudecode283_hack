/* ==========================================================================
 * m0868.j   [m0868_0xd1234ad.js @ 8073]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function j(o, s) {
  if (Br("workflows") || OWe()) return [...CSt()];
  let [n, i] = await Promise.all([b(o, s), P(s)]),
    d = S(i),
    w = CSt(),
    e = new Map(w.map(k => [k.name, k])),
    r = O(d, e);
  for (let k of r) e.set(k.name, k);
  let l = O(n, e),
    f = new Set(l.map(k => k.name)),
    u = r.filter(k => !f.has(k.name)),
    c = new Set([...f, ...u.map(k => k.name)]);
  return [...w.filter(k => !c.has(k.name)), ...u, ...l];
}
