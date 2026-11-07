// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  st,
  bY
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  bh,
  Twt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  at,
  v,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  ow
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  DO
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  ct,
  wFr,
  cn,
  Mw,
  pa,
  lP
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  Joe
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  Rn,
  ot,
  s,
  n,
  pl
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  DG,
  JH,
  Bc
} from "B:/~BUN/root/chunk-apcs0eny.js";
import {
  G,
  xs
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  F5n,
  RYe,
  sI,
  AYe,
  kS,
  Ry,
  hv
} from "B:/~BUN/root/chunk-9ezywpz7.js";
import {
  fFt
} from "B:/~BUN/root/chunk-6j3fjnhn.js";
import {
  uZr
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  w9e
} from "B:/~BUN/root/chunk-pmr34yc8.js";
import {
  u_
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  re
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  SOe
} from "B:/~BUN/root/chunk-d0mxnbww.js";
import {
  RGt,
  $E
} from "B:/~BUN/root/chunk-n5qt0bp0.js";
import {
  XH
} from "B:/~BUN/root/chunk-k3kse5n8.js";
import {
  Ye
} from "B:/~BUN/root/chunk-4swxab5a.js";
import {
  oke
} from "B:/~BUN/root/chunk-jmh99pxs.js";
import {
  TWr
} from "B:/~BUN/root/chunk-fs4prsr3.js";
import {
  gK,
  nhn,
  v5n,
  qGt
} from "B:/~BUN/root/chunk-bnbh68ja.js";
import {
  Ce
} from "B:/~BUN/root/chunk-cync0e08.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  ig
} from "B:/~BUN/root/chunk-ve4gzwvf.js";
import {
  CGt,
  FPe
} from "B:/~BUN/root/chunk-xtz0pgac.js";
import {
  rke
} from "B:/~BUN/root/chunk-4b1p6ngb.js";
import {
  Ic
} from "B:/~BUN/root/chunk-c7kw6nqt.js";
import {
  j_
} from "B:/~BUN/root/chunk-nyy541yq.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  $$o,
  U$o,
  g2t
} from "B:/~BUN/root/chunk-t6wq64cz.js";
import {
  S7n,
  dri,
  uri,
  fri,
  pri,
  w7n
} from "B:/~BUN/root/chunk-8pgg04y0.js";
import {
  O,
  Z,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  Sa
} from "B:/~BUN/root/chunk-63176a0t.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  w,
  Pn
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
j();
var ke = {
  r: 171,
  g: 43,
  b: 63
};

