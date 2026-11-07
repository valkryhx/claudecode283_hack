// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  Bl,
  As
} from "B:/~BUN/root/chunk-q8sf8fhe.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  yK
} from "B:/~BUN/root/chunk-h6416p81.js";
import {
  nh
} from "B:/~BUN/root/chunk-dwg8my6z.js";
import {
  Ce
} from "B:/~BUN/root/chunk-cync0e08.js";
import {
  ke,
  IWr
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  fv,
  TP
} from "B:/~BUN/root/chunk-w2rkhp43.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  z_,
  Jt,
  ve,
  O,
  qo,
  y,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  grn,
  s4
} from "B:/~BUN/root/chunk-4jfmvmew.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
var uUe = Jt(null);

function e8s() {
  let l = ve(uUe),
    t = ve(yK);
  return () => {
    if (l === null || !t) return;
    try {
      t.getState().open.find((i) => i.id === l)?.onClaimed?.()
    } catch (i) {
      a(i)
    }
  }
}

function P3n() {
  let l = ve(uUe),
    t = ve(yK),
    i = l === null || !t ? void 0 : t.getState().open.find((f) => f.id === l)?.countedAsk,
    u = i === void 0 ? void 0 : t?.askTally;
  return At(u?.subscribe ?? Ie, () => i === void 0 || !u ? null : u.positionLabel(i))
}

function H7(l, t, {
  perReveal: i = !1
} = {}) {
  let u = ve(uUe),
    f = ve(yK),
    A = qo(t),
    [d] = y(() => i && u !== null && f ? f.getState().open.find((p) => p.id === u)?.revealSeq ?? 0 : 0);
  O(() => {
    if (u !== null && f) {
      if (!f.firstReveal(u, i ? `${l}@${d}` : l)) return
    }
    A()
  }, [u, f, l, i, d])
}

function Ie() {
  return () => {}
}

function ee(l) {
  let t = s4(l);
  return t === null ? void 0 : String(t)
}

function I(l) {
  switch (l?.type) {
    case "workflow-agent": {
      let t = ee(l.workflowName);
      return t !== void 0 ? `from the "${t}" workflow` : "from a workflow"
    }
    case "subagent": {
      let t = ee(l.agentName);
      return t !== void 0 ? `from the ${t} agent` : "from a subagent"
    }
    case "remote-agent":
      return "from a remote cloud agent";
    case "plugin": {
      let t = ee(l.pluginName);
      return t === void 0 ? "from a plugin" : `from the ${t} plugin`
    }
  }
  return
}

function nWr(l, t, i) {
  let u = I(t);
  return ce(l) + (u === void 0 ? 0 : 1 + ce(`\xB7 ${u}`)) <= i
}

function sle(l) {
  let R = S(25),
    {
      title: t,
      subtitle: i,
      color: u,
      requestSource: f,
      srPrefix: A,
      aside: d
    } = l,
    p = u === void 0 ? "permission" : u,
    z;
  if (R[0] !== f) z = I(f), R[0] = f, R[1] = z;
  else z = R[1];
  let h = z;
  const q = A !== void 0 ? `${A} ${t}` : void 0;
  let o;
  if (R[2] !== p || R[3] !== q || R[4] !== t) o = e(n, {
    "aria-label": q,
    bold: !0,
    color: p,
    children: t
  }), R[2] = p, R[3] = q, R[4] = t, R[5] = o;
  else o = R[5];
  let g;
  if (R[6] !== h) g = h !== void 0 && r(n, {
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), h]
  }), R[6] = h, R[7] = g;
  else g = R[7];
  let b;
  if (R[8] !== o || R[9] !== g) b = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [o, g]
  }), R[8] = o, R[9] = g, R[10] = b;
  else b = R[10];
  let m = b,
    P;
  if (R[11] !== d || R[12] !== f || R[13] !== t) P = d !== void 0 && nWr(t, f, d.rowColumns - 1 - ce(d.text)), R[11] = d, R[12] = f, R[13] = t, R[14] = P;
  else P = R[14];
  let C = P;
  const k = C ? 1 : void 0;
  let N;
  if (R[15] !== d || R[16] !== C || R[17] !== m) N = C ? r(s, {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 1,
    children: [m, e(n, {
      dimColor: !0,
      children: d.text
    })]
  }) : m, R[15] = d, R[16] = C, R[17] = m, R[18] = N;
  else N = R[18];
  let x;
  if (R[19] !== i) x = i != null && (typeof i === "string" ? e(n, {
    dimColor: !0,
    wrap: "truncate-start",
    children: i
  }) : i), R[19] = i, R[20] = x;
  else x = R[20];
  let c;
  if (R[21] !== x || R[22] !== k || R[23] !== N) c = r(s, {
    flexDirection: "column",
    flexGrow: k,
    children: [N, x]
  }), R[21] = x, R[22] = k, R[23] = N, R[24] = c;
  else c = R[24];
  return c
}

