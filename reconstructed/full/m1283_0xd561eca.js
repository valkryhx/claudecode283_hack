// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  qe,
  pH
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  it,
  x,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  gT
} from "B:/~BUN/root/chunk-1x7a47hz.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  yC
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  ie,
  ot,
  Y8e,
  Zt,
  OY,
  is,
  ud
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  s,
  n,
  _t,
  Ta
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  Yt
} from "B:/~BUN/root/chunk-jdm3bsma.js";
import {
  QGt,
  cIe,
  uE,
  eVt,
  fT,
  Qv,
  zC
} from "B:/~BUN/root/chunk-9jvj58wt.js";
import {
  AH,
  iO,
  Wl
} from "B:/~BUN/root/chunk-xky3bazf.js";
import {
  Ant,
  GMn
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  W,
  ys
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  A3
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  vLt
} from "B:/~BUN/root/chunk-t1afcev5.js";
import {
  Tue
} from "B:/~BUN/root/chunk-jgc88y6c.js";
import {
  aU
} from "B:/~BUN/root/chunk-54b3p8j4.js";
import {
  Le
} from "B:/~BUN/root/chunk-dk0c0nrh.js";
import {
  Nbe
} from "B:/~BUN/root/chunk-qx3qjw47.js";
import {
  nvn
} from "B:/~BUN/root/chunk-cg4vyrmt.js";
import {
  QD,
  Qyt,
  GGt,
  ver
} from "B:/~BUN/root/chunk-1yna3b23.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  Dbe,
  Jre,
  ew
} from "B:/~BUN/root/chunk-2wfa1xth.js";
import {
  hh
} from "B:/~BUN/root/chunk-nd6xvaae.js";
import {
  Zv
} from "B:/~BUN/root/chunk-bbgg7kv0.js";
import {
  $p
} from "B:/~BUN/root/chunk-sv155qry.js";
import {
  Ba
} from "B:/~BUN/root/chunk-vf07m8qt.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Zrr,
  eor,
  ZQe
} from "B:/~BUN/root/chunk-mqsfaz82.js";
import {
  Z
} from "B:/~BUN/root/chunk-08bth2fj.js";
import {
  km
} from "B:/~BUN/root/chunk-ydzwkn0c.js";
import {
  R,
  X,
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  ya
} from "B:/~BUN/root/chunk-nfc48pcb.js";
import {
  U
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  S,
  hn
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var Ft = "\u25CF",
  _e = 2000,
  Be = {
    r: 171,
    g: 43,
    b: 63
  },
  Ee = {
    r: 0,
    g: 0,
    b: 0
  };

function Xre(l) {
  let P = w(35),
    {
      frame: t,
      messageColor: m,
      stalledIntensity: o,
      thinkingIntensity: u,
      reducedMotion: k,
      time: b
    } = l,
    C = o === void 0 ? 0 : o,
    M = u === void 0 ? 0 : u,
    E = k === void 0 ? !1 : k,
    L = b === void 0 ? 0 : b,
    v = gT();
  if (E) {
    let f = 1 - eVt(L, _e);
    let B = M > 0 ? "warning" : m;
    let H = v[B];
    let y;
    if (P[0] !== H || P[1] !== f || P[2] !== M) {
      y = hn;
      rt: {
        let A = H ? zC(H) : null;
        if (A) {
          let _ = fT(A, Ee, 0.5);
          let j = fT(_, A, uE(f));
          const h = e(n, {
            color: Qv(j),
            bold: M >= 0.5,
            children: Ft
          });
          let O;
          if (P[4] !== h) O = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: h
          }), P[4] = h, P[5] = O;
          else O = P[5];
          y = O;
          break rt
        }
      }
      P[0] = H, P[1] = f, P[2] = M, P[3] = y
    } else y = P[3];
    if (y !== hn) return y;
    const h = f < 0.5;
    const O = M >= 0.5;
    let G;
    if (P[6] !== B || P[7] !== h || P[8] !== O) G = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: B,
        dimColor: h,
        bold: O,
        children: Ft
      })
    }), P[6] = B, P[7] = h, P[8] = O, P[9] = G;
    else G = P[9];
    return G
  }
  let y;
  if (P[10] === S) y = cIe(), P[10] = y;
  else y = P[10];
  let p = y,
    d = p[t % p.length];
  if (C > 0) {
    let I = v[m];
    let h;
    if (P[11] !== I || P[12] !== d || P[13] !== C) {
      h = hn;
      St: {
        let bt = I ? zC(I) : null;
        if (bt) {
          let q = fT(bt, Be, uE(C));
          const O = e(n, {
            color: Qv(q),
            children: d
          });
          let G;
          if (P[15] !== O) G = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: O
          }), P[15] = O, P[16] = G;
          else G = P[16];
          h = G;
          break St
        }
      }
      P[11] = I, P[12] = d, P[13] = C, P[14] = h
    } else h = P[14];
    if (h !== hn) return h;
    let Y = C > 0.5 ? "error" : m;
    let O;
    if (P[17] !== Y || P[18] !== d) O = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: Y,
        children: d
      })
    }), P[17] = Y, P[18] = d, P[19] = O;
    else O = P[19];
    return O
  }
  if (M > 0) {
    let tt = v[m];
    let J, h;
    if (P[20] !== tt || P[21] !== d || P[22] !== v.warning || P[23] !== M) {
      h = hn;
      pt: {
        let K = tt ? zC(tt) : null;
        let at = zC(v.warning);J = M >= 0.5;
        if (K && at) {
          let mt = fT(K, at, uE(M));
          const O = e(n, {
            bold: J,
            color: Qv(mt),
            children: d
          });
          let G;
          if (P[26] !== O) G = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: O
          }), P[26] = O, P[27] = G;
          else G = P[27];
          h = G;
          break pt
        }
      }
      P[20] = tt, P[21] = d, P[22] = v.warning, P[23] = M, P[24] = J, P[25] = h
    } else J = P[24], h = P[25];
    if (h !== hn) return h;
    let lt = M > 0.5 ? "warning" : m;
    let O;
    if (P[28] !== J || P[29] !== lt || P[30] !== d) O = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        bold: J,
        color: lt,
        children: d
      })
    }), P[28] = J, P[29] = lt, P[30] = d, P[31] = O;
    else O = P[31];
    return O
  }
  let h;
  if (P[32] !== m || P[33] !== d) h = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: m,
      children: d
    })
  }), P[32] = m, P[33] = d, P[34] = h;
  else h = P[34];
  return h
}
N();
N();
var zt = 150;

