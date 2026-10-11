// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { _g } from "B:/~BUN/root/chunk-rp3kg713.js";
import { Dl } from "B:/~BUN/root/chunk-1223v177.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { Zr } from "B:/~BUN/root/chunk-cpg4rjtx.js";
import { Q6, pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { Zn } from "B:/~BUN/root/chunk-1x7a47hz.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { s, n, Jr, _t, w5, Ta } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Gbe, dVt, uVt, B8r, PH } from "B:/~BUN/root/chunk-trcn2d68.js";
import { o_t, GJe, gje, Mf } from "B:/~BUN/root/chunk-9jvj58wt.js";
import { VJe, Zv } from "B:/~BUN/root/chunk-bbgg7kv0.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Pn } from "B:/~BUN/root/chunk-106hagsg.js";
import { eio } from "B:/~BUN/root/chunk-q3x7vf9d.js";
import { bS } from "B:/~BUN/root/chunk-pwpgxxsc.js";
import { R, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function KGt(t, p) {
  let [i] = g(() => t.map(item => {
      let l = item.setup();
      return {
        effect: typeof l === "function" ? l : l.effect,
        dispose: typeof l === "function" ? void 0 : l.dispose,
        deps: null,
        cleanup: void 0
      };
    })),
    h = T(p);
  R(() => {
    h.current = p;
    let d = () => h.current,
      l = [];
    t.forEach((item, index) => {
      let slot = i[index];
      if (!slot) return;
      let deps = item.deps ? item.deps(p) : [];
      if (slot.deps !== null && ot(slot.deps, deps)) return;
      l.push({
        slot: slot,
        deps: deps
      });
    });
    for (let {
      slot: slot_2
    } of l) slot_2.cleanup?.(), slot_2.cleanup = void 0;
    for (let {
      slot: slot_3,
      deps: deps_2
    } of l) slot_3.deps = deps_2, slot_3.cleanup = slot_3.effect(p, d);
  }), R(() => () => {
    for (let d of i) d.cleanup?.(), d.cleanup = void 0, d.deps = null, d.dispose?.();
  }, [i]);
}
function ot(t, p) {
  if (t.length !== p.length) return !1;
  for (let i = 0; i < t.length; i++) if (!Object.is(t[i], p[i])) return !1;
  return !0;
}
N();
var key = "clipboard-image-hint",
  rt = 1000,
  st = 30000,
  Ne = {
    id: "clipboard-image-hint",
    deps: t => [t.isTerminalFocused, t.canPasteImages, t.addNotification, t.clock],
    setup() {
      let t = null,
        p = 0,
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
          let u = Date.now();
          if (u - p < st) return;
          if (await eio()) p = u, addNotification({
            key: key,
            kind: "contextual",
            text: `Image in clipboard \xB7 ${bS("chat:imagePaste", "Chat", "ctrl+v")} to paste`,
            priority: "immediate",
            timeoutMs: 8000
          });
        }, rt), () => {
          i?.(), i = null;
        };
      };
    }
  };
