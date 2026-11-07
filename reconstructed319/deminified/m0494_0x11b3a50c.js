// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { LS, CL, w_e, Vfo, Mq, IZt, tmt, uUi, epo, tpo, Y0t, LZt, aCe, fUi, aLn, _bs, RL, yUi, Z$ } from "B:/~BUN/root/chunk-yhafkw66.js";
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H, rf, dKn, ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { It } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { MVe, t_t } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Yse, M3, NYi, uPs, FYi, JHt, UYi, BYi, fBn, $be, cC, QX, ZX, Cw, Vt, oT, nie, ul, Rt, fp, n1n, hn, wO, $Re, dr, Yk, vE, cc, RVe, BIr, mie, jt, Oh, ms, pn, v, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Djt } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c, ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { ln, fRo, yFs, _Fs, bFs, SFs, Wr } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { DSt, pxe } from "B:/~BUN/root/chunk-bkfncj77.js";
import { fqe, rc, Gln } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { lXi } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { ww, jF } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { Wze } from "B:/~BUN/root/chunk-m8dg5txf.js";
import { y_ } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { Sq } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { nu } from "B:/~BUN/root/chunk-vs3bcjd7.js";
import { s1, pA } from "B:/~BUN/root/chunk-p77fkpvc.js";
import { JT } from "B:/~BUN/root/chunk-yjr7e11x.js";
import { ge, Mn, ws, vr, Ft } from "B:/~BUN/root/chunk-b3kw6jpx.js";
import { o, C, u, Ep } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
function _e(e, i) {
  let n = Number(e.get(i) ?? 0);
  return Number.isFinite(n) ? Math.max(0, Math.min(1, n)) : 0;
}
function be(e, i, n) {
  let r = Number(e.get(i) ?? NaN);
  return Number.isFinite(r) && r * 1000 > n ? Math.round(r) : void 0;
}
function Xe(e, i) {
  if (e.get("anthropic-ratelimit-unified-status") === null) return {
    limiterRan: !1
  };
  let n = _e(e, "anthropic-ratelimit-unified-grace-5h-utilization"),
    r = _e(e, "anthropic-ratelimit-unified-grace-7d-utilization");
  if (n === 0 && r === 0) return {
    limiterRan: !0,
    zone: null
  };
  let s = be(e, "anthropic-ratelimit-unified-5h-reset", i),
    d = be(e, "anthropic-ratelimit-unified-7d-reset", i),
    m = n > 0 && s !== void 0 && (d === void 0 || s > d),
    rateLimitType = r > 0 && !m ? "seven_day" : "five_hour",
    _ = e.get(LZt),
    extraUsageStatus = _ === "allowed" || _ === "allowed_warning" ? _ : void 0;
  return {
    limiterRan: !0,
    zone: {
      rateLimitType: rateLimitType,
      resetsAt: rateLimitType === "seven_day" ? d : s,
      extraUsageStatus: extraUsageStatus
    },
    covered: extraUsageStatus !== void 0 || e.get(aLn) === "true"
  };
}
class J {
  zone = null;
  covered = !1;
  turnNote = "none";
  fenceMs = 0;
  getZone(e = Date.now()) {
    let zone = this.zone;
    return zone !== null && zone.resetsAt !== void 0 && e / 1000 >= zone.resetsAt ? null : zone;
  }
  applyResponse(e, i) {
    let n = Xe(e, i);
    if (!n.limiterRan || i < this.fenceMs) return;
    if (this.fenceMs = i, n.zone === null || n.zone.resetsAt !== void 0) this.dropEndedZone(i);
    if (this.zone = n.zone, this.covered = n.zone !== null && n.covered, n.zone === null || n.covered) this.turnNote = "none";else if (this.turnNote === "none") this.turnNote = "owed";
  }
  dropEndedZone(e) {
    if (this.zone !== null && this.getZone(e) === null) this.zone = null, this.covered = !1, this.turnNote = "none";
  }
  onRefused() {
    if (this.zone !== null && this.zone.extraUsageStatus !== void 0) this.zone = {
      ...this.zone,
      extraUsageStatus: void 0
    };
    this.covered = !1;
  }
  leave(e = Date.now()) {
    this.zone = null, this.covered = !1, this.turnNote = "none", this.fenceMs = Math.max(this.fenceMs, e);
  }
  onMainTurnStart() {
    this.turnNote = "none";
  }
  takeTurnNote(e = Date.now()) {
    if (this.dropEndedZone(e), this.turnNote !== "owed") return !1;
    return this.turnNote = "taken", !0;
  }
  markStartNotePlaced() {
    if (this.turnNote === "taken") this.turnNote = "placed";
  }
  continueAfterWrapUpAt(e = Date.now()) {
    let i = this.getZone(e);
    return this.turnNote === "placed" && i !== null && !this.covered && i.resetsAt !== void 0 ? {
      resetsAt: i.resetsAt,
      rateLimitType: i.rateLimitType
    } : null;
  }
  subagentNoteDue(e = Date.now()) {
    return this.getZone(e) !== null && !this.covered;
  }
}
function cIt(e) {
  if (JHt()) return FYi(e);
  return e;
}
function sPn(e) {
  return e || Te() === "gateway" || JHt();
}
function uCi(e, i) {
  if (!JHt()) return null;
  let message = NYi();
  if (message) return new It(429, {
    error: {
      type: "rate_limit_error",
      message: message
    }
  }, message, new globalThis.Headers());
  let r = uPs();
  if (!r) return null;
  let s = r["anthropic-ratelimit-unified-status"],
    d = r["anthropic-ratelimit-unified-overage-status"],
    h = r["anthropic-ratelimit-unified-representative-claim"] === "seven_day_opus",
    _ = e.includes("opus");
  if (h && !_) return null;
  if (UYi()) {
    let A = BYi(i);
    if (A === null) return null;
    return new It(429, {
      error: {
        type: "rate_limit_error",
        message: "Rate limit exceeded"
      }
    }, "Rate limit exceeded", new globalThis.Headers(Object.entries(A).filter(([S, b]) => b !== void 0)));
  }
  if (s === "rejected" && (!d || d === "rejected")) return new It(429, {
    error: {
      type: "rate_limit_error",
      message: "Rate limit exceeded"
    }
  }, "Rate limit exceeded", new globalThis.Headers(Object.entries(r).filter(([E, S]) => S !== void 0)));
  return null;
}
function fCi(e) {
  return JHt() && e.status === 429;
}
var ve = 0.7,
  _mr = "individual spend limit",
  xso = "individual usage limit",
  TDe = "Usage is paused for your organization. For help, please contact support.",
  pCi = "https://clau.de/wrap-up";
var et = 64,
  tt = 200;
class ee {
  maxHoldMs;
  #e = new Map();
  constructor(e) {
    this.maxHoldMs = e;
  }
  remember(e, i) {
    let recordedAtMs = i.recordedAtMs;
    for (let [r, s] of this.#e) if (this.#t(s, recordedAtMs) === void 0) this.#e.delete(r);
    this.#e.set(e, {
      ...i,
      untilMs: Math.min(i.untilMs, i.recordedAtMs + this.maxHoldMs)
    });
  }
  recall(e, i = Date.now()) {
    let n = this.#e.get(e);
    if (n === void 0) return;
    let r = this.#t(n, i);
    if (r === void 0) this.#e.delete(e);
    return r;
  }
  clear() {
    this.#e.clear();
  }
  #t(e, i) {
    return i < e.recordedAtMs || i >= e.untilMs ? void 0 : e;
  }
}
class RememberedResponseError extends fqe {
  replayed = !0;
  kind;
  untilMs;
  constructor(e, i = Date.now()) {
    let config = {
        headers: new Gln()
      },
      r = Math.max(0, Math.round((i - e.recordedAtMs) / 1000)),
      s = Math.max(0, Math.ceil((e.untilMs - i) / 1000));
    super(`the endpoint answered ${e.status} ${r}s ago; not asked again for ${s}s`, "ERR_REMEMBERED_RESPONSE", config, void 0, {
      status: e.status,
      statusText: "",
      headers: {},
      config: config,
      data: e.body
    });
    this.name = "RememberedResponseError", this.kind = e.kind, this.untilMs = e.untilMs;
  }
}
function we(e) {
  return e instanceof RememberedResponseError;
}
function Q9t(e) {
  if (we(e)) return e.kind === "auth_rejected";
  let i = N(e);
  return i !== void 0 && te(i);
}
function te(e) {
  return e.status === 401 || e.status === 403 && e.anthropicError !== void 0;
}
async function O({
  credentials: credentials,
  settle: settle
}) {
  if (settle && mie()) try {
    await ul({
      credentials: credentials
    });
  } catch (error) {
    t(`claudeAiAuthKey: token settle failed (${error instanceof Error ? error.message : String(error)}); keying the token in memory`);
  }
  return BIr();
}
function N(e) {
  if (!rc(e) || we(e)) return;
  let i = Gln.from(e.config?.headers ?? {}).get("Authorization"),
    n = e.response?.headers?.["retry-after"];
  return {
    status: e.response?.status,
    sentAuthKey: typeof i === "string" && i !== "" ? RVe(i) : null,
    retryAfterMs: y_(typeof n === "string" ? n : typeof n === "number" ? String(n) : void 0),
    anthropicError: it(e.response?.data)
  };
}
function it(e) {
  if (typeof e !== "object" || e === null || !("error" in e)) return;
  let i = e.error;
  if (typeof i !== "object" || i === null || !("type" in i) || typeof i.type !== "string") return;
  let message_2 = "message" in i && typeof i.message === "string" ? Q(i.message, tt) : void 0;
  return {
    error: {
      type: Q(i.type, et),
      ...(message_2 !== void 0 && {
        message: message_2
      })
    }
  };
}
var nt = "tengu_starry_waterfall",
  I = {
    menuSuffixPctOff: "at least {pct}% off \xB7 {days} left",
    menuSuffixExtraCredit: "get at least {pct}% extra credit \xB7 {days} left",
    hintPctOff: "Usage credits are at least {pct}% off \xB7 {days} left \xB7 /usage-credits",
    hintExtraCredit: "Buy usage credits and get at least {pct}% extra \xB7 {days} left \xB7 /usage-credits",
    dialogHeaderPctOff: "Limited-time offer: at least {pct}% off \xB7 {days} left",
    dialogHeaderExtraCredit: "Limited-time offer: at least {pct}% extra credit \xB7 {days} left",
    bannerPillPctOff: "At least {pct}% off usage credits \xB7 {days} left",
    bannerPillExtraCredit: "At least {pct}% extra usage credits \xB7 {days} left"
  };
