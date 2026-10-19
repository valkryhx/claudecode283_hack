// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  F,
  Ze,
  QW
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  tt,
  E,
  ue
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  ew
} from "B:/~BUN/root/chunk-g5gf7tps.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  oR
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  mt,
  ybt,
  rn,
  uR,
  ei,
  eP
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  B9,
  bMt
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  s,
  n,
  dn,
  ot,
  Aa
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  f1,
  kL,
  $d
} from "B:/~BUN/root/chunk-znr767c8.js";
import {
  Ph
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  V,
  Fo
} from "B:/~BUN/root/chunk-tgzmva3g.js";
import {
  Te
} from "B:/~BUN/root/chunk-smy4yvhm.js";
import {
  qwn,
  PLe,
  ER,
  OLe,
  Py,
  Xm,
  yS
} from "B:/~BUN/root/chunk-mvgarwbg.js";
import {
  chr
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  rin
} from "B:/~BUN/root/chunk-8y0chnnr.js";
import {
  te
} from "B:/~BUN/root/chunk-9tx73f8x.js";
import {
  SRe
} from "B:/~BUN/root/chunk-5zqsbvq1.js";
import {
  wV
} from "B:/~BUN/root/chunk-mjmtbepf.js";
import {
  ze
} from "B:/~BUN/root/chunk-yqm8ptb8.js";
import {
  lce
} from "B:/~BUN/root/chunk-nnc7bx19.js";
import {
  gtr
} from "B:/~BUN/root/chunk-q2gcsksm.js";
import {
  y1,
  W2t,
  Nwn,
  m4r
} from "B:/~BUN/root/chunk-cztbaswn.js";
import {
  Se
} from "B:/~BUN/root/chunk-7dpyfa5r.js";
import {
  q
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  Yye,
  $w
} from "B:/~BUN/root/chunk-x2fwa42c.js";
import {
  Cb,
  Xye
} from "B:/~BUN/root/chunk-hgn6pbq9.js";
import {
  rce
} from "B:/~BUN/root/chunk-tajz9s25.js";
import {
  hd
} from "B:/~BUN/root/chunk-q6bapw2s.js";
import {
  zqr,
  Gqr,
  mvt
} from "B:/~BUN/root/chunk-vm6z21pz.js";
import {
  sh,
  Vu
} from "B:/~BUN/root/chunk-44n8zjk2.js";
import {
  Q,
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  YEn,
  FZo
} from "B:/~BUN/root/chunk-520acb4b.js";
import {
  P,
  Z,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  ua
} from "B:/~BUN/root/chunk-pp80ffk4.js";
import {
  ie
} from "B:/~BUN/root/chunk-t7350kw8.js";
import {
  S,
  yn
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
var Vt = 150;

function Zt(l) {
  let M = w(8),
    {
      tone: t,
      text: u
    } = l,
    o = Vu(),
    m = ot(),
    g = o || m,
    [h, x] = Aa(g ? null : Vt);
  const I = Math.floor(x / Vt);
  let _;
  if (M[0] !== g || M[1] !== I || M[2] !== u || M[3] !== t) _ = e(Yye, {
    state: "live",
    tone: t,
    text: u,
    linkify: !1,
    frame: I,
    reducedMotion: g
  }), M[0] = g, M[1] = I, M[2] = u, M[3] = t, M[4] = _;
  else _ = M[4];
  let L;
  if (M[5] !== h || M[6] !== _) L = e(s, {
    ref: h,
    flexDirection: "column",
    children: _
  }), M[5] = h, M[6] = _, M[7] = L;
  else L = M[7];
  return L
}
B();
var Re = {
  r: 171,
  g: 43,
  b: 63
};

function t2t(l) {
  let f = w(97),
    {
      message: t,
      mode: u,
      messageColor: o,
      glimmerIndex: m,
      flashOpacity: g,
      shimmerColor: h,
      stalledIntensity: x,
      thinkingIntensity: I
    } = l,
    M = x === void 0 ? 0 : x,
    _ = I === void 0 ? 0 : I,
    L = ew(),
    C;
  if (f[0] !== t) {
    C = [];
    for (const {
        segment: j
      }
      of ua().segment(t)) C.push({
      segment: j,
      width: ie(j)
    });
    f[0] = t, f[1] = C
  } else C = f[1];
  let N;
  if (f[2] !== t) N = ie(t), f[2] = t, f[3] = N;
  else N = f[3];
  let T;
  if (f[4] !== C || f[5] !== N) T = {
    segments: C,
    messageWidth: N
  }, f[4] = C, f[5] = N, f[6] = T;
  else T = f[6];
  let {
    segments: v,
    messageWidth: k
  } = T;
  if (!t) {
    return null
  }
  if (M > 0) {
    let O = L[o];
    let b;
    if (f[7] !== O || f[8] !== t || f[9] !== M) {
      b = yn;
      Mt: {
        let nt = O ? yS(O) : null;
        if (nt) {
          let Y = Py(nt, Re, ER(M));
          let W = Xm(Y);
          let d;
          if (f[11] !== W || f[12] !== t) d = e(n, {
            color: W,
            children: t
          }), f[11] = W, f[12] = t, f[13] = d;
          else d = f[13];
          let p;
          if (f[14] !== W) p = e(n, {
            color: W,
            children: " "
          }), f[14] = W, f[15] = p;
          else p = f[15];
          let R;
          if (f[16] !== d || f[17] !== p) R = r(Q, {
            children: [d, p]
          }), f[16] = d, f[17] = p, f[18] = R;
          else R = f[18];
          b = R;
          break Mt
        }
      }
      f[7] = O, f[8] = t, f[9] = M, f[10] = b
    } else b = f[10];
    if (b !== yn) return b;
    let H = M > 0.5 ? "error" : o;
    let d;
    if (f[19] !== H || f[20] !== t) d = e(n, {
      color: H,
      children: t
    }), f[19] = H, f[20] = t, f[21] = d;
    else d = f[21];
    let p;
    if (f[22] !== H) p = e(n, {
      color: H,
      children: " "
    }), f[22] = H, f[23] = p;
    else p = f[23];
    let R;
    if (f[24] !== d || f[25] !== p) R = r(Q, {
      children: [d, p]
    }), f[24] = d, f[25] = p, f[26] = R;
    else R = f[26];
    return R
  }
  if (_ > 0) {
    let St = L[o];
    let b;
    if (f[27] !== St || f[28] !== t || f[29] !== L.warning || f[30] !== _) {
      b = yn;
      ft: {
        let X = St ? yS(St) : null;
        let K = yS(L.warning);
        if (X && K) {
          let ct = Py(X, K, ER(_));
          let D = Xm(ct);
          let d;
          if (f[32] !== D || f[33] !== t) d = e(n, {
            color: D,
            children: t
          }), f[32] = D, f[33] = t, f[34] = d;
          else d = f[34];
          let p;
          if (f[35] !== D) p = e(n, {
            color: D,
            children: " "
          }), f[35] = D, f[36] = p;
          else p = f[36];
          let R;
          if (f[37] !== d || f[38] !== p) R = r(Q, {
            children: [d, p]
          }), f[37] = d, f[38] = p, f[39] = R;
          else R = f[39];
          b = R;
          break ft
        }
      }
      f[27] = St, f[28] = t, f[29] = L.warning, f[30] = _, f[31] = b
    } else b = f[31];
    if (b !== yn) return b;
    let J = _ > 0.5 ? "warning" : o;
    let d;
    if (f[40] !== J || f[41] !== t) d = e(n, {
      color: J,
      children: t
    }), f[40] = J, f[41] = t, f[42] = d;
    else d = f[42];
    let p;
    if (f[43] !== J) p = e(n, {
      color: J,
      children: " "
    }), f[43] = J, f[44] = p;
    else p = f[44];
    let R;
    if (f[45] !== d || f[46] !== p) R = r(Q, {
      children: [d, p]
    }), f[45] = d, f[46] = p, f[47] = R;
    else R = f[47];
    return R
  }
  if (u === "tool-use") {
    let gt = L[o];
    let dt = L[h];
    let b;
    if (f[48] !== gt || f[49] !== g || f[50] !== t || f[51] !== o || f[52] !== dt) {
      b = yn;
      pt: {
        let ht = gt ? yS(gt) : null;
        let Lt = dt ? yS(dt) : null;
        if (ht && Lt) {
          let At = Py(ht, Lt, ER(g));
          const d = e(n, {
            color: Xm(At),
            children: t
          });
          let p;
          if (f[54] !== o) p = e(n, {
            color: o,
            children: " "
          }), f[54] = o, f[55] = p;
          else p = f[55];
          let R;
          if (f[56] !== d || f[57] !== p) R = r(Q, {
            children: [d, p]
          }), f[56] = d, f[57] = p, f[58] = R;
          else R = f[58];
          b = R;
          break pt
        }
      }
      f[48] = gt, f[49] = g, f[50] = t, f[51] = o, f[52] = dt, f[53] = b
    } else b = f[53];
    if (b !== yn) return b;
    let rt = g > 0.5 ? h : o;
    let d;
    if (f[59] !== rt || f[60] !== t) d = e(n, {
      color: rt,
      children: t
    }), f[59] = rt, f[60] = t, f[61] = d;
    else d = f[61];
    let p;
    if (f[62] !== o) p = e(n, {
      color: o,
      children: " "
    }), f[62] = o, f[63] = p;
    else p = f[63];
    let R;
    if (f[64] !== d || f[65] !== p) R = r(Q, {
      children: [d, p]
    }), f[64] = d, f[65] = p, f[66] = R;
    else R = f[66];
    return R
  }
  let kt = m - 1,
    xt = m + 1;
  if (kt >= k || xt < 0) {
    let b;
    if (f[67] !== t || f[68] !== o) b = e(n, {
      color: o,
      children: t
    }), f[67] = t, f[68] = o, f[69] = b;
    else b = f[69];
    let d;
    if (f[70] !== o) d = e(n, {
      color: o,
      children: " "
    }), f[70] = o, f[71] = d;
    else d = f[71];
    let p;
    if (f[72] !== b || f[73] !== d) p = r(Q, {
      children: [b, d]
    }), f[72] = b, f[73] = d, f[74] = p;
    else p = f[74];
    return p
  }
  let wt = Math.max(0, kt),
    z, it, at;
  if (f[75] !== wt || f[76] !== v || f[77] !== xt) {
    let lt = 0;
    it = "";
    at = "";
    z = "";
    for (const {
        segment: bt,
        width: Rt
      }
      of v) {
      if (lt + Rt <= wt) it = it + bt;
      else if (lt > xt) z = z + bt;
      else at = at + bt;
      lt = lt + Rt
    }
    f[75] = wt, f[76] = v, f[77] = xt, f[78] = z, f[79] = it, f[80] = at
  } else z = f[78], it = f[79], at = f[80];
  let b;
  if (f[81] !== it || f[82] !== o) b = it && e(n, {
    color: o,
    children: it
  }), f[81] = it, f[82] = o, f[83] = b;
  else b = f[83];
  let d;
  if (f[84] !== at || f[85] !== h) d = e(n, {
    color: h,
    children: at
  }), f[84] = at, f[85] = h, f[86] = d;
  else d = f[86];
  let p;
  if (f[87] !== z || f[88] !== o) p = z && e(n, {
    color: o,
    children: z
  }), f[87] = z, f[88] = o, f[89] = p;
  else p = f[89];
  let R;
  if (f[90] !== o) R = e(n, {
    color: o,
    children: " "
  }), f[90] = o, f[91] = R;
  else R = f[91];
  let Ct;
  if (f[92] !== b || f[93] !== d || f[94] !== p || f[95] !== R) Ct = r(Q, {
    children: [b, d, p, R]
  }), f[92] = b, f[93] = d, f[94] = p, f[95] = R, f[96] = Ct;
  else Ct = f[96];
  return Ct
}
B();

function He() {
  return {
    toolWindowStart: null,
    toolWindowEnd: null,
    thinkingBurstStart: null,
    wasThinking: !1
  }
}

function Ue(l, t) {
  let {
    toolWindowStart: u,
    toolWindowEnd: o,
    thinkingBurstStart: m
  } = l;
  if (t.hasActiveTools) {
    if (u === null || o !== null) u = t.now;
    o = null
  } else if (u !== null && o === null) o = t.now;
  if (!t.hasActiveTools && t.thinkingStatus !== null) u = null, o = null;
  if (t.isThinking) {
    if (!l.wasThinking) m = t.now
  } else m = null;
  return {
    toolWindowStart: u,
    toolWindowEnd: o,
    thinkingBurstStart: m,
    wasThinking: t.isThinking
  }
}

function Fe(l, t) {
  if (t.showToolCallTimer && t.hasActiveTools && l.toolWindowStart !== null) {
    let u = t.now - l.toolWindowStart;
    if (u >= 2000) return {
      kind: "tool-running",
      toolMs: u
    }
  }
  if (t.outputLimitRecovery !== null && !t.hasActiveTools) return {
    kind: "recovering",
    recovery: t.outputLimitRecovery
  };
  if (t.showToolCallTimer && !t.hasActiveTools && t.thinkingStatus === null && l.toolWindowStart !== null && l.toolWindowEnd !== null) {
    let u = l.toolWindowEnd - l.toolWindowStart;
    if (u >= 2000) return {
      kind: "tool-done",
      toolMs: u
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

function Ke(l, t) {
  if (t.hasActiveTools) return 0;
  if (!t.isThinking || l.thinkingBurstStart === null) return 0;
  let u = t.now - l.thinkingBurstStart;
  return Math.min(Math.max((u - 1e4) / 1e4, 0), 1)
}
B();

function qe(l, t, u = !1, o = !1, m) {
  let g = A(l),
    h = A(t),
    x = A(0),
    I = A(l),
    M = A(m);
  if (t > h.current || M.current !== m) M.current = m, g.current = l, h.current = t, x.current = 0, I.current = l;
  else if (t < h.current) h.current = t;
  let _;
  if (u) _ = 0, g.current = l;
  else _ = l - g.current;
  let L = _ > 1e4 && !u,
    f = L ? Math.min((_ - 1e4) / 1e4, 1) : 0;
  if (!o && (f > 0 || x.current > 0)) {
    let j = l - I.current;
    if (j >= 50) {
      let N = Math.floor(j / 50),
        T = x.current;
      for (let v = 0; v < N; v++) {
        let k = f - T;
        if (Math.abs(k) < 0.01) {
          T = f;
          break
        }
        T += k * 0.1
      }
      x.current = T, I.current = l
    }
  } else x.current = f, I.current = l;
  let C = o ? f : x.current;
  return {
    isStalled: L,
    stalledIntensity: C,
    timeSinceLastToken: _
  }
}
var Fn = [1e4, 45000, 300000],
  Kn = 2000,
  qn = 2000,
  zn = 200,
  le = 10,
  Yn = 1e4,
  Jn = 20000,
  Qn = 30000,
  Zn = 45000;

function Xn(l) {
  let t = OLe(l, qn);
  return Math.round(t * (qwn().length - 1))
}

function to(l) {
  return `thought for ${Math.max(1,Math.round(l/1000))}s`
}

function eo({
  attempt: l,
  limit: t
}) {
  return l > 1 ? `picking the thought back up (${l} of ${t})` : "picking the thought back up"
}

function no(l) {
  if (l >= Zn) return "deep in thought";
  if (l >= Qn) return "thinking some more";
  if (l >= Jn) return "thinking more";
  if (l >= Yn) return "still thinking";
  return "thinking"
}

function oo(l) {
  return ER((Math.sin(l / 1000 * Math.PI) + 1) / 2)
}

function Ye({
  mode: l,
  reducedMotion: t,
  hasActiveTools: u,
  responseLength: o,
  message: m,
  overrideColor: g,
  loadingStartTime: h,
  totalPausedMs: x,
  pauseStartTime: I,
  thinkingStatus: M,
  effortSuffix: _,
  isCompacting: L,
  compactingStartTime: f,
  showToolCallTimer: C,
  outputLimitRecovery: j = null,
  agentId: N,
  glimmerParked: T = !1
}) {
  let [v, k] = Aa(t ? null : l === "requesting" && !T ? 50 : 100), O = Date.now(), nt = L && f !== null ? Math.max(0, O - f) : I !== null ? I - h - x : O - h - x, Y = A(He()), W = {
    now: O,
    isThinking: l === "thinking",
    hasActiveTools: u,
    thinkingStatus: M,
    showToolCallTimer: C,
    outputLimitRecovery: j
  };
  Y.current = Ue(Y.current, W);
  let d = Fe(Y.current, W),
    p = Ke(Y.current, W),
    R = o,
    Mt = u || l === "thinking" || L && l !== "responding" || I !== null,
    {
      isStalled: H,
      stalledIntensity: St,
      timeSinceLastToken: X
    } = qe(k, R, Mt, t, N),
    K = A(new Set),
    ct = A(0),
    D = A(N);
  if (D.current !== N) D.current = N, K.current = new Set, ct.current = 0;
  if (X === 0) {
    if (K.current.size > 0) i("tengu_spinner_stall_cleared", {
      max_stall_ms: Math.round(ct.current),
      mode: c(l),
      override_color: g != null,
      response_length: R,
      thresholds_fired: K.current.size
    }), K.current = new Set, ct.current = 0
  } else {
    if (X > ct.current) ct.current = X;
    for (let et of Fn)
      if (X >= et && !K.current.has(et)) K.current.add(et), i("tengu_spinner_stalled_ui", {
        threshold_ms: et,
        mode: c(l),
        override_color: g != null,
        time_since_last_token_ms: Math.round(X),
        response_length: R,
        render_loop_dark: X - et > 5000
      })
  }
  let ft = t ? 0 : Xn(k),
    J = l === "requesting" ? 50 : zn,
    gt = Z(() => ie(m), [m]),
    dt = gt + 2 * le,
    ht = Math.floor(k / J),
    Lt = t ? -100 : H ? -100 : l === "requesting" ? ht % dt - le : gt + le - ht % dt,
    At = t ? 0 : l === "tool-use" ? oo(k) : 0,
    pt = A(R),
    rt = A(k),
    kt = A(N);
  if (kt.current !== N || Math.abs(R - pt.current) > Kn) kt.current = N, pt.current = R, rt.current = k;
  if (t) pt.current = R, rt.current = k;
  else {
    let et = Math.floor((k - rt.current) / 50);
    if (et > 0) {
      rt.current += et * 50;
      for (let Et = 0; Et < et; Et++) {
        let yt = R - pt.current;
        if (yt === 0) break;
        let Ot = Math.abs(yt),
          Bt;
        if (Ot < 70) Bt = 3;
        else if (Ot < 200) Bt = Math.max(8, Math.ceil(Ot * 0.15));
        else Bt = 50;
        pt.current = yt > 0 ? Math.min(pt.current + Bt, R) : Math.max(pt.current - Bt, R)
      }
    }
  }
  let xt = pt.current,
    wt = Math.round(xt / 4),
    z = A(0),
    it = A(k);
  if (l !== "thinking" || u) z.current = 0, it.current = k;
  else if (!t && (p > 0 || z.current > 0)) {
    let et = k - it.current;
    if (et >= 50) {
      let Et = Math.floor(et / 50),
        yt = z.current;
      for (let Ot = 0; Ot < Et; Ot++) {
        let Bt = p - yt;
        if (Math.abs(Bt) < 0.01) {
          yt = p;
          break
        }
        yt += Bt * 0.1
      }
      z.current = yt, it.current = k
    }
  } else z.current = p, it.current = k;
  let at = t ? p : z.current,
    lt = rn(nt),
    bt = ie(lt),
    Rt = wt,
    Ct = ei(Rt),
    _t = `${te.arrowDown} ${Ct} tokens`,
    Wt = ie(_t),
    It = d.kind === "thinking" ? no(d.thinkingMs) : "thinking",
    st;
  switch (d.kind) {
    case "tool-running":
      st = `running tool for ${rn(d.toolMs)}`;
      break;
    case "tool-done":
      st = `ran tool for ${rn(d.toolMs)}`;
      break;
    case "recovering":
      st = eo(d.recovery);
      break;
    case "thinking":
      st = `${It}${_}`;
      break;
    case "thought-for":
      st = to(d.thoughtMs);
      break;
    case "none":
      st = null;
      break
  }
  let U = st ? ie(st) : 0;
  return {
    viewportRef: v,
    time: k,
    elapsedMs: nt,
    frame: ft,
    glimmerIndex: Lt,
    flashOpacity: At,
    stalledIntensity: St,
    thinkingIntensity: at,
    statusText: d,
    progressiveThinkingBase: It,
    thinkingText: st,
    thinkingWidth: U,
    timerText: lt,
    timerWidth: bt,
    totalTokens: Rt,
    tokenCount: Ct,
    tokensWidth: Wt,
    glimmerMessageWidth: gt
  }
}

function Je(l) {
  let [t, u] = y(null), o = A(null), m = A([]), g = dn();
  return P(() => {
    if (l === "thinking") {
      if (o.current === null) {
        for (let h of m.current) h();
        m.current = [], o.current = Date.now(), u("thinking")
      }
    } else if (o.current !== null) {
      let h = Date.now() - o.current,
        x = Math.max(0, 2000 - h);
      o.current = null;
      let I = () => {
        u(h), m.current.push(g.setTimeout(() => u(null), 2000))
      };
      if (x > 0) m.current.push(g.setTimeout(I, x));
      else I()
    }
  }, [l, g]), P(() => () => {
    for (let h of m.current) h();
    m.current = []
  }, []), t
}
var ro = ie(" \xB7 "),
  Qe = ie("thinking"),
  io = 16000,
  so = {
    r: 153,
    g: 153,
    b: 153
  },
  ao = {
    r: 185,
    g: 185,
    b: 185
  },
  Xe = 3000,
  lo = 2;

function co(l, t, u) {
  let o = (l - Xe) / 1000,
    m = l < Xe ? 0 : (Math.sin(o * Math.PI * 2 / lo) + 1) / 2,
    g = Py(so, ao, ER(m));
  return Xm(u && t > 0 ? Py(g, u, ER(t)) : g)
}

function ln({
  mode: l,
  reducedMotion: t,
  hasActiveTools: u,
  responseLengthRef: o,
  message: m,
  messageColor: g,
  shimmerColor: h,
  overrideColor: x,
  loadingStartTimeRef: I,
  totalPausedMsRef: M,
  pauseStartTimeRef: _,
  spinnerSuffix: L,
  verbose: f,
  columns: C,
  thinkingStatus: j,
  effortSuffix: N,
  isCompacting: T = !1,
  compactingStartTime: v = null,
  showToolCallTimer: k = !1,
  retryStatus: O = null,
  outputLimitRecovery: b = null,
  agentId: nt
}) {
  let Y = Ye({
      mode: l,
      reducedMotion: t,
      hasActiveTools: u,
      responseLength: o.current,
      message: m,
      overrideColor: x,
      loadingStartTime: I.current,
      totalPausedMs: M.current,
      pauseStartTime: _.current,
      thinkingStatus: j,
      effortSuffix: N,
      isCompacting: T,
      compactingStartTime: v,
      showToolCallTimer: k,
      outputLimitRecovery: b,
      agentId: nt
    }),
    W = ew(),
    d = ot(),
    p = $w(f),
    {
      viewportRef: R,
      time: Mt,
      elapsedMs: H,
      frame: St,
      glimmerIndex: X,
      flashOpacity: K,
      stalledIntensity: ct,
      thinkingIntensity: D,
      statusText: ft,
      progressiveThinkingBase: J,
      timerText: gt,
      timerWidth: dt,
      totalTokens: ht,
      tokenCount: Lt,
      tokensWidth: At,
      glimmerMessageWidth: pt
    } = Y,
    {
      thinkingText: rt,
      thinkingWidth: kt
    } = Y,
    xt = pt + 2,
    wt = ro,
    z = rt !== null,
    it = f || z || T || ht > 0 || H > io || Boolean(L),
    at = C - xt - 5,
    lt = z && at > kt;
  if (!lt && z && ft.kind === "thinking" && (N || J !== "thinking")) {
    if (at > Qe) rt = "thinking", kt = Qe, lt = !0
  }
  let bt = lt ? kt + wt : 0,
    Rt = it && at > bt + dt,
    Ct = bt + (Rt ? dt + wt : 0),
    _t = it && ht > 0 && at > Ct + At,
    Wt = lt && ft.kind === "thinking" && !L && !Rt && !_t,
    It = D > 0 ? yS(W.warning) : null,
    st = co(Mt, D, It),
    U = !It && D > 0.5 ? "warning" : void 0,
    et = D > 0 ? "warning" : void 0,
    Et = [...L ? [e(n, {
      dimColor: !0,
      children: L
    }, "suffix")] : [], ...!d && Rt ? [e(n, {
      dimColor: !0,
      children: gt
    }, "elapsedTime")] : [], ...!d && _t ? [r(s, {
      flexDirection: "row",
      children: [e(cn, {
        mode: l
      }), r(n, {
        dimColor: !0,
        children: [Lt, " tokens"]
      })]
    }, "tokens")] : [], ...!d && lt && rt ? [ft.kind === "thinking" && !t ? e(n, {
      color: U ?? st,
      children: Wt ? `(${rt})` : rt
    }, "thinking") : e(n, {
      dimColor: !et,
      color: et,
      children: rt
    }, "thinking")] : []],
    yt = Et.length > 0 ? Wt ? e(Se, {
      children: Et
    }) : r(Q, {
      children: [e(n, {
        dimColor: !0,
        children: "("
      }), e(Se, {
        children: Et
      }), e(n, {
        dimColor: !0,
        children: ")"
      })]
    }) : null;
  if (T && O === null && p) return e(s, {
    ref: R,
    flexDirection: "column",
    marginTop: 1,
    width: "100%",
    children: e(Zt, {
      tone: "dim",
      text: m.replace(/\u2026$/, "")
    })
  });
  return e(s, {
    ref: R,
    flexDirection: "column",
    width: "100%",
    children: e(s, {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 1,
      width: "100%",
      children: O ? e(_Sn, {
        status: O,
        columns: C
      }) : r(Q, {
        children: [e(rce, {
          frame: St,
          messageColor: g,
          stalledIntensity: x ? 0 : ct,
          thinkingIntensity: x ? 0 : D,
          reducedMotion: t,
          time: Mt
        }), e(t2t, {
          message: m,
          mode: l,
          messageColor: g,
          glimmerIndex: X,
          flashOpacity: K,
          shimmerColor: h,
          stalledIntensity: x ? 0 : ct,
          thinkingIntensity: x ? 0 : D
        }), yt]
      })
    })
  })
}

function _Sn(l) {
  let m = w(57),
    {
      status: t,
      columns: u
    } = l,
    o = Math.max(0, Math.ceil((t.deadline - Date.now()) / 1000)) * 1000,
    g;
  if (m[0] !== t.kind) g = t.kind === "low_priority_waiting" ? B9().waitBanner : null, m[0] = t.kind, m[1] = g;
  else g = m[1];
  let h = g;
  const x = o >= 300000;
  let I;
  if (m[2] !== o || m[3] !== x) I = rn(o, {
    mostSignificantOnly: x
  }), m[2] = o, m[3] = x, m[4] = I;
  else I = m[4];
  let M = I,
    _;
  if (m[5] === S) _ = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: "error",
      children: oR
    })
  }), m[5] = _;
  else _ = m[5];
  let L = _;
  if (t.kind === "stalled") {
    let f;
    if (m[6] === S) f = e(n, {
      color: "error",
      children: "Waiting for API response"
    }), m[6] = f;
    else f = m[6];
    let C;
    if (m[7] !== M) C = r(Q, {
      children: [L, r(s, {
        flexShrink: 1,
        children: [f, r(n, {
          dimColor: !0,
          children: [" \xB7 will retry in ", M, " \xB7 check your network"]
        })]
      })]
    }), m[7] = M, m[8] = C;
    else C = m[8];
    return C
  }
  if (t.kind === "low_priority_waiting") {
    let j = ` \xB7 next try in ${M} \xB7 attempt ${t.attempt} \xB7 esc to interrupt`;
    let N = Math.max(10, u - 2 - ie(j) - 2);
    let f;
    if (m[9] === S) f = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: "warning",
        children: oR
      })
    }), m[9] = f;
    else f = m[9];
    const C = h ?? "";
    let T;
    if (m[10] !== N || m[11] !== C) T = mt(C, N), m[10] = N, m[11] = C, m[12] = T;
    else T = m[12];
    let v;
    if (m[13] !== T) v = e(n, {
      color: "warning",
      children: T
    }), m[13] = T, m[14] = v;
    else v = m[14];
    let k;
    if (m[15] !== j) k = e(n, {
      dimColor: !0,
      children: j
    }), m[15] = j, m[16] = k;
    else k = m[16];
    let O;
    if (m[17] !== v || m[18] !== k) O = r(Q, {
      children: [f, r(s, {
        flexShrink: 1,
        children: [v, k]
      })]
    }), m[17] = v, m[18] = k, m[19] = O;
    else O = m[19];
    return O
  }
  if (t.kind === "auto_mode_unavailable") {
    let f;
    if (m[20] === S) f = e(n, {
      color: "error",
      children: "Auto mode check unavailable"
    }), m[20] = f;
    else f = m[20];
    const C = ` \xB7 next try in ${M} \xB7 attempt ${t.attempt}/${t.maxRetries} \xB7 `;
    let T;
    if (m[21] === S) T = e(q, {
      chord: "escape",
      action: "interrupt",
      format: {
        keyCase: "lower"
      }
    }), m[21] = T;
    else T = m[21];
    let v;
    if (m[22] !== C) v = r(Q, {
      children: [L, r(s, {
        flexShrink: 1,
        children: [f, r(n, {
          dimColor: !0,
          children: [C, T]
        })]
      })]
    }), m[22] = C, m[23] = v;
    else v = m[23];
    return v
  }
  let b = t.error.noResponse;
  if (b) {
    let nt = t.attempt >= t.maxRetries;
    let f;
    if (m[24] !== b.retryWaitMs) f = uR(b.retryWaitMs), m[24] = b.retryWaitMs, m[25] = f;
    else f = m[25];
    let Y = f;
    let W = nt ? ` \xB7 retrying once, waiting up to ${Y}` : ` \xB7 retrying, waiting up to ${Y} \xB7 attempt ${t.attempt}/${t.maxRetries}`;
    let d = Math.max(10, u - 2 - ie(W) - 2);
    let C;
    if (m[26] !== b.waitedMs) C = uR(b.waitedMs), m[26] = b.waitedMs, m[27] = C;
    else C = m[27];
    const T = `No response from the API after ${C}`;
    let v;
    if (m[28] !== d || m[29] !== T) v = mt(T, d), m[28] = d, m[29] = T, m[30] = v;
    else v = m[30];
    let k;
    if (m[31] !== v) k = e(n, {
      color: "error",
      children: v
    }), m[31] = v, m[32] = k;
    else k = m[32];
    let O;
    if (m[33] !== W) O = e(n, {
      dimColor: !0,
      children: W
    }), m[33] = W, m[34] = O;
    else O = m[34];
    let p;
    if (m[35] !== O || m[36] !== k) p = r(s, {
      children: [k, O]
    }), m[35] = O, m[36] = k, m[37] = p;
    else p = m[37];
    let R;
    if (m[38] === S) R = e(n, {
      dimColor: !0,
      children: "A proxy or gateway that buffers streaming responses can cause this \xB7 set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait"
    }), m[38] = R;
    else R = m[38];
    let Mt;
    if (m[39] !== p) Mt = r(Q, {
      children: [L, r(s, {
        flexBasis: 0,
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        children: [p, R]
      })]
    }), m[39] = p, m[40] = Mt;
    else Mt = m[40];
    return Mt
  }
  let H = t.error.rateLimits,
    f;
  if (m[41] !== H) f = H?.resetsAt ? ` (${eP(H.resetsAt)})` : "", m[41] = H, m[42] = f;
  else f = m[42];
  let X = ` \xB7 Retrying in ${M}${f} \xB7 attempt ${t.attempt}/${t.maxRetries}`,
    K = t.attempt >= Math.min(3, t.maxRetries) || t.error.isNetworkDown || t.error.connection?.isSSLError || H,
    C;
  if (m[43] !== H || m[44] !== K || m[45] !== t.error.formatted) {
    let ct = H?.rateLimitType ? bMt(H.rateLimitType) : "usage limit";
    C = !K ? Nwn : H ? `${ct[0]?.toUpperCase()}${ct.slice(1)} reached` : t.error.formatted;
    m[43] = H, m[44] = K, m[45] = t.error.formatted, m[46] = C
  } else C = m[46];
  let D = C,
    ft = Math.max(10, u - 2 - ie(X) - 2),
    T;
  if (m[47] !== ft || m[48] !== D) T = mt(D, ft), m[47] = ft, m[48] = D, m[49] = T;
  else T = m[49];
  let J = T,
    v;
  if (m[50] !== J) v = e(n, {
    color: "error",
    children: J
  }), m[50] = J, m[51] = v;
  else v = m[51];
  let k;
  if (m[52] !== X) k = e(n, {
    dimColor: !0,
    children: X
  }), m[52] = X, m[53] = k;
  else k = m[53];
  let O;
  if (m[54] !== v || m[55] !== k) O = r(Q, {
    children: [L, r(s, {
      flexShrink: 1,
      children: [v, k]
    })]
  }), m[54] = v, m[55] = k, m[56] = O;
  else O = m[56];
  return O
}

