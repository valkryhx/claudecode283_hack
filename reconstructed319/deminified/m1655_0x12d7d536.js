// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { rE, Bl, As, jPe, nEt } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { SK } from "B:/~BUN/root/chunk-31b4g6te.js";
import { DM } from "B:/~BUN/root/chunk-9yf7mr11.js";
import { s, n, BC, xUe, Ss } from "B:/~BUN/root/chunk-qey16aan.js";
import { nke } from "B:/~BUN/root/chunk-7qzy1jjf.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { Sn } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { mv } from "B:/~BUN/root/chunk-h37egt7q.js";
import { fb } from "B:/~BUN/root/chunk-a2fp3xgm.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ue, ve, Zt, Z, G_, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function to(tn) {
  return [tn.props.id ?? tn.props.title, tn.props.title];
}
function oo(So) {
  return So + 1;
}
function ro(V) {
  return V + 1;
}
function ao(p) {
  return p - 1;
}
var v = Jt({
  selectedTab: void 0,
  headerFocused: !1,
  focusHeader: () => {},
  blurHeader: () => {},
  registerOptIn: () => () => {},
  registerNavigationOwner: () => () => {}
});
function uv(b) {
  let u = S(51),
    {
      title: l,
      color: color,
      defaultTab: defaultTab,
      children: children,
      hidden: hidden,
      selectedTab: selectedTab,
      onTabChange: onTabChange,
      banner: p,
      disableNavigation: disableNavigation,
      initialHeaderFocused: initialHeaderFocused,
      contentHeight: contentHeight,
      stableHeight: stableHeight,
      navFromContent: navFromContent
    } = b,
    fe = initialHeaderFocused === void 0 ? !0 : initialHeaderFocused,
    g = stableHeight === void 0 ? !1 : stableHeight,
    te = navFromContent === void 0 ? !1 : navFromContent,
    k = children.map(to),
    be = defaultTab ? k.findIndex(item => defaultTab === item[0]) : 0,
    H = selectedTab !== void 0,
    [Ve, io] = y(be !== -1 ? be : 0),
    An = H ? k.findIndex(item => item[0] === selectedTab) : -1,
    F = H ? An !== -1 ? An : 0 : Ve,
    pe = ve(rE),
    R = jPe(),
    I = nEt(),
    ref_2 = A(null),
    [me, so] = y(0),
    ref = A(null),
    [ge, co] = y(1),
    Pn;
  if (u[0] !== me || u[1] !== ge) Pn = () => {
    let Vn = ref_2.current ? Ss(ref_2.current).height : 0;
    if (Vn !== me) so(Vn);
    let Kn = ref.current ? Math.max(1, Ss(ref.current).height) : 1;
    if (Kn !== ge) co(Kn);
  }, u[0] = me, u[1] = ge, u[2] = Pn;else Pn = u[2];
  Zt(Pn);
  let re = (hidden ? 0 : ge + 1) + me,
    Ln,
    jn;
  if (u[3] !== I || u[4] !== re) Ln = () => {
    if (!I) {
      return;
    }
    return I(re), () => I(null);
  }, jn = [I, re], u[3] = I, u[4] = re, u[5] = Ln, u[6] = jn;else Ln = u[5], jn = u[6];
  Zt(Ln, jn);
  let Gn;
  if (u[7] === w) Gn = {
    rows: 0,
    columns: 0
  }, u[7] = Gn;else Gn = u[7];
  let {
      rows: rows
    } = As(Gn),
    D = I !== null && R !== null,
    ref_4 = R?.attach,
    we = D ? rows - re : void 0,
    Un;
  if (u[8] !== pe || u[9] !== D) Un = pe && D ? {
    ...pe,
    claimScrollBox: null
  } : null, u[8] = pe, u[9] = D, u[10] = Un;else Un = u[10];
  let value = Un,
    zo = !0,
    ae = A(null),
    Ge = A(null),
    {
      focus: focus,
      activeElement: activeElement,
      focusDirection: focusDirection,
      blur: blur
    } = xUe(),
    [headerFocused, ie] = y(fe),
    Wn;
  if (u[11] !== activeElement || u[12] !== focus) Wn = () => {
    if (!0 && ref.current) focus(ref.current);else if (!1 && ae.current) {
      if (activeElement && activeElement !== ae.current && SK(activeElement, ae.current)) Ge.current = activeElement;
      focus(ae.current);
    }
    ie(!0);
  }, u[11] = activeElement, u[12] = focus, u[13] = Wn;else Wn = u[13];
  let focusHeader = Wn,
    _n;
  if (u[14] !== blur || u[15] !== focus) _n = qn => {
    if (!0 && qn) focus(qn);else blur();
    Ge.current = null, ie(!1);
  }, u[14] = blur, u[15] = focus, u[16] = _n;else _n = u[16];
  let blurHeader = _n,
    [O, registerOptIn] = X(),
    [bo, registerNavigationOwner] = X(),
    B = disableNavigation || bo,
    zn = headerFocused || !O,
    ref_3 = A(null),
    mo = nke(ref_3),
    go = !0 && !O ? !mo : zn,
    [epoch, vo] = G_(oo, 0),
    Qn = A(null),
    Xn;
  if (u[17] === w) Xn = () => {
    Ge.current = null;
  }, u[17] = Xn;else Xn = u[17];
  Zt(Xn, [F]);
  let et = (index, Zn) => {
      let wo = Zn === void 0 ? !1 : Zn;
      Qn.current = {
        epoch: epoch,
        index: index
      }, vo();
      let $n = k[index]?.[0];
      if (H && onTabChange && $n) onTabChange($n);else io(index);
      if (wo) {
        return;
      }
      focusHeader();
    },
    ke = (ko, nt) => {
      let xo = nt === void 0 ? !1 : nt;
      let current = Qn.current;
      let To = current?.epoch === epoch ? current.index : F;
      et((To + k.length + ko) % k.length, xo);
    };
  const isActive = !hidden && !B && zn;
  let ot;
  if (u[18] !== isActive) ot = {
    context: "Tabs",
    isActive: isActive
  }, u[18] = isActive, u[19] = ot;else ot = u[19];
  Sn({
    "tabs:next": () => ke(1),
    "tabs:previous": () => ke(-1)
  }, ot);
  let rt;
  if (u[20] !== B || u[21] !== focusDirection || u[22] !== headerFocused || u[23] !== hidden || u[24] !== O) rt = f => {
    if (hidden || B) {
      return;
    }
    if (!headerFocused) {
      if (f.key === "left" || f.key === "right" || f.key === "tab" || O && (f.key === "up" || f.key === "down")) f.preventDefault();
      return;
    }
    if (f.key === "left" || f.key === "right" || f.key === "tab") f.preventDefault();else if (f.key === "down" && O) f.preventDefault(), focusDirection("down"), ie(!1);
  }, u[20] = B, u[21] = focusDirection, u[22] = headerFocused, u[23] = hidden, u[24] = O, u[25] = rt;else rt = u[25];
  let at = rt;
  const isActive_2 = te && !headerFocused && O && !hidden && !B;
  let it;
  if (u[26] !== isActive_2) it = {
    context: "Tabs",
    isActive: isActive_2
  }, u[26] = isActive_2, u[27] = it;else it = u[27];
  Sn({
    "tabs:next": () => ke(1, !0),
    "tabs:previous": () => ke(-1, !0)
  }, it);
  const value_2 = {
      selectedTab: k[F][0],
      headerFocused: headerFocused,
      focusHeader: focusHeader,
      blurHeader: blurHeader,
      registerOptIn: registerOptIn,
      registerNavigationOwner: registerNavigationOwner
    },
    Je = s,
    ref_5 = !0 ? void 0 : ae,
    flexDirection = "column",
    tabIndex = !0 ? void 0 : 0,
    autoFocus = !0 ? void 0 : fe,
    onKeyDown = !0 ? void 0 : at,
    flexShrink = R ? 0 : void 0,
    nn = !hidden && r(s, {
      ref: ref,
      tabIndex: !0 ? 0 : void 0,
      autoFocus: !0 ? fe : void 0,
      onFocus: !0 ? () => ie(!0) : void 0,
      onBlur: !0 ? () => ie(!1) : void 0,
      onKeyDown: !0 ? at : void 0,
      flexDirection: "row",
      flexWrap: "wrap",
      columnGap: 1,
      flexShrink: R ? 0 : void 0,
      alignSelf: !0 ? "flex-start" : void 0,
      children: [l !== null && e(s, {
        flexShrink: 0,
        children: e(n, {
          bold: !0,
          color: color,
          children: l
        })
      }), k.map((item, index) => {
        let [Ro, title] = item;
        return e(Ae, {
          title: title,
          isCurrent: F === index,
          headerFocused: go && !B,
          color: color ?? (!0 ? "suggestion" : void 0),
          onClick: B ? void 0 : () => et(index)
        }, Ro);
      })]
    });
  let xe;
  if (u[28] !== p) xe = p != null && e(s, {
    ref: ref_2,
    flexDirection: "column",
    flexShrink: 0,
    children: p
  }), u[28] = p, u[29] = xe;else xe = u[29];
  let Te;
  if (u[30] !== ref_4 || u[31] !== value || u[32] !== children || u[33] !== contentHeight || u[34] !== hidden || u[35] !== R || u[36] !== D || u[37] !== we || u[38] !== F || u[39] !== g) Te = D ? e(s, {
    ref: ref_3,
    marginTop: hidden ? 0 : 1,
    flexShrink: 0,
    children: e(DM, {
      ref: ref_4,
      flexDirection: "column",
      flexShrink: 0,
      height: g ? we : void 0,
      maxHeight: g ? void 0 : we,
      stickyScroll: !1,
      children: e(rE, {
        value: value,
        children: children
      })
    }, F)
  }) : e(s, {
    ref: ref_3,
    marginTop: hidden ? 0 : 1,
    height: g ? void 0 : contentHeight,
    minHeight: g ? contentHeight : void 0,
    overflowY: contentHeight !== void 0 && !g ? "hidden" : void 0,
    flexShrink: R ? 0 : void 0,
    children: children
  }), u[30] = ref_4, u[31] = value, u[32] = children, u[33] = contentHeight, u[34] = hidden, u[35] = R, u[36] = D, u[37] = we, u[38] = F, u[39] = g, u[40] = Te;else Te = u[40];
  let children_2;
  if (u[41] !== Je || u[42] !== ref_5 || u[43] !== tabIndex || u[44] !== autoFocus || u[45] !== onKeyDown || u[46] !== flexShrink || u[47] !== nn || u[48] !== xe || u[49] !== Te) children_2 = r(Je, {
    ref: ref_5,
    flexDirection: flexDirection,
    tabIndex: tabIndex,
    autoFocus: autoFocus,
    onKeyDown: onKeyDown,
    flexShrink: flexShrink,
    children: [nn, xe, Te]
  }), u[41] = Je, u[42] = ref_5, u[43] = tabIndex, u[44] = autoFocus, u[45] = onKeyDown, u[46] = flexShrink, u[47] = nn, u[48] = xe, u[49] = Te, u[50] = children_2;else children_2 = u[50];
  return e(v.Provider, {
    value: value_2,
    children: children_2
  });
}
function Ae(b) {
  let m = S(18),
    {
      title: l,
      isCurrent: i,
      headerFocused: headerFocused_2,
      color: color_2,
      onClick: onClick
    } = b,
    [h, V] = y(!1),
    p = mv(),
    ce = onClick !== void 0;
  const active = i && headerFocused_2;
  let he;
  if (m[0] !== active) he = {
    line: 0,
    column: 1,
    active: active
  }, m[0] = active, m[1] = he;else he = m[1];
  let ref_6 = BC(he),
    fe = Se.level === 0,
    g = color_2 && i && headerFocused_2 && !fe,
    onClick_2;
  if (m[2] !== onClick || m[3] !== p) onClick_2 = onClick === void 0 ? void 0 : k => {
    if (p(k)) {
      return;
    }
    onClick();
  }, m[2] = onClick, m[3] = p, m[4] = onClick_2;else onClick_2 = m[4];
  let onMouseEnter, onMouseLeave;
  if (m[5] === w) onMouseEnter = () => V(!0), onMouseLeave = () => V(!1), m[5] = onMouseEnter, m[6] = onMouseLeave;else onMouseEnter = m[5], onMouseLeave = m[6];
  let children_3;
  if (m[7] !== ce || m[8] !== color_2 || m[9] !== g || m[10] !== h || m[11] !== i || m[12] !== l) children_3 = g ? e(fb, {
    color: color_2,
    bold: !0,
    padded: !0,
    children: l
  }) : r(n, {
    inverse: i,
    bold: i,
    underline: h && ce,
    children: [" ", l, " "]
  }), m[7] = ce, m[8] = color_2, m[9] = g, m[10] = h, m[11] = i, m[12] = l, m[13] = children_3;else children_3 = m[13];
  let Ve;
  if (m[14] !== ref_6 || m[15] !== onClick_2 || m[16] !== children_3) Ve = e(s, {
    ref: ref_6,
    flexShrink: 0,
    onClick: onClick_2,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: children_3
  }), m[14] = ref_6, m[15] = onClick_2, m[16] = children_3, m[17] = Ve;else Ve = m[17];
  return Ve;
}
function ld(b) {
  let V = S(3),
    {
      title: title_2,
      id: id,
      children: children_4
    } = b,
    {
      selectedTab: selectedTab_2
    } = ve(v),
    t = Bl();
  if (selectedTab_2 !== (id ?? title_2)) {
    return null;
  }
  const flexShrink_2 = t ? 0 : void 0;
  let p;
  if (V[0] !== children_4 || V[1] !== flexShrink_2) p = e(s, {
    flexShrink: flexShrink_2,
    children: children_4
  }), V[0] = children_4, V[1] = flexShrink_2, V[2] = p;else p = V[2];
  return p;
}
function Hw() {
  let c = S(6),
    {
      headerFocused: headerFocused_3,
      focusHeader: focusHeader_2,
      blurHeader: blurHeader_2,
      registerOptIn: registerOptIn_2
    } = ve(v),
    t;
  if (c[0] !== registerOptIn_2) t = [registerOptIn_2], c[0] = registerOptIn_2, c[1] = t;else t = c[1];
  Zt(registerOptIn_2, t);
  let h;
  if (c[2] !== blurHeader_2 || c[3] !== focusHeader_2 || c[4] !== headerFocused_3) h = {
    headerFocused: headerFocused_3,
    focusHeader: focusHeader_2,
    blurHeader: blurHeader_2
  }, c[2] = blurHeader_2, c[3] = focusHeader_2, c[4] = headerFocused_3, c[5] = h;else h = c[5];
  return h;
}
function X() {
  let i = S(3),
    [b, l] = y(0),
    d;
  if (i[0] === w) d = () => (l(ro), () => l(ao)), i[0] = d;else d = i[0];
  let c = d;
  const t = b > 0;
  let h;
  if (i[1] !== t) h = [t, c], i[1] = t, i[2] = h;else h = i[2];
  return h;
}
function Lvt() {
  let l = S(2),
    {
      registerNavigationOwner: registerNavigationOwner_2
    } = ve(v),
    i;
  if (l[0] !== registerNavigationOwner_2) i = [registerNavigationOwner_2], l[0] = registerNavigationOwner_2, l[1] = i;else i = l[1];
  Zt(registerNavigationOwner_2, i);
}
export { uv, ld, Hw, Lvt };