/* ==============================================================================
 * m0132.mi   [m0132_0xc24a4bb.js @ 56366]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 56366
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var mi = {
  event: "ui.blit",
  check: K("ui.blit").check,
  checkArgument: (e, t) => e.requestId !== t.requestId || e.key !== t.key || (("source" in e) && e.source !== void 0) !== (("source" in t) && t.source !== void 0) ? "a changed requestId, key or kind (the Raster or Image being blitted; next(e) passes them on)" : void 0
};
