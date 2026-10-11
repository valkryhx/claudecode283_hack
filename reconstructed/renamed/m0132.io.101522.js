/* ==========================================================================
 * m0132.io   [m0132_0xc24a4bb.js @ 101522]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function io(e, t) {
  if (!BCe(e) || !Object.hasOwn(e, t)) return;
  let o = e[t];
  if (typeof o === "string") return [o];
  return Array.isArray(o) && o.length > 0 && o.every(n => typeof n === "string") ? o : void 0;
}
