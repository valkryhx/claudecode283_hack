// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { n, _t, _r } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Dl } from "B:/~BUN/root/chunk-1223v177.js";
import { yvn, ii as selectedValue, Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var z = 500;
function Iyt(L = z) {
  let r = Dl();
  return _r(L, r);
}
function qn(L) {
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
    j = focus === void 0 ? "confirm" : focus,
    hideIndexes_2 = hideIndexes === void 0 ? !1 : hideIndexes,
    [defaultFocusValue] = g(j),
    l = Iyt(armAfterMs ?? null) || armAfterMs === void 0;
  if (_t()) {
    const windowMs_2 = windowMs ?? armAfterMs;
    let t;
    if (a[0] !== i || a[1] !== s || a[2] !== onCancel || a[3] !== onConfirm || a[4] !== openedAt || a[5] !== refuseInput || a[6] !== windowMs_2) t = e(yvn, {
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
  let k;
  if (a[16] !== label_2) k = {
    label: label_2,
    value: "cancel"
  }, a[16] = label_2, a[17] = k;else k = a[17];
  let d = k,
    options;
  if (a[18] !== d || a[19] !== v || a[20] !== m) options = v ? [d, m] : [m, d], a[18] = d, a[19] = v, a[20] = m, a[21] = options;else options = a[21];
  const isDisabled = !l;
  let onChange;
  if (a[22] !== onCancel || a[23] !== onConfirm) onChange = ee => ee === "confirm" ? onConfirm() : onCancel(), a[22] = onCancel, a[23] = onConfirm, a[24] = onChange;else onChange = a[24];
  let q;
  if (a[25] !== hideIndexes_2 || a[26] !== onCancel || a[27] !== defaultFocusValue || a[28] !== options || a[29] !== isDisabled || a[30] !== onChange) q = e(Fe, {
    options: options,
    selectedValue: selectedValue,
    hideIndexes: hideIndexes_2,
    isDisabled: isDisabled,
    defaultFocusValue: defaultFocusValue,
    onChange: onChange,
    onCancel: onCancel
  }), a[25] = hideIndexes_2, a[26] = onCancel, a[27] = defaultFocusValue, a[28] = options, a[29] = isDisabled, a[30] = onChange, a[31] = q;else q = a[31];
  return q;
}
export { Iyt, qn };