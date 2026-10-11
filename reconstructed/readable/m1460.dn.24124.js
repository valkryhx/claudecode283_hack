/* ==============================================================================
 * m1460.dn   [m1460_0xd973957.js @ 24124]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 24124
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function dn(o) {
  let f = w(12),
    {
      left: l,
      right: a,
      leftWidth: u,
      rightWidth: d
    } = o,
    h;
  if (f[0] === S) h = r(n, {
    color: "text",
    children: [" ", o_.pipe, " "]
  }), f[0] = h;
  else h = f[0];
  let x;
  if (f[1] !== l || f[2] !== u) x = e(Te, {
    segs: l,
    width: u
  }), f[1] = l, f[2] = u, f[3] = x;
  else x = f[3];
  let y;
  if (f[4] === S) y = r(n, {
    color: "text",
    children: [" ", o_.pipe, " "]
  }), f[4] = y;
  else y = f[4];
  let A;
  if (f[5] !== a || f[6] !== d) A = e(Te, {
    segs: a,
    width: d
  }), f[5] = a, f[6] = d, f[7] = A;
  else A = f[7];
  let k;
  if (f[8] === S) k = r(n, {
    color: "text",
    children: [" ", o_.pipe]
  }), f[8] = k;
  else k = f[8];
  let C;
  if (f[9] !== x || f[10] !== A) C = r(n, {
    wrap: "truncate-end",
    children: [h, x, y, A, k]
  }), f[9] = x, f[10] = A, f[11] = C;
  else C = f[11];
  return C
}
