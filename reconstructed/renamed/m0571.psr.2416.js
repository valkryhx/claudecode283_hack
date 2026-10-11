/* ==========================================================================
 * m0571.psr   [m0571_0xcddb07e.js @ 2416]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function psr(r) {
  let a = r ? ETn() : void 0;
  if (r && a !== void 0) return j(r, a);
  let n = m(),
    i;
  try {
    i = await k(n);
  } catch {
    return [];
  }
  let l = (await Promise.all(i.filter(s => s.endsWith(".json")).map(async s => {
    try {
      let o = await h(p(n, s), "utf8"),
        e = J(o);
      return d(e, s.replace(/\.json$/, ""));
    } catch (o) {
      return t(`Failed to parse workflow snapshot ${s}: ${o instanceof Error ? o.message : o}`), null;
    }
  }))).filter(s => s !== null);
  return l.sort((s, o) => o.startTime - s.startTime), l;
}
