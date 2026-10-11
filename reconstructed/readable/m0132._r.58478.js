/* ==============================================================================
 * m0132._r   [m0132_0xc24a4bb.js @ 58478]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 58478
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function _r(e, t) {
  let r = t.component === "ToolGroup" ? Zt(t.props.calls) ?? [] : void 0,
    n = Zt(e.calls);
  return r !== void 0 && (n === void 0 || n.length !== r.length || n.some((i, p) => i === null || i !== r[p])) ? "props.calls whose tool_use_ids are not the ones the engine drew (each call keeps the id tool.call carried; the group's calls are its own)" : void 0
}
