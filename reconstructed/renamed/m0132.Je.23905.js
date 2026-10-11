/* ==========================================================================
 * m0132.Je   [m0132_0xc24a4bb.js @ 23905]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Je({
  handler: e,
  site: t,
  e: o
}, r) {
  let n = MNt(r, e.name),
    s = !q(e) && (t.checkArgument !== void 0 || t.restoreArgument !== void 0),
    p = s && !Object.is(n, o) ? Dt(n) : n,
    a = s ? t.restoreArgument?.(p, o) ?? p : p,
    f = s ? t.checkArgument?.(a, o) : void 0;
  if (f !== void 0) throw new De(`${e.name}: next() passed an argument with ${f}`);
  if (s && e.isHop !== !0) mFe(e.name, t.event, t.measureArgument?.(a, o));
  return Zn(a);
}
