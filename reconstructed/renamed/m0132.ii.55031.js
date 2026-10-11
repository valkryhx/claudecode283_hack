/* ==========================================================================
 * m0132.ii   [m0132_0xc24a4bb.js @ 55031]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var ii = {
  event: "prompt.section",
  checkArgument: (e, t) => {
    if (typeof e.name !== "string") return "no { name }";
    if (e.name !== t.name) return "a changed name (the engine caches the section by it)";
    if (e.text === null) return;
    return typeof e.text === "string" ? void 0 : "a text that is neither a string nor null";
  },
  measureArgument: (e, t) => te(e.text, t.text),
  check: C(e => Go(e.text, "section")),
  measure: Ze("text")
};
