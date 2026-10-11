/* ==============================================================================
 * m1460.Xt   [m1460_0xd973957.js @ 25107]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 25107
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Xt(o) {
  let C = w(20),
    {
      pos: l,
      leftWidth: a,
      rightWidth: u,
      leftTitle: d,
      rightTitle: f,
      leftTag: h,
      rightTag: x
    } = o,
    y = l === "top" ? wb.topLeft : wb.bottomLeft,
    A = l === "top" ? o_.teeDown : o_.teeUp,
    k = l === "top" ? wb.topRight : wb.bottomRight,
    W;
  if (C[0] !== y) W = r(n, {
    color: "text",
    children: [" ", y]
  }), C[0] = y, C[1] = W;
  else W = C[1];
  const L = a + 2;
  let D;
  if (C[2] !== h || C[3] !== d || C[4] !== L) D = Un(L, {
    label: d ? {
      text: d
    } : void 0,
    tag: h
  }), C[2] = h, C[3] = d, C[4] = L, C[5] = D;
  else D = C[5];
  let M;
  if (C[6] !== A) M = e(n, {
    color: "text",
    children: A
  }), C[6] = A, C[7] = M;
  else M = C[7];
  const q = u + 2;
  let H;
  if (C[8] !== x || C[9] !== f || C[10] !== q) H = Un(q, {
    label: f ? {
      text: f
    } : void 0,
    tag: x
  }), C[8] = x, C[9] = f, C[10] = q, C[11] = H;
  else H = C[11];
  let z;
  if (C[12] !== k) z = e(n, {
    color: "text",
    children: k
  }), C[12] = k, C[13] = z;
  else z = C[13];
  let E;
  if (C[14] !== W || C[15] !== D || C[16] !== M || C[17] !== H || C[18] !== z) E = r(n, {
    wrap: "truncate-end",
    children: [W, D, M, H, z]
  }), C[14] = W, C[15] = D, C[16] = M, C[17] = H, C[18] = z, C[19] = E;
  else E = C[19];
  return E
}
