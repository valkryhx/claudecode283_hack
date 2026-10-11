/* ==========================================================================
 * m0132.Xs   [m0132_0xc24a4bb.js @ 51922]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Xs = {
  event: "attribution.text",
  checkArgument: (e, t) => {
    let o = e.kind;
    if (typeof o !== "string") return "no { kind }";
    if (o !== t.kind) return "a changed kind (the hooks beneath match on it)";
    return typeof e.text === "string" ? void 0 : "no { text }";
  },
  measureArgument: (e, t) => te(e.text, t.text),
  check: C(e => typeof e.text === "string" ? void 0 : "no { text } (a string)"),
  measure: Ze("text")
};
