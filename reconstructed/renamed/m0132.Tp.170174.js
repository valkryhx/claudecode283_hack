/* ==========================================================================
 * m0132.Tp   [m0132_0xc24a4bb.js @ 170174]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Tp({
  engine: e,
  interfaces: t,
  invoke: o
}, {
  pattern: r,
  hook: n
}, s) {
  let i = s === "engine.create",
    p = W6e(r) ? r : void 0;
  return i ? t.wrap(n, p) : async (a, f) => await o(n, [e, a, f]);
}
