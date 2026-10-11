/* ==============================================================================
 * m0227.Cjn   [m0227_0xc482590.js @ 19753]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 19753
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Cjn(e) {
  let n = k(e, Fe, {
    remaining: We
  });
  if ("reason" in n) return {
    ok: !1,
    reason: n.reason
  };
  if (n.node.type !== "object") return {
    ok: !1,
    reason: "root_not_object"
  };
  return {
    ok: !0,
    schema: {
      ...n.node,
      type: "object"
    }
  }
}
