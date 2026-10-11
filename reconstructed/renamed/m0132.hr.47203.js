/* ==========================================================================
 * m0132.hr   [m0132_0xc24a4bb.js @ 47203]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function hr(e, t) {
  if (e.context !== void 0) return e;
  let r = (t.find(n => n.ref !== void 0 && n.ref === e.ref) ?? t.at(-1))?.context;
  return r === void 0 ? e : {
    ...e,
    context: r
  };
}
