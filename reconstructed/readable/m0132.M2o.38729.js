/* ==============================================================================
 * m0132.M2o   [m0132_0xc24a4bb.js @ 38729]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 38729
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function M2o(e, t) {
  let o = new Map(t.map((r) => [`${ds(r)}\x00${r.path}`, r]));
  return e.map((r) => {
    let n = o.get(`${r.kind}\x00${r.path}`);
    if (n === void 0) return {
      path: r.path,
      type: ys(r),
      content: r.content,
      ...r.parent !== void 0 && {
        parent: r.parent
      }
    };
    return n.content !== r.content ? {
      ...n,
      content: r.content
    } : n
  })
}
