// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  qw,
  ol,
  As,
  toe,
  hje
} from "B:/~BUN/root/chunk-syke822n.js";
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  rL
} from "B:/~BUN/root/chunk-trcn2d68.js";
import {
  ie
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  dE
} from "B:/~BUN/root/chunk-ey46s1kg.js";
import {
  s,
  n,
  Yw,
  Pue,
  VK,
  Xi
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  pe
} from "B:/~BUN/root/chunk-nf4z9ga7.js";
import {
  Wt
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  Yg
} from "B:/~BUN/root/chunk-vabpvk99.js";
import {
  Ab
} from "B:/~BUN/root/chunk-9k8er6ef.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Vt,
  se,
  Pe,
  sn,
  X,
  RE,
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function ao(rt) {
  return [rt.props.id ?? rt.props.title, rt.props.title]
}

function io(Bo) {
  return Bo + 1
}

function so(No) {
  return No - 1
}

function co(Ao) {
  return Ao + 1
}

function uo(Po, m) {
  let [, fn] = m;
  return Po + (fn ? ie(fn) : 0) + 2 + 1
}
var C = Vt({
  selectedTab: void 0,
  width: void 0,
  headerFocused: !1,
  focusHeader: () => {},
  blurHeader: () => {},
  registerOptIn: () => () => {}
});

