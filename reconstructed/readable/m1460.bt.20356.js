/* ==============================================================================
 * m1460.bt   [m1460_0xd973957.js @ 20356]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 20356
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
  }), u[0] = d;
  else d = u[0];
  let f;
  if (u[1] !== a || u[2] !== l) f = e(Te, {
    segs: l,
    width: a
  }), u[1] = a, u[2] = l, u[3] = f;
  else f = u[3];
  let h;
  if (u[4] === S) h = r(n, {
    color: "text",
    children: [" ", o_.pipe]
  }), u[4] = h;
  else h = u[4];
  let x;
  if (u[5] !== f) x = r(n, {
    wrap: "truncate-end",
    children: [d, f, h]
  }), u[5] = f, u[6] = x;
  else x = u[6];
  return x
}
