// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  v5
} from "B:/~BUN/root/chunk-trcn2d68.js";
import {
  s,
  n,
  bt,
  Jr,
  _t,
  Yw,
  Pue,
  ta,
  _r
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  io
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  qr,
  lH,
  L2
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  it
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  pe
} from "B:/~BUN/root/chunk-nf4z9ga7.js";
import {
  ie,
  ot
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  qYe
} from "B:/~BUN/root/chunk-aw2zngte.js";
import {
  Ny
} from "B:/~BUN/root/chunk-0rtwbec7.js";
import {
  Fj,
  Ol
} from "B:/~BUN/root/chunk-1a6hgte8.js";
import {
  ys
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  vi
} from "B:/~BUN/root/chunk-prb4vytb.js";
import {
  Mf
} from "B:/~BUN/root/chunk-9jvj58wt.js";
import {
  Jv
} from "B:/~BUN/root/chunk-mr8gretd.js";
import {
  As
} from "B:/~BUN/root/chunk-syke822n.js";
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  et
} from "B:/~BUN/root/chunk-zg8y1401.js";
import {
  ze,
  Wt
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  Cl
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Qn
} from "B:/~BUN/root/chunk-jcnv9sfw.js";
import {
  Yg,
  zJe
} from "B:/~BUN/root/chunk-vabpvk99.js";
import {
  Xe
} from "B:/~BUN/root/chunk-parcaazx.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  E7
} from "B:/~BUN/root/chunk-q3x7vf9d.js";
import {
  FM
} from "B:/~BUN/root/chunk-y39emrp9.js";
import {
  Z
} from "B:/~BUN/root/chunk-08bth2fj.js";
import {
  Qg,
  sl,
  Vt,
  Du,
  se,
  Pe,
  R,
  Gr,
  X,
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  U
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function Ra(I) {
  return Du(I) ? I.key : ""
}
var Xv = "userMessageBackground";

function Rue(o = "tint") {
  return pe.level === 0 ? "inverse" : o
}
var Jn = Vt("");

function DQ(o) {
  let t = w(14),
    i, u;
  if (t[0] !== o)({
    windowStart: u,
    ...i
  } = o), t[0] = o, t[1] = i, t[2] = u;
  else i = t[1], u = t[2];
  let l = u === void 0 ? 0 : u,
    d, f, p;
  if (t[3] !== i.children || t[4] !== l) {
    let b = Qg.toArray(i.children).map(Ra);
    d = Jn.Provider;
    f = l;
    p = b.join();
    t[3] = i.children, t[4] = l, t[5] = d, t[6] = f, t[7] = p
  } else d = t[5], f = t[6], p = t[7];
  const a = `${f} ${p}`;
  let h;
  if (t[8] !== i) h = e(s, {
    flexDirection: "column",
    ...i
  }), t[8] = i, t[9] = h;
  else h = t[9];
  let y;
  if (t[10] !== d || t[11] !== a || t[12] !== h) y = e(d, {
    value: a,
    children: h
  }), t[10] = d, t[11] = a, t[12] = h, t[13] = y;
  else y = t[13];
  return y
}

function aIe(o) {
  let d = w(5),
    t = Pe(Jn),
    [i, u] = g(null),
    l = o && i === t;
  if (i !== null && !l) u(null);
  let f;
  if (d[0] !== t) f = (p) => u(p ? t : null), d[0] = t, d[1] = f;
  else f = d[1];
  let b;
  if (d[2] !== l || d[3] !== f) b = [l, f], d[2] = l, d[3] = f, d[4] = b;
  else b = d[4];
  return b
}

function tw(o) {
  let L = w(47),
    {
      isFocused: t,
      isSelected: i,
      children: u,
      description: l,
      showScrollDown: d,
      showScrollUp: f,
      styled: p,
      disabled: b,
      idle: a,
      declareCursor: h,
      onClick: y,
      hoverStyle: I,
      onHoverChange: C
    } = o,
    G = i === void 0 ? !1 : i,
    H = p === void 0 ? !0 : p,
    c = b === void 0 ? !1 : b,
    te = a === void 0 ? !1 : a,
    z = I === void 0 ? "tint" : I,
    m = !c && y !== void 0,
    D = !c && (y !== void 0 || C !== void 0),
    [M, E] = aIe(D),
    _ = M && m,
    x = Rue(z),
    O;
  if (L[0] !== C || L[1] !== E) O = (he) => {
    E(he), C?.(he)
  }, L[0] = C, L[1] = E, L[2] = O;
  else O = L[2];
  let J = O,
    A;
  if (L[3] !== c || L[4] !== te || L[5] !== t || L[6] !== G || L[7] !== H) A = function st() {
    if (c) {
      return "inactive"
    }
    if (!H) {
      return
    }
    if (G) {
      return "success"
    }
    if (t && !te) {
      return "suggestion"
    }
  }, L[3] = c, L[4] = te, L[5] = t, L[6] = G, L[7] = H, L[8] = A;
  else A = L[8];
  let st = A,
    ne = st();
  const B = t && !c && h !== !1;
  let Te;
  if (L[9] !== B) Te = {
    line: 0,
    column: 0,
    active: B
  }, L[9] = B, L[10] = Te;
  else Te = L[10];
  let W = Yw(Te);
  const ge = _ && x === "tint" ? Xv : void 0,
    j = m ? y : void 0;
  let oe;
  if (L[11] !== D || L[12] !== J) oe = D ? () => J(!0) : void 0, L[11] = D, L[12] = J, L[13] = oe;
  else oe = L[13];
  let re;
  if (L[14] !== D || L[15] !== J) re = D ? () => J(!1) : void 0, L[14] = D, L[15] = J, L[16] = re;
  else re = L[16];
  const Se = _ && x === "pointer",
    Oe = _ && x === "inverse";
  let P;
  if (L[17] !== c || L[18] !== te || L[19] !== t || L[20] !== d || L[21] !== f || L[22] !== Se || L[23] !== Oe) P = e(s, {
    flexShrink: 0,
    children: e(Qo, {
      disabled: c,
      isFocused: t,
      idle: te,
      showScrollUp: f,
      showScrollDown: d,
      hovered: Se,
      inverse: Oe
    })
  }), L[17] = c, L[18] = te, L[19] = t, L[20] = d, L[21] = f, L[22] = Se, L[23] = Oe, L[24] = P;
  else P = L[24];
  let ue;
  if (L[25] !== u || L[26] !== c || L[27] !== H || L[28] !== ne) ue = H ? e(n, {
    color: ne,
    dimColor: c,
    wrap: "truncate-end",
    children: u
  }) : u, L[25] = u, L[26] = c, L[27] = H, L[28] = ne, L[29] = ue;
  else ue = L[29];
  let Ne;
  if (L[30] !== c || L[31] !== G) Ne = G && !c && e(s, {
    flexShrink: 0,
    children: e(n, {
      "aria-label": "(selected)",
      color: "success",
      children: Z.tick
    })
  }), L[30] = c, L[31] = G, L[32] = Ne;
  else Ne = L[32];
  let de;
  if (L[33] !== P || L[34] !== ue || L[35] !== Ne) de = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [P, ue, Ne]
  }), L[33] = P, L[34] = ue, L[35] = Ne, L[36] = de;
  else de = L[36];
  let K;
  if (L[37] !== l) K = l && e(s, {
    paddingLeft: 2,
    children: e(n, {
      color: "inactive",
      wrap: "truncate-end",
      children: l
    })
  }), L[37] = l, L[38] = K;
  else K = L[38];
  let rt;
  if (L[39] !== W || L[40] !== ge || L[41] !== j || L[42] !== oe || L[43] !== re || L[44] !== de || L[45] !== K) rt = r(s, {
    ref: W,
    flexDirection: "column",
    backgroundColor: ge,
    onClick: j,
    onMouseEnter: oe,
    onMouseLeave: re,
    children: [de, K]
  }), L[39] = W, L[40] = ge, L[41] = j, L[42] = oe, L[43] = re, L[44] = de, L[45] = K, L[46] = rt;
  else rt = L[46];
  return rt
}

function Qo(o) {
  let b = w(12),
    {
      disabled: t,
      isFocused: i,
      idle: u,
      showScrollUp: l,
      showScrollDown: d,
      hovered: f,
      inverse: p
    } = o;
  if (t) {
    let a;
    if (b[0] === S) a = e(n, {
      "aria-hidden": !0,
      children: " "
    }), b[0] = a;
    else a = b[0];
    return a
  }
  if (i) {
    const a = u ? void 0 : "suggestion";
    let h;
    if (b[1] !== u || b[2] !== p || b[3] !== a) h = e(n, {
      "aria-hidden": !0,
      color: a,
      dimColor: u,
      inverse: p,
      children: Z.pointer
    }), b[1] = u, b[2] = p, b[3] = a, b[4] = h;
    else h = b[4];
    return h
  }
  if (d) {
    let a;
    if (b[5] !== p) a = e(n, {
      "aria-label": "(more below)",
      dimColor: !0,
      inverse: p,
      children: Z.arrowDown
    }), b[5] = p, b[6] = a;
    else a = b[6];
    return a
  }
  if (l) {
    let a;
    if (b[7] !== p) a = e(n, {
      "aria-label": "(more above)",
      dimColor: !0,
      inverse: p,
      children: Z.arrowUp
    }), b[7] = p, b[8] = a;
    else a = b[8];
    return a
  }
  if (f) {
    let a;
    if (b[9] === S) a = e(n, {
      "aria-hidden": !0,
      dimColor: !0,
      children: Z.pointer
    }), b[9] = a;
    else a = b[9];
    return a
  }
  let a;
  if (b[10] !== p) a = e(n, {
    "aria-hidden": !0,
    inverse: p,
    children: " "
  }), b[10] = p, b[11] = a;
  else a = b[11];
  return a
}
N();

function Gi(o = Fj) {
  let t = ta(),
    i = T(Date.now());
  return se(() => Ol(t, i.current, o), [t, o])
}

function yh() {
  return T(Date.now()).current
}

function gc(o, t = Fj) {
  let i = _r(t, o);
  return {
    remountKey: i ? "settled" : "held",
    settled: i
  }
}

function e_t() {
  let [o, t] = g(0), i = se(() => t((u) => u + 1), []);
  return {
    epoch: o,
    noteAttempt: i
  }
}

function rs() {
  let o = ta(),
    t = T(null),
    {
      epoch: i,
      noteAttempt: u
    } = e_t(),
    l = se((f = Fj) => t.current !== null && Ol(o, t.current, f), [o]),
    d = se(() => {
      t.current = Date.now(), u()
    }, [u]);
  return {
    refusedWithin: l,
    noteRefused: d,
    epoch: i
  }
}
N();

function Nu(nn) {
  return String(nn.value)
}

function Lu() {
  return null
}

function Uu() {
  return ""
}

function Bu() {
  return null
}

function $u() {
  return ""
}

function ju() {
  return ""
}

function Ku() {
  return null
}

function Hu() {
  return ""
}

function zu() {
  return ""
}

function _u() {
  return null
}

function Gu() {
  return ""
}

function qu() {
  return null
}

function Yu() {
  return null
}

function Ju() {
  return ""
}

function Xu(ct) {
  return ct.type !== "input"
}

function Qu() {
  return ""
}

function Zu() {
  return null
}

function ed(es) {
  return String(es.value)
}

function td() {
  return null
}

function nd() {
  return null
}

function od() {
  return ""
}

function id() {
  return null
}

function sd() {
  return ""
}

function rd() {
  return ""
}

function ld() {
  return null
}

function ad() {
  return null
}

function ud() {
  return null
}

function dd() {
  return ""
}

function cd() {
  return ""
}

function pd() {
  return ""
}

function fd() {
  return ""
}

function md() {
  return null
}

function hd() {
  return null
}

function bd() {
  return null
}

function vd(jo) {
  return jo.type !== "input"
}

function gd() {
  return ""
}

function xd(ts, Ko) {
  return ts - Ko
}

function Id(ns) {
  return String(ns + 1)
}

function yd() {
  return null
}

function Sd() {
  return ""
}

function wd() {
  return null
}

function Od() {
  return null
}

function Cd() {
  return ""
}

function Td() {
  return ""
}

function Dd(P) {
  return P.slice(0, -1)
}

