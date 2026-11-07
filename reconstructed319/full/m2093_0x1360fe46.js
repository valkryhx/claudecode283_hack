// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  P,
  Yr
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Jo,
  IQi,
  BJ,
  oLr,
  jFs
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  ct,
  cn,
  fxe,
  Ur
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  s,
  n,
  sl
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  pf,
  jm
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  SF
} from "B:/~BUN/root/chunk-p2ta953m.js";
import {
  Tt
} from "B:/~BUN/root/chunk-dw9hahea.js";
import {
  Bl,
  As
} from "B:/~BUN/root/chunk-q8sf8fhe.js";
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  $T
} from "B:/~BUN/root/chunk-9x9jgvy9.js";
import {
  NQn,
  ibn
} from "B:/~BUN/root/chunk-tj9bpqjb.js";
import {
  re,
  eRi
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  gp
} from "B:/~BUN/root/chunk-nyy541yq.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Ko
} from "B:/~BUN/root/chunk-kgvnwy91.js";
import {
  pu,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();

function svt(l, t) {
  let a = (i) => jm(i) ?? pf(i);
  if (t != null) return `${l==null?"":`${a(l)} `}${IQi} ${a(t)}`;
  return l != null ? a(l) : ""
}

function Ot(me) {
  return me.state === "done"
}

function Ft(ge) {
  return ge.state === "error"
}

function _t(ee) {
  return ee.state === "start" || ee.state === "progress"
}

function jt(W) {
  return W.state === "done"
}

function zt(M) {
  return M.state === "error"
}

function Vt(W, M) {
  return e(n, {
    dimColor: !0,
    children: W
  }, M)
}

function sjr(l) {
  let t = new Map,
    a = [],
    i = new Map;
  for (let o of l)
    if (o.type === "workflow_agent") t.set(o.index, o);
    else if (o.type === "workflow_log") a.push(o.message);
  else if (o.type === "workflow_phase") i.set(o.index, {
    title: o.title,
    kind: o.kind
  });
  return {
    agents: [...t.values()].sort((o, u) => o.index - u.index),
    logs: a,
    phaseTitles: i
  }
}

function ae(l, t) {
  if (!l.some((i) => i.phaseIndex != null)) return null;
  let a = new Map;
  for (let i of l) {
    let o = i.phaseIndex ?? 0,
      u = a.get(o);
    if (!u) {
      let c = t.get(o);
      u = {
        phaseIndex: o,
        title: c?.title ?? `Phase ${o}`,
        kind: c?.kind,
        agents: []
      }, a.set(o, u)
    }
    u.agents.push(i)
  }
  return [...a.values()].sort((i, o) => i.phaseIndex - o.phaseIndex)
}

function q(l) {
  let g = S(31),
    {
      row: t,
      isLast: a
    } = l,
    i = a ? "\u2514\u2500" : "\u251C\u2500",
    o = t.state === "start" || t.state === "progress",
    u;
  c: switch (t.state) {
    case "done": {
      u = "success";
      break c
    }
    case "error": {
      u = "error";
      break c
    }
    case "start":
    case "progress": {
      u = "running"
    }
  }
  let m;
  if (g[0] !== o || g[1] !== t.agentType || g[2] !== t.durationMs || g[3] !== t.fallbackModel || g[4] !== t.model || g[5] !== t.tokens || g[6] !== t.toolCalls) {
    m = [];
    if (t.agentType != null) m.push(t.agentType);
    if (t.model != null || t.fallbackModel != null) {
      let d;
      if (g[8] !== t.fallbackModel || g[9] !== t.model) d = svt(t.model, t.fallbackModel), g[8] = t.fallbackModel, g[9] = t.model, g[10] = d;
      else d = g[10];
      m.push(d)
    }
    if (t.tokens != null) {
      let d;
      if (g[11] !== t.tokens) d = Ur(t.tokens), g[11] = t.tokens, g[12] = d;
      else d = g[12];
      m.push(`${d} tok`)
    }
    if (t.toolCalls != null && t.toolCalls > 0) {
      const d = t.toolCalls;
      let f;
      if (g[13] !== t.toolCalls) f = P(t.toolCalls, "tool"), g[13] = t.toolCalls, g[14] = f;
      else f = g[14];
      m.push(`${d} ${f}`)
    }
    if (t.durationMs != null) {
      let d;
      if (g[15] !== t.durationMs) d = cn(t.durationMs), g[15] = t.durationMs, g[16] = d;
      else d = g[16];
      m.push(d)
    }
    if (o && m.length === 0) m.push("\u2026running");
    g[0] = o, g[1] = t.agentType, g[2] = t.durationMs, g[3] = t.fallbackModel, g[4] = t.model, g[5] = t.tokens, g[6] = t.toolCalls, g[7] = m
  } else m = g[7];
  let d;
  if (g[17] !== u) d = e(Tt, {
    status: u
  }), g[17] = u, g[18] = d;
  else d = g[18];
  const f = t.label;
  let p;
  if (g[19] !== m) p = m.length > 0 && r(n, {
    dimColor: !0,
    children: ["  ", m.join(" \xB7 ")]
  }), g[19] = m, g[20] = p;
  else p = g[20];
  let h;
  if (g[21] !== t.error || g[22] !== t.state) h = t.state === "error" && t.error && r(n, {
    color: "error",
    children: [" ", "\u2014", " ", t.error]
  }), g[21] = t.error, g[22] = t.state, g[23] = h;
  else h = g[23];
  let k;
  if (g[24] !== o || g[25] !== t.label || g[26] !== d || g[27] !== p || g[28] !== h || g[29] !== i) k = e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: o,
      children: [i, " ", d, " ", f, p, h]
    })
  }), g[24] = o, g[25] = t.label, g[26] = d, g[27] = p, g[28] = h, g[29] = i, g[30] = k;
  else k = g[30];
  return k
}

