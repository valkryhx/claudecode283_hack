// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { V } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { mt } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { iO } from "B:/~BUN/root/chunk-74f4ssah.js";
import { lce } from "B:/~BUN/root/chunk-nnc7bx19.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { s, n, dn } from "B:/~BUN/root/chunk-damrp3r8.js";
import { kN } from "B:/~BUN/root/chunk-bvhc5fp3.js";
import { as } from "B:/~BUN/root/chunk-j97yjp75.js";
import { qLn } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { xp } from "B:/~BUN/root/chunk-k382hx6g.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { P, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
B();
function Se(v) {
  return v.expandedView;
}
function Be(T, U) {
  return parseInt(T, 10) - parseInt(U, 10);
}
function Ie(ee) {
  return `#${ee}`;
}
function mtr(i) {
  let x = w(2),
    {
      hidden: hidden
    } = i,
    f = V(Se) === "tasks",
    tasks = lce();
  if (hidden || !f || !tasks || tasks.length === 0) {
    return null;
  }
  let z;
  if (x[0] !== tasks) z = e(s, {
    width: "100%",
    flexDirection: "column",
    children: e(gtr, {
      tasks: tasks,
      isStandalone: !0
    })
  }), x[0] = tasks, x[1] = z;else z = x[1];
  return z;
}
var oe = 30000;
function W(i, c) {
  let f = parseInt(i.id, 10),
    d = parseInt(c.id, 10);
  if (!isNaN(f) && !isNaN(d)) return f - d;
  return i.id.localeCompare(c.id);
}
function gtr({
  tasks: tasks_2,
  isStandalone = !1
}) {
  let f = V(t => t.teamContext),
    d = V(t => t.tasks),
    [x, z] = y(0),
    {
      rows: rows,
      columns: columns
    } = Te(),
    S = dn(),
    C = A(null);
  C.current ??= new Map(tasks_2.filter(item => item.status === "completed").map(item => [item.id, null]));
  let current = C.current,
    I = rows <= 10 ? 0 : Math.min(5, Math.max(3, rows - 14)),
    E = new Set(tasks_2.filter(item => item.status === "completed").map(item => item.id)),
    _ = Date.now();
  for (let t of E) if (!current.has(t)) current.set(t, _);
  for (let t of current.keys()) if (!E.has(t)) current.delete(t);
  if (P(() => {
    let t = Date.now(),
      o = 1 / 0;
    for (let l of current.values()) {
      if (l === null) continue;
      let m = l + oe;
      if (m > t && m < o) o = m;
    }
    if (o === 1 / 0) return;
    return S.setTimeout(() => z(l => l + 1), o - t);
  }, [tasks_2, S, current, x]), !iO()) return null;
  if (tasks_2.length === 0) return null;
  let O = {};
  if (as() && f?.teammates) {
    for (let t of Object.values(f.teammates)) if (t.color) {
      let o = kN[t.color];
      if (o) O[t.name] = o;
    }
  }
  let g = {},
    j = new Set();
  if (as()) {
    for (let t of Object.values(d)) if (xp(t) && t.status === "running") {
      j.add(t.identity.agentName), j.add(t.identity.agentId);
      let o = t.progress?.recentActivities,
        l = (o && qLn(o)) ?? t.progress?.lastActivity?.activityDescription;
      if (l) g[t.identity.agentName] = l, g[t.identity.agentId] = l;
    }
  }
  let children_2 = F(tasks_2, t => t.status === "completed"),
    children_4 = F(tasks_2, t => t.status === "pending"),
    children_3 = tasks_2.length - children_2 - children_4,
    N = new Set(tasks_2.filter(item => item.status !== "completed").map(item => item.id)),
    G = tasks_2.length > I,
    M,
    h;
  if (G) {
    let t = [],
      o = [];
    for (let u of tasks_2.filter(item => item.status === "completed")) {
      let T = current.get(u.id);
      if (typeof T === "number" && _ - T < oe) t.push(u);else o.push(u);
    }
    t.sort(W), o.sort(W);
    let l = tasks_2.filter(item => item.status === "in_progress").sort(W),
      m = tasks_2.filter(item => item.status === "pending").sort((itemA, itemB) => {
        let U = itemA.blockedBy.some(item => N.has(item)),
          ee = itemB.blockedBy.some(item => N.has(item));
        if (U !== ee) return U ? 1 : -1;
        return W(itemA, itemB);
      }),
      p = [...t, ...l, ...m, ...o];
    M = p.slice(0, I), h = p.slice(I);
  } else M = [...tasks_2].sort(W), h = [];
  let children = "";
  if (h.length > 0) {
    let t = [],
      o = F(h, p => p.status === "pending"),
      l = F(h, p => p.status === "in_progress"),
      m = F(h, p => p.status === "completed");
    if (l > 0) t.push(`${l} in progress`);
    if (o > 0) t.push(`${o} pending`);
    if (m > 0) t.push(`${m} completed`);
    children = ` \u2026 +${t.join(", ")}`;
  }
  let children_5 = r(Q, {
    children: [M.map(t => e(de, {
      task: t,
      ownerColor: t.owner ? O[t.owner] : void 0,
      openBlockers: t.blockedBy.filter(item => N.has(item)),
      activity: t.owner ? g[t.owner] : void 0,
      ownerActive: t.owner ? j.has(t.owner) : !1,
      columns: columns
    }, t.id)), I > 0 && children && e(n, {
      dimColor: !0,
      children: children
    })]
  });
  if (isStandalone) return r(s, {
    flexDirection: "column",
    marginTop: 1,
    marginLeft: 2,
    children: [e(s, {
      children: r(n, {
        dimColor: !0,
        children: [e(n, {
          bold: !0,
          children: tasks_2.length
        }), " tasks (", e(n, {
          bold: !0,
          children: children_2
        }), " done, ", children_3 > 0 && r(Q, {
          children: [e(n, {
            bold: !0,
            children: children_3
          }), " in progress, "]
        }), e(n, {
          bold: !0,
          children: children_4
        }), " open)"]
      })
    }), children_5]
  });
  return e(s, {
    flexDirection: "column",
    children: children_5
  });
}
function htr(i) {
  switch (i) {
    case "completed":
      return {
        icon: te.tick,
        color: "success"
      };
    case "in_progress":
      return {
        icon: te.squareSmallFilled,
        color: "claude"
      };
    case "pending":
      return {
        icon: te.squareSmall,
        color: void 0
      };
  }
}
function de(i) {
  let a = w(37),
    {
      task: task,
      ownerColor: f,
      openBlockers: openBlockers,
      activity: activity,
      ownerActive: ownerActive,
      columns: columns_2
    } = i,
    strikethrough = task.status === "completed",
    bold = task.status === "in_progress",
    C = openBlockers.length > 0,
    I;
  if (a[0] !== task.status) I = htr(task.status), a[0] = task.status, a[1] = I;else I = a[1];
  let {
      icon: icon,
      color: color
    } = I,
    O = bold && !C && activity,
    g = columns_2 >= 60 && task.owner && ownerActive,
    j;
  if (a[2] !== g || a[3] !== task.owner) j = g ? ie(` (@${task.owner})`) : 0, a[2] = g, a[3] = task.owner, a[4] = j;else j = a[4];
  let H = j,
    D = Math.max(15, columns_2 - 15 - H),
    q;
  if (a[5] !== D || a[6] !== task.subject) q = mt(task.subject, D), a[5] = D, a[6] = task.subject, a[7] = q;else q = a[7];
  let children_6 = q,
    G = Math.max(15, columns_2 - 15),
    M;
  if (a[8] !== activity || a[9] !== G) M = activity ? mt(activity, G) : void 0, a[8] = activity, a[9] = G, a[10] = M;else M = a[10];
  let h = M,
    b;
  if (a[11] !== color || a[12] !== icon) b = r(n, {
    color: color,
    children: [icon, " "]
  }), a[11] = color, a[12] = icon, a[13] = b;else b = a[13];
  const dimColor = strikethrough || C;
  let t;
  if (a[14] !== children_6 || a[15] !== strikethrough || a[16] !== bold || a[17] !== dimColor) t = e(n, {
    bold: bold,
    strikethrough: strikethrough,
    dimColor: dimColor,
    children: children_6
  }), a[14] = children_6, a[15] = strikethrough, a[16] = bold, a[17] = dimColor, a[18] = t;else t = a[18];
  let o;
  if (a[19] !== f || a[20] !== g || a[21] !== task.owner) o = g && r(n, {
    dimColor: !0,
    children: [" (", f ? r(n, {
      color: f,
      children: ["@", task.owner]
    }) : `@${task.owner}`, ")"]
  }), a[19] = f, a[20] = g, a[21] = task.owner, a[22] = o;else o = a[22];
  let l;
  if (a[23] !== C || a[24] !== openBlockers) l = C && r(n, {
    dimColor: !0,
    children: [" ", te.pointerSmall, " blocked by", " ", [...openBlockers].sort(Be).map(Ie).join(", ")]
  }), a[23] = C, a[24] = openBlockers, a[25] = l;else l = a[25];
  let m;
  if (a[26] !== b || a[27] !== t || a[28] !== o || a[29] !== l) m = r(s, {
    children: [b, t, o, l]
  }), a[26] = b, a[27] = t, a[28] = o, a[29] = l, a[30] = m;else m = a[30];
  let p;
  if (a[31] !== h || a[32] !== O) p = O && h && e(s, {
    children: r(n, {
      dimColor: !0,
      children: ["  ", h, te.ellipsis]
    })
  }), a[31] = h, a[32] = O, a[33] = p;else p = a[33];
  let u;
  if (a[34] !== m || a[35] !== p) u = r(s, {
    flexDirection: "column",
    children: [m, p]
  }), a[34] = m, a[35] = p, a[36] = u;else u = a[36];
  return u;
}
export { mtr, gtr, htr };