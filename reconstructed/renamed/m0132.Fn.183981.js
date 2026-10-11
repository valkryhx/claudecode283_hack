/* ==========================================================================
 * m0132.Fn   [m0132_0xc24a4bb.js @ 183981]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Fn(e) {
  if (!e) return "a rejection that is not an Error";
  if (Eh(e)) return "a rejection that is not plain data";
  let t = Object.getOwnPropertyDescriptor(e, "message")?.value;
  return typeof t === "string" ? t : Fn(Object.getPrototypeOf(e));
}