function ie() {
  let e = v(nt, {});
  return typeof e === "object" && e !== null && !Array.isArray(e) ? e : {};
}
function uIt() {
  return ie().enabled === !0 && !St() && gn("allow_promo_offers");
}
function Pso() {
  let version = ie().version;
  return typeof version === "number" && Number.isFinite(version) ? version : 0;
}
function M(e, i) {
  return typeof e === "string" && e.trim() !== "" ? e : i;
}
function Z9t() {
  let e = ie();
  return {
    menuSuffixPctOff: M(e.menuSuffixPctOff, I.menuSuffixPctOff),
    menuSuffixExtraCredit: M(e.menuSuffixExtraCredit, I.menuSuffixExtraCredit),
    hintPctOff: M(e.hintPctOff, I.hintPctOff),
    hintExtraCredit: M(e.hintExtraCredit, I.hintExtraCredit),
    dialogHeaderPctOff: M(e.dialogHeaderPctOff, I.dialogHeaderPctOff),
    dialogHeaderExtraCredit: M(e.dialogHeaderExtraCredit, I.dialogHeaderExtraCredit),
    bannerPillPctOff: M(e.bannerPillPctOff, I.bannerPillPctOff),
    bannerPillExtraCredit: M(e.bannerPillExtraCredit, I.bannerPillExtraCredit)
  };
}
var Ae = " \xB7 ";
function eXt(e, i) {
  let n = e;
  if (i.daysLeft === null || i.daysLeft <= 0) {
    let r = n.split(Ae).filter(item => !item.includes("{days}"));
    n = r.length > 0 ? r.join(Ae) : n, n = n.replaceAll("{days}", "").trim();
  } else {
    let r = i.daysLeft === 1 ? "1 day" : `${i.daysLeft} days`;
    n = n.replaceAll("{days}", r);
  }
  return nu(n.replaceAll("{pct}", String(i.pct)));
}
var rt = Object.freeze(["Fable", "Fable 5", "Fable 5.1"]),
  at = Object.freeze([]);
