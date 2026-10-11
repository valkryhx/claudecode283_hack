// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { oo } from "B:/~BUN/root/chunk-1a6hgte8.js";
import { Gi, yh, rs } from "B:/~BUN/root/chunk-bt71g93n.js";
import { qn } from "B:/~BUN/root/chunk-pet3tnhj.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { LM, cm } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Y7n, FK, X7n, J7n } from "B:/~BUN/root/chunk-5dh7ejty.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S, hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function onCancel() {}
function A1e(ae) {
  let i = w(55),
    {
      offer: offer,
      entry: entry,
      credentials: credentials,
      onDone: onDone
    } = ae,
    [Q, fe] = g(!1),
    x = T(!1),
    v = Gi(oo),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused
    } = rs(),
    V = yh(),
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
  if (i[0] !== Q || i[1] !== credentials || i[2] !== entry || i[3] !== v || i[4] !== noteRefused || i[5] !== offer || i[6] !== onDone || i[7] !== refusedWithin || i[8] !== V) {
    X = hn;
    Oe: {
      let c = LM();
      let u = FK(offer);
      let l;
      if (i[24] !== offer) l = Y7n(offer), i[24] = offer, i[25] = l;else l = i[25];
      let children_2 = l;
      let h;
      if (i[26] !== v || i[27] !== noteRefused || i[28] !== refusedWithin) h = function p() {
        if (v() || refusedWithin(oo)) {
          return noteRefused(), !0;
        }
        return !1;
      }, i[26] = v, i[27] = noteRefused, i[28] = refusedWithin, i[29] = h;else h = i[29];
      let p = h;
      let F;
      if (i[30] !== entry || i[31] !== offer || i[32] !== onDone || i[33] !== p) F = function m() {
        if (x.current || p()) {
          return;
        }
        x.current = !0, onDone(X7n(entry, offer));
      }, i[30] = entry, i[31] = offer, i[32] = onDone, i[33] = p, i[34] = F;else F = i[34];
      onCancel_2 = F;
      onConfirm = function D() {
        if (x.current || p()) {
          return;
        }
        x.current = !0, fe(!0), J7n(entry, credentials, offer).then(onDone).catch(() => {
          onDone({
            outcome: "unavailable",
            text: cm(offer.origin === "wall" ? c.unconfirmedLine : c.unconfirmedAnytimeLine, u)
          });
        });
      };
      if (Q) {
        let children;
        if (i[35] === S) children = e(n, {
          dimColor: !0,
          children: "Resetting your limits\u2026 this usually takes a few seconds"
        }), i[35] = children;else children = i[35];
        X = e(ge, {
          title: cm(c.confirmTitle, u),
          onCancel: onCancel,
          exitOnCtrlCD: !0,
          color: "suggestion",
          hideInputGuide: !0,
          children: children
        });
        break Oe;
      }
      k = ge;
      title = cm(c.confirmTitle, u);
      onCancel_3 = onCancel_2;
      color = "suggestion";
      let L;
      if (i[36] !== children_2) L = children_2 === void 0 ? null : e(n, {
        children: children_2
      }), i[36] = children_2, i[37] = L;else L = i[37];
      H = r(s, {
        flexDirection: "column",
        children: [L, e(n, {
          children: cm(c.confirmBody, u)
        }), e(n, {
          dimColor: !0,
          children: cm(c.confirmDetail, u)
        })]
      });
      E = qn;
      refuseInput = p;
      openedAt = V;
      windowMs = oo;
      hideIndexes = !0;
      confirmLabel = cm(c.confirmYes, u);
      cancelLabel = cm(c.confirmNo, u);
    }
    i[0] = Q, i[1] = credentials, i[2] = entry, i[3] = v, i[4] = noteRefused, i[5] = offer, i[6] = onDone, i[7] = refusedWithin, i[8] = V, i[9] = E, i[10] = k, i[11] = onCancel_2, i[12] = refuseInput, i[13] = H, i[14] = X, i[15] = openedAt, i[16] = windowMs, i[17] = hideIndexes, i[18] = confirmLabel, i[19] = cancelLabel, i[20] = title, i[21] = onCancel_3, i[22] = color, i[23] = onConfirm;
  } else E = i[9], k = i[10], onCancel_2 = i[11], refuseInput = i[12], H = i[13], X = i[14], openedAt = i[15], windowMs = i[16], hideIndexes = i[17], confirmLabel = i[18], cancelLabel = i[19], title = i[20], onCancel_3 = i[21], color = i[22], onConfirm = i[23];
  if (X !== hn) return X;
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
export { A1e };