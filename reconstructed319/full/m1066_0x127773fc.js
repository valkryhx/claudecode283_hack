// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  B_
} from "B:/~BUN/root/chunk-z8bb1299.js";
import {
  Wu
} from "B:/~BUN/root/chunk-emd6eb45.js";
import {
  Jfe,
  Se
} from "B:/~BUN/root/chunk-x24hm796.js";
import {
  Rn,
  ot,
  s,
  n,
  Shn,
  qs,
  che,
  pl
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Kj
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  Lo
} from "B:/~BUN/root/chunk-npkbazqf.js";
import {
  STe
} from "B:/~BUN/root/chunk-apgsnbqk.js";
import {
  Br,
  ow
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  wS,
  uhn,
  ZGt,
  eEt
} from "B:/~BUN/root/chunk-crjx6seq.js";
import {
  zZo,
  O3t,
  VZo,
  KZo,
  YZo,
  XZo
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  AUe,
  gp
} from "B:/~BUN/root/chunk-nyy541yq.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  XSn
} from "B:/~BUN/root/chunk-qed5a8pe.js";
import {
  lr
} from "B:/~BUN/root/chunk-75wha2r5.js";
import {
  _ci
} from "B:/~BUN/root/chunk-yjbw4jd5.js";
import {
  Sb
} from "B:/~BUN/root/chunk-dt45jjk2.js";
import {
  O,
  Z,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  t7
} from "B:/~BUN/root/chunk-63176a0t.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
var It = "clipboard-image-hint",
  Tt = 1000,
  vt = 30000,
  je = {
    id: "clipboard-image-hint",
    deps: (t) => [t.isTerminalFocused, t.canPasteImages, t.addNotification, t.clock],
    setup() {
      let t = null,
        c = 0,
        i = null;
      return ({
        isTerminalFocused: p,
        canPasteImages: h,
        addNotification: m,
        clock: d
      }) => {
        let o = t ?? p;
        if (t = p, !h || !p || o) return;
        return i?.(), i = d.setTimeout(async () => {
          i = null;
          let g = Date.now();
          if (g - c < vt) return;
          if (await _ci()) c = g, m({
            key: It,
            kind: "contextual",
            text: `Image in clipboard \xB7 ${Sb("chat:imagePaste","Chat","ctrl+v")} to paste`,
            priority: "immediate",
            timeoutMs: 8000
          })
        }, Tt), () => {
          i?.(), i = null
        }
      }
    }
  };
j();

function R5n(t, c) {
  let [i] = y(() => t.map((h) => {
    let m = h.setup();
    return {
      effect: typeof m === "function" ? m : m.effect,
      dispose: typeof m === "function" ? void 0 : m.dispose,
      deps: null,
      cleanup: void 0
    }
  })), p = A(c);
  O(() => {
    p.current = c;
    let h = () => p.current,
      m = [];
    t.forEach((d, o) => {
      let g = i[o];
      if (!g) return;
      let C = d.deps ? d.deps(c) : [];
      if (g.deps !== null && Ht(g.deps, C)) return;
      m.push({
        slot: g,
        deps: C
      })
    });
    for (let {
        slot: d
      }
      of m) d.cleanup?.(), d.cleanup = void 0;
    for (let {
        slot: d,
        deps: o
      }
      of m) d.deps = o, d.cleanup = d.effect(c, h)
  }), O(() => () => {
    for (let h of i) h.cleanup?.(), h.cleanup = void 0, h.deps = null, h.dispose?.()
  }, [i])
}

function Ht(t, c) {
  if (t.length !== c.length) return !1;
  for (let i = 0; i < t.length; i++)
    if (!Object.is(t[i], c[i])) return !1;
  return !0
}
var Nt = [je];

function A5n({
  isTerminalFocused: t,
  canPasteImages: c
}) {
  let {
    addNotification: i
  } = Lo(), p = Rn();
  R5n(Nt, {
    isTerminalFocused: t,
    canPasteImages: c,
    addNotification: i,
    clock: p
  })
}
j();
import {
  isDeepStrictEqual as Xt
} from "util";
j();

function QGt(t) {
  let b = S(3),
    {
      char: c,
      index: i,
      glimmerIndex: p,
      messageColor: h,
      shimmerColor: m
    } = t,
    d = i === p,
    o = Math.abs(i - p) === 1;
  const C = d || o ? m : h;
  let R;
  if (b[0] !== c || b[1] !== C) R = e(n, {
    color: C,
    children: c
  }), b[0] = c, b[1] = C, b[2] = R;
  else R = b[2];
  return R
}

