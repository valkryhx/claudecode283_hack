/* ==========================================================================
 * m1460.Te   [m1460_0xd973957.js @ 20089]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Te(o) {
  let u = w(7),
    {
      segs: l,
      width: a
    } = o,
    d,
    f;
  if (u[0] !== l || u[1] !== a) {
    let {
      segs: h,
      pad: x
    } = Vs(l, a);
    d = h.map(fc);
    f = " ".repeat(x);
    u[0] = l, u[1] = a, u[2] = d, u[3] = f;
  } else d = u[2], f = u[3];
  let y;
  if (u[4] !== d || u[5] !== f) y = r(V, {
    children: [d, f]
  }), u[4] = d, u[5] = f, u[6] = y;else y = u[6];
  return y;
}
