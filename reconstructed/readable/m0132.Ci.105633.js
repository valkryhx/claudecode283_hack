/* ==============================================================================
 * m0132.Ci   [m0132_0xc24a4bb.js @ 105633]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 105633
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Ci = {
  event: "session.compact",
  restoreArgument: (e, t) => W(["trigger", "agentId"], e, t),
  checkArgument: (e, t) => {
    if (e.trigger !== t.trigger) return "a changed trigger (the compaction is what it is; next(e) passes it on)";
    if (e.agentId !== t.agentId) return "a changed agentId (the loop compacting is pinned)";
    let {
      instructions: n
    } = e;
    return n === void 0 || typeof n === "string" ? fo(e.messages) : "instructions that are not a string"
  },
  check: C((e, t, o) => {
    let {
      skip: r,
      messages: n,
      tokensBefore: s,
      tokensAfter: i,
      usage: p
    } = e;
    if (r !== void 0) {
      if (!(typeof r === "string" && r !== "")) return "a skip that is not a reason (a non-empty string)";
      if (n !== void 0) return "a skip beside messages";
      return t.trigger !== "precompute" && (o ?? []).some((u) => u.messages !== void 0) ? "a skip after next() compacted (the compaction happened beneath it; veto before calling next, or hand its result up)" : void 0
    }
    if (n === void 0) return "neither { messages } nor { skip }";
    if (!(mo(s) && mo(i))) return "token counts that are not numbers";
    return nn(p) ? fo(n) : "a usage that is not the four token counts"
  })
};
