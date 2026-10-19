// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { oh } from "B:/~BUN/root/chunk-275mme56.js";
import { oc } from "B:/~BUN/root/chunk-t7y4rt40.js";
import { zte, he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { s, n, Go, dn, ot, Kre, Aa } from "B:/~BUN/root/chunk-damrp3r8.js";
import { LF } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { Ro } from "B:/~BUN/root/chunk-exdm7pa7.js";
import { br } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { xy, X2t, qvt, Ant } from "B:/~BUN/root/chunk-vw193yjw.js";
import { Dao, Lao, Fao, Hao } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { WCe, Vu } from "B:/~BUN/root/chunk-44n8zjk2.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Kn } from "B:/~BUN/root/chunk-dsby0gnt.js";
import { xds } from "B:/~BUN/root/chunk-tx0dq5y3.js";
import { eb } from "B:/~BUN/root/chunk-gvcmagy5.js";
import { P, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { iQ } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
var key = "clipboard-image-hint",
  st = 1000,
  nt = 30000,
  Oe = {
    id: "clipboard-image-hint",
    deps: t => [t.isTerminalFocused, t.canPasteImages, t.addNotification, t.clock],
    setup() {
      let t = null,
        h = 0,
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
          if (g - h < nt) return;
          if (await xds()) h = g, addNotification({
            key: key,
            kind: "contextual",
            text: `Image in clipboard \xB7 ${eb("chat:imagePaste", "Chat", "ctrl+v")} to paste`,
            priority: "immediate",
            timeoutMs: 8000
          });
        }, st), () => {
          i?.(), i = null;
        };
      };
    }
  };
