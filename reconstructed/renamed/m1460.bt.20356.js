/* ==========================================================================
 * m1460.bt   [m1460_0xd973957.js @ 20356]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function bt(o) {
  let u = w(7),
    {
      segs: l,
      contentWidth: a
    } = o,
    d;
  if (u[0] === S) d = r(n, {
    color: "text",
    children: [" ", o_.pipe, " "]
  }), u[0] = d;else d = u[0];
  let f;
  if (u[1] !== a || u[2] !== l) f = e(Te, {
    segs: l,
    width: a
  }), u[1] = a, u[2] = l, u[3] = f;else f = u[3];
  let h;
  if (u[4] === S) h = r(n, {
    color: "text",
    children: [" ", o_.pipe]
  }), u[4] = h;else h = u[4];
  let x;
  if (u[5] !== f) x = r(n, {
    wrap: "truncate-end",
    children: [d, f, h]
  }), u[5] = f, u[6] = x;else x = u[6];
  return x;
}
