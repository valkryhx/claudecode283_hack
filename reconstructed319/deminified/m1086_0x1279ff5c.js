// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ot, n, Vr } from "B:/~BUN/root/chunk-qey16aan.js";
import { Wu } from "B:/~BUN/root/chunk-emd6eb45.js";
import { lzr, ti as selectedValue, Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var dle = 500;
function Wot(w = dle) {
  let r = Wu();
  return Vr(w, r);
}
function Jn(w) {
  let s = S(33),
    {
      onConfirm: onConfirm,
      onCancel: onCancel,
      confirmLabel: confirmLabel,
      cancelLabel: cancelLabel,
      cancelFirst: cancelFirst,
      focus: focus,
      hideIndexes: hideIndexes,
      disablePrintableKeybindings: disablePrintableKeybindings,
      refuseInput: refuseInput,
      openedAt: openedAt,
      windowMs: windowMs,
      armAfterMs: armAfterMs
    } = w,
    i = confirmLabel === void 0 ? "Yes" : confirmLabel,
    c = cancelLabel === void 0 ? "No" : cancelLabel,
    I = cancelFirst === void 0 ? !1 : cancelFirst,
    ne = focus === void 0 ? "confirm" : focus,
    hideIndexes_2 = hideIndexes === void 0 ? !1 : hideIndexes,
    disablePrintableKeybindings_2 = disablePrintableKeybindings === void 0 ? !1 : disablePrintableKeybindings,
    [defaultFocusValue] = y(ne),
    l = Wot(armAfterMs ?? null) || armAfterMs === void 0;
  if (ot()) {
    const windowMs_2 = windowMs ?? armAfterMs;
    let t;
    if (s[0] !== c || s[1] !== i || s[2] !== onCancel || s[3] !== onConfirm || s[4] !== openedAt || s[5] !== refuseInput || s[6] !== windowMs_2) t = e(lzr, {
      confirmLabel: i,
      cancelLabel: c,
      onConfirm: onConfirm,
      onCancel: onCancel,
      refuseInput: refuseInput,
      openedAt: openedAt,
      windowMs: windowMs_2
    }), s[0] = c, s[1] = i, s[2] = onCancel, s[3] = onConfirm, s[4] = openedAt, s[5] = refuseInput, s[6] = windowMs_2, s[7] = t;else t = s[7];
    return t;
  }
  let label;
  if (s[8] !== i || s[9] !== l) label = l ? i : e(n, {
    dimColor: !0,
    children: i
  }), s[8] = i, s[9] = l, s[10] = label;else label = s[10];
  let t;
  if (s[11] !== label) t = {
    label: label,
    value: "confirm"
  }, s[11] = label, s[12] = t;else t = s[12];
  let m = t,
    label_2;
  if (s[13] !== c || s[14] !== l) label_2 = l ? c : e(n, {
    dimColor: !0,
    children: c
  }), s[13] = c, s[14] = l, s[15] = label_2;else label_2 = s[15];
  let k;
  if (s[16] !== label_2) k = {
    label: label_2,
    value: "cancel"
  }, s[16] = label_2, s[17] = k;else k = s[17];
  let f = k,
    options;
  if (s[18] !== f || s[19] !== I || s[20] !== m) options = I ? [f, m] : [m, f], s[18] = f, s[19] = I, s[20] = m, s[21] = options;else options = s[21];
  const isDisabled = !l;
  let onChange;
  if (s[22] !== onCancel || s[23] !== onConfirm) onChange = oe => oe === "confirm" ? onConfirm() : onCancel(), s[22] = onCancel, s[23] = onConfirm, s[24] = onChange;else onChange = s[24];
  let q;
  if (s[25] !== disablePrintableKeybindings_2 || s[26] !== hideIndexes_2 || s[27] !== onCancel || s[28] !== defaultFocusValue || s[29] !== options || s[30] !== isDisabled || s[31] !== onChange) q = e(Ze, {
    options: options,
    selectedValue: selectedValue,
    hideIndexes: hideIndexes_2,
    disablePrintableKeybindings: disablePrintableKeybindings_2,
    isDisabled: isDisabled,
    defaultFocusValue: defaultFocusValue,
    onChange: onChange,
    onCancel: onCancel
  }), s[25] = disablePrintableKeybindings_2, s[26] = hideIndexes_2, s[27] = onCancel, s[28] = defaultFocusValue, s[29] = options, s[30] = isDisabled, s[31] = onChange, s[32] = q;else q = s[32];
  return q;
}
export { dle, Wot, Jn };