// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { I, fr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Fr as children_6, qHo, Bx, Fmn, h1r } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ie, ot, Zt, Jne, cr } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { mb, tf } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { SR } from "B:/~BUN/root/chunk-rfp59gnb.js";
import { s, n, Vs } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { et } from "B:/~BUN/root/chunk-zg8y1401.js";
import { ol, As } from "B:/~BUN/root/chunk-syke822n.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { Fy } from "B:/~BUN/root/chunk-5w2ram39.js";
import { z7r } from "B:/~BUN/root/chunk-5svskdvx.js";
import { Zv } from "B:/~BUN/root/chunk-bbgg7kv0.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { ui } from "B:/~BUN/root/chunk-3qp6kts8.js";
import { sl, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
function I1e(l, t) {
  let a = i => tf(i) ?? mb(i);
  if (t != null) return `${l == null ? "" : `${a(l)} `}${qHo} ${a(t)}`;
  return l != null ? a(l) : "";
}
N();
function _t(ge) {
  return ge.state === "done";
}
function jt(pe) {
  return pe.state === "error";
}
function zt(te) {
  return te.state === "start" || te.state === "progress";
}
function Vt(v) {
  return v.state === "done";
}
function Bt(T) {
  return T.state === "error";
}
function Ut(children, T) {
  return e(n, {
    dimColor: !0,
    children: children
  }, T);
}
function _Sn(l) {
  let t = new Map(),
    logs = [],
    phaseTitles = new Map();
  for (let o of l) if (o.type === "workflow_agent") t.set(o.index, o);else if (o.type === "workflow_log") logs.push(o.message);else if (o.type === "workflow_phase") phaseTitles.set(o.index, {
    title: o.title,
    kind: o.kind
  });
  return {
    agents: [...t.values()].sort((itemA, itemB) => itemA.index - itemB.index),
    logs: logs,
    phaseTitles: phaseTitles
  };
}
function ae(l, t) {
  if (!l.some(item => item.phaseIndex != null)) return null;
  let a = new Map();
  for (let i of l) {
    let phaseIndex = i.phaseIndex ?? 0,
      d = a.get(phaseIndex);
    if (!d) {
      let c = t.get(phaseIndex);
      d = {
        phaseIndex: phaseIndex,
        title: c?.title ?? `Phase ${phaseIndex}`,
        kind: c?.kind,
        agents: []
      }, a.set(phaseIndex, d);
    }
    d.agents.push(i);
  }
  return [...a.values()].sort((itemA, itemB) => itemA.phaseIndex - itemB.phaseIndex);
}
function H(l) {
  let p = w(31),
    {
      row: row,
      isLast: isLast
    } = l,
    i = isLast ? "\u2514\u2500" : "\u251C\u2500",
    dimColor = row.state === "start" || row.state === "progress",
    status;
  c: switch (row.state) {
    case "done":
      {
        status = "success";
        break c;
      }
    case "error":
      {
        status = "error";
        break c;
      }
    case "start":
    case "progress":
      {
        status = "running";
      }
  }
  let m;
  if (p[0] !== dimColor || p[1] !== row.agentType || p[2] !== row.durationMs || p[3] !== row.fallbackModel || p[4] !== row.model || p[5] !== row.tokens || p[6] !== row.toolCalls) {
    m = [];
    if (row.agentType != null) m.push(row.agentType);
    if (row.model != null || row.fallbackModel != null) {
      let u;
      if (p[8] !== row.fallbackModel || p[9] !== row.model) u = I1e(row.model, row.fallbackModel), p[8] = row.fallbackModel, p[9] = row.model, p[10] = u;else u = p[10];
      m.push(u);
    }
    if (row.tokens != null) {
      let u;
      if (p[11] !== row.tokens) u = cr(row.tokens), p[11] = row.tokens, p[12] = u;else u = p[12];
      m.push(`${u} tok`);
    }
    if (row.toolCalls != null && row.toolCalls > 0) {
      const toolCalls = row.toolCalls;
      let h;
      if (p[13] !== row.toolCalls) h = I(row.toolCalls, "tool"), p[13] = row.toolCalls, p[14] = h;else h = p[14];
      m.push(`${toolCalls} ${h}`);
    }
    if (row.durationMs != null) {
      let u;
      if (p[15] !== row.durationMs) u = Zt(row.durationMs), p[15] = row.durationMs, p[16] = u;else u = p[16];
      m.push(u);
    }
    if (dimColor && m.length === 0) m.push("\u2026running");
    p[0] = dimColor, p[1] = row.agentType, p[2] = row.durationMs, p[3] = row.fallbackModel, p[4] = row.model, p[5] = row.tokens, p[6] = row.toolCalls, p[7] = m;
  } else m = p[7];
  let u;
  if (p[17] !== status) u = e(et, {
    status: status
  }), p[17] = status, p[18] = u;else u = p[18];
  const label = row.label;
  let f;
  if (p[19] !== m) f = m.length > 0 && r(n, {
    dimColor: !0,
    children: ["  ", m.join(" \xB7 ")]
  }), p[19] = m, p[20] = f;else f = p[20];
  let b;
  if (p[21] !== row.error || p[22] !== row.state) b = row.state === "error" && row.error && r(n, {
    color: "error",
    children: [" ", "\u2014", " ", row.error]
  }), p[21] = row.error, p[22] = row.state, p[23] = b;else b = p[23];
  let C;
  if (p[24] !== dimColor || p[25] !== row.label || p[26] !== u || p[27] !== f || p[28] !== b || p[29] !== i) C = e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: dimColor,
      children: [i, " ", u, " ", label, f, b]
    })
  }), p[24] = dimColor, p[25] = row.label, p[26] = u, p[27] = f, p[28] = b, p[29] = i, p[30] = C;else C = p[30];
  return C;
}
function ye(l) {
  let o = w(41),
    {
      group: group,
      verbose: verbose,
      width: width
    } = l,
    d;
  if (o[0] !== group.agents) d = group.agents.filter(_t), o[0] = group.agents, o[1] = d;else d = o[1];
  let c = d,
    p,
    m,
    u,
    h,
    f;
  if (o[2] !== c.length || o[3] !== group.agents || o[4] !== verbose) {
    let b = group.agents.filter(jt);
    let C = group.agents.filter(zt);
    f = group.agents.length;
    m = c.length;
    u = b.length;
    p = m + u === f && f > 0;
    h = verbose ? group.agents : [...b, ...C];
    o[2] = c.length, o[3] = group.agents, o[4] = verbose, o[5] = p, o[6] = m, o[7] = u, o[8] = h, o[9] = f;
  } else p = o[5], m = o[6], u = o[7], h = o[8], f = o[9];
  let x = h,
    k = group.agents[0]?.model,
    M;
  if (o[10] !== k || o[11] !== group.agents) M = k && group.agents.every(item => item.model === k) ? I1e(k, void 0) : void 0, o[10] = k, o[11] = group.agents, o[12] = M;else M = o[12];
  let P = M,
    status_2 = !p ? "running" : u > 0 ? "error" : "success";
  const borderColor = group.kind === "child" ? "permission" : "subtle";
  let F;
  if (o[13] !== group.title) F = e(n, {
    bold: !0,
    children: group.title
  }), o[13] = group.title, o[14] = F;else F = o[14];
  let W;
  if (o[15] !== status_2) W = e(et, {
    status: status_2
  }), o[15] = status_2, o[16] = W;else W = o[16];
  const D = P && ` \xB7 ${P}`;
  let G;
  if (o[17] !== u) G = u > 0 && r(n, {
    color: "error",
    children: [" ", "\xB7", " ", u, " failed"]
  }), o[17] = u, o[18] = G;else G = o[18];
  let _;
  if (o[19] !== m || o[20] !== D || o[21] !== G || o[22] !== f) _ = r(n, {
    dimColor: !0,
    children: [m, "/", f, D, G]
  }), o[19] = m, o[20] = D, o[21] = G, o[22] = f, o[23] = _;else _ = o[23];
  let j;
  if (o[24] !== F || o[25] !== W || o[26] !== _) j = e(s, {
    paddingX: 1,
    children: r(n, {
      children: [F, "  ", W, " ", _]
    })
  }), o[24] = F, o[25] = W, o[26] = _, o[27] = j;else j = o[27];
  let B;
  if (o[28] !== m || o[29] !== verbose) B = !verbose && m > 0 && e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: !0,
      children: [e(et, {
        status: "success"
      }), " ", m, " done"]
    })
  }), o[28] = m, o[29] = verbose, o[30] = B;else B = o[30];
  let X;
  if (o[31] !== x) {
    let O;
    if (o[33] !== x.length) O = (row_2, ee) => e(H, {
      row: row_2,
      isLast: ee === x.length - 1
    }, row_2.index), o[33] = x.length, o[34] = O;else O = o[34];
    X = x.map(O);
    o[31] = x, o[32] = X;
  } else X = o[32];
  let O;
  if (o[35] !== j || o[36] !== B || o[37] !== X || o[38] !== borderColor || o[39] !== width) O = r(s, {
    flexDirection: "column",
    borderStyle: "single",
    borderColor: borderColor,
    alignSelf: "flex-start",
    width: width,
    children: [j, B, X]
  }), o[35] = j, o[36] = B, o[37] = X, o[38] = borderColor, o[39] = width, o[40] = O;else O = o[40];
  return O;
}
var _e = 8;
function Ce(l) {
  let i = w(26),
    {
      agents: agents,
      verbose: verbose_2
    } = l,
    o;
  if (i[0] !== agents || i[1] !== verbose_2) o = verbose_2 ? agents : agents.slice(-_e), i[0] = agents, i[1] = verbose_2, i[2] = o;else o = i[2];
  let d = o,
    c = agents.length - d.length,
    p;
  if (i[3] !== agents) p = U(agents, Vt), i[3] = agents, i[4] = p;else p = i[4];
  let m = p,
    u = U(agents, Bt);
  const h = agents.length;
  let f;
  if (i[5] !== agents.length) f = I(agents.length, "agent"), i[5] = agents.length, i[6] = f;else f = i[6];
  let b;
  if (i[7] !== u) b = u > 0 && r(n, {
    color: "error",
    children: [" ", "\xB7", " ", u, " failed"]
  }), i[7] = u, i[8] = b;else b = i[8];
  let C;
  if (i[9] !== agents.length || i[10] !== m || i[11] !== f || i[12] !== b) C = r(n, {
    children: [h, " ", f, " ", "\xB7", " ", m, " done", b]
  }), i[9] = agents.length, i[10] = m, i[11] = f, i[12] = b, i[13] = C;else C = i[13];
  let x;
  if (i[14] !== c || i[15] !== d) {
    let k;
    if (i[17] !== c || i[18] !== d.length) k = (row_3, A) => e(H, {
      row: row_3,
      isLast: A === d.length - 1 && c === 0
    }, row_3.index), i[17] = c, i[18] = d.length, i[19] = k;else k = i[19];
    x = d.map(k);
    i[14] = c, i[15] = d, i[16] = x;
  } else x = i[16];
  let k;
  if (i[20] !== c) k = c > 0 && e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: !0,
      children: ["\u2514\u2500 \xB7 \xB7 \xB7 +", c, " more"]
    })
  }), i[20] = c, i[21] = k;else k = i[21];
  let P;
  if (i[22] !== C || i[23] !== x || i[24] !== k) P = r(s, {
    flexDirection: "column",
    children: [C, x, k]
  }), i[22] = C, i[23] = x, i[24] = k, i[25] = P;else P = i[25];
  return P;
}
function zQn(l) {
  let p = w(18),
    {
      collected: collected,
      verbose: verbose_3,
      width: width_2
    } = l,
    {
      agents: agents_2,
      logs: logs_2,
      phaseTitles: phaseTitles_2
    } = collected;
  if (agents_2.length === 0 && logs_2.length === 0) {
    return null;
  }
  let m, flexDirection, h, f, b;
  if (p[0] !== agents_2 || p[1] !== logs_2 || p[2] !== phaseTitles_2 || p[3] !== verbose_3 || p[4] !== width_2) {
    let C = ae(agents_2, phaseTitles_2);
    let x;
    if (p[10] !== logs_2) x = logs_2.at(-1), p[10] = logs_2, p[11] = x;else x = p[11];
    let k = x;
    let M = logs_2.slice(-3, -1);
    m = s;
    flexDirection = "column";
    h = k && e(s, {
      marginBottom: C || agents_2.length > 0 ? 1 : 0,
      children: r(n, {
        children: [Z.pointer, " ", k]
      })
    });
    f = C ? e(s, {
      flexDirection: "column",
      children: C.map((A, index) => r(sl, {
        children: [e(ye, {
          group: A,
          verbose: verbose_3,
          width: width_2
        }), index < C.length - 1 && e(s, {
          paddingLeft: 3,
          children: e(n, {
            dimColor: !0,
            children: "\u2193"
          })
        })]
      }, A.phaseIndex))
    }) : agents_2.length > 0 ? e(Ce, {
      agents: agents_2,
      verbose: verbose_3
    }) : null;
    b = M.length > 0 && e(s, {
      flexDirection: "column",
      paddingLeft: 3,
      marginTop: 1,
      children: M.map(Ut)
    });
    p[0] = agents_2, p[1] = logs_2, p[2] = phaseTitles_2, p[3] = verbose_3, p[4] = width_2, p[5] = m, p[6] = flexDirection, p[7] = h, p[8] = f, p[9] = b;
  } else m = p[5], flexDirection = p[6], h = p[7], f = p[8], b = p[9];
  let x;
  if (p[12] !== m || p[13] !== flexDirection || p[14] !== h || p[15] !== f || p[16] !== b) x = r(m, {
    flexDirection: flexDirection,
    children: [h, f, b]
  }), p[12] = m, p[13] = flexDirection, p[14] = h, p[15] = f, p[16] = b, p[17] = x;else x = p[17];
  return x;
}
N();
function An() {
  return Date.now();
}
var R = 4,
  Ze = 80;
