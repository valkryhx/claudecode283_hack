// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  st,
  te,
  l,
  as,
  Et
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  Or
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  A$e,
  Ept,
  Kb,
  Cfn,
  P$e
} from "B:/~BUN/root/chunk-ceg1zct0.js";
import {
  Ri
} from "B:/~BUN/root/chunk-vpejnsp4.js";
import {
  Ift,
  r$o,
  vYn,
  Oft
} from "B:/~BUN/root/chunk-zafy1b6k.js";
import {
  xUe,
  Hft,
  u_e,
  fc
} from "B:/~BUN/root/chunk-g1mh72ry.js";
import {
  Kt
} from "B:/~BUN/root/chunk-9fcn5kmc.js";
import {
  mkdir as A,
  readFile as F,
  stat as b
} from "fs/promises";
import {
  dirname as D,
  join as x
} from "path";
import {
  dirname as O
} from "path";
var S = {
  "fail-closed": 5,
  "fail-open": 15
};

function T(e, r, n) {
  return (u) => y(r, () => e(u), n)
}

function WDr(e, r) {
  return y(O(e), r, "fail-closed")
}
async function y(e, r, n) {
  let u = S[n],
    s;
  try {
    s = await N(e, u, n)
  } catch (o) {
    if (n === "fail-closed" || o instanceof fc) throw o;
    return t(`wif: credentials lock unavailable at ${e} (${l(o)}); refreshing without cross-process serialization`), r()
  }
  try {
    return i("tengu_wif_user_oauth_lock_acquired", {
      mode: c(n)
    }), await r()
  } finally {
    i("tengu_wif_user_oauth_lock_released", {
      mode: c(n)
    });
    try {
      await s()
    } catch (o) {
      if (as(o)) t(`wif: lock release failed: ${o}`);
      else d(o)
    }
  }
}
async function N(e, r, n) {
  for (let u = 0;; u++) try {
    return await Ri(e, {
      stale: 60000,
      update: 5000,
      onCompromised: (s) => t(`WIF credentials lock compromised: ${s}`, {
        level: "error"
      })
    })
  } catch (s) {
    if (s.code !== "ELOCKED") throw s;
    if (u >= r) {
      i("tengu_wif_user_oauth_lock_retry_limit", {
        attempt: u,
        mode: c(n)
      });
      let o = new fc(`Could not acquire credentials lock at ${e} after ${r} retries`);
      throw o.cause = Object.assign(Error("credentials lock busy"), {
        code: "ELOCKED"
      }), o
    }
    i("tengu_wif_user_oauth_lock_retry", {
      attempt: u,
      mode: c(n)
    }), await Q(1000 + Math.random() * 1000)
  }
}
class R {
  credentialsPromise = void 0;
  tokenCachePromise = void 0;
  resolvedBaseUrlSnapshot = void 0;
  failedAccessTokens = new Set;
  reset() {
    this.credentialsPromise = void 0, this.tokenCachePromise = void 0, this.resolvedBaseUrlSnapshot = void 0, this.failedAccessTokens.clear()
  }
}
var W = new q(() => new R);

function E() {
  return W.of(j().host)
}
var U = 20;

function Cte() {
  return E().resolvedBaseUrlSnapshot
}

function PCe() {
  return I(E())
}

