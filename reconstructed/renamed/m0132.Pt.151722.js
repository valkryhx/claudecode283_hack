/* ==========================================================================
 * m0132.Pt   [m0132_0xc24a4bb.js @ 151722]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Pt(e, t, o) {
  let r = n => o(() => Promise.reject(new De(HLr(`${e}.${n}`, t))));
  return new Proxy(nt, {
    get: (n, s) => wo(s) ? r(s) : void 0
  });
}