function Nmn(a) {
  let u = S(97),
    {
      message: t,
      mode: c,
      messageColor: o,
      glimmerIndex: m,
      flashOpacity: h,
      shimmerColor: k,
      stalledIntensity: M,
      thinkingIntensity: _
    } = a,
    x = M === void 0 ? 0 : M,
    B = _ === void 0 ? 0 : _,
    P = ow(),
    R;
  if (u[0] !== t) {
    R = [];
    for (const {
        segment: W
      }
      of Sa().segment(t)) R.push({
      segment: W,
      width: ce(W)
    });
    u[0] = t, u[1] = R
  } else R = u[1];
  let V;
  if (u[2] !== t) V = ce(t), u[2] = t, u[3] = V;
  else V = u[3];
  let C;
  if (u[4] !== R || u[5] !== V) C = {
    segments: R,
    messageWidth: V
  }, u[4] = R, u[5] = V, u[6] = C;
  else C = u[6];
  let {
    segments: T,
    messageWidth: L
  } = C;
  if (!t) {
    return null
  }
  if (x > 0) {
    let N = P[o];
    let g;
    if (u[7] !== N || u[8] !== t || u[9] !== x) {
      g = Pn;
      q: {
        let z = N ? hv(N) : null;
        if (z) {
          let it = kS(z, ke, sI(x));
          let H = Ry(it);
          let p;
          if (u[11] !== H || u[12] !== t) p = e(n, {
            color: H,
            children: t
          }), u[11] = H, u[12] = t, u[13] = p;
          else p = u[13];
          let d;
          if (u[14] !== H) d = e(n, {
            color: H,
            children: " "
          }), u[14] = H, u[15] = d;
          else d = u[15];
          let b;
          if (u[16] !== p || u[17] !== d) b = r(ne, {
            children: [p, d]
          }), u[16] = p, u[17] = d, u[18] = b;
          else b = u[18];
          g = b;
          break q
        }
      }
      u[7] = N, u[8] = t, u[9] = x, u[10] = g
    } else g = u[10];
    if (g !== Pn) return g;
    let I = x > 0.5 ? "error" : o;
    let p;
    if (u[19] !== I || u[20] !== t) p = e(n, {
      color: I,
      children: t
    }), u[19] = I, u[20] = t, u[21] = p;
    else p = u[21];
    let d;
    if (u[22] !== I) d = e(n, {
      color: I,
      children: " "
    }), u[22] = I, u[23] = d;
    else d = u[23];
    let b;
    if (u[24] !== p || u[25] !== d) b = r(ne, {
      children: [p, d]
    }), u[24] = p, u[25] = d, u[26] = b;
    else b = u[26];
    return b
  }
  if (B > 0) {
    let gt = P[o];
    let g;
    if (u[27] !== gt || u[28] !== t || u[29] !== P.warning || u[30] !== B) {
      g = Pn;
      J: {
        let ht = gt ? hv(gt) : null;
        let Rt = hv(P.warning);
        if (ht && Rt) {
          let tt = kS(ht, Rt, sI(B));
          let K = Ry(tt);
          let p;
          if (u[32] !== K || u[33] !== t) p = e(n, {
            color: K,
            children: t
          }), u[32] = K, u[33] = t, u[34] = p;
          else p = u[34];
          let d;
          if (u[35] !== K) d = e(n, {
            color: K,
            children: " "
          }), u[35] = K, u[36] = d;
          else d = u[36];
          let b;
          if (u[37] !== p || u[38] !== d) b = r(ne, {
            children: [p, d]
          }), u[37] = p, u[38] = d, u[39] = b;
          else b = u[39];
          g = b;
          break J
        }
      }
      u[27] = gt, u[28] = t, u[29] = P.warning, u[30] = B, u[31] = g
    } else g = u[31];
    if (g !== Pn) return g;
    let F = B > 0.5 ? "warning" : o;
    let p;
    if (u[40] !== F || u[41] !== t) p = e(n, {
      color: F,
      children: t
    }), u[40] = F, u[41] = t, u[42] = p;
    else p = u[42];
    let d;
    if (u[43] !== F) d = e(n, {
      color: F,
      children: " "
    }), u[43] = F, u[44] = d;
    else d = u[44];
    let b;
    if (u[45] !== p || u[46] !== d) b = r(ne, {
      children: [p, d]
    }), u[45] = p, u[46] = d, u[47] = b;
    else b = u[47];
    return b
  }
  if (c === "tool-use") {
    let lt = P[o];
    let Tt = P[k];
    let g;
    if (u[48] !== lt || u[49] !== h || u[50] !== t || u[51] !== o || u[52] !== Tt) {
      g = Pn;
      vt: {
        let et = lt ? hv(lt) : null;
        let yt = Tt ? hv(Tt) : null;
        if (et && yt) {
          let Mt = kS(et, yt, sI(h));
          const p = e(n, {
            color: Ry(Mt),
            children: t
          });
          let d;
          if (u[54] !== o) d = e(n, {
            color: o,
            children: " "
          }), u[54] = o, u[55] = d;
          else d = u[55];
          let b;
          if (u[56] !== p || u[57] !== d) b = r(ne, {
            children: [p, d]
          }), u[56] = p, u[57] = d, u[58] = b;
          else b = u[58];
          g = b;
          break vt
        }
      }
      u[48] = lt, u[49] = h, u[50] = t, u[51] = o, u[52] = Tt, u[53] = g
    } else g = u[53];
    if (g !== Pn) return g;
    let At = h > 0.5 ? k : o;
    let p;
    if (u[59] !== At || u[60] !== t) p = e(n, {
      color: At,
      children: t
    }), u[59] = At, u[60] = t, u[61] = p;
    else p = u[61];
    let d;
    if (u[62] !== o) d = e(n, {
      color: o,
      children: " "
    }), u[62] = o, u[63] = d;
    else d = u[63];
    let b;
    if (u[64] !== p || u[65] !== d) b = r(ne, {
      children: [p, d]
    }), u[64] = p, u[65] = d, u[66] = b;
    else b = u[66];
    return b
  }
  let nt = m - 1,
    Q = m + 1;
  if (nt >= L || Q < 0) {
    let g;
    if (u[67] !== t || u[68] !== o) g = e(n, {
      color: o,
      children: t
    }), u[67] = t, u[68] = o, u[69] = g;
    else g = u[69];
    let p;
    if (u[70] !== o) p = e(n, {
      color: o,
      children: " "
    }), u[70] = o, u[71] = p;
    else p = u[71];
    let d;
    if (u[72] !== g || u[73] !== p) d = r(ne, {
      children: [g, p]
    }), u[72] = g, u[73] = p, u[74] = d;
    else d = u[74];
    return d
  }
  let kt = Math.max(0, nt),
    mt, ut, X;
  if (u[75] !== kt || u[76] !== T || u[77] !== Q) {
    let ft = 0;
    ut = "";
    X = "";
    mt = "";
    for (const {
        segment: St,
        width: pt
      }
      of T) {
      if (ft + pt <= kt) ut = ut + St;
      else if (ft > Q) mt = mt + St;
      else X = X + St;
      ft = ft + pt
    }
    u[75] = kt, u[76] = T, u[77] = Q, u[78] = mt, u[79] = ut, u[80] = X
  } else mt = u[78], ut = u[79], X = u[80];
  let g;
  if (u[81] !== ut || u[82] !== o) g = ut && e(n, {
    color: o,
    children: ut
  }), u[81] = ut, u[82] = o, u[83] = g;
  else g = u[83];
  let p;
  if (u[84] !== X || u[85] !== k) p = e(n, {
    color: k,
    children: X
  }), u[84] = X, u[85] = k, u[86] = p;
  else p = u[86];
  let d;
  if (u[87] !== mt || u[88] !== o) d = mt && e(n, {
    color: o,
    children: mt
  }), u[87] = mt, u[88] = o, u[89] = d;
  else d = u[89];
  let b;
  if (u[90] !== o) b = e(n, {
    color: o,
    children: " "
  }), u[90] = o, u[91] = b;
  else b = u[91];
  let It;
  if (u[92] !== g || u[93] !== p || u[94] !== d || u[95] !== b) It = r(ne, {
    children: [g, p, d, b]
  }), u[92] = g, u[93] = p, u[94] = d, u[95] = b, u[96] = It;
  else It = u[96];
  return It
}
j();

function je() {
  return {
    toolWindowStart: null,
    toolWindowEnd: null,
    thinkingBurstStart: null,
    wasThinking: !1
  }
}

function Ve(a, t) {
  let {
    toolWindowStart: c,
    toolWindowEnd: o,
    thinkingBurstStart: m
  } = a;
  if (t.hasActiveTools) {
    if (t.toolWindowStartedAt !== null) c = Math.min(t.toolWindowStartedAt, t.now);
    else if (c === null || o !== null) c = t.now;
    o = null
  } else if (c !== null && o === null) o = t.now;
  if (!t.hasActiveTools && t.thinkingStatus !== null) c = null, o = null;
  if (t.isThinking) {
    if (!a.wasThinking) m = t.now
  } else m = null;
  return {
    toolWindowStart: c,
    toolWindowEnd: o,
    thinkingBurstStart: m,
    wasThinking: t.isThinking
  }
}

