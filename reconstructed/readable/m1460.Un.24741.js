/* ==============================================================================
 * m1460.Un   [m1460_0xd973957.js @ 24741]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 24741
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Un(o, l) {
  let a = [],
    u = 0;
  if (l.label) {
    let h = ` ${ot(l.label.text,Math.max(1,o-2))} `;
    u += ie(h), a.push(e(n, {
      color: l.label.color ?? "text",
      bold: l.label.bold,
      children: h
    }, "label"))
  }
  let d = l.tag ? ` ${ot(l.tag,Math.max(0,o-u-2))} ` : "",
    f = Math.max(0, o - u - ie(d));
  if (a.push(e(n, {
      color: "text",
      children: Bx.repeat(f)
    }, "dash")), d) a.push(e(n, {
    dimColor: !0,
    children: d
  }, "tag"));
  return a
}
