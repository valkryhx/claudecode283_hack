/* ==============================================================================
 * m0567.hsr   [m0567_0xcdd6311.js @ 3269]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0567_0xcdd6311.js  字符偏移 3269
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function hsr(e, s, r) {
  r.update(e, (o) => {
    let n = o.status === "running" ? s : void 0;
    if (o.rateLimitWait?.resetsAt === n?.resetsAt && o.rateLimitWait?.resumeAtMs === n?.resumeAtMs && o.rateLimitWait?.waitingAgents === n?.waitingAgents) return o;
    return {
      ...o,
      rateLimitWait: n
    }
  })
}
