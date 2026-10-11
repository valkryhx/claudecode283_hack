/* ==============================================================================
 * m0132.pi   [m0132_0xc24a4bb.js @ 56007]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 56007
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var pi = {
  event: "skill.prompt",
  checkArgument: (e, t) => {
    let {
      skill: o,
      text: r
    } = e, n = typeof o === "string", s = o === t.skill;
    return n ? s ? typeof r === "string" ? void 0 : "no { text }" : "a changed skill (the hooks beneath match on it)" : "no { skill }"
  },
  measureArgument: (e, t) => te(e.text, t.text),
  check: C((e) => typeof e.text === "string" ? void 0 : "no { text } (a string)"),
  measure: Ze("text")
};
