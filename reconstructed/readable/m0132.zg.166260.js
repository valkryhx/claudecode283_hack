/* ==============================================================================
 * m0132.zg   [m0132_0xc24a4bb.js @ 166260]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 166260
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var zg = (e, t) => R_({
  abort: (o) => {
    let r = G(o) ? o.turnId : void 0;
    return typeof r !== "string" || r === "" ? Promise.reject(new De(`${e}: $.turn.abort takes { turnId } (the id turn.start carried)`)) : t("turn.abort", {
      turnId: r
    })
  }
});
