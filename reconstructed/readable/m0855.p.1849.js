/* ==============================================================================
 * m0855.p   [m0855_0xd10e439.js @ 1849]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0855_0xd10e439.js  字符偏移 1849
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function p(e, t = !1) {
  if (!lr()) return null;
  if (!va()) return " (applied locally \u2014 this remote transport can\u2019t change server effort)";
  return lr()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      effortLevel: e ?? null,
      ultracode: t
    }
  }).catch(d), null
}
