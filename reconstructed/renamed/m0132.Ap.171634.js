/* ==========================================================================
 * m0132.Ap   [m0132_0xc24a4bb.js @ 171634]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ap(e, {
  matcher: t,
  event: o,
  run: r
}) {
  let n = new Set(),
    s = {
      count: 0
    };
  return (i, p) => {
    if (e.stamped(() => vdt(t, i))) return r(i, p);
    if (s.count >= DLr) return p(i);
    s.count += 1;
    let f = e.stamped(() => xNt(t, i));
    if (f !== void 0 && !n.has(f.path)) n.add(f.path), kc().log(MLr(e.pluginName, o, f), "warn");
    return p(i);
  };
}
