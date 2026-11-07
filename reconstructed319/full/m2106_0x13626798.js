// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  ct
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  uH,
  qS
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  RO
} from "B:/~BUN/root/chunk-trd3c21n.js";
import {
  oa,
  ot,
  s,
  n,
  sl
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  eI
} from "B:/~BUN/root/chunk-7hqn9qvm.js";
import {
  Zo
} from "B:/~BUN/root/chunk-t4pbv0np.js";
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  G
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  re
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  Oa
} from "B:/~BUN/root/chunk-rzvkfy4m.js";
import {
  $4e,
  K$e,
  pzt,
  V0o,
  Pkt
} from "B:/~BUN/root/chunk-3afzybdd.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";

function V() {
  if (!Zo()) return;
  let c = RO();
  if (!c) return;
  if (qS.includes(c)) return uH[c];
  return
}

function D(c) {
  let f = S(6),
    {
      isLoading: o,
      isScreenReader: t,
      themeColor: g
    } = c,
    i = g ?? void 0,
    a;
  if (f[0] !== t) a = t ? e(ne, {
    children: "$\xA0"
  }) : r(ne, {
    children: [re.pointer, "\xA0"]
  }), f[0] = t, f[1] = a;
  else a = f[1];
  let l;
  if (f[2] !== i || f[3] !== o || f[4] !== a) l = e(n, {
    color: i,
    dimColor: o,
    children: a
  }), f[2] = i, f[3] = o, f[4] = a, f[5] = l;
  else l = f[5];
  return l
}

function ykt(c) {
  let f = S(10),
    {
      mode: o,
      isLoading: t,
      viewingAgentName: g,
      viewingAgentColor: p
    } = c,
    i = ot();
  eI();
  let a;
  if (f[0] === w) a = V(), f[0] = a;
  else a = f[0];
  let l = a,
    m = p ? uH[p] : void 0;
  const h = !i || !g && o === "bash";
  let d;
  if (f[1] !== t || f[2] !== i || f[3] !== o || f[4] !== m || f[5] !== g) d = g ? e(D, {
    isLoading: t,
    isScreenReader: i,
    themeColor: m
  }) : o === "bash" ? e(n, {
    color: "bashBorder",
    dimColor: t,
    children: "!\xA0"
  }) : e(D, {
    isLoading: t,
    isScreenReader: i,
    themeColor: Zo() ? l : void 0
  }), f[1] = t, f[2] = i, f[3] = o, f[4] = m, f[5] = g, f[6] = d;
  else d = f[6];
  let L;
  if (f[7] !== h || f[8] !== d) L = e(s, {
    "aria-hidden": h,
    alignItems: "flex-start",
    alignSelf: "flex-start",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    children: d
  }), f[7] = h, f[8] = d, f[9] = L;
  else L = f[9];
  return L
}
var _kt = 1e4;
j();

function ve(N) {
  return N.remoteBootstrap
}

function Se() {
  return Date.now()
}

function Oe(A) {
  return A.status === "failed"
}

function yBr() {
  let p = S(22),
    c = G(ve),
    {
      columns: o
    } = Re(),
    [t, g] = y(Se),
    i;
  if (p[0] === w) i = () => g(Date.now()), p[0] = i;
  else i = p[0];
  if (sl(i, 1000), c === null) {
    return null
  }
  let f = c.queuedCount,
    a, l, m, T, h, d;
  if (p[1] !== o || p[2] !== t || p[3] !== c) {
    l = c.steps.some(Oe);
    let L = $4e(c);
    a = s;
    m = "column";
    T = 1;
    h = r(n, {
      bold: !0,
      children: [pzt(L, l), l || L === "restored" ? "" : "\u2026"]
    });
    d = c.steps.map((b) => b.status === "skipped" ? null : e(Q, {
      step: b,
      label: K$e(b, L),
      hint: b.id === "setup_script" ? V0o(c, b, L) : "",
      now: t,
      columns: o
    }, b.id));
    p[1] = o, p[2] = t, p[3] = c, p[4] = a, p[5] = l, p[6] = m, p[7] = T, p[8] = h, p[9] = d
  } else a = p[4], l = p[5], m = p[6], T = p[7], h = p[8], d = p[9];
  let C;
  if (p[10] !== l || p[11] !== f) C = l ? "Send a message to try again." : f > 0 ? `${f} ${P(f,"message")} queued \xB7 sends once the session is ready` : "You can start typing \u2014 messages send once the session is ready", p[10] = l, p[11] = f, p[12] = C;
  else C = p[12];
  let u;
  if (p[13] !== C) u = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: C
    })
  }), p[13] = C, p[14] = u;
  else u = p[14];
  let x;
  if (p[15] !== a || p[16] !== m || p[17] !== T || p[18] !== h || p[19] !== d || p[20] !== u) x = r(a, {
    flexDirection: m,
    marginTop: T,
    children: [h, d, u]
  }), p[15] = a, p[16] = m, p[17] = T, p[18] = h, p[19] = d, p[20] = u, p[21] = x;
  else x = p[21];
  return x
}

