// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  W
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  ie,
  ot
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  fv
} from "B:/~BUN/root/chunk-m1qtc24s.js";
import {
  Nbe
} from "B:/~BUN/root/chunk-qx3qjw47.js";
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  Yt
} from "B:/~BUN/root/chunk-jdm3bsma.js";
import {
  sI
} from "B:/~BUN/root/chunk-rdxve5qj.js";
import {
  _o
} from "B:/~BUN/root/chunk-38kffpyk.js";
import {
  E7t
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Z
} from "B:/~BUN/root/chunk-08bth2fj.js";
import {
  Qu
} from "B:/~BUN/root/chunk-ydzwkn0c.js";
import {
  R,
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  U
} from "B:/~BUN/root/chunk-z1enakv9.js";
N();

function Se(A) {
  return A.expandedView
}

function Be(k, J) {
  return parseInt(k, 10) - parseInt(J, 10)
}

function Ie(te) {
  return `#${te}`
}

function tvn(i) {
  let C = w(2),
    {
      hidden: c
    } = i,
    f = W(Se) === "tasks",
    d = Nbe();
  if (c || !f || !d || d.length === 0) {
    return null
  }
  let q;
  if (C[0] !== d) q = e(s, {
    width: "100%",
    flexDirection: "column",
    children: e(nvn, {
      tasks: d,
      isStandalone: !0
    })
  }), C[0] = d, C[1] = q;
  else q = C[1];
  return q
}
var oe = 30000;

function z(i, c) {
  let f = parseInt(i.id, 10),
    d = parseInt(c.id, 10);
  if (!isNaN(f) && !isNaN(d)) return f - d;
  return i.id.localeCompare(c.id)
}

function nvn({
  tasks: i,
  isStandalone: c = !1
}) {
  let f = W((t) => t.teamContext),
    d = W((t) => t.tasks),
    [C, q] = g(0),
    {
      rows: A,
      columns: P
    } = ve(),
    S = Yt(),
    b = T(null);
  b.current ??= new Map(i.filter((t) => t.status === "completed").map((t) => [t.id, null]));
  let a = b.current,
    B = A <= 10 ? 0 : Math.min(5, Math.max(3, A - 14)),
    E = new Set(i.filter((t) => t.status === "completed").map((t) => t.id)),
    _ = Date.now();
  for (let t of E)
    if (!a.has(t)) a.set(t, _);
  for (let t of a.keys())
    if (!E.has(t)) a.delete(t);
  if (R(() => {
      let t = Date.now(),
        o = 1 / 0;
      for (let l of a.values()) {
        if (l === null) continue;
        let m = l + oe;
        if (m > t && m < o) o = m
      }
      if (o === 1 / 0) return;
      return S.setTimeout(() => q((l) => l + 1), o - t)
    }, [i, S, a, C]), !fv()) return null;
  if (i.length === 0) return null;
  let O = {};
  if (_o() && f?.teammates) {
    for (let t of Object.values(f.teammates))
      if (t.color) {
        let o = sI[t.color];
        if (o) O[t.name] = o
      }
  }
  let y = {},
    j = new Set;
  if (_o()) {
    for (let t of Object.values(d))
      if (Qu(t) && t.status === "running") {
        j.add(t.identity.agentName), j.add(t.identity.agentId);
        let o = t.progress?.recentActivities,
          l = (o && E7t(o)) ?? t.progress?.lastActivity?.activityDescription;
        if (l) y[t.identity.agentName] = l, y[t.identity.agentId] = l
      }
  }
  let H = U(i, (t) => t.status === "completed"),
    D = U(i, (t) => t.status === "pending"),
    F = i.length - H - D,
    I = new Set(i.filter((t) => t.status !== "completed").map((t) => t.id)),
    G = i.length > B,
    M, h;
  if (G) {
    let t = [],
      o = [];
    for (let u of i.filter((k) => k.status === "completed")) {
      let k = a.get(u.id);
      if (typeof k === "number" && _ - k < oe) t.push(u);
      else o.push(u)
    }
    t.sort(z), o.sort(z);
    let l = i.filter((u) => u.status === "in_progress").sort(z),
      m = i.filter((u) => u.status === "pending").sort((u, k) => {
        let J = u.blockedBy.some((K) => I.has(K)),
          te = k.blockedBy.some((K) => I.has(K));
        if (J !== te) return J ? 1 : -1;
        return z(u, k)
      }),
      p = [...t, ...l, ...m, ...o];
    M = p.slice(0, B), h = p.slice(B)
  } else M = [...i].sort(z), h = [];
  let v = "";
  if (h.length > 0) {
    let t = [],
      o = U(h, (p) => p.status === "pending"),
      l = U(h, (p) => p.status === "in_progress"),
      m = U(h, (p) => p.status === "completed");
    if (l > 0) t.push(`${l} in progress`);
    if (o > 0) t.push(`${o} pending`);
    if (m > 0) t.push(`${m} completed`);
    v = ` \u2026 +${t.join(", ")}`
  }
  let L = r(V, {
    children: [M.map((t) => e(de, {
      task: t,
      ownerColor: t.owner ? O[t.owner] : void 0,
      openBlockers: t.blockedBy.filter((o) => I.has(o)),
      activity: t.owner ? y[t.owner] : void 0,
      ownerActive: t.owner ? j.has(t.owner) : !1,
      columns: P
    }, t.id)), B > 0 && v && e(n, {
      dimColor: !0,
      children: v
    })]
  });
  if (c) return r(s, {
    flexDirection: "column",
    marginTop: 1,
    marginLeft: 2,
    children: [e(s, {
      children: r(n, {
        dimColor: !0,
        children: [e(n, {
          bold: !0,
          children: i.length
        }), " tasks (", e(n, {
          bold: !0,
          children: H
        }), " done, ", F > 0 && r(V, {
          children: [e(n, {
            bold: !0,
            children: F
          }), " in progress, "]
        }), e(n, {
          bold: !0,
          children: D
        }), " open)"]
      })
    }), L]
  });
  return e(s, {
    flexDirection: "column",
    children: L
  })
}

