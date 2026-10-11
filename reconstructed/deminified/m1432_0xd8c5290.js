// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { $n } from "B:/~BUN/root/chunk-0w5kpsps.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { re, Ul, Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { Pi, AH, iO } from "B:/~BUN/root/chunk-xky3bazf.js";
import { DWo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { ZX, aHt, out, SN } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { $Je } from "B:/~BUN/root/chunk-psrp3wry.js";
import { TH } from "B:/~BUN/root/chunk-kd40sy7q.js";
import { Ml } from "B:/~BUN/root/chunk-ejdx9rag.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { wAn, jZe, wYt, WZe } from "B:/~BUN/root/chunk-bvbs2c4v.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { t_e } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { h_e, Kne } from "B:/~BUN/root/chunk-nfc48pcb.js";
import { vo, hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
function Y(i) {
  switch (i.kind) {
    case "plugin":
      return i.name;
    case "channel":
      return t_e(i.server)?.pluginName;
    default:
      return;
  }
}
function GPe({
  messageId: i,
  stored: stored,
  text: text,
  isExpanded: isExpanded,
  task: task,
  sender: sender,
  draw: draw
}) {
  let h = $n(task),
    l = $n(sender),
    p = iO("UserMessage", () => ({
      requestId: i,
      props: {
        text: text,
        origin: DWo(stored),
        isExpanded: isExpanded,
        ...(task !== void 0 && {
          task: task
        }),
        ...(sender !== void 0 && {
          from: sender
        })
      }
    }), [i, text, stored, isExpanded, h, l]);
  return AH(p, c => draw(c.props.text), Y(p.props.origin));
}
var Pj = {};
vo(Pj, {
  default: () => Pj,
  deliveredBy: () => Y,
  useUserMessageSite: () => GPe
});
function Q1e(i, t = new Date()) {
  let date = new Date(i);
  if (Number.isNaN(date.getTime())) return "";
  let a = wAn(),
    d = jZe(),
    {
      timeZone: timeZone
    } = d,
    m = J(t, timeZone) - J(date, timeZone),
    h = Math.round(m / 86400000),
    l = "older";
  if (h === 0) l = "today";else if (h > 0 && h < 7) l = "week";
  if (d.kind === "preset") return wYt(d, le[l], a, date);
  let p = WZe(d.pattern, timeZone, date);
  if (l === "today") return p;
  let c = Kne(a, h_e(ce[l], timeZone)).format(date);
  return l === "week" ? `${c} ${p}` : `${c}, ${p}`;
}
var le = {
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
  ce = {
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
  let o = Kne("en-US", h_e(ue, t)).formatToParts(i),
    a = {};
  for (let d of o) a[d.type] = d.value;
  return Date.UTC(Number(a.year), Number(a.month) - 1, Number(a.day));
}
var ue = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
};
var me = 1e4,
  pe = 2500,
  fe = 2500;
function vyt(i) {
  if (i.length <= me) return i;
  let head = re(i, pe),
    tail = Ul(i, fe),
    hiddenLines = Gt(i, `
`, head.length) - Gt(tail, `
`),
    hiddenChars = i.length - head.length - tail.length;
  return {
    head: head,
    hiddenLines: hiddenLines,
    hiddenChars: hiddenChars,
    tail: tail
  };
}
var z = 4000;
function kyt(i) {
  let f = w(33),
    {
      text: t,
      useBriefLayout: useBriefLayout,
      timestamp: timestamp,
      bodyOnly: bodyOnly,
      awaitingModel: awaitingModel
    } = i,
    m = bodyOnly === void 0 ? !1 : bodyOnly,
    h = awaitingModel === void 0 ? !1 : awaitingModel,
    l = $Je(),
    p = l?.isQueued ?? !1,
    c = typeof t === "object",
    ie;
  if (f[0] !== t || f[1] !== c) ie = !c && t.length <= z && !(ZX() && aHt(t)), f[0] = t, f[1] = c, f[2] = ie;else ie = f[2];
  let b = ie,
    y = l?.selectionHighlight === "on",
    monochrome = p || h;
  if (useBriefLayout || m) {
    let D;
    if (f[3] !== timestamp) D = timestamp ? Q1e(timestamp) : "", f[3] = timestamp, f[4] = D;else D = f[4];
    let q = D;
    let color = y ? "suggestion" : monochrome ? "subtle" : "text";
    const paddingLeft = m ? 0 : 2;
    let L;
    if (f[5] !== m || f[6] !== y || f[7] !== q || f[8] !== monochrome) L = m ? null : r(s, {
      flexDirection: "row",
      children: [y ? r(n, {
        "aria-label": "selected:",
        color: "suggestion",
        children: [Z.pointer, " "]
      }) : null, e(n, {
        color: y ? "suggestion" : monochrome ? "subtle" : "briefLabelYou",
        children: "You"
      }), q ? r(n, {
        dimColor: !0,
        children: [" ", q]
      }) : null]
    }), f[5] = m, f[6] = y, f[7] = q, f[8] = monochrome, f[9] = L;else L = f[9];
    let E;
    if (f[10] !== m || f[11] !== b || f[12] !== t || f[13] !== color || f[14] !== c || f[15] !== monochrome) E = c ? r(V, {
      children: [e(n, {
        color: color,
        children: t.head
      }), e(R, {
        hiddenLines: t.hiddenLines,
        indent: m ? 0 : 2
      }), e(n, {
        color: color,
        children: t.tail
      })]
    }) : b ? e(Pi, {
      promptMode: !0,
      color: color,
      monochrome: monochrome,
      children: t
    }) : e(n, {
      color: color,
      children: t
    }), f[10] = m, f[11] = b, f[12] = t, f[13] = color, f[14] = c, f[15] = monochrome, f[16] = E;else E = f[16];
    let se;
    if (f[17] !== paddingLeft || f[18] !== L || f[19] !== E) se = r(s, {
      flexDirection: "column",
      paddingLeft: paddingLeft,
      children: [L, E]
    }), f[17] = paddingLeft, f[18] = L, f[19] = E, f[20] = se;else se = f[20];
    return se;
  }
  let color_2 = y ? "suggestion" : monochrome ? "inactive" : "text",
    D;
  if (f[21] !== l?.selectionHighlight || f[22] !== y) D = e(s, {
    flexShrink: 0,
    children: l?.selectionHighlight === "off" ? e(n, {
      children: "  "
    }) : r(n, {
      "aria-label": y ? "selected:" : "you:",
      color: y ? "suggestion" : "subtle",
      children: [Z.pointer, " "]
    })
  }), f[21] = l?.selectionHighlight, f[22] = y, f[23] = D;else D = f[23];
  let C;
  if (f[24] !== b || f[25] !== t || f[26] !== color_2 || f[27] !== c || f[28] !== monochrome) C = c ? r(s, {
    flexDirection: "column",
    children: [e(P, {
      text: t.head,
      color: color_2
    }), e(R, {
      hiddenLines: t.hiddenLines,
      indent: 3
    }), e(P, {
      text: t.tail,
      color: color_2
    })]
  }) : b ? e(Pi, {
    promptMode: !0,
    color: color_2,
    monochrome: monochrome,
    children: t
  }) : e(P, {
    text: t,
    color: color_2
  }), f[24] = b, f[25] = t, f[26] = color_2, f[27] = c, f[28] = monochrome, f[29] = C;else C = f[29];
  let L;
  if (f[30] !== D || f[31] !== C) L = r(s, {
    flexDirection: "row",
    children: [D, C]
  }), f[30] = D, f[31] = C, f[32] = L;else L = f[32];
  return L;
}
function R(i) {
  let u = w(7),
    {
      hiddenLines: hiddenLines_2,
      hiddenChars: hiddenChars_2,
      indent: a
    } = i,
    d = `${hiddenLines_2} ${hiddenLines_2 === 1 ? "line" : "lines"}`,
    m;
  if (u[0] !== hiddenChars_2 || u[1] !== hiddenLines_2 || u[2] !== d) m = hiddenChars_2 === void 0 ? `(${d} hidden)` : hiddenLines_2 === 0 ? `(~${F(hiddenChars_2)} KB hidden)` : `(${d}, ~${F(hiddenChars_2)} KB hidden)`, u[0] = hiddenChars_2, u[1] = hiddenLines_2, u[2] = d, u[3] = m;else m = u[3];
  let title = m,
    l;
  if (u[4] !== a || u[5] !== title) l = e(Ml, {
    title: title,
    titleAlign: "start",
    color: "subtle",
    padding: a
  }), u[4] = a, u[5] = title, u[6] = l;else l = u[6];
  return l;
}
function F(i) {
  return Math.max(1, Math.round(i / 1000));
}
function P(i) {
  let a = w(4),
    {
      text: t,
      color: color_3
    } = i,
    d,
    u;
  if (a[0] !== color_3 || a[1] !== t) {
    u = hn;
    h: {
      let m = ZX() ? out(t) : [];
      if (m.length === 0) {
        u = e(n, {
          color: color_3,
          children: t
        });
        break h;
      }
      let children = [];
      let p = 0;
      for (const c of m) {
        if (c.start > p) children.push(e(n, {
          color: color_3,
          children: t.slice(p, c.start)
        }, `plain-${p}`));
        for (let start = c.start; start < c.end; start++) children.push(e(n, {
          color: SN(start - c.start),
          children: t[start]
        }, `rb-${start}`));
        p = c.end;
      }
      if (p < t.length) children.push(e(n, {
        color: color_3,
        children: t.slice(p)
      }, `plain-${p}`));
      d = e(n, {
        children: children
      });
    }
    a[0] = color_3, a[1] = t, a[2] = d, a[3] = u;
  } else d = a[2], u = a[3];
  if (u !== hn) return u;
  return d;
}
function rO(i) {
  let o = w(19),
    {
      text: text_2
    } = i,
    a,
    d,
    wrap,
    children_2,
    flexDirection,
    l,
    p,
    c;
  if (o[0] !== text_2) {
    c = hn;
    ie: {
      let f = vyt(text_2);
      if (typeof f === "string") {
        c = e(n, {
          wrap: "wrap",
          children: TH(f)
        });
        break ie;
      }
      d = s;
      flexDirection = "column";
      l = e(n, {
        wrap: "wrap",
        children: TH(f.head)
      });
      p = e(R, {
        hiddenLines: f.hiddenLines,
        hiddenChars: f.hiddenChars,
        indent: 0
      });
      a = n;
      wrap = "wrap";
      children_2 = TH(f.tail);
    }
    o[0] = text_2, o[1] = a, o[2] = d, o[3] = wrap, o[4] = children_2, o[5] = flexDirection, o[6] = l, o[7] = p, o[8] = c;
  } else a = o[1], d = o[2], wrap = o[3], children_2 = o[4], flexDirection = o[5], l = o[6], p = o[7], c = o[8];
  if (c !== hn) return c;
  let b;
  if (o[9] !== a || o[10] !== wrap || o[11] !== children_2) b = e(a, {
    wrap: wrap,
    children: children_2
  }), o[9] = a, o[10] = wrap, o[11] = children_2, o[12] = b;else b = o[12];
  let y;
  if (o[13] !== d || o[14] !== flexDirection || o[15] !== l || o[16] !== p || o[17] !== b) y = r(d, {
    flexDirection: flexDirection,
    children: [l, p, b]
  }), o[13] = d, o[14] = flexDirection, o[15] = l, o[16] = p, o[17] = b, o[18] = y;else y = o[18];
  return y;
}
export { Q1e, GPe, Pj, vyt, kyt, rO };