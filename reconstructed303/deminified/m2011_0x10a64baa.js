// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { fg } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n, zt } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Za, l_, rc, cs } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { Gn } from "B:/~BUN/root/chunk-c44qc88s.js";
import { lr } from "B:/~BUN/root/chunk-v8w1g8ga.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { ACe } from "B:/~BUN/root/chunk-m74bnkg1.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { P, A, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function me() {
  i("tengu_claude_md_includes_dialog_shown", {});
}
function ge(Ce, De) {
  return r(n, {
    dimColor: !0,
    wrap: "truncate-middle",
    children: ["  ", Gn(Ce.path)]
  }, De);
}
function iSn(hasClaudeMdExternalIncludesApproved, h, o) {
  fg(a => ({
    ...a,
    hasClaudeMdExternalIncludesApproved: hasClaudeMdExternalIncludesApproved,
    hasClaudeMdExternalIncludesWarningShown: !0
  }), o), i(hasClaudeMdExternalIncludesApproved ? "tengu_claude_md_external_includes_dialog_accepted" : "tengu_claude_md_external_includes_dialog_declined", {
    source: c(h)
  });
}
function qer(g) {
  let t = w(37),
    {
      onDone: onDone,
      isStandaloneDialog: o,
      externalIncludes: externalIncludes
    } = g,
    {
      storageV5: storageV5
    } = Oe(),
    G;
  if (t[0] === S) G = [], t[0] = G;else G = t[0];
  P(me, G);
  let d = Za(),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused,
      epoch: epoch
    } = cs(),
    z;
  if (t[1] !== d || t[2] !== noteRefused || t[3] !== refusedWithin) z = function I() {
    if (d() || refusedWithin()) {
      return noteRefused(), !0;
    }
    return !1;
  }, t[1] = d, t[2] = noteRefused, t[3] = refusedWithin, t[4] = z;else z = t[4];
  let refuseInput = z,
    openedAt = l_(),
    L = rc(epoch),
    H;
  if (t[5] !== externalIncludes) H = externalIncludes ?? [], t[5] = externalIncludes, t[6] = H;else H = t[6];
  let f = H,
    J;
  if (t[7] !== f) J = f.length <= ACe ? f : f.slice(0, ACe - 2), t[7] = f, t[8] = J;else J = t[8];
  let X = J,
    j = f.slice(X.length),
    Z = A(!1),
    ee;
  if (t[9] !== d || t[10] !== noteRefused || t[11] !== onDone || t[12] !== refusedWithin || t[13] !== storageV5) ee = Ie => {
    if (d() || refusedWithin()) {
      noteRefused();
      return;
    }
    if (Z.current) {
      return;
    }
    Z.current = !0, iSn(Ie === "yes", "dialog", storageV5), onDone();
  }, t[9] = d, t[10] = noteRefused, t[11] = onDone, t[12] = refusedWithin, t[13] = storageV5, t[14] = ee;else ee = t[14];
  let l = ee,
    te;
  if (t[15] !== l) te = () => {
    l("no");
  }, t[15] = l, t[16] = te;else te = t[16];
  let onCancel_2 = te;
  const M = be,
    title = "Allow external CLAUDE.md file imports?",
    color = "warning",
    hideBorder = !o,
    hideInputGuide = !o;
  let y;
  if (t[17] === S) y = e(n, {
    children: "This project's CLAUDE.md or .claude/rules imports files outside the current working directory. Never allow this for third-party repositories."
  }), t[17] = y;else y = t[17];
  const F = externalIncludes && externalIncludes.length > 0 && r(s, {
    flexDirection: "column",
    children: [e(n, {
      dimColor: !0,
      children: "External imports:"
    }), X.map(ge), j.length > 0 ? r(Q, {
      children: [r(n, {
        dimColor: !0,
        wrap: "truncate",
        children: ["  ", "\u2026 +", j.length, " ", O(j.length, "import"), " not shown."]
      }), r(n, {
        dimColor: !0,
        wrap: "truncate",
        children: ["  ", "Yes covers those too, plus any this project adds later."]
      })]
    }) : null]
  });
  let oe;
  if (t[18] === S) oe = r(n, {
    dimColor: !0,
    children: ["Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks", " ", e(zt, {
      url: "https://code.claude.com/docs/en/security"
    }), " "]
  }), t[18] = oe;else oe = t[18];
  let onConfirm, onCancel;
  if (t[19] !== l) onConfirm = () => l("yes"), onCancel = () => l("no"), t[19] = l, t[20] = onConfirm, t[21] = onCancel;else onConfirm = t[20], onCancel = t[21];
  let D;
  if (t[22] !== L.remountKey || t[23] !== refuseInput || t[24] !== openedAt || t[25] !== onConfirm || t[26] !== onCancel) D = e(lr, {
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
  let ne;
  if (t[28] !== M || t[29] !== onCancel_2 || t[30] !== o || t[31] !== hideInputGuide || t[32] !== y || t[33] !== F || t[34] !== D || t[35] !== hideBorder) ne = r(M, {
    title: title,
    color: color,
    onCancel: onCancel_2,
    exitOnCtrlCD: o,
    hideBorder: hideBorder,
    hideInputGuide: hideInputGuide,
    children: [y, F, oe, D]
  }), t[28] = M, t[29] = onCancel_2, t[30] = o, t[31] = hideInputGuide, t[32] = y, t[33] = F, t[34] = D, t[35] = hideBorder, t[36] = ne;else ne = t[36];
  return ne;
}
export { iSn, qer };