// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { n, ot, Dr } from "B:/~BUN/root/chunk-damrp3r8.js";
import { oc } from "B:/~BUN/root/chunk-t7y4rt40.js";
import { Cnr, Hi as selectedValue, Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
var ptr = 500;
function mVe(L = ptr) {
  let r = oc();
  return Dr(L, r);
}
function lr(L) {
  let a = w(32),
    {
      onConfirm: onConfirm,
      onCancel: onCancel,
      confirmLabel: confirmLabel,
      cancelLabel: cancelLabel,
      cancelFirst: cancelFirst,
      focus: focus,
      hideIndexes: hideIndexes,
      refuseInput: refuseInput,
      openedAt: openedAt,
      windowMs: windowMs,
      armAfterMs: armAfterMs
    } = L,
    s = confirmLabel === void 0 ? "Yes" : confirmLabel,
    i = cancelLabel === void 0 ? "No" : cancelLabel,
    v = cancelFirst === void 0 ? !1 : cancelFirst,
    Z = focus === void 0 ? "confirm" : focus,
    hideIndexes_2 = hideIndexes === void 0 ? !1 : hideIndexes,
    [defaultFocusValue] = y(Z),
    l = mVe(armAfterMs ?? null) || armAfterMs === void 0;
  if (ot()) {
    const windowMs_2 = windowMs ?? armAfterMs;
    let t;
    if (a[0] !== i || a[1] !== s || a[2] !== onCancel || a[3] !== onConfirm || a[4] !== openedAt || a[5] !== refuseInput || a[6] !== windowMs_2) t = e(Cnr, {
      confirmLabel: s,
      cancelLabel: i,
      onConfirm: onConfirm,
      onCancel: onCancel,
      refuseInput: refuseInput,
      openedAt: openedAt,
      windowMs: windowMs_2
    }), a[0] = i, a[1] = s, a[2] = onCancel, a[3] = onConfirm, a[4] = openedAt, a[5] = refuseInput, a[6] = windowMs_2, a[7] = t;else t = a[7];
    return t;
  }
  let label;
  if (a[8] !== s || a[9] !== l) label = l ? s : e(n, {
    dimColor: !0,
    children: s
  }), a[8] = s, a[9] = l, a[10] = label;else label = a[10];
  let t;
  if (a[11] !== label) t = {
    label: label,
    value: "confirm"
  }, a[11] = label, a[12] = t;else t = a[12];
  let m = t,
    label_2;
  if (a[13] !== i || a[14] !== l) label_2 = l ? i : e(n, {
    dimColor: !0,
    children: i
  }), a[13] = i, a[14] = l, a[15] = label_2;else label_2 = a[15];
  let Y;
  if (a[16] !== label_2) Y = {
    label: label_2,
    value: "cancel"
  }, a[16] = label_2, a[17] = Y;else Y = a[17];
  let d = Y,
    options;
  if (a[18] !== d || a[19] !== v || a[20] !== m) options = v ? [d, m] : [m, d], a[18] = d, a[19] = v, a[20] = m, a[21] = options;else options = a[21];
  const isDisabled = !l;
  let onChange;
  if (a[22] !== onCancel || a[23] !== onConfirm) onChange = j => j === "confirm" ? onConfirm() : onCancel(), a[22] = onCancel, a[23] = onConfirm, a[24] = onChange;else onChange = a[24];
  let k;
  if (a[25] !== hideIndexes_2 || a[26] !== onCancel || a[27] !== defaultFocusValue || a[28] !== options || a[29] !== isDisabled || a[30] !== onChange) k = e(Xe, {
    options: options,
    selectedValue: selectedValue,
    hideIndexes: hideIndexes_2,
    isDisabled: isDisabled,
    defaultFocusValue: defaultFocusValue,
    onChange: onChange,
    onCancel: onCancel
  }), a[25] = hideIndexes_2, a[26] = onCancel, a[27] = defaultFocusValue, a[28] = options, a[29] = isDisabled, a[30] = onChange, a[31] = k;else k = a[31];
  return k;
}
export { ptr, mVe, lr };