function I(e) {
  if (e.credentialsPromise === void 0) e.credentialsPromise = Or("wif_credentials_resolve", async () => {
    let r = await K();
    if (r === null) return e.resolvedBaseUrlSnapshot = null, null;
    let n = a.ANTHROPIC_BASE_URL || r.base_url,
      u = n || "https://api.anthropic.com",
      o = Kb() === "env-quad" ? await M(r, u) : await vYn(r),
      f = {
        ...r,
        base_url: n,
        ...r.authentication.credentials_path || o === null ? {} : {
          authentication: {
            ...r.authentication,
            credentials_path: o
          }
        }
      },
      [{
        getUserAgent: h
      }, {
        getProxyFetchOptions: k
      }] = await Promise.all([import("B:/~BUN/root/chunk-b8gjzn8d.js"), import("B:/~BUN/root/chunk-nxjptnfx.js")]),
      w = Oft(f, {
        baseURL: u,
        fetch: (p, C) => fetch(p, {
          ...C,
          ...k({
            forAnthropicAPI: !0,
            url: String(p)
          }),
          signal: AbortSignal.timeout(1e4)
        }),
        userAgent: h(),
        onSafetyWarning: (p) => t(p, {
          level: "warn"
        }),
        onCacheWriteError: (p) => t(String(p), {
          level: "warn"
        })
      });
    if (o) switch (r.authentication.type) {
      case "user_oauth":
        w.provider = T(v(H(w.provider, o), o, "after-recorded-401", e.failedAccessTokens), D(o), "fail-closed");
        break;
      case "oidc_federation": {
        let p = P$e();
        if (p === null) break;
        await A(p, {
          recursive: !0,
          mode: 448
        }).catch((C) => t(`wif: cannot create ${p} (${l(C)}); the credentials lock may be unavailable`, {
          level: "warn"
        })), w.provider = T(v(w.provider, o, "always", e.failedAccessTokens), p, "fail-open");
        break
      }
    }
    return e.resolvedBaseUrlSnapshot = w.baseURL ?? null, w
  }).catch((r) => {
    throw t(`WIF credential resolution failed: ${l(r)}`, {
      level: "error"
    }), r instanceof fc ? r : new fc(l(r))
  });
  return e.credentialsPromise
}
async function zDr(e) {
  let r = E(),
    n = await P(r).catch(() => null);
  if (n === null) return;
  if (e) {
    if (r.failedAccessTokens.add(e), r.failedAccessTokens.size > U)
      for (let u of r.failedAccessTokens) {
        r.failedAccessTokens.delete(u);
        break
      }
  }
  n.invalidate()
}

function Kle() {
  return P(E())
}

function P(e) {
  return e.tokenCachePromise ??= I(e).then((r) => {
    if (r === null) return null;
    return new Ift(async (u) => {
      try {
        let s = await r.provider(u);
        return _("wif_token_exchange"), s
      } catch (s) {
        let o = s instanceof fc ? s : new fc(s instanceof Error ? s.message : String(s), null);
        if (o !== s) o.cause = s;
        throw m("wif_token_exchange", B(o)), o
      }
    }, (u) => t(String(u), {
      level: "warn"
    }))
  }), e.tokenCachePromise
}

function v(e, r, n, u) {
  return async (s) => {
    if (!s?.forceRefresh) return e(s);
    if (n === "always" || u.size > 0) try {
      await Hft(r, (w) => t(w, {
        level: "warn"
      }));
      let o = await import("fs"),
        f = JSON.parse(await o.promises.readFile(r, "utf-8")),
        h = f.access_token,
        k = f.expires_at == null ? null : Number(f.expires_at);
      if (typeof h === "string" && h && !u.has(h) && (k === null || Date.now() / 1000 < k - xUe)) {
        let {
          logEvent: w
        } = await import("B:/~BUN/root/chunk-m1txwwpz.js"), {
          fromEnum: p
        } = await import("B:/~BUN/root/chunk-hca4xbgs.js");
        return w("tengu_wif_user_oauth_refresh_race_resolved", {
          mode: p(n)
        }), t("wif: adopting sibling-rotated access token from credentials file; skipping refresh grant"), {
          token: h,
          expiresAt: k
        }
      }
    } catch (o) {
      t(`wif: rotated-token adoption check failed: ${l(o)}`)
    }
    return e(s)
  }
}

