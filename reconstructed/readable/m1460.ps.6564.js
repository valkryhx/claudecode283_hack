/* ==============================================================================
 * m1460.ps   [m1460_0xd973957.js @ 6564]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 6564
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ps(o, l, a, u, d, f) {
  if (a) {
    let y = Co(l, d);
    o.push([{
      text: y
    }, {
      ...a,
      text: ot(a.text, d - y.length - 1)
    }, {
      text: ":",
      dimColor: !0
    }])
  }
  let h = Co(a ? l + 1 : l, d),
    x = d - h.length;
  for (let y of u) {
    if (y === "") {
      o.push([{
        text: ""
      }]);
      continue
    }
    for (let A of GUe(y, x)) o.push([f ? {
      text: h + A,
      color: f
    } : {
      text: h + A
    }])
  }
}
