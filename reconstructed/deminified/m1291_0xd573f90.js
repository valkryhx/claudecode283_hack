// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { io } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { fr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { Yq, w$, m1r, o_ } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { s, n, _t, SA, Yc, Pue, VK, od, Xi } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Ma, Y_ } from "B:/~BUN/root/chunk-trcn2d68.js";
import { Jv } from "B:/~BUN/root/chunk-mr8gretd.js";
import { ol, As } from "B:/~BUN/root/chunk-syke822n.js";
import { Mf } from "B:/~BUN/root/chunk-9jvj58wt.js";
import { DQ, tw, zK, Ii } from "B:/~BUN/root/chunk-bt71g93n.js";
import { Yg } from "B:/~BUN/root/chunk-vabpvk99.js";
import { jK } from "B:/~BUN/root/chunk-hamz9y7k.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { Jyt } from "B:/~BUN/root/chunk-t7rzs5dc.js";
import { Ya } from "B:/~BUN/root/chunk-7nc4t0q7.js";
import { Wt } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { Mer, et } from "B:/~BUN/root/chunk-zg8y1401.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Qg, Vt, Du, Pe, R, Gr, T, g, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();
function BK(o) {
  let m = w(4),
    {
      direction: direction,
      count: count
    } = o;
  if (count <= 0) {
    return null;
  }
  const d = direction === "above" ? Yq : w$;
  let u;
  if (m[0] !== count || m[1] !== direction || m[2] !== d) u = e(s, {
    paddingLeft: 2,
    children: r(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: [d, " ", count, " more ", direction]
    })
  }), m[0] = count, m[1] = direction, m[2] = d, m[3] = u;else u = m[3];
  return u;
}
N();
var Ye = Vt(null),
  zGt = 1;
