/* ==============================================================================
 * m0132.Ng   [m0132_0xc24a4bb.js @ 162191]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 162191
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Ng = (e, t) => R_({
  read: (o) => {
    let r = G(o) ? o.source : void 0;
    return o !== void 0 && !G(o) ? Promise.reject(new De(`${e}: $.settings.read takes { source } or nothing`)) : t("settings.read", r !== void 0 ? {
      source: r
    } : {})
  }
});
