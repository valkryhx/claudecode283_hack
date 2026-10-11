/* ==============================================================================
 * m0132.za   [m0132_0xc24a4bb.js @ 160268]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 160268
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function za(e) {
  let {
    to: t,
    text: o
  } = e;
  if (typeof t === "string") return {
    to: t,
    text: o
  };
  return {
    to: "sessionId" in t ? {
      sessionId: t.sessionId
    } : {
      agentId: t.agentId
    },
    text: o
  }
}
