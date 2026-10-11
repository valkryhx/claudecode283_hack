// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ee, xI } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { qn } from "B:/~BUN/root/chunk-pet3tnhj.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
function Jyn(N) {
  let o = w(17),
    {
      customApiKeyTruncated: customApiKeyTruncated,
      onDone: onDone
    } = N,
    {
      storageV5: storageV5
    } = ke(),
    g;
  if (o[0] !== customApiKeyTruncated || o[1] !== onDone || o[2] !== storageV5) g = function t(x) {
    M: switch (x) {
      case "yes":
        {
          Ee(v => {
            let {
              approved: approved,
              rejected: rejected
            } = xI(v);
            return {
              ...v,
              customApiKeyResponses: {
                approved: [...approved, customApiKeyTruncated],
                rejected: rejected
              }
            };
          }, storageV5), onDone(!0);
          break M;
        }
      case "no":
        {
          Ee(A => {
            let {
              approved: approved_2,
              rejected: rejected_2
            } = xI(A);
            return {
              ...A,
              customApiKeyResponses: {
                approved: approved_2,
                rejected: [...rejected_2, customApiKeyTruncated]
              }
            };
          }, storageV5), onDone(!1);
        }
    }
  }, o[0] = customApiKeyTruncated, o[1] = onDone, o[2] = storageV5, o[3] = g;else g = o[3];
  let t = g,
    onCancel;
  if (o[4] !== t) onCancel = () => t("no"), o[4] = t, o[5] = onCancel;else onCancel = o[5];
  let C;
  if (o[6] === S) C = e(n, {
    bold: !0,
    children: "ANTHROPIC_API_KEY"
  }), o[6] = C;else C = o[6];
  let i;
  if (o[7] !== customApiKeyTruncated) i = r(n, {
    children: [C, r(n, {
      children: [": sk-ant-...", customApiKeyTruncated]
    })]
  }), o[7] = customApiKeyTruncated, o[8] = i;else i = o[8];
  let b;
  if (o[9] === S) b = e(n, {
    children: "Do you want to use this API key?"
  }), o[9] = b;else b = o[9];
  let cancelLabel;
  if (o[10] === S) cancelLabel = r(n, {
    children: ["No (", e(n, {
      bold: !0,
      children: "recommended"
    }), ")"]
  }), o[10] = cancelLabel;else cancelLabel = o[10];
  let u;
  if (o[11] !== t) u = e(qn, {
    hideIndexes: !0,
    focus: "cancel",
    cancelLabel: cancelLabel,
    onConfirm: () => t("yes"),
    onCancel: () => t("no")
  }), o[11] = t, o[12] = u;else u = o[12];
  let P;
  if (o[13] !== onCancel || o[14] !== i || o[15] !== u) P = r(ge, {
    title: "Detected a custom API key in your environment",
    color: "warning",
    onCancel: onCancel,
    exitOnCtrlCD: !0,
    children: [i, b, u]
  }), o[13] = onCancel, o[14] = i, o[15] = u, o[16] = P;else P = o[16];
  return P;
}
export { Jyn };