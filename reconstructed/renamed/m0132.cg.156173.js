/* ==========================================================================
 * m0132.cg   [m0132_0xc24a4bb.js @ 156173]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var cg = e => R_({
  read: (t, o) => e("fs.read", {
    path: t,
    as: o?.as ?? "text"
  }),
  write: (t, o) => e("fs.write", {
    path: t,
    text: o
  }),
  list: (t = ".") => e("fs.list", {
    path: t
  }),
  exists: t => e("fs.exists", {
    path: t
  }),
  stat: (t, o) => e("fs.stat", {
    path: t,
    resolve: o?.resolve ?? !1
  }),
  ancestors: t => e("fs.ancestors", {
    names: t.names,
    ...(t.of !== void 0 && {
      of: t.of
    }),
    ...(t.below !== void 0 && {
      below: t.below
    })
  })
});
