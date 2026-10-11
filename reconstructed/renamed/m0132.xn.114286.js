/* ==========================================================================
 * m0132.xn   [m0132_0xc24a4bb.js @ 114286]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function xn(e) {
  let t = typeof e.index === "number" && e.index >= 0;
  switch (e.kind) {
    case "text":
    case "thinking":
      return t && typeof e.text === "string" ? void 0 : "{ index, text }";
    case "tool":
      return t && typeof e.id === "string" && /^[\w-]+$/.test(e.id) && typeof e.name === "string" ? void 0 : "{ index, id, name } (an id of letters, digits, _ or -)";
    case "input":
      return t && typeof e.json === "string" ? void 0 : "{ index, json } (json a string)";
    case "stop":
      {
        let o = e.stopReason === null || BVn.some(s => s === e.stopReason),
          r = e.usage === null || gn(e.usage);
        return o && r ? void 0 : "{ stopReason, usage } (usage null, or its four token counts)";
      }
    case "engine":
      return typeof e.ref === "number" ? void 0 : "ref (pass engine chunks on unchanged)";
    default:
      return "known kind (text, thinking, tool, input, stop, engine)";
  }
}
