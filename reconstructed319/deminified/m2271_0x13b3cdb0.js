// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Sy } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Mr } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { s, n, sn } from "B:/~BUN/root/chunk-qey16aan.js";
import { si, Qc, cu, so } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Jn } from "B:/~BUN/root/chunk-yd5nr5hc.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { jM } from "B:/~BUN/root/chunk-9fbg6p79.js";
import { O, A, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function me() {
  l("tengu_claude_md_includes_dialog_shown", {});
}
function ge(Ce, De) {
  return r(n, {
    dimColor: !0,
    wrap: "truncate-middle",
    children: ["  ", Mr(Ce.path)]
  }, De);
}
function L3n(hasClaudeMdExternalIncludesApproved, h, o) {
  Sy(a => ({
    ...a,
    hasClaudeMdExternalIncludesApproved: hasClaudeMdExternalIncludesApproved,
    hasClaudeMdExternalIncludesWarningShown: !0
  }), o), l(hasClaudeMdExternalIncludesApproved ? "tengu_claude_md_external_includes_dialog_accepted" : "tengu_claude_md_external_includes_dialog_declined", {
    source: f(h)
  });
}
function mWr(g) {
  let t = S(37),
    {
      onDone: onDone,
      isStandaloneDialog: o,
      externalIncludes: externalIncludes
    } = g,
    {
      storageV5: storageV5
    } = Fe(),
    G;
  if (t[0] === w) G = [], t[0] = G;else G = t[0];
  O(me, G);
  let d = si(),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused,
      epoch: epoch
    } = so(),
    z;
  if (t[1] !== d || t[2] !== noteRefused || t[3] !== refusedWithin) z = function I() {
    if (d() || refusedWithin()) {
      return noteRefused(), !0;
    }
    return !1;
  }, t[1] = d, t[2] = noteRefused, t[3] = refusedWithin, t[4] = z;else z = t[4];
  let refuseInput = z,
    openedAt = Qc(),
    L = cu(epoch),
    H;
  if (t[5] !== externalIncludes) H = externalIncludes ?? [], t[5] = externalIncludes, t[6] = H;else H = t[6];
  let p = H,
    J;
  if (t[7] !== p) J = p.length <= jM ? p : p.slice(0, jM - 2), t[7] = p, t[8] = J;else J = t[8];
  let Q = J,
    W = p.slice(Q.length),
    X = A(!1),
    Z;
  if (t[9] !== d || t[10] !== noteRefused || t[11] !== onDone || t[12] !== refusedWithin || t[13] !== storageV5) Z = Ie => {
    if (d() || refusedWithin()) {
      noteRefused();
      return;
    }
    if (X.current) {
      return;
    }
    X.current = !0, L3n(Ie === "yes", "dialog", storageV5), onDone();
  }, t[9] = d, t[10] = noteRefused, t[11] = onDone, t[12] = refusedWithin, t[13] = storageV5, t[14] = Z;else Z = t[14];
  let i = Z,
    ee;
  if (t[15] !== i) ee = () => {
    i("no");
  }, t[15] = i, t[16] = ee;else ee = t[16];
  let onCancel_2 = ee;
  const B = ke,
    title = "Allow external CLAUDE.md file imports?",
    color = "warning",
    hideBorder = !o,
    hideInputGuide = !o;
  let y;
  if (t[17] === w) y = e(n, {
    children: "This project's CLAUDE.md or .claude/rules imports files outside the current working directory. Never allow this for third-party repositories."
  }), t[17] = y;else y = t[17];
  const F = externalIncludes && externalIncludes.length > 0 && r(s, {
    flexDirection: "column",
    children: [e(n, {
      dimColor: !0,
      children: "External imports:"
    }), Q.map(ge), W.length > 0 ? r(ne, {
      children: [r(n, {
        dimColor: !0,
        wrap: "truncate",
        children: ["  ", "\u2026 +", W.length, " ", P(W.length, "import"), " not shown."]
      }), r(n, {
        dimColor: !0,
        wrap: "truncate",
        children: ["  ", "Yes covers those too, plus any this project adds later."]
      })]
    }) : null]
  });
  let te;
  if (t[18] === w) te = r(n, {
    dimColor: !0,
    children: ["Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks", " ", e(sn, {
      url: "https://code.claude.com/docs/en/security"
    }), " "]
  }), t[18] = te;else te = t[18];
  let onConfirm, onCancel;
  if (t[19] !== i) onConfirm = () => i("yes"), onCancel = () => i("no"), t[19] = i, t[20] = onConfirm, t[21] = onCancel;else onConfirm = t[20], onCancel = t[21];
  let D;
  if (t[22] !== L.remountKey || t[23] !== refuseInput || t[24] !== openedAt || t[25] !== onConfirm || t[26] !== onCancel) D = e(Jn, {
    refuseInput: refuseInput,
    openedAt: openedAt,
    hideIndexes: !0,
    confirmLabel: "Yes, allow external imports",
    cancelLabel: "No, disable external imports",
    cancelFirst: !0,
    focus: "cancel",
    onConfirm: onConfirm,
    onCancel: onCancel
  }, L.remountKey), t[22] = L.remountKey, t[23] = refuseInput, t[24] = openedAt, t[25] = onConfirm, t[26] = onCancel, t[27] = D;else D = t[27];
  let oe;
  if (t[28] !== B || t[29] !== onCancel_2 || t[30] !== o || t[31] !== hideInputGuide || t[32] !== y || t[33] !== F || t[34] !== D || t[35] !== hideBorder) oe = r(B, {
    title: title,
    color: color,
    onCancel: onCancel_2,
    exitOnCtrlCD: o,
    hideBorder: hideBorder,
    hideInputGuide: hideInputGuide,
    children: [y, F, te, D]
  }), t[28] = B, t[29] = onCancel_2, t[30] = o, t[31] = hideInputGuide, t[32] = y, t[33] = F, t[34] = D, t[35] = hideBorder, t[36] = oe;else oe = t[36];
  return oe;
}
export { L3n, mWr };