function Be(o) {
  let l = w(3),
    [t, i] = g(o),
    u = T(o),
    d;
  if (l[0] === S) d = (f) => {
    u.current = f(u.current), i(u.current)
  }, l[0] = d;
  else d = l[0];
  let p = d,
    b;
  if (l[1] !== t) b = [t, u, p], l[1] = t, l[2] = b;
  else b = l[2];
  return b
}

function Jt() {
  return Be("")
}

function go(o) {
  if (o.length <= 1) return o[0] ?? "";
  if (o.length === 2) return `${o[0]} or ${o[1]}`;
  return `${o.slice(0,-1).join(", ")}, or ${o.at(-1)}`
}
var Zo = 300;

function Na(o) {
  return ` \u2026 +${o} more characters`
}

function ks(o) {
  if (o.length <= Zo) return o;
  let t = qr(o, Zo);
  if (t === o) return o;
  let i = [...o].length - Zo;
  return t + Na(i)
}

function yi(o, t) {
  let d = w(18),
    i = t === void 0 ? Fj : t,
    u = ta(),
    l = Gi(i),
    f;
  if (d[0] !== o || d[1] !== u || d[2] !== l || d[3] !== i) f = o === void 0 ? l : () => Ol(u, o, i), d[0] = o, d[1] = u, d[2] = l, d[3] = i, d[4] = f;
  else f = d[4];
  let p = f,
    {
      refusedWithin: b,
      noteRefused: a
    } = rs(),
    h;
  if (d[5] !== p || d[6] !== a || d[7] !== b || d[8] !== i) h = () => {
    if (p() || b(i)) {
      return a(), !0
    }
    return !1
  }, d[5] = p, d[6] = a, d[7] = b, d[8] = i, d[9] = h;
  else h = d[9];
  let y = h,
    I;
  if (d[10] !== p || d[11] !== a || d[12] !== b || d[13] !== i) I = () => {
    if (!p() && !b(i)) {
      return !1
    }
    return a(), !0
  }, d[10] = p, d[11] = a, d[12] = b, d[13] = i, d[14] = I;
  else I = d[14];
  let C = I,
    G;
  if (d[15] !== y || d[16] !== C) G = {
    refuse: y,
    refuseCharacter: C
  }, d[15] = y, d[16] = C, d[17] = G;
  else G = d[17];
  return G
}

function zK(o) {
  let m = w(71),
    {
      options: t,
      onChange: i,
      onFocus: u,
      onCancel: l,
      isDisabled: d,
      disableSelection: f,
      defaultValue: p,
      refuseInput: b,
      headings: a,
      drawLabels: h
    } = o,
    y = d === void 0 ? !1 : d,
    I = f === void 0 ? !1 : f,
    C = h === void 0 ? !1 : h,
    [G, H, c] = Jt(),
    [te, z] = g(null),
    D;
  if (m[0] === S) D = qYe(), m[0] = D;
  else D = m[0];
  let M = D,
    [E, _, x] = Be(null),
    L;
  if (m[1] !== t) L = t.map(Nu).join("\x00"), m[1] = t, m[2] = L;
  else L = m[2];
  let O = L,
    [he, J] = g(O);
  if (he !== O) J(O), x(Lu), c(Uu);
  let [A, st, ne] = Be(null);
  if (he !== O && A !== null) ne(Bu), c($u);
  let B = A !== null && t[A - 1]?.type === "input" ? t[A - 1] : null,
    Te = T(null);
  Mf(Te, !y), vi("select", !!l && !y);
  let W;
  if (m[3] !== I || m[4] !== B || m[5] !== i || m[6] !== u || m[7] !== t || m[8] !== c || m[9] !== x || m[10] !== ne) W = (ge) => {
    if (I) {
      return
    }
    if (B) {
      if (ge === "") {
        z("Enter some text, or Escape for the list.");
        return
      }
      if (i?.(B.value) === !1) {
        return
      }
      c(ju), ne(Ku);
      return
    }
    let j = Number.parseInt(ge, 10);
    if (!Number.isFinite(j) || j < 1 || j > t.length) {
      z(`Invalid selection "${ge}". Enter a number between 1 and ${t.length}.`), c(Hu);
      return
    }
    let oe = t[j - 1];
    if (oe.disabled) {
      z(`Option ${j} is disabled.`), c(zu);
      return
    }
    if (oe.type === "input") {
      ne(() => j), x(_u);
      let re = oe.initialValue ?? "";
      c(() => re), oe.onChange(re), u?.(oe.value);
      return
    }
    if (i?.(oe.value) === !1) {
      return
    }
    c(Gu), x(qu)
  }, m[3] = I, m[4] = B, m[5] = i, m[6] = u, m[7] = t, m[8] = c, m[9] = x, m[10] = ne, m[11] = W;
  else W = m[11];
  let Se = W,
    Oe;
  if (m[12] !== H || m[13] !== I || m[14] !== _ || m[15] !== B || m[16] !== st || m[17] !== y || m[18] !== l || m[19] !== u || m[20] !== t || m[21] !== b || m[22] !== c || m[23] !== x || m[24] !== ne || m[25] !== Se) Oe = (P) => {
    if (y) {
      return
    }
    if (P.key === "escape" && P.name === "escape") {
      if (P.preventDefault(), B) {
        ne(Yu), c(Ju);
        let ue = t.find(Xu) ?? t[0];
        if (ue) u?.(ue.value);
        return
      }
      l?.();
      return
    }
    if (I) {
      return
    }
    if (P.key === "return" && P.name === "return") {
      if (P.preventDefault(), b?.()) {
        return
      }
      if (B || H.current.length > 0) {
        Se(H.current);
        return
      }
      if (M && _.current !== null) Se(String(_.current + 1));
      return
    }
    if (P.key === "backspace" || P.key === "delete") {
      P.preventDefault();
      let Ne = H.current.slice(0, -1);
      if (B && B.onChange(Ne) === !1) {
        return
      }
      c(() => Ne);
      return
    }
    if (M && !B && st.current === null && (P.name === "up" || P.name === "down")) {
      if (P.preventDefault(), b?.()) {
        return
      }
      z(null), c(Qu);
      let de = t.length;
      if (de === 0) {
        return
      }
      let K = _.current;
      let rt = K === null ? P.name === "down" ? 0 : de - 1 : (K + (P.name === "down" ? 1 : -1) + de) % de;
      x(() => rt);
      let mt = t[rt];
      if (mt) u?.(mt.value);
      return
    }
    if (B) {
      if (P.key.length === 1 && !P.ctrl && !P.meta) {
        P.preventDefault();
        let yt = H.current + P.key;
        if (B.onChange(yt) === !1) {
          return
        }
        c(() => yt)
      }
      return
    }
    let Me = lH(P.key);
    if (/^[0-9]$/.test(Me)) {
      if (P.preventDefault(), b?.()) {
        return
      }
      z(null), c((tn) => tn + Me), x(Zu)
    }
  }, m[12] = H, m[13] = I, m[14] = _, m[15] = B, m[16] = st, m[17] = y, m[18] = l, m[19] = u, m[20] = t, m[21] = b, m[22] = c, m[23] = x, m[24] = ne, m[25] = Se, m[26] = Oe;
  else Oe = m[26];
  let Re = Oe,
    St;
  if (m[27] !== G || m[28] !== B || m[29] !== A || m[30] !== l || m[31] !== t.length) St = B ? `Enter text for option ${A} (${Jv(B.label)}), or Escape for the list: ${G}` : `Select with numbers [1-${t.length}]${M?" or up / down arrow keys":""}. Then ${go(["Enter to submit",...l?["Escape to cancel"]:[]])}: ${G}`, m[27] = G, m[28] = B, m[29] = A, m[30] = l, m[31] = t.length, m[32] = St;
  else St = m[32];
  let je = St,
    Ke;
  if (m[33] !== je) Ke = ie(je), m[33] = je, m[34] = Ke;
  else Ke = m[34];
  const ut = !y && !I && E === null;
  let He;
  if (m[35] !== ut || m[36] !== Ke) He = {
    line: 0,
    column: Ke,
    active: ut,
    visible: !0
  }, m[35] = ut, m[36] = Ke, m[37] = He;
  else He = m[37];
  let _e = Yw(He),
    De;
  if (m[38] !== Re || m[39] !== y) De = y ? {} : {
    tabIndex: 0,
    onKeyDown: Re
  }, m[38] = Re, m[39] = y, m[40] = De;
  else De = m[40];
  let Le;
  if (m[41] !== p || m[42] !== I || m[43] !== C || m[44] !== E || m[45] !== a || m[46] !== y || m[47] !== t) {
    let Ge;
    if (m[49] !== p || m[50] !== I || m[51] !== C || m[52] !== E || m[53] !== a || m[54] !== y) Ge = (v, ht) => r(sl, {
      children: [a?.get(ht), e(En, {
        index: ht + 1,
        option: v,
        selected: p !== void 0 && v.value === p,
        focused: E === ht && !y && !I,
        drawLabel: C
      })]
    }, String(v.value)), m[49] = p, m[50] = I, m[51] = C, m[52] = E, m[53] = a, m[54] = y, m[55] = Ge;
    else Ge = m[55];
    Le = t.map(Ge);
    m[41] = p, m[42] = I, m[43] = C, m[44] = E, m[45] = a, m[46] = y, m[47] = t, m[48] = Le
  } else Le = m[48];
  let Ge;
  if (m[56] !== a || m[57] !== t.length) Ge = a?.get(t.length), m[56] = a, m[57] = t.length, m[58] = Ge;
  else Ge = m[58];
  let q;
  if (m[59] !== te) q = te && e(n, {
    children: te
  }), m[59] = te, m[60] = q;
  else q = m[60];
  let dt;
  if (m[61] !== _e || m[62] !== I || m[63] !== je) dt = !I && e(s, {
    ref: _e,
    children: e(n, {
      children: je
    })
  }), m[61] = _e, m[62] = I, m[63] = je, m[64] = dt;
  else dt = m[64];
  let vt;
  if (m[65] !== De || m[66] !== Le || m[67] !== Ge || m[68] !== q || m[69] !== dt) vt = r(s, {
    ref: Te,
    flexDirection: "column",
    ...De,
    children: [Le, Ge, q, dt]
  }), m[65] = De, m[66] = Le, m[67] = Ge, m[68] = q, m[69] = dt, m[70] = vt;
  else vt = m[70];
  return vt
}

