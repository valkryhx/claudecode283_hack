/* ==============================================================================
 * m1460.Gr   [m1460_0xd973957.js @ 34627]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 34627
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Gr(o) {
  let W = w(42),
    {
      phase: l,
      clampedAgent: a,
      agentLabel: u,
      detailLines: d,
      cardScroll: f,
      leftWidth: h,
      rightWidth: x,
      viewport: y,
      workflowActive: A,
      filterLabel: k
    } = o,
    C = l.agents,
    L, D, M, q, H, z, E, B, O, rt;
  if (W[0] !== u || W[1] !== C || W[2] !== f || W[3] !== a || W[4] !== d || W[5] !== k || W[6] !== h || W[7] !== l.title || W[8] !== x || W[9] !== y || W[10] !== A) {
    let G = Bt(a, C.length, y);
    let nt = Math.max(0, d.length - y);
    let gt = Pt(f, 0, nt);
    let Q = Math.min(d.length, gt + y);
    let K = [];
    for (let Y = 0; Y < y; Y++) {
      let mt = G.from + Y;
      let it = mt < G.to ? si(C[mt], mt, a, h, A) : [];
      let pt = gt + Y;
      let dt = pt < Q ? d[pt] : [];
      K.push(e(dn, {
        left: it,
        right: dt,
        leftWidth: h,
        rightWidth: x
      }, Y))
    }
    D = s;
    B = "column";
    const at = l.title;
    let ut;
    if (W[21] !== C.length || W[22] !== k) ut = He(C.length, k), W[21] = C.length, W[22] = k, W[23] = ut;
    else ut = W[23];
    const Tt = `${at} \xB7 ${ut}`;
    if (W[24] !== u || W[25] !== h || W[26] !== x || W[27] !== Tt) O = e(Xt, {
      pos: "top",
      leftWidth: h,
      rightWidth: x,
      leftTitle: Tt,
      rightTitle: u
    }), W[24] = u, W[25] = h, W[26] = x, W[27] = Tt, W[28] = O;
    else O = W[28];
    rt = K;
    L = Xt;
    M = "bottom";
    q = h;
    H = x;
    z = C.length > y ? At(G, C.length) : void 0;
    E = d.length > y ? At({
      from: gt,
      to: Q
    }, d.length) : void 0;
    W[0] = u, W[1] = C, W[2] = f, W[3] = a, W[4] = d, W[5] = k, W[6] = h, W[7] = l.title, W[8] = x, W[9] = y, W[10] = A, W[11] = L, W[12] = D, W[13] = M, W[14] = q, W[15] = H, W[16] = z, W[17] = E, W[18] = B, W[19] = O, W[20] = rt
  } else L = W[11], D = W[12], M = W[13], q = W[14], H = W[15], z = W[16], E = W[17], B = W[18], O = W[19], rt = W[20];
  let at;
  if (W[29] !== L || W[30] !== M || W[31] !== q || W[32] !== H || W[33] !== z || W[34] !== E) at = e(L, {
    pos: M,
    leftWidth: q,
    rightWidth: H,
    leftTag: z,
    rightTag: E
  }), W[29] = L, W[30] = M, W[31] = q, W[32] = H, W[33] = z, W[34] = E, W[35] = at;
  else at = W[35];
  let ut;
  if (W[36] !== D || W[37] !== B || W[38] !== O || W[39] !== rt || W[40] !== at) ut = r(D, {
    flexDirection: B,
    children: [O, rt, at]
  }), W[36] = D, W[37] = B, W[38] = O, W[39] = rt, W[40] = at, W[41] = ut;
  else ut = W[41];
  return ut
}
