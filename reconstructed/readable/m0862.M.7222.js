/* ==============================================================================
 * m0862.M   [m0862_0xd11f1fb.js @ 7222]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 7222
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function M(e) {
  let n = e.name;
  if (typeof n !== "string" || n.length === 0) return {
    error: "meta.name must be a non-empty string"
  };
  let t = e.description;
  if (typeof t !== "string" || t.length === 0) return {
    error: "meta.description must be a non-empty string"
  };
  let r = typeof e.title === "string" && e.title.length > 0 ? e.title : void 0,
    o = typeof e.whenToUse === "string" ? e.whenToUse : void 0,
    i = K(e.phases);
  return {
    meta: {
      name: n,
      description: t,
      title: r,
      whenToUse: o,
      phases: i
    }
  }
}
