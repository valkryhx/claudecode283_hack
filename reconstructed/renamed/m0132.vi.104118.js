/* ==========================================================================
 * m0132.vi   [m0132_0xc24a4bb.js @ 104118]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var vi = {
  event: "ui.scroll",
  restoreArgument: (e, t) => W(po, e, t),
  checkArgument: (e, t) => {
    let o = pe(po, e, t),
      r = mN(e.offset);
    return o ?? (r ? void 0 : "an offset that is not a whole row number (0 or more)");
  },
  check: C(Ko)
};
