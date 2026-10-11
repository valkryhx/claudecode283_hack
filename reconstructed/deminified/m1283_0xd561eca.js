// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { qe, pH } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { it, x, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { gT } from "B:/~BUN/root/chunk-1x7a47hz.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { yC as children_11 } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ie, ot, Y8e, Zt, OY, is, ud } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { s, n, _t, Ta } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { QGt, cIe, uE, eVt, fT, Qv, zC } from "B:/~BUN/root/chunk-9jvj58wt.js";
import { AH, iO, Wl } from "B:/~BUN/root/chunk-xky3bazf.js";
import { Ant, GMn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { W, ys } from "B:/~BUN/root/chunk-h23911wn.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { A3 } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { vLt } from "B:/~BUN/root/chunk-t1afcev5.js";
import { Tue } from "B:/~BUN/root/chunk-jgc88y6c.js";
import { aU } from "B:/~BUN/root/chunk-54b3p8j4.js";
import { Le } from "B:/~BUN/root/chunk-dk0c0nrh.js";
import { Nbe } from "B:/~BUN/root/chunk-qx3qjw47.js";
import { nvn } from "B:/~BUN/root/chunk-cg4vyrmt.js";
import { QD, Qyt, GGt, ver } from "B:/~BUN/root/chunk-1yna3b23.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { Dbe, Jre, ew } from "B:/~BUN/root/chunk-2wfa1xth.js";
import { hh } from "B:/~BUN/root/chunk-nd6xvaae.js";
import { Zv } from "B:/~BUN/root/chunk-bbgg7kv0.js";
import { $p } from "B:/~BUN/root/chunk-sv155qry.js";
import { Ba } from "B:/~BUN/root/chunk-vf07m8qt.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Zrr, eor, ZQe } from "B:/~BUN/root/chunk-mqsfaz82.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { km } from "B:/~BUN/root/chunk-ydzwkn0c.js";
import { R, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { ya } from "B:/~BUN/root/chunk-nfc48pcb.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S, hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
var children = "\u25CF",
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
      frame: frame,
      messageColor: m,
      stalledIntensity: stalledIntensity,
      thinkingIntensity: thinkingIntensity,
      reducedMotion: reducedMotion,
      time: time
    } = l,
    C = stalledIntensity === void 0 ? 0 : stalledIntensity,
    M = thinkingIntensity === void 0 ? 0 : thinkingIntensity,
    E = reducedMotion === void 0 ? !1 : reducedMotion,
    L = time === void 0 ? 0 : time,
    v = gT();
  if (E) {
    let f = 1 - eVt(L, _e);
    let color = M > 0 ? "warning" : m;
    let H = v[color];
    let y;
    if (P[0] !== H || P[1] !== f || P[2] !== M) {
      y = hn;
      rt: {
        let A = H ? zC(H) : null;
        if (A) {
          let _ = fT(A, Ee, 0.5);
          let j = fT(_, A, uE(f));
          const children_2 = e(n, {
            color: Qv(j),
            bold: M >= 0.5,
            children: children
          });
          let O;
          if (P[4] !== children_2) O = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: children_2
          }), P[4] = children_2, P[5] = O;else O = P[5];
          y = O;
          break rt;
        }
      }
      P[0] = H, P[1] = f, P[2] = M, P[3] = y;
    } else y = P[3];
    if (y !== hn) return y;
    const dimColor = f < 0.5;
    const bold = M >= 0.5;
    let G;
    if (P[6] !== color || P[7] !== dimColor || P[8] !== bold) G = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: color,
        dimColor: dimColor,
        bold: bold,
        children: children
      })
    }), P[6] = color, P[7] = dimColor, P[8] = bold, P[9] = G;else G = P[9];
    return G;
  }
  let y;
  if (P[10] === S) y = cIe(), P[10] = y;else y = P[10];
  let p = y,
    children_3 = p[frame % p.length];
  if (C > 0) {
    let I = v[m];
    let h;
    if (P[11] !== I || P[12] !== children_3 || P[13] !== C) {
      h = hn;
      St: {
        let bt = I ? zC(I) : null;
        if (bt) {
          let q = fT(bt, Be, uE(C));
          const children_4 = e(n, {
            color: Qv(q),
            children: children_3
          });
          let G;
          if (P[15] !== children_4) G = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: children_4
          }), P[15] = children_4, P[16] = G;else G = P[16];
          h = G;
          break St;
        }
      }
      P[11] = I, P[12] = children_3, P[13] = C, P[14] = h;
    } else h = P[14];
    if (h !== hn) return h;
    let color_2 = C > 0.5 ? "error" : m;
    let O;
    if (P[17] !== color_2 || P[18] !== children_3) O = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: color_2,
        children: children_3
      })
    }), P[17] = color_2, P[18] = children_3, P[19] = O;else O = P[19];
    return O;
  }
  if (M > 0) {
    let tt = v[m];
    let bold_2, h;
    if (P[20] !== tt || P[21] !== children_3 || P[22] !== v.warning || P[23] !== M) {
      h = hn;
      pt: {
        let K = tt ? zC(tt) : null;
        let at = zC(v.warning);
        bold_2 = M >= 0.5;
        if (K && at) {
          let mt = fT(K, at, uE(M));
          const children_5 = e(n, {
            bold: bold_2,
            color: Qv(mt),
            children: children_3
          });
          let G;
          if (P[26] !== children_5) G = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: children_5
          }), P[26] = children_5, P[27] = G;else G = P[27];
          h = G;
          break pt;
        }
      }
      P[20] = tt, P[21] = children_3, P[22] = v.warning, P[23] = M, P[24] = bold_2, P[25] = h;
    } else bold_2 = P[24], h = P[25];
    if (h !== hn) return h;
    let color_3 = M > 0.5 ? "warning" : m;
    let O;
    if (P[28] !== bold_2 || P[29] !== color_3 || P[30] !== children_3) O = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        bold: bold_2,
        color: color_3,
        children: children_3
      })
    }), P[28] = bold_2, P[29] = color_3, P[30] = children_3, P[31] = O;else O = P[31];
    return O;
  }
  let h;
  if (P[32] !== m || P[33] !== children_3) h = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: m,
      children: children_3
    })
  }), P[32] = m, P[33] = children_3, P[34] = h;else h = P[34];
  return h;
}
N();
N();
var zt = 150;
function me(l) {
  let E = w(8),
    {
      tone: tone,
      text: text
    } = l,
    o = Zv(),
    u = _t(),
    reducedMotion_2 = o || u,
    [ref, C] = Ta(reducedMotion_2 ? null : zt);
  const frame_2 = Math.floor(C / zt);
  let children_6;
  if (E[0] !== reducedMotion_2 || E[1] !== frame_2 || E[2] !== text || E[3] !== tone) children_6 = e(Dbe, {
    state: "live",
    tone: tone,
    text: text,
    linkify: !1,
    frame: frame_2,
    reducedMotion: reducedMotion_2
  }), E[0] = reducedMotion_2, E[1] = frame_2, E[2] = text, E[3] = tone, E[4] = children_6;else children_6 = E[4];
  let v;
  if (E[5] !== ref || E[6] !== children_6) v = e(s, {
    ref: ref,
    flexDirection: "column",
    children: children_6
  }), E[5] = ref, E[6] = children_6, E[7] = v;else v = E[7];
  return v;
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
      mode: mode,
      messageColor: o,
      glimmerIndex: glimmerIndex,
      flashOpacity: flashOpacity,
      shimmerColor: b,
      stalledIntensity: stalledIntensity_2,
      thinkingIntensity: thinkingIntensity_2
    } = l,
    E = stalledIntensity_2 === void 0 ? 0 : stalledIntensity_2,
    L = thinkingIntensity_2 === void 0 ? 0 : thinkingIntensity_2,
    v = gT(),
    segments;
  if (f[0] !== t) {
    segments = [];
    for (const {
      segment: segment
    } of ya().segment(t)) segments.push({
      segment: segment,
      width: ie(segment)
    });
    f[0] = t, f[1] = segments;
  } else segments = f[1];
  let messageWidth;
  if (f[2] !== t) messageWidth = ie(t), f[2] = t, f[3] = messageWidth;else messageWidth = f[3];
  let y;
  if (f[4] !== segments || f[5] !== messageWidth) y = {
    segments: segments,
    messageWidth: messageWidth
  }, f[4] = segments, f[5] = messageWidth, f[6] = y;else y = f[6];
  let {
    segments: segments_2,
    messageWidth: messageWidth_2
  } = y;
  if (!t) {
    return null;
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
          let color_4 = Qv(rt);
          let p;
          if (f[11] !== color_4 || f[12] !== t) p = e(n, {
            color: color_4,
            children: t
          }), f[11] = color_4, f[12] = t, f[13] = p;else p = f[13];
          let d;
          if (f[14] !== color_4) d = e(n, {
            color: color_4,
            children: " "
          }), f[14] = color_4, f[15] = d;else d = f[15];
          let I;
          if (f[16] !== p || f[17] !== d) I = r(V, {
            children: [p, d]
          }), f[16] = p, f[17] = d, f[18] = I;else I = f[18];
          h = I;
          break bt;
        }
      }
      f[7] = j, f[8] = t, f[9] = E, f[10] = h;
    } else h = f[10];
    if (h !== hn) return h;
    let color_5 = E > 0.5 ? "error" : o;
    let p;
    if (f[19] !== color_5 || f[20] !== t) p = e(n, {
      color: color_5,
      children: t
    }), f[19] = color_5, f[20] = t, f[21] = p;else p = f[21];
    let d;
    if (f[22] !== color_5) d = e(n, {
      color: color_5,
      children: " "
    }), f[22] = color_5, f[23] = d;else d = f[23];
    let I;
    if (f[24] !== p || f[25] !== d) I = r(V, {
      children: [p, d]
    }), f[24] = p, f[25] = d, f[26] = I;else I = f[26];
    return I;
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
          let color_6 = Qv(J);
          let p;
          if (f[32] !== color_6 || f[33] !== t) p = e(n, {
            color: color_6,
            children: t
          }), f[32] = color_6, f[33] = t, f[34] = p;else p = f[34];
          let d;
          if (f[35] !== color_6) d = e(n, {
            color: color_6,
            children: " "
          }), f[35] = color_6, f[36] = d;else d = f[36];
          let I;
          if (f[37] !== p || f[38] !== d) I = r(V, {
            children: [p, d]
          }), f[37] = p, f[38] = d, f[39] = I;else I = f[39];
          h = I;
          break at;
        }
      }
      f[27] = St, f[28] = t, f[29] = v.warning, f[30] = L, f[31] = h;
    } else h = f[31];
    if (h !== hn) return h;
    let color_7 = L > 0.5 ? "warning" : o;
    let p;
    if (f[40] !== color_7 || f[41] !== t) p = e(n, {
      color: color_7,
      children: t
    }), f[40] = color_7, f[41] = t, f[42] = p;else p = f[42];
    let d;
    if (f[43] !== color_7) d = e(n, {
      color: color_7,
      children: " "
    }), f[43] = color_7, f[44] = d;else d = f[44];
    let I;
    if (f[45] !== p || f[46] !== d) I = r(V, {
      children: [p, d]
    }), f[45] = p, f[46] = d, f[47] = I;else I = f[47];
    return I;
  }
  if (mode === "tool-use") {
    let pt = v[o];
    let lt = v[b];
    let h;
    if (f[48] !== pt || f[49] !== flashOpacity || f[50] !== t || f[51] !== o || f[52] !== lt) {
      h = hn;
      gt: {
        let It = pt ? zC(pt) : null;
        let vt = lt ? zC(lt) : null;
        if (It && vt) {
          let Wt = fT(It, vt, uE(flashOpacity));
          const p = e(n, {
            color: Qv(Wt),
            children: t
          });
          let d;
          if (f[54] !== o) d = e(n, {
            color: o,
            children: " "
          }), f[54] = o, f[55] = d;else d = f[55];
          let I;
          if (f[56] !== p || f[57] !== d) I = r(V, {
            children: [p, d]
          }), f[56] = p, f[57] = d, f[58] = I;else I = f[58];
          h = I;
          break gt;
        }
      }
      f[48] = pt, f[49] = flashOpacity, f[50] = t, f[51] = o, f[52] = lt, f[53] = h;
    } else h = f[53];
    if (h !== hn) return h;
    let color_8 = flashOpacity > 0.5 ? b : o;
    let p;
    if (f[59] !== color_8 || f[60] !== t) p = e(n, {
      color: color_8,
      children: t
    }), f[59] = color_8, f[60] = t, f[61] = p;else p = f[61];
    let d;
    if (f[62] !== o) d = e(n, {
      color: o,
      children: " "
    }), f[62] = o, f[63] = d;else d = f[63];
    let I;
    if (f[64] !== p || f[65] !== d) I = r(V, {
      children: [p, d]
    }), f[64] = p, f[65] = d, f[66] = I;else I = f[66];
    return I;
  }
  let Rt = glimmerIndex - 1,
    yt = glimmerIndex + 1;
  if (Rt >= messageWidth_2 || yt < 0) {
    let h;
    if (f[67] !== t || f[68] !== o) h = e(n, {
      color: o,
      children: t
    }), f[67] = t, f[68] = o, f[69] = h;else h = f[69];
    let p;
    if (f[70] !== o) p = e(n, {
      color: o,
      children: " "
    }), f[70] = o, f[71] = p;else p = f[71];
    let d;
    if (f[72] !== h || f[73] !== p) d = r(V, {
      children: [h, p]
    }), f[72] = h, f[73] = p, f[74] = d;else d = f[74];
    return d;
  }
  let xt = Math.max(0, Rt),
    children_9,
    children_7,
    children_8;
  if (f[75] !== xt || f[76] !== segments_2 || f[77] !== yt) {
    let dt = 0;
    children_7 = "";
    children_8 = "";
    children_9 = "";
    for (const {
      segment: segment_2,
      width: width
    } of segments_2) {
      if (dt + width <= xt) children_7 = children_7 + segment_2;else if (dt > yt) children_9 = children_9 + segment_2;else children_8 = children_8 + segment_2;
      dt = dt + width;
    }
    f[75] = xt, f[76] = segments_2, f[77] = yt, f[78] = children_9, f[79] = children_7, f[80] = children_8;
  } else children_9 = f[78], children_7 = f[79], children_8 = f[80];
  let h;
  if (f[81] !== children_7 || f[82] !== o) h = children_7 && e(n, {
    color: o,
    children: children_7
  }), f[81] = children_7, f[82] = o, f[83] = h;else h = f[83];
  let p;
  if (f[84] !== children_8 || f[85] !== b) p = e(n, {
    color: b,
    children: children_8
  }), f[84] = children_8, f[85] = b, f[86] = p;else p = f[86];
  let d;
  if (f[87] !== children_9 || f[88] !== o) d = children_9 && e(n, {
    color: o,
    children: children_9
  }), f[87] = children_9, f[88] = o, f[89] = d;else d = f[89];
  let I;
  if (f[90] !== o) I = e(n, {
    color: o,
    children: " "
  }), f[90] = o, f[91] = I;else I = f[91];
  let Bt;
  if (f[92] !== h || f[93] !== p || f[94] !== d || f[95] !== I) Bt = r(V, {
    children: [h, p, d, I]
  }), f[92] = h, f[93] = p, f[94] = d, f[95] = I, f[96] = Bt;else Bt = f[96];
  return Bt;
}
N();
function pn() {
  return {
    toolWindowStart: null,
    toolWindowEnd: null,
    thinkingBurstStart: null,
    wasThinking: !1
  };
}
function gn(l, t) {
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
function kn(l, t) {
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
function Tn(l, t) {
  if (t.hasActiveTools) return 0;
  if (!t.isThinking || l.thinkingBurstStart === null) return 0;
  let m = t.now - l.thinkingBurstStart;
  return Math.min(Math.max((m - 1e4) / 1e4, 0), 1);
}
N();
function bn(l, t, m = !1, o = !1, u) {
  let k = T(l),
    b = T(t),
    C = T(0),
    M = T(l),
    E = T(u);
  if (t > b.current || E.current !== u) E.current = u, k.current = l, b.current = t, C.current = 0, M.current = l;else if (t < b.current) b.current = t;
  let timeSinceLastToken;
  if (m) timeSinceLastToken = 0, k.current = l;else timeSinceLastToken = l - k.current;
  let isStalled = timeSinceLastToken > 1e4 && !m,
    f = isStalled ? Math.min((timeSinceLastToken - 1e4) / 1e4, 1) : 0;
  if (!o && (f > 0 || C.current > 0)) {
    let H = l - M.current;
    if (H >= 50) {
      let P = Math.floor(H / 50),
        current = C.current;
      for (let A = 0; A < P; A++) {
        let _ = f - current;
        if (Math.abs(_) < 0.01) {
          current = f;
          break;
        }
        current += _ * 0.1;
      }
      C.current = current, M.current = l;
    }
  } else C.current = f, M.current = l;
  let stalledIntensity_3 = o ? f : C.current;
  return {
    isStalled: isStalled,
    stalledIntensity: stalledIntensity_3,
    timeSinceLastToken: timeSinceLastToken
  };
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
  return Math.round(t * (QGt().length - 1));
}
function Eo(l) {
  return `thought for ${Math.max(1, Math.round(l / 1000))}s`;
}
function vo({
  attempt: attempt,
  limit: limit
}) {
  return attempt > 1 ? `picking the thought back up (${attempt} of ${limit})` : "picking the thought back up";
}
function Lo(l) {
  if (l >= _o) return "deep in thought";
  if (l >= Io) return "thinking some more";
  if (l >= Co) return "thinking more";
  if (l >= Mo) return "still thinking";
  return "thinking";
}
function Ao(l) {
  return uE((Math.sin(l / 1000 * Math.PI) + 1) / 2);
}
function Sn({
  mode: mode_2,
  reducedMotion: reducedMotion_3,
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
  let [viewportRef, time_2] = Ta(reducedMotion_3 ? null : mode_2 === "requesting" && !glimmerParked ? 50 : 100),
    now = Date.now(),
    elapsedMs = isCompacting && compactingStartTime !== null ? Math.max(0, now - compactingStartTime) : pauseStartTime !== null ? pauseStartTime - loadingStartTime - totalPausedMs : now - loadingStartTime - totalPausedMs,
    rt = T(pn()),
    G = {
      now: now,
      isThinking: mode_2 === "thinking",
      hasActiveTools: hasActiveTools,
      thinkingStatus: thinkingStatus,
      showToolCallTimer: showToolCallTimer,
      outputLimitRecovery: outputLimitRecovery
    };
  rt.current = gn(rt.current, G);
  let statusText = kn(rt.current, G),
    d = Tn(rt.current, G),
    response_length = responseLength,
    bt = hasActiveTools || mode_2 === "thinking" || isCompacting && mode_2 !== "responding" || pauseStartTime !== null,
    {
      isStalled: isStalled_2,
      stalledIntensity: stalledIntensity_4,
      timeSinceLastToken: timeSinceLastToken_2
    } = bn(time_2, response_length, bt, reducedMotion_3, agentId),
    tt = T(new Set()),
    J = T(0),
    K = T(agentId);
  if (K.current !== agentId) K.current = agentId, tt.current = new Set(), J.current = 0;
  if (timeSinceLastToken_2 === 0) {
    if (tt.current.size > 0) i("tengu_spinner_stall_cleared", {
      max_stall_ms: Math.round(J.current),
      mode: c(mode_2),
      override_color: overrideColor != null,
      response_length: response_length,
      thresholds_fired: tt.current.size
    }), tt.current = new Set(), J.current = 0;
  } else {
    if (timeSinceLastToken_2 > J.current) J.current = timeSinceLastToken_2;
    for (let threshold_ms of Ro) if (timeSinceLastToken_2 >= threshold_ms && !tt.current.has(threshold_ms)) tt.current.add(threshold_ms), i("tengu_spinner_stalled_ui", {
      threshold_ms: threshold_ms,
      mode: c(mode_2),
      override_color: overrideColor != null,
      time_since_last_token_ms: Math.round(timeSinceLastToken_2),
      response_length: response_length,
      render_loop_dark: timeSinceLastToken_2 - threshold_ms > 5000
    });
  }
  let frame_3 = reducedMotion_3 ? 0 : Bo(time_2),
    mt = mode_2 === "requesting" ? 50 : wo,
    glimmerMessageWidth = X(() => ie(message), [message]),
    lt = glimmerMessageWidth + 2 * Te,
    It = Math.floor(time_2 / mt),
    glimmerIndex_2 = reducedMotion_3 ? -100 : isStalled_2 ? -100 : mode_2 === "requesting" ? It % lt - Te : glimmerMessageWidth + Te - It % lt,
    flashOpacity_2 = reducedMotion_3 ? 0 : mode_2 === "tool-use" ? Ao(time_2) : 0,
    gt = T(response_length),
    st = T(time_2),
    Rt = T(agentId);
  if (Rt.current !== agentId || Math.abs(response_length - gt.current) > yo) Rt.current = agentId, gt.current = response_length, st.current = time_2;
  if (reducedMotion_3) gt.current = response_length, st.current = time_2;else {
    let nt = Math.floor((time_2 - st.current) / 50);
    if (nt > 0) {
      st.current += nt * 50;
      for (let ht = 0; ht < nt; ht++) {
        let D = response_length - gt.current;
        if (D === 0) break;
        let Mt = Math.abs(D),
          Ct;
        if (Mt < 70) Ct = 3;else if (Mt < 200) Ct = Math.max(8, Math.ceil(Mt * 0.15));else Ct = 50;
        gt.current = D > 0 ? Math.min(gt.current + Ct, response_length) : Math.max(gt.current - Ct, response_length);
      }
    }
  }
  let current_2 = gt.current,
    xt = Math.round(current_2 / 4),
    et = T(0),
    ct = T(time_2);
  if (mode_2 !== "thinking" || hasActiveTools) et.current = 0, ct.current = time_2;else if (!reducedMotion_3 && (d > 0 || et.current > 0)) {
    let nt = time_2 - ct.current;
    if (nt >= 50) {
      let ht = Math.floor(nt / 50),
        current_3 = et.current;
      for (let Mt = 0; Mt < ht; Mt++) {
        let Ct = d - current_3;
        if (Math.abs(Ct) < 0.01) {
          current_3 = d;
          break;
        }
        current_3 += Ct * 0.1;
      }
      et.current = current_3, ct.current = time_2;
    }
  } else et.current = d, ct.current = time_2;
  let thinkingIntensity_3 = reducedMotion_3 ? d : et.current,
    timerText = Zt(elapsedMs),
    timerWidth = ie(timerText),
    totalTokens = xt,
    tokenCount = is(totalTokens),
    Pt = `${Z.arrowDown} ${tokenCount} tokens`,
    tokensWidth = ie(Pt),
    progressiveThinkingBase = statusText.kind === "thinking" ? Lo(statusText.thinkingMs) : "thinking",
    thinkingText;
  switch (statusText.kind) {
    case "tool-running":
      thinkingText = `running tool for ${Zt(statusText.toolMs)}`;
      break;
    case "tool-done":
      thinkingText = `ran tool for ${Zt(statusText.toolMs)}`;
      break;
    case "recovering":
      thinkingText = vo(statusText.recovery);
      break;
    case "thinking":
      thinkingText = `${progressiveThinkingBase}${effortSuffix}`;
      break;
    case "thought-for":
      thinkingText = Eo(statusText.thoughtMs);
      break;
    case "none":
      thinkingText = null;
      break;
  }
  let thinkingWidth = thinkingText ? ie(thinkingText) : 0;
  return {
    viewportRef: viewportRef,
    time: time_2,
    elapsedMs: elapsedMs,
    frame: frame_3,
    glimmerIndex: glimmerIndex_2,
    flashOpacity: flashOpacity_2,
    stalledIntensity: stalledIntensity_4,
    thinkingIntensity: thinkingIntensity_3,
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
function Rn(l) {
  let [t, m] = g(null),
    o = T(null),
    u = T([]),
    k = Yt();
  return R(() => {
    if (l === "thinking") {
      if (o.current === null) {
        for (let b of u.current) b();
        u.current = [], o.current = Date.now(), m("thinking");
      }
    } else if (o.current !== null) {
      let b = Date.now() - o.current,
        C = Math.max(0, 2000 - b);
      o.current = null;
      let M = () => {
        m(b), u.current.push(k.setTimeout(() => m(null), 2000));
      };
      if (C > 0) u.current.push(k.setTimeout(M, C));else M();
    }
  }, [l, k]), R(() => () => {
    for (let b of u.current) b();
    u.current = [];
  }, []), t;
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
  return Qv(m && t > 0 ? fT(k, m, uE(t)) : k);
}
function En({
  mode: mode_3,
  reducedMotion: reducedMotion_4,
  hasActiveTools: hasActiveTools_2,
  responseLengthRef: responseLengthRef,
  message: message_2,
  messageColor: messageColor,
  shimmerColor: shimmerColor,
  overrideColor: overrideColor_2,
  loadingStartTimeRef: loadingStartTimeRef,
  totalPausedMsRef: totalPausedMsRef,
  pauseStartTimeRef: pauseStartTimeRef,
  spinnerSuffix: v,
  verbose: verbose,
  columns: columns,
  thinkingStatus: thinkingStatus_2,
  effortSuffix: effortSuffix_2,
  isCompacting: isCompacting_2 = !1,
  compactingStartTime: compactingStartTime_2 = null,
  showToolCallTimer: showToolCallTimer_2 = !1,
  retryStatus: j = null,
  outputLimitRecovery: outputLimitRecovery_2 = null,
  agentId: agentId_2
}) {
  let rt = Sn({
      mode: mode_3,
      reducedMotion: reducedMotion_4,
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
    G = gT(),
    p = _t(),
    d = ew(verbose),
    {
      viewportRef: I,
      time: time_3,
      elapsedMs: elapsedMs_2,
      frame: frame_4,
      glimmerIndex: glimmerIndex_3,
      flashOpacity: flashOpacity_3,
      stalledIntensity: stalledIntensity_5,
      thinkingIntensity: thinkingIntensity_4,
      statusText: statusText_2,
      progressiveThinkingBase: progressiveThinkingBase_2,
      timerText: pt,
      timerWidth: timerWidth_2,
      totalTokens: totalTokens_2,
      tokenCount: tokenCount_2,
      tokensWidth: tokensWidth_2,
      glimmerMessageWidth: glimmerMessageWidth_2
    } = rt,
    {
      thinkingText: st,
      thinkingWidth: thinkingWidth_2
    } = rt,
    yt = glimmerMessageWidth_2 + 2,
    xt = No,
    et = st !== null,
    ct = verbose || et || isCompacting_2 || totalTokens_2 > 0 || elapsedMs_2 > Oo || Boolean(v),
    ut = columns - yt - 5,
    dt = et && ut > thinkingWidth_2;
  if (!dt && et && statusText_2.kind === "thinking" && (effortSuffix_2 || progressiveThinkingBase_2 !== "thinking")) {
    if (ut > yn) st = "thinking", thinkingWidth_2 = yn, dt = !0;
  }
  let wt = dt ? thinkingWidth_2 + xt : 0,
    kt = ct && ut > wt + timerWidth_2,
    Bt = wt + (kt ? timerWidth_2 + xt : 0),
    Pt = ct && totalTokens_2 > 0 && ut > Bt + tokensWidth_2,
    Et = dt && statusText_2.kind === "thinking" && !v && !kt && !Pt,
    Lt = thinkingIntensity_4 > 0 ? zC(G.warning) : null,
    Q = Do(time_3, thinkingIntensity_4, Lt),
    At = !Lt && thinkingIntensity_4 > 0.5 ? "warning" : void 0,
    color_9 = thinkingIntensity_4 > 0 ? "warning" : void 0,
    children_10 = [...(v ? [e(n, {
      dimColor: !0,
      children: v
    }, "suffix")] : []), ...(!p && kt ? [e(n, {
      dimColor: !0,
      children: pt
    }, "elapsedTime")] : []), ...(!p && Pt ? [r(s, {
      flexDirection: "row",
      children: [e(vn, {
        mode: mode_3
      }), r(n, {
        dimColor: !0,
        children: [tokenCount_2, " tokens"]
      })]
    }, "tokens")] : []), ...(!p && dt && st ? [statusText_2.kind === "thinking" && !reducedMotion_4 ? e(n, {
      color: At ?? Q,
      children: Et ? `(${st})` : st
    }, "thinking") : e(n, {
      dimColor: !color_9,
      color: color_9,
      children: st
    }, "thinking")] : [])],
    D = children_10.length > 0 ? Et ? e(ye, {
      children: children_10
    }) : r(V, {
      children: [e(n, {
        dimColor: !0,
        children: "("
      }), e(ye, {
        children: children_10
      }), e(n, {
        dimColor: !0,
        children: ")"
      })]
    }) : null;
  if (isCompacting_2 && j === null && d) return e(s, {
    ref: I,
    flexDirection: "column",
    marginTop: 1,
    width: "100%",
    children: e(me, {
      tone: "dim",
      text: message_2.replace(/\u2026$/, "")
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
        columns: columns
      }) : r(V, {
        children: [e(Xre, {
          frame: frame_4,
          messageColor: messageColor,
          stalledIntensity: overrideColor_2 ? 0 : stalledIntensity_5,
          thinkingIntensity: overrideColor_2 ? 0 : thinkingIntensity_4,
          reducedMotion: reducedMotion_4,
          time: time_3
        }), e(jyt, {
          message: message_2,
          mode: mode_3,
          messageColor: messageColor,
          glimmerIndex: glimmerIndex_3,
          flashOpacity: flashOpacity_3,
          shimmerColor: shimmerColor,
          stalledIntensity: overrideColor_2 ? 0 : stalledIntensity_5,
          thinkingIntensity: overrideColor_2 ? 0 : thinkingIntensity_4
        }), D]
      })
    })
  });
}
function AGt(l) {
  let u = w(57),
    {
      status: status,
      columns: columns_2
    } = l,
    o = Math.max(0, Math.ceil((status.deadline - Date.now()) / 1000)) * 1000,
    k;
  if (u[0] !== status.kind) k = status.kind === "low_priority_waiting" ? A3().waitBanner : null, u[0] = status.kind, u[1] = k;else k = u[1];
  let b = k;
  const mostSignificantOnly = o >= 300000;
  let M;
  if (u[2] !== o || u[3] !== mostSignificantOnly) M = Zt(o, {
    mostSignificantOnly: mostSignificantOnly
  }), u[2] = o, u[3] = mostSignificantOnly, u[4] = M;else M = u[4];
  let E = M,
    L;
  if (u[5] === S) L = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: "error",
      children: children_11
    })
  }), u[5] = L;else L = u[5];
  let v = L;
  if (status.kind === "stalled") {
    let f;
    if (u[6] === S) f = e(n, {
      color: "error",
      children: "Waiting for API response"
    }), u[6] = f;else f = u[6];
    let B;
    if (u[7] !== E) B = r(V, {
      children: [v, r(s, {
        flexShrink: 1,
        children: [f, r(n, {
          dimColor: !0,
          children: [" \xB7 will retry in ", E, " \xB7 check your network"]
        })]
      })]
    }), u[7] = E, u[8] = B;else B = u[8];
    return B;
  }
  if (status.kind === "low_priority_waiting") {
    let children_13 = ` \xB7 next try in ${E} \xB7 attempt ${status.attempt} \xB7 esc to interrupt`;
    let P = Math.max(10, columns_2 - 2 - ie(children_13) - 2);
    let f;
    if (u[9] === S) f = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: "warning",
        children: children_11
      })
    }), u[9] = f;else f = u[9];
    const B = b ?? "";
    let children_12;
    if (u[10] !== P || u[11] !== B) children_12 = ot(B, P), u[10] = P, u[11] = B, u[12] = children_12;else children_12 = u[12];
    let A;
    if (u[13] !== children_12) A = e(n, {
      color: "warning",
      children: children_12
    }), u[13] = children_12, u[14] = A;else A = u[14];
    let _;
    if (u[15] !== children_13) _ = e(n, {
      dimColor: !0,
      children: children_13
    }), u[15] = children_13, u[16] = _;else _ = u[16];
    let j;
    if (u[17] !== A || u[18] !== _) j = r(V, {
      children: [f, r(s, {
        flexShrink: 1,
        children: [A, _]
      })]
    }), u[17] = A, u[18] = _, u[19] = j;else j = u[19];
    return j;
  }
  if (status.kind === "auto_mode_unavailable") {
    let f;
    if (u[20] === S) f = e(n, {
      color: "error",
      children: "Auto mode check unavailable"
    }), u[20] = f;else f = u[20];
    const B = ` \xB7 next try in ${E} \xB7 attempt ${status.attempt}/${status.maxRetries} \xB7 `;
    let y;
    if (u[21] === S) y = e(F, {
      chord: "escape",
      action: "interrupt",
      format: {
        keyCase: "lower"
      }
    }), u[21] = y;else y = u[21];
    let A;
    if (u[22] !== B) A = r(V, {
      children: [v, r(s, {
        flexShrink: 1,
        children: [f, r(n, {
          dimColor: !0,
          children: [B, y]
        })]
      })]
    }), u[22] = B, u[23] = A;else A = u[23];
    return A;
  }
  let noResponse = status.error.noResponse;
  if (noResponse) {
    let O = status.attempt >= status.maxRetries;
    let f;
    if (u[24] !== noResponse.retryWaitMs) f = OY(noResponse.retryWaitMs), u[24] = noResponse.retryWaitMs, u[25] = f;else f = u[25];
    let rt = f;
    let children_15 = O ? ` \xB7 retrying once, waiting up to ${rt}` : ` \xB7 retrying, waiting up to ${rt} \xB7 attempt ${status.attempt}/${status.maxRetries}`;
    let p = Math.max(10, columns_2 - 2 - ie(children_15) - 2);
    let B;
    if (u[26] !== noResponse.waitedMs) B = OY(noResponse.waitedMs), u[26] = noResponse.waitedMs, u[27] = B;else B = u[27];
    const y = `No response from the API after ${B}`;
    let children_14;
    if (u[28] !== p || u[29] !== y) children_14 = ot(y, p), u[28] = p, u[29] = y, u[30] = children_14;else children_14 = u[30];
    let _;
    if (u[31] !== children_14) _ = e(n, {
      color: "error",
      children: children_14
    }), u[31] = children_14, u[32] = _;else _ = u[32];
    let j;
    if (u[33] !== children_15) j = e(n, {
      dimColor: !0,
      children: children_15
    }), u[33] = children_15, u[34] = j;else j = u[34];
    let d;
    if (u[35] !== j || u[36] !== _) d = r(s, {
      children: [_, j]
    }), u[35] = j, u[36] = _, u[37] = d;else d = u[37];
    let I;
    if (u[38] === S) I = e(n, {
      dimColor: !0,
      children: "A proxy or gateway that buffers streaming responses can cause this \xB7 set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait"
    }), u[38] = I;else I = u[38];
    let bt;
    if (u[39] !== d) bt = r(V, {
      children: [v, r(s, {
        flexBasis: 0,
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        children: [d, I]
      })]
    }), u[39] = d, u[40] = bt;else bt = u[40];
    return bt;
  }
  let rateLimits = status.error.rateLimits,
    f;
  if (u[41] !== rateLimits) f = rateLimits?.resetsAt ? ` (${ud(rateLimits.resetsAt)})` : "", u[41] = rateLimits, u[42] = f;else f = u[42];
  let children_17 = ` \xB7 Retrying in ${E}${f} \xB7 attempt ${status.attempt}/${status.maxRetries}`,
    tt = status.attempt >= Math.min(3, status.maxRetries) || status.error.isNetworkDown || status.error.connection?.isSSLError || rateLimits,
    B;
  if (u[43] !== rateLimits || u[44] !== tt || u[45] !== status.error.formatted) {
    let J = rateLimits?.rateLimitType ? Ant(rateLimits.rateLimitType) : "usage limit";
    B = !tt ? GGt : rateLimits ? `${J[0]?.toUpperCase()}${J.slice(1)} reached` : status.error.formatted;
    u[43] = rateLimits, u[44] = tt, u[45] = status.error.formatted, u[46] = B;
  } else B = u[46];
  let K = B,
    at = Math.max(10, columns_2 - 2 - ie(children_17) - 2),
    y;
  if (u[47] !== at || u[48] !== K) y = ot(K, at), u[47] = at, u[48] = K, u[49] = y;else y = u[49];
  let children_16 = y,
    A;
  if (u[50] !== children_16) A = e(n, {
    color: "error",
    children: children_16
  }), u[50] = children_16, u[51] = A;else A = u[51];
  let _;
  if (u[52] !== children_17) _ = e(n, {
    dimColor: !0,
    children: children_17
  }), u[52] = children_17, u[53] = _;else _ = u[53];
  let j;
  if (u[54] !== A || u[55] !== _) j = r(V, {
    children: [v, r(s, {
      flexShrink: 1,
      children: [A, _]
    })]
  }), u[54] = A, u[55] = _, u[56] = j;else j = u[56];
  return j;
}
function vn(l) {
  let m = w(2),
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
        if (m[0] === S) o = e(s, {
          width: 2,
          children: e(n, {
            "aria-hidden": !0,
            dimColor: !0,
            children: Z.arrowDown
          })
        }), m[0] = o;else o = m[0];
        return o;
      }
    case "requesting":
      {
        let o;
        if (m[1] === S) o = e(s, {
          width: 2,
          children: e(n, {
            "aria-hidden": !0,
            dimColor: !0,
            children: Z.arrowUp
          })
        }), m[1] = o;else o = m[1];
        return o;
      }
  }
}
function Wr(p) {
  return p.isBriefOnly;
}
function Pr(d) {
  return d.viewingAgentTaskId;
}
function Gr(v) {
  return v.settings.prefersReducedMotion;
}
var Ie = /(\u2026|\.\.\.)$/,
  suffix = "\u2026";
