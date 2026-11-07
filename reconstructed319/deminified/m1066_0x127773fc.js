// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { B_ } from "B:/~BUN/root/chunk-z8bb1299.js";
import { Wu } from "B:/~BUN/root/chunk-emd6eb45.js";
import { Jfe, Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { Rn, ot, s, n, Shn, qs, che, pl } from "B:/~BUN/root/chunk-qey16aan.js";
import { Kj } from "B:/~BUN/root/chunk-31b4g6te.js";
import { Lo } from "B:/~BUN/root/chunk-npkbazqf.js";
import { STe } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { Br, ow } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { wS, uhn, ZGt, eEt } from "B:/~BUN/root/chunk-crjx6seq.js";
import { zZo, O3t, VZo, KZo, YZo, XZo } from "B:/~BUN/root/chunk-27h4st9h.js";
import { AUe, gp } from "B:/~BUN/root/chunk-nyy541yq.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { XSn } from "B:/~BUN/root/chunk-qed5a8pe.js";
import { lr } from "B:/~BUN/root/chunk-75wha2r5.js";
import { _ci } from "B:/~BUN/root/chunk-yjbw4jd5.js";
import { Sb } from "B:/~BUN/root/chunk-dt45jjk2.js";
import { O, Z, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { t7 } from "B:/~BUN/root/chunk-63176a0t.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
var key = "clipboard-image-hint",
  Tt = 1000,
  vt = 30000,
  je = {
    id: "clipboard-image-hint",
    deps: t => [t.isTerminalFocused, t.canPasteImages, t.addNotification, t.clock],
    setup() {
      let t = null,
        c = 0,
        i = null;
      return ({
        isTerminalFocused: isTerminalFocused,
        canPasteImages: canPasteImages,
        addNotification: addNotification,
        clock: clock
      }) => {
        let o = t ?? isTerminalFocused;
        if (t = isTerminalFocused, !canPasteImages || !isTerminalFocused || o) return;
        return i?.(), i = clock.setTimeout(async () => {
          i = null;
          let g = Date.now();
          if (g - c < vt) return;
          if (await _ci()) c = g, addNotification({
            key: key,
            kind: "contextual",
            text: `Image in clipboard \xB7 ${Sb("chat:imagePaste", "Chat", "ctrl+v")} to paste`,
            priority: "immediate",
            timeoutMs: 8000
          });
        }, Tt), () => {
          i?.(), i = null;
        };
      };
    }
  };
j();
function R5n(t, c) {
  let [i] = y(() => t.map(item => {
      let m = item.setup();
      return {
        effect: typeof m === "function" ? m : m.effect,
        dispose: typeof m === "function" ? void 0 : m.dispose,
        deps: null,
        cleanup: void 0
      };
    })),
    p = A(c);
  O(() => {
    p.current = c;
    let h = () => p.current,
      m = [];
    t.forEach((item, index) => {
      let slot = i[index];
      if (!slot) return;
      let deps = item.deps ? item.deps(c) : [];
      if (slot.deps !== null && Ht(slot.deps, deps)) return;
      m.push({
        slot: slot,
        deps: deps
      });
    });
    for (let {
      slot: slot_2
    } of m) slot_2.cleanup?.(), slot_2.cleanup = void 0;
    for (let {
      slot: slot_3,
      deps: deps_2
    } of m) slot_3.deps = deps_2, slot_3.cleanup = slot_3.effect(c, h);
  }), O(() => () => {
    for (let h of i) h.cleanup?.(), h.cleanup = void 0, h.deps = null, h.dispose?.();
  }, [i]);
}
function Ht(t, c) {
  if (t.length !== c.length) return !1;
  for (let i = 0; i < t.length; i++) if (!Object.is(t[i], c[i])) return !1;
  return !0;
}
var Nt = [je];
function A5n({
  isTerminalFocused: isTerminalFocused_2,
  canPasteImages: canPasteImages_2
}) {
  let {
      addNotification: addNotification_2
    } = Lo(),
    clock_2 = Rn();
  R5n(Nt, {
    isTerminalFocused: isTerminalFocused_2,
    canPasteImages: canPasteImages_2,
    addNotification: addNotification_2,
    clock: clock_2
  });
}
j();
import { isDeepStrictEqual as Xt } from "util";
j();
function QGt(t) {
  let b = S(3),
    {
      char: c,
      index: index_2,
      glimmerIndex: glimmerIndex,
      messageColor: messageColor,
      shimmerColor: shimmerColor
    } = t,
    d = index_2 === glimmerIndex,
    o = Math.abs(index_2 - glimmerIndex) === 1;
  const color = d || o ? shimmerColor : messageColor;
  let R;
  if (b[0] !== c || b[1] !== color) R = e(n, {
    color: color,
    children: c
  }), b[0] = c, b[1] = color, b[2] = R;else R = b[2];
  return R;
}
function Gt(J) {
  return J.shimmerColor;
}
function se(t) {
  let p = S(21),
    {
      text: text,
      highlights: highlights
    } = t,
    lines;
  if (p[0] !== highlights || p[1] !== text) {
    let m = KZo(text, highlights);
    lines = [[]];
    let start = 0;
    for (const o of m) {
      let g = o.text.split(`
`);
      for (let C = 0; C < g.length; C++) {
        if (C > 0) lines.push([]), start = start + 1;
        let text_2 = g[C];
        if (text_2.length > 0) lines.at(-1).push({
          text: text_2,
          highlight: o.highlight,
          start: start
        });
        start = start + text_2.length;
      }
    }
    p[0] = highlights, p[1] = text, p[2] = lines;
  } else lines = p[2];
  let R;
  if (p[3] !== highlights) R = highlights.some(Gt), p[3] = highlights, p[4] = R;else R = p[4];
  let hasShimmer = R,
    sweepStart = 0,
    cycleLength = 1;
  if (hasShimmer) {
    let Infinity_2 = Infinity;
    let B = -Infinity;
    if (p[5] !== highlights) {
      for (const L of highlights) {
        if (L.shimmerColor) Infinity_2 = Math.min(Infinity_2, L.start), B = Math.max(B, L.end);
      }
      p[5] = highlights, p[6] = Infinity_2, p[7] = B;
    } else Infinity_2 = p[6], B = p[7];
    sweepStart = Infinity_2 - 10, cycleLength = B - Infinity_2 + 20;
  }
  let k;
  if (p[8] !== cycleLength || p[9] !== hasShimmer || p[10] !== lines || p[11] !== sweepStart) k = {
    lines: lines,
    hasShimmer: hasShimmer,
    sweepStart: sweepStart,
    cycleLength: cycleLength
  }, p[8] = cycleLength, p[9] = hasShimmer, p[10] = lines, p[11] = sweepStart, p[12] = k;else k = p[12];
  let {
      lines: lines_2,
      hasShimmer: hasShimmer_2,
      sweepStart: sweepStart_2,
      cycleLength: cycleLength_2
    } = k,
    Y = gp(),
    K = hasShimmer_2 && !Y,
    [ref, Ae] = pl(K ? 50 : null),
    glimmerIndex_2 = K ? sweepStart_2 + Math.floor(Ae / 50) % cycleLength_2 : AUe,
    children;
  if (p[13] !== glimmerIndex_2 || p[14] !== lines_2) {
    let v;
    if (p[16] !== glimmerIndex_2) v = (q, me) => e(s, {
      children: q.length === 0 ? e(n, {
        children: " "
      }) : q.map((item, ue) => {
        if (item.highlight?.shimmerColor && item.highlight.color) {
          return e(n, {
            children: item.text.split("").map((z, u) => e(QGt, {
              char: z,
              index: item.start + u,
              glimmerIndex: glimmerIndex_2,
              messageColor: item.highlight.color,
              shimmerColor: item.highlight.shimmerColor
            }, u))
          }, ue);
        }
        return e(n, {
          color: item.highlight?.color,
          backgroundColor: item.highlight?.backgroundColor,
          dimColor: item.highlight?.dimColor,
          bold: item.highlight?.bold,
          italic: item.highlight?.italic,
          underline: item.highlight?.underline,
          strikethrough: item.highlight?.strikethrough,
          children: e(qs, {
            children: item.text
          })
        }, ue);
      })
    }, me), p[16] = glimmerIndex_2, p[17] = v;else v = p[17];
    children = lines_2.map(v);
    p[13] = glimmerIndex_2, p[14] = lines_2, p[15] = children;
  } else children = p[15];
  let v;
  if (p[18] !== ref || p[19] !== children) v = e(s, {
    ref: ref,
    flexDirection: "column",
    children: children
  }), p[18] = ref, p[19] = children, p[20] = v;else v = p[20];
  return v;
}
function Co(Mo) {
  return Mo.isCaretCell;
}
function dhn(t) {
  let k = S(13),
    {
      inputState: inputState,
      children: children_2,
      terminalFocus: terminalFocus,
      invert: invert,
      hidePlaceholderText: hidePlaceholderText,
      cursorCellPainted: cursorCellPainted,
      ...o
    } = t,
    {
      handleKeyDown: handleKeyDown,
      renderedValue: C,
      cursorLine: b,
      cursorColumn: R
    } = inputState,
    caret = o.focus && o.showCursor && o.parkCursor !== !1 ? {
      line: b,
      column: R,
      visible: !cursorCellPainted
    } : void 0,
    {
      handleKeyDown: I,
      handlePaste: D,
      isPasting: isPasting
    } = eEt({
      onPaste: o.onPaste,
      handleKeyDown: T => {
        if (o.onKeyDownBefore?.(T), T.defaultPrevented || T.didStopImmediatePropagation()) {
          return;
        }
        handleKeyDown(T);
      },
      onImagePaste: o.onImagePaste,
      onUnreadImagePaste: o.onUnreadImagePaste
    }),
    {
      onIsPastingChange: onIsPastingChange
    } = o;
  O(() => {
    if (onIsPastingChange) onIsPastingChange(isPasting);
  }, [isPasting, onIsPastingChange]);
  let V;
  if (k[0] === w) V = Kj(), k[0] = V;else V = k[0];
  let De = V,
    de = ot(),
    Be = ow(),
    [Y] = Br(),
    K;
  if (k[1] !== Y) K = XSn() ?? Y, k[1] = Y, k[2] = K;else K = k[2];
  let W;
  if (k[3] !== K) W = STe(K), k[3] = K, k[4] = W;else W = k[4];
  let Ae = !W,
    {
      showPlaceholder: showPlaceholder,
      renderedPlaceholder: renderedPlaceholder
    } = xt({
      placeholder: o.placeholder,
      value: o.value,
      showCursor: o.showCursor && !De,
      focus: o.focus,
      terminalFocus: terminalFocus,
      invert: invert,
      hidePlaceholderText: hidePlaceholderText || de
    }),
    children_4 = showPlaceholder ? renderedPlaceholder : void 0,
    autoFocus = o.focus !== !1,
    ref_2 = A(null);
  wS(ref_2, autoFocus);
  let f = {
      ref: ref_2,
      autoFocus: autoFocus,
      disabled: !autoFocus,
      caret: caret,
      onKeyDown: I,
      onPaste: D,
      allowPrintableKeybindings: o.allowPrintableKeybindings
    },
    ue = o.value && o.value.trim().indexOf(" ") === -1 || o.value && o.value.endsWith(" "),
    z = Boolean(o.argumentHint && o.value && ue && o.value.startsWith("/")),
    shown = inputState.shown,
    J = shown && o.showCursor ? {
      start: shown.cursorOffset,
      end: shown.cursorOffset + t7(shown.text.text.slice(shown.cursorOffset)).length
    } : void 0,
    fe;
  if (k[5] !== shown) fe = shown !== void 0 && shown.text.spans.some(item => item.start === shown.cursorOffset), k[5] = shown, k[6] = fe;else fe = k[6];
  let Q = fe,
    Ce = o.showCursor && o.highlights && !Q ? o.highlights.filter(item => item.isCaretCell || item.dimColor || o.cursorOffset < item.start || o.cursorOffset >= item.end) : o.highlights,
    children_3 = o.leadingPill?.text ?? "",
    Le = children_3 ? [{
      start: 0,
      end: children_3.length - 1,
      color: "ide",
      priority: 30
    }, ...(Ce ?? []).map(item => ({
      ...item,
      start: item.start + children_3.length,
      end: item.end + children_3.length
    }))] : Ce,
    Pt = shown ? [...YZo(Le ?? [], shown.text), ...XZo(shown.text, J)] : Le,
    start_2 = inputState.renderedRowStartOffsets[inputState.cursorLine] ?? 0,
    wt = (shown?.cursorOffset ?? children_3.length + o.cursorOffset) < start_2,
    St = Pt?.some(Co) ?? !1,
    ko = St && (terminalFocus && (cursorCellPainted || wt) || !Q && /[\r\n]/.test(o.value.normalize("NFC")[o.cursorOffset] ?? "")),
    Oo = wt && St && terminalFocus && inputState.renderedRowStartOffsets[inputState.cursorLine + 1] !== start_2 ? {
      start: start_2,
      end: start_2 + t7((shown?.text.text ?? (children_3 + o.value).normalize("NFC")).slice(start_2)).length
    } : void 0,
    ye = Pt?.flatMap(Ke => O3t(Ke, Ke.tintBeneath ?? Ke, Oo)).flatMap(te => !te.isCaretCell ? [te] : ko ? zZo(te) : [terminalFocus ? Ct(te, Be, Ae) : te]),
    highlights_2 = ye && ye.length > 0 ? VZo(ye, C, inputState.renderedRowStartOffsets) : ye;
  if (highlights_2 && highlights_2.length > 0 && !children_4 && !de) {
    return r(che, {
      ...f,
      children: [e(s, {
        flexShrink: 0,
        "aria-preserve-whitespace": !0,
        children: e(se, {
          text: C,
          highlights: highlights_2
        })
      }), z && r(n, {
        dimColor: !0,
        wrap: "truncate-end",
        children: [o.value?.endsWith(" ") ? "" : " ", o.argumentHint]
      }), children_2]
    });
  }
  const Ve = n,
    wrap = "truncate-end",
    dimColor = o.dimColor,
    We = children_4 ? r(ne, {
      children: [children_3 ? e(n, {
        color: "ide",
        children: children_3
      }) : null, e(qs, {
        children: children_4
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
  let children_5;
  if (k[7] !== Ve || k[8] !== children_2 || k[9] !== o || k[10] !== We || k[11] !== _e) children_5 = r(Ve, {
    wrap: wrap,
    dimColor: dimColor,
    children: [We, _e, children_2]
  }), k[7] = Ve, k[8] = children_2, k[9] = o, k[10] = We, k[11] = _e, k[12] = children_5;else children_5 = k[12];
  return e(che, {
    ...f,
    children: children_5
  });
}
function Ct(t, c, i) {
  let p = t.dimColor ? "inactive" : t.color;
  if (p === void 0 && t.backgroundColor === void 0) return t;
  let [h] = new Shn().feed(lr(p ?? (i ? "#ffffff" : "#000000"), c)(lr(t.backgroundColor ?? (i ? "#000000" : "#ffffff"), c, "background")("x"))).flatMap(item => item.type === "text" ? [item.style] : []);
  if (h === void 0 || !Xt(h.fg, h.bg)) return t;
  return p === void 0 ? {
    ...t,
    backgroundColor: void 0
  } : {
    ...t,
    color: void 0,
    dimColor: !1
  };
}
function xt({
  placeholder: placeholder,
  value: value,
  showCursor: showCursor,
  focus: focus,
  terminalFocus: terminalFocus_2 = !0,
  invert: invert_2 = Jfe,
  hidePlaceholderText: hidePlaceholderText_2 = !1
}) {
  let renderedPlaceholder_2 = void 0;
  if (placeholder) {
    if (hidePlaceholderText_2) renderedPlaceholder_2 = showCursor && focus && terminalFocus_2 ? invert_2(" ") : "";else if (renderedPlaceholder_2 = Se.dim(placeholder), showCursor && focus && terminalFocus_2) renderedPlaceholder_2 = placeholder.length > 0 ? invert_2(placeholder[0]) + Se.dim(placeholder.slice(1)) : invert_2(" ");
  }
  let showPlaceholder_2 = value.length === 0 && Boolean(placeholder);
  return {
    renderedPlaceholder: renderedPlaceholder_2,
    showPlaceholder: showPlaceholder_2
  };
}
function Ho(H) {
  return H.voiceState;
}
function No(xe) {
  return xe;
}
function Ro(Le) {
  return Le;
}
function Ir(t) {
  let p = S(58),
    [c] = Br(),
    i = Wu(),
    h;
  if (p[0] === w) h = Kj(), p[0] = h;else h = p[0];
  let m = h,
    preserveTrailingWhitespace = ot(),
    hidePlaceholderText_3 = B_(Ho) === "recording",
    [ref_3, b] = ZGt();
  const canPasteImages_3 = !!t.onImagePaste;
  let M;
  if (p[1] !== i || p[2] !== canPasteImages_3) M = {
    isTerminalFocused: i,
    canPasteImages: canPasteImages_3
  }, p[1] = i, p[2] = canPasteImages_3, p[3] = M;else M = p[3];
  A5n(M);
  let T;
  if (p[4] !== b || p[5] !== i) T = !i ? No : b ? () => Se.hex(b.hex)(b.char) : m ? Ro : Jfe, p[4] = b, p[5] = i, p[6] = T;else T = p[6];
  let invert_3 = T;
  const {
      value: value_2,
      onChange: onChange,
      onSubmit: onSubmit,
      onExit: onExit,
      onExitMessage: onExitMessage,
      onEscapeMessage: onEscapeMessage,
      historyOnClear: historyOnClear,
      onLeftArrowOnEmpty: onLeftArrowOnEmpty,
      leftArrowConfirmHint: leftArrowConfirmHint,
      onHistoryReset: onHistoryReset,
      onHistoryUp: onHistoryUp,
      onHistoryDown: onHistoryDown,
      focus: focus_2,
      mask: mask,
      maskWhole: maskWhole,
      multiline: multiline,
      disableBackslashReturn: disableBackslashReturn,
      clearOnSubmit: clearOnSubmit,
      disableCtrlCClear: disableCtrlCClear
    } = t,
    cursorChar = t.showCursor && !preserveTrailingWhitespace ? " " : "";
  let themeText;
  if (p[7] !== c) themeText = lr("text", c), p[7] = c, p[8] = themeText;else themeText = p[8];
  const virtualTexts = preserveTrailingWhitespace ? void 0 : t.virtualTexts;
  let fe;
  if (p[9] !== invert_3 || p[10] !== preserveTrailingWhitespace || p[11] !== t.clearOnSubmit || p[12] !== t.columns || p[13] !== t.commitEdit || p[14] !== t.cursorOffset || p[15] !== t.disableBackslashReturn || p[16] !== t.disableCtrlCClear || p[17] !== t.disableCursorMovementForUpDownKeys || p[18] !== t.disableEscapeDoublePress || p[19] !== t.editRelay || p[20] !== t.focus || p[21] !== t.getInputMode || p[22] !== t.getPastedContents || p[23] !== t.historyOnClear || p[24] !== t.inlineGhostText || p[25] !== t.inputFilter || p[26] !== t.leadingPill || p[27] !== t.leftArrowConfirmHint || p[28] !== t.mask || p[29] !== t.maskWhole || p[30] !== t.maxVisibleLines || p[31] !== t.multiline || p[32] !== t.onChange || p[33] !== t.onChangeCursorOffset || p[34] !== t.onEscapeMessage || p[35] !== t.onExit || p[36] !== t.onExitMessage || p[37] !== t.onHistoryDown || p[38] !== t.onHistoryReset || p[39] !== t.onHistoryUp || p[40] !== t.onImagePaste || p[41] !== t.onLeftArrowOnEmpty || p[42] !== t.onSubmit || p[43] !== t.value || p[44] !== cursorChar || p[45] !== themeText || p[46] !== virtualTexts) fe = {
    value: value_2,
    onChange: onChange,
    onSubmit: onSubmit,
    onExit: onExit,
    onExitMessage: onExitMessage,
    onEscapeMessage: onEscapeMessage,
    historyOnClear: historyOnClear,
    onLeftArrowOnEmpty: onLeftArrowOnEmpty,
    leftArrowConfirmHint: leftArrowConfirmHint,
    onHistoryReset: onHistoryReset,
    onHistoryUp: onHistoryUp,
    onHistoryDown: onHistoryDown,
    focus: focus_2,
    mask: mask,
    maskWhole: maskWhole,
    multiline: multiline,
    disableBackslashReturn: disableBackslashReturn,
    clearOnSubmit: clearOnSubmit,
    disableCtrlCClear: disableCtrlCClear,
    cursorChar: cursorChar,
    preserveTrailingWhitespace: preserveTrailingWhitespace,
    invert: invert_3,
    themeText: themeText,
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
    virtualTexts: virtualTexts
  }, p[9] = invert_3, p[10] = preserveTrailingWhitespace, p[11] = t.clearOnSubmit, p[12] = t.columns, p[13] = t.commitEdit, p[14] = t.cursorOffset, p[15] = t.disableBackslashReturn, p[16] = t.disableCtrlCClear, p[17] = t.disableCursorMovementForUpDownKeys, p[18] = t.disableEscapeDoublePress, p[19] = t.editRelay, p[20] = t.focus, p[21] = t.getInputMode, p[22] = t.getPastedContents, p[23] = t.historyOnClear, p[24] = t.inlineGhostText, p[25] = t.inputFilter, p[26] = t.leadingPill, p[27] = t.leftArrowConfirmHint, p[28] = t.mask, p[29] = t.maskWhole, p[30] = t.maxVisibleLines, p[31] = t.multiline, p[32] = t.onChange, p[33] = t.onChangeCursorOffset, p[34] = t.onEscapeMessage, p[35] = t.onExit, p[36] = t.onExitMessage, p[37] = t.onHistoryDown, p[38] = t.onHistoryReset, p[39] = t.onHistoryUp, p[40] = t.onImagePaste, p[41] = t.onLeftArrowOnEmpty, p[42] = t.onSubmit, p[43] = t.value, p[44] = cursorChar, p[45] = themeText, p[46] = virtualTexts, p[47] = fe;else fe = p[47];
  let inputState_2 = uhn(fe);
  const cursorCellPainted_2 = b != null;
  let children_6;
  if (p[48] !== invert_3 || p[49] !== i || p[50] !== hidePlaceholderText_3 || p[51] !== t || p[52] !== cursorCellPainted_2 || p[53] !== inputState_2) children_6 = e(dhn, {
    inputState: inputState_2,
    terminalFocus: i,
    highlights: t.highlights,
    invert: invert_3,
    hidePlaceholderText: hidePlaceholderText_3,
    cursorCellPainted: cursorCellPainted_2,
    ...t
  }), p[48] = invert_3, p[49] = i, p[50] = hidePlaceholderText_3, p[51] = t, p[52] = cursorCellPainted_2, p[53] = inputState_2, p[54] = children_6;else children_6 = p[54];
  let Ce;
  if (p[55] !== ref_3 || p[56] !== children_6) Ce = e(s, {
    ref: ref_3,
    children: children_6
  }), p[55] = ref_3, p[56] = children_6, p[57] = Ce;else Ce = p[57];
  return Ce;
}
export { R5n, A5n, QGt, dhn, Ir };