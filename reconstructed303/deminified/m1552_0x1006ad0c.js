// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ne, ld, $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { cge, UYn, h$t, lW } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { nGe } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Qn } from "B:/~BUN/root/chunk-nw686kdq.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Va, f1, kL } from "B:/~BUN/root/chunk-znr767c8.js";
import { Lgr } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { Xtt } from "B:/~BUN/root/chunk-7byaw5d4.js";
import { Ql } from "B:/~BUN/root/chunk-5xpqz53z.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { LP } from "B:/~BUN/root/chunk-7qt3r3cx.js";
import { xKe, Qdr, aCt, Uss } from "B:/~BUN/root/chunk-zc6q737r.js";
import { Ehe } from "B:/~BUN/root/chunk-b0487zs4.js";
import { Q0e, HW } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { Mr, yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
var aY = {};
Mr(aY, {
  default: () => aY,
  deliveredBy: () => Y,
  useUserMessageSite: () => iVe
});
function gLe(i, t = new Date()) {
  let date = new Date(i);
  if (Number.isNaN(date.getTime())) return "";
  let a = xKe(),
    d = aCt(),
    {
      timeZone: timeZone
    } = d,
    f = V(t, timeZone) - V(date, timeZone),
    c = Math.round(f / 86400000),
    u = "older";
  if (c === 0) u = "today";else if (c > 0 && c < 7) u = "week";
  if (d.kind === "preset") return Qdr(d, se[u], a, date);
  let l = Uss(d.pattern, timeZone, date);
  if (u === "today") return l;
  let g = HW(a, Q0e(de[u], timeZone)).format(date);
  return u === "week" ? `${g} ${l}` : `${g}, ${l}`;
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
  return Date.UTC(Number(a.year), Number(a.month) - 1, Number(a.day));
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
      return;
  }
}
function iVe({
  messageId: i,
  stored: stored,
  text: text,
  isExpanded: isExpanded,
  task: task,
  sender: sender,
  draw: draw
}) {
  let c = Qn(task),
    u = Qn(sender),
    l = kL("UserMessage", () => ({
      requestId: i,
      props: {
        text: text,
        origin: Lgr(stored),
        isExpanded: isExpanded,
        ...(task !== void 0 && {
          task: task
        }),
        ...(sender !== void 0 && {
          from: sender
        })
      }
    }), [i, text, stored, isExpanded, c, u]);
  return f1(l, g => draw(g.props.text), Y(l.props.origin));
}
var me = 1e4,
  ue = 2500,
  pe = 2500;
