/* ==============================================================================
 * m0132.zi   [m0132_0xc24a4bb.js @ 116348]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 116348
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var zi = {
  event: "turn.step",
  chunkChecker: wn,
  restoreArgument: Me(["agentId"]),
  checkArgument: (e, t) => {
    let o = pe(["turnId", "index", "messageCount", "agentId"], e, t);
    if (o !== void 0) return o;
    let {
      model: r,
      effort: n
    } = e;
    if (!(typeof r === "string" && r.trim() !== "")) return "no { model } (a non-empty model name)";
    let i = !1;
    return n === void 0 || n === t.effort || typeof n === "number" && i || wd.some((a) => a === n) ? void 0 : `an effort that is not one of ${wd.join(", ")}` + (i ? " or a number" : " (a number is internal-only)")
  },
  check: C((e, t) => {
    if (!(e.turnId === t.turnId && e.index === t.index)) return "a { turnId, index } other than the step it answers for";
    return typeof e.answer === "string" && Array.isArray(e.toolUses) ? void 0 : "no { answer, toolUses }"
  })
};
