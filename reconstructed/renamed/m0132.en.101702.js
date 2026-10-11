/* ==========================================================================
 * m0132.en   [m0132_0xc24a4bb.js @ 101702]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var en = e => ot.flatMap(t => $e[t].filter(o => Fhe(e, "component", t) && Fhe(e, "surface", o)).map(o => ({
  component: t,
  surface: o
})));
