/* ==========================================================================
 * m0132.Rp   [m0132_0xc24a4bb.js @ 172223]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Rp(e, t, o) {
  let r;
  for (let [n, s] of e.clauses.entries()) {
    if (!(x6(s.pattern, t) && !o.includes(n))) continue;
    let p = Eo(e, {
      clause: s,
      event: t,
      registration: n
    });
    r = r === void 0 ? p : vp(e, {
      outer: r,
      inner: p,
      pattern: s.pattern
    });
  }
  return r;
}