function Re() {
  return Oh() ? at : rt;
}
function fIt(e) {
  if (e?.is_enabled === !0) return !0;
  return fBn(e?.disabled_reason ?? null);
}
var st = ["five_hour", "seven_day", "seven_day_oauth_apps", "seven_day_opus", "seven_day_sonnet", "cinder_cove", "wattle_ember", "extra_usage", "limits"];
function mCi(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function S9e(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && st.some(item => item in e);
}
var Ce = "tengu_usage_overage_included_models";
function CDe() {
  let e = v(Ce, null);
  if (e === null || e === void 0) return Re();
  return Array.isArray(e) ? e.filter(item => typeof item === "string") : [];
}
var ot = 1500,
  Ee = "usage: overage-included models allowlist";
async function Eas() {
  let e = () => pn(Ce, []).source,
    i = Date.now();
  try {
    let n = e();
    if (n !== "fallback" && n !== "disk") return;
    await zt(ms(), ot, Ee), t(`usage: GrowthBook init settled after ${Date.now() - i}ms; overage-included models allowlist now read from ${e()} (was ${n})`);
  } catch (error) {
    t(`usage: overage-included models allowlist not refreshed after ${Date.now() - i}ms (${error instanceof Error && error.message === Ee ? "timeout" : "error"}); per-model rows use the cached list`, {
      level: "warn"
    });
  }
}
var ut = "tengu_rate_limit_promo_notices",
  dt = p(() => C(u({
    bar: o(),
    text: o(),
    variant: Ep(e => typeof e === "string" && Object.hasOwn(Sq("dark"), e)).optional().catch(void 0)
  })));
function Tas() {
  let e = v(ut, []),
    i = dt().safeParse(e);
  return i.success ? i.data : [];
}
function xe(e) {
  return e !== null && typeof e === "object" && e.kind === "weekly_scoped" && typeof e.scope?.model?.display_name === "string";
}
function iPn(e) {
  return Array.isArray(e) && e.some(item => typeof item === "object" && item !== null && xe(item));
}
function hCi(e) {
  return Array.isArray(e) && e.some(item => typeof item !== "object" || item === null || item.scope?.model != null);
}
function tXt(e, i) {
  let n = i.map(item => item.toLowerCase());
  if (n.length === 0 || !Array.isArray(e)) return [];
  return e.filter(xe).filter(item => n.includes(item.scope.model.display_name.toLowerCase())).map(item => ({
    title: `Current week (${item.scope.model.display_name})`,
    displayName: item.scope.model.display_name,
    limit: {
      utilization: item.percent,
      resets_at: item.resets_at
    }
  }));
}
var lt = 300000,
  Ue = 3600000,
  ct = 3600000,
  se = he(new ee(Ue), e => e.clear()),
  oauthRefreshLatch = he({
    attempted: !1
  }, e => {
    e.attempted = !1;
  }),
  D = he(new Set(), e => {
    e.clear();
  }),
  mt = "tengu_federated_robin";
function Pe() {
  return v(mt, !0);
}
function validateStatus(e) {
  return e >= 200 && e < 300;
}
var pt = new W(() => ({
  pending: null,
  requester: null,
  credentials: void 0,
  offerSurface: null
}));
function gt() {
  let e = hn();
  return `${e?.organizationUuid ?? ""}:${e?.accountUuid ?? ""}`;
}
async function aL(e, i = {}) {
  if (i.read !== "at_wall" && i.read !== "starry_waterfall") return re(e, i.read ?? "plain", ne(i));
  let n = pt.of(H().host),
    r = gt(),
    s = n.pending !== null && n.requester === r && n.credentials === e;
  if (i.read === "starry_waterfall") {
    if (s && n.offerSurface === i.surface) return n.pending;
    return re(e, "starry_waterfall", ne(i));
  }
  if (s) return n.pending;
  let d = ne(i),
    m = re(e, "at_wall", d).finally(() => {
      if (n.pending === m) n.pending = null, n.requester = null, n.credentials = void 0, n.offerSurface = null;
    });
  return n.pending = m, n.requester = r, n.credentials = e, n.offerSurface = d.includes(`${ae}=`) ? ke(i) : null, m;
}
var ae = "starry_waterfall";
function ke(e) {
  return e.surface ?? "cli_menu";
}
function ne(e) {
  switch (e.read) {
    case void 0:
    case "plain":
      return "/api/oauth/usage";
    case "cedar_ember":
      return "/api/oauth/usage?cedar_ember=1&skip_spend=1";
    case "at_wall":
      return uIt() ? `/api/oauth/usage?at_wall=1&${ae}=${ke(e)}&skip_spend=1` : "/api/oauth/usage?at_wall=1&skip_spend=1";
    case "starry_waterfall":
      return `/api/oauth/usage?${ae}=${e.surface}&skip_spend=1`;
  }
}
async function re(credentials_2, i, n) {
  let r = Pe();
  if (!r) se.clear();
  let s = r && Rt() && fp() ? B(await O({
    credentials: credentials_2,
    settle: !1
  })) : void 0;
  if (s !== void 0) s = B(await O({
    credentials: credentials_2,
    settle: !0
  }));
  if (s?.kind === "auth_rejected" && D.size > 0) await Promise.allSettled([...D]), s = B(await O({
    credentials: credentials_2,
    settle: !0
  }));
  if (s !== void 0) {
    let m = new RememberedResponseError(s);
    throw t(`fetchUtilization: ${n} replayed \u2014 ${m.message}`), m;
  }
  let d = async () => {
    if (!Rt() || !fp()) return {};
    let m = 0,
      h,
      _ = n1n(),
      y = null,
      A,
      E = () => {
        let b,
          promise = new Promise(L => {
            b = L;
          });
        return A = promise, vE(async () => {
          m++;
          let L = await O({
            credentials: credentials_2,
            settle: !1
          });
          if (h !== void 0 && L === h.key) throw h.error;
          t(`fetchUtilization: GET ${n} (attempt ${m})`);
          try {
            let x = await jt.get(n, {
              timeout: 5000,
              headers: {
                "Content-Type": "application/json"
              },
              refreshOAuth: !0,
              credentials: credentials_2,
              validateStatus: validateStatus
            });
            if (!x.ok) throw Error(`Auth error: ${x.reason === "no-auth" ? x.detail : x.reason}`);
            return x;
          } catch (error_2) {
            let key = r ? ht(error_2, L) : null;
            if (key !== null) h = {
              key: key,
              error: error_2
            };
            let T = N(error_2);
            if (y = T?.sentAuthKey ?? L, T?.status === 401) D.add(promise);
            throw error_2;
          }
        }, _ ? {
          credentials: credentials_2,
          gateToSessionOAuthCredential: !0,
          oauthRefreshLatch: oauthRefreshLatch
        } : {
          credentials: credentials_2
        }).then(L => (b(!0), D.delete(promise), L), L => {
          throw b(!1), D.delete(promise), L;
        });
      },
      S;
    try {
      S = await E();
    } catch (error) {
      let w = [...D].filter(item => item !== A);
      if (N(error)?.status !== 401 || w.length === 0) throw error;
      let L = await Promise.allSettled(w),
        x = await O({
          credentials: credentials_2,
          settle: !0
        });
      if (x === null || x === y) throw error;
      let U = r ? B(x) : void 0;
      if (U !== void 0) throw new RememberedResponseError(U);
      if (!r && !L.some(item => item.status === "fulfilled" && item.value)) throw error;
      t(`fetchUtilization: ${n} 401 during another read's token refresh; re-sending with the refreshed bearer`), S = await E();
    }
    return oauthRefreshLatch.attempted = !1, t(`fetchUtilization: 200 after ${m} attempt(s)${m > 1 ? " (401\u2192refresh\u2192retry succeeded)" : ""}`), S.data;
  };
  switch (i) {
    case "at_wall":
      return ao("api_usage_fetch_at_wall", d, Z);
    case "cedar_ember":
      return ao("api_usage_fetch_cedar_ember", d, Z);
    case "starry_waterfall":
      return ao("api_usage_fetch_starry_waterfall", d, Z);
    case "plain":
      return ao("api_usage_fetch", d, Z);
  }
}
function B(e) {
  return e === null ? void 0 : se.recall(e);
}
async function gCi(credentials_3) {
  if (!Pe()) return;
  let i = B(await O({
    credentials: credentials_3,
    settle: !1
  }));
  return i?.kind === "rate_limited" ? i.untilMs : void 0;
}
function ht(e, i) {
  try {
    let n = N(e);
    if (n === void 0 || n.status === void 0) return null;
    let r = n.sentAuthKey ?? i;
    if (r === null) return null;
    let {
        status: status,
        anthropicError: d
      } = n,
      kind,
      h;
    if (te(n)) kind = "auth_rejected", h = ct;else if (status === 429 || status === 403) {
      kind = "rate_limited";
      let y = n.retryAfterMs ?? 0;
      h = Math.min(y > 0 ? y : lt, Ue);
    } else return null;
    let recordedAtMs_2 = Date.now();
    return se.remember(r, {
      kind: kind,
      status: status,
      body: d,
      recordedAtMs: recordedAtMs_2,
      untilMs: recordedAtMs_2 + h
    }), t(`fetchUtilization: ${status} remembered for this bearer; not asking again for ${Math.round(h / 1000)}s`), r;
  } catch (error) {
    return t(`fetchUtilization: could not record the endpoint's answer: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), null;
  }
}
function Z(e) {
  let i = N(e);
  if (i === void 0) return "error";
  switch (i.status) {
    case void 0:
      return "network";
    case 401:
      return "http_401";
    case 403:
      return "http_403";
    case 429:
      return "http_429";
    default:
      return "http_other";
  }
}
var bmr = new Set(["org_level_disabled_until", "org_spend_cap_reached"]),
  _t = "channel's monthly spend limit",
  bt = "channel's monthly usage limit",
  Ie = " \xB7 an org owner or channel manager can raise it in the channel's Claude settings";
function V() {
  return v("tengu_vellum_anchor", !1);
}
var yt = [...fRo, ...bFs, ...SFs, ..._Fs];
function Cas(e) {
  return yt.some(item => e.startsWith(item)) || yFs.some(item => item.test(e));
}
var Eye = {
  five_hour: "5-hour limit",
  seven_day: "weekly limit",
  seven_day_opus: "Opus limit",
  seven_day_sonnet: "Sonnet limit",
  seven_day_overage_included: "Fable limit",
  overage: "usage credit limit"
};
function Oso(e) {
  let resetTime = e.resetsAt ? JT(e.resetsAt, !0) : void 0;
  if (!resetTime) return null;
  switch (e.rateLimitType) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
      return {
        limitName: Eye[e.rateLimitType],
        resetTime: resetTime
      };
    case "seven_day_sonnet":
      return {
        limitName: nXt(),
        resetTime: resetTime
      };
    case "seven_day_overage_included":
    case "overage":
    case void 0:
      return null;
    default:
      return null;
  }
}
function Me(e, i, n) {
  if (e.isUsingOverage) {
    if (e.overageStatus === "allowed_warning") {
      let r = CL() ? "usage limit" : "usage credit limit",
        s = We(n);
      return {
        message: s ? `Over ${s}% of your ${r} used` : `You're close to your ${r}`,
        severity: "warning"
      };
    }
    return null;
  }
  if (e.status === "rejected") return {
    message: vt(e, i),
    severity: "error"
  };
  if (e.status === "allowed_warning") {
    if (e.utilization !== void 0 && e.utilization < ve) return null;
    let r = dr(),
      s = r === "team" || r === "enterprise",
      d = hn()?.hasExtraUsageEnabled === !0;
    if (s && d && !LS()) return null;
    let message_3 = At(e);
    if (message_3) return {
      message: message_3,
      severity: "warning"
    };
  }
  return null;
}
function Ras(e, i) {
  let n = Me(e, i);
  if (n && n.severity === "error") return n.message;
  return null;
}
function Aas(e, i, n) {
  let r = Me(e, i, n);
  if (r && r.severity === "warning") return r.message;
  return null;
}
function vt(e, i) {
  if (e.dailyCapPaused === !0) return TDe;
  let n = CL(),
    r = LS(),
    s = r ? "" : " \xB7 contact your admin to increase it",
    resetsAt = e.resetsAt,
    m = resetsAt ? JT(resetsAt, !0) : void 0,
    h = e.overageResetsAt ? JT(e.overageResetsAt, !0) : void 0,
    _ = m ? ` \xB7 resets ${m}` : "",
    y,
    A = () => {
      if (y === void 0) y = wt(e, _, i);
      return y;
    },
    E = e.rateLimitType === "five_hour" || e.rateLimitType === "seven_day" || e.rateLimitType === "seven_day_opus" || e.rateLimitType === "seven_day_sonnet" || e.rateLimitType === "seven_day_overage_included",
    S = () => e.rateLimitType === "seven_day_overage_included" || !(ZX(i) && Vfo(i) && !Mq());
  if (!n && e.overageDisabledReason && E && !bmr.has(e.overageDisabledReason) && S()) {
    let b = A();
    if (b !== null) return b;
  }
  if (!n && e.overageScope === "group_pool") {
    let b = Oso(e),
      w = b && S() ? ` \xB7 your ${b.limitName} resets ${b.resetTime}` : "",
      L = r ? ` \xB7 raise it at ${M3}` : ` \xB7 ask your admin to raise it at ${M3}`;
    return P("team's shared budget", `${L}${w}`, i);
  }
  if (!n && e.overageDisabledReason && bmr.has(e.overageDisabledReason)) {
    let b = e.overageDisabledReason === "org_spend_cap_reached",
      w = dr(),
      L = w === "team" || w === "enterprise",
      x = Oso(e),
      U = x && S() ? x : null,
      T = U ? ` \xB7 your ${U.limitName} resets ${U.resetTime}` : "";
    if (e.overageScope === "channel") return P(_t, `${Ie}${T}`, i);
    if (L) {
      let G = $Re(),
        K = r ? G ? ` \xB7 run ${G} to raise it, or visit ${M3}` : ` \xB7 visit ${M3} to raise it` : oe();
      return P(b ? _mr : "org's monthly spend limit", `${K}${T}`, i);
    }
    let q = r ? "monthly spend limit" : b ? _mr : "org's monthly spend limit",
      Y = r ? ` \xB7 raise it at ${Yse}` : ` \xB7 ask your admin to raise it at ${M3}`;
    return P(q, `${Y}${T}`, i);
  }
  if (e.overageStatus === "rejected") {
    let b = "";
    if (resetsAt && e.overageResetsAt) {
      if (resetsAt < e.overageResetsAt) b = ` \xB7 resets ${m}`;else b = ` \xB7 resets ${h}`;
    } else if (m) b = ` \xB7 resets ${m}`;else if (h) b = ` \xB7 resets ${h}`;
    if (e.overageDisabledReason === "out_of_credits") {
      if (n) return r ? "Your org is out of usage \xB7 add funds to continue" : "Your org is out of usage \xB7 contact your admin";
      let w = b !== "" && V() ? " \xB7 progress saved" : "";
      return `You're out of usage credits${b}${w}`;
    }
    if (e.overageDisabledReason && bmr.has(e.overageDisabledReason)) {
      let w = h ? ` \xB7 resets ${h}` : "";
      if (e.overageScope === "channel") return P(bt, `${Ie}${w}`, i);
      return P(e.overageDisabledReason === "org_spend_cap_reached" ? xso : "org's monthly usage limit", w, i);
    }
    if (e.overageDisabledReason === "seat_tier_level_disabled" || e.overageDisabledReason === "seat_tier_zero_credit_limit") return `Your seat type doesn't include ${n ? "usage" : "usage credits"}`;
    if (e.overageDisabledReason === "org_service_level_disabled") return "This service is disabled for your org";
    if (e.overageDisabledReason === "member_level_disabled" || e.overageDisabledReason === "member_zero_credit_limit") return `Your usage allocation has been disabled by your admin${oe()}`;
    if (e.overageDisabledReason === "group_zero_credit_limit") return `Your group's usage limit is set to $0${oe()}`;
    if (n) return P("usage limit", s, i);
    return P("limit", b, i, {
      progressSavedSuffix: b !== "" && V()
    });
  }
  if (E) {
    let b = A();
    if (b !== null) return b;
  }
  if (n) return P("usage limit", s, i);
  return P("usage limit", _, i, {
    progressSavedSuffix: _ !== "" && V()
  });
}
function wt(e, i, n) {
  switch (e.rateLimitType) {
    case "seven_day_sonnet":
      return P(nXt(), i, n, {
        progressSavedSuffix: V()
      });
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
      return P(Eye[e.rateLimitType], i, n, {
        progressSavedSuffix: V()
      });
    case "seven_day_overage_included":
      return P(Eye[e.rateLimitType], i, n);
    default:
      return null;
  }
}
function We(e) {
  if (e === void 0 || !Number.isFinite(e) || e <= 0 || e >= 1) return;
  return Math.min(99, Math.floor(Math.round(e * 1e4) / 100));
}
function At(e) {
  let i = e.utilization ? Math.floor(e.rateLimitType === "overage" ? DSt(e.utilization) : pxe(e.utilization)) : void 0,
    n = null;
  switch (e.rateLimitType) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
    case "seven_day_sonnet":
    case "seven_day_overage_included":
      n = Eye[e.rateLimitType];
      break;
    case "overage":
      if (CL()) n = i ? "usage" : "usage limit";else n = i ? "usage credits" : "usage credit limit";
      break;
    case void 0:
      return null;
  }
  let r = e.rateLimitType === "overage" && CL(),
    s = e.resetsAt && !r ? JT(e.resetsAt, !0) : void 0,
    d = xas(e.rateLimitType),
    m = i ? void 0 : We(e.surpassedThreshold);
  return [i ? `You've used ${i}% of your ${n}` : m ? `Over ${m}% of your ${n} used` : `Approaching ${n}`, s && `resets ${s}`, d].filter(Boolean).join(" \xB7 ");
}
function xas(e) {
  let i = dr(),
    n = hn()?.hasExtraUsageEnabled === !0,
    r = LS();
  if (i === "team" || i === "enterprise") {
    if (!n && wO()) return r ? "Run /usage-credits to turn on extra usage for your org" : "Run /usage-credits to ask your admin for more";
    if (n && e === "overage") {
      if (wO()) return r ? "Run /usage-credits to raise the cap" : "Run /usage-credits to ask your admin for more";
      return r ? `Raise the cap at ${M3}` : "Ask your admin for more";
    }
    return null;
  }
  if (i === "max" && Yk() === "default_claude_max_20x") return !n && wO() ? "/usage-credits to keep using Claude Code" : null;
  if (e === "five_hour" && (i === "pro" || i === "max") && !n && w_e()) return "/upgrade to keep using Claude Code";
  return null;
}
function yCi(e) {
  if (e === null || !Lt(e)) return null;
  if (!wO()) return "Switch models to keep working.";
  if (!LS()) return "Switch models to keep working.";
  return `Buy more to keep using ${Cw(Vt(e))}, or switch models to keep working.`;
}
function Lt(e) {
  if (e === null) return !1;
  let i = Vt(e);
  return ZX(i) && Vfo(i) && !Mq();
}
function _Ci(e, i, n) {
  if (dr() !== "pro") return null;
  if (e.rateLimitType !== "seven_day") return null;
  if (i.includes("fable")) return {
    lever: "model",
    text: "try /model opus \xB7 more runway"
  };
  if (i.includes("opus")) return {
    lever: "model",
    text: "try /model sonnet \xB7 ~2\xD7 runway"
  };
  if (!ww(i)) return null;
  let r = jF(i, n);
  if (r === "high" || r === "xhigh" || r === "max") return {
    lever: "effort",
    text: "try /effort medium"
  };
  return null;
}
function Pas(e, i) {
  let n = e.resetsAt ? JT(e.resetsAt, !0) : "",
    r = "";
  switch (e.rateLimitType) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
      r = Eye[e.rateLimitType];
      break;
    case "seven_day_sonnet":
      r = nXt();
      break;
    case "seven_day_overage_included":
    case "overage":
    case void 0:
      break;
  }
  let s = CL();
  if (!r && !s && i) {
    let h = cC(Vt(i));
    if (h && CDe().some(item => item.toLowerCase() === h.toLowerCase())) {
      let _ = n ? ` \xB7 Your ${h} limit resets ${n}` : "";
      return `Now using usage credits for ${h}${_}`;
    }
  }
  let d = s ? "your usage allocation" : "usage credits";
  if (!r) return s ? `Now using ${d}` : "Now using credits";
  let m = n && !s ? ` \xB7 Your ${r} resets ${n}` : "";
  return `You're now using ${d}${m}`;
}
function nXt() {
  let e = dr();
  return e === "pro" || e === "enterprise" ? Eye.seven_day : Eye.seven_day_sonnet;
}
function oe() {
  let e = $Re();
  return e ? ` \xB7 run ${e} to ask your admin for a higher limit` : " \xB7 ask your admin for a higher limit";
}
function P(e, i, n, r) {
  let s = r?.progressSavedSuffix ? " \xB7 progress saved" : "";
  return `You've hit your ${e}${i}${s}`;
}
var Et = [{
  rateLimitType: "five_hour",
  windowSeconds: 18000,
  thresholds: [{
    utilization: 0.9,
    timePct: 0.72
  }]
}, {
  rateLimitType: "seven_day",
  windowSeconds: 604800,
  thresholds: [{
    utilization: 0.75,
    timePct: 0.6
  }, {
    utilization: 0.5,
    timePct: 0.35
  }, {
    utilization: 0.25,
    timePct: 0.15
  }]
}];
function w9e(e) {
  return Wr(Eye, e) || e;
}
function Ct(e, i) {
  let n = Date.now() / 1000,
    r = e - i,
    s = n - r;
  return Math.max(0, Math.min(1, s / i));
}
function bCi(e) {
  let i = e.headers?.get?.(Y0t),
    n = e.headers?.get?.(LZt),
    r = e.headers?.get?.(_bs) === "true";
  if (!i && !n && !r) return null;
  let s = {
      status: "rejected",
      unifiedRateLimitFallbackAvailable: !1,
      isUsingOverage: !1
    },
    d = e.headers?.get?.("anthropic-ratelimit-unified-reset");
  if (d) s.resetsAt = Math.round(Number(d));
  if (i) s.rateLimitType = i;
  if (n) s.overageStatus = n;
  let m = e.headers?.get?.("anthropic-ratelimit-unified-overage-reset");
  if (m) s.overageResetsAt = Math.round(Number(m));
  let h = e.headers?.get?.(aCe);
  if (h) s.overageDisabledReason = h;
  let _ = Qe(e.headers);
  if (_) s.overageScope = _;
  if (r) s.dailyCapPaused = !0;
  return Object.assign(s, He(e.headers)), s;
}
function He(e) {
  let lowPriorityOffer = uUi(e);
  if (!lowPriorityOffer) return {};
  let lowPriorityRetryAfterSeconds = epo(e),
    lowPriorityMaxWaitSeconds = tpo(e);
  return {
    lowPriorityOffer: lowPriorityOffer,
    ...(lowPriorityRetryAfterSeconds !== void 0 && {
      lowPriorityRetryAfterSeconds: lowPriorityRetryAfterSeconds
    }),
    ...(lowPriorityMaxWaitSeconds !== void 0 && {
      lowPriorityMaxWaitSeconds: lowPriorityMaxWaitSeconds
    })
  };
}
var k = [["five_hour", "5h"], ["seven_day", "7d"], ["seven_day_overage_included", "7d_oi"], ["overage", "overage"]],
  xt = 1800000;