function Gt(J) {
  return J.shimmerColor
}

function se(t) {
  let p = S(21),
    {
      text: c,
      highlights: i
    } = t,
    h;
  if (p[0] !== i || p[1] !== c) {
    let m = KZo(c, i);
    h = [
      []
    ];
    let d = 0;
    for (const o of m) {
      let g = o.text.split(`
`);
      for (let C = 0; C < g.length; C++) {
        if (C > 0) h.push([]), d = d + 1;
        let b = g[C];
        if (b.length > 0) h.at(-1).push({
          text: b,
          highlight: o.highlight,
          start: d
        });
        d = d + b.length
      }
    }
    p[0] = i, p[1] = c, p[2] = h
  } else h = p[2];
  let R;
  if (p[3] !== i) R = i.some(Gt), p[3] = i, p[4] = R;
  else R = p[4];
  let M = R,
    T = 0,
    I = 1;
  if (M) {
    let D = Infinity;
    let B = -Infinity;
    if (p[5] !== i) {
      for (const L of i) {
        if (L.shimmerColor) D = Math.min(D, L.start), B = Math.max(B, L.end)
      }
      p[5] = i, p[6] = D, p[7] = B
    } else D = p[6], B = p[7];
    T = D - 10, I = B - D + 20
  }
  let k;
  if (p[8] !== I || p[9] !== M || p[10] !== h || p[11] !== T) k = {
    lines: h,
    hasShimmer: M,
    sweepStart: T,
    cycleLength: I
  }, p[8] = I, p[9] = M, p[10] = h, p[11] = T, p[12] = k;
  else k = p[12];
  let {
    lines: V,
    hasShimmer: De,
    sweepStart: de,
    cycleLength: Be
  } = k, Y = gp(), K = De && !Y, [W, Ae] = pl(K ? 50 : null), U = K ? de + Math.floor(Ae / 50) % Be : AUe, _;
  if (p[13] !== U || p[14] !== V) {
    let v;
    if (p[16] !== U) v = (q, me) => e(s, {
      children: q.length === 0 ? e(n, {
        children: " "
      }) : q.map((f, ue) => {
        if (f.highlight?.shimmerColor && f.highlight.color) {
          return e(n, {
            children: f.text.split("").map((z, u) => e(QGt, {
              char: z,
              index: f.start + u,
              glimmerIndex: U,
              messageColor: f.highlight.color,
              shimmerColor: f.highlight.shimmerColor
            }, u))
          }, ue)
        }
        return e(n, {
          color: f.highlight?.color,
          backgroundColor: f.highlight?.backgroundColor,
          dimColor: f.highlight?.dimColor,
          bold: f.highlight?.bold,
          italic: f.highlight?.italic,
          underline: f.highlight?.underline,
          strikethrough: f.highlight?.strikethrough,
          children: e(qs, {
            children: f.text
          })
        }, ue)
      })
    }, me), p[16] = U, p[17] = v;
    else v = p[17];
    _ = V.map(v);
    p[13] = U, p[14] = V, p[15] = _
  } else _ = p[15];
  let v;
  if (p[18] !== W || p[19] !== _) v = e(s, {
    ref: W,
    flexDirection: "column",
    children: _
  }), p[18] = W, p[19] = _, p[20] = v;
  else v = p[20];
  return v
}

function Co(Mo) {
  return Mo.isCaretCell
}

