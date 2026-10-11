/* ==============================================================================
 * m0132.np   [m0132_0xc24a4bb.js @ 163766]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 163766
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var np = (e, t) => ({
  tool: op,
  prompt: t,
  description: e.description ?? t.split(/\s+/).slice(0, rp).join(" "),
  run_in_background: !0,
  ...e.model !== void 0 && {
    model: e.model
  },
  ...e.subagentType !== void 0 && {
    subagent_type: e.subagentType
  },
  ...e.name !== void 0 && {
    name: e.name
  },
  ...e.cwd !== void 0 && {
    cwd: e.cwd
  }
});
