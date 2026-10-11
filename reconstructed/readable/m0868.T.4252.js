/* ==============================================================================
 * m0868.T   [m0868_0xd1234ad.js @ 4252]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0868_0xd1234ad.js  字符偏移 4252
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function T(o, s) {
  try {
    return await Use("workflows", o)
  } catch (n) {
    if (as(n)) return t(`loadWorkflowsDir: project-dir walk failed: ${n.code}`, {
      level: "error"
    }), s.walkFailed = !0, [];
    throw n
  }
}
