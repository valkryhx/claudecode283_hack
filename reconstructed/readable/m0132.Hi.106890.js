/* ==============================================================================
 * m0132.Hi   [m0132_0xc24a4bb.js @ 106890]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 106890
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Hi = {
  event: "session.receive",
  restoreArgument: (e, t) => W(["agentId"], e, t),
  checkArgument: (e, t) => {
    if ($n(e.origin) !== $n(t.origin)) return "a changed origin (the bridge set it; next(e) passes it on)";
    if ($n(e.event) !== $n(t.event)) return "a changed event (parsed from the delivery; next(e) passes it on)";
    if (e.agentId !== t.agentId) return "a changed agentId (the loop the delivery is for; next(e) passes it on)";
    return typeof e.text === "string" ? void 0 : "no { text } (a string)"
  },
  check: C((e) => {
    let {
      consumed: t,
      text: o
    } = e;
    if (t === void 0) return typeof o === "string" ? void 0 : "neither { text } nor { consumed }";
    return typeof t === "string" ? void 0 : "a consumed that is not a string"
  })
};
