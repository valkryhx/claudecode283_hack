// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Lp } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { ai } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { g6 } from "B:/~BUN/root/chunk-t1afcev5.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { dn } from "B:/~BUN/root/chunk-h23911wn.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { sXe } from "B:/~BUN/root/chunk-bm2wsr80.js";
import { qn } from "B:/~BUN/root/chunk-pet3tnhj.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { lS } from "B:/~BUN/root/chunk-qacpyzq5.js";
function q(H) {
  return {
    ...H,
    cacheMissAckedAtOutputTokens: Lp()
  };
}
var M = 6;
function OQ(z) {
  let i = w(25),
    {
      kind: kind,
      model: model,
      effort: effort,
      hookReason: hookReason,
      onConfirm: onConfirm,
      onCancel: onCancel
    } = z,
    {
      columns: columns
    } = ve(),
    g = dn(),
    l = kind === "model",
    title = l ? "Switch model?" : "Change effort level?",
    v = l ? "model" : "effort level",
    T;
  if (i[0] !== effort || i[1] !== l || i[2] !== model) T = l ? lS(model) : effort !== void 0 ? g6(effort) : "auto", i[0] = effort, i[1] = l, i[2] = model, i[3] = T;else T = i[3];
  let children = T,
    B;
  if (i[4] !== hookReason || i[5] !== onConfirm || i[6] !== g) B = function c() {
    if (hookReason === void 0) g(q);
    onConfirm();
  }, i[4] = hookReason, i[5] = onConfirm, i[6] = g, i[7] = B;else B = i[7];
  let onConfirm_2 = B;
  const subtitle = hookReason !== void 0 ? "A PreModelSwitch hook asked you to confirm" : "Your next response will be slower and use more tokens";
  let d;
  if (i[8] !== columns || i[9] !== hookReason || i[10] !== children || i[11] !== v) d = hookReason !== void 0 ? e(n, {
    children: sXe(ai(hookReason).text, columns, M + 1)
  }) : r(n, {
    children: ["This conversation is cached for the current ", v, ". Switching to", " ", e(n, {
      bold: !0,
      children: children
    }), " means the full history gets re-read on your next message."]
  }), i[8] = columns, i[9] = hookReason, i[10] = children, i[11] = v, i[12] = d;else d = i[12];
  const confirmLabel = `Yes, switch to ${children}`;
  let p;
  if (i[13] !== onConfirm_2 || i[14] !== onCancel || i[15] !== confirmLabel) p = e(qn, {
    confirmLabel: confirmLabel,
    cancelLabel: "No, go back",
    onConfirm: onConfirm_2,
    onCancel: onCancel
  }), i[13] = onConfirm_2, i[14] = onCancel, i[15] = confirmLabel, i[16] = p;else p = i[16];
  let children_2;
  if (i[17] !== d || i[18] !== p) children_2 = r(s, {
    flexDirection: "column",
    gap: 1,
    marginBottom: 1,
    children: [d, p]
  }), i[17] = d, i[18] = p, i[19] = children_2;else children_2 = i[19];
  let D;
  if (i[20] !== onCancel || i[21] !== subtitle || i[22] !== children_2 || i[23] !== title) D = e(ge, {
    title: title,
    subtitle: subtitle,
    color: "warning",
    onCancel: onCancel,
    hideInputGuide: !0,
    children: children_2
  }), i[20] = onCancel, i[21] = subtitle, i[22] = children_2, i[23] = title, i[24] = D;else D = i[24];
  return D;
}
export { OQ };