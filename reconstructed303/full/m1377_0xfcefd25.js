// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  n,
  ot,
  Dr
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  oc
} from "B:/~BUN/root/chunk-t7y4rt40.js";
import {
  Cnr,
  Hi,
  Xe
} from "B:/~BUN/root/chunk-nbjke4gr.js";
import {
  e
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
var ptr = 500;

function mVe(L = ptr) {
  let r = oc();
  return Dr(L, r)
}

function lr(L) {
  let a = w(32),
    {
      onConfirm: r,
      onCancel: o,
      confirmLabel: g,
      cancelLabel: D,
      cancelFirst: P,
      focus: V,
      hideIndexes: X,
      refuseInput: M,
      openedAt: F,
      windowMs: W,
      armAfterMs: I
    } = L,
    s = g === void 0 ? "Yes" : g,
    i = D === void 0 ? "No" : D,
    v = P === void 0 ? !1 : P,
    Z = V === void 0 ? "confirm" : V,
    x = X === void 0 ? !1 : X,
    [N] = y(Z),
    l = mVe(I ?? null) || I === void 0;
  if (ot()) {
    const c = W ?? I;
    let t;
    if (a[0] !== i || a[1] !== s || a[2] !== o || a[3] !== r || a[4] !== F || a[5] !== M || a[6] !== c) t = e(Cnr, {
      confirmLabel: s,
      cancelLabel: i,
      onConfirm: r,
      onCancel: o,
      refuseInput: M,
      openedAt: F,
      windowMs: c
    }), a[0] = i, a[1] = s, a[2] = o, a[3] = r, a[4] = F, a[5] = M, a[6] = c, a[7] = t;
    else t = a[7];
    return t
  }
  let c;
  if (a[8] !== s || a[9] !== l) c = l ? s : e(n, {
    dimColor: !0,
    children: s
  }), a[8] = s, a[9] = l, a[10] = c;
  else c = a[10];
  let t;
  if (a[11] !== c) t = {
    label: c,
    value: "confirm"
  }, a[11] = c, a[12] = t;
  else t = a[12];
  let m = t,
    f;
  if (a[13] !== i || a[14] !== l) f = l ? i : e(n, {
    dimColor: !0,
    children: i
  }), a[13] = i, a[14] = l, a[15] = f;
  else f = a[15];
  let Y;
  if (a[16] !== f) Y = {
    label: f,
    value: "cancel"
  }, a[16] = f, a[17] = Y;
  else Y = a[17];
  let d = Y,
    u;
  if (a[18] !== d || a[19] !== v || a[20] !== m) u = v ? [d, m] : [m, d], a[18] = d, a[19] = v, a[20] = m, a[21] = u;
  else u = a[21];
  const E = !l;
  let b;
  if (a[22] !== o || a[23] !== r) b = (j) => j === "confirm" ? r() : o(), a[22] = o, a[23] = r, a[24] = b;
  else b = a[24];
  let k;
  if (a[25] !== x || a[26] !== o || a[27] !== N || a[28] !== u || a[29] !== E || a[30] !== b) k = e(Xe, {
    options: u,
    selectedValue: Hi,
    hideIndexes: x,
    isDisabled: E,
    defaultFocusValue: N,
    onChange: b,
    onCancel: o
  }), a[25] = x, a[26] = o, a[27] = N, a[28] = u, a[29] = E, a[30] = b, a[31] = k;
  else k = a[31];
  return k
}
export {
  ptr,
  mVe,
  lr
};