function dhn(t) {
  let k = S(13),
    {
      inputState: c,
      children: i,
      terminalFocus: p,
      invert: h,
      hidePlaceholderText: m,
      cursorCellPainted: d,
      ...o
    } = t,
    {
      handleKeyDown: g,
      renderedValue: C,
      cursorLine: b,
      cursorColumn: R
    } = c,
    M = o.focus && o.showCursor && o.parkCursor !== !1 ? {
      line: b,
      column: R,
      visible: !d
    } : void 0,
    {
      handleKeyDown: I,
      handlePaste: D,
      isPasting: B
    } = eEt({
      onPaste: o.onPaste,
      handleKeyDown: (T) => {
        if (o.onKeyDownBefore?.(T), T.defaultPrevented || T.didStopImmediatePropagation()) {
          return
        }
        g(T)
      },
      onImagePaste: o.onImagePaste,
      onUnreadImagePaste: o.onUnreadImagePaste
    }),
    {
      onIsPastingChange: L
    } = o;
  O(() => {
    if (L) L(B)
  }, [B, L]);
  let V;
  if (k[0] === w) V = Kj(), k[0] = V;
  else V = k[0];
  let De = V,
    de = ot(),
    Be = ow(),
    [Y] = Br(),
    K;
  if (k[1] !== Y) K = XSn() ?? Y, k[1] = Y, k[2] = K;
  else K = k[2];
  let W;
  if (k[3] !== K) W = STe(K), k[3] = K, k[4] = W;
  else W = k[4];
  let Ae = !W,
    {
      showPlaceholder: U,
      renderedPlaceholder: _
    } = xt({
      placeholder: o.placeholder,
      value: o.value,
      showCursor: o.showCursor && !De,
      focus: o.focus,
      terminalFocus: p,
      invert: h,
      hidePlaceholderText: m || de
    }),
    v = U ? _ : void 0,
    q = o.focus !== !1,
    me = A(null);
  wS(me, q);
  let f = {
      ref: me,
      autoFocus: q,
      disabled: !q,
      caret: M,
      onKeyDown: I,
      onPaste: D,
      allowPrintableKeybindings: o.allowPrintableKeybindings
    },
    ue = o.value && o.value.trim().indexOf(" ") === -1 || o.value && o.value.endsWith(" "),
    z = Boolean(o.argumentHint && o.value && ue && o.value.startsWith("/")),
    u = c.shown,
    J = u && o.showCursor ? {
      start: u.cursorOffset,
      end: u.cursorOffset + t7(u.text.text.slice(u.cursorOffset)).length
    } : void 0,
    fe;
  if (k[5] !== u) fe = u !== void 0 && u.text.spans.some((ge) => ge.start === u.cursorOffset), k[5] = u, k[6] = fe;
  else fe = k[6];
  let Q = fe,
    Ce = o.showCursor && o.highlights && !Q ? o.highlights.filter((E) => E.isCaretCell || E.dimColor || o.cursorOffset < E.start || o.cursorOffset >= E.end) : o.highlights,
    H = o.leadingPill?.text ?? "",
    Le = H ? [{
      start: 0,
      end: H.length - 1,
      color: "ide",
      priority: 30
    }, ...(Ce ?? []).map((xe) => ({
      ...xe,
      start: xe.start + H.length,
      end: xe.end + H.length
    }))] : Ce,
    Pt = u ? [...YZo(Le ?? [], u.text), ...XZo(u.text, J)] : Le,
    ee = c.renderedRowStartOffsets[c.cursorLine] ?? 0,
    wt = (u?.cursorOffset ?? H.length + o.cursorOffset) < ee,
    St = Pt?.some(Co) ?? !1,
    ko = St && (p && (d || wt) || !Q && /[\r\n]/.test(o.value.normalize("NFC")[o.cursorOffset] ?? "")),
    Oo = wt && St && p && c.renderedRowStartOffsets[c.cursorLine + 1] !== ee ? {
      start: ee,
      end: ee + t7((u?.text.text ?? (H + o.value).normalize("NFC")).slice(ee)).length
    } : void 0,
    ye = Pt?.flatMap((Ke) => O3t(Ke, Ke.tintBeneath ?? Ke, Oo)).flatMap((te) => !te.isCaretCell ? [te] : ko ? zZo(te) : [p ? Ct(te, Be, Ae) : te]),
    Ue = ye && ye.length > 0 ? VZo(ye, C, c.renderedRowStartOffsets) : ye;
  if (Ue && Ue.length > 0 && !v && !de) {
    return r(che, {
      ...f,
      children: [e(s, {
        flexShrink: 0,
        "aria-preserve-whitespace": !0,
        children: e(se, {
          text: C,
          highlights: Ue
        })
      }), z && r(n, {
        dimColor: !0,
        wrap: "truncate-end",
        children: [o.value?.endsWith(" ") ? "" : " ", o.argumentHint]
      }), i]
    })
  }
  const Ve = n,
    Eo = "truncate-end",
    Fo = o.dimColor,
    We = v ? r(ne, {
      children: [H ? e(n, {
        color: "ide",
        children: H
      }) : null, e(qs, {
        children: v
      })]
    }) : e(n, {
      "aria-preserve-whitespace": !0,
      children: e(qs, {
        children: C
      })
    }),
    _e = z && r(n, {
      dimColor: !0,
      children: [o.value?.endsWith(" ") ? "" : " ", o.argumentHint]
    });
  let bt;
  if (k[7] !== Ve || k[8] !== i || k[9] !== o || k[10] !== We || k[11] !== _e) bt = r(Ve, {
    wrap: Eo,
    dimColor: Fo,
    children: [We, _e, i]
  }), k[7] = Ve, k[8] = i, k[9] = o, k[10] = We, k[11] = _e, k[12] = bt;
  else bt = k[12];
  return e(che, {
    ...f,
    children: bt
  })
}