function We() {
  return !1
}
var ge = {
    keyCase: "lower"
  },
  be = "Permission Required:";

function ua(l) {
  let k = S(38),
    {
      title: t,
      subtitle: i,
      color: u,
      titleColor: f,
      innerPaddingX: A,
      requestSource: d,
      titleRight: p,
      srPrefix: R,
      marginTop: z,
      frame: h,
      children: q
    } = l,
    o = u === void 0 ? "permission" : u,
    g = A === void 0 ? 1 : A,
    b = R === void 0 ? be : R,
    m = z === void 0 ? 1 : z,
    P = P3n(),
    C = ve(nh),
    N;
  if (k[0] !== C) N = C ?? {
    rows: 0,
    columns: 0
  }, k[0] = C, k[1] = N;
  else N = k[1];
  let {
    columns: x
  } = As(N), c = Bl(), [_] = y(We);
  if (h !== void 0 || _) {
    let T;
    if (k[2] !== P || k[3] !== q || k[4] !== o || k[5] !== x || k[6] !== h || k[7] !== g || k[8] !== c || k[9] !== m || k[10] !== d || k[11] !== b || k[12] !== i || k[13] !== t || k[14] !== p) T = e(ue, {
      title: t,
      subtitle: i,
      color: o,
      requestSource: d,
      titleRight: p,
      askPosition: P,
      columns: x,
      insideModal: c,
      srPrefix: b,
      innerPaddingX: g,
      marginTop: m,
      frame: h,
      children: q
    }), k[2] = P, k[3] = q, k[4] = o, k[5] = x, k[6] = h, k[7] = g, k[8] = c, k[9] = m, k[10] = d, k[11] = b, k[12] = i, k[13] = t, k[14] = p, k[15] = T;
    else T = k[15];
    return T
  }
  const T = b ?? void 0;
  let E;
  if (k[16] !== P || k[17] !== x || k[18] !== p) E = p === void 0 && P !== null ? {
    text: P,
    rowColumns: x - 2
  } : void 0, k[16] = P, k[17] = x, k[18] = p, k[19] = E;
  else E = k[19];
  let B;
  if (k[20] !== d || k[21] !== i || k[22] !== T || k[23] !== E || k[24] !== t || k[25] !== f) B = e(sle, {
    title: t,
    subtitle: i,
    color: f,
    requestSource: d,
    srPrefix: T,
    aside: E
  }), k[20] = d, k[21] = i, k[22] = T, k[23] = E, k[24] = t, k[25] = f, k[26] = B;
  else B = k[26];
  let D;
  if (k[27] !== B || k[28] !== p) D = e(s, {
    paddingX: 1,
    flexDirection: "column",
    children: r(s, {
      justifyContent: "space-between",
      children: [B, p]
    })
  }), k[27] = B, k[28] = p, k[29] = D;
  else D = k[29];
  let X;
  if (k[30] !== q || k[31] !== g) X = e(s, {
    flexDirection: "column",
    paddingX: g,
    children: q
  }), k[30] = q, k[31] = g, k[32] = X;
  else X = k[32];
  let L;
  if (k[33] !== o || k[34] !== m || k[35] !== X || k[36] !== D) L = r(s, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: o,
    borderLeft: !1,
    borderRight: !1,
    borderBottom: !1,
    marginTop: m,
    children: [D, X]
  }), k[33] = o, k[34] = m, k[35] = X, k[36] = D, k[37] = L;
  else L = k[37];
  return L
}

