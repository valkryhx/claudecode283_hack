/* ==============================================================================
 * m0573.L   [m0573_0xcde50bc.js @ 5398]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0573_0xcde50bc.js  字符偏移 5398
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function L(e) {
  let {
    bySlug: n
  } = V3t();
  if (n.size === 0) return e;
  return e.map((o) => {
    let s = Math.min((n.get(o.slug) ?? 0) + (o.unattendedReplies ?? 0), _ze);
    return s > 0 ? {
      ...o,
      unattendedReplies: s
    } : o
  })
}
