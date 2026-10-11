/* ==============================================================================
 * m0132.Xi   [m0132_0xc24a4bb.js @ 116013]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 116013
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Xi = {
  ...Wt({
    event: "turn.complete",
    check: ({
      text: e
    }, t) => typeof e === "string" ? rr(e, t.answer) : "no { text }",
    checkArgument: (e, t) => {
      let o = e.answer;
      if (typeof o !== "string") return "no { answer }";
      return e.agentId === t.agentId ? rr(o, t.answer) : "a changed agentId (the loop the turn ran in is pinned)"
    }
  }),
  restoreArgument: (e, t) => W(["agentId"], e, t)
};
