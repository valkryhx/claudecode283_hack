/* ==============================================================================
 * m0132.xn   [m0132_0xc24a4bb.js @ 114286]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 114286
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
    case "stop": {
      let o = e.stopReason === null || BVn.some((s) => s === e.stopReason),
        r = e.usage === null || gn(e.usage);
      return o && r ? void 0 : "{ stopReason, usage } (usage null, or its four token counts)"
    }
    case "engine":
      return typeof e.ref === "number" ? void 0 : "ref (pass engine chunks on unchanged)";
    default:
      return "known kind (text, thinking, tool, input, stop, engine)"
  }
}