function H(e, r) {
  let n = async () => {
    try {
      let u = await import("fs");
      return JSON.parse(await u.promises.readFile(r, "utf-8"))
    } catch {
      return null
    }
  };
  return async (u) => {
    let o = (await n())?.refresh_token;
    try {
      return await e(u)
    } catch (f) {
      if (f instanceof fc && (f.statusCode === 400 || f.statusCode === 401) && typeof f.body === "string" && f.body.includes('"invalid_grant"') && A$e(f) === null && typeof o === "string" && o) try {
        let h = await n();
        if (h && h.refresh_token === o) {
          let {
            logEvent: k
          } = await import("B:/~BUN/root/chunk-m1txwwpz.js");
          await u_e(r, {
            ...h,
            refresh_token: void 0
          }), k("tengu_wif_user_oauth_refresh_token_cleared", {})
        }
      } catch (h) {
        if (Et(h)) t(`wif: refresh-token cleanup write failed: ${h}`);
        else d(st(te(h), "WIF: failed to clear stale user_oauth refresh_token"))
      }
      throw f
    }
  }
}

function P6o(e) {
  if (e instanceof fc && typeof e.statusCode === "number") return e.statusCode >= 500 || e.statusCode === 429 || e.statusCode === 408;
  let r = e;
  for (let n = 0; n < 4 && r instanceof Error; n++) {
    if (r.name === "TimeoutError" || L(r)) return !0;
    r = r.cause
  }
  return !1
}

function L(e) {
  switch ("code" in e && typeof e.code === "string" ? e.code : "") {
    case "ECONNRESET":
    case "ECONNREFUSED":
    case "ECONNABORTED":
    case "ETIMEDOUT":
    case "EHOSTUNREACH":
    case "ENETUNREACH":
    case "ENETDOWN":
    case "ENOTFOUND":
    case "EAI_AGAIN":
    case "EPIPE":
    case "UND_ERR_SOCKET":
    case "UND_ERR_CONNECT_TIMEOUT":
    case "ELOCKED":
    case "ConnectionRefused":
    case "ConnectionClosed":
    case "FailedToOpenSocket":
    case "Timeout":
      return !0;
    default:
      return !1
  }
}

function B(e) {
  if (Ept(e)) return "no_refresh_available";
  if (A$e(e)) return "account_on_hold";
  if (typeof e.body === "string" && e.body.includes('"invalid_grant"')) return "invalid_grant";
  if (typeof e.statusCode === "number") {
    if (e.statusCode >= 500) return "http_5xx";
    if (e.statusCode >= 400) return "http_4xx"
  }
  let r = e.message.toLowerCase();
  if (r.includes("parse") || r.includes("json")) return "parse_failed";
  return "network_error"
}

function iVn() {
  E().reset(), Cfn()
}
var g = (e) => process.env[e]?.trim() || void 0;
async function K() {
  if (Kb() === "env-quad") {
    let e = g("ANTHROPIC_FEDERATION_RULE_ID"),
      r = g("ANTHROPIC_ORGANIZATION_ID");
    if (e && r) {
      let n = g("ANTHROPIC_IDENTITY_TOKEN_FILE");
      return {
        organization_id: r,
        workspace_id: g("ANTHROPIC_WORKSPACE_ID"),
        base_url: g("ANTHROPIC_BASE_URL"),
        authentication: {
          type: "oidc_federation",
          federation_rule_id: e,
          service_account_id: g("ANTHROPIC_SERVICE_ACCOUNT_ID"),
          identity_token: n ? {
            source: "file",
            path: n
          } : void 0,
          scope: g("ANTHROPIC_SCOPE")
        }
      }
    }
  }
  return r$o()
}
async function M(e, r) {
  if (e.authentication.type !== "oidc_federation") return null;
  let n = e.authentication.identity_token?.path,
    u;
  if (n) try {
    u = (await F(n, "utf-8")).trim()
  } catch (f) {
    return t(`wif: cannot read identity token at ${n} (${l(f)}); federation token cache disabled`), null
  } else u = g("ANTHROPIC_IDENTITY_TOKEN");
  if (!u) return t("wif: no identity token; federation token cache disabled"), null;
  let s = P$e();
  if (s === null) return t("wif: no config directory; federation token cache disabled"), null;
  return t("wif: federation token cache disabled on Windows (no directory ownership check available)"), null
}
export {
  WDr,
  Cte,
  PCe,
  zDr,
  Kle,
  P6o,
  iVn
};