function cn(l) {
  let u = w(2),
    {
      mode: t
    } = l;
  switch (t) {
    case "tool-input":
    case "tool-use":
    case "responding":
    case "thinking": {
      let o;
      if (u[0] === S) o = e(s, {
        width: 2,
        children: e(n, {
          "aria-hidden": !0,
          dimColor: !0,
          children: te.arrowDown
        })
      }), u[0] = o;
      else o = u[0];
      return o
    }
    case "requesting": {
      let o;
      if (u[1] === S) o = e(s, {
        width: 2,
        children: e(n, {
          "aria-hidden": !0,
          dimColor: !0,
          children: te.arrowUp
        })
      }), u[1] = o;
      else o = u[1];
      return o
    }
  }
}

function lr(d) {
  return d.isBriefOnly
}

function cr(p) {
  return p.viewingAgentTaskId
}

function mr(L) {
  return L.settings.prefersReducedMotion
}
var ke = /(\u2026|\.\.\.)$/,
  $t = "\u2026";

function ftr(l) {
  let T = w(22),
    {
      mode: t,
      overrideMessage: u,
      overrideColor: o,
      overrideShimmerColor: m,
      isCompacting: g,
      compactingHintText: h,
      compactingStartTime: x,
      turnEffort: I,
      turnModel: M,
      retryStatus: _,
      outputLimitRecovery: L,
      defaultVerb: f
    } = m4r(l.agentId),
    C = V(lr),
    j = V(cr),
    N = a.CLAUDE_CODE_BRIEF,
    v, k;
  if (T[0] !== f || T[1] !== t || T[2] !== u || T[3] !== l.agentId) v = () => ({
    requestId: l.agentId ?? "main",
    props: {
      word: f,
      message: u,
      suffix: $t,
      mode: t
    }
  }), k = [l.agentId, f, u, t], T[0] = f, T[1] = t, T[2] = u, T[3] = l.agentId, T[4] = v, T[5] = k;
  else v = T[4], k = T[5];
  let O = $d.useRenderInput("Spinner", v, k),
    b;
  if (T[6] !== C || T[7] !== j) b = QW() && (N || E("tengu_kairos_brief", !1)) && C && !j, T[6] = C, T[7] = j, T[8] = b;
  else b = T[8];
  let nt = b,
    Y;
  if (T[9] !== nt || T[10] !== h || T[11] !== x || T[12] !== g || T[13] !== t || T[14] !== L || T[15] !== o || T[16] !== m || T[17] !== l || T[18] !== _ || T[19] !== I || T[20] !== M) Y = (W) => nt ? e(_n, {
    mode: t,
    overrideMessage: W.props.message
  }) : e(Cn, {
    ...l,
    mode: t,
    overrideMessage: W.props.message,
    overrideColor: o,
    overrideShimmerColor: m,
    isCompacting: g,
    compactingHintText: h,
    compactingStartTime: x,
    turnEffort: I,
    turnModel: M,
    retryStatus: _,
    outputLimitRecovery: L,
    defaultVerb: W.props.word,
    suffix: W.props.suffix ?? $t
  }), T[9] = nt, T[10] = h, T[11] = x, T[12] = g, T[13] = t, T[14] = L, T[15] = o, T[16] = m, T[17] = l, T[18] = _, T[19] = I, T[20] = M, T[21] = Y;
  else Y = T[21];
  return $d.useRenderHook(O, Y)
}

