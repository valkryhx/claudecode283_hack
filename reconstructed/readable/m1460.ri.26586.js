/* ==============================================================================
 * m1460.ri   [m1460_0xd973957.js @ 26586]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 26586
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ri(o, l, a, u, d, f, h) {
  let x = u === "agents" && l === a,
    {
      glyph: y,
      color: A
    } = cn(Dt(o, h)),
    k = ot(o.label, f),
    C = " ".repeat(Math.max(0, f - ie(k))),
    W = Math.max(0, d - (f + 4));
  return [{
    text: x ? Z.pointer : " ",
    color: "permission"
  }, {
    text: y,
    color: A
  }, {
    text: " "
  }, {
    text: `${k}${C}`,
    color: x ? "permission" : void 0,
    dimColor: !x && It(o)
  }, {
    text: " "
  }, ...Kr(o, W, x, h)]
}
