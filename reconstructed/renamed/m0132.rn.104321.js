/* ==========================================================================
 * m0132.rn   [m0132_0xc24a4bb.js @ 104321]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
  if (!(Array.isArray(r) && r.every(m => G(m) && typeof m.tool_use_id === "string" && typeof m.tool === "string" && G(m.input)))) return "has toolUses that are not a list of { tool_use_id, tool, input }";
  return n === void 0 || Array.isArray(n) && n.every(m => G(m) && typeof m.tool_use_id === "string" && typeof m.text === "string") ? void 0 : "has toolResults that are not a list of { tool_use_id, text, isError }";
}
