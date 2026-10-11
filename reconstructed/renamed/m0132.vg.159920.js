/* ==========================================================================
 * m0132.vg   [m0132_0xc24a4bb.js @ 159920]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var vg = (e, t) => R_({
  submit: o => It(o, e, "prompt.submit").then(r => r.trim() === "" ? Promise.reject(new De(`${e}: $.prompt.submit takes { text } (a non-empty prompt)`)) : t("prompt.submit", {
    text: r
  })),
  read: () => t("prompt.read", {}),
  fill: o => Ga(o, e).then(r => t("prompt.fill", r)),
  suggest: o => It(o, e, "prompt.suggest").then(r => t("prompt.suggest", {
    text: r
  }))
});
