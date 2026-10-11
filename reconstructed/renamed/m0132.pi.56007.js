/* ==========================================================================
 * m0132.pi   [m0132_0xc24a4bb.js @ 56007]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var pi = {
  event: "skill.prompt",
  checkArgument: (e, t) => {
    let {
        skill: o,
        text: r
      } = e,
      n = typeof o === "string",
      s = o === t.skill;
    return n ? s ? typeof r === "string" ? void 0 : "no { text }" : "a changed skill (the hooks beneath match on it)" : "no { skill }";
  },
  measureArgument: (e, t) => te(e.text, t.text),
  check: C(e => typeof e.text === "string" ? void 0 : "no { text } (a string)"),
  measure: Ze("text")
};
