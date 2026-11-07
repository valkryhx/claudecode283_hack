// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Zc } from "B:/~BUN/root/chunk-31b4g6te.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { xo } from "B:/~BUN/root/chunk-tzwf3sbj.js";
import { iy } from "B:/~BUN/root/chunk-55xtzph3.js";
import { P, Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { GV, Ipe, xHs, PHs, OHs, IHs } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { si, Qc, cu, so } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Jn } from "B:/~BUN/root/chunk-yd5nr5hc.js";
import { ua } from "B:/~BUN/root/chunk-kbk5awdm.js";
import { ele } from "B:/~BUN/root/chunk-1rry0pgg.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { O, Z, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function yt(Tt) {
  return Tt + 1;
}
function wt(children, Mt) {
  return r(s, {
    paddingLeft: 2,
    flexDirection: "row",
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), e(n, {
      children: children
    })]
  }, Mt);
}
function bt(children_2, _t) {
  return r(s, {
    paddingLeft: 2,
    flexDirection: "row",
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), e(n, {
      children: children_2
    })]
  }, `tail-${_t}`);
}
var z = 20,
  On = 40,
  _n = 14,
  jn = 4,
  zn = 6;
function V(t, a) {
  let c = Math.max(1, a - zn);
  return Dt(Zc(t, c, "wrap"), `
`) + 1;
}
function rn(t, a, c) {
  let l = _n + c.reduce((acc, item) => acc + V(item, a), 0);
  return Math.min(On, t - l);
}
function Q(t, a, c, l, u, h) {
  let m = c ? `(at most ${z} are listed)` : "(list trimmed to fit the screen)",
    i = (l > 0 ? `, ${l} executing ${P(l, "a command", "commands")}` : "") + (u > 0 ? `, ${u} ${P(u, "sandbox setting")}` : "") + (h > 0 ? `, ${h} ${P(h, "isolation setting")}` : "");
  return a ? `\u22EF and ${t} more not shown ${m}${i} \u2014 choose No unless you expected every one of these settings` : `${t} ${P(t, "setting")} not shown ${m}${i} \u2014 choose No unless you expected every one of these settings`;
}
function an(head, a, c) {
  if (head.length === 0) return {
    head: [],
    tail: [],
    elided: 0
  };
  let l = head.map(item => V(item, a)),
    u = l.reduce((acc, item) => acc + item, 0),
    h = Math.max(V(Q(head.length, !0, !1, head.length, head.length, head.length), a), V(Q(head.length, !0, !0, head.length, head.length, head.length), a));
  if (head.length <= z && u <= Math.max(c, h)) return {
    head: head,
    tail: [],
    elided: 0
  };
  let m = h,
    i = 0,
    d = head.length,
    p = o => m + l[o] <= c;
  if (p(0)) m += l[0], i = 1;
  while (d - 1 >= Math.max(i, head.length - jn) && d - 1 > 0 && p(d - 1)) d--, m += l[d];
  while (i < d && i + (head.length - d) < z && p(i)) m += l[i], i++;
  return {
    head: head.slice(0, i),
    tail: head.slice(d),
    elided: d - i
  };
}
function dn(t, {
  commandRows: commandRows,
  sandboxRows: sandboxRows,
  isolationRows: isolationRows,
  envRows: envRows,
  categoryRows: categoryRows
}) {
  let m = U(Object.values(t.payloadSlots), p => p?.shellSettings.hooks !== void 0),
    i = commandRows.length - m,
    d = [];
  if (i > 0) d.push(`${P(i, "command setting")} \xD7${i}`);
  if (sandboxRows.length > 0) d.push(`${P(sandboxRows.length, "sandbox setting")} \xD7${sandboxRows.length}`);
  if (isolationRows.length > 0) d.push(`${P(isolationRows.length, "isolation setting")} \xD7${isolationRows.length}`);
  if (envRows.length > 0) d.push(`${P(envRows.length, "env var")} \xD7${envRows.length}`);
  if (categoryRows.length > 0 || m > 0) d.push("hooks");
  return d.join(", ");
}
var H = {
    intro: "Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.",
    listLabel: "Settings requiring approval:",
    advice: "Only accept if you trust your organization's IT administration and expect these settings to be configured.",
    risk: "these can run code or redirect traffic on this machine."
  },
  cn = {
    intro: "Your organization has configured Claude Code to send telemetry to the destination below. Depending on your organization's settings, this can include the content of your prompts and responses.",
    listLabel: "Telemetry destination:",
    advice: "Only accept if you recognize this as your organization's telemetry collector.",
    risk: "this redirects where telemetry from this machine is sent."
  },
  ln = {
    intro: "Your organization has configured virtual machine (VM) isolation settings for Claude Code on this machine.",
    listLabel: H.listLabel,
    advice: H.advice,
    risk: "these can change where Claude Code runs or what it can connect to."
  },
  f = xo;