function me(l) {
  let E = w(8),
    {
      tone: t,
      text: m
    } = l,
    o = Zv(),
    u = _t(),
    k = o || u,
    [b, C] = Ta(k ? null : zt);
  const M = Math.floor(C / zt);
  let L;
  if (E[0] !== k || E[1] !== M || E[2] !== m || E[3] !== t) L = e(Dbe, {
    state: "live",
    tone: t,
    text: m,
    linkify: !1,
    frame: M,
    reducedMotion: k
  }), E[0] = k, E[1] = M, E[2] = m, E[3] = t, E[4] = L;
  else L = E[4];
  let v;
  if (E[5] !== b || E[6] !== L) v = e(s, {
    ref: b,
    flexDirection: "column",
    children: L
  }), E[5] = b, E[6] = L, E[7] = v;
  else v = E[7];
  return v
}
N();
var Ke = {
  r: 171,
  g: 43,
  b: 63
};

function jyt(l) {
  let f = w(97),
    {
      message: t,
      mode: m,
      messageColor: o,
      glimmerIndex: u,
      flashOpacity: k,
      shimmerColor: b,
      stalledIntensity: C,
      thinkingIntensity: M
    } = l,
    E = C === void 0 ? 0 : C,
    L = M === void 0 ? 0 : M,
    v = gT(),
    B;
  if (f[0] !== t) {
    B = [];
    for (const {
        segment: H
      }
      of ya().segment(t)) B.push({
      segment: H,
      width: ie(H)
    });
    f[0] = t, f[1] = B
  } else B = f[1];
  let P;
  if (f[2] !== t) P = ie(t), f[2] = t, f[3] = P;
  else P = f[3];
  let y;
  if (f[4] !== B || f[5] !== P) y = {
    segments: B,
    messageWidth: P
  }, f[4] = B, f[5] = P, f[6] = y;
  else y = f[6];
  let {
    segments: A,
    messageWidth: _
  } = y;
  if (!t) {
    return null
  }
  if (E > 0) {
    let j = v[o];
    let h;
    if (f[7] !== j || f[8] !== t || f[9] !== E) {
      h = hn;
      bt: {
        let O = j ? zC(j) : null;
        if (O) {
          let rt = fT(O, Ke, uE(E));
          let G = Qv(rt);
          let p;
          if (f[11] !== G || f[12] !== t) p = e(n, {
            color: G,
            children: t
          }), f[11] = G, f[12] = t, f[13] = p;
          else p = f[13];
          let d;
          if (f[14] !== G) d = e(n, {
            color: G,
            children: " "
          }), f[14] = G, f[15] = d;
          else d = f[15];
          let I;
          if (f[16] !== p || f[17] !== d) I = r(V, {
            children: [p, d]
          }), f[16] = p, f[17] = d, f[18] = I;
          else I = f[18];
          h = I;
          break bt
        }
      }
      f[7] = j, f[8] = t, f[9] = E, f[10] = h
    } else h = f[10];
    if (h !== hn) return h;
    let q = E > 0.5 ? "error" : o;
    let p;
    if (f[19] !== q || f[20] !== t) p = e(n, {
      color: q,
      children: t
    }), f[19] = q, f[20] = t, f[21] = p;
    else p = f[21];
    let d;
    if (f[22] !== q) d = e(n, {
      color: q,
      children: " "
    }), f[22] = q, f[23] = d;
    else d = f[23];
    let I;
    if (f[24] !== p || f[25] !== d) I = r(V, {
      children: [p, d]
    }), f[24] = p, f[25] = d, f[26] = I;
    else I = f[26];
    return I
  }
  if (L > 0) {
    let St = v[o];
    let h;
    if (f[27] !== St || f[28] !== t || f[29] !== v.warning || f[30] !== L) {
      h = hn;
      at: {
        let Y = St ? zC(St) : null;
        let tt = zC(v.warning);
        if (Y && tt) {
          let J = fT(Y, tt, uE(L));
          let K = Qv(J);
          let p;
          if (f[32] !== K || f[33] !== t) p = e(n, {
            color: K,
            children: t
          }), f[32] = K, f[33] = t, f[34] = p;
          else p = f[34];
          let d;
          if (f[35] !== K) d = e(n, {
            color: K,
            children: " "
          }), f[35] = K, f[36] = d;
          else d = f[36];
          let I;
          if (f[37] !== p || f[38] !== d) I = r(V, {
            children: [p, d]
          }), f[37] = p, f[38] = d, f[39] = I;
          else I = f[39];
          h = I;
          break at
        }
      }
      f[27] = St, f[28] = t, f[29] = v.warning, f[30] = L, f[31] = h
    } else h = f[31];
    if (h !== hn) return h;
    let mt = L > 0.5 ? "warning" : o;
    let p;
    if (f[40] !== mt || f[41] !== t) p = e(n, {
      color: mt,
      children: t
    }), f[40] = mt, f[41] = t, f[42] = p;
    else p = f[42];
    let d;
    if (f[43] !== mt) d = e(n, {
      color: mt,
      children: " "
    }), f[43] = mt, f[44] = d;
    else d = f[44];
    let I;
    if (f[45] !== p || f[46] !== d) I = r(V, {
      children: [p, d]
    }), f[45] = p, f[46] = d, f[47] = I;
    else I = f[47];
    return I
  }
  if (m === "tool-use") {
    let pt = v[o];
    let lt = v[b];
    let h;
    if (f[48] !== pt || f[49] !== k || f[50] !== t || f[51] !== o || f[52] !== lt) {
      h = hn;
      gt: {
        let It = pt ? zC(pt) : null;
        let vt = lt ? zC(lt) : null;
        if (It && vt) {
          let Wt = fT(It, vt, uE(k));
          const p = e(n, {
            color: Qv(Wt),
            children: t
          });
          let d;
          if (f[54] !== o) d = e(n, {
            color: o,
            children: " "
          }), f[54] = o, f[55] = d;
          else d = f[55];
          let I;
          if (f[56] !== p || f[57] !== d) I = r(V, {
            children: [p, d]
          }), f[56] = p, f[57] = d, f[58] = I;
          else I = f[58];
          h = I;
          break gt
        }
      }
      f[48] = pt, f[49] = k, f[50] = t, f[51] = o, f[52] = lt, f[53] = h
    } else h = f[53];
    if (h !== hn) return h;
    let st = k > 0.5 ? b : o;
    let p;
    if (f[59] !== st || f[60] !== t) p = e(n, {
      color: st,
      children: t
    }), f[59] = st, f[60] = t, f[61] = p;
    else p = f[61];
    let d;
    if (f[62] !== o) d = e(n, {
      color: o,
      children: " "
    }), f[62] = o, f[63] = d;
    else d = f[63];
    let I;
    if (f[64] !== p || f[65] !== d) I = r(V, {
      children: [p, d]
    }), f[64] = p, f[65] = d, f[66] = I;
    else I = f[66];
    return I
  }
  let Rt = u - 1,
    yt = u + 1;
  if (Rt >= _ || yt < 0) {
    let h;
    if (f[67] !== t || f[68] !== o) h = e(n, {
      color: o,
      children: t
    }), f[67] = t, f[68] = o, f[69] = h;
    else h = f[69];
    let p;
    if (f[70] !== o) p = e(n, {
      color: o,
      children: " "
    }), f[70] = o, f[71] = p;
    else p = f[71];
    let d;
    if (f[72] !== h || f[73] !== p) d = r(V, {
      children: [h, p]
    }), f[72] = h, f[73] = p, f[74] = d;
    else d = f[74];
    return d
  }
  let xt = Math.max(0, Rt),
    et, ct, ut;
  if (f[75] !== xt || f[76] !== A || f[77] !== yt) {
    let dt = 0;
    ct = "";
    ut = "";
    et = "";
    for (const {
        segment: wt,
        width: kt
      }
      of A) {
      if (dt + kt <= xt) ct = ct + wt;
      else if (dt > yt) et = et + wt;
      else ut = ut + wt;
      dt = dt + kt
    }
    f[75] = xt, f[76] = A, f[77] = yt, f[78] = et, f[79] = ct, f[80] = ut
  } else et = f[78], ct = f[79], ut = f[80];
  let h;
  if (f[81] !== ct || f[82] !== o) h = ct && e(n, {
    color: o,
    children: ct
  }), f[81] = ct, f[82] = o, f[83] = h;
  else h = f[83];
  let p;
  if (f[84] !== ut || f[85] !== b) p = e(n, {
    color: b,
    children: ut
  }), f[84] = ut, f[85] = b, f[86] = p;
  else p = f[86];
  let d;
  if (f[87] !== et || f[88] !== o) d = et && e(n, {
    color: o,
    children: et
  }), f[87] = et, f[88] = o, f[89] = d;
  else d = f[89];
  let I;
  if (f[90] !== o) I = e(n, {
    color: o,
    children: " "
  }), f[90] = o, f[91] = I;
  else I = f[91];
  let Bt;
  if (f[92] !== h || f[93] !== p || f[94] !== d || f[95] !== I) Bt = r(V, {
    children: [h, p, d, I]
  }), f[92] = h, f[93] = p, f[94] = d, f[95] = I, f[96] = Bt;
  else Bt = f[96];
  return Bt
}
N();

