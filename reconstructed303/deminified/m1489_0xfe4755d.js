// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { qu } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { s, n, xa, AV } from "B:/~BUN/root/chunk-damrp3r8.js";
import { No, El } from "B:/~BUN/root/chunk-5xxjpbgm.js";
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { O, $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { UB, wne, yUo, _Uo, bUo, SUo } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { uC } from "B:/~BUN/root/chunk-8aq76x8d.js";
import { a_ } from "B:/~BUN/root/chunk-rq3efhmf.js";
import { wv } from "B:/~BUN/root/chunk-5p31k8qe.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { Za, l_, rc, cs } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { lr } from "B:/~BUN/root/chunk-v8w1g8ga.js";
import { Ea } from "B:/~BUN/root/chunk-ynpv705a.js";
import { _R } from "B:/~BUN/root/chunk-tzxd23kc.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { P, Z, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function bt(Jt) {
  return Jt + 1;
}
function vt(children, _t) {
  return r(s, {
    paddingLeft: 2,
    flexDirection: "row",
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), e(n, {
      children: children
    })]
  }, _t);
}
function Ct(children_2, Wt) {
  return r(s, {
    paddingLeft: 2,
    flexDirection: "row",
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), e(n, {
      children: children_2
    })]
  }, `tail-${Wt}`);
}
var J = 20,
  Jn = 40,
  zn = 14,
  _n = 4,
  Pn = 6;
function Q(t, d) {
  let u = Math.max(1, d - Pn);
  return $t(qu(t, u, "wrap"), `
`) + 1;
}
function an(t, d, u) {
  let h = zn + u.reduce((acc, item) => acc + Q(item, d), 0);
  return Math.min(Jn, t - h);
}
function H(t, d, u, h, m, c) {
  let p = u ? `(at most ${J} are listed)` : "(list trimmed to fit the screen)",
    o = (h > 0 ? `, ${h} executing ${O(h, "a command", "commands")}` : "") + (m > 0 ? `, ${m} ${O(m, "sandbox setting")}` : "") + (c > 0 ? `, ${c} ${O(c, "isolation setting")}` : "");
  return d ? `\u22EF and ${t} more not shown ${p}${o} \u2014 choose No unless you expected every one of these settings` : `${t} ${O(t, "setting")} not shown ${p}${o} \u2014 choose No unless you expected every one of these settings`;
}
function dn(head, d, u) {
  if (head.length === 0) return {
    head: [],
    tail: [],
    elided: 0
  };
  let h = head.map(item => Q(item, d)),
    m = h.reduce((acc, item) => acc + item, 0),
    c = Math.max(Q(H(head.length, !0, !1, head.length, head.length, head.length), d), Q(H(head.length, !0, !0, head.length, head.length, head.length), d));
  if (head.length <= J && m <= Math.max(u, c)) return {
    head: head,
    tail: [],
    elided: 0
  };
  let p = c,
    o = 0,
    a = head.length,
    g = i => p + h[i] <= u;
  if (g(0)) p += h[0], o = 1;
  while (a - 1 >= Math.max(o, head.length - _n) && a - 1 > 0 && g(a - 1)) a--, p += h[a];
  while (o < a && o + (head.length - a) < J && g(o)) p += h[o], o++;
  return {
    head: head.slice(0, o),
    tail: head.slice(a),
    elided: a - o
  };
}
function cn(t, {
  commandRows: commandRows,
  sandboxRows: sandboxRows,
  isolationRows: isolationRows,
  envRows: envRows,
  categoryRows: categoryRows
}) {
  let p = F(Object.values(t.payloadSlots), g => g?.shellSettings.hooks !== void 0),
    o = commandRows.length - p,
    a = [];
  if (o > 0) a.push(`${O(o, "command setting")} \xD7${o}`);
  if (sandboxRows.length > 0) a.push(`${O(sandboxRows.length, "sandbox setting")} \xD7${sandboxRows.length}`);
  if (isolationRows.length > 0) a.push(`${O(isolationRows.length, "isolation setting")} \xD7${isolationRows.length}`);
  if (envRows.length > 0) a.push(`${O(envRows.length, "env var")} \xD7${envRows.length}`);
  if (categoryRows.length > 0 || p > 0) a.push("hooks");
  return a.join(", ");
}
var ee = {
    intro: "Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.",
    listLabel: "Settings requiring approval:",
    advice: "Only accept if you trust your organization's IT administration and expect these settings to be configured.",
    risk: "these can run code or redirect traffic on this machine."
  },
  ln = {
    intro: "Your organization has configured Claude Code to send telemetry to the destination below. Depending on your organization's settings, this can include the content of your prompts and responses.",
    listLabel: "Telemetry destination:",
    advice: "Only accept if you recognize this as your organization's telemetry collector.",
    risk: "this redirects where telemetry from this machine is sent."
  },
  un = {
    intro: "Your organization has configured virtual machine (VM) isolation settings for Claude Code on this machine.",
    listLabel: ee.listLabel,
    advice: ee.advice,
    risk: "these can change where Claude Code runs or what it can connect to."
  },
  v = No;
