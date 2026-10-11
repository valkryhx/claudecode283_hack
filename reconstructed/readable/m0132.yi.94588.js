/* ==============================================================================
 * m0132.yi   [m0132_0xc24a4bb.js @ 94588]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 94588
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function yi(e) {
  if (!(G(e) && HCe(e.surface))) return "takes a ui.render argument (e.surface names the surface)";
  let o = String(e.component);
  return Object.hasOwn(Lhe, o) ? void 0 : `takes a ui.render argument (e.component "${o}" is not a component the engine draws)`
}
