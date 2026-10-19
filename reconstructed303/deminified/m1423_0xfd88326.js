// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F, Ze, QW } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { tt, E, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { ew } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { oR as children_6 } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { mt, ybt, rn, uR, ei, eP } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { B9, bMt } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { s, n, dn, ot, Aa } from "B:/~BUN/root/chunk-damrp3r8.js";
import { f1, kL, $d } from "B:/~BUN/root/chunk-znr767c8.js";
import { Ph } from "B:/~BUN/root/chunk-k382hx6g.js";
import { V, Fo } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { qwn, PLe, ER, OLe, Py, Xm, yS } from "B:/~BUN/root/chunk-mvgarwbg.js";
import { chr } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { rin } from "B:/~BUN/root/chunk-8y0chnnr.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { SRe } from "B:/~BUN/root/chunk-5zqsbvq1.js";
import { wV } from "B:/~BUN/root/chunk-mjmtbepf.js";
import { ze } from "B:/~BUN/root/chunk-yqm8ptb8.js";
import { lce } from "B:/~BUN/root/chunk-nnc7bx19.js";
import { gtr } from "B:/~BUN/root/chunk-q2gcsksm.js";
import { y1, W2t, Nwn, m4r } from "B:/~BUN/root/chunk-cztbaswn.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Yye, $w } from "B:/~BUN/root/chunk-x2fwa42c.js";
import { Cb, Xye } from "B:/~BUN/root/chunk-hgn6pbq9.js";
import { rce } from "B:/~BUN/root/chunk-tajz9s25.js";
import { hd } from "B:/~BUN/root/chunk-q6bapw2s.js";
import { zqr, Gqr, mvt } from "B:/~BUN/root/chunk-vm6z21pz.js";
import { sh, Vu } from "B:/~BUN/root/chunk-44n8zjk2.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { YEn, FZo } from "B:/~BUN/root/chunk-520acb4b.js";
import { P, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ua } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { S, yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
var Vt = 150;
function Zt(l) {
  let M = w(8),
    {
      tone: tone,
      text: text
    } = l,
    o = Vu(),
    m = ot(),
    reducedMotion = o || m,
    [ref, x] = Aa(reducedMotion ? null : Vt);
  const frame = Math.floor(x / Vt);
  let children;
  if (M[0] !== reducedMotion || M[1] !== frame || M[2] !== text || M[3] !== tone) children = e(Yye, {
    state: "live",
    tone: tone,
    text: text,
    linkify: !1,
    frame: frame,
    reducedMotion: reducedMotion
  }), M[0] = reducedMotion, M[1] = frame, M[2] = text, M[3] = tone, M[4] = children;else children = M[4];
  let L;
  if (M[5] !== ref || M[6] !== children) L = e(s, {
    ref: ref,
    flexDirection: "column",
    children: children
  }), M[5] = ref, M[6] = children, M[7] = L;else L = M[7];
  return L;
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
      mode: mode,
      messageColor: o,
      glimmerIndex: glimmerIndex,
      flashOpacity: flashOpacity,
      shimmerColor: h,
      stalledIntensity: stalledIntensity,
      thinkingIntensity: thinkingIntensity
    } = l,
    M = stalledIntensity === void 0 ? 0 : stalledIntensity,
    _ = thinkingIntensity === void 0 ? 0 : thinkingIntensity,
    L = ew(),
    segments;
  if (f[0] !== t) {
    segments = [];
    for (const {
      segment: segment
    } of ua().segment(t)) segments.push({
      segment: segment,
      width: ie(segment)
    });
    f[0] = t, f[1] = segments;
  } else segments = f[1];
  let messageWidth;
  if (f[2] !== t) messageWidth = ie(t), f[2] = t, f[3] = messageWidth;else messageWidth = f[3];
  let T;
  if (f[4] !== segments || f[5] !== messageWidth) T = {
    segments: segments,
    messageWidth: messageWidth
  }, f[4] = segments, f[5] = messageWidth, f[6] = T;else T = f[6];
  let {
    segments: segments_2,
    messageWidth: messageWidth_2
  } = T;
  if (!t) {
    return null;
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
          let color = Xm(Y);
          let d;
          if (f[11] !== color || f[12] !== t) d = e(n, {
            color: color,
            children: t
          }), f[11] = color, f[12] = t, f[13] = d;else d = f[13];
          let p;
          if (f[14] !== color) p = e(n, {
            color: color,
            children: " "
          }), f[14] = color, f[15] = p;else p = f[15];
          let R;
          if (f[16] !== d || f[17] !== p) R = r(Q, {
            children: [d, p]
          }), f[16] = d, f[17] = p, f[18] = R;else R = f[18];
          b = R;
          break Mt;
        }
      }
      f[7] = O, f[8] = t, f[9] = M, f[10] = b;
    } else b = f[10];
    if (b !== yn) return b;
    let color_2 = M > 0.5 ? "error" : o;
    let d;
    if (f[19] !== color_2 || f[20] !== t) d = e(n, {
      color: color_2,
      children: t
    }), f[19] = color_2, f[20] = t, f[21] = d;else d = f[21];
    let p;
    if (f[22] !== color_2) p = e(n, {
      color: color_2,
      children: " "
    }), f[22] = color_2, f[23] = p;else p = f[23];
    let R;
    if (f[24] !== d || f[25] !== p) R = r(Q, {
      children: [d, p]
    }), f[24] = d, f[25] = p, f[26] = R;else R = f[26];
    return R;
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
          let color_3 = Xm(ct);
          let d;
          if (f[32] !== color_3 || f[33] !== t) d = e(n, {
            color: color_3,
            children: t
          }), f[32] = color_3, f[33] = t, f[34] = d;else d = f[34];
          let p;
          if (f[35] !== color_3) p = e(n, {
            color: color_3,
            children: " "
          }), f[35] = color_3, f[36] = p;else p = f[36];
          let R;
          if (f[37] !== d || f[38] !== p) R = r(Q, {
            children: [d, p]
          }), f[37] = d, f[38] = p, f[39] = R;else R = f[39];
          b = R;
          break ft;
        }
      }
      f[27] = St, f[28] = t, f[29] = L.warning, f[30] = _, f[31] = b;
    } else b = f[31];
    if (b !== yn) return b;
    let color_4 = _ > 0.5 ? "warning" : o;
    let d;
    if (f[40] !== color_4 || f[41] !== t) d = e(n, {
      color: color_4,
      children: t
    }), f[40] = color_4, f[41] = t, f[42] = d;else d = f[42];
    let p;
    if (f[43] !== color_4) p = e(n, {
      color: color_4,
      children: " "
    }), f[43] = color_4, f[44] = p;else p = f[44];
    let R;
    if (f[45] !== d || f[46] !== p) R = r(Q, {
      children: [d, p]
    }), f[45] = d, f[46] = p, f[47] = R;else R = f[47];
    return R;
  }
  if (mode === "tool-use") {
    let gt = L[o];
    let dt = L[h];
    let b;
    if (f[48] !== gt || f[49] !== flashOpacity || f[50] !== t || f[51] !== o || f[52] !== dt) {
      b = yn;
      pt: {
        let ht = gt ? yS(gt) : null;
        let Lt = dt ? yS(dt) : null;
        if (ht && Lt) {
          let At = Py(ht, Lt, ER(flashOpacity));
          const d = e(n, {
            color: Xm(At),
            children: t
          });
          let p;
          if (f[54] !== o) p = e(n, {
            color: o,
            children: " "
          }), f[54] = o, f[55] = p;else p = f[55];
          let R;
          if (f[56] !== d || f[57] !== p) R = r(Q, {
            children: [d, p]
          }), f[56] = d, f[57] = p, f[58] = R;else R = f[58];
          b = R;
          break pt;
        }
      }
      f[48] = gt, f[49] = flashOpacity, f[50] = t, f[51] = o, f[52] = dt, f[53] = b;
    } else b = f[53];
    if (b !== yn) return b;
    let color_5 = flashOpacity > 0.5 ? h : o;
    let d;
    if (f[59] !== color_5 || f[60] !== t) d = e(n, {
      color: color_5,
      children: t
    }), f[59] = color_5, f[60] = t, f[61] = d;else d = f[61];
    let p;
    if (f[62] !== o) p = e(n, {
      color: o,
      children: " "
    }), f[62] = o, f[63] = p;else p = f[63];
    let R;
    if (f[64] !== d || f[65] !== p) R = r(Q, {
      children: [d, p]
    }), f[64] = d, f[65] = p, f[66] = R;else R = f[66];
    return R;
  }
  let kt = glimmerIndex - 1,
    xt = glimmerIndex + 1;
  if (kt >= messageWidth_2 || xt < 0) {
    let b;
    if (f[67] !== t || f[68] !== o) b = e(n, {
      color: o,
      children: t
    }), f[67] = t, f[68] = o, f[69] = b;else b = f[69];
    let d;
    if (f[70] !== o) d = e(n, {
      color: o,
      children: " "
    }), f[70] = o, f[71] = d;else d = f[71];
    let p;
    if (f[72] !== b || f[73] !== d) p = r(Q, {
      children: [b, d]
    }), f[72] = b, f[73] = d, f[74] = p;else p = f[74];
    return p;
  }
  let wt = Math.max(0, kt),
    children_4,
    children_2,
    children_3;
  if (f[75] !== wt || f[76] !== segments_2 || f[77] !== xt) {
    let lt = 0;
    children_2 = "";
    children_3 = "";
    children_4 = "";
    for (const {
      segment: segment_2,
      width: width
    } of segments_2) {
      if (lt + width <= wt) children_2 = children_2 + segment_2;else if (lt > xt) children_4 = children_4 + segment_2;else children_3 = children_3 + segment_2;
      lt = lt + width;
    }
    f[75] = wt, f[76] = segments_2, f[77] = xt, f[78] = children_4, f[79] = children_2, f[80] = children_3;
  } else children_4 = f[78], children_2 = f[79], children_3 = f[80];
  let b;
  if (f[81] !== children_2 || f[82] !== o) b = children_2 && e(n, {
    color: o,
    children: children_2
  }), f[81] = children_2, f[82] = o, f[83] = b;else b = f[83];
  let d;
  if (f[84] !== children_3 || f[85] !== h) d = e(n, {
    color: h,
    children: children_3
  }), f[84] = children_3, f[85] = h, f[86] = d;else d = f[86];
  let p;
  if (f[87] !== children_4 || f[88] !== o) p = children_4 && e(n, {
    color: o,
    children: children_4
  }), f[87] = children_4, f[88] = o, f[89] = p;else p = f[89];
  let R;
  if (f[90] !== o) R = e(n, {
    color: o,
    children: " "
  }), f[90] = o, f[91] = R;else R = f[91];
  let Ct;
  if (f[92] !== b || f[93] !== d || f[94] !== p || f[95] !== R) Ct = r(Q, {
    children: [b, d, p, R]
  }), f[92] = b, f[93] = d, f[94] = p, f[95] = R, f[96] = Ct;else Ct = f[96];
  return Ct;
}
B();
function He() {
  return {
    toolWindowStart: null,
    toolWindowEnd: null,
    thinkingBurstStart: null,
    wasThinking: !1
  };
}
function Ue(l, t) {
  let {
    toolWindowStart: toolWindowStart,
    toolWindowEnd: toolWindowEnd,
    thinkingBurstStart: thinkingBurstStart
  } = l;
  if (t.hasActiveTools) {
    if (toolWindowStart === null || toolWindowEnd !== null) toolWindowStart = t.now;
    toolWindowEnd = null;
  } else if (toolWindowStart !== null && toolWindowEnd === null) toolWindowEnd = t.now;
  if (!t.hasActiveTools && t.thinkingStatus !== null) toolWindowStart = null, toolWindowEnd = null;
  if (t.isThinking) {
    if (!l.wasThinking) thinkingBurstStart = t.now;
  } else thinkingBurstStart = null;
  return {
    toolWindowStart: toolWindowStart,
    toolWindowEnd: toolWindowEnd,
    thinkingBurstStart: thinkingBurstStart,
    wasThinking: t.isThinking
  };
}
function Fe(l, t) {
  if (t.showToolCallTimer && t.hasActiveTools && l.toolWindowStart !== null) {
    let toolMs = t.now - l.toolWindowStart;
    if (toolMs >= 2000) return {
      kind: "tool-running",
      toolMs: toolMs
    };
  }
  if (t.outputLimitRecovery !== null && !t.hasActiveTools) return {
    kind: "recovering",
    recovery: t.outputLimitRecovery
  };
  if (t.showToolCallTimer && !t.hasActiveTools && t.thinkingStatus === null && l.toolWindowStart !== null && l.toolWindowEnd !== null) {
    let toolMs_2 = l.toolWindowEnd - l.toolWindowStart;
    if (toolMs_2 >= 2000) return {
      kind: "tool-done",
      toolMs: toolMs_2
    };
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
  };
}
function Ke(l, t) {
  if (t.hasActiveTools) return 0;
  if (!t.isThinking || l.thinkingBurstStart === null) return 0;
  let u = t.now - l.thinkingBurstStart;
  return Math.min(Math.max((u - 1e4) / 1e4, 0), 1);
}
B();
function qe(l, t, u = !1, o = !1, m) {
  let g = A(l),
    h = A(t),
    x = A(0),
    I = A(l),
    M = A(m);
  if (t > h.current || M.current !== m) M.current = m, g.current = l, h.current = t, x.current = 0, I.current = l;else if (t < h.current) h.current = t;
  let timeSinceLastToken;
  if (u) timeSinceLastToken = 0, g.current = l;else timeSinceLastToken = l - g.current;
  let isStalled = timeSinceLastToken > 1e4 && !u,
    f = isStalled ? Math.min((timeSinceLastToken - 1e4) / 1e4, 1) : 0;
  if (!o && (f > 0 || x.current > 0)) {
    let j = l - I.current;
    if (j >= 50) {
      let N = Math.floor(j / 50),
        current = x.current;
      for (let v = 0; v < N; v++) {
        let k = f - current;
        if (Math.abs(k) < 0.01) {
          current = f;
          break;
        }
        current += k * 0.1;
      }
      x.current = current, I.current = l;
    }
  } else x.current = f, I.current = l;
  let stalledIntensity_2 = o ? f : x.current;
  return {
    isStalled: isStalled,
    stalledIntensity: stalledIntensity_2,
    timeSinceLastToken: timeSinceLastToken
  };
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
  return Math.round(t * (qwn().length - 1));
}
function to(l) {
  return `thought for ${Math.max(1, Math.round(l / 1000))}s`;
}
function eo({
  attempt: attempt,
  limit: limit
}) {
  return attempt > 1 ? `picking the thought back up (${attempt} of ${limit})` : "picking the thought back up";
}
function no(l) {
  if (l >= Zn) return "deep in thought";
  if (l >= Qn) return "thinking some more";
  if (l >= Jn) return "thinking more";
  if (l >= Yn) return "still thinking";
  return "thinking";
}
function oo(l) {
  return ER((Math.sin(l / 1000 * Math.PI) + 1) / 2);
}
function Ye({
  mode: mode_2,
  reducedMotion: reducedMotion_2,
  hasActiveTools: hasActiveTools,
  responseLength: responseLength,
  message: message,
  overrideColor: overrideColor,
  loadingStartTime: loadingStartTime,
  totalPausedMs: totalPausedMs,
  pauseStartTime: pauseStartTime,
  thinkingStatus: thinkingStatus,
  effortSuffix: effortSuffix,
  isCompacting: isCompacting,
  compactingStartTime: compactingStartTime,
  showToolCallTimer: showToolCallTimer,
  outputLimitRecovery = null,
  agentId: agentId,
  glimmerParked = !1
}) {
  let [viewportRef, time] = Aa(reducedMotion_2 ? null : mode_2 === "requesting" && !glimmerParked ? 50 : 100),
    now = Date.now(),
    elapsedMs = isCompacting && compactingStartTime !== null ? Math.max(0, now - compactingStartTime) : pauseStartTime !== null ? pauseStartTime - loadingStartTime - totalPausedMs : now - loadingStartTime - totalPausedMs,
    Y = A(He()),
    W = {
      now: now,
      isThinking: mode_2 === "thinking",
      hasActiveTools: hasActiveTools,
      thinkingStatus: thinkingStatus,
      showToolCallTimer: showToolCallTimer,
      outputLimitRecovery: outputLimitRecovery
    };
  Y.current = Ue(Y.current, W);
  let statusText = Fe(Y.current, W),
    p = Ke(Y.current, W),
    response_length = responseLength,
    Mt = hasActiveTools || mode_2 === "thinking" || isCompacting && mode_2 !== "responding" || pauseStartTime !== null,
    {
      isStalled: isStalled_2,
      stalledIntensity: stalledIntensity_3,
      timeSinceLastToken: timeSinceLastToken_2
    } = qe(time, response_length, Mt, reducedMotion_2, agentId),
    K = A(new Set()),
    ct = A(0),
    D = A(agentId);
  if (D.current !== agentId) D.current = agentId, K.current = new Set(), ct.current = 0;
  if (timeSinceLastToken_2 === 0) {
    if (K.current.size > 0) i("tengu_spinner_stall_cleared", {
      max_stall_ms: Math.round(ct.current),
      mode: c(mode_2),
      override_color: overrideColor != null,
      response_length: response_length,
      thresholds_fired: K.current.size
    }), K.current = new Set(), ct.current = 0;
  } else {
    if (timeSinceLastToken_2 > ct.current) ct.current = timeSinceLastToken_2;
    for (let threshold_ms of Fn) if (timeSinceLastToken_2 >= threshold_ms && !K.current.has(threshold_ms)) K.current.add(threshold_ms), i("tengu_spinner_stalled_ui", {
      threshold_ms: threshold_ms,
      mode: c(mode_2),
      override_color: overrideColor != null,
      time_since_last_token_ms: Math.round(timeSinceLastToken_2),
      response_length: response_length,
      render_loop_dark: timeSinceLastToken_2 - threshold_ms > 5000
    });
  }
  let frame_2 = reducedMotion_2 ? 0 : Xn(time),
    J = mode_2 === "requesting" ? 50 : zn,
    glimmerMessageWidth = Z(() => ie(message), [message]),
    dt = glimmerMessageWidth + 2 * le,
    ht = Math.floor(time / J),
    glimmerIndex_2 = reducedMotion_2 ? -100 : isStalled_2 ? -100 : mode_2 === "requesting" ? ht % dt - le : glimmerMessageWidth + le - ht % dt,
    flashOpacity_2 = reducedMotion_2 ? 0 : mode_2 === "tool-use" ? oo(time) : 0,
    pt = A(response_length),
    rt = A(time),
    kt = A(agentId);
  if (kt.current !== agentId || Math.abs(response_length - pt.current) > Kn) kt.current = agentId, pt.current = response_length, rt.current = time;
  if (reducedMotion_2) pt.current = response_length, rt.current = time;else {
    let et = Math.floor((time - rt.current) / 50);
    if (et > 0) {
      rt.current += et * 50;
      for (let Et = 0; Et < et; Et++) {
        let yt = response_length - pt.current;
        if (yt === 0) break;
        let Ot = Math.abs(yt),
          Bt;
        if (Ot < 70) Bt = 3;else if (Ot < 200) Bt = Math.max(8, Math.ceil(Ot * 0.15));else Bt = 50;
        pt.current = yt > 0 ? Math.min(pt.current + Bt, response_length) : Math.max(pt.current - Bt, response_length);
      }
    }
  }
  let current_2 = pt.current,
    wt = Math.round(current_2 / 4),
    z = A(0),
    it = A(time);
  if (mode_2 !== "thinking" || hasActiveTools) z.current = 0, it.current = time;else if (!reducedMotion_2 && (p > 0 || z.current > 0)) {
    let et = time - it.current;
    if (et >= 50) {
      let Et = Math.floor(et / 50),
        current_3 = z.current;
      for (let Ot = 0; Ot < Et; Ot++) {
        let Bt = p - current_3;
        if (Math.abs(Bt) < 0.01) {
          current_3 = p;
          break;
        }
        current_3 += Bt * 0.1;
      }
      z.current = current_3, it.current = time;
    }
  } else z.current = p, it.current = time;
  let thinkingIntensity_2 = reducedMotion_2 ? p : z.current,
    timerText = rn(elapsedMs),
    timerWidth = ie(timerText),
    totalTokens = wt,
    tokenCount = ei(totalTokens),
    _t = `${te.arrowDown} ${tokenCount} tokens`,
    tokensWidth = ie(_t),
    progressiveThinkingBase = statusText.kind === "thinking" ? no(statusText.thinkingMs) : "thinking",
    thinkingText;
  switch (statusText.kind) {
    case "tool-running":
      thinkingText = `running tool for ${rn(statusText.toolMs)}`;
      break;
    case "tool-done":
      thinkingText = `ran tool for ${rn(statusText.toolMs)}`;
      break;
    case "recovering":
      thinkingText = eo(statusText.recovery);
      break;
    case "thinking":
      thinkingText = `${progressiveThinkingBase}${effortSuffix}`;
      break;
    case "thought-for":
      thinkingText = to(statusText.thoughtMs);
      break;
    case "none":
      thinkingText = null;
      break;
  }
  let thinkingWidth = thinkingText ? ie(thinkingText) : 0;
  return {
    viewportRef: viewportRef,
    time: time,
    elapsedMs: elapsedMs,
    frame: frame_2,
    glimmerIndex: glimmerIndex_2,
    flashOpacity: flashOpacity_2,
    stalledIntensity: stalledIntensity_3,
    thinkingIntensity: thinkingIntensity_2,
    statusText: statusText,
    progressiveThinkingBase: progressiveThinkingBase,
    thinkingText: thinkingText,
    thinkingWidth: thinkingWidth,
    timerText: timerText,
    timerWidth: timerWidth,
    totalTokens: totalTokens,
    tokenCount: tokenCount,
    tokensWidth: tokensWidth,
    glimmerMessageWidth: glimmerMessageWidth
  };
}
function Je(l) {
  let [t, u] = y(null),
    o = A(null),
    m = A([]),
    g = dn();
  return P(() => {
    if (l === "thinking") {
      if (o.current === null) {
        for (let h of m.current) h();
        m.current = [], o.current = Date.now(), u("thinking");
      }
    } else if (o.current !== null) {
      let h = Date.now() - o.current,
        x = Math.max(0, 2000 - h);
      o.current = null;
      let I = () => {
        u(h), m.current.push(g.setTimeout(() => u(null), 2000));
      };
      if (x > 0) m.current.push(g.setTimeout(I, x));else I();
    }
  }, [l, g]), P(() => () => {
    for (let h of m.current) h();
    m.current = [];
  }, []), t;
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
  return Xm(u && t > 0 ? Py(g, u, ER(t)) : g);
}
function ln({
  mode: mode_3,
  reducedMotion: reducedMotion_3,
  hasActiveTools: hasActiveTools_2,
  responseLengthRef: responseLengthRef,
  message: message_2,
  messageColor: messageColor,
  shimmerColor: shimmerColor,
  overrideColor: overrideColor_2,
  loadingStartTimeRef: loadingStartTimeRef,
  totalPausedMsRef: totalPausedMsRef,
  pauseStartTimeRef: pauseStartTimeRef,
  spinnerSuffix: L,
  verbose: verbose,
  columns: columns,
  thinkingStatus: thinkingStatus_2,
  effortSuffix: effortSuffix_2,
  isCompacting: isCompacting_2 = !1,
  compactingStartTime: compactingStartTime_2 = null,
  showToolCallTimer: showToolCallTimer_2 = !1,
  retryStatus: O = null,
  outputLimitRecovery: outputLimitRecovery_2 = null,
  agentId: agentId_2
}) {
  let Y = Ye({
      mode: mode_3,
      reducedMotion: reducedMotion_3,
      hasActiveTools: hasActiveTools_2,
      responseLength: responseLengthRef.current,
      message: message_2,
      overrideColor: overrideColor_2,
      loadingStartTime: loadingStartTimeRef.current,
      totalPausedMs: totalPausedMsRef.current,
      pauseStartTime: pauseStartTimeRef.current,
      thinkingStatus: thinkingStatus_2,
      effortSuffix: effortSuffix_2,
      isCompacting: isCompacting_2,
      compactingStartTime: compactingStartTime_2,
      showToolCallTimer: showToolCallTimer_2,
      outputLimitRecovery: outputLimitRecovery_2,
      agentId: agentId_2
    }),
    W = ew(),
    d = ot(),
    p = $w(verbose),
    {
      viewportRef: R,
      time: time_2,
      elapsedMs: elapsedMs_2,
      frame: frame_3,
      glimmerIndex: glimmerIndex_3,
      flashOpacity: flashOpacity_3,
      stalledIntensity: stalledIntensity_4,
      thinkingIntensity: thinkingIntensity_3,
      statusText: statusText_2,
      progressiveThinkingBase: progressiveThinkingBase_2,
      timerText: gt,
      timerWidth: timerWidth_2,
      totalTokens: totalTokens_2,
      tokenCount: tokenCount_2,
      tokensWidth: tokensWidth_2,
      glimmerMessageWidth: glimmerMessageWidth_2
    } = Y,
    {
      thinkingText: rt,
      thinkingWidth: thinkingWidth_2
    } = Y,
    xt = glimmerMessageWidth_2 + 2,
    wt = ro,
    z = rt !== null,
    it = verbose || z || isCompacting_2 || totalTokens_2 > 0 || elapsedMs_2 > io || Boolean(L),
    at = columns - xt - 5,
    lt = z && at > thinkingWidth_2;
  if (!lt && z && statusText_2.kind === "thinking" && (effortSuffix_2 || progressiveThinkingBase_2 !== "thinking")) {
    if (at > Qe) rt = "thinking", thinkingWidth_2 = Qe, lt = !0;
  }
  let bt = lt ? thinkingWidth_2 + wt : 0,
    Rt = it && at > bt + timerWidth_2,
    Ct = bt + (Rt ? timerWidth_2 + wt : 0),
    _t = it && totalTokens_2 > 0 && at > Ct + tokensWidth_2,
    Wt = lt && statusText_2.kind === "thinking" && !L && !Rt && !_t,
    It = thinkingIntensity_3 > 0 ? yS(W.warning) : null,
    st = co(time_2, thinkingIntensity_3, It),
    U = !It && thinkingIntensity_3 > 0.5 ? "warning" : void 0,
    color_6 = thinkingIntensity_3 > 0 ? "warning" : void 0,
    children_5 = [...(L ? [e(n, {
      dimColor: !0,
      children: L
    }, "suffix")] : []), ...(!d && Rt ? [e(n, {
      dimColor: !0,
      children: gt
    }, "elapsedTime")] : []), ...(!d && _t ? [r(s, {
      flexDirection: "row",
      children: [e(cn, {
        mode: mode_3
      }), r(n, {
        dimColor: !0,
        children: [tokenCount_2, " tokens"]
      })]
    }, "tokens")] : []), ...(!d && lt && rt ? [statusText_2.kind === "thinking" && !reducedMotion_3 ? e(n, {
      color: U ?? st,
      children: Wt ? `(${rt})` : rt
    }, "thinking") : e(n, {
      dimColor: !color_6,
      color: color_6,
      children: rt
    }, "thinking")] : [])],
    yt = children_5.length > 0 ? Wt ? e(Se, {
      children: children_5
    }) : r(Q, {
      children: [e(n, {
        dimColor: !0,
        children: "("
      }), e(Se, {
        children: children_5
      }), e(n, {
        dimColor: !0,
        children: ")"
      })]
    }) : null;
  if (isCompacting_2 && O === null && p) return e(s, {
    ref: R,
    flexDirection: "column",
    marginTop: 1,
    width: "100%",
    children: e(Zt, {
      tone: "dim",
      text: message_2.replace(/\u2026$/, "")
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
        columns: columns
      }) : r(Q, {
        children: [e(rce, {
          frame: frame_3,
          messageColor: messageColor,
          stalledIntensity: overrideColor_2 ? 0 : stalledIntensity_4,
          thinkingIntensity: overrideColor_2 ? 0 : thinkingIntensity_3,
          reducedMotion: reducedMotion_3,
          time: time_2
        }), e(t2t, {
          message: message_2,
          mode: mode_3,
          messageColor: messageColor,
          glimmerIndex: glimmerIndex_3,
          flashOpacity: flashOpacity_3,
          shimmerColor: shimmerColor,
          stalledIntensity: overrideColor_2 ? 0 : stalledIntensity_4,
          thinkingIntensity: overrideColor_2 ? 0 : thinkingIntensity_3
        }), yt]
      })
    })
  });
}
function _Sn(l) {
  let m = w(57),
    {
      status: status,
      columns: columns_2
    } = l,
    o = Math.max(0, Math.ceil((status.deadline - Date.now()) / 1000)) * 1000,
    g;
  if (m[0] !== status.kind) g = status.kind === "low_priority_waiting" ? B9().waitBanner : null, m[0] = status.kind, m[1] = g;else g = m[1];
  let h = g;
  const mostSignificantOnly = o >= 300000;
  let I;
  if (m[2] !== o || m[3] !== mostSignificantOnly) I = rn(o, {
    mostSignificantOnly: mostSignificantOnly
  }), m[2] = o, m[3] = mostSignificantOnly, m[4] = I;else I = m[4];
  let M = I,
    _;
  if (m[5] === S) _ = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: "error",
      children: children_6
    })
  }), m[5] = _;else _ = m[5];
  let L = _;
  if (status.kind === "stalled") {
    let f;
    if (m[6] === S) f = e(n, {
      color: "error",
      children: "Waiting for API response"
    }), m[6] = f;else f = m[6];
    let C;
    if (m[7] !== M) C = r(Q, {
      children: [L, r(s, {
        flexShrink: 1,
        children: [f, r(n, {
          dimColor: !0,
          children: [" \xB7 will retry in ", M, " \xB7 check your network"]
        })]
      })]
    }), m[7] = M, m[8] = C;else C = m[8];
    return C;
  }
  if (status.kind === "low_priority_waiting") {
    let children_8 = ` \xB7 next try in ${M} \xB7 attempt ${status.attempt} \xB7 esc to interrupt`;
    let N = Math.max(10, columns_2 - 2 - ie(children_8) - 2);
    let f;
    if (m[9] === S) f = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: "warning",
        children: children_6
      })
    }), m[9] = f;else f = m[9];
    const C = h ?? "";
    let children_7;
    if (m[10] !== N || m[11] !== C) children_7 = mt(C, N), m[10] = N, m[11] = C, m[12] = children_7;else children_7 = m[12];
    let v;
    if (m[13] !== children_7) v = e(n, {
      color: "warning",
      children: children_7
    }), m[13] = children_7, m[14] = v;else v = m[14];
    let k;
    if (m[15] !== children_8) k = e(n, {
      dimColor: !0,
      children: children_8
    }), m[15] = children_8, m[16] = k;else k = m[16];
    let O;
    if (m[17] !== v || m[18] !== k) O = r(Q, {
      children: [f, r(s, {
        flexShrink: 1,
        children: [v, k]
      })]
    }), m[17] = v, m[18] = k, m[19] = O;else O = m[19];
    return O;
  }
  if (status.kind === "auto_mode_unavailable") {
    let f;
    if (m[20] === S) f = e(n, {
      color: "error",
      children: "Auto mode check unavailable"
    }), m[20] = f;else f = m[20];
    const C = ` \xB7 next try in ${M} \xB7 attempt ${status.attempt}/${status.maxRetries} \xB7 `;
    let T;
    if (m[21] === S) T = e(q, {
      chord: "escape",
      action: "interrupt",
      format: {
        keyCase: "lower"
      }
    }), m[21] = T;else T = m[21];
    let v;
    if (m[22] !== C) v = r(Q, {
      children: [L, r(s, {
        flexShrink: 1,
        children: [f, r(n, {
          dimColor: !0,
          children: [C, T]
        })]
      })]
    }), m[22] = C, m[23] = v;else v = m[23];
    return v;
  }
  let noResponse = status.error.noResponse;
  if (noResponse) {
    let nt = status.attempt >= status.maxRetries;
    let f;
    if (m[24] !== noResponse.retryWaitMs) f = uR(noResponse.retryWaitMs), m[24] = noResponse.retryWaitMs, m[25] = f;else f = m[25];
    let Y = f;
    let children_10 = nt ? ` \xB7 retrying once, waiting up to ${Y}` : ` \xB7 retrying, waiting up to ${Y} \xB7 attempt ${status.attempt}/${status.maxRetries}`;
    let d = Math.max(10, columns_2 - 2 - ie(children_10) - 2);
    let C;
    if (m[26] !== noResponse.waitedMs) C = uR(noResponse.waitedMs), m[26] = noResponse.waitedMs, m[27] = C;else C = m[27];
    const T = `No response from the API after ${C}`;
    let children_9;
    if (m[28] !== d || m[29] !== T) children_9 = mt(T, d), m[28] = d, m[29] = T, m[30] = children_9;else children_9 = m[30];
    let k;
    if (m[31] !== children_9) k = e(n, {
      color: "error",
      children: children_9
    }), m[31] = children_9, m[32] = k;else k = m[32];
    let O;
    if (m[33] !== children_10) O = e(n, {
      dimColor: !0,
      children: children_10
    }), m[33] = children_10, m[34] = O;else O = m[34];
    let p;
    if (m[35] !== O || m[36] !== k) p = r(s, {
      children: [k, O]
    }), m[35] = O, m[36] = k, m[37] = p;else p = m[37];
    let R;
    if (m[38] === S) R = e(n, {
      dimColor: !0,
      children: "A proxy or gateway that buffers streaming responses can cause this \xB7 set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait"
    }), m[38] = R;else R = m[38];
    let Mt;
    if (m[39] !== p) Mt = r(Q, {
      children: [L, r(s, {
        flexBasis: 0,
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        children: [p, R]
      })]
    }), m[39] = p, m[40] = Mt;else Mt = m[40];
    return Mt;
  }
  let rateLimits = status.error.rateLimits,
    f;
  if (m[41] !== rateLimits) f = rateLimits?.resetsAt ? ` (${eP(rateLimits.resetsAt)})` : "", m[41] = rateLimits, m[42] = f;else f = m[42];
  let children_12 = ` \xB7 Retrying in ${M}${f} \xB7 attempt ${status.attempt}/${status.maxRetries}`,
    K = status.attempt >= Math.min(3, status.maxRetries) || status.error.isNetworkDown || status.error.connection?.isSSLError || rateLimits,
    C;
  if (m[43] !== rateLimits || m[44] !== K || m[45] !== status.error.formatted) {
    let ct = rateLimits?.rateLimitType ? bMt(rateLimits.rateLimitType) : "usage limit";
    C = !K ? Nwn : rateLimits ? `${ct[0]?.toUpperCase()}${ct.slice(1)} reached` : status.error.formatted;
    m[43] = rateLimits, m[44] = K, m[45] = status.error.formatted, m[46] = C;
  } else C = m[46];
  let D = C,
    ft = Math.max(10, columns_2 - 2 - ie(children_12) - 2),
    T;
  if (m[47] !== ft || m[48] !== D) T = mt(D, ft), m[47] = ft, m[48] = D, m[49] = T;else T = m[49];
  let children_11 = T,
    v;
  if (m[50] !== children_11) v = e(n, {
    color: "error",
    children: children_11
  }), m[50] = children_11, m[51] = v;else v = m[51];
  let k;
  if (m[52] !== children_12) k = e(n, {
    dimColor: !0,
    children: children_12
  }), m[52] = children_12, m[53] = k;else k = m[53];
  let O;
  if (m[54] !== v || m[55] !== k) O = r(Q, {
    children: [L, r(s, {
      flexShrink: 1,
      children: [v, k]
    })]
  }), m[54] = v, m[55] = k, m[56] = O;else O = m[56];
  return O;
}
function cn(l) {
  let u = w(2),
    {
      mode: mode_4
    } = l;
  switch (mode_4) {
    case "tool-input":
    case "tool-use":
    case "responding":
    case "thinking":
      {
        let o;
        if (u[0] === S) o = e(s, {
          width: 2,
          children: e(n, {
            "aria-hidden": !0,
            dimColor: !0,
            children: te.arrowDown
          })
        }), u[0] = o;else o = u[0];
        return o;
      }
    case "requesting":
      {
        let o;
        if (u[1] === S) o = e(s, {
          width: 2,
          children: e(n, {
            "aria-hidden": !0,
            dimColor: !0,
            children: te.arrowUp
          })
        }), u[1] = o;else o = u[1];
        return o;
      }
  }
}
function lr(d) {
  return d.isBriefOnly;
}
function cr(p) {
  return p.viewingAgentTaskId;
}
function mr(L) {
  return L.settings.prefersReducedMotion;
}
var ke = /(\u2026|\.\.\.)$/,
  suffix = "\u2026";