function Oe() {
  return v("tengu_sharded_moonbeam", !0);
}
function Tt() {
  return v("tengu_valiant_finch", !1);
}
function ue(e) {
  if (e === null || e === "") return;
  let i = Number(e);
  return Number.isFinite(i) ? i : void 0;
}
function Ut(e) {
  let i = {};
  for (let [n, r] of k) {
    let utilization = ue(e.get(`anthropic-ratelimit-unified-${r}-utilization`)),
      d = ue(e.get(`anthropic-ratelimit-unified-${r}-reset`)),
      surpassedThreshold = ue(e.get(`anthropic-ratelimit-unified-${r}-surpassed-threshold`)),
      h = e.get(`anthropic-ratelimit-unified-${r}-status`),
      status_2 = n === "overage" ? void 0 : Pt.find(item => item === h);
    if (utilization === void 0 && d === void 0 && surpassedThreshold === void 0 && status_2 === void 0) continue;
    i[n] = {
      ...(utilization !== void 0 && {
        utilization: utilization
      }),
      ...(d !== void 0 && {
        resets_at: Math.round(d)
      }),
      ...(surpassedThreshold !== void 0 && {
        surpassedThreshold: surpassedThreshold
      }),
      ...(status_2 !== void 0 && {
        status: status_2
      })
    };
  }
  return i;
}
var Pt = ["allowed", "allowed_warning", "rejected"];
function ze(e) {
  let i = {};
  for (let [n] of k) {
    let r = e[n];
    if (r?.utilization !== void 0 && r.resets_at !== void 0) i[n] = {
      utilization: r.utilization,
      resets_at: r.resets_at
    };
  }
  return i;
}
function F(e, i) {
  return `${Math.round(e.utilization * 100)}@${e.resets_at}:${i?.status}:${i?.surpassedThreshold}`;
}
function RDe(e) {
  return e !== void 0 && Number.isFinite(e.utilization) && Number.isFinite(e.resets_at);
}
function kt(e) {
  return e.surpassedThreshold !== void 0 || e.utilization !== void 0 && e.resets_at !== void 0;
}
async function Fe(model, credentials_4, signal) {
  let r = await Z$({
      maxRetries: 0,
      model: model,
      source: "quota_check",
      agentContext: cc(),
      credentials: credentials_4
    }),
    messages = [{
      role: "user",
      content: "quota"
    }],
    d = nie(model);
  return r.beta.messages.create({
    model: oT(model),
    max_tokens: 1,
    messages: messages,
    metadata: Wze(),
    ...MVe(d),
    ...t_t(d)
  }, {
    signal: signal
  }).asResponse();
}
async function SCi(e, i, n) {
  await Fe(e, i, n);
}
function Mt(e, unifiedRateLimitFallbackAvailable, n) {
  for (let [rateLimitType_2] of k) {
    if (n && rateLimitType_2 === "five_hour") continue;
    let s = e[rateLimitType_2];
    if (s?.surpassedThreshold !== void 0) return {
      status: "allowed_warning",
      resetsAt: s.resets_at,
      rateLimitType: rateLimitType_2,
      utilization: s.utilization,
      unifiedRateLimitFallbackAvailable: unifiedRateLimitFallbackAvailable,
      isUsingOverage: !1,
      surpassedThreshold: s.surpassedThreshold
    };
  }
  return null;
}
function Wt(e, i, unifiedRateLimitFallbackAvailable_2) {
  let {
      rateLimitType: rateLimitType_3,
      windowSeconds: windowSeconds,
      thresholds: thresholds
    } = i,
    m = e[rateLimitType_3];
  if (m?.utilization === void 0 || m.resets_at === void 0) return null;
  let {
      utilization: utilization_2,
      resets_at: _
    } = m,
    y = Ct(_, windowSeconds);
  if (!thresholds.some(item => utilization_2 >= item.utilization && y <= item.timePct)) return null;
  return {
    status: "allowed_warning",
    resetsAt: _,
    rateLimitType: rateLimitType_3,
    utilization: utilization_2,
    unifiedRateLimitFallbackAvailable: unifiedRateLimitFallbackAvailable_2,
    isUsingOverage: !1
  };
}
function Ge(e, i) {
  let n = RL(),
    r = Mt(e, i, n);
  if (r) return r;
  for (let s of Et) {
    if (n && s.rateLimitType === "five_hour") continue;
    let d = Wt(e, s, i);
    if (d) return d;
  }
  return null;
}
function le(e, i) {
  let n = e.get("anthropic-ratelimit-unified-status") || "allowed",
    r = e.get("anthropic-ratelimit-unified-reset"),
    resetsAt_2 = r ? Math.round(Number(r)) : void 0,
    unifiedRateLimitFallbackAvailable_3 = e.get("anthropic-ratelimit-unified-fallback") === "available",
    rateLimitType_4 = e.get("anthropic-ratelimit-unified-representative-claim"),
    overageStatus = e.get("anthropic-ratelimit-unified-overage-status"),
    _ = e.get("anthropic-ratelimit-unified-overage-reset"),
    overageResetsAt = _ ? Math.round(Number(_)) : void 0,
    overageDisabledReason = e.get("anthropic-ratelimit-unified-overage-disabled-reason"),
    overageScope = Qe(e),
    S = e.get(_bs) === "true",
    overageInUse = e.get(aLn) === "true",
    w = He(e),
    L = e.get("anthropic-ratelimit-unified-upgrade-paths"),
    upgradePaths = L ? L.split(",").map(item => item.trim()) : void 0,
    U = e.get("anthropic-ratelimit-unified-overage-period-monthly-utilization"),
    utilization_3 = U ? Number(U) : NaN,
    overagePeriodMonthly = Number.isFinite(utilization_3) ? {
      utilization: utilization_3
    } : void 0,
    Y = e.get("anthropic-ratelimit-unified-overage-period-channel-utilization"),
    utilization_4 = Y ? Number(Y) : NaN,
    overagePeriodChannel = Number.isFinite(utilization_4) ? {
      utilization: utilization_4
    } : void 0,
    base = {
      status: n === "allowed_warning" ? "allowed" : n,
      resetsAt: resetsAt_2,
      unifiedRateLimitFallbackAvailable: unifiedRateLimitFallbackAvailable_3,
      ...(rateLimitType_4 && {
        rateLimitType: rateLimitType_4
      }),
      ...(overageStatus && {
        overageStatus: overageStatus
      }),
      ...(overageResetsAt && {
        overageResetsAt: overageResetsAt
      }),
      ...(overageDisabledReason && {
        overageDisabledReason: overageDisabledReason
      }),
      ...(overageScope && {
        overageScope: overageScope
      }),
      ...(S && {
        dailyCapPaused: !0
      }),
      ...(upgradePaths && {
        upgradePaths: upgradePaths
      }),
      isUsingOverage: n === "rejected" && (overageStatus === "allowed" || overageStatus === "allowed_warning"),
      ...(overageInUse && {
        overageInUse: overageInUse
      }),
      ...(overagePeriodMonthly && {
        overagePeriodMonthly: overagePeriodMonthly
      }),
      ...(overagePeriodChannel && {
        overagePeriodChannel: overagePeriodChannel
      }),
      ...(i && {
        rateLimitGraceActive: !0
      }),
      ...w
    },
    readings = Ut(e);
  if (overageScope === "group_pool") delete readings.overage;
  return {
    base: base,
    own: Ot(base, readings),
    readings: readings
  };
}
function Ot(e, i) {
  if (e.status !== "allowed") return e;
  let n = Ge(i, e.unifiedRateLimitFallbackAvailable);
  return n ? ce(n, e.upgradePaths, e) : e;
}
function $e(e, i) {
  return le(e, i).own;
}
function ce(e, upgradePaths_2, n) {
  return {
    ...e,
    ...(upgradePaths_2 && {
      upgradePaths: upgradePaths_2
    }),
    ...(!n.rateLimitGraceActive && {
      ...(n.overageStatus && {
        overageStatus: n.overageStatus
      }),
      ...(n.overageResetsAt && {
        overageResetsAt: n.overageResetsAt
      }),
      ...(n.overageDisabledReason && {
        overageDisabledReason: n.overageDisabledReason
      })
    }),
    ...(n.overageInUse && {
      overageInUse: !0
    }),
    ...(n.overagePeriodMonthly && {
      overagePeriodMonthly: n.overagePeriodMonthly
    }),
    ...(n.overagePeriodChannel && {
      overagePeriodChannel: n.overagePeriodChannel
    }),
    ...(n.rateLimitGraceActive && {
      rateLimitGraceActive: !0
    })
  };
}
function Nt(e) {
  let {
    overageStatus: overageStatus_2,
    overageResetsAt: overageResetsAt_2,
    overageDisabledReason: overageDisabledReason_2,
    ...s
  } = e;
  return s;
}
function Dt(e) {
  let {
    resetsAt: resetsAt_3,
    rateLimitType: rateLimitType_5,
    utilization: utilization_5,
    surpassedThreshold: surpassedThreshold_2,
    upgradePaths: upgradePaths_3,
    ...m
  } = e;
  return {
    ...m,
    status: "allowed"
  };
}
function Oas(e) {
  let i = e.error?.error?.details;
  if (i?.error_code !== "credits_required") return {};
  return {
    errorCode: "credits_required",
    ...(typeof i.disabled_reason === "string" && {
      overageDisabledReason: i.disabled_reason
    }),
    ...(typeof i.can_user_purchase_credits === "boolean" && {
      canUserPurchaseCredits: i.can_user_purchase_credits
    }),
    ...(typeof i.has_chargeable_saved_payment_method === "boolean" && {
      hasChargeableSavedPaymentMethod: i.has_chargeable_saved_payment_method
    })
  };
}
function rXt(cachedExtraUsageDisabledReason, i) {
  if (fe().cachedExtraUsageDisabledReason !== cachedExtraUsageDisabledReason) Le(n => ({
    ...n,
    cachedExtraUsageDisabledReason: cachedExtraUsageDisabledReason
  }), i);
}
function Ne(e, i) {
  if (Te() === "gateway") return;
  rXt(e.get("anthropic-ratelimit-unified-overage-disabled-reason") ?? null, i);
}
var Ht = 3600000,
  je = 60000,
  Gt = p(() => {
    let e = Ft({
        utilization: Mn().nullable(),
        resets_at: ge().nullable()
      }).passthrough(),
      utilization_6 = Ft({
        five_hour: e.nullish(),
        seven_day: e.nullish(),
        seven_day_oauth_apps: e.nullish(),
        seven_day_opus: e.nullish(),
        seven_day_sonnet: e.nullish(),
        cinder_cove: e.nullish(),
        wattle_ember: e.extend({
          label: ge().nullish(),
          limit_dollars: Mn().nullish(),
          used_dollars: Mn().nullish(),
          remaining_dollars: Mn().nullish(),
          periods: vr(Ft({
            starts_at: ge(),
            ends_at: ge()
          }).passthrough()).nullish()
        }).nullish(),
        extra_usage: Ft({
          is_enabled: ws(),
          monthly_limit: Mn().nullable(),
          used_credits: Mn().nullable(),
          utilization: Mn().nullable(),
          currency: ge().nullish(),
          disabled_reason: ge().nullish()
        }).passthrough().nullish(),
        limits: vr(Ft({
          kind: ge(),
          group: ge(),
          percent: Mn(),
          resets_at: ge().nullable(),
          severity: ge(),
          is_active: ws(),
          scope: Ft({
            model: Ft({
              display_name: ge()
            }).passthrough().nullish(),
            surface: Ft({
              display_name: ge()
            }).passthrough().nullish()
          }).passthrough().nullish()
        }).passthrough()).nullish()
      }).passthrough();
    return Ft({
      fetchedAtMs: Mn(),
      accountUuid: ge().optional(),
      utilization: utilization_6
    });
  });
