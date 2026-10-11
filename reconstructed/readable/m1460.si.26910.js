/* ==============================================================================
 * m1460.si   [m1460_0xd973957.js @ 26910]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 26910
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function si(o, l, a, u, d) {
  let f = l === a,
    {
      glyph: h,
      color: x
    } = cn(Dt(o, d)),
    y = ot(o.label, Math.max(1, u - 4));
  return [{
    text: f ? `${Z.pointer} ` : "  ",
    color: "permission"
  }, {
    text: h,
    color: x
  }, {
    text: " "
  }, {
    text: y,
    color: f ? "permission" : void 0,
    dimColor: !f && It(o)
  }]
}
