// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Lp
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  ai
} from "B:/~BUN/root/chunk-3hjtxzqy.js";
import {
  g6
} from "B:/~BUN/root/chunk-t1afcev5.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  dn
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  sXe
} from "B:/~BUN/root/chunk-bm2wsr80.js";
import {
  qn
} from "B:/~BUN/root/chunk-pet3tnhj.js";
import {
  ge
} from "B:/~BUN/root/chunk-51erc9xb.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  lS
} from "B:/~BUN/root/chunk-qacpyzq5.js";

function q(H) {
  return {
    ...H,
    cacheMissAckedAtOutputTokens: Lp()
  }
}
var M = 6;

function OQ(z) {
  let i = w(25),
    {
      kind: F,
      model: k,
      effort: a,
      hookReason: o,
      onConfirm: C,
      onCancel: t
    } = z,
    {
      columns: b
    } = ve(),
    g = dn(),
    l = F === "model",
    R = l ? "Switch model?" : "Change effort level?",
    v = l ? "model" : "effort level",
    T;
  if (i[0] !== a || i[1] !== l || i[2] !== k) T = l ? lS(k) : a !== void 0 ? g6(a) : "auto", i[0] = a, i[1] = l, i[2] = k, i[3] = T;
  else T = i[3];
  let m = T,
    B;
  if (i[4] !== o || i[5] !== C || i[6] !== g) B = function c() {
    if (o === void 0) g(q);
    C()
  }, i[4] = o, i[5] = C, i[6] = g, i[7] = B;
  else B = i[7];
  let c = B;
  const x = o !== void 0 ? "A PreModelSwitch hook asked you to confirm" : "Your next response will be slower and use more tokens";
  let d;
  if (i[8] !== b || i[9] !== o || i[10] !== m || i[11] !== v) d = o !== void 0 ? e(n, {
    children: sXe(ai(o).text, b, M + 1)
  }) : r(n, {
    children: ["This conversation is cached for the current ", v, ". Switching to", " ", e(n, {
      bold: !0,
      children: m
    }), " means the full history gets re-read on your next message."]
  }), i[8] = b, i[9] = o, i[10] = m, i[11] = v, i[12] = d;
  else d = i[12];
  const y = `Yes, switch to ${m}`;
  let p;
  if (i[13] !== c || i[14] !== t || i[15] !== y) p = e(qn, {
    confirmLabel: y,
    cancelLabel: "No, go back",
    onConfirm: c,
    onCancel: t
  }), i[13] = c, i[14] = t, i[15] = y, i[16] = p;
  else p = i[16];
  let u;
  if (i[17] !== d || i[18] !== p) u = r(s, {
    flexDirection: "column",
    gap: 1,
    marginBottom: 1,
    children: [d, p]
  }), i[17] = d, i[18] = p, i[19] = u;
  else u = i[19];
  let D;
  if (i[20] !== t || i[21] !== x || i[22] !== u || i[23] !== R) D = e(ge, {
    title: R,
    subtitle: x,
    color: "warning",
    onCancel: t,
    hideInputGuide: !0,
    children: u
  }), i[20] = t, i[21] = x, i[22] = u, i[23] = R, i[24] = D;
  else D = i[24];
  return D
}
export {
  OQ
};