function uvn(o) {
  let u = w(8),
    {
      reserve: reserve,
      children: children
    } = o,
    d = T(null),
    {
      rows: rows
    } = As(ve()),
    value;
  if (u[0] !== reserve || u[1] !== rows) value = {
    box: d,
    rows: rows,
    reserve: reserve
  }, u[0] = reserve, u[1] = rows, u[2] = value;else value = u[2];
  let children_2;
  if (u[3] !== children) children_2 = e(s, {
    ref: d,
    flexDirection: "column",
    children: children
  }), u[3] = children, u[4] = children_2;else children_2 = u[4];
  let b;
  if (u[5] !== value || u[6] !== children_2) b = e(Ye, {
    value: value,
    children: children_2
  }), u[5] = value, u[6] = children_2, u[7] = b;else b = u[7];
  return b;
}
function jJe() {
  return Pe(Ye);
}
N();
N();
function wo() {
  let o = Pe(Jyt),
    {
      subscribeHoverTracked: subscribeHoverTracked,
      isHoverTracked: isHoverTracked
    } = Pe(Y_),
    d = At(subscribeHoverTracked, isHoverTracked);
  return o ?? d;
}
N();
function Je(o) {
  let h = w(33),
    {
      offset: c,
      visible: visible,
      total: total,
      height: height,
      onScrollTo: onScrollTo
    } = o,
    height_2 = height === void 0 ? visible : height,
    v = T(null),
    [b, D] = g(!1),
    [E, k] = g(!1);
  if (total <= visible || height_2 < 1) {
    return null;
  }
  let W;
  if (h[0] !== height_2 || h[1] !== c || h[2] !== total || h[3] !== visible) W = yo({
    offset: c,
    visible: visible,
    total: total,
    height: height_2
  }), h[0] = height_2, h[1] = c, h[2] = total, h[3] = visible, h[4] = W;else W = h[4];
  let {
      top: top,
      size: size
    } = W,
    A = height_2 - top - size,
    H;
  if (h[5] !== height_2 || h[6] !== c || h[7] !== onScrollTo || h[8] !== size || h[9] !== top || h[10] !== total || h[11] !== visible) H = function re(K) {
    if (K.type === "up") {
      v.current = null, D(!1);
      return;
    }
    let X = K.type === "down" && K.button === 0;
    let Y = X && K.localRow >= top && K.localRow < top + size;
    if (X) v.current = {
      trackRow: K.row - K.localRow,
      visible: visible,
      total: total,
      height: height_2,
      grab: Y ? K.localRow - top : Math.floor(size / 2),
      asked: c
    }, D(!0);
    let current = v.current;
    if (current === null) {
      return;
    }
    let q = mn({
      top: K.row - current.trackRow - current.grab,
      visible: current.visible,
      total: current.total,
      height: current.height
    });
    let U = q >= current.total - current.visible ? current.total - Math.min(current.visible, visible) : q;
    if (U === current.asked) {
      return;
    }
    if (current.asked = U, !Y) onScrollTo?.(U);
  }, h[5] = height_2, h[6] = c, h[7] = onScrollTo, h[8] = size, h[9] = top, h[10] = total, h[11] = visible, h[12] = H;else H = h[12];
  let re = H,
    color = E || b ? "suggestion" : void 0;
  const onPointer = onScrollTo || b ? re : void 0;
  let onMouseEnter;
  if (h[13] !== onScrollTo) onMouseEnter = onScrollTo && (() => k(!0)), h[13] = onScrollTo, h[14] = onMouseEnter;else onMouseEnter = h[14];
  let onMouseLeave;
  if (h[15] !== onScrollTo) onMouseLeave = onScrollTo && (() => k(!1)), h[15] = onScrollTo, h[16] = onMouseLeave;else onMouseLeave = h[16];
  let J;
  if (h[17] !== top) J = top > 0 && e(n, {
    dimColor: !0,
    children: Se(o_.pipe, top)
  }), h[17] = top, h[18] = J;else J = h[18];
  let children_3;
  if (h[19] !== size) children_3 = Se(m1r, size), h[19] = size, h[20] = children_3;else children_3 = h[20];
  let _;
  if (h[21] !== children_3 || h[22] !== color) _ = e(n, {
    color: color,
    children: children_3
  }), h[21] = children_3, h[22] = color, h[23] = _;else _ = h[23];
  let Q;
  if (h[24] !== A) Q = A > 0 && e(n, {
    dimColor: !0,
    children: Se(o_.pipe, A)
  }), h[24] = A, h[25] = Q;else Q = h[25];
  let a;
  if (h[26] !== Q || h[27] !== onPointer || h[28] !== onMouseEnter || h[29] !== onMouseLeave || h[30] !== J || h[31] !== _) a = e(SA, {
    children: r(Yc, {
      flexDirection: "column",
      flexShrink: 0,
      onPointer: onPointer,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      children: [J, _, Q]
    })
  }), h[26] = Q, h[27] = onPointer, h[28] = onMouseEnter, h[29] = onMouseLeave, h[30] = J, h[31] = _, h[32] = a;else a = h[32];
  return a;
}
function yo({
  offset: offset,
  visible: visible_2,
  total: total_2,
  height: height_3
}) {
  let size_2 = Ma(Math.round(visible_2 / total_2 * height_3), 1, Math.max(1, height_3 - 1)),
    top_2 = height_3 - size_2,
    l = total_2 - visible_2;
  if (offset <= 0) return {
    top: 0,
    size: size_2
  };
  if (offset >= l) return {
    top: top_2,
    size: size_2
  };
  let top_3 = Math.round(offset / l * top_2);
  if (top_2 < 2) return {
    top: top_3,
    size: size_2
  };
  return {
    top: Ma(top_3, 1, top_2 - 1),
    size: size_2
  };
}
function mn({
  top: top_4,
  visible: visible_3,
  total: total_3,
  height: height_4
}) {
  let {
      size: size_3
    } = yo({
      offset: 0,
      visible: visible_3,
      total: total_3,
      height: height_4
    }),
    u = height_4 - size_3,
    l = total_3 - visible_3;
  if (top_4 <= 0) return 0;
  if (top_4 >= u) return l;
  let v = Math.round(top_4 / u * l);
  if (l < 2) return v;
  return Ma(v, 1, l - 1);
}
function Se(o, length) {
  return Array.from({
    length: length
  }, () => o).join(`
`);
}
function Yyt(o) {
  let v = w(11),
    {
      bar: bar,
      children: children_4
    } = o,
    [d, m] = g(!1),
    u = wo();
  if (d && !u) m(!1);
  let l = u && bar.total > bar.visible,
    onMouseEnter_2,
    onMouseLeave_2;
  if (v[0] === S) onMouseEnter_2 = () => m(!0), onMouseLeave_2 = () => m(!1), v[0] = onMouseEnter_2, v[1] = onMouseLeave_2;else onMouseEnter_2 = v[0], onMouseLeave_2 = v[1];
  let E;
  if (v[2] !== children_4) E = e(s, {
    flexDirection: "column",
    flexGrow: 1,
    children: children_4
  }), v[2] = children_4, v[3] = E;else E = v[3];
  let k;
  if (v[4] !== bar || v[5] !== l || v[6] !== d) k = l && (d ? e(Je, {
    ...bar
  }) : e(s, {
    width: 1,
    flexShrink: 0
  })), v[4] = bar, v[5] = l, v[6] = d, v[7] = k;else k = v[7];
  let h;
  if (v[8] !== E || v[9] !== k) h = r(s, {
    gap: 1,
    onMouseEnter: onMouseEnter_2,
    onMouseLeave: onMouseLeave_2,
    children: [E, k]
  }), v[8] = E, v[9] = k, v[10] = h;else h = v[10];
  return h;
}
N();
N();
function Xyt(o, c, t, d = null) {
  let m = Ma(d === null ? o - t + 1 : Ma(d, o - t + 1, o), 0, Math.max(0, c - t)),
    windowEnd = Math.min(m + t, c);
  return {
    windowStart: m,
    windowEnd: windowEnd,
    moreAbove: m,
    moreBelow: c - windowEnd
  };
}
var Ht = new Set();
function bn({
  lineCount: o,
  visibleCount: visibleCount,
  cursorLine: cursorLine,
  getCursorLine: getCursorLine,
  headings = Ht,
  boundaries: boundaries,
  markerLines = 0,
  onScroll: onScroll
}) {
  let b = Math.max(0, o - 1),
    D = Ma(cursorLine, 0, b),
    E = () => Ma(getCursorLine(), 0, b),
    [k, h, W] = Ii(null),
    M = visibleCount + 2 * markerLines,
    C = 0;
  while (C < o && headings.has(C)) C++;
  let A = o - 1;
  while (A >= 0 && headings.has(A)) A--;
  function H(a, f) {
    return (a > C ? markerLines : 0) + (f <= A ? markerLines : 0);
  }
  function K(a) {
    return a <= 0 || a >= o || boundaries === void 0 || boundaries.has(a) || headings.has(a);
  }
  function X(a) {
    let f = Math.min(a + 1, o);
    while (!K(f)) f++;
    return f;
  }
  function Y(a) {
    return K(a) && !(a > C && a <= C + markerLines);
  }
  function L(a, f) {
    let p = a + f;
    while (p > 0 && p < o && !Y(p)) p += f;
    return Ma(p, 0, o);
  }
  function q(a) {
    for (let f = Math.min(a + M, o); f > a; f--) if (K(f) && f - a + H(a, f) <= M) return f;
    return X(a);
  }
  let U = 0;
  for (let a = o - 1; a >= 0; a--) if (Y(a) && q(a) < o) {
    U = L(a, 1);
    break;
  }
  function re(a) {
    let f = q(a);
    return headings.has(f - 1) && f < o;
  }
  function P(a) {
    let f = q(a);
    for (let p = a; p < f; p++) if (!headings.has(p)) return !0;
    return !1;
  }
  function I(a, f) {
    let p = a;
    while (!K(p)) p--;
    let se = X(p),
      Z = se > A ? o : se,
      z = Math.min(p, U);
    while (!Y(z)) z--;
    let F = p <= C ? 0 : z;
    while (F < z && q(F) < se) F = L(F, 1);
    let oe = Math.min(z, Math.max(0, Z - M));
    while (oe < z && (!Y(oe) || q(oe) < Z)) oe++;
    let ee = Ma(f ?? oe, Math.min(oe, F), F);
    while (!Y(ee)) ee--;
    if (f !== null && f > p) for (let G = L(ee, -1); G < ee && q(G) >= Z && (headings.has(ee - 1) || re(ee)); G = L(G, -1)) ee = G;
    return ee;
  }
  let O = I(D, k),
    windowEnd_2 = q(O);
  R(() => {
    if (k !== null && k !== O) h(O);
  }, [k, O, h]);
  function scrollTo(a) {
    let f = I(E(), W()),
      p = Ma(a, 0, U);
    while (!Y(p)) p--;
    let se = p < f ? -1 : 1;
    while (p !== f && p > 0 && p < U && (headings.has(p - 1) && (se < 0 || !headings.has(p)) || re(p) || !P(p))) p = L(p, se);
    let Z = P(p) ? p : f;
    h(Z);
    let z = Z,
      F = q(Z);
    while (z < F && I(z, Z) !== Z) z++;
    while (F > z && I(F - 1, Z) !== Z) F--;
    onScroll?.(z, F);
  }
  let fits = windowEnd_2 - O >= o,
    spareLines = fits ? 0 : Math.max(0, M - H(O, windowEnd_2) - windowEnd_2 + O),
    visible_4 = windowEnd_2 - O + spareLines;
  return {
    windowStart: O,
    windowEnd: windowEnd_2,
    spareLines: spareLines,
    fits: fits,
    getWindow: () => {
      let windowStart = I(E(), W());
      return {
        windowStart: windowStart,
        windowEnd: q(windowStart)
      };
    },
    scrollBy: a => {
      let f = I(E(), W());
      for (let p = 0; p < Math.abs(a); p++) f = L(f, a < 0 ? -1 : 1);
      if (a !== 0) scrollTo(f);
    },
    scrollTo: scrollTo,
    pin: () => h(I(E(), W())),
    bar: {
      offset: O,
      visible: visible_4,
      total: o,
      onScrollTo: fits ? void 0 : a => scrollTo(a + visible_4 >= o ? U : a)
    }
  };
}
function ko({
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
  declineHomeEnd = !1
}) {
  let A = T(null),
    H = Math.max(0, count_2 - 1),
    [K, X, Y] = Ii(() => {
      let index = Ma(initialCursor, 0, H);
      return {
        index: index,
        key: rowKeys?.[index],
        resetKey: resetKey
      };
    }),
    hasFocus = VK(A),
    {
      focusDirection: focusDirection
    } = Pue(),
    U = xH(isDisabled);
  function re(i) {
    if (!Object.is(i.resetKey, resetKey)) return 0;
    let y = Ma(i.index, 0, H);
    if (i.key === void 0 || rowKeys?.[y] === i.key) return y;
    let x = rowKeys?.indexOf(i.key) ?? -1;
    return x < 0 ? y : x;
  }
  let cursor = re(K);
  function I() {
    return re(Y());
  }
  function O(index_2) {
    X(y => y.index === index_2 && y.key === rowKeys?.[index_2] && Object.is(y.resetKey, resetKey) ? y : {
      index: index_2,
      key: rowKeys?.[index_2],
      resetKey: resetKey
    });
  }
  let headings_2 = new Set(headingLines),
    lineCount = headings_2.size;
  for (let i = 0; i < count_2; i++) lineCount += rowHeights?.[i] ?? 1;
  let j = [],
    _ = [0],
    boundaries_2 = new Set();
  for (let i = 0, y = 0; i < lineCount; i++) {
    if (i >= y) {
      if (boundaries_2.add(i), !headings_2.has(i)) y = i + (rowHeights?.[j.length] ?? 1), j.push(i);
    }
    _.push(j.length);
  }
  let markerLines_2 = moreRowLines ? 1 : 0;
  function f(i) {
    oe(y => {
      let x = y + i;
      if (edge === "wrap" && count_2 > 0) return (x % count_2 + count_2) % count_2;
      return Ma(x, 0, H);
    });
  }
  function p(i) {
    if (ne.fits) return !1;
    if (visibleCount_2 === 1) {
      f(i);
      return;
    }
    oe(y => {
      let x = ne.getWindow(),
        ae = Ma((j[y] ?? 0) + i * (x.windowEnd - x.windowStart), 0, lineCount - 1);
      while (!boundaries_2.has(ae)) ae--;
      return Ma(i > 0 ? Math.max((_[ae + 1] ?? 0) - 1, y + 1) : Math.min(_[ae] ?? 0, y - 1), 0, H);
    });
  }
  function se(i) {
    if (I() === (i < 0 ? 0 : H)) {
      let y = i < 0 ? onUpFromFirstItem : onDownFromLastItem;
      if (y) {
        y();
        return;
      }
      if (edge !== "wrap" && focusDirection(i < 0 ? "up" : "down")) return;
    }
    f(i);
  }
  function Z(i) {
    if (declineHomeEnd && ne.fits) return !1;
    oe(i);
  }
  R(() => {
    if (Y() === K) O(cursor);
  });
  let z = Gr(i => onCursorChange?.(i)),
    F = T(null);
  R(() => {
    if (count_2 === 0) {
      F.current = null;
      return;
    }
    if (F.current !== cursor) F.current = cursor, z(cursor);
  }, [cursor, count_2]);
  function oe(i) {
    let y = Ma(typeof i === "function" ? i(I()) : i, 0, H);
    if (O(y), count_2 === 0 || y === F.current) return;
    F.current = y, onCursorChange?.(y);
  }
  Wt(io({
    "select:next": () => se(1),
    "select:previous": () => se(-1),
    "select:pageDown": () => p(1),
    "select:pageUp": () => p(-1),
    "select:first": () => Z(0),
    "select:last": () => Z(H)
  }, i => () => xH(isDisabled) ? !1 : i()), {
    context: "Select",
    isActive: hasFocus && !U && count_2 > 0
  }), Wt({
    "select:accept": () => xH(isDisabled) ? !1 : onAccept?.(I())
  }, {
    context: "Select",
    isActive: hasFocus && !U && count_2 > 0 && onAccept !== void 0
  });
  let ee = Ya() !== null;
  function onKeyDown(i) {
    if (xH(isDisabled) || count_2 === 0) return;
    let y = I();
    if (i.key === "return" && onAccept && !ee) {
      onAccept(y), i.preventDefault(), i.stopImmediatePropagation();
      return;
    }
    onRowKeyDown?.(i, y);
  }
  let ne = bn({
    lineCount: lineCount,
    visibleCount: visibleCount_2,
    cursorLine: j[cursor] ?? 0,
    getCursorLine: () => j[I()] ?? 0,
    headings: headings_2,
    boundaries: boundaries_2,
    markerLines: markerLines_2,
    onScroll: (i, y) => {
      let x = I(),
        ae = _[i] ?? 0,
        fo = (_[y] ?? count_2) - 1;
      oe(ae > fo ? x : Ma(x, ae, fo));
    }
  });
  function me(i) {
    if (i.deltaY === 0 || xH(isDisabled)) return;
    ne.scrollBy(i.deltaY > 0 ? 1 : -1), i.stopImmediatePropagation();
  }
  function setCursor(i) {
    ne.pin(), oe(Ma(i, 0, H));
  }
  return {
    cursor: cursor,
    windowStart: ne.windowStart,
    windowEnd: ne.windowEnd,
    spareLines: ne.spareLines,
    moreAbove: _[ne.windowStart] ?? 0,
    moreBelow: count_2 - (_[ne.windowEnd] ?? count_2),
    isCursor: i => i === cursor && count_2 > 0,
    hasFocus: hasFocus,
    scrollBar: {
      ...ne.bar,
      onScrollTo: U ? void 0 : ne.bar.onScrollTo
    },
    setCursor: setCursor,
    containerRef: A,
    bind: {
      ref: A,
      tabIndex: 0,
      onKeyDown: onKeyDown,
      onWheel: !U && !ne.fits ? me : void 0
    }
  };
}
function xH(o) {
  return typeof o === "function" ? o() : o === !0;
}
function mr(label, value_2) {
  return {
    label: label,
    value: value_2
  };
}
var Qe = 3,
  hn = 7,
  co = Vt(!1);
