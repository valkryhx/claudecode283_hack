// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { wS } from "B:/~BUN/root/chunk-crjx6seq.js";
import { Dae, vme } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ot, s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { JR, EUe, TUe, azr, lhe, CUe, ihn, Zf, uzr, ahn, vYe } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Za } from "B:/~BUN/root/chunk-n8t98fhm.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { mv, e2t } from "B:/~BUN/root/chunk-h37egt7q.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { ue, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
j();
import { isDeepStrictEqual as qe } from "util";
function ce({
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
  let [selectedValues, k, getSelectedValues] = Zf(defaultValue),
    [isSubmitFocused, C, z] = Zf(!1),
    [i, he] = y(options);
  if (options !== i && !qe(options, i)) k(defaultValue), he(options);
  let [inputValues, Q] = y(() => {
      let t = new Map();
      return options.forEach(item => {
        if (item.type === "input" && item.initialValue) t.set(item.value, item.initialValue);
      }), t;
    }),
    E = ue(t => {
      let a = typeof t === "function" ? t(getSelectedValues()) : t;
      if (onChange?.(a) === !1) return;
      k(a);
    }, [getSelectedValues, k, onChange]),
    toggleValue = ue(t => {
      if (options.find(item => item.value === t)?.disabled === !0) return;
      E(a => a.includes(t) ? a.filter(item => item !== t) : [...a, t]);
    }, [options, E]),
    c = uzr({
      visibleOptionCount: visibleOptionCount,
      options: options,
      onFocus: onFocus
    });
  Za("multi-select");
  let updateInputValue = ue((t, a) => {
    let f = options.find(item => item.value === t);
    if (f?.type === "input" && f.onChange(a) === !1) return;
    Q(b => {
      let w = new Map(b);
      return w.set(t, a), w;
    }), E(b => {
      if (a) {
        if (!b.includes(t)) return [...b, t];
        return b;
      } else return b.filter(item => item !== t);
    });
  }, [options, E]);
  return {
    ...c,
    focusOption: t => {
      C(!1), c.focusOption(t);
    },
    scrollViewport: t => {
      let a = c.getFocusedValue(),
        f = c.scrollViewport(t);
      if (c.getFocusedValue() !== a) C(!1);
      return f;
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
      let a = Dae(t.key),
        f = c.getFocusedValue(),
        w = options.find(item => item.value === f)?.type === "input",
        h = z();
      if (w) {
        if (!(t.key === "up" || t.key === "down" || t.key === "escape" || t.key === "tab" || t.key === "return" || t.ctrl && (t.key === "n" || t.key === "p" || t.key === "return"))) return;
      }
      let M = options.at(-1)?.value;
      if (t.key === "tab" && !t.shift) {
        if (t.preventDefault(), submitButtonText && onSubmit && f === M && !h) {
          if (refuseSubmitFocus?.()) return;
          C(!0);
        } else if (!h) c.focusNextOption();
        return;
      }
      if (t.key === "tab" && t.shift) {
        if (t.preventDefault(), submitButtonText && onSubmit && h) C(!1), c.focusOption(M);else c.focusPreviousOption();
        return;
      }
      if (t.key === "down" || t.ctrl && t.key === "n" || !t.ctrl && !t.shift && t.key === "j") {
        if (t.preventDefault(), h && onDownFromLastItem) onDownFromLastItem();else if (submitButtonText && onSubmit && f === M && !h) {
          if (refuseSubmitFocus?.()) return;
          C(!0);
        } else if (!submitButtonText && onDownFromLastItem && f === M) onDownFromLastItem();else if (!h) c.focusNextOption();
        return;
      }
      if (t.key === "up" || t.ctrl && t.key === "p" || !t.ctrl && !t.shift && t.key === "k") {
        if (t.preventDefault(), submitButtonText && onSubmit && h) C(!1), c.focusOption(M);else c.focusPreviousOption();
        return;
      }
      if (t.key === "pagedown") {
        t.preventDefault(), c.focusNextPage();
        return;
      }
      if (t.key === "pageup") {
        t.preventDefault(), c.focusPreviousPage();
        return;
      }
      if (t.key === "return" || vme(t.key) === " ") {
        if (t.preventDefault(), t.ctrl && t.key === "return" && w && onSubmit) {
          onSubmit(getSelectedValues());
          return;
        }
        if (t.key === "return" && h && onSubmit) {
          onSubmit(getSelectedValues());
          return;
        }
        if (t.key === "return" && !submitButtonText && onSubmit) {
          onSubmit(getSelectedValues());
          return;
        }
        if (!h && f !== void 0) toggleValue(f);
        return;
      }
      if (!hideIndexes && /^[0-9]$/.test(a)) {
        t.preventDefault();
        let I = parseInt(a) - 1;
        if (I >= 0 && I < options.length) toggleValue(options[I].value);
        return;
      }
      if (t.key === "escape") onCancel(), t.stopImmediatePropagation();
    }
  };
}
function vt(St) {
  return St.description;
}
function onSubmit_3() {}
function jj(o) {
  let d = S(13);
  if (ot()) {
    let u;
    if (d[0] !== o.defaultValue || d[1] !== o.isDisabled || d[2] !== o.onCancel || d[3] !== o.onChange || d[4] !== o.onFocus || d[5] !== o.onOpenEditor || d[6] !== o.onSubmit || d[7] !== o.options || d[8] !== o.refuseInput || d[9] !== o.submitButtonText) u = e(azr, {
      options: o.options,
      defaultValue: o.defaultValue,
      onChange: o.onChange,
      onSubmit: o.onSubmit,
      onFocus: o.onFocus,
      onCancel: o.onCancel,
      onOpenEditor: o.onOpenEditor,
      isDisabled: o.isDisabled,
      submitButtonText: o.submitButtonText,
      refuseInput: o.refuseInput
    }), d[0] = o.defaultValue, d[1] = o.isDisabled, d[2] = o.onCancel, d[3] = o.onChange, d[4] = o.onFocus, d[5] = o.onOpenEditor, d[6] = o.onSubmit, d[7] = o.options, d[8] = o.refuseInput, d[9] = o.submitButtonText, d[10] = u;else u = d[10];
    return u;
  }
  let u;
  if (d[11] !== o) u = e(ve, {
    ...o
  }), d[11] = o, d[12] = u;else u = d[12];
  return u;
}
function ve(o) {
  let D = S(75),
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
      canPasteImage: k,
      onImagePaste: onImagePaste,
      pastedContents: pastedContents,
      onRemoveImage: onRemoveImage,
      refuseSubmitFocus: refuseSubmitFocus_2
    } = o,
    isDisabled_3 = isDisabled_2 === void 0 ? !1 : isDisabled_2,
    he = visibleOptionCount_2 === void 0 ? 5 : visibleOptionCount_2,
    Q;
  if (D[0] !== defaultValue_2) Q = defaultValue_2 === void 0 ? [] : defaultValue_2, D[0] = defaultValue_2, D[1] = Q;else Q = D[1];
  let defaultValue_3 = Q,
    hideIndexes_3 = hideIndexes_2 === void 0 ? !1 : hideIndexes_2,
    c = options_2.some(vt);
  const visibleOptionCount_3 = vYe(he, c ? "compact-vertical" : "compact");
  let ge;
  if (D[2] !== defaultValue_3 || D[3] !== hideIndexes_3 || D[4] !== isDisabled_3 || D[5] !== onCancel_2 || D[6] !== onChange_2 || D[7] !== onDownFromLastItem_2 || D[8] !== onFocus_2 || D[9] !== onSubmit_2 || D[10] !== options_2 || D[11] !== refuseSubmitFocus_2 || D[12] !== p || D[13] !== visibleOptionCount_3) ge = {
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
  }, D[2] = defaultValue_3, D[3] = hideIndexes_3, D[4] = isDisabled_3, D[5] = onCancel_2, D[6] = onChange_2, D[7] = onDownFromLastItem_2, D[8] = onFocus_2, D[9] = onSubmit_2, D[10] = options_2, D[11] = refuseSubmitFocus_2, D[12] = p, D[13] = visibleOptionCount_3, D[14] = ge;else ge = D[14];
  let t = ce(ge);
  const focusedValue = t.isSubmitFocused ? void 0 : t.focusedValue;
  let f;
  if (D[15] !== k || D[16] !== options_2 || D[17] !== t.focusOption || D[18] !== focusedValue) f = {
    options: options_2,
    focusedValue: focusedValue,
    focusOption: t.focusOption,
    canPaste: k
  }, D[15] = k, D[16] = options_2, D[17] = t.focusOption, D[18] = focusedValue, D[19] = f;else f = D[19];
  let onPaste = ihn(f),
    w = A(null);
  wS(w, !isDisabled_3);
  let [h, M] = y(!1),
    I = EUe(),
    inverse = !isDisabled_3 && h && I === "inverse",
    K = mv(),
    shouldDropWheel = e2t(),
    Ke;
  if (D[20] !== isDisabled_3 || D[21] !== options_2.length || D[22] !== shouldDropWheel || D[23] !== t.scrollViewport || D[24] !== t.visibleFromIndex || D[25] !== t.visibleToIndex) Ke = {
    isDisabled: isDisabled_3,
    visibleFromIndex: t.visibleFromIndex,
    visibleToIndex: t.visibleToIndex,
    optionCount: options_2.length,
    scrollViewport: t.scrollViewport,
    shouldDropWheel: shouldDropWheel
  }, D[20] = isDisabled_3, D[21] = options_2.length, D[22] = shouldDropWheel, D[23] = t.scrollViewport, D[24] = t.visibleFromIndex, D[25] = t.visibleToIndex, D[26] = Ke;else Ke = D[26];
  let De = ahn(Ke),
    Be;
  if (D[27] !== isDisabled_3 || D[28] !== K || D[29] !== t) Be = Z => isDisabled_3 || Z.disabled === !0 ? void 0 : gt => {
    if (K(gt)) {
      return;
    }
    if (Z.type === "input") t.focusOption(Z.value);else t.toggleValue(Z.value);
  }, D[27] = isDisabled_3, D[28] = K, D[29] = t, D[30] = Be;else Be = D[30];
  let ee = Be,
    te,
    oe,
    ie,
    children,
    flexDirection,
    ref,
    _;
  if (D[31] !== k || D[32] !== ee || D[33] !== onPaste || D[34] !== hideIndexes_3 || D[35] !== isDisabled_3 || D[36] !== onCancel_2 || D[37] !== onImagePaste || D[38] !== onOpenEditor || D[39] !== onRemoveImage || D[40] !== options_2.length || D[41] !== pastedContents || D[42] !== De || D[43] !== t) {
    let maxIndexWidth = options_2.length.toString().length;
    oe = s;
    flexDirection = "column";
    ref = w;
    if (D[51] !== onPaste || D[52] !== isDisabled_3 || D[53] !== t.handleKeyDown) _ = isDisabled_3 ? {} : {
      tabIndex: 0,
      onKeyDown: t.handleKeyDown,
      onPaste: onPaste
    }, D[51] = onPaste, D[52] = isDisabled_3, D[53] = t.handleKeyDown, D[54] = _;else _ = D[54];
    te = TUe;
    ie = De;
    children = t.visibleOptions.map((v, yt) => {
      let isFocused = !isDisabled_3 && t.focusedValue === v.value && !t.isSubmitFocused;
      let le = t.selectedValues.includes(v.value);
      let Ne = v.index === t.visibleFromIndex;
      let je = v.index === t.visibleToIndex - 1;
      let ze = t.visibleToIndex < options_2.length;
      let Ue = t.visibleFromIndex > 0;
      let index = t.visibleFromIndex + yt + 1;
      if (v.type === "input") {
        let inputValue = t.inputValues.get(v.value) || "";
        return e(s, {
          flexDirection: "column",
          children: e(CUe, {
            option: v,
            onClick: ee(v),
            isFocused: isFocused,
            isSelected: !1,
            shouldShowDownArrow: ze && je,
            shouldShowUpArrow: Ue && Ne,
            maxIndexWidth: maxIndexWidth,
            index: index,
            inputValue: inputValue,
            onInputChange: Ot => {
              t.updateInputValue(v.value, Ot);
            },
            onSubmit: onSubmit_3,
            onExit: () => {
              onCancel_2();
            },
            layout: "compact",
            onOpenEditor: onOpenEditor,
            canPasteImage: k,
            onImagePaste: onImagePaste,
            pastedContents: pastedContents,
            onRemoveImage: onRemoveImage,
            extraChromeWidth: 4,
            children: r(n, {
              color: le ? "success" : void 0,
              children: ["[", le ? re.tick : " ", "]", " "]
            })
          })
        }, String(v.value));
      }
      return e(s, {
        flexDirection: "column",
        children: r(lhe, {
          isFocused: isFocused,
          isSelected: !1,
          shouldShowDownArrow: ze && je,
          shouldShowUpArrow: Ue && Ne,
          onClick: ee(v),
          children: [!hideIndexes_3 && e(s, {
            flexShrink: 0,
            children: e(n, {
              dimColor: !0,
              children: `${index}.`.padEnd(maxIndexWidth)
            })
          }), e(s, {
            flexShrink: 0,
            children: r(n, {
              color: le ? "success" : void 0,
              children: ["[", le ? re.tick : " ", "]"]
            })
          }), r(s, {
            flexDirection: "column",
            children: [e(n, {
              color: isFocused ? "suggestion" : void 0,
              children: v.label
            }), v.description && e(n, {
              color: "inactive",
              children: v.description
            })]
          })]
        })
      }, String(v.value));
    });
    D[31] = k, D[32] = ee, D[33] = onPaste, D[34] = hideIndexes_3, D[35] = isDisabled_3, D[36] = onCancel_2, D[37] = onImagePaste, D[38] = onOpenEditor, D[39] = onRemoveImage, D[40] = options_2.length, D[41] = pastedContents, D[42] = De, D[43] = t, D[44] = te, D[45] = oe, D[46] = ie, D[47] = children, D[48] = flexDirection, D[49] = ref, D[50] = _;
  } else te = D[44], oe = D[45], ie = D[46], children = D[47], flexDirection = D[48], ref = D[49], _ = D[50];
  let de;
  if (D[55] !== te || D[56] !== ie || D[57] !== children) de = e(te, {
    ...ie,
    children: children
  }), D[55] = te, D[56] = ie, D[57] = children, D[58] = de;else de = D[58];
  let pe;
  if (D[59] !== isDisabled_3 || D[60] !== onSubmit_2 || D[61] !== K || D[62] !== t || D[63] !== p || D[64] !== I || D[65] !== h || D[66] !== inverse) pe = p && onSubmit_2 && r(s, {
    marginTop: 0,
    gap: 1,
    onClick: isDisabled_3 ? void 0 : xt => {
      if (K(xt)) {
        return;
      }
      onSubmit_2(t.getSelectedValues());
    },
    backgroundColor: !isDisabled_3 && h && I === "tint" ? JR : void 0,
    onMouseEnter: () => M(!0),
    onMouseLeave: () => M(!1),
    children: [!isDisabled_3 && t.isSubmitFocused ? e(n, {
      color: "suggestion",
      inverse: inverse,
      children: re.pointer
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
  }), D[59] = isDisabled_3, D[60] = onSubmit_2, D[61] = K, D[62] = t, D[63] = p, D[64] = I, D[65] = h, D[66] = inverse, D[67] = pe;else pe = D[67];
  let $e;
  if (D[68] !== oe || D[69] !== flexDirection || D[70] !== ref || D[71] !== _ || D[72] !== de || D[73] !== pe) $e = r(oe, {
    flexDirection: flexDirection,
    ref: ref,
    ..._,
    children: [de, pe]
  }), D[68] = oe, D[69] = flexDirection, D[70] = ref, D[71] = _, D[72] = de, D[73] = pe, D[74] = $e;else $e = D[74];
  return $e;
}
export { jj };