// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Q,
  Pa,
  Dt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  cyt,
  w4
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  rwe
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  int
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  Js
} from "B:/~BUN/root/chunk-yr3hf5bg.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  Vl,
  DG,
  JH
} from "B:/~BUN/root/chunk-apcs0eny.js";
import {
  Iye
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  V_e
} from "B:/~BUN/root/chunk-6j3fjnhn.js";
import {
  LQr
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  re
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  ig,
  Nvt
} from "B:/~BUN/root/chunk-ve4gzwvf.js";
import {
  Nu
} from "B:/~BUN/root/chunk-9834xxs4.js";
import {
  Gd
} from "B:/~BUN/root/chunk-jx2rmjhh.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  eA
} from "B:/~BUN/root/chunk-mhb4gvpw.js";
import {
  Xit,
  X6r,
  Aqt,
  Mli
} from "B:/~BUN/root/chunk-9vszq51v.js";
import {
  xqe,
  nY
} from "B:/~BUN/root/chunk-63176a0t.js";
import {
  Rr,
  Pn
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var F7 = {};
Rr(F7, {
  default: () => F7,
  deliveredBy: () => Y,
  useUserMessageSite: () => Oot
});

function dYe(i, t = new Date) {
  let o = new Date(i);
  if (Number.isNaN(o.getTime())) return "";
  let d = Xit(),
    a = Aqt(),
    {
      timeZone: c
    } = a,
    f = J(t, c) - J(o, c),
    l = Math.round(f / 86400000),
    u = "older";
  if (l === 0) u = "today";
  else if (l > 0 && l < 7) u = "week";
  if (a.kind === "preset") return X6r(a, se[u], d, o);
  let p = Mli(a.pattern, c, o);
  if (u === "today") return p;
  let k = nY(d, xqe(de[u], c)).format(o);
  return u === "week" ? `${k} ${p}` : `${k}, ${p}`
}
var se = {
    today: {
      hour: "numeric",
      minute: "2-digit"
    },
    week: {
      weekday: "long",
      hour: "numeric",
      minute: "2-digit"
    },
    older: {
      weekday: "long",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }
  },
  de = {
    week: {
      weekday: "long"
    },
    older: {
      weekday: "long",
      month: "short",
      day: "numeric"
    }
  };

function J(i, t) {
  if (!t) return new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime();
  let o = nY("en-US", xqe(ae, t)).formatToParts(i),
    d = {};
  for (let a of o) d[a.type] = a.value;
  return Date.UTC(Number(d.year), Number(d.month) - 1, Number(d.day))
}
var ae = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
};

function Y(i) {
  switch (i.kind) {
    case "plugin":
      return i.name;
    case "channel":
      return rwe(i.server)?.pluginName;
    default:
      return
  }
}

function Oot({
  messageId: i,
  stored: t,
  text: o,
  isExpanded: d,
  task: a,
  sender: c,
  draw: f
}) {
  let l = Js(a),
    u = Js(c),
    p = JH("UserMessage", () => ({
      requestId: i,
      props: {
        text: o,
        origin: LQr(t),
        isExpanded: d,
        ...a !== void 0 && {
          task: a
        },
        ...c !== void 0 && {
          from: c
        }
      }
    }), [i, o, t, d, l, u]);
  return DG(p, (k) => f(k.props.text), Y(p.props.origin))
}
var me = 1e4,
  ue = 2500,
  pe = 2500;

function rmn(i) {
  if (i.length <= me) return i;
  let t = Q(i, ue),
    o = Pa(i, pe),
    d = Dt(i, `
`, t.length) - Dt(o, `
`),
    a = i.length - t.length - o.length;
  return {
    head: t,
    hiddenLines: d,
    hiddenChars: a,
    tail: o
  }
}
var fe = 4000;

function Kjr(i) {
  return i.length <= fe && !(cyt() && Iye(i).length > 0)
}

