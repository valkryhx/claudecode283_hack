/* ==============================================================================
 * m0132.vg   [m0132_0xc24a4bb.js @ 159920]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 159920
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var vg = (e, t) => R_({
  submit: (o) => It(o, e, "prompt.submit").then((r) => r.trim() === "" ? Promise.reject(new De(`${e}: $.prompt.submit takes { text } (a non-empty prompt)`)) : t("prompt.submit", {
    text: r
  })),
  read: () => t("prompt.read", {}),
  fill: (o) => Ga(o, e).then((r) => t("prompt.fill", r)),
  suggest: (o) => It(o, e, "prompt.suggest").then((r) => t("prompt.suggest", {
    text: r
  }))
});