function Se(l) {
  let t = w(2),
    a;
  if (t[0] === S) a = h1r(), t[0] = a;else a = t[0];
  let i = a,
    [o, d] = g(0),
    c = Zv(),
    p;
  if (t[1] === S) p = () => d(m => (m + 1) % i.length), t[1] = p;else p = t[1];
  return Vs(p, l && !c ? Ze : null), i[o % i.length];
}
function Re(l) {
  let o = w(14),
    {
      done: done,
      total: total,
      running: running
    } = l,
    d;
  if (o[0] !== done || o[1] !== total) d = total > 0 ? Math.round(done / total * R) : 0, o[0] = done, o[1] = total, o[2] = d;else d = o[2];
  let c = d,
    p = Math.min(running ? R - 1 : R, Math.max(0, c)),
    m = running ? Math.min(R - p, 1) : 0,
    u = R - p - m,
    children_2 = Se(m > 0),
    f;
  if (o[3] !== p) f = p > 0 && e(n, {
    color: "success",
    children: Fmn.repeat(p)
  }), o[3] = p, o[4] = f;else f = o[4];
  let b;
  if (o[5] !== children_2 || o[6] !== m) b = m > 0 && e(n, {
    color: "success",
    children: children_2
  }), o[5] = children_2, o[6] = m, o[7] = b;else b = o[7];
  let C;
  if (o[8] !== u) C = u > 0 && e(n, {
    color: "subtle",
    dimColor: !0,
    children: Fmn.repeat(u)
  }), o[8] = u, o[9] = C;else C = o[9];
  let x;
  if (o[10] !== f || o[11] !== b || o[12] !== C) x = r(n, {
    children: [f, b, C]
  }), o[10] = f, o[11] = b, o[12] = C, o[13] = x;else x = o[13];
  return x;
}
var bSn = 9,
  Je = 12;
