/* ==========================================================================
 * m0132.Di   [m0132_0xc24a4bb.js @ 110127]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Di = {
  event: "agent.spawn",
  restoreArgument: (e, t) => W(an, e, t),
  checkArgument(e, t) {
    return wt({
      keys: RNt,
      passed: e,
      received: t,
      explanation: `the identity of the spawn and its parent is pinned; a rewrite keeps ${RNt.join(", ")}`
    }) ?? pn(e, t);
  },
  check: C(e => ct(e, "{ model }", t => typeof t.model === "string"))
};
