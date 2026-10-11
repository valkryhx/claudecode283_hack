/* ==============================================================================
 * m0132.cg   [m0132_0xc24a4bb.js @ 156173]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 156173
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var cg = (e) => R_({
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
  exists: (t) => e("fs.exists", {
    path: t
  }),
  stat: (t, o) => e("fs.stat", {
    path: t,
    resolve: o?.resolve ?? !1
  }),
  ancestors: (t) => e("fs.ancestors", {
    names: t.names,
    ...t.of !== void 0 && {
      of: t.of
    },
    ...t.below !== void 0 && {
      below: t.below
    }
  })
});
