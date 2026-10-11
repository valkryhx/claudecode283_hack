/* ==========================================================================
 * m0132.CVn   [m0132_0xc24a4bb.js @ 2397]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var CVn = e => ({
  signal: e.signal,
  is: e.is,
  event: e.event,
  origin: e.origin,
  trace: () => e.trace,
  budget: () => e.budget,
  caught: pdn(e)
});
