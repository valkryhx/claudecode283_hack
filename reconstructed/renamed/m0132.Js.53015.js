/* ==========================================================================
 * m0132.Js   [m0132_0xc24a4bb.js @ 53015]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Js = {
  event: "prompt.attachment",
  restoreArgument: Me(["origin", "agentId"]),
  checkArgument: (e, t) => {
    let o = pe(["type", "origin", "agentId"], e, t);
    if (o !== void 0) return o;
    return typeof e.text === "string" ? void 0 : "no { text } (a string)";
  },
  measureArgument: (e, t) => te(e.text, t.text),
  check: C(e => Go(e.text, "attachment")),
  measure: Ze("text")
};