B();
function $wn(t, h) {
  let [i] = y(() => t.map(item => {
      let m = item.setup();
      return {
        effect: typeof m === "function" ? m : m.effect,
        dispose: typeof m === "function" ? void 0 : m.dispose,
        deps: null,
        cleanup: void 0
      };
    })),
    p = A(h);
  P(() => {
    p.current = h;
    let d = () => p.current,
      m = [];
    t.forEach((item, index) => {
      let slot = i[index];
      if (!slot) return;
      let deps = item.deps ? item.deps(h) : [];
      if (slot.deps !== null && lt(slot.deps, deps)) return;
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
    } of m) slot_3.deps = deps_2, slot_3.cleanup = slot_3.effect(h, d);
  }), P(() => () => {
    for (let d of i) d.cleanup?.(), d.cleanup = void 0, d.deps = null, d.dispose?.();
  }, [i]);
}
function lt(t, h) {
  if (t.length !== h.length) return !1;
  for (let i = 0; i < t.length; i++) if (!Object.is(t[i], h[i])) return !1;
  return !0;
}
var at = [Oe];
function Uwn({
  isTerminalFocused: isTerminalFocused_2,
  canPasteImages: canPasteImages_2
}) {
  let {
      addNotification: addNotification_2
    } = Ro(),
    clock_2 = dn();
  $wn(at, {
    isTerminalFocused: isTerminalFocused_2,
    canPasteImages: canPasteImages_2,
    addNotification: addNotification_2,
    clock: clock_2
  });
}
B();
B();
function Vvt(t) {
  let b = w(3),
    {
      char: h,
      index: index_2,
      glimmerIndex: glimmerIndex,
      messageColor: messageColor,
      shimmerColor: shimmerColor
    } = t,
    c = index_2 === glimmerIndex,
    o = Math.abs(index_2 - glimmerIndex) === 1;
  const color = c || o ? shimmerColor : messageColor;
  let k;
  if (b[0] !== h || b[1] !== color) k = e(n, {
    color: color,
    children: h
  }), b[0] = h, b[1] = color, b[2] = k;else k = b[2];
  return k;
}
function Ht(H) {
  return H.shimmerColor;
}
function oe(t) {
  let p = w(25),
    {
      text: text,
      highlights: highlights
    } = t,
    lines;
  if (p[0] !== highlights || p[1] !== text) {
    let m = Lao(text, highlights);
    lines = [[]];
    let start = 0;
    for (const o of m) {
      let g = o.text.split(`
`);
      for (let u = 0; u < g.length; u++) {
        if (u > 0) lines.push([]), start = start + 1;
        let text_2 = g[u];
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
  let k;
  if (p[3] !== highlights) k = highlights.some(Ht), p[3] = highlights, p[4] = k;else k = p[4];
  let hasShimmer = k,
    sweepStart = 0,
    cycleLength = 1;
  if (hasShimmer) {
    let Infinity_2 = Infinity;
    let R = -Infinity;
    if (p[5] !== R || p[7] !== highlights || p[8] !== Infinity_2) {
      p[6] = R, p[9] = Infinity_2;
      for (const F of highlights) {
        if (F.shimmerColor) Infinity_2 = Math.min(Infinity_2, F.start), R = Math.max(R, F.end);
      }
      p[5] = p[6], p[7] = highlights, p[8] = p[9], p[10] = Infinity_2, p[11] = R;
    } else Infinity_2 = p[10], R = p[11];
    sweepStart = Infinity_2 - 10, cycleLength = R - Infinity_2 + 20;
  }
  let q;
  if (p[12] !== cycleLength || p[13] !== hasShimmer || p[14] !== lines || p[15] !== sweepStart) q = {
    lines: lines,
    hasShimmer: hasShimmer,
    sweepStart: sweepStart,
    cycleLength: cycleLength
  }, p[12] = cycleLength, p[13] = hasShimmer, p[14] = lines, p[15] = sweepStart, p[16] = q;else q = p[16];
  let {
      lines: lines_2,
      hasShimmer: hasShimmer_2,
      sweepStart: sweepStart_2,
      cycleLength: cycleLength_2
    } = q,
    He = Vu(),
    W = hasShimmer_2 && !He,
    [ref, ne] = Aa(W ? 50 : null),
    glimmerIndex_2 = W ? sweepStart_2 + Math.floor(ne / 50) % cycleLength_2 : WCe,
    children;
  if (p[17] !== glimmerIndex_2 || p[18] !== lines_2) {
    let E;
    if (p[20] !== glimmerIndex_2) E = (C, Ne) => e(s, {
      children: C.length === 0 ? e(n, {
        children: " "
      }) : C.map((item, G) => {
        if (item.highlight?.shimmerColor && item.highlight.color) {
          return e(n, {
            children: item.text.split("").map((X, M) => e(Vvt, {
              char: X,
              index: item.start + M,
              glimmerIndex: glimmerIndex_2,
              messageColor: item.highlight.color,
              shimmerColor: item.highlight.shimmerColor
            }, M))
          }, G);
        }
        return e(n, {
          color: item.highlight?.color,
          backgroundColor: item.highlight?.backgroundColor,
          dimColor: item.highlight?.dimColor,
          bold: item.highlight?.bold,
          italic: item.highlight?.italic,
          underline: item.highlight?.underline,
          strikethrough: item.highlight?.strikethrough,
          children: e(Go, {
            children: item.text
          })
        }, G);
      })
    }, Ne), p[20] = glimmerIndex_2, p[21] = E;else E = p[21];
    children = lines_2.map(E);
    p[17] = glimmerIndex_2, p[18] = lines_2, p[19] = children;
  } else children = p[19];
  let E;
  if (p[22] !== ref || p[23] !== children) E = e(s, {
    ref: ref,
    flexDirection: "column",
    children: children
  }), p[22] = ref, p[23] = children, p[24] = E;else E = p[24];
  return E;
}
function K2t(t) {
  let q = w(7),
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
      renderedValue: u,
      cursorLine: b,
      cursorColumn: k
    } = inputState,
    caret = o.focus && o.showCursor && o.parkCursor !== !1 ? {
      line: b,
      column: k,
      visible: !cursorCellPainted
    } : void 0,
    {
      handleKeyDown: v,
      handlePaste: N,
      isPasting: isPasting
    } = Ant({
      onPaste: o.onPaste,
      handleKeyDown: T => {
        if (o.onKeyDownBefore?.(T), T.defaultPrevented || T.didStopImmediatePropagation()) {
          return;
        }
        handleKeyDown(T);
      },
      onImagePaste: o.onImagePaste
    }),
    {
      onIsPastingChange: onIsPastingChange
    } = o;
  P(() => {
    if (onIsPastingChange) onIsPastingChange(isPasting);
  }, [isPasting, onIsPastingChange]);
  let _;
  if (q[0] === S) _ = LF(), q[0] = _;else _ = q[0];
  let Se = _,
    ve = ot(),
    {
      showPlaceholder: showPlaceholder,
      renderedPlaceholder: renderedPlaceholder
    } = Je({
      placeholder: o.placeholder,
      value: o.value,
      showCursor: o.showCursor && !Se,
      focus: o.focus,
      terminalFocus: terminalFocus,
      invert: invert,
      hidePlaceholderText: hidePlaceholderText || ve
    }),
    children_4 = showPlaceholder ? renderedPlaceholder : void 0,
    autoFocus = o.focus !== !1,
    ref_2 = A(null);
  xy(ref_2, autoFocus);
  let O = {
      ref: ref_2,
      autoFocus: autoFocus,
      disabled: !autoFocus,
      caret: caret,
      onKeyDown: v,
      onPaste: N,
      allowPrintableKeybindings: o.allowPrintableKeybindings
    },
    j = o.value && o.value.trim().indexOf(" ") === -1 || o.value && o.value.endsWith(" "),
    E = Boolean(o.argumentHint && o.value && j && o.value.startsWith("/")),
    shown = inputState.shown,
    Ne = shown && o.showCursor ? {
      start: shown.cursorOffset,
      end: shown.cursorOffset + iQ(shown.text.text.slice(shown.cursorOffset)).length
    } : void 0,
    G = shown !== void 0 && shown.text.spans.some(item => item.start === shown.cursorOffset),
    M = o.showCursor && o.highlights && !G ? o.highlights.filter(item => item.dimColor || o.cursorOffset < item.start || o.cursorOffset >= item.end) : o.highlights,
    children_3 = o.leadingPill?.text ?? "",
    z = children_3 ? [{
      start: 0,
      end: children_3.length - 1,
      color: "ide",
      priority: 30
    }, ...(M ?? []).map(item => ({
      ...item,
      start: item.start + children_3.length,
      end: item.end + children_3.length
    }))] : M,
    L = shown ? [...Fao(z ?? [], shown.text), ...Hao(shown.text, Ne)] : z,
    highlights_2 = L && L.length > 0 ? Dao(L, u, inputState.renderedRowStartOffsets) : L;
  if (highlights_2 && highlights_2.length > 0 && !children_4) {
    return r(Kre, {
      ...O,
      children: [e(s, {
        flexShrink: 0,
        "aria-preserve-whitespace": !0,
        children: e(oe, {
          text: u,
          highlights: highlights_2
        })
      }), E && r(n, {
        dimColor: !0,
        wrap: "truncate-end",
        children: [o.value?.endsWith(" ") ? "" : " ", o.argumentHint]
      }), children_2]
    });
  }
  const le = n,
    wrap = "truncate-end",
    dimColor = o.dimColor,
    Re = children_4 ? r(Q, {
      children: [children_3 ? e(n, {
        color: "ide",
        children: children_3
      }) : null, e(Go, {
        children: children_4
      })]
    }) : e(n, {
      "aria-preserve-whitespace": !0,
      children: e(Go, {
        children: u
      })
    }),
    ke = E && r(n, {
      dimColor: !0,
      children: [o.value?.endsWith(" ") ? "" : " ", o.argumentHint]
    });
  let children_5;
  if (q[1] !== le || q[2] !== children_2 || q[3] !== o || q[4] !== Re || q[5] !== ke) children_5 = r(le, {
    wrap: wrap,
    dimColor: dimColor,
    children: [Re, ke, children_2]
  }), q[1] = le, q[2] = children_2, q[3] = o, q[4] = Re, q[5] = ke, q[6] = children_5;else children_5 = q[6];
  return e(Kre, {
    ...O,
    children: children_5
  });
}
function Je({
  placeholder: placeholder,
  value: value,
  showCursor: showCursor,
  focus: focus,
  terminalFocus: terminalFocus_2 = !0,
  invert: invert_2 = zte,
  hidePlaceholderText: hidePlaceholderText_2 = !1
}) {
  let renderedPlaceholder_2 = void 0;
  if (placeholder) {
    if (hidePlaceholderText_2) renderedPlaceholder_2 = showCursor && focus && terminalFocus_2 ? invert_2(" ") : "";else if (renderedPlaceholder_2 = he.dim(placeholder), showCursor && focus && terminalFocus_2) renderedPlaceholder_2 = placeholder.length > 0 ? invert_2(placeholder[0]) + he.dim(placeholder.slice(1)) : invert_2(" ");
  }
  let showPlaceholder_2 = value.length === 0 && Boolean(placeholder);
  return {
    renderedPlaceholder: renderedPlaceholder_2,
    showPlaceholder: showPlaceholder_2
  };
}
function oo(le) {
  return le.voiceState;
}
function ro(et) {
  return et;
}
function io(tt) {
  return tt;
}
function Lr(t) {
  let p = w(58),
    [h] = br(),
    i = oc(),
    d;
  if (p[0] === S) d = LF(), p[0] = d;else d = p[0];
  let m = d,
    preserveTrailingWhitespace = ot(),
    hidePlaceholderText_3 = oh(oo) === "recording",
    [ref_3, b] = qvt();
  const canPasteImages_3 = !!t.onImagePaste;
  let D;
  if (p[1] !== i || p[2] !== canPasteImages_3) D = {
    isTerminalFocused: i,
    canPasteImages: canPasteImages_3
  }, p[1] = i, p[2] = canPasteImages_3, p[3] = D;else D = p[3];
  Uwn(D);
  let T;
  if (p[4] !== b || p[5] !== i) T = !i ? ro : b ? () => he.hex(b.hex)(b.char) : m ? io : zte, p[4] = b, p[5] = i, p[6] = T;else T = p[6];
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
      multiline: multiline,
      disableBackslashReturn: disableBackslashReturn,
      clearOnSubmit: clearOnSubmit,
      disableCtrlCClear: disableCtrlCClear
    } = t,
    cursorChar = t.showCursor && !preserveTrailingWhitespace ? " " : "",
    highlightPastedText = t.highlightPastedText;
  let themeText;
  if (p[7] !== h) themeText = Kn("text", h), p[7] = h, p[8] = themeText;else themeText = p[8];
  const virtualTexts = preserveTrailingWhitespace ? void 0 : t.virtualTexts;
  let Y;
  if (p[9] !== invert_3 || p[10] !== preserveTrailingWhitespace || p[11] !== t.clearOnSubmit || p[12] !== t.columns || p[13] !== t.commitEdit || p[14] !== t.cursorOffset || p[15] !== t.disableBackslashReturn || p[16] !== t.disableCtrlCClear || p[17] !== t.disableCursorMovementForUpDownKeys || p[18] !== t.disableEscapeDoublePress || p[19] !== t.editRelay || p[20] !== t.focus || p[21] !== t.getInputMode || p[22] !== t.getPastedContents || p[23] !== t.highlightPastedText || p[24] !== t.historyOnClear || p[25] !== t.inlineGhostText || p[26] !== t.inputFilter || p[27] !== t.leadingPill || p[28] !== t.leftArrowConfirmHint || p[29] !== t.mask || p[30] !== t.maxVisibleLines || p[31] !== t.multiline || p[32] !== t.onChange || p[33] !== t.onChangeCursorOffset || p[34] !== t.onEscapeMessage || p[35] !== t.onExit || p[36] !== t.onExitMessage || p[37] !== t.onHistoryDown || p[38] !== t.onHistoryReset || p[39] !== t.onHistoryUp || p[40] !== t.onImagePaste || p[41] !== t.onLeftArrowOnEmpty || p[42] !== t.onSubmit || p[43] !== t.value || p[44] !== cursorChar || p[45] !== themeText || p[46] !== virtualTexts) Y = {
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
    multiline: multiline,
    disableBackslashReturn: disableBackslashReturn,
    clearOnSubmit: clearOnSubmit,
    disableCtrlCClear: disableCtrlCClear,
    cursorChar: cursorChar,
    preserveTrailingWhitespace: preserveTrailingWhitespace,
    highlightPastedText: highlightPastedText,
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
    dim: he.dim,
    virtualTexts: virtualTexts
  }, p[9] = invert_3, p[10] = preserveTrailingWhitespace, p[11] = t.clearOnSubmit, p[12] = t.columns, p[13] = t.commitEdit, p[14] = t.cursorOffset, p[15] = t.disableBackslashReturn, p[16] = t.disableCtrlCClear, p[17] = t.disableCursorMovementForUpDownKeys, p[18] = t.disableEscapeDoublePress, p[19] = t.editRelay, p[20] = t.focus, p[21] = t.getInputMode, p[22] = t.getPastedContents, p[23] = t.highlightPastedText, p[24] = t.historyOnClear, p[25] = t.inlineGhostText, p[26] = t.inputFilter, p[27] = t.leadingPill, p[28] = t.leftArrowConfirmHint, p[29] = t.mask, p[30] = t.maxVisibleLines, p[31] = t.multiline, p[32] = t.onChange, p[33] = t.onChangeCursorOffset, p[34] = t.onEscapeMessage, p[35] = t.onExit, p[36] = t.onExitMessage, p[37] = t.onHistoryDown, p[38] = t.onHistoryReset, p[39] = t.onHistoryUp, p[40] = t.onImagePaste, p[41] = t.onLeftArrowOnEmpty, p[42] = t.onSubmit, p[43] = t.value, p[44] = cursorChar, p[45] = themeText, p[46] = virtualTexts, p[47] = Y;else Y = p[47];
  let inputState_2 = X2t(Y);
  const cursorCellPainted_2 = b != null;
  let children_6;
  if (p[48] !== invert_3 || p[49] !== i || p[50] !== hidePlaceholderText_3 || p[51] !== t || p[52] !== cursorCellPainted_2 || p[53] !== inputState_2) children_6 = e(K2t, {
    inputState: inputState_2,
    terminalFocus: i,
    highlights: t.highlights,
    invert: invert_3,
    hidePlaceholderText: hidePlaceholderText_3,
    cursorCellPainted: cursorCellPainted_2,
    ...t
  }), p[48] = invert_3, p[49] = i, p[50] = hidePlaceholderText_3, p[51] = t, p[52] = cursorCellPainted_2, p[53] = inputState_2, p[54] = children_6;else children_6 = p[54];
  let Ze;
  if (p[55] !== ref_3 || p[56] !== children_6) Ze = e(s, {
    ref: ref_3,
    children: children_6
  }), p[55] = ref_3, p[56] = children_6, p[57] = Ze;else Ze = p[57];
  return Ze;
}
export { $wn, Uwn, Vvt, K2t, Lr };