function Q(c) {
  let l = S(18),
    {
      step: o,
      label: t,
      hint: g,
      now: p,
      columns: i
    } = c,
    f = oa() ? o.output : o.output?.slice(-1);
  switch (o.status) {
    case "completed": {
      const a = Pkt(o, p) + g;
      let m;
      if (l[0] !== t || l[1] !== a) m = e(jme, {
        status: "completed",
        label: t,
        annotation: a
      }), l[0] = t, l[1] = a, l[2] = m;
      else m = l[2];
      return m
    }
    case "running": {
      const a = Pkt(o, p) + g;
      const m = f === void 0 ? o.detail : void 0;
      let T;
      if (l[3] !== i || l[4] !== t || l[5] !== f || l[6] !== a || l[7] !== m) T = e(jme, {
        status: "running",
        label: t,
        annotation: a,
        detail: m,
        output: f,
        columns: i
      }), l[3] = i, l[4] = t, l[5] = f, l[6] = a, l[7] = m, l[8] = T;
      else T = l[8];
      return T
    }
    case "failed": {
      const a = o.exitCode === void 0 ? "" : ` \xB7 exit code ${o.exitCode}`;
      const m = o.error === t || (o.exitCode ?? 0) > 0 && (o.output?.length ?? 0) > 0 ? void 0 : o.error;
      let T;
      if (l[9] !== i || l[10] !== t || l[11] !== o.output || l[12] !== a || l[13] !== m) T = e(jme, {
        status: "failed",
        label: t,
        annotation: a,
        detail: m,
        output: o.output,
        columns: i
      }), l[9] = i, l[10] = t, l[11] = o.output, l[12] = a, l[13] = m, l[14] = T;
      else T = l[14];
      return T
    }
    case "pending": {
      let a;
      if (l[15] !== g || l[16] !== t) a = e(jme, {
        status: "pending",
        label: t,
        annotation: g
      }), l[15] = g, l[16] = t, l[17] = a;
      else a = l[17];
      return a
    }
    case "skipped": {
      return null
    }
  }
}