function z_(m) {
  let a = w(51),
    {
      title: i,
      color: d,
      defaultTab: h,
      children: c,
      hidden: t,
      useFullWidth: v,
      selectedTab: H,
      onTabChange: P,
      banner: k,
      disableNavigation: b,
      initialHeaderFocused: I,
      contentHeight: y,
      stableHeight: Z,
      navFromContent: Ae
    } = m,
    V = I === void 0 ? !0 : I,
    f = Z === void 0 ? !1 : Z,
    Bt = Ae === void 0 ? !1 : Ae,
    {
      columns: ue
    } = ve(),
    p = c.map(ao),
    he = h ? p.findIndex((L) => h === L[0]) : 0,
    Ve = H !== void 0,
    [ho, fo] = g(he !== -1 ? he : 0),
    Nt = Ve ? p.findIndex((bo) => bo[0] === H) : -1,
    D = Ve ? Nt !== -1 ? Nt : 0 : ho,
    fe = Pe(qw),
    M = toe(),
    W = hje(),
    Ke = T(null),
    [be, po] = g(0),
    At;
  if (a[0] !== be) At = () => {
    let Pt = Ke.current ? Xi(Ke.current).height : 0;
    if (Pt !== be) po(Pt)
  }, a[0] = be, a[1] = At;
  else At = a[1];
  sn(At);
  let ee = (t ? 0 : 2) + be,
    Kt, jt;
  if (a[2] !== W || a[3] !== ee) Kt = () => {
    if (!W) {
      return
    }
    return W(ee), () => W(null)
  }, jt = [W, ee], a[2] = W, a[3] = ee, a[4] = Kt, a[5] = jt;
  else Kt = a[4], jt = a[5];
  sn(Kt, jt);
  let Gt;
  if (a[6] === S) Gt = {
    rows: 0,
    columns: 0
  }, a[6] = Gt;
  else Gt = a[6];
  let {
    rows: mo
  } = As(Gt), E = W !== null && M !== null, je = M?.attach, me = E ? mo - ee : void 0, Ut;
  if (a[7] !== fe || a[8] !== E) Ut = fe && E ? {
    ...fe,
    claimScrollBox: null
  } : null, a[7] = fe, a[8] = E, a[9] = Ut;
  else Ut = a[9];
  let Ge = Ut,
    ar = !0,
    Ue = T(null),
    te = T(null),
    Ye = T(null),
    {
      focus: ge,
      activeElement: K,
      focusDirection: _e,
      blur: qe
    } = Pue(),
    [j, ne] = g(V),
    Yt;
  if (a[10] !== K || a[11] !== ge) Yt = () => {
    if (!0 && Ue.current) ge(Ue.current);
    else if (!1 && te.current) {
      if (K && K !== te.current && rL(K, te.current)) Ye.current = K;
      ge(te.current)
    }
    ne(!0)
  }, a[10] = K, a[11] = ge, a[12] = Yt;
  else Yt = a[12];
  let _t = Yt,
    qt;
  if (a[13] !== qe) qt = () => {
    qe();
    Ye.current = null, ne(!1)
  }, a[13] = qe, a[14] = qt;
  else qt = a[14];
  let go = qt,
    [vo, zt] = g(0),
    Jt;
  if (a[15] === S) Jt = () => (zt(io), () => zt(so)), a[15] = Jt;
  else Jt = a[15];
  let wo = Jt,
    O = vo > 0,
    Qt = j || !O,
    ze = T(null),
    ko = VK(ze),
    xo = !0 && !O ? !ko : Qt,
    [Xt, To] = RE(co, 0),
    Zt = T(null),
    $t;
  if (a[16] === S) $t = () => {
    Ye.current = null
  }, a[16] = $t;
  else $t = a[16];
  sn($t, [D]);
  let tn = (Je, Lt) => {
      let Co = Lt === void 0 ? !1 : Lt;
      Zt.current = {
        epoch: Xt,
        index: Je
      }, To();
      let en = p[Je]?.[0];
      if (Ve && P && en) P(en);
      else fo(Je);
      if (Co) {
        return
      }
      _t()
    },
    we = (Fo, nn) => {
      let Ro = nn === void 0 ? !1 : nn;
      let on = Zt.current;
      let Ho = on?.epoch === Xt ? on.index : D;
      tn((Ho + p.length + Fo) % p.length, Ro)
    };
  const Qe = !t && !b && Qt;
  let rn;
  if (a[17] !== Qe) rn = {
    context: "Tabs",
    isActive: Qe
  }, a[17] = Qe, a[18] = rn;
  else rn = a[18];
  Wt({
    "tabs:next": () => we(1),
    "tabs:previous": () => we(-1)
  }, rn);
  let ln;
  if (a[19] !== b || a[20] !== _e || a[21] !== j || a[22] !== t || a[23] !== O) ln = (u) => {
    if (t || b) {
      return
    }
    if (!j) {
      if (u.key === "left" || u.key === "right" || u.key === "tab" || O && (u.key === "up" || u.key === "down")) u.preventDefault();
      return
    }
    if (u.key === "left" || u.key === "right" || u.key === "tab") u.preventDefault();
    else if (u.key === "down" && O) u.preventDefault(), _e("down"), ne(!1)
  }, a[19] = b, a[20] = _e, a[21] = j, a[22] = t, a[23] = O, a[24] = ln;
  else ln = a[24];
  let an = ln;
  const Xe = Bt && !j && O && !t && !b;
  let dn;
  if (a[25] !== Xe) dn = {
    context: "Tabs",
    isActive: Xe
  }, a[25] = Xe, a[26] = dn;
  else dn = a[26];
  Wt({
    "tabs:next": () => we(1, !0),
    "tabs:previous": () => we(-1, !0)
  }, dn);
  let Io = i ? ie(i) + 1 : 0,
    yo = p.reduce(uo, 0),
    So = Io + yo,
    cn = v ? Math.max(0, ue - So) : 0,
    oe = v ? ue : void 0;
  const Do = {
      selectedTab: p[D][0],
      width: oe,
      headerFocused: j,
      focusHeader: _t,
      blurHeader: go,
      registerOptIn: wo
    },
    Ze = s,
    $e = !0 ? void 0 : te,
    Mo = "column",
    Le = !0 ? void 0 : 0,
    et = !0 ? void 0 : V,
    tt = !0 ? void 0 : an,
    nt = M ? 0 : void 0,
    ot = !t && r(s, {
      ref: !0 ? Ue : void 0,
      tabIndex: !0 ? 0 : void 0,
      autoFocus: !0 ? V : void 0,
      onFocus: !0 ? () => ne(!0) : void 0,
      onBlur: !0 ? () => ne(!1) : void 0,
      onKeyDown: !0 ? an : void 0,
      flexDirection: "row",
      gap: 1,
      flexShrink: M ? 0 : void 0,
      alignSelf: !0 && !v ? "flex-start" : void 0,
      children: [i !== void 0 && e(n, {
        bold: !0,
        color: d,
        children: i
      }), p.map((Wo, un) => {
        let [Eo, Oo] = Wo;
        return e(Uyt, {
          title: Oo,
          isCurrent: D === un,
          headerFocused: xo && !b,
          color: d ?? (!0 ? "suggestion" : void 0),
          onClick: b ? void 0 : () => tn(un)
        }, Eo)
      }), cn > 0 && e(n, {
        children: " ".repeat(cn)
      })]
    });
  let ke;
  if (a[27] !== k) ke = k != null && e(s, {
    ref: Ke,
    flexDirection: "column",
    flexShrink: 0,
    children: k
  }), a[27] = k, a[28] = ke;
  else ke = a[28];
  let xe;
  if (a[29] !== je || a[30] !== Ge || a[31] !== c || a[32] !== y || a[33] !== oe || a[34] !== t || a[35] !== M || a[36] !== E || a[37] !== me || a[38] !== D || a[39] !== f) xe = E ? e(s, {
    ref: ze,
    width: oe,
    marginTop: t ? 0 : 1,
    flexShrink: 0,
    children: e(dE, {
      ref: je,
      flexDirection: "column",
      flexShrink: 0,
      height: f ? me : void 0,
      maxHeight: f ? void 0 : me,
      stickyScroll: !1,
      children: e(qw, {
        value: Ge,
        children: c
      })
    }, D)
  }) : e(s, {
    ref: ze,
    width: oe,
    marginTop: t ? 0 : 1,
    height: f ? void 0 : y,
    minHeight: f ? y : void 0,
    overflowY: y !== void 0 && !f ? "hidden" : void 0,
    flexShrink: M ? 0 : void 0,
    children: c
  }), a[29] = je, a[30] = Ge, a[31] = c, a[32] = y, a[33] = oe, a[34] = t, a[35] = M, a[36] = E, a[37] = me, a[38] = D, a[39] = f, a[40] = xe;
  else xe = a[40];
  let hn;
  if (a[41] !== Ze || a[42] !== $e || a[43] !== Le || a[44] !== et || a[45] !== tt || a[46] !== nt || a[47] !== ot || a[48] !== ke || a[49] !== xe) hn = r(Ze, {
    ref: $e,
    flexDirection: Mo,
    tabIndex: Le,
    autoFocus: et,
    onKeyDown: tt,
    flexShrink: nt,
    children: [ot, ke, xe]
  }), a[41] = Ze, a[42] = $e, a[43] = Le, a[44] = et, a[45] = tt, a[46] = nt, a[47] = ot, a[48] = ke, a[49] = xe, a[50] = hn;
  else hn = a[50];
  return e(C.Provider, {
    value: Do,
    children: hn
  })
}