function wCi(utilization_7, i, n) {
  let accountUuid = hn()?.accountUuid;
  if (accountUuid !== i) return;
  let cachedUsageUtilization = fe().cachedUsageUtilization,
    d = cachedUsageUtilization && cachedUsageUtilization.accountUuid === accountUuid ? Date.now() - cachedUsageUtilization.fetchedAtMs : Number.POSITIVE_INFINITY;
  if (d >= 0 && d < je) return;
  Le(m => ({
    ...m,
    cachedUsageUtilization: {
      fetchedAtMs: Date.now(),
      ...(accountUuid !== void 0 && {
        accountUuid: accountUuid
      }),
      utilization: utilization_7
    }
  }), n);
}
function Iso(e) {
  let cachedUsageUtilization_2 = fe().cachedUsageUtilization;
  if (!cachedUsageUtilization_2) return null;
  let n = Gt().safeParse(cachedUsageUtilization_2);
  if (!n.success) return null;
  if (n.data.accountUuid !== hn()?.accountUuid) return Le(s => ({
    ...s,
    cachedUsageUtilization: void 0
  }), e), null;
  let r = Date.now() - n.data.fetchedAtMs;
  if (r < 0 || r > Ht) return null;
  return {
    utilization: n.data.utilization,
    fetchedAtMs: n.data.fetchedAtMs
  };
}
function kCi(e) {
  let i = Iso(e);
  if (!i) return null;
  let ageMs = Date.now() - i.fetchedAtMs;
  if (ageMs >= je || R.lastAppliedObservationAtMs > i.fetchedAtMs) return null;
  return {
    utilization: i.utilization,
    ageMs: ageMs
  };
}
var vCi = "[Usage limit reached \u2014 grace window active. Wrap up: finish or " + "checkpoint; don't start subagents or long work.]",
  ECi = "tengu_lantern_wick_mode";
