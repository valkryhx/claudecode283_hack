/* ==========================================================================
 * m1569.ir   [m1569_0xdceb889.js @ 16145]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ir(e) {
  if (e === null || typeof e !== "object") return !1;
  if (zr(e)) return !0;
  if (Nr(e)) return e.some(ir);
  return Object.values(e).some(ir);
}
