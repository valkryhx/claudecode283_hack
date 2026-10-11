/* ==============================================================================
 * m0132.fo   [m0132_0xc24a4bb.js @ 105028]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 105028
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function fo(e) {
  if (!Array.isArray(e)) return "messages that are not a list";
  if (e.length === 0) return "an empty messages (a compaction leaves at least one)";
  let t = e.map(rn),
    o = t.findIndex((n) => n !== void 0);
  return o === -1 ? void 0 : `messages[${o}] that ${t[o]}`
}