function hvn(o) {
  let h = w(91),
    {
      options: t,
      defaultValue: i,
      onChange: u,
      onSubmit: l,
      onFocus: d,
      onCancel: f,
      isDisabled: p,
      submitButtonText: b,
      refuseInput: a
    } = o,
    y;
  if (h[0] !== i) y = i === void 0 ? [] : i, h[0] = i, h[1] = y;
  else y = h[1];
  let I = y,
    C = p === void 0 ? !1 : p,
    [G, H, c] = Jt(),
    [te, z] = g(null),
    m;
  if (h[2] === S) m = qYe(), h[2] = m;
  else m = h[2];
  let D = m,
    [M, E, _] = Be(null),
    [x, L, O] = Be(null),
    he;
  if (h[3] !== t) he = t.map(ed).join("\x00"), h[3] = t, h[4] = he;
  else he = h[4];
  let J = he,
    [A, st] = g(J);
  if (A !== J) st(J), _(td), O(nd), c(od);
  let ne;
  if (h[5] !== I || h[6] !== t) ne = () => new Set(t.flatMap((B, Te) => !B.disabled && I.includes(B.value) ? [Te] : [])), h[5] = I, h[6] = t, h[7] = ne;
  else ne = h[7];
  let W = ne,
    [ge, j] = g(null),
    oe = T(!1),
    re = T(!1),
    Se;
  if (h[8] !== l || h[9] !== ge) Se = () => {
    if (ge !== null) {
      let Oe = [...ge];
      j(null), oe.current = !1, l?.(Oe)
    }
  }, h[8] = l, h[9] = ge, h[10] = Se;
  else Se = h[10];
  let P;
  if (h[11] !== ge) P = [ge], h[11] = ge, h[12] = P;
  else P = h[12];
  R(Se, P);
  let [ue, Ne, de] = Be(null);
  if (A !== J && ue !== null) de(id), c(sd);
  let K = ue && t[ue.index - 1]?.type === "input" ? t[ue.index - 1] : null,
    rt = T(null);
  Mf(rt, !C), vi("multi-select", !!f && !C);
  let mt;
  if (h[13] !== u || h[14] !== c || h[15] !== _ || h[16] !== de || h[17] !== O) mt = (yt) => {
    if (oe.current = !0, u?.([...yt]) === !1) {
      oe.current = !1;
      return
    }
    j(yt), c(rd), de(ld), _(ad), O(ud)
  }, h[13] = u, h[14] = c, h[15] = _, h[16] = de, h[17] = O, h[18] = mt;
  else mt = h[18];
  let Me = mt,
    tn;
  if (h[19] !== I || h[20] !== Me || h[21] !== K || h[22] !== ue || h[23] !== d || h[24] !== t || h[25] !== c || h[26] !== _ || h[27] !== de || h[28] !== O) tn = (Re) => {
    if (K && ue) {
      if (Re === "") {
        z("Enter some text, or Escape for the list.");
        return
      }
      Me([...ue.stashed, K.value]);
      return
    }
    let St = Re.trim();
    if (St === "") {
      Me(I);
      return
    }
    let je = St.split(/[\s,]+/).filter(Boolean);
    if (je.length === 0) {
      Me(I);
      return
    }
    let Ke = new Set;
    let ut = [];
    let He = null;
    for (const _e of je) {
      if (!/^\d+$/.test(_e)) {
        z(`Invalid selection "${_e}". Enter numbers between 1 and ${t.length}, comma- or space-separated.`), c(dd);
        return
      }
      let De = Number.parseInt(_e, 10);
      if (Ke.has(De)) {
        continue
      }
      if (Ke.add(De), De < 1 || De > t.length) {
        z(`Invalid selection "${_e}". Enter numbers between 1 and ${t.length}, comma- or space-separated.`), c(cd);
        return
      }
      let Le = t[De - 1];
      if (Le.disabled) {
        z(`Option ${De} is disabled.`), c(pd);
        return
      }
      if (Le.type === "input") {
        if (He) {
          z("Only one free-text option can be included per selection."), c(fd);
          return
        }
        He = {
          index: De,
          opt: Le
        };
        continue
      }
      ut.push(Le.value)
    }
    if (He?.opt) {
      de(() => ({
        index: He.index,
        stashed: ut,
        raw: St
      })), _(md), O(hd);
      let Ge = He.opt.initialValue ?? "";
      c(() => Ge), He.opt.onChange(Ge), d?.(He.opt.value);
      return
    }
    Me(ut)
  }, h[19] = I, h[20] = Me, h[21] = K, h[22] = ue, h[23] = d, h[24] = t, h[25] = c, h[26] = _, h[27] = de, h[28] = O, h[29] = tn;
  else tn = h[29];
  let v = tn,
    ht;
  if (h[30] !== H || h[31] !== W || h[32] !== Me || h[33] !== E || h[34] !== K || h[35] !== ue || h[36] !== Ne || h[37] !== C || h[38] !== f || h[39] !== d || h[40] !== t || h[41] !== a || h[42] !== c || h[43] !== _ || h[44] !== de || h[45] !== O || h[46] !== v || h[47] !== L) ht = (q) => {
    if (C) {
      return
    }
    if (q.key === "escape" && q.name === "escape") {
      if (q.preventDefault(), ue) {
        let {
          raw: dt
        } = ue;
        de(bd), c(() => dt);
        let vt = t.find(vd) ?? t[0];
        if (vt) d?.(vt.value);
        return
      }
      f?.();
      return
    }
    if (q.key === "return" && q.name === "return") {
      if (q.preventDefault(), re.current) {
        a?.(), re.current = !1, c(gd), z("Part of that entry arrived before the list was ready \u2014 enter your selection again.");
        return
      }
      if (a?.()) {
        return
      }
      if (oe.current) {
        return
      }
      if (D && !K && H.current.length === 0 && L.current !== null) {
        let nn = [...L.current].sort(xd);
        if (nn.length === 0) Me([]);
        else v(nn.map(Id).join(" "));
        return
      }
      v(H.current);
      return
    }
    if (q.key === "backspace" || q.key === "delete") {
      q.preventDefault();
      let ct = H.current;
      let on = ct.slice(0, -1);
      if (K && K.onChange(on) === !1) {
        return
      }
      if (c(() => on), !K && ct !== on) O(yd);
      return
    }
    if (D && !K && Ne.current === null && (q.name === "up" || q.name === "down")) {
      if (q.preventDefault(), a?.()) {
        return
      }
      z(null), c(Sd), re.current = !1;
      let Ce = t.length;
      if (Ce === 0) {
        return
      }
      let wt = E.current;
      let Pt = wt === null ? q.name === "down" ? 0 : Ce - 1 : (wt + (q.name === "down" ? 1 : -1) + Ce) % Ce;
      _(() => Pt);
      let Kn = t[Pt];
      if (Kn) d?.(Kn.value);
      return
    }
    if (D && !K && Ne.current === null && E.current !== null && L2(q.key) === " ") {
      if (q.preventDefault(), a?.()) {
        return
      }
      let Ot = E.current;
      let Hn = t[Ot];
      if (!Hn) {
        return
      }
      if (Hn.disabled) {
        z(`Option ${Ot+1} is disabled.`);
        return
      }
      z(null), O((Uo) => {
        let Et = new Set(Uo ?? W());
        if (Et.has(Ot)) Et.delete(Ot);
        else Et.add(Ot);
        return Et
      });
      return
    }
    if (K) {
      if (q.key.length === 1 && !q.ctrl && !q.meta) {
        q.preventDefault();
        let lt = H.current + q.key;
        if (K.onChange(lt) === !1) {
          return
        }
        c(() => lt)
      }
      return
    }
    let xn = L2(lH(q.key)).replace("\uFF0C", ",").replace("\u3001", ",");
    if (/^[0-9, ]$/.test(xn)) {
      if (q.preventDefault(), re.current) {
        a?.();
        return
      }
      if (a?.()) {
        re.current = !0;
        return
      }
      z(null), c((At) => At + xn), _(wd), O(Od)
    }
  }, h[30] = H, h[31] = W, h[32] = Me, h[33] = E, h[34] = K, h[35] = ue, h[36] = Ne, h[37] = C, h[38] = f, h[39] = d, h[40] = t, h[41] = a, h[42] = c, h[43] = _, h[44] = de, h[45] = O, h[46] = v, h[47] = L, h[48] = ht;
  else ht = h[48];
  let qe = ht,
    sn;
  if (h[49] !== G || h[50] !== I || h[51] !== K || h[52] !== ue?.index || h[53] !== f || h[54] !== t.length || h[55] !== b || h[56] !== x) sn = K ? `Enter text for option ${ue?.index} (${Jv(K.label)}), or Escape for the list: ${G}` : `Select with numbers [1-${t.length}] (comma- or space-separated for several)${D?" or up / down arrow keys":""}. Then ${go([...D?["Space to toggle"]:[],`Enter to ${b??"submit"}`,...I.length>0&&x===null?["bare Enter for defaults"]:[],...f?["Escape to cancel"]:[]])}: ${G}`, h[49] = G, h[50] = I, h[51] = K, h[52] = ue?.index, h[53] = f, h[54] = t.length, h[55] = b, h[56] = x, h[57] = sn;
  else sn = h[57];
  let Y = sn,
    Ct;
  if (h[58] !== Y) Ct = ie(Y), h[58] = Y, h[59] = Ct;
  else Ct = h[59];
  const Tt = !C && M === null;
  let In;
  if (h[60] !== Ct || h[61] !== Tt) In = {
    line: 0,
    column: Ct,
    active: Tt,
    visible: !0
  }, h[60] = Ct, h[61] = Tt, h[62] = In;
  else In = h[62];
  let yn = Yw(In),
    Nt;
  if (h[63] !== I) Nt = new Set(I), h[63] = I, h[64] = Nt;
  else Nt = h[64];
  let Lt = Nt,
    Ut;
  if (h[65] !== qe || h[66] !== C) Ut = C ? {} : {
    tabIndex: 0,
    onKeyDown: qe
  }, h[65] = qe, h[66] = C, h[67] = Ut;
  else Ut = h[67];
  let rn;
  if (h[68] !== Lt || h[69] !== M || h[70] !== C || h[71] !== t || h[72] !== x) {
    let Bt;
    if (h[74] !== Lt || h[75] !== M || h[76] !== C || h[77] !== x) Bt = (Bo, $o) => e(En, {
      index: $o + 1,
      option: Bo,
      selected: x ? x.has($o) : Lt.has(Bo.value),
      focused: M === $o && !C
    }, String(Bo.value)), h[74] = Lt, h[75] = M, h[76] = C, h[77] = x, h[78] = Bt;
    else Bt = h[78];
    rn = t.map(Bt);
    h[68] = Lt, h[69] = M, h[70] = C, h[71] = t, h[72] = x, h[73] = rn
  } else rn = h[73];
  let Bt;
  if (h[79] !== te) Bt = te && e(n, {
    children: te
  }), h[79] = te, h[80] = Bt;
  else Bt = h[80];
  let Sn;
  if (h[81] !== Y) Sn = e(n, {
    children: Y
  }), h[81] = Y, h[82] = Sn;
  else Sn = h[82];
  let zn;
  if (h[83] !== yn || h[84] !== Sn) zn = e(s, {
    ref: yn,
    children: Sn
  }), h[83] = yn, h[84] = Sn, h[85] = zn;
  else zn = h[85];
  let Zi;
  if (h[86] !== Ut || h[87] !== rn || h[88] !== Bt || h[89] !== zn) Zi = r(s, {
    ref: rt,
    flexDirection: "column",
    ...Ut,
    children: [rn, Bt, zn]
  }), h[86] = Ut, h[87] = rn, h[88] = Bt, h[89] = zn, h[90] = Zi;
  else Zi = h[90];
  return Zi
}

function En(o) {
  let p = w(26),
    {
      index: t,
      option: i,
      selected: u,
      focused: l,
      drawLabel: d
    } = o,
    f = d === void 0 ? !1 : d,
    b;
  if (p[0] !== l) b = {
    line: 0,
    column: 0,
    active: l,
    visible: !0
  }, p[0] = l, p[1] = b;
  else b = p[1];
  let a = Yw(b),
    h;
  if (p[2] !== i.label) h = Jv(i.label), p[2] = i.label, p[3] = h;
  else h = p[3];
  let y = h,
    I = i.description ? ` \u2014 ${i.description}` : "";
  const C = `${y}${I}`;
  let G;
  if (p[4] !== C) G = ks(C), p[4] = C, p[5] = G;
  else G = p[5];
  let H = G;
  const c = i.disabled ? "(disabled)" : null,
    te = u ? "(selected)" : null;
  let z;
  if (p[6] !== c || p[7] !== te) z = [c, te].filter(Boolean), p[6] = c, p[7] = te, p[8] = z;
  else z = p[8];
  let m = z.join(" ");
  if (f) {
    const D = m ? ` ${m}` : "";
    let M;
    if (p[9] !== t || p[10] !== D) M = r(n, {
      children: [t, ".", D]
    }), p[9] = t, p[10] = D, p[11] = M;
    else M = p[11];
    let E;
    if (p[12] !== i.description) E = i.description && r(n, {
      children: ["\u2014 ", i.description]
    }), p[12] = i.description, p[13] = E;
    else E = p[13];
    let _;
    if (p[14] !== a || p[15] !== i.label || p[16] !== M || p[17] !== E) _ = r(s, {
      ref: a,
      children: [M, i.label, E]
    }), p[14] = a, p[15] = i.label, p[16] = M, p[17] = E, p[18] = _;
    else _ = p[18];
    return _
  }
  const D = m ? `${m} ` : "";
  let M;
  if (p[19] !== H || p[20] !== t || p[21] !== D) M = r(n, {
    children: [t, ". ", D, H]
  }), p[19] = H, p[20] = t, p[21] = D, p[22] = M;
  else M = p[22];
  let E;
  if (p[23] !== a || p[24] !== M) E = e(s, {
    ref: a,
    children: M
  }), p[23] = a, p[24] = M, p[25] = E;
  else E = p[25];
  return E
}

