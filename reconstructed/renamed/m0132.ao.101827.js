/* ==========================================================================
 * m0132.ao   [m0132_0xc24a4bb.js @ 101827]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var ao = (e, t, o) => L(e).filter(r => !t.includes(r)).map(r => {
  let [n] = zye(r, t, 1),
    s = n === void 0 ? "" : ` (did you mean ${n}?)`;
  return `no ${o} is named ${r}${s}`;
});
