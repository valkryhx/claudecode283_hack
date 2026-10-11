/* ==========================================================================
 * m0132.jx   [m0132_0xc24a4bb.js @ 176178]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function jx(e) {
  let t = Reflect.get(e, "result");
  return typeof t === "object" && t !== null && "then" in t && typeof t.then === "function" ? t : Promise.reject(new De("the stream carries no result of its own"));
}
