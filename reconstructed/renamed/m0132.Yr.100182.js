/* ==========================================================================
 * m0132.Yr   [m0132_0xc24a4bb.js @ 100182]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Yr(e, t) {
  return (t.component === "ToolUse" || t.component === "ToolResult" || t.component === "ToolProgress") && e.tool_use_id !== t.props.tool_use_id ? "a props.tool_use_id other than the engine drew (the id names the call; a rewrite changes the row alone)" : void 0;
}
