// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  F,
  L,
  j,
  ms,
  K4,
  tre,
  nf,
  qjt,
  Dw
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  c,
  pe
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  H,
  d,
  k,
  G,
  pi,
  Sye
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Y,
  Nt
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  bt,
  _,
  se,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  vp,
  ln
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  i,
  Qs
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  xe,
  bp,
  zun
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  g$o,
  S4,
  yqs,
  vBt,
  p5,
  h$o,
  kBt,
  EBt,
  y$o,
  m_t,
  Kun,
  Yun,
  Xun,
  Eqs,
  Tqs,
  Cqs,
  sTe,
  fze,
  _$o,
  WQe,
  dm
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Ct
} from "B:/~BUN/root/chunk-28dw3zbk.js";
import {
  H2,
  Ff,
  Zy
} from "B:/~BUN/root/chunk-07c8fw5z.js";
import {
  Z4n,
  zHt,
  c1s,
  SDr,
  fd,
  y$t,
  pc,
  Xb,
  Ya,
  Wln,
  YE,
  Fm,
  Fn,
  cJ,
  zC,
  Kg,
  Kln,
  Yln,
  dJe,
  E$t,
  Xa,
  cJe,
  ble,
  Et,
  np,
  dB,
  rMe,
  oMe,
  lv,
  w6n,
  v6n,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  r$
} from "B:/~BUN/root/chunk-245a2x6v.js";
import {
  XT
} from "B:/~BUN/root/chunk-v6pbq6dm.js";
import {
  iVs,
  aVs
} from "B:/~BUN/root/chunk-h9p45fg5.js";
import {
  PEe
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  Fme
} from "B:/~BUN/root/chunk-8pqw0dhk.js";
import {
  Zmt,
  aMr,
  uje,
  mUs,
  gUs,
  hUs,
  Hme,
  Uae,
  Xin,
  lMr,
  kKn,
  gXe,
  ZPo,
  _Us,
  dMr,
  cMr,
  bUs,
  pMr,
  fMr,
  mMr,
  Jin,
  EKn,
  gMr,
  HFt,
  tOo,
  $Ft,
  nOo,
  hMr,
  Bae,
  rOo,
  mIe,
  TKn,
  _Mr,
  CD,
  Qin,
  hXe,
  CKn,
  RKn,
  GE,
  RD,
  sOo,
  iOo,
  bMr,
  dy,
  jX,
  BFt,
  SMr,
  D3,
  aOo,
  wMr,
  lOo,
  vMr,
  jFt,
  kMr,
  dOo,
  AKn,
  cOo,
  xKn,
  TMr,
  _Xe,
  pOo,
  fOo,
  CMr,
  WFt,
  PKn,
  ean,
  bXe,
  RMr,
  _Oo,
  kOo,
  kw
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  XPo
} from "B:/~BUN/root/chunk-h6hab5w2.js";
import {
  lUs
} from "B:/~BUN/root/chunk-9929fpp1.js";
import {
  $ae
} from "B:/~BUN/root/chunk-9m22xva0.js";
import {
  yIe
} from "B:/~BUN/root/chunk-r0sre1ss.js";
import {
  aE
} from "B:/~BUN/root/chunk-3q5m6gqn.js";
import {
  hs
} from "B:/~BUN/root/chunk-qjf8jcwq.js";
import {
  ezo,
  yt
} from "B:/~BUN/root/chunk-hz8x9zsh.js";
var Ut = new z(() => Me());

function st() {
  return Ut.of(j().host)
}

function sMr() {
  st().emit()
}

function at(e) {
  return st().subscribe(e)
}
import {
  statSync as ai
} from "fs";
import {
  unlink as di,
  utimes as li,
  writeFile as ci
} from "fs/promises";

function Win() {
  if (dm()) return lUs();
  if (a.CLAUDE_CODE_OAUTH_TOKEN) return "env_var";
  let e = qjt("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");
  if (e !== void 0) return e;
  if (a.ANTHROPIC_API_KEY) return "env_var";
  return qjt("CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR") ?? "none"
}

function Ae(e, r, n = {}) {
  let o = setInterval(e, r);
  if (n.unref) o.unref?.();
  return {
    [Symbol.dispose]: () => clearInterval(o)
  }
}
var Kt = 3;

function Wt() {
  let e = E("tengu_zippy_gosling", 0);
  return typeof e === "number" && Number.isFinite(e) ? e : 0
}

function LPo(e) {
  let r = Math.max(nf(), tre() ?? 0);
  return !Fme() && Date.now() - r > e
}

function hKn(e, r, n = {}) {
  let o = 0,
    s = null,
    h = null,
    f = Ae(v, r, n);

  function y() {
    if (s?.(), s = null, h !== null) clearTimeout(h), h = null
  }

  function C() {
    o = 0, y(), e()
  }

  function v() {
    let S = Wt();
    if (!(S > 0 && LPo(S)) || o >= Kt) {
      C();
      return
    }
    o++, s ??= K4(() => {
      h ??= setTimeout(() => {
        f[Symbol.dispose](), f = Ae(v, r, n), C()
      }, 0)
    })
  }
  return {
    [Symbol.dispose]: () => {
      f[Symbol.dispose](), y()
    }
  }
}

function zin(e) {
  let r = e?.response?.data?.error;
  if (!r || typeof r !== "object") return {};
  let n = typeof r.type === "string" ? r.type : void 0,
    o = r.details?.error_code,
    s = typeof o === "string" ? o : typeof r.error_code === "string" ? r.error_code : typeof r.code === "string" ? r.code : void 0,
    h = typeof r.message === "string" ? r.message : void 0,
    f = s === void 0 && h !== void 0 && (n === "authentication_error" || n === "permission_error") ? $t(h) : void 0;
  return {
    serverErrorType: n === void 0 ? void 0 : gUs.includes(n) ? n : "other",
    serverErrorCode: s === void 0 ? void 0 : hUs.includes(s) ? s : "other",
    ...f !== void 0 && {
      serverAuthDenial: f
    }
  }
}

function $t(e) {
  if (e.startsWith("Organization access has been revoked")) return "org_access_revoked";
  if (e.startsWith("Workspace access has been revoked")) return "workspace_revoked";
  if (/^OAuth (?:access )?token has been revoked\b/.test(e)) return "token_revoked";
  if (/^OAuth (?:access )?token has expired\b/.test(e)) return "token_expired";
  if (e.startsWith("OAuth access token is invalid") || e.startsWith("Invalid bearer token")) return "token_invalid";
  if (e.startsWith("OAuth token application has been deactivated")) return "application_deactivated";
  if (e.startsWith("Credential is invalid")) return "credential_invalid";
  return "other"
}
class ut {
  settings = void 0;
  policy = void 0;
  settingsBarrier = void 0;
  policyBarrier = void 0;
  isDefaultCommand = void 0;
  openStartupBlocks = 0;
  policyGate = void 0;
  settingsReader = void 0;
  orgGateShadow = void 0;
  logged = !1;
  unregisterExitFlush = void 0
}
var jt = new z(() => new ut);

function Oe(e = performance.now()) {
  return Dw() ? void 0 : Math.round(e)
}

function dt(e, r) {
  return e === void 0 || r === void 0 ? void 0 : Math.max(e, r)
}

function q(e) {
  try {
    let r = ms(jt);
    if (r.logged) return;
    r.unregisterExitFlush ??= bt(() => q((n) => De(n, "exit"))), e(r)
  } catch (r) {
    l(H(r))
  }
}

function Y$s(e) {
  q((r) => {
    r.isDefaultCommand ??= e
  })
}

function Fe(e) {
  q((r) => {
    r.policyGate ??= e
  })
}

function X$s(e) {
  q((r) => {
    r.settingsReader ??= e
  })
}

function J$s(e) {
  q((r) => {
    r.orgGateShadow ??= e
  })
}
var Le = new Set(["ineligible", "superseded"]);

function BX(e, r) {
  q((n) => {
    let o = n[e];
    if (o !== void 0 && !Le.has(o.source)) return;
    n[e] = {
      ...r,
      settledMs: Oe()
    }, Ie(n)
  })
}

function uXe(e, r, {
  since: n,
  supersede: o = !1
} = {}) {
  q((s) => {
    pt(s, e, r, n, o), Ie(s)
  })
}

function eMr(e, {
  supersede: r = !1
} = {}) {
  let n = performance.now(),
    o = !1;
  return q((s) => {
    s.openStartupBlocks++, o = !0
  }), (s) => q((h) => {
    if (!o) return;
    o = !1, h.openStartupBlocks--, pt(h, e, s, n, r), Ie(h)
  })
}

function pt(e, r, n, o, s) {
  let h = r === "settings" ? "settingsBarrier" : "policyBarrier";
  if (e[h] !== void 0 && !s) return;
  let f = performance.now();
  e[h] = {
    result: typeof n === "function" ? n() : n,
    waitMs: o === void 0 ? 0 : Math.round(f - o),
    crossedMs: Oe(f)
  }
}

function Gin() {
  let e = Promise.resolve();
  return q((r) => {
    let n = He(r.policyGate);
    e = Qs(ht, mt(r, "exit", n)).catch((o) => {
      l(H(o))
    }), ft(r, n)
  }), e
}

function Q$s() {
  q((e) => De(e, "first_prompt"))
}

function Ie(e) {
  if (e.settings && e.policy && e.settingsBarrier && e.policyBarrier && !Le.has(e.settings.source) && !Le.has(e.policy.source) && e.openStartupBlocks === 0) De(e, "both_resolved")
}
var ht = "tengu_managed_config_ready",
  qt = "tengu_org_config_gate_shadow";

function De(e, r) {
  let n = He(e.policyGate);
  i(ht, mt(e, r, n)), ft(e, n)
}

function ft(e, r) {
  if (e.orgGateShadow === void 0) return;
  try {
    i(qt, e.orgGateShadow({
      settings: e.settings,
      policy: e.policy,
      policyGateFields: r
    }))
  } catch (n) {
    l(H(n))
  }
}

function mt(e, r, n) {
  e.logged = !0, e.unregisterExitFlush?.();
  let {
    settings: o,
    policy: s,
    settingsBarrier: h,
    policyBarrier: f
  } = e;
  return {
    trigger: c(r),
    emitted_ms: Oe(),
    is_default_command: e.isDefaultCommand,
    settled_ms: dt(o?.settledMs, s?.settledMs),
    barrier_crossed_ms: dt(h?.crossedMs, f?.crossedMs),
    ...lt("settings", o),
    ...ct("settings", h),
    ...He(e.settingsReader),
    ...lt("policy", s),
    ...ct("policy", f),
    ...n
  }
}

function He(e) {
  if (e === void 0) return {};
  try {
    return e()
  } catch (r) {
    return l(H(r)), {}
  }
}

function lt(e, r) {
  return {
    [`${e}_source`]: r ? c(r.source) : c("pending"),
    [`${e}_had_cache`]: r?.hadCache,
    [`${e}_awaited`]: r?.awaited,
    [`${e}_fetch_ms`]: r?.fetchMs,
    [`${e}_settled_ms`]: r?.settledMs
  }
}

function ct(e, r) {
  return {
    [`${e}_barrier`]: r ? c(r.result) : c("not_reached"),
    [`${e}_barrier_wait_ms`]: r?.waitMs
  }
}

function Vin(e) {
  let r = new AbortController;
  return {
    attempt: e(r.signal),
    abort: () => r.abort()
  }
}