function Cn({
  mode: l,
  loadingStartTimeRef: t,
  totalPausedMsRef: u,
  pauseStartTimeRef: o,
  responseLengthRef: m,
  overrideColor: g,
  overrideShimmerColor: h,
  overrideMessage: x,
  isCompacting: I,
  compactingHintText: M,
  compactingStartTime: _,
  spinnerSuffix: L,
  verbose: f,
  hasActiveTools: C = !1,
  turnEffort: j,
  turnModel: N,
  retryStatus: T,
  outputLimitRecovery: v,
  defaultVerb: k,
  suffix: O,
  agentId: b
}) {
  let nt = hd(),
    Y = ot(),
    W = sh(nt.prefersReducedMotion) || Y,
    d = V((U) => U.spinnerTip),
    p = V((U) => U.spinnerTipLabel),
    R = V((U) => U.briefTranscript),
    Mt = V((U) => U.expandedView) === "tasks",
    H = Te(),
    St = $w(f) ? Xye : 0,
    X = Math.max(1, H.columns - St),
    K = lce(),
    ct = Je(l),
    D = b === void 0 || b === Ze(),
    ft = D ? K?.find((U) => U.status !== "pending" && U.status !== "completed") : void 0,
    J = D ? ar(K) : void 0,
    [gt] = y(() => y1(W2t()) ?? "Working"),
    dt = ft ? [ft.activeForm, ft.subject].map((U) => U?.replace(/\s+/g, " ").trim()).find(Boolean) : void 0,
    ht = x ?? (dt === void 0 ? void 0 : ybt(dt, X)) ?? (k || gt),
    At = O === $t && ke.test(ht) ? ht : ht + O;
  P(() => {
    let U = "spinner-" + l;
    return wV.startCLIActivity(U), () => {
      wV.endCLIActivity(U)
    }
  }, [l]);
  let pt = Cb(),
    rt = rin(N ?? tt(), pt, j ?? void 0),
    kt = o.current !== null ? o.current - t.current - u.current : Date.now() - t.current - u.current,
    xt = "claude",
    wt = "claudeShimmer",
    z = g ?? xt,
    it = h ?? wt,
    at = E("tengu_shining_fractals", !1),
    lt = !1,
    bt = nt.spinnerTipsEnabled !== !1,
    Rt = bt && kt > 1800000,
    Ct = bt && kt > 30000 && !ue().btwUseCount,
    _t = lt ? d : SRe() ? d : Rt && !J ? "Use /clear to start fresh when switching topics and free up context" : Ct && !J ? "Use /btw to ask a quick side question without interrupting Claude's current work" : d,
    It = J ? `Next: ${J.subject.replace(/\s+/g," ").trim()}` : d === YEn && R ? FZo : _t ? `${_t===d&&p?p:"Tip"}: ${_t}` : void 0,
    st;
  if (T?.kind === "retrying") {
    let U = T.error.status === 529 || T.error.formatted.toLowerCase().includes("overload"),
      et = T.attempt >= Math.min(3, T.maxRetries);
    if (U && et) st = chr().trim()
  }
  return r(s, {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    paddingLeft: St,
    children: [e(ln, {
      mode: l,
      reducedMotion: W,
      hasActiveTools: C,
      responseLengthRef: m,
      message: At,
      messageColor: z,
      shimmerColor: it,
      overrideColor: g,
      loadingStartTimeRef: t,
      totalPausedMsRef: u,
      pauseStartTimeRef: o,
      spinnerSuffix: L,
      verbose: f,
      columns: X,
      thinkingStatus: ct,
      effortSuffix: rt,
      isCompacting: I,
      compactingStartTime: _,
      showToolCallTimer: at,
      retryStatus: T,
      outputLimitRecovery: v,
      agentId: b
    }), D && Mt && K && K.length > 0 ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(ze, {
        children: e(gtr, {
          tasks: K
        })
      })
    }) : I && M ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(ze, {
        children: e(n, {
          dimColor: !0,
          children: M
        })
      })
    }) : T ? st ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(ze, {
        children: e(n, {
          dimColor: !0,
          children: st
        })
      })
    }) : null : It ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(ze, {
        children: e(n, {
          dimColor: !0,
          wrap: J ? "truncate-end" : "wrap",
          children: It
        })
      })
    }) : null]
  })
}
var vt = 2,
  jt = 3,
  er = 12,
  nr = 1;

