/* ==========================================================================
 * m0132.qa   [m0132_0xc24a4bb.js @ 160969]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function qa(e) {
  if (e === void 0) return;
  let t = G(e) ? Object.keys(e).filter(r => r !== "breakdown" && r !== "columns") : [];
  return G(e) && t.length === 0 ? void 0 : "takes { breakdown, columns } or nothing" + (t.length > 0 ? ` (not ${t.join(", ")})` : "");
}
