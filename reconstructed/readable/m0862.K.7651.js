/* ==============================================================================
 * m0862.K   [m0862_0xd11f1fb.js @ 7651]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 7651
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function K(e) {
  if (!Array.isArray(e)) return;
  let n = [];
  for (let t of e)
    if (t && typeof t === "object" && "title" in t) {
      let {
        title: r,
        detail: o,
        model: i
      } = t;
      if (typeof r === "string") n.push({
        title: r,
        detail: typeof o === "string" ? o : void 0,
        model: typeof i === "string" ? i : void 0
      })
    } return n.length > 0 ? n : void 0
}
