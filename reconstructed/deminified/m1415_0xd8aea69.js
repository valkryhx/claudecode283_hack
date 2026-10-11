// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, j, Qd } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c, ue, Oa } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { te, Zd } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { sIe } from "B:/~BUN/root/chunk-q87kdcms.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { It, d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Dh, pce, Ap, An, nr, vy, Dt, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { vA } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Jk } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ie, ot, ud } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { fu } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { n, bt, Vs } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { yP, gIe, iS } from "B:/~BUN/root/chunk-1223v177.js";
import { WL, GO, xCr, PCr, nBn, xit, nI } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { cRt, Ant, ma, MA, P8, VGe, wfe, xnt, $t, UW, s3, $Z, iqe, hho, LM, cm, pme, gen, yho, UZ, sFn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Zr } from "B:/~BUN/root/chunk-cpg4rjtx.js";
import { SG } from "B:/~BUN/root/chunk-zw2hnzqr.js";
import { ese, bG, eet, Tdr, zOe, _M, Rdr, Pdr, Jze } from "B:/~BUN/root/chunk-cj9k3aj6.js";
import { zPe, nZn } from "B:/~BUN/root/chunk-n26zdpf3.js";
import { aM } from "B:/~BUN/root/chunk-sefpqcph.js";
import { Nj } from "B:/~BUN/root/chunk-sxjerhqq.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { k7e, r7, qKt, E7e, DWe } from "B:/~BUN/root/chunk-kjec4t4t.js";
import { awe } from "B:/~BUN/root/chunk-yxnd4g87.js";
import { se, Pe, R, X, g, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { o, E, M, ae, C, u, fe, z } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { _e } from "B:/~BUN/root/chunk-batgyebn.js";
import { hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
function gn(a) {
  let {
    index: index
  } = a;
  return index !== -1;
}
var rt = [PCr, nBn, xCr].map(a => ({
  url: a,
  marker: `learn more: ${a}`
}));
function Wre(a) {
  let y = w(33),
    {
      children: children,
      color: color,
      bold: bold
    } = a,
    b = sIe(),
    h,
    A,
    color_2,
    bold_2,
    k,
    S;
  if (y[0] !== bold || y[1] !== children || y[2] !== color || y[3] !== b) {
    S = hn;
    D: {
      let L;
      if (y[10] !== children) L = P => {
        let {
          url: url,
          marker: marker
        } = P;
        return {
          url: url,
          marker: marker,
          index: children.indexOf(marker)
        };
      }, y[10] = children, y[11] = L;else L = y[11];
      A = rt.map(L).find(gn);
      if (!b || A === void 0) {
        let P;
        if (y[12] !== bold || y[13] !== children || y[14] !== color) P = e(Nj, {
          color: color,
          bold: bold,
          children: children
        }), y[12] = bold, y[13] = children, y[14] = color, y[15] = P;else P = y[15];
        S = P;
        break D;
      }
      h = n;
      color_2 = color;
      bold_2 = bold;
      k = children.slice(0, A.index);
    }
    y[0] = bold, y[1] = children, y[2] = color, y[3] = b, y[4] = h, y[5] = A, y[6] = color_2, y[7] = bold_2, y[8] = k, y[9] = S;
  } else h = y[4], A = y[5], color_2 = y[6], bold_2 = y[7], k = y[8], S = y[9];
  if (S !== hn) return S;
  let children_2;
  if (y[16] !== bold || y[17] !== color) children_2 = e(n, {
    color: color,
    bold: bold,
    underline: !0,
    children: "learn more"
  }), y[16] = bold, y[17] = color, y[18] = children_2;else children_2 = y[18];
  let P;
  if (y[19] !== A.url || y[20] !== children_2) P = e(bt, {
    url: A.url,
    children: children_2
  }), y[19] = A.url, y[20] = children_2, y[21] = P;else P = y[21];
  let H;
  if (y[22] !== children || y[23] !== A.index || y[24] !== A.marker.length) H = children.slice(A.index + A.marker.length), y[22] = children, y[23] = A.index, y[24] = A.marker.length, y[25] = H;else H = y[25];
  let be;
  if (y[26] !== h || y[27] !== color_2 || y[28] !== bold_2 || y[29] !== k || y[30] !== P || y[31] !== H) be = r(h, {
    color: color_2,
    bold: bold_2,
    children: [k, P, H]
  }), y[26] = h, y[27] = color_2, y[28] = bold_2, y[29] = k, y[30] = P, y[31] = H, y[32] = be;else be = y[32];
  return be;
}
var wJe = "tengu_pewter_summit";
N();
function $C() {
  let [a, s] = g({
    ...ma()
  });
  return R(() => P8(l => {
    s({
      ...l
    });
  }), []), a;
}
function myt(a) {
  return UW.isEnabled() && (a === void 0 || a.includes("overage"));
}
function G2t(a) {
  let s = nr(),
    l = s === "team" || s === "enterprise";
  return myt(a) && !l && !It() && pce(Dh()) === null;
}
N();
var yn = 30000;
function q7n(a, s, l) {
  let m = !1,
    b = () => {},
    y = () => {
      if (m) return;
      let h = a - Date.now();
      if (h <= 0) {
        l();
        return;
      }
      b = s(y, Math.min(h, yn));
    };
  return y(), () => {
    m = !0, b();
  };
}
function rU(a) {
  let l = Pe(iS)?.setTimeout ?? yP,
    m = X(() => {
      if (a === null) return gIe;
      return b => q7n(a, l, b);
    }, [a, l]);
  return At(m, () => a !== null && Date.now() >= a);
}
N();
N();
function cE(key, priority, l, m, b) {
  let {
    addNotification: addNotification,
    removeNotification: removeNotification
  } = Zr();
  R(() => {
    if (l === null) {
      removeNotification(key);
      return;
    }
    addNotification({
      key: key,
      kind: b?.kind ?? "warning",
      color: b?.color,
      wrap: b?.wrap,
      priority: priority,
      pinned: !0,
      jsx: m(l)
    });
  }, [l, key, priority, m, b, addNotification, removeNotification]);
}
var at = 30000,
  st = "quota-auto-resume",
  lt = "quota-auto-resume-credits",
  key_2 = "quota-auto-resume-cap",
  own = "quota-auto-resume-cancelled",
  swn = "Automatic continue cancelled \xB7 /rate-limit-options to re-arm",
  iwn = "/usage-credits to continue now",
  he = {
    kind: "event",
    color: "text"
  };
function HK() {
  return At(Tdr, ese, ese);
}
function Ct(a, s) {
  let l = a.phase === "armed" ? a.resetsAtSeconds : 0,
    m = l * 1000 > s ? ud(l) : void 0;
  return m ? `at ${m}` : "shortly";
}
function ut(a, s) {
  return "Usage limit reached \xB7 continuing automatically " + Ct(a, s) + " \xB7 esc or type to cancel";
}
function dt(a, s) {
  return "Usage limit reached again after you continued \xB7 continuing automatically " + Ct(a, s) + " \xB7 the automatic-continue setting no longer ends this wait (esc or /rate-limit-options still can)";
}
function V2t(a, s) {
  if (a.phase === "stale") return "Your usage limit has reset \xB7 press enter to continue";
  if (a.phase !== "armed") return "";
  if (s) return "Usage limit reached \xB7 continuing shortly \xB7 esc to cancel";
  let l = ud(a.resetsAtSeconds);
  return l ? "Usage limit reached \xB7 continuing automatically at " + l + " \xB7 esc to cancel" : "Usage limit reached \xB7 continuing automatically when it resets \xB7 esc to cancel";
}
function q2t(a, s, l) {
  return a.phase === "armed" && !s && l;
}
function ct() {
  return G2t(ma().upgradePaths);
}
function mt() {
  return e(Tt, {});
}
function pt() {
  return iwn;
}
function X1e(a) {
  return rU(a.phase === "armed" ? Math.min(a.fireAtMs, a.resetsAtSeconds * 1000) : null);
}
function Tt() {
  let l = w(5),
    a = HK();
  const s = X1e(a);
  let m;
  if (l[0] !== a || l[1] !== s) m = V2t(a, s), l[0] = a, l[1] = s, l[2] = m;else m = l[2];
  let b = m,
    [children_3, h] = g(b);
  if (b !== "" && b !== children_3) h(b);
  let A;
  if (l[3] !== children_3) A = e(n, {
    children: children_3
  }), l[3] = children_3, l[4] = A;else A = l[4];
  return A;
}
function awn(a) {
  let L = w(23),
    {
      isLoading: isLoading,
      transcript: transcript
    } = a,
    {
      addNotification: addNotification_2,
      removeNotification: removeNotification_2
    } = Zr(),
    {
      storageV5: storageV5,
      credentials: credentials
    } = ke(),
    A = vA(),
    T = HK(),
    v = At(P8, ct),
    k = T.phase === "armed" || T.phase === "stale",
    S = X1e(T);
  cE(st, "high", k || null, mt, he);
  let P;
  if (L[0] !== T || L[1] !== v || L[2] !== S) P = q2t(T, S, v) || null, L[0] = T, L[1] = v, L[2] = S, L[3] = P;else P = L[3];
  cE(lt, "medium", P, pt, he);
  let B, I;
  if (L[4] !== storageV5) B = () => {
    Pdr(storageV5);
  }, I = [storageV5], L[4] = storageV5, L[5] = B, L[6] = I;else B = L[5], I = L[6];
  R(B, I);
  let D;
  if (L[7] !== transcript) D = (H, be) => transcript.replace(un => [...un, $t(H, be)]), L[7] = transcript, L[8] = D;else D = L[8];
  let U = D,
    dn;
  if (L[9] !== credentials || L[10] !== storageV5 || L[11] !== A) dn = (message, notificationType) => void aM({
    message: message,
    notificationType: notificationType
  }, A, {
    storageV5: storageV5,
    credentials: credentials
  }), L[9] = credentials, L[10] = storageV5, L[11] = A, L[12] = dn;else dn = L[12];
  let J = dn,
    cn,
    mn;
  if (L[13] !== addNotification_2 || L[14] !== U || L[15] !== J || L[16] !== removeNotification_2) cn = () => eet(Hr => {
    switch (Hr) {
      case "armed":
      case "rearmed":
        {
          removeNotification_2(key_2), removeNotification_2(own);
          return;
        }
      case "taken-over":
        {
          U(dt(ese(), Date.now()), "notice");
          return;
        }
      case "cancelled":
        {
          U(swn, "notice");
          return;
        }
      case "auto-armed":
        {
          U(ut(ese(), Date.now()), "notice");
          return;
        }
      case "fired-now":
        {
          U("Usage limit available again \xB7 continuing now", "notice"), J("Usage limit available \u2014 Claude is continuing your task", "quota_auto_resume_fired");
          return;
        }
      case "stale":
        {
          U("Usage limit has reset \xB7 press enter to continue", "notice"), J("Usage limit reset \u2014 press enter to continue", "quota_auto_resume_stale");
          return;
        }
      case "disabled":
        {
          U(`Automatic continue was turned off \xB7 this task will not resume on its own${awe() ? " (/rate-limit-options to wait anyway)" : ""}`, "warning"), J("Automatic continue was turned off \u2014 the task will not resume on its own", "quota_auto_resume_disabled");
          return;
        }
      case "horizon-exceeded":
        {
          U("Automatic continue stopped \xB7 the usage limit now resets more than 24 hours out, so this task will not resume on its own (/rate-limit-options to wait anyway)", "warning"), J("Automatic continue stopped \u2014 the usage limit now resets more than 24 hours out; the task will not resume on its own", "quota_auto_resume_disabled");
          return;
        }
      case "continuation-dropped":
        {
          U("Automatic continue did not run \xB7 the continuation was blocked before it reached the model, so this task did not resume on its own \xB7 send a prompt to continue", "warning"), J("Automatic continue did not run \u2014 the continuation was blocked before it reached the model; send a prompt to continue", "quota_auto_resume_disabled");
          return;
        }
      case "cap-exhausted":
        {
          U("Automatic continue stopped after repeated usage-limit hits \xB7 this task will not resume on its own (/rate-limit-options to try again)", "warning"), J("Automatic continue stopped after repeated usage-limit hits \u2014 the task will not resume on its own", "quota_auto_resume_disabled"), addNotification_2({
            key: key_2,
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
  }), mn = [addNotification_2, removeNotification_2, U, J], L[13] = addNotification_2, L[14] = U, L[15] = J, L[16] = removeNotification_2, L[17] = cn, L[18] = mn;else cn = L[17], mn = L[18];
  R(cn, mn);
  let pn;
  if (L[19] !== U || L[20] !== isLoading || L[21] !== J) pn = () => {
    if (Rdr(Date.now(), isLoading) === "fired") U("Usage limit reset \xB7 continuing automatically", "notice"), J("Usage limit reset \u2014 Claude is continuing your task", "quota_auto_resume_fired");
  }, L[19] = U, L[20] = isLoading, L[21] = J, L[22] = pn;else pn = L[22];
  Vs(pn, T.phase === "armed" ? at : null);
}
function In() {
  return {
    state: {
      phase: "idle"
    },
    shownOfferKey: null,
    wallRecordKey: null,
    pendingAsk: null,
    claiming: !1,
    continuableWallResetsAt: null,
    unsettledClaimGrantId: null,
    unsettledClaimEpoch: null,
    unsettledClaimRequestId: null,
    unsettledClaimAtMs: null,
    sessionSwitchSubscribed: !1,
    changed: Me(),
    events: Me()
  };
}
var On = new q(In);
function O() {
  return On.of(j().host);
}
function lP() {
  return O().state;
}
function Q(a) {
  let s = O();
  s.state = a, s.changed.emit();
}
function hue(a) {
  return O().changed.subscribe(a);
}
function K7n(a) {
  return O().events.subscribe(a);
}
import { randomUUID as Hn } from "crypto";
var program = "cedar_ember",
  timeout = 25000,
  De = /^[a-z0-9_-]{1,40}$/,
  Mn = /^[A-Za-z0-9_-]{1,64}$/,
  Ae = ["five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet", "seven_day_cowork", "seven_day_omelette", "seven_day_oauth_apps"],
  vt = ["config_off", "tier", "seat", "mobile", "surface", "cli_version", "no_grant", "tenure", "other_experiment", "unavailable", "unknown"],
  zn = [...vt, "paused", "expired", "unknown_grant", "not_next_grant", "grant_id_required", "not_limited", "already_used", "cooldown", "stamp_indeterminate", "reset_unconfirmed"],
  Wn = f(() => u({
    surface: z(["claude_ai", "claude_code_cli", "unknown"]).catch("unknown"),
    tier: z(["claude_pro", "claude_max_5x", "claude_max_20x", "claude_team", "unknown"]).catch("unknown"),
    tenure_bucket: z(["under_14", "14-29", "30-89", "90-364", "365+", "unknown"]).catch("unknown"),
    billing_path: z(["stripe", "apple", "google_play", "other", "unknown"]).catch("unknown"),
    billing_period: z(["monthly", "annual", "unknown"]).catch("unknown"),
    extra_usage_state: z(["not_configured", "disabled", "enabled", "unknown"]).catch("unknown")
  })),
  Ce = f(() => C(ae()).catch([]).transform(a => a.filter(item => Ae.some(l => l === item)))),
  Fn = f(() => u({
    id: o().regex(De),
    label: o().catch(""),
    resets_total: E().int().min(0).catch(0),
    resets_left: E().int().min(0),
    starts_at: o().nullable().optional().catch(null),
    ends_at: o().nullable().optional().catch(null),
    clears: Ce(),
    paused: M().catch(!1),
    usable_now: M().catch(!1),
    use_requires_limit: M().catch(!0),
    percent_used: fe(o(), ae()).catch({}),
    blocking: Ce()
  }));
function Dn(a) {
  let s = {};
  for (let l of Ae) {
    let m = a[l];
    if (typeof m === "number" && Number.isInteger(m) && m >= 0 && m <= 100) s[l] = m;
  }
  return s;
}
var Jn = f(() => u({
    eligible: M(),
    ineligible_reason: z(vt).catch("unknown").nullable().optional(),
    at_limit: M().optional().catch(void 0),
    exhausted: Ce().optional(),
    grants: C(ae()).optional().catch(void 0),
    next_grant_id: o().regex(De).nullable().optional().catch(null),
    weekly_resets_at: o().nullable().optional().catch(null),
    cooldown_until: o().nullable().optional().catch(null),
    event_props: Wn().nullable().optional().catch(null)
  })),
  Gn = f(() => u({
    result: z(["reset", "already_used", "not_limited", "cooldown", "ineligible", "unavailable"]).catch("unavailable"),
    reason: z(zn).catch("unknown").nullable().optional(),
    resets_left: E().int().min(0).nullable().optional().catch(null),
    cleared: Ce().optional(),
    weekly_resets_at: o().nullable().optional().catch(null),
    cooldown_until: o().nullable().optional().catch(null)
  }));
function $n(a) {
  let s = Fn().safeParse(a);
  if (!s.success) return t(`[cedar-ember] ignoring a malformed grant: ${s.error.message}`), null;
  let l = s.data;
  return {
    id: l.id,
    label: l.label,
    resetsTotal: l.resets_total,
    resetsLeft: l.resets_left,
    startsAt: l.starts_at ?? null,
    endsAt: l.ends_at ?? null,
    clears: l.clears,
    paused: l.paused,
    usableNow: l.usable_now,
    useRequiresLimit: l.use_requires_limit,
    percentUsed: Dn(l.percent_used),
    blocking: l.blocking
  };
}
function jn(a) {
  if (a === void 0 || a === null) return null;
  let s = Jn().safeParse(a);
  if (!s.success) return t(`[cedar-ember] ignoring a malformed status block: ${s.error.message}`), null;
  let l = s.data,
    grants = (l.grants ?? []).map($n).filter(item => item !== null),
    nextGrantId = l.next_grant_id !== void 0 && l.next_grant_id !== null && grants.some(item => item.id === l.next_grant_id) ? l.next_grant_id : null,
    event_props = l.event_props;
  return {
    eligible: l.eligible,
    ineligibleReason: l.ineligible_reason ?? null,
    atLimit: l.at_limit ?? !1,
    exhausted: l.exhausted ?? [],
    grants: grants,
    nextGrantId: nextGrantId,
    weeklyResetsAt: l.weekly_resets_at ?? null,
    cooldownUntil: l.cooldown_until ?? null,
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
async function Je(a, {
  read = "at_wall"
} = {}) {
  try {
    if (!Ap()) return {
      kind: "no_profile_scope"
    };
    let l = await nI(a, {
      read: read
    });
    if (!xit(l)) return t("[cedar-ember] status fetch returned a fieldless or non-object body (in-band error)", {
      level: "warn"
    }), {
      kind: "failed"
    };
    return {
      kind: "answered",
      status: jn(l?.cedar_ember)
    };
  } catch (error) {
    if (t(`[cedar-ember] status fetch failed: ${te(error).message}`, {
      level: "warn"
    }), fu(error) && (error.response?.status === 401 || error.response?.status === 403)) return {
      kind: "not_authorized"
    };
    return {
      kind: "failed"
    };
  }
}
var Z = {
  reason: null,
  resetsLeft: null,
  cleared: [],
  weeklyResetsAt: null
};
async function Ge(credentials_2, grant_id, request_id) {
  let m = An()?.organizationUuid;
  if (!m) return t("[cedar-ember] no OAuth organization; cannot claim"), {
    result: "auth_error",
    ...Z
  };
  if (!De.test(grant_id) || !Mn.test(request_id)) return d(Error("[cedar-ember] refusing to claim with a malformed grant or request id")), {
    result: "error",
    ...Z
  };
  try {
    let b = await vy(() => Dt.post(`/api/organizations/${m}/reset_rate_limits`, {
      program: program,
      grant_id: grant_id,
      request_id: request_id
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
    if (!b.ok) return t(`[cedar-ember] claim not sent: ${b.reason === "no-auth" ? b.detail : b.reason}`, {
      level: "warn"
    }), {
      result: b.reason === "no-auth" ? "auth_error" : "error",
      ...Z
    };
    let y = Gn().safeParse(b.data);
    if (!y.success) return t(`[cedar-ember] unreadable claim response: ${y.error.message}`, {
      level: "error"
    }), d(Error("[cedar-ember] unreadable claim response")), {
      result: "error",
      ...Z
    };
    return {
      result: y.data.result,
      reason: y.data.reason ?? null,
      resetsLeft: y.data.resets_left ?? null,
      cleared: y.data.cleared ?? [],
      weeklyResetsAt: y.data.weekly_resets_at ?? null
    };
  } catch (error) {
    if (Zd(error)) t(`[cedar-ember] claim failed: ${te(error).message}`, {
      level: "warn"
    });else d(te(error));
    if (fu(error)) switch (error.response?.status) {
      case 429:
        return {
          result: "rate_limited",
          ...Z
        };
      case 401:
      case 403:
        return {
          result: "auth_error",
          ...Z
        };
      default:
        break;
    }
    return {
      result: "error",
      ...Z
    };
  }
}
var Kn = 3,
  St = 12000,
  Ot = 35000,
  qn = 600000,
  Xn = 20000;
function Xe(a) {
  if (!qKt(a) || a.rateLimitType === void 0 || a.resetsAt === void 0) return null;
  return {
    rateLimitType: a.rateLimitType,
    wallResetsAt: a.resetsAt,
    accountEpoch: MA()
  };
}
function Le(a, s) {
  return s.rateLimitType === a.rateLimitType && s.resetsAt === a.wallResetsAt && a.accountEpoch === MA();
}
function ne(a) {
  let s = lP();
  return s.phase === "answered" && Le(s.wall, a) ? s.status : void 0;
}
function Be(a) {
  let s = lP();
  return s.phase === "failed" && Le(s.wall, a);
}
function K() {
  return Date.now();
}
function Pt(a, s, l, m) {
  if (a.final) return !1;
  let b = m - a.answeredAtMs,
    y = T => b < 0 || b >= T;
  if (yue(s, m) !== void 0) return !1;
  let h = oe(a.status?.cooldownUntil ?? null),
    A = b < 0 || b >= Xn && (h === void 0 || m >= Math.min(h, a.answeredAtMs + 150000));
  switch (l) {
    case "wall":
      return y(qn);
    case "command":
      return A;
    case "dialog":
      return A && (a.status === null || Yn(s));
  }
}
function me(a, s) {
  return a.clears.some(item => item === s);
}
function yue(a, s = Date.now()) {
  let l = ne(a);
  if (!qKt(a) || l === void 0 || l === null || l.nextGrantId === null || a.rateLimitType === void 0 || a.resetsAt === void 0 || a.resetsAt * 1000 <= s || WL() || !$Z()) return;
  let m = Gt(l, s);
  if (m === void 0 || !me(m.grant, a.rateLimitType) || Ye(m.grant, l)) return;
  let {
    grant: grant,
    endsAtMs: endsAtMs
  } = m;
  return {
    origin: "wall",
    grant: grant,
    resetsLeft: Math.max(1, Se(l)),
    weeklyResetsAt: l.weeklyResetsAt,
    endsAtMs: endsAtMs,
    rateLimitType: a.rateLimitType
  };
}
function Se(a) {
  return a.grants.reduce((acc, item) => acc + item.resetsLeft, 0);
}
function Ye(a, s) {
  return !a.useRequiresLimit && !a.clears.some(item => s.exhausted.includes(item));
}
function Bn(a, s) {
  if (!Ye(a, s)) return null;
  let l = null;
  for (let claimType of Ae) {
    let percentUsed = a.percentUsed[claimType];
    if (a.clears.includes(claimType) && percentUsed !== void 0 && (l === null || percentUsed > l.percentUsed)) l = {
      claimType: claimType,
      percentUsed: percentUsed
    };
  }
  if (l === null) return {
    kind: "unnumbered",
    percentUsedMax: null
  };
  let limitName = Ve(l.claimType);
  if (limitName === null || l.percentUsed >= 100) return {
    kind: "unnumbered",
    percentUsedMax: l.percentUsed
  };
  return {
    kind: "numbered",
    percentLeft: 100 - l.percentUsed,
    claimType: l.claimType,
    limitName: limitName,
    percentUsedMax: l.percentUsed
  };
}
function Ve(a) {
  switch (a) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
      return Ant(a);
    case "seven_day_sonnet":
      return cRt();
    case "seven_day_overage_included":
    case "seven_day_cowork":
    case "seven_day_omelette":
    case "seven_day_oauth_apps":
      return null;
  }
}
function Y7n(a) {
  if (a.origin === "wall" || a.earlyUse === null) return;
  let s = LM();
  switch (a.earlyUse.kind) {
    case "numbered":
      return cm(s.earlyLine, FK(a));
    case "unnumbered":
      return cm(s.earlyNoNumberLine, FK(a));
  }
}
function zre() {
  let a = O();
  return a.claiming || a.unsettledClaimGrantId !== null && a.unsettledClaimEpoch === MA() && zt(a);
}
function jPe(a, s = Date.now()) {
  return yue(a, s) !== void 0;
}
function Gre(a, s = Date.now()) {
  let l = ne(a);
  if (!qKt(a) || l === void 0 || l === null || !l.eligible || l.nextGrantId !== null || l.grants.length === 0 || l.grants.some(item => item.resetsLeft > 0) || a.resetsAt === void 0 || a.resetsAt * 1000 <= s || !$Z()) return;
  return cm(LM().spentLine, {
    left: 0
  });
}
function j5r(a, s = Date.now()) {
  let l = ne(a);
  return l !== void 0 && l !== null && l.eligible && l.grants.some(item => item.resetsLeft > 0 && !item.paused && (oe(item.endsAt) ?? 1 / 0) > s);
}
function Yn(a) {
  let s = ne(a);
  return s !== void 0 && s !== null && s.eligible && s.nextGrantId === null && s.grants.some(item => item.resetsLeft > 0);
}
function FK(a) {
  return {
    left: a.resetsLeft,
    date: Ut(a.grant.endsAt),
    deadline: Te(a.grant.endsAt),
    week: Te(a.weeklyResetsAt),
    limits: Vn(a.grant.clears),
    ...(a.origin === "anytime" && a.earlyUse?.kind === "numbered" && {
      percent: a.earlyUse.percentLeft,
      limit: a.earlyUse.limitName
    })
  };
}
function Vn(a) {
  let s = new Set();
  for (let b of a) switch (b) {
    case "five_hour":
      s.add("session");
      break;
    case "seven_day":
    case "seven_day_overage_included":
      s.add("weekly");
      break;
    case "seven_day_opus":
      s.add(Ant(b).replace(/ limit$/, ""));
      break;
    case "seven_day_sonnet":
      s.add(cRt().replace(/ limit$/, ""));
      break;
    case "seven_day_cowork":
    case "seven_day_omelette":
    case "seven_day_oauth_apps":
      break;
  }
  let l = [...s],
    m = l.pop();
  if (m === void 0) return "limits";
  return l.length === 0 ? `${m} limit` : `${l.join(", ")} and ${m} limits`;
}
function Ut(a) {
  let s = oe(a);
  return s === void 0 ? void 0 : ud(Math.floor(s / 1000), !1, !1, !0);
}
function Te(a) {
  let s = oe(a);
  return s === void 0 ? void 0 : ud(Math.floor(s / 1000), !1, !0, !0);
}
function oe(a) {
  if (a === null) return;
  let s = Date.parse(a);
  return Number.isFinite(s) ? s : void 0;
}
function Nt() {
  return $Z() || nZn(x(zPe, null));
}
function W5r(a, s) {
  if (!Nt() || !qKt(a)) return;
  let l = O();
  if (Er(l), l.continuableWallResetsAt = a.resetsAt ?? null, l.unsettledClaimEpoch !== MA()) F(l);
  ee(a, s, "wall");
}
function ee(a, s, l) {
  if (l === "wall" ? !Nt() : !$Z()) return Promise.resolve();
  let wall = Xe(a);
  if (wall === null) return Promise.resolve();
  let b = O(),
    state = b.state,
    failures = 0,
    previous = null;
  if (state.phase !== "idle" && Le(state.wall, a)) switch (state.phase) {
    case "answered":
      if (!Pt(state, a, l, K())) return Promise.resolve();
      previous = state;
      break;
    case "asking":
      return b.pendingAsk ?? Promise.resolve();
    case "failed":
      if (l === "wall" && state.failures >= Kn) return Promise.resolve();
      failures = state.failures;
  }
  Q({
    phase: "asking",
    wall: wall
  });
  let autoArmed = bG(),
    v = nt(Je(s), St).then(k => {
      if (xt({
        wall: wall,
        failures: failures,
        previous: previous,
        result: k ?? {
          kind: "failed"
        },
        autoArmed: autoArmed
      }), k !== void 0 && k.kind === "answered" && k.status?.ineligibleReason !== "unavailable") Mt(b, k.status, s);
    }).catch(k => {
      d(te(k));
      try {
        xt({
          wall: wall,
          failures: failures,
          previous: previous,
          result: {
            kind: "failed"
          },
          autoArmed: autoArmed
        });
      } catch (error) {
        d(te(error));
      }
    }).finally(() => {
      if (b.pendingAsk === v) b.pendingAsk = null;
    });
  return b.pendingAsk = v, v;
}
function xt({
  wall: wall_2,
  failures: failures_2,
  previous: previous_2,
  result: result,
  autoArmed: b
}) {
  let y = lP();
  if (y.phase !== "asking" || y.wall.rateLimitType !== wall_2.rateLimitType || y.wall.wallResetsAt !== wall_2.wallResetsAt || y.wall.accountEpoch !== wall_2.accountEpoch) return;
  let status = result.kind === "answered" ? result.status : null,
    A = result.kind === "failed" || status?.ineligibleReason === "unavailable";
  if (A && previous_2 !== null) Q({
    ...previous_2,
    answeredAtMs: K()
  });else if (A) Q({
    phase: "failed",
    wall: wall_2,
    failures: failures_2 + 1
  });else {
    let final = result.kind === "no_profile_scope" || result.kind === "not_authorized";
    Q(final ? {
      phase: "answered",
      wall: wall_2,
      status: status,
      answeredAtMs: K(),
      final: final
    } : {
      phase: "answered",
      wall: wall_2,
      status: status,
      answeredAtMs: K()
    });
  }
  if (!$Z()) return;
  let config_version = iqe();
  if (i("tengu_cedar_ember_asked", {
    outcome: c(Wt(result)),
    at_wall: !0,
    attempt: failures_2 + 1,
    eligible: status?.eligible ?? !1,
    ineligible_reason: ue(status?.ineligibleReason),
    limit_type: c(wall_2.rateLimitType),
    config_version: config_version
  }), A || status === null || !status.eligible) return;
  let v = O(),
    k = `${wall_2.accountEpoch}:${wall_2.rateLimitType}:${wall_2.wallResetsAt}:${status.eligible}:${status.nextGrantId}`;
  if (v.wallRecordKey === k) return;
  v.wallRecordKey = k;
  let S = status.grants.find(item => item.id === status.nextGrantId);
  i("tengu_cedar_ember_wall", {
    eligible: status.eligible,
    at_limit: status.atLimit,
    usable: S !== void 0 && me(S, wall_2.rateLimitType) && !Ye(S, status),
    grant_id: _e(status.nextGrantId),
    resets_left: S?.resetsLeft ?? 0,
    resets_left_total: Se(status),
    grants: status.grants.length,
    limit_type: c(wall_2.rateLimitType),
    limit_types: Oa(status.exhausted),
    tier: c(E7e()),
    auto_armed: b,
    low_priority_active: WL(),
    config_version: config_version,
    surface: ue(status.eventProps?.surface),
    server_tier: ue(status.eventProps?.tier),
    tenure_bucket: ue(status.eventProps?.tenureBucket),
    billing_path: ue(status.eventProps?.billingPath),
    billing_period: ue(status.eventProps?.billingPeriod),
    extra_usage_state: ue(status.eventProps?.extraUsageState)
  });
}
function Mt(a, s, l) {
  if (a.unsettledClaimGrantId === null) return;
  if (a.unsettledClaimEpoch !== MA()) {
    F(a);
    return;
  }
  if (s?.nextGrantId === a.unsettledClaimGrantId) return;
  if (W(l), s !== null && !Ie(s)) F(a);
}
var Qn = 600000;
function zt(a) {
  return a.unsettledClaimAtMs !== null && K() - a.unsettledClaimAtMs < Qn;
}
function Wt(a) {
  return a.kind === "answered" ? a.status === null ? "absent" : "block" : a.kind;
}
function Qe(a, s) {
  return a.unsettledClaimGrantId === s && a.unsettledClaimEpoch === MA() && zt(a);
}
function F(a) {
  a.unsettledClaimGrantId = null, a.unsettledClaimRequestId = null, a.unsettledClaimEpoch = null, a.unsettledClaimAtMs = null;
}
function Ft(a, s, l, m) {
  if (a.unsettledClaimRequestId !== l) a.unsettledClaimAtMs = K();
  a.unsettledClaimGrantId = s, a.unsettledClaimRequestId = l, a.unsettledClaimEpoch = m;
}
function Jt(a, s) {
  return Qe(a, s) && a.unsettledClaimRequestId !== null ? a.unsettledClaimRequestId : Hn();
}
function Gt(a, s) {
  if (a.nextGrantId === null) return;
  let grant_2 = a.grants.find(item => item.id === a.nextGrantId);
  if (grant_2 === void 0 || !grant_2.usableNow || grant_2.paused) return;
  let endsAtMs_2 = oe(grant_2.endsAt) ?? null;
  if (endsAtMs_2 !== null && endsAtMs_2 <= s) return;
  return {
    grant: grant_2,
    endsAtMs: endsAtMs_2
  };
}
function gyt(a, s) {
  let l = yue(a);
  if (l === void 0 || a.resetsAt === void 0) return;
  let m = `${l.rateLimitType}:${a.resetsAt}:${l.grant.id}`,
    b = O();
  if (b.shownOfferKey === m) return;
  b.shownOfferKey = m, i("tengu_cedar_ember_shown", {
    surface: c(s),
    grant_id: _e(l.grant.id),
    resets_left: l.grant.resetsLeft,
    resets_left_total: l.resetsLeft,
    limit_type: c(l.rateLimitType),
    config_version: iqe()
  });
}
function K2t(a, s) {
  let l = lP();
  if (Be(a) || l.phase === "answered" && Le(l.wall, a) && Pt(l, a, "dialog", K())) ee(a, s, "dialog");
}
async function vJe(a, s) {
  try {
    return await Zn(a, s);
  } catch (error) {
    return d(te(error)), {
      kind: "answer",
      result: {
        outcome: "unavailable",
        text: text
      }
    };
  }
}
async function jt(a, s) {
  let m = O().pendingAsk !== null;
  if (await ee(ma(), s, a), m && Be(ma())) await ee(ma(), s, a);
}
async function Zn(a, s) {
  if (O().claiming) return {
    kind: "answer",
    result: {
      outcome: "unavailable",
      text: text_2
    }
  };
  if (ma().status !== "rejected" && k7e() && $Z()) {
    if (WL()) return {
      kind: "answer",
      result: {
        outcome: "not_offered",
        text: text_3
      }
    };
    return er(a, s);
  }
  await jt(a, s);
  let m = ma(),
    offer = yue(m);
  if (offer === void 0) {
    let y = ne(m);
    if (y !== void 0 && y !== null && (Ie(y) || qt(y, m))) W(s);
    return {
      kind: "answer",
      result: Kt(m)
    };
  }
  return Ht(a, offer), {
    kind: "confirm",
    offer: offer
  };
}
function Ht(a, s) {
  i("tengu_cedar_ember_selected", {
    entry: c(a),
    grant_id: _e(s.grant.id),
    resets_left: s.grant.resetsLeft,
    resets_left_total: s.resetsLeft,
    limit_type: ue(s.origin === "wall" ? s.rateLimitType : void 0),
    at_limit: s.origin === "wall" || s.atLimit,
    early_use: ve(s),
    auto_armed: bG(),
    config_version: iqe()
  });
}
async function er(a, s) {
  let l = O(),
    m = await nt(Je(s, {
      read: "cedar_ember"
    }), St),
    b = m?.kind === "answered" ? m.status : null,
    y = m === void 0 || m.kind === "failed" || b?.ineligibleReason === "unavailable";
  if (i("tengu_cedar_ember_asked", {
    outcome: c(Wt(m ?? {
      kind: "failed"
    })),
    at_wall: !1,
    asker: c(a),
    eligible: b?.eligible ?? !1,
    ineligible_reason: ue(b?.ineligibleReason),
    at_limit: b?.atLimit ?? !1,
    grants: b?.grants.length ?? 0,
    grant_id: _e(b?.nextGrantId ?? null),
    config_version: iqe()
  }), y) return {
    kind: "answer",
    result: {
      outcome: "unavailable",
      text: zre() ? cm(LM().unconfirmedAnytimeLine, {}) : text
    }
  };
  Mt(l, b, s);
  let offer_2 = b === null ? void 0 : tr(b, K());
  if (offer_2 === void 0) return {
    kind: "answer",
    result: rr(b)
  };
  return Ht(a, offer_2), {
    kind: "confirm",
    offer: offer_2
  };
}
function tr(a, s) {
  let l = Gt(a, s);
  if (l === void 0) return;
  let {
    grant: grant_3,
    endsAtMs: endsAtMs_3
  } = l;
  return {
    origin: "anytime",
    grant: grant_3,
    resetsLeft: Math.max(1, Se(a)),
    weeklyResetsAt: a.weeklyResetsAt,
    endsAtMs: endsAtMs_3,
    earlyUse: Bn(grant_3, a),
    atLimit: a.atLimit
  };
}
function rr(a) {
  if (a === null || !a.eligible || a.grants.length === 0) return {
    outcome: "not_offered",
    text: `${Ke} \xB7 ${Bt}`
  };
  let s = a.grants.filter(item => item.resetsLeft > 0),
    l = {
      left: Se(a),
      date: Ut(s[0]?.endsAt ?? null)
    };
  if (s.length === 0) return {
    outcome: "spent",
    text: cm(LM().spentLine, l)
  };
  let m = s.flatMap(item => item.blocking).map(Ve).find(item => item !== null) ?? null,
    b = m !== null ? Yt(m) : s.every(item => item.paused) ? `${je} \xB7 it is paused` : Ie(a) ? `${je} \xB7 try again in a minute` : s.every(item => item.useRequiresLimit) ? ur : `${je} \xB7 try again later`;
  return {
    outcome: "not_offered",
    text: cm(`${b} \xB7 {resets} left \xB7 use by {date}`, l)
  };
}
function Kt(a) {
  let text_4 = Gre(a);
  if (text_4 !== void 0) return {
    outcome: "spent",
    text: text_4
  };
  if (Be(a)) return {
    outcome: "unavailable",
    text: zre() ? cm(LM().unconfirmedLine, {}) : text
  };
  let l = ne(a);
  if (l !== void 0 && l !== null && qt(l, a)) return {
    outcome: "not_offered",
    text: text_5
  };
  return {
    outcome: "not_offered",
    text: Xt(ir(a), a)
  };
}
function qt(a, s) {
  let rateLimitType = s.rateLimitType;
  return rateLimitType !== void 0 && a.nextGrantId !== null && !a.exhausted.some(item => item === rateLimitType) && a.grants.some(item => item.id === a.nextGrantId && me(item, rateLimitType));
}
function Ie(a) {
  let s = oe(a.cooldownUntil);
  return s !== void 0 && s > K();
}
function ir(a) {
  let s = ne(a);
  if (s === void 0 || s === null || a.rateLimitType === void 0) return Ke;
  let rateLimitType_2 = a.rateLimitType,
    m = s.grants.filter(item => item.resetsLeft > 0);
  if (m.length === 0) return Ke;
  if (!m.some(item => me(item, rateLimitType_2))) return sr;
  let b = m.filter(item => me(item, rateLimitType_2)).flatMap(item => item.blocking).map(Ve).find(item => item !== null) ?? null;
  if (b !== null) return Yt(b);
  if (m.every(item => item.paused)) return `${$e} \xB7 it is paused`;
  if (Ie(s)) return `${$e} \xB7 try again in a minute`;
  return $e;
}
function Xt(a, s) {
  let l = SG(s) ? ud(s.resetsAt) : void 0;
  return l !== void 0 ? `${a} \xB7 this limit resets ${l}` : `${a} \xB7 ${Bt}`;
}
function X7n(a, s) {
  i("tengu_cedar_ember_confirmed", {
    confirmed: !1,
    entry: c(a),
    grant_id: _e(s.grant.id),
    limit_type: ue(s.origin === "wall" ? s.rateLimitType : void 0),
    at_limit: s.origin === "wall" || s.atLimit,
    early_use: ve(s),
    percent_used_max: He(s),
    config_version: iqe()
  });
  let l = LM();
  return {
    outcome: "kept",
    text: cm(s.grant.useRequiresLimit ? l.keptLine : l.keptAnytimeLine, FK(s))
  };
}
async function J7n(a, s, l) {
  let m = O();
  if (m.claiming) return {
    outcome: "unavailable",
    text: text_2
  };
  m.claiming = !0;
  try {
    return l.origin === "wall" || Xe(ma()) !== null ? await ar(a, s, l.grant.id) : await or(a, s, l);
  } catch (error) {
    d(te(error));
    let y = LM();
    return {
      outcome: "unavailable",
      text: cm(l.origin === "wall" ? y.unconfirmedLine : y.unconfirmedAnytimeLine, {})
    };
  } finally {
    m.claiming = !1;
  }
}
async function ar(a, s, l) {
  let m = O(),
    b = LM(),
    config_version_2 = iqe();
  await jt(a, s);
  let h = ma(),
    A = Xe(h),
    T = yue(h);
  if (i("tengu_cedar_ember_confirmed", {
    confirmed: !0,
    entry: c(a),
    grant_id: _e(l),
    limit_type: ue(h.rateLimitType),
    still_offered: T !== void 0 && T.grant.id === l,
    at_limit: !0,
    early_use: !1,
    config_version: config_version_2
  }), T === void 0 || A === null) return Kt(h);
  if (T.grant.id !== l) return {
    outcome: "not_offered",
    text: text_6
  };
  let v = Date.now(),
    k = Qe(m, l),
    S = Jt(m, l),
    L = (await nt(Ge(s, l, S), Ot)) ?? {
      result: "error",
      reason: null,
      resetsLeft: null,
      cleared: [],
      weeklyResetsAt: null
    };
  switch (i("tengu_cedar_ember_result", {
    result: c(L.result),
    reason: ue(L.reason),
    entry: c(a),
    grant_id: _e(l),
    resets_left: L.resetsLeft ?? void 0,
    cleared: Oa(L.cleared),
    limit_type: c(A.rateLimitType),
    at_limit: !0,
    early_use: !1,
    latency_ms: Date.now() - v,
    config_version: config_version_2
  }), L.result) {
    case "reset":
    case "not_limited":
    case "cooldown":
    case "already_used":
    case "ineligible":
      _("cedar_ember");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      p("cedar_ember", L.result);
      break;
  }
  let P = T.resetsLeft - T.grant.resetsLeft,
    B = L.resetsLeft ?? (L.result === "already_used" ? 0 : Math.max(0, T.grant.resetsLeft - 1)),
    I = {
      ...FK(T),
      left: P + B,
      week: Te(L.weeklyResetsAt ?? T.weeklyResetsAt)
    };
  switch (L.result) {
    case "reset":
      {
        F(m);
        let D = kt(m, A);
        Lt(m, A, [A.rateLimitType, ...Re(L.cleared).filter(item => item !== A.rateLimitType)], a, D);
        let H = cm(b.successLine, I);
        return {
          outcome: "reset",
          text: D ? H : Rt(H)
        };
      }
    case "not_limited":
      {
        F(m);
        let D = kt(m, A);
        Lt(m, A, [A.rateLimitType], a, D);
        let H = k ? fr : pr;
        return {
          outcome: "reset",
          text: D ? H : Rt(H)
        };
      }
    case "cooldown":
      {
        if (!k) F(m);
        return W(s), {
          outcome: "unavailable",
          text: k ? Zt : br
        };
      }
    case "already_used":
      {
        if (k) return F(m), ce(A), W(s), {
          outcome: "spent",
          text: text_7
        };
        if (P > 0) return ce(A), ee(ma(), s, a), W(s), {
          outcome: "spent",
          text: cm(`${xe} \xB7 ${Vt}`, I)
        };
        return hr(A, l), W(s), {
          outcome: "spent",
          text: cm(xe, I)
        };
      }
    case "ineligible":
      {
        if (ce(A), ee(ma(), s, a), k) return F(m), W(s), {
          outcome: "not_offered",
          text: text_8
        };
        return {
          outcome: "not_offered",
          text: Xt(text_11, h)
        };
      }
    case "auth_error":
      return {
        outcome: "unavailable",
        text: text_9
      };
    case "rate_limited":
      return {
        outcome: "unavailable",
        text: cm(k ? b.unconfirmedLine : b.unavailableLine, I)
      };
    case "unavailable":
    case "error":
      {
        Ft(m, l, S, A.accountEpoch);
        let D = Re(L.cleared);
        if (D.length > 0) {
          if (VGe(D), D.includes(A.rateLimitType)) W(s);
        }
        return ce(A), ee(ma(), s, a), {
          outcome: "unavailable",
          text: cm(k ? b.stillUnconfirmedLine : b.unconfirmedLine, I)
        };
      }
  }
}
function He(a) {
  return a.origin === "anytime" ? a.earlyUse?.percentUsedMax ?? void 0 : void 0;
}
function ve(a) {
  return a.origin === "anytime" && a.earlyUse !== null;
}
async function or(a, s, l) {
  let m = O(),
    b = LM(),
    config_version_3 = iqe(),
    h = l.grant.id,
    A = MA();
  i("tengu_cedar_ember_confirmed", {
    confirmed: !0,
    entry: c(a),
    grant_id: _e(h),
    at_limit: l.atLimit,
    early_use: ve(l),
    percent_used_max: He(l),
    config_version: config_version_3
  });
  let T = Date.now(),
    v = Qe(m, h),
    k = Jt(m, h),
    S = (await nt(Ge(s, h, k), Ot)) ?? {
      result: "error",
      reason: null,
      resetsLeft: null,
      cleared: [],
      weeklyResetsAt: null
    };
  switch (i("tengu_cedar_ember_result", {
    result: c(S.result),
    reason: ue(S.reason),
    entry: c(a),
    grant_id: _e(h),
    resets_left: S.resetsLeft ?? void 0,
    cleared: Oa(S.cleared),
    at_limit: l.atLimit,
    early_use: ve(l),
    percent_used_max: He(l),
    latency_ms: Date.now() - T,
    config_version: config_version_3
  }), S.result) {
    case "reset":
    case "not_limited":
    case "cooldown":
    case "already_used":
    case "ineligible":
      _("cedar_ember");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      p("cedar_ember", S.result);
      break;
  }
  let L = l.resetsLeft - l.grant.resetsLeft,
    P = S.resetsLeft ?? (S.result === "already_used" ? 0 : Math.max(0, l.grant.resetsLeft - 1)),
    B = {
      ...FK(l),
      left: L + P,
      week: Te(S.weeklyResetsAt ?? l.weeklyResetsAt)
    };
  switch (S.result) {
    case "reset":
      {
        F(m);
        let I = Re(S.cleared);
        if (I.length > 0) VGe(I);
        return W(s), {
          outcome: "reset",
          text: cm(b.successLine, B)
        };
      }
    case "not_limited":
      if (F(m), v) return W(s), {
        outcome: "not_offered",
        text: text_8
      };
      return {
        outcome: "not_offered",
        text: text_10
      };
    case "cooldown":
      if (!v) F(m);
      return W(s), {
        outcome: "unavailable",
        text: v ? Zt : _r
      };
    case "already_used":
      if (v) return F(m), W(s), {
        outcome: "spent",
        text: text_7
      };
      return {
        outcome: "spent",
        text: cm(L > 0 ? `${xe} \xB7 ${Vt}` : xe, B)
      };
    case "ineligible":
      if (v) return F(m), W(s), {
        outcome: "not_offered",
        text: text_8
      };
      return {
        outcome: "not_offered",
        text: text_11
      };
    case "auth_error":
      return {
        outcome: "unavailable",
        text: text_9
      };
    case "rate_limited":
      return {
        outcome: "unavailable",
        text: cm(v ? b.unconfirmedAnytimeLine : b.unavailableLine, B)
      };
    case "unavailable":
    case "error":
      {
        Ft(m, h, k, A);
        let I = Re(S.cleared);
        if (I.length > 0) VGe(I);
        if (I.length > 0 || v) W(s);
        return {
          outcome: "unavailable",
          text: cm(v ? b.stillUnconfirmedLine : b.unconfirmedAnytimeLine, B)
        };
      }
  }
}
var Ke = "No reset to use",
  Bt = "you're not at a usage limit right now",
  $e = "Your reset can't be used for this limit right now",
  sr = "Your reset doesn't cover this limit",
  text_5 = `This limit may have lifted already \xB7 checking your limits now \xB7 run /${s3} again in a moment to use your reset anyway`,
  ur = `You have a reset saved for when you reach a usage limit \xB7 run /${s3} when you do`,
  je = "Your reset can't be used right now",
  text_3 = `Resets can't be used while you continue at lower priority \xB7 run /${s3} after that ends`,
  text_10 = "Your reset only works at a usage limit, and you're not at one now \xB7 nothing was used";
function Yt(a) {
  return `Your reset doesn't refill your ${a}, so it can't be used until that resets`;
}
var text = "Couldn't check for a reset right now \xB7 try again in a moment",
  WPe = "Checking for a reset\u2026",
  xe = "That reset was already used \xB7 nothing changed just now \xB7 {resets} left",
  Vt = `run /${s3} again to use one`,
  text_11 = "This reset isn't available any more \xB7 nothing was used",
  text_6 = `A different reset is on offer now \xB7 nothing was used \xB7 run /${s3} again to see it`,
  pr = "Your limit had already reset on its own \xB7 nothing was used",
  fr = "Your limits are clear",
  br = "Another reset was just started on your account \xB7 checking your limits now \xB7 if you're still at the limit in a minute, try again",
  Zt = "Your earlier reset may still be going through \xB7 checking your limits now \xB7 try again in a minute if they aren't refilled",
  _r = "Another reset was just started on your account \xB7 this one wasn't used \xB7 try again in a minute",
  text_7 = "Your earlier reset went through after all \xB7 checking your limits now",
  text_8 = "This reset isn't available any more \xB7 your earlier try may have gone through \xB7 checking your limits now",
  gr = "send a message to continue",
  text_2 = "Your limits are already being reset \xB7 one moment",
  text_9 = "Couldn't reset your limits with this login \xB7 run /login, then try again";
function Rt(a) {
  return `${a} \xB7 ${gr}`;
}
function kt(a, s) {
  let l = hho() && a.continuableWallResetsAt === s.wallResetsAt;
  return a.continuableWallResetsAt = null, l;
}
function Re(a) {
  let s = [];
  for (let l of a) switch (l) {
    case "five_hour":
    case "seven_day":
    case "seven_day_overage_included":
    case "seven_day_opus":
    case "seven_day_sonnet":
      s.push(l);
      break;
    case "seven_day_cowork":
    case "seven_day_omelette":
    case "seven_day_oauth_apps":
      break;
  }
  return s;
}
function Lt(a, s, l, entry, b) {
  let y = [() => _M("cedar_ember"), () => {
    GO("reset");
  }, () => yr(l), () => {
    ce(s), a.wallRecordKey = null, a.shownOfferKey = null;
  }, () => {
    if (b) DWe();
  }, () => a.events.emit({
    type: "reset",
    entry: entry
  })];
  for (let h of y) try {
    h();
  } catch (error) {
    d(te(error));
  }
}
function yr(a) {
  if (a.length > 0) VGe(a);
  let s = ma();
  if (s.status !== "rejected" || s.rateLimitType === void 0 || !a.includes(s.rateLimitType)) return;
  wfe({
    ...s,
    status: "allowed",
    rateLimitType: void 0,
    resetsAt: void 0
  });
}
function W(a) {
  if (bG()) {
    zOe();
    return;
  }
  xnt(a, void 0).catch(s => {
    d(te(s));
  });
}
function ce(a) {
  let s = lP();
  if (s.phase !== "idle" && s.wall.wallResetsAt === a.wallResetsAt && s.wall.rateLimitType === a.rateLimitType) Q({
    phase: "idle"
  });
}
function hr(a, s) {
  let l = lP();
  if (l.phase !== "answered" || l.wall.wallResetsAt !== a.wallResetsAt || l.wall.rateLimitType !== a.rateLimitType || l.status === null) return;
  Q({
    ...l,
    answeredAtMs: K(),
    status: {
      ...l.status,
      nextGrantId: l.status.nextGrantId === s ? null : l.status.nextGrantId,
      grants: l.status.grants.map(item => item.id === s ? {
        ...item,
        resetsLeft: 0,
        usableNow: !1
      } : item)
    }
  });
}
function Er(a) {
  if (a.sessionSwitchSubscribed) return;
  a.sessionSwitchSubscribed = !0, Qd((s, l) => {
    if (Jze(l)) a.continuableWallResetsAt = null;
  });
}
function wr() {
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
    changed: Me(),
    events: Me()
  };
}
var Cr = new q(wr);
function Y() {
  return Cr.of(j().host);
}
function cP() {
  return Y().state;
}
function re(a) {
  let s = Y();
  s.state = a, s.changed.emit();
}
function _ue(a) {
  return Y().changed.subscribe(a);
}
function Q7n(a) {
  return Y().events.subscribe(a);
}
var program_2 = "juniper_tide",
  timeout_2 = 25000,
  vr = f(() => u({
    surface: z(["claude_ai", "claude_code_cli", "unknown"]).catch("unknown"),
    tier: z(["claude_pro", "claude_max_5x", "claude_max_20x", "unknown"]).catch("unknown"),
    tenure_bucket: z(["under_14", "14-29", "30-89", "90-364", "365+", "unknown"]).catch("unknown"),
    billing_path: z(["stripe", "apple", "google_play", "other", "unknown"]).catch("unknown"),
    billing_period: z(["monthly", "annual", "unknown"]).catch("unknown"),
    extra_usage_state: z(["not_configured", "disabled", "enabled", "unknown"]).catch("unknown")
  })),
  xr = f(() => u({
    eligible: M(),
    ineligible_reason: z(["tier", "tenure", "surface", "mobile", "cli_version", "not_at_wall", "weekly_limit", "no_weekly_limit", "other_experiment", "extra_usage", "unavailable", "unknown"]).catch("unknown").nullable().optional(),
    in_experiment: M().optional(),
    arm: z(["control", "reset"]).nullable().optional().catch(null),
    available: M().optional(),
    next_available_at: o().nullable().optional().catch(null),
    weekly_resets_at: o().nullable().optional().catch(null),
    resets_per_week: E().optional().catch(void 0),
    event_props: vr().nullable().optional().catch(null)
  })),
  Rr = f(() => u({
    result: z(["reset", "already_used", "not_limited", "ineligible", "unavailable"]).catch("unavailable"),
    next_available_at: o().nullable().optional().catch(null),
    weekly_resets_at: o().nullable().optional().catch(null)
  }));
function kr(a) {
  if (a === void 0 || a === null) return null;
  let s = xr().safeParse(a);
  if (!s.success) return t(`[juniper-tide] ignoring a malformed status block: ${s.error.message}`), null;
  let l = s.data,
    event_props_2 = l.event_props;
  return {
    eligible: l.eligible,
    ineligibleReason: l.ineligible_reason ?? null,
    inExperiment: l.in_experiment ?? !1,
    arm: l.arm ?? null,
    available: l.available ?? !1,
    nextAvailableAt: l.next_available_at ?? null,
    weeklyResetsAt: l.weekly_resets_at ?? null,
    resetsPerWeek: l.resets_per_week ?? 1,
    eventProps: event_props_2 ? {
      surface: event_props_2.surface,
      tier: event_props_2.tier,
      tenureBucket: event_props_2.tenure_bucket,
      billingPath: event_props_2.billing_path,
      billingPeriod: event_props_2.billing_period,
      extraUsageState: event_props_2.extra_usage_state
    } : null
  };
}
async function rn(a) {
  try {
    if (!Ap()) return {
      kind: "no_profile_scope"
    };
    let s = await nI(a, {
      read: "at_wall"
    });
    if (!xit(s)) return t("[juniper-tide] status fetch returned a fieldless or non-object body (in-band error)", {
      level: "warn"
    }), {
      kind: "failed"
    };
    return {
      kind: "answered",
      status: kr(s?.juniper_tide)
    };
  } catch (error) {
    if (t(`[juniper-tide] status fetch failed: ${te(error).message}`, {
      level: "warn"
    }), fu(error) && (error.response?.status === 401 || error.response?.status === 403)) return {
      kind: "answered",
      status: null
    };
    return {
      kind: "failed"
    };
  }
}
async function an(credentials_3) {
  let s = An()?.organizationUuid;
  if (!s) return t("[juniper-tide] no OAuth organization; cannot claim"), {
    result: "auth_error",
    nextAvailableAt: null
  };
  try {
    let l = await vy(() => Dt.post(`/api/organizations/${s}/reset_rate_limits`, {
      program: program_2
    }, {
      auth: "async",
      headers: {
        "Content-Type": "application/json"
      },
      timeout: timeout_2,
      refreshOAuth: !0,
      credentials: credentials_3
    }), {
      credentials: credentials_3
    });
    if (!l.ok) return t(`[juniper-tide] claim not sent: ${l.reason === "no-auth" ? l.detail : l.reason}`, {
      level: "warn"
    }), {
      result: l.reason === "no-auth" ? "auth_error" : "error",
      nextAvailableAt: null
    };
    let m = Rr().safeParse(l.data);
    if (!m.success) return t(`[juniper-tide] unreadable claim response: ${m.error.message}`, {
      level: "error"
    }), d(Error("[juniper-tide] unreadable claim response")), {
      result: "error",
      nextAvailableAt: null
    };
    return {
      result: m.data.result,
      nextAvailableAt: m.data.next_available_at ?? null
    };
  } catch (error) {
    if (Zd(error)) t(`[juniper-tide] claim failed: ${te(error).message}`, {
      level: "warn"
    });else d(te(error));
    if (fu(error)) switch (error.response?.status) {
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
var Lr = 3,
  Sr = 12000,
  Ir = 35000;
function tt(a, s) {
  return s.resetsAt === a.wallResetsAt && a.accountEpoch === MA();
}
function Ue(a) {
  let s = cP();
  return s.phase === "answered" && tt(s, a) ? s.status : void 0;
}
function Ze(a) {
  let s = cP();
  return s.phase === "failed" && tt(s, a);
}
function V2(a, s = Date.now()) {
  let l = Ue(a);
  return r7(a) && l !== void 0 && l !== null && l.arm === "reset" && l.available && a.resetsAt !== void 0 && a.resetsAt * 1000 > s && !WL() && pme();
}
function Cbe(a, s = Date.now()) {
  let l = Ue(a);
  if (!r7(a) || l === void 0 || l === null || l.arm !== "reset" || l.available || l.nextAvailableAt === null || a.resetsAt === void 0 || a.resetsAt * 1000 <= s || !pme()) return;
  return sFn(UZ().spentLine, et(l.nextAvailableAt));
}
function et(a) {
  if (a === null) return;
  let s = Date.parse(a);
  return Number.isFinite(s) ? ud(Math.floor(s / 1000), !1, !0, !0) : void 0;
}
function z5r(a, s) {
  if (!pme() || !r7(a)) return;
  let l = Y();
  Dr(l), l.continuableWallResetsAt = a.resetsAt ?? null, Oe(a, s, "wall");
}
function Oe(a, s, l) {
  if (!pme() || !r7(a)) return Promise.resolve();
  let m = a.resetsAt;
  if (m === void 0) return Promise.resolve();
  let b = Y(),
    accountEpoch = MA(),
    state_2 = b.state,
    failures_3 = 0;
  if (state_2.phase !== "idle" && tt(state_2, a)) switch (state_2.phase) {
    case "answered":
      return Promise.resolve();
    case "asking":
      return b.pendingAsk ?? Promise.resolve();
    case "failed":
      if (l === "wall" && state_2.failures >= Lr) return Promise.resolve();
      failures_3 = state_2.failures;
  }
  re({
    phase: "asking",
    wallResetsAt: m,
    accountEpoch: accountEpoch
  });
  let autoArmed_2 = bG(),
    v = nt(rn(s), Sr).then(k => {
      on({
        wallResetsAt: m,
        accountEpoch: accountEpoch,
        failures: failures_3,
        result: k ?? {
          kind: "failed"
        },
        autoArmed: autoArmed_2
      });
    }).catch(k => {
      d(te(k));
      try {
        on({
          wallResetsAt: m,
          accountEpoch: accountEpoch,
          failures: failures_3,
          result: {
            kind: "failed"
          },
          autoArmed: autoArmed_2
        });
      } catch (error) {
        d(te(error));
      }
    }).finally(() => {
      if (b.pendingAsk === v) b.pendingAsk = null;
    });
  return b.pendingAsk = v, v;
}
function on({
  wallResetsAt: wallResetsAt,
  accountEpoch: accountEpoch_2,
  failures: failures_4,
  result: result_2,
  autoArmed: b
}) {
  let y = cP();
  if (y.phase !== "asking" || y.wallResetsAt !== wallResetsAt || y.accountEpoch !== accountEpoch_2) return;
  let status_2 = result_2.kind === "answered" ? result_2.status : null;
  if (result_2.kind === "failed") re({
    phase: "failed",
    wallResetsAt: wallResetsAt,
    accountEpoch: accountEpoch_2,
    failures: failures_4 + 1
  });else re({
    phase: "answered",
    wallResetsAt: wallResetsAt,
    accountEpoch: accountEpoch_2,
    status: status_2
  });
  if (i("tengu_juniper_tide_asked", {
    outcome: c(result_2.kind === "answered" ? status_2 === null ? "absent" : "block" : result_2.kind),
    attempt: failures_4 + 1,
    eligible: status_2?.eligible ?? !1,
    ineligible_reason: ue(status_2?.ineligibleReason) ?? void 0,
    config_version: gen()
  }), status_2 === null || !status_2.eligible) return;
  i("tengu_juniper_tide_wall", {
    in_experiment: status_2.inExperiment,
    arm: ue(status_2.arm) ?? void 0,
    available: status_2.available,
    tier: c(E7e()),
    auto_armed: b,
    low_priority_active: WL(),
    config_version: gen(),
    surface: ue(status_2.eventProps?.surface) ?? void 0,
    server_tier: ue(status_2.eventProps?.tier) ?? void 0,
    tenure_bucket: ue(status_2.eventProps?.tenureBucket) ?? void 0,
    billing_path: ue(status_2.eventProps?.billingPath) ?? void 0,
    billing_period: ue(status_2.eventProps?.billingPeriod) ?? void 0,
    extra_usage_state: ue(status_2.eventProps?.extraUsageState) ?? void 0
  });
}
function hyt(a, s) {
  let l = a.resetsAt ?? null,
    m = Y();
  if (l === null || m.shownWallResetsAt === l) return;
  m.shownWallResetsAt = l;
  let b = Ue(a);
  i("tengu_juniper_tide_shown", {
    arm: ue(b?.arm) ?? void 0,
    surface: c(s),
    config_version: gen()
  });
}
function Z7n(a, s) {
  if (Ze(a)) Oe(a, s, "dialog");
}
async function J1e(a, s) {
  try {
    return await Or(a, s);
  } catch (error) {
    return d(te(error)), {
      outcome: "unavailable",
      text: UZ().unavailableLine
    };
  }
}
async function Or(a, s) {
  let l = Y(),
    m = UZ();
  if (Ue(ma()) === void 0) {
    let v = l.pendingAsk !== null;
    if (await Oe(ma(), s, a), v && Ze(ma())) await Oe(ma(), s, a);
  }
  let b = ma();
  if (!V2(b) || b.resetsAt === void 0) {
    let text_12 = Cbe(b);
    if (text_12 !== void 0) return {
      outcome: "spent",
      text: text_12
    };
    return Ze(b) ? {
      outcome: "unavailable",
      text: m.unavailableLine
    } : {
      outcome: "not_offered",
      text: text_13
    };
  }
  if (l.claiming) return {
    outcome: "unavailable",
    text: text_14
  };
  let resetsAt = b.resetsAt,
    config_version_4 = gen();
  i("tengu_juniper_tide_selected", {
    entry: c(a),
    auto_armed: bG(),
    config_version: config_version_4
  });
  let A = Date.now(),
    T;
  l.claiming = !0;
  try {
    T = (await nt(an(s), Ir)) ?? {
      result: "error",
      nextAvailableAt: null
    };
  } finally {
    l.claiming = !1;
  }
  switch (i("tengu_juniper_tide_result", {
    result: c(T.result),
    entry: c(a),
    latency_ms: Date.now() - A,
    config_version: config_version_4
  }), T.result) {
    case "reset":
    case "not_limited":
    case "already_used":
    case "ineligible":
      _("juniper_tide");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      p("juniper_tide", T.result);
      break;
  }
  switch (T.result) {
    case "reset":
    case "not_limited":
      {
        l.unsettledClaimWallResetsAt = null;
        let v = yho() && l.continuableWallResetsAt === resetsAt;
        l.continuableWallResetsAt = null, Nr(l, resetsAt, a, v);
        let k = sFn(m.successLine, T.result === "reset" ? et(T.nextAvailableAt) : void 0);
        return {
          outcome: "reset",
          text: v ? k : `${k} \xB7 send a message to continue`
        };
      }
    case "already_used":
      {
        if (Wr(resetsAt, T.nextAvailableAt), l.unsettledClaimWallResetsAt === resetsAt) l.unsettledClaimWallResetsAt = null, zr(s);
        return {
          outcome: "spent",
          text: sFn(m.spentLine, et(T.nextAvailableAt))
        };
      }
    case "ineligible":
      return Fr(resetsAt), {
        outcome: "not_offered",
        text: text_13
      };
    case "auth_error":
      return {
        outcome: "unavailable",
        text: text_15
      };
    case "unavailable":
    case "rate_limited":
    case "error":
      if (T.result === "error") l.unsettledClaimWallResetsAt = resetsAt;
      return {
        outcome: "unavailable",
        text: m.unavailableLine
      };
  }
}
var text_13 = "A session-limit reset isn't available right now.",
  text_14 = "Your session limit is already being reset \xB7 one moment",
  text_15 = "Couldn't reset your session limit with this login \xB7 run /login, then try again";
function Nr(a, s, entry_2, m) {
  let b = [() => _M("juniper_tide"), () => {
    GO("reset");
  }, () => Mr(s), () => {
    let y = cP();
    if (y.phase !== "idle" && y.wallResetsAt === s) re({
      phase: "idle"
    });
  }, () => {
    if (m) DWe();
  }, () => a.events.emit({
    type: "reset",
    entry: entry_2
  })];
  for (let y of b) try {
    y();
  } catch (error) {
    d(te(error));
  }
}
function Mr(a) {
  let s = ma();
  if (s.status !== "rejected" || s.rateLimitType !== "five_hour" || s.resetsAt !== a) return;
  wfe({
    ...s,
    status: "allowed",
    rateLimitType: void 0,
    resetsAt: void 0
  });
}
function zr(a) {
  if (bG()) {
    zOe();
    return;
  }
  xnt(a, void 0).catch(s => {
    d(te(s));
  });
}
function Wr(a, s) {
  let l = cP();
  if (l.phase !== "answered" || l.wallResetsAt !== a || l.status === null) return;
  re({
    ...l,
    status: {
      ...l.status,
      available: !1,
      nextAvailableAt: s ?? l.status.nextAvailableAt
    }
  });
}
function Fr(a) {
  let s = cP();
  if (s.phase !== "answered" || s.wallResetsAt !== a || s.status === null) return;
  re({
    ...s,
    status: {
      ...s.status,
      eligible: !1,
      available: !1
    }
  });
}
function Dr(a) {
  if (a.sessionSwitchSubscribed) return;
  a.sessionSwitchSubscribed = !0, Qd((s, l) => {
    if (Jze(l)) a.continuableWallResetsAt = null;
  });
}
var Y2t = "session running",
  yyt = "session waiting for a prompt",
  state_4 = "session waiting",
  pe = " \xB7 ",
  Gr = /^[0-9a-f]{8}$/,
  ln = 20;
function eZn(a) {
  let s = a.split(Jk).map(item => item.trim()).filter(Boolean);
  if (s.length === 0) return;
  let [l, ...m] = s;
  return m.length === 0 ? l : `${l} ${Jk} ${m.join(pe)}`;
}
function X2t(a) {
  if (!a.startsWith(Y2t) && !a.startsWith(yyt)) return null;
  if (a.includes(`
`)) return null;
  let s = a.split(pe),
    state_3 = s[0];
  if (state_3 !== Y2t && state_3 !== yyt) return null;
  let m = s.findLastIndex(v => Gr.test(v)),
    id = m === -1 ? void 0 : s[m],
    y = m === -1 ? s.length : m,
    h = s.slice(1, y),
    name = h.length > 0 ? h.join(pe) : void 0,
    chips = m === -1 ? [] : s.slice(m + 1);
  return {
    state: state_3,
    name: name,
    id: id,
    chips: chips
  };
}
function tZn(a, s, l = !0) {
  let m = y => ie(lwn(y)),
    b = {
      ...a,
      chips: [...a.chips]
    };
  if (m(b) <= s) return b;
  if (b.state === yyt) {
    if (b = {
      ...b,
      state: state_4
    }, m(b) <= s) return b;
  }
  if (b.id !== void 0 && b.name !== void 0 && l) {
    if (b = {
      ...b,
      id: void 0
    }, m(b) <= s) return b;
  }
  if (b.name !== void 0) {
    let y = m({
        ...b,
        name: void 0
      }),
      h = s - y - ie(pe),
      A = ie(b.name),
      T = A > ln ? Math.max(h, ln) : h;
    if (T >= 1 && T < A) b = {
      ...b,
      name: ot(b.name, T)
    };
  }
  return b;
}
function lwn(a) {
  return [a.state, ...(a.name ? [a.name] : []), ...(a.id ? [a.id] : []), ...a.chips].join(pe);
}
export { Wre, wJe, $C, cE, myt, G2t, q7n, rU, own, swn, iwn, HK, V2t, q2t, X1e, awn, lP, hue, K7n, yue, Y7n, zre, jPe, Gre, j5r, FK, W5r, gyt, K2t, vJe, X7n, J7n, text as Tbe, WPe, cP, _ue, Q7n, V2, Cbe, z5r, hyt, Z7n, J1e, Y2t, yyt, eZn, X2t, tZn, lwn };