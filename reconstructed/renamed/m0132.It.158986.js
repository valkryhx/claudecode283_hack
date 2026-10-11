/* ==========================================================================
 * m0132.It   [m0132_0xc24a4bb.js @ 158986]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function It(e, t, o) {
  let r = G(e) ? e.text : void 0;
  return typeof r === "string" ? Promise.resolve(r) : Promise.reject(new De(`${t}: $.${o} takes { text } (a string)`));
}
