/* ==============================================================================
 * m0132.Xs   [m0132_0xc24a4bb.js @ 51922]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 51922
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Xs = {
  event: "attribution.text",
  checkArgument: (e, t) => {
    let o = e.kind;
    if (typeof o !== "string") return "no { kind }";
    if (o !== t.kind) return "a changed kind (the hooks beneath match on it)";
    return typeof e.text === "string" ? void 0 : "no { text }"
  },
  measureArgument: (e, t) => te(e.text, t.text),
  check: C((e) => typeof e.text === "string" ? void 0 : "no { text } (a string)"),
  measure: Ze("text")
};
