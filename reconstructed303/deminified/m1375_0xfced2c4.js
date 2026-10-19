// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { ZS, bl, us, u_e, Ont } from "B:/~BUN/root/chunk-b900np4s.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { b1 } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { BA } from "B:/~BUN/root/chunk-x9aty6p8.js";
import { s, n, Ek, zCe, n7, Ws } from "B:/~BUN/root/chunk-damrp3r8.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { on } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { hS } from "B:/~BUN/root/chunk-a8k6kvgb.js";
import { wk } from "B:/~BUN/root/chunk-wwnnc3mv.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, ae, Ee, Jt, Z, ny, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function ko(dt) {
  return [dt.props.id ?? dt.props.title, dt.props.title];
}
function xo(Qo) {
  return Qo + 1;
}
function To(Xo, d) {
  let [, xn] = d;
  return Xo + (xn ? ie(xn) : 0) + 2 + 1;
}
function Fo(x) {
  return x + 1;
}
function Co(C) {
  return C - 1;
}
var m = qt({
  selectedTab: void 0,
  width: void 0,
  headerFocused: !1,
  focusHeader: () => {},
  blurHeader: () => {},
  registerOptIn: () => () => {},
  registerNavigationOwner: () => () => {}
});
function gS(d) {
  let h = w(52),
    {
      title: l,
      color: color,
      defaultTab: defaultTab,
      children: children,
      hidden: hidden,
      useFullWidth: useFullWidth,
      selectedTab: selectedTab,
      onTabChange: onTabChange,
      banner: v,
      disableNavigation: disableNavigation,
      initialHeaderFocused: initialHeaderFocused,
      contentHeight: contentHeight,
      stableHeight: stableHeight,
      navFromContent: navFromContent
    } = d,
    L = initialHeaderFocused === void 0 ? !0 : initialHeaderFocused,
    p = stableHeight === void 0 ? !1 : stableHeight,
    jt = navFromContent === void 0 ? !1 : navFromContent,
    {
      columns: columns
    } = Te(),
    g = children.map(ko),
    ve = defaultTab ? g.findIndex(item => defaultTab === item[0]) : 0,
    Ue = selectedTab !== void 0,
    [Ho, Ro] = y(ve !== -1 ? ve : 0),
    Gt = Ue ? g.findIndex(item => item[0] === selectedTab) : -1,
    I = Ue ? Gt !== -1 ? Gt : 0 : Ho,
    we = Ee(ZS),
    D = u_e(),
    N = Ont(),
    ref_2 = A(null),
    [ke, So] = y(0),
    ref = A(null),
    [xe, Io] = y(1),
    Ut;
  if (h[0] !== ke || h[1] !== xe) Ut = () => {
    let Yt = ref_2.current ? Ws(ref_2.current).height : 0;
    if (Yt !== ke) So(Yt);
    let _t = ref.current ? Math.max(1, Ws(ref.current).height) : 1;
    if (_t !== xe) Io(_t);
  }, h[0] = ke, h[1] = xe, h[2] = Ut;else Ut = h[2];
  Jt(Ut);
  let le = (hidden ? 0 : xe + 1) + ke,
    zt,
    Qt;
  if (h[3] !== N || h[4] !== le) zt = () => {
    if (!N) {
      return;
    }
    return N(le), () => N(null);
  }, Qt = [N, le], h[3] = N, h[4] = le, h[5] = zt, h[6] = Qt;else zt = h[5], Qt = h[6];
  Jt(zt, Qt);
  let Xt;
  if (h[7] === S) Xt = {
    rows: 0,
    columns: 0
  }, h[7] = Xt;else Xt = h[7];
  let {
      rows: rows
    } = us(Xt),
    O = N !== null && D !== null,
    ref_4 = D?.attach,
    Fe = O ? rows - le : void 0,
    Zt;
  if (h[8] !== we || h[9] !== O) Zt = we && O ? {
    ...we,
    claimScrollBox: null
  } : null, h[8] = we, h[9] = O, h[10] = Zt;else Zt = h[10];
  let value = Zt,
    wr = !0,
    de = A(null),
    ze = A(null),
    {
      focus: focus,
      activeElement: activeElement,
      focusDirection: focusDirection,
      blur: blur
    } = zCe(),
    [headerFocused, se] = y(L),
    $t;
  if (h[11] !== activeElement || h[12] !== focus) $t = () => {
    if (!0 && ref.current) focus(ref.current);else if (!1 && de.current) {
      if (activeElement && activeElement !== de.current && b1(activeElement, de.current)) ze.current = activeElement;
      focus(de.current);
    }
    se(!0);
  }, h[11] = activeElement, h[12] = focus, h[13] = $t;else $t = h[13];
  let focusHeader = $t,
    tn;
  if (h[14] !== blur || h[15] !== focus) tn = nn => {
    if (!0 && nn) focus(nn);else blur();
    ze.current = null, se(!1);
  }, h[14] = blur, h[15] = focus, h[16] = tn;else tn = h[16];
  let blurHeader = tn,
    [W, registerOptIn] = te(),
    [Mo, registerNavigationOwner] = te(),
    E = disableNavigation || Mo,
    rn = headerFocused || !W,
    ref_3 = A(null),
    Bo = n7(ref_3),
    Eo = !0 && !W ? !Bo : rn,
    [epoch, Ao] = ny(xo, 0),
    ln = A(null),
    dn;
  if (h[17] === S) dn = () => {
    ze.current = null;
  }, h[17] = dn;else dn = h[17];
  Jt(dn, [I]);
  let un = (index, sn) => {
      let Po = sn === void 0 ? !1 : sn;
      ln.current = {
        epoch: epoch,
        index: index
      }, Ao();
      let cn = g[index]?.[0];
      if (Ue && onTabChange && cn) onTabChange(cn);else Ro(index);
      if (Po) {
        return;
      }
      focusHeader();
    },
    Ce = (Vo, hn) => {
      let Ko = hn === void 0 ? !1 : hn;
      let current = ln.current;
      let Lo = current?.epoch === epoch ? current.index : I;
      un((Lo + g.length + Vo) % g.length, Ko);
    };
  const isActive = !hidden && !E && rn;
  let bn;
  if (h[18] !== isActive) bn = {
    context: "Tabs",
    isActive: isActive
  }, h[18] = isActive, h[19] = bn;else bn = h[19];
  on({
    "tabs:next": () => Ce(1),
    "tabs:previous": () => Ce(-1)
  }, bn);
  let pn;
  if (h[20] !== E || h[21] !== focusDirection || h[22] !== headerFocused || h[23] !== hidden || h[24] !== W) pn = f => {
    if (hidden || E) {
      return;
    }
    if (!headerFocused) {
      if (f.key === "left" || f.key === "right" || f.key === "tab" || W && (f.key === "up" || f.key === "down")) f.preventDefault();
      return;
    }
    if (f.key === "left" || f.key === "right" || f.key === "tab") f.preventDefault();else if (f.key === "down" && W) f.preventDefault(), focusDirection("down"), se(!1);
  }, h[20] = E, h[21] = focusDirection, h[22] = headerFocused, h[23] = hidden, h[24] = W, h[25] = pn;else pn = h[25];
  let mn = pn;
  const isActive_2 = jt && !headerFocused && W && !hidden && !E;
  let gn;
  if (h[26] !== isActive_2) gn = {
    context: "Tabs",
    isActive: isActive_2
  }, h[26] = isActive_2, h[27] = gn;else gn = h[27];
  on({
    "tabs:next": () => Ce(1, !0),
    "tabs:previous": () => Ce(-1, !0)
  }, gn);
  let jo = l ? ie(l) + 1 : 0,
    Go = g.reduce(To, 0),
    Uo = jo + Go,
    vn = useFullWidth ? Math.max(0, columns - Uo) : 0,
    width = useFullWidth ? columns : void 0;
  const value_2 = {
      selectedTab: g[I][0],
      width: width,
      headerFocused: headerFocused,
      focusHeader: focusHeader,
      blurHeader: blurHeader,
      registerOptIn: registerOptIn,
      registerNavigationOwner: registerNavigationOwner
    },
    tt = s,
    ref_5 = !0 ? void 0 : de,
    flexDirection = "column",
    tabIndex = !0 ? void 0 : 0,
    autoFocus = !0 ? void 0 : L,
    onKeyDown = !0 ? void 0 : mn,
    flexShrink = D ? 0 : void 0,
    lt = !hidden && r(s, {
      ref: ref,
      tabIndex: !0 ? 0 : void 0,
      autoFocus: !0 ? L : void 0,
      onFocus: !0 ? () => se(!0) : void 0,
      onBlur: !0 ? () => se(!1) : void 0,
      onKeyDown: !0 ? mn : void 0,
      flexDirection: "row",
      flexWrap: "wrap",
      columnGap: 1,
      flexShrink: D ? 0 : void 0,
      alignSelf: !0 && !useFullWidth ? "flex-start" : void 0,
      children: [l !== null && e(s, {
        flexShrink: 0,
        children: e(n, {
          bold: !0,
          color: color,
          children: l
        })
      }), g.map((item, index) => {
        let [zo, title] = item;
        return e(je, {
          title: title,
          isCurrent: I === index,
          headerFocused: Eo && !E,
          color: color ?? (!0 ? "suggestion" : void 0),
          onClick: E ? void 0 : () => un(index)
        }, zo);
      }), vn > 0 && e(n, {
        children: " ".repeat(vn)
      })]
    });
  let He;
  if (h[28] !== v) He = v != null && e(s, {
    ref: ref_2,
    flexDirection: "column",
    flexShrink: 0,
    children: v
  }), h[28] = v, h[29] = He;else He = h[29];
  let Re;
  if (h[30] !== ref_4 || h[31] !== value || h[32] !== children || h[33] !== contentHeight || h[34] !== width || h[35] !== hidden || h[36] !== D || h[37] !== O || h[38] !== Fe || h[39] !== I || h[40] !== p) Re = O ? e(s, {
    ref: ref_3,
    width: width,
    marginTop: hidden ? 0 : 1,
    flexShrink: 0,
    children: e(BA, {
      ref: ref_4,
      flexDirection: "column",
      flexShrink: 0,
      height: p ? Fe : void 0,
      maxHeight: p ? void 0 : Fe,
      stickyScroll: !1,
      children: e(ZS, {
        value: value,
        children: children
      })
    }, I)
  }) : e(s, {
    ref: ref_3,
    width: width,
    marginTop: hidden ? 0 : 1,
    height: p ? void 0 : contentHeight,
    minHeight: p ? contentHeight : void 0,
    overflowY: contentHeight !== void 0 && !p ? "hidden" : void 0,
    flexShrink: D ? 0 : void 0,
    children: children
  }), h[30] = ref_4, h[31] = value, h[32] = children, h[33] = contentHeight, h[34] = width, h[35] = hidden, h[36] = D, h[37] = O, h[38] = Fe, h[39] = I, h[40] = p, h[41] = Re;else Re = h[41];
  let children_2;
  if (h[42] !== tt || h[43] !== ref_5 || h[44] !== tabIndex || h[45] !== autoFocus || h[46] !== onKeyDown || h[47] !== flexShrink || h[48] !== lt || h[49] !== He || h[50] !== Re) children_2 = r(tt, {
    ref: ref_5,
    flexDirection: flexDirection,
    tabIndex: tabIndex,
    autoFocus: autoFocus,
    onKeyDown: onKeyDown,
    flexShrink: flexShrink,
    children: [lt, He, Re]
  }), h[42] = tt, h[43] = ref_5, h[44] = tabIndex, h[45] = autoFocus, h[46] = onKeyDown, h[47] = flexShrink, h[48] = lt, h[49] = He, h[50] = Re, h[51] = children_2;else children_2 = h[51];
  return e(m.Provider, {
    value: value_2,
    children: children_2
  });
}
function je(d) {
  let H = w(18),
    {
      title: l,
      isCurrent: a,
      headerFocused: headerFocused_2,
      color: color_2,
      onClick: onClick
    } = d,
    [b, x] = y(!1),
    C = hS(),
    v = onClick !== void 0;
  const active = a && headerFocused_2;
  let R;
  if (H[0] !== active) R = {
    line: 0,
    column: 1,
    active: active
  }, H[0] = active, H[1] = R;else R = H[1];
  let ref_6 = Ek(R),
    Ge = he.level === 0,
    L = color_2 && a && headerFocused_2 && !Ge,
    onClick_2;
  if (H[2] !== onClick || H[3] !== C) onClick_2 = onClick === void 0 ? void 0 : jt => {
    if (C(jt)) {
      return;
    }
    onClick();
  }, H[2] = onClick, H[3] = C, H[4] = onClick_2;else onClick_2 = H[4];
  let onMouseEnter, onMouseLeave;
  if (H[5] === S) onMouseEnter = () => x(!0), onMouseLeave = () => x(!1), H[5] = onMouseEnter, H[6] = onMouseLeave;else onMouseEnter = H[5], onMouseLeave = H[6];
  let children_3;
  if (H[7] !== v || H[8] !== color_2 || H[9] !== L || H[10] !== b || H[11] !== a || H[12] !== l) children_3 = L ? e(wk, {
    color: color_2,
    bold: !0,
    padded: !0,
    children: l
  }) : r(n, {
    inverse: a,
    bold: a,
    underline: b && v,
    children: [" ", l, " "]
  }), H[7] = v, H[8] = color_2, H[9] = L, H[10] = b, H[11] = a, H[12] = l, H[13] = children_3;else children_3 = H[13];
  let ve;
  if (H[14] !== ref_6 || H[15] !== onClick_2 || H[16] !== children_3) ve = e(s, {
    ref: ref_6,
    flexShrink: 0,
    onClick: onClick_2,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: children_3
  }), H[14] = ref_6, H[15] = onClick_2, H[16] = children_3, H[17] = ve;else ve = H[17];
  return ve;
}
function rl(d) {
  let C = w(4),
    {
      title: title_2,
      id: id,
      children: children_4
    } = d,
    {
      selectedTab: selectedTab_2,
      width: width_2
    } = Ee(m),
    b = bl();
  if (selectedTab_2 !== (id ?? title_2)) {
    return null;
  }
  const flexShrink_2 = b ? 0 : void 0;
  let v;
  if (C[0] !== children_4 || C[1] !== flexShrink_2 || C[2] !== width_2) v = e(s, {
    width: width_2,
    flexShrink: flexShrink_2,
    children: children_4
  }), C[0] = children_4, C[1] = flexShrink_2, C[2] = width_2, C[3] = v;else v = C[3];
  return v;
}
function ivt() {
  let {
    width: width_3
  } = Ee(m);
  return width_3;
}
function i_() {
  let u = w(6),
    {
      headerFocused: headerFocused_3,
      focusHeader: focusHeader_2,
      blurHeader: blurHeader_2,
      registerOptIn: registerOptIn_2
    } = Ee(m),
    t;
  if (u[0] !== registerOptIn_2) t = [registerOptIn_2], u[0] = registerOptIn_2, u[1] = t;else t = u[1];
  Jt(registerOptIn_2, t);
  let b;
  if (u[2] !== blurHeader_2 || u[3] !== focusHeader_2 || u[4] !== headerFocused_3) b = {
    headerFocused: headerFocused_3,
    focusHeader: focusHeader_2,
    blurHeader: blurHeader_2
  }, u[2] = blurHeader_2, u[3] = focusHeader_2, u[4] = headerFocused_3, u[5] = b;else b = u[5];
  return b;
}
function te() {
  let a = w(3),
    [d, l] = y(0),
    c;
  if (a[0] === S) c = () => (l(Fo), () => l(Co)), a[0] = c;else c = a[0];
  let u = c;
  const t = d > 0;
  let b;
  if (a[1] !== t) b = [t, u], a[1] = t, a[2] = b;else b = a[2];
  return b;
}
function Ytt() {
  let l = w(2),
    {
      registerNavigationOwner: registerNavigationOwner_2
    } = Ee(m),
    a;
  if (l[0] !== registerNavigationOwner_2) a = [registerNavigationOwner_2], l[0] = registerNavigationOwner_2, l[1] = a;else a = l[1];
  Jt(registerNavigationOwner_2, a);
}
export { gS, rl, ivt, i_, Ytt };