function yvn(o) {
  let c = w(43),
    {
      confirmLabel: t,
      cancelLabel: i,
      onConfirm: u,
      onCancel: l,
      refuseInput: d,
      openedAt: f,
      windowMs: p
    } = o,
    [b, a, h] = Jt(),
    [y, I] = g(null),
    C = T(null);
  Mf(C, !0), vi("select", !0);
  let {
    refuse: G,
    refuseCharacter: H
  } = yi(f, p), te;
  if (c[0] !== d || c[1] !== G) te = function z() {
    return (d?.() ?? !1) || G()
  }, c[0] = d, c[1] = G, c[2] = te;
  else te = c[2];
  let z = te,
    m;
  if (c[3] !== d || c[4] !== H) m = function D() {
    return (d?.() ?? !1) || H()
  }, c[3] = d, c[4] = H, c[5] = m;
  else m = c[5];
  let D = m,
    M;
  if (c[6] !== l || c[7] !== u || c[8] !== z || c[9] !== h) M = (E) => {
    let _ = E.trim().toLowerCase();
    if ((_ === "y" || _ === "yes" || _ === "n" || _ === "no") && z()) {
      h(Cd);
      return
    }
    if (_ === "y" || _ === "yes") {
      return u()
    }
    if (_ === "n" || _ === "no") {
      return l()
    }
    I("Please answer y or n."), h(Td)
  }, c[6] = l, c[7] = u, c[8] = z, c[9] = h, c[10] = M;
  else M = c[10];
  let x = M,
    L;
  if (c[11] !== a || c[12] !== l || c[13] !== z || c[14] !== D || c[15] !== h || c[16] !== x) L = (O) => {
    if (O.key === "escape" && O.name === "escape") {
      if (O.preventDefault(), z()) {
        return
      }
      return l()
    }
    if (O.key === "return" && O.name === "return") {
      return O.preventDefault(), x(a.current)
    }
    if (O.key === "backspace" || O.key === "delete") {
      O.preventDefault(), h(Dd);
      return
    }
    if (O.key.length === 1 && !O.ctrl && !O.meta) {
      if (O.preventDefault(), D()) {
        return
      }
      I(null), h((he) => he + O.key)
    }
  }, c[11] = a, c[12] = l, c[13] = z, c[14] = D, c[15] = h, c[16] = x, c[17] = L;
  else L = c[17];
  let J = L,
    A = `Enter y/n: ${b}`,
    st;
  if (c[18] !== A) st = ie(A), c[18] = A, c[19] = st;
  else st = c[19];
  let ne;
  if (c[20] !== st) ne = {
    line: 0,
    column: st,
    active: !0,
    visible: !0
  }, c[20] = st, c[21] = ne;
  else ne = c[21];
  let B = Yw(ne),
    Te;
  if (c[22] !== t) Te = Jv(t), c[22] = t, c[23] = Te;
  else Te = c[23];
  let W;
  if (c[24] !== Te) W = r(n, {
    children: ["y. ", Te]
  }), c[24] = Te, c[25] = W;
  else W = c[25];
  let ge;
  if (c[26] !== i) ge = Jv(i), c[26] = i, c[27] = ge;
  else ge = c[27];
  let j;
  if (c[28] !== ge) j = r(n, {
    children: ["n. ", ge]
  }), c[28] = ge, c[29] = j;
  else j = c[29];
  let oe;
  if (c[30] !== y) oe = y && e(n, {
    children: y
  }), c[30] = y, c[31] = oe;
  else oe = c[31];
  let re;
  if (c[32] !== A) re = e(n, {
    children: A
  }), c[32] = A, c[33] = re;
  else re = c[33];
  let Se;
  if (c[34] !== B || c[35] !== re) Se = e(s, {
    ref: B,
    children: re
  }), c[34] = B, c[35] = re, c[36] = Se;
  else Se = c[36];
  let Oe;
  if (c[37] !== J || c[38] !== j || c[39] !== oe || c[40] !== Se || c[41] !== W) Oe = r(s, {
    ref: C,
    flexDirection: "column",
    tabIndex: 0,
    onKeyDown: J,
    children: [W, j, oe, Se]
  }), c[37] = J, c[38] = j, c[39] = oe, c[40] = Se, c[41] = W, c[42] = Oe;
  else Oe = c[42];
  return Oe
}
N();

function Ii(o) {
  let [t] = g(() => ({
    value: Fd(o) ? o() : o
  })), [i, u] = g(t.value), l = se((f) => {
    let p = Vd(f) ? f(t.value) : f;
    if (Object.is(p, t.value)) return;
    t.value = p, u(() => p)
  }, [t]), d = se(() => t.value, [t]);
  return [i, l, d]
}

function Fd(o) {
  return typeof o === "function"
}

function Vd(o) {
  return typeof o === "function"
}
N();
N();

function Io(o) {
  let b = w(15),
    {
      imageId: t,
      backgroundColor: i,
      isSelected: u
    } = o,
    l = u === void 0 ? !1 : u,
    f = ys((d) => d.storedImagePaths.get(t) ?? null) ?? null,
    p = `[Image #${t}]`,
    a;
  if (b[0] !== f) a = f && Ny() ? FM(f) : null, b[0] = f, b[1] = a;
  else a = b[1];
  let h = a;
  if (h) {
    let y, I;
    if (b[2] !== i || b[3] !== p || b[4] !== l) y = e(n, {
      backgroundColor: i,
      inverse: l,
      children: p
    }), I = e(n, {
      backgroundColor: i,
      inverse: l,
      bold: l,
      children: p
    }), b[2] = i, b[3] = p, b[4] = l, b[5] = y, b[6] = I;
    else y = b[5], I = b[6];
    let C;
    if (b[7] !== h || b[8] !== y || b[9] !== I) C = e(bt, {
      url: h,
      fallback: y,
      children: I
    }), b[7] = h, b[8] = y, b[9] = I, b[10] = C;
    else C = b[10];
    return C
  }
  let y;
  if (b[11] !== i || b[12] !== p || b[13] !== l) y = e(n, {
    backgroundColor: i,
    inverse: l,
    children: p
  }), b[11] = i, b[12] = p, b[13] = l, b[14] = y;
  else y = b[14];
  return y
}

function S5(o) {
  let h = w(10),
    {
      isFocused: t,
      isSelected: i,
      children: u,
      description: l,
      shouldShowDownArrow: d,
      shouldShowUpArrow: f,
      declareCursor: p,
      onClick: b,
      hoverStyle: a
    } = o,
    y;
  if (h[0] !== u || h[1] !== p || h[2] !== l || h[3] !== a || h[4] !== t || h[5] !== i || h[6] !== b || h[7] !== d || h[8] !== f) y = e(tw, {
    isFocused: t,
    isSelected: i,
    description: l,
    showScrollDown: d,
    showScrollUp: f,
    styled: !1,
    declareCursor: p,
    onClick: b,
    hoverStyle: a,
    children: u
  }), h[0] = u, h[1] = p, h[2] = l, h[3] = a, h[4] = t, h[5] = i, h[6] = b, h[7] = d, h[8] = f, h[9] = y;
  else y = h[9];
  return y
}

function nc(Ut) {
  return Ut.type === "image"
}

function Er(o, t, i, u) {
  let l = 2 + t + 2;
  return Math.max(1, o - l - i - u)
}