function Ct(t, c, i) {
  let p = t.dimColor ? "inactive" : t.color;
  if (p === void 0 && t.backgroundColor === void 0) return t;
  let [h] = new Shn().feed(lr(p ?? (i ? "#ffffff" : "#000000"), c)(lr(t.backgroundColor ?? (i ? "#000000" : "#ffffff"), c, "background")("x"))).flatMap((m) => m.type === "text" ? [m.style] : []);
  if (h === void 0 || !Xt(h.fg, h.bg)) return t;
  return p === void 0 ? {
    ...t,
    backgroundColor: void 0
  } : {
    ...t,
    color: void 0,
    dimColor: !1
  }
}

function xt({
  placeholder: t,
  value: c,
  showCursor: i,
  focus: p,
  terminalFocus: h = !0,
  invert: m = Jfe,
  hidePlaceholderText: d = !1
}) {
  let o = void 0;
  if (t) {
    if (d) o = i && p && h ? m(" ") : "";
    else if (o = Se.dim(t), i && p && h) o = t.length > 0 ? m(t[0]) + Se.dim(t.slice(1)) : m(" ")
  }
  let g = c.length === 0 && Boolean(t);
  return {
    renderedPlaceholder: o,
    showPlaceholder: g
  }
}

function Ho(H) {
  return H.voiceState
}

function No(xe) {
  return xe
}

function Ro(Le) {
  return Le
}

