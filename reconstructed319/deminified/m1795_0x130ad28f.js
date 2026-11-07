// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { st, bY } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { bh, Twt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { at, v, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ow } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { DO as children_5 } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ct, wFr, cn, Mw, pa, lP } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Joe } from "B:/~BUN/root/chunk-yhafkw66.js";
import { Rn, ot, s, n, pl } from "B:/~BUN/root/chunk-qey16aan.js";
import { DG, JH, Bc } from "B:/~BUN/root/chunk-apcs0eny.js";
import { G, xs } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { F5n, RYe, sI, AYe, kS, Ry, hv } from "B:/~BUN/root/chunk-9ezywpz7.js";
import { fFt } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { uZr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { w9e } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { u_ } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { SOe } from "B:/~BUN/root/chunk-d0mxnbww.js";
import { RGt, $E } from "B:/~BUN/root/chunk-n5qt0bp0.js";
import { XH } from "B:/~BUN/root/chunk-k3kse5n8.js";
import { Ye } from "B:/~BUN/root/chunk-4swxab5a.js";
import { oke } from "B:/~BUN/root/chunk-jmh99pxs.js";
import { TWr } from "B:/~BUN/root/chunk-fs4prsr3.js";
import { gK, nhn, v5n, qGt } from "B:/~BUN/root/chunk-bnbh68ja.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { ig } from "B:/~BUN/root/chunk-ve4gzwvf.js";
import { CGt, FPe } from "B:/~BUN/root/chunk-xtz0pgac.js";
import { rke } from "B:/~BUN/root/chunk-4b1p6ngb.js";
import { Ic } from "B:/~BUN/root/chunk-c7kw6nqt.js";
import { j_ } from "B:/~BUN/root/chunk-nyy541yq.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { $$o, U$o, g2t } from "B:/~BUN/root/chunk-t6wq64cz.js";
import { S7n, dri, uri, fri as command, pri as args, w7n } from "B:/~BUN/root/chunk-8pgg04y0.js";
import { O, Z, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Sa } from "B:/~BUN/root/chunk-63176a0t.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { w, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
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
      mode: mode,
      messageColor: o,
      glimmerIndex: glimmerIndex,
      flashOpacity: flashOpacity,
      shimmerColor: k,
      stalledIntensity: stalledIntensity,
      thinkingIntensity: thinkingIntensity
    } = a,
    x = stalledIntensity === void 0 ? 0 : stalledIntensity,
    B = thinkingIntensity === void 0 ? 0 : thinkingIntensity,
    P = ow(),
    segments;
  if (u[0] !== t) {
    segments = [];
    for (const {
      segment: segment
    } of Sa().segment(t)) segments.push({
      segment: segment,
      width: ce(segment)
    });
    u[0] = t, u[1] = segments;
  } else segments = u[1];
  let messageWidth;
  if (u[2] !== t) messageWidth = ce(t), u[2] = t, u[3] = messageWidth;else messageWidth = u[3];
  let C;
  if (u[4] !== segments || u[5] !== messageWidth) C = {
    segments: segments,
    messageWidth: messageWidth
  }, u[4] = segments, u[5] = messageWidth, u[6] = C;else C = u[6];
  let {
    segments: segments_2,
    messageWidth: messageWidth_2
  } = C;
  if (!t) {
    return null;
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
          let color = Ry(it);
          let p;
          if (u[11] !== color || u[12] !== t) p = e(n, {
            color: color,
            children: t
          }), u[11] = color, u[12] = t, u[13] = p;else p = u[13];
          let d;
          if (u[14] !== color) d = e(n, {
            color: color,
            children: " "
          }), u[14] = color, u[15] = d;else d = u[15];
          let b;
          if (u[16] !== p || u[17] !== d) b = r(ne, {
            children: [p, d]
          }), u[16] = p, u[17] = d, u[18] = b;else b = u[18];
          g = b;
          break q;
        }
      }
      u[7] = N, u[8] = t, u[9] = x, u[10] = g;
    } else g = u[10];
    if (g !== Pn) return g;
    let color_2 = x > 0.5 ? "error" : o;
    let p;
    if (u[19] !== color_2 || u[20] !== t) p = e(n, {
      color: color_2,
      children: t
    }), u[19] = color_2, u[20] = t, u[21] = p;else p = u[21];
    let d;
    if (u[22] !== color_2) d = e(n, {
      color: color_2,
      children: " "
    }), u[22] = color_2, u[23] = d;else d = u[23];
    let b;
    if (u[24] !== p || u[25] !== d) b = r(ne, {
      children: [p, d]
    }), u[24] = p, u[25] = d, u[26] = b;else b = u[26];
    return b;
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
          let color_3 = Ry(tt);
          let p;
          if (u[32] !== color_3 || u[33] !== t) p = e(n, {
            color: color_3,
            children: t
          }), u[32] = color_3, u[33] = t, u[34] = p;else p = u[34];
          let d;
          if (u[35] !== color_3) d = e(n, {
            color: color_3,
            children: " "
          }), u[35] = color_3, u[36] = d;else d = u[36];
          let b;
          if (u[37] !== p || u[38] !== d) b = r(ne, {
            children: [p, d]
          }), u[37] = p, u[38] = d, u[39] = b;else b = u[39];
          g = b;
          break J;
        }
      }
      u[27] = gt, u[28] = t, u[29] = P.warning, u[30] = B, u[31] = g;
    } else g = u[31];
    if (g !== Pn) return g;
    let color_4 = B > 0.5 ? "warning" : o;
    let p;
    if (u[40] !== color_4 || u[41] !== t) p = e(n, {
      color: color_4,
      children: t
    }), u[40] = color_4, u[41] = t, u[42] = p;else p = u[42];
    let d;
    if (u[43] !== color_4) d = e(n, {
      color: color_4,
      children: " "
    }), u[43] = color_4, u[44] = d;else d = u[44];
    let b;
    if (u[45] !== p || u[46] !== d) b = r(ne, {
      children: [p, d]
    }), u[45] = p, u[46] = d, u[47] = b;else b = u[47];
    return b;
  }
  if (mode === "tool-use") {
    let lt = P[o];
    let Tt = P[k];
    let g;
    if (u[48] !== lt || u[49] !== flashOpacity || u[50] !== t || u[51] !== o || u[52] !== Tt) {
      g = Pn;
      vt: {
        let et = lt ? hv(lt) : null;
        let yt = Tt ? hv(Tt) : null;
        if (et && yt) {
          let Mt = kS(et, yt, sI(flashOpacity));
          const p = e(n, {
            color: Ry(Mt),
            children: t
          });
          let d;
          if (u[54] !== o) d = e(n, {
            color: o,
            children: " "
          }), u[54] = o, u[55] = d;else d = u[55];
          let b;
          if (u[56] !== p || u[57] !== d) b = r(ne, {
            children: [p, d]
          }), u[56] = p, u[57] = d, u[58] = b;else b = u[58];
          g = b;
          break vt;
        }
      }
      u[48] = lt, u[49] = flashOpacity, u[50] = t, u[51] = o, u[52] = Tt, u[53] = g;
    } else g = u[53];
    if (g !== Pn) return g;
    let color_5 = flashOpacity > 0.5 ? k : o;
    let p;
    if (u[59] !== color_5 || u[60] !== t) p = e(n, {
      color: color_5,
      children: t
    }), u[59] = color_5, u[60] = t, u[61] = p;else p = u[61];
    let d;
    if (u[62] !== o) d = e(n, {
      color: o,
      children: " "
    }), u[62] = o, u[63] = d;else d = u[63];
    let b;
    if (u[64] !== p || u[65] !== d) b = r(ne, {
      children: [p, d]
    }), u[64] = p, u[65] = d, u[66] = b;else b = u[66];
    return b;
  }
  let nt = glimmerIndex - 1,
    Q = glimmerIndex + 1;
  if (nt >= messageWidth_2 || Q < 0) {
    let g;
    if (u[67] !== t || u[68] !== o) g = e(n, {
      color: o,
      children: t
    }), u[67] = t, u[68] = o, u[69] = g;else g = u[69];
    let p;
    if (u[70] !== o) p = e(n, {
      color: o,
      children: " "
    }), u[70] = o, u[71] = p;else p = u[71];
    let d;
    if (u[72] !== g || u[73] !== p) d = r(ne, {
      children: [g, p]
    }), u[72] = g, u[73] = p, u[74] = d;else d = u[74];
    return d;
  }
  let kt = Math.max(0, nt),
    children_3,
    children,
    children_2;
  if (u[75] !== kt || u[76] !== segments_2 || u[77] !== Q) {
    let ft = 0;
    children = "";
    children_2 = "";
    children_3 = "";
    for (const {
      segment: segment_2,
      width: width
    } of segments_2) {
      if (ft + width <= kt) children = children + segment_2;else if (ft > Q) children_3 = children_3 + segment_2;else children_2 = children_2 + segment_2;
      ft = ft + width;
    }
    u[75] = kt, u[76] = segments_2, u[77] = Q, u[78] = children_3, u[79] = children, u[80] = children_2;
  } else children_3 = u[78], children = u[79], children_2 = u[80];
  let g;
  if (u[81] !== children || u[82] !== o) g = children && e(n, {
    color: o,
    children: children
  }), u[81] = children, u[82] = o, u[83] = g;else g = u[83];
  let p;
  if (u[84] !== children_2 || u[85] !== k) p = e(n, {
    color: k,
    children: children_2
  }), u[84] = children_2, u[85] = k, u[86] = p;else p = u[86];
  let d;
  if (u[87] !== children_3 || u[88] !== o) d = children_3 && e(n, {
    color: o,
    children: children_3
  }), u[87] = children_3, u[88] = o, u[89] = d;else d = u[89];
  let b;
  if (u[90] !== o) b = e(n, {
    color: o,
    children: " "
  }), u[90] = o, u[91] = b;else b = u[91];
  let It;
  if (u[92] !== g || u[93] !== p || u[94] !== d || u[95] !== b) It = r(ne, {
    children: [g, p, d, b]
  }), u[92] = g, u[93] = p, u[94] = d, u[95] = b, u[96] = It;else It = u[96];
  return It;
}
j();
function je() {
  return {
    toolWindowStart: null,
    toolWindowEnd: null,
    thinkingBurstStart: null,
    wasThinking: !1
  };
}
function Ve(a, t) {
  let {
    toolWindowStart: toolWindowStart,
    toolWindowEnd: toolWindowEnd,
    thinkingBurstStart: thinkingBurstStart
  } = a;
  if (t.hasActiveTools) {
    if (t.toolWindowStartedAt !== null) toolWindowStart = Math.min(t.toolWindowStartedAt, t.now);else if (toolWindowStart === null || toolWindowEnd !== null) toolWindowStart = t.now;
    toolWindowEnd = null;
  } else if (toolWindowStart !== null && toolWindowEnd === null) toolWindowEnd = t.now;
  if (!t.hasActiveTools && t.thinkingStatus !== null) toolWindowStart = null, toolWindowEnd = null;
  if (t.isThinking) {
    if (!a.wasThinking) thinkingBurstStart = t.now;
  } else thinkingBurstStart = null;
  return {
    toolWindowStart: toolWindowStart,
    toolWindowEnd: toolWindowEnd,
    thinkingBurstStart: thinkingBurstStart,
    wasThinking: t.isThinking
  };
}
function Ke(a, t) {
  if (t.showToolCallTimer && t.hasActiveTools && a.toolWindowStart !== null) {
    let toolMs = t.now - a.toolWindowStart;
    if (toolMs >= 2000) return {
      kind: "tool-running",
      toolMs: toolMs
    };
  }
  if (t.outputLimitRecovery !== null && !t.hasActiveTools) return {
    kind: "recovering",
    recovery: t.outputLimitRecovery
  };
  if (t.showToolCallTimer && !t.hasActiveTools && t.thinkingStatus === null && a.toolWindowStart !== null && a.toolWindowEnd !== null) {
    let toolMs_2 = a.toolWindowEnd - a.toolWindowStart;
    if (toolMs_2 >= 2000) return {
      kind: "tool-done",
      toolMs: toolMs_2
    };
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
  };
}
function Ue(a, t) {
  if (t.hasActiveTools) return 0;
  if (!t.isThinking || a.thinkingBurstStart === null) return 0;
  let c = t.now - a.thinkingBurstStart;
  return Math.min(Math.max((c - 1e4) / 1e4, 0), 1);
}
j();
function Fe(a, t, c = !1, o = !1, m) {
  let h = A(a),
    k = A(t),
    M = A(0),
    _ = A(a),
    x = A(m);
  if (t > k.current || x.current !== m) x.current = m, h.current = a, k.current = t, M.current = 0, _.current = a;else if (t < k.current) k.current = t;
  let timeSinceLastToken;
  if (c) timeSinceLastToken = 0, h.current = a;else timeSinceLastToken = a - h.current;
  let isStalled = timeSinceLastToken > 1e4 && !c,
    u = isStalled ? Math.min((timeSinceLastToken - 1e4) / 1e4, 1) : 0;
  if (!o && (u > 0 || M.current > 0)) {
    let W = a - _.current;
    if (W >= 50) {
      let V = Math.floor(W / 50),
        current = M.current;
      for (let T = 0; T < V; T++) {
        let L = u - current;
        if (Math.abs(L) < 0.01) {
          current = u;
          break;
        }
        current += L * 0.1;
      }
      M.current = current, _.current = a;
    }
  } else M.current = u, _.current = a;
  let stalledIntensity_2 = o ? u : M.current;
  return {
    isStalled: isStalled,
    stalledIntensity: stalledIntensity_2,
    timeSinceLastToken: timeSinceLastToken
  };
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
  return Math.round(t * (F5n().length - 1));
}
function Yn(a) {
  return `thought for ${Math.max(1, Math.round(a / 1000))}s`;
}
function qn({
  attempt: attempt,
  limit: limit
}) {
  return attempt > 1 ? `picking the thought back up (${attempt} of ${limit})` : "picking the thought back up";
}
function Xn(a) {
  if (a >= Un) return "deep in thought";
  if (a >= Kn) return "thinking some more";
  if (a >= Vn) return "thinking more";
  if (a >= jn) return "still thinking";
  return "thinking";
}
function zn(a) {
  return sI((Math.sin(a / 1000 * Math.PI) + 1) / 2);
}
function qe({
  mode: mode_2,
  reducedMotion: reducedMotion,
  hasActiveTools: hasActiveTools,
  toolWindowStartedAt: toolWindowStartedAt,
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
  isResponseHeld = !1,
  showToolCallTimer: showToolCallTimer,
  outputLimitRecovery = null,
  agentId: agentId,
  glimmerParked = !1
}) {
  let [viewportRef, time] = pl(reducedMotion ? null : mode_2 === "requesting" && !glimmerParked ? 50 : 100),
    now = Date.now(),
    elapsedMs = isCompacting && compactingStartTime !== null ? Math.max(0, now - compactingStartTime) : pauseStartTime !== null ? pauseStartTime - loadingStartTime - totalPausedMs : now - loadingStartTime - totalPausedMs,
    p = A(je()),
    d = {
      now: now,
      isThinking: mode_2 === "thinking",
      hasActiveTools: hasActiveTools,
      toolWindowStartedAt: toolWindowStartedAt !== null && toolWindowStartedAt >= loadingStartTime ? toolWindowStartedAt : null,
      thinkingStatus: thinkingStatus,
      showToolCallTimer: showToolCallTimer,
      outputLimitRecovery: outputLimitRecovery
    };
  p.current = Ve(p.current, d);
  let statusText = Ke(p.current, d),
    q = Ue(p.current, d),
    response_length = responseLength,
    gt = hasActiveTools || mode_2 === "thinking" || isCompacting && mode_2 !== "responding" || isResponseHeld || pauseStartTime !== null,
    {
      isStalled: isStalled_2,
      stalledIntensity: stalledIntensity_3,
      timeSinceLastToken: timeSinceLastToken_2
    } = Fe(time, response_length, gt, reducedMotion, agentId),
    K = A(new Set()),
    J = A(0),
    F = A(agentId);
  if (F.current !== agentId) F.current = agentId, K.current = new Set(), J.current = 0;
  if (timeSinceLastToken_2 === 0) {
    if (K.current.size > 0) l("tengu_spinner_stall_cleared", {
      max_stall_ms: Math.round(J.current),
      mode: f(mode_2),
      override_color: overrideColor != null,
      response_length: response_length,
      thresholds_fired: K.current.size
    }), K.current = new Set(), J.current = 0;
  } else {
    if (timeSinceLastToken_2 > J.current) J.current = timeSinceLastToken_2;
    for (let threshold_ms of Dn) if (timeSinceLastToken_2 >= threshold_ms && !K.current.has(threshold_ms)) K.current.add(threshold_ms), l("tengu_spinner_stalled_ui", {
      threshold_ms: threshold_ms,
      mode: f(mode_2),
      override_color: overrideColor != null,
      time_since_last_token_ms: Math.round(timeSinceLastToken_2),
      response_length: response_length,
      render_loop_dark: timeSinceLastToken_2 - threshold_ms > 5000
    });
  }
  let frame = reducedMotion ? 0 : Fn(time),
    Tt = mode_2 === "requesting" ? 50 : $n,
    glimmerMessageWidth = Z(() => ce(message), [message]),
    yt = glimmerMessageWidth + 2 * ae,
    Mt = Math.floor(time / Tt),
    glimmerIndex_2 = reducedMotion ? -100 : isStalled_2 ? -100 : mode_2 === "requesting" ? Mt % yt - ae : glimmerMessageWidth + ae - Mt % yt,
    flashOpacity_2 = reducedMotion ? 0 : mode_2 === "tool-use" ? zn(time) : 0,
    nt = A(response_length),
    Q = A(time),
    kt = A(agentId);
  if (kt.current !== agentId || Math.abs(response_length - nt.current) > Gn) kt.current = agentId, nt.current = response_length, Q.current = time;
  if (reducedMotion) nt.current = response_length, Q.current = time;else {
    let E = Math.floor((time - Q.current) / 50);
    if (E > 0) {
      Q.current += E * 50;
      for (let wt = 0; wt < E; wt++) {
        let xt = response_length - nt.current;
        if (xt === 0) break;
        let Wt = Math.abs(xt),
          Bt;
        if (Wt < 70) Bt = 3;else if (Wt < 200) Bt = Math.max(8, Math.ceil(Wt * 0.15));else Bt = 50;
        nt.current = xt > 0 ? Math.min(nt.current + Bt, response_length) : Math.max(nt.current - Bt, response_length);
      }
    }
  }
  let current_2 = nt.current,
    ut = Math.round(current_2 / 4),
    X = A(0),
    ft = A(time);
  if (mode_2 !== "thinking" || hasActiveTools) X.current = 0, ft.current = time;else if (!reducedMotion && (q > 0 || X.current > 0)) {
    let E = time - ft.current;
    if (E >= 50) {
      let wt = Math.floor(E / 50),
        current_3 = X.current;
      for (let Wt = 0; Wt < wt; Wt++) {
        let Bt = q - current_3;
        if (Math.abs(Bt) < 0.01) {
          current_3 = q;
          break;
        }
        current_3 += Bt * 0.1;
      }
      X.current = current_3, ft.current = time;
    }
  } else X.current = q, ft.current = time;
  let thinkingIntensity_2 = reducedMotion ? q : X.current,
    timerText = cn(elapsedMs),
    timerWidth = ce(timerText),
    totalTokens = ut,
    tokenCount = pa(totalTokens),
    Pt = `${re.arrowDown} ${tokenCount} tokens`,
    tokensWidth = ce(Pt),
    progressiveThinkingBase = statusText.kind === "thinking" ? Xn(statusText.thinkingMs) : "thinking",
    thinkingText;
  switch (statusText.kind) {
    case "tool-running":
      thinkingText = `running tool for ${cn(statusText.toolMs)}`;
      break;
    case "tool-done":
      thinkingText = `ran tool for ${cn(statusText.toolMs)}`;
      break;
    case "recovering":
      thinkingText = qn(statusText.recovery);
      break;
    case "thinking":
      thinkingText = `${progressiveThinkingBase}${effortSuffix}`;
      break;
    case "thought-for":
      thinkingText = Yn(statusText.thoughtMs);
      break;
    case "none":
      thinkingText = null;
      break;
  }
  let thinkingWidth = thinkingText ? ce(thinkingText) : 0;
  return {
    viewportRef: viewportRef,
    time: time,
    elapsedMs: elapsedMs,
    frame: frame,
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
function Xe(a) {
  let [t, c] = y(null),
    o = A(null),
    m = A([]),
    h = Rn();
  return O(() => {
    if (a === "thinking") {
      if (o.current === null) {
        for (let k of m.current) k();
        m.current = [], o.current = Date.now(), c("thinking");
      }
    } else if (o.current !== null) {
      let k = Date.now() - o.current,
        M = Math.max(0, 2000 - k);
      o.current = null;
      let _ = () => {
        c(k), m.current.push(h.setTimeout(() => c(null), 2000));
      };
      if (M > 0) m.current.push(h.setTimeout(_, M));else _();
    }
  }, [a, h]), O(() => () => {
    for (let k of m.current) k();
    m.current = [];
  }, []), t;
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
  return Ry(c && t > 0 ? kS(h, c, sI(t)) : h);
}
function rn({
  mode: mode_3,
  reducedMotion: reducedMotion_2,
  hasActiveTools: hasActiveTools_2,
  toolWindowStartedAt: toolWindowStartedAt_2,
  responseLengthRef: responseLengthRef,
  message: message_2,
  messageColor: messageColor,
  shimmerColor: shimmerColor,
  overrideColor: overrideColor_2,
  loadingStartTimeRef: loadingStartTimeRef,
  totalPausedMsRef: totalPausedMsRef,
  pauseStartTimeRef: pauseStartTimeRef,
  spinnerSuffix: u,
  verbose: verbose,
  columns: columns,
  thinkingStatus: thinkingStatus_2,
  effortSuffix: effortSuffix_2,
  isCompacting: isCompacting_2 = !1,
  compactingStartTime: compactingStartTime_2 = null,
  isResponseHeld: isResponseHeld_2 = !1,
  showToolCallTimer: showToolCallTimer_2 = !1,
  retryStatus: z = null,
  outputLimitRecovery: outputLimitRecovery_2 = null,
  agentId: agentId_2
}) {
  let p = qe({
      mode: mode_3,
      reducedMotion: reducedMotion_2,
      hasActiveTools: hasActiveTools_2,
      toolWindowStartedAt: toolWindowStartedAt_2,
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
      isResponseHeld: isResponseHeld_2,
      showToolCallTimer: showToolCallTimer_2,
      outputLimitRecovery: outputLimitRecovery_2,
      agentId: agentId_2
    }),
    d = ow(),
    b = ot(),
    q = $E(verbose),
    {
      viewportRef: I,
      time: time_2,
      elapsedMs: elapsedMs_2,
      frame: frame_2,
      glimmerIndex: glimmerIndex_3,
      flashOpacity: flashOpacity_3,
      stalledIntensity: stalledIntensity_4,
      thinkingIntensity: thinkingIntensity_3,
      statusText: statusText_2,
      progressiveThinkingBase: progressiveThinkingBase_2,
      timerText: et,
      timerWidth: timerWidth_2,
      totalTokens: totalTokens_2,
      tokenCount: tokenCount_2,
      tokensWidth: tokensWidth_2,
      glimmerMessageWidth: glimmerMessageWidth_2
    } = p,
    {
      thinkingText: Q,
      thinkingWidth: thinkingWidth_2
    } = p,
    mt = glimmerMessageWidth_2 + 2,
    ut = Jn,
    X = Q !== null,
    ft = verbose || X || isCompacting_2 || totalTokens_2 > 0 || elapsedMs_2 > Qn || Boolean(u),
    St = columns - mt - 5,
    pt = X && St > thinkingWidth_2;
  if (!pt && X && statusText_2.kind === "thinking" && (effortSuffix_2 || progressiveThinkingBase_2 !== "thinking")) {
    if (St > ze) Q = "thinking", thinkingWidth_2 = ze, pt = !0;
  }
  let It = pt ? thinkingWidth_2 + ut : 0,
    _t = ft && St > It + timerWidth_2,
    Nt = It + (_t ? timerWidth_2 + ut : 0),
    Pt = ft && totalTokens_2 > 0 && St > Nt + tokensWidth_2,
    Ct = pt && statusText_2.kind === "thinking" && !u && !_t && !Pt,
    Et = thinkingIntensity_3 > 0 ? hv(d.warning) : null,
    rt = no(time_2, thinkingIntensity_3, Et),
    Lt = !Et && thinkingIntensity_3 > 0.5 ? "warning" : void 0,
    color_6 = thinkingIntensity_3 > 0 ? "warning" : void 0,
    children_4 = [...(u ? [e(n, {
      dimColor: !0,
      children: u
    }, "suffix")] : []), ...(!b && _t ? [e(n, {
      dimColor: !0,
      children: et
    }, "elapsedTime")] : []), ...(!b && Pt ? [r(s, {
      flexDirection: "row",
      children: [e(sn, {
        mode: mode_3
      }), r(n, {
        dimColor: !0,
        children: [tokenCount_2, " tokens"]
      })]
    }, "tokens")] : []), ...(!b && pt && Q ? [statusText_2.kind === "thinking" && !reducedMotion_2 ? e(n, {
      color: Lt ?? rt,
      children: Ct ? `(${Q})` : Q
    }, "thinking") : e(n, {
      dimColor: !color_6,
      color: color_6,
      children: Q
    }, "thinking")] : [])],
    xt = children_4.length > 0 ? Ct ? e(Ce, {
      children: children_4
    }) : r(ne, {
      children: [e(n, {
        dimColor: !0,
        children: "("
      }), e(Ce, {
        children: children_4
      }), e(n, {
        dimColor: !0,
        children: ")"
      })]
    }) : null;
  if (isCompacting_2 && z === null && q) return e(s, {
    ref: I,
    flexDirection: "column",
    marginTop: 1,
    width: "100%",
    children: e(CGt, {
      tone: "dim",
      text: bh(message_2, "\u2026")
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
        columns: columns
      }) : r(ne, {
        children: [e(rke, {
          frame: frame_2,
          messageColor: messageColor,
          stalledIntensity: overrideColor_2 ? 0 : stalledIntensity_4,
          thinkingIntensity: overrideColor_2 ? 0 : thinkingIntensity_3,
          reducedMotion: reducedMotion_2,
          time: time_2
        }), e(Nmn, {
          message: message_2,
          mode: mode_3,
          messageColor: messageColor,
          glimmerIndex: glimmerIndex_3,
          flashOpacity: flashOpacity_3,
          shimmerColor: shimmerColor,
          stalledIntensity: overrideColor_2 ? 0 : stalledIntensity_4,
          thinkingIntensity: overrideColor_2 ? 0 : thinkingIntensity_3
        }), xt]
      })
    })
  });
}
function G3n(a) {
  let m = S(57),
    {
      status: status,
      columns: columns_2
    } = a,
    o = Math.max(0, Math.ceil((status.deadline - Date.now()) / 1000)) * 1000,
    h;
  if (m[0] !== status.kind) h = status.kind === "low_priority_waiting" ? Joe().waitBanner : null, m[0] = status.kind, m[1] = h;else h = m[1];
  let k = h;
  const mostSignificantOnly = o >= 300000;
  let _;
  if (m[2] !== o || m[3] !== mostSignificantOnly) _ = cn(o, {
    mostSignificantOnly: mostSignificantOnly
  }), m[2] = o, m[3] = mostSignificantOnly, m[4] = _;else _ = m[4];
  let x = _,
    B;
  if (m[5] === w) B = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: "error",
      children: children_5
    })
  }), m[5] = B;else B = m[5];
  let P = B;
  if (status.kind === "stalled") {
    let u;
    if (m[6] === w) u = e(n, {
      color: "error",
      children: "Waiting for API response"
    }), m[6] = u;else u = m[6];
    let R;
    if (m[7] !== x) R = r(ne, {
      children: [P, r(s, {
        flexShrink: 1,
        children: [u, r(n, {
          dimColor: !0,
          children: [" \xB7 will retry in ", x, " \xB7 check your network"]
        })]
      })]
    }), m[7] = x, m[8] = R;else R = m[8];
    return R;
  }
  if (status.kind === "low_priority_waiting") {
    let children_7 = ` \xB7 next try in ${x} \xB7 attempt ${status.attempt} \xB7 esc to interrupt`;
    let V = Math.max(10, columns_2 - 2 - ce(children_7) - 2);
    let u;
    if (m[9] === w) u = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: "warning",
        children: children_5
      })
    }), m[9] = u;else u = m[9];
    const R = k ?? "";
    let children_6;
    if (m[10] !== V || m[11] !== R) children_6 = ct(R, V), m[10] = V, m[11] = R, m[12] = children_6;else children_6 = m[12];
    let T;
    if (m[13] !== children_6) T = e(n, {
      color: "warning",
      children: children_6
    }), m[13] = children_6, m[14] = T;else T = m[14];
    let L;
    if (m[15] !== children_7) L = e(n, {
      dimColor: !0,
      children: children_7
    }), m[15] = children_7, m[16] = L;else L = m[16];
    let N;
    if (m[17] !== T || m[18] !== L) N = r(ne, {
      children: [u, r(s, {
        flexShrink: 1,
        children: [T, L]
      })]
    }), m[17] = T, m[18] = L, m[19] = N;else N = m[19];
    return N;
  }
  if (status.kind === "auto_mode_unavailable") {
    let u;
    if (m[20] === w) u = e(n, {
      color: "error",
      children: "Auto mode check unavailable"
    }), m[20] = u;else u = m[20];
    const R = ` \xB7 next try in ${x} \xB7 attempt ${status.attempt}/${status.maxRetries} \xB7 `;
    let C;
    if (m[21] === w) C = e(Y, {
      chord: "escape",
      action: "interrupt",
      format: {
        keyCase: "lower"
      }
    }), m[21] = C;else C = m[21];
    let T;
    if (m[22] !== R) T = r(ne, {
      children: [P, r(s, {
        flexShrink: 1,
        children: [u, r(n, {
          dimColor: !0,
          children: [R, C]
        })]
      })]
    }), m[22] = R, m[23] = T;else T = m[23];
    return T;
  }
  let noResponse = status.error.noResponse;
  if (noResponse) {
    let z = status.attempt >= status.maxRetries;
    let u;
    if (m[24] !== noResponse.retryWaitMs) u = Mw(noResponse.retryWaitMs), m[24] = noResponse.retryWaitMs, m[25] = u;else u = m[25];
    let it = u;
    let children_9 = z ? ` \xB7 retrying once, waiting up to ${it}` : ` \xB7 retrying, waiting up to ${it} \xB7 attempt ${status.attempt}/${status.maxRetries}`;
    let p = Math.max(10, columns_2 - 2 - ce(children_9) - 2);
    let R;
    if (m[26] !== noResponse.waitedMs) R = Mw(noResponse.waitedMs), m[26] = noResponse.waitedMs, m[27] = R;else R = m[27];
    const C = `No response from the API after ${R}`;
    let children_8;
    if (m[28] !== p || m[29] !== C) children_8 = ct(C, p), m[28] = p, m[29] = C, m[30] = children_8;else children_8 = m[30];
    let L;
    if (m[31] !== children_8) L = e(n, {
      color: "error",
      children: children_8
    }), m[31] = children_8, m[32] = L;else L = m[32];
    let N;
    if (m[33] !== children_9) N = e(n, {
      dimColor: !0,
      children: children_9
    }), m[33] = children_9, m[34] = N;else N = m[34];
    let d;
    if (m[35] !== N || m[36] !== L) d = r(s, {
      children: [L, N]
    }), m[35] = N, m[36] = L, m[37] = d;else d = m[37];
    let b;
    if (m[38] === w) b = e(n, {
      dimColor: !0,
      children: "A proxy or gateway that buffers streaming responses can cause this \xB7 set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait"
    }), m[38] = b;else b = m[38];
    let q;
    if (m[39] !== d) q = r(ne, {
      children: [P, r(s, {
        flexBasis: 0,
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        children: [d, b]
      })]
    }), m[39] = d, m[40] = q;else q = m[40];
    return q;
  }
  let rateLimits = status.error.rateLimits,
    u;
  if (m[41] !== rateLimits) u = rateLimits?.resetsAt ? ` (${lP(rateLimits.resetsAt)})` : "", m[41] = rateLimits, m[42] = u;else u = m[42];
  let children_11 = ` \xB7 Retrying in ${x}${u} \xB7 attempt ${status.attempt}/${status.maxRetries}`,
    Rt = status.attempt >= Math.min(3, status.maxRetries) || status.error.isNetworkDown || status.error.connection?.isSSLError || rateLimits,
    R;
  if (m[43] !== rateLimits || m[44] !== Rt || m[45] !== status.error.formatted) {
    let tt = rateLimits?.rateLimitType ? w9e(rateLimits.rateLimitType) : "usage limit";
    R = !Rt ? v5n : rateLimits ? `${tt[0]?.toUpperCase()}${tt.slice(1)} reached` : status.error.formatted;
    m[43] = rateLimits, m[44] = Rt, m[45] = status.error.formatted, m[46] = R;
  } else R = m[46];
  let K = R,
    J = Math.max(10, columns_2 - 2 - ce(children_11) - 2),
    C;
  if (m[47] !== J || m[48] !== K) C = ct(K, J), m[47] = J, m[48] = K, m[49] = C;else C = m[49];
  let children_10 = C,
    T;
  if (m[50] !== children_10) T = e(n, {
    color: "error",
    children: children_10
  }), m[50] = children_10, m[51] = T;else T = m[51];
  let L;
  if (m[52] !== children_11) L = e(n, {
    dimColor: !0,
    children: children_11
  }), m[52] = children_11, m[53] = L;else L = m[53];
  let N;
  if (m[54] !== T || m[55] !== L) N = r(ne, {
    children: [P, r(s, {
      flexShrink: 1,
      children: [T, L]
    })]
  }), m[54] = T, m[55] = L, m[56] = N;else N = m[56];
  return N;
}
function sn(a) {
  let c = S(2),
    {
      mode: mode_4
    } = a;
  switch (mode_4) {
    case "tool-input":
    case "tool-use":
    case "responding":
    case "thinking":
      {
        let o;
        if (c[0] === w) o = e(s, {
          width: 2,
          children: e(n, {
            "aria-hidden": !0,
            dimColor: !0,
            children: re.arrowDown
          })
        }), c[0] = o;else o = c[0];
        return o;
      }
    case "requesting":
      {
        let o;
        if (c[1] === w) o = e(s, {
          width: 2,
          children: e(n, {
            "aria-hidden": !0,
            dimColor: !0,
            children: re.arrowUp
          })
        }), c[1] = o;else o = c[1];
        return o;
      }
  }
}
function or(I) {
  return I.isBriefOnly;
}
function rr(gt) {
  return gt.viewingAgentTaskId;
}
function ir(P) {
  return P.settings.prefersReducedMotion;
}
var suffix = "\u2026";
function vWr(a) {
  let g = S(25),
    {
      mode: mode_5,
      overrideMessage: overrideMessage,
      waitLine: waitLine,
      overrideColor: overrideColor_3,
      overrideShimmerColor: overrideShimmerColor,
      isCompacting: isCompacting_3,
      isResponseHeld: isResponseHeld_3,
      compactingHintText: compactingHintText,
      compactingStartTime: compactingStartTime_3,
      turnEffort: turnEffort,
      turnModel: turnModel,
      sentEffort: sentEffort,
      retryStatus: retryStatus,
      outputLimitRecovery: outputLimitRecovery_3,
      defaultVerb: V
    } = qGt(a.agentId),
    message_3 = overrideMessage ?? waitLine,
    T = G(or),
    L = G(rr),
    CLAUDE_CODE_BRIEF = i.CLAUDE_CODE_BRIEF,
    z,
    it;
  if (g[0] !== V || g[1] !== mode_5 || g[2] !== message_3 || g[3] !== a.agentId) z = () => ({
    requestId: a.agentId ?? "main",
    props: {
      word: V,
      message: message_3,
      suffix: suffix,
      mode: mode_5
    }
  }), it = [a.agentId, V, message_3, mode_5], g[0] = V, g[1] = mode_5, g[2] = message_3, g[3] = a.agentId, g[4] = z, g[5] = it;else z = g[4], it = g[5];
  let H = Bc.useRenderInput("Spinner", z, it),
    p;
  if (g[6] !== T || g[7] !== L) p = bY() && (CLAUDE_CODE_BRIEF || v("tengu_kairos_brief", !1)) && T && !L, g[6] = T, g[7] = L, g[8] = p;else p = g[8];
  let d = p,
    b;
  if (g[9] !== d || g[10] !== compactingHintText || g[11] !== compactingStartTime_3 || g[12] !== isCompacting_3 || g[13] !== isResponseHeld_3 || g[14] !== mode_5 || g[15] !== outputLimitRecovery_3 || g[16] !== overrideColor_3 || g[17] !== overrideShimmerColor || g[18] !== a || g[19] !== retryStatus || g[20] !== sentEffort || g[21] !== turnEffort || g[22] !== turnModel || g[23] !== waitLine) b = q => d ? e(Mn, {
    mode: mode_5,
    overrideMessage: q.props.message
  }) : e(yn, {
    ...a,
    mode: mode_5,
    overrideMessage: q.props.message,
    overrideColor: overrideColor_3,
    overrideShimmerColor: overrideShimmerColor,
    isCompacting: isCompacting_3,
    isResponseHeld: isResponseHeld_3 || waitLine !== null,
    compactingHintText: compactingHintText,
    compactingStartTime: compactingStartTime_3,
    turnEffort: turnEffort,
    turnModel: turnModel,
    sentEffort: sentEffort,
    retryStatus: retryStatus,
    outputLimitRecovery: outputLimitRecovery_3,
    defaultVerb: q.props.word,
    suffix: q.props.suffix ?? suffix
  }), g[9] = d, g[10] = compactingHintText, g[11] = compactingStartTime_3, g[12] = isCompacting_3, g[13] = isResponseHeld_3, g[14] = mode_5, g[15] = outputLimitRecovery_3, g[16] = overrideColor_3, g[17] = overrideShimmerColor, g[18] = a, g[19] = retryStatus, g[20] = sentEffort, g[21] = turnEffort, g[22] = turnModel, g[23] = waitLine, g[24] = b;else b = g[24];
  return Bc.useRenderHook(H, b);
}
function yn({
  mode: mode_6,
  loadingStartTimeRef: loadingStartTimeRef_2,
  totalPausedMsRef: totalPausedMsRef_2,
  pauseStartTimeRef: pauseStartTimeRef_2,
  responseLengthRef: responseLengthRef_2,
  overrideColor: overrideColor_4,
  overrideShimmerColor: overrideShimmerColor_2,
  overrideMessage: overrideMessage_2,
  isCompacting: isCompacting_4,
  isResponseHeld: isResponseHeld_4,
  compactingHintText: B,
  compactingStartTime: compactingStartTime_4,
  spinnerSuffix: spinnerSuffix,
  verbose: verbose_2,
  hasActiveTools: hasActiveTools_3 = !1,
  toolWindowStartedAt: toolWindowStartedAt_3 = null,
  turnEffort: turnEffort_2,
  turnModel: turnModel_2,
  sentEffort: sentEffort_2,
  retryStatus: retryStatus_2,
  outputLimitRecovery: outputLimitRecovery_4,
  defaultVerb: defaultVerb,
  suffix: suffix_2,
  agentId: agentId_3
}) {
  let p = Ic(),
    d = ot(),
    reducedMotion_3 = j_(p.prefersReducedMotion) || d,
    q = G(E => E.spinnerTip),
    I = G(E => E.spinnerTipLabel),
    gt = G(E => E.briefTranscript),
    ht = G(E => E.expandedView) === "tasks",
    Rt = Re(),
    paddingLeft = $E(verbose_2) ? FPe : 0,
    columns_3 = Math.max(1, Rt.columns - paddingLeft),
    tasks = oke(),
    thinkingStatus_3 = Xe(mode_6),
    lt = agentId_3 === void 0 || agentId_3 === st(),
    Tt = lt ? tasks?.find(E => E.status !== "pending" && E.status !== "completed") : void 0,
    et = lt ? nr(tasks) : void 0,
    [yt] = y(() => gK(nhn()) ?? "Working"),
    Mt = Tt ? [Tt.activeForm, Tt.subject].map(item => item?.replace(/\s+/g, " ").trim()).find(Boolean) : void 0,
    vt = overrideMessage_2 ?? (Mt === void 0 ? void 0 : wFr(Mt, columns_3)) ?? (defaultVerb || yt),
    message_4 = suffix_2 === suffix && Twt.test(vt) ? vt : vt + suffix_2;
  O(() => {
    let E = "spinner-" + mode_6;
    return XH.startCLIActivity(E), () => {
      XH.endCLIActivity(E);
    };
  }, [mode_6]);
  let Q = ig(),
    effortSuffix_3 = fFt(turnModel_2 ?? at(), Q, turnEffort_2 ?? void 0, sentEffort_2 ?? void 0),
    mt = pauseStartTimeRef_2.current !== null ? pauseStartTimeRef_2.current - loadingStartTimeRef_2.current - totalPausedMsRef_2.current : Date.now() - loadingStartTimeRef_2.current - totalPausedMsRef_2.current,
    ut = "claude",
    X = "claudeShimmer",
    messageColor_2 = overrideColor_4 ?? ut,
    shimmerColor_2 = overrideShimmerColor_2 ?? X,
    showToolCallTimer_3 = v("tengu_shining_fractals", !1),
    It = !1,
    _t = p.spinnerTipsEnabled !== !1,
    Nt = _t && mt > 1800000,
    Pt = _t && mt > 30000 && !fe().btwUseCount,
    Ct = It ? q : SOe() ? q : Nt && !et ? "Use /clear to start fresh when switching topics and free up context" : Pt && !et ? "Use /btw to ask a quick side question without interrupting Claude's current work" : q,
    Et = Ct === q && I ? I : "Tip",
    children_13 = et ? `Next: ${et.subject.replace(/\s+/g, " ").trim()}` : q === S7n && gt ? dri : Ct ? `${Et}: ${Ct}` : void 0,
    children_12;
  if (retryStatus_2?.kind === "retrying") {
    let E = retryStatus_2.error.status === 529 || retryStatus_2.error.formatted.toLowerCase().includes("overload"),
      wt = retryStatus_2.attempt >= Math.min(3, retryStatus_2.maxRetries);
    if (E && wt) children_12 = uZr().trim();
  }
  return r(s, {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    paddingLeft: paddingLeft,
    children: [e(rn, {
      mode: mode_6,
      reducedMotion: reducedMotion_3,
      hasActiveTools: hasActiveTools_3,
      toolWindowStartedAt: toolWindowStartedAt_3,
      responseLengthRef: responseLengthRef_2,
      message: message_4,
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
      isResponseHeld: isResponseHeld_4,
      showToolCallTimer: showToolCallTimer_3,
      retryStatus: retryStatus_2,
      outputLimitRecovery: outputLimitRecovery_4,
      agentId: agentId_3
    }), lt && ht && tasks && tasks.length > 0 ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Ye, {
        children: e(TWr, {
          tasks: tasks
        })
      })
    }) : isCompacting_4 && B ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Ye, {
        children: e(n, {
          dimColor: !0,
          children: B
        })
      })
    }) : retryStatus_2 ? children_12 ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Ye, {
        children: e(n, {
          dimColor: !0,
          children: children_12
        })
      })
    }) : null : children_13 ? e(s, {
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
              command: command,
              args: args,
              color: "suggestion"
            })
          })]
        }) : e(n, {
          dimColor: !0,
          wrap: et ? "truncate-end" : "wrap",
          children: children_13
        })
      })
    }) : null]
  });
}
var paddingLeft_2 = 2,
  Vt = 3,
  zo = 12,
  Jo = 1;