function pn() {
  return {
    toolWindowStart: null,
    toolWindowEnd: null,
    thinkingBurstStart: null,
    wasThinking: !1
  }
}

function gn(l, t) {
  let {
    toolWindowStart: m,
    toolWindowEnd: o,
    thinkingBurstStart: u
  } = l;
  if (t.hasActiveTools) {
    if (m === null || o !== null) m = t.now;
    o = null
  } else if (m !== null && o === null) o = t.now;
  if (!t.hasActiveTools && t.thinkingStatus !== null) m = null, o = null;
  if (t.isThinking) {
    if (!l.wasThinking) u = t.now
  } else u = null;
  return {
    toolWindowStart: m,
    toolWindowEnd: o,
    thinkingBurstStart: u,
    wasThinking: t.isThinking
  }
}

function kn(l, t) {
  if (t.showToolCallTimer && t.hasActiveTools && l.toolWindowStart !== null) {
    let m = t.now - l.toolWindowStart;
    if (m >= 2000) return {
      kind: "tool-running",
      toolMs: m
    }
  }
  if (t.outputLimitRecovery !== null && !t.hasActiveTools) return {
    kind: "recovering",
    recovery: t.outputLimitRecovery
  };
  if (t.showToolCallTimer && !t.hasActiveTools && t.thinkingStatus === null && l.toolWindowStart !== null && l.toolWindowEnd !== null) {
    let m = l.toolWindowEnd - l.toolWindowStart;
    if (m >= 2000) return {
      kind: "tool-done",
      toolMs: m
    }
  }
  if (t.thinkingStatus === "thinking" && !t.hasActiveTools) return {
    kind: "thinking",
    thinkingMs: l.thinkingBurstStart !== null ? t.now - l.thinkingBurstStart : 0
  };
  if (typeof t.thinkingStatus === "number") return {
    kind: "thought-for",
    thoughtMs: t.thinkingStatus
  };
  return {
    kind: "none"
  }
}

function Tn(l, t) {
  if (t.hasActiveTools) return 0;
  if (!t.isThinking || l.thinkingBurstStart === null) return 0;
  let m = t.now - l.thinkingBurstStart;
  return Math.min(Math.max((m - 1e4) / 1e4, 0), 1)
}
N();

function bn(l, t, m = !1, o = !1, u) {
  let k = T(l),
    b = T(t),
    C = T(0),
    M = T(l),
    E = T(u);
  if (t > b.current || E.current !== u) E.current = u, k.current = l, b.current = t, C.current = 0, M.current = l;
  else if (t < b.current) b.current = t;
  let L;
  if (m) L = 0, k.current = l;
  else L = l - k.current;
  let v = L > 1e4 && !m,
    f = v ? Math.min((L - 1e4) / 1e4, 1) : 0;
  if (!o && (f > 0 || C.current > 0)) {
    let H = l - M.current;
    if (H >= 50) {
      let P = Math.floor(H / 50),
        y = C.current;
      for (let A = 0; A < P; A++) {
        let _ = f - y;
        if (Math.abs(_) < 0.01) {
          y = f;
          break
        }
        y += _ * 0.1
      }
      C.current = y, M.current = l
    }
  } else C.current = f, M.current = l;
  let B = o ? f : C.current;
  return {
    isStalled: v,
    stalledIntensity: B,
    timeSinceLastToken: L
  }
}
var Ro = [1e4, 45000, 300000],
  yo = 2000,
  xo = 2000,
  wo = 200,
  Te = 10,
  Mo = 1e4,
  Co = 20000,
  Io = 30000,
  _o = 45000;

function Bo(l) {
  let t = eVt(l, xo);
  return Math.round(t * (QGt().length - 1))
}

function Eo(l) {
  return `thought for ${Math.max(1,Math.round(l/1000))}s`
}

function vo({
  attempt: l,
  limit: t
}) {
  return l > 1 ? `picking the thought back up (${l} of ${t})` : "picking the thought back up"
}

function Lo(l) {
  if (l >= _o) return "deep in thought";
  if (l >= Io) return "thinking some more";
  if (l >= Co) return "thinking more";
  if (l >= Mo) return "still thinking";
  return "thinking"
}

function Ao(l) {
  return uE((Math.sin(l / 1000 * Math.PI) + 1) / 2)
}

