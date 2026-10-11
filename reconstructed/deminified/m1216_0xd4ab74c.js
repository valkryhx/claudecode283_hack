// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { qw, ol, As, toe, hje } from "B:/~BUN/root/chunk-syke822n.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { rL } from "B:/~BUN/root/chunk-trcn2d68.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { dE } from "B:/~BUN/root/chunk-ey46s1kg.js";
import { s, n, Yw, Pue, VK, Xi } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { Wt } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { Yg } from "B:/~BUN/root/chunk-vabpvk99.js";
import { Ab } from "B:/~BUN/root/chunk-9k8er6ef.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, se, Pe, sn, X, RE, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function ao(rt) {
  return [rt.props.id ?? rt.props.title, rt.props.title];
}
function io(Bo) {
  return Bo + 1;
}
function so(No) {
  return No - 1;
}
function co(Ao) {
  return Ao + 1;
}
function uo(Po, m) {
  let [, fn] = m;
  return Po + (fn ? ie(fn) : 0) + 2 + 1;
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
      color: color,
      defaultTab: defaultTab,
      children: children,
      hidden: hidden,
      useFullWidth: useFullWidth,
      selectedTab: selectedTab,
      onTabChange: onTabChange,
      banner: k,
      disableNavigation: disableNavigation,
      initialHeaderFocused: initialHeaderFocused,
      contentHeight: contentHeight,
      stableHeight: stableHeight,
      navFromContent: navFromContent
    } = m,
    V = initialHeaderFocused === void 0 ? !0 : initialHeaderFocused,
    f = stableHeight === void 0 ? !1 : stableHeight,
    Bt = navFromContent === void 0 ? !1 : navFromContent,
    {
      columns: columns
    } = ve(),
    p = children.map(ao),
    he = defaultTab ? p.findIndex(item => defaultTab === item[0]) : 0,
    Ve = selectedTab !== void 0,
    [ho, fo] = g(he !== -1 ? he : 0),
    Nt = Ve ? p.findIndex(item => item[0] === selectedTab) : -1,
    D = Ve ? Nt !== -1 ? Nt : 0 : ho,
    fe = Pe(qw),
    M = toe(),
    W = hje(),
    ref = T(null),
    [be, po] = g(0),
    At;
  if (a[0] !== be) At = () => {
    let Pt = ref.current ? Xi(ref.current).height : 0;
    if (Pt !== be) po(Pt);
  }, a[0] = be, a[1] = At;else At = a[1];
  sn(At);
  let ee = (hidden ? 0 : 2) + be,
    Kt,
    jt;
  if (a[2] !== W || a[3] !== ee) Kt = () => {
    if (!W) {
      return;
    }
    return W(ee), () => W(null);
  }, jt = [W, ee], a[2] = W, a[3] = ee, a[4] = Kt, a[5] = jt;else Kt = a[4], jt = a[5];
  sn(Kt, jt);
  let Gt;
  if (a[6] === S) Gt = {
    rows: 0,
    columns: 0
  }, a[6] = Gt;else Gt = a[6];
  let {
      rows: rows
    } = As(Gt),
    E = W !== null && M !== null,
    ref_3 = M?.attach,
    me = E ? rows - ee : void 0,
    Ut;
  if (a[7] !== fe || a[8] !== E) Ut = fe && E ? {
    ...fe,
    claimScrollBox: null
  } : null, a[7] = fe, a[8] = E, a[9] = Ut;else Ut = a[9];
  let value = Ut,
    ar = !0,
    Ue = T(null),
    te = T(null),
    Ye = T(null),
    {
      focus: focus,
      activeElement: activeElement,
      focusDirection: focusDirection,
      blur: blur
    } = Pue(),
    [headerFocused, ne] = g(V),
    Yt;
  if (a[10] !== activeElement || a[11] !== focus) Yt = () => {
    if (!0 && Ue.current) focus(Ue.current);else if (!1 && te.current) {
      if (activeElement && activeElement !== te.current && rL(activeElement, te.current)) Ye.current = activeElement;
      focus(te.current);
    }
    ne(!0);
  }, a[10] = activeElement, a[11] = focus, a[12] = Yt;else Yt = a[12];
  let focusHeader = Yt,
    qt;
  if (a[13] !== blur) qt = () => {
    blur();
    Ye.current = null, ne(!1);
  }, a[13] = blur, a[14] = qt;else qt = a[14];
  let blurHeader = qt,
    [vo, zt] = g(0),
    Jt;
  if (a[15] === S) Jt = () => (zt(io), () => zt(so)), a[15] = Jt;else Jt = a[15];
  let registerOptIn = Jt,
    O = vo > 0,
    Qt = headerFocused || !O,
    ref_2 = T(null),
    ko = VK(ref_2),
    xo = !0 && !O ? !ko : Qt,
    [epoch, To] = RE(co, 0),
    Zt = T(null),
    $t;
  if (a[16] === S) $t = () => {
    Ye.current = null;
  }, a[16] = $t;else $t = a[16];
  sn($t, [D]);
  let tn = (index, Lt) => {
      let Co = Lt === void 0 ? !1 : Lt;
      Zt.current = {
        epoch: epoch,
        index: index
      }, To();
      let en = p[index]?.[0];
      if (Ve && onTabChange && en) onTabChange(en);else fo(index);
      if (Co) {
        return;
      }
      focusHeader();
    },
    we = (Fo, nn) => {
      let Ro = nn === void 0 ? !1 : nn;
      let current = Zt.current;
      let Ho = current?.epoch === epoch ? current.index : D;
      tn((Ho + p.length + Fo) % p.length, Ro);
    };
  const isActive = !hidden && !disableNavigation && Qt;
  let rn;
  if (a[17] !== isActive) rn = {
    context: "Tabs",
    isActive: isActive
  }, a[17] = isActive, a[18] = rn;else rn = a[18];
  Wt({
    "tabs:next": () => we(1),
    "tabs:previous": () => we(-1)
  }, rn);
  let ln;
  if (a[19] !== disableNavigation || a[20] !== focusDirection || a[21] !== headerFocused || a[22] !== hidden || a[23] !== O) ln = u => {
    if (hidden || disableNavigation) {
      return;
    }
    if (!headerFocused) {
      if (u.key === "left" || u.key === "right" || u.key === "tab" || O && (u.key === "up" || u.key === "down")) u.preventDefault();
      return;
    }
    if (u.key === "left" || u.key === "right" || u.key === "tab") u.preventDefault();else if (u.key === "down" && O) u.preventDefault(), focusDirection("down"), ne(!1);
  }, a[19] = disableNavigation, a[20] = focusDirection, a[21] = headerFocused, a[22] = hidden, a[23] = O, a[24] = ln;else ln = a[24];
  let an = ln;
  const isActive_2 = Bt && !headerFocused && O && !hidden && !disableNavigation;
  let dn;
  if (a[25] !== isActive_2) dn = {
    context: "Tabs",
    isActive: isActive_2
  }, a[25] = isActive_2, a[26] = dn;else dn = a[26];
  Wt({
    "tabs:next": () => we(1, !0),
    "tabs:previous": () => we(-1, !0)
  }, dn);
  let Io = i ? ie(i) + 1 : 0,
    yo = p.reduce(uo, 0),
    So = Io + yo,
    cn = useFullWidth ? Math.max(0, columns - So) : 0,
    width = useFullWidth ? columns : void 0;
  const value_2 = {
      selectedTab: p[D][0],
      width: width,
      headerFocused: headerFocused,
      focusHeader: focusHeader,
      blurHeader: blurHeader,
      registerOptIn: registerOptIn
    },
    Ze = s,
    ref_4 = !0 ? void 0 : te,
    flexDirection = "column",
    tabIndex = !0 ? void 0 : 0,
    autoFocus = !0 ? void 0 : V,
    onKeyDown = !0 ? void 0 : an,
    flexShrink = M ? 0 : void 0,
    ot = !hidden && r(s, {
      ref: !0 ? Ue : void 0,
      tabIndex: !0 ? 0 : void 0,
      autoFocus: !0 ? V : void 0,
      onFocus: !0 ? () => ne(!0) : void 0,
      onBlur: !0 ? () => ne(!1) : void 0,
      onKeyDown: !0 ? an : void 0,
      flexDirection: "row",
      gap: 1,
      flexShrink: M ? 0 : void 0,
      alignSelf: !0 && !useFullWidth ? "flex-start" : void 0,
      children: [i !== void 0 && e(n, {
        bold: !0,
        color: color,
        children: i
      }), p.map((item, index) => {
        let [Eo, title] = item;
        return e(Uyt, {
          title: title,
          isCurrent: D === index,
          headerFocused: xo && !disableNavigation,
          color: color ?? (!0 ? "suggestion" : void 0),
          onClick: disableNavigation ? void 0 : () => tn(index)
        }, Eo);
      }), cn > 0 && e(n, {
        children: " ".repeat(cn)
      })]
    });
  let ke;
  if (a[27] !== k) ke = k != null && e(s, {
    ref: ref,
    flexDirection: "column",
    flexShrink: 0,
    children: k
  }), a[27] = k, a[28] = ke;else ke = a[28];
  let xe;
  if (a[29] !== ref_3 || a[30] !== value || a[31] !== children || a[32] !== contentHeight || a[33] !== width || a[34] !== hidden || a[35] !== M || a[36] !== E || a[37] !== me || a[38] !== D || a[39] !== f) xe = E ? e(s, {
    ref: ref_2,
    width: width,
    marginTop: hidden ? 0 : 1,
    flexShrink: 0,
    children: e(dE, {
      ref: ref_3,
      flexDirection: "column",
      flexShrink: 0,
      height: f ? me : void 0,
      maxHeight: f ? void 0 : me,
      stickyScroll: !1,
      children: e(qw, {
        value: value,
        children: children
      })
    }, D)
  }) : e(s, {
    ref: ref_2,
    width: width,
    marginTop: hidden ? 0 : 1,
    height: f ? void 0 : contentHeight,
    minHeight: f ? contentHeight : void 0,
    overflowY: contentHeight !== void 0 && !f ? "hidden" : void 0,
    flexShrink: M ? 0 : void 0,
    children: children
  }), a[29] = ref_3, a[30] = value, a[31] = children, a[32] = contentHeight, a[33] = width, a[34] = hidden, a[35] = M, a[36] = E, a[37] = me, a[38] = D, a[39] = f, a[40] = xe;else xe = a[40];
  let children_2;
  if (a[41] !== Ze || a[42] !== ref_4 || a[43] !== tabIndex || a[44] !== autoFocus || a[45] !== onKeyDown || a[46] !== flexShrink || a[47] !== ot || a[48] !== ke || a[49] !== xe) children_2 = r(Ze, {
    ref: ref_4,
    flexDirection: flexDirection,
    tabIndex: tabIndex,
    autoFocus: autoFocus,
    onKeyDown: onKeyDown,
    flexShrink: flexShrink,
    children: [ot, ke, xe]
  }), a[41] = Ze, a[42] = ref_4, a[43] = tabIndex, a[44] = autoFocus, a[45] = onKeyDown, a[46] = flexShrink, a[47] = ot, a[48] = ke, a[49] = xe, a[50] = children_2;else children_2 = a[50];
  return e(C.Provider, {
    value: value_2,
    children: children_2
  });
}
function Uyt(m) {
  let I = w(18),
    {
      title: i,
      isCurrent: d,
      headerFocused: headerFocused_2,
      color: color_2,
      onClick: onClick
    } = m,
    [v, H] = g(!1),
    P = Yg(),
    k = onClick !== void 0;
  const active = d && headerFocused_2;
  let y;
  if (I[0] !== active) y = {
    line: 0,
    column: 1,
    active: active
  }, I[0] = active, I[1] = y;else y = I[1];
  let ref_5 = Yw(y),
    Ae = pe.level === 0,
    V = color_2 && d && headerFocused_2 && !Ae,
    onClick_2;
  if (I[2] !== onClick || I[3] !== P) onClick_2 = onClick === void 0 ? void 0 : Bt => {
    if (P(Bt)) {
      return;
    }
    onClick();
  }, I[2] = onClick, I[3] = P, I[4] = onClick_2;else onClick_2 = I[4];
  let onMouseEnter, onMouseLeave;
  if (I[5] === S) onMouseEnter = () => H(!0), onMouseLeave = () => H(!1), I[5] = onMouseEnter, I[6] = onMouseLeave;else onMouseEnter = I[5], onMouseLeave = I[6];
  let children_3;
  if (I[7] !== k || I[8] !== color_2 || I[9] !== V || I[10] !== v || I[11] !== d || I[12] !== i) children_3 = V ? e(Ab, {
    color: color_2,
    bold: !0,
    padded: !0,
    children: i
  }) : r(n, {
    inverse: d,
    bold: d,
    underline: v && k,
    children: [" ", i, " "]
  }), I[7] = k, I[8] = color_2, I[9] = V, I[10] = v, I[11] = d, I[12] = i, I[13] = children_3;else children_3 = I[13];
  let he;
  if (I[14] !== ref_5 || I[15] !== onClick_2 || I[16] !== children_3) he = e(s, {
    ref: ref_5,
    onClick: onClick_2,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: children_3
  }), I[14] = ref_5, I[15] = onClick_2, I[16] = children_3, I[17] = he;else he = I[17];
  return he;
}
function ea(m) {
  let P = w(4),
    {
      title: title_2,
      id: id,
      children: children_4
    } = m,
    {
      selectedTab: selectedTab_2,
      width: width_2
    } = Pe(C),
    v = ol();
  if (selectedTab_2 !== (id ?? title_2)) {
    return null;
  }
  const flexShrink_2 = v ? 0 : void 0;
  let k;
  if (P[0] !== children_4 || P[1] !== flexShrink_2 || P[2] !== width_2) k = e(s, {
    width: width_2,
    flexShrink: flexShrink_2,
    children: children_4
  }), P[0] = children_4, P[1] = flexShrink_2, P[2] = width_2, P[3] = k;else k = P[3];
  return k;
}
function FJe() {
  let {
    width: width_3
  } = Pe(C);
  return width_3;
}
function yg() {
  let c = w(6),
    {
      headerFocused: headerFocused_3,
      focusHeader: focusHeader_2,
      blurHeader: blurHeader_2,
      registerOptIn: registerOptIn_2
    } = Pe(C),
    t;
  if (c[0] !== registerOptIn_2) t = [registerOptIn_2], c[0] = registerOptIn_2, c[1] = t;else t = c[1];
  sn(registerOptIn_2, t);
  let v;
  if (c[2] !== blurHeader_2 || c[3] !== focusHeader_2 || c[4] !== headerFocused_3) v = {
    headerFocused: headerFocused_3,
    focusHeader: focusHeader_2,
    blurHeader: blurHeader_2
  }, c[2] = blurHeader_2, c[3] = focusHeader_2, c[4] = headerFocused_3, c[5] = v;else v = c[5];
  return v;
}
export { z_, Uyt, ea, FJe, yg };