function ftr(l) {
  let T = w(22),
    {
      mode: mode_5,
      overrideMessage: u,
      overrideColor: overrideColor_3,
      overrideShimmerColor: overrideShimmerColor,
      isCompacting: isCompacting_3,
      compactingHintText: compactingHintText,
      compactingStartTime: compactingStartTime_3,
      turnEffort: turnEffort,
      turnModel: turnModel,
      retryStatus: retryStatus,
      outputLimitRecovery: outputLimitRecovery_3,
      defaultVerb: f
    } = m4r(l.agentId),
    C = V(lr),
    j = V(cr),
    CLAUDE_CODE_BRIEF = a.CLAUDE_CODE_BRIEF,
    v,
    k;
  if (T[0] !== f || T[1] !== mode_5 || T[2] !== u || T[3] !== l.agentId) v = () => ({
    requestId: l.agentId ?? "main",
    props: {
      word: f,
      message: u,
      suffix: suffix,
      mode: mode_5
    }
  }), k = [l.agentId, f, u, mode_5], T[0] = f, T[1] = mode_5, T[2] = u, T[3] = l.agentId, T[4] = v, T[5] = k;else v = T[4], k = T[5];
  let O = $d.useRenderInput("Spinner", v, k),
    b;
  if (T[6] !== C || T[7] !== j) b = QW() && (CLAUDE_CODE_BRIEF || E("tengu_kairos_brief", !1)) && C && !j, T[6] = C, T[7] = j, T[8] = b;else b = T[8];
  let nt = b,
    Y;
  if (T[9] !== nt || T[10] !== compactingHintText || T[11] !== compactingStartTime_3 || T[12] !== isCompacting_3 || T[13] !== mode_5 || T[14] !== outputLimitRecovery_3 || T[15] !== overrideColor_3 || T[16] !== overrideShimmerColor || T[17] !== l || T[18] !== retryStatus || T[19] !== turnEffort || T[20] !== turnModel) Y = W => nt ? e(_n, {
    mode: mode_5,
    overrideMessage: W.props.message
  }) : e(Cn, {
    ...l,
    mode: mode_5,
    overrideMessage: W.props.message,
    overrideColor: overrideColor_3,
    overrideShimmerColor: overrideShimmerColor,
    isCompacting: isCompacting_3,
    compactingHintText: compactingHintText,
    compactingStartTime: compactingStartTime_3,
    turnEffort: turnEffort,
    turnModel: turnModel,
    retryStatus: retryStatus,
    outputLimitRecovery: outputLimitRecovery_3,
    defaultVerb: W.props.word,
    suffix: W.props.suffix ?? suffix
  }), T[9] = nt, T[10] = compactingHintText, T[11] = compactingStartTime_3, T[12] = isCompacting_3, T[13] = mode_5, T[14] = outputLimitRecovery_3, T[15] = overrideColor_3, T[16] = overrideShimmerColor, T[17] = l, T[18] = retryStatus, T[19] = turnEffort, T[20] = turnModel, T[21] = Y;else Y = T[21];
  return $d.useRenderHook(O, Y);
}
function Cn({
  mode: mode_6,
  loadingStartTimeRef: loadingStartTimeRef_2,
  totalPausedMsRef: totalPausedMsRef_2,
  pauseStartTimeRef: pauseStartTimeRef_2,
  responseLengthRef: responseLengthRef_2,
  overrideColor: overrideColor_4,
  overrideShimmerColor: overrideShimmerColor_2,
  overrideMessage: overrideMessage,
  isCompacting: isCompacting_4,
  compactingHintText: M,
  compactingStartTime: compactingStartTime_4,
  spinnerSuffix: spinnerSuffix,
  verbose: verbose_2,
  hasActiveTools: hasActiveTools_3 = !1,
  turnEffort: turnEffort_2,
  turnModel: turnModel_2,
  retryStatus: retryStatus_2,
  outputLimitRecovery: outputLimitRecovery_4,
  defaultVerb: defaultVerb,
  suffix: suffix_2,
  agentId: agentId_3
}) {
  let nt = hd(),
    Y = ot(),
    reducedMotion_4 = sh(nt.prefersReducedMotion) || Y,
    d = V(U => U.spinnerTip),
    p = V(U => U.spinnerTipLabel),
    R = V(U => U.briefTranscript),
    Mt = V(U => U.expandedView) === "tasks",
    H = Te(),
    paddingLeft = $w(verbose_2) ? Xye : 0,
    columns_3 = Math.max(1, H.columns - paddingLeft),
    tasks = lce(),
    thinkingStatus_3 = Je(mode_6),
    D = agentId_3 === void 0 || agentId_3 === Ze(),
    ft = D ? tasks?.find(U => U.status !== "pending" && U.status !== "completed") : void 0,
    J = D ? ar(tasks) : void 0,
    [gt] = y(() => y1(W2t()) ?? "Working"),
    dt = ft ? [ft.activeForm, ft.subject].map(item => item?.replace(/\s+/g, " ").trim()).find(Boolean) : void 0,
    ht = overrideMessage ?? (dt === void 0 ? void 0 : ybt(dt, columns_3)) ?? (defaultVerb || gt),
    message_3 = suffix_2 === suffix && ke.test(ht) ? ht : ht + suffix_2;
  P(() => {
    let U = "spinner-" + mode_6;
    return wV.startCLIActivity(U), () => {
      wV.endCLIActivity(U);
    };
  }, [mode_6]);
  let pt = Cb(),
    effortSuffix_3 = rin(turnModel_2 ?? tt(), pt, turnEffort_2 ?? void 0),
    kt = pauseStartTimeRef_2.current !== null ? pauseStartTimeRef_2.current - loadingStartTimeRef_2.current - totalPausedMsRef_2.current : Date.now() - loadingStartTimeRef_2.current - totalPausedMsRef_2.current,
    xt = "claude",
    wt = "claudeShimmer",
    messageColor_2 = overrideColor_4 ?? xt,
    shimmerColor_2 = overrideShimmerColor_2 ?? wt,
    showToolCallTimer_3 = E("tengu_shining_fractals", !1),
    lt = !1,
    bt = nt.spinnerTipsEnabled !== !1,
    Rt = bt && kt > 1800000,
    Ct = bt && kt > 30000 && !ue().btwUseCount,
    _t = lt ? d : SRe() ? d : Rt && !J ? "Use /clear to start fresh when switching topics and free up context" : Ct && !J ? "Use /btw to ask a quick side question without interrupting Claude's current work" : d,
    children_14 = J ? `Next: ${J.subject.replace(/\s+/g, " ").trim()}` : d === YEn && R ? FZo : _t ? `${_t === d && p ? p : "Tip"}: ${_t}` : void 0,
    children_13;
  if (retryStatus_2?.kind === "retrying") {
    let U = retryStatus_2.error.status === 529 || retryStatus_2.error.formatted.toLowerCase().includes("overload"),
      et = retryStatus_2.attempt >= Math.min(3, retryStatus_2.maxRetries);
    if (U && et) children_13 = chr().trim();
  }
  return r(s, {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    paddingLeft: paddingLeft,
    children: [e(ln, {
      mode: mode_6,
      reducedMotion: reducedMotion_4,
      hasActiveTools: hasActiveTools_3,
      responseLengthRef: responseLengthRef_2,
      message: message_3,
      messageColor: messageColor_2,
      shimmerColor: shimmerColor_2,
      overrideColor: overrideColor_4,
      loadingStartTimeRef: loadingStartTimeRef_2,
      totalPausedMsRef: totalPausedMsRef_2,
      pauseStartTimeRef: pauseStartTimeRef_2,
      spinnerSuffix: spinnerSuffix,
      verbose: verbose_2,
      columns: columns_3,
      thinkingStatus: thinkingStatus_3,
      effortSuffix: effortSuffix_3,
      isCompacting: isCompacting_4,
      compactingStartTime: compactingStartTime_4,
      showToolCallTimer: showToolCallTimer_3,
      retryStatus: retryStatus_2,
      outputLimitRecovery: outputLimitRecovery_4,
      agentId: agentId_3
    }), D && Mt && tasks && tasks.length > 0 ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(ze, {
        children: e(gtr, {
          tasks: tasks
        })
      })
    }) : isCompacting_4 && M ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(ze, {
        children: e(n, {
          dimColor: !0,
          children: M
        })
      })
    }) : retryStatus_2 ? children_13 ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(ze, {
        children: e(n, {
          dimColor: !0,
          children: children_13
        })
      })
    }) : null : children_14 ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(ze, {
        children: e(n, {
          dimColor: !0,
          wrap: J ? "truncate-end" : "wrap",
          children: children_14
        })
      })
    }) : null]
  });
}
var paddingLeft_2 = 2,
  jt = 3,
  er = 12,
  nr = 1;