function sGt(t) {
  let d = w(2),
    u;
  if (d[0] !== t) u = e(Je, {
    ...t
  }, t.reveal), d[0] = t, d[1] = u;else u = d[1];
  return u;
}
function Je(t) {
  let i = w(98),
    {
      settings: settings,
      baseline: baseline,
      reveal: reveal,
      onAccept: onAccept,
      onReject: onReject,
      wouldTakeAnswer: wouldTakeAnswer
    } = t,
    o = reveal === "login_handoff",
    {
      columns: columns,
      rows: rows
    } = Te(),
    f,
    copy,
    hiddenLine,
    ze,
    removedLine,
    riskLine,
    _e,
    Pe,
    kn;
  if (i[0] !== baseline || i[1] !== columns || i[2] !== settings || i[3] !== rows) {
    let An = UB(settings);
    let _ = yUo(baseline, An);
    let W = wne(_.changed) ? _.changed : An;
    copy = _Uo(W, settings) ? ln : bUo(W, settings) ? un : ee;
    let We = W === _.changed ? _.unchangedCount : 0;
    let removedCount = _.removedCount;
    hiddenLine = We > 0 ? `\uFF0B ${We} other active ${O(We, "setting")} unchanged since your last approval` : null;
    let G;
    if (i[13] !== removedCount) G = removedCount > 0 ? `\u2212 ${removedCount} previously approved ${O(removedCount, "setting")} no longer ${removedCount === 1 ? "requires" : "require"} approval` : null, i[13] = removedCount, i[14] = G;else G = i[14];
    removedLine = G;
    let En = SUo(W);
    riskLine = `Approving applies: ${cn(W, En)} \u2014 ${copy.risk}`;
    let kt = an(rows, columns, [copy.intro, copy.advice, riskLine, ...(hiddenLine ? [hiddenLine] : []), ...(removedLine ? [removedLine] : [])]);
    let {
      commandRows: commandRows_2,
      sandboxRows: sandboxRows_2,
      isolationRows: isolationRows_2,
      envRows: envRows_2,
      categoryRows: categoryRows_2
    } = En;
    f = commandRows_2;
    Pe = sandboxRows_2;
    ze = isolationRows_2;
    _e = [...f, ...Pe, ...ze, ...envRows_2, ...categoryRows_2];
    kn = dn(_e, columns, kt);
    i[0] = baseline, i[1] = columns, i[2] = settings, i[3] = rows, i[4] = f, i[5] = copy, i[6] = hiddenLine, i[7] = ze, i[8] = removedLine, i[9] = riskLine, i[10] = _e, i[11] = Pe, i[12] = kn;
  } else f = i[4], copy = i[5], hiddenLine = i[6], ze = i[7], removedLine = i[8], riskLine = i[9], _e = i[10], Pe = i[11], kn = i[12];
  let Y = kn,
    qe = Y.head.length,
    Fe = _e.length - Y.tail.length,
    elidedCommandCount = Math.max(0, Math.min(f.length, Fe) - qe),
    Ye = f.length + Pe.length,
    elidedSandboxCount = Math.max(0, Math.min(Ye, Fe) - Math.max(f.length, qe)),
    It = Ye + ze.length,
    elidedIsolationCount = Math.max(0, Math.min(It, Fe) - Math.max(Ye, qe)),
    G;
  if (i[15] !== copy || i[16] !== elidedCommandCount || i[17] !== elidedIsolationCount || i[18] !== elidedSandboxCount || i[19] !== hiddenLine || i[20] !== removedLine || i[21] !== riskLine || i[22] !== Y) G = {
    ...Y,
    elidedCommandCount: elidedCommandCount,
    elidedSandboxCount: elidedSandboxCount,
    elidedIsolationCount: elidedIsolationCount,
    copy: copy,
    riskLine: riskLine,
    hiddenLine: hiddenLine,
    removedLine: removedLine
  }, i[15] = copy, i[16] = elidedCommandCount, i[17] = elidedIsolationCount, i[18] = elidedSandboxCount, i[19] = hiddenLine, i[20] = removedLine, i[21] = riskLine, i[22] = Y, i[23] = G;else G = i[23];
  let {
      head: head_2,
      tail: tail,
      elided: elided,
      elidedCommandCount: elidedCommandCount_2,
      elidedSandboxCount: elidedSandboxCount_2,
      elidedIsolationCount: elidedIsolationCount_2,
      copy: copy_2,
      riskLine: Qe,
      hiddenLine: se,
      removedLine: re
    } = G,
    ne;
  if (i[24] !== onAccept || i[25] !== onReject) ne = Mt => Mt === "confirm" ? onAccept() : onReject(), i[24] = onAccept, i[25] = onReject, i[26] = ne;else ne = i[26];
  let T = wv(ne),
    Ze = Za(v),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused,
      epoch: epoch
    } = cs(),
    openedAt = l_(),
    [jt, Dt] = y(0),
    te;
  if (i[27] === S) te = () => {
    Dt(bt);
  }, i[27] = te;else te = i[27];
  let oe;
  if (i[28] !== settings) oe = [settings], i[28] = settings, i[29] = oe;else oe = i[29];
  P(te, oe);
  let Nt = rc(`${epoch}:${jt}`, v),
    In;
  if (i[30] !== o || i[31] !== Ze || i[32] !== noteRefused || i[33] !== refusedWithin) In = function A() {
    if (!o) {
      return !1;
    }
    if (Ze() || refusedWithin(v)) {
      return noteRefused(), !0;
    }
    return !1;
  }, i[30] = o, i[31] = Ze, i[32] = noteRefused, i[33] = refusedWithin, i[34] = In;else In = i[34];
  let A = In,
    Mn;
  if (i[35] !== A || i[36] !== wouldTakeAnswer) Mn = function ae() {
    if (A()) {
      return !0;
    }
    return wouldTakeAnswer?.() === !1;
  }, i[35] = A, i[36] = wouldTakeAnswer, i[37] = Mn;else Mn = i[37];
  let refuseInput = Mn,
    Tn;
  if (i[38] !== T || i[39] !== A) Tn = function C(Ot) {
    if (A()) {
      return;
    }
    T.answer(Ot);
  }, i[38] = T, i[39] = A, i[40] = Tn;else Tn = i[40];
  let C = Tn,
    jn;
  if (i[41] !== C) jn = () => C("cancel"), i[41] = C, i[42] = jn;else jn = i[42];
  let Dn;
  if (i[43] === S) Dn = {
    context: "Confirmation"
  }, i[43] = Dn;else Dn = i[43];
  rt("confirm:no", jn, Dn);
  let de;
  if (i[44] !== copy_2.intro) de = e(n, {
    children: copy_2.intro
  }), i[44] = copy_2.intro, i[45] = de;else de = i[45];
  let ce;
  if (i[46] !== copy_2.listLabel) ce = e(n, {
    dimColor: !0,
    children: copy_2.listLabel
  }), i[46] = copy_2.listLabel, i[47] = ce;else ce = i[47];
  let le;
  if (i[48] !== head_2) le = head_2.map(vt), i[48] = head_2, i[49] = le;else le = i[49];
  let ue;
  if (i[50] !== elided || i[51] !== elidedCommandCount_2 || i[52] !== elidedIsolationCount_2 || i[53] !== elidedSandboxCount_2 || i[54] !== head_2.length || i[55] !== tail.length) ue = elided > 0 && e(s, {
    paddingLeft: 2,
    children: e(n, {
      color: "warning",
      children: H(elided, head_2.length + tail.length > 0, head_2.length + tail.length === J, elidedCommandCount_2, elidedSandboxCount_2, elidedIsolationCount_2)
    })
  }), i[50] = elided, i[51] = elidedCommandCount_2, i[52] = elidedIsolationCount_2, i[53] = elidedSandboxCount_2, i[54] = head_2.length, i[55] = tail.length, i[56] = ue;else ue = i[56];
  let he;
  if (i[57] !== tail) he = tail.map(Ct), i[57] = tail, i[58] = he;else he = i[58];
  let me;
  if (i[59] !== se) me = se && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      children: se
    })
  }), i[59] = se, i[60] = me;else me = i[60];
  let pe;
  if (i[61] !== re) pe = re && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      children: re
    })
  }), i[61] = re, i[62] = pe;else pe = i[62];
  let ge;
  if (i[63] !== ce || i[64] !== le || i[65] !== ue || i[66] !== he || i[67] !== me || i[68] !== pe) ge = r(s, {
    flexDirection: "column",
    children: [ce, le, ue, he, me, pe]
  }), i[63] = ce, i[64] = le, i[65] = ue, i[66] = he, i[67] = me, i[68] = pe, i[69] = ge;else ge = i[69];
  let fe;
  if (i[70] !== copy_2.advice) fe = e(n, {
    children: copy_2.advice
  }), i[70] = copy_2.advice, i[71] = fe;else fe = i[71];
  let we;
  if (i[72] !== Qe) we = e(n, {
    color: "warning",
    children: Qe
  }), i[72] = Qe, i[73] = we;else we = i[73];
  const tn = o ? `${T.attempts}:${Nt.remountKey}` : `${T.attempts}`,
    windowMs = o ? v : void 0,
    focus = o ? "cancel" : T.refused ?? "confirm";
  let onConfirm, onCancel;
  if (i[74] !== C) onConfirm = () => C("confirm"), onCancel = () => C("cancel"), i[74] = C, i[75] = onConfirm, i[76] = onCancel;else onConfirm = i[75], onCancel = i[76];
  let ve;
  if (i[77] !== o || i[78] !== refuseInput || i[79] !== openedAt || i[80] !== tn || i[81] !== windowMs || i[82] !== focus || i[83] !== onConfirm || i[84] !== onCancel) ve = e(lr, {
    openedAt: openedAt,
    windowMs: windowMs,
    refuseInput: refuseInput,
    confirmLabel: "Yes, I trust these settings",
    cancelLabel: "No, exit Claude Code",
    cancelFirst: o,
    focus: focus,
    hideIndexes: o,
    onConfirm: onConfirm,
    onCancel: onCancel
  }, tn), i[77] = o, i[78] = refuseInput, i[79] = openedAt, i[80] = tn, i[81] = windowMs, i[82] = focus, i[83] = onConfirm, i[84] = onCancel, i[85] = ve;else ve = i[85];
  const action = o ? "select" : "confirm";
  let Ce;
  if (i[86] !== action) Ce = e(q, {
    chord: "enter",
    action: action
  }), i[86] = action, i[87] = Ce;else Ce = i[87];
  let Nn;
  if (i[88] === S) Nn = e(q, {
    chord: "escape",
    action: "exit"
  }), i[88] = Nn;else Nn = i[88];
  let Re;
  if (i[89] !== Ce) Re = e(_R, {
    children: r(Se, {
      children: [Ce, Nn]
    })
  }), i[89] = Ce, i[90] = Re;else Re = i[90];
  let On;
  if (i[91] !== de || i[92] !== ge || i[93] !== fe || i[94] !== we || i[95] !== ve || i[96] !== Re) On = e(Ea, {
    color: "warning",
    titleColor: "warning",
    title: "Managed settings require approval",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      paddingTop: 1,
      children: [de, ge, fe, we, ve, Re]
    })
  }), i[91] = de, i[92] = ge, i[93] = fe, i[94] = we, i[95] = ve, i[96] = Re, i[97] = On;else On = i[97];
  return On;
}
var Mwt = (settings_2, d, baseline_2) => new Promise((h, m) => {
  let c = !1,
    p = null;
  function o(a) {
    return p !== null && !El(a, p);
  }
  (async () => {
    let {
      rerender: rerender,
      unmount: unmount,
      waitUntilExit: waitUntilExit
    } = await AV(e(a_, {
      children: e($n, {
        settings: settings_2,
        baseline: baseline_2,
        onAccept: f => {
          if (!o(f)) return !1;
          if (c = !0, h("approved"), rerender(null), !d) unmount();
        },
        onReject: f => {
          if (!o(f)) return !1;
          if (c = !0, h("rejected"), rerender(null), !d) unmount();
        }
      })
    }, "managed-settings-security"), uC(!1));
    if (p = Date.now(), await waitUntilExit(), !c) {
      let f = Error("Managed-settings consent dialog exited without an answer");
      l(f), m(f);
    }
  })().catch(a => {
    l(a), m(a);
  });
});
function $n(t) {
  let p = w(11),
    {
      settings: settings_3,
      baseline: baseline_3,
      onAccept: onAccept_2,
      onReject: onReject_2
    } = t,
    c = xa(),
    onAccept_3;
  if (p[0] !== c || p[1] !== onAccept_2) onAccept_3 = () => onAccept_2(c), p[0] = c, p[1] = onAccept_2, p[2] = onAccept_3;else onAccept_3 = p[2];
  let onReject_3;
  if (p[3] !== c || p[4] !== onReject_2) onReject_3 = () => onReject_2(c), p[3] = c, p[4] = onReject_2, p[5] = onReject_3;else onReject_3 = p[5];
  let g;
  if (p[6] !== baseline_3 || p[7] !== settings_3 || p[8] !== onAccept_3 || p[9] !== onReject_3) g = e(sGt, {
    settings: settings_3,
    baseline: baseline_3,
    reveal: "default",
    onAccept: onAccept_3,
    onReject: onReject_3
  }), p[6] = baseline_3, p[7] = settings_3, p[8] = onAccept_3, p[9] = onReject_3, p[10] = g;else g = p[10];
  return g;
}
export { sGt, Mwt };