/* ==============================================================================
 * m1460.Ci   [m1460_0xd973957.js @ 29825]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 29825
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ci({
  lines: o,
  title: l,
  body: a,
  collapsedLines: u,
  expanded: d,
  indent: f,
  width: h
}) {
  let x = a.length - u,
    y = x >= 2 ? x : 0,
    A = [{
      text: l,
      bold: !0,
      dimColor: !0
    }];
  if (y > 0) A.push({
    text: ot(` \xB7 ${a.length} lines${d?"":` \xB7 ${eUe} expand`}`, h - ie(l)),
    dimColor: !0
  });
  o.push(A);
  let k = d || y === 0 ? a : a.slice(0, u);
  for (let C of k) o.push(C);
  if (!d && y > 0) o.push([{
    text: ot(`${f}\u2026 ${y} more ${I(y,"line")}`, h),
    dimColor: !0
  }]);
  return y
}
