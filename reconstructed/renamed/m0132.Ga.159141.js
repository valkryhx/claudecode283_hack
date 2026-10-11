/* ==========================================================================
 * m0132.Ga   [m0132_0xc24a4bb.js @ 159141]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Ga = (e, t) => It(e, t, "prompt.fill").then(o => {
  let r = G(e) ? e.mode : void 0;
  return r !== void 0 && !Sdn(r) ? Promise.reject(new De(`${t}: $.prompt.fill takes { mode } of ${ONt.join(", ")}`)) : {
    text: o,
    ...(r !== void 0 && {
      mode: r
    })
  };
});
