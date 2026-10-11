/* ==============================================================================
 * m0025.d   [m0025_0xbf5baa8.js @ 14237]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0025_0xbf5baa8.js  字符偏移 14237
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function d(e) {
  let r = te(e);
  try {
    if (Ne(process.env.CLAUDE_CODE_USE_BEDROCK) || Ne(process.env.CLAUDE_CODE_USE_VERTEX) || Ne(process.env.CLAUDE_CODE_USE_FOUNDRY) || Ne(process.env.CLAUDE_CODE_USE_ANTHROPIC_AWS) || Ne(process.env.CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD) || Ne(process.env.CLAUDE_CODE_USE_MANTLE) || process.env.DISABLE_ERROR_REPORTING || It()) return;
    let o = {
      error: r.stack || r.message,
      timestamp: new Date().toISOString()
    };
    cBe.remember(o), cBe.dispatch({
      type: "error",
      error: r
    })
  } catch {}
}
