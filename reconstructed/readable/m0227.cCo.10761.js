/* ==============================================================================
 * m0227.cCo   [m0227_0xc482590.js @ 10761]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 10761
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function cCo(e, n) {
  let r = e[n],
    s = r?.message?.content;
  if (r?.type !== "user" || !Array.isArray(s)) return !1;
  let E = new Set;
  for (let l = 0; l < n; l++) {
    let g = e[l],
      p = g.message?.content;
    if (g.type === "assistant" && Array.isArray(p)) {
      for (let _ of p)
        if (_?.type === "tool_use" && _.name === FB) E.add(_.id)
    }
  }
  if (E.size === 0) return !1;
  return s.some((l) => l?.type === "tool_result" && typeof l.tool_use_id === "string" && E.has(l.tool_use_id))
}