function ke(l) {
  let o = S(41),
    {
      group: t,
      verbose: a,
      width: i
    } = l,
    u;
  if (o[0] !== t.agents) u = t.agents.filter(Ot), o[0] = t.agents, o[1] = u;
  else u = o[1];
  let c = u,
    g, m, d, f, p;
  if (o[2] !== c.length || o[3] !== t.agents || o[4] !== a) {
    let h = t.agents.filter(Ft);
    let k = t.agents.filter(_t);
    p = t.agents.length;
    m = c.length;
    d = h.length;
    g = m + d === p && p > 0;
    f = a ? t.agents : [...h, ...k];
    o[2] = c.length, o[3] = t.agents, o[4] = a, o[5] = g, o[6] = m, o[7] = d, o[8] = f, o[9] = p
  } else g = o[5], m = o[6], d = o[7], f = o[8], p = o[9];
  let b = f,
    x = t.agents[0]?.model,
    R;
  if (o[10] !== x || o[11] !== t.agents) R = x && t.agents.every((v) => v.model === x) ? svt(x, void 0) : void 0, o[10] = x, o[11] = t.agents, o[12] = R;
  else R = o[12];
  let T = R,
    W = !g ? "running" : d > 0 ? "error" : "success";
  const M = t.kind === "child" ? "permission" : "subtle";
  let F;
  if (o[13] !== t.title) F = e(n, {
    bold: !0,
    children: t.title
  }), o[13] = t.title, o[14] = F;
  else F = o[14];
  let _;
  if (o[15] !== W) _ = e(Tt, {
    status: W
  }), o[15] = W, o[16] = _;
  else _ = o[16];
  const X = T && ` \xB7 ${T}`;
  let z;
  if (o[17] !== d) z = d > 0 && r(n, {
    color: "error",
    children: [" ", "\xB7", " ", d, " failed"]
  }), o[17] = d, o[18] = z;
  else z = o[18];
  let E;
  if (o[19] !== m || o[20] !== X || o[21] !== z || o[22] !== p) E = r(n, {
    dimColor: !0,
    children: [m, "/", p, X, z]
  }), o[19] = m, o[20] = X, o[21] = z, o[22] = p, o[23] = E;
  else E = o[23];
  let N;
  if (o[24] !== F || o[25] !== _ || o[26] !== E) N = e(s, {
    paddingX: 1,
    children: r(n, {
      children: [F, "  ", _, " ", E]
    })
  }), o[24] = F, o[25] = _, o[26] = E, o[27] = N;
  else N = o[27];
  let V;
  if (o[28] !== m || o[29] !== a) V = !a && m > 0 && e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: !0,
      children: [e(Tt, {
        status: "success"
      }), " ", m, " done"]
    })
  }), o[28] = m, o[29] = a, o[30] = V;
  else V = o[30];
  let B;
  if (o[31] !== b) {
    let I;
    if (o[33] !== b.length) I = (Z, Y) => e(q, {
      row: Z,
      isLast: Y === b.length - 1
    }, Z.index), o[33] = b.length, o[34] = I;
    else I = o[34];
    B = b.map(I);
    o[31] = b, o[32] = B
  } else B = o[32];
  let I;
  if (o[35] !== N || o[36] !== V || o[37] !== B || o[38] !== M || o[39] !== i) I = r(s, {
    flexDirection: "column",
    borderStyle: "single",
    borderColor: M,
    alignSelf: "flex-start",
    width: i,
    children: [N, V, B]
  }), o[35] = N, o[36] = V, o[37] = B, o[38] = M, o[39] = i, o[40] = I;
  else I = o[40];
  return I
}
var Fe = 8;

