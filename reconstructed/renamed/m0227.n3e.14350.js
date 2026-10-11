/* ==========================================================================
 * m0227.n3e   [m0227_0xc482590.js @ 14350]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function n3e(e) {
  if (e.reason === "root_not_object") return "the API only accepts an object-rooted tool input schema, so every request would be rejected";
  return e.scope === "whole" ? "no output can satisfy this schema, so StructuredOutput validation would fail on every attempt" : "one property or item sub-schema admits no value, so any output that fills it in fails validation";
}
