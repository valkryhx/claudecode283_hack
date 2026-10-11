/* ==============================================================================
 * m0132.rn   [m0132_0xc24a4bb.js @ 104321]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 104321
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function rn(e) {
  if (!G(e)) return "is not an object";
  let {
    role: t,
    text: o,
    toolUses: r,
    toolResults: n,
    handle: s
  } = e;
  if (!(t === "user" || t === "assistant")) return "has a role that is neither user nor assistant";
  if (typeof o !== "string") return "has no text (a string)";
  if (!(s === void 0 || typeof s === "string")) return "has a handle that is not a string";
  if (!(Array.isArray(r) && r.every((m) => G(m) && typeof m.tool_use_id === "string" && typeof m.tool === "string" && G(m.input)))) return "has toolUses that are not a list of { tool_use_id, tool, input }";
  return n === void 0 || Array.isArray(n) && n.every((m) => G(m) && typeof m.tool_use_id === "string" && typeof m.text === "string") ? void 0 : "has toolResults that are not a list of { tool_use_id, text, isError }"
}
