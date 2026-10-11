/* ==========================================================================
 * m1460.Vr   [m1460_0xd973957.js @ 27146]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Vr(o) {
  let W = w(41),
    {
      phases: l,
      selectedPhase: a,
      clampedPhase: u,
      clampedAgent: d,
      level: f,
      leftWidth: h,
      rightWidth: x,
      viewport: y,
      workflowActive: A,
      filterLabel: k
    } = o,
    C = a.agents,
    L,
    D,
    M,
    q,
    H,
    z,
    E,
    B,
    O,
    rt;
  if (W[0] !== C || W[1] !== d || W[2] !== u || W[3] !== k || W[4] !== h || W[5] !== f || W[6] !== l || W[7] !== x || W[8] !== a || W[9] !== y || W[10] !== A) {
    let G = Bt(u, l.length, y);
    let nt = Bt(d, C.length, y);
    let gt = oo(C, x - 4);
    let Q = [];
    for (let K = 0; K < y; K++) {
      let Y = G.from + K;
      let mt = nt.from + K;
      let it = Y < G.to ? oi(l[Y], Y, u, f, h) : [];
      let pt;
      if (mt < nt.to) pt = ri(C[mt], mt, d, f, x, gt, A);else if (C.length === 0 && K === 0) pt = [{
        text: no(a, k),
        dimColor: !0
      }];else pt = [];
      Q.push(e(dn, {
        left: it,
        right: pt,
        leftWidth: h,
        rightWidth: x
      }, K));
    }
    const dt = a.title;
    let at;
    if (W[21] !== C.length || W[22] !== k) at = He(C.length, k), W[21] = C.length, W[22] = k, W[23] = at;else at = W[23];
    let ut = `${dt} \xB7 ${at}`;
    D = s;
    B = "column";
    if (W[24] !== h || W[25] !== ut || W[26] !== x) O = e(Xt, {
      pos: "top",
      leftWidth: h,
      rightWidth: x,
      leftTitle: "Phases",
      rightTitle: ut
    }), W[24] = h, W[25] = ut, W[26] = x, W[27] = O;else O = W[27];
    rt = Q;
    L = Xt;
    M = "bottom";
    q = h;
    H = x;
    z = l.length > y ? At(G, l.length) : void 0;
    E = C.length > y ? At(nt, C.length) : void 0;
    W[0] = C, W[1] = d, W[2] = u, W[3] = k, W[4] = h, W[5] = f, W[6] = l, W[7] = x, W[8] = a, W[9] = y, W[10] = A, W[11] = L, W[12] = D, W[13] = M, W[14] = q, W[15] = H, W[16] = z, W[17] = E, W[18] = B, W[19] = O, W[20] = rt;
  } else L = W[11], D = W[12], M = W[13], q = W[14], H = W[15], z = W[16], E = W[17], B = W[18], O = W[19], rt = W[20];
  let dt;
  if (W[28] !== L || W[29] !== M || W[30] !== q || W[31] !== H || W[32] !== z || W[33] !== E) dt = e(L, {
    pos: M,
    leftWidth: q,
    rightWidth: H,
    leftTag: z,
    rightTag: E
  }), W[28] = L, W[29] = M, W[30] = q, W[31] = H, W[32] = z, W[33] = E, W[34] = dt;else dt = W[34];
  let at;
  if (W[35] !== D || W[36] !== B || W[37] !== O || W[38] !== rt || W[39] !== dt) at = r(D, {
    flexDirection: B,
    children: [O, rt, dt]
  }), W[35] = D, W[36] = B, W[37] = O, W[38] = rt, W[39] = dt, W[40] = at;else at = W[40];
  return at;
}
