/* ==============================================================================
 * m1460.Ur   [m1460_0xd973957.js @ 21112]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 21112
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ur(o) {
  let k = w(53),
    {
      phase: l,
      selectedAgent: a,
      level: u,
      contentWidth: d,
      viewport: f,
      tight: h,
      workflowActive: x,
      filterLabel: y
    } = o,
    A = l.agents,
    C;
  if (k[0] !== d) C = Bx.repeat(d + 2), k[0] = d, k[1] = C;
  else C = k[1];
  let W = C,
    L, D;
  if (k[2] !== A || k[3] !== W || k[4] !== d || k[5] !== y || k[6] !== u || k[7] !== l || k[8] !== a || k[9] !== h || k[10] !== f || k[11] !== x) {
    let M = Bt(a, A.length, f);
    D = [];
    let q = He(A.length, y);
    if (h) {
      let H = ot(` \xB7 ${q}`, Math.max(1, d - 1));
      let z = Math.max(1, d - ie(H));
      let E;
      if (k[14] !== l.title || k[15] !== z) E = ot(l.title, z), k[14] = l.title, k[15] = z, k[16] = E;
      else E = k[16];
      let B;
      if (k[17] !== E) B = {
        text: E,
        color: "permission",
        bold: !0
      }, k[17] = E, k[18] = B;
      else B = k[18];
      let O;
      if (k[19] !== H) O = {
        text: H,
        dimColor: !0
      }, k[19] = H, k[20] = O;
      else O = k[20];
      let rt;
      if (k[21] !== B || k[22] !== O) rt = [B, O], k[21] = B, k[22] = O, k[23] = rt;
      else rt = k[23];
      let G;
      if (k[24] !== d || k[25] !== rt) G = e(bt, {
        contentWidth: d,
        segs: rt
      }, "title"), k[24] = d, k[25] = rt, k[26] = G;
      else G = k[26];
      D.push(G)
    } else D.push(e(bt, {
      contentWidth: d,
      segs: [{
        text: ot(l.title, d),
        color: "permission",
        bold: !0
      }]
    }, "title")), D.push(e(bt, {
      contentWidth: d,
      segs: [{
        text: ot(q, d),
        dimColor: !0
      }]
    }, "count")), D.push(e(bt, {
      contentWidth: d,
      segs: [{
        text: ""
      }]
    }, "gap"));
    let nt = D.length;
    if (A.length === 0) {
      let E;
      if (k[27] !== y || k[28] !== l) E = no(l, y), k[27] = y, k[28] = l, k[29] = E;
      else E = k[29];
      let B;
      if (k[30] !== E) B = [{
        text: E,
        dimColor: !0
      }], k[30] = E, k[31] = B;
      else B = k[31];
      let O;
      if (k[32] !== d || k[33] !== B) O = e(bt, {
        contentWidth: d,
        segs: B
      }, "empty"), k[32] = d, k[33] = B, k[34] = O;
      else O = k[34];
      D.push(O)
    } else {
      let gt = oo(A, d - 5);
      for (let Q = M.from; Q < M.to; Q++) {
        let K = A[Q];
        let Y = u === "agents" && Q === a;
        let {
          glyph: mt,
          color: it
        } = cn(Dt(K, x));
        let pt = ot(K.label, gt);
        let dt = " ".repeat(Math.max(0, gt - ie(pt)));
        let at = Math.max(0, d - (gt + 5));
        D.push(e(bt, {
          contentWidth: d,
          segs: [{
            text: Y ? Z.pointer : " ",
            color: "permission"
          }, {
            text: " "
          }, {
            text: mt,
            color: it
          }, {
            text: " "
          }, {
            text: `${pt}${dt}`,
            color: Y ? "permission" : void 0,
            dimColor: !Y && It(K)
          }, {
            text: " "
          }, ...Kr(K, at, Y, x)]
        }, `a-${Q}`))
      }
    }
    let ut = D.length - nt;
    for (let Tt = ut; Tt < f; Tt++) D.push(e(bt, {
      contentWidth: d,
      segs: [{
        text: ""
      }]
    }, `pad-${Tt}`));
    if (A.length > f) {
      let St = ` ${At(M,A.length)} `;
      let yt = Math.max(0, d + 2 - ie(St));
      let E;
      if (k[35] !== yt) E = Bx.repeat(yt), k[35] = yt, k[36] = E;
      else E = k[36];
      let B;
      if (k[37] !== E) B = r(n, {
        color: "text",
        children: [" ", wb.bottomLeft, E]
      }), k[37] = E, k[38] = B;
      else B = k[38];
      let O;
      if (k[39] !== St) O = e(n, {
        dimColor: !0,
        children: St
      }), k[39] = St, k[40] = O;
      else O = k[40];
      let rt;
      if (k[41] === S) rt = e(n, {
        color: "text",
        children: wb.bottomRight
      }), k[41] = rt;
      else rt = k[41];
      let G;
      if (k[42] !== B || k[43] !== O) G = r(n, {
        wrap: "truncate-end",
        children: [B, O, rt]
      }), k[42] = B, k[43] = O, k[44] = G;
      else G = k[44];
      L = G
    } else {
      let E;
      if (k[45] !== W) E = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [" ", wb.bottomLeft, W, wb.bottomRight]
      }), k[45] = W, k[46] = E;
      else E = k[46];
      L = E
    }
    k[2] = A, k[3] = W, k[4] = d, k[5] = y, k[6] = u, k[7] = l, k[8] = a, k[9] = h, k[10] = f, k[11] = x, k[12] = L, k[13] = D
  } else L = k[12], D = k[13];
  let E;
  if (k[47] !== W) E = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [" ", wb.topLeft, W, wb.topRight]
  }), k[47] = W, k[48] = E;
  else E = k[48];
  let B;
  if (k[49] !== L || k[50] !== D || k[51] !== E) B = r(s, {
    flexDirection: "column",
    children: [E, D, L]
  }), k[49] = L, k[50] = D, k[51] = E, k[52] = B;
  else B = k[52];
  return B
}
