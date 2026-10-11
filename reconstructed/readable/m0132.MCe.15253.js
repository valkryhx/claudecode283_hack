/* ==============================================================================
 * m0132.MCe   [m0132_0xc24a4bb.js @ 15253]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 15253
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function MCe(e) {
  try {
    let t = ff()(e);
    return {
      msg: typeof t.msg === "string" ? t.msg : "<unprintable thrown value>",
      name: typeof t.name === "string" ? t.name : "Error",
      stack: typeof t.stack === "string" ? t.stack : void 0
    }
  } catch {
    return {
      msg: "<unprintable thrown value>",
      name: "Error"
    }
  }
}
