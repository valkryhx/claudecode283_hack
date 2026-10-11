/* ==============================================================================
 * m1460.Yr   [m1460_0xd973957.js @ 36308]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 36308
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Yr(o) {
  let x = w(43),
    {
      agentLabel: l,
      position: a,
      detailLines: u,
      cardScroll: d,
      contentWidth: f,
      viewport: h
    } = o,
    y;
  if (x[0] !== f) y = Bx.repeat(f + 2), x[0] = f, x[1] = y;
  else y = x[1];
  let A = y,
    k = Math.max(0, u.length - h),
    C, W;
  if (x[2] !== l || x[3] !== A || x[4] !== d || x[5] !== f || x[6] !== u || x[7] !== k || x[8] !== a || x[9] !== h) {
    let L = Pt(d, 0, k);
    let D = Math.min(u.length, L + h);
    W = [];
    let M = ` \xB7 ${a}`;
    const q = Math.max(1, f - ie(M));
    let H;
    if (x[12] !== l || x[13] !== q) H = ot(l, q), x[12] = l, x[13] = q, x[14] = H;
    else H = x[14];
    let z;
    if (x[15] !== H) z = {
      text: H,
      color: "permission",
      bold: !0
    }, x[15] = H, x[16] = z;
    else z = x[16];
    let E;
    if (x[17] !== M) E = {
      text: M,
      dimColor: !0
    }, x[17] = M, x[18] = E;
    else E = x[18];
    let B;
    if (x[19] !== z || x[20] !== E) B = [z, E], x[19] = z, x[20] = E, x[21] = B;
    else B = x[21];
    let O;
    if (x[22] !== f || x[23] !== B) O = e(bt, {
      contentWidth: f,
      segs: B
    }, "title"), x[22] = f, x[23] = B, x[24] = O;
    else O = x[24];
    W.push(O);
    for (let rt = L; rt < D; rt++) W.push(e(bt, {
      contentWidth: f,
      segs: u[rt]
    }, `l-${rt}`));
    for (let G = D - L; G < h; G++) W.push(e(bt, {
      contentWidth: f,
      segs: [{
        text: ""
      }]
    }, `pad-${G}`));
    if (u.length > h) {
      let nt = ` ${At({from:L,to:D},u.length)} `;
      let gt = Math.max(0, f + 2 - ie(nt));
      let Q;
      if (x[25] !== gt) Q = Bx.repeat(gt), x[25] = gt, x[26] = Q;
      else Q = x[26];
      let K;
      if (x[27] !== Q) K = r(n, {
        color: "text",
        children: [" ", wb.bottomLeft, Q]
      }), x[27] = Q, x[28] = K;
      else K = x[28];
      let Y;
      if (x[29] !== nt) Y = e(n, {
        dimColor: !0,
        children: nt
      }), x[29] = nt, x[30] = Y;
      else Y = x[30];
      let mt;
      if (x[31] === S) mt = e(n, {
        color: "text",
        children: wb.bottomRight
      }), x[31] = mt;
      else mt = x[31];
      let it;
      if (x[32] !== Y || x[33] !== K) it = r(n, {
        wrap: "truncate-end",
        children: [K, Y, mt]
      }), x[32] = Y, x[33] = K, x[34] = it;
      else it = x[34];
      C = it
    } else {
      let Q;
      if (x[35] !== A) Q = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [" ", wb.bottomLeft, A, wb.bottomRight]
      }), x[35] = A, x[36] = Q;
      else Q = x[36];
      C = Q
    }
    x[2] = l, x[3] = A, x[4] = d, x[5] = f, x[6] = u, x[7] = k, x[8] = a, x[9] = h, x[10] = C, x[11] = W
  } else C = x[10], W = x[11];
  let q;
  if (x[37] !== A) q = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [" ", wb.topLeft, A, wb.topRight]
  }), x[37] = A, x[38] = q;
  else q = x[38];
  let H;
  if (x[39] !== C || x[40] !== W || x[41] !== q) H = r(s, {
    flexDirection: "column",
    children: [q, W, C]
  }), x[39] = C, x[40] = W, x[41] = q, x[42] = H;
  else H = x[42];
  return H
}
