/* ==========================================================================
 * m1569.ze   [m1569_0xdceb889.js @ 70481]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ze(e) {
  let r = Fy(e);
  if (!("error" in r)) return cH(r.meta.description);
  let n = e.split(`
`).find(g => g.trim()) ?? re(e, 40),
    s = ie(n) > Rr || n.length > Rr ? re(n, Rr - 1) + "\u2026" : n,
    a = Gt(e, `
`) + 1,
    w = JAe(a - 1),
    h = cH(s);
  return w ? `${h} ${w}` : h;
}