function DGt(i) {
  if (i.length <= me) return i;
  let head = ne(i, ue),
    tail = ld(i, pe),
    hiddenLines = $t(i, `
`, head.length) - $t(tail, `
`),
    hiddenChars = i.length - head.length - tail.length;
  return {
    head: head,
    hiddenLines: hiddenLines,
    hiddenChars: hiddenChars,
    tail: tail
  };
}
var fe = 4000;
function $er(i) {
  return i.length <= fe && !(cge() && UYn(i));
}
function LGt(i) {
  let b = w(34),
    {
      text: t,
      useBriefLayout: useBriefLayout,
      timestamp: timestamp,
      bodyOnly: bodyOnly,
      awaitingModel: awaitingModel,
      markLinks: markLinks
    } = i,
    c = bodyOnly === void 0 ? !1 : bodyOnly,
    u = awaitingModel === void 0 ? !1 : awaitingModel,
    l = Xtt(),
    g = l?.isQueued ?? !1,
    p = typeof t === "object",
    M;
  if (b[0] !== t || b[1] !== p) M = !p && $er(t), b[0] = t, b[1] = p, b[2] = M;else M = b[2];
  let k = M,
    x = l?.selectionHighlight === "on",
    monochrome = g || u;
  if (useBriefLayout || c) {
    let P;
    if (b[3] !== timestamp) P = timestamp ? gLe(timestamp) : "", b[3] = timestamp, b[4] = P;else P = b[4];
    let K = P;
    let color = x ? "suggestion" : monochrome ? "subtle" : "text";
    const paddingLeft = c ? 0 : 2;
    let D;
    if (b[5] !== c || b[6] !== x || b[7] !== K || b[8] !== monochrome) D = c ? null : r(s, {
      flexDirection: "row",
      children: [x ? r(n, {
        "aria-label": "selected:",
        color: "suggestion",
        children: [te.pointer, " "]
      }) : null, e(n, {
        color: x ? "suggestion" : monochrome ? "subtle" : "briefLabelYou",
        children: "You"
      }), K ? r(n, {
        dimColor: !0,
        children: [" ", K]
      }) : null]
    }), b[5] = c, b[6] = x, b[7] = K, b[8] = monochrome, b[9] = D;else D = b[9];
    let q;
    if (b[10] !== c || b[11] !== markLinks || b[12] !== k || b[13] !== t || b[14] !== color || b[15] !== p || b[16] !== monochrome) q = p ? r(Q, {
      children: [e(n, {
        color: color,
        children: t.head
      }), e(R, {
        hiddenLines: t.hiddenLines,
        indent: c ? 0 : 2
      }), e(n, {
        color: color,
        children: t.tail
      })]
    }) : k ? e(Va, {
      promptMode: !0,
      color: color,
      monochrome: monochrome,
      markLinks: markLinks,
      children: t
    }) : e(n, {
      color: color,
      children: t
    }), b[10] = c, b[11] = markLinks, b[12] = k, b[13] = t, b[14] = color, b[15] = p, b[16] = monochrome, b[17] = q;else q = b[17];
    let ie;
    if (b[18] !== paddingLeft || b[19] !== D || b[20] !== q) ie = r(s, {
      flexDirection: "column",
      paddingLeft: paddingLeft,
      children: [D, q]
    }), b[18] = paddingLeft, b[19] = D, b[20] = q, b[21] = ie;else ie = b[21];
    return ie;
  }
  let color_2 = x ? "suggestion" : monochrome ? "inactive" : "text",
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
  }), b[22] = l?.selectionHighlight, b[23] = x, b[24] = P;else P = b[24];
  let C;
  if (b[25] !== k || b[26] !== t || b[27] !== color_2 || b[28] !== p || b[29] !== monochrome) C = p ? r(s, {
    flexDirection: "column",
    children: [e(L, {
      text: t.head,
      color: color_2
    }), e(R, {
      hiddenLines: t.hiddenLines,
      indent: 3
    }), e(L, {
      text: t.tail,
      color: color_2
    })]
  }) : k ? e(Va, {
    promptMode: !0,
    color: color_2,
    monochrome: monochrome,
    children: t
  }) : e(L, {
    text: t,
    color: color_2
  }), b[25] = k, b[26] = t, b[27] = color_2, b[28] = p, b[29] = monochrome, b[30] = C;else C = b[30];
  let D;
  if (b[31] !== P || b[32] !== C) D = r(s, {
    flexDirection: "row",
    children: [P, C]
  }), b[31] = P, b[32] = C, b[33] = D;else D = b[33];
  return D;
}
function R(i) {
  let m = w(7),
    {
      hiddenLines: hiddenLines_2,
      hiddenChars: hiddenChars_2,
      indent: a
    } = i,
    d = `${hiddenLines_2} ${hiddenLines_2 === 1 ? "line" : "lines"}`,
    f;
  if (m[0] !== hiddenChars_2 || m[1] !== hiddenLines_2 || m[2] !== d) f = hiddenChars_2 === void 0 ? `(${d} hidden)` : hiddenLines_2 === 0 ? `(~${nGe(hiddenChars_2)} KB hidden)` : `(${d}, ~${nGe(hiddenChars_2)} KB hidden)`, m[0] = hiddenChars_2, m[1] = hiddenLines_2, m[2] = d, m[3] = f;else f = m[3];
  let title = f,
    u;
  if (m[4] !== a || m[5] !== title) u = e(Ql, {
    title: title,
    titleAlign: "start",
    color: "subtle",
    padding: a
  }), m[4] = a, m[5] = title, m[6] = u;else u = m[6];
  return u;
}
function L(i) {
  let a = w(4),
    {
      text: t,
      color: color_3
    } = i,
    d,
    m;
  if (a[0] !== color_3 || a[1] !== t) {
    m = yn;
    c: {
      let f = cge() ? h$t(t) : [];
      if (f.length === 0) {
        m = e(n, {
          color: color_3,
          children: t
        });
        break c;
      }
      let children = [];
      let l = 0;
      for (const g of f) {
        if (g.start > l) children.push(e(n, {
          color: color_3,
          children: t.slice(l, g.start)
        }, `plain-${l}`));
        for (let start = g.start; start < g.end; start++) children.push(e(n, {
          color: lW(start - g.start),
          children: t[start]
        }, `rb-${start}`));
        l = g.end;
      }
      if (l < t.length) children.push(e(n, {
        color: color_3,
        children: t.slice(l)
      }, `plain-${l}`));
      d = e(n, {
        children: children
      });
    }
    a[0] = color_3, a[1] = t, a[2] = d, a[3] = m;
  } else d = a[2], m = a[3];
  if (m !== yn) return m;
  return d;
}
function wP(i) {
  let o = w(19),
    {
      text: text_2
    } = i,
    a,
    d,
    wrap,
    children_2,
    flexDirection,
    u,
    l,
    g;
  if (o[0] !== text_2) {
    g = yn;
    b: {
      let p = DGt(text_2);
      if (typeof p === "string") {
        g = e(n, {
          wrap: "wrap",
          children: LP(p)
        });
        break b;
      }
      d = s;
      flexDirection = "column";
      u = e(n, {
        wrap: "wrap",
        children: LP(p.head)
      });
      l = e(R, {
        hiddenLines: p.hiddenLines,
        hiddenChars: p.hiddenChars,
        indent: 0
      });
      a = n;
      wrap = "wrap";
      children_2 = LP(p.tail);
    }
    o[0] = text_2, o[1] = a, o[2] = d, o[3] = wrap, o[4] = children_2, o[5] = flexDirection, o[6] = u, o[7] = l, o[8] = g;
  } else a = o[1], d = o[2], wrap = o[3], children_2 = o[4], flexDirection = o[5], u = o[6], l = o[7], g = o[8];
  if (g !== yn) return g;
  let M;
  if (o[9] !== a || o[10] !== wrap || o[11] !== children_2) M = e(a, {
    wrap: wrap,
    children: children_2
  }), o[9] = a, o[10] = wrap, o[11] = children_2, o[12] = M;else M = o[12];
  let k;
  if (o[13] !== d || o[14] !== flexDirection || o[15] !== u || o[16] !== l || o[17] !== M) k = r(d, {
    flexDirection: flexDirection,
    children: [u, l, M]
  }), o[13] = d, o[14] = flexDirection, o[15] = u, o[16] = l, o[17] = M, o[18] = k;else k = o[18];
  return k;
}
export { gLe, iVe, aY, DGt, $er, LGt, wP };