function ye(l) {
  let i = S(26),
    {
      agents: t,
      verbose: a
    } = l,
    o;
  if (i[0] !== t || i[1] !== a) o = a ? t : t.slice(-Fe), i[0] = t, i[1] = a, i[2] = o;
  else o = i[2];
  let u = o,
    c = t.length - u.length,
    g;
  if (i[3] !== t) g = U(t, jt), i[3] = t, i[4] = g;
  else g = i[4];
  let m = g,
    d = U(t, zt);
  const f = t.length;
  let p;
  if (i[5] !== t.length) p = P(t.length, "agent"), i[5] = t.length, i[6] = p;
  else p = i[6];
  let h;
  if (i[7] !== d) h = d > 0 && r(n, {
    color: "error",
    children: [" ", "\xB7", " ", d, " failed"]
  }), i[7] = d, i[8] = h;
  else h = i[8];
  let k;
  if (i[9] !== t.length || i[10] !== m || i[11] !== p || i[12] !== h) k = r(n, {
    children: [f, " ", p, " ", "\xB7", " ", m, " done", h]
  }), i[9] = t.length, i[10] = m, i[11] = p, i[12] = h, i[13] = k;
  else k = i[13];
  let b;
  if (i[14] !== c || i[15] !== u) {
    let x;
    if (i[17] !== c || i[18] !== u.length) x = (R, v) => e(q, {
      row: R,
      isLast: v === u.length - 1 && c === 0
    }, R.index), i[17] = c, i[18] = u.length, i[19] = x;
    else x = i[19];
    b = u.map(x);
    i[14] = c, i[15] = u, i[16] = b
  } else b = i[16];
  let x;
  if (i[20] !== c) x = c > 0 && e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: !0,
      children: ["\u2514\u2500 \xB7 \xB7 \xB7 +", c, " more"]
    })
  }), i[20] = c, i[21] = x;
  else x = i[21];
  let T;
  if (i[22] !== k || i[23] !== b || i[24] !== x) T = r(s, {
    flexDirection: "column",
    children: [k, b, x]
  }), i[22] = k, i[23] = b, i[24] = x, i[25] = T;
  else T = i[25];
  return T
}