function Qt(l, t, u) {
  let rightText = t > 0 ? `${t} in background` : "",
    labelBudget = l - paddingLeft_2 - jt,
    labelBudget_2 = labelBudget - (rightText ? 1 + ie(rightText) : 0);
  if (rightText && labelBudget_2 < (u ? er : nr)) return {
    labelBudget: labelBudget,
    rightText: ""
  };
  return {
    labelBudget: labelBudget_2,
    rightText: rightText
  };
}
function _n({
  mode: mode_7,
  overrideMessage: overrideMessage_2
}) {
  let u = hd(),
    o = ot(),
    m = sh(u.prefersReducedMotion) || o,
    [g] = y(() => y1(W2t()) ?? "Working"),
    h = V(p => p.remoteConnectionStatus);
  P(() => {
    let p = "spinner-" + mode_7;
    return wV.startCLIActivity(p), () => {
      wV.endCLIActivity(p);
    };
  }, [mode_7]);
  let [, x] = Aa(m ? null : 120),
    I = V(p => F(Object.values(p.tasks), Ph) + p.remoteBackgroundTasks.length),
    M = h === "reconnecting" || h === "disconnected",
    {
      columns: columns_4
    } = Te(),
    {
      labelBudget: labelBudget_3,
      rightText: f
    } = Qt(columns_4, I, M),
    C = mt(overrideMessage_2 ?? g, labelBudget_3),
    j = mt(h === "reconnecting" ? "Reconnecting" : "Disconnected", labelBudget_3),
    N = M ? j : C,
    T = Math.floor(x / 300) % 3,
    children_15 = m ? ke.test(N) ? "   " : "\u2026  " : ".".repeat(T + 1).padEnd(3),
    k = Z(() => ie(C), [C]),
    O = m || M ? -100 : Gqr(Math.floor(x / zqr), k),
    {
      before: b,
      shimmer: nt,
      after: Y
    } = mvt(C, O),
    W = (M ? ie(j) : k) + jt,
    d = Math.max(1, columns_4 - paddingLeft_2 - W - ie(f));
  return r(s, {
    flexDirection: "row",
    width: "100%",
    marginTop: 1,
    paddingLeft: paddingLeft_2,
    children: [M ? e(n, {
      color: "error",
      children: j + children_15
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
        children: children_15
      })]
    }), f ? r(Q, {
      children: [e(n, {
        children: " ".repeat(d)
      }), e(n, {
        color: "subtle",
        children: f
      })]
    }) : null]
  });
}
function wqr() {
  let l = V(_ => _.remoteConnectionStatus),
    t = V(_ => F(Object.values(_.tasks), Ph) + _.remoteBackgroundTasks.length),
    {
      columns: columns_5
    } = Te(),
    o = l === "reconnecting" || l === "disconnected",
    {
      labelBudget: labelBudget_4,
      rightText: g
    } = Qt(columns_5, t, o),
    h = l === "reconnecting" ? 1 : 0,
    x = mt(l === "reconnecting" ? "Reconnecting" : "Disconnected", labelBudget_4 + jt - h),
    children_16 = !o ? "" : l === "reconnecting" && !x.endsWith("\u2026") ? x + "\u2026" : x;
  if (!children_16 && !g) return e(s, {
    height: 2
  });
  let M = Math.max(1, columns_5 - paddingLeft_2 - ie(children_16) - ie(g));
  return e(s, {
    marginTop: 1,
    paddingLeft: paddingLeft_2,
    children: r(n, {
      children: [children_16 ? e(n, {
        color: "error",
        children: children_16
      }) : null, g ? r(Q, {
        children: [e(n, {
          children: " ".repeat(M)
        }), e(n, {
          color: "subtle",
          children: g
        })]
      }) : null]
    })
  });
}
function Ii() {
  let m = w(9),
    l = ot(),
    t = sh(Fo(mr)) || l,
    [ref_2, o] = Aa(t ? null : 120);
  if (t) {
    let children_17;
    if (m[0] === S) children_17 = e(n, {
      color: "text",
      children: "\u25CF"
    }), m[0] = children_17;else children_17 = m[0];
    let h;
    if (m[1] !== ref_2) h = e(s, {
      ref: ref_2,
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: children_17
    }), m[1] = ref_2, m[2] = h;else h = m[2];
    return h;
  }
  let g;
  if (m[3] === S) g = PLe(), m[3] = g;else g = m[3];
  let x = g,
    I = Math.floor(o / 120) % x.length;
  const children_18 = x[I];
  let children_19;
  if (m[4] !== children_18) children_19 = e(n, {
    color: "text",
    children: children_18
  }), m[4] = children_18, m[5] = children_19;else children_19 = m[5];
  let _;
  if (m[6] !== ref_2 || m[7] !== children_19) _ = e(s, {
    ref: ref_2,
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: children_19
  }), m[6] = ref_2, m[7] = children_19, m[8] = _;else _ = m[8];
  return _;
}
function s5o({
  entries: entries,
  responseLength: t,
  event: event
}) {
  if (event.type === "start") return entries.push({
    id: event.id,
    ttftMs: event.ttftMs,
    firstTokenTime: Date.now(),
    lastTokenTime: Date.now(),
    responseLengthBaseline: t,
    endResponseLength: t
  }), t;
  let o = event.id != null ? entries.find(item => item.id === event.id) : entries.findLast(m => m.id == null);
  if (!o) return t;
  if (event.type === "content_block_start") return o.thinkingTokenEstimate = 0, o.thinkingBlockBaseline = t, o.sawEstimatedTokensThisBlock = !1, t;
  if (event.type === "thinking_progress") {
    if (o.sawEstimatedTokensThisBlock = !0, o.thinkingTokenEstimate = (o.thinkingTokenEstimate ?? 0) + event.estimatedTokensDelta, o.outputTokens == null && event.id == null) {
      let m = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
      return Math.max(t, m + o.thinkingTokenEstimate * 4);
    }
    return t;
  }
  if (event.type === "thinking_signature") {
    if (event.chars > 0 && o.outputTokens == null) {
      if (o.lastTokenTime = Date.now(), o.sawEstimatedTokensThisBlock) {
        o.thinkingTokenEstimate = Math.max(o.thinkingTokenEstimate ?? 0, Math.ceil(event.chars / 4));
        let g = o.thinkingBlockBaseline ?? o.responseLengthBaseline,
          h = Math.max(t, g + o.thinkingTokenEstimate * 4);
        return o.endResponseLength = h, h;
      }
      let m = t + event.chars;
      return o.endResponseLength = m, m;
    }
    return t;
  }
  if (o.outputTokens = event.outputTokens, o.lastTokenTime = Date.now(), event.id == null) return Math.max(t, o.responseLengthBaseline + event.outputTokens * 4);
  return t;
}
function ar(l) {
  if (!l) return;
  let t = l.filter(item => item.status === "pending");
  if (t.length === 0) return;
  let u = new Set(l.filter(item => item.status !== "completed").map(item => item.id));
  return t.find(item => !item.blockedBy.some(item => u.has(item))) ?? t[0];
}
export { t2t, _Sn, ftr, wqr, Ii, s5o };