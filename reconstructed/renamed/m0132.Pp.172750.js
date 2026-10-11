/* ==========================================================================
 * m0132.Pp   [m0132_0xc24a4bb.js @ 172750]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Pp = (e, t, o) => e.clauses.flatMap((r, n) => {
  if (!(x6(r.pattern, t) && !o.includes(n))) return [];
  return INt(r.pattern) ? [Cp(e, {
    clause: r,
    registration: n
  })] : [{
    kind: "value",
    registration: n,
    hook: Eo(e, {
      clause: r,
      event: t,
      registration: n
    })
  }];
});