function tMr({
  first: e,
  send: r,
  isAnswer: n,
  delayMs: o = 3000,
  stillWanted: s = () => !0,
  retryFollows: h = !0
}) {
  return new Promise((f, y) => {
    let C = !1,
      v, S = 1,
      M, b, D = (P) => {
        if (C = !0, clearTimeout(A), e.abort(), v?.abort(), P.ok) f({
          result: P.value,
          hedged: v !== void 0
        });
        else y(P.error)
      },
      T = (P) => {
        P.then((O) => w({
          ok: !0,
          value: O
        }), (O) => w({
          ok: !1,
          error: O
        }))
      },
      w = (P) => {
        if (C) return;
        S--;
        let O = S > 0;
        if (P.ok && n(P.value, O)) {
          D(b && !n(P.value, !0) ? b : P);
          return
        }
        if (O) {
          if (P.ok && n(P.value, !1)) M ??= {
            value: P.value
          };
          else if (P.ok && h) b ??= P;
          return
        }
        D(M && !(P.ok && h) ? {
          ok: !0,
          value: M.value
        } : P)
      },
      A = setTimeout(() => {
        if (C || !s()) return;
        S++, v = Vin(r), T(v.attempt)
      }, o);
    T(e.attempt)
  })
}
class yKn {
  entry = null;
  set(e, r, n = () => !0) {
    this.clear();
    let o = Vin(r),
      s = {
        key: e,
        inFlight: o,
        sentAtMs: Date.now(),
        failed: !1
      };
    o.attempt.then((h) => {
      s.failed = !n(h)
    }, () => {
      s.failed = !0
    }), this.entry = s
  }
  get pending() {
    return this.entry !== null
  }
  take(e) {
    let r = this.entry;
    if (this.entry = null, r === null) return;
    let n = Math.abs(Date.now() - r.sentAtMs) <= 60000;
    if (!r.failed && n && e(r.key)) return r.inFlight;
    r.inFlight.abort();
    return
  }
  clear() {
    this.entry?.inFlight.abort(), this.entry = null
  }
}
async function gt({
  kind: e,
  cachePath: r,
  bodySha: n,
  orgUuid: o,
  accountUuid: s,
  workspaceUuid: h,
  gate: f,
  readOrgPin: y,
  onJudged: C
}) {
  try {
    let v = {
        typ: e,
        aud: o,
        sub: s,
        ws: h
      },
      [S, M] = await Promise.all([Eqs(r), Tqs(r, v)]),
      b = Date.now(),
      D = performance.now(),
      T = {
        jws: S?.jws,
        kind: e,
        orgUuid: o,
        accountUuid: s,
        workspaceUuid: h,
        bodySha: n,
        highWaterIat: M,
        nowMs: b,
        roots: WQe()
      },
      w = kBt({
        ...T,
        unanchoredClaims: "refuse"
      }),
      A = w.result === "aud_mismatch" && o === void 0 || w.result === "sub_mismatch" && s === void 0 ? kBt({
        ...T,
        unanchoredClaims: "accept"
      }) : w,
      P = Math.round((performance.now() - D) * 1000),
      O = Yt({
        held: {
          orgUuid: o,
          accountUuid: s,
          workspaceUuid: h
        },
        readOrgPin: y,
        verification: A
      });
    try {
      C(O)
    } catch (R) {
      t(`signed-cache: telling the loader failed: ${d(R)}`, {
        level: "error"
      })
    }
    let U = w.result === "valid" ? w : f === "enforced" && O.trusted && A.result === "valid" ? A : void 0;
    if (U !== void 0) await Cqs(r, v, Math.min(U.issuedAt, Math.floor(b / 1000)));
    i("tengu_signed_cache_shadow", {
      cache: c(e),
      result: c(w.result),
      age_s: w.ageSeconds,
      cert_hours_left: w.certHoursLeft,
      verify_micros: P,
      has_org_uuid: o !== void 0,
      has_account_uuid: s !== void 0,
      has_workspace_uuid: h !== void 0,
      ws_unanchored: w.wsUnanchored === !0,
      absence: w.absence === !0,
      states_lifetime: w.statesLifetime === !0,
      stored_copy: c(sTe(O))
    })
  } catch (v) {
    t(`Signed cache: shadow check failed (${e}) - ${d(v)}`)
  }
}

function Yt({
  held: e,
  readOrgPin: r,
  verification: n
}) {
  try {
    return _$o({
      verification: n,
      held: e,
      pinnedOrgs: r()
    })
  } catch (o) {
    return t(`signed-cache: the organization pin could not be read: ${d(o)}`, {
      level: "error"
    }), {
      trusted: !1,
      reason: "org_pin_unknown"
    }
  }
}

function nMr({
  kind: e,
  cachePath: r,
  bodySha: n,
  readStoredAccount: o,
  gateEnforced: s,
  readOrgPin: h,
  onJudged: f
}) {
  try {
    let y = o();
    gt({
      kind: e,
      cachePath: r,
      bodySha: n,
      orgUuid: y?.organizationUuid || void 0,
      accountUuid: y?.accountUuid || void 0,
      workspaceUuid: y?.workspaceUuid || void 0,
      gate: s ? "enforced" : "shadow",
      readOrgPin: h,
      onJudged: f
    }).catch(() => {})
  } catch {}
}

function rMr({
  kind: e,
  jws: r,
  trustedPrincipal: n,
  gate: o
}) {
  try {
    if (r === void 0) return;
    let {
      result: s
    } = kBt({
      jws: r,
      kind: e,
      orgUuid: n.orgUuid,
      accountUuid: n.accountUuid,
      workspaceUuid: n.workspaceUuid,
      unanchoredClaims: "refuse",
      bodySha: h$o,
      highWaterIat: void 0,
      nowMs: Date.now(),
      roots: WQe()
    });
    if (s !== "aud_mismatch" && s !== "sub_mismatch") return;
    i("tengu_signed_cache_principal_change", {
      cache: c(e),
      differs: c(s === "aud_mismatch" ? "aud" : "sub"),
      stored_copy_gate: c(o)
    })
  } catch (s) {
    t(`signed-cache: live principal check failed: ${d(s)}`)
  }
}
var zt = [
  ["text/html", "html"],
  ["application/json", "json"],
  ["text/json", "json"],
  ["text/", "text"]
];

function Ge(e) {
  let r = e.toLowerCase();
  return zt.find(([n]) => r.includes(n))?.[1] ?? "other"
}

function Ve(e) {
  if (!e || typeof e !== "object") return !1;
  return $ae(e["request-id"])
}

function _Kn(e) {
  if (!e || typeof e !== "object") return {};
  let r = e;
  return {
    requestIdPresent: Ve(r),
    responseContentType: Ge(String(r["content-type"] ?? ""))
  }
}

function bKn(e) {
  let r = e?.response;
  if (!r || typeof r !== "object") return {};
  return _Kn(r.headers)
}
var Jt = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache"
};

function _t(e) {
  return `${e}${PEe}`
}
async function Ne(e) {
  let r = await Ct.get(e.endpoint, {
      headers: {
        "User-Agent": hs(),
        ...Jt,
        ...e.ifNoneMatch !== void 0 && {
          "If-None-Match": `"${e.ifNoneMatch}"`
        },
        ...e.authHeaders
      },
      timeout: e.timeoutMs,
      maxRedirects: 0,
      adapter: "http",
      validateStatus: e.acceptAny2xx ? (f) => f >= 200 && f < 300 || f === 304 : (f) => f === 200 || f === 304,
      ...e.socketPath !== void 0 && {
        socketPath: e.socketPath
      },
      ...e.signal !== void 0 && {
        signal: e.signal
      }
    }).catch((f) => {
      if (Ct.isAxiosError(f) && f.code === "ECONNABORTED" && f.request?.res) f.code = "ERR_BAD_RESPONSE";
      throw f
    }),
    n = r.headers ?? {},
    o = EBt(n),
    s = n[zHt],
    h = SDr(typeof s === "string" ? s : void 0);
  if (r.status === 304) return {
    kind: "not_modified",
    signature: o,
    tunnelCredentialEpoch: h
  };
  return {
    kind: "ok",
    data: r.data,
    signature: o,
    contentType: String(n["content-type"] ?? "").toLowerCase(),
    requestIdPresent: Ve(n),
    tunnelCredentialEpoch: h
  }
}

function vt(e) {
  if (!Ct.isAxiosError(e)) return;
  let r = e.response?.headers?.[zHt];
  return SDr(typeof r === "string" ? r : void 0)
}
var Xt = new Set(["oauth_not_allowed_for_organization", "organization_disabled", "organization_on_hold", "claude_code_key_creator_not_member", "ip_not_in_allowed_range"]),
  Qt = new Set(["org_access_revoked", "workspace_revoked", "application_deactivated"]),
  Zt = new Set(["token_expired", "token_revoked", "token_invalid", "credential_invalid"]),
  ei = new Set(["restricted_regime_endpoint", "oauth_scope_insufficient"]),
  ti = new Set(["known_dead_refresh_token", "no_refresh_token", "account_on_hold", "not_refreshable"]),
  St = new Set(["lock_timeout", "lock_busy", "lock_compromised", "lock_error", "lock_disk_full", "refresh_failed"]),
  ii = new Set(["refreshed", "not_needed"]);

function oMr(e) {
  let {
    errorCode: r,
    httpStatus: n,
    serverErrorType: o,
    serverErrorCode: s,
    serverAuthDenial: h,
    authUnavailableReason: f,
    authType: y,
    credentialOrigin: C
  } = e, v = y === void 0 || y === "oauth", S = v ? e.tokenRefreshOutcome : void 0, M = v ? e.forcedRefreshOutcome ?? e.tokenRefreshOutcome : void 0;
  if (r === void 0) return "unknown";
  if (s !== void 0 && Xt.has(s) || h !== void 0 && Qt.has(h)) return "dead";
  if (s !== void 0 && ei.has(s)) return "live";
  if (r === "network_error" || r === "timeout" || r === "parse_failed" || r === "spurious_304" || r === "stale_tunnel_credential" || r === "request_failed" && n === void 0 && e.noResponse === !0) return "live";
  if (n === void 0) {
    if (f === "no_oauth_token") return S !== void 0 && St.has(S) ? "unknown" : "dead";
    return "unknown"
  }
  if (n >= 500 || n === 429 || o === "rate_limit_error") return "live";
  if (n === 404 || n === 304) return "live";
  if (n === 401) {
    if (C === "proxy") return "unknown";
    if (y === "api_key") return C === "helper_key" ? "unknown" : "dead";
    let b = o === "authentication_error" || h !== void 0 && Zt.has(h);
    if (C === "injected_token" && b) switch (e.injectedTokenRecovery) {
      case "none":
        return "dead";
      case "sdk_host_refresh":
      case "runner_rotation":
        return "live";
      case void 0:
        break
    }
    if (M === void 0) return "unknown";
    if (ti.has(M)) return "dead";
    if (C === "injected_token") return "unknown";
    if (St.has(M) || ii.has(M)) return "live";
    return "unknown"
  }
  return "unknown"
}
var ri = new Set(mUs);

function ni(e) {
  return ri.has(e)
}
var oi = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "SELF_SIGNED_CERT_IN_CHAIN", "DEPTH_ZERO_SELF_SIGNED_CERT", "CERT_HAS_EXPIRED", "CERT_NOT_YET_VALID", "CERT_UNTRUSTED", "CERT_REJECTED", "CERT_SIGNATURE_FAILURE", "ERR_TLS_CERT_ALTNAME_INVALID", "HOSTNAME_MISMATCH"]),
  si = new Set(["ECONNABORTED", "ERR_CANCELED"]);

