// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Bl, As } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { nh } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { Yr } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { LO as children_5, nP as children_7, UFs, xw } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Er } from "B:/~BUN/root/chunk-pc24rkga.js";
import { Rn, ot, s, n, Gj, Gp, xUe, Ia, Ss } from "B:/~BUN/root/chunk-qey16aan.js";
import { Ff, Dm } from "B:/~BUN/root/chunk-31b4g6te.js";
import { rI } from "B:/~BUN/root/chunk-cacx0j4x.js";
import { wS } from "B:/~BUN/root/chunk-crjx6seq.js";
import { vd } from "B:/~BUN/root/chunk-7g0t7h3t.js";
import { Sn } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { JR, EUe, TUe, nI, ule, Zf } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { mv } from "B:/~BUN/root/chunk-h37egt7q.js";
import { pK, TGt } from "B:/~BUN/root/chunk-weefacy8.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { mK, Bj } from "B:/~BUN/root/chunk-6651s0bp.js";
import { Lmn } from "B:/~BUN/root/chunk-r2n11d64.js";
import { nke } from "B:/~BUN/root/chunk-7qzy1jjf.js";
import { rEt, Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { z_, Jt, hy, ve, O, qo, Zt, A, y, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { w, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
j();
j();
var zn = 150,
  Gn = 400,
  $n = 60,
  Oe = 1;
function Ve(o, t) {
  return Math.abs(t.col - o.col) <= Oe && Math.abs(t.row - o.row) <= Oe;
}
function wUe({
  children: children,
  paddingX: t = 0,
  onPress: onPress,
  repeat = !1
}) {
  let m = Rn(),
    f = mv(),
    i = EUe(),
    [M, p] = y(!1),
    [H, B] = y(!1),
    x = A(null),
    [k, C] = y(null),
    F = A(null);
  O(() => () => F.current?.(), []);
  let hoverFollowsPaint = onPress !== void 0;
  if (!hoverFollowsPaint && (M || H || k !== null)) p(!1), B(!1), C(null);
  O(() => {
    if (!hoverFollowsPaint) x.current = null;
  }, [hoverFollowsPaint]);
  let I = qo(R => {
    let current = x.current;
    if (current !== R) return;
    current.hasActed = !0, onPress?.({
      row: current.row
    });
  });
  O(() => {
    if (k === null) return;
    let R = m.setTimeout(function L() {
      I(k), R = m.setTimeout(L, $n);
    }, Gn);
    return () => R();
  }, [k, m]);
  function U(R) {
    if (R.stopImmediatePropagation(), F.current !== null || f(R)) return;
    R.endClickChain(), B(!0), F.current = m.setTimeout(() => {
      F.current = null, B(!1), onPress?.(R);
    }, zn);
  }
  function N(R) {
    if (R.type === "down" && R.button === 0) {
      let L = {
        col: R.col,
        row: R.row,
        hasActed: !1
      };
      x.current = L, B(!0), C(L);
    } else if (R.type === "up") {
      let current_2 = x.current;
      if (x.current = null, B(!1), C(null), current_2 !== null && !current_2.hasActed && !R.isUnreported && Ve(current_2, R)) onPress?.({
        row: current_2.row
      });
    }
  }
  let P = i === "inverse",
    backgroundColor = P ? void 0 : H ? "text" : M ? JR : void 0,
    [children_2 = "", ...g] = children;
  return r(s, {
    paddingLeft: t,
    flexShrink: 1,
    alignSelf: "flex-start",
    backgroundColor: backgroundColor,
    onClick: hoverFollowsPaint && !repeat ? U : void 0,
    onPointer: hoverFollowsPaint && repeat ? N : void 0,
    onMouseEnter: hoverFollowsPaint ? () => p(!0) : void 0,
    onMouseLeave: hoverFollowsPaint ? () => p(!1) : void 0,
    hoverFollowsPaint: hoverFollowsPaint,
    noSelect: !0,
    children: [e(n, {
      color: H && !P ? "inverseText" : void 0,
      dimColor: !H,
      inverse: H && P,
      wrap: "truncate-end",
      children: M && !H && P ? r(ne, {
        children: [e(n, {
          inverse: !0,
          children: children_2
        }), g.join("")]
      }) : children
    }), t > 0 && hoverFollowsPaint && e(s, {
      width: t,
      flexShrink: 1000
    })]
  });
}
var $o = 1000;
function co() {
  let t = S(2),
    o = Rn(),
    l;
  if (t[0] !== o) l = () => {
    let a = {
      at: Number.NEGATIVE_INFINITY,
      row: -1
    };
    return {
      pressed: m => {
        a = {
          at: o.now(),
          row: m.row
        };
      },
      dropsClick: f => {
        if (f.row !== a.row || o.now() - a.at >= $o) {
          return !1;
        }
        return f.dropAsStray(), !0;
      }
    };
  }, t[0] = o, t[1] = l;else l = t[1];
  let [i] = y(l);
  return i;
}
var Dmn = Jt(() => !1);
function EP(o) {
  let M = S(6),
    {
      direction: direction,
      count: count,
      onPress: onPress_2
    } = o;
  if (count <= 0) {
    return null;
  }
  let m = direction === "above" ? children_5 : children_7;
  const f = `${count} more ${direction}`,
    children_3 = `${m} ${count} more`;
  let children_4;
  if (M[0] !== onPress_2 || M[1] !== children_3) children_4 = e(wUe, {
    paddingX: 1,
    onPress: onPress_2,
    children: children_3
  }), M[0] = onPress_2, M[1] = children_3, M[2] = children_4;else children_4 = M[2];
  let H;
  if (M[3] !== f || M[4] !== children_4) H = e(s, {
    paddingLeft: 1,
    "aria-label": f,
    children: children_4
  }), M[3] = f, M[4] = children_4, M[5] = H;else H = M[5];
  return H;
}
j();
j();
function ao() {
  let o = ve(Lmn),
    {
      subscribeHoverTracked: subscribeHoverTracked,
      isHoverTracked: isHoverTracked
    } = ve(Dm),
    a = At(subscribeHoverTracked, isHoverTracked);
  return o ?? a;
}
j();
var Qo = 5;
function Xe(o) {
  let I = S(50),
    {
      offset: t,
      visible: visible,
      total: total,
      height: height,
      onScrollTo: onScrollTo,
      onScrollBy: onScrollBy,
      arrows: arrows
    } = o,
    p = height === void 0 ? visible : height,
    H = arrows === void 0 ? !1 : arrows,
    B = A(null),
    [x, k] = y(!1),
    [C, F] = y(!1),
    E = onScrollTo !== void 0,
    U,
    N;
  if (I[0] !== E) U = () => {
    if (!E && B.current !== null && B.current.jump !== null) B.current = null;
  }, N = [E], I[0] = E, I[1] = U, I[2] = N;else U = I[1], N = I[2];
  if (O(U, N), total <= visible || p < 1) {
    return null;
  }
  let P = H && p >= Qo,
    height_2 = P ? p - 2 : p,
    G;
  if (I[3] !== height_2 || I[4] !== t || I[5] !== total || I[6] !== visible) G = bo({
    offset: t,
    visible: visible,
    total: total,
    height: height_2
  }), I[3] = height_2, I[4] = t, I[5] = total, I[6] = visible, I[7] = G;else G = I[7];
  let {
      top: top,
      size: size
    } = G,
    L = height_2 - top - size,
    V;
  if (I[8] !== height_2 || I[9] !== t || I[10] !== onScrollTo || I[11] !== size || I[12] !== top || I[13] !== total || I[14] !== visible) {
    V = function V(h) {
      let current_3 = B.current;
      if (h.type === "up") {
        if (B.current = null, k(!1), current_3 !== null && current_3.jump !== null && !h.isUnreported && Ve(current_3.jump, h)) K({
          ...current_3,
          asked: t
        }, h.row, !1);
        return;
      }
      if (h.type === "down" && h.button === 0) {
        let Z = h.localRow >= top && h.localRow < top + size;
        let q = {
          trackRow: h.row - h.localRow,
          visible: visible,
          total: total,
          height: height_2,
          grab: Z ? h.localRow - top : Math.floor(size / 2),
          asked: t,
          jump: Z ? null : {
            col: h.col,
            row: h.row
          }
        };
        if (B.current = q, k(!0), Z) K(q, h.row, !0);
        return;
      }
      if (current_3 === null) {
        return;
      }
      if (current_3.jump !== null) {
        if (Math.abs(h.row - current_3.jump.row) <= Oe) {
          return;
        }
        current_3.jump = null;
      }
      K(current_3, h.row, !1);
    };
    function K(W, J, ee) {
      let d = ln({
        top: J - W.trackRow - W.grab,
        visible: W.visible,
        total: W.total,
        height: W.height
      });
      let v = d >= W.total - W.visible ? W.total - Math.min(W.visible, visible) : d;
      if (v === W.asked) {
        return;
      }
      if (W.asked = v, !ee) onScrollTo?.(v);
    }
    I[8] = height_2, I[9] = t, I[10] = onScrollTo, I[11] = size, I[12] = top, I[13] = total, I[14] = visible, I[15] = V;
  } else V = I[15];
  let color = C || x ? "suggestion" : void 0,
    re;
  if (I[16] !== P || I[17] !== t || I[18] !== onScrollBy) re = P && e(wUe, {
    repeat: !0,
    onPress: onScrollBy && t > 0 ? () => onScrollBy(-1) : void 0,
    children: children_5
  }), I[16] = P, I[17] = t, I[18] = onScrollBy, I[19] = re;else re = I[19];
  const onPointer = onScrollTo || x ? V : void 0;
  let onMouseEnter;
  if (I[20] !== onScrollTo) onMouseEnter = onScrollTo && (() => F(!0)), I[20] = onScrollTo, I[21] = onMouseEnter;else onMouseEnter = I[21];
  let onMouseLeave;
  if (I[22] !== onScrollTo) onMouseLeave = onScrollTo && (() => F(!1)), I[22] = onScrollTo, I[23] = onMouseLeave;else onMouseLeave = I[23];
  let X;
  if (I[24] !== top) X = top > 0 && e(n, {
    dimColor: !0,
    children: Pe(xw.pipe, top)
  }), I[24] = top, I[25] = X;else X = I[25];
  let children_6;
  if (I[26] !== size) children_6 = Pe(UFs, size), I[26] = size, I[27] = children_6;else children_6 = I[27];
  let le;
  if (I[28] !== children_6 || I[29] !== color) le = e(n, {
    color: color,
    children: children_6
  }), I[28] = children_6, I[29] = color, I[30] = le;else le = I[30];
  let Q;
  if (I[31] !== L) Q = L > 0 && e(n, {
    dimColor: !0,
    children: Pe(xw.pipe, L)
  }), I[31] = L, I[32] = Q;else Q = I[32];
  let he;
  if (I[33] !== X || I[34] !== le || I[35] !== Q || I[36] !== onPointer || I[37] !== onMouseEnter || I[38] !== onMouseLeave) he = r(Gp, {
    flexDirection: "column",
    flexShrink: 0,
    onPointer: onPointer,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: [X, le, Q]
  }), I[33] = X, I[34] = le, I[35] = Q, I[36] = onPointer, I[37] = onMouseEnter, I[38] = onMouseLeave, I[39] = he;else he = I[39];
  let be;
  if (I[40] !== P || I[41] !== t || I[42] !== onScrollBy || I[43] !== total || I[44] !== visible) be = P && e(wUe, {
    repeat: !0,
    onPress: onScrollBy && t < total - visible ? () => onScrollBy(1) : void 0,
    children: children_7
  }), I[40] = P, I[41] = t, I[42] = onScrollBy, I[43] = total, I[44] = visible, I[45] = be;else be = I[45];
  let Se;
  if (I[46] !== he || I[47] !== be || I[48] !== re) Se = e(Gj, {
    children: r(s, {
      flexDirection: "column",
      flexShrink: 0,
      children: [re, he, be]
    })
  }), I[46] = he, I[47] = be, I[48] = re, I[49] = Se;else Se = I[49];
  return Se;
}
function bo({
  offset: offset,
  visible: visible_2,
  total: total_2,
  height: height_3
}) {
  let size_2 = Ff(Math.round(visible_2 / total_2 * height_3), 1, Math.max(1, height_3 - 1)),
    top_2 = height_3 - size_2,
    i = total_2 - visible_2;
  if (offset <= 0) return {
    top: 0,
    size: size_2
  };
  if (offset >= i) return {
    top: top_2,
    size: size_2
  };
  let top_3 = Math.round(offset / i * top_2);
  if (top_2 < 2) return {
    top: top_3,
    size: size_2
  };
  return {
    top: Ff(top_3, 1, top_2 - 1),
    size: size_2
  };
}
function ln({
  top: top_4,
  visible: visible_3,
  total: total_3,
  height: height_4
}) {
  let {
      size: size_3
    } = bo({
      offset: 0,
      visible: visible_3,
      total: total_3,
      height: height_4
    }),
    f = height_4 - size_3,
    i = total_3 - visible_3;
  if (top_4 <= 0) return 0;
  if (top_4 >= f) return i;
  let M = Math.round(top_4 / f * i);
  if (i < 2) return M;
  return Ff(M, 1, i - 1);
}
function Pe(o, length) {
  return Array.from({
    length: length
  }, () => o).join(`
`);
}
function z3n(o) {
  let p = S(12),
    {
      bar: bar,
      height: height_5,
      children: children_8
    } = o,
    [m, f] = y(!1),
    i = ao();
  if (m && !i) f(!1);
  let M = i && bar.total > bar.visible,
    onMouseEnter_2,
    onMouseLeave_2;
  if (p[0] === w) onMouseEnter_2 = () => f(!0), onMouseLeave_2 = () => f(!1), p[0] = onMouseEnter_2, p[1] = onMouseLeave_2;else onMouseEnter_2 = p[0], onMouseLeave_2 = p[1];
  let x;
  if (p[2] !== children_8) x = e(s, {
    flexDirection: "column",
    flexGrow: 1,
    children: children_8
  }), p[2] = children_8, p[3] = x;else x = p[3];
  let k;
  if (p[4] !== bar || p[5] !== M || p[6] !== height_5 || p[7] !== m) k = M && (m ? e(Xe, {
    ...bar,
    height: height_5
  }) : e(s, {
    width: 1,
    flexShrink: 0
  })), p[4] = bar, p[5] = M, p[6] = height_5, p[7] = m, p[8] = k;else k = p[8];
  let C;
  if (p[9] !== x || p[10] !== k) C = r(s, {
    gap: 1,
    onMouseEnter: onMouseEnter_2,
    onMouseLeave: onMouseLeave_2,
    children: [x, k]
  }), p[9] = x, p[10] = k, p[11] = C;else C = p[11];
  return C;
}
j();
j();
function oHo(o, t, l) {
  let a = Ff(o - l + 1, 0, Math.max(0, t - l)),
    windowEnd = Math.min(a + l, t);
  return {
    windowStart: a,
    windowEnd: windowEnd,
    moreAbove: a,
    moreBelow: t - windowEnd
  };
}
var ct = new Set();
function un({
  lineCount: o,
  visibleCount: visibleCount,
  cursorLine: cursorLine,
  getCursorLine: getCursorLine,
  headings = ct,
  boundaries: boundaries,
  markerLines = 0,
  onScroll: onScroll
}) {
  let p = Math.max(0, o - 1),
    H = Ff(cursorLine, 0, p),
    B = () => Ff(getCursorLine(), 0, p),
    [x, k, C] = Zf(null),
    F = visibleCount + 2 * markerLines,
    E = 0;
  while (E < o && headings.has(E)) E++;
  let I = o - 1;
  while (I >= 0 && headings.has(I)) I--;
  function U(d, v) {
    return (d > E ? markerLines : 0) + (v <= I ? markerLines : 0);
  }
  function N(d) {
    return d <= 0 || d >= o || boundaries === void 0 || boundaries.has(d) || headings.has(d);
  }
  function P(d) {
    let v = Math.min(d + 1, o);
    while (!N(v)) v++;
    return v;
  }
  function D(d) {
    return N(d) && !(d > E && d <= E + markerLines);
  }
  function G(d, v) {
    let u = d + v;
    while (u > 0 && u < o && !D(u)) u += v;
    return Ff(u, 0, o);
  }
  function g(d) {
    for (let v = Math.min(d + F, o); v > d; v--) if (N(v) && v - d + U(d, v) <= F) return v;
    return P(d);
  }
  let R = 0;
  for (let d = o - 1; d >= 0; d--) if (D(d) && g(d) < o) {
    R = G(d, 1);
    break;
  }
  function L(d) {
    let v = g(d);
    return headings.has(v - 1) && v < o;
  }
  function V(d) {
    let v = g(d);
    for (let u = d; u < v; u++) if (!headings.has(u)) return !0;
    return !1;
  }
  function h(d, v) {
    let u = d;
    while (!N(u)) u--;
    let re = P(u),
      oe = re > I ? o : re,
      Y = Math.min(u, R);
    while (!D(Y)) Y--;
    let _ = u <= E ? 0 : Y;
    while (_ < Y && g(_) < re) _ = G(_, 1);
    let X = Math.min(Y, Math.max(0, oe - F));
    while (X < Y && (!D(X) || g(X) < oe)) X++;
    let te = Ff(v ?? X, Math.min(X, _), _);
    while (!D(te)) te--;
    if (v !== null && v > u) for (let le = G(te, -1); le < te && g(le) >= oe && (headings.has(te - 1) || L(te)); le = G(le, -1)) te = le;
    return te;
  }
  let b = h(H, x),
    windowEnd_2 = g(b);
  O(() => {
    if (x !== null && x !== b) k(b);
  }, [x, b, k]);
  function scrollTo(d) {
    let v = h(B(), C()),
      u = Ff(d, 0, R);
    while (!D(u)) u--;
    let re = u < v ? -1 : 1;
    while (u !== v && u > 0 && u < R && (headings.has(u - 1) && (re < 0 || !headings.has(u)) || L(u) || !V(u))) u = G(u, re);
    let oe = V(u) ? u : v;
    k(oe);
    let Y = oe,
      _ = g(oe);
    while (Y < _ && h(Y, oe) !== oe) Y++;
    while (_ > Y && h(_ - 1, oe) !== oe) _--;
    onScroll?.(Y, _);
  }
  function scrollBy(d) {
    let v = h(B(), C());
    for (let u = 0; u < Math.abs(d); u++) v = G(v, d < 0 ? -1 : 1);
    if (d !== 0) scrollTo(v);
  }
  let fits = windowEnd_2 - b >= o,
    spareLines = fits ? 0 : Math.max(0, F - U(b, windowEnd_2) - windowEnd_2 + b),
    visible_4 = windowEnd_2 - b + spareLines;
  return {
    windowStart: b,
    windowEnd: windowEnd_2,
    spareLines: spareLines,
    fits: fits,
    getWindow: () => {
      let windowStart = h(B(), C());
      return {
        windowStart: windowStart,
        windowEnd: g(windowStart)
      };
    },
    scrollBy: scrollBy,
    scrollTo: scrollTo,
    pin: () => k(h(B(), C())),
    bar: {
      offset: b,
      visible: visible_4,
      total: o,
      onScrollTo: fits ? void 0 : d => scrollTo(d + visible_4 >= o ? R : d),
      onScrollBy: fits ? void 0 : scrollBy
    }
  };
}
function dn({
  count: count_2,
  visibleCount: visibleCount_2,
  headingLines: headingLines,
  rowHeights: rowHeights,
  moreRowLines = !1,
  rowKeys: rowKeys,
  resetKey: resetKey,
  initialCursor = 0,
  isDisabled = !1,
  onAccept: onAccept,
  onRowKeyDown: onRowKeyDown,
  onCursorChange: onCursorChange,
  edge = "clamp",
  onUpFromFirstItem: onUpFromFirstItem,
  onDownFromLastItem: onDownFromLastItem,
  declineHomeEnd = !1,
  keybindingContext: I = "Select"
}) {
  let U = A(null),
    N = Math.max(0, count_2 - 1),
    [P, D, G] = Zf(() => {
      let index = Ff(initialCursor, 0, N);
      return {
        index: index,
        key: rowKeys?.[index],
        resetKey: resetKey
      };
    }),
    hasFocus = nke(U),
    {
      focusDirection: focusDirection
    } = xUe(),
    L = $7(isDisabled);
  function V(c) {
    if (!Object.is(c.resetKey, resetKey)) return 0;
    let T = Ff(c.index, 0, N);
    if (c.key === void 0 || rowKeys?.[T] === c.key) return T;
    let se = rowKeys?.indexOf(c.key) ?? -1;
    return se < 0 ? T : se;
  }
  let cursor = V(P);
  function b() {
    return V(G());
  }
  function K(index_2) {
    D(T => T.index === index_2 && T.key === rowKeys?.[index_2] && Object.is(T.resetKey, resetKey) ? T : {
      index: index_2,
      key: rowKeys?.[index_2],
      resetKey: resetKey
    });
  }
  let headings_2 = new Set(headingLines),
    lineCount = headings_2.size;
  for (let c = 0; c < count_2; c++) lineCount += rowHeights?.[c] ?? 1;
  let W = [],
    J = [0],
    boundaries_2 = new Set();
  for (let c = 0, T = 0; c < lineCount; c++) {
    if (c >= T) {
      if (boundaries_2.add(c), !headings_2.has(c)) T = c + (rowHeights?.[W.length] ?? 1), W.push(c);
    }
    J.push(W.length);
  }
  let markerLines_2 = moreRowLines ? 1 : 0;
  function v(c) {
    X(T => {
      let se = T + c;
      if (edge === "wrap" && count_2 > 0) return (se % count_2 + count_2) % count_2;
      return Ff(se, 0, N);
    });
  }
  function u(c) {
    if (Q.fits) return !1;
    if (visibleCount_2 === 1) {
      v(c);
      return;
    }
    X(T => {
      let se = Q.getWindow(),
        ue = Ff((W[T] ?? 0) + c * (se.windowEnd - se.windowStart), 0, lineCount - 1);
      while (!boundaries_2.has(ue)) ue--;
      return Ff(c > 0 ? Math.max((J[ue + 1] ?? 0) - 1, T + 1) : Math.min(J[ue] ?? 0, T - 1), 0, N);
    });
  }
  function re(c) {
    if (b() === (c < 0 ? 0 : N)) {
      let T = c < 0 ? onUpFromFirstItem : onDownFromLastItem;
      if (T) {
        T();
        return;
      }
      if (edge !== "wrap" && focusDirection(c < 0 ? "up" : "down")) return;
    }
    v(c);
  }
  function oe(c) {
    if (declineHomeEnd && Q.fits) return !1;
    X(c);
  }
  O(() => {
    if (G() === P) K(cursor);
  });
  let Y = qo(c => onCursorChange?.(c)),
    _ = A(null);
  O(() => {
    if (count_2 === 0) {
      _.current = null;
      return;
    }
    if (_.current !== cursor) _.current = cursor, Y(cursor);
  }, [cursor, count_2]);
  function X(c) {
    let T = Ff(typeof c === "function" ? c(b()) : c, 0, N);
    if (K(T), count_2 === 0 || T === _.current) return;
    _.current = T, onCursorChange?.(T);
  }
  Sn(Er({
    "select:next": () => re(1),
    "select:previous": () => re(-1),
    "select:pageDown": () => u(1),
    "select:pageUp": () => u(-1),
    "select:first": () => oe(0),
    "select:last": () => oe(N)
  }, c => () => $7(isDisabled) ? !1 : c()), {
    context: I,
    isActive: hasFocus && !L && count_2 > 0
  }), Sn({
    "select:accept": () => $7(isDisabled) ? !1 : onAccept?.(b())
  }, {
    context: I,
    isActive: hasFocus && !L && count_2 > 0 && onAccept !== void 0
  });
  let te = vd() !== null;
  function onKeyDown(c) {
    if ($7(isDisabled) || count_2 === 0) return;
    let T = b();
    if (c.key === "return" && onAccept && !te) {
      onAccept(T), c.preventDefault(), c.stopImmediatePropagation();
      return;
    }
    onRowKeyDown?.(c, T);
  }
  let Q = un({
    lineCount: lineCount,
    visibleCount: visibleCount_2,
    cursorLine: W[cursor] ?? 0,
    getCursorLine: () => W[b()] ?? 0,
    headings: headings_2,
    boundaries: boundaries_2,
    markerLines: markerLines_2,
    onScroll: (c, T) => {
      let se = b(),
        ue = J[c] ?? 0,
        _e = (J[T] ?? count_2) - 1;
      X(ue > _e ? se : Ff(se, ue, _e));
    }
  });
  function he(c) {
    if (c.deltaY === 0 || $7(isDisabled)) return;
    Q.scrollBy(c.deltaY > 0 ? 1 : -1), c.stopImmediatePropagation();
  }
  function scrollToEdge(c, T = !1) {
    if (!T && $7(isDisabled)) return;
    Q.scrollTo(c < 0 ? 0 : lineCount);
  }
  function setCursor(c) {
    Q.pin(), X(Ff(c, 0, N));
  }
  return {
    cursor: cursor,
    windowStart: Q.windowStart,
    windowEnd: Q.windowEnd,
    spareLines: Q.spareLines,
    moreAbove: J[Q.windowStart] ?? 0,
    moreBelow: count_2 - (J[Q.windowEnd] ?? count_2),
    isCursor: c => c === cursor && count_2 > 0,
    hasFocus: hasFocus,
    scrollBar: {
      ...Q.bar,
      onScrollTo: L ? void 0 : Q.bar.onScrollTo,
      onScrollBy: L ? void 0 : Q.bar.onScrollBy
    },
    setCursor: setCursor,
    scrollToEdge: scrollToEdge,
    containerRef: U,
    bind: {
      ref: U,
      tabIndex: 0,
      onKeyDown: onKeyDown,
      onWheel: !L && !Q.fits ? he : void 0
    }
  };
}
function $7(o) {
  return typeof o === "function" ? o() : o === !0;
}
function Rt(label, value) {
  return {
    label: label,
    value: value
  };
}
function xt(oe, Y) {
  return oe + Y;
}
var qe = 3,
  mn = 7,
  Po = Jt(!1);
function M0() {
  return ve(Po);
}
function Cn(props) {
  let m = S(27),
    t = ot(),
    {
      onFocus: onFocus,
      onSelect: onSelect
    } = props;
  if (t && onSelect !== void 0) {
    let headings_3, i;
    if (m[0] !== props.children) {
      i = [];
      headings_3 = new Map();
      for (const M of z_.toArray(props.children)) {
        if (!Le(M)) {
          i.push(M);
          continue;
        }
        headings_3.set(i.length, [...(headings_3.get(i.length) ?? []), M]);
      }
      m[0] = props.children, m[1] = headings_3, m[2] = i;
    } else headings_3 = m[1], i = m[2];
    if (i.length === 0) {
      let p;
      if (m[3] !== props.emptyMessage) p = props.emptyMessage ? e(n, {
        children: props.emptyMessage
      }) : null, m[3] = props.emptyMessage, m[4] = p;else p = m[4];
      return p;
    }
    let onKeyDown_2;
    if (m[5] !== props.isDisabled) onKeyDown_2 = H => {
      if ($7(props.isDisabled) || H.ctrl || H.meta) {
        return;
      }
      if (H.key === "return" || H.key === " ") H.stopPropagation();
    }, m[5] = props.isDisabled, m[6] = onKeyDown_2;else onKeyDown_2 = m[6];
    let options;
    if (m[7] !== i) options = i.map(Rt), m[7] = i, m[8] = options;else options = m[8];
    let isDisabled_2;
    if (m[9] !== props.isDisabled) isDisabled_2 = $7(props.isDisabled), m[9] = props.isDisabled, m[10] = isDisabled_2;else isDisabled_2 = m[10];
    let onChange;
    if (m[11] !== onFocus || m[12] !== onSelect) onChange = C => {
      onFocus?.(C), onSelect(C);
    }, m[11] = onFocus, m[12] = onSelect, m[13] = onChange;else onChange = m[13];
    let children_9;
    if (m[14] !== headings_3 || m[15] !== onFocus || m[16] !== options || m[17] !== isDisabled_2 || m[18] !== onChange) children_9 = e(ule, {
      options: options,
      headings: headings_3,
      drawLabels: !0,
      isDisabled: isDisabled_2,
      onFocus: onFocus,
      onChange: onChange
    }), m[14] = headings_3, m[15] = onFocus, m[16] = options, m[17] = isDisabled_2, m[18] = onChange, m[19] = children_9;else children_9 = m[19];
    let E;
    if (m[20] !== onKeyDown_2 || m[21] !== children_9) E = e(s, {
      flexDirection: "column",
      onKeyDown: onKeyDown_2,
      children: children_9
    }), m[20] = onKeyDown_2, m[21] = children_9, m[22] = E;else E = m[22];
    return E;
  }
  if (props.visibleCount === void 0) {
    let p;
    if (m[23] !== props) p = e(Bo, {
      ...props
    }), m[23] = props, m[24] = p;else p = m[24];
    return p;
  }
  let p;
  if (m[25] !== props) p = e(eo, {
    props: props,
    visibleCount: props.visibleCount
  }), m[25] = props, m[26] = p;else p = m[26];
  return p;
}
function Bo(o) {
  let p = S(21),
    t = Bj(),
    l = ve(pK),
    a = Re(),
    {
      rows: rows
    } = As(a),
    f = Bl(),
    i = l !== null && !f,
    ref = A(null),
    H;
  if (p[0] !== i || p[1] !== t) H = () => {
    let current_4 = ref.current;
    if (current_4 === null) {
      return null;
    }
    let x = t?.box.current ?? current_4;
    while (t === null && !i && x.parentNode !== void 0) x = x.parentNode;
    return Ss(x).height - Ss(current_4).height;
  }, p[0] = i, p[1] = t, p[2] = H;else H = p[2];
  let chrome = Ia(H),
    C;
  if (p[3] !== l || p[4] !== t?.box.current) C = () => {
    let F = t?.box.current ?? ref.current;
    let E = l === null ? null : l();
    return F === null || E === null ? null : E + Ss(F).height;
  }, p[3] = l, p[4] = t?.box.current, p[5] = C;else C = p[5];
  let I = Ia(C),
    U = ve(TGt),
    N;
  if (p[6] !== o.children || p[7] !== o.emptyMessage) {
    let P = z_.toArray(o.children);
    N = P.every(Le) ? Number(Boolean(o.emptyMessage)) : P.map(Lo).reduce(xt, 0);
    p[6] = o.children, p[7] = o.emptyMessage, p[8] = N;
  } else N = p[8];
  let D = N,
    owed = o.maxVisibleCount === void 0 ? D : Math.min(D, o.maxVisibleCount),
    g,
    R;
  if (p[9] !== U || p[10] !== i || p[11] !== owed) g = () => i ? U?.({
    rows: () => ref.current === null ? owed : Ss(ref.current).height,
    owed: owed
  }) : void 0, R = [i, U, owed], p[9] = U, p[10] = i, p[11] = owed, p[12] = g, p[13] = R;else g = p[12], R = p[13];
  Zt(g, R);
  let L;
  if (p[14] === w) L = () => ref.current === null ? 0 : Ss(ref.current).width, p[14] = L;else L = p[14];
  let width = Ia(L),
    [h, b] = y(null),
    rows_2 = f ? t?.rows ?? rows : a.rows,
    Z = h?.rows === rows_2 && h.width === width;
  if (chrome !== null && (h === null || !Z || chrome > h.chrome)) b({
    rows: rows_2,
    width: width,
    chrome: chrome
  });
  let q = Z ? Math.max(h.chrome, chrome ?? h.chrome) : chrome,
    W = f ? rows_2 : i ? I : a.rows - (t?.reserve ?? mK),
    J = q === null || W === null ? qe : f || i ? W - q : Math.min(Math.max(mn, Math.floor(a.rows / 2)), W - q),
    ee = o.maxVisibleCount === void 0 ? J : Math.min(J, o.maxVisibleCount),
    visibleCount_3 = Math.max(1, ee),
    overflowHint = visibleCount_3 === 1 ? "none" : visibleCount_3 < qe && o.overflowHint !== "none" ? "glyph" : o.overflowHint === "count" ? void 0 : o.overflowHint,
    props_2;
  if (p[15] !== overflowHint || p[16] !== o) props_2 = {
    ...o,
    overflowHint: overflowHint
  }, p[15] = overflowHint, p[16] = o, p[17] = props_2;else props_2 = p[17];
  let re;
  if (p[18] !== visibleCount_3 || p[19] !== props_2) re = e(s, {
    ref: ref,
    flexDirection: "column",
    children: e(eo, {
      props: props_2,
      visibleCount: visibleCount_3
    })
  }), p[18] = visibleCount_3, p[19] = props_2, p[20] = re;else re = p[20];
  return re;
}
function eo({
  props: {
    children: children_10,
    defaultFocusIndex: t,
    resetKey: resetKey_2,
    onSelect: a,
    onFocus: onFocus_2,
    onRowKeyDown: onRowKeyDown_2,
    isDisabled: isDisabled_3,
    onDisabledRowClick: onDisabledRowClick,
    wrap = !1,
    onUpFromFirstItem: onUpFromFirstItem_2,
    onDownFromLastItem: onDownFromLastItem_2,
    declineHomeEnd: declineHomeEnd_2 = !1,
    keybindingContext: keybindingContext,
    overflowHint: overflowHint_2,
    scrollBar = !0,
    emptyMessage: E,
    hoverStyle: hoverStyle,
    rowClick = "select",
    styled = !1
  },
  visibleCount: visibleCount_4
}) {
  let D = z_.toArray(children_10),
    G = [],
    g = 0;
  for (let z of D) G.push(Lo(z)), g += G.at(-1) ?? 1;
  let R = overflowHint_2 === void 0 && g > visibleCount_4,
    visibleCount_5 = R ? Math.max(1, visibleCount_4 - 2) : visibleCount_4,
    moreRowLines_2 = R && visibleCount_5 === visibleCount_4 - 2,
    headingLines_2 = [],
    rowHeights_2 = [],
    rowKeys_2 = [],
    Z = [],
    q = [],
    W = 0;
  for (let [z, de] of D.entries()) {
    if (Z.push(rowHeights_2.length), q.push(W), Le(de)) {
      headingLines_2.push(W++);
      continue;
    }
    rowHeights_2.push(Math.min(G[z] ?? 1, visibleCount_5)), rowKeys_2.push(hy(de) ? de.key ?? void 0 : void 0), W += rowHeights_2.at(-1) ?? 1;
  }
  let count_3 = rowHeights_2.length,
    idle = $7(isDisabled_3),
    d = A(null),
    {
      containerRef: v,
      ...u
    } = dn({
      count: count_3,
      visibleCount: visibleCount_5,
      moreRowLines: moreRowLines_2,
      headingLines: headingLines_2,
      rowHeights: rowHeights_2,
      rowKeys: rowKeys_2,
      resetKey: resetKey_2,
      initialCursor: t,
      isDisabled: isDisabled_3,
      edge: wrap ? "wrap" : "clamp",
      onUpFromFirstItem: onUpFromFirstItem_2,
      onDownFromLastItem: onDownFromLastItem_2,
      declineHomeEnd: declineHomeEnd_2,
      keybindingContext: keybindingContext,
      onAccept: a,
      onRowKeyDown: onRowKeyDown_2,
      onCursorChange: cursor_2 => {
        d.current = {
          cursor: cursor_2,
          count: count_3
        }, onFocus_2?.(cursor_2);
      }
    }),
    re = qo(z => onFocus_2?.(z));
  O(() => {
    let current_5 = d.current;
    if (count_3 === 0 || current_5?.cursor === u.cursor && current_5.count === count_3) return;
    d.current = {
      cursor: u.cursor,
      count: count_3
    }, re(u.cursor);
  }, [u.cursor, count_3]), wS(v, !idle);
  let oe = mv(),
    Y = co(),
    _ = z => oe(z) || Y.dropsClick(z);
  if (count_3 === 0) return e(s, {
    ref: v,
    flexDirection: "column",
    tabIndex: 0,
    children: E && e(n, {
      dimColor: !0,
      children: E
    })
  });
  let X = overflowHint_2 === void 0 || overflowHint_2 === "glyph" && visibleCount_4 === 1 ? "count" : overflowHint_2,
    {
      windowStart: windowStart_2,
      windowEnd: windowEnd_3,
      moreAbove: Q,
      moreBelow: he
    } = u,
    be = D.flatMap((z, index_3) => {
      let line = q[index_3] ?? 0;
      return line >= windowStart_2 && line < windowEnd_3 ? [{
        child: z,
        index: index_3,
        line: line
      }] : [];
    }),
    Se = z => idle && onDisabledRowClick === void 0 ? void 0 : de => {
      if (u.scrollToEdge(z, idle), Y.pressed(de), idle) onDisabledRowClick?.(d.current?.cursor ?? u.cursor);
    },
    c = X === "count" && e(EP, {
      direction: "above",
      count: Q,
      onPress: Se(-1)
    }),
    T = X === "count" && e(EP, {
      direction: "below",
      count: he,
      onPress: Se(1)
    }),
    se = be.map(({
      child: z,
      index: index_4,
      line: line_2
    }, Ko) => {
      let _o = hy(z) ? z.key ?? line_2 : line_2,
        Vo = Ko === 0 && Q > 0,
        zo = Ko === be.length - 1 && he > 0;
      if (Le(z)) return e(nI, {
        isFocused: !1,
        showScrollUp: X === "glyph" && Vo,
        showScrollDown: X === "glyph" && zo,
        styled: !1,
        children: z
      }, _o);
      let ge = Z[index_4] ?? 0,
        isFocused = u.isCursor(ge);
      return e(Po.Provider, {
        value: isFocused && !idle,
        children: e(s, {
          flexDirection: "column",
          height: rowHeights_2[ge],
          overflow: "hidden",
          onClick: idle && onDisabledRowClick !== void 0 ? ye => {
            if (ye.droppedAsStray || _(ye)) return;
            u.setCursor(ge), onDisabledRowClick(ge);
          } : rowClick === "move" && !idle && a !== void 0 ? ye => {
            if (ye.droppedAsStray || _(ye) || $7(isDisabled_3)) return;
            u.setCursor(ge);
          } : void 0,
          children: e(nI, {
            isFocused: isFocused,
            idle: idle,
            showScrollUp: X === "glyph" && Vo,
            showScrollDown: X === "glyph" && zo,
            styled: styled,
            hoverStyle: hoverStyle,
            declareCursor: !idle && En(z)?.declareCursor !== !1,
            onClick: idle || a === void 0 || rowClick === "move" ? void 0 : ye => {
              if (_(ye) || $7(isDisabled_3)) return;
              u.setCursor(ge), a(ge);
            },
            children: z
          })
        })
      }, _o);
    }),
    ue = u.spareLines > 0 && e(s, {
      flexShrink: 0,
      height: u.spareLines
    });
  if (!scrollBar) return e(Dmn, {
    value: Y.dropsClick,
    children: r(TUe, {
      windowStart: windowStart_2,
      ...u.bind,
      children: [c, se, ue, T]
    })
  });
  let _e = r(TUe, {
    windowStart: windowStart_2,
    children: [se, ue]
  });
  return e(Dmn, {
    value: Y.dropsClick,
    children: r(s, {
      flexDirection: "column",
      ...u.bind,
      children: [moreRowLines_2 ? null : c, r(z3n, {
        bar: moreRowLines_2 ? {
          ...u.scrollBar,
          arrows: !0
        } : u.scrollBar,
        height: moreRowLines_2 ? visibleCount_4 : void 0,
        children: [moreRowLines_2 ? c : null, _e, moreRowLines_2 ? T : null]
      }), moreRowLines_2 ? null : T]
    })
  });
}
function Item(o) {
  let l = S(2),
    {
      children: children_11
    } = o,
    a;
  if (l[0] !== children_11) a = e(ne, {
    children: children_11
  }), l[0] = children_11, l[1] = a;else a = l[1];
  return a;
}
function Heading(o) {
  let l = S(2),
    {
      children: children_12
    } = o,
    a;
  if (l[0] !== children_12) a = e(ne, {
    children: children_12
  }), l[0] = children_12, l[1] = a;else a = l[1];
  return a;
}
function Le(o) {
  return hy(o) && o.type === Heading;
}
function Lo(o) {
  let t = En(o)?.lines ?? 1;
  return Number.isFinite(t) ? Math.max(1, Math.trunc(t)) : 1;
}
function En(o) {
  return hy(o) && o.type === Item ? o.props : void 0;
}
var hc = Object.assign(Cn, {
  Item: Item,
  Heading: Heading
});
function Ft() {
  return new Set();
}
function jt(q) {
  if (!Ie(q)) {
    return 0;
  }
  let {
    icon: icon
  } = q.props;
  return hy(icon) && icon.type === Tt ? rEt() : ce(rI(icon));
}
function Ut(J) {
  return we(J.props.meta).length > 0;
}
function Kt(ee) {
  return ce(U7(ee.props.label));
}
function _t(d) {
  return ce(we(d.props.meta).join(" \xB7 "));
}
var Bn = 2,
  ro = 3,
  Ln = 50,
  In = 6;
function _n(o) {
  let t = S(30),
    children_13,
    a;
  if (t[0] !== o) ({
    children: children_13,
    ...a
  } = o), t[0] = o, t[1] = children_13, t[2] = a;else children_13 = t[1], a = t[2];
  let m = As(ve(nh) ?? {
      rows: 0,
      columns: 0
    }),
    f = A(null),
    [rowLines] = y(Ft),
    M;
  if (t[3] !== rowLines || t[4] !== m) M = () => {
    let [p] = rowLines;
    if (p) {
      return Ss(p).width;
    }
    return (f.current && Ss(f.current).width || m.columns) - Bn;
  }, t[3] = rowLines, t[4] = m, t[5] = M;else M = t[5];
  let H = Ia(M),
    B,
    x,
    k,
    children_14,
    ref_2,
    flexDirection;
  if (t[6] !== children_13 || t[7] !== a || t[8] !== rowLines || t[9] !== H) {
    let I = z_.toArray(children_13);
    let U = I.filter(Ie);
    let iconWidth = Math.max(0, ...I.map(jt));
    let P = U.filter(Ut);
    let D = Math.min(Ln, Math.max(0, ...P.map(Kt)));
    let G = Math.max(0, ...P.map(_t));
    let g = H - (iconWidth > 0 ? iconWidth + 1 : 0) - ro;
    let R = g - Math.min(D, Math.max(Math.ceil(g / 2), g - G));
    let factsWidth = D + G > g && g < 2 * In ? 0 : Math.min(R, Math.max(0, ...P.map(item => ce(io(we(item.props.meta), R)))));
    let nameWidth = Math.min(D, g - factsWidth);
    x = s;
    ref_2 = f;
    flexDirection = "column";
    B = hc;
    k = a;
    let b;
    if (t[16] !== factsWidth || t[17] !== iconWidth || t[18] !== nameWidth || t[19] !== rowLines) b = K => Ie(K) ? e(hc.Item, {
      lines: U7(K.props.description) ? 2 : 1,
      children: e(Uo, {
        item: K.props,
        iconWidth: iconWidth,
        nameWidth: nameWidth,
        factsWidth: factsWidth,
        rowLines: rowLines
      })
    }, K.key) : K, t[16] = factsWidth, t[17] = iconWidth, t[18] = nameWidth, t[19] = rowLines, t[20] = b;else b = t[20];
    children_14 = I.map(b);
    t[6] = children_13, t[7] = a, t[8] = rowLines, t[9] = H, t[10] = B, t[11] = x, t[12] = k, t[13] = children_14, t[14] = ref_2, t[15] = flexDirection;
  } else B = t[10], x = t[11], k = t[12], children_14 = t[13], ref_2 = t[14], flexDirection = t[15];
  let children_15;
  if (t[21] !== B || t[22] !== k || t[23] !== children_14) children_15 = e(B, {
    ...k,
    children: children_14
  }), t[21] = B, t[22] = k, t[23] = children_14, t[24] = children_15;else children_15 = t[24];
  let Z;
  if (t[25] !== x || t[26] !== ref_2 || t[27] !== flexDirection || t[28] !== children_15) Z = e(x, {
    ref: ref_2,
    flexDirection: flexDirection,
    children: children_15
  }), t[25] = x, t[26] = ref_2, t[27] = flexDirection, t[28] = children_15, t[29] = Z;else Z = t[29];
  return Z;
}
function Uo(o) {
  let C = S(42),
    {
      item: item_2,
      iconWidth: l,
      nameWidth: nameWidth_2,
      factsWidth: m,
      rowLines: rowLines_2
    } = o,
    {
      icon: i,
      meta: meta,
      ...p
    } = item_2,
    H = M0(),
    B = ot(),
    children_16 = U7(p.label),
    children_19 = U7(p.description),
    F,
    E;
  if (C[0] !== children_19 || C[1] !== m || C[2] !== i || C[3] !== B || C[4] !== children_16 || C[5] !== meta) {
    E = Pn;
    G: {
      let I = we(meta);
      if (B) {
        const U = I.length > 0 && `, ${I.join(" \xB7 ")}`;
        const N = children_19 && `. ${children_19}`;
        let P;
        if (C[8] !== children_16 || C[9] !== U || C[10] !== N) P = r(n, {
          children: [children_16, U, N]
        }), C[8] = children_16, C[9] = U, C[10] = N, C[11] = P;else P = C[11];
        let D;
        if (C[12] !== i || C[13] !== P) D = r(s, {
          children: [i, P]
        }), C[12] = i, C[13] = P, C[14] = D;else D = C[14];
        E = D;
        break G;
      }
      F = m > 0 && I.length > 0 ? io(I, m) : void 0;
    }
    C[0] = children_19, C[1] = m, C[2] = i, C[3] = B, C[4] = children_16, C[5] = meta, C[6] = F, C[7] = E;
  } else F = C[6], E = C[7];
  if (E !== Pn) return E;
  let children_18 = F,
    ref_3;
  if (C[15] !== rowLines_2) ref_3 = R => {
    if (!R) {
      return;
    }
    return rowLines_2.add(R), () => {
      rowLines_2.delete(R);
    };
  }, C[15] = rowLines_2, C[16] = ref_3;else ref_3 = C[16];
  let N;
  if (C[17] !== i || C[18] !== l) N = l > 0 && e(s, {
    flexShrink: 0,
    width: l,
    marginRight: 1,
    children: i
  }), C[17] = i, C[18] = l, C[19] = N;else N = C[19];
  const flexShrink = children_18 === void 0 ? 1 : 0,
    width_2 = children_18 === void 0 ? void 0 : nameWidth_2,
    marginRight = children_18 === void 0 ? 0 : ro,
    color_2 = H ? "suggestion" : void 0;
  let children_17;
  if (C[20] !== children_16 || C[21] !== color_2) children_17 = e(n, {
    color: color_2,
    wrap: "truncate-end",
    children: children_16
  }), C[20] = children_16, C[21] = color_2, C[22] = children_17;else children_17 = C[22];
  let b;
  if (C[23] !== children_17 || C[24] !== flexShrink || C[25] !== width_2 || C[26] !== marginRight) b = e(s, {
    flexShrink: flexShrink,
    width: width_2,
    marginRight: marginRight,
    children: children_17
  }), C[23] = children_17, C[24] = flexShrink, C[25] = width_2, C[26] = marginRight, C[27] = b;else b = C[27];
  let K;
  if (C[28] !== m || C[29] !== children_18) K = children_18 !== void 0 && e(s, {
    flexShrink: 1,
    maxWidth: m,
    children: e(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: children_18
    })
  }), C[28] = m, C[29] = children_18, C[30] = K;else K = C[30];
  let Z;
  if (C[31] !== b || C[32] !== K || C[33] !== ref_3 || C[34] !== N) Z = r(s, {
    ref: ref_3,
    children: [N, b, K]
  }), C[31] = b, C[32] = K, C[33] = ref_3, C[34] = N, C[35] = Z;else Z = C[35];
  let q;
  if (C[36] !== children_19 || C[37] !== l) q = children_19 && e(s, {
    paddingLeft: l > 0 ? l + 1 : 0,
    children: e(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: children_19
    })
  }), C[36] = children_19, C[37] = l, C[38] = q;else q = C[38];
  let W;
  if (C[39] !== Z || C[40] !== q) W = r(s, {
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    children: [Z, q]
  }), C[39] = Z, C[40] = q, C[41] = W;else W = C[41];
  return W;
}
function Item_2(o) {
  return null;
}
function Ie(o) {
  return hy(o) && o.type === Item_2;
}
function we(o) {
  return (o ?? []).map(U7).filter(item => item !== "");
}
function io(o, t) {
  return o.map((item, index) => o.slice(0, index + 1).join(" \xB7 ")).findLast((l, a) => a === 0 || ce(l) <= t) ?? "";
}
function U7(o) {
  if (typeof o === "string") return Yr(o);
  return typeof o === "number" || typeof o === "boolean" ? String(o) : "";
}
var Tn = Object.assign(_n, {
  Item: Item_2
});
export { wUe, Dmn, EP, z3n, oHo, $7, M0, hc, U7, Tn };