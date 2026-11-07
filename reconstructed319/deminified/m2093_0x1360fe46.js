// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { P, Yr } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Jo as children_6, IQi, BJ, oLr, jFs } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ct, cn, fxe, Ur } from "B:/~BUN/root/chunk-bkfncj77.js";
import { s, n, sl } from "B:/~BUN/root/chunk-qey16aan.js";
import { pf, jm } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { SF } from "B:/~BUN/root/chunk-p2ta953m.js";
import { Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { Bl, As } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { $T } from "B:/~BUN/root/chunk-9x9jgvy9.js";
import { NQn, ibn } from "B:/~BUN/root/chunk-tj9bpqjb.js";
import { re, eRi } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { gp } from "B:/~BUN/root/chunk-nyy541yq.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Ko } from "B:/~BUN/root/chunk-kgvnwy91.js";
import { pu, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function svt(l, t) {
  let a = i => jm(i) ?? pf(i);
  if (t != null) return `${l == null ? "" : `${a(l)} `}${IQi} ${a(t)}`;
  return l != null ? a(l) : "";
}
function Ot(me) {
  return me.state === "done";
}
function Ft(ge) {
  return ge.state === "error";
}
function _t(ee) {
  return ee.state === "start" || ee.state === "progress";
}
function jt(W) {
  return W.state === "done";
}
function zt(M) {
  return M.state === "error";
}
function Vt(children, M) {
  return e(n, {
    dimColor: !0,
    children: children
  }, M);
}
function sjr(l) {
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
      u = a.get(phaseIndex);
    if (!u) {
      let c = t.get(phaseIndex);
      u = {
        phaseIndex: phaseIndex,
        title: c?.title ?? `Phase ${phaseIndex}`,
        kind: c?.kind,
        agents: []
      }, a.set(phaseIndex, u);
    }
    u.agents.push(i);
  }
  return [...a.values()].sort((itemA, itemB) => itemA.phaseIndex - itemB.phaseIndex);
}
function q(l) {
  let g = S(31),
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
      let d;
      if (g[8] !== row.fallbackModel || g[9] !== row.model) d = svt(row.model, row.fallbackModel), g[8] = row.fallbackModel, g[9] = row.model, g[10] = d;else d = g[10];
      m.push(d);
    }
    if (row.tokens != null) {
      let d;
      if (g[11] !== row.tokens) d = Ur(row.tokens), g[11] = row.tokens, g[12] = d;else d = g[12];
      m.push(`${d} tok`);
    }
    if (row.toolCalls != null && row.toolCalls > 0) {
      const toolCalls = row.toolCalls;
      let f;
      if (g[13] !== row.toolCalls) f = P(row.toolCalls, "tool"), g[13] = row.toolCalls, g[14] = f;else f = g[14];
      m.push(`${toolCalls} ${f}`);
    }
    if (row.durationMs != null) {
      let d;
      if (g[15] !== row.durationMs) d = cn(row.durationMs), g[15] = row.durationMs, g[16] = d;else d = g[16];
      m.push(d);
    }
    if (dimColor && m.length === 0) m.push("\u2026running");
    g[0] = dimColor, g[1] = row.agentType, g[2] = row.durationMs, g[3] = row.fallbackModel, g[4] = row.model, g[5] = row.tokens, g[6] = row.toolCalls, g[7] = m;
  } else m = g[7];
  let d;
  if (g[17] !== status) d = e(Tt, {
    status: status
  }), g[17] = status, g[18] = d;else d = g[18];
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
  let k;
  if (g[24] !== dimColor || g[25] !== row.label || g[26] !== d || g[27] !== p || g[28] !== h || g[29] !== i) k = e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: dimColor,
      children: [i, " ", d, " ", label, p, h]
    })
  }), g[24] = dimColor, g[25] = row.label, g[26] = d, g[27] = p, g[28] = h, g[29] = i, g[30] = k;else k = g[30];
  return k;
}
function ke(l) {
  let o = S(41),
    {
      group: group,
      verbose: verbose,
      width: width
    } = l,
    u;
  if (o[0] !== group.agents) u = group.agents.filter(Ot), o[0] = group.agents, o[1] = u;else u = o[1];
  let c = u,
    g,
    m,
    d,
    f,
    p;
  if (o[2] !== c.length || o[3] !== group.agents || o[4] !== verbose) {
    let h = group.agents.filter(Ft);
    let k = group.agents.filter(_t);
    p = group.agents.length;
    m = c.length;
    d = h.length;
    g = m + d === p && p > 0;
    f = verbose ? group.agents : [...h, ...k];
    o[2] = c.length, o[3] = group.agents, o[4] = verbose, o[5] = g, o[6] = m, o[7] = d, o[8] = f, o[9] = p;
  } else g = o[5], m = o[6], d = o[7], f = o[8], p = o[9];
  let b = f,
    x = group.agents[0]?.model,
    R;
  if (o[10] !== x || o[11] !== group.agents) R = x && group.agents.every(item => item.model === x) ? svt(x, void 0) : void 0, o[10] = x, o[11] = group.agents, o[12] = R;else R = o[12];
  let T = R,
    status_2 = !g ? "running" : d > 0 ? "error" : "success";
  const borderColor = group.kind === "child" ? "permission" : "subtle";
  let F;
  if (o[13] !== group.title) F = e(n, {
    bold: !0,
    children: group.title
  }), o[13] = group.title, o[14] = F;else F = o[14];
  let _;
  if (o[15] !== status_2) _ = e(Tt, {
    status: status_2
  }), o[15] = status_2, o[16] = _;else _ = o[16];
  const X = T && ` \xB7 ${T}`;
  let z;
  if (o[17] !== d) z = d > 0 && r(n, {
    color: "error",
    children: [" ", "\xB7", " ", d, " failed"]
  }), o[17] = d, o[18] = z;else z = o[18];
  let E;
  if (o[19] !== m || o[20] !== X || o[21] !== z || o[22] !== p) E = r(n, {
    dimColor: !0,
    children: [m, "/", p, X, z]
  }), o[19] = m, o[20] = X, o[21] = z, o[22] = p, o[23] = E;else E = o[23];
  let N;
  if (o[24] !== F || o[25] !== _ || o[26] !== E) N = e(s, {
    paddingX: 1,
    children: r(n, {
      children: [F, "  ", _, " ", E]
    })
  }), o[24] = F, o[25] = _, o[26] = E, o[27] = N;else N = o[27];
  let V;
  if (o[28] !== m || o[29] !== verbose) V = !verbose && m > 0 && e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: !0,
      children: [e(Tt, {
        status: "success"
      }), " ", m, " done"]
    })
  }), o[28] = m, o[29] = verbose, o[30] = V;else V = o[30];
  let B;
  if (o[31] !== b) {
    let I;
    if (o[33] !== b.length) I = (row_2, Y) => e(q, {
      row: row_2,
      isLast: Y === b.length - 1
    }, row_2.index), o[33] = b.length, o[34] = I;else I = o[34];
    B = b.map(I);
    o[31] = b, o[32] = B;
  } else B = o[32];
  let I;
  if (o[35] !== N || o[36] !== V || o[37] !== B || o[38] !== borderColor || o[39] !== width) I = r(s, {
    flexDirection: "column",
    borderStyle: "single",
    borderColor: borderColor,
    alignSelf: "flex-start",
    width: width,
    children: [N, V, B]
  }), o[35] = N, o[36] = V, o[37] = B, o[38] = borderColor, o[39] = width, o[40] = I;else I = o[40];
  return I;
}
var Fe = 8;
function ye(l) {
  let i = S(26),
    {
      agents: agents,
      verbose: verbose_2
    } = l,
    o;
  if (i[0] !== agents || i[1] !== verbose_2) o = verbose_2 ? agents : agents.slice(-Fe), i[0] = agents, i[1] = verbose_2, i[2] = o;else o = i[2];
  let u = o,
    c = agents.length - u.length,
    g;
  if (i[3] !== agents) g = U(agents, jt), i[3] = agents, i[4] = g;else g = i[4];
  let m = g,
    d = U(agents, zt);
  const f = agents.length;
  let p;
  if (i[5] !== agents.length) p = P(agents.length, "agent"), i[5] = agents.length, i[6] = p;else p = i[6];
  let h;
  if (i[7] !== d) h = d > 0 && r(n, {
    color: "error",
    children: [" ", "\xB7", " ", d, " failed"]
  }), i[7] = d, i[8] = h;else h = i[8];
  let k;
  if (i[9] !== agents.length || i[10] !== m || i[11] !== p || i[12] !== h) k = r(n, {
    children: [f, " ", p, " ", "\xB7", " ", m, " done", h]
  }), i[9] = agents.length, i[10] = m, i[11] = p, i[12] = h, i[13] = k;else k = i[13];
  let b;
  if (i[14] !== c || i[15] !== u) {
    let x;
    if (i[17] !== c || i[18] !== u.length) x = (row_3, v) => e(q, {
      row: row_3,
      isLast: v === u.length - 1 && c === 0
    }, row_3.index), i[17] = c, i[18] = u.length, i[19] = x;else x = i[19];
    b = u.map(x);
    i[14] = c, i[15] = u, i[16] = b;
  } else b = i[16];
  let x;
  if (i[20] !== c) x = c > 0 && e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: !0,
      children: ["\u2514\u2500 \xB7 \xB7 \xB7 +", c, " more"]
    })
  }), i[20] = c, i[21] = x;else x = i[21];
  let T;
  if (i[22] !== k || i[23] !== b || i[24] !== x) T = r(s, {
    flexDirection: "column",
    children: [k, b, x]
  }), i[22] = k, i[23] = b, i[24] = x, i[25] = T;else T = i[25];
  return T;
}
function pNo(l) {
  let g = S(18),
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
    let k = ae(agents_2, phaseTitles_2);
    let b;
    if (g[10] !== logs_2) b = logs_2.at(-1), g[10] = logs_2, g[11] = b;else b = g[11];
    let x = b;
    let R = logs_2.slice(-3, -1);
    m = s;
    flexDirection = "column";
    f = x && e(s, {
      marginBottom: k || agents_2.length > 0 ? 1 : 0,
      children: r(n, {
        children: [re.pointer, " ", x]
      })
    });
    p = k ? e(s, {
      flexDirection: "column",
      children: k.map((v, index) => r(pu, {
        children: [e(ke, {
          group: v,
          verbose: verbose_3,
          width: width_2
        }), index < k.length - 1 && e(s, {
          paddingLeft: 3,
          children: e(n, {
            dimColor: !0,
            children: "\u2193"
          })
        })]
      }, v.phaseIndex))
    }) : agents_2.length > 0 ? e(ye, {
      agents: agents_2,
      verbose: verbose_3
    }) : null;
    h = R.length > 0 && e(s, {
      flexDirection: "column",
      paddingLeft: 3,
      marginTop: 1,
      children: R.map(Vt)
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
j();
function Mn() {
  return Date.now();
}
var A = 4,
  Xe = 80;
function Se(l) {
  let t = S(2),
    a;
  if (t[0] === w) a = jFs(), t[0] = a;else a = t[0];
  let i = a,
    [o, u] = y(0),
    c = gp(),
    g;
  if (t[1] === w) g = () => u(m => (m + 1) % i.length), t[1] = g;else g = t[1];
  return sl(g, l && !c ? Xe : null), i[o % i.length];
}
function Ae(l) {
  let o = S(14),
    {
      done: done,
      total: total,
      running: running
    } = l,
    u;
  if (o[0] !== done || o[1] !== total) u = total > 0 ? Math.round(done / total * A) : 0, o[0] = done, o[1] = total, o[2] = u;else u = o[2];
  let c = u,
    g = Math.min(running ? A - 1 : A, Math.max(0, c)),
    m = running ? Math.min(A - g, 1) : 0,
    d = A - g - m,
    children_2 = Se(m > 0),
    p;
  if (o[3] !== g) p = g > 0 && e(n, {
    color: "success",
    children: oLr.repeat(g)
  }), o[3] = g, o[4] = p;else p = o[4];
  let h;
  if (o[5] !== children_2 || o[6] !== m) h = m > 0 && e(n, {
    color: "success",
    children: children_2
  }), o[5] = children_2, o[6] = m, o[7] = h;else h = o[7];
  let k;
  if (o[8] !== d) k = d > 0 && e(n, {
    color: "subtle",
    dimColor: !0,
    children: oLr.repeat(d)
  }), o[8] = d, o[9] = k;else k = o[9];
  let b;
  if (o[10] !== p || o[11] !== h || o[12] !== k) b = r(n, {
    children: [p, h, k]
  }), o[10] = p, o[11] = h, o[12] = k, o[13] = b;else b = o[13];
  return b;
}
var ijr = 9,
  He = 12;
function ajr(l) {
  let o = S(8),
    t = Re(),
    {
      rows: rows
    } = As(t),
    i = Bl(),
    u;
  if (o[0] !== i || o[1] !== l || o[2] !== rows) u = i ? rows : SF() ? Math.floor(rows / 2) : l ? Math.max(He, rows - ijr) : rows, o[0] = i, o[1] = l, o[2] = rows, o[3] = u;else u = o[3];
  let availableRows = u,
    {
      columns: columns
    } = t,
    width_3 = Math.max(24, columns - 6),
    d;
  if (o[4] !== availableRows || o[5] !== rows || o[6] !== width_3) d = {
    availableRows: availableRows,
    width: width_3,
    rows: rows
  }, o[4] = availableRows, o[5] = rows, o[6] = width_3, o[7] = d;else d = o[7];
  return d;
}
function ivt(l) {
  let o = S(1),
    t = l.status === "running",
    [a, i] = y(Mn),
    u;
  if (o[0] === w) u = () => i(Date.now()), o[0] = u;else u = o[0];
  return sl(u, t ? 1000 : null), Math.max(0, (l.endTime ?? a) - l.startTime - (l.totalPausedMs ?? 0));
}
var de = 17;
function ljr(l) {
  let T = S(28),
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
    d = trailing === void 0 ? "" : trailing,
    f = status_3 === "done",
    p = status_3 === "failed",
    h = f || p,
    color_2 = m ? "permission" : f ? "success" : p ? "error" : "inactive",
    children_3 = m ? re.pointer : " ",
    children_4 = f ? re.tick : p ? re.cross : String(index_2),
    R = ce(children_3) + 1 + ce(children_4) + 1,
    v = Math.max(1, de - R),
    W;
  if (T[0] !== title || T[1] !== v) W = ct(title, v), T[0] = title, T[1] = v, T[2] = W;else W = T[2];
  let children_5 = W,
    F = `${children_3} ${children_4} ${children_5}`,
    _ = Math.max(0, de - ce(F)),
    X = total_2 > 0 ? `${done_2}/${total_2}` : "";
  const color = m ? "permission" : void 0;
  let E;
  if (T[3] !== children_3 || T[4] !== color) E = e(n, {
    color: color,
    children: children_3
  }), T[3] = children_3, T[4] = color, T[5] = E;else E = T[5];
  let N;
  if (T[6] !== color_2 || T[7] !== children_4) N = e(n, {
    color: color_2,
    children: children_4
  }), T[6] = color_2, T[7] = children_4, T[8] = N;else N = T[8];
  const color_3 = m ? "permission" : f ? "success" : p ? "error" : void 0,
    dimColor_2 = !m && !h;
  let I;
  if (T[9] !== children_5 || T[10] !== color_3 || T[11] !== dimColor_2) I = e(n, {
    color: color_3,
    dimColor: dimColor_2,
    children: children_5
  }), T[9] = children_5, T[10] = color_3, T[11] = dimColor_2, T[12] = I;else I = T[12];
  let Z;
  if (T[13] !== _) Z = " ".repeat(_), T[13] = _, T[14] = Z;else Z = T[14];
  let Y;
  if (T[15] !== Z || T[16] !== E || T[17] !== N || T[18] !== I) Y = r(n, {
    wrap: "truncate-end",
    children: [E, " ", N, " ", I, Z]
  }), T[15] = Z, T[16] = E, T[17] = N, T[18] = I, T[19] = Y;else Y = T[19];
  const color_4 = m ? "permission" : f ? "success" : p ? "error" : void 0,
    dimColor_3 = !m && !h,
    ee = d ? `  ${d}` : "";
  let pe;
  if (T[20] !== X || T[21] !== color_4 || T[22] !== dimColor_3 || T[23] !== ee) pe = r(n, {
    wrap: "truncate-end",
    color: color_4,
    dimColor: dimColor_3,
    children: [X, ee]
  }), T[20] = X, T[21] = color_4, T[22] = dimColor_3, T[23] = ee, T[24] = pe;else pe = T[24];
  let pt;
  if (T[25] !== Y || T[26] !== pe) pt = r(s, {
    children: [Y, pe]
  }), T[25] = Y, T[26] = pe, T[27] = pt;else pt = T[27];
  return pt;
}
function djr(l) {
  let d = S(20),
    {
      name: name,
      done: done_3,
      total: total_3,
      running: running_2,
      elapsedMs: elapsedMs,
      complete: complete,
      dotState: dotState,
      phaseText: phaseText
    } = l,
    f;
  if (d[0] !== elapsedMs) f = elapsedMs !== void 0 ? fxe(elapsedMs) : void 0, d[0] = elapsedMs, d[1] = f;else f = d[1];
  let p = f,
    h = complete ? ` \xB7 ${re.ellipsis} to view` : "",
    color_5 = dotState === "failed" ? "error" : "success",
    b;
  if (d[2] !== color_5) b = e(n, {
    color: color_5,
    children: children_6
  }), d[2] = color_5, d[3] = b;else b = d[3];
  let x;
  if (d[4] !== name) x = name ? r(n, {
    children: [name, " "]
  }) : null, d[4] = name, d[5] = x;else x = d[5];
  let R;
  if (d[6] !== done_3 || d[7] !== running_2 || d[8] !== total_3) R = e(Ae, {
    done: done_3,
    total: total_3,
    running: running_2
  }), d[6] = done_3, d[7] = running_2, d[8] = total_3, d[9] = R;else R = d[9];
  const v = phaseText ? ` \xB7 ${phaseText}` : "",
    T = ` \xB7 ${done_3}/${total_3} agents`,
    W = p ? ` \xB7 ${p}` : "";
  let M;
  if (d[10] !== h || d[11] !== v || d[12] !== T || d[13] !== W) M = r(n, {
    dimColor: !0,
    children: [v, T, W, h]
  }), d[10] = h, d[11] = v, d[12] = T, d[13] = W, d[14] = M;else M = d[14];
  let F;
  if (d[15] !== b || d[16] !== x || d[17] !== R || d[18] !== M) F = r(n, {
    wrap: "truncate-end",
    children: [b, " ", x, R, M]
  }), d[15] = b, d[16] = x, d[17] = R, d[18] = M, d[19] = F;else F = d[19];
  return F;
}
function avt(l) {
  let c = S(17),
    {
      name: name_2,
      subtext: subtext,
      stats: stats,
      width: width_4
    } = l,
    u = Bl(),
    g;
  if (c[0] !== u || c[1] !== width_4) g = !u && e(n, {
    color: "text",
    wrap: "truncate-end",
    children: BJ.repeat(Math.max(1, width_4))
  }), c[0] = u, c[1] = width_4, c[2] = g;else g = c[2];
  let m;
  if (c[3] !== name_2) m = r(n, {
    bold: !0,
    color: "permission",
    wrap: "truncate-end",
    children: [" ", name_2]
  }), c[3] = name_2, c[4] = m;else m = c[4];
  let d;
  if (c[5] !== subtext) d = e(s, {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    children: r(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: [" ", subtext]
    })
  }), c[5] = subtext, c[6] = d;else d = c[6];
  let f;
  if (c[7] !== stats) f = stats ? e(s, {
    flexShrink: 0,
    children: r(n, {
      dimColor: !0,
      children: [stats, " "]
    })
  }) : null, c[7] = stats, c[8] = f;else f = c[8];
  let p;
  if (c[9] !== d || c[10] !== f || c[11] !== width_4) p = r(s, {
    width: width_4,
    overflow: "hidden",
    children: [d, f]
  }), c[9] = d, c[10] = f, c[11] = width_4, c[12] = p;else p = c[12];
  let h;
  if (c[13] !== g || c[14] !== m || c[15] !== p) h = r(s, {
    flexDirection: "column",
    children: [g, m, p]
  }), c[13] = g, c[14] = m, c[15] = p, c[16] = h;else h = c[16];
  return h;
}
function De(l) {
  let doneCount = U(l.agents, d => d.state === "done"),
    a = U(l.agents, d => d.state === "error" && !NQn(d)),
    totalCount = l.agents.length,
    o = doneCount + a === totalCount && totalCount > 0,
    tokens = 0,
    c = 1 / 0,
    g = 0;
  for (let d of l.agents) {
    if (d.tokens) tokens += d.tokens;
    if (d.startedAt != null) {
      if (d.startedAt < c) c = d.startedAt;
      let f = d.lastProgressAt ?? d.startedAt;
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
function mt(l) {
  return l.toLowerCase().trim();
}
function Rn(l, t) {
  let a = mt(l),
    i = mt(t);
  if (!a || !i) return a === i;
  return a === i || a.startsWith(i) || i.startsWith(a);
}
function An(l, t) {
  let a = new Set(),
    i = [];
  function o(u) {
    for (let c of t) {
      if (a.has(c)) continue;
      if (Rn(u, c.title)) return a.add(c), c;
    }
    return;
  }
  for (let u of l ?? []) {
    let c = o(u.title);
    i.push(c ? De(c) : Sn(u.title));
  }
  for (let u of t) if (!a.has(u)) i.push(De(u));
  return i;
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
  return i;
}
var ue = 16;
function hNo(l, t) {
  return null;
}
var gt = ue + 8,
  ve = "aeiou",
  vn = new Map([["commit", "committing"], ["submit", "submitting"], ["format", "formatting"], ["edit", "editing"], ["exit", "exiting"], ["setup", null], ["cleanup", null], ["init", null]]),
  Wn = /^[A-Za-z]{3,12}$/;
function Dn(l) {
  if (!Wn.test(l)) return l;
  let t = l.toLowerCase(),
    a = vn.get(t);
  if (a !== void 0) return a === null ? l : l[0] + a.slice(1);
  if (t.endsWith("ing")) return l;
  if (t.endsWith("ie")) return `${l.slice(0, -2)}ying`;
  if (t.endsWith("e") && !t.endsWith("ee") && !t.endsWith("ye")) return `${l.slice(0, -1)}ing`;
  let i = t.at(-1);
  if (t.length <= 4 && !ve.includes(t.at(-3)) && ve.includes(t.at(-2)) && !ve.includes(i) && !"wxy".includes(i)) return `${l}${i}ing`;
  return `${l}ing`;
}
var We = " & ";
function gNo(l) {
  let {
      titles: titles,
      positionStart: positionStart,
      totalPhases: totalPhases
    } = l,
    o = titles.map(item => Dn(Yr(item)));
  if (o.length === 1) return `${ct(o[0] ?? "", ue)} (${positionStart}/${totalPhases})`;
  if (o.length === 2) {
    let c = o.map(item => ct(item, ue)).join(We),
      g = Math.floor((gt - We.length) / 2);
    return ce(c) <= gt ? c : o.map(item => ct(item, g)).join(We);
  }
  let u = ` +${o.length - 1}`;
  return ct(o[0] ?? "", ue - ce(u)) + u;
}
function yNo(l, t) {
  let doneAgents = 0,
    i = 0;
  for (let o of l) doneAgents += o.doneCount, i += o.totalCount;
  return {
    doneAgents: doneAgents,
    totalAgents: Math.max(t, i, doneAgents)
  };
}
function _No(l) {
  if (l.script.length > 0) {
    let t = $T(l.script);
    if (!("error" in t) && t.meta.description) return t.meta.description;
  }
  return l.description || l.summary || "";
}
function bNo(l, t, a, i) {
  let o = l.status === "completed" ? " \xB7 done" : l.status === "killed" ? " \xB7 stopped" : l.status === "paused" ? " \xB7 paused" : Ko(l.status) ? " \xB7 failed" : "",
    subtext_2 = l.status === "running" && l.rateLimitWait !== void 0 ? eRi(l.rateLimitWait.resetsAt) : t,
    stats_2 = `${a.doneAgents}/${a.totalAgents} ${P(a.totalAgents, "agent")} \xB7 ${fxe(i)}${o}`;
  return {
    name: l.workflowName ?? l.summary ?? l.description,
    subtext: subtext_2,
    stats: stats_2
  };
}
function mot(l, t = 0) {
  let a = 0,
    done_4 = 0,
    failedCount = 0,
    started = 0,
    running_3 = !1;
  for (let d of l) {
    if (d.type !== "workflow_agent") continue;
    if (a++, d.state === "done") done_4++, started++;else if (d.state === "error") failedCount++, started++;else if (d.state === "start" || d.state === "progress") {
      if (running_3 = !0, ibn(d)) started++;
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
export { svt, sjr, pNo, ijr, ajr, ivt, ljr, djr, avt, mNo, hNo, gNo, yNo, _No, bNo, mot };