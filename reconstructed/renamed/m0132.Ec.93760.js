/* ==========================================================================
 * m0132.Ec   [m0132_0xc24a4bb.js @ 93760]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ec(e) {
  if (!G(e)) return "something that is not a table of elements";
  for (let [t, o] of Object.entries(e)) if (typeof o !== "function") return `an entry "${t}" that is not a constructor`;
  return;
}