function ue(l) {
  let c = S(45),
    {
      title: t,
      subtitle: i,
      color: u,
      requestSource: f,
      titleRight: A,
      askPosition: d,
      columns: p,
      insideModal: R,
      srPrefix: z,
      innerPaddingX: h,
      marginTop: q,
      frame: o,
      children: g
    } = l,
    b = o?.titleSuffix === void 0 ? "" : grn(o.titleSuffix.replace(/\s+/g, " ").trim()),
    m = I(f),
    P = ve(nh),
    C = Math.max(1, o === void 0 ? p - 2 : p - 2 * (R ? TP : fv)),
    k = ce(t) + (b === "" ? 0 : 3 + ce(b)) + (m === void 0 ? 0 : 3 + ce(m)),
    N = A ?? (d !== null && k + 2 + ce(d) <= C ? d : void 0);
  const x = z === null ? void 0 : `${z} ${t}`;
  let _;
  if (c[0] !== x || c[1] !== t) _ = e(n, {
    "aria-label": x,
    children: t
  }), c[0] = x, c[1] = t, c[2] = _;
  else _ = c[2];
  let T;
  if (c[3] !== m || c[4] !== b) T = b === "" && m === void 0 ? void 0 : r(ne, {
    children: [b !== "" && r(n, {
      dimColor: !0,
      children: [" \xB7 ", b]
    }), m !== void 0 && r(n, {
      dimColor: !0,
      children: [" \xB7 ", m]
    })]
  }), c[3] = m, c[4] = b, c[5] = T;
  else T = c[5];
  let E;
  if (c[6] !== i) E = typeof i === "string" ? e(n, {
    dimColor: !0,
    wrap: "truncate-start",
    children: i
  }) : i ?? void 0, c[6] = i, c[7] = E;
  else E = c[7];
  let B;
  if (c[8] !== u || c[9] !== _ || c[10] !== T || c[11] !== E || c[12] !== N) B = {
    title: _,
    titleSuffix: T,
    subtitle: E,
    isSubtitleDimmed: !1,
    titleEnd: N,
    color: u
  }, c[8] = u, c[9] = _, c[10] = T, c[11] = E, c[12] = N, c[13] = B;
  else B = c[13];
  let D = B;
  if (o === void 0) {
    const X = q === 0 && !R ? -1 : 0;
    let L;
    if (c[14] !== g || c[15] !== h) L = e(s, {
      flexDirection: "column",
      marginTop: -1,
      marginX: -1,
      paddingX: h,
      children: g
    }), c[14] = g, c[15] = h, c[16] = L;
    else L = c[16];
    let M;
    if (c[17] !== L || c[18] !== D) M = e(IWr, {
      ...D,
      insetX: 1,
      children: L
    }), c[17] = L, c[18] = D, c[19] = M;
    else M = c[19];
    let F;
    if (c[20] !== X || c[21] !== M) F = e(s, {
      flexDirection: "column",
      marginTop: X,
      children: M
    }), c[20] = X, c[21] = M, c[22] = F;
    else F = c[22];
    return F
  }
  const X = o.onCancel,
    L = o.showHintLine === !1;
  let M;
  if (c[23] === w) M = e(Y, {
    chord: "escape",
    action: "cancel",
    terse: !0,
    format: ge
  }, "cancel"), c[23] = M;
  else M = c[23];
  let F;
  if (c[24] !== o.showPermissionsHint) F = o.showPermissionsHint !== !1 && e(n, {
    children: "/permissions"
  }, "permissions"), c[24] = o.showPermissionsHint, c[25] = F;
  else F = c[25];
  let K;
  if (c[26] !== o.hints) K = z_.toArray(o.hints), c[26] = o.hints, c[27] = K;
  else K = c[27];
  let Q;
  if (c[28] !== K || c[29] !== F) Q = r(Ce, {
    children: [M, F, K]
  }), c[28] = K, c[29] = F, c[30] = Q;
  else Q = c[30];
  let V;
  if (c[31] !== C || c[32] !== P) V = P === null ? null : {
    rows: P.rows,
    columns: C
  }, c[31] = C, c[32] = P, c[33] = V;
  else V = c[33];
  let W;
  if (c[34] !== g) W = e(s, {
    flexDirection: "column",
    children: g
  }), c[34] = g, c[35] = W;
  else W = c[35];
  let Z;
  if (c[36] !== V || c[37] !== W) Z = e(nh.Provider, {
    value: V,
    children: W
  }), c[36] = V, c[37] = W, c[38] = Z;
  else Z = c[38];
  let Fe;
  if (c[39] !== o.onCancel || c[40] !== Q || c[41] !== Z || c[42] !== L || c[43] !== D) Fe = e(ke, {
    ...D,
    onCancel: X,
    isCancelActive: !1,
    truncateInputGuide: !0,
    hideInputGuide: L,
    inputGuide: Q,
    children: Z
  }), c[39] = o.onCancel, c[40] = Q, c[41] = Z, c[42] = L, c[43] = D, c[44] = Fe;
  else Fe = c[44];
  return Fe
}
export {
  uUe,
  e8s,
  P3n,
  H7,
  nWr,
  sle,
  ua
};