function Zwn(l) {
  let y = w(22),
    {
      mode: mode_5,
      overrideMessage: m,
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
    } = ver(l.agentId),
    B = W(Wr),
    H = W(Pr),
    CLAUDE_CODE_BRIEF = a.CLAUDE_CODE_BRIEF,
    A,
    _;
  if (y[0] !== f || y[1] !== mode_5 || y[2] !== m || y[3] !== l.agentId) A = () => ({
    requestId: l.agentId ?? "main",
    props: {
      word: f,
      message: m,
      suffix: suffix,
      mode: mode_5
    }
  }), _ = [l.agentId, f, m, mode_5], y[0] = f, y[1] = mode_5, y[2] = m, y[3] = l.agentId, y[4] = A, y[5] = _;else A = y[4], _ = y[5];
  let j = Wl.useRenderInput("Spinner", A, _),
    h;
  if (y[6] !== B || y[7] !== H) h = pH() && (CLAUDE_CODE_BRIEF || x("tengu_kairos_brief", !1)) && B && !H, y[6] = B, y[7] = H, y[8] = h;else h = y[8];
  let O = h,
    rt;
  if (y[9] !== O || y[10] !== compactingHintText || y[11] !== compactingStartTime_3 || y[12] !== isCompacting_3 || y[13] !== mode_5 || y[14] !== outputLimitRecovery_3 || y[15] !== overrideColor_3 || y[16] !== overrideShimmerColor || y[17] !== l || y[18] !== retryStatus || y[19] !== turnEffort || y[20] !== turnModel) rt = G => O ? e(qn, {
    mode: mode_5,
    overrideMessage: G.props.message
  }) : e(Fn, {
    ...l,
    mode: mode_5,
    overrideMessage: G.props.message,
    overrideColor: overrideColor_3,
    overrideShimmerColor: overrideShimmerColor,
    isCompacting: isCompacting_3,
    compactingHintText: compactingHintText,
    compactingStartTime: compactingStartTime_3,
    turnEffort: turnEffort,
    turnModel: turnModel,
    retryStatus: retryStatus,
    outputLimitRecovery: outputLimitRecovery_3,
    defaultVerb: G.props.word,
    suffix: G.props.suffix ?? suffix
  }), y[9] = O, y[10] = compactingHintText, y[11] = compactingStartTime_3, y[12] = isCompacting_3, y[13] = mode_5, y[14] = outputLimitRecovery_3, y[15] = overrideColor_3, y[16] = overrideShimmerColor, y[17] = l, y[18] = retryStatus, y[19] = turnEffort, y[20] = turnModel, y[21] = rt;else rt = y[21];
  return Wl.useRenderHook(j, rt);
}
function Fn({
  mode: mode_6,
  loadingStartTimeRef: loadingStartTimeRef_2,
  totalPausedMsRef: totalPausedMsRef_2,
  pauseStartTimeRef: pauseStartTimeRef_2,
  responseLengthRef: responseLengthRef_2,
  overrideColor: overrideColor_4,
  overrideShimmerColor: overrideShimmerColor_2,
  overrideMessage: overrideMessage,
  isCompacting: isCompacting_4,
  compactingHintText: E,
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
  let O = Ba(),
    rt = _t(),
    reducedMotion_5 = $p(O.prefersReducedMotion) || rt,
    p = W(D => D.spinnerTip),
    d = W(D => D.spinnerTipLabel),
    I = W(D => D.expandedView) === "tasks",
    bt = ve(),
    paddingLeft = ew(verbose_2) ? Jre : 0,
    columns_3 = Math.max(1, bt.columns - paddingLeft),
    tasks = Nbe(),
    thinkingStatus_3 = Rn(mode_6),
    J = agentId_3 === void 0 || agentId_3 === qe(),
    K = J ? tasks?.find(D => D.status !== "pending" && D.status !== "completed") : void 0,
    at = J ? Or(tasks) : void 0,
    [mt] = g(() => QD(Qyt()) ?? "Working"),
    pt = K ? [K.activeForm, K.subject].map(item => item?.replace(/\s+/g, " ").trim()).find(Boolean) : void 0,
    lt = overrideMessage ?? (pt === void 0 ? void 0 : Y8e(pt, columns_3)) ?? (defaultVerb || mt),
    message_3 = suffix_2 === suffix && Ie.test(lt) ? lt : lt + suffix_2;
  R(() => {
    let D = "spinner-" + mode_6;
    return aU.startCLIActivity(D), () => {
      aU.endCLIActivity(D);
    };
  }, [mode_6]);
  let Wt = hh(),
    effortSuffix_3 = vLt(turnModel_2 ?? it(), Wt, turnEffort_2 ?? void 0),
    st = pauseStartTimeRef_2.current !== null ? pauseStartTimeRef_2.current - loadingStartTimeRef_2.current - totalPausedMsRef_2.current : Date.now() - loadingStartTimeRef_2.current - totalPausedMsRef_2.current,
    Rt = "claude",
    yt = "claudeShimmer",
    messageColor_2 = overrideColor_4 ?? Rt,
    shimmerColor_2 = overrideShimmerColor_2 ?? yt,
    showToolCallTimer_3 = x("tengu_shining_fractals", !1),
    ut = W(D => D.narration),
    dt = W(D => D.briefTranscript),
    wt = !1,
    kt = O.spinnerTipsEnabled !== !1,
    Bt = kt && st > 1800000,
    Pt = kt && st > 30000 && !le().btwUseCount,
    Et = wt ? p : Tue() ? p : Bt && !at ? "Use /clear to start fresh when switching topics and free up context" : Pt && !at ? "Use /btw to ask a quick side question without interrupting Claude's current work" : p,
    Lt = Et === p && d ? d : "Tip",
    children_18 = J && !dt && !retryStatus_2 ? ut?.text : void 0,
    children_21 = children_18 ? void 0 : at ? `Next: ${at.subject.replace(/\s+/g, " ").trim()}` : Et ? `${Lt}: ${Et}` : void 0,
    children_20 = null,
    children_19;
  if (retryStatus_2?.kind === "retrying") {
    let D = retryStatus_2.error.status === 529 || retryStatus_2.error.formatted.toLowerCase().includes("overload"),
      Mt = retryStatus_2.attempt >= Math.min(3, retryStatus_2.maxRetries);
    if (D && Mt) children_19 = GMn().trim();
  }
  return r(s, {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    marginBottom: children_18 ? 1 : 0,
    paddingLeft: paddingLeft,
    children: [e(En, {
      mode: mode_6,
      reducedMotion: reducedMotion_5,
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
    }), J && I && tasks && tasks.length > 0 ? r(s, {
      width: "100%",
      flexDirection: "column",
      children: [children_18 && e(Le, {
        children: e(n, {
          dimColor: !0,
          italic: !0,
          wrap: "truncate-end",
          children: children_18
        })
      }), e(Le, {
        children: e(nvn, {
          tasks: tasks
        })
      })]
    }) : isCompacting_4 && E ? r(s, {
      width: "100%",
      flexDirection: "column",
      children: [children_18 && e(Le, {
        children: e(n, {
          dimColor: !0,
          italic: !0,
          wrap: "truncate-end",
          children: children_18
        })
      }), e(Le, {
        children: e(n, {
          dimColor: !0,
          children: E
        })
      })]
    }) : retryStatus_2 ? children_19 ? e(s, {
      width: "100%",
      flexDirection: "column",
      children: e(Le, {
        children: e(n, {
          dimColor: !0,
          children: children_19
        })
      })
    }) : null : children_18 || children_21 || children_20 ? r(s, {
      width: "100%",
      flexDirection: "column",
      children: [children_20 && e(Le, {
        children: e(n, {
          dimColor: !0,
          children: children_20
        })
      }), children_18 ? e(Le, {
        children: e(n, {
          dimColor: !0,
          italic: !0,
          wrap: "truncate-end",
          children: children_18
        })
      }) : children_21 && e(Le, {
        children: e(n, {
          dimColor: !0,
          wrap: at ? "truncate-end" : "wrap",
          children: children_21
        })
      })]
    }) : null]
  });
}
var paddingLeft_2 = 2,
  Ut = 3,
  Br = 12,
  Er = 1;
function se(l, t, m) {
  let rightText = t > 0 ? `${t} in background` : "",
    labelBudget = l - paddingLeft_2 - Ut,
    labelBudget_2 = labelBudget - (rightText ? 1 + ie(rightText) : 0);
  if (rightText && labelBudget_2 < (m ? Br : Er)) return {
    labelBudget: labelBudget,
    rightText: ""
  };
  return {
    labelBudget: labelBudget_2,
    rightText: rightText
  };
}
function qn({
  mode: mode_7,
  overrideMessage: overrideMessage_2
}) {
  let m = Ba(),
    o = _t(),
    u = $p(m.prefersReducedMotion) || o,
    [k] = g(() => QD(Qyt()) ?? "Working"),
    b = W(d => d.remoteConnectionStatus);
  R(() => {
    let d = "spinner-" + mode_7;
    return aU.startCLIActivity(d), () => {
      aU.endCLIActivity(d);
    };
  }, [mode_7]);
  let [, C] = Ta(u ? null : 120),
    M = W(d => U(Object.values(d.tasks), km) + d.remoteBackgroundTasks.length),
    E = b === "reconnecting" || b === "disconnected",
    {
      columns: columns_4
    } = ve(),
    {
      labelBudget: labelBudget_3,
      rightText: f
    } = se(columns_4, M, E),
    B = ot(overrideMessage_2 ?? k, labelBudget_3),
    H = ot(b === "reconnecting" ? "Reconnecting" : "Disconnected", labelBudget_3),
    P = E ? H : B,
    y = Math.floor(C / 300) % 3,
    children_22 = u ? Ie.test(P) ? "   " : "\u2026  " : ".".repeat(y + 1).padEnd(3),
    _ = X(() => ie(B), [B]),
    j = u || E ? -100 : eor(Math.floor(C / Zrr), _),
    {
      before: h,
      shimmer: O,
      after: rt
    } = ZQe(B, j),
    G = (E ? ie(H) : _) + Ut,
    p = Math.max(1, columns_4 - paddingLeft_2 - G - ie(f));
  return r(s, {
    flexDirection: "row",
    width: "100%",
    marginTop: 1,
    paddingLeft: paddingLeft_2,
    children: [E ? e(n, {
      color: "error",
      children: H + children_22
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
        children: children_22
      })]
    }), f ? r(V, {
      children: [e(n, {
        children: " ".repeat(p)
      }), e(n, {
        color: "subtle",
        children: f
      })]
    }) : null]
  });
}
function ler() {
  let l = W(L => L.remoteConnectionStatus),
    t = W(L => U(Object.values(L.tasks), km) + L.remoteBackgroundTasks.length),
    {
      columns: columns_5
    } = ve(),
    o = l === "reconnecting" || l === "disconnected",
    {
      labelBudget: labelBudget_4,
      rightText: k
    } = se(columns_5, t, o),
    b = l === "reconnecting" ? 1 : 0,
    C = ot(l === "reconnecting" ? "Reconnecting" : "Disconnected", labelBudget_4 + Ut - b),
    children_23 = !o ? "" : l === "reconnecting" && !C.endsWith("\u2026") ? C + "\u2026" : C;
  if (!children_23 && !k) return e(s, {
    height: 2
  });
  let E = Math.max(1, columns_5 - paddingLeft_2 - ie(children_23) - ie(k));
  return e(s, {
    marginTop: 1,
    paddingLeft: paddingLeft_2,
    children: r(n, {
      children: [children_23 ? e(n, {
        color: "error",
        children: children_23
      }) : null, k ? r(V, {
        children: [e(n, {
          children: " ".repeat(E)
        }), e(n, {
          color: "subtle",
          children: k
        })]
      }) : null]
    })
  });
}
function Rs() {
  let u = w(9),
    l = _t(),
    t = $p(ys(Gr)) || l,
    [ref_2, o] = Ta(t ? null : 120);
  if (t) {
    let children_24;
    if (u[0] === S) children_24 = e(n, {
      color: "text",
      children: "\u25CF"
    }), u[0] = children_24;else children_24 = u[0];
    let b;
    if (u[1] !== ref_2) b = e(s, {
      ref: ref_2,
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: children_24
    }), u[1] = ref_2, u[2] = b;else b = u[2];
    return b;
  }
  let k;
  if (u[3] === S) k = cIe(), u[3] = k;else k = u[3];
  let C = k,
    M = Math.floor(o / 120) % C.length;
  const children_25 = C[M];
  let children_26;
  if (u[4] !== children_25) children_26 = e(n, {
    color: "text",
    children: children_25
  }), u[4] = children_25, u[5] = children_26;else children_26 = u[5];
  let L;
  if (u[6] !== ref_2 || u[7] !== children_26) L = e(s, {
    ref: ref_2,
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: children_26
  }), u[6] = ref_2, u[7] = children_26, u[8] = L;else L = u[8];
  return L;
}
function C8r({
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
  let o = event.id != null ? entries.find(item => item.id === event.id) : entries.findLast(u => u.id == null);
  if (!o) return t;
  if (event.type === "content_block_start") return o.thinkingTokenEstimate = 0, o.thinkingBlockBaseline = t, o.sawEstimatedTokensThisBlock = !1, t;
  if (event.type === "thinking_progress") {
    if (o.sawEstimatedTokensThisBlock = !0, o.thinkingTokenEstimate = (o.thinkingTokenEstimate ?? 0) + event.estimatedTokensDelta, o.outputTokens == null && event.id == null) {
      let u = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
      return Math.max(t, u + o.thinkingTokenEstimate * 4);
    }
    return t;
  }
  if (event.type === "thinking_signature") {
    if (event.chars > 0 && o.outputTokens == null) {
      if (o.lastTokenTime = Date.now(), o.sawEstimatedTokensThisBlock) {
        o.thinkingTokenEstimate = Math.max(o.thinkingTokenEstimate ?? 0, Math.ceil(event.chars / 4));
        let k = o.thinkingBlockBaseline ?? o.responseLengthBaseline,
          b = Math.max(t, k + o.thinkingTokenEstimate * 4);
        return o.endResponseLength = b, b;
      }
      let u = t + event.chars;
      return o.endResponseLength = u, u;
    }
    return t;
  }
  if (o.outputTokens = event.outputTokens, o.lastTokenTime = Date.now(), event.id == null) return Math.max(t, o.responseLengthBaseline + event.outputTokens * 4);
  return t;
}
function Or(l) {
  if (!l) return;
  let t = l.filter(item => item.status === "pending");
  if (t.length === 0) return;
  let m = new Set(l.filter(item => item.status !== "completed").map(item => item.id));
  return t.find(item => !item.blockedBy.some(item => m.has(item))) ?? t[0];
}
export { jyt, Xre, AGt, Zwn, ler, Rs, C8r };