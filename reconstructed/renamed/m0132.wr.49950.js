/* ==========================================================================
 * m0132.wr   [m0132_0xc24a4bb.js @ 49950]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function wr(e, t) {
  if (e !== void 0 && t === void 0) return "an element where the move named none (one of the engine's stops)";
  if (e === void 0 && t !== void 0) return "no element where the move named one (a rewrite names another)";
  return e === void 0 || typeof e === "string" && e !== "" ? void 0 : "an element that is not a non-empty string";
}
