// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Jm } from "B:/~BUN/root/chunk-trcn2d68.js";
import { s, n, ta, fU } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { oo, Ol } from "B:/~BUN/root/chunk-1a6hgte8.js";
import { I, Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { MD, SY, B1r, j1r, W1r, z1r } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { oO } from "B:/~BUN/root/chunk-nv4r2ffa.js";
import { W_ } from "B:/~BUN/root/chunk-9hqq0jcs.js";
import { ZS } from "B:/~BUN/root/chunk-255yrpq9.js";
import { ze } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { Gi, yh, gc, rs } from "B:/~BUN/root/chunk-bt71g93n.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { qn } from "B:/~BUN/root/chunk-pet3tnhj.js";
import { Wr } from "B:/~BUN/root/chunk-5r1x61tc.js";
import { xi } from "B:/~BUN/root/chunk-bwmvn5s6.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { R, X, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function iP(o) {
  let a = w(2),
    {
      children: children,
      exitActive: exitActive,
      onInterrupt: onInterrupt
    } = o,
    m = exitActive === void 0 ? !0 : exitActive,
    {
      pending: pending,
      keyName: keyName
    } = Wr(void 0, onInterrupt, m);
  const children_2 = pending ? `Press ${keyName} again to exit` : children;
  let f;
  if (a[0] !== children_2) f = e(n, {
    dimColor: !0,
    children: children_2
  }), a[0] = children_2, a[1] = f;else f = a[1];
  return f;
}
function St(qt) {
  return qt + 1;
}
function $t(children_3, Yt) {
  return r(s, {
    paddingLeft: 2,
    flexDirection: "row",
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), e(n, {
      children: children_3
    })]
  }, Yt);
}
function kt(children_4, Xt) {
  return r(s, {
    paddingLeft: 2,
    flexDirection: "row",
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), e(n, {
      children: children_4
    })]
  }, `tail-${Xt}`);
}
var z = 20,
  Gn = 40,
  Yn = 14,
  Bn = 4,
  Xn = 6;
function Z(o, c) {
  let l = Math.max(1, c - Xn);
  return Gt(Jm(o, l, "wrap"), `
`) + 1;
}
function dn(o, c, l) {
  let h = Yn + l.reduce((acc, item) => acc + Z(item, c), 0);
  return Math.min(Gn, o - h);
}
function H(o, c, l, h, m, u) {
  let p = l ? `(at most ${z} are listed)` : "(list trimmed to fit the screen)",
    t = (h > 0 ? `, ${h} executing ${I(h, "a command", "commands")}` : "") + (m > 0 ? `, ${m} ${I(m, "sandbox setting")}` : "") + (u > 0 ? `, ${u} ${I(u, "isolation setting")}` : "");
  return c ? `\u22EF and ${o} more not shown ${p}${t} \u2014 choose No unless you expected every one of these settings` : `${o} ${I(o, "setting")} not shown ${p}${t} \u2014 choose No unless you expected every one of these settings`;
}
function cn(head, c, l) {
  if (head.length === 0) return {
    head: [],
    tail: [],
    elided: 0
  };
  let h = head.map(item => Z(item, c)),
    m = h.reduce((acc, item) => acc + item, 0),
    u = Math.max(Z(H(head.length, !0, !1, head.length, head.length, head.length), c), Z(H(head.length, !0, !0, head.length, head.length, head.length), c));
  if (head.length <= z && m <= Math.max(l, u)) return {
    head: head,
    tail: [],
    elided: 0
  };
  let p = u,
    t = 0,
    a = head.length,
    f = i => p + h[i] <= l;
  if (f(0)) p += h[0], t = 1;
  while (a - 1 >= Math.max(t, head.length - Bn) && a - 1 > 0 && f(a - 1)) a--, p += h[a];
  while (t < a && t + (head.length - a) < z && f(t)) p += h[t], t++;
  return {
    head: head.slice(0, t),
    tail: head.slice(a),
    elided: a - t
  };
}
function ln(o, {
  commandRows: commandRows,
  sandboxRows: sandboxRows,
  isolationRows: isolationRows,
  envRows: envRows,
  categoryRows: categoryRows
}) {
  let p = U(Object.values(o.payloadSlots), f => f?.shellSettings.hooks !== void 0),
    t = commandRows.length - p,
    a = [];
  if (t > 0) a.push(`${I(t, "command setting")} \xD7${t}`);
  if (sandboxRows.length > 0) a.push(`${I(sandboxRows.length, "sandbox setting")} \xD7${sandboxRows.length}`);
  if (isolationRows.length > 0) a.push(`${I(isolationRows.length, "isolation setting")} \xD7${isolationRows.length}`);
  if (envRows.length > 0) a.push(`${I(envRows.length, "env var")} \xD7${envRows.length}`);
  if (categoryRows.length > 0 || p > 0) a.push("hooks");
  return a.join(", ");
}
var ee = {
    intro: "Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.",
    listLabel: "Settings requiring approval:",
    advice: "Only accept if you trust your organization's IT administration and expect these settings to be configured.",
    risk: "these can run code or redirect traffic on this machine."
  },
  un = {
    intro: "Your organization has configured Claude Code to send telemetry to the destination below. Depending on your organization's settings, this can include the content of your prompts and responses.",
    listLabel: "Telemetry destination:",
    advice: "Only accept if you recognize this as your organization's telemetry collector.",
    risk: "this redirects where telemetry from this machine is sent."
  },
  hn = {
    intro: "Your organization has configured virtual machine (VM) isolation settings for Claude Code on this machine.",
    listLabel: ee.listLabel,
    advice: ee.advice,
    risk: "these can change where Claude Code runs or what it can connect to."
  },
  v = oo;