function jme(c) {
  let d = S(42),
    {
      status: o,
      label: t,
      annotation: g,
      detail: p,
      output: i,
      columns: f,
      detailOverflow: a
    } = c,
    l = g === void 0 ? "" : g,
    m = f === void 0 ? 80 : f,
    T = a === void 0 ? "truncate" : a,
    h = Math.max(20, m - 8),
    L;
  if (d[0] !== p || d[1] !== T || d[2] !== h) L = p === void 0 || T === "wrap" ? p : ct(p, h), d[0] = p, d[1] = T, d[2] = h, d[3] = L;
  else L = d[3];
  let b = L;
  switch (o) {
    case "completed": {
      let C;
      if (d[4] === w) C = e(n, {
        color: "success",
        children: `  ${re.tick} `
      }), d[4] = C;
      else C = d[4];
      let u;
      if (d[5] !== l) u = e(n, {
        dimColor: !0,
        children: l
      }), d[5] = l, d[6] = u;
      else u = d[6];
      let x;
      if (d[7] !== t || d[8] !== u) x = r(s, {
        children: [C, r(n, {
          children: [t, u]
        })]
      }), d[7] = t, d[8] = u, d[9] = x;
      else x = d[9];
      return x
    }
    case "running": {
      let C;
      if (d[10] === w) C = e(s, {
        width: 4,
        paddingLeft: 2,
        children: e(Oa, {})
      }), d[10] = C;
      else C = d[10];
      let u;
      if (d[11] !== l) u = e(n, {
        dimColor: !0,
        children: l
      }), d[11] = l, d[12] = u;
      else u = d[12];
      let x;
      if (d[13] !== t || d[14] !== u) x = r(s, {
        children: [C, r(n, {
          children: [t, "\u2026", u]
        })]
      }), d[13] = t, d[14] = u, d[15] = x;
      else x = d[15];
      let N;
      if (d[16] !== b) N = b !== void 0 && b !== "" && e(s, {
        paddingLeft: 6,
        children: e(n, {
          dimColor: !0,
          children: b
        })
      }), d[16] = b, d[17] = N;
      else N = d[17];
      let A;
      if (d[18] !== h || d[19] !== i) A = e(q, {
        output: i,
        width: h
      }), d[18] = h, d[19] = i, d[20] = A;
      else A = d[20];
      let E;
      if (d[21] !== x || d[22] !== N || d[23] !== A) E = r(s, {
        flexDirection: "column",
        children: [x, N, A]
      }), d[21] = x, d[22] = N, d[23] = A, d[24] = E;
      else E = d[24];
      return E
    }
    case "failed": {
      let C;
      if (d[25] === w) C = e(n, {
        color: "error",
        children: `  ${re.cross} `
      }), d[25] = C;
      else C = d[25];
      let u;
      if (d[26] !== l) u = e(n, {
        dimColor: !0,
        children: l
      }), d[26] = l, d[27] = u;
      else u = d[27];
      let x;
      if (d[28] !== t || d[29] !== u) x = r(s, {
        children: [C, r(n, {
          children: [t, u]
        })]
      }), d[28] = t, d[29] = u, d[30] = x;
      else x = d[30];
      let N;
      if (d[31] !== b) N = b !== void 0 && b !== "" && e(s, {
        paddingLeft: 6,
        children: e(n, {
          color: "error",
          children: b
        })
      }), d[31] = b, d[32] = N;
      else N = d[32];
      let A;
      if (d[33] !== h || d[34] !== i) A = e(q, {
        output: i,
        width: h
      }), d[33] = h, d[34] = i, d[35] = A;
      else A = d[35];
      let E;
      if (d[36] !== x || d[37] !== N || d[38] !== A) E = r(s, {
        flexDirection: "column",
        children: [x, N, A]
      }), d[36] = x, d[37] = N, d[38] = A, d[39] = E;
      else E = d[39];
      return E
    }
    case "pending": {
      const C = `  ${re.circle} ${t}${l}`;
      let u;
      if (d[40] !== C) u = e(s, {
        children: e(n, {
          dimColor: !0,
          children: C
        })
      }), d[40] = C, d[41] = u;
      else u = d[41];
      return u
    }
  }
}

function q(c) {
  let g = S(7),
    {
      output: o,
      width: t
    } = c;
  if (o === void 0 || o.length === 0) {
    return null
  }
  let p;
  if (g[0] !== o || g[1] !== t) {
    let i;
    if (g[3] !== t) i = (f, a) => e(n, {
      dimColor: !0,
      children: ct(f, t)
    }, a), g[3] = t, g[4] = i;
    else i = g[4];
    p = o.map(i);
    g[0] = o, g[1] = t, g[2] = p
  } else p = g[2];
  let i;
  if (g[5] !== p) i = e(s, {
    flexDirection: "column",
    paddingLeft: 6,
    children: p
  }), g[5] = p, g[6] = i;
  else i = g[6];
  return i
}
export {
  ykt,
  _kt,
  yBr,
  jme
};