function Aue(o) {
  let W = w(104),
    {
      option: t,
      isFocused: i,
      isSelected: u,
      shouldShowDownArrow: l,
      shouldShowUpArrow: d,
      maxIndexWidth: f,
      index: p,
      hideIndex: b,
      inputValue: a,
      onInputChange: h,
      onSubmit: y,
      onExit: I,
      layout: C,
      children: G,
      showLabel: H,
      onOpenEditor: c,
      resetCursorOnUpdate: te,
      canPasteImage: z,
      onImagePaste: m,
      pastedContents: D,
      onRemoveImage: M,
      imagesSelected: E,
      selectedImageIndex: _,
      onImagesSelectedChange: x,
      onSelectedImageIndexChange: L,
      extraChromeWidth: O,
      onClick: he,
      hoverStyle: J
    } = o,
    A = b === void 0 ? !1 : b,
    st = H === void 0 ? !1 : H,
    ne = te === void 0 ? !1 : te,
    B = _ === void 0 ? 0 : _,
    Te = O === void 0 ? 0 : O,
    ge;
  if (W[0] !== D) ge = D ? Object.values(D).filter(nc) : [], W[0] = D, W[1] = ge;
  else ge = W[1];
  let j = ge,
    oe = st || t.showLabelWithValue === !0,
    [re, Se] = g(a.length),
    Oe = T(!1),
    P;
  if (W[2] !== a.length || W[3] !== i || W[4] !== ne) P = () => {
    if (ne && i) {
      if (Oe.current) Oe.current = !1;
      else Se(a.length)
    }
  }, W[2] = a.length, W[3] = i, W[4] = ne, W[5] = P;
  else P = W[5];
  let ue;
  if (W[6] !== a || W[7] !== i || W[8] !== ne) ue = [ne, i, a], W[6] = a, W[7] = i, W[8] = ne, W[9] = ue;
  else ue = W[9];
  R(P, ue);
  let Ne;
  if (W[10] !== a || W[11] !== h || W[12] !== c) Ne = () => {
    c?.(a, h)
  }, W[10] = a, W[11] = h, W[12] = c, W[13] = Ne;
  else Ne = W[13];
  const de = i && !!c;
  let K;
  if (W[14] !== de) K = {
    context: "Chat",
    isActive: de
  }, W[14] = de, W[15] = K;
  else K = W[15];
  ze("chat:externalEditor", Ne, K);
  let rt;
  if (W[16] !== z || W[17] !== m) rt = () => {
    if (!m) {
      return
    }
    if (z?.() === !1) {
      return
    }
    E7(Cl(it())).then((mt) => {
      if (mt) m(mt.base64, {
        mediaType: mt.mediaType,
        dimensions: mt.dimensions
      })
    })
  }, W[16] = z, W[17] = m, W[18] = rt;
  else rt = W[18];
  const yt = i && !!m;
  let Me;
  if (W[19] !== yt) Me = {
    context: "Chat",
    isActive: yt
  }, W[19] = yt, W[20] = Me;
  else Me = W[20];
  ze("chat:imagePaste", rt, Me);
  let tn;
  if (W[21] !== j || W[22] !== M) tn = () => {
    if (j.length > 0 && M) M(j.at(-1).id)
  }, W[21] = j, W[22] = M, W[23] = tn;
  else tn = W[23];
  const Re = i && !E && a === "" && j.length > 0 && !!M;
  let St;
  if (W[24] !== Re) St = {
    context: "Attachments",
    isActive: Re
  }, W[24] = Re, W[25] = St;
  else St = W[25];
  ze("attachments:remove", tn, St);
  let je, Ke;
  if (W[26] !== j.length || W[27] !== L || W[28] !== B) je = () => {
    if (j.length > 1) L?.((B + 1) % j.length)
  }, Ke = () => {
    if (j.length > 1) L?.((B - 1 + j.length) % j.length)
  }, W[26] = j.length, W[27] = L, W[28] = B, W[29] = je, W[30] = Ke;
  else je = W[29], Ke = W[30];
  let ut;
  if (W[31] !== j || W[32] !== x || W[33] !== M || W[34] !== L || W[35] !== B) ut = () => {
    let He = j[B];
    if (He && M) {
      if (M(He.id) === !1) {
        return
      }
      if (j.length <= 1) x?.(!1);
      else L?.(Math.min(B, j.length - 2))
    }
  }, W[31] = j, W[32] = x, W[33] = M, W[34] = L, W[35] = B, W[36] = ut;
  else ut = W[36];
  let _e;
  if (W[37] !== x) _e = () => {
    x?.(!1)
  }, W[37] = x, W[38] = _e;
  else _e = W[38];
  let De;
  if (W[39] !== je || W[40] !== Ke || W[41] !== ut || W[42] !== _e) De = {
    "attachments:next": je,
    "attachments:previous": Ke,
    "attachments:remove": ut,
    "attachments:exit": _e
  }, W[39] = je, W[40] = Ke, W[41] = ut, W[42] = _e, W[43] = De;
  else De = W[43];
  const Le = i && !!E;
  let Ge;
  if (W[44] !== Le) Ge = {
    context: "Attachments",
    isActive: Le
  }, W[44] = Le, W[45] = Ge;
  else Ge = W[45];
  Wt(De, Ge);
  let v, ht;
  if (W[46] !== E || W[47] !== i || W[48] !== x) v = () => {
    if (!i && E) x?.(!1)
  }, ht = [i, E, x], W[46] = E, W[47] = i, W[48] = x, W[49] = v, W[50] = ht;
  else v = W[49], ht = W[50];
  R(v, ht);
  let q = C === "expanded" ? f + 3 : f + 4,
    {
      columns: dt
    } = As(ve()),
    vt = oe && typeof t.label === "string" ? ie(t.label) + ie(t.labelValueSeparator ?? ", ") : 0,
    nn;
  if (W[51] !== dt || W[52] !== Te || W[53] !== vt || W[54] !== f) nn = Er(dt, f, vt, Te), W[51] = dt, W[52] = Te, W[53] = vt, W[54] = f, W[55] = nn;
  else nn = W[55];
  let ct = nn;
  const on = C === "compact" ? 0 : void 0;
  let Ce;
  if (W[56] !== A || W[57] !== p || W[58] !== f) Ce = !A && e(s, {
    flexShrink: 0,
    children: e(n, {
      dimColor: !0,
      children: `${p}.`.padEnd(f + 2)
    })
  }), W[56] = A, W[57] = p, W[58] = f, W[59] = Ce;
  else Ce = W[59];
  let wt;
  if (W[60] !== re || W[61] !== E || W[62] !== a || W[63] !== i || W[64] !== I || W[65] !== m || W[66] !== h || W[67] !== y || W[68] !== t || W[69] !== oe || W[70] !== ct) wt = oe ? i ? r(V, {
    children: [r(n, {
      color: "suggestion",
      children: [t.label, t.labelValueSeparator ?? ", "]
    }), e(Qn, {
      value: a,
      onChange: (Pt) => {
        if (t.onChange(Pt) === !1) {
          return
        }
        Oe.current = !0, h(Pt)
      },
      onSubmit: y,
      onExit: I,
      placeholder: t.placeholder,
      focus: !E,
      showCursor: !0,
      multiline: !0,
      cursorOffset: re,
      onChangeCursorOffset: Se,
      columns: ct,
      onImagePaste: m,
      onPaste: (Kn) => {
        let Ot = a.slice(0, re);
        let Hn = a.slice(re);
        let Uo = Ot + Kn + Hn;
        if (t.onChange(Uo) === !1) {
          return
        }
        Oe.current = !0, h(Uo), Se(Ot.length + Kn.length)
      }
    })]
  }) : r(n, {
    children: [t.label, a ? t.labelValueSeparator ?? ", " : null, a || null]
  }) : i ? e(Qn, {
    value: a,
    onChange: (Et) => {
      if (t.onChange(Et) === !1) {
        return
      }
      Oe.current = !0, h(Et)
    },
    onSubmit: y,
    onExit: I,
    placeholder: t.placeholder || (typeof t.label === "string" ? t.label : void 0),
    focus: !E,
    showCursor: !0,
    multiline: !0,
    cursorOffset: re,
    onChangeCursorOffset: Se,
    columns: ct,
    onImagePaste: m,
    onPaste: (lt) => {
      let xn = a.slice(0, re);
      let At = a.slice(re);
      let qe = xn + lt + At;
      if (t.onChange(qe) === !1) {
        return
      }
      Oe.current = !0, h(qe), Se(xn.length + lt.length)
    }
  }) : e(n, {
    color: a ? void 0 : "inactive",
    children: a || t.placeholder || t.label
  }), W[60] = re, W[61] = E, W[62] = a, W[63] = i, W[64] = I, W[65] = m, W[66] = h, W[67] = y, W[68] = t, W[69] = oe, W[70] = ct, W[71] = wt;
  else wt = W[71];
  let sn;
  if (W[72] !== G || W[73] !== on || W[74] !== Ce || W[75] !== wt) sn = r(s, {
    flexDirection: "row",
    flexShrink: on,
    children: [Ce, G, wt]
  }), W[72] = G, W[73] = on, W[74] = Ce, W[75] = wt, W[76] = sn;
  else sn = W[76];
  let Y;
  if (W[77] !== J || W[78] !== i || W[79] !== u || W[80] !== he || W[81] !== l || W[82] !== d || W[83] !== sn) Y = e(S5, {
    isFocused: i,
    isSelected: u,
    shouldShowDownArrow: l,
    shouldShowUpArrow: d,
    declareCursor: !1,
    onClick: he,
    hoverStyle: J,
    children: sn
  }), W[77] = J, W[78] = i, W[79] = u, W[80] = he, W[81] = l, W[82] = d, W[83] = sn, W[84] = Y;
  else Y = W[84];
  let Ct;
  if (W[85] !== q || W[86] !== i || W[87] !== u || W[88] !== t.description || W[89] !== t.dimDescription) Ct = t.description && e(s, {
    paddingLeft: q,
    children: e(n, {
      dimColor: t.dimDescription !== !1,
      color: u ? "success" : i ? "suggestion" : void 0,
      children: t.description
    })
  }), W[85] = q, W[86] = i, W[87] = u, W[88] = t.description, W[89] = t.dimDescription, W[90] = Ct;
  else Ct = W[90];
  let Tt;
  if (W[91] !== q || W[92] !== j || W[93] !== E || W[94] !== i || W[95] !== B) Tt = j.length > 0 && r(s, {
    flexDirection: "row",
    gap: 1,
    paddingLeft: q,
    children: [j.map((In, yn) => e(Io, {
      imageId: In.id,
      isSelected: !!E && yn === B
    }, In.id)), e(s, {
      flexGrow: 1,
      justifyContent: "flex-start",
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: E ? r(ye, {
          children: [j.length > 1 && r(V, {
            children: [e(Xe, {
              action: "attachments:next",
              context: "Attachments",
              fallback: "\u2192",
              description: "next"
            }), e(Xe, {
              action: "attachments:previous",
              context: "Attachments",
              fallback: "\u2190",
              description: "prev"
            })]
          }), e(Xe, {
            action: "attachments:remove",
            context: "Attachments",
            fallback: "backspace",
            description: "remove"
          }), e(Xe, {
            action: "attachments:exit",
            context: "Attachments",
            fallback: "esc",
            description: "cancel"
          })]
        }) : i ? e(F, {
          chord: "down",
          action: "select",
          parens: !0
        }) : null
      })
    })]
  }), W[91] = q, W[92] = j, W[93] = E, W[94] = i, W[95] = B, W[96] = Tt;
  else Tt = W[96];
  let Nt;
  if (W[97] !== C) Nt = C === "expanded" && e(n, {
    children: " "
  }), W[97] = C, W[98] = Nt;
  else Nt = W[98];
  let Lt;
  if (W[99] !== Y || W[100] !== Ct || W[101] !== Tt || W[102] !== Nt) Lt = r(s, {
    flexDirection: "column",
    flexShrink: 0,
    children: [Y, Ct, Tt, Nt]
  }), W[99] = Y, W[100] = Ct, W[101] = Tt, W[102] = Nt, W[103] = Lt;
  else Lt = W[103];
  return Lt
}
N();
var Ti = ({
  isDisabled: o = !1,
  disableSelection: t = !1,
  state: i,
  options: u,
  isMultiSelect: l = !1,
  onUpFromFirstItem: d,
  onDownFromLastItem: f,
  onInputModeToggle: p,
  inputValues: b,
  imagesSelected: a = !1,
  onEnterImageSelection: h,
  onExitImageSelection: y,
  hasInkFocus: I = !0,
  keysDeferred: C
}) => {
  let {
    focusDirection: G
  } = Pue();
  vi("select", !!i.onCancel);
  let H = X(() => u.find((D) => D.value === i.focusedValue)?.type === "input", [u, i.focusedValue]),
    c = X(() => {
      let m = {};
      if (!H) m["select:next"] = () => {
        let D = u.at(-1);
        if (D && i.getFocusedValue() === D.value) {
          if (f) {
            f();
            return
          }
          if (G("down")) return
        }
        i.focusNextOption()
      }, m["select:previous"] = () => {
        let D = u[0];
        if (D && i.getFocusedValue() === D.value) {
          if (d) {
            d();
            return
          }
          if (G("up")) return
        }
        i.focusPreviousOption()
      }, m["select:first"] = () => {
        i.focusOption(u[0]?.value)
      }, m["select:last"] = () => {
        i.focusOption(u.at(-1)?.value)
      }, m["select:accept"] = () => {
        if (t === !0) return;
        let D = i.getFocusedValue();
        if (D === void 0) return;
        let M = u.find((E) => E.value === D);
        if (M?.disabled === !0) return;
        if (M?.type === "input") return;
        i.selectFocusedOption?.(), i.onChange?.(D)
      };
      if (i.onCancel) m["select:cancel"] = () => {
        i.onCancel()
      };
      return m
    }, [u, i, f, d, H, t, G]),
    te = X(() => {
      if (!C) return c;
      return io(c, (m) => () => {
        if (C()) return !1;
        m()
      })
    }, [c, C]);
  return Wt(te, {
    context: "Select",
    isActive: (!o || C !== void 0) && I
  }), {
    handleKeyDown: (m) => {
      if (o) return;
      let D = lH(m.key),
        M = i.getFocusedValue(),
        E = u.find((x) => x.value === M),
        _ = E?.type === "input";
      if (m.key === "tab") {
        if (m.preventDefault(), p && M !== void 0) p(M);
        return
      }
      if (_) {
        if (a) {
          if (m.key === "up") m.preventDefault(), y?.();
          return
        }
        if (m.key === "down" && h?.()) {
          m.stopImmediatePropagation();
          return
        }
        if (m.key === "down" || m.ctrl && m.key === "n") {
          if (f) {
            let x = u.at(-1);
            if (x && M === x.value) {
              f(), m.stopImmediatePropagation();
              return
            }
          }
          i.focusNextOption(), m.stopImmediatePropagation();
          return
        }
        if (m.key === "up" || m.ctrl && m.key === "p") {
          if (d) {
            let x = u[0];
            if (x && M === x.value) {
              d(), m.stopImmediatePropagation();
              return
            }
          }
          i.focusPreviousOption(), m.stopImmediatePropagation();
          return
        }
        return
      }
      if (H) {
        if (m.key === "down" || m.ctrl && m.key === "n") {
          if (f) {
            let x = u.at(-1);
            if (x && M === x.value) {
              f(), m.stopImmediatePropagation();
              return
            }
          }
          i.focusNextOption(), m.stopImmediatePropagation();
          return
        }
        if (m.key === "up" || m.ctrl && m.key === "p") {
          if (d) {
            let x = u[0];
            if (x && M === x.value) {
              d(), m.stopImmediatePropagation();
              return
            }
          }
          i.focusPreviousOption(), m.stopImmediatePropagation();
          return
        }
      }
      if (m.key === "pagedown") {
        m.preventDefault(), i.focusNextPage();
        return
      }
      if (m.key === "pageup") {
        m.preventDefault(), i.focusPreviousPage();
        return
      }
      if (t !== !0) {
        if (l && L2(m.key) === " " && M !== void 0) {
          if (E?.disabled !== !0) m.preventDefault(), i.selectFocusedOption?.(), i.onChange?.(M);
          return
        }
        if (t !== "numeric" && /^[0-9]$/.test(D)) {
          m.preventDefault();
          let x = parseInt(D) - 1;
          if (x >= 0 && x < i.options.length) {
            let L = i.options[x];
            if (L.disabled === !0) return;
            if (L.type === "input") {
              if ((b?.get(L.value) ?? "").trim()) {
                i.onChange?.(L.value);
                return
              }
              if (L.allowEmptySubmitToCancel) {
                i.onChange?.(L.value);
                return
              }
              i.focusOption(L.value);
              return
            }
            i.onChange?.(L.value);
            return
          }
        }
      }
    }
  }
};
N();
N();
import {
  isDeepStrictEqual as oc
} from "util";
class Oo extends Map {
  first;
  last;
  constructor(o) {
    let t = [],
      i, u, l, d = 0;
    for (let f of o) {
      let p = {
        value: f.value,
        previous: l,
        next: void 0,
        index: d
      };
      if (l) l.next = p;
      i ||= p, u = p, t.push([f.value, p]), d++, l = p
    }
    super(t);
    this.first = i, this.last = u
  }
}
var ic = (o, t) => {
    switch (t.type) {
      case "focus-next-option": {
        if (o.focusedValue === void 0) return o;
        let i = o.optionMap.get(o.focusedValue);
        if (!i) return o;
        let u = i.next || o.optionMap.first;
        if (!u) return o;
        if (!i.next && u === o.optionMap.first) return {
          ...o,
          focusedValue: u.value,
          visibleFromIndex: 0,
          visibleToIndex: o.visibleOptionCount
        };
        if (!(u.index >= o.visibleToIndex)) return {
          ...o,
          focusedValue: u.value
        };
        let d = Math.min(o.optionMap.size, o.visibleToIndex + 1),
          f = d - o.visibleOptionCount;
        return {
          ...o,
          focusedValue: u.value,
          visibleFromIndex: f,
          visibleToIndex: d
        }
      }
      case "focus-previous-option": {
        if (o.focusedValue === void 0) return o;
        let i = o.optionMap.get(o.focusedValue);
        if (!i) return o;
        let u = i.previous || o.optionMap.last;
        if (!u) return o;
        if (!i.previous && u === o.optionMap.last) {
          let p = o.optionMap.size,
            b = Math.max(0, p - o.visibleOptionCount);
          return {
            ...o,
            focusedValue: u.value,
            visibleFromIndex: b,
            visibleToIndex: p
          }
        }
        if (!(u.index <= o.visibleFromIndex)) return {
          ...o,
          focusedValue: u.value
        };
        let d = Math.max(0, o.visibleFromIndex - 1),
          f = d + o.visibleOptionCount;
        return {
          ...o,
          focusedValue: u.value,
          visibleFromIndex: d,
          visibleToIndex: f
        }
      }
      case "focus-next-page": {
        if (o.focusedValue === void 0) return o;
        let i = o.optionMap.get(o.focusedValue);
        if (!i) return o;
        let u = Math.min(o.optionMap.size - 1, i.index + o.visibleOptionCount),
          l = o.optionMap.first;
        while (l && l.index < u)
          if (l.next) l = l.next;
          else break;
        if (!l) return o;
        let d = Math.min(o.optionMap.size, l.index + 1),
          f = Math.max(0, d - o.visibleOptionCount);
        return {
          ...o,
          focusedValue: l.value,
          visibleFromIndex: f,
          visibleToIndex: d
        }
      }
      case "focus-previous-page": {
        if (o.focusedValue === void 0) return o;
        let i = o.optionMap.get(o.focusedValue);
        if (!i) return o;
        let u = Math.max(0, i.index - o.visibleOptionCount),
          l = o.optionMap.first;
        while (l && l.index < u)
          if (l.next) l = l.next;
          else break;
        if (!l) return o;
        let d = Math.max(0, l.index),
          f = Math.min(o.optionMap.size, d + o.visibleOptionCount);
        return {
          ...o,
          focusedValue: l.value,
          visibleFromIndex: d,
          visibleToIndex: f
        }
      }
      case "reset":
        return t.state;
      case "scroll-viewport": {
        let i = Math.min(Math.max(0, o.optionMap.size - o.visibleOptionCount), Math.max(0, o.visibleFromIndex + t.delta));
        if (i === o.visibleFromIndex) return o;
        let u = Math.min(o.optionMap.size, i + o.visibleOptionCount),
          l = o.focusedValue === void 0 ? void 0 : o.optionMap.get(o.focusedValue);
        while (l?.next && l.index < i) l = l.next;
        while (l?.previous && l.index >= u) l = l.previous;
        return {
          ...o,
          focusedValue: l?.value,
          visibleFromIndex: i,
          visibleToIndex: u
        }
      }
      case "set-focus": {
        if (o.focusedValue === t.value) return o;
        let i = o.optionMap.get(t.value);
        if (!i) return o;
        if (i.index >= o.visibleFromIndex && i.index < o.visibleToIndex) return {
          ...o,
          focusedValue: t.value
        };
        let u, l;
        if (i.index < o.visibleFromIndex) u = i.index, l = Math.min(o.optionMap.size, u + o.visibleOptionCount);
        else l = Math.min(o.optionMap.size, i.index + 1), u = Math.max(0, l - o.visibleOptionCount);
        return {
          ...o,
          focusedValue: t.value,
          visibleFromIndex: u,
          visibleToIndex: l
        }
      }
    }
  },
  rl = ({
    visibleOptionCount: o,
    options: t,
    initialFocusValue: i,
    currentViewport: u
  }) => {
    let l = typeof o === "number" ? Math.min(o, t.length) : t.length,
      d = new Oo(t),
      f = i !== void 0 && d.get(i),
      p = f ? i : d.first?.value,
      b = 0,
      a = l;
    if (f) {
      let h = f.index;
      if (u)
        if (h >= u.visibleFromIndex && h < u.visibleToIndex) {
          if (b = u.visibleFromIndex, a = Math.min(d.size, b + l), h >= a) a = Math.min(d.size, h + 1), b = Math.max(0, a - l);
          if (a - b < l) b = Math.max(0, a - l)
        } else if (h < u.visibleFromIndex) {
        if (b = h, a = Math.min(d.size, b + l), a - b < l) b = Math.max(0, a - l)
      } else a = Math.min(d.size, h + 1), b = Math.max(0, a - l);
      else if (h >= l) a = Math.min(d.size, h + 1), b = Math.max(0, a - l);
      b = Math.max(0, Math.min(b, d.size - 1)), a = Math.min(d.size, Math.max(l, a))
    }
    return {
      optionMap: d,
      visibleOptionCount: l,
      focusedValue: p,
      visibleFromIndex: b,
      visibleToIndex: a
    }
  };

