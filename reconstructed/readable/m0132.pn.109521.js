/* ==============================================================================
 * m0132.pn   [m0132_0xc24a4bb.js @ 109521]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 109521
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function pn(e, t) {
  let {
    prompt: o,
    model: r,
    cwd: n
  } = e;
  return [
    ["prompt", typeof o === "string" && o.trim() !== "", "no { prompt } (a non-empty string)"],
    ["description", typeof e.description === "string", "a description that is not a string"],
    ["subagentType", typeof e.subagentType === "string", "a subagentType that is not a string"],
    ["model", r === void 0 || typeof r === "string", "a model that is neither a string nor undefined"],
    ["background", typeof e.background === "boolean", "a background that is not a boolean"],
    ["cwd", n === void 0 || typeof n === "string" && Hl(n), "a cwd that is not an absolute path"]
  ].find(([i, p]) => !p && e[i] !== t[i])?.[2]
}
