// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  G
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  ct
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  bL
} from "B:/~BUN/root/chunk-k5xd4a86.js";
import {
  uH
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  oke
} from "B:/~BUN/root/chunk-jmh99pxs.js";
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  Rn,
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Zo
} from "B:/~BUN/root/chunk-t4pbv0np.js";
import {
  tur
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  tp
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  re
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  O,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
j();

function Ae(b) {
  return b.expandedView
}

function Se(T, H) {
  return parseInt(T, 10) - parseInt(H, 10)
}

function Be(Z) {
  return `#${Z}`
}

function EWr(i) {
  let w = S(2),
    {
      hidden: c
    } = i,
    f = G(Ae) === "tasks",
    d = oke();
  if (c || !f || !d || d.length === 0) {
    return null
  }
  let z;
  if (w[0] !== d) z = e(s, {
    width: "100%",
    flexDirection: "column",
    children: e(TWr, {
      tasks: d,
      isStandalone: !0
    })
  }), w[0] = d, w[1] = z;
  else z = w[1];
  return z
}
var ee = 30000;

function W(i, c) {
  let f = parseInt(i.id, 10),
    d = parseInt(c.id, 10);
  if (!isNaN(f) && !isNaN(d)) return f - d;
  return i.id.localeCompare(c.id)
}

function TWr({
  tasks: i,
  isStandalone: c = !1
}) {
  let f = G((t) => t.teamContext),
    d = G((t) => t.tasks),
    [w, z] = y(0),
    {
      rows: b,
      columns: N
    } = Re(),
    v = Rn(),
    x = A(null);
  x.current ??= new Map(i.filter((t) => t.status === "completed").map((t) => [t.id, null]));
  let a = x.current,
    B = b <= 10 ? 0 : Math.min(5, Math.max(3, b - 14)),
    P = new Set(i.filter((t) => t.status === "completed").map((t) => t.id)),
    R = Date.now();
  for (let t of P)
    if (!a.has(t)) a.set(t, R);
  for (let t of a.keys())
    if (!P.has(t)) a.delete(t);
  if (O(() => {
      let t = Date.now(),
        o = 1 / 0;
      for (let l of a.values()) {
        if (l === null) continue;
        let m = l + ee;
        if (m > t && m < o) o = m
      }
      if (o === 1 / 0) return;
      return v.setTimeout(() => z((l) => l + 1), o - t)
    }, [i, v, a, w]), !bL()) return null;
  if (i.length === 0) return null;
  let E = {};
  if (Zo() && f?.teammates) {
    for (let t of Object.values(f.teammates))
      if (t.color) {
        let o = uH[t.color];
        if (o) E[t.name] = o
      }
  }
  let g = {},
    _ = new Set;
  if (Zo()) {
    for (let t of Object.values(d))
      if (tp(t) && t.status === "running") {
        _.add(t.identity.agentName), _.add(t.identity.agentId);
        let o = t.progress?.recentActivities,
          l = (o && tur(o)) ?? t.progress?.lastActivity?.activityDescription;
        if (l) g[t.identity.agentName] = l, g[t.identity.agentId] = l
      }
  }
  let F = U(i, (t) => t.status === "completed"),
    D = U(i, (t) => t.status === "pending"),
    q = i.length - F - D,
    I = new Set(i.filter((t) => t.status !== "completed").map((t) => t.id)),
    V = i.length > B,
    M, h;
  if (V) {
    let t = [],
      o = [];
    for (let u of i.filter((T) => T.status === "completed")) {
      let T = a.get(u.id);
      if (typeof T === "number" && R - T < ee) t.push(u);
      else o.push(u)
    }
    t.sort(W), o.sort(W);
    let l = i.filter((u) => u.status === "in_progress").sort(W),
      m = i.filter((u) => u.status === "pending").sort((u, T) => {
        let H = u.blockedBy.some((J) => I.has(J)),
          Z = T.blockedBy.some((J) => I.has(J));
        if (H !== Z) return H ? 1 : -1;
        return W(u, T)
      }),
      p = [...t, ...l, ...m, ...o];
    M = p.slice(0, B), h = p.slice(B)
  } else M = [...i].sort(W), h = [];
  let C = "";
  if (h.length > 0) {
    let t = [],
      o = U(h, (p) => p.status === "pending"),
      l = U(h, (p) => p.status === "in_progress"),
      m = U(h, (p) => p.status === "completed");
    if (l > 0) t.push(`${l} in progress`);
    if (o > 0) t.push(`${o} pending`);
    if (m > 0) t.push(`${m} completed`);
    C = ` \u2026 +${t.join(", ")}`
  }
  let L = r(ne, {
    children: [M.map((t) => e(de, {
      task: t,
      ownerColor: t.owner ? E[t.owner] : void 0,
      openBlockers: t.blockedBy.filter((o) => I.has(o)),
      activity: t.owner ? g[t.owner] : void 0,
      ownerActive: t.owner ? _.has(t.owner) : !1,
      columns: N
    }, t.id)), B > 0 && C && e(n, {
      dimColor: !0,
      children: C
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
          children: F
        }), " done, ", q > 0 && r(ne, {
          children: [e(n, {
            bold: !0,
            children: q
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

function CWr(i) {
  switch (i) {
    case "completed":
      return {
        icon: re.tick, color: "success"
      };
    case "in_progress":
      return {
        icon: re.squareSmallFilled, color: "claude"
      };
    case "pending":
      return {
        icon: re.squareSmall, color: void 0
      }
  }
}

function de(i) {
  let a = S(37),
    {
      task: c,
      ownerColor: f,
      openBlockers: d,
      activity: w,
      ownerActive: z,
      columns: b
    } = i,
    N = c.status === "completed",
    v = c.status === "in_progress",
    x = d.length > 0,
    B;
  if (a[0] !== c.status) B = CWr(c.status), a[0] = c.status, a[1] = B;
  else B = a[1];
  let {
    icon: P,
    color: R
  } = B, E = v && !x && w, g = b >= 60 && c.owner && z, _;
  if (a[2] !== g || a[3] !== c.owner) _ = g ? ce(` (@${c.owner})`) : 0, a[2] = g, a[3] = c.owner, a[4] = _;
  else _ = a[4];
  let F = _,
    D = Math.max(15, b - 15 - F),
    q;
  if (a[5] !== D || a[6] !== c.subject) q = ct(c.subject, D), a[5] = D, a[6] = c.subject, a[7] = q;
  else q = a[7];
  let I = q,
    V = Math.max(15, b - 15),
    M;
  if (a[8] !== w || a[9] !== V) M = w ? ct(w, V) : void 0, a[8] = w, a[9] = V, a[10] = M;
  else M = a[10];
  let h = M,
    C;
  if (a[11] !== R || a[12] !== P) C = r(n, {
    color: R,
    children: [P, " "]
  }), a[11] = R, a[12] = P, a[13] = C;
  else C = a[13];
  const L = N || x;
  let t;
  if (a[14] !== I || a[15] !== N || a[16] !== v || a[17] !== L) t = e(n, {
    bold: v,
    strikethrough: N,
    dimColor: L,
    children: I
  }), a[14] = I, a[15] = N, a[16] = v, a[17] = L, a[18] = t;
  else t = a[18];
  let o;
  if (a[19] !== f || a[20] !== g || a[21] !== c.owner) o = g && r(n, {
    dimColor: !0,
    children: [" (", f ? r(n, {
      color: f,
      children: ["@", c.owner]
    }) : `@${c.owner}`, ")"]
  }), a[19] = f, a[20] = g, a[21] = c.owner, a[22] = o;
  else o = a[22];
  let l;
  if (a[23] !== x || a[24] !== d) l = x && r(n, {
    dimColor: !0,
    children: [" ", re.pointerSmall, " blocked by", " ", [...d].sort(Se).map(Be).join(", ")]
  }), a[23] = x, a[24] = d, a[25] = l;
  else l = a[25];
  let m;
  if (a[26] !== C || a[27] !== t || a[28] !== o || a[29] !== l) m = r(s, {
    children: [C, t, o, l]
  }), a[26] = C, a[27] = t, a[28] = o, a[29] = l, a[30] = m;
  else m = a[30];
  let p;
  if (a[31] !== h || a[32] !== E) p = E && h && e(s, {
    children: r(n, {
      dimColor: !0,
      children: ["  ", h, re.ellipsis]
    })
  }), a[31] = h, a[32] = E, a[33] = p;
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
  EWr,
  TWr,
  CWr
};
