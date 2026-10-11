/* ==========================================================================
 * m0132.Ep   [m0132_0xc24a4bb.js @ 170337]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ep({
  engine: e,
  invoke: t,
  stamped: o
}, r) {
  let {
      matcher: n
    } = r,
    s = r.catch;
  if (s === void 0) return;
  return async (i, p) => n === void 0 || o(() => vdt(n, i)) ? await t(s, [e, i, p]) : void 0;
}
