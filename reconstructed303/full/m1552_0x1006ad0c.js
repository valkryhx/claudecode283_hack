// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ne,
  ld,
  $t
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  cge,
  UYn,
  h$t,
  lW
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  nGe
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  Qn
} from "B:/~BUN/root/chunk-nw686kdq.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  Va,
  f1,
  kL
} from "B:/~BUN/root/chunk-znr767c8.js";
import {
  Lgr
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  te
} from "B:/~BUN/root/chunk-9tx73f8x.js";
import {
  Xtt
} from "B:/~BUN/root/chunk-7byaw5d4.js";
import {
  Ql
} from "B:/~BUN/root/chunk-5xpqz53z.js";
import {
  Q,
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  LP
} from "B:/~BUN/root/chunk-7qt3r3cx.js";
import {
  xKe,
  Qdr,
  aCt,
  Uss
} from "B:/~BUN/root/chunk-zc6q737r.js";
import {
  Ehe
} from "B:/~BUN/root/chunk-b0487zs4.js";
import {
  Q0e,
  HW
} from "B:/~BUN/root/chunk-pp80ffk4.js";
import {
  Mr,
  yn
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var aY = {};
Mr(aY, {
  default: () => aY,
  deliveredBy: () => Y,
  useUserMessageSite: () => iVe
});

function gLe(i, t = new Date) {
  let o = new Date(i);
  if (Number.isNaN(o.getTime())) return "";
  let a = xKe(),
    d = aCt(),
    {
      timeZone: m
    } = d,
    f = V(t, m) - V(o, m),
    c = Math.round(f / 86400000),
    u = "older";
  if (c === 0) u = "today";
  else if (c > 0 && c < 7) u = "week";
  if (d.kind === "preset") return Qdr(d, se[u], a, o);
  let l = Uss(d.pattern, m, o);
  if (u === "today") return l;
  let g = HW(a, Q0e(de[u], m)).format(o);
  return u === "week" ? `${g} ${l}` : `${g}, ${l}`
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

function V(i, t) {
  if (!t) return new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime();
  let o = HW("en-US", Q0e(ae, t)).formatToParts(i),
    a = {};
  for (let d of o) a[d.type] = d.value;
  return Date.UTC(Number(a.year), Number(a.month) - 1, Number(a.day))
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
      return Ehe(i.server)?.pluginName;
    default:
      return
  }
}

function iVe({
  messageId: i,
  stored: t,
  text: o,
  isExpanded: a,
  task: d,
  sender: m,
  draw: f
}) {
  let c = Qn(d),
    u = Qn(m),
    l = kL("UserMessage", () => ({
      requestId: i,
      props: {
        text: o,
        origin: Lgr(t),
        isExpanded: a,
        ...d !== void 0 && {
          task: d
        },
        ...m !== void 0 && {
          from: m
        }
      }
    }), [i, o, t, a, c, u]);
  return f1(l, (g) => f(g.props.text), Y(l.props.origin))
}
var me = 1e4,
  ue = 2500,
  pe = 2500;

function DGt(i) {
  if (i.length <= me) return i;
  let t = ne(i, ue),
    o = ld(i, pe),
    a = $t(i, `
`, t.length) - $t(o, `
`),
    d = i.length - t.length - o.length;
  return {
    head: t,
    hiddenLines: a,
    hiddenChars: d,
    tail: o
  }
}
var fe = 4000;

function $er(i) {
  return i.length <= fe && !(cge() && UYn(i))
}

function LGt(i) {
  let b = w(34),
    {
      text: t,
      useBriefLayout: o,
      timestamp: a,
      bodyOnly: d,
      awaitingModel: m,
      markLinks: f
    } = i,
    c = d === void 0 ? !1 : d,
    u = m === void 0 ? !1 : m,
    l = Xtt(),
    g = l?.isQueued ?? !1,
    p = typeof t === "object",
    M;
  if (b[0] !== t || b[1] !== p) M = !p && $er(t), b[0] = t, b[1] = p, b[2] = M;
  else M = b[2];
  let k = M,
    x = l?.selectionHighlight === "on",
    y = g || u;
  if (o || c) {
    let P;
    if (b[3] !== a) P = a ? gLe(a) : "", b[3] = a, b[4] = P;
    else P = b[4];
    let K = P;
    let S = x ? "suggestion" : y ? "subtle" : "text";
    const C = c ? 0 : 2;
    let D;
    if (b[5] !== c || b[6] !== x || b[7] !== K || b[8] !== y) D = c ? null : r(s, {
      flexDirection: "row",
      children: [x ? r(n, {
        "aria-label": "selected:",
        color: "suggestion",
        children: [te.pointer, " "]
      }) : null, e(n, {
        color: x ? "suggestion" : y ? "subtle" : "briefLabelYou",
        children: "You"
      }), K ? r(n, {
        dimColor: !0,
        children: [" ", K]
      }) : null]
    }), b[5] = c, b[6] = x, b[7] = K, b[8] = y, b[9] = D;
    else D = b[9];
    let q;
    if (b[10] !== c || b[11] !== f || b[12] !== k || b[13] !== t || b[14] !== S || b[15] !== p || b[16] !== y) q = p ? r(Q, {
      children: [e(n, {
        color: S,
        children: t.head
      }), e(R, {
        hiddenLines: t.hiddenLines,
        indent: c ? 0 : 2
      }), e(n, {
        color: S,
        children: t.tail
      })]
    }) : k ? e(Va, {
      promptMode: !0,
      color: S,
      monochrome: y,
      markLinks: f,
      children: t
    }) : e(n, {
      color: S,
      children: t
    }), b[10] = c, b[11] = f, b[12] = k, b[13] = t, b[14] = S, b[15] = p, b[16] = y, b[17] = q;
    else q = b[17];
    let ie;
    if (b[18] !== C || b[19] !== D || b[20] !== q) ie = r(s, {
      flexDirection: "column",
      paddingLeft: C,
      children: [D, q]
    }), b[18] = C, b[19] = D, b[20] = q, b[21] = ie;
    else ie = b[21];
    return ie
  }
  let H = x ? "suggestion" : y ? "inactive" : "text",
    P;
  if (b[22] !== l?.selectionHighlight || b[23] !== x) P = e(s, {
    flexShrink: 0,
    children: l?.selectionHighlight === "off" ? e(n, {
      children: "  "
    }) : r(n, {
      "aria-label": x ? "selected:" : "you:",
      color: x ? "suggestion" : "inactive",
      children: [te.pointer, " "]
    })
  }), b[22] = l?.selectionHighlight, b[23] = x, b[24] = P;
  else P = b[24];
  let C;
  if (b[25] !== k || b[26] !== t || b[27] !== H || b[28] !== p || b[29] !== y) C = p ? r(s, {
    flexDirection: "column",
    children: [e(L, {
      text: t.head,
      color: H
    }), e(R, {
      hiddenLines: t.hiddenLines,
      indent: 3
    }), e(L, {
      text: t.tail,
      color: H
    })]
  }) : k ? e(Va, {
    promptMode: !0,
    color: H,
    monochrome: y,
    children: t
  }) : e(L, {
    text: t,
    color: H
  }), b[25] = k, b[26] = t, b[27] = H, b[28] = p, b[29] = y, b[30] = C;
  else C = b[30];
  let D;
  if (b[31] !== P || b[32] !== C) D = r(s, {
    flexDirection: "row",
    children: [P, C]
  }), b[31] = P, b[32] = C, b[33] = D;
  else D = b[33];
  return D
}

function R(i) {
  let m = w(7),
    {
      hiddenLines: t,
      hiddenChars: o,
      indent: a
    } = i,
    d = `${t} ${t===1?"line":"lines"}`,
    f;
  if (m[0] !== o || m[1] !== t || m[2] !== d) f = o === void 0 ? `(${d} hidden)` : t === 0 ? `(~${nGe(o)} KB hidden)` : `(${d}, ~${nGe(o)} KB hidden)`, m[0] = o, m[1] = t, m[2] = d, m[3] = f;
  else f = m[3];
  let c = f,
    u;
  if (m[4] !== a || m[5] !== c) u = e(Ql, {
    title: c,
    titleAlign: "start",
    color: "subtle",
    padding: a
  }), m[4] = a, m[5] = c, m[6] = u;
  else u = m[6];
  return u
}

function L(i) {
  let a = w(4),
    {
      text: t,
      color: o
    } = i,
    d, m;
  if (a[0] !== o || a[1] !== t) {
    m = yn;
    c: {
      let f = cge() ? h$t(t) : [];
      if (f.length === 0) {
        m = e(n, {
          color: o,
          children: t
        });
        break c
      }
      let u = [];
      let l = 0;
      for (const g of f) {
        if (g.start > l) u.push(e(n, {
          color: o,
          children: t.slice(l, g.start)
        }, `plain-${l}`));
        for (let p = g.start; p < g.end; p++) u.push(e(n, {
          color: lW(p - g.start),
          children: t[p]
        }, `rb-${p}`));
        l = g.end
      }
      if (l < t.length) u.push(e(n, {
        color: o,
        children: t.slice(l)
      }, `plain-${l}`));d = e(n, {
        children: u
      })
    }
    a[0] = o, a[1] = t, a[2] = d, a[3] = m
  } else d = a[2], m = a[3];
  if (m !== yn) return m;
  return d
}

function wP(i) {
  let o = w(19),
    {
      text: t
    } = i,
    a, d, m, f, c, u, l, g;
  if (o[0] !== t) {
    g = yn;
    b: {
      let p = DGt(t);
      if (typeof p === "string") {
        g = e(n, {
          wrap: "wrap",
          children: LP(p)
        });
        break b
      }
      d = s;c = "column";u = e(n, {
        wrap: "wrap",
        children: LP(p.head)
      });l = e(R, {
        hiddenLines: p.hiddenLines,
        hiddenChars: p.hiddenChars,
        indent: 0
      });a = n;m = "wrap";f = LP(p.tail)
    }
    o[0] = t, o[1] = a, o[2] = d, o[3] = m, o[4] = f, o[5] = c, o[6] = u, o[7] = l, o[8] = g
  } else a = o[1], d = o[2], m = o[3], f = o[4], c = o[5], u = o[6], l = o[7], g = o[8];
  if (g !== yn) return g;
  let M;
  if (o[9] !== a || o[10] !== m || o[11] !== f) M = e(a, {
    wrap: m,
    children: f
  }), o[9] = a, o[10] = m, o[11] = f, o[12] = M;
  else M = o[12];
  let k;
  if (o[13] !== d || o[14] !== c || o[15] !== u || o[16] !== l || o[17] !== M) k = r(d, {
    flexDirection: c,
    children: [u, l, M]
  }), o[13] = d, o[14] = c, o[15] = u, o[16] = l, o[17] = M, o[18] = k;
  else k = o[18];
  return k
}
export {
  gLe,
  iVe,
  aY,
  DGt,
  $er,
  LGt,
  wP
};