function Fht(o) {
  let c = w(2),
    l;
  if (c[0] !== o) l = e(Je, {
    ...o
  }, o.reveal), c[0] = o, c[1] = l;else l = c[1];
  return l;
}
function Je(o) {
  let i = w(98),
    {
      settings: settings,
      baseline: baseline,
      reveal: reveal,
      onAccept: onAccept,
      onReject: onReject,
      wouldTakeAnswer: wouldTakeAnswer
    } = o,
    t = reveal === "login_handoff",
    {
      columns: columns,
      rows: rows
    } = ve(),
    y,
    copy,
    hiddenLine,
    Pe,
    removedLine,
    riskLine,
    _e,
    We,
    An;
  if (i[0] !== baseline || i[1] !== columns || i[2] !== settings || i[3] !== rows) {
    let En = MD(settings);
    let W = B1r(baseline, En);
    let q = SY(W.changed) ? W.changed : En;
    copy = j1r(q, settings) ? un : W1r(q, settings) ? hn : ee;
    let qe = q === W.changed ? W.unchangedCount : 0;
    let removedCount = W.removedCount;
    hiddenLine = qe > 0 ? `\uFF0B ${qe} other active ${I(qe, "setting")} unchanged since your last approval` : null;
    let G;
    if (i[13] !== removedCount) G = removedCount > 0 ? `\u2212 ${removedCount} previously approved ${I(removedCount, "setting")} no longer ${removedCount === 1 ? "requires" : "require"} approval` : null, i[13] = removedCount, i[14] = G;else G = i[14];
    removedLine = G;
    let In = z1r(q);
    riskLine = `Approving applies: ${ln(q, In)} \u2014 ${copy.risk}`;
    let Mt = dn(rows, columns, [copy.intro, copy.advice, riskLine, ...(hiddenLine ? [hiddenLine] : []), ...(removedLine ? [removedLine] : [])]);
    let {
      commandRows: commandRows_2,
      sandboxRows: sandboxRows_2,
      isolationRows: isolationRows_2,
      envRows: envRows_2,
      categoryRows: categoryRows_2
    } = In;
    y = commandRows_2;
    We = sandboxRows_2;
    Pe = isolationRows_2;
    _e = [...y, ...We, ...Pe, ...envRows_2, ...categoryRows_2];
    An = cn(_e, columns, Mt);
    i[0] = baseline, i[1] = columns, i[2] = settings, i[3] = rows, i[4] = y, i[5] = copy, i[6] = hiddenLine, i[7] = Pe, i[8] = removedLine, i[9] = riskLine, i[10] = _e, i[11] = We, i[12] = An;
  } else y = i[4], copy = i[5], hiddenLine = i[6], Pe = i[7], removedLine = i[8], riskLine = i[9], _e = i[10], We = i[11], An = i[12];
  let Y = An,
    Fe = Y.head.length,
    Ge = _e.length - Y.tail.length,
    elidedCommandCount = Math.max(0, Math.min(y.length, Ge) - Fe),
    Be = y.length + We.length,
    elidedSandboxCount = Math.max(0, Math.min(Be, Ge) - Math.max(y.length, Fe)),
    jt = Be + Pe.length,
    elidedIsolationCount = Math.max(0, Math.min(jt, Ge) - Math.max(Be, Fe)),
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
      riskLine: Ze,
      hiddenLine: se,
      removedLine: re
    } = G,
    ne;
  if (i[24] !== onAccept || i[25] !== onReject) ne = Ot => Ot === "confirm" ? onAccept() : onReject(), i[24] = onAccept, i[25] = onReject, i[26] = ne;else ne = i[26];
  let j = ZS(ne),
    He = Gi(v),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused,
      epoch: epoch
    } = rs(),
    openedAt = yh(),
    [Pt, zt] = g(0),
    te;
  if (i[27] === S) te = () => {
    zt(St);
  }, i[27] = te;else te = i[27];
  let oe;
  if (i[28] !== settings) oe = [settings], i[28] = settings, i[29] = oe;else oe = i[29];
  R(te, oe);
  let _t = gc(`${epoch}:${Pt}`, v),
    Tn;
  if (i[30] !== t || i[31] !== He || i[32] !== noteRefused || i[33] !== refusedWithin) Tn = function E() {
    if (!t) {
      return !1;
    }
    if (He() || refusedWithin(v)) {
      return noteRefused(), !0;
    }
    return !1;
  }, i[30] = t, i[31] = He, i[32] = noteRefused, i[33] = refusedWithin, i[34] = Tn;else Tn = i[34];
  let E = Tn,
    Mn;
  if (i[35] !== E || i[36] !== wouldTakeAnswer) Mn = function ae() {
    if (E()) {
      return !0;
    }
    return wouldTakeAnswer?.() === !1;
  }, i[35] = E, i[36] = wouldTakeAnswer, i[37] = Mn;else Mn = i[37];
  let refuseInput = Mn,
    Nn;
  if (i[38] !== j || i[39] !== E) Nn = function x(Wt) {
    if (E()) {
      return;
    }
    j.answer(Wt);
  }, i[38] = j, i[39] = E, i[40] = Nn;else Nn = i[40];
  let x = Nn,
    Dn;
  if (i[41] !== x) Dn = () => x("cancel"), i[41] = x, i[42] = Dn;else Dn = i[42];
  let jn;
  if (i[43] === S) jn = {
    context: "Confirmation"
  }, i[43] = jn;else jn = i[43];
  ze("confirm:no", Dn, jn);
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
  if (i[48] !== head_2) le = head_2.map($t), i[48] = head_2, i[49] = le;else le = i[49];
  let ue;
  if (i[50] !== elided || i[51] !== elidedCommandCount_2 || i[52] !== elidedIsolationCount_2 || i[53] !== elidedSandboxCount_2 || i[54] !== head_2.length || i[55] !== tail.length) ue = elided > 0 && e(s, {
    paddingLeft: 2,
    children: e(n, {
      color: "warning",
      children: H(elided, head_2.length + tail.length > 0, head_2.length + tail.length === z, elidedCommandCount_2, elidedSandboxCount_2, elidedIsolationCount_2)
    })
  }), i[50] = elided, i[51] = elidedCommandCount_2, i[52] = elidedIsolationCount_2, i[53] = elidedSandboxCount_2, i[54] = head_2.length, i[55] = tail.length, i[56] = ue;else ue = i[56];
  let he;
  if (i[57] !== tail) he = tail.map(kt), i[57] = tail, i[58] = he;else he = i[58];
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
  let fe;
  if (i[63] !== ce || i[64] !== le || i[65] !== ue || i[66] !== he || i[67] !== me || i[68] !== pe) fe = r(s, {
    flexDirection: "column",
    children: [ce, le, ue, he, me, pe]
  }), i[63] = ce, i[64] = le, i[65] = ue, i[66] = he, i[67] = me, i[68] = pe, i[69] = fe;else fe = i[69];
  let ge;
  if (i[70] !== copy_2.advice) ge = e(n, {
    children: copy_2.advice
  }), i[70] = copy_2.advice, i[71] = ge;else ge = i[71];
  let we;
  if (i[72] !== Ze) we = e(n, {
    color: "warning",
    children: Ze
  }), i[72] = Ze, i[73] = we;else we = i[73];
  const on = t ? `${j.attempts}:${_t.remountKey}` : `${j.attempts}`,
    windowMs = t ? v : void 0,
    focus = t ? "cancel" : j.refused ?? "confirm";
  let onConfirm, onCancel;
  if (i[74] !== x) onConfirm = () => x("confirm"), onCancel = () => x("cancel"), i[74] = x, i[75] = onConfirm, i[76] = onCancel;else onConfirm = i[75], onCancel = i[76];
  let xe;
  if (i[77] !== t || i[78] !== refuseInput || i[79] !== openedAt || i[80] !== on || i[81] !== windowMs || i[82] !== focus || i[83] !== onConfirm || i[84] !== onCancel) xe = e(qn, {
    openedAt: openedAt,
    windowMs: windowMs,
    refuseInput: refuseInput,
    confirmLabel: "Yes, I trust these settings",
    cancelLabel: "No, exit Claude Code",
    cancelFirst: t,
    focus: focus,
    hideIndexes: t,
    onConfirm: onConfirm,
    onCancel: onCancel
  }, on), i[77] = t, i[78] = refuseInput, i[79] = openedAt, i[80] = on, i[81] = windowMs, i[82] = focus, i[83] = onConfirm, i[84] = onCancel, i[85] = xe;else xe = i[85];
  const action = t ? "select" : "confirm";
  let Ce;
  if (i[86] !== action) Ce = e(F, {
    chord: "enter",
    action: action
  }), i[86] = action, i[87] = Ce;else Ce = i[87];
  let On;
  if (i[88] === S) On = e(F, {
    chord: "escape",
    action: "exit"
  }), i[88] = On;else On = i[88];
  let Le;
  if (i[89] !== Ce) Le = e(iP, {
    children: r(ye, {
      children: [Ce, On]
    })
  }), i[89] = Ce, i[90] = Le;else Le = i[90];
  let Jn;
  if (i[91] !== de || i[92] !== fe || i[93] !== ge || i[94] !== we || i[95] !== xe || i[96] !== Le) Jn = e(xi, {
    color: "warning",
    titleColor: "warning",
    title: "Managed settings require approval",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      paddingTop: 1,
      children: [de, fe, ge, we, xe, Le]
    })
  }), i[91] = de, i[92] = fe, i[93] = ge, i[94] = we, i[95] = xe, i[96] = Le, i[97] = Jn;else Jn = i[97];
  return Jn;
}
var tJe = (settings_2, c, baseline_2) => new Promise((h, m) => {
  let u = !1,
    p = null;
  function t(a) {
    return p !== null && !Ol(a, p);
  }
  (async () => {
    let {
      rerender: rerender,
      unmount: unmount,
      waitUntilExit: waitUntilExit
    } = await fU(e(W_, {
      children: e(kn, {
        settings: settings_2,
        baseline: baseline_2,
        onAccept: y => {
          if (!t(y)) return !1;
          if (u = !0, h("approved"), c) rerender(null);else unmount();
        },
        onReject: y => {
          if (!t(y)) return !1;
          if (u = !0, h("rejected"), c) rerender(null);else unmount();
        }
      })
    }, "managed-settings-security"), oO(!1));
    if (p = Date.now(), await waitUntilExit(), !u) {
      let y = Error("Managed-settings consent dialog exited without an answer");
      d(y), m(y);
    }
  })().catch(a => {
    d(a), m(a);
  });
});
function kn(o) {
  let p = w(11),
    {
      settings: settings_3,
      baseline: baseline_3,
      onAccept: onAccept_2,
      onReject: onReject_2
    } = o,
    u = ta(),
    onAccept_3;
  if (p[0] !== u || p[1] !== onAccept_2) onAccept_3 = () => onAccept_2(u), p[0] = u, p[1] = onAccept_2, p[2] = onAccept_3;else onAccept_3 = p[2];
  let onReject_3;
  if (p[3] !== u || p[4] !== onReject_2) onReject_3 = () => onReject_2(u), p[3] = u, p[4] = onReject_2, p[5] = onReject_3;else onReject_3 = p[5];
  let f;
  if (p[6] !== baseline_3 || p[7] !== settings_3 || p[8] !== onAccept_3 || p[9] !== onReject_3) f = e(Fht, {
    settings: settings_3,
    baseline: baseline_3,
    reveal: "default",
    onAccept: onAccept_3,
    onReject: onReject_3
  }), p[6] = baseline_3, p[7] = settings_3, p[8] = onAccept_3, p[9] = onReject_3, p[10] = f;else f = p[10];
  return f;
}
export { iP, Fht, tJe };