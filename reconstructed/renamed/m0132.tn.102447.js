/* ==========================================================================
 * m0132.tn   [m0132_0xc24a4bb.js @ 102447]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function tn(e, t) {
  let o = Object.keys(e).filter(n => n !== "surface" && n !== "component");
  return t || o.length === 0 ? void 0 : `resolved ahead of time, once per surface and component; a matcher here takes surface and component only, not ${o.join(", ")}`;
}