function aO() {
  return Pe(co);
}
function nt(props) {
  let m = w(27),
    c = _t(),
    {
      onFocus: onFocus,
      onSelect: onSelect
    } = props;
  if (c && onSelect !== void 0) {
    let headings_3, l;
    if (m[0] !== props.children) {
      l = [];
      headings_3 = new Map();
      for (const v of Qg.toArray(props.children)) {
        if (!Le(v)) {
          l.push(v);
          continue;
        }
        headings_3.set(l.length, [...(headings_3.get(l.length) ?? []), v]);
      }
      m[0] = props.children, m[1] = headings_3, m[2] = l;
    } else headings_3 = m[1], l = m[2];
    if (l.length === 0) {
      let b;
      if (m[3] !== props.emptyMessage) b = props.emptyMessage ? e(n, {
        children: props.emptyMessage
      }) : null, m[3] = props.emptyMessage, m[4] = b;else b = m[4];
      return b;
    }
    let onKeyDown_2;
    if (m[5] !== props.isDisabled) onKeyDown_2 = D => {
      if (xH(props.isDisabled) || D.ctrl || D.meta) {
        return;
      }
      if (D.key === "return" || D.key === " ") D.stopPropagation();
    }, m[5] = props.isDisabled, m[6] = onKeyDown_2;else onKeyDown_2 = m[6];
    let options;
    if (m[7] !== l) options = l.map(mr), m[7] = l, m[8] = options;else options = m[8];
    let isDisabled_2;
    if (m[9] !== props.isDisabled) isDisabled_2 = xH(props.isDisabled), m[9] = props.isDisabled, m[10] = isDisabled_2;else isDisabled_2 = m[10];
    let onChange;
    if (m[11] !== onFocus || m[12] !== onSelect) onChange = W => {
      onFocus?.(W), onSelect(W);
    }, m[11] = onFocus, m[12] = onSelect, m[13] = onChange;else onChange = m[13];
    let children_5;
    if (m[14] !== headings_3 || m[15] !== onFocus || m[16] !== options || m[17] !== isDisabled_2 || m[18] !== onChange) children_5 = e(zK, {
      options: options,
      headings: headings_3,
      drawLabels: !0,
      isDisabled: isDisabled_2,
      onFocus: onFocus,
      onChange: onChange
    }), m[14] = headings_3, m[15] = onFocus, m[16] = options, m[17] = isDisabled_2, m[18] = onChange, m[19] = children_5;else children_5 = m[19];
    let C;
    if (m[20] !== onKeyDown_2 || m[21] !== children_5) C = e(s, {
      flexDirection: "column",
      onKeyDown: onKeyDown_2,
      children: children_5
    }), m[20] = onKeyDown_2, m[21] = children_5, m[22] = C;else C = m[22];
    return C;
  }
  if (props.visibleCount === void 0) {
    let b;
    if (m[23] !== props) b = e(zo, {
      ...props
    }), m[23] = props, m[24] = b;else b = m[24];
    return b;
  }
  let b;
  if (m[25] !== props) b = e(ze, {
    props: props,
    visibleCount: props.visibleCount
  }), m[25] = props, m[26] = b;else b = m[26];
  return b;
}
function zo(o) {
  let b = w(13),
    c = jJe(),
    t = Pe(jK),
    d = ve(),
    {
      rows: rows_2
    } = As(d),
    u = ol(),
    l = t !== null && !u,
    ref = T(null),
    D;
  if (b[0] !== l || b[1] !== c) D = () => {
    let current_2 = ref.current;
    if (current_2 === null) {
      return null;
    }
    let k = c?.box.current ?? current_2;
    while (c === null && !l && k.parentNode !== void 0) k = k.parentNode;
    return Xi(k).height - Xi(current_2).height;
  }, b[0] = l, b[1] = c, b[2] = D;else D = b[2];
  let chrome = od(D),
    W;
  if (b[3] !== t || b[4] !== c?.box.current) W = () => {
    let M = c?.box.current ?? ref.current;
    let C = t === null ? null : t();
    return M === null || C === null ? null : C + Xi(M).height;
  }, b[3] = t, b[4] = c?.box.current, b[5] = W;else W = b[5];
  let A = od(W),
    H;
  if (b[6] === S) H = () => ref.current === null ? 0 : Xi(ref.current).width, b[6] = H;else H = b[6];
  let width = od(H),
    [X, Y] = g(null),
    rows_3 = u ? c?.rows ?? rows_2 : d.rows,
    q = X?.rows === rows_3 && X.width === width;
  if (chrome !== null && (X === null || !q || chrome > X.chrome)) Y({
    rows: rows_3,
    width: width,
    chrome: chrome
  });
  let U = q ? Math.max(X.chrome, chrome ?? X.chrome) : chrome,
    re = u ? rows_3 : l ? A : d.rows - (c?.reserve ?? zGt),
    visibleCount_3 = U === null || re === null ? Qe : Math.max(1, u || l ? re - U : Math.min(Math.max(hn, Math.floor(d.rows / 2)), re - U)),
    overflowHint = visibleCount_3 === 1 ? "none" : visibleCount_3 < Qe && o.overflowHint !== "none" ? "glyph" : o.overflowHint === "count" ? void 0 : o.overflowHint,
    props_2;
  if (b[7] !== overflowHint || b[8] !== o) props_2 = {
    ...o,
    overflowHint: overflowHint
  }, b[7] = overflowHint, b[8] = o, b[9] = props_2;else props_2 = b[9];
  let B;
  if (b[10] !== visibleCount_3 || b[11] !== props_2) B = e(s, {
    ref: ref,
    flexDirection: "column",
    children: e(ze, {
      props: props_2,
      visibleCount: visibleCount_3
    })
  }), b[10] = visibleCount_3, b[11] = props_2, b[12] = B;else B = b[12];
  return B;
}
function ze(o) {
  let G = w(36),
    {
      props: props_3,
      visibleCount: visibleCount_4
    } = o,
    {
      children: children_6,
      defaultFocusIndex: m,
      resetKey: resetKey_2,
      onSelect: l,
      onFocus: onFocus_2,
      onRowKeyDown: onRowKeyDown_2,
      isDisabled: isDisabled_3,
      onDisabledRowClick: onDisabledRowClick,
      wrap: wrap,
      onUpFromFirstItem: onUpFromFirstItem_2,
      onDownFromLastItem: onDownFromLastItem_2,
      declineHomeEnd: declineHomeEnd_2,
      overflowHint: overflowHint_2,
      scrollBar: scrollBar,
      emptyMessage: H,
      hoverStyle: hoverStyle,
      rowClick: rowClick,
      styled: styled
    } = props_3,
    L = wrap === void 0 ? !1 : wrap,
    declineHomeEnd_3 = declineHomeEnd_2 === void 0 ? !1 : declineHomeEnd_2,
    U = scrollBar === void 0 ? !0 : scrollBar,
    re = rowClick === void 0 ? "select" : rowClick,
    styled_2 = styled === void 0 ? !1 : styled,
    I = Qg.toArray(children_6),
    O = [],
    B = 0;
  for (const J of I) {
    let j = lo(J)?.lines ?? 1;
    O.push(Number.isFinite(j) ? Math.max(1, Math.trunc(j)) : 1), B = B + (O.at(-1) ?? 1);
  }
  let _ = overflowHint_2 === void 0 && B > visibleCount_4,
    visibleCount_5 = _ ? Math.max(1, visibleCount_4 - 2) : visibleCount_4,
    headingLines_2 = [],
    rowHeights_2 = [],
    rowKeys_2 = [],
    se = [],
    Z = [],
    z = 0;
  for (const [F, oe] of I.entries()) {
    if (se.push(rowHeights_2.length), Z.push(z), Le(oe)) {
      headingLines_2.push(z++);
      continue;
    }
    rowHeights_2.push(Math.min(O[F] ?? 1, visibleCount_5)), rowKeys_2.push(Du(oe) ? oe.key ?? void 0 : void 0), z = z + (rowHeights_2.at(-1) ?? 1);
  }
  let count_3 = rowHeights_2.length,
    ne;
  if (G[0] !== isDisabled_3) ne = xH(isDisabled_3), G[0] = isDisabled_3, G[1] = ne;else ne = G[1];
  let idle = ne,
    Ve = T(null),
    {
      containerRef: y,
      ...x
    } = ko({
      count: count_3,
      visibleCount: visibleCount_5,
      moreRowLines: _ && visibleCount_5 === visibleCount_4 - 2,
      headingLines: headingLines_2,
      rowHeights: rowHeights_2,
      rowKeys: rowKeys_2,
      resetKey: resetKey_2,
      initialCursor: m,
      isDisabled: isDisabled_3,
      edge: L ? "wrap" : "clamp",
      onUpFromFirstItem: onUpFromFirstItem_2,
      onDownFromLastItem: onDownFromLastItem_2,
      declineHomeEnd: declineHomeEnd_3,
      onAccept: l,
      onRowKeyDown: onRowKeyDown_2,
      onCursorChange: cursor_2 => {
        Ve.current = {
          cursor: cursor_2,
          count: count_3
        }, onFocus_2?.(cursor_2);
      }
    }),
    ae;
  if (G[2] !== onFocus_2) ae = fo => onFocus_2?.(fo), G[2] = onFocus_2, G[3] = ae;else ae = G[3];
  let kr = Gr(ae);
  R(() => {
    let current_3 = Ve.current;
    if (count_3 === 0 || current_3?.cursor === x.cursor && current_3.count === count_3) {
      return;
    }
    Ve.current = {
      cursor: x.cursor,
      count: count_3
    }, kr(x.cursor);
  }, [x.cursor, count_3]), Mf(y, !idle);
  let Qo = Yg();
  if (count_3 === 0) {
    let children_7;
    if (G[4] !== H) children_7 = H && e(n, {
      dimColor: !0,
      children: H
    }), G[4] = H, G[5] = children_7;else children_7 = G[5];
    let $e;
    if (G[6] !== y || G[7] !== children_7) $e = e(s, {
      ref: y,
      flexDirection: "column",
      tabIndex: 0,
      children: children_7
    }), G[6] = y, G[7] = children_7, G[8] = $e;else $e = G[8];
    return $e;
  }
  let de = overflowHint_2 === void 0 || overflowHint_2 === "glyph" && visibleCount_4 === 1 ? "count" : overflowHint_2,
    {
      windowStart: windowStart_2,
      windowEnd: windowEnd_3,
      moreAbove: po,
      moreBelow: bo
    } = x,
    pt = I.flatMap((Dr, index_3) => {
      let line = Z[index_3] ?? 0;
      return line >= windowStart_2 && line < windowEnd_3 ? [{
        child: Dr,
        index: index_3,
        line: line
      }] : [];
    }),
    we;
  if (G[9] !== de || G[10] !== po) we = de === "count" && e(BK, {
    direction: "above",
    count: po
  }), G[9] = de, G[10] = po, G[11] = we;else we = G[11];
  let Ee = we,
    $e;
  if (G[12] !== de || G[13] !== bo) $e = de === "count" && e(BK, {
    direction: "below",
    count: bo
  }), G[12] = de, G[13] = bo, G[14] = $e;else $e = G[14];
  let Ie = $e,
    He = pt.map((item, bt) => {
      let {
        child: Fe,
        index: index_4,
        line: line_2
      } = item;
      let wt = Du(Fe) ? Fe.key ?? line_2 : line_2;
      let vt = bt === 0 && po > 0;
      let Rt = bt === pt.length - 1 && bo > 0;
      if (Le(Fe)) {
        return e(tw, {
          isFocused: !1,
          showScrollUp: de === "glyph" && vt,
          showScrollDown: de === "glyph" && Rt,
          styled: !1,
          children: Fe
        }, wt);
      }
      let ge = se[index_4] ?? 0;
      let isFocused = x.isCursor(ge);
      return e(co.Provider, {
        value: isFocused && !idle,
        children: e(s, {
          flexDirection: "column",
          height: rowHeights_2[ge],
          overflow: "hidden",
          onClick: idle && onDisabledRowClick !== void 0 ? yt => {
            if (yt.droppedAsStray || Qo(yt)) {
              return;
            }
            x.setCursor(ge), onDisabledRowClick(ge);
          } : re === "move" && !idle && l !== void 0 ? xt => {
            if (xt.droppedAsStray || Qo(xt) || xH(isDisabled_3)) {
              return;
            }
            x.setCursor(ge);
          } : void 0,
          children: e(tw, {
            isFocused: isFocused,
            idle: idle,
            showScrollUp: de === "glyph" && vt,
            showScrollDown: de === "glyph" && Rt,
            styled: styled_2,
            hoverStyle: hoverStyle,
            declareCursor: !idle && lo(Fe)?.declareCursor !== !1,
            onClick: idle || l === void 0 || re === "move" ? void 0 : Or => {
              if (Qo(Or) || xH(isDisabled_3)) {
                return;
              }
              x.setCursor(ge), l(ge);
            },
            children: Fe
          })
        })
      }, wt);
    }),
    St;
  if (G[15] !== x.spareLines) St = x.spareLines > 0 && e(s, {
    flexShrink: 0,
    height: x.spareLines
  }), G[15] = x.spareLines, G[16] = St;else St = G[16];
  let Be = St;
  if (!U) {
    let ye;
    if (G[17] !== Ee || G[18] !== Ie || G[19] !== x.bind || G[20] !== He || G[21] !== Be || G[22] !== windowStart_2) ye = r(DQ, {
      windowStart: windowStart_2,
      ...x.bind,
      children: [Ee, He, Be, Ie]
    }), G[17] = Ee, G[18] = Ie, G[19] = x.bind, G[20] = He, G[21] = Be, G[22] = windowStart_2, G[23] = ye;else ye = G[23];
    return ye;
  }
  let children_8;
  if (G[24] !== He || G[25] !== Be || G[26] !== windowStart_2) children_8 = r(DQ, {
    windowStart: windowStart_2,
    children: [He, Be]
  }), G[24] = He, G[25] = Be, G[26] = windowStart_2, G[27] = children_8;else children_8 = G[27];
  let ho;
  if (G[28] !== x.scrollBar || G[29] !== children_8) ho = e(Yyt, {
    bar: x.scrollBar,
    children: children_8
  }), G[28] = x.scrollBar, G[29] = children_8, G[30] = ho;else ho = G[30];
  let kt;
  if (G[31] !== Ee || G[32] !== Ie || G[33] !== x.bind || G[34] !== ho) kt = r(s, {
    flexDirection: "column",
    ...x.bind,
    children: [Ee, ho, Ie]
  }), G[31] = Ee, G[32] = Ie, G[33] = x.bind, G[34] = ho, G[35] = kt;else kt = G[35];
  return kt;
}
function Item(o) {
  let t = w(2),
    {
      children: children_9
    } = o,
    d;
  if (t[0] !== children_9) d = e(V, {
    children: children_9
  }), t[0] = children_9, t[1] = d;else d = t[1];
  return d;
}
function Heading(o) {
  let t = w(2),
    {
      children: children_10
    } = o,
    d;
  if (t[0] !== children_10) d = e(V, {
    children: children_10
  }), t[0] = children_10, t[1] = d;else d = t[1];
  return d;
}
function Le(o) {
  return Du(o) && o.type === Heading;
}
function lo(o) {
  return Du(o) && o.type === Item ? o.props : void 0;
}
var Kc = Object.assign(nt, {
  Item: Item,
  Heading: Heading
});
function yr(k) {
  if (!mo(k)) {
    return 0;
  }
  let {
    icon: icon
  } = k.props;
  return Du(icon) && icon.type === et ? Mer() : ie(Jv(icon));
}
function xr(Z) {
  return Z !== "";
}
function Sr(z, F) {
  return e(s, {
    flexShrink: 0,
    width: (F > 0 ? 1 : 0) + ie(`\xB7 ${z}`),
    paddingLeft: F > 0 ? 1 : 0,
    children: r(n, {
      dimColor: !0,
      children: ["\xB7 ", z]
    })
  }, F);
}
var paddingLeft = 3,
  tt = 20,
  flexShrink_2 = 1e4;
