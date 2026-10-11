// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { W } from "B:/~BUN/root/chunk-h23911wn.js";
import { ie, ot } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { fv } from "B:/~BUN/root/chunk-m1qtc24s.js";
import { Nbe } from "B:/~BUN/root/chunk-qx3qjw47.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { sI } from "B:/~BUN/root/chunk-rdxve5qj.js";
import { _o } from "B:/~BUN/root/chunk-38kffpyk.js";
import { E7t } from "B:/~BUN/root/chunk-3jyp964r.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { Qu } from "B:/~BUN/root/chunk-ydzwkn0c.js";
import { R, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
N();
function Se(A) {
  return A.expandedView;
}
function Be(k, J) {
  return parseInt(k, 10) - parseInt(J, 10);
}
function Ie(te) {
  return `#${te}`;
}
function tvn(i) {
  let C = w(2),
    {
      hidden: hidden
    } = i,
    f = W(Se) === "tasks",
    tasks = Nbe();
  if (hidden || !f || !tasks || tasks.length === 0) {
    return null;
  }
  let q;
  if (C[0] !== tasks) q = e(s, {
    width: "100%",
    flexDirection: "column",
    children: e(nvn, {
      tasks: tasks,
      isStandalone: !0
    })
  }), C[0] = tasks, C[1] = q;else q = C[1];
  return q;
}
var oe = 30000;
function z(i, c) {
  let f = parseInt(i.id, 10),
    d = parseInt(c.id, 10);
  if (!isNaN(f) && !isNaN(d)) return f - d;
  return i.id.localeCompare(c.id);
}
function nvn({
  tasks: tasks_2,
  isStandalone = !1
}) {
  let f = W(t => t.teamContext),
    d = W(t => t.tasks),
    [C, q] = g(0),
    {
      rows: rows,
      columns: columns
    } = ve(),
    S = Yt(),
    b = T(null);
  b.current ??= new Map(tasks_2.filter(item => item.status === "completed").map(item => [item.id, null]));
  let current = b.current,
    B = rows <= 10 ? 0 : Math.min(5, Math.max(3, rows - 14)),
    E = new Set(tasks_2.filter(item => item.status === "completed").map(item => item.id)),
    _ = Date.now();
  for (let t of E) if (!current.has(t)) current.set(t, _);
  for (let t of current.keys()) if (!E.has(t)) current.delete(t);
  if (R(() => {
    let t = Date.now(),
      o = 1 / 0;
    for (let l of current.values()) {
      if (l === null) continue;
      let m = l + oe;
      if (m > t && m < o) o = m;
    }
    if (o === 1 / 0) return;
    return S.setTimeout(() => q(l => l + 1), o - t);
  }, [tasks_2, S, current, C]), !fv()) return null;
  if (tasks_2.length === 0) return null;
  let O = {};
  if (_o() && f?.teammates) {
    for (let t of Object.values(f.teammates)) if (t.color) {
      let o = sI[t.color];
      if (o) O[t.name] = o;
    }
  }
  let y = {},
    j = new Set();
  if (_o()) {
    for (let t of Object.values(d)) if (Qu(t) && t.status === "running") {
      j.add(t.identity.agentName), j.add(t.identity.agentId);
      let o = t.progress?.recentActivities,
        l = (o && E7t(o)) ?? t.progress?.lastActivity?.activityDescription;
      if (l) y[t.identity.agentName] = l, y[t.identity.agentId] = l;
    }
  }
  let children_2 = U(tasks_2, t => t.status === "completed"),
    children_4 = U(tasks_2, t => t.status === "pending"),
    children_3 = tasks_2.length - children_2 - children_4,
    I = new Set(tasks_2.filter(item => item.status !== "completed").map(item => item.id)),
    G = tasks_2.length > B,
    M,
    h;
  if (G) {
    let t = [],
      o = [];
    for (let u of tasks_2.filter(item => item.status === "completed")) {
      let k = current.get(u.id);
      if (typeof k === "number" && _ - k < oe) t.push(u);else o.push(u);
    }
    t.sort(z), o.sort(z);
    let l = tasks_2.filter(item => item.status === "in_progress").sort(z),
      m = tasks_2.filter(item => item.status === "pending").sort((itemA, itemB) => {
        let J = itemA.blockedBy.some(item => I.has(item)),
          te = itemB.blockedBy.some(item => I.has(item));
        if (J !== te) return J ? 1 : -1;
        return z(itemA, itemB);
      }),
      p = [...t, ...l, ...m, ...o];
    M = p.slice(0, B), h = p.slice(B);
  } else M = [...tasks_2].sort(z), h = [];
  let children = "";
  if (h.length > 0) {
    let t = [],
      o = U(h, p => p.status === "pending"),
      l = U(h, p => p.status === "in_progress"),
      m = U(h, p => p.status === "completed");
    if (l > 0) t.push(`${l} in progress`);
    if (o > 0) t.push(`${o} pending`);
    if (m > 0) t.push(`${m} completed`);
    children = ` \u2026 +${t.join(", ")}`;
  }
  let children_5 = r(V, {
    children: [M.map(t => e(de, {
      task: t,
      ownerColor: t.owner ? O[t.owner] : void 0,
      openBlockers: t.blockedBy.filter(item => I.has(item)),
      activity: t.owner ? y[t.owner] : void 0,
      ownerActive: t.owner ? j.has(t.owner) : !1,
      columns: columns
    }, t.id)), B > 0 && children && e(n, {
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
        }), " done, ", children_3 > 0 && r(V, {
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
function rvn(i) {
  switch (i) {
    case "completed":
      return {
        icon: Z.tick,
        color: "success"
      };
    case "in_progress":
      return {
        icon: Z.squareSmallFilled,
        color: "claude"
      };
    case "pending":
      return {
        icon: Z.squareSmall,
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
    b = openBlockers.length > 0,
    B;
  if (a[0] !== task.status) B = rvn(task.status), a[0] = task.status, a[1] = B;else B = a[1];
  let {
      icon: icon,
      color: color
    } = B,
    O = bold && !b && activity,
    y = columns_2 >= 60 && task.owner && ownerActive,
    j;
  if (a[2] !== y || a[3] !== task.owner) j = y ? ie(` (@${task.owner})`) : 0, a[2] = y, a[3] = task.owner, a[4] = j;else j = a[4];
  let H = j,
    D = Math.max(15, columns_2 - 15 - H),
    F;
  if (a[5] !== D || a[6] !== task.subject) F = ot(task.subject, D), a[5] = D, a[6] = task.subject, a[7] = F;else F = a[7];
  let children_6 = F,
    G = Math.max(15, columns_2 - 15),
    M;
  if (a[8] !== activity || a[9] !== G) M = activity ? ot(activity, G) : void 0, a[8] = activity, a[9] = G, a[10] = M;else M = a[10];
  let h = M,
    v;
  if (a[11] !== color || a[12] !== icon) v = r(n, {
    color: color,
    children: [icon, " "]
  }), a[11] = color, a[12] = icon, a[13] = v;else v = a[13];
  const dimColor = strikethrough || b;
  let t;
  if (a[14] !== children_6 || a[15] !== strikethrough || a[16] !== bold || a[17] !== dimColor) t = e(n, {
    bold: bold,
    strikethrough: strikethrough,
    dimColor: dimColor,
    children: children_6
  }), a[14] = children_6, a[15] = strikethrough, a[16] = bold, a[17] = dimColor, a[18] = t;else t = a[18];
  let o;
  if (a[19] !== f || a[20] !== y || a[21] !== task.owner) o = y && r(n, {
    dimColor: !0,
    children: [" (", f ? r(n, {
      color: f,
      children: ["@", task.owner]
    }) : `@${task.owner}`, ")"]
  }), a[19] = f, a[20] = y, a[21] = task.owner, a[22] = o;else o = a[22];
  let l;
  if (a[23] !== b || a[24] !== openBlockers) l = b && r(n, {
    dimColor: !0,
    children: [" ", Z.pointerSmall, " blocked by", " ", [...openBlockers].sort(Be).map(Ie).join(", ")]
  }), a[23] = b, a[24] = openBlockers, a[25] = l;else l = a[25];
  let m;
  if (a[26] !== v || a[27] !== t || a[28] !== o || a[29] !== l) m = r(s, {
    children: [v, t, o, l]
  }), a[26] = v, a[27] = t, a[28] = o, a[29] = l, a[30] = m;else m = a[30];
  let p;
  if (a[31] !== h || a[32] !== O) p = O && h && e(s, {
    children: r(n, {
      dimColor: !0,
      children: ["  ", h, Z.ellipsis]
    })
  }), a[31] = h, a[32] = O, a[33] = p;else p = a[33];
  let u;
  if (a[34] !== m || a[35] !== p) u = r(s, {
    flexDirection: "column",
    children: [m, p]
  }), a[34] = m, a[35] = p, a[36] = u;else u = a[36];
  return u;
}
export { tvn, nvn, rvn };