function omn(i) {
  let g = S(34),
    {
      text: t,
      useBriefLayout: o,
      timestamp: d,
      bodyOnly: a,
      awaitingModel: c,
      markLinks: f
    } = i,
    l = a === void 0 ? !1 : a,
    u = c === void 0 ? !1 : c,
    p = Nvt(),
    k = p?.isQueued ?? !1,
    m = typeof t === "object",
    x;
  if (g[0] !== t || g[1] !== m) x = !m && Kjr(t), g[0] = t, g[1] = m, g[2] = x;
  else x = g[2];
  let h = x,
    R = p?.selectionHighlight === "on",
    w = k || u;
  if (o || l) {
    let P;
    if (g[3] !== d) P = d ? dYe(d) : "", g[3] = d, g[4] = P;
    else P = g[4];
    let q = P;
    let M = R ? "suggestion" : w ? "inactive" : "text";
    const C = l ? 0 : 2;
    let D;
    if (g[5] !== l || g[6] !== R || g[7] !== q || g[8] !== w) D = l ? null : r(s, {
      flexDirection: "row",
      children: [R ? r(n, {
        "aria-label": "selected:",
        color: "suggestion",
        children: [re.pointer, " "]
      }) : null, e(n, {
        color: R ? "suggestion" : w ? "inactive" : "briefLabelYou",
        children: "You"
      }), q ? r(n, {
        dimColor: !0,
        children: [" ", q]
      }) : null]
    }), g[5] = l, g[6] = R, g[7] = q, g[8] = w, g[9] = D;
    else D = g[9];
    let K;
    if (g[10] !== l || g[11] !== f || g[12] !== h || g[13] !== t || g[14] !== M || g[15] !== m || g[16] !== w) K = m ? r(ne, {
      children: [e(n, {
        color: M,
        children: t.head
      }), e(b, {
        hiddenLines: t.hiddenLines,
        indent: l ? 0 : 2
      }), e(n, {
        color: M,
        children: t.tail
      })]
    }) : h ? e(Vl, {
      promptMode: !0,
      color: M,
      monochrome: w,
      markLinks: f,
      children: t
    }) : e(n, {
      color: M,
      children: t
    }), g[10] = l, g[11] = f, g[12] = h, g[13] = t, g[14] = M, g[15] = m, g[16] = w, g[17] = K;
    else K = g[17];
    let ie;
    if (g[18] !== C || g[19] !== D || g[20] !== K) ie = r(s, {
      flexDirection: "column",
      paddingLeft: C,
      children: [D, K]
    }), g[18] = C, g[19] = D, g[20] = K, g[21] = ie;
    else ie = g[21];
    return ie
  }
  let v = R ? "suggestion" : w ? "inactive" : "text",
    P;
  if (g[22] !== p?.selectionHighlight || g[23] !== R) P = e(s, {
    flexShrink: 0,
    children: p?.selectionHighlight === "off" ? e(n, {
      children: "  "
    }) : r(n, {
      "aria-label": R ? "selected:" : "you:",
      color: R ? "suggestion" : "inactive",
      children: [re.pointer, " "]
    })
  }), g[22] = p?.selectionHighlight, g[23] = R, g[24] = P;
  else P = g[24];
  let C;
  if (g[25] !== h || g[26] !== t || g[27] !== v || g[28] !== m || g[29] !== w) C = m ? r(s, {
    flexDirection: "column",
    children: [e(L, {
      text: t.head,
      color: v
    }), e(b, {
      hiddenLines: t.hiddenLines,
      indent: 3
    }), e(L, {
      text: t.tail,
      color: v
    })]
  }) : h ? e(Vl, {
    promptMode: !0,
    color: v,
    monochrome: w,
    children: t
  }) : e(L, {
    text: t,
    color: v
  }), g[25] = h, g[26] = t, g[27] = v, g[28] = m, g[29] = w, g[30] = C;
  else C = g[30];
  let D;
  if (g[31] !== P || g[32] !== C) D = r(s, {
    flexDirection: "row",
    children: [P, C]
  }), g[31] = P, g[32] = C, g[33] = D;
  else D = g[33];
  return D
}

