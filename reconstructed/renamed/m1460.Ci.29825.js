/* ==========================================================================
 * m1460.Ci   [m1460_0xd973957.js @ 29825]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    text: ot(` \xB7 ${a.length} lines${d ? "" : ` \xB7 ${eUe} expand`}`, h - ie(l)),
    dimColor: !0
  });
  o.push(A);
  let k = d || y === 0 ? a : a.slice(0, u);
  for (let C of k) o.push(C);
  if (!d && y > 0) o.push([{
    text: ot(`${f}\u2026 ${y} more ${I(y, "line")}`, h),
    dimColor: !0
  }]);
  return y;
}