function Ke(a, t) {
  if (t.showToolCallTimer && t.hasActiveTools && a.toolWindowStart !== null) {
    let c = t.now - a.toolWindowStart;
    if (c >= 2000) return {
      kind: "tool-running",
      toolMs: c
    }
  }
  if (t.outputLimitRecovery !== null && !t.hasActiveTools) return {
    kind: "recovering",
    recovery: t.outputLimitRecovery
  };
  if (t.showToolCallTimer && !t.hasActiveTools && t.thinkingStatus === null && a.toolWindowStart !== null && a.toolWindowEnd !== null) {
    let c = a.toolWindowEnd - a.toolWindowStart;
    if (c >= 2000) return {
      kind: "tool-done",
      toolMs: c
    }
  }
  if (t.thinkingStatus === "thinking" && !t.hasActiveTools) return {
    kind: "thinking",
    thinkingMs: a.thinkingBurstStart !== null ? t.now - a.thinkingBurstStart : 0
  };
  if (typeof t.thinkingStatus === "number") return {
    kind: "thought-for",
    thoughtMs: t.thinkingStatus
  };
  return {
    kind: "none"
  }
}

function Ue(a, t) {
  if (t.hasActiveTools) return 0;
  if (!t.isThinking || a.thinkingBurstStart === null) return 0;
  let c = t.now - a.thinkingBurstStart;
  return Math.min(Math.max((c - 1e4) / 1e4, 0), 1)
}
j();

function Fe(a, t, c = !1, o = !1, m) {
  let h = A(a),
    k = A(t),
    M = A(0),
    _ = A(a),
    x = A(m);
  if (t > k.current || x.current !== m) x.current = m, h.current = a, k.current = t, M.current = 0, _.current = a;
  else if (t < k.current) k.current = t;
  let B;
  if (c) B = 0, h.current = a;
  else B = a - h.current;
  let P = B > 1e4 && !c,
    u = P ? Math.min((B - 1e4) / 1e4, 1) : 0;
  if (!o && (u > 0 || M.current > 0)) {
    let W = a - _.current;
    if (W >= 50) {
      let V = Math.floor(W / 50),
        C = M.current;
      for (let T = 0; T < V; T++) {
        let L = u - C;
        if (Math.abs(L) < 0.01) {
          C = u;
          break
        }
        C += L * 0.1
      }
      M.current = C, _.current = a
    }
  } else M.current = u, _.current = a;
  let R = o ? u : M.current;
  return {
    isStalled: P,
    stalledIntensity: R,
    timeSinceLastToken: B
  }
}
var Dn = [1e4, 45000, 300000],
  Gn = 2000,
  Hn = 2000,
  $n = 200,
  ae = 10,
  jn = 1e4,
  Vn = 20000,
  Kn = 30000,
  Un = 45000;

function Fn(a) {
  let t = AYe(a, Hn);
  return Math.round(t * (F5n().length - 1))
}

function Yn(a) {
  return `thought for ${Math.max(1,Math.round(a/1000))}s`
}

function qn({
  attempt: a,
  limit: t
}) {
  return a > 1 ? `picking the thought back up (${a} of ${t})` : "picking the thought back up"
}

function Xn(a) {
  if (a >= Un) return "deep in thought";
  if (a >= Kn) return "thinking some more";
  if (a >= Vn) return "thinking more";
  if (a >= jn) return "still thinking";
  return "thinking"
}

function zn(a) {
  return sI((Math.sin(a / 1000 * Math.PI) + 1) / 2)
}

function qe({
  mode: a,
  reducedMotion: t,
  hasActiveTools: c,
  toolWindowStartedAt: o,
  responseLength: m,
  message: h,
  overrideColor: k,
  loadingStartTime: M,
  totalPausedMs: _,
  pauseStartTime: x,
  thinkingStatus: B,
  effortSuffix: P,
  isCompacting: u,
  compactingStartTime: R,
  isResponseHeld: W = !1,
  showToolCallTimer: V,
  outputLimitRecovery: C = null,
  agentId: T,
  glimmerParked: L = !1
}) {
  let [N, g] = pl(t ? null : a === "requesting" && !L ? 50 : 100), z = Date.now(), H = u && R !== null ? Math.max(0, z - R) : x !== null ? x - M - _ : z - M - _, p = A(je()), d = {
    now: z,
    isThinking: a === "thinking",
    hasActiveTools: c,
    toolWindowStartedAt: o !== null && o >= M ? o : null,
    thinkingStatus: B,
    showToolCallTimer: V,
    outputLimitRecovery: C
  };
  p.current = Ve(p.current, d);
  let b = Ke(p.current, d),
    q = Ue(p.current, d),
    I = m,
    gt = c || a === "thinking" || u && a !== "responding" || W || x !== null,
    {
      isStalled: ht,
      stalledIntensity: Rt,
      timeSinceLastToken: tt
    } = Fe(g, I, gt, t, T),
    K = A(new Set),
    J = A(0),
    F = A(T);
  if (F.current !== T) F.current = T, K.current = new Set, J.current = 0;
  if (tt === 0) {
    if (K.current.size > 0) l("tengu_spinner_stall_cleared", {
      max_stall_ms: Math.round(J.current),
      mode: f(a),
      override_color: k != null,
      response_length: I,
      thresholds_fired: K.current.size
    }), K.current = new Set, J.current = 0
  } else {
    if (tt > J.current) J.current = tt;
    for (let E of Dn)
      if (tt >= E && !K.current.has(E)) K.current.add(E), l("tengu_spinner_stalled_ui", {
        threshold_ms: E,
        mode: f(a),
        override_color: k != null,
        time_since_last_token_ms: Math.round(tt),
        response_length: I,
        render_loop_dark: tt - E > 5000
      })
  }
  let lt = t ? 0 : Fn(g),
    Tt = a === "requesting" ? 50 : $n,
    et = Z(() => ce(h), [h]),
    yt = et + 2 * ae,
    Mt = Math.floor(g / Tt),
    vt = t ? -100 : ht ? -100 : a === "requesting" ? Mt % yt - ae : et + ae - Mt % yt,
    At = t ? 0 : a === "tool-use" ? zn(g) : 0,
    nt = A(I),
    Q = A(g),
    kt = A(T);
  if (kt.current !== T || Math.abs(I - nt.current) > Gn) kt.current = T, nt.current = I, Q.current = g;
  if (t) nt.current = I, Q.current = g;
  else {
    let E = Math.floor((g - Q.current) / 50);
    if (E > 0) {
      Q.current += E * 50;
      for (let wt = 0; wt < E; wt++) {
        let xt = I - nt.current;
        if (xt === 0) break;
        let Wt = Math.abs(xt),
          Bt;
        if (Wt < 70) Bt = 3;
        else if (Wt < 200) Bt = Math.max(8, Math.ceil(Wt * 0.15));
        else Bt = 50;
        nt.current = xt > 0 ? Math.min(nt.current + Bt, I) : Math.max(nt.current - Bt, I)
      }
    }
  }
  let mt = nt.current,
    ut = Math.round(mt / 4),
    X = A(0),
    ft = A(g);
  if (a !== "thinking" || c) X.current = 0, ft.current = g;
  else if (!t && (q > 0 || X.current > 0)) {
    let E = g - ft.current;
    if (E >= 50) {
      let wt = Math.floor(E / 50),
        xt = X.current;
      for (let Wt = 0; Wt < wt; Wt++) {
        let Bt = q - xt;
        if (Math.abs(Bt) < 0.01) {
          xt = q;
          break
        }
        xt += Bt * 0.1
      }
      X.current = xt, ft.current = g
    }
  } else X.current = q, ft.current = g;
  let St = t ? q : X.current,
    pt = cn(H),
    It = ce(pt),
    _t = ut,
    Nt = pa(_t),
    Pt = `${re.arrowDown} ${Nt} tokens`,
    Ct = ce(Pt),
    Et = b.kind === "thinking" ? Xn(b.thinkingMs) : "thinking",
    rt;
  switch (b.kind) {
    case "tool-running":
      rt = `running tool for ${cn(b.toolMs)}`;
      break;
    case "tool-done":
      rt = `ran tool for ${cn(b.toolMs)}`;
      break;
    case "recovering":
      rt = qn(b.recovery);
      break;
    case "thinking":
      rt = `${Et}${P}`;
      break;
    case "thought-for":
      rt = Yn(b.thoughtMs);
      break;
    case "none":
      rt = null;
      break
  }
  let Lt = rt ? ce(rt) : 0;
  return {
    viewportRef: N,
    time: g,
    elapsedMs: H,
    frame: lt,
    glimmerIndex: vt,
    flashOpacity: At,
    stalledIntensity: Rt,
    thinkingIntensity: St,
    statusText: b,
    progressiveThinkingBase: Et,
    thinkingText: rt,
    thinkingWidth: Lt,
    timerText: pt,
    timerWidth: It,
    totalTokens: _t,
    tokenCount: Nt,
    tokensWidth: Ct,
    glimmerMessageWidth: et
  }
}