function Qt(l, t, u) {
  let o = t > 0 ? `${t} in background` : "",
    m = l - vt - jt,
    g = m - (o ? 1 + ie(o) : 0);
  if (o && g < (u ? er : nr)) return {
    labelBudget: m,
    rightText: ""
  };
  return {
    labelBudget: g,
    rightText: o
  }
}

function _n({
  mode: l,
  overrideMessage: t
}) {
  let u = hd(),
    o = ot(),
    m = sh(u.prefersReducedMotion) || o,
    [g] = y(() => y1(W2t()) ?? "Working"),
    h = V((p) => p.remoteConnectionStatus);
  P(() => {
    let p = "spinner-" + l;
    return wV.startCLIActivity(p), () => {
      wV.endCLIActivity(p)
    }
  }, [l]);
  let [, x] = Aa(m ? null : 120), I = V((p) => F(Object.values(p.tasks), Ph) + p.remoteBackgroundTasks.length), M = h === "reconnecting" || h === "disconnected", {
    columns: _
  } = Te(), {
    labelBudget: L,
    rightText: f
  } = Qt(_, I, M), C = mt(t ?? g, L), j = mt(h === "reconnecting" ? "Reconnecting" : "Disconnected", L), N = M ? j : C, T = Math.floor(x / 300) % 3, v = m ? ke.test(N) ? "   " : "\u2026  " : ".".repeat(T + 1).padEnd(3), k = Z(() => ie(C), [C]), O = m || M ? -100 : Gqr(Math.floor(x / zqr), k), {
    before: b,
    shimmer: nt,
    after: Y
  } = mvt(C, O), W = (M ? ie(j) : k) + jt, d = Math.max(1, _ - vt - W - ie(f));
  return r(s, {
    flexDirection: "row",
    width: "100%",
    marginTop: 1,
    paddingLeft: vt,
    children: [M ? e(n, {
      color: "error",
      children: j + v
    }) : r(Q, {
      children: [b ? e(n, {
        dimColor: !0,
        children: b
      }) : null, nt ? e(n, {
        children: nt
      }) : null, Y ? e(n, {
        dimColor: !0,
        children: Y
      }) : null, e(n, {
        dimColor: !0,
        children: v
      })]
    }), f ? r(Q, {
      children: [e(n, {
        children: " ".repeat(d)
      }), e(n, {
        color: "subtle",
        children: f
      })]
    }) : null]
  })
}

