// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { O, zr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { wo as children_6, Dqs, k4, C8n, D$o } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { T_, wm } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { mt, rn, Dhe, cr } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { s, n, sa } from "B:/~BUN/root/chunk-damrp3r8.js";
import { dM } from "B:/~BUN/root/chunk-j2ppas05.js";
import { ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { bl, us } from "B:/~BUN/root/chunk-b900np4s.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { Tv } from "B:/~BUN/root/chunk-431ja9am.js";
import { te, rSs } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { Vu } from "B:/~BUN/root/chunk-44n8zjk2.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { zs } from "B:/~BUN/root/chunk-c2nm18xm.js";
import { Kd, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function ytt(l, t) {
  let a = i => wm(i) ?? T_(i);
  if (t != null) return `${l == null ? "" : `${a(l)} `}${Dqs} ${a(t)}`;
  return l != null ? a(l) : "";
}
function _t(ge) {
  return ge.state === "done";
}
function jt(pe) {
  return pe.state === "error";
}
function zt(ee) {
  return ee.state === "start" || ee.state === "progress";
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
function eer(l) {
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
function K(l) {
  let g = w(31),
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
  if (g[0] !== dimColor || g[1] !== row.agentType || g[2] !== row.durationMs || g[3] !== row.fallbackModel || g[4] !== row.model || g[5] !== row.tokens || g[6] !== row.toolCalls) {
    m = [];
    if (row.agentType != null) m.push(row.agentType);
    if (row.model != null || row.fallbackModel != null) {
      let u;
      if (g[8] !== row.fallbackModel || g[9] !== row.model) u = ytt(row.model, row.fallbackModel), g[8] = row.fallbackModel, g[9] = row.model, g[10] = u;else u = g[10];
      m.push(u);
    }
    if (row.tokens != null) {
      let u;
      if (g[11] !== row.tokens) u = cr(row.tokens), g[11] = row.tokens, g[12] = u;else u = g[12];
      m.push(`${u} tok`);
    }
    if (row.toolCalls != null && row.toolCalls > 0) {
      const toolCalls = row.toolCalls;
      let f;
      if (g[13] !== row.toolCalls) f = O(row.toolCalls, "tool"), g[13] = row.toolCalls, g[14] = f;else f = g[14];
      m.push(`${toolCalls} ${f}`);
    }
    if (row.durationMs != null) {
      let u;
      if (g[15] !== row.durationMs) u = rn(row.durationMs), g[15] = row.durationMs, g[16] = u;else u = g[16];
      m.push(u);
    }
    if (dimColor && m.length === 0) m.push("\u2026running");
    g[0] = dimColor, g[1] = row.agentType, g[2] = row.durationMs, g[3] = row.fallbackModel, g[4] = row.model, g[5] = row.tokens, g[6] = row.toolCalls, g[7] = m;
  } else m = g[7];
  let u;
  if (g[17] !== status) u = e(ft, {
    status: status
  }), g[17] = status, g[18] = u;else u = g[18];
  const label = row.label;
  let p;
  if (g[19] !== m) p = m.length > 0 && r(n, {
    dimColor: !0,
    children: ["  ", m.join(" \xB7 ")]
  }), g[19] = m, g[20] = p;else p = g[20];
  let h;
  if (g[21] !== row.error || g[22] !== row.state) h = row.state === "error" && row.error && r(n, {
    color: "error",
    children: [" ", "\u2014", " ", row.error]
  }), g[21] = row.error, g[22] = row.state, g[23] = h;else h = g[23];
  let C;
  if (g[24] !== dimColor || g[25] !== row.label || g[26] !== u || g[27] !== p || g[28] !== h || g[29] !== i) C = e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: dimColor,
      children: [i, " ", u, " ", label, p, h]
    })
  }), g[24] = dimColor, g[25] = row.label, g[26] = u, g[27] = p, g[28] = h, g[29] = i, g[30] = C;else C = g[30];
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
    g,
    m,
    u,
    f,
    p;
  if (o[2] !== c.length || o[3] !== group.agents || o[4] !== verbose) {
    let h = group.agents.filter(jt);
    let C = group.agents.filter(zt);
    p = group.agents.length;
    m = c.length;
    u = h.length;
    g = m + u === p && p > 0;
    f = verbose ? group.agents : [...h, ...C];
    o[2] = c.length, o[3] = group.agents, o[4] = verbose, o[5] = g, o[6] = m, o[7] = u, o[8] = f, o[9] = p;
  } else g = o[5], m = o[6], u = o[7], f = o[8], p = o[9];
  let b = f,
    x = group.agents[0]?.model,
    M;
  if (o[10] !== x || o[11] !== group.agents) M = x && group.agents.every(item => item.model === x) ? ytt(x, void 0) : void 0, o[10] = x, o[11] = group.agents, o[12] = M;else M = o[12];
  let P = M,
    status_2 = !g ? "running" : u > 0 ? "error" : "success";
  const borderColor = group.kind === "child" ? "permission" : "subtle";
  let G;
  if (o[13] !== group.title) G = e(n, {
    bold: !0,
    children: group.title
  }), o[13] = group.title, o[14] = G;else G = o[14];
  let W;
  if (o[15] !== status_2) W = e(ft, {
    status: status_2
  }), o[15] = status_2, o[16] = W;else W = o[16];
  const D = P && ` \xB7 ${P}`;
  let E;
  if (o[17] !== u) E = u > 0 && r(n, {
    color: "error",
    children: [" ", "\xB7", " ", u, " failed"]
  }), o[17] = u, o[18] = E;else E = o[18];
  let _;
  if (o[19] !== m || o[20] !== D || o[21] !== E || o[22] !== p) _ = r(n, {
    dimColor: !0,
    children: [m, "/", p, D, E]
  }), o[19] = m, o[20] = D, o[21] = E, o[22] = p, o[23] = _;else _ = o[23];
  let j;
  if (o[24] !== G || o[25] !== W || o[26] !== _) j = e(s, {
    paddingX: 1,
    children: r(n, {
      children: [G, "  ", W, " ", _]
    })
  }), o[24] = G, o[25] = W, o[26] = _, o[27] = j;else j = o[27];
  let U;
  if (o[28] !== m || o[29] !== verbose) U = !verbose && m > 0 && e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: !0,
      children: [e(ft, {
        status: "success"
      }), " ", m, " done"]
    })
  }), o[28] = m, o[29] = verbose, o[30] = U;else U = o[30];
  let X;
  if (o[31] !== b) {
    let N;
    if (o[33] !== b.length) N = (row_2, Y) => e(K, {
      row: row_2,
      isLast: Y === b.length - 1
    }, row_2.index), o[33] = b.length, o[34] = N;else N = o[34];
    X = b.map(N);
    o[31] = b, o[32] = X;
  } else X = o[32];
  let N;
  if (o[35] !== j || o[36] !== U || o[37] !== X || o[38] !== borderColor || o[39] !== width) N = r(s, {
    flexDirection: "column",
    borderStyle: "single",
    borderColor: borderColor,
    alignSelf: "flex-start",
    width: width,
    children: [j, U, X]
  }), o[35] = j, o[36] = U, o[37] = X, o[38] = borderColor, o[39] = width, o[40] = N;else N = o[40];
  return N;
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
    g;
  if (i[3] !== agents) g = F(agents, Vt), i[3] = agents, i[4] = g;else g = i[4];
  let m = g,
    u = F(agents, Bt);
  const f = agents.length;
  let p;
  if (i[5] !== agents.length) p = O(agents.length, "agent"), i[5] = agents.length, i[6] = p;else p = i[6];
  let h;
  if (i[7] !== u) h = u > 0 && r(n, {
    color: "error",
    children: [" ", "\xB7", " ", u, " failed"]
  }), i[7] = u, i[8] = h;else h = i[8];
  let C;
  if (i[9] !== agents.length || i[10] !== m || i[11] !== p || i[12] !== h) C = r(n, {
    children: [f, " ", p, " ", "\xB7", " ", m, " done", h]
  }), i[9] = agents.length, i[10] = m, i[11] = p, i[12] = h, i[13] = C;else C = i[13];
  let b;
  if (i[14] !== c || i[15] !== d) {
    let x;
    if (i[17] !== c || i[18] !== d.length) x = (row_3, A) => e(K, {
      row: row_3,
      isLast: A === d.length - 1 && c === 0
    }, row_3.index), i[17] = c, i[18] = d.length, i[19] = x;else x = i[19];
    b = d.map(x);
    i[14] = c, i[15] = d, i[16] = b;
  } else b = i[16];
  let x;
  if (i[20] !== c) x = c > 0 && e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: !0,
      children: ["\u2514\u2500 \xB7 \xB7 \xB7 +", c, " more"]
    })
  }), i[20] = c, i[21] = x;else x = i[21];
  let P;
  if (i[22] !== C || i[23] !== b || i[24] !== x) P = r(s, {
    flexDirection: "column",
    children: [C, b, x]
  }), i[22] = C, i[23] = b, i[24] = x, i[25] = P;else P = i[25];
  return P;
}
function q2r(l) {
  let g = w(18),
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
  let m, flexDirection, f, p, h;
  if (g[0] !== agents_2 || g[1] !== logs_2 || g[2] !== phaseTitles_2 || g[3] !== verbose_3 || g[4] !== width_2) {
    let C = ae(agents_2, phaseTitles_2);
    let b;
    if (g[10] !== logs_2) b = logs_2.at(-1), g[10] = logs_2, g[11] = b;else b = g[11];
    let x = b;
    let M = logs_2.slice(-3, -1);
    m = s;
    flexDirection = "column";
    f = x && e(s, {
      marginBottom: C || agents_2.length > 0 ? 1 : 0,
      children: r(n, {
        children: [te.pointer, " ", x]
      })
    });
    p = C ? e(s, {
      flexDirection: "column",
      children: C.map((A, index) => r(Kd, {
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
    h = M.length > 0 && e(s, {
      flexDirection: "column",
      paddingLeft: 3,
      marginTop: 1,
      children: M.map(Ut)
    });
    g[0] = agents_2, g[1] = logs_2, g[2] = phaseTitles_2, g[3] = verbose_3, g[4] = width_2, g[5] = m, g[6] = flexDirection, g[7] = f, g[8] = p, g[9] = h;
  } else m = g[5], flexDirection = g[6], f = g[7], p = g[8], h = g[9];
  let b;
  if (g[12] !== m || g[13] !== flexDirection || g[14] !== f || g[15] !== p || g[16] !== h) b = r(m, {
    flexDirection: flexDirection,
    children: [f, p, h]
  }), g[12] = m, g[13] = flexDirection, g[14] = f, g[15] = p, g[16] = h, g[17] = b;else b = g[17];
  return b;
}
B();
function An() {
  return Date.now();
}
var R = 4,
  Ze = 80;
function Re(l) {
  let t = w(2),
    a;
  if (t[0] === S) a = D$o(), t[0] = a;else a = t[0];
  let i = a,
    [o, d] = y(0),
    c = Vu(),
    g;
  if (t[1] === S) g = () => d(m => (m + 1) % i.length), t[1] = g;else g = t[1];
  return sa(g, l && !c ? Ze : null), i[o % i.length];
}
function ve(l) {
  let o = w(14),
    {
      done: done,
      total: total,
      running: running
    } = l,
    d;
  if (o[0] !== done || o[1] !== total) d = total > 0 ? Math.round(done / total * R) : 0, o[0] = done, o[1] = total, o[2] = d;else d = o[2];
  let c = d,
    g = Math.min(running ? R - 1 : R, Math.max(0, c)),
    m = running ? Math.min(R - g, 1) : 0,
    u = R - g - m,
    children_2 = Re(m > 0),
    p;
  if (o[3] !== g) p = g > 0 && e(n, {
    color: "success",
    children: C8n.repeat(g)
  }), o[3] = g, o[4] = p;else p = o[4];
  let h;
  if (o[5] !== children_2 || o[6] !== m) h = m > 0 && e(n, {
    color: "success",
    children: children_2
  }), o[5] = children_2, o[6] = m, o[7] = h;else h = o[7];
  let C;
  if (o[8] !== u) C = u > 0 && e(n, {
    color: "subtle",
    dimColor: !0,
    children: C8n.repeat(u)
  }), o[8] = u, o[9] = C;else C = o[9];
  let b;
  if (o[10] !== p || o[11] !== h || o[12] !== C) b = r(n, {
    children: [p, h, C]
  }), o[10] = p, o[11] = h, o[12] = C, o[13] = b;else b = o[13];
  return b;
}
var ter = 9,
  Je = 12;
function ner(l) {
  let o = w(9),
    t = Te(),
    {
      rows: rows
    } = us(t),
    i = bl(),
    d;
  if (o[0] !== i || o[1] !== l || o[2] !== rows) d = i ? rows : dM() ? Math.floor(rows / 2) : l ? Math.max(Je, rows - ter) : rows, o[0] = i, o[1] = l, o[2] = rows, o[3] = d;else d = o[3];
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
function _tt(l) {
  let o = w(1),
    t = l.status === "running",
    [a, i] = y(An),
    d;
  if (o[0] === S) d = () => i(Date.now()), o[0] = d;else d = o[0];
  return sa(d, t ? 1000 : null), Math.max(0, (l.endTime ?? a) - l.startTime - (l.totalPausedMs ?? 0));
}
var ue = 17;
function rer(l) {
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
    f = status_3 === "done",
    p = status_3 === "failed",
    h = f || p,
    color_2 = m ? "permission" : f ? "success" : p ? "error" : "subtle",
    children_3 = m ? te.pointer : " ",
    children_4 = f ? te.tick : p ? te.cross : String(index_2),
    M = ie(children_3) + 1 + ie(children_4) + 1,
    A = Math.max(1, ue - M),
    v;
  if (P[0] !== title || P[1] !== A) v = mt(title, A), P[0] = title, P[1] = A, P[2] = v;else v = P[2];
  let children_5 = v,
    G = `${children_3} ${children_4} ${children_5}`,
    W = Math.max(0, ue - ie(G)),
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
  const color_3 = m ? "permission" : f ? "success" : p ? "error" : void 0,
    dimColor_2 = !m && !h;
  let N;
  if (P[9] !== children_5 || P[10] !== color_3 || P[11] !== dimColor_2) N = e(n, {
    color: color_3,
    dimColor: dimColor_2,
    children: children_5
  }), P[9] = children_5, P[10] = color_3, P[11] = dimColor_2, P[12] = N;else N = P[12];
  let Z;
  if (P[13] !== W) Z = " ".repeat(W), P[13] = W, P[14] = Z;else Z = P[14];
  let Y;
  if (P[15] !== Z || P[16] !== _ || P[17] !== j || P[18] !== N) Y = r(n, {
    wrap: "truncate-end",
    children: [_, " ", j, " ", N, Z]
  }), P[15] = Z, P[16] = _, P[17] = j, P[18] = N, P[19] = Y;else Y = P[19];
  const color_4 = m ? "permission" : f ? "success" : p ? "error" : void 0,
    dimColor_3 = !m && !h,
    ee = u ? `  ${u}` : "";
  let fe;
  if (P[20] !== D || P[21] !== color_4 || P[22] !== dimColor_3 || P[23] !== ee) fe = r(n, {
    wrap: "truncate-end",
    color: color_4,
    dimColor: dimColor_3,
    children: [D, ee]
  }), P[20] = D, P[21] = color_4, P[22] = dimColor_3, P[23] = ee, P[24] = fe;else fe = P[24];
  let wt;
  if (P[25] !== Y || P[26] !== fe) wt = r(s, {
    children: [Y, fe]
  }), P[25] = Y, P[26] = fe, P[27] = wt;else wt = P[27];
  return wt;
}
function oer(l) {
  let p = w(23),
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
    h;
  if (p[0] !== elapsedMs) h = elapsedMs !== void 0 ? Dhe(elapsedMs) : void 0, p[0] = elapsedMs, p[1] = h;else h = p[1];
  let C = h,
    b = complete ? ` \xB7 ${te.ellipsis} to view` : "",
    color_5 = dotState === "failed" ? "error" : "success",
    M;
  if (p[2] !== color_5) M = e(n, {
    color: color_5,
    children: children_6
  }), p[2] = color_5, p[3] = M;else M = p[3];
  let A;
  if (p[4] !== name || p[5] !== bold) A = name ? r(n, {
    color: bold ? "claude" : void 0,
    bold: bold,
    children: [name, " "]
  }) : null, p[4] = name, p[5] = bold, p[6] = A;else A = p[6];
  let P;
  if (p[7] !== done_3 || p[8] !== running_2 || p[9] !== total_3) P = e(ve, {
    done: done_3,
    total: total_3,
    running: running_2
  }), p[7] = done_3, p[8] = running_2, p[9] = total_3, p[10] = P;else P = p[10];
  const dimColor_4 = !bold,
    T = phaseText ? ` \xB7 ${phaseText}` : "",
    G = ` \xB7 ${done_3}/${total_3} agents`,
    W = C ? ` \xB7 ${C}` : "";
  let D;
  if (p[11] !== b || p[12] !== bold || p[13] !== dimColor_4 || p[14] !== T || p[15] !== G || p[16] !== W) D = r(n, {
    dimColor: dimColor_4,
    bold: bold,
    children: [T, G, W, b]
  }), p[11] = b, p[12] = bold, p[13] = dimColor_4, p[14] = T, p[15] = G, p[16] = W, p[17] = D;else D = p[17];
  let E;
  if (p[18] !== D || p[19] !== M || p[20] !== A || p[21] !== P) E = r(n, {
    wrap: "truncate-end",
    children: [M, " ", A, P, D]
  }), p[18] = D, p[19] = M, p[20] = A, p[21] = P, p[22] = E;else E = p[22];
  return E;
}
function btt(l) {
  let c = w(17),
    {
      name: name_2,
      subtext: subtext,
      stats: stats,
      width: width_4
    } = l,
    d = bl(),
    g;
  if (c[0] !== d || c[1] !== width_4) g = !d && e(n, {
    color: "text",
    wrap: "truncate-end",
    children: k4.repeat(Math.max(1, width_4))
  }), c[0] = d, c[1] = width_4, c[2] = g;else g = c[2];
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
  let f;
  if (c[7] !== stats) f = stats ? e(s, {
    flexShrink: 0,
    children: r(n, {
      dimColor: !0,
      children: [stats, " "]
    })
  }) : null, c[7] = stats, c[8] = f;else f = c[8];
  let p;
  if (c[9] !== u || c[10] !== f || c[11] !== width_4) p = r(s, {
    width: width_4,
    overflow: "hidden",
    children: [u, f]
  }), c[9] = u, c[10] = f, c[11] = width_4, c[12] = p;else p = c[12];
  let h;
  if (c[13] !== g || c[14] !== m || c[15] !== p) h = r(s, {
    flexDirection: "column",
    children: [g, m, p]
  }), c[13] = g, c[14] = m, c[15] = p, c[16] = h;else h = c[16];
  return h;
}
function $e(l) {
  let doneCount = F(l.agents, u => u.state === "done"),
    a = F(l.agents, u => u.state === "error"),
    totalCount = l.agents.length,
    o = doneCount + a === totalCount && totalCount > 0,
    tokens = 0,
    c = 1 / 0,
    g = 0;
  for (let u of l.agents) {
    if (u.tokens) tokens += u.tokens;
    if (u.startedAt != null) {
      if (u.startedAt < c) c = u.startedAt;
      let f = u.lastProgressAt ?? u.startedAt;
      if (f > g) g = f;
    }
  }
  let durationMs = c < 1 / 0 ? g - c : 0;
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
function pt(l) {
  return l.toLowerCase().trim();
}
function Rn(l, t) {
  let a = pt(l),
    i = pt(t);
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
function K2r(l) {
  let t = eer(l.workflowProgress),
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
function Y2r(l, t) {
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
function X2r(l) {
  let {
      titles: titles,
      positionStart: positionStart,
      totalPhases: totalPhases
    } = l,
    o = titles.map(item => $n(zr(item)));
  if (o.length === 1) return `${mt(o[0] ?? "", me)} (${positionStart}/${totalPhases})`;
  if (o.length === 2) {
    let c = o.map(item => mt(item, me)).join(De),
      g = Math.floor((ht - De.length) / 2);
    return ie(c) <= ht ? c : o.map(item => mt(item, g)).join(De);
  }
  let d = ` +${o.length - 1}`;
  return mt(o[0] ?? "", me - ie(d)) + d;
}
function J2r(l, t) {
  let doneAgents = 0,
    i = 0;
  for (let o of l) doneAgents += o.doneCount, i += o.totalCount;
  return {
    doneAgents: doneAgents,
    totalAgents: Math.max(t, i, doneAgents)
  };
}
function Q2r(l) {
  if (l.script.length > 0) {
    let t = Tv(l.script);
    if (!("error" in t) && t.meta.description) return t.meta.description;
  }
  return l.description || l.summary || "";
}
function Z2r(l, t, a, i) {
  let o = l.status === "completed" ? " \xB7 done" : l.status === "killed" ? " \xB7 stopped" : l.status === "paused" ? " \xB7 paused" : zs(l.status) ? " \xB7 failed" : "",
    subtext_2 = l.status === "running" && l.rateLimitWait !== void 0 ? rSs(l.rateLimitWait.resetsAt) : t,
    stats_2 = `${a.doneAgents}/${a.totalAgents} ${O(a.totalAgents, "agent")} \xB7 ${Dhe(i)}${o}`;
  return {
    name: l.workflowName ?? l.summary ?? l.description,
    subtext: subtext_2,
    stats: stats_2
  };
}
function q2e(l, t = 0) {
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
export { ytt, eer, q2r, ter, ner, _tt, rer, oer, btt, K2r, Y2r, X2r, J2r, Q2r, Z2r, q2e };