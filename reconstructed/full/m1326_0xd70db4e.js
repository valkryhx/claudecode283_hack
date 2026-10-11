// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Jm
} from "B:/~BUN/root/chunk-trcn2d68.js";
import {
  s,
  n,
  ta,
  fU
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  oo,
  Ol
} from "B:/~BUN/root/chunk-1a6hgte8.js";
import {
  I,
  Gt
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  MD,
  SY,
  B1r,
  j1r,
  W1r,
  z1r
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  oO
} from "B:/~BUN/root/chunk-nv4r2ffa.js";
import {
  W_
} from "B:/~BUN/root/chunk-9hqq0jcs.js";
import {
  ZS
} from "B:/~BUN/root/chunk-255yrpq9.js";
import {
  ze
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  Gi,
  yh,
  gc,
  rs
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  qn
} from "B:/~BUN/root/chunk-pet3tnhj.js";
import {
  Wr
} from "B:/~BUN/root/chunk-5r1x61tc.js";
import {
  xi
} from "B:/~BUN/root/chunk-bwmvn5s6.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  R,
  X,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  U
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function iP(o) {
  let a = w(2),
    {
      children: c,
      exitActive: l,
      onInterrupt: h
    } = o,
    m = l === void 0 ? !0 : l,
    {
      pending: u,
      keyName: p
    } = Wr(void 0, h, m);
  const t = u ? `Press ${p} again to exit` : c;
  let f;
  if (a[0] !== t) f = e(n, {
    dimColor: !0,
    children: t
  }), a[0] = t, a[1] = f;
  else f = a[1];
  return f
}

function St(qt) {
  return qt + 1
}

function $t(Ft, Yt) {
  return r(s, {
    paddingLeft: 2,
    flexDirection: "row",
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), e(n, {
      children: Ft
    })]
  }, Yt)
}

function kt(Bt, Xt) {
  return r(s, {
    paddingLeft: 2,
    flexDirection: "row",
    children: [e(n, {
      dimColor: !0,
      children: "\xB7 "
    }), e(n, {
      children: Bt
    })]
  }, `tail-${Xt}`)
}
var z = 20,
  Gn = 40,
  Yn = 14,
  Bn = 4,
  Xn = 6;

function Z(o, c) {
  let l = Math.max(1, c - Xn);
  return Gt(Jm(o, l, "wrap"), `
`) + 1
}

function dn(o, c, l) {
  let h = Yn + l.reduce((m, u) => m + Z(u, c), 0);
  return Math.min(Gn, o - h)
}

function H(o, c, l, h, m, u) {
  let p = l ? `(at most ${z} are listed)` : "(list trimmed to fit the screen)",
    t = (h > 0 ? `, ${h} executing ${I(h,"a command","commands")}` : "") + (m > 0 ? `, ${m} ${I(m,"sandbox setting")}` : "") + (u > 0 ? `, ${u} ${I(u,"isolation setting")}` : "");
  return c ? `\u22EF and ${o} more not shown ${p}${t} \u2014 choose No unless you expected every one of these settings` : `${o} ${I(o,"setting")} not shown ${p}${t} \u2014 choose No unless you expected every one of these settings`
}

function cn(o, c, l) {
  if (o.length === 0) return {
    head: [],
    tail: [],
    elided: 0
  };
  let h = o.map((i) => Z(i, c)),
    m = h.reduce((i, y) => i + y, 0),
    u = Math.max(Z(H(o.length, !0, !1, o.length, o.length, o.length), c), Z(H(o.length, !0, !0, o.length, o.length, o.length), c));
  if (o.length <= z && m <= Math.max(l, u)) return {
    head: o,
    tail: [],
    elided: 0
  };
  let p = u,
    t = 0,
    a = o.length,
    f = (i) => p + h[i] <= l;
  if (f(0)) p += h[0], t = 1;
  while (a - 1 >= Math.max(t, o.length - Bn) && a - 1 > 0 && f(a - 1)) a--, p += h[a];
  while (t < a && t + (o.length - a) < z && f(t)) p += h[t], t++;
  return {
    head: o.slice(0, t),
    tail: o.slice(a),
    elided: a - t
  }
}