function Xe(a) {
  let [t, c] = y(null), o = A(null), m = A([]), h = Rn();
  return O(() => {
    if (a === "thinking") {
      if (o.current === null) {
        for (let k of m.current) k();
        m.current = [], o.current = Date.now(), c("thinking")
      }
    } else if (o.current !== null) {
      let k = Date.now() - o.current,
        M = Math.max(0, 2000 - k);
      o.current = null;
      let _ = () => {
        c(k), m.current.push(h.setTimeout(() => c(null), 2000))
      };
      if (M > 0) m.current.push(h.setTimeout(_, M));
      else _()
    }
  }, [a, h]), O(() => () => {
    for (let k of m.current) k();
    m.current = []
  }, []), t
}
var Jn = ce(" \xB7 "),
  ze = ce("thinking"),
  Qn = 16000,
  Zn = {
    r: 153,
    g: 153,
    b: 153
  },
  to = {
    r: 185,
    g: 185,
    b: 185
  },
  Je = 3000,
  eo = 2;

function no(a, t, c) {
  let o = (a - Je) / 1000,
    m = a < Je ? 0 : (Math.sin(o * Math.PI * 2 / eo) + 1) / 2,
    h = kS(Zn, to, sI(m));
  return Ry(c && t > 0 ? kS(h, c, sI(t)) : h)
}

