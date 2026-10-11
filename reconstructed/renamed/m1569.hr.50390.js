/* ==========================================================================
 * m1569.hr   [m1569_0xdceb889.js @ 50390]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function hr(e) {
  let r = [];
  if (e.put !== void 0) r.push("put");
  if (e.retract !== void 0) r.push("retract");
  if (e.read !== void 0) r.push("read");
  if (e.script !== void 0) r.push("script");
  return r.length === 1 ? r[0] : void 0;
}
