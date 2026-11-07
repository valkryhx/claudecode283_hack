// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q, Pa, Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { cyt, w4 } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { rwe } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { int } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Js } from "B:/~BUN/root/chunk-yr3hf5bg.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Vl, DG, JH } from "B:/~BUN/root/chunk-apcs0eny.js";
import { Iye } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { V_e } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { LQr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { ig, Nvt } from "B:/~BUN/root/chunk-ve4gzwvf.js";
import { Nu } from "B:/~BUN/root/chunk-9834xxs4.js";
import { Gd } from "B:/~BUN/root/chunk-jx2rmjhh.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { eA } from "B:/~BUN/root/chunk-mhb4gvpw.js";
import { Xit, X6r, Aqt, Mli } from "B:/~BUN/root/chunk-9vszq51v.js";
import { xqe, nY } from "B:/~BUN/root/chunk-63176a0t.js";
import { Rr, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var F7 = {};
Rr(F7, {
  default: () => F7,
  deliveredBy: () => Y,
  useUserMessageSite: () => Oot
});
function dYe(i, t = new Date()) {
  let date = new Date(i);
  if (Number.isNaN(date.getTime())) return "";
  let d = Xit(),
    a = Aqt(),
    {
      timeZone: timeZone
    } = a,
    f = J(t, timeZone) - J(date, timeZone),
    l = Math.round(f / 86400000),
    u = "older";
  if (l === 0) u = "today";else if (l > 0 && l < 7) u = "week";
  if (a.kind === "preset") return X6r(a, se[u], d, date);
  let p = Mli(a.pattern, timeZone, date);
  if (u === "today") return p;
  let k = nY(d, xqe(de[u], timeZone)).format(date);
  return u === "week" ? `${k} ${p}` : `${k}, ${p}`;
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
  return Date.UTC(Number(d.year), Number(d.month) - 1, Number(d.day));
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
      return;
  }
}
function Oot({
  messageId: i,
  stored: stored,
  text: text,
  isExpanded: isExpanded,
  task: task,
  sender: sender,
  draw: draw
}) {
  let l = Js(task),
    u = Js(sender),
    p = JH("UserMessage", () => ({
      requestId: i,
      props: {
        text: text,
        origin: LQr(stored),
        isExpanded: isExpanded,
        ...(task !== void 0 && {
          task: task
        }),
        ...(sender !== void 0 && {
          from: sender
        })
      }
    }), [i, text, stored, isExpanded, l, u]);
  return DG(p, k => draw(k.props.text), Y(p.props.origin));
}
var me = 1e4,
  ue = 2500,
  pe = 2500;
function rmn(i) {
  if (i.length <= me) return i;
  let head = Q(i, ue),
    tail = Pa(i, pe),
    hiddenLines = Dt(i, `
`, head.length) - Dt(tail, `
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
function Kjr(i) {
  return i.length <= fe && !(cyt() && Iye(i).length > 0);
}
function omn(i) {
  let g = S(34),
    {
      text: t,
      useBriefLayout: useBriefLayout,
      timestamp: timestamp,
      bodyOnly: bodyOnly,
      awaitingModel: awaitingModel,
      markLinks: markLinks
    } = i,
    l = bodyOnly === void 0 ? !1 : bodyOnly,
    u = awaitingModel === void 0 ? !1 : awaitingModel,
    p = Nvt(),
    k = p?.isQueued ?? !1,
    m = typeof t === "object",
    x;
  if (g[0] !== t || g[1] !== m) x = !m && Kjr(t), g[0] = t, g[1] = m, g[2] = x;else x = g[2];
  let h = x,
    R = p?.selectionHighlight === "on",
    monochrome = k || u;
  if (useBriefLayout || l) {
    let P;
    if (g[3] !== timestamp) P = timestamp ? dYe(timestamp) : "", g[3] = timestamp, g[4] = P;else P = g[4];
    let q = P;
    let color = R ? "suggestion" : monochrome ? "inactive" : "text";
    const paddingLeft = l ? 0 : 2;
    let D;
    if (g[5] !== l || g[6] !== R || g[7] !== q || g[8] !== monochrome) D = l ? null : r(s, {
      flexDirection: "row",
      children: [R ? r(n, {
        "aria-label": "selected:",
        color: "suggestion",
        children: [re.pointer, " "]
      }) : null, e(n, {
        color: R ? "suggestion" : monochrome ? "inactive" : "briefLabelYou",
        children: "You"
      }), q ? r(n, {
        dimColor: !0,
        children: [" ", q]
      }) : null]
    }), g[5] = l, g[6] = R, g[7] = q, g[8] = monochrome, g[9] = D;else D = g[9];
    let K;
    if (g[10] !== l || g[11] !== markLinks || g[12] !== h || g[13] !== t || g[14] !== color || g[15] !== m || g[16] !== monochrome) K = m ? r(ne, {
      children: [e(n, {
        color: color,
        children: t.head
      }), e(b, {
        hiddenLines: t.hiddenLines,
        indent: l ? 0 : 2
      }), e(n, {
        color: color,
        children: t.tail
      })]
    }) : h ? e(Vl, {
      promptMode: !0,
      color: color,
      monochrome: monochrome,
      markLinks: markLinks,
      children: t
    }) : e(n, {
      color: color,
      children: t
    }), g[10] = l, g[11] = markLinks, g[12] = h, g[13] = t, g[14] = color, g[15] = m, g[16] = monochrome, g[17] = K;else K = g[17];
    let ie;
    if (g[18] !== paddingLeft || g[19] !== D || g[20] !== K) ie = r(s, {
      flexDirection: "column",
      paddingLeft: paddingLeft,
      children: [D, K]
    }), g[18] = paddingLeft, g[19] = D, g[20] = K, g[21] = ie;else ie = g[21];
    return ie;
  }
  let color_2 = R ? "suggestion" : monochrome ? "inactive" : "text",
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
  }), g[22] = p?.selectionHighlight, g[23] = R, g[24] = P;else P = g[24];
  let C;
  if (g[25] !== h || g[26] !== t || g[27] !== color_2 || g[28] !== m || g[29] !== monochrome) C = m ? r(s, {
    flexDirection: "column",
    children: [e(L, {
      text: t.head,
      color: color_2
    }), e(b, {
      hiddenLines: t.hiddenLines,
      indent: 3
    }), e(L, {
      text: t.tail,
      color: color_2
    })]
  }) : h ? e(Vl, {
    promptMode: !0,
    color: color_2,
    monochrome: monochrome,
    children: t
  }) : e(L, {
    text: t,
    color: color_2
  }), g[25] = h, g[26] = t, g[27] = color_2, g[28] = m, g[29] = monochrome, g[30] = C;else C = g[30];
  let D;
  if (g[31] !== P || g[32] !== C) D = r(s, {
    flexDirection: "row",
    children: [P, C]
  }), g[31] = P, g[32] = C, g[33] = D;else D = g[33];
  return D;
}
function b(i) {
  let c = S(7),
    {
      hiddenLines: hiddenLines_2,
      hiddenChars: hiddenChars_2,
      indent: d
    } = i,
    a = `${hiddenLines_2} ${hiddenLines_2 === 1 ? "line" : "lines"}`,
    f;
  if (c[0] !== hiddenChars_2 || c[1] !== hiddenLines_2 || c[2] !== a) f = hiddenChars_2 === void 0 ? `(${a} hidden)` : hiddenLines_2 === 0 ? `(~${int(hiddenChars_2)} KB hidden)` : `(${a}, ~${int(hiddenChars_2)} KB hidden)`, c[0] = hiddenChars_2, c[1] = hiddenLines_2, c[2] = a, c[3] = f;else f = c[3];
  let title = f,
    u;
  if (c[4] !== d || c[5] !== title) u = e(Gd, {
    title: title,
    titleAlign: "start",
    color: "subtle",
    padding: d
  }), c[4] = d, c[5] = title, c[6] = u;else u = c[6];
  return u;
}
function L(i) {
  let c = S(9),
    {
      text: t,
      color: color_3
    } = i,
    d = Nu(),
    a = ig(),
    f,
    l;
  if (c[0] !== color_3 || c[1] !== a || c[2] !== d || c[3] !== t) {
    l = Pn;
    k: {
      let u = Iye(t);
      if (u.length === 0 || !V_e(d, a)) {
        let p;
        if (c[6] !== color_3 || c[7] !== t) p = e(n, {
          color: color_3,
          children: t
        }), c[6] = color_3, c[7] = t, c[8] = p;else p = c[8];
        l = p;
        break k;
      }
      let children = [];
      let g = 0;
      for (const x of u) {
        if (x.start > g) children.push(e(n, {
          color: color_3,
          children: t.slice(g, x.start)
        }, `plain-${g}`));
        for (let start = x.start; start < x.end; start++) children.push(e(n, {
          color: w4(start - x.start),
          children: t[start]
        }, `rb-${start}`));
        g = x.end;
      }
      if (g < t.length) children.push(e(n, {
        color: color_3,
        children: t.slice(g)
      }, `plain-${g}`));
      f = e(n, {
        children: children
      });
    }
    c[0] = color_3, c[1] = a, c[2] = d, c[3] = t, c[4] = f, c[5] = l;
  } else f = c[4], l = c[5];
  if (l !== Pn) return l;
  return f;
}
function vP(i) {
  let o = S(19),
    {
      text: text_2
    } = i,
    d,
    a,
    wrap,
    children_2,
    flexDirection,
    u,
    p,
    k;
  if (o[0] !== text_2) {
    k = Pn;
    g: {
      let m = rmn(text_2);
      if (typeof m === "string") {
        k = e(n, {
          wrap: "wrap",
          children: eA(m)
        });
        break g;
      }
      a = s;
      flexDirection = "column";
      u = e(n, {
        wrap: "wrap",
        children: eA(m.head)
      });
      p = e(b, {
        hiddenLines: m.hiddenLines,
        hiddenChars: m.hiddenChars,
        indent: 0
      });
      d = n;
      wrap = "wrap";
      children_2 = eA(m.tail);
    }
    o[0] = text_2, o[1] = d, o[2] = a, o[3] = wrap, o[4] = children_2, o[5] = flexDirection, o[6] = u, o[7] = p, o[8] = k;
  } else d = o[1], a = o[2], wrap = o[3], children_2 = o[4], flexDirection = o[5], u = o[6], p = o[7], k = o[8];
  if (k !== Pn) return k;
  let x;
  if (o[9] !== d || o[10] !== wrap || o[11] !== children_2) x = e(d, {
    wrap: wrap,
    children: children_2
  }), o[9] = d, o[10] = wrap, o[11] = children_2, o[12] = x;else x = o[12];
  let h;
  if (o[13] !== a || o[14] !== flexDirection || o[15] !== u || o[16] !== p || o[17] !== x) h = r(a, {
    flexDirection: flexDirection,
    children: [u, p, x]
  }), o[13] = a, o[14] = flexDirection, o[15] = u, o[16] = p, o[17] = x, o[18] = h;else h = o[18];
  return h;
}
export { dYe, Oot, F7, rmn, Kjr, omn, vP };