function q4e(t) {
  let a = S(2),
    c;
  if (a[0] !== t) c = e(je, {
    ...t
  }, t.reveal), a[0] = t, a[1] = c;else c = a[1];
  return c;
}
function je(t) {
  let o = S(98),
    {
      settings: settings,
      baseline: baseline,
      reveal: reveal,
      onAccept: onAccept,
      onReject: onReject,
      wouldTakeAnswer: wouldTakeAnswer
    } = t,
    i = reveal !== "default",
    {
      columns: columns,
      rows: rows
    } = Re(),
    C,
    copy,
    hiddenLine,
    ze,
    removedLine,
    riskLine,
    Ne,
    Pe,
    Rn;
  if (o[0] !== baseline || o[1] !== columns || o[2] !== settings || o[3] !== rows) {
    let $n = GV(settings);
    let W = xHs(baseline, $n);
    let q = Ipe(W.changed) ? W.changed : $n;
    copy = PHs(q, settings) ? cn : OHs(q, settings) ? ln : H;
    let We = q === W.changed ? W.unchangedCount : 0;
    let removedCount = W.removedCount;
    hiddenLine = We > 0 ? `\uFF0B ${We} other active ${P(We, "setting")} unchanged since your last approval` : null;
    let F;
    if (o[13] !== removedCount) F = removedCount > 0 ? `\u2212 ${removedCount} previously approved ${P(removedCount, "setting")} no longer ${removedCount === 1 ? "requires" : "require"} approval` : null, o[13] = removedCount, o[14] = F;else F = o[14];
    removedLine = F;
    let kn = IHs(q);
    riskLine = `Approving applies: ${dn(q, kn)} \u2014 ${copy.risk}`;
    let vt = rn(rows, columns, [copy.intro, copy.advice, riskLine, ...(hiddenLine ? [hiddenLine] : []), ...(removedLine ? [removedLine] : [])]);
    let {
      commandRows: commandRows_2,
      sandboxRows: sandboxRows_2,
      isolationRows: isolationRows_2,
      envRows: envRows_2,
      categoryRows: categoryRows_2
    } = kn;
    C = commandRows_2;
    Pe = sandboxRows_2;
    ze = isolationRows_2;
    Ne = [...C, ...Pe, ...ze, ...envRows_2, ...categoryRows_2];
    Rn = an(Ne, columns, vt);
    o[0] = baseline, o[1] = columns, o[2] = settings, o[3] = rows, o[4] = C, o[5] = copy, o[6] = hiddenLine, o[7] = ze, o[8] = removedLine, o[9] = riskLine, o[10] = Ne, o[11] = Pe, o[12] = Rn;
  } else C = o[4], copy = o[5], hiddenLine = o[6], ze = o[7], removedLine = o[8], riskLine = o[9], Ne = o[10], Pe = o[11], Rn = o[12];
  let G = Rn,
    qe = G.head.length,
    Fe = Ne.length - G.tail.length,
    elidedCommandCount = Math.max(0, Math.min(C.length, Fe) - qe),
    Ge = C.length + Pe.length,
    elidedSandboxCount = Math.max(0, Math.min(Ge, Fe) - Math.max(C.length, qe)),
    Lt = Ge + ze.length,
    elidedIsolationCount = Math.max(0, Math.min(Lt, Fe) - Math.max(Ge, qe)),
    F;
  if (o[15] !== copy || o[16] !== elidedCommandCount || o[17] !== elidedIsolationCount || o[18] !== elidedSandboxCount || o[19] !== hiddenLine || o[20] !== removedLine || o[21] !== riskLine || o[22] !== G) F = {
    ...G,
    elidedCommandCount: elidedCommandCount,
    elidedSandboxCount: elidedSandboxCount,
    elidedIsolationCount: elidedIsolationCount,
    copy: copy,
    riskLine: riskLine,
    hiddenLine: hiddenLine,
    removedLine: removedLine
  }, o[15] = copy, o[16] = elidedCommandCount, o[17] = elidedIsolationCount, o[18] = elidedSandboxCount, o[19] = hiddenLine, o[20] = removedLine, o[21] = riskLine, o[22] = G, o[23] = F;else F = o[23];
  let {
      head: head_2,
      tail: tail,
      elided: elided,
      elidedCommandCount: elidedCommandCount_2,
      elidedSandboxCount: elidedSandboxCount_2,
      elidedIsolationCount: elidedIsolationCount_2,
      copy: copy_2,
      riskLine: Qe,
      hiddenLine: ie,
      removedLine: se
    } = F,
    ee;
  if (o[24] !== onAccept || o[25] !== onReject) ee = Rt => Rt === "confirm" ? onAccept() : onReject(), o[24] = onAccept, o[25] = onReject, o[26] = ee;else ee = o[26];
  let A = iy(ee),
    Ue = si(f),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused,
      epoch: epoch
    } = so(),
    openedAt = Qc(),
    [kt, Et] = y(0),
    ne;
  if (o[27] === w) ne = () => {
    Et(yt);
  }, o[27] = ne;else ne = o[27];
  let te;
  if (o[28] !== settings) te = [settings], o[28] = settings, o[29] = te;else te = o[29];
  O(ne, te);
  let St = cu(`${epoch}:${kt}`, f),
    En;
  if (o[30] !== i || o[31] !== Ue || o[32] !== noteRefused || o[33] !== refusedWithin) En = function k() {
    if (!i) {
      return !1;
    }
    if (Ue() || refusedWithin(f)) {
      return noteRefused(), !0;
    }
    return !1;
  }, o[30] = i, o[31] = Ue, o[32] = noteRefused, o[33] = refusedWithin, o[34] = En;else En = o[34];
  let k = En,
    Sn;
  if (o[35] !== k || o[36] !== wouldTakeAnswer) Sn = function re() {
    if (k()) {
      return !0;
    }
    return wouldTakeAnswer?.() === !1;
  }, o[35] = k, o[36] = wouldTakeAnswer, o[37] = Sn;else Sn = o[37];
  let refuseInput = Sn,
    In;
  if (o[38] !== A || o[39] !== k) In = function v(It) {
    if (k()) {
      return;
    }
    A.answer(It);
  }, o[38] = A, o[39] = k, o[40] = In;else In = o[40];
  let v = In,
    Tn;
  if (o[41] !== v) Tn = () => v("cancel"), o[41] = v, o[42] = Tn;else Tn = o[42];
  let An;
  if (o[43] === w) An = {
    context: "Confirmation"
  }, o[43] = An;else An = o[43];
  pt("confirm:no", Tn, An);
  let ae;
  if (o[44] !== copy_2.intro) ae = e(n, {
    children: copy_2.intro
  }), o[44] = copy_2.intro, o[45] = ae;else ae = o[45];
  let de;
  if (o[46] !== copy_2.listLabel) de = e(n, {
    dimColor: !0,
    children: copy_2.listLabel
  }), o[46] = copy_2.listLabel, o[47] = de;else de = o[47];
  let ce;
  if (o[48] !== head_2) ce = head_2.map(wt), o[48] = head_2, o[49] = ce;else ce = o[49];
  let le;
  if (o[50] !== elided || o[51] !== elidedCommandCount_2 || o[52] !== elidedIsolationCount_2 || o[53] !== elidedSandboxCount_2 || o[54] !== head_2.length || o[55] !== tail.length) le = elided > 0 && e(s, {
    paddingLeft: 2,
    children: e(n, {
      color: "warning",
      children: Q(elided, head_2.length + tail.length > 0, head_2.length + tail.length === z, elidedCommandCount_2, elidedSandboxCount_2, elidedIsolationCount_2)
    })
  }), o[50] = elided, o[51] = elidedCommandCount_2, o[52] = elidedIsolationCount_2, o[53] = elidedSandboxCount_2, o[54] = head_2.length, o[55] = tail.length, o[56] = le;else le = o[56];
  let ue;
  if (o[57] !== tail) ue = tail.map(bt), o[57] = tail, o[58] = ue;else ue = o[58];
  let he;
  if (o[59] !== ie) he = ie && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      children: ie
    })
  }), o[59] = ie, o[60] = he;else he = o[60];
  let me;
  if (o[61] !== se) me = se && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      children: se
    })
  }), o[61] = se, o[62] = me;else me = o[62];
  let pe;
  if (o[63] !== de || o[64] !== ce || o[65] !== le || o[66] !== ue || o[67] !== he || o[68] !== me) pe = r(s, {
    flexDirection: "column",
    children: [de, ce, le, ue, he, me]
  }), o[63] = de, o[64] = ce, o[65] = le, o[66] = ue, o[67] = he, o[68] = me, o[69] = pe;else pe = o[69];
  let ge;
  if (o[70] !== copy_2.advice) ge = e(n, {
    children: copy_2.advice
  }), o[70] = copy_2.advice, o[71] = ge;else ge = o[71];
  let fe;
  if (o[72] !== Qe) fe = e(n, {
    color: "warning",
    children: Qe
  }), o[72] = Qe, o[73] = fe;else fe = o[73];
  const nn = i ? `${A.attempts}:${St.remountKey}` : `${A.attempts}`,
    windowMs = i ? f : void 0,
    focus = i ? "cancel" : A.refused ?? "confirm";
  let onConfirm, onCancel;
  if (o[74] !== v) onConfirm = () => v("confirm"), onCancel = () => v("cancel"), o[74] = v, o[75] = onConfirm, o[76] = onCancel;else onConfirm = o[75], onCancel = o[76];
  let be;
  if (o[77] !== i || o[78] !== refuseInput || o[79] !== openedAt || o[80] !== nn || o[81] !== windowMs || o[82] !== focus || o[83] !== onConfirm || o[84] !== onCancel) be = e(Jn, {
    openedAt: openedAt,
    windowMs: windowMs,
    refuseInput: refuseInput,
    confirmLabel: "Yes, I trust these settings",
    cancelLabel: "No, exit Claude Code",
    cancelFirst: i,
    focus: focus,
    hideIndexes: i,
    disablePrintableKeybindings: i,
    onConfirm: onConfirm,
    onCancel: onCancel
  }, nn), o[77] = i, o[78] = refuseInput, o[79] = openedAt, o[80] = nn, o[81] = windowMs, o[82] = focus, o[83] = onConfirm, o[84] = onCancel, o[85] = be;else be = o[85];
  const action = i ? "select" : "confirm";
  let ve;
  if (o[86] !== action) ve = e(Y, {
    chord: "enter",
    action: action
  }), o[86] = action, o[87] = ve;else ve = o[87];
  let Mn;
  if (o[88] === w) Mn = e(Y, {
    chord: "escape",
    action: "exit"
  }), o[88] = Mn;else Mn = o[88];
  let xe;
  if (o[89] !== ve) xe = e(ele, {
    children: r(Ce, {
      children: [ve, Mn]
    })
  }), o[89] = ve, o[90] = xe;else xe = o[90];
  let Dn;
  if (o[91] !== ae || o[92] !== pe || o[93] !== ge || o[94] !== fe || o[95] !== be || o[96] !== xe) Dn = e(ua, {
    color: "warning",
    titleColor: "warning",
    title: "Managed settings require approval",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      paddingTop: 1,
      children: [ae, pe, ge, fe, be, xe]
    })
  }), o[91] = ae, o[92] = pe, o[93] = ge, o[94] = fe, o[95] = be, o[96] = xe, o[97] = Dn;else Dn = o[97];
  return Dn;
}
export { q4e };