function _vn({
  visibleOptionCount: o = 5,
  options: t,
  onFocus: i,
  focusValue: u
}) {
  let [l, d, f] = Ii(() => rl({
    visibleOptionCount: o,
    options: t,
    initialFocusValue: u
  })), p = se((O) => {
    d((he) => ic(he, O))
  }, [d]), b = Gr((O) => i?.(O)), a = T(void 0), [h, y] = g(t), [I, C] = g(o), G = t !== h && !oc(t, h), H = o !== I;
  if (G || H) {
    let O = f();
    if (p({
        type: "reset",
        state: rl({
          visibleOptionCount: o,
          options: t,
          initialFocusValue: G ? u ?? O.focusedValue : O.focusedValue ?? u,
          currentViewport: {
            visibleFromIndex: O.visibleFromIndex,
            visibleToIndex: O.visibleToIndex
          }
        })
      }), G) y(t);
    if (H) C(o)
  }
  let c = se((O) => {
      p(O);
      let he = Di(f().focusedValue, t);
      if (he !== void 0 && he !== a.current) a.current = he, i?.(he)
    }, [p, f, t, i]),
    te = se(() => {
      c({
        type: "focus-next-option"
      })
    }, [c]),
    z = se(() => {
      c({
        type: "focus-previous-option"
      })
    }, [c]),
    m = se(() => {
      c({
        type: "focus-next-page"
      })
    }, [c]),
    D = se(() => {
      c({
        type: "focus-previous-page"
      })
    }, [c]),
    M = se((O) => {
      let he = f().visibleFromIndex;
      return c({
        type: "scroll-viewport",
        delta: O
      }), f().visibleFromIndex !== he
    }, [c, f]),
    E = se((O) => {
      if (O !== void 0) c({
        type: "set-focus",
        value: O
      })
    }, [c]),
    _ = X(() => t.map((O, he) => ({
      ...O,
      index: he
    })).slice(l.visibleFromIndex, l.visibleToIndex), [t, l.visibleFromIndex, l.visibleToIndex]),
    x = X(() => Di(l.focusedValue, t), [l.focusedValue, t]),
    L = se(() => Di(f().focusedValue, t), [f, t]);
  return R(() => {
    if (x === void 0) {
      a.current = void 0;
      return
    }
    if (x !== a.current) a.current = x, b(x)
  }, [x]), R(() => {
    if (u !== void 0) p({
      type: "set-focus",
      value: u
    })
  }, [u, p]), {
    focusedValue: x,
    getFocusedValue: L,
    visibleFromIndex: l.visibleFromIndex,
    visibleToIndex: l.visibleToIndex,
    visibleOptions: _,
    focusNextOption: te,
    focusPreviousOption: z,
    focusNextPage: m,
    focusPreviousPage: D,
    focusOption: E,
    scrollViewport: M,
    options: t
  }
}

function Di(o, t) {
  if (o === void 0) return;
  if (t.some((i) => i.value === o)) return o;
  return t[0]?.value
}

function Fi({
  visibleOptionCount: o = 5,
  options: t,
  defaultValue: i,
  selectedValue: u,
  onChange: l,
  onCancel: d,
  onFocus: f,
  focusValue: p
}) {
  let [b, a] = g(i), h = _vn({
    visibleOptionCount: o,
    options: t,
    onFocus: f,
    focusValue: p
  }), {
    getFocusedValue: y
  } = h, I = se(() => {
    a(y())
  }, [y]);
  return {
    ...h,
    value: u !== void 0 ? u : b,
    selectFocusedOption: I,
    onChange: l,
    onCancel: d
  }
}
N();

function t_t({
  isDisabled: o,
  visibleFromIndex: t,
  visibleToIndex: i,
  optionCount: u,
  scrollViewport: l,
  shouldDropWheel: d
}) {
  let f = T(null);
  if (o || i - t >= u) return {
    ref: f,
    onWheel: void 0
  };
  return {
    ref: f,
    onWheel: (b) => {
      if (b.deltaY === 0 || d()) return;
      let a = f.current;
      if (a !== null && b.col !== void 0 && b.row !== void 0 && v5(a, b.col, b.row) === null) return;
      if (l(b.deltaY > 0 ? 1 : -1)) b.stopImmediatePropagation()
    }
  }
}

function Rp(If) {
  return If.type === "input"
}

function Pp(yf) {
  return yf.description
}

function Ep(Sf) {
  return Sf.type === "image"
}

function Ap(wf) {
  return wf.type === "image"
}

function Wp() {
  return {
    bold: !0
  }
}

function Np(Of) {
  return Of.type === "image"
}

function Lp(Cf) {
  return Cf.type === "image"
}

function Up(Tf) {
  return Tf.type === "image"
}
var ii = Symbol("NO_COMMITTED_ROW");

function Fe(o) {
  let u = w(11);
  if (_t()) {
    const i = o.selectedValue === ii ? o.defaultValue : o.selectedValue ?? o.defaultValue;
    let l;
    if (u[0] !== o.disableSelection || u[1] !== o.isDisabled || u[2] !== o.onCancel || u[3] !== o.onChange || u[4] !== o.onFocus || u[5] !== o.options || u[6] !== o.refuseInput || u[7] !== i) l = e(zK, {
      options: o.options,
      onChange: o.onChange,
      onFocus: o.onFocus,
      onCancel: o.onCancel,
      isDisabled: o.isDisabled,
      disableSelection: o.disableSelection,
      refuseInput: o.refuseInput,
      defaultValue: i
    }), u[0] = o.disableSelection, u[1] = o.isDisabled, u[2] = o.onCancel, u[3] = o.onChange, u[4] = o.onFocus, u[5] = o.options, u[6] = o.refuseInput, u[7] = i, u[8] = l;
    else l = u[8];
    return l
  }
  let i;
  if (u[9] !== o) i = e(Xi, {
    ...o
  }), u[9] = o, u[10] = i;
  else i = u[10];
  return i
}

