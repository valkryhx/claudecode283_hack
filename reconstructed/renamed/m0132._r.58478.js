/* ==========================================================================
 * m0132._r   [m0132_0xc24a4bb.js @ 58478]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function _r(e, t) {
  let r = t.component === "ToolGroup" ? Zt(t.props.calls) ?? [] : void 0,
    n = Zt(e.calls);
  return r !== void 0 && (n === void 0 || n.length !== r.length || n.some((i, p) => i === null || i !== r[p])) ? "props.calls whose tool_use_ids are not the ones the engine drew (each call keeps the id tool.call carried; the group's calls are its own)" : void 0;
}
