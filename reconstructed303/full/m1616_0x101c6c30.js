// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Te
} from "B:/~BUN/root/chunk-smy4yvhm.js";
import {
  O
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  mt
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  s,
  n,
  sa
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  V
} from "B:/~BUN/root/chunk-tgzmva3g.js";
import {
  te
} from "B:/~BUN/root/chunk-9tx73f8x.js";
import {
  Ii
} from "B:/~BUN/root/chunk-3cgpbmp2.js";
import {
  ZDe,
  hzt,
  Yet
} from "B:/~BUN/root/chunk-r4vy2wed.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();

function ee(ne) {
  return ne.remoteBootstrap
}

function oe() {
  return Date.now()
}

function se(ae) {
  return ae.status === "failed"
}

function C7n() {
  let i = w(36),
    d = V(ee),
    {
      columns: t
    } = Te(),
    [u, T] = y(oe),
    g;
  if (i[0] === S) g = () => T(Date.now()), i[0] = g;
  else g = i[0];
  if (sa(g, 1000), d === null) {
    return null
  }
  let M = d.queuedCount,
    o, a, f, c, v, b, p;
  if (i[1] !== d.sessionMode || i[2] !== d.steps) f = d.steps.some(se), a = s, b = "column", p = 1, o = n, c = !0, v = hzt(d.sessionMode, f), i[1] = d.sessionMode, i[2] = d.steps, i[3] = o, i[4] = a, i[5] = f, i[6] = c, i[7] = v, i[8] = b, i[9] = p;
  else o = i[3], a = i[4], f = i[5], c = i[6], v = i[7], b = i[8], p = i[9];
  const l = f ? "" : "\u2026";
  let m;
  if (i[10] !== o || i[11] !== c || i[12] !== v || i[13] !== l) m = r(o, {
    bold: c,
    children: [v, l]
  }), i[10] = o, i[11] = c, i[12] = v, i[13] = l, i[14] = m;
  else m = i[14];
  let x;
  if (i[15] !== t || i[16] !== u || i[17] !== d.sessionMode || i[18] !== d.steps) {
    let R;
    if (i[20] !== t || i[21] !== u || i[22] !== d.sessionMode) R = (F) => F.status === "skipped" ? null : e(E, {
      step: F,
      sessionMode: d.sessionMode,
      now: u,
      columns: t
    }, F.id), i[20] = t, i[21] = u, i[22] = d.sessionMode, i[23] = R;
    else R = i[23];
    x = d.steps.map(R);
    i[15] = t, i[16] = u, i[17] = d.sessionMode, i[18] = d.steps, i[19] = x
  } else x = i[19];
  let R;
  if (i[24] !== f || i[25] !== M) R = f ? "Send a message to try again." : M > 0 ? `${M} ${O(M,"message")} queued \xB7 sends once the session is ready` : "You can start typing \u2014 messages send once the session is ready", i[24] = f, i[25] = M, i[26] = R;
  else R = i[26];
  let C;
  if (i[27] !== R) C = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: R
    })
  }), i[27] = R, i[28] = C;
  else C = i[28];
  let J;
  if (i[29] !== a || i[30] !== b || i[31] !== p || i[32] !== m || i[33] !== x || i[34] !== C) J = r(a, {
    flexDirection: b,
    marginTop: p,
    children: [m, x, C]
  }), i[29] = a, i[30] = b, i[31] = p, i[32] = m, i[33] = x, i[34] = C, i[35] = J;
  else J = i[35];
  return J
}

function E(d) {
  let g = w(23),
    {
      step: t,
      sessionMode: u,
      now: T,
      columns: i
    } = d,
    M;
  if (g[0] !== u || g[1] !== t) M = ZDe(t, u), g[0] = u, g[1] = t, g[2] = M;
  else M = g[2];
  let o = M;
  switch (t.status) {
    case "completed": {
      let a;
      if (g[3] !== T || g[4] !== t) a = Yet(t, T), g[3] = T, g[4] = t, g[5] = a;
      else a = g[5];
      let f;
      if (g[6] !== o || g[7] !== a) f = e(Tre, {
        status: "completed",
        label: o,
        annotation: a
      }), g[6] = o, g[7] = a, g[8] = f;
      else f = g[8];
      return f
    }
    case "running": {
      let a;
      if (g[9] !== T || g[10] !== t) a = Yet(t, T), g[9] = T, g[10] = t, g[11] = a;
      else a = g[11];
      let f;
      if (g[12] !== i || g[13] !== o || g[14] !== t.detail || g[15] !== a) f = e(Tre, {
        status: "running",
        label: o,
        annotation: a,
        detail: t.detail,
        columns: i
      }), g[12] = i, g[13] = o, g[14] = t.detail, g[15] = a, g[16] = f;
      else f = g[16];
      return f
    }
    case "failed": {
      let a;
      if (g[17] !== i || g[18] !== o || g[19] !== t.error) a = e(Tre, {
        status: "failed",
        label: o,
        detail: t.error,
        columns: i
      }), g[17] = i, g[18] = o, g[19] = t.error, g[20] = a;
      else a = g[20];
      return a
    }
    case "pending": {
      let a;
      if (g[21] !== o) a = e(Tre, {
        status: "pending",
        label: o
      }), g[21] = o, g[22] = a;
      else a = g[22];
      return a
    }
    case "skipped": {
      return null
    }
  }
}