function rvn(i) {
  switch (i) {
    case "completed":
      return {
        icon: Z.tick, color: "success"
      };
    case "in_progress":
      return {
        icon: Z.squareSmallFilled, color: "claude"
      };
    case "pending":
      return {
        icon: Z.squareSmall, color: void 0
      }
  }
}

function de(i) {
  let a = w(37),
    {
      task: c,
      ownerColor: f,
      openBlockers: d,
      activity: C,
      ownerActive: q,
      columns: A
    } = i,
    P = c.status === "completed",
    S = c.status === "in_progress",
    b = d.length > 0,
    B;
  if (a[0] !== c.status) B = rvn(c.status), a[0] = c.status, a[1] = B;
  else B = a[1];
  let {
    icon: E,
    color: _
  } = B, O = S && !b && C, y = A >= 60 && c.owner && q, j;
  if (a[2] !== y || a[3] !== c.owner) j = y ? ie(` (@${c.owner})`) : 0, a[2] = y, a[3] = c.owner, a[4] = j;
  else j = a[4];
  let H = j,
    D = Math.max(15, A - 15 - H),
    F;
  if (a[5] !== D || a[6] !== c.subject) F = ot(c.subject, D), a[5] = D, a[6] = c.subject, a[7] = F;
  else F = a[7];
  let I = F,
    G = Math.max(15, A - 15),
    M;
  if (a[8] !== C || a[9] !== G) M = C ? ot(C, G) : void 0, a[8] = C, a[9] = G, a[10] = M;
  else M = a[10];
  let h = M,
    v;
  if (a[11] !== _ || a[12] !== E) v = r(n, {
    color: _,
    children: [E, " "]
  }), a[11] = _, a[12] = E, a[13] = v;
  else v = a[13];
  const L = P || b;
  let t;
  if (a[14] !== I || a[15] !== P || a[16] !== S || a[17] !== L) t = e(n, {
    bold: S,
    strikethrough: P,
    dimColor: L,
    children: I
  }), a[14] = I, a[15] = P, a[16] = S, a[17] = L, a[18] = t;
  else t = a[18];
  let o;
  if (a[19] !== f || a[20] !== y || a[21] !== c.owner) o = y && r(n, {
    dimColor: !0,
    children: [" (", f ? r(n, {
      color: f,
      children: ["@", c.owner]
    }) : `@${c.owner}`, ")"]
  }), a[19] = f, a[20] = y, a[21] = c.owner, a[22] = o;
  else o = a[22];
  let l;
  if (a[23] !== b || a[24] !== d) l = b && r(n, {
    dimColor: !0,
    children: [" ", Z.pointerSmall, " blocked by", " ", [...d].sort(Be).map(Ie).join(", ")]
  }), a[23] = b, a[24] = d, a[25] = l;
  else l = a[25];
  let m;
  if (a[26] !== v || a[27] !== t || a[28] !== o || a[29] !== l) m = r(s, {
    children: [v, t, o, l]
  }), a[26] = v, a[27] = t, a[28] = o, a[29] = l, a[30] = m;
  else m = a[30];
  let p;
  if (a[31] !== h || a[32] !== O) p = O && h && e(s, {
    children: r(n, {
      dimColor: !0,
      children: ["  ", h, Z.ellipsis]
    })
  }), a[31] = h, a[32] = O, a[33] = p;
  else p = a[33];
  let u;
  if (a[34] !== m || a[35] !== p) u = r(s, {
    flexDirection: "column",
    children: [m, p]
  }), a[34] = m, a[35] = p, a[36] = u;
  else u = a[36];
  return u
}
export {
  tvn,
  nvn,
  rvn
};
