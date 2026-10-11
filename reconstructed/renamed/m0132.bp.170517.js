/* ==========================================================================
 * m0132.bp   [m0132_0xc24a4bb.js @ 170517]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var bp = (e, t, o) => LCe({
  call: e(r => _Nt(r, t, o)),
  to: e((r, ...n) => _Nt(r, t, [...n, ...o])),
  signal: t.signal,
  is: t.is,
  event: t.event,
  origin: t.origin,
  trace: () => t.trace,
  budget: () => t.budget,
  caught: pdn(t)
});