function Sn({
  mode: l,
  reducedMotion: t,
  hasActiveTools: m,
  responseLength: o,
  message: u,
  overrideColor: k,
  loadingStartTime: b,
  totalPausedMs: C,
  pauseStartTime: M,
  thinkingStatus: E,
  effortSuffix: L,
  isCompacting: v,
  compactingStartTime: f,
  showToolCallTimer: B,
  outputLimitRecovery: H = null,
  agentId: P,
  glimmerParked: y = !1
}) {
  let [A, _] = Ta(t ? null : l === "requesting" && !y ? 50 : 100), j = Date.now(), O = v && f !== null ? Math.max(0, j - f) : M !== null ? M - b - C : j - b - C, rt = T(pn()), G = {
    now: j,
    isThinking: l === "thinking",
    hasActiveTools: m,
    thinkingStatus: E,
    showToolCallTimer: B,
    outputLimitRecovery: H
  };
  rt.current = gn(rt.current, G);
  let p = kn(rt.current, G),
    d = Tn(rt.current, G),
    I = o,
    bt = m || l === "thinking" || v && l !== "responding" || M !== null,
    {
      isStalled: q,
      stalledIntensity: St,
      timeSinceLastToken: Y
    } = bn(_, I, bt, t, P),
    tt = T(new Set),
    J = T(0),
    K = T(P);
  if (K.current !== P) K.current = P, tt.current = new Set, J.current = 0;
  if (Y === 0) {
    if (tt.current.size > 0) i("tengu_spinner_stall_cleared", {
      max_stall_ms: Math.round(J.current),
      mode: c(l),
      override_color: k != null,
      response_length: I,
      thresholds_fired: tt.current.size
    }), tt.current = new Set, J.current = 0
  } else {
    if (Y > J.current) J.current = Y;
    for (let nt of Ro)
      if (Y >= nt && !tt.current.has(nt)) tt.current.add(nt), i("tengu_spinner_stalled_ui", {
        threshold_ms: nt,
        mode: c(l),
        override_color: k != null,
        time_since_last_token_ms: Math.round(Y),
        response_length: I,
        render_loop_dark: Y - nt > 5000
      })
  }
  let at = t ? 0 : Bo(_),
    mt = l === "requesting" ? 50 : wo,
    pt = X(() => ie(u), [u]),
    lt = pt + 2 * Te,
    It = Math.floor(_ / mt),
    vt = t ? -100 : q ? -100 : l === "requesting" ? It % lt - Te : pt + Te - It % lt,
    Wt = t ? 0 : l === "tool-use" ? Ao(_) : 0,
    gt = T(I),
    st = T(_),
    Rt = T(P);
  if (Rt.current !== P || Math.abs(I - gt.current) > yo) Rt.current = P, gt.current = I, st.current = _;
  if (t) gt.current = I, st.current = _;
  else {
    let nt = Math.floor((_ - st.current) / 50);
    if (nt > 0) {
      st.current += nt * 50;
      for (let ht = 0; ht < nt; ht++) {
        let D = I - gt.current;
        if (D === 0) break;
        let Mt = Math.abs(D),
          Ct;
        if (Mt < 70) Ct = 3;
        else if (Mt < 200) Ct = Math.max(8, Math.ceil(Mt * 0.15));
        else Ct = 50;
        gt.current = D > 0 ? Math.min(gt.current + Ct, I) : Math.max(gt.current - Ct, I)
      }
    }
  }
  let yt = gt.current,
    xt = Math.round(yt / 4),
    et = T(0),
    ct = T(_);
  if (l !== "thinking" || m) et.current = 0, ct.current = _;
  else if (!t && (d > 0 || et.current > 0)) {
    let nt = _ - ct.current;
    if (nt >= 50) {
      let ht = Math.floor(nt / 50),
        D = et.current;
      for (let Mt = 0; Mt < ht; Mt++) {
        let Ct = d - D;
        if (Math.abs(Ct) < 0.01) {
          D = d;
          break
        }
        D += Ct * 0.1
      }
      et.current = D, ct.current = _
    }
  } else et.current = d, ct.current = _;
  let ut = t ? d : et.current,
    dt = Zt(O),
    wt = ie(dt),
    kt = xt,
    Bt = is(kt),
    Pt = `${Z.arrowDown} ${Bt} tokens`,
    Et = ie(Pt),
    Lt = p.kind === "thinking" ? Lo(p.thinkingMs) : "thinking",
    Q;
  switch (p.kind) {
    case "tool-running":
      Q = `running tool for ${Zt(p.toolMs)}`;
      break;
    case "tool-done":
      Q = `ran tool for ${Zt(p.toolMs)}`;
      break;
    case "recovering":
      Q = vo(p.recovery);
      break;
    case "thinking":
      Q = `${Lt}${L}`;
      break;
    case "thought-for":
      Q = Eo(p.thoughtMs);
      break;
    case "none":
      Q = null;
      break
  }
  let At = Q ? ie(Q) : 0;
  return {
    viewportRef: A,
    time: _,
    elapsedMs: O,
    frame: at,
    glimmerIndex: vt,
    flashOpacity: Wt,
    stalledIntensity: St,
    thinkingIntensity: ut,
    statusText: p,
    progressiveThinkingBase: Lt,
    thinkingText: Q,
    thinkingWidth: At,
    timerText: dt,
    timerWidth: wt,
    totalTokens: kt,
    tokenCount: Bt,
    tokensWidth: Et,
    glimmerMessageWidth: pt
  }
}

function Rn(l) {
  let [t, m] = g(null), o = T(null), u = T([]), k = Yt();
  return R(() => {
    if (l === "thinking") {
      if (o.current === null) {
        for (let b of u.current) b();
        u.current = [], o.current = Date.now(), m("thinking")
      }
    } else if (o.current !== null) {
      let b = Date.now() - o.current,
        C = Math.max(0, 2000 - b);
      o.current = null;
      let M = () => {
        m(b), u.current.push(k.setTimeout(() => m(null), 2000))
      };
      if (C > 0) u.current.push(k.setTimeout(M, C));
      else M()
    }
  }, [l, k]), R(() => () => {
    for (let b of u.current) b();
    u.current = []
  }, []), t
}
var No = ie(" \xB7 "),
  yn = ie("thinking"),
  Oo = 16000,
  Wo = {
    r: 153,
    g: 153,
    b: 153
  },
  Po = {
    r: 185,
    g: 185,
    b: 185
  },
  xn = 3000,
  Go = 2;

function Do(l, t, m) {
  let o = (l - xn) / 1000,
    u = l < xn ? 0 : (Math.sin(o * Math.PI * 2 / Go) + 1) / 2,
    k = fT(Wo, Po, uE(u));
  return Qv(m && t > 0 ? fT(k, m, uE(t)) : k)
}

