// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { fV, Le, A4 } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Jn } from "B:/~BUN/root/chunk-yd5nr5hc.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { cle, vUe } from "B:/~BUN/root/chunk-bdxfgzxk.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
function M1r(E) {
  let o = S(20),
    {
      customApiKeyTruncated: customApiKeyTruncated,
      onDone: onDone
    } = E,
    {
      storageV5: storageV5
    } = Fe(),
    paddingLeft = cle() ? 2 : 0,
    C;
  if (o[0] !== customApiKeyTruncated || o[1] !== onDone || o[2] !== storageV5) C = function t(L) {
    G: switch (L) {
      case "yes":
        {
          Le(b => {
            let {
              approved: approved,
              rejected: rejected
            } = A4(b);
            return {
              ...b,
              customApiKeyResponses: {
                approved: [...approved, customApiKeyTruncated],
                rejected: rejected
              }
            };
          }, storageV5), fV(), onDone(!0);
          break G;
        }
      case "no":
        {
          Le(D => {
            let {
              approved: approved_2,
              rejected: rejected_2
            } = A4(D);
            return {
              ...D,
              customApiKeyResponses: {
                approved: approved_2,
                rejected: [...rejected_2, customApiKeyTruncated]
              }
            };
          }, storageV5), onDone(!1);
        }
    }
  }, o[0] = customApiKeyTruncated, o[1] = onDone, o[2] = storageV5, o[3] = C;else C = o[3];
  let t = C,
    onCancel;
  if (o[4] !== t) onCancel = () => t("no"), o[4] = t, o[5] = onCancel;else onCancel = o[5];
  let I;
  if (o[6] === w) I = e(vUe, {
    bold: !0,
    children: "ANTHROPIC_API_KEY"
  }), o[6] = I;else I = o[6];
  let children;
  if (o[7] !== customApiKeyTruncated) children = r(n, {
    children: [I, r(n, {
      children: [": sk-ant-...", customApiKeyTruncated]
    })]
  }), o[7] = customApiKeyTruncated, o[8] = children;else children = o[8];
  let p;
  if (o[9] !== paddingLeft || o[10] !== children) p = e(s, {
    paddingLeft: paddingLeft,
    children: children
  }), o[9] = paddingLeft, o[10] = children, o[11] = p;else p = o[11];
  let P;
  if (o[12] === w) P = e(n, {
    children: "Do you want to use this API key?"
  }), o[12] = P;else P = o[12];
  let cancelLabel;
  if (o[13] === w) cancelLabel = r(n, {
    children: ["No (", e(vUe, {
      bold: !0,
      children: "recommended"
    }), ")"]
  }), o[13] = cancelLabel;else cancelLabel = o[13];
  let m;
  if (o[14] !== t) m = e(Jn, {
    hideIndexes: !0,
    focus: "cancel",
    cancelLabel: cancelLabel,
    onConfirm: () => t("yes"),
    onCancel: () => t("no")
  }), o[14] = t, o[15] = m;else m = o[15];
  let k;
  if (o[16] !== onCancel || o[17] !== p || o[18] !== m) k = r(ke, {
    title: "Detected a custom API key in your environment",
    color: "warning",
    onCancel: onCancel,
    exitOnCtrlCD: !0,
    children: [p, P, m]
  }), o[16] = onCancel, o[17] = p, o[18] = m, o[19] = k;else k = o[19];
  return k;
}
export { M1r };