function TCi(e) {
  let i = typeof e === "string" ? e.trim().toLowerCase() : e;
  return i === "wrap-up" || i === "next-steps" ? i : "off";
}
var CCi = "tengu_lantern_wick_text",
  $t = "bot_protected_tengu_hazy_waterfall";
function aPn() {
  return v($t, !0) !== !1;
}
function Ias(e) {
  if (aPn()) {
    let n = Djt(e);
    if (n === null) {
      if (typeof e === "string" && e.trim() !== "") c("usage_limit_served_text_rejected", "wrap_up_text");
      return null;
    }
    if (typeof e === "string" && n !== e.trim()) c("usage_limit_served_text_altered", "wrap_up_text");
    return `[${n}]`;
  }
  let i = typeof e === "string" ? e.trim() : "";
  return i === "" ? null : `[${i}]`;
}
var RCi = "[Usage limit reached \u2014 grace window active. Checkpoint now: finish the " + "current step, then list up to 3 short bullets of the most impactful remaining work. Don't start subagents or long-running work.]",
  Smr = "tengu_vellum_anchor",
  ACi = "[Usage limit approaching. Checkpoint now: finish the current step, then list up to 3 short bullets of the most impactful remaining work. Don't start subagents or long-running work.]",
  Bt = 0.95,
  xCi = "Approaching your 5-hour usage limit \u2014 Claude will wrap up the current step.",
  PCi = "notice";
