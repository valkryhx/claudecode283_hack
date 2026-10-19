// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { us } from "B:/~BUN/root/chunk-b900np4s.js";
import { $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { zte } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { s, n, Go, ot, Kre, Fl, Ws } from "B:/~BUN/root/chunk-damrp3r8.js";
import { qu, Pg, LF } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { oc } from "B:/~BUN/root/chunk-t7y4rt40.js";
import { fi } from "B:/~BUN/root/chunk-vw193yjw.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { s_ } from "B:/~BUN/root/chunk-1kwdjsmp.js";
import { hS } from "B:/~BUN/root/chunk-a8k6kvgb.js";
import { vR, BVe, kR, xc } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { fE } from "B:/~BUN/root/chunk-mhftza1y.js";
import { a2t, cY, kP, ql, Ure } from "B:/~BUN/root/chunk-2fh8t7m0.js";
import { evt } from "B:/~BUN/root/chunk-hc3r626b.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { S_, qt, Mm, Ee, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
B();
var Ge = 32,
  ne = 2,
  Y = 2,
  ge = 2,
  ke = "wrap-trim",
  we = !0,
  ve = qt(void 0),
  ye = qt(!1);
function Qe({
  children: children,
  ...t
}) {
  let d = us(Te()),
    ref = A(null),
    [l] = y(() => new Set()),
    b = Fl(() => {
      let [i] = l;
      return i && Ws(i).width || ref.current && Ws(ref.current).width || d.columns;
    }),
    h = hS(),
    [C] = y(() => new WeakMap()),
    p = S_.toArray(children),
    c = p.filter(Ue),
    labelColumn = Math.min(Math.max(0, ...c.map(item => ie(Ure(item.props.label)))), Math.max(Ge, b - Y - ne - Math.max(evt, ...c.map(item => je(item.props.children))))),
    stacked = b - Y - labelColumn - ne < evt,
    D = c.filter(item => !R(item.props.children, Value)),
    value = cY(t.isDisabled),
    F = stacked ? b - Y - ge : b - Y - labelColumn - ne,
    [g, M, E] = xc(void 0),
    [N, I] = y(void 0),
    input = A(null),
    {
      focusManager: focusManager
    } = Ee(Pg),
    editor = s_({
      isActive: !0,
      columns: F,
      backspaceExitsOnEmpty: !1,
      onExit: () => end(!0, !0),
      onCancel: () => end(!1),
      onExitUp: () => end(!0, !0),
      onExitDown: () => end(!0, !0)
    });
  function end(i, L = !1) {
    let u = E();
    if (u === void 0) return !0;
    let P = c.find(item => item.key === u.key)?.props.children,
      k = editor.queryRef.current,
      reason = i && k !== u.from && R(P, Text) ? P.props.validate?.(k) ?? null : null;
    if (reason !== null && L) return I({
      draft: k,
      reason: reason
    }), !1;
    if (M(void 0), I(void 0), input.current && focusManager?.activeElement === input.current) focusManager.blur();
    if (!i || reason !== null || !R(P, Text) || P.props.disabled) return !0;
    if (k !== u.from) Ce(C, P.props, k), P.props.onChange(k);
    return !0;
  }
  function W(i) {
    let L = i?.props.children;
    if (!R(L, Text) || L.props.disabled || typeof i?.key !== "string") return wn(L, C);
    let u = {
      key: i.key,
      from: En(L.props, C)
    };
    return {
      accept: () => {
        end(!0), editor.setQuery(u.from), M(u);
      }
    };
  }
  let children_4 = p.map((i, index) => {
    if (!Ue(i)) return Mm(i) && i.type === ql.Heading ? i : e(ql.Heading, {
      children: i
    }, Mm(i) ? i.key : index);
    let {
        children: children_2
      } = i.props,
      label = Ure(i.props.label),
      k = g?.key === i.key && N?.draft === editor.query ? N.reason : void 0,
      description = k ?? Ure(i.props.description),
      T = description ? $t(qu(description, Math.max(1, b - Y), ke), `
`) + 1 : 0,
      U = !(!value || t.onDisabledRowClick !== void 0) || g?.key === i.key ? void 0 : W(i).accept,
      Pe = R(children_2, Toggle) || R(children_2, Select) || R(children_2, Button) ? je(children_2) : 0,
      children_3 = e(Xe, {
        label: label,
        description: description,
        refused: k !== void 0,
        onClick: U && ($e => {
          if (h($e) || cY(t.isDisabled) && t.onDisabledRowClick === void 0) return;
          U();
        }),
        labelColumn: labelColumn,
        stacked: stacked,
        targetWidth: Math.max(0, Math.min(Pe, F)),
        rowLines: R(children_2, Value) ? void 0 : l,
        children: e(ve, {
          value: g?.key === i.key && !value && R(children_2, Text) && !children_2.props.disabled ? {
            editor: editor,
            room: F,
            input: input,
            end: end
          } : void 0,
          children: children_2
        })
      });
    return R(children_2, Value) ? e(ql.Heading, {
      children: children_3
    }, i.key) : e(ql.Item, {
      declareCursor: g?.key !== i.key,
      lines: (stacked ? 2 : 1) + T,
      children: children_3
    }, i.key);
  });
  if (D.length === 0) return r(s, {
    ref: ref,
    flexDirection: "column",
    children: [children_4.length === 0 && t.emptyMessage && e(n, {
      dimColor: !0,
      children: t.emptyMessage
    }), children_4.map((i, index) => e(kR, {
      isFocused: !1,
      styled: !1,
      children: i
    }, Mm(i) ? i.key : index))]
  });
  let children_5 = e(ql, {
    ...t,
    rowClick: "move",
    onFocus: i => {
      if (D[i]?.key !== E()?.key) end(!0);
      t.onFocus?.(i);
    },
    onSelect: i => {
      if (E() !== void 0) {
        end(!0, !0);
        return;
      }
      W(D[i]).accept?.();
    },
    onRowKeyDown: (i, L) => {
      if (E() !== void 0) {
        editor.handleKeyDown(i);
        return;
      }
      if (i.ctrl || i.meta) return;
      let u = W(D[L]),
        P = i.key === " " ? u.accept : i.key === "left" ? u.previous : i.key === "right" ? u.next : void 0;
      if (P === void 0) return;
      i.preventDefault(), P();
    },
    children: children_4
  });
  return e(s, {
    ref: ref,
    flexDirection: "column",
    children: e(ye, {
      value: value,
      children: children_5
    })
  });
}
function Xe(o) {
  let g = w(50),
    {
      label: t,
      description: d,
      refused: refused,
      onClick: onClick,
      labelColumn: labelColumn_2,
      stacked: stacked_2,
      targetWidth: C,
      rowLines: rowLines,
      children: children_6
    } = o,
    x = kP(),
    f = ot(),
    [D, m] = BVe(onClick !== void 0),
    F = Ee(a2t);
  if (f) {
    let M;
    if (g[0] !== t) M = r(n, {
      children: [t, ","]
    }), g[0] = t, g[1] = M;else M = g[1];
    let E;
    if (g[2] !== children_6 || g[3] !== M) E = r(s, {
      children: [M, children_6]
    }), g[2] = children_6, g[3] = M, g[4] = E;else E = g[4];
    let N;
    if (g[5] !== d) N = d && e(n, {
      children: d
    }), g[5] = d, g[6] = N;else N = g[6];
    let I;
    if (g[7] !== E || g[8] !== N) I = r(s, {
      flexDirection: "column",
      children: [E, N]
    }), g[7] = E, g[8] = N, g[9] = I;else I = g[9];
    return I;
  }
  let ref_2;
  if (g[10] !== rowLines) ref_2 = V => {
    let q = V?.parentNode;
    if (!rowLines || !q) {
      return;
    }
    return rowLines.add(q), () => {
      rowLines.delete(q);
    };
  }, g[10] = rowLines, g[11] = ref_2;else ref_2 = g[11];
  const flexDirection = stacked_2 ? "column" : "row",
    width = stacked_2 ? void 0 : labelColumn_2,
    marginRight = stacked_2 ? 0 : ne,
    color = x ? "suggestion" : void 0;
  let children_7;
  if (g[12] !== t || g[13] !== color) children_7 = e(n, {
    color: color,
    wrap: "truncate-end",
    children: t
  }), g[12] = t, g[13] = color, g[14] = children_7;else children_7 = g[14];
  let W;
  if (g[15] !== width || g[16] !== marginRight || g[17] !== children_7) W = e(s, {
    width: width,
    marginRight: marginRight,
    flexShrink: 0,
    children: children_7
  }), g[15] = width, g[16] = marginRight, g[17] = children_7, g[18] = W;else W = g[18];
  const paddingLeft = stacked_2 ? ge : 0,
    backgroundColor = D ? vR : void 0;
  let onClick_2;
  if (g[19] !== F || g[20] !== onClick) onClick_2 = onClick && (L => {
    if (!F(L)) onClick(L);
  }), g[19] = F, g[20] = onClick, g[21] = onClick_2;else onClick_2 = g[21];
  let onMouseEnter;
  if (g[22] !== onClick || g[23] !== m) onMouseEnter = onClick && (() => m(!0)), g[22] = onClick, g[23] = m, g[24] = onMouseEnter;else onMouseEnter = g[24];
  let onMouseLeave;
  if (g[25] !== onClick || g[26] !== m) onMouseLeave = onClick && (() => m(!1)), g[25] = onClick, g[26] = m, g[27] = onMouseLeave;else onMouseLeave = g[27];
  let children_8;
  if (g[28] !== children_6 || g[29] !== onClick_2 || g[30] !== onMouseEnter || g[31] !== onMouseLeave || g[32] !== backgroundColor || g[33] !== C) children_8 = e(s, {
    minWidth: C,
    backgroundColor: backgroundColor,
    onClick: onClick_2,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: children_6
  }), g[28] = children_6, g[29] = onClick_2, g[30] = onMouseEnter, g[31] = onMouseLeave, g[32] = backgroundColor, g[33] = C, g[34] = children_8;else children_8 = g[34];
  let v;
  if (g[35] !== children_8 || g[36] !== paddingLeft) v = e(s, {
    paddingLeft: paddingLeft,
    children: children_8
  }), g[35] = children_8, g[36] = paddingLeft, g[37] = v;else v = g[37];
  let T;
  if (g[38] !== v || g[39] !== flexDirection || g[40] !== W) T = r(s, {
    flexDirection: flexDirection,
    children: [W, v]
  }), g[38] = v, g[39] = flexDirection, g[40] = W, g[41] = T;else T = g[41];
  let K;
  if (g[42] !== d || g[43] !== refused || g[44] !== rowLines) K = d && e(n, {
    dimColor: !refused,
    color: refused ? "error" : void 0,
    wrap: rowLines === void 0 ? "truncate-end" : ke,
    children: d
  }), g[42] = d, g[43] = refused, g[44] = rowLines, g[45] = K;else K = g[45];
  let U;
  if (g[46] !== ref_2 || g[47] !== T || g[48] !== K) U = r(s, {
    ref: ref_2,
    flexDirection: "column",
    children: [T, K]
  }), g[46] = ref_2, g[47] = T, g[48] = K, g[49] = U;else U = g[49];
  return U;
}
function O(o) {
  let x = w(15),
    {
      spoken: spoken,
      disabled: disabled,
      before: a,
      after: l,
      children: children_9
    } = o,
    dimColor = disabled === void 0 ? !1 : disabled,
    C = kP();
  if (ot()) {
    const c = dimColor && ", unavailable";
    let f;
    if (x[0] !== spoken || x[1] !== c) f = r(n, {
      children: [spoken, c]
    }), x[0] = spoken, x[1] = c, x[2] = f;else f = x[2];
    return f;
  }
  let c;
  if (x[3] !== a) c = a && e(n, {
    dimColor: !0,
    children: a
  }), x[3] = a, x[4] = c;else c = x[4];
  const color_2 = C && !dimColor ? "suggestion" : void 0;
  let D;
  if (x[5] !== children_9 || x[6] !== color_2) D = e(n, {
    color: color_2,
    children: children_9
  }), x[5] = children_9, x[6] = color_2, x[7] = D;else D = x[7];
  let m;
  if (x[8] !== l) m = l && e(n, {
    dimColor: !0,
    children: l
  }), x[8] = l, x[9] = m;else m = x[9];
  let F;
  if (x[10] !== dimColor || x[11] !== c || x[12] !== D || x[13] !== m) F = r(n, {
    dimColor: dimColor,
    wrap: "truncate-end",
    children: [c, D, m]
  }), x[10] = dimColor, x[11] = c, x[12] = D, x[13] = m, x[14] = F;else F = x[14];
  return F;
}
function Field(o) {
  let d = w(2),
    {
      children: children_10
    } = o,
    a;
  if (d[0] !== children_10) a = e(Q, {
    children: children_10
  }), d[0] = children_10, d[1] = a;else a = d[1];
  return a;
}
function Toggle(o) {
  let b = w(4),
    {
      value: value_2,
      disabled: disabled_2
    } = o;
  const spoken_2 = String(value_2),
    children_11 = String(value_2);
  let h;
  if (b[0] !== disabled_2 || b[1] !== spoken_2 || b[2] !== children_11) h = e(O, {
    spoken: spoken_2,
    disabled: disabled_2,
    children: children_11
  }), b[0] = disabled_2, b[1] = spoken_2, b[2] = children_11, b[3] = h;else h = b[3];
  return h;
}
function Select(o) {
  let h = w(8),
    {
      value: value_3,
      options: options,
      disabled: disabled_3
    } = o,
    l = Ee(ye),
    b = kP(),
    C;
  if (h[0] !== options || h[1] !== value_3) C = options.find(item => item.value === value_3)?.label ?? value_3, h[0] = options, h[1] = value_3, h[2] = C;else C = h[2];
  let c = C,
    x = !disabled_3 && !l && (b || !we);
  const before = x ? "\u2039 " : void 0,
    after = x ? " \u203A" : void 0;
  let m;
  if (h[3] !== disabled_3 || h[4] !== c || h[5] !== before || h[6] !== after) m = e(O, {
    spoken: c,
    disabled: disabled_3,
    before: before,
    after: after,
    children: c
  }), h[3] = disabled_3, h[4] = c, h[5] = before, h[6] = after, h[7] = m;else m = h[7];
  return m;
}
function Link(o) {
  let b = w(5),
    {
      children: children_12,
      disabled: disabled_4
    } = o;
  const spoken_3 = children_12 ? `${children_12}, opens` : "opens",
    after_2 = children_12 ? " \u203A" : "\u203A";
  let h;
  if (b[0] !== children_12 || b[1] !== disabled_4 || b[2] !== spoken_3 || b[3] !== after_2) h = e(O, {
    spoken: spoken_3,
    disabled: disabled_4,
    after: after_2,
    children: children_12
  }), b[0] = children_12, b[1] = disabled_4, b[2] = spoken_3, b[3] = after_2, b[4] = h;else h = b[4];
  return h;
}
function Button(o) {
  let l = w(4),
    {
      children: children_13,
      disabled: disabled_5
    } = o;
  const spoken_4 = children_13 ? `${children_13}, button` : "button";
  let b;
  if (l[0] !== children_13 || l[1] !== disabled_5 || l[2] !== spoken_4) b = e(O, {
    spoken: spoken_4,
    disabled: disabled_5,
    children: children_13
  }), l[0] = children_13, l[1] = disabled_5, l[2] = spoken_4, l[3] = b;else b = l[3];
  return b;
}
function Value(o) {
  let l = w(6),
    {
      children: children_14,
      disabled: disabled_6
    } = o;
  const spoken_5 = children_14 || "empty";
  let children_15;
  if (l[0] !== children_14) children_15 = children_14 || e(n, {
    dimColor: !0,
    children: "\u2014"
  }), l[0] = children_14, l[1] = children_15;else children_15 = l[1];
  let h;
  if (l[2] !== disabled_6 || l[3] !== spoken_5 || l[4] !== children_15) h = e(O, {
    spoken: spoken_5,
    disabled: disabled_6,
    children: children_15
  }), l[2] = disabled_6, l[3] = spoken_5, l[4] = children_15, l[5] = h;else h = l[5];
  return h;
}
function Text(o) {
  let p = w(75),
    {
      value: value_4,
      placeholder: d,
      disabled: disabled_7
    } = o,
    l = Ee(ve),
    b = ot(),
    h = oc();
  if (l === void 0) {
    const spoken_6 = `${value_4 || "empty"}, edit text`;
    let children_16;
    if (p[0] !== d || p[1] !== value_4) children_16 = value_4 || e(n, {
      dimColor: !0,
      children: d
    }), p[0] = d, p[1] = value_4, p[2] = children_16;else children_16 = p[2];
    let x;
    if (p[3] !== disabled_7 || p[4] !== spoken_6 || p[5] !== children_16) x = e(O, {
      spoken: spoken_6,
      disabled: disabled_7,
      children: children_16
    }), p[3] = disabled_7, p[4] = spoken_6, p[5] = children_16, p[6] = x;else x = p[6];
    return x;
  }
  let {
      editor: editor_2,
      input: input_2,
      end: end_2
    } = l,
    F,
    g,
    M,
    E,
    N,
    children_17,
    scope,
    bindings,
    wrap,
    x,
    ref_3,
    autoFocus,
    caret,
    onKeyDown,
    onPaste,
    onBlur;
  if (p[7] !== l.room || p[8] !== editor_2 || p[9] !== end_2 || p[10] !== input_2 || p[11] !== b || p[12] !== h) {
    let i = fi.fromText(editor_2.query, l.room, editor_2.cursorOffset);
    let L = h && !b && !LF() ? " " : "";
    let u;
    if (p[29] !== end_2) u = () => end_2(!0, !0) ? !1 : void 0, p[29] = end_2, p[30] = u;else u = p[30];
    let run = u;
    N = fE;
    scope = "Select";
    let k;
    if (p[31] !== end_2) k = {
      action: "select:cancel",
      run: () => {
        end_2(!1);
      }
    }, p[31] = end_2, p[32] = k;else k = p[32];
    let v;
    if (p[33] !== editor_2) v = {
      action: "select:first",
      run: () => editor_2.setCursorOffset(0)
    }, p[33] = editor_2, p[34] = v;else v = p[34];
    let T;
    if (p[35] !== editor_2) T = {
      action: "select:last",
      run: () => editor_2.setCursorOffset(editor_2.queryRef.current.length)
    }, p[35] = editor_2, p[36] = T;else T = p[36];
    let K, U;
    if (p[37] !== run) K = {
      action: "select:previous",
      run: run
    }, U = {
      action: "select:next",
      run: run
    }, p[37] = run, p[38] = K, p[39] = U;else K = p[38], U = p[39];
    if (p[40] !== k || p[41] !== v || p[42] !== T || p[43] !== K || p[44] !== U) bindings = [k, v, T, K, U], p[40] = k, p[41] = v, p[42] = T, p[43] = K, p[44] = U, p[45] = bindings;else bindings = p[45];
    E = s;
    if (p[46] !== end_2) onBlur = Pe => end_2(Pe.relatedTarget !== null), p[46] = end_2, p[47] = onBlur;else onBlur = p[47];
    M = Kre;
    ref_3 = input_2;
    autoFocus = !0;
    caret = {
      line: 0,
      column: i.getPosition().column,
      visible: !0
    };
    if (p[48] !== editor_2) onKeyDown = J => {
      if (editor_2.handleKeyDown(J), J.defaultPrevented) J.stopImmediatePropagation();
    }, p[48] = editor_2, p[49] = onKeyDown;else onKeyDown = p[49];
    onPaste = editor_2.handlePaste;
    g = n;
    wrap = "truncate-end";
    x = !0;
    F = Go;
    children_17 = i.render(L, "", zte, void 0, 1, void 0, void 0, b);
    p[7] = l.room, p[8] = editor_2, p[9] = end_2, p[10] = input_2, p[11] = b, p[12] = h, p[13] = F, p[14] = g, p[15] = M, p[16] = E, p[17] = N, p[18] = children_17, p[19] = scope, p[20] = bindings, p[21] = wrap, p[22] = x, p[23] = ref_3, p[24] = autoFocus, p[25] = caret, p[26] = onKeyDown, p[27] = onPaste, p[28] = onBlur;
  } else F = p[13], g = p[14], M = p[15], E = p[16], N = p[17], children_17 = p[18], scope = p[19], bindings = p[20], wrap = p[21], x = p[22], ref_3 = p[23], autoFocus = p[24], caret = p[25], onKeyDown = p[26], onPaste = p[27], onBlur = p[28];
  let children_18;
  if (p[50] !== F || p[51] !== children_17) children_18 = e(F, {
    children: children_17
  }), p[50] = F, p[51] = children_17, p[52] = children_18;else children_18 = p[52];
  let children_19;
  if (p[53] !== g || p[54] !== children_18 || p[55] !== wrap || p[56] !== x) children_19 = e(g, {
    wrap: wrap,
    "aria-preserve-whitespace": x,
    children: children_18
  }), p[53] = g, p[54] = children_18, p[55] = wrap, p[56] = x, p[57] = children_19;else children_19 = p[57];
  let children_20;
  if (p[58] !== M || p[59] !== children_19 || p[60] !== ref_3 || p[61] !== autoFocus || p[62] !== caret || p[63] !== onKeyDown || p[64] !== onPaste) children_20 = e(M, {
    ref: ref_3,
    autoFocus: autoFocus,
    caret: caret,
    onKeyDown: onKeyDown,
    onPaste: onPaste,
    children: children_19
  }), p[58] = M, p[59] = children_19, p[60] = ref_3, p[61] = autoFocus, p[62] = caret, p[63] = onKeyDown, p[64] = onPaste, p[65] = children_20;else children_20 = p[65];
  let children_21;
  if (p[66] !== E || p[67] !== children_20 || p[68] !== onBlur) children_21 = e(E, {
    onBlur: onBlur,
    children: children_20
  }), p[66] = E, p[67] = children_20, p[68] = onBlur, p[69] = children_21;else children_21 = p[69];
  let K;
  if (p[70] !== N || p[71] !== scope || p[72] !== bindings || p[73] !== children_21) K = e(N, {
    scope: scope,
    bindings: bindings,
    children: children_21
  }), p[70] = N, p[71] = scope, p[72] = bindings, p[73] = children_21, p[74] = K;else K = p[74];
  return K;
}
function je(o) {
  if (R(o, Toggle)) return ie("false");
  if (R(o, Select)) return Math.max(0, ...o.props.options.map(item => ee(item.label))) + (o.props.disabled ? 0 : ie("\u2039  \u203A"));
  if (R(o, Link)) {
    let {
      children: children_22
    } = o.props;
    return children_22 ? ee(children_22) + ie(" \u203A") : ie("\u203A");
  }
  if (R(o, Button)) return ee(o.props.children ?? "");
  if (R(o, Value)) return ee(o.props.children || "\u2014");
  if (R(o, Text)) return ee(o.props.value || (o.props.placeholder ?? "")) + 1;
  return 0;
}
function n5o(o) {
  let t = Ure(o);
  return 2 + (t ? $t(t, " ") + 1 : 0);
}
function ee(o) {
  return Math.max(0, ...o.split(`
`).map(item => ie(item)));
}
function wn(o, t) {
  if (R(o, Toggle) && !o.props.disabled) {
    let d = xn.bind(void 0, o.props, t);
    return {
      accept: d,
      previous: d,
      next: d
    };
  }
  if (R(o, Select) && !o.props.disabled) {
    let {
        props: props
      } = o,
      a = l => () => {
        let b = props.options.length,
          h = props.options.findIndex(item => item.value === (t.get(props) ?? props.value)),
          C = Math.max(h, l === 1 ? -1 : 0),
          p = props.options[(C + l + b) % b];
        if (p === void 0) return;
        Ce(t, props, p.value), props.onChange(p.value);
      };
    return {
      accept: a(1),
      next: a(1),
      previous: a(-1)
    };
  }
  if (R(o, Link) && !o.props.disabled) return {
    accept: o.props.onOpen,
    next: o.props.onOpen
  };
  if (R(o, Button) && !o.props.disabled) return {
    accept: o.props.onPress
  };
  return {};
}
function xn(o, t) {
  let d = !(t.get(o) ?? o.value);
  Ce(t, o, d), o.onChange(d);
}
function Ce(o, t, d) {
  o.set(t, d), queueMicrotask(() => o.delete(t));
}
function En(o, t) {
  let d = t.get(o);
  return typeof d === "string" ? d : o.value;
}
function Ue(o) {
  return Mm(o) && o.type === Field;
}
function R(o, t) {
  return Mm(o) && o.type === t;
}
var Vh = Object.assign(Qe, {
  Field: Field,
  Toggle: Toggle,
  Select: Select,
  Text: Text,
  Link: Link,
  Button: Button,
  Value: Value
});
export { n5o, Vh };