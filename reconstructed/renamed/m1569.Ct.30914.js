/* ==========================================================================
 * m1569.Ct   [m1569_0xdceb889.js @ 30914]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ct(e) {
  if (e === void 0 || e === null) return !1;
  if (typeof e !== "object" || Array.isArray(e)) throw TypeError("placement options must be an object: {top: true} or nothing");
  let r = e;
  if (Object.keys(r).some(n => n !== "top")) throw TypeError("unknown placement option \u2014 the only one is top (a boolean)");
  if (r.top !== void 0 && typeof r.top !== "boolean") throw TypeError("placement option top must be a boolean");
  return r.top === !0;
}