function wqr() {
  let l = V((_) => _.remoteConnectionStatus),
    t = V((_) => F(Object.values(_.tasks), Ph) + _.remoteBackgroundTasks.length),
    {
      columns: u
    } = Te(),
    o = l === "reconnecting" || l === "disconnected",
    {
      labelBudget: m,
      rightText: g
    } = Qt(u, t, o),
    h = l === "reconnecting" ? 1 : 0,
    x = mt(l === "reconnecting" ? "Reconnecting" : "Disconnected", m + jt - h),
    I = !o ? "" : l === "reconnecting" && !x.endsWith("\u2026") ? x + "\u2026" : x;
  if (!I && !g) return e(s, {
    height: 2
  });
  let M = Math.max(1, u - vt - ie(I) - ie(g));
  return e(s, {
    marginTop: 1,
    paddingLeft: vt,
    children: r(n, {
      children: [I ? e(n, {
        color: "error",
        children: I
      }) : null, g ? r(Q, {
        children: [e(n, {
          children: " ".repeat(M)
        }), e(n, {
          color: "subtle",
          children: g
        })]
      }) : null]
    })
  })
}

function Ii() {
  let m = w(9),
    l = ot(),
    t = sh(Fo(mr)) || l,
    [u, o] = Aa(t ? null : 120);
  if (t) {
    let g;
    if (m[0] === S) g = e(n, {
      color: "text",
      children: "\u25CF"
    }), m[0] = g;
    else g = m[0];
    let h;
    if (m[1] !== u) h = e(s, {
      ref: u,
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: g
    }), m[1] = u, m[2] = h;
    else h = m[2];
    return h
  }
  let g;
  if (m[3] === S) g = PLe(), m[3] = g;
  else g = m[3];
  let x = g,
    I = Math.floor(o / 120) % x.length;
  const h = x[I];
  let M;
  if (m[4] !== h) M = e(n, {
    color: "text",
    children: h
  }), m[4] = h, m[5] = M;
  else M = m[5];
  let _;
  if (m[6] !== u || m[7] !== M) _ = e(s, {
    ref: u,
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: M
  }), m[6] = u, m[7] = M, m[8] = _;
  else _ = m[8];
  return _
}