var nt = [Ne];
function YGt({
  isTerminalFocused: isTerminalFocused_2,
  canPasteImages: canPasteImages_2
}) {
  let {
      addNotification: addNotification_2
    } = Zr(),
    clock_2 = Yt();
  KGt(nt, {
    isTerminalFocused: isTerminalFocused_2,
    canPasteImages: canPasteImages_2,
    addNotification: addNotification_2,
    clock: clock_2
  });
}
N();
function ae(t, p, i) {
  let h = wt(p).split(`
`).map(item => item.length),
    d = [],
    renderedStart = 0;
  for (let [a, textStart] of i.entries()) {
    let length = h[a] ?? 0;
    d.push({
      textStart: textStart,
      renderedStart: renderedStart,
      length: length
    }), renderedStart += length + 1;
  }
  return t.map(item => ({
    ...item,
    start: Ae(d, item.start, !1),
    end: Ae(d, item.end, !0)
  })).filter(item => item.end > item.start);
}
function Ae(t, p, i) {
  let h = 0,
    d = t.length;
  while (h < d) {
    let a = h + d >>> 1,
      textStart_2 = t[a].textStart;
    if (i ? textStart_2 < p : textStart_2 <= p) h = a + 1;else d = a;
  }
  let l = t[h - 1];
  return l ? l.renderedStart + Math.min(p - l.textStart, l.length) : 0;
}
function he(text, p) {
  if (p.length === 0) return [{
    text: text,
    start: 0
  }];
  let i = [...p].sort((itemA, itemB) => {
      if (itemA.start !== itemB.start) return itemA.start - itemB.start;
      return itemB.priority - itemA.priority;
    }),
    h = [],
    d = [];
  for (let l of i) {
    if (l.start === l.end) continue;
    if (!d.some(item => l.start >= item.start && l.start < item.end || l.end > item.start && l.end <= item.end || l.start <= item.start && l.end >= item.end)) h.push(l), d.push({
      start: l.start,
      end: l.end
    });
  }
  return new Oe(text).segment(h);
}
class Oe {
  text;
  tokens;
  visiblePos = 0;
  stringPos = 0;
  tokenIdx = 0;
  charIdx = 0;
  codes = [];
  constructor(t) {
    this.text = t;
    this.tokens = B8r(t);
  }
  segment(t) {
    let p = [];
    for (let h of t) {
      let d = this.segmentTo(h.start);
      if (d) p.push(d);
      let l = this.segmentTo(h.end);
      if (l) l.highlight = h, p.push(l);
    }
    let i = this.segmentTo(1 / 0);
    if (i) p.push(i);
    return p;
  }
  segmentTo(t) {
    if (this.tokenIdx >= this.tokens.length || t <= this.visiblePos) return null;
    let p = this.visiblePos;
    while (this.tokenIdx < this.tokens.length) {
      let u = this.tokens[this.tokenIdx];
      if (u.type !== "ansi") break;
      this.codes.push(u), this.stringPos += u.code.length, this.tokenIdx++;
    }
    let stringPos = this.stringPos,
      h = [...this.codes];
    while (this.visiblePos < t && this.tokenIdx < this.tokens.length) {
      let u = this.tokens[this.tokenIdx];
      if (u.type === "ansi") this.codes.push(u), this.stringPos += u.code.length, this.tokenIdx++;else {
        let f = t - this.visiblePos,
          C = u.value.length - this.charIdx,
          y = Math.min(f, C);
        if (this.stringPos += y, this.visiblePos += y, this.charIdx += y, this.charIdx >= u.value.length) this.tokenIdx++, this.charIdx = 0;
      }
    }
    if (this.stringPos === stringPos) return null;
    let d = Ee(h),
      l = Ee(this.codes);
    this.codes = l;
    let a = Gbe(d),
      o = Gbe(uVt(l));
    return {
      text: a + this.text.substring(stringPos, this.stringPos) + o,
      start: p
    };
  }
}
function Ee(t) {
  return dVt(t).filter(item => item.code !== item.endCode);
}
N();
function Y(t) {
  let C = w(3),
    {
      char: p,
      index: index_2,
      glimmerIndex: glimmerIndex,
      messageColor: messageColor,
      shimmerColor: shimmerColor
    } = t,
    a = index_2 === glimmerIndex,
    o = Math.abs(index_2 - glimmerIndex) === 1;
  const color = a || o ? shimmerColor : messageColor;
  let y;
  if (C[0] !== p || C[1] !== color) y = e(n, {
    color: color,
    children: p
  }), C[0] = p, C[1] = color, C[2] = y;else y = C[2];
  return y;
}
function St(ke) {
  return ke.shimmerColor;
}
function ee(t) {
  let h = w(23),
    {
      text: text_2,
      highlights: highlights
    } = t,
    lines;
  if (h[0] !== highlights || h[1] !== text_2) {
    let l = he(text_2, highlights);
    lines = [[]];
    let start = 0;
    for (const o of l) {
      let u = o.text.split(`
`);
      for (let f = 0; f < u.length; f++) {
        if (f > 0) lines.push([]), start = start + 1;
        let text_3 = u[f];
        if (text_3.length > 0) lines.at(-1).push({
          text: text_3,
          highlight: o.highlight,
          start: start
        });
        start = start + text_3.length;
      }
    }
    h[0] = highlights, h[1] = text_2, h[2] = lines;
  } else lines = h[2];
  let y;
  if (h[3] !== highlights) y = highlights.some(St), h[3] = highlights, h[4] = y;else y = h[4];
  let hasShimmer = y,
    sweepStart = 0,
    cycleLength = 1;
  if (hasShimmer) {
    let Infinity_2 = Infinity;
    let H = -Infinity;
    if (h[5] !== H || h[6] !== highlights || h[7] !== Infinity_2) {
      for (const D of highlights) {
        if (D.shimmerColor) Infinity_2 = Math.min(Infinity_2, D.start), H = Math.max(H, D.end);
      }
      h[5] = H, h[6] = highlights, h[7] = Infinity_2, h[8] = Infinity_2, h[9] = H;
    } else Infinity_2 = h[8], H = h[9];
    sweepStart = Infinity_2 - 10, cycleLength = H - Infinity_2 + 20;
  }
  let G;
  if (h[10] !== cycleLength || h[11] !== hasShimmer || h[12] !== lines || h[13] !== sweepStart) G = {
    lines: lines,
    hasShimmer: hasShimmer,
    sweepStart: sweepStart,
    cycleLength: cycleLength
  }, h[10] = cycleLength, h[11] = hasShimmer, h[12] = lines, h[13] = sweepStart, h[14] = G;else G = h[14];
  let {
      lines: lines_2,
      hasShimmer: hasShimmer_2,
      sweepStart: sweepStart_2,
      cycleLength: cycleLength_2
    } = G,
    we = Zv(),
    K = hasShimmer_2 && !we,
    [ref, re] = Ta(K ? 50 : null),
    glimmerIndex_2 = K ? sweepStart_2 + Math.floor(re / 50) % cycleLength_2 : VJe,
    children;
  if (h[15] !== glimmerIndex_2 || h[16] !== lines_2) {
    let E;
    if (h[18] !== glimmerIndex_2) E = (_, se) => e(s, {
      children: _.length === 0 ? e(n, {
        children: " "
      }) : _.map((item, O) => {
        if (item.highlight?.shimmerColor && item.highlight.color) {
          return e(n, {
            children: item.text.split("").map((W, k) => e(Y, {
              char: W,
              index: item.start + k,
              glimmerIndex: glimmerIndex_2,
              messageColor: item.highlight.color,
              shimmerColor: item.highlight.shimmerColor
            }, k))
          }, O);
        }
        return e(n, {
          color: item.highlight?.color,
          dimColor: item.highlight?.dimColor,
          underline: item.highlight?.underline,
          children: e(Jr, {
            children: item.text
          })
        }, O);
      })
    }, se), h[18] = glimmerIndex_2, h[19] = E;else E = h[19];
    children = lines_2.map(E);
    h[15] = glimmerIndex_2, h[16] = lines_2, h[17] = children;
  } else children = h[17];
  let E;
  if (h[20] !== ref || h[21] !== children) E = e(s, {
    ref: ref,
    flexDirection: "column",
    children: children
  }), h[20] = ref, h[21] = children, h[22] = E;else E = h[22];
  return E;
}
function r_t(t) {
  let G = w(7),
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
      renderedValue: f,
      cursorLine: C,
      cursorColumn: y
    } = inputState,
    caret = o.focus && o.showCursor ? {
      line: C,
      column: y,
      visible: !cursorCellPainted
    } : void 0,
    {
      handleKeyDown: P,
      handlePaste: v,
      isPasting: isPasting
    } = gje({
      onPaste: o.onPaste,
      handleKeyDown: I => {
        if (o.onKeyDownBefore?.(I), I.defaultPrevented || I.didStopImmediatePropagation()) {
          return;
        }
        handleKeyDown(I);
      },
      onImagePaste: o.onImagePaste,
      onAudioPaste: o.onAudioPaste
    }),
    {
      onIsPastingChange: onIsPastingChange
    } = o;
  R(() => {
    if (onIsPastingChange) onIsPastingChange(isPasting);
  }, [isPasting, onIsPastingChange]);
  let L;
  if (G[0] === S) L = PH(), G[0] = L;else L = G[0];
  let ve = L,
    Se = _t(),
    {
      showPlaceholder: showPlaceholder,
      renderedPlaceholder: renderedPlaceholder
    } = Ze({
      placeholder: o.placeholder,
      value: o.value,
      showCursor: o.showCursor && !ve,
      focus: o.focus,
      terminalFocus: terminalFocus,
      invert: invert,
      hidePlaceholderText: hidePlaceholderText || Se
    }),
    children_4 = showPlaceholder ? renderedPlaceholder : void 0,
    autoFocus = o.focus !== !1,
    ref_2 = T(null);
  Mf(ref_2, autoFocus);
  let A = {
      ref: ref_2,
      autoFocus: autoFocus,
      disabled: !autoFocus,
      caret: caret,
      onKeyDown: P,
      onPaste: v,
      allowPrintableKeybindings: o.allowPrintableKeybindings
    },
    U = o.value && o.value.trim().indexOf(" ") === -1 || o.value && o.value.endsWith(" "),
    E = Boolean(o.argumentHint && o.value && U && o.value.startsWith("/")),
    se = o.showCursor && o.highlights ? o.highlights.filter(item => item.dimColor || o.cursorOffset < item.start || o.cursorOffset >= item.end) : o.highlights,
    children_3 = o.leadingPill?.text ?? "",
    W = children_3 ? [{
      start: 0,
      end: children_3.length - 1,
      color: "ide",
      priority: 30
    }, ...(se ?? []).map(item => ({
      ...item,
      start: item.start + children_3.length,
      end: item.end + children_3.length
    }))] : se,
    highlights_2 = W && W.length > 0 ? ae(W, f, inputState.renderedRowStartOffsets) : W;
  if (highlights_2 && highlights_2.length > 0 && !children_4) {
    return r(w5, {
      ...A,
      children: [e(s, {
        flexShrink: 0,
        "aria-preserve-whitespace": !0,
        children: e(ee, {
          text: f,
          highlights: highlights_2
        })
      }), E && r(n, {
        dimColor: !0,
        wrap: "truncate-end",
        children: [o.value?.endsWith(" ") ? "" : " ", o.argumentHint]
      }), children_2]
    });
  }
  const j = n,
    wrap = "truncate-end",
    dimColor = o.dimColor,
    z = children_4 ? r(V, {
      children: [children_3 ? e(n, {
        color: "ide",
        children: children_3
      }) : null, e(Jr, {
        children: children_4
      })]
    }) : e(n, {
      "aria-preserve-whitespace": !0,
      children: e(Jr, {
        children: f
      })
    }),
    le = E && r(n, {
      dimColor: !0,
      children: [o.value?.endsWith(" ") ? "" : " ", o.argumentHint]
    });
  let children_5;
  if (G[1] !== j || G[2] !== children_2 || G[3] !== o || G[4] !== z || G[5] !== le) children_5 = r(j, {
    wrap: wrap,
    dimColor: dimColor,
    children: [z, le, children_2]
  }), G[1] = j, G[2] = children_2, G[3] = o, G[4] = z, G[5] = le, G[6] = children_5;else children_5 = G[6];
  return e(w5, {
    ...A,
    children: children_5
  });
}
function Ze({
  placeholder: placeholder,
  value: value,
  showCursor: showCursor,
  focus: focus,
  terminalFocus: terminalFocus_2 = !0,
  invert: invert_2 = Q6,
  hidePlaceholderText: hidePlaceholderText_2 = !1
}) {
  let renderedPlaceholder_2 = void 0;
  if (placeholder) {
    if (hidePlaceholderText_2) renderedPlaceholder_2 = showCursor && focus && terminalFocus_2 ? invert_2(" ") : "";else if (renderedPlaceholder_2 = pe.dim(placeholder), showCursor && focus && terminalFocus_2) renderedPlaceholder_2 = placeholder.length > 0 ? invert_2(placeholder[0]) + pe.dim(placeholder.slice(1)) : invert_2(" ");
  }
  let showPlaceholder_2 = value.length === 0 && Boolean(placeholder);
  return {
    renderedPlaceholder: renderedPlaceholder_2,
    showPlaceholder: showPlaceholder_2
  };
}
function eo(le) {
  return le.voiceState;
}
function to(Re) {
  return Re;
}
function oo(io) {
  return io;
}
function Qn(t) {
  let h = w(56),
    [p] = Zn(),
    i = Dl(),
    d;
  if (h[0] === S) d = PH(), h[0] = d;else d = h[0];
  let l = d,
    preserveTrailingWhitespace = _t(),
    hidePlaceholderText_3 = _g(eo) === "recording",
    [ref_3, C] = GJe();
  const canPasteImages_3 = !!t.onImagePaste;
  let M;
  if (h[1] !== i || h[2] !== canPasteImages_3) M = {
    isTerminalFocused: i,
    canPasteImages: canPasteImages_3
  }, h[1] = i, h[2] = canPasteImages_3, h[3] = M;else M = h[3];
  YGt(M);
  let I;
  if (h[4] !== C || h[5] !== i) I = !i ? to : C ? () => pe.hex(C.hex)(C.char) : l ? oo : Q6, h[4] = C, h[5] = i, h[6] = I;else I = h[6];
  let invert_3 = I;
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
  if (h[7] !== p) themeText = Pn("text", p), h[7] = p, h[8] = themeText;else themeText = h[8];
  let ke;
  if (h[9] !== invert_3 || h[10] !== preserveTrailingWhitespace || h[11] !== t.clearOnSubmit || h[12] !== t.columns || h[13] !== t.cursorOffset || h[14] !== t.disableBackslashReturn || h[15] !== t.disableCtrlCClear || h[16] !== t.disableCursorMovementForUpDownKeys || h[17] !== t.disableEscapeDoublePress || h[18] !== t.editRelay || h[19] !== t.focus || h[20] !== t.getInputMode || h[21] !== t.getPastedContents || h[22] !== t.highlightPastedText || h[23] !== t.historyOnClear || h[24] !== t.inlineGhostText || h[25] !== t.inputFilter || h[26] !== t.leadingPill || h[27] !== t.leftArrowConfirmHint || h[28] !== t.mask || h[29] !== t.maxVisibleLines || h[30] !== t.multiline || h[31] !== t.onChange || h[32] !== t.onChangeCursorOffset || h[33] !== t.onEscapeMessage || h[34] !== t.onExit || h[35] !== t.onExitMessage || h[36] !== t.onHistoryDown || h[37] !== t.onHistoryReset || h[38] !== t.onHistoryUp || h[39] !== t.onImagePaste || h[40] !== t.onLeftArrowOnEmpty || h[41] !== t.onSubmit || h[42] !== t.value || h[43] !== cursorChar || h[44] !== themeText) ke = {
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
    getPastedContents: t.getPastedContents,
    getInputMode: t.getInputMode,
    inlineGhostText: t.inlineGhostText,
    dim: pe.dim
  }, h[9] = invert_3, h[10] = preserveTrailingWhitespace, h[11] = t.clearOnSubmit, h[12] = t.columns, h[13] = t.cursorOffset, h[14] = t.disableBackslashReturn, h[15] = t.disableCtrlCClear, h[16] = t.disableCursorMovementForUpDownKeys, h[17] = t.disableEscapeDoublePress, h[18] = t.editRelay, h[19] = t.focus, h[20] = t.getInputMode, h[21] = t.getPastedContents, h[22] = t.highlightPastedText, h[23] = t.historyOnClear, h[24] = t.inlineGhostText, h[25] = t.inputFilter, h[26] = t.leadingPill, h[27] = t.leftArrowConfirmHint, h[28] = t.mask, h[29] = t.maxVisibleLines, h[30] = t.multiline, h[31] = t.onChange, h[32] = t.onChangeCursorOffset, h[33] = t.onEscapeMessage, h[34] = t.onExit, h[35] = t.onExitMessage, h[36] = t.onHistoryDown, h[37] = t.onHistoryReset, h[38] = t.onHistoryUp, h[39] = t.onImagePaste, h[40] = t.onLeftArrowOnEmpty, h[41] = t.onSubmit, h[42] = t.value, h[43] = cursorChar, h[44] = themeText, h[45] = ke;else ke = h[45];
  let inputState_2 = o_t(ke);
  const cursorCellPainted_2 = C != null;
  let children_6;
  if (h[46] !== invert_3 || h[47] !== i || h[48] !== hidePlaceholderText_3 || h[49] !== t || h[50] !== cursorCellPainted_2 || h[51] !== inputState_2) children_6 = e(r_t, {
    inputState: inputState_2,
    terminalFocus: i,
    highlights: t.highlights,
    invert: invert_3,
    hidePlaceholderText: hidePlaceholderText_3,
    cursorCellPainted: cursorCellPainted_2,
    ...t
  }), h[46] = invert_3, h[47] = i, h[48] = hidePlaceholderText_3, h[49] = t, h[50] = cursorCellPainted_2, h[51] = inputState_2, h[52] = children_6;else children_6 = h[52];
  let z;
  if (h[53] !== ref_3 || h[54] !== children_6) z = e(s, {
    ref: ref_3,
    children: children_6
  }), h[53] = ref_3, h[54] = children_6, h[55] = z;else z = h[55];
  return z;
}
export { KGt, YGt, r_t, Qn };