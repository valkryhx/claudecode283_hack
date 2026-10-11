/* ==============================================================================
 * m0132.Bi   [m0132_0xc24a4bb.js @ 111314]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 111314
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
    return !r && (e !== void 0 || t !== void 0) ? "a deny or ask that is not a string" : !r && o !== void 0 && o !== !0 ? "an allow that is not true" : void 0
  }),
  carry: (e, t, o) => e.updatedInput === void 0 && typeof e.deny !== "string" && us(t, o) ? {
    ...e,
    updatedInput: FCe(t)
  } : e
};