function qt(e) {
  switch (e) {
    case "default_claude_max_5x":
      return 0.99;
    case "default_claude_max_20x":
      return 0.9975;
    default:
      return Bt;
  }
}
class Be {
  currentLimits = {
    status: "allowed",
    unifiedRateLimitFallbackAvailable: !1,
    isUsingOverage: !1
  };
  rawUtilization = {};
  rawWindowLevels = {};
  lastSeenWindows = {};
  lastEmittedWindowParts = {};
  lastEmittedGraceExtraUsageStatus = void 0;
  lastAppliedObservationAtMs = 0;
  accountEpoch = 0;
  limitsObserved = !1;
  retiredAtMs = {};
  longContext1mOkLogged = !1;
  statusChanged = De();
  overageInUse = De();
  quotaRejected = De();
  usageLimitWaits = new Set();
  usageLimitWaitsChanged = De();
  wrapUp = new J();
  pendingNearLimitWrapUpHint = !1;
  nearLimitWrapUpWindowKey = null;
  isFromPreviousAccount(e) {
    return e !== void 0 && e !== this.accountEpoch;
  }
  isStaleObservation(e) {
    if (e < this.lastAppliedObservationAtMs) return !0;
    return this.lastAppliedObservationAtMs = e, this.limitsObserved = !0, !1;
  }
  applyWindowReadings(e, i, n, r) {
    let {
      overageDisabledReason: overageDisabledReason_3
    } = i;
    if (overageDisabledReason_3 !== void 0 && overageDisabledReason_3 !== "fetch_error" && overageDisabledReason_3 !== "unknown") this.retireWindows(["overage"], n);
    if (!r) {
      this.rawUtilization = ze(e), this.rawWindowLevels = {};
      for (let [d] of k) {
        let {
          status: status_3,
          surpassedThreshold: surpassedThreshold_3
        } = e[d] ?? {};
        if (status_3 !== void 0 || surpassedThreshold_3 !== void 0) this.rawWindowLevels[d] = {
          ...(status_3 !== void 0 && {
            status: status_3
          }),
          ...(surpassedThreshold_3 !== void 0 && {
            surpassedThreshold: surpassedThreshold_3
          })
        };
      }
    }
    this.recordSeenWindows(e, i, n);
  }
  recordSeenWindows(e, {
    upgradePaths: upgradePaths_4,
    unifiedRateLimitFallbackAvailable: unifiedRateLimitFallbackAvailable_4
  }, observedAtMs) {
    let s = ze(e);
    for (let [d] of k) {
      if (this.isRetiredReading(d, observedAtMs)) continue;
      let m = s[d],
        h = this.lastSeenWindows[d];
      if (RDe(m) && (h === void 0 || observedAtMs >= h.observedAtMs)) {
        let surpassedThreshold_4 = e[d]?.surpassedThreshold;
        this.lastSeenWindows[d] = {
          ...m,
          observedAtMs: observedAtMs,
          ...(surpassedThreshold_4 !== void 0 && {
            surpassedThreshold: surpassedThreshold_4
          }),
          ...(upgradePaths_4 && {
            upgradePaths: upgradePaths_4
          }),
          unifiedRateLimitFallbackAvailable: unifiedRateLimitFallbackAvailable_4
        };
      }
    }
  }
  currentWindows(e) {
    let i = this.lastAppliedObservationAtMs - xt,
      n = {};
    for (let [r] of k) {
      let s = this.lastSeenWindows[r];
      if (s !== void 0 && s.observedAtMs >= i && Ve(s, e)) n[r] = s;
    }
    return n;
  }
  deriveTrackedLimits(e, i, n, r) {
    if (e.status !== "allowed") return e;
    let s = Oe(),
      d = s ? this.currentWindows(r) : {},
      m = {},
      h = {};
    for (let [y] of k) {
      let A = d[y];
      if (A !== void 0 && A.utilization < 1 && (A.surpassedThreshold === void 0 || A.surpassedThreshold < 1)) h[y] = A;
      let E = i[y];
      if (E !== void 0 && kt(E) && !(s && this.isRetiredReading(y, n))) m[y] = E, h[y] = E;
    }
    let _ = Ge(h, e.unifiedRateLimitFallbackAvailable);
    if (!_) return e;
    for (let [y] of k) {
      let A = d[y];
      if (y === _.rateLimitType && m[y] === void 0 && A !== void 0) return ce({
        ..._,
        unifiedRateLimitFallbackAvailable: A.unifiedRateLimitFallbackAvailable
      }, A.upgradePaths, e);
    }
    return ce(_, e.upgradePaths, e);
  }
  resetCurrentLimits() {
    this.currentLimits = {
      status: "allowed",
      unifiedRateLimitFallbackAvailable: !1,
      isUsingOverage: !1
    }, this.rawUtilization = {}, this.rawWindowLevels = {}, this.lastSeenWindows = {}, this.lastEmittedWindowParts = {}, this.lastEmittedGraceExtraUsageStatus = void 0, this.accountEpoch++, this.lastAppliedObservationAtMs = Date.now(), this.retireWindows(void 0, this.lastAppliedObservationAtMs), this.limitsObserved = !1;
  }
  forgetHeldWindows(e) {
    let i = Date.now();
    this.retireWindows(e, i);
    for (let [s] of k) if (e === void 0 || e.includes(s)) delete this.rawWindowLevels[s];
    let {
      status: status_4,
      rateLimitType: rateLimitType_6
    } = this.currentLimits;
    if (Oe() && status_4 === "allowed_warning" && rateLimitType_6 !== void 0 && (e === void 0 || e.includes(rateLimitType_6))) {
      let s = this.deriveTrackedLimits(Dt(this.currentLimits), {}, i, i);
      if (!ln(this.currentLimits, s)) try {
        this.emitStatusChange(s);
      } catch (error) {
        a(error);
      }
    }
  }
  isRetiredReading(e, i) {
    let n = this.retiredAtMs[e];
    return n !== void 0 && i <= n;
  }
  retireWindows(e, i) {
    for (let [n] of k) {
      if (e !== void 0 && !e.includes(n)) continue;
      let r = this.retiredAtMs[n];
      if (r === void 0 || i > r) this.retiredAtMs[n] = i;
      let s = this.lastSeenWindows[n];
      if (s !== void 0 && s.observedAtMs <= i) delete this.lastSeenWindows[n];
    }
  }
  emitStatusChange(e) {
    let currentLimits = this.currentLimits;
    if (this.currentLimits = e, this.limitsObserved = !0, RDe(this.rawUtilization.five_hour)) this.lastEmittedWindowParts.five_hour = F(this.rawUtilization.five_hour, this.rawWindowLevels.five_hour);
    if (RDe(this.rawUtilization.seven_day)) this.lastEmittedWindowParts.seven_day = F(this.rawUtilization.seven_day, this.rawWindowLevels.seven_day);
    if (RDe(this.rawUtilization.seven_day_overage_included)) this.lastEmittedWindowParts.seven_day_overage_included = F(this.rawUtilization.seven_day_overage_included, this.rawWindowLevels.seven_day_overage_included);
    if (this.lastEmittedGraceExtraUsageStatus = this.wrapUp.getZone()?.extraUsageStatus, this.statusChanged.emit(e), currentLimits.status === e.status && currentLimits.isUsingOverage === e.isUsingOverage) return;
    let hoursTillReset = Math.round((e.resetsAt ? e.resetsAt - Date.now() / 1000 : 0) / 3600 * 10) / 10;
    l("tengu_claudeai_limits_status_changed", {
      status: f(e.status),
      previousStatus: f(currentLimits.status),
      rateLimitType: de(e.rateLimitType),
      isUsingOverage: e.isUsingOverage,
      unifiedRateLimitFallbackAvailable: e.unifiedRateLimitFallbackAvailable,
      hoursTillReset: hoursTillReset
    });
  }
  restoreLimits(e, i) {
    this.currentLimits = e, this.limitsObserved = i, this.statusChanged.emit(e);
  }
  async probeQuotaStatus(e, i, n, r) {
    if (St()) return null;
    if (!sPn(Rt())) return null;
    if (ye() && !r?.probeInNonInteractiveSession) return null;
    let accountEpoch = this.accountEpoch;
    try {
      let d = await Fe(e, i),
        m = this.extractQuotaStatusFromHeaders(d.headers, e, !1, Date.now(), accountEpoch, n);
      if (this.isFromPreviousAccount(accountEpoch)) return null;
      return m ?? $e(cIt(d.headers), this.wrapUp.getZone() !== null);
    } catch (error) {
      if (error instanceof It) {
        if (r?.onlyLimiterRefusals && cIt(error.headers ?? new globalThis.Headers()).get("anthropic-ratelimit-unified-status") !== "rejected") return null;
        this.extractQuotaStatusFromError(error, "other", Date.now(), accountEpoch, n);
      }
      return null;
    }
  }
  extractQuotaStatusFromHeaders(e, i, n = !1, r = Date.now(), s, d) {
    if (this.isFromPreviousAccount(s)) return null;
    let m = Rt();
    if (!sPn(m)) {
      if (this.rawUtilization = {}, this.rawWindowLevels = {}, this.lastSeenWindows = {}, this.currentLimits.status !== "allowed" || this.currentLimits.resetsAt || this.currentLimits.rateLimitGraceActive) {
        let b = {
          status: "allowed",
          unifiedRateLimitFallbackAvailable: !1,
          isUsingOverage: !1
        };
        this.emitStatusChange(b);
      }
      return null;
    }
    let h = cIt(e),
      _ = this.wrapUp.getZone(),
      {
        base: base_2,
        own: own,
        readings: readings_2
      } = le(h, _ !== null);
    if (Ne(h, d), yUi(h, r), n && !this.longContext1mOkLogged) this.longContext1mOkLogged = !0, g("context_1m_entitlement");
    let S = this.isStaleObservation(r);
    if (this.applyWindowReadings(readings_2, base_2, r, S), !S) {
      if (this.nearLimitWrapUpWindowKey !== null && Date.now() / 1000 > this.nearLimitWrapUpWindowKey) this.pendingNearLimitWrapUpHint = !1, this.nearLimitWrapUpWindowKey = null;
      let five_hour = this.rawUtilization.five_hour;
      if (five_hour !== void 0 && Number.isFinite(five_hour.resets_at) && Number.isFinite(five_hour.utilization) && five_hour.resets_at * 1000 > Date.now()) {
        let L = qt(Yk());
        if (five_hour.utilization >= L && !RL()) {
          if (base_2.overageStatus === "allowed" || base_2.overageStatus === "allowed_warning") this.pendingNearLimitWrapUpHint = !1;else if (this.nearLimitWrapUpWindowKey !== five_hour.resets_at) this.pendingNearLimitWrapUpHint = !0, this.nearLimitWrapUpWindowKey = five_hour.resets_at;
        }
      }
      let w = this.deriveTrackedLimits(base_2, readings_2, r, Date.now());
      if (!ln(this.currentLimits, w)) this.emitStatusChange(w);else {
        let L = RDe(this.rawUtilization.five_hour) ? this.rawUtilization.five_hour : void 0,
          x = RDe(this.rawUtilization.seven_day) ? this.rawUtilization.seven_day : void 0,
          U = RDe(this.rawUtilization.seven_day_overage_included) ? this.rawUtilization.seven_day_overage_included : void 0,
          rawWindowLevels = this.rawWindowLevels;
        if (L !== void 0 && F(L, rawWindowLevels.five_hour) !== this.lastEmittedWindowParts.five_hour || x !== void 0 && F(x, rawWindowLevels.seven_day) !== this.lastEmittedWindowParts.seven_day || U !== void 0 && F(U, rawWindowLevels.seven_day_overage_included) !== this.lastEmittedWindowParts.seven_day_overage_included || _?.extraUsageStatus !== this.lastEmittedGraceExtraUsageStatus) this.emitStatusChange(w);
      }
    } else {
      let {
          rateLimitGraceActive: rateLimitGraceActive,
          ...w
        } = this.currentLimits,
        L = {
          ...(_ !== null && w.status === "allowed_warning" ? Nt(w) : w),
          ...(_ !== null && {
            rateLimitGraceActive: !0
          })
        };
      if (!ln(this.currentLimits, L) || _?.extraUsageStatus !== this.lastEmittedGraceExtraUsageStatus) this.emitStatusChange(L);
    }
    if (own.overageInUse === !0) {
      let b = own.isUsingOverage === !0 && own.rateLimitType !== "seven_day_overage_included",
        w = QX(i);
      if (!b && !n && !CL() && w !== void 0 && !Mq() && !IZt() && !tmt(w)) dKn(!0);
      this.overageInUse.emit(i, own.isUsingOverage === !0, n);
    }
    return own;
  }
  resetGraceState() {
    this.wrapUp.leave();
  }
  resetNearLimitWrapUpState() {
    this.pendingNearLimitWrapUpHint = !1, this.nearLimitWrapUpWindowKey = null;
  }
  extractGraceStatusFromHeaders(e, i, n = Date.now(), r) {
    if (i && !this.isFromPreviousAccount(r)) this.wrapUp.applyResponse(e, n);
  }
  consumePendingNearLimitWrapUpHint() {
    if (!this.pendingNearLimitWrapUpHint) return !1;
    return this.pendingNearLimitWrapUpHint = !1, !RL();
  }
  beginUsageLimitWait(e) {
    return this.usageLimitWaits.add(e), this.emitUsageLimitWaitsChanged(), () => {
      if (this.usageLimitWaits.delete(e)) this.emitUsageLimitWaitsChanged();
    };
  }
  emitUsageLimitWaitsChanged() {
    try {
      this.usageLimitWaitsChanged.emit();
    } catch (error) {
      a(error);
    }
  }
  extractQuotaStatusFromError(e, i, n = Date.now(), r, s) {
    let d = e.status === void 0 && lXi(e) && Tt();
    if (this.isFromPreviousAccount(r) || !sPn(Rt()) || e.status !== 429 && !d) return;
    if (Te() === "gateway" && !e.headers?.get?.("anthropic-ratelimit-unified-status")) return;
    try {
      let m = this.isStaleObservation(n),
        h = this.currentLimits.status,
        _ = this.currentLimits.isUsingOverage,
        priorFiveHourUtilization = this.rawUtilization.five_hour?.utilization,
        priorSevenDayUtilization = this.rawUtilization.seven_day?.utilization,
        priorOverageUtilization = this.rawUtilization.overage?.utilization,
        S = {
          ...this.currentLimits
        };
      if (e.headers) {
        let w = cIt(e.headers),
          L = le(w, this.wrapUp.getZone() !== null);
        if (S = L.own, this.applyWindowReadings(L.readings, L.base, n, m), !d) Ne(w, s);else if (Te() !== "gateway") rXt("out_of_credits", s);
        if (w.get("anthropic-ratelimit-unified-status") !== null) this.wrapUp.onRefused();
      }
      if (S = qe(S, e), d) {
        let {
          overageInUse: overageInUse_2,
          ...L
        } = S;
        S = {
          ...L,
          overageStatus: "rejected",
          overageDisabledReason: "out_of_credits",
          isUsingOverage: !1
        };
      }
      if ((h !== "rejected" || _) && !(h === "allowed" && !_ && priorFiveHourUtilization === void 0 && priorSevenDayUtilization === void 0 && priorOverageUtilization === void 0) && !d) {
        let w = S.rateLimitType === "five_hour" ? priorFiveHourUtilization : S.rateLimitType?.startsWith("seven_day") ? priorSevenDayUtilization : S.rateLimitType === "overage" ? priorOverageUtilization : Math.max(priorFiveHourUtilization ?? 0, priorSevenDayUtilization ?? 0, priorOverageUtilization ?? 0);
        if (w === void 0 || w < 0.8) l("tengu_quota_mismatch", {
          priorStatus: f(h),
          priorIsUsingOverage: _,
          priorFiveHourUtilization: priorFiveHourUtilization,
          priorSevenDayUtilization: priorSevenDayUtilization,
          priorOverageUtilization: priorOverageUtilization,
          rateLimitType: de(S.rateLimitType) ?? void 0,
          subscriptionType: de(dr()) ?? void 0,
          hadPriorUtilizationData: priorFiveHourUtilization !== void 0 || priorSevenDayUtilization !== void 0 || priorOverageUtilization !== void 0
        });
      }
      if (!m) try {
        this.quotaRejected.emit(S, i);
      } catch (error) {
        a(error);
      }
      if (!m && !ln(this.currentLimits, S)) this.emitStatusChange(S);
    } catch (error) {
      a(error);
    }
  }
}
var R = new Be();
function mi() {
  return R.currentLimits;
}
function cZ() {
  return Qt(R.rawUtilization);
}
function OCi() {
  return R.rawWindowLevels;
}
function Mas(e) {
  return R.rawWindowLevels[e]?.surpassedThreshold ?? R.currentWindows(Date.now())[e]?.surpassedThreshold;
}
function Das() {
  let e = R.currentWindows(Date.now()),
    i = {};
  for (let [n] of k) {
    let r = e[n];
    if (r) i[n] = {
      utilization: r.utilization,
      resets_at: r.resets_at
    };
  }
  return i;
}
function Qt(e) {
  let i = Date.now(),
    n = {};
  for (let [r] of k) {
    let s = e[r];
    if (s !== void 0 && Ve(s, i)) n[r] = s;
  }
  return n;
}
function Ve(e, i) {
  let n = i / 1000,
    r = n + 31536000;
  return RDe(e) && e.resets_at > n && e.resets_at < r;
}
function fg() {
  return R.accountEpoch;
}
function aoe() {
  return R.limitsObserved;
}
function wmr() {
  return R.lastAppliedObservationAtMs;
}
function Tye(e) {
  return R.statusChanged.subscribe(e);
}
function ICi(e) {
  return R.overageInUse.subscribe(e);
}
function kmr(e) {
  return R.quotaRejected.subscribe(e);
}
function MCi(e) {
  return R.beginUsageLimitWait(e);
}
function DCi() {
  return [...R.usageLimitWaits];
}
function LCi(e) {
  return R.usageLimitWaitsChanged.subscribe(e);
}
function vmr() {
  R.resetCurrentLimits();
}
function pWe(e) {
  R.forgetHeldWindows(e);
}
function k9e(e) {
  R.emitStatusChange(e);
}
function NCi(e, i) {
  R.restoreLimits(e, i);
}
async function pIt(e, i) {
  await R.probeQuotaStatus($be(), e, i);
}
function mIt(e, i, n, r) {
  return R.probeQuotaStatus(e, i, n, r);
}
function Las(e, i, n = !1, r = Date.now(), s, d) {
  return R.extractQuotaStatusFromHeaders(e, i, n, r, s, d);
}
function Emr(e, i, n = Date.now(), r, s) {
  R.extractQuotaStatusFromError(e, i, n, r, s);
}
function oXt(e) {
  let i = cIt(e.headers ?? new globalThis.Headers());
  return qe($e(i, !1), e);
}
function qe(e, i) {
  return {
    ...e,
    status: "rejected",
    ...Oas(i)
  };
}
function FCi() {
  R.resetGraceState();
}
function HCi() {
  R.resetNearLimitWrapUpState();
}
function $Ci(e, i, n = Date.now(), r) {
  R.extractGraceStatusFromHeaders(e, i, n, r);
}
function Nas() {
  R.wrapUp.onMainTurnStart();
}
function UCi() {
  return R.wrapUp.takeTurnNote();
}
function BCi() {
  R.wrapUp.markStartNotePlaced();
}
function Yt(e = Date.now()) {
  return R.wrapUp.continueAfterWrapUpAt(e);
}
function lPn(e = Date.now()) {
  let i = Yt(e);
  return i === null || R.currentLimits.dailyCapPaused === !0 ? null : {
    status: "rejected",
    resetsAt: i.resetsAt,
    rateLimitType: i.rateLimitType,
    unifiedRateLimitFallbackAvailable: !1
  };
}
function Fas() {
  return R.wrapUp.subagentNoteDue();
}
function v9e() {
  return R.wrapUp.getZone();
}
function jCi() {
  return R.consumePendingNearLimitWrapUpHint();
}
function Qe(e) {
  let i = e?.get?.(fUi);
  if (i === "service" || i === "channel" || i === "group_pool" || i === "organization") return i;
  return;
}
var pq = "main";
function kas(e, i) {
  return !i && (e.startsWith("repl_main_thread") || e === "sdk" || e === "compact");
}
var Kt = 2000,
  Zt = 200,
  Ye = {
    "5m": s1,
    "1h": pA
  };