function pNo(l) {
  let g = S(18),
    {
      collected: t,
      verbose: a,
      width: i
    } = l,
    {
      agents: o,
      logs: u,
      phaseTitles: c
    } = t;
  if (o.length === 0 && u.length === 0) {
    return null
  }
  let m, d, f, p, h;
  if (g[0] !== o || g[1] !== u || g[2] !== c || g[3] !== a || g[4] !== i) {
    let k = ae(o, c);
    let b;
    if (g[10] !== u) b = u.at(-1), g[10] = u, g[11] = b;
    else b = g[11];
    let x = b;
    let R = u.slice(-3, -1);
    m = s;
    d = "column";
    f = x && e(s, {
      marginBottom: k || o.length > 0 ? 1 : 0,
      children: r(n, {
        children: [re.pointer, " ", x]
      })
    });
    p = k ? e(s, {
      flexDirection: "column",
      children: k.map((v, T) => r(pu, {
        children: [e(ke, {
          group: v,
          verbose: a,
          width: i
        }), T < k.length - 1 && e(s, {
          paddingLeft: 3,
          children: e(n, {
            dimColor: !0,
            children: "\u2193"
          })
        })]
      }, v.phaseIndex))
    }) : o.length > 0 ? e(ye, {
      agents: o,
      verbose: a
    }) : null;
    h = R.length > 0 && e(s, {
      flexDirection: "column",
      paddingLeft: 3,
      marginTop: 1,
      children: R.map(Vt)
    });
    g[0] = o, g[1] = u, g[2] = c, g[3] = a, g[4] = i, g[5] = m, g[6] = d, g[7] = f, g[8] = p, g[9] = h
  } else m = g[5], d = g[6], f = g[7], p = g[8], h = g[9];
  let b;
  if (g[12] !== m || g[13] !== d || g[14] !== f || g[15] !== p || g[16] !== h) b = r(m, {
    flexDirection: d,
    children: [f, p, h]
  }), g[12] = m, g[13] = d, g[14] = f, g[15] = p, g[16] = h, g[17] = b;
  else b = g[17];
  return b
}
j();

function Mn() {
  return Date.now()
}
var A = 4,
  Xe = 80;

function Se(l) {
  let t = S(2),
    a;
  if (t[0] === w) a = jFs(), t[0] = a;
  else a = t[0];
  let i = a,
    [o, u] = y(0),
    c = gp(),
    g;
  if (t[1] === w) g = () => u((m) => (m + 1) % i.length), t[1] = g;
  else g = t[1];
  return sl(g, l && !c ? Xe : null), i[o % i.length]
}

function Ae(l) {
  let o = S(14),
    {
      done: t,
      total: a,
      running: i
    } = l,
    u;
  if (o[0] !== t || o[1] !== a) u = a > 0 ? Math.round(t / a * A) : 0, o[0] = t, o[1] = a, o[2] = u;
  else u = o[2];
  let c = u,
    g = Math.min(i ? A - 1 : A, Math.max(0, c)),
    m = i ? Math.min(A - g, 1) : 0,
    d = A - g - m,
    f = Se(m > 0),
    p;
  if (o[3] !== g) p = g > 0 && e(n, {
    color: "success",
    children: oLr.repeat(g)
  }), o[3] = g, o[4] = p;
  else p = o[4];
  let h;
  if (o[5] !== f || o[6] !== m) h = m > 0 && e(n, {
    color: "success",
    children: f
  }), o[5] = f, o[6] = m, o[7] = h;
  else h = o[7];
  let k;
  if (o[8] !== d) k = d > 0 && e(n, {
    color: "subtle",
    dimColor: !0,
    children: oLr.repeat(d)
  }), o[8] = d, o[9] = k;
  else k = o[9];
  let b;
  if (o[10] !== p || o[11] !== h || o[12] !== k) b = r(n, {
    children: [p, h, k]
  }), o[10] = p, o[11] = h, o[12] = k, o[13] = b;
  else b = o[13];
  return b
}
var ijr = 9,
  He = 12;

function ajr(l) {
  let o = S(8),
    t = Re(),
    {
      rows: a
    } = As(t),
    i = Bl(),
    u;
  if (o[0] !== i || o[1] !== l || o[2] !== a) u = i ? a : SF() ? Math.floor(a / 2) : l ? Math.max(He, a - ijr) : a, o[0] = i, o[1] = l, o[2] = a, o[3] = u;
  else u = o[3];
  let c = u,
    {
      columns: g
    } = t,
    m = Math.max(24, g - 6),
    d;
  if (o[4] !== c || o[5] !== a || o[6] !== m) d = {
    availableRows: c,
    width: m,
    rows: a
  }, o[4] = c, o[5] = a, o[6] = m, o[7] = d;
  else d = o[7];
  return d
}