function Xi(o) {
  let P = w(79),
    {
      isDisabled: t,
      hideIndexes: i,
      visibleOptionCount: u,
      highlightText: l,
      options: d,
      columnSizingOptions: f,
      defaultValue: p,
      selectedValue: b,
      onCancel: a,
      onChange: h,
      onFocus: y,
      defaultFocusValue: I,
      layout: C,
      disableSelection: G,
      inlineDescriptions: H,
      hoverStyle: c,
      inputChromeWidth: te,
      onUpFromFirstItem: z,
      onDownFromLastItem: m,
      onInputModeToggle: D,
      onOpenEditor: M,
      canPasteImage: E,
      onImagePaste: _,
      pastedContents: x,
      onRemoveImage: L,
      keysDeferred: O,
      pointerWhileDisabled: he
    } = o,
    J = t === void 0 ? !1 : t,
    A = i === void 0 ? !1 : i,
    st = u === void 0 ? 5 : u,
    ne = f === void 0 ? d : f,
    B = C === void 0 ? "compact" : C,
    Te = G === void 0 ? !1 : G,
    W = H === void 0 ? !1 : H,
    ge = te === void 0 ? 0 : te,
    j = he === void 0 ? !1 : he,
    [oe, re] = g(!1),
    [Se, Oe] = g(0),
    ue;
  if (P[0] !== d) ue = () => {
    let Ne = new Map;
    return d.forEach((de) => {
      if (de.type === "input" && de.initialValue) Ne.set(de.value, de.initialValue)
    }), Ne
  }, P[0] = d, P[1] = ue;
  else ue = P[1];
  let [K, rt] = g(ue), mt;
  if (P[2] === S) mt = new Map, P[2] = mt;
  else mt = P[2];
  let yt = T(mt),
    Me, tn;
  if (P[3] !== K || P[4] !== d) Me = () => {
    for (const Re of d) {
      if (Re.type === "input" && Re.initialValue !== void 0) {
        let St = yt.current.get(Re.value) ?? "";
        let je = K.get(Re.value) ?? "";
        let Ke = Re.initialValue;
        if (Ke !== St && je === St) rt((ut) => {
          let He = new Map(ut);
          return He.set(Re.value, Ke), He
        });
        yt.current.set(Re.value, Ke)
      }
    }
  }, tn = [d, K], P[3] = K, P[4] = d, P[5] = Me, P[6] = tn;
  else Me = P[5], tn = P[6];
  R(Me, tn);
  let _e = B === "compact" && !W && !ne.some(Rp) && ne.some(Pp),
    {
      columns: De
    } = As(ve());
  const Le = n_t(st, _e ? "compact-vertical" : B);
  let Ge;
  if (P[7] !== I || P[8] !== p || P[9] !== a || P[10] !== h || P[11] !== y || P[12] !== d || P[13] !== b || P[14] !== Le) Ge = {
    visibleOptionCount: Le,
    options: d,
    defaultValue: p,
    selectedValue: b,
    onChange: h,
    onCancel: a,
    onFocus: y,
    focusValue: I
  }, P[7] = I, P[8] = p, P[9] = a, P[10] = h, P[11] = y, P[12] = d, P[13] = b, P[14] = Le, P[15] = Ge;
  else Ge = P[15];
  let v = Fi(Ge),
    [ht, q] = g(!0),
    dt = Yg(),
    vt = zJe(),
    nn;
  if (P[16] !== Te || P[17] !== J || P[18] !== j || P[19] !== dt || P[20] !== v) nn = (ct) => J && !j || Te === !0 || ct.disabled === !0 ? void 0 : (on) => {
    if (dt(on)) {
      return
    }
    if (ct.type === "input") v.focusOption(ct.value);
    else v.onChange?.(ct.value)
  }, P[16] = Te, P[17] = J, P[18] = j, P[19] = dt, P[20] = v, P[21] = nn;
  else nn = P[21];
  let Ce = nn;
  const wt = Te || (A ? "numeric" : !1);
  let Pt;
  if (P[22] !== x) Pt = () => {
    if (x && Object.values(x).some(Ep)) {
      let Kn = U(Object.values(x), Ap);
      return re(!0), Oe(Kn - 1), !0
    }
    return !1
  }, P[22] = x, P[23] = Pt;
  else Pt = P[23];
  let Ot;
  if (P[24] === S) Ot = () => {
    re(!1)
  }, P[24] = Ot;
  else Ot = P[24];
  let Hn;
  if (P[25] !== ht || P[26] !== oe || P[27] !== K || P[28] !== J || P[29] !== O || P[30] !== m || P[31] !== D || P[32] !== z || P[33] !== d || P[34] !== v || P[35] !== wt || P[36] !== Pt) Hn = {
    isDisabled: J,
    hasInkFocus: ht,
    keysDeferred: O,
    disableSelection: wt,
    state: v,
    options: d,
    isMultiSelect: !1,
    onUpFromFirstItem: z,
    onDownFromLastItem: m,
    onInputModeToggle: D,
    inputValues: K,
    imagesSelected: oe,
    onEnterImageSelection: Pt,
    onExitImageSelection: Ot
  }, P[25] = ht, P[26] = oe, P[27] = K, P[28] = J, P[29] = O, P[30] = m, P[31] = D, P[32] = z, P[33] = d, P[34] = v, P[35] = wt, P[36] = Pt, P[37] = Hn;
  else Hn = P[37];
  let {
    handleKeyDown: Uo
  } = Ti(Hn), Et = T(null);
  Mf(Et, !J);
  let lt = {
      container: () => ({
        flexDirection: "column",
        ref: Et,
        ...J ? {} : {
          tabIndex: 0,
          onKeyDown: Uo,
          onFocus: () => q(!0),
          onBlur: () => q(!1)
        }
      }),
      highlightedText: Wp
    },
    xn;
  if (P[38] !== J || P[39] !== d.length || P[40] !== vt || P[41] !== v.scrollViewport || P[42] !== v.visibleFromIndex || P[43] !== v.visibleToIndex) xn = {
    isDisabled: J,
    visibleFromIndex: v.visibleFromIndex,
    visibleToIndex: v.visibleToIndex,
    optionCount: d.length,
    scrollViewport: v.scrollViewport,
    shouldDropWheel: vt
  }, P[38] = J, P[39] = d.length, P[40] = vt, P[41] = v.scrollViewport, P[42] = v.visibleFromIndex, P[43] = v.visibleToIndex, P[44] = xn;
  else xn = P[44];
  let At = t_t(xn);
  if (B === "expanded") {
    let qe;
    if (P[45] !== A || P[46] !== v.options) qe = A ? 0 : v.options.length.toString().length, P[45] = A, P[46] = v.options, P[47] = qe;
    else qe = P[47];
    let sn = qe;
    return e(It, {
      container: lt.container(),
      rows: At,
      children: v.visibleOptions.map((Y, Ct) => {
        let Tt = Y.index === v.visibleFromIndex;
        let In = Y.index === v.visibleToIndex - 1;
        let yn = v.visibleToIndex < d.length;
        let Nt = v.visibleFromIndex > 0;
        let Lt = v.visibleFromIndex + Ct + 1;
        let Ut = !J && v.focusedValue === Y.value;
        let rn = v.value === Y.value;
        if (Y.type === "input") {
          let Bt = K.has(Y.value) ? K.get(Y.value) : Y.initialValue || "";
          return e(Aue, {
            option: Y,
            onClick: Ce(Y),
            hoverStyle: c,
            isFocused: Ut,
            isSelected: rn,
            shouldShowDownArrow: yn && In,
            shouldShowUpArrow: Nt && Tt,
            maxIndexWidth: sn,
            index: Lt,
            hideIndex: A,
            extraChromeWidth: ge,
            inputValue: Bt,
            onInputChange: (Bo) => {
              rt(($o) => {
                let Sn = new Map($o);
                return Sn.set(Y.value, Bo), Sn
              })
            },
            onSubmit: (zn) => {
              let Zi = x && Object.values(x).some(Np);
              if (zn.trim() || Zi || Y.allowEmptySubmitToCancel) h?.(Y.value);
              else a?.()
            },
            onExit: a,
            layout: "expanded",
            showLabel: W,
            onOpenEditor: M,
            resetCursorOnUpdate: Y.resetCursorOnUpdate,
            canPasteImage: E,
            onImagePaste: _,
            pastedContents: x,
            onRemoveImage: L,
            imagesSelected: oe,
            selectedImageIndex: Se,
            onImagesSelectedChange: re,
            onSelectedImageIndexChange: Oe
          }, String(Y.value))
        }
        let es = Y.label;
        if (typeof Y.label === "string" && l && Y.label.includes(l)) {
          let jo = Y.label;
          let ts = jo.indexOf(l);
          es = r(V, {
            children: [jo.slice(0, ts), e(n, {
              ...lt.highlightedText(),
              children: l
            }), jo.slice(ts + l.length)]
          })
        }
        let Ko = Y.disabled === !0;
        let ns = Ko ? void 0 : rn ? "success" : Ut ? "suggestion" : void 0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [e(S5, {
            isFocused: Ut,
            isSelected: rn,
            shouldShowDownArrow: yn && In,
            shouldShowUpArrow: Nt && Tt,
            onClick: Ce(Y),
            hoverStyle: c,
            children: e(n, {
              dimColor: Ko,
              color: ns,
              children: es
            })
          }), Y.description && e(s, {
            paddingLeft: 2,
            children: e(n, {
              dimColor: Ko || Y.dimDescription !== !1,
              color: ns,
              children: e(Jr, {
                children: Y.description
              })
            })
          }), e(n, {
            children: " "
          })]
        }, String(Y.value))
      })
    })
  }
  if (B === "compact-vertical") {
    let qe;
    if (P[48] !== A || P[49] !== v.options) qe = A ? 0 : v.options.length.toString().length, P[48] = A, P[49] = v.options, P[50] = qe;
    else qe = P[50];
    let os = qe;
    return e(It, {
      container: lt.container(),
      rows: At,
      children: v.visibleOptions.map((ce, Bp) => {
        let Yl = ce.index === v.visibleFromIndex;
        let Jl = ce.index === v.visibleToIndex - 1;
        let Xl = v.visibleToIndex < d.length;
        let Ql = v.visibleFromIndex > 0;
        let Zl = v.visibleFromIndex + Bp + 1;
        let Ho = !J && v.focusedValue === ce.value;
        let zo = v.value === ce.value;
        if (ce.type === "input") {
          let $p = K.has(ce.value) ? K.get(ce.value) : ce.initialValue || "";
          return e(Aue, {
            option: ce,
            onClick: Ce(ce),
            hoverStyle: c,
            isFocused: Ho,
            isSelected: zo,
            shouldShowDownArrow: Xl && Jl,
            shouldShowUpArrow: Ql && Yl,
            maxIndexWidth: os,
            index: Zl,
            hideIndex: A,
            extraChromeWidth: ge,
            inputValue: $p,
            onInputChange: (jp) => {
              rt((Kp) => {
                let ea = new Map(Kp);
                return ea.set(ce.value, jp), ea
              })
            },
            onSubmit: (Hp) => {
              let zp = x && Object.values(x).some(Lp);
              if (Hp.trim() || zp || ce.allowEmptySubmitToCancel) h?.(ce.value);
              else a?.()
            },
            onExit: a,
            layout: "compact",
            showLabel: W,
            onOpenEditor: M,
            resetCursorOnUpdate: ce.resetCursorOnUpdate,
            canPasteImage: E,
            onImagePaste: _,
            pastedContents: x,
            onRemoveImage: L,
            imagesSelected: oe,
            selectedImageIndex: Se,
            onImagesSelectedChange: re,
            onSelectedImageIndexChange: Oe
          }, String(ce.value))
        }
        let na = ce.label;
        if (typeof ce.label === "string" && l && ce.label.includes(l)) {
          let is = ce.label;
          let oa = is.indexOf(l);
          na = r(V, {
            children: [is.slice(0, oa), e(n, {
              ...lt.highlightedText(),
              children: l
            }), is.slice(oa + l.length)]
          })
        }
        let _o = ce.disabled === !0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [e(S5, {
            isFocused: Ho,
            isSelected: zo,
            shouldShowDownArrow: Xl && Jl,
            shouldShowUpArrow: Ql && Yl,
            onClick: Ce(ce),
            hoverStyle: c,
            children: r(V, {
              children: [!A && e(n, {
                dimColor: !0,
                children: `${Zl}.`.padEnd(os + 1)
              }), e(n, {
                dimColor: _o,
                color: _o ? void 0 : zo ? "success" : Ho ? "suggestion" : void 0,
                children: na
              })]
            })
          }), ce.description && e(s, {
            paddingLeft: A ? 4 : os + 4,
            children: e(n, {
              dimColor: _o || ce.dimDescription !== !1,
              color: _o ? void 0 : zo ? "success" : Ho ? "suggestion" : void 0,
              children: e(Jr, {
                children: ce.description
              })
            })
          })]
        }, String(ce.value))
      })
    })
  }
  let qe;
  if (P[51] !== ne || P[52] !== A) qe = A ? 0 : ne.length.toString().length, P[51] = ne, P[52] = A, P[53] = qe;
  else qe = P[53];
  let $t = qe;
  if (_e) {
    let jt, _n;
    if (P[54] !== De || P[55] !== ne || P[56] !== A || P[57] !== $t || P[58] !== v.value) {
      jt = A ? 0 : $t + 2;
      let Kt;
      if (P[61] !== ne || P[62] !== jt || P[63] !== v.value) {
        let Dt;
        if (P[65] !== jt || P[66] !== v.value) Dt = (ss) => {
          if (ss.type === "input") {
            return 0
          }
          let _p = v.value === ss.value ? 2 : 0;
          return 2 + jt + ie(Jv(ss.label)) + _p
        }, P[65] = jt, P[66] = v.value, P[67] = Dt;
        else Dt = P[67];
        Kt = Math.max(...ne.map(Dt));
        P[61] = ne, P[62] = jt, P[63] = v.value, P[64] = Kt
      } else Kt = P[64];
      _n = Math.min(Kt, Math.floor(De * Hl));
      P[54] = De, P[55] = ne, P[56] = A, P[57] = $t, P[58] = v.value, P[59] = jt, P[60] = _n
    } else jt = P[59], _n = P[60];
    let tf = v.visibleOptions.map((Ht, Gp) => {
      let qp = Ht.index === v.visibleFromIndex;
      let Yp = Ht.index === v.visibleToIndex - 1;
      let Jp = v.visibleToIndex < d.length;
      let Xp = v.visibleFromIndex > 0;
      let Qp = v.visibleFromIndex + Gp + 1;
      let Zp = !J && v.focusedValue === Ht.value;
      let ia = v.value === Ht.value;
      let ef = Ht.disabled === !0;
      let sa = ia ? 2 : 0;
      let Gn = Jv(Ht.label);
      let wn = Ht.label;
      let ra = _n - 2 - jt - sa;
      if (ie(Gn) > ra) Gn = ot(Gn, ra), wn = Gn;
      if (typeof wn === "string" && l && wn.includes(l)) {
        let ls = wn;
        let la = ls.indexOf(l);
        wn = r(V, {
          children: [ls.slice(0, la), e(n, {
            ...lt.highlightedText(),
            children: l
          }), ls.slice(la + l.length)]
        })
      }
      return {
        option: Ht,
        index: Qp,
        label: wn,
        labelWidth: 2 + jt + ie(Gn) + sa,
        isFocused: Zp,
        isSelected: ia,
        isOptionDisabled: ef,
        shouldShowDownArrow: Jp && Yp,
        shouldShowUpArrow: Xp && qp
      }
    });
    const Kt = lt.container();
    let Dt;
    if (P[68] !== Ce || P[69] !== A || P[70] !== c || P[71] !== $t || P[72] !== _n) Dt = (be) => {
      if (be.option.type === "input") {
        return null
      }
      let aa = _n - be.labelWidth;
      return r(Qi, {
        isFocused: be.isFocused,
        shouldShowDownArrow: be.shouldShowDownArrow,
        shouldShowUpArrow: be.shouldShowUpArrow,
        onClick: Ce(be.option),
        hoverStyle: c,
        children: [r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [e(n, {
            children: " "
          }), r(n, {
            dimColor: be.isOptionDisabled,
            color: be.isOptionDisabled ? void 0 : be.isSelected ? "success" : be.isFocused ? "suggestion" : void 0,
            children: [!A && e(n, {
              dimColor: !0,
              children: `${be.index}.`.padEnd($t + 2)
            }), be.label]
          }), be.isSelected && r(n, {
            children: [" ", e(et, {
              status: "success"
            })]
          }), aa > 0 && e(n, {
            children: " ".repeat(aa)
          })]
        }), e(s, {
          flexGrow: 1,
          marginLeft: 2,
          children: e(n, {
            wrap: "wrap",
            dimColor: be.option.descriptionColor === void 0 && (be.isOptionDisabled || be.option.dimDescription !== !1),
            color: be.isOptionDisabled ? be.option.descriptionColor : be.isSelected ? "success" : be.isFocused ? "suggestion" : be.option.descriptionColor,
            children: e(Jr, {
              children: be.option.description || " "
            })
          })
        })]
      }, String(be.option.value))
    }, P[68] = Ce, P[69] = A, P[70] = c, P[71] = $t, P[72] = _n, P[73] = Dt;
    else Dt = P[73];
    return e(It, {
      container: Kt,
      rows: At,
      children: tf.map(Dt)
    })
  }
  const as = It,
    Kt = lt.container(),
    Dt = v.visibleOptions.map((ee, ua) => {
      if (ee.type === "input") {
        let nf = K.has(ee.value) ? K.get(ee.value) : ee.initialValue || "";
        let of = ee.index === v.visibleFromIndex;
        let sf = ee.index === v.visibleToIndex - 1;
        let rf = v.visibleToIndex < d.length;
        let lf = v.visibleFromIndex > 0;
        let af = v.visibleFromIndex + ua + 1;
        let uf = !J && v.focusedValue === ee.value;
        let df = v.value === ee.value;
        return e(Aue, {
          option: ee,
          onClick: Ce(ee),
          hoverStyle: c,
          isFocused: uf,
          isSelected: df,
          shouldShowDownArrow: rf && sf,
          shouldShowUpArrow: lf && of,
          maxIndexWidth: $t,
          index: af,
          hideIndex: A,
          extraChromeWidth: ge,
          inputValue: nf,
          onInputChange: (cf) => {
            rt((pf) => {
              let da = new Map(pf);
              return da.set(ee.value, cf), da
            })
          },
          onSubmit: (ff) => {
            let mf = x && Object.values(x).some(Up);
            if (ff.trim() || mf || ee.allowEmptySubmitToCancel) h?.(ee.value);
            else a?.()
          },
          onExit: a,
          layout: "compact",
          showLabel: W,
          onOpenEditor: M,
          resetCursorOnUpdate: ee.resetCursorOnUpdate,
          canPasteImage: E,
          onImagePaste: _,
          pastedContents: x,
          onRemoveImage: L,
          imagesSelected: oe,
          selectedImageIndex: Se,
          onImagesSelectedChange: re,
          onSelectedImageIndexChange: Oe
        }, String(ee.value))
      }
      let ca = ee.label;
      if (typeof ee.label === "string" && l && ee.label.includes(l)) {
        let us = ee.label;
        let pa = us.indexOf(l);
        ca = r(V, {
          children: [us.slice(0, pa), e(n, {
            ...lt.highlightedText(),
            children: l
          }), us.slice(pa + l.length)]
        })
      }
      let hf = ee.index === v.visibleFromIndex;
      let bf = ee.index === v.visibleToIndex - 1;
      let vf = v.visibleToIndex < d.length;
      let gf = v.visibleFromIndex > 0;
      let xf = v.visibleFromIndex + ua + 1;
      let ds = !J && v.focusedValue === ee.value;
      let cs = v.value === ee.value;
      let qn = ee.disabled === !0;
      return r(S5, {
        isFocused: ds,
        isSelected: cs,
        shouldShowDownArrow: vf && bf,
        shouldShowUpArrow: gf && hf,
        onClick: Ce(ee),
        hoverStyle: c,
        children: [r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [!A && e(n, {
            dimColor: !0,
            children: `${xf}.`.padEnd($t + 2)
          }), r(n, {
            dimColor: qn,
            color: qn ? void 0 : cs ? "success" : ds ? "suggestion" : void 0,
            children: [ca, W && ee.description && r(n, {
              dimColor: qn || ee.dimDescription !== !1,
              children: [" ", ee.description]
            })]
          })]
        }), !W && ee.description && e(s, {
          flexShrink: 99,
          marginLeft: 2,
          children: e(n, {
            wrap: "wrap-trim",
            dimColor: qn || ee.dimDescription !== !1,
            color: qn ? void 0 : cs ? "success" : ds ? "suggestion" : void 0,
            children: e(Jr, {
              children: ee.description
            })
          })
        })]
      }, String(ee.value))
    });
  let fa;
  if (P[74] !== as || P[75] !== At || P[76] !== Kt || P[77] !== Dt) fa = e(as, {
    container: Kt,
    rows: At,
    children: Dt
  }), P[74] = as, P[75] = At, P[76] = Kt, P[77] = Dt, P[78] = fa;
  else fa = P[78];
  return fa
}
var Kl = 8,
  Hl = 0.6;