function rn({
  mode: a,
  reducedMotion: t,
  hasActiveTools: c,
  toolWindowStartedAt: o,
  responseLengthRef: m,
  message: h,
  messageColor: k,
  shimmerColor: M,
  overrideColor: _,
  loadingStartTimeRef: x,
  totalPausedMsRef: B,
  pauseStartTimeRef: P,
  spinnerSuffix: u,
  verbose: R,
  columns: W,
  thinkingStatus: V,
  effortSuffix: C,
  isCompacting: T = !1,
  compactingStartTime: L = null,
  isResponseHeld: N = !1,
  showToolCallTimer: g = !1,
  retryStatus: z = null,
  outputLimitRecovery: it = null,
  agentId: H
}) {
  let p = qe({
      mode: a,
      reducedMotion: t,
      hasActiveTools: c,
      toolWindowStartedAt: o,
      responseLength: m.current,
      message: h,
      overrideColor: _,
      loadingStartTime: x.current,
      totalPausedMs: B.current,
      pauseStartTime: P.current,
      thinkingStatus: V,
      effortSuffix: C,
      isCompacting: T,
      compactingStartTime: L,
      isResponseHeld: N,
      showToolCallTimer: g,
      outputLimitRecovery: it,
      agentId: H
    }),
    d = ow(),
    b = ot(),
    q = $E(R),
    {
      viewportRef: I,
      time: gt,
      elapsedMs: ht,
      frame: Rt,
      glimmerIndex: tt,
      flashOpacity: K,
      stalledIntensity: J,
      thinkingIntensity: F,
      statusText: lt,
      progressiveThinkingBase: Tt,
      timerText: et,
      timerWidth: yt,
      totalTokens: Mt,
      tokenCount: vt,
      tokensWidth: At,
      glimmerMessageWidth: nt
    } = p,
    {
      thinkingText: Q,
      thinkingWidth: kt
    } = p,
    mt = nt + 2,
    ut = Jn,
    X = Q !== null,
    ft = R || X || T || Mt > 0 || ht > Qn || Boolean(u),
    St = W - mt - 5,
    pt = X && St > kt;
  if (!pt && X && lt.kind === "thinking" && (C || Tt !== "thinking")) {
    if (St > ze) Q = "thinking", kt = ze, pt = !0
  }
  let It = pt ? kt + ut : 0,
    _t = ft && St > It + yt,
    Nt = It + (_t ? yt + ut : 0),
    Pt = ft && Mt > 0 && St > Nt + At,
    Ct = pt && lt.kind === "thinking" && !u && !_t && !Pt,
    Et = F > 0 ? hv(d.warning) : null,
    rt = no(gt, F, Et),
    Lt = !Et && F > 0.5 ? "warning" : void 0,
    E = F > 0 ? "warning" : void 0,
    wt = [...u ? [e(n, {
      dimColor: !0,
      children: u
    }, "suffix")] : [], ...!b && _t ? [e(n, {
      dimColor: !0,
      children: et
    }, "elapsedTime")] : [], ...!b && Pt ? [r(s, {
      flexDirection: "row",
      children: [e(sn, {
        mode: a
      }), r(n, {
        dimColor: !0,
        children: [vt, " tokens"]
      })]
    }, "tokens")] : [], ...!b && pt && Q ? [lt.kind === "thinking" && !t ? e(n, {
      color: Lt ?? rt,
      children: Ct ? `(${Q})` : Q
    }, "thinking") : e(n, {
      dimColor: !E,
      color: E,
      children: Q
    }, "thinking")] : []],
    xt = wt.length > 0 ? Ct ? e(Ce, {
      children: wt
    }) : r(ne, {
      children: [e(n, {
        dimColor: !0,
        children: "("
      }), e(Ce, {
        children: wt
      }), e(n, {
        dimColor: !0,
        children: ")"
      })]
    }) : null;
  if (T && z === null && q) return e(s, {
    ref: I,
    flexDirection: "column",
    marginTop: 1,
    width: "100%",
    children: e(CGt, {
      tone: "dim",
      text: bh(h, "\u2026")
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
      children: z ? e(G3n, {
        status: z,
        columns: W
      }) : r(ne, {
        children: [e(rke, {
          frame: Rt,
          messageColor: k,
          stalledIntensity: _ ? 0 : J,
          thinkingIntensity: _ ? 0 : F,
          reducedMotion: t,
          time: gt
        }), e(Nmn, {
          message: h,
          mode: a,
          messageColor: k,
          glimmerIndex: tt,
          flashOpacity: K,
          shimmerColor: M,
          stalledIntensity: _ ? 0 : J,
          thinkingIntensity: _ ? 0 : F
        }), xt]
      })
    })
  })
}

function G3n(a) {
  let m = S(57),
    {
      status: t,
      columns: c
    } = a,
    o = Math.max(0, Math.ceil((t.deadline - Date.now()) / 1000)) * 1000,
    h;
  if (m[0] !== t.kind) h = t.kind === "low_priority_waiting" ? Joe().waitBanner : null, m[0] = t.kind, m[1] = h;
  else h = m[1];
  let k = h;
  const M = o >= 300000;
  let _;
  if (m[2] !== o || m[3] !== M) _ = cn(o, {
    mostSignificantOnly: M
  }), m[2] = o, m[3] = M, m[4] = _;
  else _ = m[4];
  let x = _,
    B;
  if (m[5] === w) B = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: "error",
      children: DO
    })
  }), m[5] = B;
  else B = m[5];
  let P = B;
  if (t.kind === "stalled") {
    let u;
    if (m[6] === w) u = e(n, {
      color: "error",
      children: "Waiting for API response"
    }), m[6] = u;
    else u = m[6];
    let R;
    if (m[7] !== x) R = r(ne, {
      children: [P, r(s, {
        flexShrink: 1,
        children: [u, r(n, {
          dimColor: !0,
          children: [" \xB7 will retry in ", x, " \xB7 check your network"]
        })]
      })]
    }), m[7] = x, m[8] = R;
    else R = m[8];
    return R
  }
  if (t.kind === "low_priority_waiting") {
    let W = ` \xB7 next try in ${x} \xB7 attempt ${t.attempt} \xB7 esc to interrupt`;
    let V = Math.max(10, c - 2 - ce(W) - 2);
    let u;
    if (m[9] === w) u = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: "warning",
        children: DO
      })
    }), m[9] = u;
    else u = m[9];
    const R = k ?? "";
    let C;
    if (m[10] !== V || m[11] !== R) C = ct(R, V), m[10] = V, m[11] = R, m[12] = C;
    else C = m[12];
    let T;
    if (m[13] !== C) T = e(n, {
      color: "warning",
      children: C
    }), m[13] = C, m[14] = T;
    else T = m[14];
    let L;
    if (m[15] !== W) L = e(n, {
      dimColor: !0,
      children: W
    }), m[15] = W, m[16] = L;
    else L = m[16];
    let N;
    if (m[17] !== T || m[18] !== L) N = r(ne, {
      children: [u, r(s, {
        flexShrink: 1,
        children: [T, L]
      })]
    }), m[17] = T, m[18] = L, m[19] = N;
    else N = m[19];
    return N
  }
  if (t.kind === "auto_mode_unavailable") {
    let u;
    if (m[20] === w) u = e(n, {
      color: "error",
      children: "Auto mode check unavailable"
    }), m[20] = u;
    else u = m[20];
    const R = ` \xB7 next try in ${x} \xB7 attempt ${t.attempt}/${t.maxRetries} \xB7 `;
    let C;
    if (m[21] === w) C = e(Y, {
      chord: "escape",
      action: "interrupt",
      format: {
        keyCase: "lower"
      }
    }), m[21] = C;
    else C = m[21];
    let T;
    if (m[22] !== R) T = r(ne, {
      children: [P, r(s, {
        flexShrink: 1,
        children: [u, r(n, {
          dimColor: !0,
          children: [R, C]
        })]
      })]
    }), m[22] = R, m[23] = T;
    else T = m[23];
    return T
  }
  let g = t.error.noResponse;
  if (g) {
    let z = t.attempt >= t.maxRetries;
    let u;
    if (m[24] !== g.retryWaitMs) u = Mw(g.retryWaitMs), m[24] = g.retryWaitMs, m[25] = u;
    else u = m[25];
    let it = u;
    let H = z ? ` \xB7 retrying once, waiting up to ${it}` : ` \xB7 retrying, waiting up to ${it} \xB7 attempt ${t.attempt}/${t.maxRetries}`;
    let p = Math.max(10, c - 2 - ce(H) - 2);
    let R;
    if (m[26] !== g.waitedMs) R = Mw(g.waitedMs), m[26] = g.waitedMs, m[27] = R;
    else R = m[27];
    const C = `No response from the API after ${R}`;
    let T;
    if (m[28] !== p || m[29] !== C) T = ct(C, p), m[28] = p, m[29] = C, m[30] = T;
    else T = m[30];
    let L;
    if (m[31] !== T) L = e(n, {
      color: "error",
      children: T
    }), m[31] = T, m[32] = L;
    else L = m[32];
    let N;
    if (m[33] !== H) N = e(n, {
      dimColor: !0,
      children: H
    }), m[33] = H, m[34] = N;
    else N = m[34];
    let d;
    if (m[35] !== N || m[36] !== L) d = r(s, {
      children: [L, N]
    }), m[35] = N, m[36] = L, m[37] = d;
    else d = m[37];
    let b;
    if (m[38] === w) b = e(n, {
      dimColor: !0,
      children: "A proxy or gateway that buffers streaming responses can cause this \xB7 set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait"
    }), m[38] = b;
    else b = m[38];
    let q;
    if (m[39] !== d) q = r(ne, {
      children: [P, r(s, {
        flexBasis: 0,
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        children: [d, b]
      })]
    }), m[39] = d, m[40] = q;
    else q = m[40];
    return q
  }
  let I = t.error.rateLimits,
    u;
  if (m[41] !== I) u = I?.resetsAt ? ` (${lP(I.resetsAt)})` : "", m[41] = I, m[42] = u;
  else u = m[42];
  let ht = ` \xB7 Retrying in ${x}${u} \xB7 attempt ${t.attempt}/${t.maxRetries}`,
    Rt = t.attempt >= Math.min(3, t.maxRetries) || t.error.isNetworkDown || t.error.connection?.isSSLError || I,
    R;
  if (m[43] !== I || m[44] !== Rt || m[45] !== t.error.formatted) {
    let tt = I?.rateLimitType ? w9e(I.rateLimitType) : "usage limit";
    R = !Rt ? v5n : I ? `${tt[0]?.toUpperCase()}${tt.slice(1)} reached` : t.error.formatted;
    m[43] = I, m[44] = Rt, m[45] = t.error.formatted, m[46] = R
  } else R = m[46];
  let K = R,
    J = Math.max(10, c - 2 - ce(ht) - 2),
    C;
  if (m[47] !== J || m[48] !== K) C = ct(K, J), m[47] = J, m[48] = K, m[49] = C;
  else C = m[49];
  let F = C,
    T;
  if (m[50] !== F) T = e(n, {
    color: "error",
    children: F
  }), m[50] = F, m[51] = T;
  else T = m[51];
  let L;
  if (m[52] !== ht) L = e(n, {
    dimColor: !0,
    children: ht
  }), m[52] = ht, m[53] = L;
  else L = m[53];
  let N;
  if (m[54] !== T || m[55] !== L) N = r(ne, {
    children: [P, r(s, {
      flexShrink: 1,
      children: [T, L]
    })]
  }), m[54] = T, m[55] = L, m[56] = N;
  else N = m[56];
  return N
}

