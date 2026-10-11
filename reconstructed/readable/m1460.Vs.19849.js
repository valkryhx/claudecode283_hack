/* ==============================================================================
 * m1460.Vs   [m1460_0xd973957.js @ 19849]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 19849
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Vs(o, l) {
  let a = 0;
  for (let u = 0; u < o.length; u++) {
    let d = o[u],
      f = ie(d.text);
    if (a + f > l) {
      let h = l - a,
        x = h > 0 ? ot(d.text, h) : "",
        y = o.slice(0, u);
      if (x) y.push({
        ...d,
        text: x
      });
      return {
        segs: y,
        pad: Math.max(0, h - ie(x))
      }
    }
    a += f
  }
  return {
    segs: o,
    pad: Math.max(0, l - a)
  }
}