function ln(o, {
  commandRows: c,
  sandboxRows: l,
  isolationRows: h,
  envRows: m,
  categoryRows: u
}) {
  let p = U(Object.values(o.payloadSlots), (f) => f?.shellSettings.hooks !== void 0),
    t = c.length - p,
    a = [];
  if (t > 0) a.push(`${I(t,"command setting")} \xD7${t}`);
  if (l.length > 0) a.push(`${I(l.length,"sandbox setting")} \xD7${l.length}`);
  if (h.length > 0) a.push(`${I(h.length,"isolation setting")} \xD7${h.length}`);
  if (m.length > 0) a.push(`${I(m.length,"env var")} \xD7${m.length}`);
  if (u.length > 0 || p > 0) a.push("hooks");
  return a.join(", ")
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
  }, o.reveal), c[0] = o, c[1] = l;
  else l = c[1];
  return l
}

function Je(o) {
  let i = w(98),
    {
      settings: c,
      baseline: l,
      reveal: h,
      onAccept: m,
      onReject: u,
      wouldTakeAnswer: p
    } = o,
    t = h === "login_handoff",
    {
      columns: a,
      rows: f
    } = ve(),
    y, L, T, Pe, M, _, _e, We, An;
  if (i[0] !== l || i[1] !== a || i[2] !== c || i[3] !== f) {
    let En = MD(c);
    let W = B1r(l, En);
    let q = SY(W.changed) ? W.changed : En;
    L = j1r(q, c) ? un : W1r(q, c) ? hn : ee;
    let qe = q === W.changed ? W.unchangedCount : 0;
    let D = W.removedCount;
    T = qe > 0 ? `\uFF0B ${qe} other active ${I(qe,"setting")} unchanged since your last approval` : null;
    let G;
    if (i[13] !== D) G = D > 0 ? `\u2212 ${D} previously approved ${I(D,"setting")} no longer ${D===1?"requires":"require"} approval` : null, i[13] = D, i[14] = G;
    else G = i[14];
    M = G;
    let In = z1r(q);
    _ = `Approving applies: ${ln(q,In)} \u2014 ${L.risk}`;
    let Mt = dn(f, a, [L.intro, L.advice, _, ...T ? [T] : [], ...M ? [M] : []]);
    let {
      commandRows: ne,
      sandboxRows: te,
      isolationRows: oe,
      envRows: Nt,
      categoryRows: Dt
    } = In;
    y = ne;
    We = te;
    Pe = oe;
    _e = [...y, ...We, ...Pe, ...Nt, ...Dt];
    An = cn(_e, a, Mt);
    i[0] = l, i[1] = a, i[2] = c, i[3] = f, i[4] = y, i[5] = L, i[6] = T, i[7] = Pe, i[8] = M, i[9] = _, i[10] = _e, i[11] = We, i[12] = An
  } else y = i[4], L = i[5], T = i[6], Pe = i[7], M = i[8], _ = i[9], _e = i[10], We = i[11], An = i[12];
  let Y = An,
    Fe = Y.head.length,
    Ge = _e.length - Y.tail.length,
    Ye = Math.max(0, Math.min(y.length, Ge) - Fe),
    Be = y.length + We.length,
    Xe = Math.max(0, Math.min(Be, Ge) - Math.max(y.length, Fe)),
    jt = Be + Pe.length,
    Ue = Math.max(0, Math.min(jt, Ge) - Math.max(Be, Fe)),
    G;
  if (i[15] !== L || i[16] !== Ye || i[17] !== Ue || i[18] !== Xe || i[19] !== T || i[20] !== M || i[21] !== _ || i[22] !== Y) G = {
    ...Y,
    elidedCommandCount: Ye,
    elidedSandboxCount: Xe,
    elidedIsolationCount: Ue,
    copy: L,
    riskLine: _,
    hiddenLine: T,
    removedLine: M
  }, i[15] = L, i[16] = Ye, i[17] = Ue, i[18] = Xe, i[19] = T, i[20] = M, i[21] = _, i[22] = Y, i[23] = G;
  else G = i[23];
  let {
    head: k,
    tail: A,
    elided: ie,
    elidedCommandCount: Ve,
    elidedSandboxCount: Ke,
    elidedIsolationCount: Qe,
    copy: b,
    riskLine: Ze,
    hiddenLine: se,
    removedLine: re
  } = G, ne;
  if (i[24] !== m || i[25] !== u) ne = (Ot) => Ot === "confirm" ? m() : u(), i[24] = m, i[25] = u, i[26] = ne;
  else ne = i[26];
  let j = ZS(ne),
    He = Gi(v),
    {
      refusedWithin: en,
      noteRefused: nn,
      epoch: Jt
    } = rs(),
    tn = yh(),
    [Pt, zt] = g(0),
    te;
  if (i[27] === S) te = () => {
    zt(St)
  }, i[27] = te;
  else te = i[27];
  let oe;
  if (i[28] !== c) oe = [c], i[28] = c, i[29] = oe;
  else oe = i[29];
  R(te, oe);
  let _t = gc(`${Jt}:${Pt}`, v),
    Tn;
  if (i[30] !== t || i[31] !== He || i[32] !== nn || i[33] !== en) Tn = function E() {
    if (!t) {
      return !1
    }
    if (He() || en(v)) {
      return nn(), !0
    }
    return !1
  }, i[30] = t, i[31] = He, i[32] = nn, i[33] = en, i[34] = Tn;
  else Tn = i[34];
  let E = Tn,
    Mn;
  if (i[35] !== E || i[36] !== p) Mn = function ae() {
    if (E()) {
      return !0
    }
    return p?.() === !1
  }, i[35] = E, i[36] = p, i[37] = Mn;
  else Mn = i[37];
  let ae = Mn,
    Nn;
  if (i[38] !== j || i[39] !== E) Nn = function x(Wt) {
    if (E()) {
      return
    }
    j.answer(Wt)
  }, i[38] = j, i[39] = E, i[40] = Nn;
  else Nn = i[40];
  let x = Nn,
    Dn;
  if (i[41] !== x) Dn = () => x("cancel"), i[41] = x, i[42] = Dn;
  else Dn = i[42];
  let jn;
  if (i[43] === S) jn = {
    context: "Confirmation"
  }, i[43] = jn;
  else jn = i[43];
  ze("confirm:no", Dn, jn);
  let de;
  if (i[44] !== b.intro) de = e(n, {
    children: b.intro
  }), i[44] = b.intro, i[45] = de;
  else de = i[45];
  let ce;
  if (i[46] !== b.listLabel) ce = e(n, {
    dimColor: !0,
    children: b.listLabel
  }), i[46] = b.listLabel, i[47] = ce;
  else ce = i[47];
  let le;
  if (i[48] !== k) le = k.map($t), i[48] = k, i[49] = le;
  else le = i[49];
  let ue;
  if (i[50] !== ie || i[51] !== Ve || i[52] !== Qe || i[53] !== Ke || i[54] !== k.length || i[55] !== A.length) ue = ie > 0 && e(s, {
    paddingLeft: 2,
    children: e(n, {
      color: "warning",
      children: H(ie, k.length + A.length > 0, k.length + A.length === z, Ve, Ke, Qe)
    })
  }), i[50] = ie, i[51] = Ve, i[52] = Qe, i[53] = Ke, i[54] = k.length, i[55] = A.length, i[56] = ue;
  else ue = i[56];
  let he;
  if (i[57] !== A) he = A.map(kt), i[57] = A, i[58] = he;
  else he = i[58];
  let me;
  if (i[59] !== se) me = se && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      children: se
    })
  }), i[59] = se, i[60] = me;
  else me = i[60];
  let pe;
  if (i[61] !== re) pe = re && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      children: re
    })
  }), i[61] = re, i[62] = pe;
  else pe = i[62];
  let fe;
  if (i[63] !== ce || i[64] !== le || i[65] !== ue || i[66] !== he || i[67] !== me || i[68] !== pe) fe = r(s, {
    flexDirection: "column",
    children: [ce, le, ue, he, me, pe]
  }), i[63] = ce, i[64] = le, i[65] = ue, i[66] = he, i[67] = me, i[68] = pe, i[69] = fe;
  else fe = i[69];
  let ge;
  if (i[70] !== b.advice) ge = e(n, {
    children: b.advice
  }), i[70] = b.advice, i[71] = ge;
  else ge = i[71];
  let we;
  if (i[72] !== Ze) we = e(n, {
    color: "warning",
    children: Ze
  }), i[72] = Ze, i[73] = we;
  else we = i[73];
  const on = t ? `${j.attempts}:${_t.remountKey}` : `${j.attempts}`,
    sn = t ? v : void 0,
    rn = t ? "cancel" : j.refused ?? "confirm";
  let be, Re;
  if (i[74] !== x) be = () => x("confirm"), Re = () => x("cancel"), i[74] = x, i[75] = be, i[76] = Re;
  else be = i[75], Re = i[76];
  let xe;
  if (i[77] !== t || i[78] !== ae || i[79] !== tn || i[80] !== on || i[81] !== sn || i[82] !== rn || i[83] !== be || i[84] !== Re) xe = e(qn, {
    openedAt: tn,
    windowMs: sn,
    refuseInput: ae,
    confirmLabel: "Yes, I trust these settings",
    cancelLabel: "No, exit Claude Code",
    cancelFirst: t,
    focus: rn,
    hideIndexes: t,
    onConfirm: be,
    onCancel: Re
  }, on), i[77] = t, i[78] = ae, i[79] = tn, i[80] = on, i[81] = sn, i[82] = rn, i[83] = be, i[84] = Re, i[85] = xe;
  else xe = i[85];
  const an = t ? "select" : "confirm";
  let Ce;
  if (i[86] !== an) Ce = e(F, {
    chord: "enter",
    action: an
  }), i[86] = an, i[87] = Ce;
  else Ce = i[87];
  let On;
  if (i[88] === S) On = e(F, {
    chord: "escape",
    action: "exit"
  }), i[88] = On;
  else On = i[88];
  let Le;
  if (i[89] !== Ce) Le = e(iP, {
    children: r(ye, {
      children: [Ce, On]
    })
  }), i[89] = Ce, i[90] = Le;
  else Le = i[90];
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
  }), i[91] = de, i[92] = fe, i[93] = ge, i[94] = we, i[95] = xe, i[96] = Le, i[97] = Jn;
  else Jn = i[97];
  return Jn
}
var tJe = (o, c, l) => new Promise((h, m) => {
  let u = !1,
    p = null;

  function t(a) {
    return p !== null && !Ol(a, p)
  }(async () => {
    let {
      rerender: a,
      unmount: f,
      waitUntilExit: i
    } = await fU(e(W_, {
      children: e(kn, {
        settings: o,
        baseline: l,
        onAccept: (y) => {
          if (!t(y)) return !1;
          if (u = !0, h("approved"), c) a(null);
          else f()
        },
        onReject: (y) => {
          if (!t(y)) return !1;
          if (u = !0, h("rejected"), c) a(null);
          else f()
        }
      })
    }, "managed-settings-security"), oO(!1));
    if (p = Date.now(), await i(), !u) {
      let y = Error("Managed-settings consent dialog exited without an answer");
      d(y), m(y)
    }
  })().catch((a) => {
    d(a), m(a)
  })
});

function kn(o) {
  let p = w(11),
    {
      settings: c,
      baseline: l,
      onAccept: h,
      onReject: m
    } = o,
    u = ta(),
    t;
  if (p[0] !== u || p[1] !== h) t = () => h(u), p[0] = u, p[1] = h, p[2] = t;
  else t = p[2];
  let a;
  if (p[3] !== u || p[4] !== m) a = () => m(u), p[3] = u, p[4] = m, p[5] = a;
  else a = p[5];
  let f;
  if (p[6] !== l || p[7] !== c || p[8] !== t || p[9] !== a) f = e(Fht, {
    settings: c,
    baseline: l,
    reveal: "default",
    onAccept: t,
    onReject: a
  }), p[6] = l, p[7] = c, p[8] = t, p[9] = a, p[10] = f;
  else f = p[10];
  return f
}
export {
  iP,
  Fht,
  tJe
};
