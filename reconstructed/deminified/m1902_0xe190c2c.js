// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { As } from "B:/~BUN/root/chunk-syke822n.js";
import { Q6 } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { s, n, Jr, _t, w5, od, Xi } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Y_, PH } from "B:/~BUN/root/chunk-trcn2d68.js";
import { Dl } from "B:/~BUN/root/chunk-1223v177.js";
import { ki } from "B:/~BUN/root/chunk-9jvj58wt.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { Xm } from "B:/~BUN/root/chunk-da79nptg.js";
import { Yg } from "B:/~BUN/root/chunk-vabpvk99.js";
import { Xv, aIe, tw, Ii } from "B:/~BUN/root/chunk-bt71g93n.js";
import { GC } from "B:/~BUN/root/chunk-txdt16r9.js";
import { xH, aO, Kc, Qre } from "B:/~BUN/root/chunk-87fmbjg1.js";
import { Byt } from "B:/~BUN/root/chunk-rd1ccb7k.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Qg, Vt, Du, Pe, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var Ue = 32,
  ne = 2,
  de = 2,
  be = 2,
  xe = !0,
  ge = Vt(void 0),
  he = Vt(!1);
function Ve({
  children: children,
  ...t
}) {
  let i = As(ve()),
    ref = T(null),
    [l] = g(() => new Set()),
    b = od(() => {
      let [o] = l;
      if (o) return Xi(o).width;
      return ref.current && Xi(ref.current).width || i.columns;
    }),
    h = Yg(),
    [v] = g(() => new WeakMap()),
    p = Qg.toArray(children),
    u = p.filter(_e),
    labelColumn = Math.min(Ue, Math.max(0, ...u.map(item => ie(Qre(item.props.label))))),
    stacked = b - de - labelColumn - ne < Byt,
    M = u.filter(item => !O(item.props.children, Value)),
    value = xH(t.isDisabled),
    k = stacked ? b - de - be : b - de - labelColumn - ne,
    [P, L, S] = Ii(void 0),
    [I, U] = g(void 0),
    input = T(null),
    {
      focusManager: focusManager
    } = Pe(Y_),
    editor = Xm({
      isActive: !0,
      columns: k,
      backspaceExitsOnEmpty: !1,
      onExit: () => end(!0, !0),
      onCancel: () => end(!1),
      onExitUp: () => end(!0, !0),
      onExitDown: () => end(!0, !0)
    });
  function end(o, x = !1) {
    let c = S();
    if (c === void 0) return !0;
    let R = u.find(item => item.key === c.key)?.props.children,
      y = editor.queryRef.current,
      reason = o && y !== c.from && O(R, Text) ? R.props.validate?.(y) ?? null : null;
    if (reason !== null && x) return U({
      draft: y,
      reason: reason
    }), !1;
    if (L(void 0), U(void 0), input.current && focusManager?.activeElement === input.current) focusManager.blur();
    if (!o || reason !== null || !O(R, Text) || R.props.disabled) return !0;
    if (y !== c.from) ke(v, R.props, y), R.props.onChange(y);
    return !0;
  }
  function B(o) {
    let x = o?.props.children;
    if (!O(x, Text) || x.props.disabled || typeof o?.key !== "string") return ht(x, v);
    let c = {
      key: o.key,
      from: kt(x.props, v)
    };
    return {
      accept: () => {
        end(!0), editor.setQuery(c.from), L(c);
      }
    };
  }
  let children_4 = p.map((o, index) => {
    if (!_e(o)) return Du(o) && o.type === Kc.Heading ? o : e(Kc.Heading, {
      children: o
    }, Du(o) ? o.key : index);
    let {
        children: children_2
      } = o.props,
      label = Qre(o.props.label),
      y = P?.key === o.key && I?.draft === editor.query ? I.reason : void 0,
      description = y ?? Qre(o.props.description),
      F = value || P?.key === o.key ? void 0 : B(o).accept,
      j = O(children_2, Toggle) ? ie("false") : O(children_2, Select) ? Math.max(0, ...children_2.props.options.map(item => ie(item.label))) + (children_2.props.disabled ? 0 : ie("\u2039  \u203A")) : O(children_2, Button) ? ie(children_2.props.children ?? "") : 0,
      children_3 = e(qe, {
        label: label,
        description: description,
        refused: y !== void 0,
        onClick: F && (J => {
          if (h(J) || xH(t.isDisabled)) return;
          F();
        }),
        labelColumn: labelColumn,
        stacked: stacked,
        targetWidth: Math.max(0, Math.min(j, k)),
        rowLines: O(children_2, Value) ? void 0 : l,
        children: e(ge, {
          value: P?.key === o.key && !value && O(children_2, Text) && !children_2.props.disabled ? {
            editor: editor,
            room: k,
            input: input,
            end: end
          } : void 0,
          children: children_2
        })
      });
    return O(children_2, Value) ? e(Kc.Heading, {
      children: children_3
    }, o.key) : e(Kc.Item, {
      declareCursor: P?.key !== o.key,
      lines: (stacked ? 2 : 1) + (description ? 1 : 0),
      children: children_3
    }, o.key);
  });
  if (M.length === 0) return r(s, {
    ref: ref,
    flexDirection: "column",
    children: [children_4.length === 0 && t.emptyMessage && e(n, {
      dimColor: !0,
      children: t.emptyMessage
    }), children_4.map((o, index) => e(tw, {
      isFocused: !1,
      styled: !1,
      children: o
    }, Du(o) ? o.key : index))]
  });
  let children_5 = e(Kc, {
    ...t,
    rowClick: "move",
    onFocus: o => {
      if (M[o]?.key !== S()?.key) end(!0);
      t.onFocus?.(o);
    },
    onSelect: o => {
      if (S() !== void 0) {
        end(!0, !0);
        return;
      }
      B(M[o]).accept?.();
    },
    onRowKeyDown: (o, x) => {
      if (S() !== void 0) {
        editor.handleKeyDown(o);
        return;
      }
      if (o.ctrl || o.meta) return;
      let c = B(M[x]),
        R = o.key === " " ? c.accept : o.key === "left" ? c.previous : o.key === "right" ? c.next : void 0;
      if (R === void 0) return;
      o.preventDefault(), R();
    },
    children: children_4
  });
  return e(s, {
    ref: ref,
    flexDirection: "column",
    children: e(he, {
      value: value,
      children: children_5
    })
  });
}
function qe(a) {
  let k = w(46),
    {
      label: t,
      description: i,
      refused: refused,
      onClick: onClick,
      labelColumn: labelColumn_2,
      stacked: stacked_2,
      targetWidth: v,
      rowLines: rowLines,
      children: children_6
    } = a,
    C = aO(),
    f = _t(),
    [M, m] = aIe(onClick !== void 0);
  if (f) {
    let P;
    if (k[0] !== t) P = r(n, {
      children: [t, ","]
    }), k[0] = t, k[1] = P;else P = k[1];
    let L;
    if (k[2] !== children_6 || k[3] !== P) L = r(s, {
      children: [P, children_6]
    }), k[2] = children_6, k[3] = P, k[4] = L;else L = k[4];
    let S;
    if (k[5] !== i) S = i && e(n, {
      children: i
    }), k[5] = i, k[6] = S;else S = k[6];
    let I;
    if (k[7] !== L || k[8] !== S) I = r(s, {
      flexDirection: "column",
      children: [L, S]
    }), k[7] = L, k[8] = S, k[9] = I;else I = k[9];
    return I;
  }
  let ref_2;
  if (k[10] !== rowLines) ref_2 = U => {
    let W = U?.parentNode;
    if (!rowLines || !W) {
      return;
    }
    return rowLines.add(W), () => {
      rowLines.delete(W);
    };
  }, k[10] = rowLines, k[11] = ref_2;else ref_2 = k[11];
  const flexDirection = stacked_2 ? "column" : "row",
    width = stacked_2 ? void 0 : labelColumn_2,
    marginRight = stacked_2 ? 0 : ne,
    color = C ? "suggestion" : void 0;
  let children_7;
  if (k[12] !== t || k[13] !== color) children_7 = e(n, {
    color: color,
    wrap: "truncate-end",
    children: t
  }), k[12] = t, k[13] = color, k[14] = children_7;else children_7 = k[14];
  let D;
  if (k[15] !== width || k[16] !== marginRight || k[17] !== children_7) D = e(s, {
    width: width,
    marginRight: marginRight,
    flexShrink: 0,
    children: children_7
  }), k[15] = width, k[16] = marginRight, k[17] = children_7, k[18] = D;else D = k[18];
  const paddingLeft = stacked_2 ? be : 0,
    backgroundColor = M ? Xv : void 0;
  let onMouseEnter;
  if (k[19] !== onClick || k[20] !== m) onMouseEnter = onClick && (() => m(!0)), k[19] = onClick, k[20] = m, k[21] = onMouseEnter;else onMouseEnter = k[21];
  let onMouseLeave;
  if (k[22] !== onClick || k[23] !== m) onMouseLeave = onClick && (() => m(!1)), k[22] = onClick, k[23] = m, k[24] = onMouseLeave;else onMouseLeave = k[24];
  let children_8;
  if (k[25] !== children_6 || k[26] !== onClick || k[27] !== onMouseEnter || k[28] !== onMouseLeave || k[29] !== backgroundColor || k[30] !== v) children_8 = e(s, {
    minWidth: v,
    backgroundColor: backgroundColor,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: children_6
  }), k[25] = children_6, k[26] = onClick, k[27] = onMouseEnter, k[28] = onMouseLeave, k[29] = backgroundColor, k[30] = v, k[31] = children_8;else children_8 = k[31];
  let c;
  if (k[32] !== children_8 || k[33] !== paddingLeft) c = e(s, {
    paddingLeft: paddingLeft,
    children: children_8
  }), k[32] = children_8, k[33] = paddingLeft, k[34] = c;else c = k[34];
  let R;
  if (k[35] !== c || k[36] !== flexDirection || k[37] !== D) R = r(s, {
    flexDirection: flexDirection,
    children: [D, c]
  }), k[35] = c, k[36] = flexDirection, k[37] = D, k[38] = R;else R = k[38];
  let y;
  if (k[39] !== i || k[40] !== refused) y = i && e(n, {
    dimColor: !refused,
    color: refused ? "error" : void 0,
    wrap: "truncate-end",
    children: i
  }), k[39] = i, k[40] = refused, k[41] = y;else y = k[41];
  let E;
  if (k[42] !== ref_2 || k[43] !== R || k[44] !== y) E = r(s, {
    ref: ref_2,
    flexDirection: "column",
    children: [R, y]
  }), k[42] = ref_2, k[43] = R, k[44] = y, k[45] = E;else E = k[45];
  return E;
}
function H(a) {
  let C = w(15),
    {
      spoken: spoken,
      disabled: disabled,
      before: d,
      after: l,
      children: children_9
    } = a,
    dimColor = disabled === void 0 ? !1 : disabled,
    v = aO();
  if (_t()) {
    const u = dimColor && ", unavailable";
    let f;
    if (C[0] !== spoken || C[1] !== u) f = r(n, {
      children: [spoken, u]
    }), C[0] = spoken, C[1] = u, C[2] = f;else f = C[2];
    return f;
  }
  let u;
  if (C[3] !== d) u = d && e(n, {
    dimColor: !0,
    children: d
  }), C[3] = d, C[4] = u;else u = C[4];
  const color_2 = v && !dimColor ? "suggestion" : void 0;
  let M;
  if (C[5] !== children_9 || C[6] !== color_2) M = e(n, {
    color: color_2,
    children: children_9
  }), C[5] = children_9, C[6] = color_2, C[7] = M;else M = C[7];
  let m;
  if (C[8] !== l) m = l && e(n, {
    dimColor: !0,
    children: l
  }), C[8] = l, C[9] = m;else m = C[9];
  let k;
  if (C[10] !== dimColor || C[11] !== u || C[12] !== M || C[13] !== m) k = r(n, {
    dimColor: dimColor,
    wrap: "truncate-end",
    children: [u, M, m]
  }), C[10] = dimColor, C[11] = u, C[12] = M, C[13] = m, C[14] = k;else k = C[14];
  return k;
}
function Field(a) {
  let i = w(2),
    {
      children: children_10
    } = a,
    d;
  if (i[0] !== children_10) d = e(V, {
    children: children_10
  }), i[0] = children_10, i[1] = d;else d = i[1];
  return d;
}
function Toggle(a) {
  let b = w(4),
    {
      value: value_2,
      disabled: disabled_2
    } = a;
  const spoken_2 = String(value_2),
    children_11 = String(value_2);
  let h;
  if (b[0] !== disabled_2 || b[1] !== spoken_2 || b[2] !== children_11) h = e(H, {
    spoken: spoken_2,
    disabled: disabled_2,
    children: children_11
  }), b[0] = disabled_2, b[1] = spoken_2, b[2] = children_11, b[3] = h;else h = b[3];
  return h;
}
function Select(a) {
  let h = w(8),
    {
      value: value_3,
      options: options,
      disabled: disabled_3
    } = a,
    l = Pe(he),
    b = aO(),
    v;
  if (h[0] !== options || h[1] !== value_3) v = options.find(item => item.value === value_3)?.label ?? value_3, h[0] = options, h[1] = value_3, h[2] = v;else v = h[2];
  let u = v,
    C = !disabled_3 && !l && (b || !xe);
  const before = C ? "\u2039 " : void 0,
    after = C ? " \u203A" : void 0;
  let m;
  if (h[3] !== disabled_3 || h[4] !== u || h[5] !== before || h[6] !== after) m = e(H, {
    spoken: u,
    disabled: disabled_3,
    before: before,
    after: after,
    children: u
  }), h[3] = disabled_3, h[4] = u, h[5] = before, h[6] = after, h[7] = m;else m = h[7];
  return m;
}
function Link(a) {
  let b = w(5),
    {
      children: children_12,
      disabled: disabled_4
    } = a;
  const spoken_3 = children_12 ? `${children_12}, opens` : "opens",
    after_2 = children_12 ? " \u203A" : "\u203A";
  let h;
  if (b[0] !== children_12 || b[1] !== disabled_4 || b[2] !== spoken_3 || b[3] !== after_2) h = e(H, {
    spoken: spoken_3,
    disabled: disabled_4,
    after: after_2,
    children: children_12
  }), b[0] = children_12, b[1] = disabled_4, b[2] = spoken_3, b[3] = after_2, b[4] = h;else h = b[4];
  return h;
}
function Button(a) {
  let l = w(4),
    {
      children: children_13,
      disabled: disabled_5
    } = a;
  const spoken_4 = children_13 ? `${children_13}, button` : "button";
  let b;
  if (l[0] !== children_13 || l[1] !== disabled_5 || l[2] !== spoken_4) b = e(H, {
    spoken: spoken_4,
    disabled: disabled_5,
    children: children_13
  }), l[0] = children_13, l[1] = disabled_5, l[2] = spoken_4, l[3] = b;else b = l[3];
  return b;
}
function Value(a) {
  let l = w(6),
    {
      children: children_14,
      disabled: disabled_6
    } = a;
  const spoken_5 = children_14 || "empty";
  let children_15;
  if (l[0] !== children_14) children_15 = children_14 || e(n, {
    dimColor: !0,
    children: "\u2014"
  }), l[0] = children_14, l[1] = children_15;else children_15 = l[1];
  let h;
  if (l[2] !== disabled_6 || l[3] !== spoken_5 || l[4] !== children_15) h = e(H, {
    spoken: spoken_5,
    disabled: disabled_6,
    children: children_15
  }), l[2] = disabled_6, l[3] = spoken_5, l[4] = children_15, l[5] = h;else h = l[5];
  return h;
}
function Text(a) {
  let p = w(75),
    {
      value: value_4,
      placeholder: i,
      disabled: disabled_7
    } = a,
    l = Pe(ge),
    b = _t(),
    h = Dl();
  if (l === void 0) {
    const spoken_6 = `${value_4 || "empty"}, edit text`;
    let children_16;
    if (p[0] !== i || p[1] !== value_4) children_16 = value_4 || e(n, {
      dimColor: !0,
      children: i
    }), p[0] = i, p[1] = value_4, p[2] = children_16;else children_16 = p[2];
    let C;
    if (p[3] !== disabled_7 || p[4] !== spoken_6 || p[5] !== children_16) C = e(H, {
      spoken: spoken_6,
      disabled: disabled_7,
      children: children_16
    }), p[3] = disabled_7, p[4] = spoken_6, p[5] = children_16, p[6] = C;else C = p[6];
    return C;
  }
  let {
      editor: editor_2,
      input: input_2,
      end: end_2
    } = l,
    k,
    P,
    L,
    S,
    I,
    children_17,
    scope,
    bindings,
    wrap,
    C,
    ref_3,
    autoFocus,
    caret,
    onKeyDown,
    onPaste,
    onBlur;
  if (p[7] !== l.room || p[8] !== editor_2 || p[9] !== end_2 || p[10] !== input_2 || p[11] !== b || p[12] !== h) {
    let o = ki.fromText(editor_2.query, l.room, editor_2.cursorOffset);
    let x = h && !b && !PH() ? " " : "";
    let c;
    if (p[29] !== end_2) c = () => end_2(!0, !0) ? !1 : void 0, p[29] = end_2, p[30] = c;else c = p[30];
    let run = c;
    I = GC;
    scope = "Select";
    let y;
    if (p[31] !== end_2) y = {
      action: "select:cancel",
      run: () => {
        end_2(!1);
      }
    }, p[31] = end_2, p[32] = y;else y = p[32];
    let E;
    if (p[33] !== editor_2) E = {
      action: "select:first",
      run: () => editor_2.setCursorOffset(0)
    }, p[33] = editor_2, p[34] = E;else E = p[34];
    let F;
    if (p[35] !== editor_2) F = {
      action: "select:last",
      run: () => editor_2.setCursorOffset(editor_2.queryRef.current.length)
    }, p[35] = editor_2, p[36] = F;else F = p[36];
    let j, z;
    if (p[37] !== run) j = {
      action: "select:previous",
      run: run
    }, z = {
      action: "select:next",
      run: run
    }, p[37] = run, p[38] = j, p[39] = z;else j = p[38], z = p[39];
    if (p[40] !== y || p[41] !== E || p[42] !== F || p[43] !== j || p[44] !== z) bindings = [y, E, F, j, z], p[40] = y, p[41] = E, p[42] = F, p[43] = j, p[44] = z, p[45] = bindings;else bindings = p[45];
    S = s;
    if (p[46] !== end_2) onBlur = J => end_2(J.relatedTarget !== null), p[46] = end_2, p[47] = onBlur;else onBlur = p[47];
    L = w5;
    ref_3 = input_2;
    autoFocus = !0;
    caret = {
      line: 0,
      column: o.getPosition().column,
      visible: !0
    };
    if (p[48] !== editor_2) onKeyDown = Ce => {
      if (editor_2.handleKeyDown(Ce), Ce.defaultPrevented) Ce.stopImmediatePropagation();
    }, p[48] = editor_2, p[49] = onKeyDown;else onKeyDown = p[49];
    onPaste = editor_2.handlePaste;
    P = n;
    wrap = "truncate-end";
    C = !0;
    k = Jr;
    children_17 = o.render(x, "", Q6, void 0, 1, void 0, void 0, b);
    p[7] = l.room, p[8] = editor_2, p[9] = end_2, p[10] = input_2, p[11] = b, p[12] = h, p[13] = k, p[14] = P, p[15] = L, p[16] = S, p[17] = I, p[18] = children_17, p[19] = scope, p[20] = bindings, p[21] = wrap, p[22] = C, p[23] = ref_3, p[24] = autoFocus, p[25] = caret, p[26] = onKeyDown, p[27] = onPaste, p[28] = onBlur;
  } else k = p[13], P = p[14], L = p[15], S = p[16], I = p[17], children_17 = p[18], scope = p[19], bindings = p[20], wrap = p[21], C = p[22], ref_3 = p[23], autoFocus = p[24], caret = p[25], onKeyDown = p[26], onPaste = p[27], onBlur = p[28];
  let children_18;
  if (p[50] !== k || p[51] !== children_17) children_18 = e(k, {
    children: children_17
  }), p[50] = k, p[51] = children_17, p[52] = children_18;else children_18 = p[52];
  let children_19;
  if (p[53] !== P || p[54] !== children_18 || p[55] !== wrap || p[56] !== C) children_19 = e(P, {
    wrap: wrap,
    "aria-preserve-whitespace": C,
    children: children_18
  }), p[53] = P, p[54] = children_18, p[55] = wrap, p[56] = C, p[57] = children_19;else children_19 = p[57];
  let children_20;
  if (p[58] !== L || p[59] !== children_19 || p[60] !== ref_3 || p[61] !== autoFocus || p[62] !== caret || p[63] !== onKeyDown || p[64] !== onPaste) children_20 = e(L, {
    ref: ref_3,
    autoFocus: autoFocus,
    caret: caret,
    onKeyDown: onKeyDown,
    onPaste: onPaste,
    children: children_19
  }), p[58] = L, p[59] = children_19, p[60] = ref_3, p[61] = autoFocus, p[62] = caret, p[63] = onKeyDown, p[64] = onPaste, p[65] = children_20;else children_20 = p[65];
  let children_21;
  if (p[66] !== S || p[67] !== children_20 || p[68] !== onBlur) children_21 = e(S, {
    onBlur: onBlur,
    children: children_20
  }), p[66] = S, p[67] = children_20, p[68] = onBlur, p[69] = children_21;else children_21 = p[69];
  let j;
  if (p[70] !== I || p[71] !== scope || p[72] !== bindings || p[73] !== children_21) j = e(I, {
    scope: scope,
    bindings: bindings,
    children: children_21
  }), p[70] = I, p[71] = scope, p[72] = bindings, p[73] = children_21, p[74] = j;else j = p[74];
  return j;
}
function ht(a, t) {
  if (O(a, Toggle) && !a.props.disabled) {
    let {
      props: props
    } = a;
    return {
      accept: () => {
        let d = !(t.get(props) ?? props.value);
        ke(t, props, d), props.onChange(d);
      }
    };
  }
  if (O(a, Select) && !a.props.disabled) {
    let {
        props: props_2
      } = a,
      d = l => () => {
        let b = props_2.options.length,
          h = props_2.options.findIndex(item => item.value === (t.get(props_2) ?? props_2.value)),
          v = Math.max(h, l === 1 ? -1 : 0),
          p = props_2.options[(v + l + b) % b];
        if (p === void 0) return;
        ke(t, props_2, p.value), props_2.onChange(p.value);
      };
    return {
      accept: d(1),
      next: d(1),
      previous: d(-1)
    };
  }
  if (O(a, Link) && !a.props.disabled) return {
    accept: a.props.onOpen,
    next: a.props.onOpen
  };
  if (O(a, Button) && !a.props.disabled) return {
    accept: a.props.onPress
  };
  return {};
}
function ke(a, t, i) {
  a.set(t, i), queueMicrotask(() => a.delete(t));
}
function kt(a, t) {
  let i = t.get(a);
  return typeof i === "string" ? i : a.value;
}
function _e(a) {
  return Du(a) && a.type === Field;
}
function O(a, t) {
  return Du(a) && a.type === t;
}
var V_ = Object.assign(Ve, {
  Field: Field,
  Toggle: Toggle,
  Select: Select,
  Text: Text,
  Link: Link,
  Button: Button,
  Value: Value
});
export { V_ };