/* ==========================================================================
 * m1569.cr   [m1569_0xdceb889.js @ 26108]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function cr(e, r, n) {
  let s = e.rows[r]?.in ?? j;
  while (s !== j && s !== n) {
    let a = e.rows[s];
    if (!a) return !1;
    if (a.kind === "eval" && a.fact.topic === "workflow" && a.fact.child === !0) return !0;
    s = a.in;
  }
  return !1;
}