function SSn(l) {
  let o = w(9),
    t = ve(),
    {
      rows: rows
    } = As(t),
    i = ol(),
    d;
  if (o[0] !== i || o[1] !== l || o[2] !== rows) d = i ? rows : SR() ? Math.floor(rows / 2) : l ? Math.max(Je, rows - bSn) : rows, o[0] = i, o[1] = l, o[2] = rows, o[3] = d;else d = o[3];
  let availableRows = d,
    {
      columns: columns
    } = t,
    width_3 = Math.max(24, columns - 6),
    u;
  if (o[4] !== availableRows || o[5] !== columns || o[6] !== rows || o[7] !== width_3) u = {
    availableRows: availableRows,
    width: width_3,
    rows: rows,
    columns: columns
  }, o[4] = availableRows, o[5] = columns, o[6] = rows, o[7] = width_3, o[8] = u;else u = o[8];
  return u;
}
function O1e(l) {
  let o = w(1),
    t = l.status === "running",
    [a, i] = g(An),
    d;
  if (o[0] === S) d = () => i(Date.now()), o[0] = d;else d = o[0];
  return Vs(d, t ? 1000 : null), Math.max(0, (l.endTime ?? a) - l.startTime - (l.totalPausedMs ?? 0));
}
var ue = 17;
function wSn(l) {
  let P = w(28),
    {
      index: index_2,
      title: title,
      done: done_2,
      total: total_2,
      status: status_3,
      selected: selected,
      trailing: trailing
    } = l,
    m = selected === void 0 ? !1 : selected,
    u = trailing === void 0 ? "" : trailing,
    h = status_3 === "done",
    f = status_3 === "failed",
    b = h || f,
    color_2 = m ? "permission" : h ? "success" : f ? "error" : "subtle",
    children_3 = m ? Z.pointer : " ",
    children_4 = h ? Z.tick : f ? Z.cross : String(index_2),
    M = ie(children_3) + 1 + ie(children_4) + 1,
    A = Math.max(1, ue - M),
    v;
  if (P[0] !== title || P[1] !== A) v = ot(title, A), P[0] = title, P[1] = A, P[2] = v;else v = P[2];
  let children_5 = v,
    F = `${children_3} ${children_4} ${children_5}`,
    W = Math.max(0, ue - ie(F)),
    D = total_2 > 0 ? `${done_2}/${total_2}` : "";
  const color = m ? "permission" : void 0;
  let _;
  if (P[3] !== children_3 || P[4] !== color) _ = e(n, {
    color: color,
    children: children_3
  }), P[3] = children_3, P[4] = color, P[5] = _;else _ = P[5];
  let j;
  if (P[6] !== color_2 || P[7] !== children_4) j = e(n, {
    color: color_2,
    children: children_4
  }), P[6] = color_2, P[7] = children_4, P[8] = j;else j = P[8];
  const color_3 = m ? "permission" : h ? "success" : f ? "error" : void 0,
    dimColor_2 = !m && !b;
  let O;
  if (P[9] !== children_5 || P[10] !== color_3 || P[11] !== dimColor_2) O = e(n, {
    color: color_3,
    dimColor: dimColor_2,
    children: children_5
  }), P[9] = children_5, P[10] = color_3, P[11] = dimColor_2, P[12] = O;else O = P[12];
  let q;
  if (P[13] !== W) q = " ".repeat(W), P[13] = W, P[14] = q;else q = P[14];
  let ee;
  if (P[15] !== q || P[16] !== _ || P[17] !== j || P[18] !== O) ee = r(n, {
    wrap: "truncate-end",
    children: [_, " ", j, " ", O, q]
  }), P[15] = q, P[16] = _, P[17] = j, P[18] = O, P[19] = ee;else ee = P[19];
  const color_4 = m ? "permission" : h ? "success" : f ? "error" : void 0,
    dimColor_3 = !m && !b,
    te = u ? `  ${u}` : "";
  let fe;
  if (P[20] !== D || P[21] !== color_4 || P[22] !== dimColor_3 || P[23] !== te) fe = r(n, {
    wrap: "truncate-end",
    color: color_4,
    dimColor: dimColor_3,
    children: [D, te]
  }), P[20] = D, P[21] = color_4, P[22] = dimColor_3, P[23] = te, P[24] = fe;else fe = P[24];
  let wt;
  if (P[25] !== ee || P[26] !== fe) wt = r(s, {
    children: [ee, fe]
  }), P[25] = ee, P[26] = fe, P[27] = wt;else wt = P[27];
  return wt;
}
function vSn(l) {
  let f = w(23),
    {
      name: name,
      done: done_3,
      total: total_3,
      running: running_2,
      elapsedMs: elapsedMs,
      complete: complete,
      dotState: dotState,
      phaseText: phaseText,
      selected: selected_2
    } = l,
    bold = selected_2 === void 0 ? !1 : selected_2,
    b;
  if (f[0] !== elapsedMs) b = elapsedMs !== void 0 ? Jne(elapsedMs) : void 0, f[0] = elapsedMs, f[1] = b;else b = f[1];
  let C = b,
    x = complete ? ` \xB7 ${Z.ellipsis} to view` : "",
    color_5 = dotState === "failed" ? "error" : "success",
    M;
  if (f[2] !== color_5) M = e(n, {
    color: color_5,
    children: children_6
  }), f[2] = color_5, f[3] = M;else M = f[3];
  let A;
  if (f[4] !== name || f[5] !== bold) A = name ? r(n, {
    color: bold ? "claude" : void 0,
    bold: bold,
    children: [name, " "]
  }) : null, f[4] = name, f[5] = bold, f[6] = A;else A = f[6];
  let P;
  if (f[7] !== done_3 || f[8] !== running_2 || f[9] !== total_3) P = e(Re, {
    done: done_3,
    total: total_3,
    running: running_2
  }), f[7] = done_3, f[8] = running_2, f[9] = total_3, f[10] = P;else P = f[10];
  const dimColor_4 = !bold,
    T = phaseText ? ` \xB7 ${phaseText}` : "",
    F = ` \xB7 ${done_3}/${total_3} agents`,
    W = C ? ` \xB7 ${C}` : "";
  let D;
  if (f[11] !== x || f[12] !== bold || f[13] !== dimColor_4 || f[14] !== T || f[15] !== F || f[16] !== W) D = r(n, {
    dimColor: dimColor_4,
    bold: bold,
    children: [T, F, W, x]
  }), f[11] = x, f[12] = bold, f[13] = dimColor_4, f[14] = T, f[15] = F, f[16] = W, f[17] = D;else D = f[17];
  let G;
  if (f[18] !== D || f[19] !== M || f[20] !== A || f[21] !== P) G = r(n, {
    wrap: "truncate-end",
    children: [M, " ", A, P, D]
  }), f[18] = D, f[19] = M, f[20] = A, f[21] = P, f[22] = G;else G = f[22];
  return G;
}
function M1e(l) {
  let c = w(17),
    {
      name: name_2,
      subtext: subtext,
      stats: stats,
      width: width_4
    } = l,
    d = ol(),
    p;
  if (c[0] !== d || c[1] !== width_4) p = !d && e(n, {
    color: "text",
    wrap: "truncate-end",
    children: Bx.repeat(Math.max(1, width_4))
  }), c[0] = d, c[1] = width_4, c[2] = p;else p = c[2];
  let m;
  if (c[3] !== name_2) m = r(n, {
    bold: !0,
    color: "permission",
    wrap: "truncate-end",
    children: [" ", name_2]
  }), c[3] = name_2, c[4] = m;else m = c[4];
  let u;
  if (c[5] !== subtext) u = e(s, {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    children: r(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: [" ", subtext]
    })
  }), c[5] = subtext, c[6] = u;else u = c[6];
  let h;
  if (c[7] !== stats) h = stats ? e(s, {
    flexShrink: 0,
    children: r(n, {
      dimColor: !0,
      children: [stats, " "]
    })
  }) : null, c[7] = stats, c[8] = h;else h = c[8];
  let f;
  if (c[9] !== u || c[10] !== h || c[11] !== width_4) f = r(s, {
    width: width_4,
    overflow: "hidden",
    children: [u, h]
  }), c[9] = u, c[10] = h, c[11] = width_4, c[12] = f;else f = c[12];
  let b;
  if (c[13] !== p || c[14] !== m || c[15] !== f) b = r(s, {
    flexDirection: "column",
    children: [p, m, f]
  }), c[13] = p, c[14] = m, c[15] = f, c[16] = b;else b = c[16];
  return b;
}
function $e(l) {
  let doneCount = U(l.agents, u => u.state === "done"),
    a = U(l.agents, u => u.state === "error"),
    totalCount = l.agents.length,
    o = doneCount + a === totalCount && totalCount > 0,
    tokens = 0,
    c = 1 / 0,
    p = 0;
  for (let u of l.agents) {
    if (u.tokens) tokens += u.tokens;
    if (u.startedAt != null) {
      if (u.startedAt < c) c = u.startedAt;
      let h = u.lastProgressAt ?? u.startedAt;
      if (h > p) p = h;
    }
  }
  let durationMs = c < 1 / 0 ? p - c : 0;
  return {
    title: l.title,
    status: o ? a > 0 ? "failed" : "done" : "running",
    agents: l.agents,
    doneCount: doneCount,
    totalCount: totalCount,
    tokens: tokens,
    durationMs: durationMs
  };
}
function Sn(title_2) {
  return {
    title: title_2,
    status: "not-started",
    agents: [],
    doneCount: 0,
    totalCount: 0,
    tokens: 0,
    durationMs: 0
  };
}
function ft(l) {
  return l.toLowerCase().trim();
}
function Rn(l, t) {
  let a = ft(l),
    i = ft(t);
  if (!a || !i) return a === i;
  return a === i || a.startsWith(i) || i.startsWith(a);
}
function vn(l, t) {
  let a = new Set(),
    i = [];
  function o(d) {
    for (let c of t) {
      if (a.has(c)) continue;
      if (Rn(d, c.title)) return a.add(c), c;
    }
    return;
  }
  for (let d of l ?? []) {
    let c = o(d.title);
    i.push(c ? $e(c) : Sn(d.title));
  }
  for (let d of t) if (!a.has(d)) i.push($e(d));
  return i;
}
function GQn(l) {
  let t = _Sn(l.workflowProgress),
    a = ae(t.agents, t.phaseTitles) ?? [],
    i = vn(l.phases, a);
  if (i.length === 0 && t.agents.length > 0) return [$e({
    phaseIndex: 0,
    title: "Agents",
    agents: t.agents
  })];
  return i;
}
var me = 16;
function VQn(l, t) {
  return null;
}
var ht = me + 8,
  We = "aeiou",
  Wn = new Map([["commit", "committing"], ["submit", "submitting"], ["format", "formatting"], ["edit", "editing"], ["exit", "exiting"], ["setup", null], ["cleanup", null], ["init", null]]),
  Dn = /^[A-Za-z]{3,12}$/;
