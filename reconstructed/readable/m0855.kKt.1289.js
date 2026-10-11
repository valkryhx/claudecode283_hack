/* ==============================================================================
 * m0855.kKt   [m0855_0xd10e439.js @ 1289]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0855_0xd10e439.js  字符偏移 1289
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function kKt() {
  let e = it(),
    t = fx(e),
    r = Ple(e);
  return `Usage: /effort [${r.join("|")}${t?"|ultracode":""}|auto]

Effort levels:
` + r.map((n) => `- ${n}: ${U[n]}
`).join("") + (t ? `- ultracode: xhigh + dynamic workflow orchestration (this session only)
` : "") + "- auto: Use the default effort level for your model"
}
