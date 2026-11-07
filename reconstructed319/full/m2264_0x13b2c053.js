// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  fV,
  Le,
  A4
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Fe
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Jn
} from "B:/~BUN/root/chunk-yd5nr5hc.js";
import {
  ke
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  cle,
  vUe
} from "B:/~BUN/root/chunk-bdxfgzxk.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";

function M1r(E) {
  let o = S(20),
    {
      customApiKeyTruncated: a,
      onDone: c
    } = E,
    {
      storageV5: d
    } = Fe(),
    y = cle() ? 2 : 0,
    C;
  if (o[0] !== a || o[1] !== c || o[2] !== d) C = function t(L) {
    G: switch (L) {
      case "yes": {
        Le((b) => {
          let {
            approved: V,
            rejected: H
          } = A4(b);
          return {
            ...b,
            customApiKeyResponses: {
              approved: [...V, a],
              rejected: H
            }
          }
        }, d), fV(), c(!0);
        break G
      }
      case "no": {
        Le((D) => {
          let {
            approved: O,
            rejected: Y
          } = A4(D);
          return {
            ...D,
            customApiKeyResponses: {
              approved: O,
              rejected: [...Y, a]
            }
          }
        }, d), c(!1)
      }
    }
  }, o[0] = a, o[1] = c, o[2] = d, o[3] = C;
  else C = o[3];
  let t = C,
    i;
  if (o[4] !== t) i = () => t("no"), o[4] = t, o[5] = i;
  else i = o[5];
  let I;
  if (o[6] === w) I = e(vUe, {
    bold: !0,
    children: "ANTHROPIC_API_KEY"
  }), o[6] = I;
  else I = o[6];
  let u;
  if (o[7] !== a) u = r(n, {
    children: [I, r(n, {
      children: [": sk-ant-...", a]
    })]
  }), o[7] = a, o[8] = u;
  else u = o[8];
  let p;
  if (o[9] !== y || o[10] !== u) p = e(s, {
    paddingLeft: y,
    children: u
  }), o[9] = y, o[10] = u, o[11] = p;
  else p = o[11];
  let P;
  if (o[12] === w) P = e(n, {
    children: "Do you want to use this API key?"
  }), o[12] = P;
  else P = o[12];
  let T;
  if (o[13] === w) T = r(n, {
    children: ["No (", e(vUe, {
      bold: !0,
      children: "recommended"
    }), ")"]
  }), o[13] = T;
  else T = o[13];
  let m;
  if (o[14] !== t) m = e(Jn, {
    hideIndexes: !0,
    focus: "cancel",
    cancelLabel: T,
    onConfirm: () => t("yes"),
    onCancel: () => t("no")
  }), o[14] = t, o[15] = m;
  else m = o[15];
  let k;
  if (o[16] !== i || o[17] !== p || o[18] !== m) k = r(ke, {
    title: "Detected a custom API key in your environment",
    color: "warning",
    onCancel: i,
    exitOnCtrlCD: !0,
    children: [p, P, m]
  }), o[16] = i, o[17] = p, o[18] = m, o[19] = k;
  else k = o[19];
  return k
}
export {
  M1r
};