function $n(l) {
  if (!Dn.test(l)) return l;
  let t = l.toLowerCase(),
    a = Wn.get(t);
  if (a !== void 0) return a === null ? l : l[0] + a.slice(1);
  if (t.endsWith("ing")) return l;
  if (t.endsWith("ie")) return `${l.slice(0, -2)}ying`;
  if (t.endsWith("e") && !t.endsWith("ee") && !t.endsWith("ye")) return `${l.slice(0, -1)}ing`;
  let i = t.at(-1);
  if (t.length <= 4 && !We.includes(t.at(-3)) && We.includes(t.at(-2)) && !We.includes(i) && !"wxy".includes(i)) return `${l}${i}ing`;
  return `${l}ing`;
}
var De = " & ";
function qQn(l) {
  let {
      titles: titles,
      positionStart: positionStart,
      totalPhases: totalPhases
    } = l,
    o = titles.map(item => $n(fr(item)));
  if (o.length === 1) return `${ot(o[0] ?? "", me)} (${positionStart}/${totalPhases})`;
  if (o.length === 2) {
    let c = o.map(item => ot(item, me)).join(De),
      p = Math.floor((ht - De.length) / 2);
    return ie(c) <= ht ? c : o.map(item => ot(item, p)).join(De);
  }
  let d = ` +${o.length - 1}`;
  return ot(o[0] ?? "", me - ie(d)) + d;
}
function KQn(l, t) {
  let doneAgents = 0,
    i = 0;
  for (let o of l) doneAgents += o.doneCount, i += o.totalCount;
  return {
    doneAgents: doneAgents,
    totalAgents: Math.max(t, i, doneAgents)
  };
}
function YQn(l) {
  if (l.script.length > 0) {
    let t = Fy(l.script);
    if (!("error" in t) && t.meta.description) return t.meta.description;
  }
  return l.description || l.summary || "";
}
function XQn(l, t, a, i) {
  let o = l.status === "completed" ? " \xB7 done" : l.status === "killed" ? " \xB7 stopped" : l.status === "paused" ? " \xB7 paused" : ui(l.status) ? " \xB7 failed" : "",
    subtext_2 = l.status === "running" && l.rateLimitWait !== void 0 ? z7r(l.rateLimitWait.resetsAt) : t,
    stats_2 = `${a.doneAgents}/${a.totalAgents} ${I(a.totalAgents, "agent")} \xB7 ${Jne(i)}${o}`;
  return {
    name: l.workflowName ?? l.summary ?? l.description,
    subtext: subtext_2,
    stats: stats_2
  };
}
function sJe(l, t = 0) {
  let a = 0,
    done_4 = 0,
    failedCount = 0,
    started = 0,
    running_3 = !1;
  for (let u of l) {
    if (u.type !== "workflow_agent") continue;
    if (a++, u.state === "done") done_4++, started++;else if (u.state === "error") failedCount++, started++;else if (u.state === "start" || u.state === "progress") {
      if (running_3 = !0, u.startedAt !== void 0 || u.queuedAt === void 0 || (u.tokens ?? 0) > 0) started++;
    }
  }
  let total_4 = Math.max(t, a),
    complete_2 = !running_3 && a > 0 && done_4 + failedCount >= total_4;
  return {
    done: done_4,
    failedCount: failedCount,
    running: running_3,
    total: total_4,
    started: started,
    complete: complete_2
  };
}
export { I1e, _Sn, zQn, bSn, SSn, O1e, wSn, vSn, M1e, GQn, VQn, qQn, KQn, YQn, XQn, sJe };