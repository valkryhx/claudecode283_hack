// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { xy } from "B:/~BUN/root/chunk-vw193yjw.js";
import { EQ, K5 } from "B:/~BUN/root/chunk-nggrknsv.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n, ot } from "B:/~BUN/root/chunk-damrp3r8.js";
import { vR, $Ce, UCe, Tnr, Vre, BCe, xc, Rnr, V2t, RLe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { Ra } from "B:/~BUN/root/chunk-aw9w2cra.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { hS, Gvt } from "B:/~BUN/root/chunk-a8k6kvgb.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { ae, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
B();
import { isDeepStrictEqual as ze } from "util";
function de({
  isDisabled = !1,
  visibleOptionCount = 5,
  options: options,
  defaultValue = [],
  onChange: onChange,
  onCancel: onCancel,
  onFocus: onFocus,
  submitButtonText: submitButtonText,
  onSubmit: onSubmit,
  onDownFromLastItem: onDownFromLastItem,
  hideIndexes = !1,
  refuseSubmitFocus: refuseSubmitFocus
}) {
  let [selectedValues, R, getSelectedValues] = xc(defaultValue),
    [isSubmitFocused, V, j] = xc(!1),
    [i, be] = y(options);
  if (options !== i && !ze(options, i)) R(defaultValue), be(options);
  let [inputValues, J] = y(() => {
      let t = new Map();
      return options.forEach(item => {
        if (item.type === "input" && item.initialValue) t.set(item.value, item.initialValue);
      }), t;
    }),
    P = ae(t => {
      let l = typeof t === "function" ? t(getSelectedValues()) : t;
      if (onChange?.(l) === !1) return;
      R(l);
    }, [getSelectedValues, R, onChange]),
    toggleValue = ae(t => {
      if (options.find(item => item.value === t)?.disabled === !0) return;
      P(l => l.includes(t) ? l.filter(item => item !== t) : [...l, t]);
    }, [options, P]),
    f = Rnr({
      visibleOptionCount: visibleOptionCount,
      options: options,
      onFocus: onFocus
    });
  Ra("multi-select");
  let updateInputValue = ae((t, l) => {
    let c = options.find(item => item.value === t);
    if (c?.type === "input" && c.onChange(l) === !1) return;
    J(g => {
      let D = new Map(g);
      return D.set(t, l), D;
    }), P(g => {
      if (l) {
        if (!g.includes(t)) return [...g, t];
        return g;
      } else return g.filter(item => item !== t);
    });
  }, [options, P]);
  return {
    ...f,
    focusOption: t => {
      V(!1), f.focusOption(t);
    },
    scrollViewport: t => {
      let l = f.getFocusedValue(),
        c = f.scrollViewport(t);
      if (f.getFocusedValue() !== l) V(!1);
      return c;
    },
    selectedValues: selectedValues,
    getSelectedValues: getSelectedValues,
    inputValues: inputValues,
    isSubmitFocused: isSubmitFocused,
    updateInputValue: updateInputValue,
    toggleValue: toggleValue,
    onCancel: onCancel,
    handleKeyDown: t => {
      if (isDisabled) return;
      let l = EQ(t.key),
        c = f.getFocusedValue(),
        D = options.find(item => item.value === c)?.type === "input",
        v = j();
      if (D) {
        if (!(t.key === "up" || t.key === "down" || t.key === "escape" || t.key === "tab" || t.key === "return" || t.ctrl && (t.key === "n" || t.key === "p" || t.key === "return"))) return;
      }
      let x = options.at(-1)?.value;
      if (t.key === "tab" && !t.shift) {
        if (t.preventDefault(), submitButtonText && onSubmit && c === x && !v) {
          if (refuseSubmitFocus?.()) return;
          V(!0);
        } else if (!v) f.focusNextOption();
        return;
      }
      if (t.key === "tab" && t.shift) {
        if (t.preventDefault(), submitButtonText && onSubmit && v) V(!1), f.focusOption(x);else f.focusPreviousOption();
        return;
      }
      if (t.key === "down" || t.ctrl && t.key === "n" || !t.ctrl && !t.shift && t.key === "j") {
        if (t.preventDefault(), v && onDownFromLastItem) onDownFromLastItem();else if (submitButtonText && onSubmit && c === x && !v) {
          if (refuseSubmitFocus?.()) return;
          V(!0);
        } else if (!submitButtonText && onDownFromLastItem && c === x) onDownFromLastItem();else if (!v) f.focusNextOption();
        return;
      }
      if (t.key === "up" || t.ctrl && t.key === "p" || !t.ctrl && !t.shift && t.key === "k") {
        if (t.preventDefault(), submitButtonText && onSubmit && v) V(!1), f.focusOption(x);else f.focusPreviousOption();
        return;
      }
      if (t.key === "pagedown") {
        t.preventDefault(), f.focusNextPage();
        return;
      }
      if (t.key === "pageup") {
        t.preventDefault(), f.focusPreviousPage();
        return;
      }
      if (t.key === "return" || K5(t.key) === " ") {
        if (t.preventDefault(), t.ctrl && t.key === "return" && D && onSubmit) {
          onSubmit(getSelectedValues());
          return;
        }
        if (t.key === "return" && v && onSubmit) {
          onSubmit(getSelectedValues());
          return;
        }
        if (t.key === "return" && !submitButtonText && onSubmit) {
          onSubmit(getSelectedValues());
          return;
        }
        if (!v && c !== void 0) toggleValue(c);
        return;
      }
      if (!hideIndexes && /^[0-9]$/.test(l)) {
        t.preventDefault();
        let F = parseInt(l) - 1;
        if (F >= 0 && F < options.length) toggleValue(options[F].value);
        return;
      }
      if (t.key === "escape") onCancel(), t.stopImmediatePropagation();
    }
  };
}
function ct(yt) {
  return yt.description;
}
function onSubmit_3() {}
function az(o) {
  let u = w(12);
  if (ot()) {
    let d;
    if (u[0] !== o.defaultValue || u[1] !== o.isDisabled || u[2] !== o.onCancel || u[3] !== o.onChange || u[4] !== o.onFocus || u[5] !== o.onSubmit || u[6] !== o.options || u[7] !== o.refuseInput || u[8] !== o.submitButtonText) d = e(Tnr, {
      options: o.options,
      defaultValue: o.defaultValue,
      onChange: o.onChange,
      onSubmit: o.onSubmit,
      onFocus: o.onFocus,
      onCancel: o.onCancel,
      isDisabled: o.isDisabled,
      submitButtonText: o.submitButtonText,
      refuseInput: o.refuseInput
    }), u[0] = o.defaultValue, u[1] = o.isDisabled, u[2] = o.onCancel, u[3] = o.onChange, u[4] = o.onFocus, u[5] = o.onSubmit, u[6] = o.options, u[7] = o.refuseInput, u[8] = o.submitButtonText, u[9] = d;else d = u[9];
    return d;
  }
  let d;
  if (u[10] !== o) d = e(me, {
    ...o
  }), u[10] = o, u[11] = d;else d = u[11];
  return d;
}
function me(o) {
  let I = w(68),
    {
      isDisabled: isDisabled_2,
      visibleOptionCount: visibleOptionCount_2,
      options: options_2,
      defaultValue: defaultValue_2,
      onCancel: onCancel_2,
      onChange: onChange_2,
      onFocus: onFocus_2,
      submitButtonText: p,
      onSubmit: onSubmit_2,
      onDownFromLastItem: onDownFromLastItem_2,
      onOpenEditor: onOpenEditor,
      hideIndexes: hideIndexes_2,
      canPasteImage: canPasteImage,
      onImagePaste: onImagePaste,
      pastedContents: pastedContents,
      onRemoveImage: onRemoveImage,
      refuseSubmitFocus: refuseSubmitFocus_2
    } = o,
    isDisabled_3 = isDisabled_2 === void 0 ? !1 : isDisabled_2,
    be = visibleOptionCount_2 === void 0 ? 5 : visibleOptionCount_2,
    J;
  if (I[0] !== defaultValue_2) J = defaultValue_2 === void 0 ? [] : defaultValue_2, I[0] = defaultValue_2, I[1] = J;else J = I[1];
  let defaultValue_3 = J,
    hideIndexes_3 = hideIndexes_2 === void 0 ? !1 : hideIndexes_2,
    f = options_2.some(ct);
  const visibleOptionCount_3 = RLe(be, f ? "compact-vertical" : "compact");
  let ve;
  if (I[2] !== defaultValue_3 || I[3] !== hideIndexes_3 || I[4] !== isDisabled_3 || I[5] !== onCancel_2 || I[6] !== onChange_2 || I[7] !== onDownFromLastItem_2 || I[8] !== onFocus_2 || I[9] !== onSubmit_2 || I[10] !== options_2 || I[11] !== refuseSubmitFocus_2 || I[12] !== p || I[13] !== visibleOptionCount_3) ve = {
    isDisabled: isDisabled_3,
    visibleOptionCount: visibleOptionCount_3,
    options: options_2,
    defaultValue: defaultValue_3,
    onChange: onChange_2,
    onCancel: onCancel_2,
    onFocus: onFocus_2,
    submitButtonText: p,
    onSubmit: onSubmit_2,
    onDownFromLastItem: onDownFromLastItem_2,
    hideIndexes: hideIndexes_3,
    refuseSubmitFocus: refuseSubmitFocus_2
  }, I[2] = defaultValue_3, I[3] = hideIndexes_3, I[4] = isDisabled_3, I[5] = onCancel_2, I[6] = onChange_2, I[7] = onDownFromLastItem_2, I[8] = onFocus_2, I[9] = onSubmit_2, I[10] = options_2, I[11] = refuseSubmitFocus_2, I[12] = p, I[13] = visibleOptionCount_3, I[14] = ve;else ve = I[14];
  let t = de(ve),
    l = A(null);
  xy(l, !isDisabled_3);
  let [c, g] = y(!1),
    D = $Ce(),
    inverse = !isDisabled_3 && c && D === "inverse",
    x = hS(),
    shouldDropWheel = Gvt(),
    Re;
  if (I[15] !== isDisabled_3 || I[16] !== options_2.length || I[17] !== shouldDropWheel || I[18] !== t.scrollViewport || I[19] !== t.visibleFromIndex || I[20] !== t.visibleToIndex) Re = {
    isDisabled: isDisabled_3,
    visibleFromIndex: t.visibleFromIndex,
    visibleToIndex: t.visibleToIndex,
    optionCount: options_2.length,
    scrollViewport: t.scrollViewport,
    shouldDropWheel: shouldDropWheel
  }, I[15] = isDisabled_3, I[16] = options_2.length, I[17] = shouldDropWheel, I[18] = t.scrollViewport, I[19] = t.visibleFromIndex, I[20] = t.visibleToIndex, I[21] = Re;else Re = I[21];
  let he = V2t(Re),
    We;
  if (I[22] !== isDisabled_3 || I[23] !== x || I[24] !== t) We = Q => isDisabled_3 || Q.disabled === !0 ? void 0 : mt => {
    if (x(mt)) {
      return;
    }
    if (Q.type === "input") t.focusOption(Q.value);else t.toggleValue(Q.value);
  }, I[22] = isDisabled_3, I[23] = x, I[24] = t, I[25] = We;else We = I[25];
  let Y = We,
    Z,
    ee,
    oe,
    children,
    flexDirection,
    ref,
    U;
  if (I[26] !== canPasteImage || I[27] !== Y || I[28] !== hideIndexes_3 || I[29] !== isDisabled_3 || I[30] !== onCancel_2 || I[31] !== onImagePaste || I[32] !== onOpenEditor || I[33] !== onRemoveImage || I[34] !== options_2.length || I[35] !== pastedContents || I[36] !== he || I[37] !== t) {
    let maxIndexWidth = options_2.length.toString().length;
    ee = s;
    flexDirection = "column";
    ref = l;
    if (I[45] !== isDisabled_3 || I[46] !== t.handleKeyDown) U = isDisabled_3 ? {} : {
      tabIndex: 0,
      onKeyDown: t.handleKeyDown
    }, I[45] = isDisabled_3, I[46] = t.handleKeyDown, I[47] = U;else U = I[47];
    Z = UCe;
    oe = he;
    children = t.visibleOptions.map((b, bt) => {
      let isFocused = !isDisabled_3 && t.focusedValue === b.value && !t.isSubmitFocused;
      let re = t.selectedValues.includes(b.value);
      let Ae = b.index === t.visibleFromIndex;
      let Ke = b.index === t.visibleToIndex - 1;
      let Be = t.visibleToIndex < options_2.length;
      let Le = t.visibleFromIndex > 0;
      let index = t.visibleFromIndex + bt + 1;
      if (b.type === "input") {
        let inputValue = t.inputValues.get(b.value) || "";
        return e(s, {
          flexDirection: "column",
          children: e(BCe, {
            option: b,
            onClick: Y(b),
            isFocused: isFocused,
            isSelected: !1,
            shouldShowDownArrow: Be && Ke,
            shouldShowUpArrow: Le && Ae,
            maxIndexWidth: maxIndexWidth,
            index: index,
            inputValue: inputValue,
            onInputChange: ht => {
              t.updateInputValue(b.value, ht);
            },
            onSubmit: onSubmit_3,
            onExit: () => {
              onCancel_2();
            },
            layout: "compact",
            onOpenEditor: onOpenEditor,
            canPasteImage: canPasteImage,
            onImagePaste: onImagePaste,
            pastedContents: pastedContents,
            onRemoveImage: onRemoveImage,
            extraChromeWidth: 4,
            children: r(n, {
              color: re ? "success" : void 0,
              children: ["[", re ? te.tick : " ", "]", " "]
            })
          })
        }, String(b.value));
      }
      return e(s, {
        flexDirection: "column",
        children: r(Vre, {
          isFocused: isFocused,
          isSelected: !1,
          shouldShowDownArrow: Be && Ke,
          shouldShowUpArrow: Le && Ae,
          onClick: Y(b),
          children: [!hideIndexes_3 && e(s, {
            flexShrink: 0,
            children: e(n, {
              dimColor: !0,
              children: `${index}.`.padEnd(maxIndexWidth)
            })
          }), e(s, {
            flexShrink: 0,
            children: r(n, {
              color: re ? "success" : void 0,
              children: ["[", re ? te.tick : " ", "]"]
            })
          }), r(s, {
            flexDirection: "column",
            children: [e(n, {
              color: isFocused ? "suggestion" : void 0,
              children: b.label
            }), b.description && e(n, {
              color: "inactive",
              children: b.description
            })]
          })]
        })
      }, String(b.value));
    });
    I[26] = canPasteImage, I[27] = Y, I[28] = hideIndexes_3, I[29] = isDisabled_3, I[30] = onCancel_2, I[31] = onImagePaste, I[32] = onOpenEditor, I[33] = onRemoveImage, I[34] = options_2.length, I[35] = pastedContents, I[36] = he, I[37] = t, I[38] = Z, I[39] = ee, I[40] = oe, I[41] = children, I[42] = flexDirection, I[43] = ref, I[44] = U;
  } else Z = I[38], ee = I[39], oe = I[40], children = I[41], flexDirection = I[42], ref = I[43], U = I[44];
  let le;
  if (I[48] !== Z || I[49] !== oe || I[50] !== children) le = e(Z, {
    ...oe,
    children: children
  }), I[48] = Z, I[49] = oe, I[50] = children, I[51] = le;else le = I[51];
  let ue;
  if (I[52] !== isDisabled_3 || I[53] !== onSubmit_2 || I[54] !== x || I[55] !== t || I[56] !== p || I[57] !== D || I[58] !== c || I[59] !== inverse) ue = p && onSubmit_2 && r(s, {
    marginTop: 0,
    gap: 1,
    onClick: isDisabled_3 ? void 0 : gt => {
      if (x(gt)) {
        return;
      }
      onSubmit_2(t.getSelectedValues());
    },
    backgroundColor: !isDisabled_3 && c && D === "tint" ? vR : void 0,
    onMouseEnter: () => g(!0),
    onMouseLeave: () => g(!1),
    children: [!isDisabled_3 && t.isSubmitFocused ? e(n, {
      color: "suggestion",
      inverse: inverse,
      children: te.pointer
    }) : e(n, {
      inverse: inverse,
      children: " "
    }), e(s, {
      marginLeft: 3,
      children: e(n, {
        color: !isDisabled_3 && t.isSubmitFocused ? "suggestion" : void 0,
        bold: !0,
        children: p
      })
    })]
  }), I[52] = isDisabled_3, I[53] = onSubmit_2, I[54] = x, I[55] = t, I[56] = p, I[57] = D, I[58] = c, I[59] = inverse, I[60] = ue;else ue = I[60];
  let je;
  if (I[61] !== ee || I[62] !== flexDirection || I[63] !== ref || I[64] !== U || I[65] !== le || I[66] !== ue) je = r(ee, {
    flexDirection: flexDirection,
    ref: ref,
    ...U,
    children: [le, ue]
  }), I[61] = ee, I[62] = flexDirection, I[63] = ref, I[64] = U, I[65] = le, I[66] = ue, I[67] = je;else je = I[67];
  return je;
}
export { az };