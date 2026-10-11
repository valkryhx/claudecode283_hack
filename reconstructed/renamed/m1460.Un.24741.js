/* ==========================================================================
 * m1460.Un   [m1460_0xd973957.js @ 24741]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Un(o, l) {
  let a = [],
    u = 0;
  if (l.label) {
    let h = ` ${ot(l.label.text, Math.max(1, o - 2))} `;
    u += ie(h), a.push(e(n, {
      color: l.label.color ?? "text",
      bold: l.label.bold,
      children: h
    }, "label"));
  }
  let d = l.tag ? ` ${ot(l.tag, Math.max(0, o - u - 2))} ` : "",
    f = Math.max(0, o - u - ie(d));
  if (a.push(e(n, {
    color: "text",
    children: Bx.repeat(f)
  }, "dash")), d) a.push(e(n, {
    dimColor: !0,
    children: d
  }, "tag"));
  return a;
}
