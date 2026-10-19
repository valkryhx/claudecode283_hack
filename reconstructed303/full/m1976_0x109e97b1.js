// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  s,
  n,
  Dr
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  No
} from "B:/~BUN/root/chunk-5xxjpbgm.js";
import {
  b,
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  dCt,
  ecr,
  tFe
} from "B:/~BUN/root/chunk-bz422xf8.js";
import {
  q
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  Xe
} from "B:/~BUN/root/chunk-nbjke4gr.js";
import {
  Se
} from "B:/~BUN/root/chunk-7dpyfa5r.js";
import {
  Gs
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  be
} from "B:/~BUN/root/chunk-nyga36vf.js";
import {
  gt
} from "B:/~BUN/root/chunk-vs438w4e.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  P,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();

function kwn(ce) {
  let t = w(32),
    {
      onDone: m,
      exitOnCtrlCD: O,
      surface: Q,
      onSaveFailed: h,
      timeout: f
    } = ce,
    o = Q === void 0 ? "cli" : Q,
    [W, X] = y(!1),
    v = A(!1),
    C = Dr(No),
    Z, j;
  if (t[0] !== o) Z = () => {
    i("tengu_served_unattended_consent", {
      action: b("shown"),
      surface: c(o)
    })
  }, j = [o], t[0] = o, t[1] = Z, t[2] = j;
  else Z = t[1], j = t[2];
  P(Z, j);
  let Y;
  if (t[3] !== o || t[4] !== f) Y = () => {
    if (v.current) {
      return
    }
    v.current = !0, X(!0), i("tengu_served_unattended_consent", {
      action: b("timed_out"),
      surface: c(o)
    }), f?.onTimedOut()
  }, t[3] = o, t[4] = f, t[5] = Y;
  else Y = t[5];
  Dr(Y, f === void 0 || W ? null : f.ms);
  let E;
  if (t[6] !== C || t[7] !== m || t[8] !== h || t[9] !== o) E = function d(p) {
    if (v.current || !C) {
      return
    }
    if (v.current = !0, X(!0), i("tengu_served_unattended_consent", {
        action: c(p),
        surface: c(o)
      }), p === "not_now") {
      m(p);
      return
    }
    tFe(p).then((ee) => {
      if (!ee) h?.();
      m(ee ? p : "not_now")
    }, (ae) => {
      l(ae), h?.(), m("not_now")
    })
  }, t[6] = C, t[7] = m, t[8] = h, t[9] = o, t[10] = E;
  else E = t[10];
  let d = E;
  if (W) {
    return null
  }
  let ne = o !== "cli",
    D;
  if (t[11] !== d) D = () => d("not_now"), t[11] = d, t[12] = D;
  else D = t[12];
  let te;
  if (t[13] === S) te = r(Se, {
    children: [e(q, {
      chord: "enter",
      action: "confirm"
    }), e(gt, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "skip for now"
    })]
  }), t[13] = te;
  else te = t[13];
  const T = ne ? Gs["consent.unattended.upfront.body"] : Gs["consent.unattended.body"];
  let g;
  if (t[14] !== T) g = e(n, {
    children: T
  }), t[14] = T, t[15] = g;
  else g = t[15];
  const G = !ne && `${Gs["consent.unattended.detail"]} `;
  let x;
  if (t[16] === S) x = Gs.consent_unattended_saved(ecr()), t[16] = x;
  else x = t[16];
  let F;
  if (t[17] !== G || t[18] !== x) F = r(n, {
    dimColor: !0,
    children: [G, x]
  }), t[17] = G, t[18] = x, t[19] = F;
  else F = t[19];
  let R;
  if (t[20] !== F || t[21] !== g) R = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [g, F]
  }), t[20] = F, t[21] = g, t[22] = R;
  else R = t[22];
  let oe;
  if (t[23] === S) oe = [{
    label: `Yes, allow unattended commands on ${dCt()}`,
    value: "accepted"
  }, {
    label: "No \u2014 ask me before each command",
    value: "declined"
  }, {
    label: "Not now",
    value: "not_now"
  }], t[23] = oe;
  else oe = t[23];
  const I = !C;
  let k;
  if (t[24] !== d || t[25] !== I) k = e(Xe, {
    options: oe,
    defaultFocusValue: "not_now",
    hideIndexes: !0,
    disablePrintableKeybindings: !0,
    isDisabled: I,
    onChange: d
  }), t[24] = d, t[25] = I, t[26] = k;
  else k = t[26];
  let ie;
  if (t[27] !== O || t[28] !== R || t[29] !== k || t[30] !== D) ie = r(be, {
    title: Gs["consent.unattended.title"],
    onCancel: D,
    exitOnCtrlCD: O,
    inputGuide: te,
    children: [R, k]
  }), t[27] = O, t[28] = R, t[29] = k, t[30] = D, t[31] = ie;
  else ie = t[31];
  return ie
}
export {
  kwn
};