function En({
  mode: l,
  reducedMotion: t,
  hasActiveTools: m,
  responseLengthRef: o,
  message: u,
  messageColor: k,
  shimmerColor: b,
  overrideColor: C,
  loadingStartTimeRef: M,
  totalPausedMsRef: E,
  pauseStartTimeRef: L,
  spinnerSuffix: v,
  verbose: f,
  columns: B,
  thinkingStatus: H,
  effortSuffix: P,
  isCompacting: y = !1,
  compactingStartTime: A = null,
  showToolCallTimer: _ = !1,
  retryStatus: j = null,
  outputLimitRecovery: h = null,
  agentId: O
}) {
  let rt = Sn({
      mode: l,
      reducedMotion: t,
      hasActiveTools: m,
      responseLength: o.current,
      message: u,
      overrideColor: C,
      loadingStartTime: M.current,
      totalPausedMs: E.current,
      pauseStartTime: L.current,
      thinkingStatus: H,
      effortSuffix: P,
      isCompacting: y,
      compactingStartTime: A,
      showToolCallTimer: _,
      outputLimitRecovery: h,
      agentId: O
    }),
    G = gT(),
    p = _t(),
    d = ew(f),
    {
      viewportRef: I,
      time: bt,
      elapsedMs: q,
      frame: St,
      glimmerIndex: Y,
      flashOpacity: tt,
      stalledIntensity: J,
      thinkingIntensity: K,
      statusText: at,
      progressiveThinkingBase: mt,
      timerText: pt,
      timerWidth: lt,
      totalTokens: It,
      tokenCount: vt,
      tokensWidth: Wt,
      glimmerMessageWidth: gt
    } = rt,
    {
      thinkingText: st,
      thinkingWidth: Rt
    } = rt,
    yt = gt + 2,
    xt = No,
    et = st !== null,
    ct = f || et || y || It > 0 || q > Oo || Boolean(v),
    ut = B - yt - 5,
    dt = et && ut > Rt;
  if (!dt && et && at.kind === "thinking" && (P || mt !== "thinking")) {
    if (ut > yn) st = "thinking", Rt = yn, dt = !0
  }
  let wt = dt ? Rt + xt : 0,
    kt = ct && ut > wt + lt,
    Bt = wt + (kt ? lt + xt : 0),
    Pt = ct && It > 0 && ut > Bt + Wt,
    Et = dt && at.kind === "thinking" && !v && !kt && !Pt,
    Lt = K > 0 ? zC(G.warning) : null,
    Q = Do(bt, K, Lt),
    At = !Lt && K > 0.5 ? "warning" : void 0,
    nt = K > 0 ? "warning" : void 0,
    ht = [...v ? [e(n, {
      dimColor: !0,
      children: v
    }, "suffix")] : [], ...!p && kt ? [e(n, {
      dimColor: !0,
      children: pt
    }, "elapsedTime")] : [], ...!p && Pt ? [r(s, {
      flexDirection: "row",
      children: [e(vn, {
        mode: l
      }), r(n, {
        dimColor: !0,
        children: [vt, " tokens"]
      })]
    }, "tokens")] : [], ...!p && dt && st ? [at.kind === "thinking" && !t ? e(n, {
      color: At ?? Q,
      children: Et ? `(${st})` : st
    }, "thinking") : e(n, {
      dimColor: !nt,
      color: nt,
      children: st
    }, "thinking")] : []],
    D = ht.length > 0 ? Et ? e(ye, {
      children: ht
    }) : r(V, {
      children: [e(n, {
        dimColor: !0,
        children: "("
      }), e(ye, {
        children: ht
      }), e(n, {
        dimColor: !0,
        children: ")"
      })]
    }) : null;
  if (y && j === null && d) return e(s, {
    ref: I,
    flexDirection: "column",
    marginTop: 1,
    width: "100%",
    children: e(me, {
      tone: "dim",
      text: u.replace(/\u2026$/, "")
    })
  });
  return e(s, {
    ref: I,
    flexDirection: "column",
    width: "100%",
    children: e(s, {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 1,
      width: "100%",
      children: j ? e(AGt, {
        status: j,
        columns: B
      }) : r(V, {
        children: [e(Xre, {
          frame: St,
          messageColor: k,
          stalledIntensity: C ? 0 : J,
          thinkingIntensity: C ? 0 : K,
          reducedMotion: t,
          time: bt
        }), e(jyt, {
          message: u,
          mode: l,
          messageColor: k,
          glimmerIndex: Y,
          flashOpacity: tt,
          shimmerColor: b,
          stalledIntensity: C ? 0 : J,
          thinkingIntensity: C ? 0 : K
        }), D]
      })
    })
  })
}

