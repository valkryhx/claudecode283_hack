/* ==========================================================================
 * m0132.bI   [m0132_0xc24a4bb.js @ 15621]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function bI(e) {
  let t = (...o) => {
    try {
      return e(...o);
    } catch (r) {
      let {
        msg: n,
        name: s,
        stack: i
      } = MCe(r);
      throw Ohe(n, s, i);
    }
  };
  return Object.setPrototypeOf(t, null), t;
}
