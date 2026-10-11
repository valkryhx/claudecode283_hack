/* ==============================================================================
 * m0132.Js   [m0132_0xc24a4bb.js @ 53015]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 53015
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Js = {
  event: "prompt.attachment",
  restoreArgument: Me(["origin", "agentId"]),
  checkArgument: (e, t) => {
    let o = pe(["type", "origin", "agentId"], e, t);
    if (o !== void 0) return o;
    return typeof e.text === "string" ? void 0 : "no { text } (a string)"
  },
  measureArgument: (e, t) => te(e.text, t.text),
  check: C((e) => Go(e.text, "attachment")),
  measure: Ze("text")
};