function ivt(l) {
  let o = S(1),
    t = l.status === "running",
    [a, i] = y(Mn),
    u;
  if (o[0] === w) u = () => i(Date.now()), o[0] = u;
  else u = o[0];
  return sl(u, t ? 1000 : null), Math.max(0, (l.endTime ?? a) - l.startTime - (l.totalPausedMs ?? 0))
}
var de = 17;

function ljr(l) {
  let T = S(28),
    {
      index: t,
      title: a,
      done: i,
      total: o,
      status: u,
      selected: c,
      trailing: g
    } = l,
    m = c === void 0 ? !1 : c,
    d = g === void 0 ? "" : g,
    f = u === "done",
    p = u === "failed",
    h = f || p,
    k = m ? "permission" : f ? "success" : p ? "error" : "inactive",
    b = m ? re.pointer : " ",
    x = f ? re.tick : p ? re.cross : String(t),
    R = ce(b) + 1 + ce(x) + 1,
    v = Math.max(1, de - R),
    W;
  if (T[0] !== a || T[1] !== v) W = ct(a, v), T[0] = a, T[1] = v, T[2] = W;
  else W = T[2];
  let M = W,
    F = `${b} ${x} ${M}`,
    _ = Math.max(0, de - ce(F)),
    X = o > 0 ? `${i}/${o}` : "";
  const z = m ? "permission" : void 0;
  let E;
  if (T[3] !== b || T[4] !== z) E = e(n, {
    color: z,
    children: b
  }), T[3] = b, T[4] = z, T[5] = E;
  else E = T[5];
  let N;
  if (T[6] !== k || T[7] !== x) N = e(n, {
    color: k,
    children: x
  }), T[6] = k, T[7] = x, T[8] = N;
  else N = T[8];
  const V = m ? "permission" : f ? "success" : p ? "error" : void 0,
    B = !m && !h;
  let I;
  if (T[9] !== M || T[10] !== V || T[11] !== B) I = e(n, {
    color: V,
    dimColor: B,
    children: M
  }), T[9] = M, T[10] = V, T[11] = B, T[12] = I;
  else I = T[12];
  let Z;
  if (T[13] !== _) Z = " ".repeat(_), T[13] = _, T[14] = Z;
  else Z = T[14];
  let Y;
  if (T[15] !== Z || T[16] !== E || T[17] !== N || T[18] !== I) Y = r(n, {
    wrap: "truncate-end",
    children: [E, " ", N, " ", I, Z]
  }), T[15] = Z, T[16] = E, T[17] = N, T[18] = I, T[19] = Y;
  else Y = T[19];
  const me = m ? "permission" : f ? "success" : p ? "error" : void 0,
    ge = !m && !h,
    ee = d ? `  ${d}` : "";
  let pe;
  if (T[20] !== X || T[21] !== me || T[22] !== ge || T[23] !== ee) pe = r(n, {
    wrap: "truncate-end",
    color: me,
    dimColor: ge,
    children: [X, ee]
  }), T[20] = X, T[21] = me, T[22] = ge, T[23] = ee, T[24] = pe;
  else pe = T[24];
  let pt;
  if (T[25] !== Y || T[26] !== pe) pt = r(s, {
    children: [Y, pe]
  }), T[25] = Y, T[26] = pe, T[27] = pt;
  else pt = T[27];
  return pt
}

function djr(l) {
  let d = S(20),
    {
      name: t,
      done: a,
      total: i,
      running: o,
      elapsedMs: u,
      complete: c,
      dotState: g,
      phaseText: m
    } = l,
    f;
  if (d[0] !== u) f = u !== void 0 ? fxe(u) : void 0, d[0] = u, d[1] = f;
  else f = d[1];
  let p = f,
    h = c ? ` \xB7 ${re.ellipsis} to view` : "",
    k = g === "failed" ? "error" : "success",
    b;
  if (d[2] !== k) b = e(n, {
    color: k,
    children: Jo
  }), d[2] = k, d[3] = b;
  else b = d[3];
  let x;
  if (d[4] !== t) x = t ? r(n, {
    children: [t, " "]
  }) : null, d[4] = t, d[5] = x;
  else x = d[5];
  let R;
  if (d[6] !== a || d[7] !== o || d[8] !== i) R = e(Ae, {
    done: a,
    total: i,
    running: o
  }), d[6] = a, d[7] = o, d[8] = i, d[9] = R;
  else R = d[9];
  const v = m ? ` \xB7 ${m}` : "",
    T = ` \xB7 ${a}/${i} agents`,
    W = p ? ` \xB7 ${p}` : "";
  let M;
  if (d[10] !== h || d[11] !== v || d[12] !== T || d[13] !== W) M = r(n, {
    dimColor: !0,
    children: [v, T, W, h]
  }), d[10] = h, d[11] = v, d[12] = T, d[13] = W, d[14] = M;
  else M = d[14];
  let F;
  if (d[15] !== b || d[16] !== x || d[17] !== R || d[18] !== M) F = r(n, {
    wrap: "truncate-end",
    children: [b, " ", x, R, M]
  }), d[15] = b, d[16] = x, d[17] = R, d[18] = M, d[19] = F;
  else F = d[19];
  return F
}

