/* ==========================================================================
 * m0132.Et   [m0132_0xc24a4bb.js @ 58336]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Et = (e, t) => ({
  event: e,
  checkArgument: t,
  check: C(o => typeof o.element === "string" && typeof o.value === "string" ? void 0 : "no { element, value }")
});
