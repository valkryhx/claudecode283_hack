// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { F, Im } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Te, us } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { yf, _f } from "B:/~BUN/root/chunk-65j2302z.js";
import { _e } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { rc } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { La, Rt, fp, hn, vE, jt, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { emt } from "B:/~BUN/root/chunk-yhafkw66.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { Q9t, uIt, Pso, Z9t, eXt, S9e, aL, fg } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { JC } from "B:/~BUN/root/chunk-27h4st9h.js";
import { $he, COe } from "B:/~BUN/root/chunk-stjhzzm3.js";
import { o, E, I, oe, C, u, me, B } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var G = "starry_waterfall",
  z = ["org_not_eligible", "no_program_running", "holdout", "mobile", "surface", "cli_version", "app_version", "auto_reload", "auto_reload_unknown", "segment_unknown", "not_assigned", "arm_unknown", "unavailable", "unknown"],
  q = ["cli_menu", "cli_credits_required", "ide_banner", "alert_band", "overage_band", "code_usage_band", "credits_required", "code_credits_required", "unknown"],
  R = p(() => o().regex(/^[A-Za-z0-9_-]{1,64}$/).nullable().optional().catch(null)),
  Q = p(() => u({
    offer_eligible: I().nullable().optional().catch(null),
    offer_reason: B(z).catch("unknown").nullable().optional(),
    offer_arm: R(),
    offer_kind: B(["none", "pct_off", "extra_credit", "unknown"]).catch("unknown").nullable().optional(),
    offer_menu: B(["base", "plus40", "unknown"]).catch("unknown").nullable().optional(),
    offer_segment: B(["never", "lapsed", "recent", "unknown"]).catch("unknown").nullable().optional(),
    offer_days_left: E().int().nullable().optional().catch(null),
    offer_surface: B(q).catch("unknown").nullable().optional()
  })),
  V = p(() => u({
    eligible: I(),
    ineligible_reason: B(z).catch("unknown").nullable().optional(),
    active: I().optional().catch(!1),
    arm_id: R(),
    kind: B(["none", "pct_off", "extra_credit"]).nullable().optional().catch(null),
    headline_pct: E().int().min(0).max(300).optional().catch(0),
    menu: B(["base", "plus40", "unknown"]).catch("unknown").nullable().optional(),
    default_bundle_id: R(),
    segment: B(["never", "lapsed", "recent", "unknown"]).catch("unknown").nullable().optional(),
    first_offered_at: o().nullable().optional().catch(null),
    expires_at: o().nullable().optional().catch(null),
    days_left: E().int().min(0).nullable().optional().catch(null),
    redeemed: I().optional().catch(!1),
    event_props: Q().nullable().optional().catch(null)
  }));
function Y(e) {
  if (e === void 0 || e === null) return null;
  let n = V().safeParse(e);
  if (!n.success) return t(`[usage-credit-offer] ignoring a malformed status block: ${n.error.message}`), null;
  let r = n.data,
    kind = r.kind ?? null,
    event_props = r.event_props;
  return {
    eligible: r.eligible,
    ineligibleReason: r.ineligible_reason ?? null,
    active: (r.active ?? !1) && kind !== null,
    armId: r.arm_id ?? null,
    kind: kind,
    headlinePct: r.headline_pct ?? 0,
    menu: r.menu ?? null,
    defaultBundleId: r.default_bundle_id ?? null,
    segment: r.segment ?? null,
    firstOfferedAt: r.first_offered_at ?? null,
    expiresAt: r.expires_at ?? null,
    daysLeft: r.days_left ?? null,
    redeemed: r.redeemed ?? !1,
    eventProps: event_props ? {
      offerEligible: event_props.offer_eligible ?? null,
      offerReason: event_props.offer_reason ?? null,
      offerArm: event_props.offer_arm ?? null,
      offerKind: event_props.offer_kind ?? null,
      offerMenu: event_props.offer_menu ?? null,
      offerSegment: event_props.offer_segment ?? null,
      offerDaysLeft: event_props.offer_days_left ?? null,
      offerSurface: event_props.offer_surface ?? null
    } : null
  };
}
function L(e) {
  return e !== void 0 && e !== null && e.active && !e.redeemed && (e.kind === "pct_off" || e.kind === "extra_credit") && e.headlinePct > 0 && e.daysLeft !== null && e.daysLeft > 0;
}
async function P(e, surface) {
  try {
    if (!fp()) return {
      kind: "no_profile_scope"
    };
    let r = await aL(e, {
      read: "starry_waterfall",
      surface: surface
    });
    if (!S9e(r)) return t("[usage-credit-offer] status fetch returned a fieldless or non-object body (in-band error)", {
      level: "warn"
    }), {
      kind: "failed"
    };
    return {
      kind: "answered",
      status: Y(r?.[G])
    };
  } catch (error) {
    if (t(`[usage-credit-offer] status fetch failed: ${F(error).message}`, {
      level: "warn"
    }), Q9t(error)) return {
      kind: "answered",
      status: null,
      notAuthorized: !0
    };
    return {
      kind: "failed"
    };
  }
}
function Z() {
  return {
    state: {
      phase: "idle"
    },
    shown: new Set(),
    pendingAsk: null,
    changed: De()
  };
}
var X = new W(Z);
function h() {
  return X.of(H().host);
}
function lYe() {
  return h().state;
}
function g(e) {
  let n = h();
  n.state = e, n.changed.emit();
}
function ole(e) {
  return h().changed.subscribe(e);
}
var M = 3,
  J = 12000,
  ee = 600000,
  ne = "credits_required";
function O(e) {
  return JC(e) && e.rateLimitType !== void 0 ? `${e.rateLimitType}:${e.resetsAt}` : null;
}
function D(key) {
  return {
    key: key,
    accountEpoch: fg()
  };
}
function v(e, n) {
  return e.key === n.key && e.accountEpoch === n.accountEpoch;
}
function te() {
  return Rt() && hn()?.billingType !== "usage_based" && us();
}
function U() {
  let e = lYe();
  if (e.phase === "idle" || e.wall.accountEpoch !== fg()) return;
  switch (e.phase) {
    case "answered":
      return e.status;
    case "asking":
      return e.standing;
    case "failed":
      return;
  }
}
function k() {
  let e = U();
  return L(e) && uIt() ? e : void 0;
}
function Aot() {
  let e = k();
  if (e === void 0) return;
  let n = Z9t();
  return eXt(e.kind === "pct_off" ? n.menuSuffixPctOff : n.menuSuffixExtraCredit, {
    pct: e.headlinePct,
    daysLeft: e.daysLeft
  });
}
function yFo() {
  let e = k();
  if (e === void 0) return;
  let n = Z9t();
  return eXt(e.kind === "pct_off" ? n.hintPctOff : n.hintExtraCredit, {
    pct: e.headlinePct,
    daysLeft: e.daysLeft
  });
}
function re() {
  let e = k();
  if (e === void 0) return;
  let n = Z9t();
  return eXt(e.kind === "pct_off" ? n.bannerPillPctOff : n.bannerPillExtraCredit, {
    pct: e.headlinePct,
    daysLeft: e.daysLeft
  });
}
function _Fo() {
  let e = k(),
    label = re();
  if (e === void 0 || label === void 0) return;
  return {
    kind: e.kind,
    headlinePct: e.headlinePct,
    daysLeft: e.daysLeft,
    label: label
  };
}
function xot() {
  let e = U();
  if (e === void 0 || e === null) return {};
  let eventProps = e.eventProps;
  return {
    offer_eligible: eventProps?.offerEligible ?? e.eligible,
    offer_reason: de(eventProps?.offerReason ?? e.ineligibleReason) ?? void 0,
    offer_arm: _e(eventProps?.offerArm ?? e.armId),
    offer_kind: de(eventProps?.offerKind ?? e.kind) ?? void 0,
    offer_menu: de(eventProps?.offerMenu ?? e.menu) ?? void 0,
    offer_segment: de(eventProps?.offerSegment ?? e.segment) ?? void 0,
    offer_days_left: eventProps?.offerDaysLeft ?? e.daysLeft ?? void 0,
    offer_active: e.active,
    offer_redeemed: e.redeemed,
    offer_surface: de(eventProps?.offerSurface) ?? void 0
  };
}
function W5s(e, n) {
  let r = O(e);
  if (!uIt() || !$he() || r === null) return;
  S(r, "cli_menu", n);
}
function z5s(e) {
  if (!uIt() || !$he()) return;
  S(ne, "cli_credits_required", e);
}
function G5s(e) {
  let n = O(e);
  if (!uIt() || !_f() || !te() || n === null) return;
  S(n, "ide_banner", void 0);
}
function bFo(e, n) {
  let r = O(e);
  if (!uIt() || !$he() || r === null) return !1;
  let i = lYe();
  if (i.phase === "failed" && v(i.wall, D(r)) && i.failures < M) return S(r, "cli_menu", n), !0;
  return !1;
}
function S(e, surface_2, r, i = Date.now()) {
  let wall = D(e),
    d = h(),
    state = d.state,
    failures = 0;
  if (state.phase !== "idle" && v(state.wall, wall)) switch (state.phase) {
    case "answered":
      if (i - state.answeredAt < ee) return Promise.resolve();
      break;
    case "asking":
      return d.pendingAsk ?? Promise.resolve();
    case "failed":
      if (state.failures >= M) return Promise.resolve();
      failures = state.failures;
  } else if (state.phase === "asking") {
    if (state.wall.accountEpoch === wall.accountEpoch) return d.pendingAsk ?? Promise.resolve();
  }
  g({
    phase: "asking",
    wall: wall,
    standing: U()
  });
  let b = we(P(r, surface_2), J).then(y => {
    T({
      wall: wall,
      surface: surface_2,
      failures: failures,
      result: y ?? {
        kind: "failed"
      }
    });
  }).catch(y => {
    a(F(y));
    try {
      T({
        wall: wall,
        surface: surface_2,
        failures: failures,
        result: {
          kind: "failed"
        }
      });
    } catch (error) {
      a(F(error));
    }
  }).finally(() => {
    if (d.pendingAsk === b) d.pendingAsk = null;
  });
  return d.pendingAsk = b, b;
}
function T({
  wall: wall_2,
  surface: surface_3,
  failures: failures_2,
  result: result
}) {
  let s = lYe();
  if (s.phase !== "asking" || !v(s.wall, wall_2)) return;
  let status = result.kind === "answered" ? result.status : null;
  if (result.kind === "failed") {
    let c = s.standing;
    if (c !== void 0) g({
      phase: "answered",
      wall: wall_2,
      status: c,
      answeredAt: Date.now()
    });else g({
      phase: "failed",
      wall: wall_2,
      failures: failures_2 + 1
    });
  } else g({
    phase: "answered",
    wall: wall_2,
    status: status,
    answeredAt: Date.now()
  });
  if (l("tengu_starry_waterfall_asked", {
    outcome: f(result.kind === "answered" ? status === null ? result.notAuthorized ? "not_authorized" : "absent" : "block" : result.kind),
    attempt: failures_2 + 1,
    surface: f(surface_3),
    eligible: status?.eligible ?? !1,
    ineligible_reason: de(status?.ineligibleReason) ?? void 0,
    config_version: Pso()
  }), status === null || !status.eligible) return;
  l("tengu_starry_waterfall_wall", {
    ...xot(),
    surface: f(surface_3),
    tier: f(COe()),
    config_version: Pso()
  });
}
function Qme(e, n = {}) {
  let r = h(),
    state_2 = r.state,
    d = `${state_2.phase === "idle" ? "none" : state_2.wall.key}:${e}`;
  if (r.shown.has(d)) return;
  r.shown.add(d), l("tengu_starry_waterfall_shown", {
    ...xot(),
    ...n,
    surface: f(e),
    config_version: Pso()
  });
}
function SFo({
  usedOffer: usedOffer
}) {
  let n = lYe(),
    r = i => usedOffer && i.active ? {
      ...i,
      active: !1,
      redeemed: !0
    } : i;
  if (n.phase === "answered" && n.status !== null) g({
    ...n,
    answeredAt: 0,
    status: r(n.status)
  });else if (n.phase === "asking" && n.standing) g({
    ...n,
    standing: r(n.standing)
  });
}
var _vt = "allow_promo_offers";
function bvt() {
  return !emt() && Te() === "firstParty" && Rt() && gn(_vt);
}
var program = "cedar_ember",
  timeout = 25000,
  x = /^[a-z0-9_-]{1,40}$/,
  le = /^[A-Za-z0-9_-]{1,64}$/,
  Gjr = ["five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet", "seven_day_cowork", "seven_day_omelette", "seven_day_oauth_apps"],
  N = ["config_off", "tier", "seat", "mobile", "surface", "cli_version", "no_grant", "tenure", "other_experiment", "unavailable", "unknown"],
  se = ["cooldown", "blocked_five_hour", "blocked_seven_day", "blocked_opus", "blocked_sonnet", "blocked_other", "cannot_clear", "needs_limit", "unavailable"],
  ue = [...N, "paused", "expired", "unknown_grant", "not_next_grant", "grant_id_required", "not_limited", "already_used", "cooldown", "stamp_indeterminate", "reset_unconfirmed"],
  ce = p(() => u({
    surface: B(["claude_ai", "claude_code_cli", "unknown"]).catch("unknown"),
    tier: B(["claude_pro", "claude_max_5x", "claude_max_20x", "claude_team", "unknown"]).catch("unknown"),
    tenure_bucket: B(["under_14", "14-29", "30-89", "90-364", "365+", "unknown"]).catch("unknown"),
    billing_path: B(["stripe", "apple", "google_play", "other", "unknown"]).catch("unknown"),
    billing_period: B(["monthly", "annual", "unknown"]).catch("unknown"),
    extra_usage_state: B(["not_configured", "disabled", "enabled", "unknown"]).catch("unknown")
  })),
  w = p(() => C(oe()).catch([]).transform(e => e.filter(item => Gjr.some(r => r === item)))),
  pe = p(() => u({
    id: o().regex(x),
    label: o().catch(""),
    resets_total: E().int().min(0).catch(0),
    resets_left: E().int().min(0),
    starts_at: o().nullable().optional().catch(null),
    ends_at: o().nullable().optional().catch(null),
    clears: w(),
    paused: I().catch(!1),
    usable_now: I().catch(!1),
    use_requires_limit: I().catch(!0),
    percent_used: me(o(), oe()).catch({}),
    blocking: w(),
    type: B(["session", "weekly", "full"]).optional().catch(void 0),
    gives_back_weekly: I().catch(!1),
    unavailable_reason: B(se).nullable().optional().catch(null)
  }));
function ge(e) {
  let n = {};
  for (let r of Gjr) {
    let i = e[r];
    if (typeof i === "number" && Number.isInteger(i) && i >= 0 && i <= 100) n[r] = i;
  }
  return n;
}
var be = p(() => u({
    eligible: I(),
    ineligible_reason: B(N).catch("unknown").nullable().optional(),
    at_limit: I().optional().catch(void 0),
    exhausted: w().optional(),
    grants: C(oe()).optional().catch(void 0),
    next_grant_id: o().regex(x).nullable().optional().catch(null),
    weekly_resets_at: o().nullable().optional().catch(null),
    cooldown_until: o().nullable().optional().catch(null),
    event_props: ce().nullable().optional().catch(null)
  })),
  he = p(() => u({
    result: B(["reset", "already_used", "not_limited", "cooldown", "ineligible", "unavailable"]).catch("unavailable"),
    reason: B(ue).catch("unknown").nullable().optional(),
    resets_left: E().int().min(0).nullable().optional().catch(null),
    cleared: w().optional(),
    weekly_resets_at: o().nullable().optional().catch(null),
    cooldown_until: o().nullable().optional().catch(null)
  }));
function Ce(e) {
  let n = pe().safeParse(e);
  if (!n.success) return t(`[cedar-ember] ignoring a malformed grant: ${n.error.message}`), null;
  let r = n.data;
  return {
    id: r.id,
    label: r.label,
    resetsTotal: r.resets_total,
    resetsLeft: r.resets_left,
    startsAt: r.starts_at ?? null,
    endsAt: r.ends_at ?? null,
    clears: r.clears,
    paused: r.paused,
    usableNow: r.usable_now,
    useRequiresLimit: r.use_requires_limit,
    percentUsed: ge(r.percent_used),
    blocking: r.blocking,
    type: r.type ?? null,
    givesBackWeekly: r.gives_back_weekly,
    unavailableReason: r.unavailable_reason ?? null
  };
}
function ye(e) {
  if (e === void 0 || e === null) return null;
  let n = be().safeParse(e);
  if (!n.success) return t(`[cedar-ember] ignoring a malformed status block: ${n.error.message}`), null;
  let r = n.data,
    grants = (r.grants ?? []).map(Ce).filter(item => item !== null),
    nextGrantId = r.next_grant_id !== void 0 && r.next_grant_id !== null && grants.some(item => item.id === r.next_grant_id) ? r.next_grant_id : null,
    event_props_2 = r.event_props;
  return {
    eligible: r.eligible,
    ineligibleReason: r.ineligible_reason ?? null,
    atLimit: r.at_limit ?? !1,
    exhausted: r.exhausted ?? [],
    grants: grants,
    nextGrantId: nextGrantId,
    weeklyResetsAt: r.weekly_resets_at ?? null,
    cooldownUntil: r.cooldown_until ?? null,
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
function Vjr(e, n) {
  if (e === void 0 || e === null || !e.eligible) return;
  let r = e.grants.filter(item => item.resetsLeft > 0 && !item.paused).map(item => pGt(item.endsAt) ?? 1 / 0).filter(item => item > n);
  return r.length === 0 ? void 0 : Math.max(...r);
}
async function _3n(e, {
  read = "at_wall",
  surface: surface_4
} = {}) {
  try {
    if (!fp()) return {
      kind: "no_profile_scope"
    };
    let i = await aL(e, read === "at_wall" ? {
      read: read,
      surface: surface_4
    } : {
      read: read
    });
    if (!S9e(i)) return t("[cedar-ember] status fetch returned a fieldless or non-object body (in-band error)", {
      level: "warn"
    }), {
      kind: "failed"
    };
    return {
      kind: "answered",
      status: ye(i?.cedar_ember)
    };
  } catch (error) {
    if (t(`[cedar-ember] status fetch failed: ${F(error).message}`, {
      level: "warn"
    }), Q9t(error)) return {
      kind: "not_authorized"
    };
    return {
      kind: "failed"
    };
  }
}
var _ = {
  reason: null,
  resetsLeft: null,
  cleared: [],
  weeklyResetsAt: null
};
async function mFo(credentials, grant_id, request_id) {
  let i = hn()?.organizationUuid;
  if (!i) return t("[cedar-ember] no OAuth organization; cannot claim"), {
    result: "auth_error",
    ..._
  };
  if (!x.test(grant_id) || !le.test(request_id)) return a(Error("[cedar-ember] refusing to claim with a malformed grant or request id")), {
    result: "error",
    ..._
  };
  try {
    let s = await vE(() => jt.post(`/api/organizations/${i}/reset_rate_limits`, {
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
      credentials: credentials
    }), {
      credentials: credentials
    });
    if (!s.ok) return t(`[cedar-ember] claim not sent: ${s.reason === "no-auth" ? s.detail : s.reason}`, {
      level: "warn"
    }), {
      result: s.reason === "no-auth" ? "auth_error" : "error",
      ..._
    };
    let d = he().safeParse(s.data);
    if (!d.success) return t(`[cedar-ember] unreadable claim response: ${d.error.message}`, {
      level: "error"
    }), a(Error("[cedar-ember] unreadable claim response")), {
      result: "error",
      ..._
    };
    return {
      result: d.data.result,
      reason: d.data.reason ?? null,
      resetsLeft: d.data.resets_left ?? null,
      cleared: d.data.cleared ?? [],
      weeklyResetsAt: d.data.weekly_resets_at ?? null
    };
  } catch (error) {
    if (Im(error)) t(`[cedar-ember] claim failed: ${F(error).message}`, {
      level: "warn"
    });else a(F(error));
    if (rc(error)) switch (error.response?.status) {
      case 429:
        return {
          result: "rate_limited",
          ..._
        };
      case 401:
      case 403:
        return {
          result: "auth_error",
          ..._
        };
      default:
        break;
    }
    return {
      result: "error",
      ..._
    };
  }
}
function pGt(e) {
  if (e === null) return;
  let n = Date.parse(e);
  return Number.isFinite(n) ? n : void 0;
}
function ke() {
  return {
    state: {
      phase: "idle"
    },
    shownOfferKey: null,
    wallRecordKey: null,
    pendingAsk: null,
    pendingUnusedResetRead: null,
    unusedResetAnsweredFor: null,
    unusedResetDrops: 0,
    claiming: !1,
    continuableWallResetsAt: null,
    unsettledClaimGrantId: null,
    unsettledClaimEpoch: null,
    unsettledClaimRequestId: null,
    unsettledClaimAtMs: null,
    wallSurface: null,
    sessionSwitchSubscribed: !1,
    changed: De(),
    events: De()
  };
}
var Se = new W(ke);
function uK() {
  return Se.of(H().host);
}
function L7() {
  return uK().state;
}
function mGt(e) {
  let n = uK();
  n.state = e, n.changed.emit();
}
function N7(e) {
  return uK().changed.subscribe(e);
}
function hFo(e) {
  return uK().events.subscribe(e);
}
var j = 259200000,
  Ee = 12000,
  Re = p(() => u({
    accountUuid: o().min(1),
    holdsUnusedReset: I(),
    checkedAt: E(),
    validUntil: E()
  }));
function B5s(e = Date.now()) {
  try {
    let n = hn()?.accountUuid,
      r = Re().safeParse(fe().unusedLimitResetStatusCache).data;
    return yf() === "cli" && !!n && r?.accountUuid === n && r.holdsUnusedReset && r.checkedAt <= e && e - r.checkedAt < j && e < r.validUntil && La().source === "claude.ai" && bvt();
  } catch (error) {
    return a(F(error)), !1;
  }
}
function j5s(e, n) {
  let r = uK();
  return r.pendingUnusedResetRead ??= Oe(e, n).catch(i => a(F(i))).finally(() => {
    r.pendingUnusedResetRead = null;
  }), r.pendingUnusedResetRead;
}
function gFo() {
  let e = uK();
  e.unusedResetAnsweredFor = null, e.unusedResetDrops++, Le(n => n.unusedLimitResetStatusCache === void 0 ? n : {
    ...n,
    unusedLimitResetStatusCache: void 0
  });
}
async function Oe(e, n) {
  let r = uK(),
    accountUuid = hn()?.accountUuid;
  if (!accountUuid) return;
  let s = `${fg()}:${accountUuid}`;
  if (r.unusedResetAnsweredFor === s || yf() !== "cli" || La().source !== "claude.ai" || !$he() || !bvt()) return;
  let unusedResetDrops = r.unusedResetDrops,
    c = await we(_3n(e, {
      read: "cedar_ember"
    }), Ee);
  if (hn()?.accountUuid !== accountUuid || r.unusedResetDrops !== unusedResetDrops || La().source !== "claude.ai" || !bvt()) return;
  switch (c?.kind) {
    case "not_authorized":
    case "no_profile_scope":
      r.unusedResetAnsweredFor = s;
      return;
    case "answered":
      break;
    case "failed":
    case void 0:
      return;
  }
  if (c.status?.ineligibleReason === "unavailable") return;
  r.unusedResetAnsweredFor = s;
  let checkedAt = Date.now(),
    b = Vjr(c.status, checkedAt);
  await Le(y => ({
    ...y,
    unusedLimitResetStatusCache: {
      accountUuid: accountUuid,
      holdsUnusedReset: b !== void 0,
      checkedAt: checkedAt,
      validUntil: Math.min(checkedAt + j, b ?? 1 / 0)
    }
  }), n);
}
var Pot = "tengu_wise_bear_copy";
function V5s(e) {
  switch (e) {
    case "five_hour":
      return "session";
    case "seven_day":
      return "weekly";
    case "seven_day_opus":
    case "seven_day_sonnet":
    case "seven_day_overage_included":
      return "model";
    default:
      return;
  }
}
function wFo(e) {
  return typeof e === "object" && e !== null && Reflect.get(e, "only_if_unused_reset") === !0;
}
function K5s(e, n, r, i) {
  if (typeof e !== "object" || e === null) return;
  if (wFo(e) && i !== !0) return;
  let s = Reflect.get(e, `note_${n}`);
  if (typeof s !== "string") return;
  let d = r(s);
  return d && !(d.endsWith("\u2026") && !s.trimEnd().endsWith("\u2026")) ? d : void 0;
}
export { _vt, bvt, Gjr, Vjr, _3n, mFo, pGt, uK, L7, mGt, N7, hFo, B5s, j5s, gFo, lYe, ole, Aot, yFo, _Fo, xot, W5s, z5s, G5s, bFo, Qme, SFo, Pot, V5s, wFo, K5s };