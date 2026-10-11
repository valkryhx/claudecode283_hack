/* ==========================================================================
 * m0132.Bi   [m0132_0xc24a4bb.js @ 111314]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Bi = {
  event: "classic.PreToolUse",
  restoreArgument: (e, t) => W([ve], e, t),
  checkArgument: At,
  settle: un,
  check: C(({
    deny: e,
    ask: t,
    allow: o
  }) => {
    let r = typeof e === "string" || typeof t === "string";
    return !r && (e !== void 0 || t !== void 0) ? "a deny or ask that is not a string" : !r && o !== void 0 && o !== !0 ? "an allow that is not true" : void 0;
  }),
  carry: (e, t, o) => e.updatedInput === void 0 && typeof e.deny !== "string" && us(t, o) ? {
    ...e,
    updatedInput: FCe(t)
  } : e
};