function AGt(l) {
  let u = w(57),
    {
      status: t,
      columns: m
    } = l,
    o = Math.max(0, Math.ceil((t.deadline - Date.now()) / 1000)) * 1000,
    k;
  if (u[0] !== t.kind) k = t.kind === "low_priority_waiting" ? A3().waitBanner : null, u[0] = t.kind, u[1] = k;
  else k = u[1];
  let b = k;
  const C = o >= 300000;
  let M;
  if (u[2] !== o || u[3] !== C) M = Zt(o, {
    mostSignificantOnly: C
  }), u[2] = o, u[3] = C, u[4] = M;
  else M = u[4];
  let E = M,
    L;
  if (u[5] === S) L = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: "error",
      children: yC
    })
  }), u[5] = L;
  else L = u[5];
  let v = L;
  if (t.kind === "stalled") {
    let f;
    if (u[6] === S) f = e(n, {
      color: "error",
      children: "Waiting for API response"
    }), u[6] = f;
    else f = u[6];
    let B;
    if (u[7] !== E) B = r(V, {
      children: [v, r(s, {
        flexShrink: 1,
        children: [f, r(n, {
          dimColor: !0,
          children: [" \xB7 will retry in ", E, " \xB7 check your network"]
        })]
      })]
    }), u[7] = E, u[8] = B;
    else B = u[8];
    return B
  }
  if (t.kind === "low_priority_waiting") {
    let H = ` \xB7 next try in ${E} \xB7 attempt ${t.attempt} \xB7 esc to interrupt`;
    let P = Math.max(10, m - 2 - ie(H) - 2);
    let f;
    if (u[9] === S) f = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: "warning",
        children: yC
      })
    }), u[9] = f;
    else f = u[9];
    const B = b ?? "";
    let y;
    if (u[10] !== P || u[11] !== B) y = ot(B, P), u[10] = P, u[11] = B, u[12] = y;
    else y = u[12];
    let A;
    if (u[13] !== y) A = e(n, {
      color: "warning",
      children: y
    }), u[13] = y, u[14] = A;
    else A = u[14];
    let _;
    if (u[15] !== H) _ = e(n, {
      dimColor: !0,
      children: H
    }), u[15] = H, u[16] = _;
    else _ = u[16];
    let j;
    if (u[17] !== A || u[18] !== _) j = r(V, {
      children: [f, r(s, {
        flexShrink: 1,
        children: [A, _]
      })]
    }), u[17] = A, u[18] = _, u[19] = j;
    else j = u[19];
    return j
  }
  if (t.kind === "auto_mode_unavailable") {
    let f;
    if (u[20] === S) f = e(n, {
      color: "error",
      children: "Auto mode check unavailable"
    }), u[20] = f;
    else f = u[20];
    const B = ` \xB7 next try in ${E} \xB7 attempt ${t.attempt}/${t.maxRetries} \xB7 `;
    let y;
    if (u[21] === S) y = e(F, {
      chord: "escape",
      action: "interrupt",
      format: {
        keyCase: "lower"
      }
    }), u[21] = y;
    else y = u[21];
    let A;
    if (u[22] !== B) A = r(V, {
      children: [v, r(s, {
        flexShrink: 1,
        children: [f, r(n, {
          dimColor: !0,
          children: [B, y]
        })]
      })]
    }), u[22] = B, u[23] = A;
    else A = u[23];
    return A
  }
  let h = t.error.noResponse;
  if (h) {
    let O = t.attempt >= t.maxRetries;
    let f;
    if (u[24] !== h.retryWaitMs) f = OY(h.retryWaitMs), u[24] = h.retryWaitMs, u[25] = f;
    else f = u[25];
    let rt = f;
    let G = O ? ` \xB7 retrying once, waiting up to ${rt}` : ` \xB7 retrying, waiting up to ${rt} \xB7 attempt ${t.attempt}/${t.maxRetries}`;
    let p = Math.max(10, m - 2 - ie(G) - 2);
    let B;
    if (u[26] !== h.waitedMs) B = OY(h.waitedMs), u[26] = h.waitedMs, u[27] = B;
    else B = u[27];
    const y = `No response from the API after ${B}`;
    let A;
    if (u[28] !== p || u[29] !== y) A = ot(y, p), u[28] = p, u[29] = y, u[30] = A;
    else A = u[30];
    let _;
    if (u[31] !== A) _ = e(n, {
      color: "error",
      children: A
    }), u[31] = A, u[32] = _;
    else _ = u[32];
    let j;
    if (u[33] !== G) j = e(n, {
      dimColor: !0,
      children: G
    }), u[33] = G, u[34] = j;
    else j = u[34];
    let d;
    if (u[35] !== j || u[36] !== _) d = r(s, {
      children: [_, j]
    }), u[35] = j, u[36] = _, u[37] = d;
    else d = u[37];
    let I;
    if (u[38] === S) I = e(n, {
      dimColor: !0,
      children: "A proxy or gateway that buffers streaming responses can cause this \xB7 set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait"
    }), u[38] = I;
    else I = u[38];
    let bt;
    if (u[39] !== d) bt = r(V, {
      children: [v, r(s, {
        flexBasis: 0,
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        children: [d, I]
      })]
    }), u[39] = d, u[40] = bt;
    else bt = u[40];
    return bt
  }
  let q = t.error.rateLimits,
    f;
  if (u[41] !== q) f = q?.resetsAt ? ` (${ud(q.resetsAt)})` : "", u[41] = q, u[42] = f;
  else f = u[42];
  let Y = ` \xB7 Retrying in ${E}${f} \xB7 attempt ${t.attempt}/${t.maxRetries}`,
    tt = t.attempt >= Math.min(3, t.maxRetries) || t.error.isNetworkDown || t.error.connection?.isSSLError || q,
    B;
  if (u[43] !== q || u[44] !== tt || u[45] !== t.error.formatted) {
    let J = q?.rateLimitType ? Ant(q.rateLimitType) : "usage limit";
    B = !tt ? GGt : q ? `${J[0]?.toUpperCase()}${J.slice(1)} reached` : t.error.formatted;
    u[43] = q, u[44] = tt, u[45] = t.error.formatted, u[46] = B
  } else B = u[46];
  let K = B,
    at = Math.max(10, m - 2 - ie(Y) - 2),
    y;
  if (u[47] !== at || u[48] !== K) y = ot(K, at), u[47] = at, u[48] = K, u[49] = y;
  else y = u[49];
  let mt = y,
    A;
  if (u[50] !== mt) A = e(n, {
    color: "error",
    children: mt
  }), u[50] = mt, u[51] = A;
  else A = u[51];
  let _;
  if (u[52] !== Y) _ = e(n, {
    dimColor: !0,
    children: Y
  }), u[52] = Y, u[53] = _;
  else _ = u[53];
  let j;
  if (u[54] !== A || u[55] !== _) j = r(V, {
    children: [v, r(s, {
      flexShrink: 1,
      children: [A, _]
    })]
  }), u[54] = A, u[55] = _, u[56] = j;
  else j = u[56];
  return j
}

function vn(l) {
  let m = w(2),
    {
      mode: t
    } = l;
  switch (t) {
    case "tool-input":
    case "tool-use":
    case "responding":
    case "thinking": {
      let o;
      if (m[0] === S) o = e(s, {
        width: 2,
        children: e(n, {
          "aria-hidden": !0,
          dimColor: !0,
          children: Z.arrowDown
        })
      }), m[0] = o;
      else o = m[0];
      return o
    }
    case "requesting": {
      let o;
      if (m[1] === S) o = e(s, {
        width: 2,
        children: e(n, {
          "aria-hidden": !0,
          dimColor: !0,
          children: Z.arrowUp
        })
      }), m[1] = o;
      else o = m[1];
      return o
    }
  }
}

function Wr(p) {
  return p.isBriefOnly
}

function Pr(d) {
  return d.viewingAgentTaskId
}

function Gr(v) {
  return v.settings.prefersReducedMotion
}
var Ie = /(\u2026|\.\.\.)$/,
  Kt = "\u2026";

