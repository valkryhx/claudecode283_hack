/* ==========================================================================
 * m0132.ug   [m0132_0xc24a4bb.js @ 156050]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var ug = e => R_({
  get: t => e("env.get", {
    name: t
  }),
  set: async (t, o) => {
    await e("env.set", o === void 0 ? {
      name: t
    } : {
      name: t,
      value: o
    });
  }
});
