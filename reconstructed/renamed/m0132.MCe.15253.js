/* ==========================================================================
 * m0132.MCe   [m0132_0xc24a4bb.js @ 15253]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function MCe(e) {
  try {
    let t = ff()(e);
    return {
      msg: typeof t.msg === "string" ? t.msg : "<unprintable thrown value>",
      name: typeof t.name === "string" ? t.name : "Error",
      stack: typeof t.stack === "string" ? t.stack : void 0
    };
  } catch {
    return {
      msg: "<unprintable thrown value>",
      name: "Error"
    };
  }
}