function n_t(o, t) {
  let i = t === void 0 ? "compact" : t,
    {
      rows: u
    } = As(ve()),
    l = i === "expanded" ? 3 : i === "compact" ? 1 : 2,
    d = Math.max(1, Math.floor((u - Kl) / l));
  return Math.min(o, d)
}

function It(o) {
  let l = w(6),
    {
      container: t,
      rows: i,
      children: u
    } = o,
    d;
  if (l[0] !== u || l[1] !== i) d = e(DQ, {
    ...i,
    children: u
  }), l[0] = u, l[1] = i, l[2] = d;
  else d = l[2];
  let f;
  if (l[3] !== t || l[4] !== d) f = e(s, {
    ...t,
    children: d
  }), l[3] = t, l[4] = d, l[5] = f;
  else f = l[5];
  return f
}

function Qi(o) {
  let I = w(24),
    {
      isFocused: t,
      shouldShowDownArrow: i,
      shouldShowUpArrow: u,
      onClick: l,
      hoverStyle: d,
      children: f
    } = o,
    p = l !== void 0,
    [b, a] = aIe(p),
    h = Rue(d),
    y = p && b && h === "inverse",
    C;
  if (I[0] !== t) C = {
    line: 0,
    column: 0,
    active: t
  }, I[0] = t, I[1] = C;
  else C = I[1];
  let G = Yw(C);
  const H = p && b && h === "tint" ? Xv : void 0;
  let c;
  if (I[2] !== p || I[3] !== a) c = p ? () => a(!0) : void 0, I[2] = p, I[3] = a, I[4] = c;
  else c = I[4];
  let te;
  if (I[5] !== p || I[6] !== a) te = p ? () => a(!1) : void 0, I[5] = p, I[6] = a, I[7] = te;
  else te = I[7];
  let z;
  if (I[8] !== p || I[9] !== h || I[10] !== b || I[11] !== y || I[12] !== t || I[13] !== i || I[14] !== u) z = e(s, {
    flexShrink: 0,
    children: t ? e(n, {
      color: "suggestion",
      inverse: y,
      children: Z.pointer
    }) : i ? e(n, {
      dimColor: !0,
      inverse: y,
      children: Z.arrowDown
    }) : u ? e(n, {
      dimColor: !0,
      inverse: y,
      children: Z.arrowUp
    }) : p && b && h === "pointer" ? e(n, {
      dimColor: !0,
      children: Z.pointer
    }) : e(n, {
      inverse: y,
      children: " "
    })
  }), I[8] = p, I[9] = h, I[10] = b, I[11] = y, I[12] = t, I[13] = i, I[14] = u, I[15] = z;
  else z = I[15];
  let m;
  if (I[16] !== f || I[17] !== G || I[18] !== l || I[19] !== H || I[20] !== c || I[21] !== te || I[22] !== z) m = r(s, {
    ref: G,
    flexDirection: "row",
    flexShrink: 0,
    backgroundColor: H,
    onClick: l,
    onMouseEnter: c,
    onMouseLeave: te,
    children: [z, f]
  }), I[16] = f, I[17] = G, I[18] = l, I[19] = H, I[20] = c, I[21] = te, I[22] = z, I[23] = m;
  else m = I[23];
  return m
}
export {
  Xv,
  Rue,
  DQ,
  aIe,
  tw,
  Gi,
  yh,
  gc,
  e_t,
  rs,
  zK,
  hvn,
  yvn,
  S5,
  Aue,
  Ii,
  _vn,
  t_t,
  ii,
  Fe,
  n_t
};