function avt(l) {
  let c = S(17),
    {
      name: t,
      subtext: a,
      stats: i,
      width: o
    } = l,
    u = Bl(),
    g;
  if (c[0] !== u || c[1] !== o) g = !u && e(n, {
    color: "text",
    wrap: "truncate-end",
    children: BJ.repeat(Math.max(1, o))
  }), c[0] = u, c[1] = o, c[2] = g;
  else g = c[2];
  let m;
  if (c[3] !== t) m = r(n, {
    bold: !0,
    color: "permission",
    wrap: "truncate-end",
    children: [" ", t]
  }), c[3] = t, c[4] = m;
  else m = c[4];
  let d;
  if (c[5] !== a) d = e(s, {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    children: r(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: [" ", a]
    })
  }), c[5] = a, c[6] = d;
  else d = c[6];
  let f;
  if (c[7] !== i) f = i ? e(s, {
    flexShrink: 0,
    children: r(n, {
      dimColor: !0,
      children: [i, " "]
    })
  }) : null, c[7] = i, c[8] = f;
  else f = c[8];
  let p;
  if (c[9] !== d || c[10] !== f || c[11] !== o) p = r(s, {
    width: o,
    overflow: "hidden",
    children: [d, f]
  }), c[9] = d, c[10] = f, c[11] = o, c[12] = p;
  else p = c[12];
  let h;
  if (c[13] !== g || c[14] !== m || c[15] !== p) h = r(s, {
    flexDirection: "column",
    children: [g, m, p]
  }), c[13] = g, c[14] = m, c[15] = p, c[16] = h;
  else h = c[16];
  return h
}

function De(l) {
  let t = U(l.agents, (d) => d.state === "done"),
    a = U(l.agents, (d) => d.state === "error" && !NQn(d)),
    i = l.agents.length,
    o = t + a === i && i > 0,
    u = 0,
    c = 1 / 0,
    g = 0;
  for (let d of l.agents) {
    if (d.tokens) u += d.tokens;
    if (d.startedAt != null) {
      if (d.startedAt < c) c = d.startedAt;
      let f = d.lastProgressAt ?? d.startedAt;
      if (f > g) g = f
    }
  }
  let m = c < 1 / 0 ? g - c : 0;
  return {
    title: l.title,
    status: o ? a > 0 ? "failed" : "done" : "running",
    agents: l.agents,
    doneCount: t,
    totalCount: i,
    tokens: u,
    durationMs: m
  }
}

function Sn(l) {
  return {
    title: l,
    status: "not-started",
    agents: [],
    doneCount: 0,
    totalCount: 0,
    tokens: 0,
    durationMs: 0
  }
}

function mt(l) {
  return l.toLowerCase().trim()
}

function Rn(l, t) {
  let a = mt(l),
    i = mt(t);
  if (!a || !i) return a === i;
  return a === i || a.startsWith(i) || i.startsWith(a)
}

function An(l, t) {
  let a = new Set,
    i = [];

  function o(u) {
    for (let c of t) {
      if (a.has(c)) continue;
      if (Rn(u, c.title)) return a.add(c), c
    }
    return
  }
  for (let u of l ?? []) {
    let c = o(u.title);
    i.push(c ? De(c) : Sn(u.title))
  }
  for (let u of t)
    if (!a.has(u)) i.push(De(u));
  return i
}

