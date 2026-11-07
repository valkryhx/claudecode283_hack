// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { xo } from "B:/~BUN/root/chunk-tzwf3sbj.js";
import { si, Qc, so, ti as selectedValue, Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { v$, d_ } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Jn } from "B:/~BUN/root/chunk-yd5nr5hc.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { uGt, iFo, Xme, Wjr, aFo, lFo, dFo } from "B:/~BUN/root/chunk-r4qq9v7n.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function onCancel() {}
function rUe(ce) {
  let t = S(55),
    {
      offer: offer,
      entry: entry,
      credentials: credentials,
      onDone: onDone
    } = ce,
    [u, I] = y(!1),
    T = A(!1),
    b = si(xo),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused
    } = so(),
    K = Qc(),
    m,
    i,
    onCancel_2,
    refuseInput,
    R,
    z,
    openedAt,
    windowMs,
    hideIndexes,
    confirmLabel,
    cancelLabel,
    title_2,
    onCancel_3,
    color,
    onConfirm;
  if (t[0] !== u || t[1] !== credentials || t[2] !== entry || t[3] !== b || t[4] !== noteRefused || t[5] !== offer || t[6] !== onDone || t[7] !== refusedWithin || t[8] !== K) {
    z = Pn;
    io: {
      let c = v$();
      let L = Xme(offer);
      let H;
      if (t[24] !== offer) H = iFo(offer), t[24] = offer, t[25] = H;else H = t[25];
      let children_2 = H;
      let Y;
      if (t[26] !== b || t[27] !== noteRefused || t[28] !== refusedWithin) Y = function N() {
        if (b() || refusedWithin(xo)) {
          return noteRefused(), !0;
        }
        return !1;
      }, t[26] = b, t[27] = noteRefused, t[28] = refusedWithin, t[29] = Y;else Y = t[29];
      let N = Y;
      let le;
      if (t[30] !== entry || t[31] !== offer || t[32] !== onDone || t[33] !== N) le = function v() {
        if (T.current || N()) {
          return;
        }
        T.current = !0, onDone(aFo(entry, offer));
      }, t[30] = entry, t[31] = offer, t[32] = onDone, t[33] = N, t[34] = le;else le = t[34];
      onCancel_2 = le;
      onConfirm = function x() {
        if (T.current || N()) {
          return;
        }
        T.current = !0, I(!0), dFo(entry, credentials, offer).then(onDone).catch(() => {
          onDone({
            outcome: "unavailable",
            text: d_(offer.origin === "wall" ? c.unconfirmedLine : c.unconfirmedAnytimeLine, L)
          });
        });
      };
      if (u) {
        const title = d_(c.confirmTitle, L);
        let children;
        if (t[35] === w) children = e(n, {
          dimColor: !0,
          children: "Resetting your limits\u2026 this usually takes a few seconds"
        }), t[35] = children;else children = t[35];
        z = e(ke, {
          title: title,
          onCancel: onCancel,
          exitOnCtrlCD: !0,
          color: "suggestion",
          hideInputGuide: !0,
          children: children
        });
        break io;
      }
      i = ke;
      title_2 = d_(c.confirmTitle, L);
      onCancel_3 = onCancel_2;
      color = "suggestion";
      let Q;
      if (t[36] !== children_2) Q = children_2 === void 0 ? null : e(n, {
        children: children_2
      }), t[36] = children_2, t[37] = Q;else Q = t[37];
      R = r(s, {
        flexDirection: "column",
        children: [Q, e(n, {
          children: d_(c.confirmBody, L)
        }), e(n, {
          dimColor: !0,
          children: d_(c.confirmDetail, L)
        })]
      });
      m = Jn;
      refuseInput = N;
      openedAt = K;
      windowMs = xo;
      hideIndexes = !0;
      confirmLabel = d_(c.confirmYes, L);
      cancelLabel = d_(c.confirmNo, L);
    }
    t[0] = u, t[1] = credentials, t[2] = entry, t[3] = b, t[4] = noteRefused, t[5] = offer, t[6] = onDone, t[7] = refusedWithin, t[8] = K, t[9] = m, t[10] = i, t[11] = onCancel_2, t[12] = refuseInput, t[13] = R, t[14] = z, t[15] = openedAt, t[16] = windowMs, t[17] = hideIndexes, t[18] = confirmLabel, t[19] = cancelLabel, t[20] = title_2, t[21] = onCancel_3, t[22] = color, t[23] = onConfirm;
  } else m = t[9], i = t[10], onCancel_2 = t[11], refuseInput = t[12], R = t[13], z = t[14], openedAt = t[15], windowMs = t[16], hideIndexes = t[17], confirmLabel = t[18], cancelLabel = t[19], title_2 = t[20], onCancel_3 = t[21], color = t[22], onConfirm = t[23];
  if (z !== Pn) return z;
  let H;
  if (t[38] !== m || t[39] !== onCancel_2 || t[40] !== refuseInput || t[41] !== openedAt || t[42] !== windowMs || t[43] !== hideIndexes || t[44] !== confirmLabel || t[45] !== cancelLabel || t[46] !== onConfirm) H = e(m, {
    refuseInput: refuseInput,
    openedAt: openedAt,
    windowMs: windowMs,
    hideIndexes: hideIndexes,
    confirmLabel: confirmLabel,
    cancelLabel: cancelLabel,
    onConfirm: onConfirm,
    onCancel: onCancel_2
  }), t[38] = m, t[39] = onCancel_2, t[40] = refuseInput, t[41] = openedAt, t[42] = windowMs, t[43] = hideIndexes, t[44] = confirmLabel, t[45] = cancelLabel, t[46] = onConfirm, t[47] = H;else H = t[47];
  let Y;
  if (t[48] !== i || t[49] !== R || t[50] !== H || t[51] !== title_2 || t[52] !== onCancel_3 || t[53] !== color) Y = r(i, {
    title: title_2,
    onCancel: onCancel_3,
    color: color,
    children: [R, H]
  }), t[48] = i, t[49] = R, t[50] = H, t[51] = title_2, t[52] = onCancel_3, t[53] = color, t[54] = Y;else Y = t[54];
  return Y;
}
j();
function We(x) {
  return {
    label: uGt(x),
    value: x.kind
  };
}
function Ue(c) {
  return {
    label: c.text,
    value: c.kind,
    disabled: !0
  };
}
function Qkt(ce) {
  let t = S(30),
    {
      offers: offers,
      unusable: unusable,
      entry: entry_2,
      credentials: credentials_2,
      onDone: onDone_2
    } = ce,
    [offer_2, T] = y(null),
    b = A(!1),
    C = si(xo),
    {
      refusedWithin: refusedWithin_2,
      noteRefused: noteRefused_2
    } = so();
  if (offer_2 !== null) {
    let m;
    if (t[0] !== offer_2 || t[1] !== credentials_2 || t[2] !== entry_2 || t[3] !== onDone_2) m = e(rUe, {
      offer: offer_2,
      entry: entry_2,
      credentials: credentials_2,
      onDone: onDone_2
    }), t[0] = offer_2, t[1] = credentials_2, t[2] = entry_2, t[3] = onDone_2, t[4] = m;else m = t[4];
    return m;
  }
  let m;
  if (t[5] !== C || t[6] !== noteRefused_2 || t[7] !== refusedWithin_2) m = function i() {
    if (C() || refusedWithin_2(xo)) {
      return noteRefused_2(), !0;
    }
    return !1;
  }, t[5] = C, t[6] = noteRefused_2, t[7] = refusedWithin_2, t[8] = m;else m = t[8];
  let refuseInput_2 = m,
    v;
  if (t[9] !== entry_2 || t[10] !== offers || t[11] !== onDone_2 || t[12] !== refuseInput_2) v = function f() {
    if (b.current || refuseInput_2()) {
      return;
    }
    b.current = !0, onDone_2(lFo(entry_2, offers));
  }, t[9] = entry_2, t[10] = offers, t[11] = onDone_2, t[12] = refuseInput_2, t[13] = v;else v = t[13];
  let onCancel_4 = v,
    R;
  if (t[14] !== entry_2 || t[15] !== offers || t[16] !== refuseInput_2) R = function E(z) {
    let k = offers.find(item => item.kind === z);
    if (k === void 0 || b.current || refuseInput_2()) {
      return;
    }
    Wjr(entry_2, k), T(k);
  }, t[14] = entry_2, t[15] = offers, t[16] = refuseInput_2, t[17] = R;else R = t[17];
  let onChange = R,
    W;
  if (t[18] !== offers || t[19] !== unusable) W = [...offers.map(We), ...unusable.map(Ue)], t[18] = offers, t[19] = unusable, t[20] = W;else W = t[20];
  let options = W,
    U;
  if (t[21] === w) U = v$(), t[21] = U;else U = t[21];
  let children_3;
  if (t[22] !== onChange || t[23] !== onCancel_4 || t[24] !== options || t[25] !== refuseInput_2) children_3 = e(Ze, {
    options: options,
    onChange: onChange,
    onCancel: onCancel_4,
    refuseInput: refuseInput_2,
    selectedValue: selectedValue,
    hideIndexes: !0,
    visibleOptionCount: options.length
  }), t[22] = onChange, t[23] = onCancel_4, t[24] = options, t[25] = refuseInput_2, t[26] = children_3;else children_3 = t[26];
  let P;
  if (t[27] !== onCancel_4 || t[28] !== children_3) P = e(ke, {
    title: U.chooseTitle,
    onCancel: onCancel_4,
    color: "suggestion",
    children: children_3
  }), t[27] = onCancel_4, t[28] = children_3, t[29] = P;else P = t[29];
  return P;
}
export { rUe, Qkt };