function b(i) {
  let c = S(7),
    {
      hiddenLines: t,
      hiddenChars: o,
      indent: d
    } = i,
    a = `${t} ${t===1?"line":"lines"}`,
    f;
  if (c[0] !== o || c[1] !== t || c[2] !== a) f = o === void 0 ? `(${a} hidden)` : t === 0 ? `(~${int(o)} KB hidden)` : `(${a}, ~${int(o)} KB hidden)`, c[0] = o, c[1] = t, c[2] = a, c[3] = f;
  else f = c[3];
  let l = f,
    u;
  if (c[4] !== d || c[5] !== l) u = e(Gd, {
    title: l,
    titleAlign: "start",
    color: "subtle",
    padding: d
  }), c[4] = d, c[5] = l, c[6] = u;
  else u = c[6];
  return u
}

function L(i) {
  let c = S(9),
    {
      text: t,
      color: o
    } = i,
    d = Nu(),
    a = ig(),
    f, l;
  if (c[0] !== o || c[1] !== a || c[2] !== d || c[3] !== t) {
    l = Pn;
    k: {
      let u = Iye(t);
      if (u.length === 0 || !V_e(d, a)) {
        let p;
        if (c[6] !== o || c[7] !== t) p = e(n, {
          color: o,
          children: t
        }), c[6] = o, c[7] = t, c[8] = p;
        else p = c[8];
        l = p;
        break k
      }
      let m = [];
      let g = 0;
      for (const x of u) {
        if (x.start > g) m.push(e(n, {
          color: o,
          children: t.slice(g, x.start)
        }, `plain-${g}`));
        for (let h = x.start; h < x.end; h++) m.push(e(n, {
          color: w4(h - x.start),
          children: t[h]
        }, `rb-${h}`));
        g = x.end
      }
      if (g < t.length) m.push(e(n, {
        color: o,
        children: t.slice(g)
      }, `plain-${g}`));f = e(n, {
        children: m
      })
    }
    c[0] = o, c[1] = a, c[2] = d, c[3] = t, c[4] = f, c[5] = l
  } else f = c[4], l = c[5];
  if (l !== Pn) return l;
  return f
}

function vP(i) {
  let o = S(19),
    {
      text: t
    } = i,
    d, a, c, f, l, u, p, k;
  if (o[0] !== t) {
    k = Pn;
    g: {
      let m = rmn(t);
      if (typeof m === "string") {
        k = e(n, {
          wrap: "wrap",
          children: eA(m)
        });
        break g
      }
      a = s;l = "column";u = e(n, {
        wrap: "wrap",
        children: eA(m.head)
      });p = e(b, {
        hiddenLines: m.hiddenLines,
        hiddenChars: m.hiddenChars,
        indent: 0
      });d = n;c = "wrap";f = eA(m.tail)
    }
    o[0] = t, o[1] = d, o[2] = a, o[3] = c, o[4] = f, o[5] = l, o[6] = u, o[7] = p, o[8] = k
  } else d = o[1], a = o[2], c = o[3], f = o[4], l = o[5], u = o[6], p = o[7], k = o[8];
  if (k !== Pn) return k;
  let x;
  if (o[9] !== d || o[10] !== c || o[11] !== f) x = e(d, {
    wrap: c,
    children: f
  }), o[9] = d, o[10] = c, o[11] = f, o[12] = x;
  else x = o[12];
  let h;
  if (o[13] !== a || o[14] !== l || o[15] !== u || o[16] !== p || o[17] !== x) h = r(a, {
    flexDirection: l,
    children: [u, p, x]
  }), o[13] = a, o[14] = l, o[15] = u, o[16] = p, o[17] = x, o[18] = h;
  else h = o[18];
  return h
}
export {
  dYe,
  Oot,
  F7,
  rmn,
  Kjr,
  omn,
  vP
};