function dt(o) {
  let c = w(14),
    children_11,
    d;
  if (c[0] !== o) ({
    children: children_11,
    ...d
  } = o), c[0] = o, c[1] = children_11, c[2] = d;else children_11 = c[1], d = c[2];
  let m, u, children_12;
  if (c[3] !== children_11 || c[4] !== d) {
    let v = Qg.toArray(children_11);
    let iconWidth = Math.max(0, ...v.map(yr));
    m = Kc;
    u = d;
    let D;
    if (c[8] !== iconWidth) D = E => mo(E) ? e(Kc.Item, {
      lines: Qre(E.props.description) ? 2 : 1,
      children: e(Jo, {
        item: E.props,
        iconWidth: iconWidth
      })
    }, E.key) : E, c[8] = iconWidth, c[9] = D;else D = c[9];
    children_12 = v.map(D);
    c[3] = children_11, c[4] = d, c[5] = m, c[6] = u, c[7] = children_12;
  } else m = c[5], u = c[6], children_12 = c[7];
  let D;
  if (c[10] !== m || c[11] !== u || c[12] !== children_12) D = e(m, {
    ...u,
    children: children_12
  }), c[10] = m, c[11] = u, c[12] = children_12, c[13] = D;else D = c[13];
  return D;
}
function Jo(o) {
  let l = w(31),
    {
      item: item_2,
      iconWidth: t
    } = o,
    {
      icon: d,
      meta: meta,
      ...u
    } = item_2,
    v;
  if (l[0] !== meta) v = meta === void 0 ? [] : meta, l[0] = meta, l[1] = v;else v = l[1];
  let b = v,
    D = aO(),
    E = _t(),
    children_13 = Qre(u.label),
    children_16 = Qre(u.description),
    [children_15, ...M] = b.map(Qre).filter(xr);
  if (E) {
    return r(s, {
      children: [d, r(n, {
        children: [children_13, children_15 !== void 0 && `, ${[children_15, ...M].join(" \xB7 ")}`, children_16 && `. ${children_16}`]
      })]
    });
  }
  let maxWidth = ie(children_13);
  const A = s,
    flexDirection = "column",
    flexShrink_3 = 1,
    X = s;
  let Y;
  if (l[2] !== d || l[3] !== t) Y = t > 0 && e(s, {
    flexShrink: 0,
    width: t,
    marginRight: 1,
    children: d
  }), l[2] = d, l[3] = t, l[4] = Y;else Y = l[4];
  const L = s,
    flexShrink = 1,
    flexBasis_2 = maxWidth + (children_15 === void 0 ? 0 : paddingLeft + ie(children_15)),
    flexWrap = "wrap",
    height_5 = 1,
    overflow = "hidden",
    flexBasis = Math.min(tt, maxWidth),
    color_2 = D ? "suggestion" : void 0;
  let children_14;
  if (l[5] !== children_13 || l[6] !== color_2) children_14 = e(n, {
    color: color_2,
    wrap: "truncate-end",
    children: children_13
  }), l[5] = children_13, l[6] = color_2, l[7] = children_14;else children_14 = l[7];
  let j;
  if (l[8] !== maxWidth || l[9] !== flexBasis || l[10] !== children_14) j = e(s, {
    flexBasis: flexBasis,
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: maxWidth,
    children: children_14
  }), l[8] = maxWidth, l[9] = flexBasis, l[10] = children_14, l[11] = j;else j = l[11];
  const _ = children_15 !== void 0 && e(s, {
    flexShrink: 0,
    width: paddingLeft + ie(children_15),
    paddingLeft: paddingLeft,
    children: e(n, {
      dimColor: !0,
      children: children_15
    })
  });
  let Q;
  if (l[12] !== L || l[13] !== j || l[14] !== _ || l[15] !== flexBasis_2) Q = r(L, {
    flexShrink: flexShrink,
    flexBasis: flexBasis_2,
    flexWrap: flexWrap,
    height: height_5,
    overflow: overflow,
    children: [j, _]
  }), l[12] = L, l[13] = j, l[14] = _, l[15] = flexBasis_2, l[16] = Q;else Q = l[16];
  let a;
  if (l[17] !== M) a = M.length > 0 && r(s, {
    flexShrink: flexShrink_2,
    flexWrap: "wrap",
    height: 1,
    overflow: "hidden",
    children: [e(s, {
      flexShrink: 0,
      width: 1,
      height: 1
    }), M.map(Sr)]
  }), l[17] = M, l[18] = a;else a = l[18];
  let f;
  if (l[19] !== X || l[20] !== Q || l[21] !== a || l[22] !== Y) f = r(X, {
    children: [Y, Q, a]
  }), l[19] = X, l[20] = Q, l[21] = a, l[22] = Y, l[23] = f;else f = l[23];
  let p;
  if (l[24] !== children_16 || l[25] !== t) p = children_16 && e(s, {
    paddingLeft: t > 0 ? t + 1 : 0,
    children: e(n, {
      color: "inactive",
      wrap: "truncate-end",
      children: children_16
    })
  }), l[24] = children_16, l[25] = t, l[26] = p;else p = l[26];
  let se;
  if (l[27] !== A || l[28] !== f || l[29] !== p) se = r(A, {
    flexDirection: flexDirection,
    flexShrink: flexShrink_3,
    children: [f, p]
  }), l[27] = A, l[28] = f, l[29] = p, l[30] = se;else se = l[30];
  return se;
}
function Item_2(o) {
  return null;
}
function mo(o) {
  return Du(o) && o.type === Item_2;
}
function Qre(o) {
  if (typeof o === "string") return fr(o);
  return typeof o === "number" || typeof o === "boolean" ? String(o) : "";
}
var kn = Object.assign(dt, {
  Item: Item_2
});
export { BK, zGt, uvn, jJe, Yyt, Xyt, xH, aO, Kc, Qre, kn };