function Pt(e) {
  if (e === void 0) return;
  if (ni(e)) return e;
  if (oi.has(e)) return "CERT_ERROR";
  if (si.has(e)) return "ABORTED";
  return
}

function Jmt(e) {
  let r = e !== null && typeof e === "object" && "cause" in e ? e.cause : void 0;
  return Pt(k(e)) ?? Pt(k(r)) ?? "OTHER"
}
var qe = () => a.CLAUDE_CODE_MANAGED_CONFIG_PREFETCH === !0;

function NPo(e) {
  qe = e
}
var Ye = 1e4,
  hsi = Ye + 2000,
  Ot = 5,
  ui = new Set([...cJe].filter((e) => e !== "lock_error" && e !== "lock_disk_full")),
  hi = 3600000,
  Rt = [15000, 15000, 30000, 60000, 180000, 600000],
  kt = 0.2;

function We() {
  return E("tengu_shimmying_stardust", !1)
}
var Z$s = 60000;

function fi(e) {
  return e === "load" ? "other" : e
}

function wt(e) {
  return e === "accelerated_retry" || e === "api_success_trigger"
}
var mi = 30000,
  NFt = 5000,
  PJs = 86400000;

function Tt() {
  if (_Mr()) return;
  let e = fOo();
  if (e !== null) return Math.max(0, Date.now() - e);
  try {
    return Math.max(0, Date.now() - ai(GE()).mtimeMs)
  } catch {
    return
  }
}
var Ue = Date.now();

function At(e) {
  let r = CD();
  if (!r) return e;
  nOo(e.compliance_taints);
  let n = L([...r.compliance_taints, ...e.compliance_taints.filter((o) => !iVs(o))]).slice(0, Zmt);
  if (n.length === r.compliance_taints.length) return r;
  return {
    ...r,
    compliance_taints: n
  }
}

function Ft() {
  return _t(RD() ? "http://localhost" : ln().BASE_API_URL)
}

function ze() {
  return Ft()
}

function he() {
  if (RD()) return "local machine (via claude ssh tunnel)";
  try {
    return new URL(ze()).host
  } catch {
    return "unknown host"
  }
}

function te(e) {
  return p5(bXe(e))
}

function fIe() {
  return dy() && BFt() === null
}