function Zwn(l) {
  let y = w(22),
    {
      mode: t,
      overrideMessage: m,
      overrideColor: o,
      overrideShimmerColor: u,
      isCompacting: k,
      compactingHintText: b,
      compactingStartTime: C,
      turnEffort: M,
      turnModel: E,
      retryStatus: L,
      outputLimitRecovery: v,
      defaultVerb: f
    } = ver(l.agentId),
    B = W(Wr),
    H = W(Pr),
    P = a.CLAUDE_CODE_BRIEF,
    A, _;
  if (y[0] !== f || y[1] !== t || y[2] !== m || y[3] !== l.agentId) A = () => ({
    requestId: l.agentId ?? "main",
    props: {
      word: f,
      message: m,
      suffix: Kt,
      mode: t
    }
  }), _ = [l.agentId, f, m, t], y[0] = f, y[1] = t, y[2] = m, y[3] = l.agentId, y[4] = A, y[5] = _;
  else A = y[4], _ = y[5];
  let j = Wl.useRenderInput("Spinner", A, _),
    h;
  if (y[6] !== B || y[7] !== H) h = pH() && (P || x("tengu_kairos_brief", !1)) && B && !H, y[6] = B, y[7] = H, y[8] = h;
  else h = y[8];
  let O = h,
    rt;
  if (y[9] !== O || y[10] !== b || y[11] !== C || y[12] !== k || y[13] !== t || y[14] !== v || y[15] !== o || y[16] !== u || y[17] !== l || y[18] !== L || y[19] !== M || y[20] !== E) rt = (G) => O ? e(qn, {
    mode: t,
    overrideMessage: G.props.message
  }) : e(Fn, {
    ...l,
    mode: t,
    overrideMessage: G.props.message,
    overrideColor: o,
    overrideShimmerColor: u,
    isCompacting: k,
    compactingHintText: b,
    compactingStartTime: C,
    turnEffort: M,
    turnModel: E,
    retryStatus: L,
    outputLimitRecovery: v,
    defaultVerb: G.props.word,
    suffix: G.props.suffix ?? Kt
  }), y[9] = O, y[10] = b, y[11] = C, y[12] = k, y[13] = t, y[14] = v, y[15] = o, y[16] = u, y[17] = l, y[18] = L, y[19] = M, y[20] = E, y[21] = rt;
  else rt = y[21];
  return Wl.useRenderHook(j, rt)
}

function Fn({
  mode: l,
  loadingStartTimeRef: t,
  totalPausedMsRef: m,
  pauseStartTimeRef: o,
  responseLengthRef: u,
  overrideColor: k,
  overrideShimmerColor: b,
  overrideMessage: C,
  isCompacting: M,
  compactingHintText: E,
  compactingStartTime: L,
  spinnerSuffix: v,
  verbose: f,
  hasActiveTools: B = !1,
  turnEffort: H,
  turnModel: P,
  retryStatus: y,
  outputLimitRecovery: A,
  defaultVerb: _,
  suffix: j,
  agentId: h
}) {
  let O = Ba(),
    rt = _t(),
    G = $p(O.prefersReducedMotion) || rt,
    p = W((D) => D.spinnerTip),
    d = W((D) => D.spinnerTipLabel),
    I = W((D) => D.expandedView) === "tasks",
    bt = ve(),
    q = ew(f) ? Jre : 0,
    St = Math.max(1, bt.columns - q),
    Y = Nbe(),
    tt = Rn(l),
    J = h === void 0 || h === qe(),
    K = J ? Y?.find((D) => D.status !== "pending" && D.status !== "completed") : void 0,
    at = J ? Or(Y) : void 0,
    [mt] = g(() => QD(Qyt()) ?? "Working"),
    pt = K ? [K.activeForm, K.subject].map((D) => D?.replace(/\s+/g, " ").trim()).find(Boolean) : void 0,
    lt = C ?? (pt === void 0 ? void 0 : Y8e(pt, St)) ?? (_ || mt),
    vt = j === Kt && Ie.test(lt) ? lt : lt + j;
  R(() => {
    let D = "spinner-" + l;
    return aU.startCLIActivity(D), () => {
      aU.endCLIActivity(D)
    }
  }, [l]);
  let Wt = hh(),
    gt = vLt(P ?? it(), Wt, H ?? void 0),
    st = o.current !== null ? o.current - t.current - m.current : Date.now() - t.current - m.current,
    Rt = "claude",
    yt = "claudeShimmer",
    xt = k ?? Rt,
    et = b ?? yt,
    ct = x("tengu_shining_fractals", !1),
    ut = W((D) => D.narration),
    dt = W((D) => D.briefTranscript),
    wt = !1,
    kt = O.spinnerTipsEnabled !== !1,
    Bt = kt && st > 1800000,
    Pt = kt && st > 30000 && !le().btwUseCount,
    Et = wt ? p : Tue() ? p : Bt && !at ? "Use /clear to start fresh when switching topics and free up context" : Pt && !at ? "Use /btw to ask a quick side question without interrupting Claude's current work" : p,
    Lt = Et === p && d ? d : "Tip",
    Q = J && !dt && !y ? ut?.text : void 0,
    At = Q ? void 0 : at ? `Next: ${at.subject.replace(/\s+/g," ").trim()}` : Et ? `${Lt}: ${Et}` : void 0,
    nt = null,
    ht;
  if (y?.kind === "retrying") {
    let D = y.error.status === 529 || y.error.formatted.toLowerCase().includes("overload"),
      Mt = y.attempt >= Math.min(3, y.maxRetries);
    if (D && Mt) ht = GMn().trim()
  }
  return r(s, {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    marginBottom: Q ? 1 : 0,
    paddingLeft: q,
    children: [e(En, {
      mode: l,
      reducedMotion: G,
      hasActiveTools: B,
      responseLengthRef: u,
      message: vt,
      messageColor: xt,
      shimmerColor: et,
      overrideColor: k,
      loadingStartTimeRef: t,
      totalPausedMsRef: m,
      pauseStartTimeRef: o,
      spinnerSuffix: v,
      verbose: f,
      columns: St,
      thinkingStatus: tt,
      effortSuffix: gt,
      isCompacting: M,
      compactingStartTime: L,
      showToolCallTimer: ct,
      retryStatus: y,
      outputLimitRecovery: A,
      agentId: h
    }), J && I && Y && Y.length > 0 ? r(s, {
      width: "100%",
      flexDirection: "column",
      children: [Q && e(Le, {
        children: e(n, {
          dimColor: !0,
          italic: !0,
          wrap: "truncate-end",
          children: Q
        })
      }), e(Le, {
        children: e(nvn, {
          tasks: Y
        })
      })]
    }) : M && E ? r(s, {
      width: "100%",
      flexDirection: "column",
      children: [Q && e(Le, {
        children: e(n, {
          dimColor: !0,
          italic: !0,
          wrap: "truncate-end",
          children: Q
        })
      }), e(Le, {
        children: e(n, {
          dimColor: !0,
          children: E
        })
      })]
    }) : y ? ht ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Le, {
        children: e(n, {
          dimColor: !0,
          children: ht
        })
      })
    }) : null : Q || At || nt ? r(s, {
      width: "100%",
      flexDirection: "column",
      children: [nt && e(Le, {
        children: e(n, {
          dimColor: !0,
          children: nt
        })
      }), Q ? e(Le, {
        children: e(n, {
          dimColor: !0,
          italic: !0,
          wrap: "truncate-end",
          children: Q
        })
      }) : At && e(Le, {
        children: e(n, {
          dimColor: !0,
          wrap: at ? "truncate-end" : "wrap",
          children: At
        })
      })]
    }) : null]
  })
}
var Ot = 2,
  Ut = 3,
  Br = 12,
  Er = 1;

