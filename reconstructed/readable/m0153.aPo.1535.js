/* ==============================================================================
 * m0153.aPo   [m0153_0xc2a414f.js @ 1535]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0153_0xc2a414f.js  字符偏移 1535
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function aPo(e, o) {
  let t = o ? "This session has the default workflow size guideline:" : "A workflow size guideline is configured for this session:",
    r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
  return `${t} ${f(e)}. ${d()}${r}`
}