function Ir(t) {
  let p = S(58),
    [c] = Br(),
    i = Wu(),
    h;
  if (p[0] === w) h = Kj(), p[0] = h;
  else h = p[0];
  let m = h,
    d = ot(),
    g = B_(Ho) === "recording",
    [C, b] = ZGt();
  const R = !!t.onImagePaste;
  let M;
  if (p[1] !== i || p[2] !== R) M = {
    isTerminalFocused: i,
    canPasteImages: R
  }, p[1] = i, p[2] = R, p[3] = M;
  else M = p[3];
  A5n(M);
  let T;
  if (p[4] !== b || p[5] !== i) T = !i ? No : b ? () => Se.hex(b.hex)(b.char) : m ? Ro : Jfe, p[4] = b, p[5] = i, p[6] = T;
  else T = p[6];
  let I = T;
  const {
    value: D,
    onChange: B,
    onSubmit: L,
    onExit: k,
    onExitMessage: V,
    onEscapeMessage: De,
    historyOnClear: de,
    onLeftArrowOnEmpty: Be,
    leftArrowConfirmHint: Y,
    onHistoryReset: K,
    onHistoryUp: W,
    onHistoryDown: Ae,
    focus: U,
    mask: _,
    maskWhole: v,
    multiline: q,
    disableBackslashReturn: me,
    clearOnSubmit: f,
    disableCtrlCClear: ue
  } = t, z = t.showCursor && !d ? " " : "";
  let u;
  if (p[7] !== c) u = lr("text", c), p[7] = c, p[8] = u;
  else u = p[8];
  const J = d ? void 0 : t.virtualTexts;
  let fe;
  if (p[9] !== I || p[10] !== d || p[11] !== t.clearOnSubmit || p[12] !== t.columns || p[13] !== t.commitEdit || p[14] !== t.cursorOffset || p[15] !== t.disableBackslashReturn || p[16] !== t.disableCtrlCClear || p[17] !== t.disableCursorMovementForUpDownKeys || p[18] !== t.disableEscapeDoublePress || p[19] !== t.editRelay || p[20] !== t.focus || p[21] !== t.getInputMode || p[22] !== t.getPastedContents || p[23] !== t.historyOnClear || p[24] !== t.inlineGhostText || p[25] !== t.inputFilter || p[26] !== t.leadingPill || p[27] !== t.leftArrowConfirmHint || p[28] !== t.mask || p[29] !== t.maskWhole || p[30] !== t.maxVisibleLines || p[31] !== t.multiline || p[32] !== t.onChange || p[33] !== t.onChangeCursorOffset || p[34] !== t.onEscapeMessage || p[35] !== t.onExit || p[36] !== t.onExitMessage || p[37] !== t.onHistoryDown || p[38] !== t.onHistoryReset || p[39] !== t.onHistoryUp || p[40] !== t.onImagePaste || p[41] !== t.onLeftArrowOnEmpty || p[42] !== t.onSubmit || p[43] !== t.value || p[44] !== z || p[45] !== u || p[46] !== J) fe = {
    value: D,
    onChange: B,
    onSubmit: L,
    onExit: k,
    onExitMessage: V,
    onEscapeMessage: De,
    historyOnClear: de,
    onLeftArrowOnEmpty: Be,
    leftArrowConfirmHint: Y,
    onHistoryReset: K,
    onHistoryUp: W,
    onHistoryDown: Ae,
    focus: U,
    mask: _,
    maskWhole: v,
    multiline: q,
    disableBackslashReturn: me,
    clearOnSubmit: f,
    disableCtrlCClear: ue,
    cursorChar: z,
    preserveTrailingWhitespace: d,
    invert: I,
    themeText: u,
    columns: t.columns,
    leadingPill: t.leadingPill,
    maxVisibleLines: t.maxVisibleLines,
    onImagePaste: t.onImagePaste,
    disableCursorMovementForUpDownKeys: t.disableCursorMovementForUpDownKeys,
    disableEscapeDoublePress: t.disableEscapeDoublePress,
    externalOffset: t.cursorOffset,
    onOffsetChange: t.onChangeCursorOffset,
    inputFilter: t.inputFilter,
    editRelay: t.editRelay,
    commitEdit: t.commitEdit,
    getPastedContents: t.getPastedContents,
    getInputMode: t.getInputMode,
    inlineGhostText: t.inlineGhostText,
    dim: Se.dim,
    virtualTexts: J
  }, p[9] = I, p[10] = d, p[11] = t.clearOnSubmit, p[12] = t.columns, p[13] = t.commitEdit, p[14] = t.cursorOffset, p[15] = t.disableBackslashReturn, p[16] = t.disableCtrlCClear, p[17] = t.disableCursorMovementForUpDownKeys, p[18] = t.disableEscapeDoublePress, p[19] = t.editRelay, p[20] = t.focus, p[21] = t.getInputMode, p[22] = t.getPastedContents, p[23] = t.historyOnClear, p[24] = t.inlineGhostText, p[25] = t.inputFilter, p[26] = t.leadingPill, p[27] = t.leftArrowConfirmHint, p[28] = t.mask, p[29] = t.maskWhole, p[30] = t.maxVisibleLines, p[31] = t.multiline, p[32] = t.onChange, p[33] = t.onChangeCursorOffset, p[34] = t.onEscapeMessage, p[35] = t.onExit, p[36] = t.onExitMessage, p[37] = t.onHistoryDown, p[38] = t.onHistoryReset, p[39] = t.onHistoryUp, p[40] = t.onImagePaste, p[41] = t.onLeftArrowOnEmpty, p[42] = t.onSubmit, p[43] = t.value, p[44] = z, p[45] = u, p[46] = J, p[47] = fe;
  else fe = p[47];
  let ge = uhn(fe);
  const Q = b != null;
  let E;
  if (p[48] !== I || p[49] !== i || p[50] !== g || p[51] !== t || p[52] !== Q || p[53] !== ge) E = e(dhn, {
    inputState: ge,
    terminalFocus: i,
    highlights: t.highlights,
    invert: I,
    hidePlaceholderText: g,
    cursorCellPainted: Q,
    ...t
  }), p[48] = I, p[49] = i, p[50] = g, p[51] = t, p[52] = Q, p[53] = ge, p[54] = E;
  else E = p[54];
  let Ce;
  if (p[55] !== C || p[56] !== E) Ce = e(s, {
    ref: C,
    children: E
  }), p[55] = C, p[56] = E, p[57] = Ce;
  else Ce = p[57];
  return Ce
}
export {
  R5n,
  A5n,
  QGt,
  dhn,
  Ir
};
