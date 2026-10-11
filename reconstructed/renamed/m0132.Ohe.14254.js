/* ==========================================================================
 * m0132.Ohe   [m0132_0xc24a4bb.js @ 14254]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ohe(e, t = "Error", o) {
  let r = () => `${t}: ${e}`;
  return Object.setPrototypeOf(r, null), Object.freeze(r), Object.freeze({
    __proto__: null,
    name: t,
    message: e,
    stack: o ?? `${t}: ${e}`,
    toString: r
  });
}