function mNo(l) {
  let t = sjr(l.workflowProgress),
    a = ae(t.agents, t.phaseTitles) ?? [],
    i = An(l.phases, a);
  if (i.length === 0 && t.agents.length > 0) return [De({
    phaseIndex: 0,
    title: "Agents",
    agents: t.agents
  })];
  return i
}
var ue = 16;

function hNo(l, t) {
  return null
}
var gt = ue + 8,
  ve = "aeiou",
  vn = new Map([
    ["commit", "committing"],
    ["submit", "submitting"],
    ["format", "formatting"],
    ["edit", "editing"],
    ["exit", "exiting"],
    ["setup", null],
    ["cleanup", null],
    ["init", null]
  ]),
  Wn = /^[A-Za-z]{3,12}$/;

function Dn(l) {
  if (!Wn.test(l)) return l;
  let t = l.toLowerCase(),
    a = vn.get(t);
  if (a !== void 0) return a === null ? l : l[0] + a.slice(1);
  if (t.endsWith("ing")) return l;
  if (t.endsWith("ie")) return `${l.slice(0,-2)}ying`;
  if (t.endsWith("e") && !t.endsWith("ee") && !t.endsWith("ye")) return `${l.slice(0,-1)}ing`;
  let i = t.at(-1);
  if (t.length <= 4 && !ve.includes(t.at(-3)) && ve.includes(t.at(-2)) && !ve.includes(i) && !"wxy".includes(i)) return `${l}${i}ing`;
  return `${l}ing`
}
var We = " & ";

function gNo(l) {
  let {
    titles: t,
    positionStart: a,
    totalPhases: i
  } = l, o = t.map((c) => Dn(Yr(c)));
  if (o.length === 1) return `${ct(o[0]??"",ue)} (${a}/${i})`;
  if (o.length === 2) {
    let c = o.map((m) => ct(m, ue)).join(We),
      g = Math.floor((gt - We.length) / 2);
    return ce(c) <= gt ? c : o.map((m) => ct(m, g)).join(We)
  }
  let u = ` +${o.length-1}`;
  return ct(o[0] ?? "", ue - ce(u)) + u
}

function yNo(l, t) {
  let a = 0,
    i = 0;
  for (let o of l) a += o.doneCount, i += o.totalCount;
  return {
    doneAgents: a,
    totalAgents: Math.max(t, i, a)
  }
}

function _No(l) {
  if (l.script.length > 0) {
    let t = $T(l.script);
    if (!("error" in t) && t.meta.description) return t.meta.description
  }
  return l.description || l.summary || ""
}

function bNo(l, t, a, i) {
  let o = l.status === "completed" ? " \xB7 done" : l.status === "killed" ? " \xB7 stopped" : l.status === "paused" ? " \xB7 paused" : Ko(l.status) ? " \xB7 failed" : "",
    u = l.status === "running" && l.rateLimitWait !== void 0 ? eRi(l.rateLimitWait.resetsAt) : t,
    c = `${a.doneAgents}/${a.totalAgents} ${P(a.totalAgents,"agent")} \xB7 ${fxe(i)}${o}`;
  return {
    name: l.workflowName ?? l.summary ?? l.description,
    subtext: u,
    stats: c
  }
}

function mot(l, t = 0) {
  let a = 0,
    i = 0,
    o = 0,
    u = 0,
    c = !1;
  for (let d of l) {
    if (d.type !== "workflow_agent") continue;
    if (a++, d.state === "done") i++, u++;
    else if (d.state === "error") o++, u++;
    else if (d.state === "start" || d.state === "progress") {
      if (c = !0, ibn(d)) u++
    }
  }
  let g = Math.max(t, a),
    m = !c && a > 0 && i + o >= g;
  return {
    done: i,
    failedCount: o,
    running: c,
    total: g,
    started: u,
    complete: m
  }
}
export {
  svt,
  sjr,
  pNo,
  ijr,
  ajr,
  ivt,
  ljr,
  djr,
  avt,
  mNo,
  hNo,
  gNo,
  yNo,
  _No,
  bNo,
  mot
};
