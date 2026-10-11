/* ==============================================================================
 * m1460.Ms   [m1460_0xd973957.js @ 16501]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 16501
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ms(o, l, {
  firstPrefix: a,
  restPrefix: u,
  width: d,
  maxLines: f,
  color: h,
  reportHidden: x = !0
}) {
  let y = l.head.split(`
`),
    A = 0,
    k = Math.max(0, l.lineCount - y.length),
    C = !0,
    W = Math.max(1, d - ie(u));
  t: for (let [D, M] of y.entries()) {
    let q = Me(M),
      H = re(q, (f - A + 1) * d),
      z = A === 0 ? Math.max(1, d - ie(a)) : W,
      E = GUe(H, z)[0] ?? "",
      B = H.slice(E.length),
      O = B ? [E, ...GUe(B, W)] : [E];
    for (let [rt, G] of O.entries()) {
      if (A >= f) {
        k += y.length - D, C = !1;
        break t
      }
      o.push([{
        text: (A === 0 && rt === 0 ? a : u) + G,
        color: h,
        dimColor: h === void 0
      }]), A++
    }
    if (H.length < q.length) {
      k += y.length - D, C = !1;
      break
    }
  }
  let L = C ? l.truncatedChars : 0;
  if (x) Rs(o, u, d, k, L);
  return {
    lines: A,
    hiddenLines: k,
    hiddenChars: L
  }
}
