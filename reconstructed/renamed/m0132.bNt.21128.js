/* ==========================================================================
 * m0132.bNt   [m0132_0xc24a4bb.js @ 21128]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function bNt() {
  let e = [];
  return {
    keep: (t, o) => e.push({
      input: t,
      made: o
    }),
    of: t => t === void 0 ? void 0 : e[t - 1],
    last: t => t === void 0 ? e.at(-1) : e.findLast(t),
    ran: () => e.length > 0
  };
}
