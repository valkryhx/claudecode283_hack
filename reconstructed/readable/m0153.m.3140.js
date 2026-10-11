/* ==============================================================================
 * m0153.m   [m0153_0xc2a414f.js @ 3140]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0153_0xc2a414f.js  字符偏移 3140
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function m() {
  if (a.CLAUDE_CODE_WORKFLOWS === !0) {
    let o = x("tengu_workflows_enabled", !0);
    return {
      available: o,
      defaultOn: o
    }
  }
  if (a.CLAUDE_CODE_WORKFLOWS === !1) return {
    available: !1,
    defaultOn: !1
  };
  if (!x("tengu_workflows_enabled", !0)) return {
    available: !1,
    defaultOn: !1
  };
  return {
    available: !0,
    defaultOn: nr() !== "pro"
  }
}
