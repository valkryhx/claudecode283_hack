// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j, Sj } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { Hl, nf, Sy, pt, Ap, An, O0, dD, vy, S1, Ace, Dt, Ee, le, Gb } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { MY } from "B:/~BUN/root/chunk-tndjj29v.js";
var S = 3600000,
  b = 86400000,
  h = "/api/claude_code/organizations/metrics_enabled";
class o extends Error {}
async function w() {
  let e = Ace(await dD(), `${an().BASE_API_URL}${h}`);
  if (e.error) throw new o("Auth error: no credential usable for the metrics opt-out check");
  let n = await Dt.get(h, {
    auth: "none",
    headers: e.headers,
    timeout: 5000,
    bypassEssentialTrafficOnly: !0,
    maxRedirects: 0
  });
  if (!n.ok) throw new o(`metrics_enabled unavailable: ${n.reason}`);
  if (typeof n.data?.metrics_logging_enabled !== "boolean") throw Error("metrics_enabled response missing metrics_logging_enabled");
  return n.data;
}
async function M(oauthRefreshLatch) {
  try {
    let n = await vy(w, {
      also403Revoked: !0,
      gateToSessionOAuthCredential: !0,
      oauthRefreshLatch: oauthRefreshLatch
    });
    return oauthRefreshLatch.attempted = !1, t(`${S1} Metrics opt-out API response: enabled=${n.metrics_logging_enabled}`), _("api_metrics_opt_out_check"), {
      enabled: n.metrics_logging_enabled,
      hasError: !1
    };
  } catch (error) {
    return t(`${S1} Failed to check metrics opt-out status: ${l(error)}`, error instanceof o ? {
      level: "error"
    } : void 0), m("api_metrics_opt_out_check", "request_failed"), {
      enabled: !1,
      hasError: !0
    };
  }
}
var y = new q(() => {
    let oauthRefreshLatch_2 = {
      attempted: !1
    };
    return {
      memo: MY(() => M(oauthRefreshLatch_2), S),
      oauthRefreshLatch: oauthRefreshLatch_2
    };
  }),
  E = new q(() => ({
    identity: void 0
  }));
function u() {
  let {
    key: key,
    source: source
  } = nf();
  if (key === null) return null;
  if (source === "apiKeyHelper") {
    let r = Sy();
    return r ? `key:helper:${Kt(r).slice(0, 16)}` : null;
  }
  return `key:${Kt(key).slice(0, 16)}`;
}
function c(e) {
  let n = O0();
  if (n !== void 0) return n.organizationUuid !== void 0 ? `acct:${n.accountUuid}/${n.organizationUuid}` : null;
  if (!e?.accountUuid || !e.organizationUuid) return null;
  return a.CLAUDE_CODE_OAUTH_TOKEN || Sj() ? null : `acct:${e.accountUuid}/${e.organizationUuid}`;
}
function s() {
  let e = An();
  if (e !== void 0) return c(e);
  return Hl() ? null : u();
}
async function p(e) {
  let n = An();
  if (n === void 0) return Hl() ? null : u();
  if (O0() !== void 0) return c(n);
  return c(await Gb(e));
}
function P() {
  let e = An();
  if (e !== void 0 || Hl()) {
    let n = O0();
    if (n !== void 0) return `acct:${n.accountUuid}/${n.organizationUuid ?? "?"}`;
    if (e !== void 0) return `acct:${e.accountUuid ?? "?"}/${e.organizationUuid ?? "?"}`;
    return "oauth:no-record";
  }
  return u() ?? "none";
}
function I() {
  let e = j().host,
    n = y.of(e),
    r = E.of(e),
    i = P();
  if (r.identity !== void 0 && r.identity !== i) n.memo.cache.clear(), n.oauthRefreshLatch.attempted = !1;
  return r.identity = i, n.memo();
}
function MZr() {
  let e = j().host,
    n = y.of(e);
  n.memo.cache.clear(), n.oauthRefreshLatch.attempted = !1, E.of(e).identity = void 0;
}
async function g(e) {
  let n = s() === null ? null : await p(e),
    r = await I();
  if (r.hasError) return r;
  if (n === null) return r;
  if ((await p(e)) !== n) return m("api_metrics_opt_out_check", "principal_changed_mid_flight"), {
    enabled: !1,
    hasError: !0
  };
  if (s() !== n) return r;
  let i = C(n);
  if (i !== void 0 && i.enabled === r.enabled && Date.now() - i.timestamp < b) return r;
  return await Ee(k => T(k, n, r.enabled), e), r;
}
function T(e, n, enabled) {
  if (s() !== n || n.startsWith("acct:") && e.oauthAccount === void 0) return e;
  return {
    ...e,
    metricsStatusCache: void 0,
    metricsStatusCacheByPrincipal: O({
      ...e.metricsStatusCacheByPrincipal,
      [n]: {
        enabled: enabled,
        timestamp: Date.now()
      }
    })
  };
}
var F = 8;
function O(e) {
  let r = Object.entries(e).filter(([, i]) => A(i)).sort(([, i], [, f]) => f.timestamp - i.timestamp).slice(0, F);
  return Object.fromEntries(r);
}
function A(e) {
  return typeof e?.enabled === "boolean" && Number.isFinite(e.timestamp) && e.timestamp <= Date.now();
}
function C(e) {
  let n = le().metricsStatusCacheByPrincipal?.[e];
  return n !== void 0 && A(n) ? n : void 0;
}
async function DZr(e) {
  if (pt() && !Ap()) return {
    enabled: !1,
    hasError: !1
  };
  let n = s(),
    r = n === null ? void 0 : C(n);
  if (r !== void 0) {
    if (Date.now() - r.timestamp > b) g(e).catch(d);
    return {
      enabled: r.enabled,
      hasError: !1
    };
  }
  return g(e);
}
export { MZr, DZr };