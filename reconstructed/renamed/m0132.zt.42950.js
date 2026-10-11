/* ==========================================================================
 * m0132.zt   [m0132_0xc24a4bb.js @ 42950]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var zt = (e, t, o = {
  restored: [],
  passedProblem: () => {
    return;
  }
}) => ({
  event: e,
  restoreArgument: (r, n) => W(["origin", ...o.restored], r, n),
  checkArgument: (r, n) => sr(r, n) ?? o.passedProblem(r),
  measureArgument: (r, n) => te(r.text, n.text),
  check: C(r => typeof r[t] === "boolean" ? void 0 : `no { ${t} } (true or false)`)
});
