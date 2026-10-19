// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { No } from "B:/~BUN/root/chunk-5xxjpbgm.js";
import { Za, l_, cs } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { pU, xh } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { lr } from "B:/~BUN/root/chunk-v8w1g8ga.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { $Vr, KQ, UVr, BVr } from "B:/~BUN/root/chunk-ga160ee8.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S, yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function onCancel() {}
function ftt(ae) {
  let i = w(55),
    {
      offer: offer,
      entry: entry,
      credentials: credentials,
      onDone: onDone
    } = ae,
    [Q, fe] = y(!1),
    x = A(!1),
    g = Za(No),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused
    } = cs(),
    V = l_(),
    E,
    k,
    onCancel_2,
    refuseInput,
    H,
    X,
    openedAt,
    windowMs,
    hideIndexes,
    confirmLabel,
    cancelLabel,
    title,
    onCancel_3,
    color,
    onConfirm;
  if (i[0] !== Q || i[1] !== credentials || i[2] !== entry || i[3] !== g || i[4] !== noteRefused || i[5] !== offer || i[6] !== onDone || i[7] !== refusedWithin || i[8] !== V) {
    X = yn;
    Oe: {
      let c = pU();
      let u = KQ(offer);
      let l;
      if (i[24] !== offer) l = $Vr(offer), i[24] = offer, i[25] = l;else l = i[25];
      let children_2 = l;
      let h;
      if (i[26] !== g || i[27] !== noteRefused || i[28] !== refusedWithin) h = function p() {
        if (g() || refusedWithin(No)) {
          return noteRefused(), !0;
        }
        return !1;
      }, i[26] = g, i[27] = noteRefused, i[28] = refusedWithin, i[29] = h;else h = i[29];
      let p = h;
      let F;
      if (i[30] !== entry || i[31] !== offer || i[32] !== onDone || i[33] !== p) F = function m() {
        if (x.current || p()) {
          return;
        }
        x.current = !0, onDone(UVr(entry, offer));
      }, i[30] = entry, i[31] = offer, i[32] = onDone, i[33] = p, i[34] = F;else F = i[34];
      onCancel_2 = F;
      onConfirm = function D() {
        if (x.current || p()) {
          return;
        }
        x.current = !0, fe(!0), BVr(entry, credentials, offer).then(onDone).catch(() => {
          onDone({
            outcome: "unavailable",
            text: xh(offer.origin === "wall" ? c.unconfirmedLine : c.unconfirmedAnytimeLine, u)
          });
        });
      };
      if (Q) {
        let children;
        if (i[35] === S) children = e(n, {
          dimColor: !0,
          children: "Resetting your limits\u2026 this usually takes a few seconds"
        }), i[35] = children;else children = i[35];
        X = e(be, {
          title: xh(c.confirmTitle, u),
          onCancel: onCancel,
          exitOnCtrlCD: !0,
          color: "suggestion",
          hideInputGuide: !0,
          children: children
        });
        break Oe;
      }
      k = be;
      title = xh(c.confirmTitle, u);
      onCancel_3 = onCancel_2;
      color = "suggestion";
      let L;
      if (i[36] !== children_2) L = children_2 === void 0 ? null : e(n, {
        children: children_2
      }), i[36] = children_2, i[37] = L;else L = i[37];
      H = r(s, {
        flexDirection: "column",
        children: [L, e(n, {
          children: xh(c.confirmBody, u)
        }), e(n, {
          dimColor: !0,
          children: xh(c.confirmDetail, u)
        })]
      });
      E = lr;
      refuseInput = p;
      openedAt = V;
      windowMs = No;
      hideIndexes = !0;
      confirmLabel = xh(c.confirmYes, u);
      cancelLabel = xh(c.confirmNo, u);
    }
    i[0] = Q, i[1] = credentials, i[2] = entry, i[3] = g, i[4] = noteRefused, i[5] = offer, i[6] = onDone, i[7] = refusedWithin, i[8] = V, i[9] = E, i[10] = k, i[11] = onCancel_2, i[12] = refuseInput, i[13] = H, i[14] = X, i[15] = openedAt, i[16] = windowMs, i[17] = hideIndexes, i[18] = confirmLabel, i[19] = cancelLabel, i[20] = title, i[21] = onCancel_3, i[22] = color, i[23] = onConfirm;
  } else E = i[9], k = i[10], onCancel_2 = i[11], refuseInput = i[12], H = i[13], X = i[14], openedAt = i[15], windowMs = i[16], hideIndexes = i[17], confirmLabel = i[18], cancelLabel = i[19], title = i[20], onCancel_3 = i[21], color = i[22], onConfirm = i[23];
  if (X !== yn) return X;
  let l;
  if (i[38] !== E || i[39] !== onCancel_2 || i[40] !== refuseInput || i[41] !== openedAt || i[42] !== windowMs || i[43] !== hideIndexes || i[44] !== confirmLabel || i[45] !== cancelLabel || i[46] !== onConfirm) l = e(E, {
    refuseInput: refuseInput,
    openedAt: openedAt,
    windowMs: windowMs,
    hideIndexes: hideIndexes,
    confirmLabel: confirmLabel,
    cancelLabel: cancelLabel,
    onConfirm: onConfirm,
    onCancel: onCancel_2
  }), i[38] = E, i[39] = onCancel_2, i[40] = refuseInput, i[41] = openedAt, i[42] = windowMs, i[43] = hideIndexes, i[44] = confirmLabel, i[45] = cancelLabel, i[46] = onConfirm, i[47] = l;else l = i[47];
  let h;
  if (i[48] !== k || i[49] !== H || i[50] !== l || i[51] !== title || i[52] !== onCancel_3 || i[53] !== color) h = r(k, {
    title: title,
    onCancel: onCancel_3,
    color: color,
    children: [H, l]
  }), i[48] = k, i[49] = H, i[50] = l, i[51] = title, i[52] = onCancel_3, i[53] = color, i[54] = h;else h = i[54];
  return h;
}
export { ftt };