function Tre(d) {
  let c = w(31),
    {
      status: t,
      label: u,
      annotation: T,
      detail: i,
      columns: g,
      detailOverflow: M
    } = d,
    o = T === void 0 ? "" : T,
    a = g === void 0 ? 80 : g,
    f = M === void 0 ? "truncate" : M,
    v;
  if (c[0] !== a || c[1] !== i || c[2] !== f) v = i === void 0 || f === "wrap" ? i : mt(i, Math.max(20, a - 8)), c[0] = a, c[1] = i, c[2] = f, c[3] = v;
  else v = c[3];
  let b = v;
  switch (t) {
    case "completed": {
      let p;
      if (c[4] === S) p = e(n, {
        color: "success",
        children: `  ${te.tick} `
      }), c[4] = p;
      else p = c[4];
      let l;
      if (c[5] !== o) l = e(n, {
        dimColor: !0,
        children: o
      }), c[5] = o, c[6] = l;
      else l = c[6];
      let m;
      if (c[7] !== u || c[8] !== l) m = r(s, {
        children: [p, r(n, {
          children: [u, l]
        })]
      }), c[7] = u, c[8] = l, c[9] = m;
      else m = c[9];
      return m
    }
    case "running": {
      let p;
      if (c[10] === S) p = e(s, {
        width: 4,
        paddingLeft: 2,
        children: e(Ii, {})
      }), c[10] = p;
      else p = c[10];
      let l;
      if (c[11] !== o) l = e(n, {
        dimColor: !0,
        children: o
      }), c[11] = o, c[12] = l;
      else l = c[12];
      let m;
      if (c[13] !== u || c[14] !== l) m = r(s, {
        children: [p, r(n, {
          children: [u, "\u2026", l]
        })]
      }), c[13] = u, c[14] = l, c[15] = m;
      else m = c[15];
      let x;
      if (c[16] !== b) x = b !== void 0 && b !== "" && e(s, {
        paddingLeft: 6,
        children: e(n, {
          dimColor: !0,
          children: b
        })
      }), c[16] = b, c[17] = x;
      else x = c[17];
      let R;
      if (c[18] !== m || c[19] !== x) R = r(s, {
        flexDirection: "column",
        children: [m, x]
      }), c[18] = m, c[19] = x, c[20] = R;
      else R = c[20];
      return R
    }
    case "failed": {
      let p;
      if (c[21] === S) p = e(n, {
        color: "error",
        children: `  ${te.cross} `
      }), c[21] = p;
      else p = c[21];
      let l;
      if (c[22] !== u) l = r(s, {
        children: [p, e(n, {
          children: u
        })]
      }), c[22] = u, c[23] = l;
      else l = c[23];
      let m;
      if (c[24] !== b) m = b !== void 0 && b !== "" && e(s, {
        paddingLeft: 6,
        children: e(n, {
          color: "error",
          children: b
        })
      }), c[24] = b, c[25] = m;
      else m = c[25];
      let x;
      if (c[26] !== l || c[27] !== m) x = r(s, {
        flexDirection: "column",
        children: [l, m]
      }), c[26] = l, c[27] = m, c[28] = x;
      else x = c[28];
      return x
    }
    case "pending": {
      const p = `  ${te.circle} ${u}`;
      let l;
      if (c[29] !== p) l = e(s, {
        children: e(n, {
          dimColor: !0,
          children: p
        })
      }), c[29] = p, c[30] = l;
      else l = c[30];
      return l
    }
  }
}
export {
  C7n,
  Tre
};