function sn(a) {
  let c = S(2),
    {
      mode: t
    } = a;
  switch (t) {
    case "tool-input":
    case "tool-use":
    case "responding":
    case "thinking": {
      let o;
      if (c[0] === w) o = e(s, {
        width: 2,
        children: e(n, {
          "aria-hidden": !0,
          dimColor: !0,
          children: re.arrowDown
        })
      }), c[0] = o;
      else o = c[0];
      return o
    }
    case "requesting": {
      let o;
      if (c[1] === w) o = e(s, {
        width: 2,
        children: e(n, {
          "aria-hidden": !0,
          dimColor: !0,
          children: re.arrowUp
        })
      }), c[1] = o;
      else o = c[1];
      return o
    }
  }
}

function or(I) {
  return I.isBriefOnly
}

function rr(gt) {
  return gt.viewingAgentTaskId
}

function ir(P) {
  return P.settings.prefersReducedMotion
}
var jt = "\u2026";

function vWr(a) {
  let g = S(25),
    {
      mode: t,
      overrideMessage: c,
      waitLine: o,
      overrideColor: m,
      overrideShimmerColor: h,
      isCompacting: k,
      isResponseHeld: M,
      compactingHintText: _,
      compactingStartTime: x,
      turnEffort: B,
      turnModel: P,
      sentEffort: u,
      retryStatus: R,
      outputLimitRecovery: W,
      defaultVerb: V
    } = qGt(a.agentId),
    C = c ?? o,
    T = G(or),
    L = G(rr),
    N = i.CLAUDE_CODE_BRIEF,
    z, it;
  if (g[0] !== V || g[1] !== t || g[2] !== C || g[3] !== a.agentId) z = () => ({
    requestId: a.agentId ?? "main",
    props: {
      word: V,
      message: C,
      suffix: jt,
      mode: t
    }
  }), it = [a.agentId, V, C, t], g[0] = V, g[1] = t, g[2] = C, g[3] = a.agentId, g[4] = z, g[5] = it;
  else z = g[4], it = g[5];
  let H = Bc.useRenderInput("Spinner", z, it),
    p;
  if (g[6] !== T || g[7] !== L) p = bY() && (N || v("tengu_kairos_brief", !1)) && T && !L, g[6] = T, g[7] = L, g[8] = p;
  else p = g[8];
  let d = p,
    b;
  if (g[9] !== d || g[10] !== _ || g[11] !== x || g[12] !== k || g[13] !== M || g[14] !== t || g[15] !== W || g[16] !== m || g[17] !== h || g[18] !== a || g[19] !== R || g[20] !== u || g[21] !== B || g[22] !== P || g[23] !== o) b = (q) => d ? e(Mn, {
    mode: t,
    overrideMessage: q.props.message
  }) : e(yn, {
    ...a,
    mode: t,
    overrideMessage: q.props.message,
    overrideColor: m,
    overrideShimmerColor: h,
    isCompacting: k,
    isResponseHeld: M || o !== null,
    compactingHintText: _,
    compactingStartTime: x,
    turnEffort: B,
    turnModel: P,
    sentEffort: u,
    retryStatus: R,
    outputLimitRecovery: W,
    defaultVerb: q.props.word,
    suffix: q.props.suffix ?? jt
  }), g[9] = d, g[10] = _, g[11] = x, g[12] = k, g[13] = M, g[14] = t, g[15] = W, g[16] = m, g[17] = h, g[18] = a, g[19] = R, g[20] = u, g[21] = B, g[22] = P, g[23] = o, g[24] = b;
  else b = g[24];
  return Bc.useRenderHook(H, b)
}

