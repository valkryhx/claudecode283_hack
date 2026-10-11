// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Rt } from "B:/~BUN/root/chunk-54p0h65d.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Ys, I, Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { wf } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Js, tL, s, n, bt, Jr, nL, _t, ek, od, Fvn, $vn, KC, Xi } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { iS } from "B:/~BUN/root/chunk-1223v177.js";
import { xe } from "B:/~BUN/root/chunk-mgxre38x.js";
import { sIe } from "B:/~BUN/root/chunk-q87kdcms.js";
import { dM, okn, m9r, I_t } from "B:/~BUN/root/chunk-4tkwpa6e.js";
import { wA, Zn } from "B:/~BUN/root/chunk-1x7a47hz.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { Y0 } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { ie, Wu, ot } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { BJ } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { XPt, JPt } from "B:/~BUN/root/chunk-rfp59gnb.js";
import { mT, uIe, cVt, YC, g_t, Y_ } from "B:/~BUN/root/chunk-trcn2d68.js";
import { r9r, o9r, i9r } from "B:/~BUN/root/chunk-jz31jc2e.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { JD } from "B:/~BUN/root/chunk-5dn8wsxz.js";
import { KRt, O_r, Sfo, aLn, HWo, wfo, FWo, $Wo, UWo, Eie, FP as renderEvent, eF, pmo, Cie, X8, LFn, Len, Nen, Hen, Fen, $en, bqe, Uen, skr, Eke, NFn, Kxt, akr, Oot, Xxt, Sqe } from "B:/~BUN/root/chunk-3jyp964r.js";
import { dt } from "B:/~BUN/root/chunk-hhgrczac.js";
import { De } from "B:/~BUN/root/chunk-5dk9zqaz.js";
import { A6, $n, gFe, NVn } from "B:/~BUN/root/chunk-0w5kpsps.js";
import { Ake, Da, l9 } from "B:/~BUN/root/chunk-4mcmxrhr.js";
import { jqe } from "B:/~BUN/root/chunk-efz11ra0.js";
import { yVn } from "B:/~BUN/root/chunk-5emths66.js";
import { qyt, BJe, P8r, ger, BGt, uP, jGt, her, cvn, yer, dvn, _er } from "B:/~BUN/root/chunk-8nq6mgsz.js";
import { As } from "B:/~BUN/root/chunk-syke822n.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { d_ } from "B:/~BUN/root/chunk-h89fwq58.js";
import { Lj } from "B:/~BUN/root/chunk-q7jerdh3.js";
import { K_ } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { pP } from "B:/~BUN/root/chunk-0tqg3ze0.js";
import { Ya } from "B:/~BUN/root/chunk-7nc4t0q7.js";
import { qIe, pKt, n7r, r7r } from "B:/~BUN/root/chunk-2ahfynn0.js";
import { UJe } from "B:/~BUN/root/chunk-j8x7ygb4.js";
import { Ba } from "B:/~BUN/root/chunk-vf07m8qt.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Xg } from "B:/~BUN/root/chunk-cev8zjcf.js";
import { Vt, ad, Gp, se, Pe, R, sn, X, T, g, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { UD } from "B:/~BUN/root/chunk-zhkdb3ds.js";
import { vo, S, hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();
function jo(oe) {
  return oe.trim();
}
var Re = 4,
  ke = 3,
  Io = 4,
  fr = 200;
function Be(o) {
  return `\u2026 ${o.toLocaleString()} more ${I(o, "row")} not shown`;
}
var mr = "\x1B[1m",
  ur = "\x1B[22m";
function le(o, i, p) {
  if (i <= 0) return [o];
  let a = o.trimEnd(),
    m = Wu(a, i, {
      hard: p?.hard ?? !1,
      trim: !1,
      wordWrap: !0
    }).split(`
`).filter(item => item.length > 0);
  return m.length > 0 ? m : [""];
}
var mt = Gp(function (i) {
  let y = w(14),
    {
      token: token,
      highlight: highlight,
      forceWidth: forceWidth,
      linkCap: linkCap
    } = i,
    [u] = Zn(),
    {
      columns: columns
    } = As(ve()),
    x = _t(),
    terminalWidth = forceWidth ?? columns,
    b;
  if (y[0] !== highlight || y[1] !== x || y[2] !== linkCap || y[3] !== terminalWidth || y[4] !== u || y[5] !== token) b = gr(token, terminalWidth, u, highlight, linkCap, x), y[0] = highlight, y[1] = x, y[2] = linkCap, y[3] = terminalWidth, y[4] = u, y[5] = token, y[6] = b;else b = y[6];
  let k = b;
  if (k.kind === "ansi") {
    let E;
    if (y[7] !== k.text) E = e(Jr, {
      children: k.text
    }), y[7] = k.text, y[8] = E;else E = y[8];
    return E;
  }
  let E;
  if (y[9] !== k.headers || y[10] !== k.rows || y[11] !== k.truncatedCount || y[12] !== terminalWidth) E = e(ft, {
    headers: k.headers,
    rows: k.rows,
    terminalWidth: terminalWidth,
    truncatedCount: k.truncatedCount
  }), y[9] = k.headers, y[10] = k.rows, y[11] = k.truncatedCount, y[12] = terminalWidth, y[13] = E;else E = y[13];
  return E;
});
function gr(o, i, p, highlight_2, linkCap_2, m) {
  let truncatedCount = Math.max(0, o.rows.length - fr),
    c = truncatedCount > 0 ? o.rows.slice(0, fr) : o.rows,
    x = new Map();
  function h(O) {
    let M = x.get(O);
    if (M !== void 0) return M;
    let W = qyt(O?.map(U => uP(U, p, {
      listDepth: 0,
      orderedListNumber: null,
      parent: null,
      highlight: highlight_2,
      glueProse: !1,
      linkCap: linkCap_2
    })).join("") ?? "");
    return x.set(O, W), W;
  }
  function y(O) {
    return wt(h(O));
  }
  if (m) {
    let text = _er(o.header.map(item => y(item.tokens)), c.map(item => item.map(item => y(item.tokens))));
    if (truncatedCount > 0) text += `
${Be(truncatedCount)}`;
    return {
      kind: "ansi",
      text: text
    };
  }
  function b(O) {
    let W = y(O).split(/\s+/).filter(item => item.length > 0);
    if (W.length === 0) return ke;
    return Math.max(...W.map(item => ie(item)), ke);
  }
  function k(O) {
    return Math.max(ie(y(O)), ke);
  }
  let E = o.header.map((item, index) => {
      let W = b(item.tokens);
      for (let U of c) W = Math.max(W, b(U[index]?.tokens));
      return W;
    }),
    C = o.header.map((item, index) => {
      let W = k(item.tokens);
      for (let U of c) W = Math.max(W, k(U[index]?.tokens));
      return W;
    }),
    F = o.header.length,
    B = 1 + F * 3,
    H = Math.max(i - B - Re, F * ke),
    P = E.reduce((acc, item) => acc + item, 0),
    _ = C.reduce((acc, item) => acc + item, 0),
    hard = !1,
    D;
  if (_ <= H) D = C;else if (P <= H) {
    let O = H - P,
      M = C.map((item, index) => item - E[index]),
      W = M.reduce((acc, item) => acc + item, 0);
    D = E.map((item, index) => {
      if (W === 0) return item;
      let z = Math.floor(M[index] / W * O);
      return item + z;
    });
  } else {
    hard = !0;
    let O = H / P;
    D = E.map(item => Math.max(Math.floor(item * O), ke));
  }
  function j() {
    let O = 1;
    for (let M = 0; M < o.header.length; M++) {
      let W = h(o.header[M].tokens),
        U = le(W, D[M], {
          hard: hard
        });
      O = Math.max(O, U.length);
    }
    for (let M of c) for (let W = 0; W < M.length; W++) {
      let U = h(M[W]?.tokens),
        K = le(U, D[W], {
          hard: hard
        });
      O = Math.max(O, K.length);
    }
    return O;
  }
  let q = j() > Io;
  function Q() {
    return {
      kind: "vertical",
      headers: o.header.map(item => y(item.tokens)),
      rows: c.map(item => item.map(item => h(item.tokens))),
      truncatedCount: truncatedCount
    };
  }
  function oe(O, M) {
    let W = O.map((item, index) => {
        let Y = h(item.tokens),
          re = D[index];
        return le(Y, re, {
          hard: hard
        });
      }),
      U = Math.max(...W.map(item => item.length), 1),
      K = W.map(item => Math.floor((U - item.length) / 2)),
      z = [];
    for (let G = 0; G < U; G++) {
      let Z = "\u2502";
      for (let Y = 0; Y < O.length; Y++) {
        let re = W[Y],
          ne = K[Y],
          ce = G - ne,
          lr = ce >= 0 && ce < re.length ? re[ce] : "",
          Co = D[Y],
          So = M ? "center" : o.align?.[Y] ?? "left";
        Z += " " + dvn(lr, ie(lr), Co, So) + " \u2502";
      }
      z.push(Z);
    }
    return z;
  }
  function te(O) {
    let [M, W, U, K] = {
        top: ["\u250C", "\u2500", "\u252C", "\u2510"],
        middle: ["\u251C", "\u2500", "\u253C", "\u2524"],
        bottom: ["\u2514", "\u2500", "\u2534", "\u2518"]
      }[O],
      z = M;
    return D.forEach((item, index) => {
      z += W.repeat(item + 2), z += index < D.length - 1 ? U : K;
    }), z;
  }
  if (q) return Q();
  let J = [];
  J.push(te("top")), J.push(...oe(o.header, !0)), J.push(te("middle")), c.forEach((item, index) => {
    if (J.push(...oe(item, !1)), index < c.length - 1) J.push(te("middle"));
  }), J.push(te("bottom"));
  let ue = 0;
  for (let O of J) {
    let M = ie(wt(O));
    if (M > ue) ue = M;
  }
  if (ue > i - Re) return Q();
  if (truncatedCount > 0) J.push(Be(truncatedCount));
  return {
    kind: "ansi",
    text: J.join(`
`)
  };
}
function ft(o) {
  let m = w(9),
    {
      headers: headers,
      rows: rows,
      terminalWidth: terminalWidth_2,
      truncatedCount: truncatedCount_2
    } = o,
    u;
  if (m[0] !== headers || m[1] !== rows || m[2] !== terminalWidth_2 || m[3] !== truncatedCount_2) {
    u = [];
    let c = Math.min(terminalWidth_2 - 1, 40);
    let x = Ys("\u2500", c);
    rows.forEach(item => {
      let y = [];
      if (item.forEach((item, index) => {
        let E = headers[index] || "";
        let C = item.trimEnd().replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
        if (!E && !C) {
          return;
        }
        let F = E ? terminalWidth_2 - ie(E) - 3 : terminalWidth_2 - 1;
        let B = terminalWidth_2 - 2 - 1;
        let H = le(C, Math.max(F, 10));
        let P = H[0] || "";
        let _;
        if (H.length <= 1) _ = H;else {
          let A = H.slice(1).map(jo).join(" ");
          let D = le(A, B);
          _ = [P, ...D];
        }
        y.push(E ? `${mr}${E}:${ur} ${_[0] || ""}` : _[0] || "");
        for (let j = 1; j < _.length; j++) {
          let V = _[j];
          if (!V.trim()) {
            continue;
          }
          y.push(`${V}`);
        }
      }), y.length === 0) {
        return;
      }
      if (u.length > 0) u.push(x);
      u.push(...y);
    });
    if (truncatedCount_2 > 0) {
      if (u.length > 0) u.push(x);
      let q;
      if (m[5] !== truncatedCount_2) q = Be(truncatedCount_2), m[5] = truncatedCount_2, m[6] = q;else q = m[6];
      u.push(q);
    }
    m[0] = headers, m[1] = rows, m[2] = terminalWidth_2, m[3] = truncatedCount_2, m[4] = u;
  } else u = m[4];
  const children = u.join(`
`);
  let Q;
  if (m[7] !== children) Q = e(Jr, {
    children: children
  }), m[7] = children, m[8] = Q;else Q = m[8];
  return Q;
}
var br = 10,
  minWidth = 2,
  ut = 300,
  $o = 64;
function Cr(o) {
  return o.type === "code" || o.type === "blockquote" || o.type === "hr" || o.type === "table";
}
function Sr(o) {
  let i = 0,
    p = [];
  for (let list of o) if (list.type === "list") p.push({
    list: list,
    depth: 1
  });
  for (let a = p.pop(); a; a = p.pop()) {
    if (a.depth > $o) return !1;
    for (let f of a.list.items) {
      if (++i > ut) return !1;
      let m = !0;
      for (let list_2 of cvn(f).tokens) if (list_2.type === "list") p.push({
        list: list_2,
        depth: a.depth + 1
      }), m = !1;else if (Cr(list_2)) {
        if (++i > ut) return !1;
        m = !1;
      } else if (list_2.type !== "space" && !m) {
        if (++i > ut) return !1;
        m = !0;
      }
    }
  }
  return !0;
}
function ht(o) {
  let i = w(7),
    p,
    token_2;
  if (i[0] !== o) ({
    token: token_2,
    ...p
  } = o), i[0] = o, i[1] = p, i[2] = token_2;else p = i[1], token_2 = i[2];
  let {
      columns: columns_2
    } = As(ve()),
    minContentWidth = Math.max(1, Math.min(br, columns_2 - minWidth - Re)),
    u;
  if (i[3] !== minContentWidth || i[4] !== p || i[5] !== token_2) u = e(s, {
    flexDirection: "column",
    children: e(xt, {
      token: token_2,
      indent: 0,
      listDepth: 0,
      minContentWidth: minContentWidth,
      ...p
    })
  }), i[3] = minContentWidth, i[4] = p, i[5] = token_2, i[6] = u;else u = i[6];
  return u;
}
function xt({
  token: token_3,
  indent: indent,
  listDepth: listDepth,
  ...a
}) {
  let f = her(token_3);
  return token_3.items.map((item_2, index) => e(zo, {
    item: item_2,
    marker: yer(listDepth, token_3.ordered ? {
      number: f.first + index,
      ...f
    } : null),
    indent: indent,
    listDepth: listDepth,
    blankLineBefore: index > 0 && Ir(token_3.items[index - 1]),
    ...a,
    tailWrap: index === token_3.items.length - 1 ? a.tailWrap : void 0
  }, index));
}
function Ir(o) {
  let i = o.tokens.at(-1);
  if (i?.type === "space" || i?.type === "heading" || i?.type === "table") return !0;
  if (i?.type === "list") {
    let p = i.items.at(-1);
    return p ? Ir(p) : !1;
  }
  return i?.type === "html" && BGt(i.raw);
}
function zo({
  item: item_3,
  marker: i,
  indent: p,
  listDepth: listDepth_2,
  blankLineBefore: blankLineBefore,
  theme: theme,
  highlight: highlight_3,
  dimColor: dimColor,
  italic: italic,
  linkCap: linkCap_3,
  tailWrap: tailWrap,
  maxProseWidth: b,
  minContentWidth: k
}) {
  let parent = cvn(item_3),
    C = [];
  for (let token_4 of parent.tokens) {
    if (token_4.type === "list") {
      C.push({
        kind: "list",
        token: token_4
      });
      continue;
    }
    let text_2 = uP(token_4, theme, {
      listDepth: listDepth_2 + 1,
      orderedListNumber: null,
      parent: parent,
      highlight: highlight_3,
      glueProse: !1,
      linkCap: linkCap_3
    });
    if (Cr(token_4)) {
      C.push({
        kind: "block",
        text: text_2,
        code: token_4.type === "code"
      });
      continue;
    }
    let j = C.at(-1);
    if (j?.kind === "inline") j.text += text_2;else C.push({
      kind: "inline",
      text: text_2
    });
  }
  if (C[0]?.kind !== "inline") C.unshift({
    kind: "inline",
    text: ""
  });
  let width = ie(i) + 1,
    indent_2 = Math.min(p + width, ger),
    H = [],
    P = blankLineBefore,
    _ = C.length - 1;
  return C.forEach((item, index) => {
    let j = index === _ ? tailWrap : void 0;
    if (item.kind === "inline") {
      let V = item.text.startsWith(`
`),
        q = BGt(item.text),
        children_2 = item.text.replace(/^\n+/, "").trimEnd();
      if (!children_2 && index > 0) {
        P ||= item.text.includes(`
`);
        return;
      }
      H.push(r(s, {
        flexDirection: "row",
        marginTop: P || index > 0 && V ? 1 : 0,
        maxWidth: b,
        children: [e(s, {
          flexShrink: 1,
          width: p
        }), e(s, {
          flexShrink: 1,
          width: width,
          minWidth: minWidth,
          children: index === 0 && e(n, {
            dimColor: dimColor,
            italic: italic,
            children: i
          })
        }), e(s, {
          flexDirection: "column",
          flexShrink: 1000,
          minWidth: k,
          children: e(Jr, {
            dimColor: dimColor,
            italic: italic,
            wrap: j,
            children: children_2
          })
        })]
      }, index)), P = q;
    } else if (item.kind === "block") H.push(e(s, {
      marginTop: P ? 1 : 0,
      children: e(Jr, {
        dimColor: dimColor,
        italic: italic,
        wrap: j,
        children: item.code ? item.text.replace(/\n$/, "") : item.text.replace(/^\n+/, "").trimEnd()
      })
    }, index)), P = !1;else H.push(e(s, {
      flexDirection: "column",
      marginTop: P ? 1 : 0,
      children: e(xt, {
        token: item.token,
        indent: indent_2,
        listDepth: listDepth_2 + 1,
        theme: theme,
        highlight: highlight_3,
        dimColor: dimColor,
        italic: italic,
        linkCap: linkCap_3,
        tailWrap: j,
        maxProseWidth: b,
        minContentWidth: k
      })
    }, index)), P = !1;
  }), H;
}
function fn(q) {
  return q.fullWidth;
}
function mn(Q) {
  return Q.text;
}
var Xo = 500,
  Qo = /[#*`|[>\-_~]|\n[\r\n]|\r\r|\r\n[\r\n]|(?:^|[\r\n]) {0,3}(?:\d+[.)]|\+) |(?:^|[\r\n]) {0,3}=+ *(?:[\r\n]|$)|https?:\/\/|www\./;
function Dr(o) {
  return [{
    type: "paragraph",
    raw: o,
    text: o,
    tokens: [{
      type: "text",
      raw: o,
      text: o
    }]
  }];
}
function It(o, i) {
  try {
    return o.lexer(i);
  } catch (error) {
    if (error instanceof RangeError) t(`marked.lexer overflow on ${i.length} chars`, {
      level: "error"
    });else d(error);
    return Dr(i);
  }
}
function Yo(o, i, p) {
  let a = o === null ? "" : `${p ? "_" : ""}${i.length}:${UD(i)}`,
    f = o?.get(a);
  if (o !== null && f) return o.delete(a), o.set(a, f), f;
  if (!Qo.test(i)) return Dr(i);
  let m = p ? P8r : wf;
  if (o === null) return It(m, i);
  let u = It(m, i);
  if (o.size >= Xo) {
    let c = o.keys().next().value;
    if (c !== void 0) o.delete(c);
  }
  return o.set(a, u), u;
}
function Pi(o) {
  let p = w(6),
    i = Ba(),
    a;
  if (p[0] !== i.syntaxHighlightingDisabled) a = i.syntaxHighlightingDisabled ? null : JD(), p[0] = i.syntaxHighlightingDisabled, p[1] = a;else a = p[1];
  let highlight_4 = a;
  const maxProseWidth = o.capProseWidth ? i.maxProseWidth : void 0;
  let u;
  if (p[2] !== highlight_4 || p[3] !== o || p[4] !== maxProseWidth) u = e(Lr, {
    ...o,
    highlight: highlight_4,
    maxProseWidth: maxProseWidth
  }), p[2] = highlight_4, p[3] = o, p[4] = maxProseWidth, p[5] = u;else u = p[5];
  return u;
}
function Lr({
  children: children_3,
  color: color,
  dimColor: dimColor_2,
  italic: italic_2,
  monochrome: monochrome,
  hint: hint,
  promptMode = !1,
  linkSchemes: linkSchemes,
  stripPromptTags = !0,
  tailWrap: tailWrap_2,
  skipTokenCache = !1,
  highlight: highlight_5,
  maxProseWidth: k
}) {
  let [theme_2] = Zn();
  BJe();
  let linkCap_4 = sIe(),
    F = _t(),
    B = At(JPt, XPt),
    {
      markdownTokens: markdownTokens
    } = tL(),
    children_7 = X(() => {
      let _ = stripPromptTags && !promptMode ? X8(children_3) : children_3,
        A = Yo(skipTokenCache ? null : markdownTokens, _, promptMode),
        D = linkSchemes === void 0 ? A : structuredClone(A);
      if (linkSchemes !== void 0) jGt(D, linkSchemes);
      let j = [],
        V = "",
        q = "none",
        Q = !1,
        oe = !1,
        children_6 = hint ? `\xB7\xA0${hint}` : void 0;
      function J(children_4, marginTop, G) {
        j.push(e(s, {
          marginTop: marginTop,
          maxWidth: G === "prose" ? k : void 0,
          children: children_4
        }, j.length)), q = G, Q = !1;
      }
      function ue() {
        if (!children_6 || oe) return null;
        return oe = !0, r(n, {
          color: "subtle",
          children: [" ", children_6]
        });
      }
      function O(wrap, z = !1) {
        if (!V) return;
        let G = V.startsWith(`
`),
          Z = BGt(V),
          children_5 = V.replace(/^\n+/, "").trimEnd();
        if (V = "", !children_5) {
          Q = !0;
          return;
        }
        let re = q === "none" ? 0 : (q === "list" || q === "code") && !G ? 0 : 1,
          ne = e(Jr, {
            dimColor: dimColor_2,
            italic: italic_2,
            monochrome: monochrome,
            wrap: wrap,
            children: children_5
          }),
          ce = z ? ue() : null;
        J(color || ce ? r(n, {
          color: color,
          wrap: wrap,
          children: [ne, ce]
        }) : ne, re, "prose"), Q = Z;
      }
      function M(K, z) {
        O(), J(K, q === "none" ? 0 : z === "block" || q === "block" || Q ? 1 : 0, z);
      }
      let W = D.findLastIndex(K => K.type !== "space"),
        U = !F && !promptMode && Sr(D);
      if (D.forEach((K, index) => {
        if (K.type === "table") M(e(mt, {
          token: K,
          highlight: highlight_5,
          linkCap: linkCap_4
        }), "block");else if (K.type === "list" && U) M(e(ht, {
          token: K,
          theme: theme_2,
          highlight: highlight_5,
          dimColor: dimColor_2,
          italic: italic_2,
          linkCap: linkCap_4,
          tailWrap: index === W ? tailWrap_2 : void 0,
          maxProseWidth: k
        }), "list");else if (K.type === "blockquote") M(e(_r, {
          token: K,
          theme: theme_2,
          highlight: highlight_5,
          dimColor: dimColor_2,
          linkCap: linkCap_4,
          isScreenReader: F,
          maxWidth: k
        }), "block");else {
          let G = uP(K, theme_2, {
            listDepth: 0,
            orderedListNumber: null,
            parent: null,
            highlight: highlight_5,
            glueProse: !1,
            linkCap: linkCap_4,
            screenReader: F,
            promptMode: promptMode
          });
          if (k !== void 0 && K.type === "code") {
            let Z = index === W,
              wrap_2 = Z ? tailWrap_2 : void 0,
              re = Z ? ue() : null,
              ne = e(Jr, {
                dimColor: dimColor_2,
                italic: italic_2,
                monochrome: monochrome,
                wrap: wrap_2,
                children: G.replace(/\n$/, "")
              });
            M(color || re ? r(n, {
              color: color,
              wrap: wrap_2,
              children: [ne, re]
            }) : ne, "code");
          } else V += G;
        }
      }), O(tailWrap_2, !0), promptMode && j.length === 0 && _.trim()) V = _, O(tailWrap_2, !0);
      if (children_6 && !oe) J(e(n, {
        color: "subtle",
        children: children_6
      }), 0, "prose");
      return j;
    }, [children_3, color, dimColor_2, italic_2, monochrome, hint, linkSchemes, stripPromptTags, highlight_5, theme_2, linkCap_4, F, tailWrap_2, skipTokenCache, markdownTokens, promptMode, B, k]);
  return e(s, {
    flexDirection: "column",
    children: children_7
  });
}
var Hr = 2;
function _r(o) {
  let x = w(15),
    {
      token: token_5,
      theme: theme_3,
      highlight: highlight_6,
      dimColor: dimColor_3,
      linkCap: linkCap_5,
      isScreenReader: u,
      maxWidth: maxWidth
    } = o,
    h,
    y;
  if (x[0] !== dimColor_3 || x[1] !== highlight_6 || x[2] !== u || x[3] !== linkCap_5 || x[4] !== maxWidth || x[5] !== theme_3 || x[6] !== token_5.tokens) {
    y = hn;
    F: {
      let b;
      if (x[9] !== highlight_6 || x[10] !== u || x[11] !== linkCap_5 || x[12] !== maxWidth || x[13] !== theme_3) b = k => ({
        code: k.type === "code",
        fullWidth: maxWidth !== void 0 && Mr(k),
        text: uP(k, theme_3, {
          listDepth: 0,
          orderedListNumber: null,
          parent: null,
          highlight: highlight_6,
          glueProse: !1,
          linkCap: linkCap_5,
          screenReader: u
        })
      }), x[9] = highlight_6, x[10] = u, x[11] = linkCap_5, x[12] = maxWidth, x[13] = theme_3, x[14] = b;else b = x[14];
      let E = token_5.tokens.map(b);
      if (maxWidth === void 0 || u || !E.some(fn)) {
        let children_8 = pe.italic(E.map(mn).join("").replace(/^\n+/, "").trimEnd());
        y = e(s, {
          borderStyle: "quote",
          borderTop: !1,
          borderBottom: !1,
          borderRight: !1,
          borderDimColor: !0,
          paddingLeft: 1,
          maxWidth: maxWidth,
          children: e(Jr, {
            dimColor: dimColor_3,
            children: children_8
          })
        });
        break F;
      }
      let B = [];
      for (const H of E) {
        let P = B.at(-1);
        if (P && !P.fullWidth && !H.fullWidth) P.text = P.text + H.text;else B.push({
          ...H
        });
      }
      let children_9 = [];
      let A = 0;
      for (const D of B) {
        let j = D.code ? D.text : D.text.replace(/^\n+/, "");
        let V = D.code ? j.replace(/\n$/, "") : j.trimEnd();
        if (!V) {
          A = A + Gt(D.text, `
`);
          continue;
        }
        A = A + (D.text.length - j.length), children_9.push(e(s, {
          marginTop: children_9.length > 0 ? Math.max(0, A - 1) : 0,
          maxWidth: D.fullWidth ? void 0 : maxWidth - Hr,
          children: e(Jr, {
            dimColor: dimColor_3,
            children: pe.italic(V)
          })
        }, children_9.length)), A = Gt(j.slice(V.length), `
`);
      }
      h = e(s, {
        flexDirection: "column",
        borderStyle: "quote",
        borderTop: !1,
        borderBottom: !1,
        borderRight: !1,
        borderDimColor: !0,
        paddingLeft: 1,
        children: children_9
      });
    }
    x[0] = dimColor_3, x[1] = highlight_6, x[2] = u, x[3] = linkCap_5, x[4] = maxWidth, x[5] = theme_3, x[6] = token_5.tokens, x[7] = h, x[8] = y;
  } else h = x[7], y = x[8];
  if (y !== hn) return y;
  return h;
}
function Mr(o) {
  let i = [o];
  for (let p = i.pop(); p !== void 0; p = i.pop()) {
    if (p.type === "code" || p.type === "table") return !0;
    let a = p.type === "list" ? p.items : p.type === "blockquote" || p.type === "list_item" ? p.tokens ?? [] : [];
    for (let f of a) i.push(f);
  }
  return !1;
}
var be = 4096;
function Ar() {
  return {
    chunks: [],
    frozenSource: "",
    gapAfterChunks: !1,
    stablePrefix: "",
    openFence: null
  };
}
var Wr = /^ {0,3}(`{3,}|~{3,})([^\n]*)$/gm;
function Br(o, i, p) {
  let a = o.match(/^`+|^~+/)?.[0] ?? "";
  return i[0] === a[0] && i.length >= a.length && p.trim() === "";
}
function an(o, i) {
  let p = o;
  for (let a of i.matchAll(Wr)) if (p === null) p = a[1] + a[2].trim();else if (Br(p, a[1], a[2])) p = null;
  return p;
}
function ln(o, i) {
  for (let p of o.matchAll(Wr)) {
    let a = p.index + p[0].length;
    if (o[a] !== `
`) continue;
    if (Br(i, p[1], p[2])) return a + 1;
  }
  return -1;
}
function Ge(o, i, p, a) {
  let f = i.substring(0, p),
    children_10 = (o.openFence !== null ? o.openFence + `
` : "") + f;
  return o.chunks = [...o.chunks, e(s, {
    marginTop: o.chunks.length > 0 && o.gapAfterChunks ? 1 : 0,
    children: e(Pi, {
      skipTokenCache: !0,
      capProseWidth: !0,
      children: children_10
    })
  }, o.chunks.length)], o.openFence = an(o.openFence, f), o.frozenSource += f, o.gapAfterChunks = a, o.stablePrefix = "", i.substring(p);
}
var Fr = 1536;
function Nr(o) {
  let i = o.lastIndexOf(`
`);
  if (i < be / 2) i = o.lastIndexOf(" ", o.length - Fr);
  if (i < be / 2) {
    i = o.length - Fr;
    let p = o.charCodeAt(i + 1);
    if (p >= 56320 && p <= 57343) i--;
  }
  return i + 1;
}
function uer({
  children: children_11,
  hideTrailingLine = !1
}) {
  BJe();
  let p = X8(children_11),
    current = T(Ar()).current;
  if (!p.startsWith(current.frozenSource)) Object.assign(current, Ar());
  let m = p.substring(current.frozenSource.length);
  if (!m.startsWith(current.stablePrefix)) current.stablePrefix = "";
  if (current.openFence !== null) {
    let E = ln(m, current.openFence);
    if (E >= 0) m = Ge(current, m, E, !0);else if (m.length > be) m = Ge(current, m, Nr(m), !1);
  }
  if (current.openFence === null) {
    let E = current.stablePrefix.length,
      C = It(wf, m.substring(E)),
      F = C.length - 1;
    while (F >= 0 && C[F].type === "space") F--;
    let B = 0;
    for (let P = 0; P < F; P++) B += C[P].raw.length;
    if (B > 0) current.stablePrefix = m.substring(0, E + B);
    if (current.stablePrefix.length > be) m = Ge(current, m, current.stablePrefix.length, !0);
    if (m.length - current.stablePrefix.length > be) {
      let P = current.stablePrefix.length,
        _ = Nr(m.substring(P));
      m = Ge(current, m, P + _, !1);
    }
  }
  let u = current.stablePrefix,
    c = m.substring(u.length),
    x = u.trim() !== "",
    children_12 = c && current.openFence !== null ? current.openFence + `
` + c : c,
    y = !c.endsWith(`
`),
    children_13 = c ? e(Pi, {
      tailWrap: hideTrailingLine && y ? "wrap-stream" : void 0,
      skipTokenCache: !0,
      capProseWidth: !0,
      children: children_12
    }) : null;
  if (current.chunks.length === 0) return r(s, {
    flexDirection: "column",
    gap: 1,
    children: [x && e(Pi, {
      skipTokenCache: !0,
      capProseWidth: !0,
      children: u
    }), children_13]
  });
  let marginTop_2 = current.gapAfterChunks ? 1 : 0;
  return r(s, {
    flexDirection: "column",
    children: [current.chunks, x && e(s, {
      marginTop: marginTop_2,
      children: e(Pi, {
        skipTokenCache: !0,
        capProseWidth: !0,
        children: u
      })
    }), children_13 && e(s, {
      marginTop: x ? 1 : marginTop_2,
      children: children_13
    })]
  });
}
N();
var Ce = (o, i) => ot(Uen(o), i);
var he = o => o.map(item => ({
  ...item,
  lines: item.lines.map(item => item.slice(0, 1) + Y0(item.slice(1)))
}));
var qe = (o, i) => he(o).map(item => {
  let a = Math.max(1, i - jqe(item));
  return {
    ...item,
    lines: item.lines.map(item => item.slice(0, 1) + Ce(item.slice(1), a))
  };
});
function Ve(o, i, p) {
  let a = o.replace(/\n$/, "").split(`
`),
    m = Math.max(1, i - (p !== void 0 ? String(p + a.length - 1).length + 2 : 0));
  return a.map(item => Ce(item, m)).join(`
`);
}
N();
var ze = 80;
var Xe = ({
  language: language,
  path: path
}) => language === void 0 ? path ?? "" : `source.${language}`;
function Je(o) {
  let u = w(21),
    {
      source: source,
      startLine: startLine,
      format: format,
      wrap: wrap_3
    } = o,
    ref = T(null),
    c;
  if (u[0] === S) c = () => ref.current ? Math.floor(Xi(ref.current).width) : 0, u[0] = c;else c = u[0];
  let x = od(c),
    width_2 = x > 0 ? x : ze,
    y;
  if (u[1] !== o) y = Xe(o), u[1] = o, u[2] = y;else y = u[2];
  let filePath = y,
    k = wrap_3 === "truncate-end",
    E;
  if (u[3] !== format || u[4] !== source) E = bqe(source, format), u[3] = format, u[4] = source, u[5] = E;else E = u[5];
  let C = E,
    F = C?.kind === "hunks" ? C.hunks : void 0,
    B;
  if (u[6] !== width_2 || u[7] !== k || u[8] !== F) B = F && (k ? qe(F, width_2) : he(F)), u[6] = width_2, u[7] = k, u[8] = F, u[9] = B;else B = u[9];
  let hunks = B,
    P;
  if (u[10] !== width_2 || u[11] !== k || u[12] !== source || u[13] !== startLine) P = k ? Ve(source, width_2, startLine) : source, u[10] = width_2, u[11] = k, u[12] = source, u[13] = startLine, u[14] = P;else P = u[14];
  let code = P,
    A;
  if (u[15] !== code || u[16] !== width_2 || u[17] !== filePath || u[18] !== hunks || u[19] !== startLine) A = e(s, {
    ref: ref,
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    children: hunks ? e(Lj, {
      hunks: hunks,
      dim: !1,
      width: width_2,
      filePath: filePath,
      firstLine: null
    }) : e(d_, {
      code: code,
      filePath: filePath,
      width: width_2,
      startLine: startLine,
      lineNumbers: startLine !== void 0
    })
  }), u[15] = code, u[16] = width_2, u[17] = filePath, u[18] = hunks, u[19] = startLine, u[20] = A;else A = u[20];
  return A;
}
function qr(o, i, p) {
  let a = Fen(o, i);
  return a !== void 0 && a.component === p.component ? a : p;
}
N();
var Ie = () => dt().hoverGroups;
var Ze = (o, i) => Ie().setState(p => {
  let a = (p.get(o) ?? 0) + i,
    f = new Map(p);
  return a > 0 ? f.set(o, a) : f.delete(o), f;
});
function Ht() {
  let o;
  function enter(a) {
    if (a !== void 0 && o === void 0) o = a, Ze(a, 1);
  }
  function leave() {
    let a = o;
    if (a !== void 0) o = void 0, Ze(a, -1);
  }
  return {
    enter: enter,
    leave: leave,
    regroup: a => {
      if (o !== void 0 && o !== a) leave(), enter(a);
    }
  };
}
function vt(plugin, i) {
  let scope = i?.scope;
  return plugin !== void 0 && scope !== void 0 ? {
    plugin: plugin,
    scope: scope
  } : void 0;
}
function et(o) {
  let {
    scope: scope_2,
    ...p
  } = o;
  return p;
}
N();
function tt(o, i) {
  let p = o && yVn(o),
    isHot = xe(p === void 0 ? null : Ie(), u => p !== void 0 && (u.get(p) ?? 0) > 0) ?? !1,
    f = T(null);
  f.current ??= Ht();
  let current_2 = f.current;
  return R(() => {
    current_2.regroup(p);
  }, [current_2, p]), R(() => current_2.leave, [current_2, i]), {
    isHot: isHot,
    onMouseEnter: () => current_2.enter(p),
    onMouseLeave: current_2.leave
  };
}
N();
var Ot = ["color", "backgroundColor", "borderColor"];
var rt = {
  black: "#000000",
  red: "#e5484d",
  green: "#46a758",
  yellow: "#f5d90a",
  blue: "#3e63dd",
  magenta: "#d6409f",
  cyan: "#05a2c2",
  white: "#ffffff",
  gray: "#8b8d98",
  grey: "#8b8d98",
  blackBright: "#6e6e6e",
  redBright: "#ff6369",
  greenBright: "#5bd07f",
  yellowBright: "#ffe629",
  blueBright: "#5b8def",
  magentaBright: "#ee6ac2",
  cyanBright: "#3ec2e0",
  whiteBright: "#ffffff"
};
var Mt = o => Object.hasOwn(rt, o) ? rt[o] : void 0;
function Ee(o) {
  if (!o) return null;
  let i = {
    ...o
  };
  for (let p of Ot) {
    let a = i[p],
      f = typeof a === "string" ? Mt(a) : void 0;
    if (f !== void 0) i[p] = f;
  }
  return i;
}
N();
var He = Vt(!1);
function Ft(o, i, p) {
  let a = Pe(He),
    f = tt(o, p),
    overrides = (o ? f.isHot : a) && i ? Ee(et(i)) ?? {} : {};
  return o ? {
    overrides: overrides,
    handlers: {
      onMouseEnter: f.onMouseEnter,
      onMouseLeave: f.onMouseLeave
    }
  } : {
    overrides: overrides,
    handlers: {}
  };
}
function Nt({
  isLive: isLive,
  elementKey: elementKey,
  layout: layout,
  hover: hover,
  group: group,
  children: children_14
}) {
  let [u, c] = g(!1),
    x = tt(group, "Box"),
    value = isLive && u,
    b = hover !== void 0 && (group ? x.isHot : value) ? {
      ...layout,
      ...et(hover)
    } : layout;
  return ad(He.Provider, {
    value: value
  }, ad(s, {
    ...Ee(b),
    elementKey: elementKey,
    onMouseEnter: () => {
      c(!0), x.onMouseEnter();
    },
    onMouseLeave: () => {
      c(!1), x.onMouseLeave();
    }
  }, ...children_14));
}
N();
function Dt({
  isInline: isInline,
  props: props,
  hover: hover_2,
  group: group_2,
  children: children_15
}) {
  let m = isInline ? "Text" : "Box",
    {
      overrides: overrides_2,
      handlers: handlers
    } = Ft(group_2, hover_2, m);
  return ad(isInline ? n : s, {
    ...Ee(props),
    ...overrides_2,
    ...handlers
  }, ...children_15);
}
var Wt = 12;
N();
N();
var IGt = Vt(null);
N();
var OGt = Vt(null);
N();
N();
var PGt = Vt(null);
var MGt = o => i => {
  let p = i.isWindowActivation || i.droppedAsStray;
  if (i.hyperlinkUrl !== void 0) i.allowDefault();
  if (!p) o();
};
N();
var DGt = Vt(null);
N();
var LGt = Vt(null);
function me(o) {
  let {
      plugin: plugin_2,
      handle: handle
    } = o,
    a = Pe(LGt),
    f = Pe(DGt),
    m = Pe(PGt),
    hasKeyboardFocus = a !== null && a.plugin === plugin_2 && a.handle === handle;
  return {
    hasKeyboardFocus: hasKeyboardFocus,
    ref: hasKeyboardFocus ? f ?? void 0 : void 0,
    onClick: m ? MGt(() => m({
      plugin: plugin_2,
      handle: handle
    })) : void 0
  };
}
function Bt(o) {
  let {
      plugin: i,
      handle: handle_2,
      element: a,
      placeholder: placeholder
    } = o,
    m = me({
      plugin: i,
      handle: handle_2
    }),
    u = Pe(IGt),
    c = ve(),
    x = Pe(OGt) ?? c.columns,
    value_2 = u?.textOf(i, a) ?? o.value ?? "",
    [y, onChangeCursorOffset] = g(value_2.length),
    children_16 = o.label === void 0 ? "" : `${o.label}: `,
    children_17 = ` \u23CE ${o.submitLabel ?? "submit"}`,
    bold = u !== null && m.hasKeyboardFocus;
  return R(() => {
    if (bold) onChangeCursorOffset(Number.MAX_SAFE_INTEGER);
  }, [bold]), r(s, {
    ref: m.ref,
    flexDirection: "row",
    flexShrink: 0,
    elementKey: a,
    elementPlugin: i,
    onClick: m.onClick,
    children: [children_16 !== "" && e(n, {
      bold: bold,
      children: children_16
    }), bold ? e(Qn, {
      value: value_2,
      onChange: F => u.edit({
        plugin: i,
        handle: handle_2,
        element: a
      }, F),
      placeholder: placeholder,
      columns: Math.max(Wt, x - ie(children_16) - ie(children_17)),
      cursorOffset: Math.min(y, value_2.length),
      onChangeCursorOffset: onChangeCursorOffset,
      focus: !0,
      showCursor: !0,
      multiline: !1,
      disableEscapeDoublePress: !0
    }) : e(n, {
      dimColor: value_2 === "",
      wrap: "truncate-end",
      children: value_2 === "" ? placeholder ?? "" : value_2
    }), bold && e(n, {
      dimColor: !0,
      children: children_17
    })]
  });
}
N();
var Lbe = (o, link) => void Cie(`ui.press ${o.plugin}`, Nen({
  ...o,
  surface: "terminal",
  link: link
}));
var linkSchemes_2 = new Set(["https", "http", "file"]);
function jt({
  text: o,
  dimColor: dimColor_4,
  press: press,
  elementKey: elementKey_2,
  pressableLinks: pressableLinks
}) {
  let m = Yt(),
    u = KC(),
    [c] = g(() => m.now()),
    x = T(null),
    h = T({
      press: press,
      pressableLinks: pressableLinks
    }),
    y = ad(Pi, {
      dimColor: dimColor_4,
      linkSchemes: linkSchemes_2,
      stripPromptTags: !1,
      children: o
    });
  if (h.current = {
    press: press,
    pressableLinks: pressableLinks
  }, R(() => () => x.current?.(), []), press === void 0) return elementKey_2 === void 0 ? y : ad(s, {
    flexDirection: "column",
    elementKey: elementKey_2
  }, y);
  return ad(s, {
    flexDirection: "column",
    elementKey: elementKey_2,
    elementPlugin: press.plugin,
    onClick: b => {
      let k = b.hyperlinkUrl;
      if (!(k !== void 0 && !(b.mods.ctrl || b.mods.alt) && LFn(k, pressableLinks))) {
        b.allowDefault();
        return;
      }
      if (b.isWindowActivation || m.now() - c < uIe) {
        b.dropAsStray();
        return;
      }
      b.stopImmediatePropagation(), x.current?.();
      let F = u.subscribe(() => {
          if (u.hasSelection()) x.current?.();
        }),
        B = m.setTimeout(() => {
          x.current = null, F();
          let current_3 = h.current;
          if (current_3.press !== void 0 && LFn(k, current_3.pressableLinks) && current_3.press) Lbe(current_3.press, {
            href: k
          });
        }, cVt);
      x.current = () => {
        x.current = null, F(), B();
      };
    }
  }, y);
}
N();
N();
var Vr = (o, i) => o.rank > i.rank || o.rank === i.rank && o.seq > i.seq;
function zr() {
  let o = [],
    i = 0;
  function remove(a) {
    let f = o.indexOf(a);
    if (f >= 0) o.splice(f, 1);
  }
  return {
    add: a => {
      remove(a), a.seq = ++i, o.push(a);
    },
    remove: remove,
    winnerOf: a => o.filter(item => item.action === a).reduce((acc, item) => acc === void 0 || Vr(item, acc) ? item : acc, void 0),
    held: () => [...o],
    clear: () => {
      o.length = 0;
    }
  };
}
var $t = Rt(zr(), o => o.clear());
var ds = (o, i) => L(i.filter(item => item.action === o).map(item => item.context));
var hs = o => o === "Pane" ? 2 : o === "AbovePrompt" ? 1 : 0;
N();
var ee = Vt(null);
function Ut(o) {
  let {
      plugin: plugin_3,
      handle: handle_3,
      action: action
    } = o,
    f = Pe(ee),
    m = Ya(),
    u = pP(),
    rank = hs(f?.component),
    [x] = g(() => ({
      action: action,
      rank: rank,
      seq: 0,
      plugin: plugin_3,
      handle: handle_3
    })),
    h = m?.bindings,
    y = X(() => ds(action, h ?? []), [action, h]);
  sn(() => {
    x.plugin = plugin_3, x.handle = handle_3, x.rank = rank;
  }), R(() => (x.action = action, $t.add(x), () => $t.remove(x)), [action, x]), R(() => {
    if (!m || u) return;
    let b = y.map(k => m.registerHandler({
      action: action,
      context: k,
      handler: () => {
        let E = $t.winnerOf(action);
        if (E === void 0) return !1;
        Lbe({
          plugin: E.plugin,
          handle: E.handle
        });
      },
      singleKey: !0,
      fallback: !0
    }));
    return () => {
      for (let k of b) k();
    };
  }, [m, action, y, u]);
}
function qt(o) {
  return Ut(o), null;
}
function ivn(o) {
  if (!o) return;
  let i = mT(o),
    p = i.activeElement ?? void 0;
  while (p && p !== o) p = p.parentNode;
  if (p === o) i.blur();
}
function zt({
  plugin: o,
  handle: handle_4,
  element: p,
  label: label,
  hotkey: hotkey,
  action: action_2,
  plain: plain,
  dimColor: dimColor_5,
  variant: variant,
  hover: hover_3
}) {
  let {
      hasKeyboardFocus: hasKeyboardFocus_2,
      ref: ref_2
    } = me({
      plugin: o,
      handle: handle_4
    }),
    ref_3 = T(null),
    {
      overrides: overrides_3,
      handlers: handlers_2
    } = Ft(vt(o, hover_3), hover_3, "Box");
  return ad(s, {
    ref: ref_3,
    flexShrink: 0,
    alignSelf: "flex-start",
    elementKey: p,
    elementPlugin: o,
    onClick: F => {
      ivn(ref_3.current), F.stopImmediatePropagation();
    },
    ...handlers_2
  }, action_2 !== void 0 && ad(qt, {
    plugin: o,
    handle: handle_4,
    action: action_2
  }), ad(nL, {
    ref: ref_2,
    tabIndex: -1,
    flexShrink: 0,
    alignSelf: "flex-start",
    onAction: () => Lbe({
      plugin: o,
      handle: handle_4
    }),
    children: F => {
      let inverse = F.focused || F.hovered || hasKeyboardFocus_2,
        dimColor_6 = dimColor_5 === !0 && !inverse,
        P = plain === !0,
        _ = hotkey === void 0;
      return P ? ad(n, {
        inverse: inverse,
        dimColor: dimColor_6,
        ...overrides_3
      }, _ ? label : ad(n, {
        color: "suggestion"
      }, hotkey), _ ? "" : ": ", _ ? "" : label) : ad(n, {
        inverse: inverse,
        bold: !0,
        dimColor: dimColor_6,
        color: variant === "primary" ? "suggestion" : void 0,
        ...overrides_3
      }, `[ ${label} ]`);
    }
  }));
}
N();
N();
function Qr(o) {
  switch (o) {
    case 0:
      return "left";
    case 1:
      return "middle";
    case 2:
      return "right";
    case void 0:
      return;
  }
}
N();
function Yr(o) {
  if (o === null) return {
    every: (i, p) => {
      let a = setInterval(p, Math.max(i, Xg));
      return () => clearInterval(a);
    }
  };
  return {
    every: (i, p) => {
      let a = o.now();
      return o.subscribeKeepAlive(() => {
        let f = o.now();
        if (f - a >= i) a = f, p();
      });
    }
  };
}
var Zr = Object.freeze({
  status: "loading"
});
var eo = Object.freeze({
  id: "",
  plugin: "",
  module: "",
  subscribe: () => () => {
    return;
  },
  getSnapshot: () => Zr,
  setProps: () => {
    return;
  },
  resize: () => {
    return;
  },
  pointer: () => {
    return;
  },
  key: () => {
    return;
  },
  acceptsPointer: () => !1,
  acceptsKeys: () => !1,
  release: () => {
    return;
  }
});
var ge = "detached";
function to(o) {
  let {
      plugin: plugin_4,
      elementKey: p,
      props: props_2
    } = o,
    f = Pe(ee),
    m = Pe(iS),
    [u, c] = g(eo),
    [props_3] = g(() => props_2);
  return sn(() => {
    let h = r7r.acquire({
      plugin: plugin_4,
      component: f?.component ?? "AbovePrompt",
      requestId: f?.requestId ?? ge,
      surface: "terminal",
      key: p,
      module: o.module,
      props: props_3,
      clock: Yr(m)
    });
    return c(h), () => h.release();
  }, [plugin_4, o.module, p, f, m, props_3]), u;
}
N();
N();
function Gyt(o) {
  let i = T(null),
    {
      subscribeClicks: subscribeClicks
    } = Pe(Y_);
  return R(() => subscribeClicks((a, f) => {
    let m = a ?? void 0;
    while (m && m !== i.current) m = m.parentNode;
    if (!m && f?.isWindowActivation !== !0) o();
  }), [o, subscribeClicks]), i;
}
var ro = [["upArrow", "up"], ["downArrow", "down"], ["leftArrow", "left"], ["rightArrow", "right"], ["pageUp", "pageup"], ["pageDown", "pagedown"], ["home", "home"], ["end", "end"], ["return", "return"], ["tab", "tab"], ["backspace", "backspace"], ["delete", "delete"]];
function oo(o, i) {
  if (i.wheelUp || i.wheelDown) return;
  let key = ro.find(([f]) => i[f])?.[1] ?? (o === " " ? "space" : o);
  return key === "" ? void 0 : {
    key: key,
    ...(i.ctrl && {
      ctrl: !0
    }),
    ...(i.shift && {
      shift: !0
    }),
    ...(i.meta && {
      meta: !0
    })
  };
}
function no(o) {
  let i = se(() => n7r(o.id), [o]),
    p = Gyt(i),
    a = xe(qIe, m => m.focusedId) === o.id,
    f = xe(Da(), m => m.focusedId);
  return R(() => {
    if (f !== null && a) pKt(null);
  }, [f, a]), R(() => i, [i]), K_((m, u, c) => {
    let x = qIe.getState().focusedId === o.id,
      h = u.escape || u.ctrl && (m === "c" || m === "d");
    if (!x) return !1;
    if (!o.acceptsKeys()) return i(), !1;
    if (h) return pKt(null), u.escape;
    let y = oo(m === "" ? c : m, u);
    if (y === void 0) return !1;
    return o.key(y), !0;
  }), p;
}
function so(o) {
  let {
      rebuild: rebuild,
      props: props_4,
      width: width_3,
      height: height,
      flexGrow: flexGrow,
      plugin: u,
      elementKey: elementKey_3
    } = o,
    x = to(o),
    ref_4 = no(x);
  R(() => {
    x.setProps(props_4);
  }, [x, props_4]);
  let y = At(x.subscribe, x.getSnapshot),
    b = od(() => ref_4.current === null ? 0 : Xi(ref_4.current).width),
    k = od(() => ref_4.current === null ? 0 : Xi(ref_4.current).height);
  R(() => {
    x.resize(b, k);
  }, [x, b, k]);
  let E = T({
      x: 0,
      y: 0
    }),
    C = y.status === "drawn",
    F = C && x.acceptsPointer(),
    B = F || C && x.acceptsKeys();
  Fvn(F);
  function onPointer(P) {
    if (P.type === "down" && x.acceptsKeys()) l9(null), pKt(x.id);
    E.current = {
      x: P.localCol,
      y: P.localRow
    }, x.pointer({
      type: P.type,
      x: P.localCol,
      y: P.localRow,
      ...(P.fine && {
        fine: {
          x: P.fine.col,
          y: P.fine.row
        }
      }),
      ...(P.button !== void 0 && {
        button: Qr(P.button)
      }),
      ...(P.shift && {
        shift: !0
      }),
      ...(P.alt && {
        alt: !0
      }),
      ...(P.ctrl && {
        ctrl: !0
      })
    });
  }
  return ad(s, {
    ref: ref_4,
    flexDirection: "column",
    flexShrink: 0,
    width: width_3,
    height: height,
    flexGrow: flexGrow,
    overflow: "hidden",
    elementKey: elementKey_3,
    elementPlugin: u,
    ...(B && {
      onPointer: onPointer,
      onMouseEnter: () => {
        x.pointer({
          type: "enter",
          ...E.current
        });
      },
      onMouseLeave: () => {
        x.pointer({
          type: "leave",
          ...E.current
        });
      }
    })
  }, C && rebuild(y.tree), y.status === "failed" && ad(n, {
    dimColor: !0,
    wrap: "truncate-end"
  }, y.text));
}
N();
N();
function io(o) {
  let {
      hasRoot: hasRoot,
      placeholders: placeholders,
      hasId: hasId,
      isReference: isReference,
      files: files
    } = o,
    u = placeholders.state === "settled" && placeholders.value,
    c = !isReference || files.state === "settled" && files.value,
    x = !c && files.state !== "settled",
    h = files.state === "settled" ? files.source : "";
  if (!hasRoot) return "the Image is not drawn under a terminal root";
  if (!u) return `the Image draws its alt here: the terminal draws no placeholder images (${placeholders.source})`;
  if (!hasId) return "the Image draws its alt here: every 8-bit image id is in use";
  return x ? "the terminal has not yet said whether it reads files on this machine; asked now, blit again" : c ? void 0 : `the Image draws its alt here: this terminal cannot read files on this machine (${h}); a { file } or { shm } source shows nothing, bytes still draw`;
}
import { unlink as Bs, writeFile as Ks } from "fs/promises";
var js = 24,
  $s = 4,
  mode = 384,
  Gs = new Set(["EAGAIN", "EBUSY", "EINTR", "EMFILE", "ENFILE", "ENOSPC"]);
async function po(o, i) {
  let p = i.allocate(js);
  if (p === void 0) return Qt("probe: no image id to ask under");
  let a;
  try {
    a = BJ("tty-graphics-protocol", ".rgba"), await Ks(a, Buffer.alloc($s), {
      mode: mode
    });
    let [f, m] = await Promise.all([o.send({
      request: i9r(p, a),
      match: u => u.type === "kittyGraphics" && u.id === p
    }), o.flush()]);
    return f !== void 0 ? Xt({
      value: f.message === "OK",
      source: `probe: file query answered ${f.message}`
    }) : m ? Xt({
      value: !1,
      source: "probe: no reply to the file query"
    }) : Qt("probe: the query was dropped");
  } catch (error) {
    let m = v(error) ?? "error",
      source_2 = `probe: could not write its file (${m})`;
    return Gs.has(m) ? Qt(source_2) : Xt({
      value: !1,
      source: source_2
    });
  } finally {
    if (i.free(p), a !== void 0) await Bs(a).catch(() => {});
  }
}
function Xt(answer) {
  return {
    kind: "answered",
    answer: answer
  };
}
function Qt(source_3) {
  return {
    kind: "inconclusive",
    source: source_3
  };
}
function nt(o, i) {
  let p = I_t();
  if (!(o !== null && i !== null && okn() && p.begin())) return;
  po(o, i).then(f => {
    let source_4 = (f.kind === "inconclusive" ? f.source : f.answer.source).replace(A6, "?");
    if (f.kind === "inconclusive") {
      t(`Terminal image files: not known yet (${source_4}); asked again when next needed`), p.unask();
      return;
    }
    let u = f.answer.value ? "yes" : "no";
    t(`Terminal image files: ${u} (${source_4})`), p.answer({
      value: f.answer.value,
      source: source_4
    });
  }).catch(f => t(`Terminal image files: a listener threw (${f})`, {
    level: "warn"
  }));
}
var Jt = o => id => o9r({
  id: id,
  source: Sfo(o.source),
  columns: o.columns,
  rows: o.rows
});
var ao = 5000;
function lo(o) {
  let {
      plugin: plugin_5,
      requestId: requestId,
      key: key_2
    } = o,
    f = key_2 === void 0 ? "Image" : `Image "${key_2}"`,
    m = "",
    u = -1 / 0;
  return c => {
    let x = Date.now();
    if (c === m && x - u < ao) return;
    m = c, u = x, t(`${f} (${plugin_5}) in ${requestId}: the terminal refused its source: ` + c.replace(A6, "?"), {
      level: "warn"
    });
  };
}
var st = {
  reactKey: void 0,
  source: void 0,
  box: void 0
};
N();
var Me = {
  indexed: 2,
  truecolor: 3,
  smallIdWidth: 8,
  wideIdWidth: 24
};
function fo() {
  let [o, i] = g(okn);
  R(() => m9r(i), []);
  let p = !o || pe.level < Me.indexed,
    a = pe.level >= Me.truecolor;
  return p ? void 0 : a ? Me.wideIdWidth : Me.smallIdWidth;
}
N();
function mo(o, i, p) {
  let {
      plugin: plugin_6,
      requestId: requestId_2,
      key: key_3
    } = o,
    {
      columns: columns_3,
      rows: rows_2
    } = i;
  sn(() => {
    if (key_3 === void 0) return;
    return $Wo(UWo({
      plugin: plugin_6,
      requestId: requestId_2,
      key: key_3
    }, {
      columns: columns_3,
      rows: rows_2
    }, p));
  }, [plugin_6, requestId_2, key_3, columns_3, rows_2, p]);
}
N();
function uo(o) {
  let {
      terminalImages: terminalImages
    } = ek(),
    {
      internal_querier: internal_querier
    } = wA(),
    a = I_t(),
    [f, m] = g(() => a.get());
  return R(() => (m(a.get()), a.onSettle(() => m(a.get()))), [a]), R(() => {
    if (o) nt(internal_querier, terminalImages), m(a.get());
  }, [o, internal_querier, terminalImages, a]), f;
}
function co(o) {
  let {
      plugin: plugin_7,
      elementKey: p,
      source: source_5,
      columns: columns_4,
      rows: rows_3
    } = o,
    {
      terminalImages: u
    } = ek(),
    {
      internal_querier: internal_querier_2
    } = wA(),
    requestId_3 = Pe(ee)?.requestId ?? ge,
    y = fo(),
    b = KRt(source_5),
    k = uo(b && y !== void 0),
    E = !b || k.state === "settled" && k.value,
    [C, F] = g(),
    [B, H] = g(),
    P = T(st);
  return sn(() => {
    let id_2 = u === null || y === void 0 ? void 0 : u.allocate(y, lo({
      plugin: plugin_7,
      requestId: requestId_3,
      key: p
    }));
    if (u === null || id_2 === void 0) return;
    return F({
      id: id_2,
      images: u
    }), () => {
      u.free(id_2), P.current = st, F(void 0), H(void 0);
    };
  }, [u, y, plugin_7, requestId_3, p]), sn(() => {
    if (C === void 0) return;
    if (!E) {
      P.current = st, H(void 0);
      return;
    }
    let reactKey = $n(source_5),
      box = `${columns_4}x${rows_3}`,
      D = reactKey !== P.current.reactKey,
      source_6 = D ? source_5 : P.current.source ?? source_5,
      V = !D && box === P.current.box,
      q = !D && O_r(source_6);
    if (V || q) return;
    let Q = C.images.transmit(C.id, Jt({
      source: source_6,
      columns: columns_4,
      rows: rows_3
    }), {
      resend: !O_r(source_6)
    });
    P.current = {
      reactKey: reactKey,
      source: source_6,
      box: box
    }, H(Q ? C.id : void 0);
  }, [C, source_5, E, columns_4, rows_3]), mo({
    plugin: plugin_7,
    requestId: requestId_3,
    key: p
  }, {
    columns: columns_4,
    rows: rows_3
  }, se(source_7 => {
    let isReference_2 = KRt(source_7);
    if (isReference_2) nt(internal_querier_2, u);
    let D = io({
      hasRoot: u !== null,
      placeholders: dM().get("kittyGraphics"),
      hasId: C !== void 0,
      isReference: isReference_2,
      files: I_t().get()
    });
    if (D !== void 0 || C === void 0) return D;
    let j = O_r(source_7);
    if (j && C.images.isBackedUp(C.id)) return "the surface has not written its last frames (paused or busy); the object was not sent, unlink it and blit again later";
    if (!C.images.transmit(C.id, Jt({
      source: source_7,
      columns: columns_4,
      rows: rows_3
    }), {
      resend: !j
    })) return "the terminal sink refused the source";
    P.current = {
      ...P.current,
      source: source_7,
      box: `${columns_4}x${rows_3}`
    }, H(C.id);
    return;
  }, [internal_querier_2, u, C, columns_4, rows_3])), B;
}
function xo(o) {
  let {
      plugin: i,
      elementKey: elementKey_4,
      columns: a,
      rows: f,
      alt: alt
    } = o,
    u = co(o),
    rawText = X(() => u === void 0 ? "" : r9r(u, a, f), [u, a, f]);
  if (u === void 0) return ad(n, {
    dimColor: !0
  }, alt);
  return ad(s, {
    flexShrink: 0,
    width: a,
    height: f,
    overflow: "hidden",
    ...(elementKey_4 !== void 0 && {
      elementKey: elementKey_4,
      elementPlugin: i
    })
  }, ad("ink-raw-ansi", {
    rawText: rawText,
    rawWidth: a,
    rawHeight: f
  }));
}
N();
N();
function ho(o) {
  let i = -1 / 0,
    p = null,
    a = null,
    f = 1 / 0;
  function m() {
    if (a = null, f = 1 / 0, p !== null) {
      let x = p;
      p = null, i = Date.now(), o(x);
    }
  }
  function u(x) {
    let h = Date.now() + x;
    if (a !== null && f <= h) return;
    if (a !== null) clearTimeout(a);
    f = h, a = setTimeout(m, x);
  }
  function schedule(x, h) {
    let y = Math.max(h, i + Xg - Date.now());
    if (p = x, y <= 0) {
      if (a !== null) clearTimeout(a);
      m();
    } else u(y);
  }
  return {
    paint: x => {
      schedule(x, 0);
    },
    schedule: schedule,
    cancel: () => {
      if (a !== null) clearTimeout(a);
      a = null, f = 1 / 0, p = null;
    }
  };
}
var yo = (o, i, paint) => ({
  ...o,
  ...i,
  paint: paint
});
function go(o, i) {
  if (o === null || o.attributes.rawText === i) return;
  o.attributes.rawText = i, YC(o), g_t(o);
}
var ko = 250;
function Zt(o, i, p) {
  let a = i.standing();
  if (a !== "complete") o?.schedule(p, a === "progressing" ? Xg : ko);
}
function To(o, i, p) {
  let {
      plugin: plugin_8,
      elementKey: f,
      columns: columns_5,
      rows: rows_4
    } = o,
    c = Pe(ee),
    x = T(null),
    h = T(null);
  return sn(() => {
    let y = {
        columns: columns_5,
        rows: rows_4
      },
      b = ho(E => {
        go(x.current, wfo(E, y, i)), Zt(h.current, i, E);
      }),
      k = FWo(yo({
        plugin: plugin_8,
        requestId: c?.requestId ?? ge,
        key: f
      }, y, b.paint));
    return h.current = b, () => {
      k(), b.cancel(), h.current = null;
    };
  }, [plugin_8, f, columns_5, rows_4, c, i]), sn(() => {
    h.current?.cancel(), Zt(h.current, i, p);
  }, [p, i]), x;
}
function wo(o) {
  let {
      plugin: i,
      elementKey: elementKey_5,
      columns: a,
      rows: f,
      cells: cells
    } = o,
    [u] = g(() => HWo()),
    c = X(() => aLn(cells, a, f).words ?? new Uint32Array(), [cells, a, f]),
    ref_5 = To(o, u, c),
    rawText_2 = X(() => wfo(c, {
      columns: a,
      rows: f
    }, u), [c, a, f, u]);
  return ad(s, {
    flexShrink: 0,
    width: a,
    height: f,
    overflow: "hidden",
    elementKey: elementKey_5,
    elementPlugin: i
  }, ad("ink-raw-ansi", {
    ref: ref_5,
    rawText: rawText_2,
    rawWidth: a,
    rawHeight: f
  }));
}
var it = 8;
function avn(o, i) {
  let first = Math.max(0, i - it + 1),
    size = Math.max(0, Math.min(it, o - first)),
    hidden = o - first - size;
  return {
    first: first,
    size: size,
    hidden: hidden,
    rows: size + (hidden > 0 ? 1 : 0)
  };
}
N();
N();
var NGt = Vt(null);
function er(o) {
  let {
      plugin: i,
      handle: handle_5,
      element: a,
      options: options
    } = o,
    m = me({
      plugin: i,
      handle: handle_5
    }),
    u = Pe(NGt),
    c = u?.pickedOf(i, a) ?? o.value,
    x = options.find(item => item.value === c),
    children_18 = o.label === void 0 ? "" : `${o.label}: `,
    {
      hasKeyboardFocus: y
    } = m,
    b = u?.open,
    k = b !== null && b !== void 0 && b.plugin === i && b.handle === handle_5,
    E = k ? b.highlight : 0,
    {
      first: first_2,
      size: size_2,
      hidden: hidden_2
    } = avn(k ? options.length : 0, E);
  return r(s, {
    ref: m.ref,
    flexDirection: "column",
    flexShrink: 0,
    elementKey: a,
    elementPlugin: i,
    onClick: m.onClick,
    children: [r(n, {
      wrap: "truncate-end",
      children: [e(n, {
        bold: y,
        children: children_18
      }), x === void 0 ? e(n, {
        dimColor: !0,
        children: "none"
      }) : e(n, {
        inverse: y && !k,
        children: x.label ?? x.value
      }), e(n, {
        dimColor: !0,
        children: k ? " \u25B4" : " \u25BE"
      })]
    }), options.slice(first_2, first_2 + size_2).map((item, index) => e(n, {
      inverse: first_2 + index === E,
      wrap: "truncate-end",
      children: `  ${item.label ?? item.value}`
    }, item.value)), hidden_2 > 0 && e(n, {
      dimColor: !0,
      children: `  \u2026 ${hidden_2} more`
    })]
  });
}
function pt(o, i, p = new Set()) {
  if (typeof o === "string") return ad(n, null, o);
  if (o.type === "engine") return i(o.ref);
  if (o.type === "Button") return ad(zt, {
    plugin: o.press.plugin,
    handle: o.press.handle,
    element: o.props.key,
    label: o.props.label,
    hotkey: o.props.hotkey,
    action: o.props.action,
    plain: o.props.plain,
    dimColor: o.props.dimColor,
    variant: o.props.variant,
    role: o.props.role,
    hover: o.hover
  });
  if (o.type === "Input") return ad(Bt, {
    plugin: o.press.plugin,
    handle: o.press.handle,
    element: o.props.key,
    label: o.props.label,
    placeholder: o.props.placeholder,
    value: o.props.value,
    submitLabel: o.props.submitLabel
  });
  if (o.type === "Select") return ad(er, {
    plugin: o.press.plugin,
    handle: o.press.handle,
    element: o.props.key,
    label: o.props.label,
    options: o.props.options,
    value: o.props.value
  });
  if (o.type === "Code") return ad(Je, o.props);
  if (o.type === "Markdown") return ad(jt, {
    text: o.props.text,
    dimColor: o.props.dimColor,
    press: "press" in o ? o.press : void 0,
    elementKey: o.props.key,
    pressableLinks: o.props.pressableLinks
  });
  if (o.type === "Client") return ad(so, {
    key: `client:${o.client.plugin}:${o.props.key}`,
    rebuild: y => pt(y, () => null),
    plugin: o.client.plugin,
    module: o.props.module,
    elementKey: o.props.key,
    props: o.props.props,
    width: o.props.width,
    height: o.props.height,
    flexGrow: o.props.flexGrow
  });
  if (o.type === "Svg") return ad(n, {
    dimColor: !0
  }, o.props.alt);
  if (o.type === "Image") return ad(xo, {
    ...(o.props.key !== void 0 && {
      key: `image:${o.image.plugin}:${o.props.key}`
    }),
    plugin: o.image.plugin,
    elementKey: o.props.key,
    source: o.props.source,
    columns: o.props.columns,
    rows: o.props.rows,
    alt: o.props.alt
  });
  if (o.type === "Raster") return ad(wo, {
    key: `raster:${o.raster.plugin}:${o.props.key}`,
    plugin: o.raster.plugin,
    elementKey: o.props.key,
    columns: o.props.columns,
    rows: o.props.rows,
    cells: o.props.cells
  });
  let a = o.type === "Text" || o.type === "Link",
    f = new Set(),
    children_19 = (o.children ?? []).map(item => a && typeof item === "string" ? item : pt(item, i, f));
  if (o.type === "Link") {
    let {
        href: y,
        label: label_2
      } = o.props,
      k = children_19.length > 0 ? children_19 : [label_2 ?? y],
      fallback = children_19.length === 0 && label_2 === void 0 ? void 0 : ad(n, null, ...k, " ", ad(n, {
        dimColor: !0
      }, y));
    return ad(bt, {
      url: y,
      fallback: fallback
    }, ...k);
  }
  let group_3 = vt(o.group?.plugin, o.hover);
  if (o.type === "Box" && o.props?.key !== void 0) {
    let {
        key: key_4,
        ...layout_2
      } = o.props,
      isLive_2 = $en(key_4, p) === void 0;
    return ad(Nt, {
      key: isLive_2 ? String(key_4) : void 0,
      isLive: isLive_2,
      elementKey: String(key_4),
      layout: layout_2,
      hover: o.hover,
      group: group_3,
      children: children_19
    });
  }
  let c = o.type === "Box" ? s : n,
    {
      hover: hover_4
    } = o;
  return hover_4 === void 0 ? ad(c, Ee(o.props), ...children_19) : ad(Dt, {
    isInline: o.type === "Text",
    props: o.props,
    hover: hover_4,
    group: group_3,
    children: children_19
  });
}
N();
function tr(o) {
  let i = T(!1);
  if (!o) i.current = !0;
  return i.current;
}
function rr(o, i) {
  let {
    input: input,
    drawn: drawn,
    contentRows: contentRows,
    isFallback: isFallback
  } = i;
  return o.rows !== void 0 && (isFallback || o.drawn !== drawn || contentRows !== void 0 && contentRows >= o.rows) ? {
    rows: void 0,
    wasOff: !1,
    input: input,
    drawn: drawn
  } : o.wasOff ? {
    ...o,
    wasOff: !1
  } : o;
}
function or(o, i) {
  let {
      input: input_2,
      drawn: drawn_2,
      lastRows: f,
      contentRows: contentRows_2
    } = i,
    u = contentRows_2 === 0,
    c = !o.wasOff,
    x = o.input !== input_2,
    h = u && o.rows === void 0;
  return c ? {
    rows: f,
    wasOff: !0,
    input: input_2,
    drawn: drawn_2
  } : x ? {
    rows: u ? f : void 0,
    wasOff: !0,
    input: input_2,
    drawn: drawn_2
  } : h ? {
    ...o,
    rows: f,
    drawn: drawn_2
  } : {
    ...o,
    drawn: drawn_2
  };
}
N();
function nr(o) {
  let {
      isOff: i,
      input: input_3,
      drawn: drawn_3,
      lastRows: lastRows
    } = o,
    [m, u] = g(() => ({
      rows: i ? lastRows : void 0,
      wasOff: i,
      input: input_3,
      drawn: drawn_3
    })),
    c = i ? or(m, o) : rr(m, o);
  if (c.rows !== m.rows || c.wasOff !== m.wasOff || c.input !== m.input || c.drawn !== m.drawn) u(c);
  return c.rows;
}
N();
function sr(o, i, p) {
  let a = Js() && i,
    f = p === void 0 ? void 0 : [p],
    [m] = g(() => a ? Sqe.heldRowsOf(o, f) : void 0),
    [site, onScreen, x, contentRows_3] = $vn(a, g(() => a ? Sqe.askedOnScreen(o, f) : void 0)[0]);
  return X(() => ({
    site: site,
    input: onScreen === void 0 ? o : {
      ...o,
      props: {
        ...o.props,
        onScreen: onScreen
      }
    },
    lastRows: x ?? m,
    contentRows: contentRows_3
  }), [o, onScreen, site, x, contentRows_3, m]);
}
N();
var ir = (o, i) => o ? `${i.component}\x00${i.requestId}\x00` + NFn(i) : "";
var pr = (o, i) => t(`ui.render (${o.component} ${o.requestId}): site failed: ${l(i)}`, {
  level: "error"
});
function ar(o, i, {
  version: version,
  staticFrame: staticFrame,
  submittedBy: submittedBy
}) {
  let origin = submittedBy === void 0 ? void 0 : [submittedBy],
    [u, c] = g(() => o ? Sqe.settled(i, origin) : void 0),
    x = ir(o, i),
    y = o && i.requestId !== "" ? Eke(i) : void 0;
  return R(() => y !== void 0 ? pmo(y) : void 0, [y]), R(() => {
    if (!o) {
      c(void 0);
      return;
    }
    if (staticFrame) return;
    let abortController = new AbortController();
    return Eie({
      signal: abortController.signal,
      origin: origin
    }).ui.render(i).then(k => {
      if (!abortController.signal.aborted) c(k);
    }, k => {
      if (pr(i, k), !abortController.signal.aborted) c(gFe);
    }), () => {
      abortController.abort(new De("ui.render: superseded"));
    };
  }, [x, version, o, submittedBy, staticFrame]), u;
}
var Fe = o => xe(eF(), i => Kxt(i, o));
function HGt(o, i, submittedBy_2) {
  let version_2 = Fe(o),
    staticFrame_2 = Pe(UJe),
    {
      input: input_4,
      site: u,
      lastRows: lastRows_2,
      contentRows: contentRows_4
    } = sr(o, !staticFrame_2 && NVn.has(o.component) && Oot(o.component), submittedBy_2),
    h = X(() => Xxt(input_4), [input_4, version_2]),
    drawn_4 = ar(h, input_4, {
      version: version_2,
      staticFrame: staticFrame_2,
      submittedBy: submittedBy_2
    }),
    b = tr(h) || staticFrame_2,
    minHeight = nr({
      isOff: h && akr(input_4) === null,
      input: h ? NFn(o) : void 0,
      drawn: drawn_4,
      isFallback: drawn_4 === gFe,
      lastRows: lastRows_2,
      contentRows: contentRows_4
    });
  R(() => {
    if (minHeight !== void 0) Sqe.noteHeldRows(input_4, minHeight);
  }, [minHeight, drawn_4, input_4]);
  let {
      component: component,
      requestId: requestId_4
    } = o,
    value_3 = X(() => ({
      component: component,
      requestId: requestId_4
    }), [component, requestId_4]),
    B = Js(),
    H = X(() => (staticFrame_2 || !B) && drawn_4 !== void 0 && skr(drawn_4), [staticFrame_2, B, drawn_4]);
  return {
    node: ad(s, {
      ref: u,
      flexDirection: "column",
      renderEvent: renderEvent,
      renderComponent: o.component,
      drawPending: h && !drawn_4 && !b || void 0,
      minHeight: minHeight,
      overflow: H ? "hidden" : void 0
    }, h ? drawn_4 ? ad(ee, {
      value: value_3
    }, pt(drawn_4, _ => i(qr(drawn_4, _, input_4)))) : b ? i(input_4) : null : i(input_4)),
    drawn: drawn_4
  };
}
var AH = (o, i, p) => HGt(o, i, p).node;
N();
function iO(component_2, i, p) {
  let a = X(i, p),
    f = Fe({
      surface: "terminal",
      component: component_2,
      requestId: a.requestId
    }),
    isFullscreen = Js();
  return X(() => {
    let u = Ake.get();
    return {
      surface: "terminal",
      component: component_2,
      ...(u !== void 0 && {
        viewport: {
          columns: u.conversationColumns,
          rows: u.rows,
          isFullscreen: isFullscreen
        }
      }),
      ...a
    };
  }, [component_2, a, f, isFullscreen]);
}
var Wl = {};
vo(Wl, {
  ActionKeysSeat: () => qt,
  ClickedPress: () => PGt,
  CodeBlock: () => Je,
  DEFAULT_COLUMNS: () => ze,
  FIELD_MIN_COLUMNS: () => Wt,
  FocusedNode: () => DGt,
  FocusedPress: () => LGt,
  HEX_COLOR_PROPS: () => Ot,
  HoverScope: () => Nt,
  HoverStyled: () => Dt,
  InputField: () => Bt,
  InputFields: () => IGt,
  MARKDOWN_LINK_SCHEMES: () => linkSchemes_2,
  MarkdownBlock: () => jt,
  NAMED_TO_HEX: () => rt,
  PressButton: () => zt,
  RenderInstance: () => ee,
  ScopeHovered: () => He,
  SelectField: () => er,
  SelectFields: () => NGt,
  SiteColumns: () => OGt,
  VISIBLE_OPTIONS: () => it,
  adjustHoverGroup: () => Ze,
  clippedHunks: () => qe,
  clippedLines: () => Ve,
  default: () => Wl,
  fieldKey: () => nIe,
  focusClick: () => MGt,
  groupMember: () => Ht,
  groupOf: () => vt,
  heldBack: () => rr,
  heldFor: () => qr,
  heldOff: () => or,
  hexOfNamed: () => Mt,
  highlightPath: () => Xe,
  hoverGroupsStore: () => Ie,
  hoverOverridesOf: () => et,
  inputFromTerminal: () => per,
  listWindow: () => avn,
  pressFromTerminal: () => Lbe,
  rebuild: () => pt,
  releaseInkFocus: () => ivn,
  renderInputKey: () => ir,
  rulerCut: () => Ce,
  selectFromTerminal: () => R8r,
  settleQuietly: () => Cie,
  siteFailed: () => pr,
  spacedHunks: () => he,
  useActionKeys: () => Ut,
  useEngineDrew: () => tr,
  useHasRenderHooks: () => lvn,
  useHeldRows: () => nr,
  useHoverGroup: () => tt,
  useHoverLit: () => Ft,
  useOnScreenInput: () => sr,
  useRenderAnswer: () => ar,
  useRenderDrawing: () => HGt,
  useRenderHook: () => AH,
  useRenderInput: () => iO,
  useRenderVersion: () => Fe,
  useSettledDraw: () => A8r,
  useSiteFocus: () => me,
  withHexColors: () => Ee
});
var nIe = (o, i) => `${o}\x00${i}`;
var per = o => Cie(`ui.input ${o.plugin}`, Len({
  ...o,
  surface: "terminal"
}));
var R8r = o => Cie(`ui.select ${o.plugin}`, Hen({
  ...o,
  surface: "terminal"
}));
var lvn = o => xe(eF(), () => Oot(o));
var A8r = o => Sqe.settled(o);
export { Lbe, PGt, IGt, OGt, MGt, DGt, LGt, Pi, uer, linkSchemes_2 as zyt, ivn, Gyt, avn, NGt, HGt, nIe, per, R8r, lvn, AH, iO, A8r, Wl };