function se(l, t, m) {
  let o = t > 0 ? `${t} in background` : "",
    u = l - Ot - Ut,
    k = u - (o ? 1 + ie(o) : 0);
  if (o && k < (m ? Br : Er)) return {
    labelBudget: u,
    rightText: ""
  };
  return {
    labelBudget: k,
    rightText: o
  }
}

function qn({
  mode: l,
  overrideMessage: t
}) {
  let m = Ba(),
    o = _t(),
    u = $p(m.prefersReducedMotion) || o,
    [k] = g(() => QD(Qyt()) ?? "Working"),
    b = W((d) => d.remoteConnectionStatus);
  R(() => {
    let d = "spinner-" + l;
    return aU.startCLIActivity(d), () => {
      aU.endCLIActivity(d)
    }
  }, [l]);
  let [, C] = Ta(u ? null : 120), M = W((d) => U(Object.values(d.tasks), km) + d.remoteBackgroundTasks.length), E = b === "reconnecting" || b === "disconnected", {
    columns: L
  } = ve(), {
    labelBudget: v,
    rightText: f
  } = se(L, M, E), B = ot(t ?? k, v), H = ot(b === "reconnecting" ? "Reconnecting" : "Disconnected", v), P = E ? H : B, y = Math.floor(C / 300) % 3, A = u ? Ie.test(P) ? "   " : "\u2026  " : ".".repeat(y + 1).padEnd(3), _ = X(() => ie(B), [B]), j = u || E ? -100 : eor(Math.floor(C / Zrr), _), {
    before: h,
    shimmer: O,
    after: rt
  } = ZQe(B, j), G = (E ? ie(H) : _) + Ut, p = Math.max(1, L - Ot - G - ie(f));
  return r(s, {
    flexDirection: "row",
    width: "100%",
    marginTop: 1,
    paddingLeft: Ot,
    children: [E ? e(n, {
      color: "error",
      children: H + A
    }) : r(V, {
      children: [h ? e(n, {
        dimColor: !0,
        children: h
      }) : null, O ? e(n, {
        children: O
      }) : null, rt ? e(n, {
        dimColor: !0,
        children: rt
      }) : null, e(n, {
        dimColor: !0,
        children: A
      })]
    }), f ? r(V, {
      children: [e(n, {
        children: " ".repeat(p)
      }), e(n, {
        color: "subtle",
        children: f
      })]
    }) : null]
  })
}

function ler() {
  let l = W((L) => L.remoteConnectionStatus),
    t = W((L) => U(Object.values(L.tasks), km) + L.remoteBackgroundTasks.length),
    {
      columns: m
    } = ve(),
    o = l === "reconnecting" || l === "disconnected",
    {
      labelBudget: u,
      rightText: k
    } = se(m, t, o),
    b = l === "reconnecting" ? 1 : 0,
    C = ot(l === "reconnecting" ? "Reconnecting" : "Disconnected", u + Ut - b),
    M = !o ? "" : l === "reconnecting" && !C.endsWith("\u2026") ? C + "\u2026" : C;
  if (!M && !k) return e(s, {
    height: 2
  });
  let E = Math.max(1, m - Ot - ie(M) - ie(k));
  return e(s, {
    marginTop: 1,
    paddingLeft: Ot,
    children: r(n, {
      children: [M ? e(n, {
        color: "error",
        children: M
      }) : null, k ? r(V, {
        children: [e(n, {
          children: " ".repeat(E)
        }), e(n, {
          color: "subtle",
          children: k
        })]
      }) : null]
    })
  })
}

function Rs() {
  let u = w(9),
    l = _t(),
    t = $p(ys(Gr)) || l,
    [m, o] = Ta(t ? null : 120);
  if (t) {
    let k;
    if (u[0] === S) k = e(n, {
      color: "text",
      children: "\u25CF"
    }), u[0] = k;
    else k = u[0];
    let b;
    if (u[1] !== m) b = e(s, {
      ref: m,
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: k
    }), u[1] = m, u[2] = b;
    else b = u[2];
    return b
  }
  let k;
  if (u[3] === S) k = cIe(), u[3] = k;
  else k = u[3];
  let C = k,
    M = Math.floor(o / 120) % C.length;
  const b = C[M];
  let E;
  if (u[4] !== b) E = e(n, {
    color: "text",
    children: b
  }), u[4] = b, u[5] = E;
  else E = u[5];
  let L;
  if (u[6] !== m || u[7] !== E) L = e(s, {
    ref: m,
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: E
  }), u[6] = m, u[7] = E, u[8] = L;
  else L = u[8];
  return L
}

function C8r({
  entries: l,
  responseLength: t,
  event: m
}) {
  if (m.type === "start") return l.push({
    id: m.id,
    ttftMs: m.ttftMs,
    firstTokenTime: Date.now(),
    lastTokenTime: Date.now(),
    responseLengthBaseline: t,
    endResponseLength: t
  }), t;
  let o = m.id != null ? l.find((u) => u.id === m.id) : l.findLast((u) => u.id == null);
  if (!o) return t;
  if (m.type === "content_block_start") return o.thinkingTokenEstimate = 0, o.thinkingBlockBaseline = t, o.sawEstimatedTokensThisBlock = !1, t;
  if (m.type === "thinking_progress") {
    if (o.sawEstimatedTokensThisBlock = !0, o.thinkingTokenEstimate = (o.thinkingTokenEstimate ?? 0) + m.estimatedTokensDelta, o.outputTokens == null && m.id == null) {
      let u = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
      return Math.max(t, u + o.thinkingTokenEstimate * 4)
    }
    return t
  }
  if (m.type === "thinking_signature") {
    if (m.chars > 0 && o.outputTokens == null) {
      if (o.lastTokenTime = Date.now(), o.sawEstimatedTokensThisBlock) {
        o.thinkingTokenEstimate = Math.max(o.thinkingTokenEstimate ?? 0, Math.ceil(m.chars / 4));
        let k = o.thinkingBlockBaseline ?? o.responseLengthBaseline,
          b = Math.max(t, k + o.thinkingTokenEstimate * 4);
        return o.endResponseLength = b, b
      }
      let u = t + m.chars;
      return o.endResponseLength = u, u
    }
    return t
  }
  if (o.outputTokens = m.outputTokens, o.lastTokenTime = Date.now(), m.id == null) return Math.max(t, o.responseLengthBaseline + m.outputTokens * 4);
  return t
}

function Or(l) {
  if (!l) return;
  let t = l.filter((o) => o.status === "pending");
  if (t.length === 0) return;
  let m = new Set(l.filter((o) => o.status !== "completed").map((o) => o.id));
  return t.find((o) => !o.blockedBy.some((u) => m.has(u))) ?? t[0]
}
export {
  jyt,
  Xre,
  AGt,
  Zwn,
  ler,
  Rs,
  C8r
};
