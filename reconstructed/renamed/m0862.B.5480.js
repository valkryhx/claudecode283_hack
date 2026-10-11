/* ==========================================================================
 * m0862.B   [m0862_0xd11f1fb.js @ 5480]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function B(e) {
  if (typeof e !== "object" || e === null || !("loc" in e)) return !1;
  let n = e.loc;
  return typeof n === "object" && n !== null && "line" in n && typeof n.line === "number" && "column" in n && typeof n.column === "number";
}