function yi() {
  if (RD()) return {
    authType: a.CLAUDE_CODE_OAUTH_TOKEN ? "oauth" : "api_key",
    apiKeyFromHelper: !1
  };
  let e = null,
    r = "none";
  try {
    let s = YE({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    e = s.key, r = s.source
  } catch {}
  let n = r === "apiKeyHelper",
    o = Boolean(e) || n;
  if (!o && pc()) return {
    authType: "wif",
    apiKeyFromHelper: !1
  };
  if (Et() && Fn()?.accessToken) return {
    authType: "oauth",
    apiKeyFromHelper: !1
  };
  return o ? {
    authType: "api_key",
    apiKeyFromHelper: n
  } : {
    authType: "oauth",
    apiKeyFromHelper: !1
  }
}

function gi(e, r) {
  if (RD()) return "proxy";
  switch (e.authType) {
    case "api_key":
      return e.apiKeyFromHelper ? "helper_key" : "static_key";
    case "oauth":
      return r.sentStoredLogin === void 0 ? void 0 : r.sentStoredLogin ? "stored_login" : "injected_token";
    case "wif":
      return
  }
}

function Lt() {
  if (RD()) return a.CLAUDE_CODE_OAUTH_TOKEN ? "CLAUDE_CODE_OAUTH_TOKEN" : "none";
  return Ya().source
}

function _i() {
  if (RD()) return {
    proxy_in_use: !1,
    proxy_is_loopback: !1
  };
  let e, r = !1;
  try {
    e = Ff(), r = e !== void 0 && Zy(ze())
  } catch {
    return {
      proxy_in_use: !1,
      proxy_is_loopback: !1
    }
  }
  if (e === void 0 || r) return {
    proxy_in_use: !1,
    proxy_is_loopback: !1
  };
  let n = H2(e);
  return {
    proxy_in_use: !0,
    proxy_is_loopback: n !== void 0 && aE(n.hostname)
  }
}
async function vi(e, r, n, o, s, h, f = Ot, {
  hedge: y = !1,
  prefetched: C
} = {}) {
  let v = null,
    S = (b, D = !1) => Mt(e, r, n, h, b, D),
    M = !1;
  for (let b = 1; b <= f + 1; b++) {
    let D = C ?? Vin(S);
    if (C = void 0, y && b === 1) {
      let w = await tMr({
        first: D,
        send: (A) => S(A, !0),
        isAnswer: (A, P) => A.success || A.skipRetry === !0 && !(P && A.errorCode === "auth_failed" && A.httpStatus === 401),
        stillWanted: qe,
        retryFollows: f > 0
      });
      v = w.result, M ||= w.hedged
    } else v = await D.attempt;
    if (v.attempts = b, M) v.hedged = !0;
    if (v.success || v.skipRetry || b > f) return v;
    s(v);
    let T = r$(b);
    if (t(`Policy limits: Retry ${b}/${f} after ${T}ms`), await Y(T, o), o?.aborted) return v
  }
  return v
}
async function Mt(e, r, n, o, s, h = !1) {
  let f, y, C = !1,
    v = 0,
    S = rMe(o.recoveries),
    M = RD(),
    b = null,
    D = null,
    T = !1,
    w = null;
  try {
    let A = ze(),
      P = {},
      O = async () => {
        await wMr(n, r);
        let x = je(),
          V = await dB(vBt() ? {} : {
            envBearerFallbackFor: A
          }),
          ne = Xb();
        if (w = ne !== void 0 && V.headers.Authorization === `Bearer ${ne}` ? Uae(ne) : null, V.error) return T = !0, b = null, D = null, V;
        aOo();
        let re = D3(),
          ee = re === null ? null : Z(re);
        return T = x !== ee, b = T ? null : ee, D = b !== null && fe(re) ? we(re) : w !== null && fd() ? Dt(w) : null, V
      };
    if (!M) {
      f = await ble({
        credentials: r
      });
      let x = await O();
      if (x.error) return {
        success: !1,
        error: "Authentication required for policy limits",
        errorCode: "auth_failed",
        authUnavailableReason: x.reasonCode,
        tokenRefreshOutcome: f,
        skipRetry: !0
      };
      P = x.headers;
      let V = Fn();
      C = Boolean(V?.accessToken && V.refreshToken && P.Authorization === `Bearer ${V.accessToken}`)
    }
    let U = async () => {
      if (v++, v > 1) S = rMe(o.recoveries);
      let x = v === 1 || M ? P : (await O()).headers;
      return Ne({
        endpoint: A,
        authHeaders: x,
        ifNoneMatch: e || void 0,
        timeoutMs: Ye,
        socketPath: M,
        signal: s
      })
    }, R = M ? await U() : await lv(U, {
      credentials: r,
      gateToSessionOAuthCredential: !0,
      oauthRefreshLatch: o,
      signal: s,
      onForcedRefreshOutcome: (x) => {
        y = {
          outcome: x
        }, o.lastOutcome = x
      }
    });
    if (R.kind === "not_modified") {
      if (!e) return t("Policy limits: 304 to an unconditional request"), {
        success: !1,
        error: "Unexpected 304 Not Modified",
        errorCode: "request_failed",
        httpStatus: 304,
        skipRetry: !0,
        principalKeyAtWire: b,
        askedKeyAtWire: D,
        principalMovedAtWire: T,
        retriedAfter401: v > 1
      };
      if (v === 1 && !h) oMe(o, S);
      return t("Policy limits: Using cached restrictions (304)"), {
        success: !0,
        response: null,
        etag: e,
        signature: R.signature,
        principalKeyAtWire: b,
        askedKeyAtWire: D,
        principalMovedAtWire: T,
        retriedAfter401: v > 1,
        ...w !== null && v === 1 && {
          sentEnvBearerDigest: w
        },
        ...R.tunnelCredentialEpoch !== void 0 && {
          tunnelCredentialEpoch: R.tunnelCredentialEpoch
        }
      }
    }
    let J = ean(R.data);
    if (!J.success) {
      let x = Ci(J.error.issues[0]?.path[0]),
        V = Ge(R.contentType);
      return t(`Policy limits: Invalid response format - field=${x} ct=${V} - ${J.error.message}`), {
        success: !1,
        error: "Invalid policy limits format",
        errorCode: "parse_failed",
        parseErrorField: x,
        parseErrorContentType: V,
        responseContentType: V,
        requestIdPresent: R.requestIdPresent,
        skipRetry: We(),
        principalKeyAtWire: b,
        askedKeyAtWire: D,
        principalMovedAtWire: T,
        retriedAfter401: v > 1
      }
    }
    oMe(o, S);
    let ie = aMr(R.data);
    if (ie > 0) return t(`Policy limits: Fetched with ${ie} malformed compliance_taints element(s) dropped`), {
      success: !0,
      response: J.data,
      parseErrorField: "compliance_taints",
      lossyComplianceTaints: !0,
      signature: R.signature,
      principalKeyAtWire: b,
      askedKeyAtWire: D,
      principalMovedAtWire: T,
      retriedAfter401: v > 1,
      ...w !== null && {
        sentEnvBearerDigest: w
      },
      ...R.tunnelCredentialEpoch !== void 0 && {
        tunnelCredentialEpoch: R.tunnelCredentialEpoch
      }
    };
    return t("Policy limits: Fetched successfully"), {
      success: !0,
      response: J.data,
      signature: R.signature,
      principalKeyAtWire: b,
      askedKeyAtWire: D,
      principalMovedAtWire: T,
      retriedAfter401: v > 1,
      ...w !== null && {
        sentEnvBearerDigest: w
      },
      ...R.tunnelCredentialEpoch !== void 0 && {
        tunnelCredentialEpoch: R.tunnelCredentialEpoch
      }
    }
  } catch (A) {
    let {
      kind: P,
      status: O,
      message: U
    } = pi(A), R = {
      ...zin(A),
      ...bKn(A)
    }, J = y !== void 0 ? y.outcome : C && o.attempted ? o.lastOutcome : void 0, ie = vt(A), x = {
      ...v > 0 && {
        principalKeyAtWire: b,
        askedKeyAtWire: D,
        principalMovedAtWire: T
      },
      ...ie !== void 0 && {
        tunnelCredentialEpoch: ie
      }
    };
    switch (t(`Policy limits: fetch failed (${P}${O?` ${O}`:""}) from ${he()} \u2014 ${U}`), P) {
      case "auth":
        return {
          success: !1, error: "Not authorized for policy limits", errorCode: "auth_failed", httpStatus: O, tokenRefreshOutcome: f, skipRetry: !(O === 401 && C && f !== void 0 && ui.has(f) && (y === void 0 || y.outcome !== void 0 && cJe.has(y.outcome))), retriedAfter401: v > 1, forcedRefreshOutcome: J, sentStoredLogin: C, ...R, ...x
        };
      case "timeout":
        return {
          success: !1, error: "Policy limits request timeout", errorCode: "timeout", errno: Jmt(A), retriedAfter401: v > 1, ...x
        };
      case "network":
        return {
          success: !1, error: "Cannot connect to server", errorCode: "network_error", errno: Jmt(A), retriedAfter401: v > 1, ...x
        };
      default:
        return {
          success: !1, error: U, errorCode: "request_failed", httpStatus: O, skipRetry: Sye(O), retriedAfter401: v > 1, forcedRefreshOutcome: J, ...P === "http" && O === void 0 && {
            noResponse: !0,
            errno: Jmt(A)
          }, ...R, ...x
        }
    }
  }
}
async function FPo(e, {
  timeoutMs: r = Ye
} = {}) {
  if (xe() !== "firstParty" || !bp()) return null;
  try {
    let n = await Ne({
      endpoint: Ft(),
      authHeaders: {
        Authorization: `Bearer ${e}`,
        "anthropic-beta": vp
      },
      timeoutMs: r,
      acceptAny2xx: !0
    });
    if (n.kind === "not_modified") return t("Policy limits (bearer read): 304 to an unconditional request"), null;
    let o = ean(n.data);
    if (!o.success) return t(`Policy limits (bearer read): invalid response format \u2014 ${o.error.message}`), null;
    return o.data
  } catch (n) {
    let {
      kind: o,
      status: s,
      message: h
    } = pi(n);
    return t(`Policy limits (bearer read): fetch failed (${o}${s?` ${s}`:""}) \u2014 ${h}`), null
  }
}

function Ci(e) {
  if (e === void 0) return "root";
  return e === "restrictions" || e === "compliance_taints" || e === "defaults" ? e : "other"
}

function Ke() {
  return {
    has_custom_base_url: zun(),
    via_unix_socket: RD() !== void 0,
    has_unix_socket: a.ANTHROPIC_UNIX_SOCKET !== void 0,
    has_auth_token: Boolean(Xb()),
    has_api_key_helper: Boolean(Fm()),
    api_key_prefix: c(Wln())
  }
}
var Si = ["EACCES", "EPERM", "EROFS", "ENOSPC", "EDQUOT", "ENOENT", "ENOTDIR", "EISDIR", "EMFILE", "ENFILE", "EBUSY"];

function It(e) {
  return e !== void 0 && Si.includes(e) ? e : "other"
}

function Re(e) {
  return It(k(e))
}

function Ei(e) {
  let r = "telemetryCode" in e ? e.telemetryCode : void 0;
  return It(r === "UnexpectedAbsent" || r === ezo ? "ENOENT" : r)
}

function ke() {
  return Be.state("policy-limits")
}
var $e = 1048576;
async function HPo(e) {
  if (!W() || e === void 0 || !dy() || mIe()) return;
  try {
    let r = fMr(),
      n = await e.read([{
        key: ke(),
        offset: 0,
        length: $e + 1
      }]);
    if (!n.ok) {
      t(`Policy limits: prime read failed: ${n.error.code}; raw cache read stays`);
      return
    }
    let o = n.value.items[0];
    if (!o.found) {
      RMr(e, null);
      return
    }
    if (o.totalBytes > $e) {
      t("Policy limits: prime skipped (oversize cache); raw cache read stays");
      return
    }
    let s = PKn(Buffer.from(o.value).toString("utf-8"));
    RMr(e, s === null ? null : SMr(s, mMr(r)))
  } catch (r) {
    t(`Policy limits: prime failed: ${d(r)}`)
  }
}
class $Po {
  storageV5;
  credentials;
  used = !1;
  constructor(e = {}) {
    this.storageV5 = e.storageV5, this.credentials = e.credentials
  }
  adoptStartupServices(e) {
    if (e.storageV5 === void 0 && e.credentials === void 0) return "nothing to adopt";
    if (this.storageV5 !== void 0 || this.credentials !== void 0) return "already composed";
    if (this.used) return "already used";
    return this.storageV5 = e.storageV5, this.credentials = e.credentials, "adopted"
  }
  oauthRefreshLatch = {
    attempted: !1,
    recoveries: {
      begun: 0,
      running: 0
    }
  };
  prefetchSlot = new yKn;
  renewOAuthRefreshLatch() {
    this.oauthRefreshLatch = {
      attempted: !1,
      lastOutcome: this.oauthRefreshLatch.lastOutcome,
      recoveries: {
        begun: 0,
        running: 0
      }
    }
  }
  prefetch() {
    if (!dy()) return;
    let e = je();
    if (e === null) return;
    let r = RKn() ? null : BFt(),
      n = r === uje ? null : r,
      o = n ? te(n) : void 0,
      {
        credentials: s,
        storageV5: h,
        oauthRefreshLatch: f
      } = this;
    this.prefetchSlot.set({
      checksum: o,
      generation: this.sessionGeneration,
      diskEpoch: hXe(),
      endpointHost: he(),
      storageV5: h,
      credentials: s,
      principalKey: e
    }, (y) => Mt(o, s, h, f, y), (y) => y.success || y.httpStatus === 404)
  }
  poller = null;
  cleanupRegistered = !1;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  loadingTimeoutId = null;
  abortController = new AbortController;
  firstPromptStateLogged = !1;
  cacheWriteFailureLogged = !1;
  sessionGeneration = 0;
  serverConfirmedGeneration = -1;
  verdictPrincipalIdentity = null;
  verdictKey = null;
  verdictPrincipalKind = null;
  askedKey = null;
  cyclesInFlight = 0;
  unsettledCycles = new Set;
  principalCheckOwed = !1;
  unclassifiedRecheckTimer = null;
  stopCredentialWatch = null;
  stopTunnelEpochWatch = null;
  tunnelEpochSeen = void 0;
  tunnelVerdictEpoch = void 0;
  tunnelRepolledForEpoch = void 0;
  principalCheckQueued = !1;
  signedCacheShadowChecked = !1;
  storedCopyShadow = void 0;
  storedCopyReported = !1;
  livePrincipalChecked = !1;
  cacheClearEpoch = 0;
  verdictlessRetry = null;
  verdictlessRetryStep = 0;
  stopNetworkWatch = null;
  verdictlessEpisode = null;
  startupLoadState = "not_started";
  startupLoadClaimed = !1;
  prefetchAdmittedGeneration = -1;
  startupLoadErrorCode;
  startupLoadCredentialState;
  startupLoadOutcomeReason;
  startupLoadHttpStatus;
  startupLoadServerErrorType;
  startupAwaitResult = "not_awaited";
  gateSnapshotThisRun;
  coldStartFirstWaitAtMs = void 0;
  coldStartWaitedMs = 0;
  recordStartupAwaitResult(e) {
    this.startupAwaitResult = e
  }
  get coldStartTimedOut() {
    return this.startupAwaitResult === "timed_out"
  }
  async awaitColdStartVerdict() {
    let e = performance.now();
    this.coldStartFirstWaitAtMs ??= e;
    let r = Math.max(0, Math.round(this.coldStartFirstWaitAtMs + NFt - e)),
      n;
    try {
      await Nt(this.waitForLoad(), r, "policy_limits_cold_await"), n = "completed"
    } catch {
      n = "timed_out"
    }
    if (this.coldStartWaitedMs += performance.now() - e, this.startupAwaitResult !== "timed_out") this.recordStartupAwaitResult(n);
    return n
  }
  get coldStartVerdictWait() {
    return this.coldStartFirstWaitAtMs === void 0 ? null : {
      waitedMs: this.coldStartWaitedMs,
      firstAtMs: this.coldStartFirstWaitAtMs
    }
  }
  async admitPrefetched(e) {
    let r = (n) => (t(`Policy limits: host prefetch not admitted (${n})`), {
      admitted: !1,
      refused: n
    });
    try {
      if (!dy()) return r("ineligible");
      if (this.startupLoadClaimed || this.cyclesInFlight > 0 || this.serverConfirmedGeneration === this.sessionGeneration) return r("already_loading");
      if (this.prefetchAdmittedGeneration === this.sessionGeneration) return r("already_admitted");
      let n = D3();
      if (n === null || n.kind !== "org" || n.unclassified === !0 || n.descriptor !== `org:${e.orgUuid.toLowerCase()}` || n.bearerDigest === void 0 || n.bearerDigest !== e.bearerDigest) return r("principal_mismatch");
      let o = he();
      if (e.endpointHost !== o) return r("endpoint_mismatch");
      let s = Date.now() - e.fetchedAtMs;
      if (!Number.isFinite(e.fetchedAtMs) || s < -Z$s || s > Z$s) return r("stale");
      let h = ean(e.data);
      if (!h.success) return r("unparseable");
      if (aMr(e.data) > 0) return r("lossy_taints");
      let f = h.data,
        y = this.sessionGeneration,
        C = CD() !== null;
      this.used = !0, this.prefetchAdmittedGeneration = y, Fe(() => this.managedConfigPolicyGateFields()), EKn(f), this.recordVerdictPrincipal(n);
      let v = hXe(),
        S = await this.saveCachedResponse(f, y, y$o(e.signature), n, "prior_evidence");
      if (this.sessionGeneration !== y) {
        if (BX("policy", {
            source: "superseded",
            hadCache: C,
            awaited: !1
          }), S !== "stale" && S !== "skipped") await this.deleteCacheFile(), Qin();
        return this.dropUnconfirmedSessionCache(), r("superseded")
      }
      if (BX("policy", {
          source: "cache",
          hadCache: C,
          awaited: !1
        }), S === "saved" && hXe() === v) CKn();
      return t(`Policy limits: admitted the host's prefetch as this session's prior-evidence verdict (${Object.keys(f.restrictions).length} restriction(s), ${f.compliance_taints?.length??0} taint(s), persisted=${S})`), {
        admitted: !0
      }
    } catch (n) {
      return l(n), r("error")
    }
  }
  ensureLoadRequested(e) {
    let r = this.startupLoadClaimed && this.startupLoadState === "not_started" && !this.loadingCompletePromise && dy();
    if (this.startupLoadClaimed && !r) return !1;
    return this.initializeLoadingPromise(), this.load(e).catch((n) => l(n)), !0
  }
  stop() {
    if (this.sessionGeneration++, this.prefetchSlot.clear(), this.verdictPrincipalIdentity = null, this.verdictPrincipalKind = null, this.verdictKey = null, this.askedKey = null, this.cyclesInFlight = 0, this.principalCheckOwed = !1, this.unclassifiedRecheckTimer !== null) clearTimeout(this.unclassifiedRecheckTimer), this.unclassifiedRecheckTimer = null;
    this.stopCredentialWatch?.(), this.stopCredentialWatch = null, this.stopTunnelEpochWatch?.(), this.stopTunnelEpochWatch = null, this.renewOAuthRefreshLatch(), Qin(), WFt(), this.stopBackgroundPolling(), this.abortController.abort(), this.abortController = new AbortController, Jin(null), hMr(null), rOo(), this.releaseLoadingPromise()
  }
  releaseLoadingPromise() {
    if (this.loadingCompleteResolve?.(), this.loadingCompletePromise = null, this.loadingCompleteResolve = null, this.loadingTimeoutId !== null) clearTimeout(this.loadingTimeoutId), this.loadingTimeoutId = null
  }
  initializeLoadingPromise() {
    if (this.loadingCompletePromise) return;
    if (dy()) this.loadingCompletePromise = new Promise((e) => {
      this.loadingCompleteResolve = e, this.loadingTimeoutId = setTimeout((r) => {
        if (this.loadingCompleteResolve === r) t("Policy limits: Loading promise timed out, resolving anyway"), this.loadingCompleteResolve(), this.loadingCompleteResolve = null
      }, mi, e)
    })
  }
  async waitForLoad() {
    if (this.loadingCompletePromise) await this.loadingCompletePromise
  }
  async saveCachedResponse(e, r, n, o, s) {
    if (this.sessionGeneration !== r) return t("Policy limits: skipped saving a fetch that outlived the account session"), "stale";
    if (mIe()) return "skipped";
    if (o === null) return t("Policy limits: no attributable principal for this credential; the verdict is used for the session and not persisted"), "skipped";
    let h;
    try {
      h = await this.writeStampForSave(e, o, s)
    } catch (y) {
      return this.recordCacheWriteFailure(y instanceof Error ? y.message : "unknown error", Re(y)), "failed"
    }
    if (h === null) return "failed";
    let f = te(e);
    if (W() && this.storageV5 !== void 0) {
      let y, C;
      try {
        let v = await this.storageV5.write(ke(), _(bXe(e), null, 2), {
          publishDiscipline: "inPlace",
          mode: 384
        });
        if (v.ok) return t(`Policy limits: Saved to ${GE()}`), await m_t(GE(), n), await this.sealSavedBody(h, f);
        y = yt(v.error), C = Ei(v.error)
      } catch (v) {
        y = d(v), C = Re(v)
      }
      return WFt(), this.recordCacheWriteFailure(y, C), "failed"
    }
    try {
      let y = GE();
      await ci(y, _(bXe(e), null, 2), {
        encoding: "utf-8",
        mode: 384
      }), t(`Policy limits: Saved to ${y}`), await m_t(y, n)
    } catch (y) {
      return WFt(), this.recordCacheWriteFailure(y instanceof Error ? y.message : "unknown error", Re(y)), "failed"
    }
    return this.sealSavedBody(h, f)
  }
  async sealSavedBody(e, r) {
    try {
      await e.rewrite()
    } catch (n) {
      let o = await gXe(GE());
      if (_Xe(o), o.kind !== "ok" || o.stamp.identity !== e.identity || o.stamp.sha !== r) {
        if (o.kind !== "ok") {
          let s = await this.readDiskBody();
          if ((s.kind === "unreadable" || s.kind === "body" && s.checksum === r) && !await this.removeBodyLeavingStamp()) {
            let f = await gXe(GE());
            if (_Xe(f), f.kind !== "ok") await e.vouch()
          }
        }
        return this.recordCacheWriteFailure(n instanceof Error ? n.message : "unknown error", Re(n)), "failed"
      }
    }
    return TMr(r, e.evidence, e.confirmedAt), "saved"
  }
  async readDiskBody() {
    let e = !1,
      r;
    try {
      r = await XT(se(), GE(), $e, (o) => {
        e = o.isFile()
      })
    } catch (o) {
      return {
        kind: G(o) ? "none" : "unreadable"
      }
    }
    if (e) return {
      kind: "unreadable"
    };
    let n = r === null ? null : PKn(r);
    return n === null ? {
      kind: "none"
    } : {
      kind: "body",
      checksum: te(n)
    }
  }
  async removeBodyLeavingStamp() {
    if (WFt(), await Yun(GE()), W() && this.storageV5 !== void 0) try {
      await this.storageV5.delete(ke())
    } catch {}
    try {
      return await di(GE()), !0
    } catch (e) {
      return G(e)
    }
  }
  async removeUnstampedBody() {
    if (mIe()) return;
    let e = await gXe(GE());
    if (_Xe(e), e.kind === "absent") await this.removeBodyLeavingStamp()
  }
  async removeSupersededLegacyBody(e, r) {
    if (!_Oo(e)) return;
    let n = await gXe(GE());
    if (_Xe(n), n.kind !== "absent") return;
    let o = await this.readDiskBody();
    if (o.kind !== "body" || o.checksum !== r) return;
    t("Policy limits: removed an unstamped cache this credential cannot restamp after the server superseded it"), await this.removeBodyLeavingStamp()
  }
  async writeStampForSave(e, r, n) {
    let o = GE(),
      s = await gXe(o);
    if (_Xe(s), kKn(s)) return t(`Policy limits: the cache stamp could not be read just now (${s.code}); nothing persisted this cycle`), null;
    let h = ZPo({
      principal: r,
      bodySha: te(e),
      confirmedAt: Date.now(),
      bodyTaints: e.compliance_taints,
      previous: lMr(s, xKn()),
      authority: n
    });
    return await dMr(o, h), {
      identity: h.identity,
      evidence: Xin(h),
      confirmedAt: h.confirmed_at,
      rewrite: () => dMr(o, h),
      vouch: async () => {
        await cMr(o, h)
      }
    }
  }
  async restampConfirmedCache(e, r, n, o, s) {
    if (this.sessionGeneration !== o || n === null || r === void 0 || pOo() !== r) return;
    let h = this.cacheClearEpoch,
      f = await gXe(GE());
    if (_Xe(f), f.kind !== "absent" && !(f.kind === "ok" && f.stamp.sha === r)) return;
    let y = ZPo({
      principal: n,
      bodySha: r,
      confirmedAt: Date.now(),
      bodyTaints: e.compliance_taints,
      previous: lMr(f, xKn()),
      authority: s
    });
    if (await cMr(GE(), y), this.cacheClearEpoch !== h) {
      await this.deleteCacheFile();
      return
    }
    if (this.sessionGeneration !== o) return;
    TMr(r, Xin(y), y.confirmed_at)
  }
  recordCacheWriteFailure(e, r) {
    if (t(`Policy limits: Failed to save - ${e}`), !this.cacheWriteFailureLogged) this.cacheWriteFailureLogged = !0, i("tengu_policy_limits_cache_write_failed", {
      errno: c(r)
    })
  }
  async fetchAndLoad(e, r, n = !1) {
    let o = this.sessionGeneration;
    this.cyclesInFlight++;
    let s = this.runFetchCycle(e, r, n);
    this.unsettledCycles.add(s);
    try {
      return await s
    } finally {
      this.unsettledCycles.delete(s), this.endCycle(o)
    }
  }
  async _settleCyclesForTesting() {
    while (this.unsettledCycles.size > 0) await Promise.allSettled([...this.unsettledCycles])
  }
  endCycle(e) {
    if (this.sessionGeneration !== e) return;
    if (this.cyclesInFlight--, this.cyclesInFlight === 0 && this.principalCheckOwed) this.principalCheckOwed = !1, this.onCredentialMayHaveChanged()
  }
  async runFetchCycle(e, r, n) {
    this.used = !0;
    let o = e === "policy_limits_load" && !this.startupLoadClaimed;
    if (o) this.startupLoadClaimed = !0;
    if (Fe(() => this.managedConfigPolicyGateFields()), !dy()) return this.prefetchSlot.clear(), BX("policy", {
      source: "ineligible",
      hadCache: !1,
      awaited: n
    }), null;
    if (o) this.startupLoadState = "in_flight";
    let s = RKn() ? null : BFt(),
      h = s === uje ? null : s,
      f = s === null ? void 0 : dOo(),
      y = kMr() !== "not_asked",
      C = hXe(),
      v = Tt(),
      S = D3(),
      M = S === null ? "" : Hme(S),
      b = !wt(r);
    if (h && !CD()) $Ft(h);
    let D = CD();
    if (h && D !== null && this.verdictPrincipalIdentity === null && this.serverConfirmedGeneration !== this.sessionGeneration)
      if (fe(S) && AKn() === "match" && cOo() === Hme(S) && te(D) === te(h)) this.recordVerdictPrincipal(S);
      else this.ensureCredentialWatch();
    if (h) BX("policy", {
      source: "cache",
      hadCache: !0,
      awaited: n
    });
    let T = h ? te(h) : void 0,
      w = this.cacheClearEpoch;
    if (!this.signedCacheShadowChecked) {
      if (this.signedCacheShadowChecked = !0, T !== void 0 && !mIe()) nMr({
        kind: "policy-limits",
        cachePath: GE(),
        bodySha: T,
        readStoredAccount: np,
        gateEnforced: y,
        readOrgPin: yIe,
        onJudged: (u) => {
          this.storedCopyShadow = u
        }
      })
    }
    let A = yi(),
      P = A.authType,
      O = Date.now(),
      U = this.abortController.signal,
      R = this.sessionGeneration,
      J = Bae(),
      ie = () => {
        let u = Bae();
        return u !== null && u.success && u !== J
      },
      x = !1,
      V = (u) => {
        if (x = !0, !u.success && ie()) return;
        this.recordFetchOutcome(R, w, u, M, b)
      },
      ne = () => V({
        success: !1,
        errorCode: "request_failed",
        httpStatus: null,
        host: he(),
        retrying: !1
      });
    if (e === "policy_limits_load" && this.prefetchSlot.pending) {
      let u = await Kg(this.credentials);
      if (u !== "store") cJ();
      if (Yln(u)) await dJe(j().host, this.credentials);
      S = D3()
    }
    let re = S === null ? null : Z(S),
      ee = he(),
      Je = e === "policy_limits_load" ? this.prefetchSlot.take((u) => u.checksum === T && u.generation === R && u.diskEpoch === C && u.endpointHost === ee && u.storageV5 === this.storageV5 && u.credentials === this.credentials && u.principalKey === re) : void 0;
    try {
      let u = await vi(T, this.credentials, this.storageV5, U, (I) => {
        if (Bae()?.success) return;
        this.recordFetchOutcome(R, w, {
          success: !1,
          host: ee,
          httpStatus: I.httpStatus ?? null,
          errorCode: I.errorCode ?? "request_failed",
          retrying: !0
        }, M, b)
      }, this.oauthRefreshLatch, wt(r) ? 0 : Ot, {
        hedge: n && qe(),
        prefetched: Je
      });
      if (this.sessionGeneration !== R || U.aborted) {
        if (o && this.startupLoadState === "in_flight") this.startupLoadState = "failed", this.startupLoadErrorCode = "session_changed", this.startupLoadCredentialState = void 0, this.startupLoadOutcomeReason = void 0, this.startupLoadHttpStatus = void 0, this.startupLoadServerErrorType = void 0;
        return BX("policy", {
          source: "superseded",
          hadCache: h !== null,
          awaited: n
        }), t("Policy limits: Discarding a fetch that outlived the account session"), p(e, "cycle_aborted"), CD()
      }
      let oe = D3(),
        ae = oe === null ? null : Z(oe),
        xt = u.principalKeyAtWire === void 0 ? ae : u.principalKeyAtWire,
        be = u.success && this.isStaleTunnelCredentialEpoch(u.tunnelCredentialEpoch);
      if (be) t("Policy limits: this answer came back under an older claude ssh credential epoch than one already seen; not installing it");
      let K = u.principalMovedAtWire === !0 || xt !== ae;
      if (!K && u.askedKeyAtWire !== void 0 && u.askedKeyAtWire !== null) this.askedKey = u.askedKeyAtWire;
      if (K) t("Policy limits: the credential changed principal during the fetch; this response is used for the session but not persisted or attributed"), S = null;
      else if (re !== ae) t("Policy limits: the credential changed principal before the request went out; attributing the response to the principal it authenticated as"), S = oe;
      if (hXe() !== C) t("Policy limits: the disk snapshot predates an account-boundary hold; not installable"), h = null;
      let ye = u.success && u.response === null && !h,
        N = u.success && !ye && !be;
      if (!N) this.observeTunnelCredentialEpoch(u.tunnelCredentialEpoch, u.success ? "a stale policy answer" : "a refused policy request", !1);
      let Q = be ? "stale_tunnel_credential" : ye ? "spurious_304" : u.errorCode ?? "request_failed",
        Xe = N ? void 0 : Q,
        Qe = gi(A, u),
        Ze = Qe === "injected_token" ? E$t() : void 0,
        de = oMr({
          errorCode: Q,
          httpStatus: u.httpStatus,
          serverErrorType: u.serverErrorType,
          serverErrorCode: u.serverErrorCode,
          serverAuthDenial: u.serverAuthDenial,
          tokenRefreshOutcome: u.tokenRefreshOutcome,
          forcedRefreshOutcome: u.forcedRefreshOutcome,
          authUnavailableReason: u.authUnavailableReason,
          authType: P,
          credentialOrigin: Qe,
          injectedTokenRecovery: Ze,
          noResponse: u.noResponse
        }),
        Te = N ? void 0 : de,
        et = w6n(N ? {
          succeeded: !0,
          responseKind: u.response === null ? "not_modified" : "body"
        } : {
          succeeded: !1,
          failure: u.authUnavailableReason !== void 0 ? "no_credentials" : Q === "timeout" ? "timeout" : Q === "network_error" || u.noResponse ? "network" : Q === "parse_failed" ? "parse" : u.httpStatus !== void 0 ? "http" : "other",
          httpStatus: u.httpStatus,
          serverErrorType: u.serverErrorType,
          serverErrorCode: u.serverErrorCode,
          serverAuthDenial: u.serverAuthDenial,
          credentialState: Te,
          tokenRefreshOutcome: u.tokenRefreshOutcome,
          forcedRefreshOutcome: u.forcedRefreshOutcome,
          errno: u.errno,
          responseContentType: u.responseContentType ?? u.parseErrorContentType,
          requestIdPresent: u.requestIdPresent
        }),
        le = Date.now(),
        Bt = AKn(),
        ge = S4(),
        tt = kMr(),
        it = ge ? f : fze(this.storedCopyShadow),
        Ht = ge ? tt === "not_asked" ? "none" : tt : h === null ? "none" : this.storedCopyShadow === void 0 ? "pending" : sTe(this.storedCopyShadow),
        rt = !this.storedCopyReported;
      if (this.storedCopyReported = !0, o) this.startupLoadState = N ? "succeeded" : "failed", this.startupLoadErrorCode = Xe, this.startupLoadCredentialState = Te, this.startupLoadOutcomeReason = et, this.startupLoadHttpStatus = N ? void 0 : u.httpStatus, this.startupLoadServerErrorType = N ? void 0 : u.serverErrorType;
      let _e = {
        source: N ? "fetch" : "error",
        hadCache: h !== null,
        awaited: n,
        fetchMs: le - O
      };
      if (!N) BX("policy", _e);
      let ve, nt = !1;
      if (!u.success && (!u.skipRetry || u.errorCode === "parse_failed") && We()) {
        ve = this.staleFallbackSource();
        let I = r !== "api_success_trigger";
        if (ve === null) {
          if (nt = this.armVerdictlessRetry(), I) this.armNetworkKick()
        } else if (!this.hasLiveVerdict() && I) this.armNetworkKick()
      }
      let Ce = N ? u.response ?? h : null;
      if (N && u.signature !== void 0 && it !== void 0 && !this.livePrincipalChecked) this.livePrincipalChecked = !0, rMr({
        kind: "policy-limits",
        jws: u.signature,
        trustedPrincipal: it,
        gate: ge ? "enforced" : "shadow"
      });
      if (i("tengu_policy_limits_fetch", {
          duration_ms: le - O,
          ms_since_startup: le - Ue,
          success: N,
          had_cache: h !== null,
          cache_stamp: c(Bt),
          stored_copy: rt ? c(Ht) : void 0,
          stored_copy_gate: rt ? c(ge ? "enforced" : "shadow") : void 0,
          cache_age_ms: v,
          attempts: u.attempts,
          prefetched: Je !== void 0,
          hedged: u.hedged === !0,
          restrictions_denied_count: Ce ? F(Object.values(Ce.restrictions), (I) => !I.allowed) : void 0,
          compliance_taint_count: Ce ? Ce.compliance_taints?.length ?? 0 : void 0,
          is_load: e === "policy_limits_load",
          awaited: n,
          auth_type: c(P),
          error_code: pe(Xe),
          token_source: c(Lt()),
          credential_road: c(Win()),
          ...Ke(),
          auth_unavailable_reason: pe(u.authUnavailableReason),
          token_refresh_outcome: P === "oauth" ? pe(u.tokenRefreshOutcome) : void 0,
          forced_refresh_outcome: P === "oauth" ? pe(u.forcedRefreshOutcome) : void 0,
          retried_after_401: u.retriedAfter401 ?? !1,
          http_status: u.httpStatus,
          parse_error_field: pe(u.parseErrorField),
          parse_error_content_type: pe(u.parseErrorContentType),
          server_error_type: pe(u.serverErrorType),
          server_error_code: pe(u.serverErrorCode),
          server_auth_denial: pe(u.serverAuthDenial),
          injected_token_recovery: pe(N ? void 0 : Ze),
          credential_state: pe(Te),
          outcome_reason: c(et),
          response_kind: N ? c(u.response === null ? "not_modified" : "body") : void 0,
          request_id_present: u.requestIdPresent,
          response_content_type: pe(u.responseContentType),
          fetch_trigger: c(r),
          verdictless_retry_scheduled: nt,
          error_errno: pe(u.errno),
          ..._i()
        }), !N) {
        V({
          success: !1,
          host: ee,
          httpStatus: u.httpStatus ?? null,
          errorCode: Q,
          retrying: !1,
          credentialState: de,
          ...u.serverErrorCode !== void 0 && {
            serverErrorCode: u.serverErrorCode
          }
        });
        let I = ve !== void 0 ? ve : this.staleFallbackSource();
        if (I) {
          t(ye ? "Policy limits: 304 with no outstanding ETag \u2014 using stale cache" : "Policy limits: Using stale cache after fetch failure");
          let ce = At(I);
          if ($Ft(ce), this.disposeVerdictlessRetryTimer(), !this.hasLiveVerdict()) this.noteUnverifiedCycle(Q, !0);
          return p(e, ye ? "spurious_304" : "stale_cache_used", {
            credential_state: c(de)
          }), ce
        }
        if ((u.httpStatus === 404 || u.httpStatus === 304) && CD() === null && !TKn() && !E("tengu_rustling_orbit", !1)) return t(`Policy limits: ${u.httpStatus} with no cache, no restrictions for this session (not persisted)`), jFt(), tOo(), this.serverConfirmedGeneration = R, this.disposeVerdictlessRetryTimer(), this.disarmNetworkKick(), this.recordVerdictPrincipal(S), p(e, u.httpStatus === 404 ? "route_missing_fail_open" : "unsolicited_304_fail_open", {
          credential_state: c(de)
        }), uje;
        return this.noteUnverifiedCycle(Q, !1), m(e, Q, {
          credential_state: c(de)
        }), null
      }
      let Se = u.response;
      if (Se === null || Se === void 0) {
        if (!h) return ne(), BX("policy", {
          ..._e,
          source: "error"
        }), m(e, "unexpected_error"), null;
        t("Policy limits: Cache still valid (304 Not Modified)");
        let I = h,
          ce = h.compliance_taints,
          ot = this.serverConfirmedGeneration === R ? CD()?.compliance_taints ?? [] : [],
          Pe = aMr(bXe(h)) > 0;
        if (Pe && ot.some((ue) => !ce.includes(ue))) I = {
          ...h,
          compliance_taints: L([...ot, ...ce]).slice(0, Zmt)
        }, t("Policy limits: lossy cached compliance_taints \u2014 kept the session taint set");
        if (K) jFt();
        else vMr();
        if (K || Pe) EKn(I);
        else Jin(I);
        if (gMr(K ? null : u.sentEnvBearerDigest ?? null), this.settleTunnelCredentialEpoch(u.tunnelCredentialEpoch), this.serverConfirmedGeneration = R, this.onLiveVerdict(r), this.recordVerdictPrincipal(S), V({
            success: !0,
            host: ee
          }), !mIe()) try {
          if (W() && this.storageV5 !== void 0) {
            if ((await this.storageV5.touch(ke())).ok) {
              if (await Kun(GE(), u.signature), !await Xun(GE(), this.cacheClearEpoch !== w)) {
                if (CMr(T, le), !K) await this.restampConfirmedCache(I, T, S, R, Pe ? "prior_evidence" : "confirmed")
              }
            }
          } else {
            let ue = new Date;
            if (await li(GE(), ue, ue), await Kun(GE(), u.signature), !await Xun(GE(), this.cacheClearEpoch !== w)) {
              if (CMr(T, le), !K) await this.restampConfirmedCache(I, T, S, R, Pe ? "prior_evidence" : "confirmed")
            }
          }
        } catch {}
        return BX("policy", _e), g(e), I
      }
      let X = Se;
      if (u.lossyComplianceTaints) {
        let I = [...CD()?.compliance_taints ?? [], ...h?.compliance_taints ?? []];
        if (I.length > 0) X = {
          ...X,
          compliance_taints: L([...X.compliance_taints, ...I]).slice(0, Zmt)
        }, t("Policy limits: lossy compliance_taints \u2014 kept the known taint set")
      }
      if (K) jFt();
      else vMr();
      if (K || u.lossyComplianceTaints) EKn(X);
      else Jin(X);
      gMr(K ? null : u.sentEnvBearerDigest ?? null), this.settleTunnelCredentialEpoch(u.tunnelCredentialEpoch), this.serverConfirmedGeneration = R, this.onLiveVerdict(r), this.recordVerdictPrincipal(S), V({
        success: !0,
        host: ee
      });
      let Gt = hXe(),
        Ee = K ? "stale" : await this.saveCachedResponse(X, R, X === Se ? u.signature : void 0, S, u.lossyComplianceTaints ? "prior_evidence" : "confirmed");
      if (BX("policy", _e), Ee === "skipped" && S === null && !K && !mIe() && h !== null && T !== void 0 && AKn() === "legacy" && T !== te(X)) await this.removeSupersededLegacyBody(h, T);
      if (this.sessionGeneration !== R) {
        if (Ee !== "stale" && Ee !== "skipped") {
          let I = await this.deleteCacheFile();
          if (Qin(), !I) t("Policy limits: could not remove a dead fetch's cache write; disk adoption suppressed until the next save")
        }
        return this.dropUnconfirmedSessionCache(), p(e, "cycle_aborted"), CD()
      }
      if (Ee === "saved" && hXe() === Gt) CKn();
      if (t(Object.keys(X.restrictions).length > 0 ? "Policy limits: Applied new restrictions successfully" : "Policy limits: No restrictions (cached empty)"), u.lossyComplianceTaints) p(e, "lossy_compliance_taints");
      else g(e);
      return X
    } catch {
      let u = this.sessionGeneration !== R;
      if (o && this.startupLoadState === "in_flight") this.startupLoadState = "failed", this.startupLoadErrorCode = u ? "session_changed" : "unexpected_error", this.startupLoadCredentialState = void 0, this.startupLoadOutcomeReason = void 0, this.startupLoadHttpStatus = void 0, this.startupLoadServerErrorType = void 0;
      if (BX("policy", {
          source: u ? "superseded" : "error",
          hadCache: h !== null,
          awaited: n
        }), u || U.aborted) return p(e, "cycle_aborted"), CD();
      if (!x) ne();
      let oe = this.staleFallbackSource();
      if (oe) {
        t("Policy limits: Using stale cache after error");
        let ae = At(oe);
        if ($Ft(ae), this.disposeVerdictlessRetryTimer(), !this.hasLiveVerdict()) this.noteUnverifiedCycle("unexpected_error", !0);
        return p(e, "stale_cache_used"), ae
      }
      return this.noteUnverifiedCycle("unexpected_error", !1), m(e, "unexpected_error"), null
    }
  }
  hasLiveVerdict() {
    let e = CD();
    return e !== null && e !== uje && this.serverConfirmedGeneration === this.sessionGeneration
  }
  armVerdictlessRetry() {
    if (this.verdictlessRetry !== null) return !0;
    let e = this.verdictlessRetryStep,
      r = Rt[e];
    if (r === void 0 || !dy()) return !1;
    this.verdictlessRetryStep = e + 1;
    let n = Math.round(r * (1 - kt + 2 * kt * Math.random())),
      o = this.sessionGeneration;
    t(`Policy limits: no verdict \u2014 accelerated retry ${e+1}/${Rt.length} in ${Math.round(n/1000)}s`);
    let s = hKn(() => {
      if (s[Symbol.dispose](), this.verdictlessRetry === s) this.verdictlessRetry = null;
      if (this.sessionGeneration !== o) return;
      if (CD() !== null) return;
      this.poll("accelerated_retry").catch((h) => l(h))
    }, n, {
      unref: !0
    });
    return this.verdictlessRetry = s, !0
  }
  disposeVerdictlessRetryTimer() {
    this.verdictlessRetry?.[Symbol.dispose](), this.verdictlessRetry = null
  }
  armNetworkKick() {
    if (this.stopNetworkWatch !== null) return;
    let e = this.sessionGeneration,
      r = at(() => {
        queueMicrotask(() => {
          if (this.stopNetworkWatch !== r) return;
          try {
            this.kickOnNetworkSuccess(e)
          } catch (n) {
            l(n)
          }
        })
      });
    this.stopNetworkWatch = r
  }
  disarmNetworkKick() {
    this.stopNetworkWatch?.(), this.stopNetworkWatch = null
  }
  kickOnNetworkSuccess(e) {
    if (this.sessionGeneration !== e) {
      this.disarmNetworkKick();
      return
    }
    if (this.cyclesInFlight > 0) return;
    if (this.disarmNetworkKick(), !dy() || this.hasLiveVerdict()) return;
    t("Policy limits: the API answered a request \u2014 re-fetching the org policy now"), this.poll("api_success_trigger").catch((r) => l(r))
  }
  resetAcceleratedRecovery() {
    this.disposeVerdictlessRetryTimer(), this.verdictlessRetryStep = 0, this.disarmNetworkKick()
  }
  noteUnverifiedCycle(e, r) {
    if (this.verdictlessEpisode === null) this.verdictlessEpisode = {
      sinceMs: Date.now(),
      errorCode: e,
      failedCycles: 1,
      staleServed: r
    };
    else this.verdictlessEpisode.failedCycles++
  }
  onLiveVerdict(e) {
    this.resetAcceleratedRecovery();
    let r = this.verdictlessEpisode;
    if (r === null) return;
    this.verdictlessEpisode = null;
    let n = Date.now(),
      o = fi(e),
      s = r.errorCode;
    i("tengu_policy_limits_verdict_recovered", {
      ms_since_startup: n - Ue,
      ms_verdictless: n - r.sinceMs,
      recovered_by: c(o),
      startup_error_code: c(s),
      attempts_before_recovery: r.failedCycles,
      was_stale_served: r.staleServed,
      fast_retry_enabled: We()
    })
  }
  policyGateSnapshot() {
    if (this.gateSnapshotThisRun !== void 0) return this.gateSnapshotThisRun;
    let e = jX(),
      r = e === void 0,
      n = e === "custom_base_url" ? jX({
        skipBaseUrlCheck: !0
      }) === void 0 : r,
      o = kw() !== null,
      s = r ? Tt() : void 0,
      h = this.hasLiveVerdict(),
      f = {
        ineligibleReason: e,
        eligible: r,
        eligibleIfBaseUrlGateRemoved: n,
        hasCache: o,
        cacheAgeMs: s,
        liveVerdict: h,
        wouldFailClosed: r && !h && (!o || RD() === void 0 && (s ?? 1 / 0) > PJs),
        loadState: this.startupLoadState,
        loadErrorCode: this.startupLoadErrorCode,
        loadCredentialState: this.startupLoadCredentialState,
        loadOutcomeReason: r ? this.startupLoadOutcomeReason : v6n(Kln(e)),
        loadHttpStatus: this.startupLoadHttpStatus,
        loadServerErrorType: this.startupLoadServerErrorType,
        awaitResult: this.startupAwaitResult
      };
    return this.gateSnapshotThisRun = f, queueMicrotask(() => {
      this.gateSnapshotThisRun = void 0
    }), f
  }
  managedConfigPolicyGateFields() {
    let e = this.policyGateSnapshot(),
      r = Ke();
    return {
      policy_ineligible_reason: pe(e.ineligibleReason),
      policy_eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
      policy_cache_age_ms: e.cacheAgeMs,
      policy_would_fail_closed: e.wouldFailClosed,
      policy_live_verdict: e.liveVerdict,
      policy_load_state: c(e.loadState),
      policy_error_code: pe(e.loadErrorCode),
      policy_credential_state: pe(e.loadCredentialState),
      policy_outcome_reason: pe(e.loadOutcomeReason),
      policy_has_auth_token: r.has_auth_token,
      policy_has_api_key_helper: r.has_api_key_helper,
      policy_has_custom_base_url: r.has_custom_base_url,
      policy_api_provider: c(xe()),
      policy_http_status: e.loadHttpStatus,
      policy_server_error_type: pe(e.loadServerErrorType)
    }
  }
  logCacheStateAtFirstPrompt() {
    if (this.firstPromptStateLogged) return;
    this.firstPromptStateLogged = !0;
    let e = this.policyGateSnapshot(),
      r = c(XPo());
    i("tengu_policy_limits_cache_state_at_first_prompt", {
      eligible: e.eligible,
      ineligible_reason: pe(e.ineligibleReason),
      eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
      has_cache: e.hasCache,
      cache_age_ms: e.cacheAgeMs,
      would_fail_closed: e.wouldFailClosed,
      live_verdict: e.liveVerdict,
      token_source: c(Lt()),
      credential_road: c(Win()),
      ...Ke(),
      ms_since_startup: Date.now() - Ue,
      load_state: c(e.loadState),
      startup_fetch_error_code: pe(e.loadErrorCode),
      startup_credential_state: pe(e.loadCredentialState),
      outcome_reason: pe(e.loadOutcomeReason),
      startup_await_result: c(e.awaitResult),
      error_reporting_gate: r
    })
  }
  async load({
    startupAwaited: e = !1
  } = {}) {
    return this.loadFor("load", e)
  }
  async loadFor(e, r = !1) {
    if (this.used = !0, this.ensureCredentialWatch(), dy() && !this.loadingCompletePromise) this.loadingCompletePromise = new Promise((o) => {
      this.loadingCompleteResolve = o
    });
    let n = this.loadingCompleteResolve;
    try {
      if (await this.fetchAndLoad("policy_limits_load", e, r), dy()) this.startBackgroundPolling()
    } finally {
      if (n) {
        if (n(), this.loadingCompleteResolve === n) {
          if (this.loadingCompleteResolve = null, this.loadingTimeoutId) clearTimeout(this.loadingTimeoutId), this.loadingTimeoutId = null
        }
      }
    }
  }
  async refresh({
    observedBoundary: e = !1
  } = {}) {
    this.used = !0, this.stop(), this.ensureCredentialWatch(), this.initializeLoadingPromise();
    let r = dy();
    if (e) await this.removeUnstampedBody();
    else if (!await this.deleteCacheFile()) t("Policy limits: could not remove the previous account's cache; disk adoption stays suppressed");
    if (this.dropUnconfirmedSessionCache(), !r) return;
    await this.loadFor("login_refresh"), t("Policy limits: Refreshed after auth change")
  }
  async clearCache() {
    if (this.used = !0, this.stop(), this.verdictlessEpisode = null, this.ensureCredentialWatch(), !await this.deleteCacheFile()) t("Policy limits: could not remove the previous account's cache; disk adoption stays suppressed");
    this.dropUnconfirmedSessionCache()
  }
  recordFetchOutcome(e, r, n, o, s) {
    if (this.sessionGeneration === e && this.cacheClearEpoch === r) hMr(n, o, s)
  }
  staleFallbackSource() {
    if (RKn()) return CD();
    return BFt() ?? CD()
  }
  dropUnconfirmedSessionCache() {
    if (CD() !== null && this.serverConfirmedGeneration !== this.sessionGeneration) Jin(null)
  }
  async deleteCacheFile() {
    if (this.cacheClearEpoch++, mIe()) return !1;
    if (_Xe(await gXe(GE())), !await this.removeBodyLeavingStamp()) return !1;
    let r = await gXe(GE());
    if (r.kind === "unusable") return !0;
    let n = lMr(r, xKn());
    if (n.seen.length === 0 && !n.incomplete) await bUs(GE());
    else await cMr(GE(), _Us(n));
    return !0
  }
  recordVerdictPrincipal(e) {
    if (e === null || fe(e)) {
      if (this.verdictPrincipalIdentity = e === null ? null : Hme(e), this.verdictPrincipalKind = e === null ? null : e.kind, this.verdictKey = e === null ? null : Z(e), e !== null) this.askedKey = null
    } else this.verdictKey = Z(e);
    this.ensureCredentialWatch(), this.onCredentialMayHaveChanged()
  }
  isVerdictOfLiveCredential() {
    return this.verdictKey !== null && je() === this.verdictKey
  }
  ensureCredentialWatch() {
    if (this.stopCredentialWatch === null) this.stopCredentialWatch = Z4n(this.onCredentialMayHaveChanged);
    if (this.stopTunnelEpochWatch === null) this.stopTunnelEpochWatch = c1s(this.onTunnelCredentialEpoch)
  }
  onTunnelCredentialEpoch = (e) => {
    this.observeTunnelCredentialEpoch(e, "a model response", !0)
  };
  observeTunnelCredentialEpoch(e, r, n) {
    if (e === void 0 || RD() === void 0) return;
    let o = this.tunnelEpochSeen !== void 0;
    if (this.tunnelEpochSeen === void 0 || e > this.tunnelEpochSeen) this.tunnelEpochSeen = e;
    if (this.tunnelVerdictEpoch !== void 0 && e <= this.tunnelVerdictEpoch) return;
    if (!o && this.tunnelVerdictEpoch === void 0) return;
    let s = CD() !== null,
      h = n && this.tunnelRepolledForEpoch !== this.tunnelEpochSeen && this.cyclesInFlight === 0;
    if (!s && !h) return;
    if (t(`Policy limits: the claude ssh launcher injects a different credential than the one this policy was fetched with (${r}); ${s?"withholding client-only keys":"no verdict held"}${h?", re-polling":""}`), s) jFt();
    if (h) this.tunnelRepolledForEpoch = this.tunnelEpochSeen, i("tengu_policy_limits_principal_changed", {
      next_kind: c("none"),
      reason: c("tunnel_credential")
    }), this.fetchAndLoad("policy_limits_poll", "credential_change").catch((f) => l(f))
  }
  settleTunnelCredentialEpoch(e) {
    if (e === void 0 || RD() === void 0) return;
    if (this.tunnelVerdictEpoch = e, this.tunnelEpochSeen === void 0 || e > this.tunnelEpochSeen) this.tunnelEpochSeen = e
  }
  isStaleTunnelCredentialEpoch(e) {
    return e !== void 0 && this.tunnelEpochSeen !== void 0 && e < this.tunnelEpochSeen && RD() !== void 0
  }
  onCredentialMayHaveChanged = () => {
    if (this.principalCheckQueued) return;
    this.principalCheckQueued = !0, queueMicrotask(() => {
      this.checkPrincipal().catch((e) => {
        l(e)
      })
    })
  };
  async checkPrincipal(e = "credential_change") {
    let r = this.sessionGeneration;
    try {
      if (this.verdictPrincipalIdentity === null && CD() === null && bMr() !== void 0) return "unchanged";
      try {
        await Xa(this.credentials)
      } catch {}
      if (lOo() && zC() === "store") try {
        await wMr(this.storageV5, this.credentials)
      } catch (C) {
        t(`Policy limits: stored login origin or account record unreadable (${d(C)})`)
      }
    } finally {
      this.principalCheckQueued = !1
    }
    if (this.sessionGeneration !== r) return "superseded";
    let n = HFt();
    if (n === "replaced" && fd()) return this.askAsHostManagedEnvBearer(e);
    if (n === "replaced" || n === "gone") return t("Policy limits: the env bearer the loaded policy was fetched with is no longer the wire credential; reloading as an account change"), i("tengu_policy_limits_principal_changed", {
      next_kind: c("none"),
      reason: c("env_bearer")
    }), this.refresh({
      observedBoundary: !0
    }).catch((C) => l(C)), "changed";
    let o = D3();
    if (o !== null && !fe(o)) this.scheduleUnclassifiedRecheck();
    if (!fe(o)) {
      if (o !== null && CD() !== null && Z(o) !== this.verdictKey && zC() === "store") {
        if (this.cyclesInFlight > 0) return this.principalCheckOwed = !0, "unchanged";
        let C = we(o);
        if (C !== this.askedKey) return t("Policy limits: the stored login in use is not the one the loaded policy was fetched with, and its account record has not settled; asking the server with it (keyed on the token until the record settles)"), this.repollFor(o, C, "unattributed", e)
      }
      if (o === null && n === null && y$t() && dy()) return this.askAsHostManagedEnvBearer(e);
      return "unchanged"
    }
    let s = Hme(o),
      h = this.verdictPrincipalKind === "token" && o.kind === "token";
    if (this.verdictPrincipalIdentity !== null && s !== this.verdictPrincipalIdentity && !h) {
      if (yqs()) {
        let C = we(o),
          v = this.cyclesInFlight > 0;
        if (v && C === this.askedKey) return this.principalCheckOwed = !0, "unchanged";
        if (!v && C !== this.askedKey) return t(`Policy limits: the credential now belongs to a different principal than the loaded policy; ${g$o} keeps the loaded verdict while the new principal's policy is fetched`), i("tengu_policy_limits_principal_changed", {
          next_kind: c(o.kind),
          reason: c("identity_kept")
        }), this.askedKey = C, this.fetchAcrossBoundaryKeepingVerdict(e).catch((S) => l(S)), "changed"
      }
      return t("Policy limits: the credential now belongs to a different principal than the loaded policy; reloading as an account change"), i("tengu_policy_limits_principal_changed", {
        next_kind: c(o.kind),
        reason: c("identity")
      }), this.refresh({
        observedBoundary: !0
      }).catch((C) => l(C)), "changed"
    }
    if (this.cyclesInFlight > 0) return this.principalCheckOwed = !0, "unchanged";
    let f = Z(o),
      y = we(o);
    if (y === this.askedKey) return "unchanged";
    if (this.verdictPrincipalIdentity === null) {
      if (CD() === null) {
        if (!dy() || this.loadingCompleteResolve !== null) return "unchanged";
        return this.askedKey = y, this.releaseLoadingPromise(), this.initializeLoadingPromise(), this.loadFor(e).catch((C) => l(C)), "started"
      }
      return this.repollFor(o, y, "unattributed", e)
    }
    if (f !== this.verdictKey) return t("Policy limits: a new bearer for the loaded policy (a declared organization's new bearer, one keyed on itself replacing another, a healed store); keeping the verdict and re-polling"), this.repollFor(o, y, o.bearerDigest !== void 0 || h ? "bearer" : "reclassified", e);
    return "unchanged"
  }
  scheduleUnclassifiedRecheck() {
    if (this.unclassifiedRecheckTimer !== null) return;
    this.unclassifiedRecheckTimer = setTimeout(() => {
      this.unclassifiedRecheckTimer = null, this.onCredentialMayHaveChanged()
    }, Pi), this.unclassifiedRecheckTimer.unref?.()
  }
  askAsHostManagedEnvBearer(e) {
    if (this.cyclesInFlight > 0) return this.principalCheckOwed = !0, "unchanged";
    let r = Dt(Uae(Xb() ?? ""));
    if (r === this.askedKey) return "unchanged";
    if (CD() !== null) return this.askedKey = r, i("tengu_policy_limits_principal_changed", {
      next_kind: c("none"),
      reason: c("bearer")
    }), this.fetchAndLoad("policy_limits_poll", e).catch((n) => l(n)), "repolled";
    if (this.loadingCompleteResolve !== null) return "unchanged";
    return this.askedKey = r, this.releaseLoadingPromise(), this.initializeLoadingPromise(), this.loadFor(e).catch((n) => l(n)), "started"
  }
  repollFor(e, r, n, o) {
    return this.askedKey = r, i("tengu_policy_limits_principal_changed", {
      next_kind: c(e.kind),
      reason: c(n)
    }), this.fetchAndLoad("policy_limits_poll", o).catch((s) => l(s)), "repolled"
  }
  async fetchAcrossBoundaryKeepingVerdict(e) {
    let r = this.sessionGeneration,
      n = this.verdictPrincipalIdentity;
    Qin(), WFt(), jFt(), this.prefetchSlot.clear(), this.renewOAuthRefreshLatch(), this.cyclesInFlight++;
    try {
      if (await this.removeUnstampedBody().catch((o) => l(o)), this.sessionGeneration === r) await this.fetchAndLoad("policy_limits_poll", e).catch((o) => l(o))
    } finally {
      this.endCycle(r)
    }
    if (this.sessionGeneration !== r || this.verdictPrincipalIdentity !== n) return;
    t("Policy limits: the new principal's fetch installed nothing; dropping the previous principal's verdict as an account change"), await this.refresh({
      observedBoundary: !0
    })
  }
  async poll(e = "hourly_poll") {
    if (!dy()) return;
    let r = CD(),
      n = r ? _(r) : null;
    try {
      if (await this.checkPrincipal(e) !== "unchanged") return;
      if (this.cyclesInFlight > 0) return;
      await this.fetchAndLoad("policy_limits_poll", e);
      let o = CD();
      if ((o ? _(o) : null) !== n) t("Policy limits: Changed during background poll")
    } catch {}
  }
  startBackgroundPolling() {
    if (this.used = !0, this.poller !== null) return;
    if (!dy()) return;
    if (this.poller = hKn(() => void this.poll(), hi, {
        unref: !0
      }), !this.cleanupRegistered) this.cleanupRegistered = !0, bt(() => this.stopBackgroundPolling())
  }
  stopBackgroundPolling() {
    this.poller?.[Symbol.dispose](), this.poller = null, this.resetAcceleratedRecovery()
  }
}
class eUs {
  client = void 0
}
var OJs = new z(() => new eUs);

function me() {
  return OJs.of(j().host)
}

function B() {
  let e = me();
  return e.client ??= new $Po, e.client
}

function UPo(e) {
  let r = me();
  if (r.client === void 0) {
    r.client = new $Po(e);
    return
  }
  let n = r.client.adoptStartupServices(e);
  switch (n) {
    case "nothing to adopt":
      t("Policy limits: default client already constructed; start-up composition skipped");
      return;
    case "already used":
      t("Policy limits: start-up composition came after the bare default client was used; it keeps running without the backend and credentials store", {
        level: "warn"
      }), i("tengu_policy_limits_late_composition", {});
      return;
    case "already composed":
      t("Policy limits: default client already composed; later start-up composition skipped");
      return;
    case "adopted":
      t("Policy limits: start-up services adopted by the default client");
      return;
    default:
  }
}

function ysi(e) {
  B().recordStartupAwaitResult(e)
}
async function iMr() {
  let e = performance.now(),
    r;
  try {
    let n = B();
    n.ensureLoadRequested({
      startupAwaited: !0
    }), r = await n.awaitColdStartVerdict()
  } catch (n) {
    l(n), r = "timed_out"
  }
  return uXe("policy", r, {
    since: e
  }), r
}

function qin() {
  return B().coldStartTimedOut
}

function BPo() {
  return B().coldStartVerdictWait
}

function FFt() {
  uXe("policy", "not_awaited");
  try {
    if (dy()) B().ensureLoadRequested({
      startupAwaited: !1
    })
  } catch (e) {
    l(e)
  }
}
async function Qmt() {
  let e = performance.now();
  try {
    if (!fIe()) return FFt(), "skipped"
  } catch (r) {
    return l(r), uXe("policy", "timed_out", {
      since: e
    }), "timed_out"
  }
  return iMr()
}

function _si() {
  return B()
}
async function bsi() {
  let e = me().client;
  if (e !== void 0) await e._settleCyclesForTesting()
}

function Ssi() {
  B().stop(), CKn(), me().client = void 0, aVs(), kOo(), sOo(), iOo()
}

function Kin() {
  B().initializeLoadingPromise()
}

function qv() {
  return B().waitForLoad()
}

function jPo() {
  B().logCacheStateAtFirstPrompt()
}

function wsi(e) {
  return B().admitPrefetched(e)
}

function WPo() {
  return me().client?.isVerdictOfLiveCredential() ?? !1
}

function zPo(e = {}) {
  return B().load(e)
}

function GPo() {
  B().prefetch()
}

function Yin() {
  return B().refresh()
}

function VPo() {
  return B().clearCache()
}

function vsi() {
  B().startBackgroundPolling()
}

function ksi() {
  B().stopBackgroundPolling()
}

function Esi() {
  B().stop()
}
var Pi = pMr + 1000;

function fe(e) {
  return e !== null && e.unclassified !== !0
}

function Z(e) {
  let r = Hme(e);
  return e.bearerDigest === void 0 ? r : `${r}:${e.bearerDigest}`
}

function je() {
  let e = D3();
  return e === null ? null : Z(e)
}

function Dt(e) {
  return `env-bearer:${e}`
}

function we(e) {
  let r = Fn()?.accessToken;
  return `${Z(e)}#${r?Uae(r):""}`
}
export {
  Win,
  LPo,
  hKn,
  zin,
  Y$s,
  X$s,
  J$s,
  BX,
  uXe,
  eMr,
  Gin,
  Q$s,
  Vin,
  tMr,
  yKn,
  nMr,
  rMr,
  _Kn,
  bKn,
  oMr,
  Jmt,
  sMr,
  NPo,
  hsi,
  Z$s,
  NFt,
  PJs,
  fIe,
  FPo,
  HPo,
  $Po,
  eUs,
  OJs,
  UPo,
  ysi,
  iMr,
  qin,
  BPo,
  FFt,
  Qmt,
  _si,
  bsi,
  Ssi,
  Kin,
  qv,
  jPo,
  wsi,
  WPo,
  zPo,
  GPo,
  Yin,
  VPo,
  vsi,
  ksi,
  Esi
};