function s5o({
  entries: l,
  responseLength: t,
  event: u
}) {
  if (u.type === "start") return l.push({
    id: u.id,
    ttftMs: u.ttftMs,
    firstTokenTime: Date.now(),
    lastTokenTime: Date.now(),
    responseLengthBaseline: t,
    endResponseLength: t
  }), t;
  let o = u.id != null ? l.find((m) => m.id === u.id) : l.findLast((m) => m.id == null);
  if (!o) return t;
  if (u.type === "content_block_start") return o.thinkingTokenEstimate = 0, o.thinkingBlockBaseline = t, o.sawEstimatedTokensThisBlock = !1, t;
  if (u.type === "thinking_progress") {
    if (o.sawEstimatedTokensThisBlock = !0, o.thinkingTokenEstimate = (o.thinkingTokenEstimate ?? 0) + u.estimatedTokensDelta, o.outputTokens == null && u.id == null) {
      let m = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
      return Math.max(t, m + o.thinkingTokenEstimate * 4)
    }
    return t
  }
  if (u.type === "thinking_signature") {
    if (u.chars > 0 && o.outputTokens == null) {
      if (o.lastTokenTime = Date.now(), o.sawEstimatedTokensThisBlock) {
        o.thinkingTokenEstimate = Math.max(o.thinkingTokenEstimate ?? 0, Math.ceil(u.chars / 4));
        let g = o.thinkingBlockBaseline ?? o.responseLengthBaseline,
          h = Math.max(t, g + o.thinkingTokenEstimate * 4);
        return o.endResponseLength = h, h
      }
      let m = t + u.chars;
      return o.endResponseLength = m, m
    }
    return t
  }
  if (o.outputTokens = u.outputTokens, o.lastTokenTime = Date.now(), u.id == null) return Math.max(t, o.responseLengthBaseline + u.outputTokens * 4);
  return t
}

function ar(l) {
  if (!l) return;
  let t = l.filter((o) => o.status === "pending");
  if (t.length === 0) return;
  let u = new Set(l.filter((o) => o.status !== "completed").map((o) => o.id));
  return t.find((o) => !o.blockedBy.some((m) => u.has(m))) ?? t[0]
}
export {
  t2t,
  _Sn,
  ftr,
  wqr,
  Ii,
  s5o
};
