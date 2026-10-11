/* ==========================================================================
 * m0227.z0t   [m0227_0xc482590.js @ 22656]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function z0t(e, n) {
  if (e?.type !== "tool_use" || e.name !== bi) return null;
  if (e.id !== void 0 && n.has(e.id)) return null;
  let r = e.input,
    s = r !== null && typeof r === "object" && "text" in r ? r.text : void 0;
  return typeof s === "string" && s.length > 0 ? s : null;
}
