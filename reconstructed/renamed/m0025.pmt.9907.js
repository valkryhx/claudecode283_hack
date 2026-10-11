/* ==========================================================================
 * m0025.pmt   [m0025_0xbf5baa8.js @ 9907]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function pmt(e) {
  if (e.type !== "user") return !1;
  let r = e.message?.content;
  return Array.isArray(r) && r.some(s => s?.type === "text" && typeof s.text === "string" && s.text.startsWith(`<${x_e}>`));
}