var aCi = {
  system_prompt_changed: "system prompt changed",
  tools_changed: "tool definitions changed",
  model_changed: "model changed",
  fast_mode_changed: "fast mode toggled",
  cache_scope_or_ttl_changed: "cache scope or TTL changed",
  betas_changed: "beta headers changed",
  effort_changed: "effort changed",
  thinking_mode_changed: "thinking toggled",
  thinking_display_changed: "thinking display changed",
  auto_mode_changed: "auto mode toggled",
  overage_changed: "usage-limit state changed",
  extra_body_changed: "extra request fields changed",
  defer_loading_changed: "deferred tool loading changed",
  messages_rewritten: "earlier messages changed",
  ttl_expired_5m: "idle past the 5m TTL",
  ttl_expired_1h: "idle past the 1h TTL",
  likely_server_side: "prompt unchanged \u2014 likely server-side",
  unknown: "unknown"
};
class me {
  entries = [];
  requests = 0;
  hits = 0;
  misses = 0;
  expectedRebuilds = 0;
  coldStarts = 0;
  cacheReadTokens = 0;
  cacheCreationTokens = 0;
  inputTokens = 0;
  missRecacheTokens = 0;
  lastMissAt = null;
  lastMissAttribution = null;
  missCauses = {};
  pendingAttribution = null;
  dropExpectedAt = null;
  touchedAt = null;
  touch(e) {
    if (this.entries.length > 0) this.touchedAt = Math.max(this.touchedAt ?? 0, e);
  }
  expectDrop(e) {
    this.dropExpectedAt = e;
  }
  attribute(e) {
    this.pendingAttribution = e;
  }
  record(e) {
    let i = this.entries.at(-1) ?? null,
      dropExpectedAt = this.dropExpectedAt;
    this.dropExpectedAt = null;
    let r = this.pendingAttribution;
    this.pendingAttribution = null;
    let s = dropExpectedAt !== null && i !== null && e.at - Math.max(i.at, this.touchedAt ?? 0) < Ye[i.ttl],
      outcome,
      m = this.cacheReadTokens + this.cacheCreationTokens > 0 || e.cacheReadTokens + e.cacheCreationTokens > 0;
    if (i === null) outcome = "cold";else if (!m) outcome = "uncached";else if (i.cacheReadTokens + i.cacheCreationTokens === 0 && e.cacheReadTokens + e.cacheCreationTokens > 0) outcome = "cold";else {
      let y = i.inputTokens + i.cacheReadTokens + i.cacheCreationTokens,
        A = e.inputTokens + e.cacheReadTokens + e.cacheCreationTokens,
        E = Math.min(y, A),
        S = E - e.cacheReadTokens;
      outcome = e.cacheReadTokens < E * 0.95 && S >= Kt ? s ? "expected" : "miss" : "hit";
    }
    let ttl = e.cacheCreationTokens === 0 && i !== null ? i.ttl : e.ttl,
      _ = outcome === "miss" && r !== null ? {
        ...e,
        ttl: ttl,
        outcome: outcome,
        attribution: r
      } : {
        ...e,
        ttl: ttl,
        outcome: outcome
      };
    if (this.entries.push(_), this.entries.length > Zt) this.entries.shift();
    switch (this.requests++, this.cacheReadTokens += e.cacheReadTokens, this.cacheCreationTokens += e.cacheCreationTokens, this.inputTokens += e.inputTokens, outcome) {
      case "hit":
        this.hits++;
        break;
      case "miss":
        this.misses++, this.missRecacheTokens += e.cacheCreationTokens, this.lastMissAt = e.at, this.lastMissAttribution = r;
        for (let y of r?.causes ?? []) this.missCauses[y] = (this.missCauses[y] ?? 0) + 1;
        break;
      case "expected":
        this.expectedRebuilds++;
        break;
      case "cold":
        this.coldStarts++;
        break;
      case "uncached":
        break;
    }
    return _;
  }
  summary(e) {
    let i = this.cacheReadTokens + this.cacheCreationTokens + this.inputTokens,
      lastRequest = this.entries.at(-1) ?? null,
      r = Ye[lastRequest?.ttl ?? "5m"],
      cachingObserved = this.cacheReadTokens + this.cacheCreationTokens > 0,
      d = lastRequest !== null && lastRequest.cacheReadTokens + lastRequest.cacheCreationTokens > 0,
      m = lastRequest !== null ? Math.max(lastRequest.at, this.touchedAt ?? 0) : 0;
    return {
      requests: this.requests,
      hits: this.hits,
      misses: this.misses,
      expectedRebuilds: this.expectedRebuilds,
      coldStarts: this.coldStarts,
      hitRatio: i > 0 ? this.cacheReadTokens / i : null,
      cacheWriteTokens: this.cacheCreationTokens,
      missRecacheTokens: this.missRecacheTokens,
      lastMissAt: this.lastMissAt,
      lastMissAttribution: this.lastMissAttribution,
      missCauses: {
        ...this.missCauses
      },
      lastRequest: lastRequest,
      cachingObserved: cachingObserved,
      lastActivityAt: lastRequest !== null ? m : null,
      expiresAt: lastRequest !== null && d ? m + r : null,
      warm: lastRequest !== null && d && e - m < r
    };
  }
}
class Ke {
  #e = new Map();
  record(e, i) {
    let n = this.#e.get(e);
    if (n === void 0) n = new me(), this.#e.set(e, n);
    return n.record(i);
  }
  expectDrop(e, i) {
    this.#e.get(e)?.expectDrop(i);
  }
  attribute(e, i) {
    this.#e.get(e)?.attribute(i);
  }
  touch(e, i) {
    this.#e.get(e)?.touch(i);
  }
  summary(e, i) {
    return (this.#e.get(e) ?? new me()).summary(i);
  }
  estimateRecacheTokens(e) {
    let i = this.#e.get(e),
      n = i?.entries.at(-1);
    if (!n) return 0;
    if (i?.dropExpectedAt != null) return null;
    return n.inputTokens + n.cacheReadTokens + n.cacheCreationTokens;
  }
  clear(e) {
    if (e === void 0) this.#e.clear();else this.#e.delete(e);
  }
}
var vas = new Je(() => new Ke());
function z() {
  return vas.of(H());
}
function lCi(e, i) {
  try {
    return z().record(e, i);
  } catch (error) {
    return a(error), null;
  }
}
function dCi(e, i) {
  try {
    z().attribute(e, i);
  } catch (error) {
    a(error);
  }
}
function Rso(e, i) {
  try {
    z().touch(e, i);
  } catch (error) {
    a(error);
  }
}
function rut(e = pq, i = Date.now()) {
  try {
    z().expectDrop(e, i);
  } catch (error) {
    a(error);
  }
}
function Xde(e = pq, i = Date.now()) {
  return z().summary(e, i);
}
function Aso(e = pq) {
  return z().estimateRecacheTokens(e);
}
function cCi() {
  return rf((e, i) => {
    if (i === "cd" || i === "hydrate") return;
    z().clear();
  });
}
export { pq, kas, aCi, vas, lCi, dCi, Rso, rut, Xde, Aso, cCi, cIt, sPn, uCi, fCi, _mr, xso, TDe, pCi, Q9t, uIt, Pso, Z9t, eXt, fIt, mCi, S9e, CDe, Eas, Tas, iPn, hCi, tXt, aL, gCi, bmr, Cas, Eye, Oso, Ras, Aas, xas, yCi, _Ci, Pas, nXt, w9e, bCi, RDe, SCi, Oas, rXt, wCi, Iso, kCi, vCi, ECi, TCi, CCi, aPn, Ias, RCi, Smr, ACi, xCi, PCi, mi, cZ, OCi, Mas, Das, fg, aoe, wmr, Tye, ICi, kmr, MCi, DCi, LCi, vmr, pWe, k9e, NCi, pIt, mIt, Las, Emr, oXt, FCi, HCi, $Ci, Nas, UCi, BCi, lPn, Fas, v9e, jCi };