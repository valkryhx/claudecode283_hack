/* ==============================================================================
 * m0025.p9e   [m0025_0xbf5baa8.js @ 13026]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0025_0xbf5baa8.js  字符偏移 13026
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function p9e(e, r) {
  let s = e.firstPrompt?.startsWith(`<${fK}>`),
    o = e.firstPrompt ? mmt(e.firstPrompt) : "",
    i = o && !s,
    u = e.agentName || e.customTitle || e.aiTitle || e.summary || (i ? o : void 0) || r || (s ? "Autonomous session" : void 0) || (e.sessionId ? e.sessionId.slice(0, 8) : "") || "";
  return Whn(u).trim()
}