function Uyt(m) {
  let I = w(18),
    {
      title: i,
      isCurrent: d,
      headerFocused: h,
      color: c,
      onClick: t
    } = m,
    [v, H] = g(!1),
    P = Yg(),
    k = t !== void 0;
  const b = d && h;
  let y;
  if (I[0] !== b) y = {
    line: 0,
    column: 1,
    active: b
  }, I[0] = b, I[1] = y;
  else y = I[1];
  let Z = Yw(y),
    Ae = pe.level === 0,
    V = c && d && h && !Ae,
    f;
  if (I[2] !== t || I[3] !== P) f = t === void 0 ? void 0 : (Bt) => {
    if (P(Bt)) {
      return
    }
    t()
  }, I[2] = t, I[3] = P, I[4] = f;
  else f = I[4];
  let ue, p;
  if (I[5] === S) ue = () => H(!0), p = () => H(!1), I[5] = ue, I[6] = p;
  else ue = I[5], p = I[6];
  let L;
  if (I[7] !== k || I[8] !== c || I[9] !== V || I[10] !== v || I[11] !== d || I[12] !== i) L = V ? e(Ab, {
    color: c,
    bold: !0,
    padded: !0,
    children: i
  }) : r(n, {
    inverse: d,
    bold: d,
    underline: v && k,
    children: [" ", i, " "]
  }), I[7] = k, I[8] = c, I[9] = V, I[10] = v, I[11] = d, I[12] = i, I[13] = L;
  else L = I[13];
  let he;
  if (I[14] !== Z || I[15] !== f || I[16] !== L) he = e(s, {
    ref: Z,
    onClick: f,
    onMouseEnter: ue,
    onMouseLeave: p,
    children: L
  }), I[14] = Z, I[15] = f, I[16] = L, I[17] = he;
  else he = I[17];
  return he
}

function ea(m) {
  let P = w(4),
    {
      title: i,
      id: d,
      children: h
    } = m,
    {
      selectedTab: c,
      width: t
    } = Pe(C),
    v = ol();
  if (c !== (d ?? i)) {
    return null
  }
  const H = v ? 0 : void 0;
  let k;
  if (P[0] !== h || P[1] !== H || P[2] !== t) k = e(s, {
    width: t,
    flexShrink: H,
    children: h
  }), P[0] = h, P[1] = H, P[2] = t, P[3] = k;
  else k = P[3];
  return k
}

function FJe() {
  let {
    width: m
  } = Pe(C);
  return m
}

function yg() {
  let c = w(6),
    {
      headerFocused: m,
      focusHeader: i,
      blurHeader: d,
      registerOptIn: h
    } = Pe(C),
    t;
  if (c[0] !== h) t = [h], c[0] = h, c[1] = t;
  else t = c[1];
  sn(h, t);
  let v;
  if (c[2] !== d || c[3] !== i || c[4] !== m) v = {
    headerFocused: m,
    focusHeader: i,
    blurHeader: d
  }, c[2] = d, c[3] = i, c[4] = m, c[5] = v;
  else v = c[5];
  return v
}
export {
  z_,
  Uyt,
  ea,
  FJe,
  yg
};
