/* ==========================================================================
 * m1569.fr   [m1569_0xdceb889.js @ 26291]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function fr(e, r, n) {
  let {
    addr: s,
    by: a
  } = r;
  for (;;) {
    if (!a.startsWith("rule:")) return s;
    let w = Number(a.slice(5));
    if (!Number.isSafeInteger(w) || w < 0 || w >= s || !e.within(w, n)) return;
    let h = e.rows[w];
    if (!h) return;
    s = w, a = h.by;
  }
}