function Qt(a, t, c) {
  let rightText = t > 0 ? `${t} in background` : "",
    labelBudget = a - paddingLeft_2 - Vt,
    labelBudget_2 = labelBudget - (rightText ? 1 + ce(rightText) : 0);
  if (rightText && labelBudget_2 < (c ? zo : Jo)) return {
    labelBudget: labelBudget,
    rightText: ""
  };
  return {
    labelBudget: labelBudget_2,
    rightText: rightText
  };
}
function Mn({
  mode: mode_7,
  overrideMessage: overrideMessage_3
}) {
  let c = Ic(),
    o = ot(),
    m = j_(c.prefersReducedMotion) || o,
    [h] = y(() => gK(nhn()) ?? "Working"),
    k = G(d => d.remoteConnectionStatus);
  O(() => {
    let d = "spinner-" + mode_7;
    return XH.startCLIActivity(d), () => {
      XH.endCLIActivity(d);
    };
  }, [mode_7]);
  let [, M] = pl(m ? null : 120),
    _ = G(d => U(Object.values(d.tasks), u_) + d.remoteBackgroundTasks.length),
    x = k === "reconnecting" || k === "disconnected",
    {
      columns: columns_4
    } = Re(),
    {
      labelBudget: labelBudget_3,
      rightText: u
    } = Qt(columns_4, _, x),
    R = ct(overrideMessage_3 ?? h, labelBudget_3),
    W = ct(k === "reconnecting" ? "Reconnecting" : "Disconnected", labelBudget_3),
    V = x ? W : R,
    C = Math.floor(M / 300) % 3,
    children_14 = m ? Twt.test(V) ? "   " : "\u2026  " : ".".repeat(C + 1).padEnd(3),
    L = Z(() => ce(R), [R]),
    N = m || x ? -100 : U$o(Math.floor(M / $$o), L),
    {
      before: g,
      shimmer: z,
      after: it
    } = g2t(R, N),
    H = (x ? ce(W) : L) + Vt,
    p = Math.max(1, columns_4 - paddingLeft_2 - H - ce(u));
  return r(s, {
    flexDirection: "row",
    width: "100%",
    marginTop: 1,
    paddingLeft: paddingLeft_2,
    children: [x ? e(n, {
      color: "error",
      children: W + children_14
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
        children: children_14
      })]
    }), u ? r(ne, {
      children: [e(n, {
        children: " ".repeat(p)
      }), e(n, {
        dimColor: !0,
        children: u
      })]
    }) : null]
  });
}
function sHo() {
  let a = G(B => B.remoteConnectionStatus),
    t = G(B => U(Object.values(B.tasks), u_) + B.remoteBackgroundTasks.length),
    {
      columns: columns_5
    } = Re(),
    o = a === "reconnecting" || a === "disconnected",
    {
      labelBudget: labelBudget_4,
      rightText: h
    } = Qt(columns_5, t, o),
    k = a === "reconnecting" ? 1 : 0,
    M = ct(a === "reconnecting" ? "Reconnecting" : "Disconnected", labelBudget_4 + Vt - k),
    children_15 = !o ? "" : a === "reconnecting" && !M.endsWith("\u2026") ? M + "\u2026" : M;
  if (!children_15 && !h) return e(s, {
    height: 2
  });
  let x = Math.max(1, columns_5 - paddingLeft_2 - ce(children_15) - ce(h));
  return e(s, {
    marginTop: 1,
    paddingLeft: paddingLeft_2,
    children: r(n, {
      children: [children_15 ? e(n, {
        color: "error",
        children: children_15
      }) : null, h ? r(ne, {
        children: [e(n, {
          children: " ".repeat(x)
        }), e(n, {
          dimColor: !0,
          children: h
        })]
      }) : null]
    })
  });
}
function Oa() {
  let m = S(9),
    a = ot(),
    t = j_(xs(ir)) || a,
    [ref, o] = pl(t ? null : 120);
  if (t) {
    let children_16;
    if (m[0] === w) children_16 = e(n, {
      color: "text",
      children: "\u25CF"
    }), m[0] = children_16;else children_16 = m[0];
    let k;
    if (m[1] !== ref) k = e(s, {
      ref: ref,
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: children_16
    }), m[1] = ref, m[2] = k;else k = m[2];
    return k;
  }
  let h;
  if (m[3] === w) h = RYe(), m[3] = h;else h = m[3];
  let M = h,
    _ = Math.floor(o / 120) % M.length;
  const children_17 = M[_];
  let children_18;
  if (m[4] !== children_17) children_18 = e(n, {
    color: "text",
    children: children_17
  }), m[4] = children_17, m[5] = children_18;else children_18 = m[5];
  let B;
  if (m[6] !== ref || m[7] !== children_18) B = e(s, {
    ref: ref,
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: children_18
  }), m[6] = ref, m[7] = children_18, m[8] = B;else B = m[8];
  return B;
}
function A8s({
  entries: entries,
  responseLength: t,
  event: event
}) {
  if (event.type === "start") return entries.push({
    id: event.id,
    responseLengthBaseline: t
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
      if (o.sawEstimatedTokensThisBlock) {
        o.thinkingTokenEstimate = Math.max(o.thinkingTokenEstimate ?? 0, Math.ceil(event.chars / 4));
        let m = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
        return Math.max(t, m + o.thinkingTokenEstimate * 4);
      }
      return t + event.chars;
    }
    return t;
  }
  if (o.outputTokens = event.outputTokens, event.id == null) return Math.max(t, o.responseLengthBaseline + event.outputTokens * 4);
  return t;
}
function nr(a) {
  if (!a) return;
  let t = a.filter(item => item.status === "pending");
  if (t.length === 0) return;
  let c = new Set(a.filter(item => item.status !== "completed").map(item => item.id));
  return t.find(item => !item.blockedBy.some(item => c.has(item))) ?? t[0];
}
export { Nmn, G3n, vWr, sHo, Oa, A8s };