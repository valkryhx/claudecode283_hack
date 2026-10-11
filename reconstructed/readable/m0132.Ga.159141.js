/* ==============================================================================
 * m0132.Ga   [m0132_0xc24a4bb.js @ 159141]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 159141
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Ga = (e, t) => It(e, t, "prompt.fill").then((o) => {
  let r = G(e) ? e.mode : void 0;
  return r !== void 0 && !Sdn(r) ? Promise.reject(new De(`${t}: $.prompt.fill takes { mode } of ${ONt.join(", ")}`)) : {
    text: o,
    ...r !== void 0 && {
      mode: r
    }
  }
});
