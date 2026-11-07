// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { RL, VW, Mbs, Dbs, ppo } from "B:/~BUN/root/chunk-yhafkw66.js";
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H, rf } from "B:/~BUN/root/chunk-game8aqv.js";
import { f, de, ka } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { F, Im } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { eS, Pfe, fp, hn, dr, vE, jt, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { bh } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { _T } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ct, lP } from "B:/~BUN/root/chunk-bkfncj77.js";
import { _e } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { rc } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { nu } from "B:/~BUN/root/chunk-vs3bcjd7.js";
import { Q9t, S9e, aL, Eye, nXt, w9e, mi, fg, wmr, Tye, pWe, k9e, pIt } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { JC, Gre, cW, Pde, gct, Mki, v$, d_, _Ee, dfr, Dki, bEe, gno, Bt } from "B:/~BUN/root/chunk-27h4st9h.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { XN, KPe, jC } from "B:/~BUN/root/chunk-emd6eb45.js";
import { n, sn, sl } from "B:/~BUN/root/chunk-qey16aan.js";
import { Lo } from "B:/~BUN/root/chunk-npkbazqf.js";
import { QH } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { QOe, oat, YG, Kqt, i6o, iat, XG, d6o, f6o, $Be } from "B:/~BUN/root/chunk-dqprk713.js";
import { Gjr, Vjr, _3n, mFo, pGt, uK, L7, mGt, gFo, ole, Aot, Qme, Pot, wFo } from "B:/~BUN/root/chunk-z2h80746.js";
import { qot } from "B:/~BUN/root/chunk-cb9g6n6d.js";
import { Uj } from "B:/~BUN/root/chunk-fh0ef5mp.js";
import { LM } from "B:/~BUN/root/chunk-fd5dzvk6.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { $he, wit, J_n, COe, rCt } from "B:/~BUN/root/chunk-stjhzzm3.js";
import { q6e } from "B:/~BUN/root/chunk-v9az3a6f.js";
import { ue, ve, O, Z, y, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { JT } from "B:/~BUN/root/chunk-yjr7e11x.js";
import { o, I, u, B } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { w, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var Jpn = "tengu_pewter_summit";
j();
function QO() {
  let [i, s] = y({
    ...mi()
  });
  return O(() => Tye(d => {
    s({
      ...d
    });
  }), []), i;
}
var mt = new W(() => ({
  messageKeys: new Set(),
  footerOfferKeys: new Set()
}));
function m3n(i) {
  let rateLimitType = i.rateLimitType;
  return {
    limit_type: rateLimitType !== void 0 && Object.hasOwn(Eye, rateLimitType) ? f(rateLimitType) : void 0,
    tier: f(COe()),
    resets_at: i.resetsAt
  };
}
function L5s(i, s, d) {
  if (s.resetsAt === void 0) return;
  let messageKeys = mt.of(i).messageKeys,
    b = `${s.resetsAt}:${d.shown}`;
  if (messageKeys.has(b)) return;
  messageKeys.add(b), l("tengu_rate_limit_message_shown", {
    ...m3n(s),
    hint: f(d.kind),
    hint_shown: d.shown,
    wait_live: d.waitLive
  });
}
function nFo(i, s, d) {
  if (s.resetsAt === void 0) return;
  let footerOfferKeys = mt.of(i).footerOfferKeys,
    b = `${s.resetsAt}:${d}`;
  if (footerOfferKeys.has(b)) return;
  footerOfferKeys.add(b), l("tengu_limit_footer_offer_shown", {
    ...m3n(s),
    offer: f(d)
  });
}
j();
function Qpn(i) {
  return Gre.isEnabled() && (i === void 0 || i.includes("overage"));
}
function ft(i) {
  let s = dr(),
    d = s === "team" || s === "enterprise";
  return Qpn(i) && !d && !St() && Pfe(eS()) === null;
}
j();
var Fn = 30000;
function rFo(i, s, d) {
  let m = !1,
    b = () => {};
  if (Number.isNaN(i)) return b;
  let _ = () => {
    if (m) return;
    let h = i - Date.now();
    if (h <= 0) {
      d();
      return;
    }
    b = s(_, Math.min(h, Fn));
  };
  return _(), () => {
    m = !0, b();
  };
}
function IG(i) {
  let d = ve(jC)?.setTimeout ?? XN,
    m = Z(() => {
      if (i === null) return KPe;
      return b => rFo(i, d, b);
    }, [i, d]);
  return At(m, () => i !== null && Date.now() >= i);
}
var pt = 30000,
  key = "quota-auto-resume-cap",
  Bjr = "quota-auto-resume-cancelled",
  jjr = "Automatic continue cancelled \xB7 /rate-limit-options to re-arm";
function xPe() {
  return At(i6o, QOe, QOe);
}
var Kn = "tengu_functional_llama",
  bt = {
    waiting: "Continuing automatically {when} \xB7 Esc to cancel",
    started: "Usage limit reached \xB7 continuing automatically {when} \xB7 esc to cancel",
    rearmed: "Usage limit reached again \xB7 continuing automatically {when} \xB7 esc to cancel",
    credits: "/usage-credits to continue now"
  },
  Mt = 120,
  $n = p(() => u({
    waiting: o().optional().catch(void 0),
    started: o().optional().catch(void 0),
    rearmed: o().optional().catch(void 0),
    credits: o().optional().catch(void 0)
  }));
function ye(i, s) {
  let d = nu(s);
  if (d === void 0) return bt[i];
  if (i === "credits") return ct(d, Mt);
  return d.includes("{when}") ? d : bt[i];
}
function Dn(i) {
  let s = $n().safeParse(i),
    d = s.success ? s.data : {};
  return {
    waiting: ye("waiting", d.waiting),
    started: ye("started", d.started),
    rearmed: ye("rearmed", d.rearmed),
    credits: ye("credits", d.credits)
  };
}
function te() {
  return Dn(v(Kn, null));
}
function Xe(i, s) {
  return ct(i.replace("{when}", s), Mt);
}
function Nt(i, s) {
  let d = i.phase === "armed" ? i.resetsAtSeconds : 0,
    m = d * 1000 > s ? lP(d) : void 0;
  return m ? `at ${m}` : "shortly";
}
function _t(i, s) {
  return Xe(te().started, Nt(i, s));
}
function gt(i, s) {
  return Xe(te().rearmed, Nt(i, s));
}
var Ee = "Usage limit reached";
function oFo(i) {
  let s = lP(i);
  return s ? `${Ee} \xB7 limit resets ${s}` : Ee;
}
function yt(i, s) {
  if (i.phase === "stale") return {
    status: "Your usage limit has reset",
    next: "Press enter to continue"
  };
  if (i.phase !== "armed") return null;
  let d = lP(i.resetsAtSeconds),
    status = oFo(i.resetsAtSeconds);
  if (s) return {
    status: status,
    next: "Continuing shortly \xB7 Esc to cancel"
  };
  let next = Xe(te().waiting, d ? "at " + d : "when it resets");
  if (next.startsWith(`${Ee} \xB7 `)) next = next.slice(Ee.length + 3).replace(/^./u, _ => _.toUpperCase());
  return {
    status: status,
    next: next
  };
}
function ht(i, s, d) {
  return i.phase === "armed" && !s && d;
}
function Et() {
  return ft(mi().upgradePaths);
}
function wt() {
  return;
}
function Be(i) {
  return IG(i.phase === "armed" ? Math.min(i.fireAtMs, i.resetsAtSeconds * 1000) : null);
}
function sFo(i) {
  let L = S(36),
    {
      isLoading: isLoading,
      transcript: transcript
    } = i,
    {
      addNotification: addNotification,
      removeNotification: removeNotification
    } = Lo(),
    {
      storageV5: storageV5,
      credentials: credentials
    } = Fe(),
    A = QH(),
    E = xPe(),
    C = Be(E),
    k = At(Tye, Et),
    R = At(ole, E.phase === "armed" ? Aot : wt),
    x,
    U;
  if (L[0] !== storageV5) x = () => {
    f6o(storageV5);
  }, U = [storageV5], L[0] = storageV5, L[1] = x, L[2] = U;else x = L[1], U = L[2];
  O(x, U);
  let P;
  if (L[3] !== transcript) P = (Ne, J) => transcript.apply({
    type: "append",
    messages: [Bt(Ne, J)]
  }), L[3] = transcript, L[4] = P;else P = L[4];
  let T = P,
    Y;
  if (L[5] !== credentials || L[6] !== storageV5 || L[7] !== A) Y = (message, notificationType) => void Uj({
    message: message,
    notificationType: notificationType
  }, A, {
    storageV5: storageV5,
    credentials: credentials
  }), L[5] = credentials, L[6] = storageV5, L[7] = A, L[8] = Y;else Y = L[8];
  let M = Y,
    ie,
    be;
  if (L[9] !== addNotification || L[10] !== T || L[11] !== M || L[12] !== removeNotification) ie = () => Kqt(We => {
    switch (We) {
      case "armed":
      case "rearmed":
        {
          removeNotification(key), removeNotification(Bjr);
          return;
        }
      case "taken-over":
        {
          T(gt(QOe(), Date.now()), "notice");
          return;
        }
      case "cancelled":
        {
          T(jjr, "notice");
          return;
        }
      case "auto-armed":
        {
          T(_t(QOe(), Date.now()), "notice");
          return;
        }
      case "fired-now":
        {
          T("Usage limit available again \xB7 continuing now", "notice"), M("Usage limit available \u2014 Claude is continuing your task", "quota_auto_resume_fired");
          return;
        }
      case "stale":
        {
          T("Usage limit has reset \xB7 Press enter to continue", "notice"), M("Usage limit reset \u2014 press enter to continue", "quota_auto_resume_stale");
          return;
        }
      case "disabled":
        {
          T(`Automatic continue was turned off \xB7 this task will not resume on its own${q6e() ? " (/rate-limit-options to wait anyway)" : ""}`, "warning"), M("Automatic continue was turned off \u2014 the task will not resume on its own", "quota_auto_resume_disabled");
          return;
        }
      case "horizon-exceeded":
        {
          T("Automatic continue stopped \xB7 the usage limit now resets more than 24 hours out, so this task will not resume on its own (/rate-limit-options to wait anyway)", "warning"), M("Automatic continue stopped \u2014 the usage limit now resets more than 24 hours out; the task will not resume on its own", "quota_auto_resume_disabled");
          return;
        }
      case "continuation-dropped":
        {
          T("Automatic continue did not run \xB7 the continuation was blocked before it reached the model, so this task did not resume on its own \xB7 send a prompt to continue", "warning"), M("Automatic continue did not run \u2014 the continuation was blocked before it reached the model; send a prompt to continue", "quota_auto_resume_disabled");
          return;
        }
      case "cap-exhausted":
        {
          T("Automatic continue stopped after repeated usage limit hits \xB7 This task will not resume on its own (/rate-limit-options to try again)", "warning"), M("Automatic continue stopped after repeated usage-limit hits \u2014 the task will not resume on its own", "quota_auto_resume_disabled"), addNotification({
            key: key,
            kind: "warning",
            text: "Automatic continue stopped after repeated usage-limit hits \xB7 /rate-limit-options to try again",
            color: "warning",
            priority: "high",
            timeoutMs: 20000
          });
          return;
        }
      default:
    }
  }), be = [addNotification, removeNotification, T, M], L[9] = addNotification, L[10] = T, L[11] = M, L[12] = removeNotification, L[13] = ie, L[14] = be;else ie = L[13], be = L[14];
  O(ie, be);
  let Ke;
  if (L[15] !== T || L[16] !== isLoading || L[17] !== M) Ke = () => {
    if (d6o(Date.now(), isLoading) === "fired") T("Usage limit reset \xB7 Continuing automatically", "notice"), M("Usage limit reset \u2014 Claude is continuing your task", "quota_auto_resume_fired");
  }, L[15] = T, L[16] = isLoading, L[17] = M, L[18] = Ke;else Ke = L[18];
  sl(Ke, E.phase === "armed" ? pt : null);
  let Sn;
  if (L[19] !== E || L[20] !== k || L[21] !== C) Sn = ht(E, C, k), L[19] = E, L[20] = k, L[21] = C, L[22] = Sn;else Sn = L[22];
  let $e = Sn,
    Je = $e && R !== void 0 && E.phase === "armed" ? E.resetsAtSeconds : null,
    In,
    On;
  if (L[23] !== Je) On = () => {
    if (Je !== null) Qme("cli_wait_footer");
  }, In = [Je], L[23] = Je, L[24] = In, L[25] = On;else In = L[24], On = L[25];
  O(On, In);
  let Un;
  if (L[26] !== E || L[27] !== C) Un = yt(E, C), L[26] = E, L[27] = C, L[28] = Un;else Un = L[28];
  let He = Un;
  if (He === null) {
    let ae;
    if (L[29] === w) {
      let resetsAt = mi().resetsAt;
      ae = resetsAt !== void 0 && oat(resetsAt) ? {
        kind: "declined"
      } : null;
      L[29] = ae;
    } else ae = L[29];
    return ae;
  }
  let credits;
  if (L[30] !== $e || L[31] !== R) credits = $e ? R !== void 0 ? `${te().credits} \xB7 ${R}` : te().credits : null, L[30] = $e, L[31] = R, L[32] = credits;else credits = L[32];
  let Nn;
  if (L[33] !== He || L[34] !== credits) Nn = {
    kind: "live",
    ...He,
    credits: credits
  }, L[33] = He, L[34] = credits, L[35] = Nn;else Nn = L[35];
  return Nn;
}
import { randomUUID as Yn } from "crypto";
var rYe = ["session", "weekly", "fable", "full"];
function Ye(i) {
  if (i.givesBackWeekly) return "fable";
  if (i.type !== null) return i.type;
  let s = i.clears.includes("five_hour"),
    d = i.clears.some(item => item !== "five_hour");
  return s && !d ? "session" : d && !s ? "weekly" : "full";
}
function Pt(i) {
  return !i.paused && (i.resetsLeft > 0 || i.usableNow);
}
function se(i, s) {
  return i.clears.some(item => item === s) || s === "seven_day" && i.givesBackWeekly;
}
var Xn = {
  five_hour: "session",
  seven_day: "weekly",
  seven_day_overage_included: "fable",
  seven_day_opus: null,
  seven_day_sonnet: null,
  overage: null
};
function qe(i, s) {
  if (s !== null && Xn[s] === i) return -1;
  if (s === "seven_day" && i === "fable") return rYe.length;
  return rYe.indexOf(i);
}
function z(i) {
  switch (i) {
    case "session":
      return "5-hour reset";
    case "fable":
      return "Fable reset";
    case "full":
      return "full reset";
    case "weekly":
      return "weekly reset";
  }
}
function le(i, s) {
  let d = i === "session" ? "five-hour reset" : z(i);
  return s === 0 ? `no ${d}s` : s === 1 ? `1 ${d}` : `${s} ${d}s`;
}
function N5s(i) {
  return `${i.map(({
    kind: kind,
    count: count
  }) => `${count} ${le(kind, 1).replace(/^1 | reset$/g, "")}`).join(", ")} resets`;
}
function Ft(i) {
  return i === "fable" ? "returns what Fable used to your weekly limit" : void 0;
}
function Wt(i) {
  switch (i) {
    case "session":
      return "5-hour limit reset";
    case "fable":
      return "Fable reset used \xB7 what Fable used is back in your weekly limit";
    case "full":
      return "Limits reset";
    case "weekly":
      return "Weekly limits reset";
  }
}
var qn = 3,
  tt = 12000,
  Gt = 35000,
  Vn = 600000,
  Qn = 20000;
function nt(i) {
  if (!J_n(i) || i.rateLimitType === void 0 || i.resetsAt === void 0) return null;
  return {
    rateLimitType: i.rateLimitType,
    wallResetsAt: i.resetsAt,
    accountEpoch: fg()
  };
}
function me(i, s) {
  return s.rateLimitType === i.rateLimitType && s.resetsAt === i.wallResetsAt && i.accountEpoch === fg();
}
function Q(i) {
  let s = L7();
  return s.phase === "answered" && me(s.wall, i) ? s.status : void 0;
}
function rt(i) {
  let s = L7();
  return s.phase === "failed" && me(s.wall, i);
}
function D() {
  return Date.now();
}
function zt(i, s, d, m) {
  if (i.final) return !1;
  let b = m - i.answeredAtMs,
    _ = E => b < 0 || b >= E;
  if (Xt(s, m) !== void 0) return !1;
  let h = pGt(i.status?.cooldownUntil ?? null),
    A = b < 0 || b >= Qn && (h === void 0 || m >= Math.min(h, i.answeredAtMs + 150000));
  switch (d) {
    case "wall":
      return _(Vn);
    case "command":
      return A;
    case "dialog":
      return A && (i.status === null || rr(s));
  }
}
function Re(i, s, d) {
  let m = new Map();
  for (let grant of i.grants) {
    if (!Pt(grant)) continue;
    let kind_2 = Ye(grant),
      h = m.get(kind_2) ?? {
        kind: kind_2,
        grants: [],
        resetsLeft: 0,
        target: void 0
      };
    m.set(kind_2, h), h.grants.push(grant), h.resetsLeft += grant.resetsLeft;
    let endsAtMs = pGt(grant.endsAt) ?? null;
    if (h.target === void 0 && grant.usableNow && (endsAtMs === null || endsAtMs > d) && (s === null || se(grant, s) && !qt(grant, i))) h.target = {
      grant: grant,
      endsAtMs: endsAtMs
    };
  }
  return [...m.values()].sort((itemA, itemB) => qe(itemA.kind, s) - qe(itemB.kind, s));
}
function oYe(i, s = Date.now()) {
  let d = Q(i);
  if (!J_n(i) || d === void 0 || d === null || i.rateLimitType === void 0 || i.resetsAt === void 0 || i.resetsAt * 1000 <= s || RL() || !Pde()) return [];
  let rateLimitType_2 = i.rateLimitType,
    b = xe(d),
    _ = [];
  for (let h of Re(d, rateLimitType_2, s)) if (h.target !== void 0) _.push({
    origin: "wall",
    kind: h.kind,
    grant: h.target.grant,
    resetsLeft: Math.max(1, h.resetsLeft),
    totalResetsLeft: Math.max(1, b),
    weeklyResetsAt: d.weeklyResetsAt,
    endsAtMs: h.target.endsAtMs,
    rateLimitType: rateLimitType_2
  });
  return _;
}
function Xt(i, s = Date.now()) {
  return oYe(i, s)[0];
}
function Zn(i, s = Date.now()) {
  let d = Q(i);
  if (d === void 0 || d === null || i.rateLimitType === void 0) return [];
  return Yt(d, i.rateLimitType, s);
}
function Yt(i, s, d) {
  let m = [];
  for (let b of Re(i, s, d)) {
    let _ = b.grants[0];
    if (b.target !== void 0 || b.resetsLeft === 0 || !_) continue;
    let reason = s !== null && !b.grants.some(item => se(item, s)) ? `doesn't refill your ${Se(s)}` : tr(_, i),
      A = z(b.kind);
    m.push({
      kind: b.kind,
      resetsLeft: b.resetsLeft,
      reason: reason,
      text: `${A.charAt(0).toUpperCase()}${A.slice(1)} \xB7 ${reason}`
    });
  }
  return m;
}
function er(i, s) {
  if (i.unavailableReason !== null) return i.unavailableReason;
  if (s.cooldownUntil !== null) return "cooldown";
  for (let d of i.blocking) switch (d) {
    case "five_hour":
      return "blocked_five_hour";
    case "seven_day":
      return "blocked_seven_day";
    case "seven_day_opus":
      return "blocked_opus";
    case "seven_day_sonnet":
      return "blocked_sonnet";
    case "seven_day_overage_included":
    case "seven_day_cowork":
    case "seven_day_omelette":
    case "seven_day_oauth_apps":
      break;
  }
  if (i.blocking.length > 0) return "blocked_other";
  if (s.atLimit && !s.exhausted.some(item => i.clears.includes(item) || item === "seven_day" && i.givesBackWeekly)) return "cannot_clear";
  return i.useRequiresLimit ? "needs_limit" : "unavailable";
}
function tr(i, s) {
  switch (er(i, s)) {
    case "cooldown":
      return "try again in a minute";
    case "blocked_five_hour":
      return `can't be used while you're at your ${w9e("five_hour")}`;
    case "blocked_seven_day":
      return i.givesBackWeekly ? pn : `can't be used while you're at your ${w9e("seven_day")}`;
    case "blocked_opus":
      return `can't be used while you're at your ${w9e("seven_day_opus")}`;
    case "blocked_sonnet":
      return `can't be used while you're at your ${nXt()}`;
    case "blocked_other":
      return "can't be used while you're at another limit it doesn't refill";
    case "cannot_clear":
      return "doesn't refill the limit you've reached";
    case "needs_limit":
      return "usable once you reach a limit it refills";
    case "unavailable":
      return "can't be used right now";
  }
}
function uGt(i) {
  let s = v$(),
    d = d_(s.label, Xme(i));
  return i.kind === "fable" && i.origin === "wall" && i.rateLimitType === "seven_day" ? `${d} \xB7 ${s.fableAtWeeklySuffix}` : d;
}
function xe(i) {
  return i.grants.reduce((acc, item) => acc + item.resetsLeft, 0);
}
function qt(i, s) {
  return !i.useRequiresLimit && !s.exhausted.some(item => i.clears.includes(item) || item === "seven_day" && i.givesBackWeekly);
}
function nr(i, s) {
  if (!qt(i, s)) return null;
  let d = null;
  for (let claimType of Gjr) {
    let percentUsed = i.percentUsed[claimType];
    if (i.clears.includes(claimType) && percentUsed !== void 0 && (d === null || percentUsed > d.percentUsed)) d = {
      claimType: claimType,
      percentUsed: percentUsed
    };
  }
  if (d === null) return {
    kind: "unnumbered",
    percentUsedMax: null
  };
  let limitName = it(d.claimType);
  if (limitName === null || d.percentUsed >= 100) return {
    kind: "unnumbered",
    percentUsedMax: d.percentUsed
  };
  return {
    kind: "numbered",
    percentLeft: 100 - d.percentUsed,
    limitName: limitName,
    percentUsedMax: d.percentUsed
  };
}
function Se(i) {
  return i === "seven_day_sonnet" ? nXt() : w9e(i);
}
function it(i) {
  switch (i) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
    case "seven_day_overage_included":
    case "seven_day_sonnet":
      return Se(i);
    case "seven_day_cowork":
    case "seven_day_omelette":
    case "seven_day_oauth_apps":
      return null;
  }
}
function iFo(i) {
  if (i.origin === "wall" || i.earlyUse === null) return;
  let s = v$();
  switch (i.earlyUse.kind) {
    case "numbered":
      return d_(s.earlyLine, Xme(i));
    case "unnumbered":
      return d_(s.earlyNoNumberLine, Xme(i));
  }
}
function PPe() {
  let i = uK();
  return i.claiming || i.unsettledClaimGrantId !== null && i.unsettledClaimEpoch === fg() && tn(i);
}
function Zpn(i, s = Date.now()) {
  return Xt(i, s) !== void 0;
}
function sYe(i, s = Date.now()) {
  let d = Q(i);
  if (!J_n(i) || d === void 0 || d === null || !d.eligible || d.grants.length === 0 || d.grants.some(item => item.resetsLeft > 0 || item.usableNow) || i.resetsAt === void 0 || i.resetsAt * 1000 <= s || !Pde()) return;
  return d_(v$().spentLine, {
    left: 0
  });
}
function F5s(i, s = Date.now()) {
  return Vjr(Q(i), s) !== void 0;
}
function rr(i) {
  let s = Q(i);
  return s !== void 0 && s !== null && s.eligible && !s.grants.some(item => item.usableNow) && s.grants.some(item => item.resetsLeft > 0);
}
function Xme(i) {
  return {
    kind: z(i.kind),
    left: i.resetsLeft,
    kindResets: le(i.kind, i.resetsLeft),
    date: Vt(i.grant.endsAt),
    deadline: Ae(i.grant.endsAt),
    week: Ae(i.weeklyResetsAt),
    limits: ir(i.grant),
    returns: Ft(i.kind),
    done: Wt(i.kind),
    ...(i.origin === "anytime" && i.earlyUse?.kind === "numbered" && {
      percent: i.earlyUse.percentLeft,
      limit: i.earlyUse.limitName
    })
  };
}
function ir(i) {
  let s = new Set();
  if (i.givesBackWeekly) s.add("Fable");
  for (let b of i.clears) switch (b) {
    case "five_hour":
      s.add("5-hour");
      break;
    case "seven_day":
      s.add("weekly");
      break;
    case "seven_day_overage_included":
      s.add(i.givesBackWeekly ? "Fable" : "weekly");
      break;
    case "seven_day_opus":
      s.add(bh(w9e(b), " limit"));
      break;
    case "seven_day_sonnet":
      s.add(bh(nXt(), " limit"));
      break;
    case "seven_day_cowork":
    case "seven_day_omelette":
    case "seven_day_oauth_apps":
      break;
  }
  let d = [...s],
    m = d.pop();
  if (m === void 0) return "limits";
  return d.length === 0 ? `${m} limit` : `${d.join(", ")} and ${m} limits`;
}
function Vt(i) {
  let s = pGt(i);
  return s === void 0 ? void 0 : JT(Math.floor(s / 1000), !1, !1, !0);
}
function Ae(i) {
  let s = pGt(i);
  return s === void 0 ? void 0 : JT(Math.floor(s / 1000), !1, !0, !0);
}
function Qt() {
  return Pde() || wFo(v(Pot, null));
}
function H5s(i, s) {
  if (!Qt() || !J_n(i)) return;
  Zt(i, s, "cli_menu");
}
function $5s(i) {
  let s = mi();
  if (!Pde() || s.rateLimitType !== "seven_day_overage_included" || !J_n(s)) return;
  Zt(s, i, "cli_credits_required");
}
function Zt(i, s, d) {
  let m = uK();
  if (Rr(m), m.continuableWallResetsAt = i.resetsAt ?? null, m.unsettledClaimEpoch !== fg()) K(m);
  V(i, s, "wall", d);
}
function V(i, s, d, surface) {
  if (d === "wall" ? !Qt() : !Pde()) return Promise.resolve();
  let wall = nt(i);
  if (wall === null) return Promise.resolve();
  let _ = uK();
  if (surface !== void 0) _.wallSurface = {
    wall: wall,
    surface: surface
  };
  let state = _.state,
    failures = 0,
    previous = null;
  if (state.phase !== "idle" && me(state.wall, i)) switch (state.phase) {
    case "answered":
      if (!zt(state, i, d, D())) return Promise.resolve();
      previous = state;
      break;
    case "asking":
      return _.pendingAsk ?? Promise.resolve();
    case "failed":
      if (d === "wall" && state.failures >= qn) return Promise.resolve();
      failures = state.failures;
  }
  mGt({
    phase: "asking",
    wall: wall
  });
  let autoArmed = YG(),
    surface_2 = surface ?? (_.wallSurface !== null && me(_.wallSurface.wall, i) ? _.wallSurface.surface : "cli_menu"),
    R = we(_3n(s, {
      surface: surface_2
    }), tt).then(L => {
      if (Kt({
        wall: wall,
        failures: failures,
        previous: previous,
        result: L ?? {
          kind: "failed"
        },
        autoArmed: autoArmed
      }), L !== void 0 && L.kind === "answered" && L.status?.ineligibleReason !== "unavailable") en(_, L.status, s);
    }).catch(L => {
      a(F(L));
      try {
        Kt({
          wall: wall,
          failures: failures,
          previous: previous,
          result: {
            kind: "failed"
          },
          autoArmed: autoArmed
        });
      } catch (error) {
        a(F(error));
      }
    }).finally(() => {
      if (_.pendingAsk === R) _.pendingAsk = null;
    });
  return _.pendingAsk = R, R;
}
function Kt({
  wall: wall_2,
  failures: failures_2,
  previous: previous_2,
  result: result,
  autoArmed: b
}) {
  let _ = L7();
  if (_.phase !== "asking" || _.wall.rateLimitType !== wall_2.rateLimitType || _.wall.wallResetsAt !== wall_2.wallResetsAt || _.wall.accountEpoch !== wall_2.accountEpoch) return;
  let status_2 = result.kind === "answered" ? result.status : null,
    A = result.kind === "failed" || status_2?.ineligibleReason === "unavailable";
  if (A && previous_2 !== null) mGt({
    ...previous_2,
    answeredAtMs: D()
  });else if (A) mGt({
    phase: "failed",
    wall: wall_2,
    failures: failures_2 + 1
  });else {
    let final = result.kind === "no_profile_scope" || result.kind === "not_authorized";
    mGt(final ? {
      phase: "answered",
      wall: wall_2,
      status: status_2,
      answeredAtMs: D(),
      final: final
    } : {
      phase: "answered",
      wall: wall_2,
      status: status_2,
      answeredAtMs: D()
    });
  }
  if (!Pde()) return;
  let config_version = gct();
  if (l("tengu_cedar_ember_asked", {
    outcome: f(nn(result)),
    at_wall: !0,
    attempt: failures_2 + 1,
    eligible: status_2?.eligible ?? !1,
    ineligible_reason: de(status_2?.ineligibleReason),
    limit_type: f(wall_2.rateLimitType),
    config_version: config_version
  }), A || status_2 === null || !status_2.eligible) return;
  let C = uK(),
    k = `${wall_2.accountEpoch}:${wall_2.rateLimitType}:${wall_2.wallResetsAt}:${status_2.eligible}:${status_2.nextGrantId}`;
  if (C.wallRecordKey === k) return;
  C.wallRecordKey = k;
  let R = Re(status_2, wall_2.rateLimitType, D()).filter(item => item.target !== void 0),
    L = R[0]?.target?.grant;
  l("tengu_cedar_ember_wall", {
    eligible: status_2.eligible,
    at_limit: status_2.atLimit,
    usable: L !== void 0,
    grant_id: _e(L?.id ?? status_2.nextGrantId),
    kind: de(L && Ye(L)),
    kinds_offered: ka(R.map(item => item.kind)),
    resets_left: L?.resetsLeft ?? 0,
    resets_left_total: xe(status_2),
    grants: status_2.grants.length,
    limit_type: f(wall_2.rateLimitType),
    limit_types: ka(status_2.exhausted),
    tier: f(COe()),
    auto_armed: b,
    low_priority_active: RL(),
    config_version: config_version,
    surface: de(status_2.eventProps?.surface),
    server_tier: de(status_2.eventProps?.tier),
    tenure_bucket: de(status_2.eventProps?.tenureBucket),
    billing_path: de(status_2.eventProps?.billingPath),
    billing_period: de(status_2.eventProps?.billingPeriod),
    extra_usage_state: de(status_2.eventProps?.extraUsageState)
  });
}
function en(i, s, d) {
  if (i.unsettledClaimGrantId === null) return;
  if (i.unsettledClaimEpoch !== fg()) {
    K(i);
    return;
  }
  if (s?.grants.some(m => m.id === i.unsettledClaimGrantId && m.usableNow)) return;
  if (N(d), s !== null && !Ie(s)) K(i);
}
var ar = 600000;
function tn(i) {
  return i.unsettledClaimAtMs !== null && D() - i.unsettledClaimAtMs < ar;
}
function nn(i) {
  return i.kind === "answered" ? i.status === null ? "absent" : "block" : i.kind;
}
function at(i, s) {
  return i.unsettledClaimGrantId === s && i.unsettledClaimEpoch === fg() && tn(i);
}
function K(i) {
  i.unsettledClaimGrantId = null, i.unsettledClaimRequestId = null, i.unsettledClaimEpoch = null, i.unsettledClaimAtMs = null;
}
function rn(i, s, d, m) {
  if (i.unsettledClaimRequestId !== d) i.unsettledClaimAtMs = D();
  i.unsettledClaimGrantId = s, i.unsettledClaimRequestId = d, i.unsettledClaimEpoch = m;
}
function an(i, s) {
  return at(i, s) && i.unsettledClaimRequestId !== null ? i.unsettledClaimRequestId : Yn();
}
function emn(i, s) {
  let d = oYe(i),
    [m] = d;
  if (m === void 0 || i.resetsAt === void 0) return;
  let b = `${m.rateLimitType}:${i.resetsAt}:${d.map(item => item.grant.id).join(",")}`,
    _ = uK();
  if (_.shownOfferKey === b) return;
  _.shownOfferKey = b, l("tengu_cedar_ember_shown", {
    surface: f(s),
    grant_id: _e(m.grant.id),
    kind: f(m.kind),
    kinds_offered: ka(d.map(item => item.kind)),
    resets_left: m.grant.resetsLeft,
    resets_left_total: m.totalResetsLeft,
    limit_type: f(m.rateLimitType),
    config_version: gct()
  });
}
function h3n(i, s) {
  let d = L7();
  if (rt(i) || d.phase === "answered" && me(d.wall, i) && zt(d, i, "dialog", D())) V(i, s, "dialog");
}
async function fGt(i, s, d) {
  try {
    return await sr(i, s, d);
  } catch (error) {
    return a(F(error)), {
      kind: "answer",
      result: {
        outcome: "unavailable",
        text: text
      }
    };
  }
}
async function on(i, s) {
  let m = uK().pendingAsk !== null;
  if (await V(mi(), s, i), m && rt(mi())) await V(mi(), s, i);
}
async function sr(i, s, d) {
  if (uK().claiming) return {
    kind: "answer",
    result: {
      outcome: "unavailable",
      text: text_2
    }
  };
  if (mi().status !== "rejected" && $he() && Pde()) {
    if (RL()) return {
      kind: "answer",
      result: {
        outcome: "not_offered",
        text: text_3
      }
    };
    return or(i, s, d);
  }
  await on(i, s);
  let b = mi(),
    _ = oYe(b);
  if (_.length === 0) {
    let h = Q(b);
    if (h !== void 0 && h !== null && (Ie(h) || cn(h, b))) N(s);
    return {
      kind: "answer",
      result: dn(b)
    };
  }
  return un(i, _, Zn(b), d);
}
function un(i, offers, unusable, m) {
  let [b, ..._] = offers,
    offer = m !== void 0 ? offers.find(item => item.kind === m) : b !== void 0 && _.length === 0 ? b : void 0;
  if (offer !== void 0) return Wjr(i, offer), {
    kind: "confirm",
    offer: offer
  };
  if (m === void 0) return {
    kind: "choose",
    offers: offers,
    unusable: unusable
  };
  let A = unusable.find(item => item.kind === m);
  return {
    kind: "answer",
    result: {
      outcome: "not_offered",
      text: `${A === void 0 ? d_(v$().noKindLine, {
        kind: z(m)
      }) : A.reason.startsWith("can't be used") ? `Your ${z(m)} ${A.reason}` : `Your ${z(m)} can't be used right now \xB7 ${A.reason}`} \xB7 you can use ${ln(offers.map(item => item.kind))}`
    }
  };
}
function ln(i) {
  let s = i.map(item => `a ${z(item)}`),
    d = s.pop();
  return d === void 0 ? "nothing here" : s.length === 0 ? d : `${s.join(", ")} or ${d}`;
}
function Wjr(i, s) {
  l("tengu_cedar_ember_selected", {
    entry: f(i),
    grant_id: _e(s.grant.id),
    kind: f(s.kind),
    resets_left: s.grant.resetsLeft,
    resets_left_total: s.totalResetsLeft,
    limit_type: de(s.origin === "wall" ? s.rateLimitType : void 0),
    at_limit: s.origin === "wall" || s.atLimit,
    early_use: Ce(s),
    auto_armed: YG(),
    config_version: gct()
  });
}
async function or(i, s, d) {
  let m = uK(),
    b = await we(_3n(s, {
      read: "cedar_ember"
    }), tt),
    _ = b?.kind === "answered" ? b.status : null,
    h = b === void 0 || b.kind === "failed" || _?.ineligibleReason === "unavailable";
  if (l("tengu_cedar_ember_asked", {
    outcome: f(nn(b ?? {
      kind: "failed"
    })),
    at_wall: !1,
    asker: f(i),
    eligible: _?.eligible ?? !1,
    ineligible_reason: de(_?.ineligibleReason),
    at_limit: _?.atLimit ?? !1,
    grants: _?.grants.length ?? 0,
    grant_id: _e(_?.nextGrantId ?? null),
    config_version: gct()
  }), h) return {
    kind: "answer",
    result: {
      outcome: "unavailable",
      text: PPe() ? d_(v$().unconfirmedAnytimeLine, {}) : text
    }
  };
  if (en(m, _, s), _ === null) return {
    kind: "answer",
    result: $t(_)
  };
  let A = D(),
    E = ur(_, A);
  if (E.length === 0) return {
    kind: "answer",
    result: $t(_)
  };
  return un(i, E, Yt(_, null, A), d);
}
function ur(i, s) {
  let d = xe(i),
    m = [];
  for (let b of Re(i, null, s)) if (b.target !== void 0) m.push({
    origin: "anytime",
    kind: b.kind,
    grant: b.target.grant,
    resetsLeft: Math.max(1, b.resetsLeft),
    totalResetsLeft: Math.max(1, d),
    weeklyResetsAt: i.weeklyResetsAt,
    endsAtMs: b.target.endsAtMs,
    earlyUse: nr(b.target.grant, i),
    atLimit: i.atLimit
  });
  return m;
}
function $t(i) {
  if (i === null || !i.eligible || i.grants.length === 0) return {
    outcome: "not_offered",
    text: `${text_6} \xB7 ${fn}`
  };
  let s = i.grants.filter(item => item.resetsLeft > 0),
    d = {
      left: xe(i),
      date: Vt(s[0]?.endsAt ?? null)
    };
  if (s.length === 0) return {
    outcome: "spent",
    text: d_(v$().spentLine, d)
  };
  let m = s.flatMap(item => item.blocking).map(it).find(item => item !== null) ?? null,
    b = m !== null ? bn(m) : s.every(item => item.paused) ? `${Qe} \xB7 it is paused` : Ie(i) ? `${Qe} \xB7 try again in a minute` : s.every(item => item.useRequiresLimit) ? gr : `${Qe} \xB7 try again later`;
  return {
    outcome: "not_offered",
    text: d_(`${b} \xB7 {resets} left \xB7 use by {date}`, d)
  };
}
function dn(i) {
  let text_4 = sYe(i);
  if (text_4 !== void 0) return {
    outcome: "spent",
    text: text_4
  };
  if (rt(i)) return {
    outcome: "unavailable",
    text: PPe() ? d_(v$().unconfirmedLine, {}) : text
  };
  let d = Q(i);
  if (d !== void 0 && d !== null && cn(d, i)) return {
    outcome: "not_offered",
    text: text_5
  };
  return {
    outcome: "not_offered",
    text: mn(lr(i), i)
  };
}
function cn(i, s) {
  let rateLimitType_3 = s.rateLimitType;
  return rateLimitType_3 !== void 0 && !i.exhausted.some(item => item === rateLimitType_3) && i.grants.some(item => item.usableNow && !item.paused && se(item, rateLimitType_3));
}
function Ie(i) {
  let s = pGt(i.cooldownUntil);
  return s !== void 0 && s > D();
}
function lr(i) {
  let s = Q(i);
  if (s === void 0 || s === null || i.rateLimitType === void 0) return text_6;
  let rateLimitType_4 = i.rateLimitType,
    m = s.grants.filter(item => item.resetsLeft > 0);
  if (m.length === 0) return text_6;
  if (!m.some(item => se(item, rateLimitType_4))) return `${fr} ${Se(rateLimitType_4)}`;
  if (rateLimitType_4 === "seven_day" && m.every(item => item.givesBackWeekly && item.blocking.includes("seven_day"))) return `Your Fable reset can't be used right now \xB7 ${pn}`;
  let b = m.filter(item => se(item, rateLimitType_4)).flatMap(item => item.blocking).map(it).find(item => item !== null) ?? null;
  if (b !== null) return bn(b);
  if (m.every(item => item.paused)) return `${Ve} \xB7 it is paused`;
  if (Ie(s)) return `${Ve} \xB7 try again in a minute`;
  return Ve;
}
function mn(i, s) {
  let d = JC(s) ? JT(s.resetsAt) : void 0;
  return d !== void 0 ? `${i} \xB7 this limit resets ${d}` : `${i} \xB7 ${fn}`;
}
function aFo(i, s) {
  l("tengu_cedar_ember_confirmed", {
    confirmed: !1,
    entry: f(i),
    grant_id: _e(s.grant.id),
    kind: f(s.kind),
    limit_type: de(s.origin === "wall" ? s.rateLimitType : void 0),
    at_limit: s.origin === "wall" || s.atLimit,
    early_use: Ce(s),
    percent_used_max: Ze(s),
    config_version: gct()
  });
  let d = v$();
  return {
    outcome: "kept",
    text: d_(s.grant.useRequiresLimit ? d.keptLine : d.keptAnytimeLine, Xme(s))
  };
}
function lFo(i, s) {
  let [d, ...m] = s;
  if (d === void 0) return {
    outcome: "kept",
    text: text_6
  };
  let b = m.reduce((acc, item) => item.endsAtMs !== null && (acc.endsAtMs === null || item.endsAtMs < acc.endsAtMs) ? item : acc, d);
  return l("tengu_cedar_ember_confirmed", {
    confirmed: !1,
    chose_none: !0,
    entry: f(i),
    kinds_offered: ka(s.map(item => item.kind)),
    limit_type: de(b.origin === "wall" ? b.rateLimitType : void 0),
    at_limit: b.origin === "wall" || b.atLimit,
    config_version: gct()
  }), {
    outcome: "kept",
    text: d_(v$().keptChoiceLine, Xme(b))
  };
}
async function dFo(i, s, d) {
  let m = uK();
  if (m.claiming) return {
    outcome: "unavailable",
    text: text_2
  };
  m.claiming = !0;
  try {
    return d.origin === "wall" || nt(mi()) !== null ? await cr(i, s, d) : await mr(i, s, d);
  } catch (error) {
    a(F(error));
    let _ = v$();
    return {
      outcome: "unavailable",
      text: d_(d.origin === "wall" ? _.unconfirmedLine : _.unconfirmedAnytimeLine, {})
    };
  } finally {
    m.claiming = !1;
  }
}
async function cr(i, s, d) {
  let m = uK(),
    b = v$(),
    config_version_2 = gct(),
    h = d.grant.id;
  await on(i, s);
  let A = mi(),
    E = nt(A),
    C = oYe(A),
    k = C.find(item => item.kind === d.kind);
  if (l("tengu_cedar_ember_confirmed", {
    confirmed: !0,
    entry: f(i),
    grant_id: _e(h),
    kind: f(d.kind),
    limit_type: de(A.rateLimitType),
    still_offered: k !== void 0 && k.grant.id === h,
    at_limit: !0,
    early_use: !1,
    config_version: config_version_2
  }), E === null || C.length === 0) return dn(A);
  if (k === void 0) return {
    outcome: "not_offered",
    text: `${d_(br, {
      kind: z(d.kind)
    })} \xB7 you can use ${ln(C.map(item => item.kind))}`
  };
  if (k.grant.id !== h) return {
    outcome: "not_offered",
    text: text_7
  };
  let R = Date.now(),
    L = at(m, h),
    x = an(m, h),
    U = (await we(mFo(s, h, x), Gt)) ?? {
      result: "error",
      reason: null,
      resetsLeft: null,
      cleared: [],
      weeklyResetsAt: null
    };
  switch (l("tengu_cedar_ember_result", {
    result: f(U.result),
    reason: de(U.reason),
    entry: f(i),
    grant_id: _e(h),
    kind: f(k.kind),
    resets_left: U.resetsLeft ?? void 0,
    cleared: ka(U.cleared),
    limit_type: f(E.rateLimitType),
    at_limit: !0,
    early_use: !1,
    latency_ms: Date.now() - R,
    config_version: config_version_2
  }), U.result) {
    case "reset":
    case "not_limited":
    case "cooldown":
    case "already_used":
    case "ineligible":
      g("cedar_ember");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      c("cedar_ember", U.result);
      break;
  }
  let P = k.resetsLeft - k.grant.resetsLeft,
    Ne = U.resetsLeft ?? (U.result === "already_used" ? 0 : Math.max(0, k.grant.resetsLeft - 1)),
    J = {
      ...Xme(k),
      left: P + Ne,
      kindResets: le(k.kind, P + Ne),
      week: Ae(U.weeklyResetsAt ?? k.weeklyResetsAt)
    };
  switch (U.result) {
    case "reset":
      {
        K(m), gFo();
        let T = [E.rateLimitType, ...Te(U.cleared).filter(item => item !== E.rateLimitType)];
        if (!k.grant.clears.some(item => item === E.rateLimitType)) {
          pWe(T);
          let re = D();
          await we(pIt(s, void 0).catch(Ke => {
            a(F(Ke));
          }), tt);
          let M = wmr() > re,
            ie = mi(),
            be = M && JC(ie),
            We = be && ie.rateLimitType === E.rateLimitType;
          if (l("tengu_cedar_ember_give_back", {
            outcome: f(We ? "binds" : be ? "elsewhere" : M ? "lifted" : "unread"),
            entry: f(i),
            grant_id: _e(h),
            config_version: config_version_2
          }), We) return oe(E), V(ie, s, i), {
            outcome: "reset",
            text: d_(pr, {
              ...J,
              limit: Se(E.rateLimitType),
              date: JT(ie.resetsAt, !1, !0, !0)
            })
          };
          T = M ? [] : T;
        }
        let Y = Jt(m, E);
        Ht(m, E, T, Y);
        let Pe = d_(b.successLine, J);
        return {
          outcome: "reset",
          text: Y ? Pe : Dt(Pe)
        };
      }
    case "not_limited":
      {
        K(m);
        let T = Jt(m, E);
        Ht(m, E, [E.rateLimitType], T);
        let Y = L ? Ar : wr;
        return {
          outcome: "reset",
          text: T ? Y : Dt(Y)
        };
      }
    case "cooldown":
      {
        if (!L) K(m);
        return N(s), {
          outcome: "unavailable",
          text: L ? yn : Cr
        };
      }
    case "already_used":
      {
        if (L) return K(m), oe(E), N(s), {
          outcome: "spent",
          text: text_8
        };
        if (k.totalResetsLeft - k.grant.resetsLeft > 0) return oe(E), V(mi(), s, i), N(s), {
          outcome: "spent",
          text: d_(`${ke} \xB7 ${_n}`, J)
        };
        return Tr(E, h), N(s), {
          outcome: "spent",
          text: d_(ke, J)
        };
      }
    case "ineligible":
      {
        if (oe(E), V(mi(), s, i), L) return K(m), N(s), {
          outcome: "not_offered",
          text: text_9
        };
        return {
          outcome: "not_offered",
          text: mn(text_12, A)
        };
      }
    case "auth_error":
      return {
        outcome: "unavailable",
        text: text_10
      };
    case "rate_limited":
      return {
        outcome: "unavailable",
        text: d_(L ? b.unconfirmedLine : b.unavailableLine, J)
      };
    case "unavailable":
    case "error":
      {
        rn(m, h, x, E.accountEpoch);
        let T = Te(U.cleared);
        if (T.length > 0) {
          if (pWe(T), T.includes(E.rateLimitType)) N(s);
        }
        return oe(E), V(mi(), s, i), {
          outcome: "unavailable",
          text: d_(L ? b.stillUnconfirmedLine : b.unconfirmedLine, J)
        };
      }
  }
}
function Ze(i) {
  return i.origin === "anytime" ? i.earlyUse?.percentUsedMax ?? void 0 : void 0;
}
function Ce(i) {
  return i.origin === "anytime" && i.earlyUse !== null;
}
async function mr(i, s, d) {
  let m = uK(),
    b = v$(),
    config_version_3 = gct(),
    h = d.grant.id,
    A = fg();
  l("tengu_cedar_ember_confirmed", {
    confirmed: !0,
    entry: f(i),
    grant_id: _e(h),
    kind: f(d.kind),
    at_limit: d.atLimit,
    early_use: Ce(d),
    percent_used_max: Ze(d),
    config_version: config_version_3
  });
  let E = Date.now(),
    C = at(m, h),
    k = an(m, h),
    R = (await we(mFo(s, h, k), Gt)) ?? {
      result: "error",
      reason: null,
      resetsLeft: null,
      cleared: [],
      weeklyResetsAt: null
    };
  switch (l("tengu_cedar_ember_result", {
    result: f(R.result),
    reason: de(R.reason),
    entry: f(i),
    grant_id: _e(h),
    kind: f(d.kind),
    resets_left: R.resetsLeft ?? void 0,
    cleared: ka(R.cleared),
    at_limit: d.atLimit,
    early_use: Ce(d),
    percent_used_max: Ze(d),
    latency_ms: Date.now() - E,
    config_version: config_version_3
  }), R.result) {
    case "reset":
    case "not_limited":
    case "cooldown":
    case "already_used":
    case "ineligible":
      g("cedar_ember");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      c("cedar_ember", R.result);
      break;
  }
  let L = d.resetsLeft - d.grant.resetsLeft,
    x = R.resetsLeft ?? (R.result === "already_used" ? 0 : Math.max(0, d.grant.resetsLeft - 1)),
    U = {
      ...Xme(d),
      left: L + x,
      kindResets: le(d.kind, L + x),
      week: Ae(R.weeklyResetsAt ?? d.weeklyResetsAt)
    };
  switch (R.result) {
    case "reset":
      {
        K(m), gFo();
        let P = Te(R.cleared);
        if (P.length > 0) pWe(P);
        return N(s), {
          outcome: "reset",
          text: d_(b.successLine, U)
        };
      }
    case "not_limited":
      if (K(m), C) return N(s), {
        outcome: "not_offered",
        text: text_9
      };
      return {
        outcome: "not_offered",
        text: text_11
      };
    case "cooldown":
      if (!C) K(m);
      return N(s), {
        outcome: "unavailable",
        text: C ? yn : Lr
      };
    case "already_used":
      if (C) return K(m), N(s), {
        outcome: "spent",
        text: text_8
      };
      return {
        outcome: "spent",
        text: d_(d.totalResetsLeft - d.grant.resetsLeft > 0 ? `${ke} \xB7 ${_n}` : ke, U)
      };
    case "ineligible":
      if (C) return K(m), N(s), {
        outcome: "not_offered",
        text: text_9
      };
      return {
        outcome: "not_offered",
        text: text_12
      };
    case "auth_error":
      return {
        outcome: "unavailable",
        text: text_10
      };
    case "rate_limited":
      return {
        outcome: "unavailable",
        text: d_(C ? b.unconfirmedAnytimeLine : b.unavailableLine, U)
      };
    case "unavailable":
    case "error":
      {
        rn(m, h, k, A);
        let P = Te(R.cleared);
        if (P.length > 0) pWe(P);
        if (P.length > 0 || C) N(s);
        return {
          outcome: "unavailable",
          text: d_(C ? b.stillUnconfirmedLine : b.unconfirmedAnytimeLine, U)
        };
      }
  }
}
var text_6 = "No reset to use",
  fn = "you're not at a usage limit right now",
  Ve = "Your reset can't be used for this limit right now",
  fr = "None of your resets refill your",
  pn = "no Fable usage this week to give back",
  pr = "{Kind} used \xB7 you're still at your {limit} until {date} \xB7 {kindResets} left",
  br = "Your {kind} is no longer on offer \xB7 nothing was used",
  text_5 = `This limit may have lifted already \xB7 checking your limits now \xB7 run /${cW} again in a moment to use your reset anyway`,
  gr = `You have a reset saved for when you reach a usage limit \xB7 run /${cW} when you do`,
  Qe = "Your reset can't be used right now",
  text_3 = `Resets can't be used while you continue at lower priority \xB7 run /${cW} after that ends`,
  text_11 = "Your reset only works at a usage limit, and you're not at one now \xB7 nothing was used";
function bn(i) {
  return `Your reset doesn't refill your ${i}, so it can't be used until that resets`;
}
var text = "Couldn't check for a reset right now \xB7 try again in a moment",
  Rot = "Checking for a reset\u2026",
  ke = "That reset was already used \xB7 nothing changed just now \xB7 {kindResets} left",
  _n = `run /${cW} again to use one`,
  text_12 = "This reset isn't available any more \xB7 nothing was used",
  text_7 = `A different reset is on offer now \xB7 nothing was used \xB7 run /${cW} again to see it`,
  wr = "Your limit had already reset on its own \xB7 nothing was used",
  Ar = "Your limits are clear",
  Cr = "Another reset was just started on your account \xB7 checking your limits now \xB7 if you're still at the limit in a minute, try again",
  yn = "Your earlier reset may still be going through \xB7 checking your limits now \xB7 try again in a minute if they aren't refilled",
  Lr = "Another reset was just started on your account \xB7 this one wasn't used \xB7 try again in a minute",
  text_8 = "Your earlier reset went through after all \xB7 checking your limits now",
  text_9 = "This reset isn't available any more \xB7 your earlier try may have gone through \xB7 checking your limits now",
  kr = "send a message to continue",
  text_2 = "Your limits are already being reset \xB7 one moment",
  text_10 = "Couldn't reset your limits with this login \xB7 run /login, then try again";
function Dt(i) {
  return `${i} \xB7 ${kr}`;
}
function Jt(i, s) {
  let d = Mki() && i.continuableWallResetsAt === s.wallResetsAt;
  return i.continuableWallResetsAt = null, d;
}
function Te(i) {
  let s = [];
  for (let d of i) switch (d) {
    case "five_hour":
    case "seven_day":
    case "seven_day_overage_included":
    case "seven_day_opus":
    case "seven_day_sonnet":
      s.push(d);
      break;
    case "seven_day_cowork":
    case "seven_day_omelette":
    case "seven_day_oauth_apps":
      break;
  }
  return s;
}
function Ht(i, s, d, m) {
  let b = [() => XG("cedar_ember"), () => {
    VW("reset");
  }, () => vr(d), () => {
    oe(s), i.wallRecordKey = null, i.shownOfferKey = null;
  }, () => {
    if (m) rCt();
  }, () => i.events.emit({
    type: "reset"
  })];
  for (let _ of b) try {
    _();
  } catch (error) {
    a(F(error));
  }
}
function vr(i) {
  if (i.length > 0) pWe(i);
  let s = mi();
  if (s.status !== "rejected" || s.rateLimitType === void 0 || !i.includes(s.rateLimitType)) return;
  k9e({
    ...s,
    status: "allowed",
    rateLimitType: void 0,
    resetsAt: void 0
  });
}
function N(i) {
  if (YG()) {
    iat();
    return;
  }
  pIt(i, void 0).catch(s => {
    a(F(s));
  });
}
function oe(i) {
  let s = L7();
  if (s.phase !== "idle" && s.wall.wallResetsAt === i.wallResetsAt && s.wall.rateLimitType === i.rateLimitType) mGt({
    phase: "idle"
  });
}
function Tr(i, s) {
  let d = L7();
  if (d.phase !== "answered" || d.wall.wallResetsAt !== i.wallResetsAt || d.wall.rateLimitType !== i.rateLimitType || d.status === null) return;
  mGt({
    ...d,
    answeredAtMs: D(),
    status: {
      ...d.status,
      nextGrantId: d.status.nextGrantId === s ? null : d.status.nextGrantId,
      grants: d.status.grants.map(item => item.id === s ? {
        ...item,
        resetsLeft: 0,
        usableNow: !1
      } : item)
    }
  });
}
function Rr(i) {
  if (i.sessionSwitchSubscribed) return;
  i.sessionSwitchSubscribed = !0, rf((s, d) => {
    if ($Be(d)) i.continuableWallResetsAt = null;
  });
}
var program = "juniper_tide",
  timeout = 25000,
  Ir = p(() => u({
    surface: B(["claude_ai", "claude_code_cli", "unknown"]).catch("unknown"),
    tier: B(["claude_pro", "claude_max_5x", "claude_max_20x", "unknown"]).catch("unknown"),
    tenure_bucket: B(["under_14", "14-29", "30-89", "90-364", "365+", "unknown"]).catch("unknown"),
    billing_path: B(["stripe", "apple", "google_play", "other", "unknown"]).catch("unknown"),
    billing_period: B(["monthly", "annual", "unknown"]).catch("unknown"),
    extra_usage_state: B(["not_configured", "disabled", "enabled", "unknown"]).catch("unknown")
  })),
  Or = p(() => u({
    eligible: I(),
    ineligible_reason: B(["tier", "tenure", "surface", "mobile", "cli_version", "not_at_wall", "weekly_limit", "no_weekly_limit", "other_experiment", "extra_usage", "unavailable", "unknown"]).catch("unknown").nullable().optional(),
    in_experiment: I().optional(),
    arm: B(["control", "reset"]).nullable().optional().catch(null),
    available: I().optional(),
    next_available_at: o().nullable().optional().catch(null),
    weekly_resets_at: o().nullable().optional().catch(null),
    event_props: Ir().nullable().optional().catch(null)
  })),
  Ur = p(() => u({
    result: B(["reset", "already_used", "not_limited", "ineligible", "unavailable"]).catch("unavailable"),
    next_available_at: o().nullable().optional().catch(null),
    weekly_resets_at: o().nullable().optional().catch(null)
  }));
function Mr(i) {
  if (i === void 0 || i === null) return null;
  let s = Or().safeParse(i);
  if (!s.success) return t(`[juniper-tide] ignoring a malformed status block: ${s.error.message}`), null;
  let d = s.data,
    event_props = d.event_props;
  return {
    eligible: d.eligible,
    ineligibleReason: d.ineligible_reason ?? null,
    inExperiment: d.in_experiment ?? !1,
    arm: d.arm ?? null,
    available: d.available ?? !1,
    nextAvailableAt: d.next_available_at ?? null,
    weeklyResetsAt: d.weekly_resets_at ?? null,
    eventProps: event_props ? {
      surface: event_props.surface,
      tier: event_props.tier,
      tenureBucket: event_props.tenure_bucket,
      billingPath: event_props.billing_path,
      billingPeriod: event_props.billing_period,
      extraUsageState: event_props.extra_usage_state
    } : null
  };
}
async function Cn(i) {
  try {
    if (!fp()) return {
      kind: "no_profile_scope"
    };
    let s = await aL(i, {
      read: "at_wall"
    });
    if (!S9e(s)) return t("[juniper-tide] status fetch returned a fieldless or non-object body (in-band error)", {
      level: "warn"
    }), {
      kind: "failed"
    };
    return {
      kind: "answered",
      status: Mr(s?.juniper_tide)
    };
  } catch (error) {
    if (t(`[juniper-tide] status fetch failed: ${F(error).message}`, {
      level: "warn"
    }), Q9t(error)) return {
      kind: "answered",
      status: null
    };
    return {
      kind: "failed"
    };
  }
}
async function Ln(credentials_2) {
  let s = hn()?.organizationUuid;
  if (!s) return t("[juniper-tide] no OAuth organization; cannot claim"), {
    result: "auth_error",
    nextAvailableAt: null
  };
  try {
    let d = await vE(() => jt.post(`/api/organizations/${s}/reset_rate_limits`, {
      program: program
    }, {
      auth: "async",
      headers: {
        "Content-Type": "application/json"
      },
      timeout: timeout,
      refreshOAuth: !0,
      credentials: credentials_2
    }), {
      credentials: credentials_2
    });
    if (!d.ok) return t(`[juniper-tide] claim not sent: ${d.reason === "no-auth" ? d.detail : d.reason}`, {
      level: "warn"
    }), {
      result: d.reason === "no-auth" ? "auth_error" : "error",
      nextAvailableAt: null
    };
    let m = Ur().safeParse(d.data);
    if (!m.success) return t(`[juniper-tide] unreadable claim response: ${m.error.message}`, {
      level: "error"
    }), a(Error("[juniper-tide] unreadable claim response")), {
      result: "error",
      nextAvailableAt: null
    };
    return {
      result: m.data.result,
      nextAvailableAt: m.data.next_available_at ?? null
    };
  } catch (error) {
    if (Im(error)) t(`[juniper-tide] claim failed: ${F(error).message}`, {
      level: "warn"
    });else a(F(error));
    if (rc(error)) switch (error.response?.status) {
      case 429:
        return {
          result: "rate_limited",
          nextAvailableAt: null
        };
      case 401:
      case 403:
        return {
          result: "auth_error",
          nextAvailableAt: null
        };
      default:
        break;
    }
    return {
      result: "error",
      nextAvailableAt: null
    };
  }
}
function Nr() {
  return {
    state: {
      phase: "idle"
    },
    shownWallResetsAt: null,
    pendingAsk: null,
    claiming: !1,
    continuableWallResetsAt: null,
    unsettledClaimWallResetsAt: null,
    sessionSwitchSubscribed: !1,
    changed: De(),
    events: De()
  };
}
var Pr = new W(Nr);
function X() {
  return Pr.of(H().host);
}
function Sne() {
  return X().state;
}
function ne(i) {
  let s = X();
  s.state = i, s.changed.emit();
}
function Jme(i) {
  return X().changed.subscribe(i);
}
function cFo(i) {
  return X().events.subscribe(i);
}
var Fr = 3,
  Wr = 12000,
  Kr = 35000;
function ut(i, s) {
  return s.resetsAt === i.wallResetsAt && i.accountEpoch === fg();
}
function Ue(i) {
  let s = Sne();
  return s.phase === "answered" && ut(s, i) ? s.status : void 0;
}
function st(i) {
  let s = Sne();
  return s.phase === "failed" && ut(s, i);
}
function wne(i, s = Date.now()) {
  let d = Ue(i);
  return wit(i) && d !== void 0 && d !== null && d.arm === "reset" && d.available && i.resetsAt !== void 0 && i.resetsAt * 1000 > s && !RL() && _Ee();
}
function aYe(i, s = Date.now()) {
  let d = Ue(i);
  if (!wit(i) || d === void 0 || d === null || d.arm !== "reset" || d.available || d.nextAvailableAt === null || i.resetsAt === void 0 || i.resetsAt * 1000 <= s || !_Ee()) return;
  return gno(bEe().spentLine, ot(d.nextAvailableAt));
}
function ot(i) {
  if (i === null) return;
  let s = Date.parse(i);
  return Number.isFinite(s) ? JT(Math.floor(s / 1000), !1, !0, !0) : void 0;
}
function U5s(i, s) {
  if (!_Ee() || !wit(i)) return;
  let d = X();
  Xr(d), d.continuableWallResetsAt = i.resetsAt ?? null, Oe(i, s, "wall");
}
function Oe(i, s, d) {
  if (!_Ee() || !wit(i)) return Promise.resolve();
  let m = i.resetsAt;
  if (m === void 0) return Promise.resolve();
  let b = X(),
    accountEpoch = fg(),
    state_2 = b.state,
    failures_3 = 0;
  if (state_2.phase !== "idle" && ut(state_2, i)) switch (state_2.phase) {
    case "answered":
      return Promise.resolve();
    case "asking":
      return b.pendingAsk ?? Promise.resolve();
    case "failed":
      if (d === "wall" && state_2.failures >= Fr) return Promise.resolve();
      failures_3 = state_2.failures;
  }
  ne({
    phase: "asking",
    wallResetsAt: m,
    accountEpoch: accountEpoch
  });
  let autoArmed_2 = YG(),
    C = we(Cn(s), Wr).then(k => {
      kn({
        wallResetsAt: m,
        accountEpoch: accountEpoch,
        failures: failures_3,
        result: k ?? {
          kind: "failed"
        },
        autoArmed: autoArmed_2
      });
    }).catch(k => {
      a(F(k));
      try {
        kn({
          wallResetsAt: m,
          accountEpoch: accountEpoch,
          failures: failures_3,
          result: {
            kind: "failed"
          },
          autoArmed: autoArmed_2
        });
      } catch (error) {
        a(F(error));
      }
    }).finally(() => {
      if (b.pendingAsk === C) b.pendingAsk = null;
    });
  return b.pendingAsk = C, C;
}
function kn({
  wallResetsAt: wallResetsAt,
  accountEpoch: accountEpoch_2,
  failures: failures_4,
  result: result_2,
  autoArmed: b
}) {
  let _ = Sne();
  if (_.phase !== "asking" || _.wallResetsAt !== wallResetsAt || _.accountEpoch !== accountEpoch_2) return;
  let status_3 = result_2.kind === "answered" ? result_2.status : null;
  if (result_2.kind === "failed") ne({
    phase: "failed",
    wallResetsAt: wallResetsAt,
    accountEpoch: accountEpoch_2,
    failures: failures_4 + 1
  });else ne({
    phase: "answered",
    wallResetsAt: wallResetsAt,
    accountEpoch: accountEpoch_2,
    status: status_3
  });
  if (l("tengu_juniper_tide_asked", {
    outcome: f(result_2.kind === "answered" ? status_3 === null ? "absent" : "block" : result_2.kind),
    attempt: failures_4 + 1,
    eligible: status_3?.eligible ?? !1,
    ineligible_reason: de(status_3?.ineligibleReason) ?? void 0,
    config_version: dfr()
  }), status_3 === null || !status_3.eligible) return;
  l("tengu_juniper_tide_wall", {
    in_experiment: status_3.inExperiment,
    arm: de(status_3.arm) ?? void 0,
    available: status_3.available,
    tier: f(COe()),
    auto_armed: b,
    low_priority_active: RL(),
    config_version: dfr(),
    surface: de(status_3.eventProps?.surface) ?? void 0,
    server_tier: de(status_3.eventProps?.tier) ?? void 0,
    tenure_bucket: de(status_3.eventProps?.tenureBucket) ?? void 0,
    billing_path: de(status_3.eventProps?.billingPath) ?? void 0,
    billing_period: de(status_3.eventProps?.billingPeriod) ?? void 0,
    extra_usage_state: de(status_3.eventProps?.extraUsageState) ?? void 0
  });
}
function tmn(i, s) {
  let d = i.resetsAt ?? null,
    m = X();
  if (d === null || m.shownWallResetsAt === d) return;
  m.shownWallResetsAt = d;
  let b = Ue(i);
  l("tengu_juniper_tide_shown", {
    arm: de(b?.arm) ?? void 0,
    surface: f(s),
    config_version: dfr()
  });
}
function uFo(i, s) {
  if (st(i)) Oe(i, s, "dialog");
}
async function yvt(i, s) {
  try {
    return await $r(i, s);
  } catch (error) {
    return a(F(error)), {
      outcome: "unavailable",
      text: bEe().unavailableLine
    };
  }
}
async function $r(i, s) {
  let d = X(),
    m = bEe();
  if (Ue(mi()) === void 0) {
    let C = d.pendingAsk !== null;
    if (await Oe(mi(), s, i), C && st(mi())) await Oe(mi(), s, i);
  }
  let b = mi();
  if (!wne(b) || b.resetsAt === void 0) {
    let text_13 = aYe(b);
    if (text_13 !== void 0) return {
      outcome: "spent",
      text: text_13
    };
    return st(b) ? {
      outcome: "unavailable",
      text: m.unavailableLine
    } : {
      outcome: "not_offered",
      text: text_14
    };
  }
  if (d.claiming) return {
    outcome: "unavailable",
    text: text_15
  };
  let resetsAt_2 = b.resetsAt,
    config_version_4 = dfr();
  l("tengu_juniper_tide_selected", {
    entry: f(i),
    auto_armed: YG(),
    config_version: config_version_4
  });
  let A = Date.now(),
    E;
  d.claiming = !0;
  try {
    E = (await we(Ln(s), Kr)) ?? {
      result: "error",
      nextAvailableAt: null
    };
  } finally {
    d.claiming = !1;
  }
  switch (l("tengu_juniper_tide_result", {
    result: f(E.result),
    entry: f(i),
    latency_ms: Date.now() - A,
    config_version: config_version_4
  }), E.result) {
    case "reset":
    case "not_limited":
    case "already_used":
    case "ineligible":
      g("juniper_tide");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      c("juniper_tide", E.result);
      break;
  }
  switch (E.result) {
    case "reset":
    case "not_limited":
      {
        d.unsettledClaimWallResetsAt = null;
        let C = Dki() && d.continuableWallResetsAt === resetsAt_2;
        d.continuableWallResetsAt = null, Hr(d, resetsAt_2, C);
        let k = gno(m.successLine, E.result === "reset" ? ot(E.nextAvailableAt) : void 0);
        return {
          outcome: "reset",
          text: C ? k : `${k} \xB7 send a message to continue`
        };
      }
    case "already_used":
      {
        if (zr(resetsAt_2, E.nextAvailableAt), d.unsettledClaimWallResetsAt === resetsAt_2) d.unsettledClaimWallResetsAt = null, jr(s);
        return {
          outcome: "spent",
          text: gno(m.spentLine, ot(E.nextAvailableAt))
        };
      }
    case "ineligible":
      return Br(resetsAt_2), {
        outcome: "not_offered",
        text: text_14
      };
    case "auth_error":
      return {
        outcome: "unavailable",
        text: text_16
      };
    case "unavailable":
    case "rate_limited":
    case "error":
      if (E.result === "error") d.unsettledClaimWallResetsAt = resetsAt_2;
      return {
        outcome: "unavailable",
        text: m.unavailableLine
      };
  }
}
var text_14 = "A 5-hour limit reset isn't available right now.",
  text_15 = "Your 5-hour limit is already being reset \xB7 one moment",
  text_16 = "Couldn't reset your 5-hour limit with this login \xB7 run /login, then try again";
function Hr(i, s, d) {
  let m = [() => XG("juniper_tide"), () => {
    VW("reset");
  }, () => Gr(s), () => {
    let b = Sne();
    if (b.phase !== "idle" && b.wallResetsAt === s) ne({
      phase: "idle"
    });
  }, () => {
    if (d) rCt();
  }, () => i.events.emit({
    type: "reset"
  })];
  for (let b of m) try {
    b();
  } catch (error) {
    a(F(error));
  }
}
function Gr(i) {
  pWe(["five_hour"]);
  let s = mi();
  if (s.status !== "rejected" || s.rateLimitType !== "five_hour" || s.resetsAt !== i) return;
  k9e({
    ...s,
    status: "allowed",
    rateLimitType: void 0,
    resetsAt: void 0
  });
}
function jr(i) {
  if (YG()) {
    iat();
    return;
  }
  pIt(i, void 0).catch(s => {
    a(F(s));
  });
}
function zr(i, s) {
  let d = Sne();
  if (d.phase !== "answered" || d.wallResetsAt !== i || d.status === null) return;
  ne({
    ...d,
    status: {
      ...d.status,
      available: !1,
      nextAvailableAt: s ?? d.status.nextAvailableAt
    }
  });
}
function Br(i) {
  let s = Sne();
  if (s.phase !== "answered" || s.wallResetsAt !== i || s.status === null) return;
  ne({
    ...s,
    status: {
      ...s.status,
      eligible: !1,
      available: !1
    }
  });
}
function Xr(i) {
  if (i.sessionSwitchSubscribed) return;
  i.sessionSwitchSubscribed = !0, rf((s, d) => {
    if ($Be(d)) i.continuableWallResetsAt = null;
  });
}
var g3n = "session running",
  nmn = "session waiting for a prompt",
  state_4 = "session waiting",
  fe = " \xB7 ",
  qr = /^[0-9a-f]{8}$/,
  Tn = 20;
function fFo(i) {
  let s = i.split(_T).map(item => item.trim()).filter(Boolean);
  if (s.length === 0) return;
  let [d, ...m] = s;
  return m.length === 0 ? d : `${d} ${_T} ${m.join(fe)}`;
}
function y3n(i) {
  if (!i.startsWith(g3n) && !i.startsWith(nmn)) return null;
  if (i.includes(`
`)) return null;
  let s = i.split(fe),
    state_3 = s[0];
  if (state_3 !== g3n && state_3 !== nmn) return null;
  let m = s.findLastIndex(C => qr.test(C)),
    id = m === -1 ? void 0 : s[m],
    _ = m === -1 ? s.length : m,
    h = s.slice(1, _),
    name = h.length > 0 ? h.join(fe) : void 0,
    chips = m === -1 ? [] : s.slice(m + 1);
  return {
    state: state_3,
    name: name,
    id: id,
    chips: chips
  };
}
function pFo(i, s, d = !0) {
  let m = _ => ce(zjr(_)),
    b = {
      ...i,
      chips: [...i.chips]
    };
  if (m(b) <= s) return b;
  if (b.state === nmn) {
    if (b = {
      ...b,
      state: state_4
    }, m(b) <= s) return b;
  }
  if (b.id !== void 0 && b.name !== void 0 && d) {
    if (b = {
      ...b,
      id: void 0
    }, m(b) <= s) return b;
  }
  if (b.name !== void 0) {
    let _ = m({
        ...b,
        name: void 0
      }),
      h = s - _ - ce(fe),
      A = ce(b.name),
      E = A > Tn ? Math.max(h, Tn) : h;
    if (E >= 1 && E < A) b = {
      ...b,
      name: ct(b.name, E)
    };
  }
  return b;
}
function zjr(i) {
  return [i.state, ...(i.name ? [i.name] : []), ...(i.id ? [i.id] : []), ...i.chips].join(fe);
}
function ei(i) {
  let {
    index: index
  } = i;
  return index !== -1;
}
var Rn = [Dbs, ppo, Mbs].map(i => ({
  url: i,
  marker: `learn more: ${i}`
}));
function APe(i) {
  let _ = S(33),
    {
      children: children,
      color: color,
      bold: bold
    } = i,
    b = qot(),
    h,
    A,
    color_2,
    bold_2,
    k,
    R;
  if (_[0] !== bold || _[1] !== children || _[2] !== color || _[3] !== b) {
    R = Pn;
    Ne: {
      let L;
      if (_[10] !== children) L = x => {
        let {
          url: url,
          marker: marker
        } = x;
        return {
          url: url,
          marker: marker,
          index: children.indexOf(marker)
        };
      }, _[10] = children, _[11] = L;else L = _[11];
      A = Rn.map(L).find(ei);
      if (!b || A === void 0) {
        let x;
        if (_[12] !== bold || _[13] !== children || _[14] !== color) x = e(LM, {
          color: color,
          bold: bold,
          children: children
        }), _[12] = bold, _[13] = children, _[14] = color, _[15] = x;else x = _[15];
        R = x;
        break Ne;
      }
      h = n;
      color_2 = color;
      bold_2 = bold;
      k = children.slice(0, A.index);
    }
    _[0] = bold, _[1] = children, _[2] = color, _[3] = b, _[4] = h, _[5] = A, _[6] = color_2, _[7] = bold_2, _[8] = k, _[9] = R;
  } else h = _[4], A = _[5], color_2 = _[6], bold_2 = _[7], k = _[8], R = _[9];
  if (R !== Pn) return R;
  let children_2;
  if (_[16] !== bold || _[17] !== color) children_2 = e(n, {
    color: color,
    bold: bold,
    underline: !0,
    children: "learn more"
  }), _[16] = bold, _[17] = color, _[18] = children_2;else children_2 = _[18];
  let x;
  if (_[19] !== A.url || _[20] !== children_2) x = e(sn, {
    url: A.url,
    children: children_2
  }), _[19] = A.url, _[20] = children_2, _[21] = x;else x = _[21];
  let J;
  if (_[22] !== children || _[23] !== A.index || _[24] !== A.marker.length) J = children.slice(A.index + A.marker.length), _[22] = children, _[23] = A.index, _[24] = A.marker.length, _[25] = J;else J = _[25];
  let T;
  if (_[26] !== h || _[27] !== color_2 || _[28] !== bold_2 || _[29] !== k || _[30] !== x || _[31] !== J) T = r(h, {
    color: color_2,
    bold: bold_2,
    children: [k, x, J]
  }), _[26] = h, _[27] = color_2, _[28] = bold_2, _[29] = k, _[30] = x, _[31] = J, _[32] = T;else T = _[32];
  return T;
}
export { APe, Jpn, QO, m3n, L5s, nFo, Qpn, rFo, IG, Bjr, jjr, xPe, oFo, sFo, rYe, N5s, oYe, uGt, iFo, PPe, Zpn, sYe, F5s, Xme, H5s, $5s, emn, h3n, fGt, Wjr, aFo, lFo, dFo, text as iYe, Rot, Sne, Jme, cFo, wne, aYe, U5s, tmn, uFo, yvt, g3n, nmn, fFo, y3n, pFo, zjr };