function yn({
  mode: a,
  loadingStartTimeRef: t,
  totalPausedMsRef: c,
  pauseStartTimeRef: o,
  responseLengthRef: m,
  overrideColor: h,
  overrideShimmerColor: k,
  overrideMessage: M,
  isCompacting: _,
  isResponseHeld: x,
  compactingHintText: B,
  compactingStartTime: P,
  spinnerSuffix: u,
  verbose: R,
  hasActiveTools: W = !1,
  toolWindowStartedAt: V = null,
  turnEffort: C,
  turnModel: T,
  sentEffort: L,
  retryStatus: N,
  outputLimitRecovery: g,
  defaultVerb: z,
  suffix: it,
  agentId: H
}) {
  let p = Ic(),
    d = ot(),
    b = j_(p.prefersReducedMotion) || d,
    q = G((E) => E.spinnerTip),
    I = G((E) => E.spinnerTipLabel),
    gt = G((E) => E.briefTranscript),
    ht = G((E) => E.expandedView) === "tasks",
    Rt = Re(),
    tt = $E(R) ? FPe : 0,
    K = Math.max(1, Rt.columns - tt),
    J = oke(),
    F = Xe(a),
    lt = H === void 0 || H === st(),
    Tt = lt ? J?.find((E) => E.status !== "pending" && E.status !== "completed") : void 0,
    et = lt ? nr(J) : void 0,
    [yt] = y(() => gK(nhn()) ?? "Working"),
    Mt = Tt ? [Tt.activeForm, Tt.subject].map((E) => E?.replace(/\s+/g, " ").trim()).find(Boolean) : void 0,
    vt = M ?? (Mt === void 0 ? void 0 : wFr(Mt, K)) ?? (z || yt),
    nt = it === jt && Twt.test(vt) ? vt : vt + it;
  O(() => {
    let E = "spinner-" + a;
    return XH.startCLIActivity(E), () => {
      XH.endCLIActivity(E)
    }
  }, [a]);
  let Q = ig(),
    kt = fFt(T ?? at(), Q, C ?? void 0, L ?? void 0),
    mt = o.current !== null ? o.current - t.current - c.current : Date.now() - t.current - c.current,
    ut = "claude",
    X = "claudeShimmer",
    ft = h ?? ut,
    St = k ?? X,
    pt = v("tengu_shining_fractals", !1),
    It = !1,
    _t = p.spinnerTipsEnabled !== !1,
    Nt = _t && mt > 1800000,
    Pt = _t && mt > 30000 && !fe().btwUseCount,
    Ct = It ? q : SOe() ? q : Nt && !et ? "Use /clear to start fresh when switching topics and free up context" : Pt && !et ? "Use /btw to ask a quick side question without interrupting Claude's current work" : q,
    Et = Ct === q && I ? I : "Tip",
    rt = et ? `Next: ${et.subject.replace(/\s+/g," ").trim()}` : q === S7n && gt ? dri : Ct ? `${Et}: ${Ct}` : void 0,
    Lt;
  if (N?.kind === "retrying") {
    let E = N.error.status === 529 || N.error.formatted.toLowerCase().includes("overload"),
      wt = N.attempt >= Math.min(3, N.maxRetries);
    if (E && wt) Lt = uZr().trim()
  }
  return r(s, {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    paddingLeft: tt,
    children: [e(rn, {
      mode: a,
      reducedMotion: b,
      hasActiveTools: W,
      toolWindowStartedAt: V,
      responseLengthRef: m,
      message: nt,
      messageColor: ft,
      shimmerColor: St,
      overrideColor: h,
      loadingStartTimeRef: t,
      totalPausedMsRef: c,
      pauseStartTimeRef: o,
      spinnerSuffix: u,
      verbose: R,
      columns: K,
      thinkingStatus: F,
      effortSuffix: kt,
      isCompacting: _,
      compactingStartTime: P,
      isResponseHeld: x,
      showToolCallTimer: pt,
      retryStatus: N,
      outputLimitRecovery: g,
      agentId: H
    }), lt && ht && J && J.length > 0 ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Ye, {
        children: e(TWr, {
          tasks: J
        })
      })
    }) : _ && B ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Ye, {
        children: e(n, {
          dimColor: !0,
          children: B
        })
      })
    }) : N ? Lt ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Ye, {
        children: e(n, {
          dimColor: !0,
          children: Lt
        })
      })
    }) : null : rt ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Ye, {
        children: !et && Ct === w7n ? r(s, {
          flexDirection: "row",
          flexWrap: "wrap",
          children: [r(n, {
            dimColor: !0,
            children: [Et, ": ", uri, " \xB7", " "]
          }), e(s, {
            flexShrink: 0,
            children: e(RGt, {
              command: fri,
              args: pri,
              color: "suggestion"
            })
          })]
        }) : e(n, {
          dimColor: !0,
          wrap: et ? "truncate-end" : "wrap",
          children: rt
        })
      })
    }) : null]
  })
}
var Ot = 2,
  Vt = 3,
  zo = 12,
  Jo = 1;

function Qt(a, t, c) {
  let o = t > 0 ? `${t} in background` : "",
    m = a - Ot - Vt,
    h = m - (o ? 1 + ce(o) : 0);
  if (o && h < (c ? zo : Jo)) return {
    labelBudget: m,
    rightText: ""
  };
  return {
    labelBudget: h,
    rightText: o
  }
}

