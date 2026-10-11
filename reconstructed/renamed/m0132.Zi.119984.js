/* ==========================================================================
 * m0132.Zi   [m0132_0xc24a4bb.js @ 119984]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Zi({
  kind: e,
  error: t,
  rejection: o
}) {
  let r = e === "throw",
    n = o === void 0 ? void 0 : l(o.error);
  return r ? l(t) : n;
}
