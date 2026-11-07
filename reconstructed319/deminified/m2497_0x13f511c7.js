// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { As } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Jfe } from "B:/~BUN/root/chunk-x24hm796.js";
import { ot, s, n, qs, che, Ia, Ss } from "B:/~BUN/root/chunk-qey16aan.js";
import { Zc, Dm, Kj } from "B:/~BUN/root/chunk-31b4g6te.js";
import { Wu } from "B:/~BUN/root/chunk-emd6eb45.js";
import { va } from "B:/~BUN/root/chunk-crjx6seq.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { rw } from "B:/~BUN/root/chunk-s3r3s87f.js";
import { mv } from "B:/~BUN/root/chunk-h37egt7q.js";
import { JR, est, nI, Zf } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { n_ } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { Dmn, $7, M0, hc, U7 } from "B:/~BUN/root/chunk-md70d2gd.js";
import { _Gt } from "B:/~BUN/root/chunk-merv3av7.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { z_, Jt, hy, ve, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
j();
var Ze = 32,
  oe = 2,
  Z = 2,
  Pe = 2,
  we = "wrap-trim",
  De = !0,
  xe = Jt(void 0),
  Ee = Jt(!1),
  pe = Jt(!1);
function en({
  children: children,
  ...t
}) {
  let d = As(Re()),
    ref = A(null),
    [u] = y(() => new Set()),
    l = Ia(() => {
      let [i] = u;
      return i && Ss(i).width || ref.current && Ss(ref.current).width || d.columns;
    }),
    P = mv(),
    [k] = y(() => new WeakMap()),
    p = z_.toArray(children),
    f = p.filter(Ge),
    labelColumn = Math.min(Math.max(0, ...f.map(item => ce(U7(item.props.label)))), Math.max(Ze, l - Z - oe - Math.max(_Gt, ...f.map(item => ze(item.props.children))))),
    stacked = l - Z - labelColumn - oe < _Gt,
    w = f.filter(item => !C(item.props.children, Value)),
    value = $7(t.isDisabled),
    x = stacked ? l - Z - Pe : l - Z - labelColumn - oe,
    [M, h, E] = Zf(void 0),
    [O, F] = y(void 0),
    input = A(null),
    {
      focusManager: focusManager
    } = ve(Dm),
    editor = rw({
      isActive: !0,
      columns: x,
      backspaceExitsOnEmpty: !1,
      onExit: () => end(!0, !0),
      onCancel: () => end(!1),
      onExitUp: () => end(!0, !0),
      onExitDown: () => end(!0, !0)
    });
  function end(i, D = !1) {
    let c = E();
    if (c === void 0) return !0;
    let T = f.find(item => item.key === c.key)?.props.children,
      g = editor.queryRef.current,
      reason = i && g !== c.from && C(T, Text) ? T.props.validate?.(g) ?? null : null;
    if (reason !== null && D) return F({
      draft: g,
      reason: reason
    }), !1;
    if (h(void 0), F(void 0), input.current && focusManager?.activeElement === input.current) focusManager.blur();
    if (!i || reason !== null || !C(T, Text) || T.props.disabled) return !0;
    if (g !== c.from) Te(k, T.props, g), T.props.onChange(g);
    return !0;
  }
  function q(i) {
    let D = i?.props.children;
    if (!C(D, Text) || D.props.disabled || typeof i?.key !== "string") return Tn(D, k);
    let c = {
      key: i.key,
      from: Mn(D.props, k)
    };
    return {
      accept: () => {
        end(!0), editor.setQuery(c.from), h(c);
      }
    };
  }
  let children_4 = p.map((i, index) => {
    if (!Ge(i)) return hy(i) && i.type === hc.Heading ? i : e(hc.Heading, {
      children: i
    }, hy(i) ? i.key : index);
    let {
        children: children_2
      } = i.props,
      label = U7(i.props.label),
      g = M?.key === i.key && O?.draft === editor.query ? O.reason : void 0,
      description = g ?? U7(i.props.description),
      N = description ? Dt(Zc(description, Math.max(1, l - Z), we), `
`) + 1 : 0,
      V = !(!value || t.onDisabledRowClick !== void 0) || M?.key === i.key ? void 0 : q(i).accept,
      Q = C(children_2, Toggle) || C(children_2, Select) || C(children_2, Button) ? ze(children_2) : 0,
      children_3 = e(Qe, {
        label: label,
        description: description,
        ink: i.props.ink,
        refused: g !== void 0,
        onClick: V && (Y => {
          if (P(Y) || $7(t.isDisabled) && t.onDisabledRowClick === void 0) return;
          V();
        }),
        labelColumn: labelColumn,
        stacked: stacked,
        targetWidth: Math.max(0, Math.min(Q, x)),
        rowLines: C(children_2, Value) ? void 0 : u,
        children: e(xe, {
          value: M?.key === i.key && !value && C(children_2, Text) && !children_2.props.disabled ? {
            editor: editor,
            room: x,
            input: input,
            end: end
          } : void 0,
          children: children_2
        })
      });
    return C(children_2, Value) ? e(hc.Heading, {
      children: children_3
    }, i.key) : e(hc.Item, {
      declareCursor: M?.key !== i.key,
      lines: (stacked ? 2 : 1) + N,
      children: children_3
    }, i.key);
  });
  if (w.length === 0) return r(s, {
    ref: ref,
    flexDirection: "column",
    children: [children_4.length === 0 && t.emptyMessage && e(n, {
      dimColor: !0,
      children: t.emptyMessage
    }), children_4.map((i, index) => e(nI, {
      isFocused: !1,
      styled: !1,
      children: i
    }, hy(i) ? i.key : index))]
  });
  let children_5 = e(hc, {
    ...t,
    rowClick: "move",
    onFocus: i => {
      if (w[i]?.key !== E()?.key) end(!0);
      t.onFocus?.(i);
    },
    onSelect: i => {
      if (E() !== void 0) {
        end(!0, !0);
        return;
      }
      q(w[i]).accept?.();
    },
    onRowKeyDown: (i, D) => {
      if (E() !== void 0) {
        editor.handleKeyDown(i);
        return;
      }
      if (i.ctrl || i.meta) return;
      let c = q(w[D]),
        T = i.key === " " ? c.accept : i.key === "left" ? c.previous : i.key === "right" ? c.next : void 0;
      if (T === void 0) return;
      i.preventDefault(), T();
    },
    children: children_4
  });
  return e(s, {
    ref: ref,
    flexDirection: "column",
    children: e(Ee, {
      value: value,
      children: children_5
    })
  });
}
function Qe(o) {
  let h = S(54),
    {
      label: t,
      description: d,
      ink: ink,
      refused: refused,
      onClick: onClick,
      labelColumn: labelColumn_2,
      stacked: stacked_2,
      targetWidth: p,
      rowLines: rowLines,
      children: children_6
    } = o,
    m = M0(),
    w = ot(),
    [v, x] = est(onClick !== void 0),
    M = ve(Dmn);
  if (w) {
    let E;
    if (h[0] !== t) E = r(n, {
      children: [t, ","]
    }), h[0] = t, h[1] = E;else E = h[1];
    let O;
    if (h[2] !== children_6 || h[3] !== E) O = r(s, {
      children: [E, children_6]
    }), h[2] = children_6, h[3] = E, h[4] = O;else O = h[4];
    let F;
    if (h[5] !== d) F = d && e(n, {
      children: d
    }), h[5] = d, h[6] = F;else F = h[6];
    let I;
    if (h[7] !== O || h[8] !== F) I = r(s, {
      flexDirection: "column",
      children: [O, F]
    }), h[7] = O, h[8] = F, h[9] = I;else I = h[9];
    return I;
  }
  let ref_2;
  if (h[10] !== rowLines) ref_2 = X => {
    let W = X?.parentNode;
    if (!rowLines || !W) {
      return;
    }
    return rowLines.add(W), () => {
      rowLines.delete(W);
    };
  }, h[10] = rowLines, h[11] = ref_2;else ref_2 = h[11];
  const flexDirection = stacked_2 ? "column" : "row",
    width = stacked_2 ? void 0 : labelColumn_2,
    marginRight = stacked_2 ? 0 : oe,
    dimColor = ink === "locked",
    color = m && ink !== "locked" ? "suggestion" : void 0;
  let children_7;
  if (h[12] !== t || h[13] !== dimColor || h[14] !== color) children_7 = e(n, {
    dimColor: dimColor,
    color: color,
    wrap: "truncate-end",
    children: t
  }), h[12] = t, h[13] = dimColor, h[14] = color, h[15] = children_7;else children_7 = h[15];
  let _;
  if (h[16] !== width || h[17] !== marginRight || h[18] !== children_7) _ = e(s, {
    width: width,
    marginRight: marginRight,
    flexShrink: 0,
    children: children_7
  }), h[16] = width, h[17] = marginRight, h[18] = children_7, h[19] = _;else _ = h[19];
  const paddingLeft = stacked_2 ? Pe : 0,
    backgroundColor = v ? JR : void 0;
  let onClick_2;
  if (h[20] !== M || h[21] !== onClick) onClick_2 = onClick && (T => {
    if (!M(T)) onClick(T);
  }), h[20] = M, h[21] = onClick, h[22] = onClick_2;else onClick_2 = h[22];
  let onMouseEnter;
  if (h[23] !== onClick || h[24] !== x) onMouseEnter = onClick && (() => x(!0)), h[23] = onClick, h[24] = x, h[25] = onMouseEnter;else onMouseEnter = h[25];
  let onMouseLeave;
  if (h[26] !== onClick || h[27] !== x) onMouseLeave = onClick && (() => x(!1)), h[26] = onClick, h[27] = x, h[28] = onMouseLeave;else onMouseLeave = h[28];
  const value_2 = ink !== void 0;
  let children_8;
  if (h[29] !== children_6 || h[30] !== value_2) children_8 = e(pe, {
    value: value_2,
    children: children_6
  }), h[29] = children_6, h[30] = value_2, h[31] = children_8;else children_8 = h[31];
  let children_9;
  if (h[32] !== backgroundColor || h[33] !== onClick_2 || h[34] !== onMouseEnter || h[35] !== onMouseLeave || h[36] !== children_8 || h[37] !== p) children_9 = e(s, {
    minWidth: p,
    backgroundColor: backgroundColor,
    onClick: onClick_2,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: children_8
  }), h[32] = backgroundColor, h[33] = onClick_2, h[34] = onMouseEnter, h[35] = onMouseLeave, h[36] = children_8, h[37] = p, h[38] = children_9;else children_9 = h[38];
  let Q;
  if (h[39] !== children_9 || h[40] !== paddingLeft) Q = e(s, {
    paddingLeft: paddingLeft,
    children: children_9
  }), h[39] = children_9, h[40] = paddingLeft, h[41] = Q;else Q = h[41];
  let U;
  if (h[42] !== Q || h[43] !== flexDirection || h[44] !== _) U = r(s, {
    flexDirection: flexDirection,
    children: [_, Q]
  }), h[42] = Q, h[43] = flexDirection, h[44] = _, h[45] = U;else U = h[45];
  let Y;
  if (h[46] !== d || h[47] !== refused || h[48] !== rowLines) Y = d && e(n, {
    dimColor: !refused,
    color: refused ? "error" : void 0,
    wrap: rowLines === void 0 ? "truncate-end" : we,
    children: d
  }), h[46] = d, h[47] = refused, h[48] = rowLines, h[49] = Y;else Y = h[49];
  let Je;
  if (h[50] !== ref_2 || h[51] !== U || h[52] !== Y) Je = r(s, {
    ref: ref_2,
    flexDirection: "column",
    children: [U, Y]
  }), h[50] = ref_2, h[51] = U, h[52] = Y, h[53] = Je;else Je = h[53];
  return Je;
}
function H(o) {
  let m = S(15),
    {
      spoken: spoken,
      disabled: disabled,
      before: a,
      after: u,
      children: children_10
    } = o,
    P = disabled === void 0 ? !1 : disabled,
    k = M0(),
    p = ve(pe);
  if (ot()) {
    const b = P && ", unavailable";
    let w;
    if (m[0] !== spoken || m[1] !== b) w = r(n, {
      children: [spoken, b]
    }), m[0] = spoken, m[1] = b, m[2] = w;else w = m[2];
    return w;
  }
  const dimColor_2 = P || p;
  let w;
  if (m[3] !== a) w = a && e(n, {
    dimColor: !0,
    children: a
  }), m[3] = a, m[4] = w;else w = m[4];
  const color_2 = k && !P && !p ? "suggestion" : void 0;
  let x;
  if (m[5] !== children_10 || m[6] !== color_2) x = e(n, {
    color: color_2,
    children: children_10
  }), m[5] = children_10, m[6] = color_2, m[7] = x;else x = m[7];
  let M;
  if (m[8] !== u) M = u && e(n, {
    dimColor: !0,
    children: u
  }), m[8] = u, m[9] = M;else M = m[9];
  let h;
  if (m[10] !== dimColor_2 || m[11] !== w || m[12] !== x || m[13] !== M) h = r(n, {
    dimColor: dimColor_2,
    wrap: "truncate-end",
    children: [w, x, M]
  }), m[10] = dimColor_2, m[11] = w, m[12] = x, m[13] = M, m[14] = h;else h = m[14];
  return h;
}
function Field(o) {
  let d = S(2),
    {
      children: children_11
    } = o,
    a;
  if (d[0] !== children_11) a = e(ne, {
    children: children_11
  }), d[0] = children_11, d[1] = a;else a = d[1];
  return a;
}
function Toggle(o) {
  let l = S(4),
    {
      value: value_3,
      disabled: disabled_2
    } = o;
  const spoken_2 = String(value_3),
    children_12 = String(value_3);
  let P;
  if (l[0] !== disabled_2 || l[1] !== spoken_2 || l[2] !== children_12) P = e(H, {
    spoken: spoken_2,
    disabled: disabled_2,
    children: children_12
  }), l[0] = disabled_2, l[1] = spoken_2, l[2] = children_12, l[3] = P;else P = l[3];
  return P;
}
function Select(o) {
  let P = S(8),
    {
      value: value_4,
      options: options,
      disabled: disabled_3
    } = o,
    u = ve(Ee),
    l = M0(),
    k;
  if (P[0] !== options || P[1] !== value_4) k = options.find(item => item.value === value_4)?.label ?? value_4, P[0] = options, P[1] = value_4, P[2] = k;else k = P[2];
  let f = k,
    b = !disabled_3 && !u && (l || !De);
  const before = b ? "\u2039 " : void 0,
    after = b ? " \u203A" : void 0;
  let v;
  if (P[3] !== disabled_3 || P[4] !== f || P[5] !== before || P[6] !== after) v = e(H, {
    spoken: f,
    disabled: disabled_3,
    before: before,
    after: after,
    children: f
  }), P[3] = disabled_3, P[4] = f, P[5] = before, P[6] = after, P[7] = v;else v = P[7];
  return v;
}
function Link(o) {
  let l = S(5),
    {
      children: children_13,
      disabled: disabled_4
    } = o;
  const spoken_3 = children_13 ? `${children_13}, opens` : "opens",
    after_2 = children_13 ? " \u203A" : "\u203A";
  let P;
  if (l[0] !== children_13 || l[1] !== disabled_4 || l[2] !== spoken_3 || l[3] !== after_2) P = e(H, {
    spoken: spoken_3,
    disabled: disabled_4,
    after: after_2,
    children: children_13
  }), l[0] = children_13, l[1] = disabled_4, l[2] = spoken_3, l[3] = after_2, l[4] = P;else P = l[4];
  return P;
}
function Button(o) {
  let u = S(4),
    {
      children: children_14,
      disabled: disabled_5
    } = o;
  const spoken_4 = children_14 ? `${children_14}, button` : "button";
  let l;
  if (u[0] !== children_14 || u[1] !== disabled_5 || u[2] !== spoken_4) l = e(H, {
    spoken: spoken_4,
    disabled: disabled_5,
    children: children_14
  }), u[0] = children_14, u[1] = disabled_5, u[2] = spoken_4, u[3] = l;else l = u[3];
  return l;
}
function Value(o) {
  let u = S(6),
    {
      children: children_15,
      disabled: disabled_6
    } = o;
  const spoken_5 = children_15 || "empty";
  let children_16;
  if (u[0] !== children_15) children_16 = children_15 || e(n, {
    dimColor: !0,
    children: "\u2014"
  }), u[0] = children_15, u[1] = children_16;else children_16 = u[1];
  let P;
  if (u[2] !== disabled_6 || u[3] !== spoken_5 || u[4] !== children_16) P = e(H, {
    spoken: spoken_5,
    disabled: disabled_6,
    children: children_16
  }), u[2] = disabled_6, u[3] = spoken_5, u[4] = children_16, u[5] = P;else P = u[5];
  return P;
}
function Text(o) {
  let p = S(75),
    {
      value: value_5,
      placeholder: d,
      disabled: disabled_7
    } = o,
    u = ve(xe),
    l = ot(),
    P = Wu();
  if (u === void 0) {
    const spoken_6 = `${value_5 || "empty"}, edit text`;
    let children_17;
    if (p[0] !== d || p[1] !== value_5) children_17 = value_5 || e(n, {
      dimColor: !0,
      children: d
    }), p[0] = d, p[1] = value_5, p[2] = children_17;else children_17 = p[2];
    let b;
    if (p[3] !== disabled_7 || p[4] !== spoken_6 || p[5] !== children_17) b = e(H, {
      spoken: spoken_6,
      disabled: disabled_7,
      children: children_17
    }), p[3] = disabled_7, p[4] = spoken_6, p[5] = children_17, p[6] = b;else b = p[6];
    return b;
  }
  let {
      editor: editor_2,
      input: input_2,
      end: end_2
    } = u,
    x,
    M,
    h,
    E,
    O,
    children_18,
    scope,
    bindings,
    wrap,
    b,
    ref_3,
    autoFocus,
    caret,
    onKeyDown,
    onPaste,
    onBlur;
  if (p[7] !== u.room || p[8] !== editor_2 || p[9] !== end_2 || p[10] !== input_2 || p[11] !== l || p[12] !== P) {
    let i = va.fromText(editor_2.query, u.room, editor_2.cursorOffset);
    let D = P && !l && !Kj() ? " " : "";
    let c;
    if (p[29] !== end_2) c = () => end_2(!0, !0) ? !1 : void 0, p[29] = end_2, p[30] = c;else c = p[30];
    let run = c;
    O = n_;
    scope = "Select";
    let g;
    if (p[31] !== end_2) g = {
      action: "select:cancel",
      run: () => {
        end_2(!1);
      }
    }, p[31] = end_2, p[32] = g;else g = p[32];
    let R;
    if (p[33] !== editor_2) R = {
      action: "select:first",
      run: () => editor_2.setCursorOffset(0)
    }, p[33] = editor_2, p[34] = R;else R = p[34];
    let N;
    if (p[35] !== editor_2) N = {
      action: "select:last",
      run: () => editor_2.setCursorOffset(editor_2.queryRef.current.length)
    }, p[35] = editor_2, p[36] = N;else N = p[36];
    let K, V;
    if (p[37] !== run) K = {
      action: "select:previous",
      run: run
    }, V = {
      action: "select:next",
      run: run
    }, p[37] = run, p[38] = K, p[39] = V;else K = p[38], V = p[39];
    if (p[40] !== g || p[41] !== R || p[42] !== N || p[43] !== K || p[44] !== V) bindings = [g, R, N, K, V], p[40] = g, p[41] = R, p[42] = N, p[43] = K, p[44] = V, p[45] = bindings;else bindings = p[45];
    E = s;
    if (p[46] !== end_2) onBlur = Q => end_2(Q.relatedTarget !== null), p[46] = end_2, p[47] = onBlur;else onBlur = p[47];
    h = che;
    ref_3 = input_2;
    autoFocus = !0;
    caret = {
      line: 0,
      column: i.getPosition().column,
      visible: !0
    };
    if (p[48] !== editor_2) onKeyDown = U => {
      if (editor_2.handleKeyDown(U), U.defaultPrevented) U.stopImmediatePropagation();
    }, p[48] = editor_2, p[49] = onKeyDown;else onKeyDown = p[49];
    onPaste = editor_2.handlePaste;
    M = n;
    wrap = "truncate-end";
    b = !0;
    x = qs;
    children_18 = i.render(D, "", Jfe, void 0, 1, void 0, void 0, l);
    p[7] = u.room, p[8] = editor_2, p[9] = end_2, p[10] = input_2, p[11] = l, p[12] = P, p[13] = x, p[14] = M, p[15] = h, p[16] = E, p[17] = O, p[18] = children_18, p[19] = scope, p[20] = bindings, p[21] = wrap, p[22] = b, p[23] = ref_3, p[24] = autoFocus, p[25] = caret, p[26] = onKeyDown, p[27] = onPaste, p[28] = onBlur;
  } else x = p[13], M = p[14], h = p[15], E = p[16], O = p[17], children_18 = p[18], scope = p[19], bindings = p[20], wrap = p[21], b = p[22], ref_3 = p[23], autoFocus = p[24], caret = p[25], onKeyDown = p[26], onPaste = p[27], onBlur = p[28];
  let children_19;
  if (p[50] !== x || p[51] !== children_18) children_19 = e(x, {
    children: children_18
  }), p[50] = x, p[51] = children_18, p[52] = children_19;else children_19 = p[52];
  let children_20;
  if (p[53] !== M || p[54] !== children_19 || p[55] !== wrap || p[56] !== b) children_20 = e(M, {
    wrap: wrap,
    "aria-preserve-whitespace": b,
    children: children_19
  }), p[53] = M, p[54] = children_19, p[55] = wrap, p[56] = b, p[57] = children_20;else children_20 = p[57];
  let children_21;
  if (p[58] !== h || p[59] !== children_20 || p[60] !== ref_3 || p[61] !== autoFocus || p[62] !== caret || p[63] !== onKeyDown || p[64] !== onPaste) children_21 = e(h, {
    ref: ref_3,
    autoFocus: autoFocus,
    caret: caret,
    onKeyDown: onKeyDown,
    onPaste: onPaste,
    children: children_20
  }), p[58] = h, p[59] = children_20, p[60] = ref_3, p[61] = autoFocus, p[62] = caret, p[63] = onKeyDown, p[64] = onPaste, p[65] = children_21;else children_21 = p[65];
  let children_22;
  if (p[66] !== E || p[67] !== children_21 || p[68] !== onBlur) children_22 = e(E, {
    onBlur: onBlur,
    children: children_21
  }), p[66] = E, p[67] = children_21, p[68] = onBlur, p[69] = children_22;else children_22 = p[69];
  let K;
  if (p[70] !== O || p[71] !== scope || p[72] !== bindings || p[73] !== children_22) K = e(O, {
    scope: scope,
    bindings: bindings,
    children: children_22
  }), p[70] = O, p[71] = scope, p[72] = bindings, p[73] = children_22, p[74] = K;else K = p[74];
  return K;
}
function ze(o) {
  if (C(o, Toggle)) return ce("false");
  if (C(o, Select)) return Math.max(0, ...o.props.options.map(item => te(item.label))) + (o.props.disabled ? 0 : ce("\u2039  \u203A"));
  if (C(o, Link)) {
    let {
      children: children_23
    } = o.props;
    return children_23 ? te(children_23) + ce(" \u203A") : ce("\u203A");
  }
  if (C(o, Button)) return te(o.props.children ?? "");
  if (C(o, Value)) return te(o.props.children || "\u2014");
  if (C(o, Text)) return te(o.props.value || (o.props.placeholder ?? "")) + 1;
  return 0;
}
function S8s(o) {
  let t = U7(o);
  return 2 + (t ? Dt(t, " ") + 1 : 0);
}
function te(o) {
  return Math.max(0, ...o.split(`
`).map(item => ce(item)));
}
function Tn(o, t) {
  if (C(o, Toggle) && !o.props.disabled) {
    let d = Dn.bind(void 0, o.props, t);
    return {
      accept: d,
      previous: d,
      next: d
    };
  }
  if (C(o, Select) && !o.props.disabled) {
    let {
        props: props
      } = o,
      a = u => () => {
        let l = props.options.length,
          P = props.options.findIndex(item => item.value === (t.get(props) ?? props.value)),
          k = Math.max(P, u === 1 ? -1 : 0),
          p = props.options[(k + u + l) % l];
        if (p === void 0) return;
        Te(t, props, p.value), props.onChange(p.value);
      };
    return {
      accept: a(1),
      next: a(1),
      previous: a(-1)
    };
  }
  if (C(o, Link) && !o.props.disabled) return {
    accept: o.props.onOpen,
    next: o.props.onOpen
  };
  if (C(o, Button) && !o.props.disabled) return {
    accept: o.props.onPress
  };
  return {};
}
function Dn(o, t) {
  let d = !(t.get(o) ?? o.value);
  Te(t, o, d), o.onChange(d);
}
function Te(o, t, d) {
  o.set(t, d), queueMicrotask(() => o.delete(t));
}
function Mn(o, t) {
  let d = t.get(o);
  return typeof d === "string" ? d : o.value;
}
function Ge(o) {
  return hy(o) && o.type === Field;
}
function C(o, t) {
  return hy(o) && o.type === t;
}
var Wb = Object.assign(en, {
  Field: Field,
  Toggle: Toggle,
  Select: Select,
  Text: Text,
  Link: Link,
  Button: Button,
  Value: Value
});
export { S8s, Wb };