function Mn({
  mode: a,
  overrideMessage: t
}) {
  let c = Ic(),
    o = ot(),
    m = j_(c.prefersReducedMotion) || o,
    [h] = y(() => gK(nhn()) ?? "Working"),
    k = G((d) => d.remoteConnectionStatus);
  O(() => {
    let d = "spinner-" + a;
    return XH.startCLIActivity(d), () => {
      XH.endCLIActivity(d)
    }
  }, [a]);
  let [, M] = pl(m ? null : 120), _ = G((d) => U(Object.values(d.tasks), u_) + d.remoteBackgroundTasks.length), x = k === "reconnecting" || k === "disconnected", {
    columns: B
  } = Re(), {
    labelBudget: P,
    rightText: u
  } = Qt(B, _, x), R = ct(t ?? h, P), W = ct(k === "reconnecting" ? "Reconnecting" : "Disconnected", P), V = x ? W : R, C = Math.floor(M / 300) % 3, T = m ? Twt.test(V) ? "   " : "\u2026  " : ".".repeat(C + 1).padEnd(3), L = Z(() => ce(R), [R]), N = m || x ? -100 : U$o(Math.floor(M / $$o), L), {
    before: g,
    shimmer: z,
    after: it
  } = g2t(R, N), H = (x ? ce(W) : L) + Vt, p = Math.max(1, B - Ot - H - ce(u));
  return r(s, {
    flexDirection: "row",
    width: "100%",
    marginTop: 1,
    paddingLeft: Ot,
    children: [x ? e(n, {
      color: "error",
      children: W + T
    }) : r(ne, {
      children: [g ? e(n, {
        dimColor: !0,
        children: g
      }) : null, z ? e(n, {
        children: z
      }) : null, it ? e(n, {
        dimColor: !0,
        children: it
      }) : null, e(n, {
        dimColor: !0,
        children: T
      })]
    }), u ? r(ne, {
      children: [e(n, {
        children: " ".repeat(p)
      }), e(n, {
        dimColor: !0,
        children: u
      })]
    }) : null]
  })
}

function sHo() {
  let a = G((B) => B.remoteConnectionStatus),
    t = G((B) => U(Object.values(B.tasks), u_) + B.remoteBackgroundTasks.length),
    {
      columns: c
    } = Re(),
    o = a === "reconnecting" || a === "disconnected",
    {
      labelBudget: m,
      rightText: h
    } = Qt(c, t, o),
    k = a === "reconnecting" ? 1 : 0,
    M = ct(a === "reconnecting" ? "Reconnecting" : "Disconnected", m + Vt - k),
    _ = !o ? "" : a === "reconnecting" && !M.endsWith("\u2026") ? M + "\u2026" : M;
  if (!_ && !h) return e(s, {
    height: 2
  });
  let x = Math.max(1, c - Ot - ce(_) - ce(h));
  return e(s, {
    marginTop: 1,
    paddingLeft: Ot,
    children: r(n, {
      children: [_ ? e(n, {
        color: "error",
        children: _
      }) : null, h ? r(ne, {
        children: [e(n, {
          children: " ".repeat(x)
        }), e(n, {
          dimColor: !0,
          children: h
        })]
      }) : null]
    })
  })
}

function Oa() {
  let m = S(9),
    a = ot(),
    t = j_(xs(ir)) || a,
    [c, o] = pl(t ? null : 120);
  if (t) {
    let h;
    if (m[0] === w) h = e(n, {
      color: "text",
      children: "\u25CF"
    }), m[0] = h;
    else h = m[0];
    let k;
    if (m[1] !== c) k = e(s, {
      ref: c,
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: h
    }), m[1] = c, m[2] = k;
    else k = m[2];
    return k
  }
  let h;
  if (m[3] === w) h = RYe(), m[3] = h;
  else h = m[3];
  let M = h,
    _ = Math.floor(o / 120) % M.length;
  const k = M[_];
  let x;
  if (m[4] !== k) x = e(n, {
    color: "text",
    children: k
  }), m[4] = k, m[5] = x;
  else x = m[5];
  let B;
  if (m[6] !== c || m[7] !== x) B = e(s, {
    ref: c,
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: x
  }), m[6] = c, m[7] = x, m[8] = B;
  else B = m[8];
  return B
}

function A8s({
  entries: a,
  responseLength: t,
  event: c
}) {
  if (c.type === "start") return a.push({
    id: c.id,
    responseLengthBaseline: t
  }), t;
  let o = c.id != null ? a.find((m) => m.id === c.id) : a.findLast((m) => m.id == null);
  if (!o) return t;
  if (c.type === "content_block_start") return o.thinkingTokenEstimate = 0, o.thinkingBlockBaseline = t, o.sawEstimatedTokensThisBlock = !1, t;
  if (c.type === "thinking_progress") {
    if (o.sawEstimatedTokensThisBlock = !0, o.thinkingTokenEstimate = (o.thinkingTokenEstimate ?? 0) + c.estimatedTokensDelta, o.outputTokens == null && c.id == null) {
      let m = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
      return Math.max(t, m + o.thinkingTokenEstimate * 4)
    }
    return t
  }
  if (c.type === "thinking_signature") {
    if (c.chars > 0 && o.outputTokens == null) {
      if (o.sawEstimatedTokensThisBlock) {
        o.thinkingTokenEstimate = Math.max(o.thinkingTokenEstimate ?? 0, Math.ceil(c.chars / 4));
        let m = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
        return Math.max(t, m + o.thinkingTokenEstimate * 4)
      }
      return t + c.chars
    }
    return t
  }
  if (o.outputTokens = c.outputTokens, c.id == null) return Math.max(t, o.responseLengthBaseline + c.outputTokens * 4);
  return t
}

function nr(a) {
  if (!a) return;
  let t = a.filter((o) => o.status === "pending");
  if (t.length === 0) return;
  let c = new Set(a.filter((o) => o.status !== "completed").map((o) => o.id));
  return t.find((o) => !o.blockedBy.some((m) => c.has(m))) ?? t[0]
}
export {
  Nmn,
  G3n,
  vWr,
  sHo,
  Oa,
  A8s
};
