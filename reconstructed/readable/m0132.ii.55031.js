/* ==============================================================================
 * m0132.ii   [m0132_0xc24a4bb.js @ 55031]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 55031
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var ii = {
  event: "prompt.section",
  checkArgument: (e, t) => {
    if (typeof e.name !== "string") return "no { name }";
    if (e.name !== t.name) return "a changed name (the engine caches the section by it)";
    if (e.text === null) return;
    return typeof e.text === "string" ? void 0 : "a text that is neither a string nor null"
  },
  measureArgument: (e, t) => te(e.text, t.text),
  check: C((e) => Go(e.text, "section")),
  measure: Ze("text")
};
