// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { k, G, pi } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Nt, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { _l, HQe, Or } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _ln, GT, zIe, Y1s, Sln, mf, ejs, DMo, HDr, mYn, t$t, YXe, pB, LD, Gt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { cm, oT, uTe, N_ } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Kct as maxContentLength, qq, MBn, DBn, Yct } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { dcr, ccr, iZr, oFe, gbe, ucr, Qot, T6t, pcr, aZr, C6t, Jss, Qss, Zot, nAe, est, DKe, O7, M8 } from "B:/~BUN/root/chunk-2sjr2z8k.js";
import { Vxn, x6t, iis, yCt, qxn, rAe, LKe, gcr, _Ct, Kxn, bCt } from "B:/~BUN/root/chunk-e6jzpkbb.js";
import { qrr, HYr, jXo, $Yr, Krr, UYr, WXo, zXo, BYr, ZVe, Yrr, Xrr, RVt, jYr } from "B:/~BUN/root/chunk-kdjm5pps.js";
import { yOn, eRt } from "B:/~BUN/root/chunk-vac5hr4g.js";
import { BC } from "B:/~BUN/root/chunk-429xgjya.js";
import { kh } from "B:/~BUN/root/chunk-qjf8jcwq.js";
var timeout = 5000,
  fe = ["not_permitted", "ip_restricted", "lane_unavailable"];
function M(e) {
  return fe.some(item => item === e);
}
async function B(e, o, {
  etag: etag
} = {}) {
  let i = oFe(e);
  try {
    let s = ce(e, o),
      headers = {
        ...s.headers,
        ...(etag !== void 0 && {
          "If-None-Match": etag
        })
      },
      r = await Gt.get(s.path, {
        auth: s.auth,
        isBackground: !0,
        timeout: timeout,
        maxContentLength: maxContentLength,
        validateStatus: () => !0,
        ...(Object.keys(headers).length > 0 && {
          headers: headers
        })
      });
    if (!r.ok) return t(`[servedCatalog] fetch (${i}) skipped: ${r.reason}${r.reason === "no-auth" ? ` (${r.detail})` : ""}`), {
      status: "skipped",
      reason: r.reason
    };
    let httpStatus = r.status;
    if (httpStatus === 304 && etag !== void 0) return t(`[servedCatalog] fetch (${i}): not modified`), {
      status: "not_modified",
      httpStatus: httpStatus
    };
    if (httpStatus < 200 || httpStatus >= 300) {
      let m = I(e, httpStatus, r.data);
      return t(`[servedCatalog] fetch (${i}): HTTP ${httpStatus}${ge(m)}`), m ?? {
        status: "error",
        reason: "http_status",
        httpStatus: httpStatus
      };
    }
    let y = DBn().safeParse(r.data);
    if (!y.success) return t(`[servedCatalog] fetch (${i}): response failed validation`), {
      status: "error",
      reason: "parse_failed",
      httpStatus: httpStatus
    };
    let etag_2 = ve(r.response?.headers),
      u = i === "orgless" ? he(y.data) : {},
      catalog = Yct(y.data, o);
    if (catalog === null) return t(`[servedCatalog] fetch (${i}) ok: surface not served${L(u)}`), {
      status: "empty",
      etag: etag_2,
      httpStatus: httpStatus,
      ...u
    };
    if (Sln(catalog)) return t(`[servedCatalog] fetch (${i}) ok: ${catalog.config.models?.length ?? 0} rows kept after row validation dropped others; etag withheld, full refetch next refresh${L(u)}`), {
      status: "ok",
      catalog: catalog,
      etag: void 0,
      httpStatus: httpStatus,
      ...u
    };
    return t(`[servedCatalog] fetch (${i}) ok: ${catalog.config.models?.length ?? 0} rows${L(u)}`), {
      status: "ok",
      catalog: catalog,
      etag: etag_2,
      httpStatus: httpStatus,
      ...u
    };
  } catch (error) {
    let {
      kind: kind,
      status: r
    } = pi(error);
    switch (t(`[servedCatalog] fetch (${i}) failed: ${kind}${r !== void 0 ? ` ${r}` : ""}`), kind) {
      case "timeout":
        return {
          status: "error",
          reason: "timeout"
        };
      case "network":
        return {
          status: "error",
          reason: "network"
        };
      case "auth":
      case "http":
        return r === void 0 ? {
          status: "error",
          reason: "network"
        } : I(e, r, be(error)) ?? {
          status: "error",
          reason: "http_status",
          httpStatus: r
        };
      case "other":
        return {
          status: "error",
          reason: "exception"
        };
    }
  }
}
function ce(e, o) {
  switch (e.kind) {
    case "account":
      return {
        path: `/api/organizations/:orgUUID/model_selector/${o}`,
        auth: "teleport-org",
        headers: {}
      };
    case "token":
      return {
        path: `/api/model_selector/${o}`,
        auth: "claude-ai-oauth",
        headers: {
          "anthropic-client-platform": kh()
        }
      };
    case "api_key":
      return {
        path: `/api/model_selector/${o}`,
        auth: "required",
        headers: {
          "anthropic-client-platform": kh()
        }
      };
    case "profile":
    case "federation":
      return {
        path: `/api/model_selector/${o}`,
        auth: "async",
        headers: {
          "anthropic-client-platform": kh()
        }
      };
  }
}
function he(e) {
  let organizationUuid = Vt(e.organization_uuid)?.toLowerCase(),
    resolution = MBn.find(item => item === e.resolution);
  return {
    ...(organizationUuid !== void 0 && {
      organizationUuid: organizationUuid
    }),
    ...(resolution !== void 0 && {
      resolution: resolution
    })
  };
}
function L(e) {
  return e.resolution === void 0 ? "" : ` (resolution ${e.resolution})`;
}
var j = ["oauth_scope_insufficient", "oauth_token_narrowed"],
  errorCode_2 = "ip_not_in_allowed_range",
  K = ["not_found", "account_session_invalid", "organization_not_visible"],
  ut = [...j, errorCode_2, ...K];
function V(e, o) {
  let a = q(o);
  return e.find(item => item === a);
}
function I(e, o, a) {
  return _e(o, a) ?? ke(o, a) ?? ye(e, o, a);
}
function ge(e) {
  if (e === void 0 || !M(e.reason)) return "";
  return `${e.errorCode !== void 0 ? ` ${e.errorCode}` : ""} (${U(e.reason)})`;
}
function U(e) {
  switch (e) {
    case "not_permitted":
      return "this credential cannot read the served list";
    case "ip_restricted":
      return "the organization's IP allowlist refuses this network";
    case "lane_unavailable":
      return "the server has not enabled the org-less route for this session";
  }
}
function _e(httpStatus_2, o) {
  let errorCode = V(j, o);
  if (httpStatus_2 === 403 && errorCode !== void 0) return {
    status: "error",
    reason: "not_permitted",
    httpStatus: httpStatus_2,
    errorCode: errorCode
  };
  return;
}
function ke(httpStatus_3, o) {
  if (httpStatus_3 === 403 && q(o) === errorCode_2) return {
    status: "error",
    reason: "ip_restricted",
    httpStatus: httpStatus_3,
    errorCode: errorCode_2
  };
  return;
}
function ye(e, httpStatus_4, a) {
  if (oFe(e) !== "orgless") return;
  let errorCode_3 = V(K, a);
  if (httpStatus_4 === 404 || httpStatus_4 === 403 && errorCode_3 === "account_session_invalid" || httpStatus_4 === 401 && errorCode_3 === "organization_not_visible" && gbe(e) === "profile") return {
    status: "error",
    reason: "lane_unavailable",
    httpStatus: httpStatus_4,
    ...(errorCode_3 !== void 0 && {
      errorCode: errorCode_3
    })
  };
  return;
}
function q(e) {
  let o = F(e, "error"),
    a = F(F(o, "details"), "error_code");
  return typeof a === "string" && a.length > 0 ? a : void 0;
}
function F(e, o) {
  return typeof e === "object" && e !== null && o in e ? e[o] : void 0;
}
function be(e) {
  return F(F(e, "response"), "data");
}
function ve(e) {
  let o = e?.etag;
  return qq(o) ? o : void 0;
}
var xe = 30000,
  N = dcr,
  we = 256;
function W(e) {
  return `${e.replace(/\.json$/, "")}.headless-failed.json`;
}
function Se(e, o = Math.random()) {
  return iZr(z(e), o);
}
function z(e) {
  return Math.min(xe * 2 ** (Math.max(1, e) - 1), N);
}
function Ce(e) {
  return z(e) * (1 + ccr);
}
async function CVt(e, o = Date.now(), a = Math.random()) {
  let i = await Y(e);
  if (i === void 0 || i.failedAt > o) return !0;
  return o - i.failedAt >= Se(i.failures, a);
}
async function Y(e) {
  let o;
  try {
    o = (await pB().readRange(W(e), 0, we)).toString("utf8");
  } catch (error) {
    if (!G(error)) t(`[servedCatalog] headless retry marker read failed: ${k(error) ?? "unknown"}`);
    return;
  }
  let a = pt(o, !1);
  if (typeof a !== "object" || a === null) return;
  let failedAt = "failedAt" in a ? a.failedAt : void 0;
  if (typeof failedAt !== "number" || !Number.isFinite(failedAt)) return;
  let s = "failures" in a ? a.failures : void 0;
  return {
    failedAt: failedAt,
    failures: typeof s === "number" && Number.isSafeInteger(s) && s >= 1 ? s : 1
  };
}
function Re(e, o) {
  return e.failedAt <= o && o - e.failedAt < Ce(e.failures) + N;
}
async function Lvn(e, o, failedAt_2 = Date.now()) {
  let i = pB(),
    s = W(e);
  try {
    if (o === "clear") {
      await i.delete(s);
      return;
    }
    let n = o === "back_off" ? await Y(e) : void 0,
      r = {
        failedAt: failedAt_2,
        failures: n !== void 0 && Re(n, failedAt_2) ? n.failures + 1 : 1
      };
    await i.mkdir(LD()), await i.atomicWrite(s, _(r), 384);
  } catch (error) {
    if (!G(error)) t(`[servedCatalog] headless retry marker write failed: ${k(error) ?? "unknown"}`);
  }
}
async function jrr(e, o) {
  let servedCatalogSettledRefreshes = Or().servedCatalogSettledRefreshes;
  if (servedCatalogSettledRefreshes.has(o)) return;
  switch (servedCatalogSettledRefreshes.add(o), o.fetchStatus) {
    case "error":
    case "skipped":
      await Lvn(e, Me(o) ? "retry_soon" : "back_off");
      return;
    case "ok":
    case "empty":
    case "not_modified":
      await Lvn(e, o.entry === void 0 || Zot(o.entry) ? "back_off" : "clear");
      return;
    default:
      return;
  }
}
function Me(e) {
  return e.prior === void 0 && e.fetchStatus === "error" && !M(e.fetchReason);
}
function Nvn({
  allowNetwork: allowNetwork
}) {
  let mode = nAe(),
    surface = M8(),
    scope = O7();
  if (mode === "off" || scope === null) return Promise.resolve({
    mode: "off",
    surface: surface,
    fetchStatus: "off",
    entry: void 0,
    prior: void 0
  });
  let servedCatalogRefreshes = Or().servedCatalogRefreshes,
    n = T6t(scope, surface),
    r = servedCatalogRefreshes.get(n);
  if (r) return r;
  let d = Ee({
    mode: mode,
    surface: surface,
    scope: scope,
    allowNetwork: allowNetwork
  }).finally(() => {
    servedCatalogRefreshes.delete(n);
  });
  return servedCatalogRefreshes.set(n, d), d;
}
async function Ee({
  mode: mode_2,
  surface: surface_2,
  scope: scope_2,
  allowNetwork: allowNetwork_2
}) {
  let s,
    fetchMs,
    route = oFe(scope_2),
    credential = gbe(scope_2),
    y = u => ({
      mode: mode_2,
      surface: surface_2,
      route: route,
      credential: credential,
      ...(u?.resolution !== void 0 && {
        resolution: u.resolution
      }),
      prior: s,
      ...(fetchMs !== void 0 && {
        fetchMs: fetchMs
      })
    }),
    h = () => y(s);
  try {
    if (s = await pcr(scope_2, surface_2), s && !Zot(s)) return {
      ...h(),
      fetchStatus: "cache_fresh",
      entry: s
    };
    if (!allowNetwork_2) return {
      ...h(),
      fetchStatus: "cache_only",
      entry: s
    };
    let u = Or().servedCatalogRefusal;
    if (u !== void 0) return {
      ...h(),
      fetchStatus: "cache_only",
      fetchReason: u,
      entry: s
    };
    let v = performance.now(),
      m = await B(scope_2, surface_2, {
        etag: s?.etag
      });
    if (fetchMs = Math.round(performance.now() - v), !ucr(O7(), scope_2)) return t("[servedCatalog] scope changed during fetch; answer dropped"), {
      ...h(),
      fetchStatus: "error",
      fetchReason: "scope_changed",
      entry: void 0
    };
    switch (m.status) {
      case "ok":
      case "empty":
        {
          let entry = Jss({
            catalog: m.status === "ok" ? m.catalog : null,
            etag: m.etag,
            organizationUuid: m.organizationUuid,
            resolution: m.resolution
          });
          if (await C6t(scope_2, surface_2, entry), m.status === "ok") mYn(m.catalog);
          return {
            ...h(),
            resolution: m.resolution,
            fetchStatus: m.status,
            httpStatus: m.httpStatus,
            entry: entry
          };
        }
      case "not_modified":
        {
          let entry_2 = s ? Qss(s) : void 0;
          if (entry_2) await C6t(scope_2, surface_2, entry_2);
          return {
            ...h(),
            fetchStatus: "not_modified",
            httpStatus: m.httpStatus,
            entry: entry_2
          };
        }
      case "skipped":
        return {
          ...h(),
          fetchStatus: "skipped",
          fetchReason: m.reason,
          entry: s
        };
      case "error":
        {
          if (M(m.reason)) Or().servedCatalogRefusal = m.reason;
          let entry_3 = s;
          if (m.reason === "lane_unavailable" && s !== void 0) t("[servedCatalog] org-less route not enabled; cached entry discarded"), await aZr(scope_2, surface_2), entry_3 = void 0;
          return {
            ...y(entry_3),
            fetchStatus: "error",
            fetchReason: m.reason,
            httpStatus: m.httpStatus,
            ...(m.errorCode !== void 0 && {
              errorCode: m.errorCode
            }),
            entry: entry_3
          };
        }
    }
  } catch (error) {
    return l(error), {
      ...h(),
      fetchStatus: "error",
      fetchReason: "exception",
      entry: s
    };
  }
}
var Oe = 1750,
  Fe = 1500,
  Pe = 4500;
function He(e) {
  if (M8() === "ccr") return Pe;
  return e ? Fe : Oe;
}
var budgetMs = 2000;
async function Z({
  headless: headless
}) {
  if (Or().servedCatalogActive !== void 0) return;
  try {
    if (nAe() !== "primary" || Le()) {
      Te(headless);
      return;
    }
    let scope_3 = O7();
    if (scope_3 === null) {
      E("no_scope", "no cache scope");
      return;
    }
    let a = M8(),
      i = await pcr(scope_3, a),
      s = "cache",
      n,
      r = {},
      timing,
      y = !1,
      h;
    if (i === void 0) {
      let x = headless ? Qot(scope_3, a) : null;
      if (x !== null && !(await CVt(x))) y = !0;else {
        let w = Nvn({
          allowNetwork: !0
        });
        if (x !== null) w = w.then(async O => (await jrr(x, O), O));
        let S = await J(w, {
          wait: "first_fetch",
          headless: headless,
          budgetMs: He(headless),
          scope: scope_3
        });
        timing = S.timing, h = S.outcome, i = S.outcome?.entry, n = S.outcome === void 0 ? "timeout" : S.outcome.fetchStatus, r = Q(S.outcome), s = `fetch:${n}`;
      }
    } else if (!headless && Zot(i)) {
      let x = await J(Nvn({
        allowNetwork: !0
      }), {
        wait: "stale_refresh",
        headless: headless,
        budgetMs: budgetMs,
        scope: scope_3
      });
      if (timing = x.timing, h = x.outcome, n = x.outcome === void 0 ? "timeout" : x.outcome.fetchStatus, x.outcome?.fetchReason === "lane_unavailable") i = void 0;else i = x.outcome?.entry ?? i, s = `stale cache: waited ${timing.wait_ms}ms for refresh \u2192 ${Zot(i) ? "kept stale" : "refreshed"} (fetch:${n})`;
    }
    if (Or().servedCatalogActive !== void 0 || !ucr(O7(), scope_3)) return;
    let u = i?.catalog ?? null,
      v = i?.resolution ?? h?.resolution,
      lane = ee(scope_3, v);
    if (u === null) {
      if (i !== void 0) E("surface_not_served", "server serves this surface no rows", {
        ...lane,
        ...timing
      }, scope_3);else if (y) E("headless_held_off", "nothing cached, and a recent headless request failed, so this run does not ask again", lane, scope_3);else if (h !== void 0 && De(h)) Be(h, {
        headless: headless,
        timing: timing,
        lane: lane,
        scope: scope_3
      });else E(`${headless ? "headless_" : ""}fetch_${n ?? "none"}`, `nothing cached, ${s} produced no rows`, {
        ...lane,
        ...r,
        ...timing
      }, scope_3);
      return;
    }
    if (YXe(u).length === 0) {
      E(zIe(u).length === 0 ? "no_selectable_rows" : "no_offered_rows", `served rows hold no model this build offers (${GT(u).length} rows via ${s})`, {
        ...lane,
        ...timing
      }, scope_3);
      return;
    }
    let b = i !== void 0 && Zot(i);
    ejs(u, i?.fetchedAt, b, {
      route: oFe(scope_3),
      credential: gbe(scope_3),
      organizationUuid: i?.organizationUuid,
      resolution: i?.resolution
    }), g("model_catalog_primary", {
      decision: c("served"),
      ...lane,
      ...timing
    }), t(`[servedCatalog] primary: using served rows (${GT(u).length} rows via ${s} over the ${oFe(scope_3)} route${Ue(gbe(scope_3))}, fetched ${Math.max(0, Math.round((Date.now() - (i?.fetchedAt ?? Date.now())) / 1000))}s ago${b ? ", stale" : ""}); the served list replaces the compiled picker for this session`);
  } catch (error) {
    if (l(error), Or().servedCatalogActive === void 0 && nAe() === "primary") E("exception", "exception");
  }
}
async function MXo() {}
function Le() {
  return !1;
}
function Te(e) {}
function Q(e) {
  let fetch_reason = pe(e?.fetchReason),
    http_status = e?.httpStatus;
  return {
    ...(fetch_reason !== void 0 && {
      fetch_reason: fetch_reason
    }),
    ...(http_status !== void 0 && {
      http_status: http_status
    })
  };
}
function ee(e, o) {
  let a = oFe(e);
  return {
    route: c(a),
    credential: c(gbe(e)),
    auth_kind: c(DKe()),
    ...(a === "orgless" && {
      resolution: c(o ?? "unknown")
    })
  };
}
function Ue(e) {
  switch (e) {
    case "oauth":
      return "";
    case "api_key":
      return " with the API key";
    case "profile":
      return " with the Console profile";
    case "federation":
      return " with the federation credential";
  }
}
function te(e) {
  return {
    route: oFe(e),
    credential: gbe(e)
  };
}
async function J(e, o) {
  let {
      budgetMs: a
    } = o,
    i = performance.now(),
    outcome = await Nt(e, a, `served catalog ${o.wait}`).catch(() => {
      return;
    });
  if (outcome === void 0) e.then(r => $e(r, o)).catch(r => l(r));
  let fetch_ms = outcome?.fetchMs;
  return X(outcome === void 0 ? "warn" : "info", "model_catalog_refresh_wait", {
    budget_ms: a,
    waited_ms: Math.round(performance.now() - i),
    timed_out: outcome === void 0,
    first_fetch: o.wait === "first_fetch"
  }), {
    outcome: outcome,
    timing: {
      wait_ms: Math.round(performance.now() - i),
      wait_budget_ms: a,
      wait_timed_out: outcome === void 0,
      ...(fetch_ms !== void 0 && {
        fetch_ms: fetch_ms
      }),
      startup_ms: Math.round(i)
    }
  };
}
function $e(e, {
  wait: wait,
  headless: headless_2,
  budgetMs: i,
  scope: scope_4
}) {
  let n = e.fetchStatus === "error" || e.fetchStatus === "skipped",
    r = {
      wait: c(wait),
      headless: headless_2,
      wait_budget_ms: i,
      ...ee(scope_4, e.resolution),
      ...(e.fetchMs !== void 0 && {
        fetch_ms: e.fetchMs
      }),
      fetch_status: c(e.fetchStatus),
      ...Q(e),
      cache_written: !n && e.fetchStatus !== "cache_fresh" && e.fetchStatus !== "cache_only" && e.entry !== void 0
    };
  if (n) p("model_catalog_late_fetch", `fetch_${e.fetchStatus}`, r);else g("model_catalog_late_fetch", r);
  t(`[servedCatalog] ${wait} settled after its ${i}ms wait: fetch:${e.fetchStatus}, request took ${e.fetchMs ?? "?"}ms`);
}
function De(e) {
  return M(e.fetchReason);
}
var Ie = {
  not_permitted: "credential_scope",
  ip_restricted: "ip_restricted",
  lane_unavailable: "lane_unavailable"
};
function Be(e, {
  headless: headless_3,
  timing: timing_2,
  lane: lane_2,
  scope: scope_5
}) {
  let n = Ie[e.fetchReason];
  DMo(n, te(scope_5)), g("model_catalog_primary", {
    decision: c("off"),
    off_reason: c(n),
    ...oe(n),
    headless: headless_3,
    ...lane_2,
    ...(e.httpStatus !== void 0 && {
      http_status: e.httpStatus
    }),
    ...(e.errorCode !== void 0 && {
      refusal_code: c(e.errorCode)
    }),
    ...timing_2
  });
  let r = `${e.httpStatus ?? "?"}${e.errorCode !== void 0 ? ` ${e.errorCode}` : ""}`;
  t(`[servedCatalog] primary: served rows unavailable (${U(e.fetchReason)}: ${r}); using compiled behavior`);
}
function E(e, o, a, i, organizationUuid_2) {
  DMo(e, {
    ...(i !== void 0 && te(i)),
    ...(organizationUuid_2 !== void 0 && {
      organizationUuid: organizationUuid_2
    })
  }), p("model_catalog_primary", e, {
    ...oe(e),
    ...a
  }), t(`[servedCatalog] primary: served rows unavailable (${o}); using compiled behavior`);
}
function oe(e) {
  return {};
}
var ae = {
  $schema: "https://downloads.claude.ai/model-catalog/v1/schema.json",
  schema_version: 1,
  version: 2374,
  issued_at: "2026-10-16T01:13:11Z",
  expires_at: "2026-10-23T01:13:11Z",
  key_id: "claude-code-release-signing-key",
  surfaces: {
    cc: {
      model_selector_state: [{
        id: "cc",
        model: "claude-opus-5",
        thinking: {
          type: "effort",
          effort: "high"
        },
        thinking_by_model: [{
          id: "claude-fable-5-1",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-sonnet-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-haiku-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-fable-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-8",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-7",
          thinking: {
            type: "effort",
            effort: "xhigh"
          }
        }, {
          id: "claude-opus-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }],
        selection_source: "global_default"
      }],
      model_selector_config: [{
        id: "cc",
        models: [{
          id: "claude-opus-5-5",
          name: "Opus 5.5",
          short_name: "Opus",
          description: "For complex work and everyday tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          min_claude_code_version: "2.1.280",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "medium",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-sonnet-5-5",
          name: "Sonnet 5.5",
          short_name: "Sonnet",
          description: "Most efficient for simpler tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "medium",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-fable-5-1",
          name: "Fable 5.1",
          short_name: "Fable",
          description: "For your toughest challenges",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          min_claude_code_version: "2.1.251",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-haiku-5-5",
          name: "Haiku 5.5",
          short_name: "Haiku",
          description: "Fastest for quick answers",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "medium",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "haiku"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-haiku-4-5-20251001",
          name: "Haiku 4.5",
          short_name: "Haiku",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "none"
          },
          auto_permission_mode: "unavailable",
          runtime: {
            max_input_tokens: 200000,
            max_output_tokens: 64000,
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "haiku"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-sonnet-5",
          name: "Sonnet 5",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-5",
          name: "Opus 5",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-fable-5",
          name: "Fable 5",
          short_name: "Fable",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-8",
          name: "Opus 4.8",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-7",
          name: "Opus 4.7",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "xhigh",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-6",
          name: "Opus 4.6",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-sonnet-4-6",
          name: "Sonnet 4.6",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "sonnet"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-1-20250805",
          name: "Opus 4.1",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "none"
          },
          auto_permission_mode: "unavailable",
          runtime: {
            max_input_tokens: 200000,
            max_output_tokens: 32000,
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "opus"
          },
          offered_on: ["bedrock", "vertex"]
        }],
        settings_vocabulary: {
          create_mode: {
            default: 1
          },
          effort_level: {
            high: 3,
            low: 1,
            max: 5,
            medium: 2,
            xhigh: 4
          },
          thinking_mode: {
            auto: 2,
            extended: 1,
            off: 3
          }
        },
        provider_alias_targets: {
          fable: {
            default: "claude-fable-5-1",
            per_provider: {
              gateway: "claude-fable-5"
            }
          },
          haiku: {
            default: "claude-haiku-4-5-20251001"
          },
          opus: {
            default: "claude-opus-5",
            per_provider: {
              anthropic_aws: "claude-opus-5",
              bedrock: "claude-opus-5",
              foundry: "claude-opus-4-6",
              gateway: "claude-opus-4-7",
              mantle: "claude-opus-5",
              vertex: "claude-opus-5"
            }
          },
          sonnet: {
            default: "claude-sonnet-5",
            per_provider: {
              anthropic_aws: "claude-sonnet-4-6",
              gateway: "claude-sonnet-4-6"
            }
          }
        }
      }]
    },
    ccd: {
      model_selector_state: [{
        id: "ccd",
        model: "claude-opus-5",
        thinking: {
          type: "effort",
          effort: "high"
        },
        thinking_by_model: [{
          id: "claude-fable-5-1",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-sonnet-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-haiku-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-fable-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-8",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-7",
          thinking: {
            type: "effort",
            effort: "xhigh"
          }
        }, {
          id: "claude-opus-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }],
        selection_source: "global_default"
      }],
      model_selector_config: [{
        id: "ccd",
        models: [{
          id: "claude-opus-5-5",
          name: "Opus 5.5",
          short_name: "Opus",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          min_claude_code_version: "2.1.280",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "medium",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-sonnet-5-5",
          name: "Sonnet 5.5",
          short_name: "Sonnet",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "medium",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-fable-5-1",
          name: "Fable 5.1",
          short_name: "Fable",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          min_claude_code_version: "2.1.251",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-haiku-5-5",
          name: "Haiku 5.5",
          short_name: "Haiku",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "medium",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "haiku"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-haiku-4-5-20251001",
          name: "Haiku 4.5",
          short_name: "Haiku",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "none"
          },
          auto_permission_mode: "unavailable",
          runtime: {
            max_input_tokens: 200000,
            max_output_tokens: 64000,
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "haiku"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-sonnet-5",
          name: "Sonnet 5",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-5",
          name: "Opus 5",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-fable-5",
          name: "Fable 5",
          short_name: "Fable",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-8",
          name: "Opus 4.8",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-7",
          name: "Opus 4.7",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "xhigh",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-6",
          name: "Opus 4.6",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-sonnet-4-6",
          name: "Sonnet 4.6",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "sonnet"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-1-20250805",
          name: "Opus 4.1",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "none"
          },
          auto_permission_mode: "unavailable",
          runtime: {
            max_input_tokens: 200000,
            max_output_tokens: 32000,
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "opus"
          },
          offered_on: ["bedrock", "vertex"]
        }],
        settings_vocabulary: {
          create_mode: {
            default: 1
          },
          effort_level: {
            high: 3,
            low: 1,
            max: 5,
            medium: 2,
            xhigh: 4
          },
          thinking_mode: {
            auto: 2,
            extended: 1,
            off: 3
          }
        },
        provider_alias_targets: {
          fable: {
            default: "claude-fable-5-1",
            per_provider: {
              gateway: "claude-fable-5"
            }
          },
          haiku: {
            default: "claude-haiku-4-5-20251001"
          },
          opus: {
            default: "claude-opus-5",
            per_provider: {
              anthropic_aws: "claude-opus-5",
              bedrock: "claude-opus-5",
              foundry: "claude-opus-4-6",
              gateway: "claude-opus-4-7",
              mantle: "claude-opus-5",
              vertex: "claude-opus-5"
            }
          },
          sonnet: {
            default: "claude-sonnet-5",
            per_provider: {
              anthropic_aws: "claude-sonnet-4-6",
              gateway: "claude-sonnet-4-6"
            }
          }
        }
      }]
    },
    ccr: {
      model_selector_state: [{
        id: "ccr",
        model: "claude-opus-5",
        thinking: {
          type: "effort",
          effort: "high"
        },
        thinking_by_model: [{
          id: "claude-fable-5-1",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-sonnet-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-haiku-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-fable-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-8",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-7",
          thinking: {
            type: "effort",
            effort: "xhigh"
          }
        }, {
          id: "claude-opus-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }],
        selection_source: "global_default"
      }],
      model_selector_config: [{
        id: "ccr",
        models: [{
          id: "claude-opus-5-5",
          name: "Opus 5.5",
          short_name: "Opus",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          min_claude_code_version: "2.1.280",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "medium",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-sonnet-5-5",
          name: "Sonnet 5.5",
          short_name: "Sonnet",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "medium",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-fable-5-1",
          name: "Fable 5.1",
          short_name: "Fable",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          min_claude_code_version: "2.1.251",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-haiku-5-5",
          name: "Haiku 5.5",
          short_name: "Haiku",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "medium",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "haiku"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-haiku-4-5-20251001",
          name: "Haiku 4.5",
          short_name: "Haiku",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "none"
          },
          auto_permission_mode: "unavailable",
          runtime: {
            max_input_tokens: 200000,
            max_output_tokens: 64000,
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "haiku"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-sonnet-5",
          name: "Sonnet 5",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-5",
          name: "Opus 5",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-fable-5",
          name: "Fable 5",
          short_name: "Fable",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-8",
          name: "Opus 4.8",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-7",
          name: "Opus 4.7",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "xhigh", "max"],
            default_effort: "xhigh",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-opus-4-6",
          name: "Opus 4.6",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [{
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "opus"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }, {
          id: "claude-sonnet-4-6",
          name: "Sonnet 4.6",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128000,
            effort_levels: ["low", "medium", "high", "max"],
            default_effort: "high",
            capabilities: ["compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search"],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "sonnet"
          },
          offered_on: ["first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway"]
        }],
        settings_vocabulary: {
          create_mode: {
            default: 1
          },
          effort_level: {
            high: 3,
            low: 1,
            max: 5,
            medium: 2,
            xhigh: 4
          },
          thinking_mode: {
            auto: 2,
            extended: 1,
            off: 3
          }
        },
        provider_alias_targets: {
          fable: {
            default: "claude-fable-5-1",
            per_provider: {
              gateway: "claude-fable-5"
            }
          },
          haiku: {
            default: "claude-haiku-4-5-20251001"
          },
          opus: {
            default: "claude-opus-5",
            per_provider: {
              anthropic_aws: "claude-opus-5",
              bedrock: "claude-opus-5",
              foundry: "claude-opus-4-6",
              gateway: "claude-opus-4-7",
              mantle: "claude-opus-5",
              vertex: "claude-opus-5"
            }
          },
          sonnet: {
            default: "claude-sonnet-5",
            per_provider: {
              anthropic_aws: "claude-sonnet-4-6",
              gateway: "claude-sonnet-4-6"
            }
          }
        }
      }]
    },
    chat: {
      model_selector_state: [{
        id: "chat",
        model: "claude-sonnet-4-6",
        thinking: {
          type: "effort_and_mode",
          effort: "low",
          mode: "off"
        },
        thinking_by_model: [{
          id: "claude-fable-5-1",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-opus-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-sonnet-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-haiku-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-fable-5",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-5",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-8",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-7",
          thinking: {
            type: "effort_and_mode",
            effort: "xhigh",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-6",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "extended"
          }
        }, {
          id: "claude-sonnet-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-sonnet-4-6",
          thinking: {
            type: "effort_and_mode",
            effort: "low",
            mode: "off"
          }
        }, {
          id: "claude-haiku-4-5-20251001",
          thinking: {
            type: "mode",
            mode: "extended"
          }
        }],
        selection_source: "global_default"
      }],
      model_selector_config: [{
        id: "chat",
        models: [{
          id: "claude-fable-5-1",
          name: "Fable 5.1",
          short_name: "Fable",
          description: "For your toughest challenges",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }]
          },
          hard_limit: 950000,
          voice_model: "claude-opus-5",
          min_claude_code_version: "2.1.251",
          quick_select: !0
        }, {
          id: "claude-opus-5-5",
          name: "Opus 5.5",
          short_name: "Opus",
          description: "For complex work and everyday tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }]
          },
          hard_limit: 950000,
          supports_fast_mode: !0,
          voice_model: "claude-opus-5",
          min_claude_code_version: "2.1.280",
          quick_select: !0
        }, {
          id: "claude-sonnet-5-5",
          name: "Sonnet 5.5",
          short_name: "Sonnet",
          description: "Most efficient for simpler tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }],
            always_on: !0
          },
          hard_limit: 950000,
          voice_model: "claude-sonnet-5",
          quick_select: !0
        }, {
          id: "claude-haiku-5-5",
          name: "Haiku 5.5",
          short_name: "Haiku",
          description: "Fastest for quick answers",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }],
            always_on: !0
          },
          hard_limit: 950000,
          voice_model: "claude-haiku-4-5-20251001",
          quick_select: !0
        }, {
          id: "claude-fable-5",
          name: "Fable 5",
          short_name: "Fable",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }]
          },
          hard_limit: 449000,
          voice_model: "claude-opus-5"
        }, {
          id: "claude-opus-5",
          name: "Opus 5",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }],
            always_on: !0
          },
          hard_limit: 950000,
          supports_fast_mode: !0
        }, {
          id: "claude-opus-4-8",
          name: "Opus 4.8",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 950000,
          supports_fast_mode: !0,
          voice_model: "claude-opus-5"
        }, {
          id: "claude-opus-4-7",
          name: "Opus 4.7",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 449000,
          voice_model: "claude-opus-5"
        }, {
          id: "claude-opus-4-6",
          name: "Opus 4.6",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "extended",
              name: "Extended",
              description: "Always uses deep reasoning"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 449000,
          supports_fast_mode: !0,
          voice_model: "claude-opus-5"
        }, {
          id: "claude-sonnet-5",
          name: "Sonnet 5",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 950000
        }, {
          id: "claude-sonnet-4-6",
          name: "Sonnet 4.6",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 449000,
          voice_model: "claude-sonnet-5"
        }, {
          id: "claude-haiku-4-5-20251001",
          name: "Haiku 4.5",
          short_name: "Haiku",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "mode",
            mode_options: [{
              id: "extended",
              name: "Extended",
              description: "Always uses deep reasoning"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 190000,
          auto_permission_mode: "unavailable"
        }, {
          id: "claude-opus-4-5-20251101",
          name: "Opus 4.5",
          short_name: "Opus",
          section: "deprecated",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }],
            mode_options: [{
              id: "extended",
              name: "Extended",
              description: "Always uses deep reasoning"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 190000,
          auto_permission_mode: "unavailable",
          voice_model: "claude-opus-5",
          disabled: !0
        }],
        settings_vocabulary: {
          create_mode: {
            default: 1
          },
          effort_level: {
            high: 3,
            low: 1,
            max: 5,
            medium: 2,
            xhigh: 4
          },
          thinking_mode: {
            auto: 2,
            extended: 1,
            off: 3
          }
        }
      }]
    },
    cowork: {
      model_selector_state: [{
        id: "cowork",
        model: "claude-sonnet-4-6",
        thinking: {
          type: "effort_and_mode",
          effort: "medium",
          mode: "auto"
        },
        thinking_by_model: [{
          id: "claude-fable-5-1",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-opus-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-sonnet-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-haiku-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-fable-5",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-5",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-8",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-7",
          thinking: {
            type: "effort_and_mode",
            effort: "xhigh",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-6",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "extended"
          }
        }, {
          id: "claude-sonnet-5",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-sonnet-4-6",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-haiku-4-5-20251001",
          thinking: {
            type: "mode",
            mode: "extended"
          }
        }],
        selection_source: "global_default"
      }],
      model_selector_config: [{
        id: "cowork",
        models: [{
          id: "claude-fable-5-1",
          name: "Fable 5.1",
          short_name: "Fable",
          description: "For your toughest challenges",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }]
          },
          hard_limit: 950000,
          min_claude_code_version: "2.1.251",
          quick_select: !0
        }, {
          id: "claude-opus-5-5",
          name: "Opus 5.5",
          short_name: "Opus",
          description: "For complex work and everyday tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }]
          },
          hard_limit: 950000,
          supports_fast_mode: !0,
          min_claude_code_version: "2.1.280",
          quick_select: !0
        }, {
          id: "claude-sonnet-5-5",
          name: "Sonnet 5.5",
          short_name: "Sonnet",
          description: "Most efficient for simpler tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }],
            always_on: !0
          },
          hard_limit: 950000,
          quick_select: !0
        }, {
          id: "claude-haiku-5-5",
          name: "Haiku 5.5",
          short_name: "Haiku",
          description: "Fastest for quick answers",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }],
            always_on: !0
          },
          hard_limit: 950000,
          quick_select: !0
        }, {
          id: "claude-fable-5",
          name: "Fable 5",
          short_name: "Fable",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }]
          },
          hard_limit: 449000
        }, {
          id: "claude-opus-5",
          name: "Opus 5",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }],
            always_on: !0
          },
          hard_limit: 950000,
          supports_fast_mode: !0
        }, {
          id: "claude-opus-4-8",
          name: "Opus 4.8",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 950000,
          supports_fast_mode: !0
        }, {
          id: "claude-opus-4-7",
          name: "Opus 4.7",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 449000
        }, {
          id: "claude-opus-4-6",
          name: "Opus 4.6",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "extended",
              name: "Extended",
              description: "Always uses deep reasoning"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 449000,
          supports_fast_mode: !0
        }, {
          id: "claude-sonnet-5",
          name: "Sonnet 5",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 950000
        }, {
          id: "claude-sonnet-4-6",
          name: "Sonnet 4.6",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [{
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            }],
            mode_options: [{
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 449000
        }, {
          id: "claude-haiku-4-5-20251001",
          name: "Haiku 4.5",
          short_name: "Haiku",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "mode",
            mode_options: [{
              id: "extended",
              name: "Extended",
              description: "Always uses deep reasoning"
            }, {
              id: "off",
              name: "Off"
            }]
          },
          hard_limit: 190000,
          auto_permission_mode: "unavailable"
        }],
        settings_vocabulary: {
          create_mode: {
            default: 1
          },
          effort_level: {
            high: 3,
            low: 1,
            max: 5,
            medium: 2,
            xhigh: 4
          },
          thinking_mode: {
            auto: 2,
            extended: 1,
            off: 3
          }
        }
      }]
    }
  }
};
var Ve = f(() => {
  let e = LKe().safeParse(ae);
  if (!e.success) l(Error("published model-catalog seed does not parse"));
  return {
    document: e.success ? e.data : null
  };
});
function se() {
  return Ve().document;
}
function ne() {
  return se()?.version ?? 0;
}
function re(e) {
  let o = se();
  return o === null ? null : _Ct(o, e);
}
function ie(e) {
  return mf(e).replace(/-\d{8}$/, "");
}
function de(e) {
  let o = new Set(GT(e).map(item => ie(item.id))),
    a = Y1s(e);
  for (let family of _ln) {
    let seed = a[family],
      compiled = HQe(family, "first_party");
    if (seed === void 0 || compiled === void 0) continue;
    if (o.has(compiled)) continue;
    if (_l(ie(seed)) === void 0) continue;
    return {
      family: family,
      compiled: compiled,
      seed: seed
    };
  }
  return null;
}
async function P(e) {
  if (e.trust.kind === "untrusted") return;
  let o = await qrr(e.cacheKey);
  if (o === void 0) return;
  let a = await qe(o, e);
  if (!a.ok) {
    if (a.reason === "unknown_key" && e.kind !== "hosted" && x6t()) {
      t("[publishedCatalog] cached document names a key this session does not hold while server-managed settings are unconfirmed; not using it this session, keeping the file"), jXo(e.cacheKey);
      return;
    }
    t(`[publishedCatalog] cached document not re-established (${a.reason}); discarding`), await HYr(e.cacheKey);
    return;
  }
  let entry_4 = a.entry;
  return await Krr(e.cacheKey, entry_4, {
    verified: !0
  }), entry_4;
}
async function qe(e, o) {
  let trust = o.trust;
  if (trust.kind === "untrusted") return {
    ok: !1,
    reason: "untrusted_source"
  };
  let documentBytes = Ne(e.documentBytes);
  if (documentBytes === void 0) return {
    ok: !1,
    reason: "undecodable_bytes"
  };
  let s = await bCt({
    documentBytes: documentBytes,
    sidecar: e.sidecar,
    roots: trust.roots
  });
  if (!s.ok) return {
    ok: !1,
    reason: s.reason
  };
  let document = We(documentBytes);
  if (document === void 0) return {
    ok: !1,
    reason: "unparseable_document"
  };
  let reason = await D(document, o, void 0, s.rootId);
  if (reason !== void 0) return {
    ok: !1,
    reason: reason
  };
  return await eRt(o.cacheKey, document), {
    ok: !0,
    entry: {
      ...e,
      document: document,
      rootId: s.rootId,
      source: o.kind
    }
  };
}
function Ne(e) {
  let o = Buffer.from(e, "base64");
  if (o.toString("base64") !== e) return;
  return o.length > 0 && o.length <= rAe ? new Uint8Array(o) : void 0;
}
function We(e) {
  let o = pt(Buffer.from(e).toString("utf8"), !1);
  if (gcr(o) !== qxn) return;
  let a = LKe().safeParse(o);
  return a.success ? a.data : void 0;
}
function ze(e, o, a) {
  let i = e.kind === "hosted" || Vxn(a) === "compiled_roots";
  return Math.max(o?.document.version ?? 0, i ? ne() : 0);
}
async function D(e, o, a, i) {
  if (e.version < ze(o, a, i)) return "replayed_version";
  if (e.version < (await yOn(o.cacheKey))) return "catalog_version_rollback";
  return;
}
function Fvn({
  allowNetwork: allowNetwork_3
}) {
  let mode_3 = est("published");
  if (!RVt()) return Promise.resolve({
    mode: mode_3,
    source: void 0,
    fetchStatus: "off",
    expired: !1,
    entry: void 0
  });
  let a = yCt();
  if (!a.ok) return Promise.resolve({
    mode: mode_3,
    source: void 0,
    fetchStatus: "invalid_url",
    expired: !1,
    entry: void 0
  });
  let {
      source: source
    } = a,
    publishedCatalogRefreshes = Or().publishedCatalogRefreshes,
    n = publishedCatalogRefreshes.get(source.cacheKey);
  if (n) return n;
  let r = Ge({
    mode: mode_3,
    source: source,
    allowNetwork: allowNetwork_3
  }).finally(() => {
    publishedCatalogRefreshes.delete(source.cacheKey);
  });
  return publishedCatalogRefreshes.set(source.cacheKey, r), r;
}
async function Ge({
  mode: mode_4,
  source: source_2,
  allowNetwork: allowNetwork_4
}) {
  let i = {
      mode: mode_4,
      source: source_2
    },
    s,
    n = r => r !== void 0 && BYr(r.document);
  try {
    if (source_2.trust.kind === "untrusted") return t(`[publishedCatalog] ${source_2.kind} source skipped: ${source_2.trust.reason}`), {
      ...i,
      fetchStatus: "skipped",
      fetchReason: source_2.trust.reason,
      expired: !1,
      entry: void 0
    };
    if (s = await P(source_2), s && !ZVe(s)) return {
      ...i,
      fetchStatus: "cache_fresh",
      expired: !1,
      entry: s
    };
    if (s && n(s)) t("[publishedCatalog] cached document is past its expires_at; refreshing");
    if (!allowNetwork_4 && source_2.kind !== "file") return {
      ...i,
      fetchStatus: "cache_only",
      expired: n(s),
      entry: s
    };
    let result = await Kxn(source_2, {
      etag: s?.etag
    });
    switch (result.status) {
      case "not_modified":
        {
          let entry_5 = s ? zXo(s) : void 0;
          if (entry_5) await $Yr(source_2.cacheKey, entry_5);
          return {
            ...i,
            fetchStatus: "not_modified",
            httpStatus: result.httpStatus,
            expired: n(entry_5),
            entry: entry_5
          };
        }
      case "error":
        return {
          ...i,
          fetchStatus: "error",
          fetchReason: result.reason,
          httpStatus: result.httpStatus,
          expired: n(s),
          entry: s
        };
      case "ok":
        {
          let d = await Ye({
            source: source_2,
            cached: s,
            result: result
          });
          if (!d.ok) return t(`[publishedCatalog] document rejected: ${d.reason}; keeping ${s ? "last good document" : "nothing"}`), {
            ...i,
            fetchStatus: "rejected",
            fetchReason: d.reason,
            httpStatus: result.httpStatus,
            expired: n(s),
            entry: s
          };
          let entry_6 = WXo({
            document: d.document,
            documentBytes: result.documentBytes,
            sidecar: result.sidecar,
            etag: result.etag,
            source: source_2.kind,
            rootId: d.rootId
          });
          await $Yr(source_2.cacheKey, entry_6);
          let expired = n(entry_6);
          return t(`[publishedCatalog] accepted ${source_2.kind} document v${d.document.version} (verified by ${d.rootId})${expired ? ", past its expires_at" : ""}`), {
            ...i,
            fetchStatus: "ok",
            httpStatus: result.httpStatus,
            expired: expired,
            entry: entry_6
          };
        }
    }
  } catch (error) {
    return l(error), {
      ...i,
      fetchStatus: "error",
      fetchReason: "exception",
      expired: n(s),
      entry: s
    };
  }
}
async function Ye({
  source: source_3,
  cached: cached,
  result: result_2
}) {
  let trust_2 = source_3.trust;
  if (trust_2.kind === "untrusted") return {
    ok: !1,
    reason: "unsigned"
  };
  if (!result_2.hasSidecar) return {
    ok: !1,
    reason: "unsigned"
  };
  let s = await bCt({
    documentBytes: result_2.documentBytes,
    sidecar: result_2.sidecar,
    roots: trust_2.roots
  });
  if (!s.ok) return {
    ok: !1,
    reason: s.reason
  };
  let n = pt(Buffer.from(result_2.documentBytes).toString("utf8"), !1),
    r = gcr(n);
  if (r === void 0) return {
    ok: !1,
    reason: "parse_failed"
  };
  if (r !== qxn) return {
    ok: !1,
    reason: "unsupported_schema"
  };
  let d = LKe().safeParse(n);
  if (!d.success) return {
    ok: !1,
    reason: "parse_failed"
  };
  let document_2 = d.data,
    reason_2 = await D(document_2, source_3, cached, s.rootId);
  if (reason_2 !== void 0) return await UYr(document_2), {
    ok: !1,
    reason: reason_2
  };
  return await eRt(source_3.cacheKey, document_2), {
    ok: !0,
    document: document_2,
    rootId: s.rootId
  };
}
var me = 2000;
async function ue({
  allowNetwork: allowNetwork_5
}) {
  try {
    let o = t$t();
    if (o !== void 0 && !Xrr(o)) return;
    let a = Date.now() + (allowNetwork_5 ? me : 0),
      i = Ze() && est("published") === "primary" && (await Xe(a)),
      s = {
        ...H(),
        ...(i && {
          remote_settings_unconfirmed: !0
        })
      },
      n = Yrr();
    if (n !== null) {
      if (i && n === "essential_traffic") p("model_catalog_published", "essential_traffic", s), t("[publishedCatalog] primary: nonessential traffic is disabled and the server-managed catalog source is not yet confirmed by the server; published path off this session");
      return;
    }
    let r = jYr(),
      d = yCt();
    if (!d.ok) {
      if (r === "primary") R(d.reason, "configured catalog URL is unusable", s);
      return;
    }
    let {
      source: source_4
    } = d;
    if (source_4.trust.kind === "untrusted") {
      if (r === "primary") R(source_4.trust.reason, `custom source is untrusted (${source_4.trust.reason})`, s);
      return;
    }
    if (r !== "primary") {
      await qrr(source_4.cacheKey);
      return;
    }
    let h = M8(),
      u = await P(source_4),
      v = "cache",
      m,
      b = allowNetwork_5 || source_4.kind === "file",
      x = () => allowNetwork_5 ? Math.max(0, a - Date.now()) : me;
    if (u === void 0 && b) {
      v = "fetch";
      let C = await Nt(Fvn({
        allowNetwork: allowNetwork_5
      }), x(), "published catalog first fetch").catch(() => {
        return;
      });
      u = C?.entry, m = C === void 0 ? "timeout" : C.fetchStatus, v = `fetch:${m}`;
    } else if (u !== void 0 && b && ZVe(u)) {
      let C = Date.now(),
        A = await Nt(Fvn({
          allowNetwork: allowNetwork_5
        }), x(), "published catalog stale refresh").catch(() => {
          return;
        });
      m = A === void 0 ? "timeout" : A.fetchStatus, u = A?.entry ?? u, v = `stale cache: waited ${Date.now() - C}ms for refresh \u2192 ${ZVe(u) ? "kept stale" : "refreshed"} (fetch:${m})`;
    }
    if (t$t() !== o) return;
    let {
      catalog: catalog_2,
      kind: kind_2
    } = Je(u, h);
    if (catalog_2 === null) {
      if (u !== void 0) R("surface_not_served", "document serves this surface no rows", s);else if (b) R(`fetch_${m ?? "none"}`, `nothing cached and no seed, ${v} produced no rows`, s);else R("headless_no_cache", "nothing cached, headless launch does not fetch, no seed", s);
      return;
    }
    if (kind_2 === "seed") {
      let C = de(catalog_2);
      if (C !== null) {
        R("seed_stale", `compiled seed resolves ${C.family} to ${C.seed}, this build to ${C.compiled}`, s);
        return;
      }
    }
    if (YXe(catalog_2).length === 0) {
      R(zIe(catalog_2).length === 0 ? "no_selectable_rows" : "no_offered_rows", `published rows hold no model this build offers (${GT(catalog_2).length} rows via ${kind_2})`, s);
      return;
    }
    let O = u !== void 0 && ZVe(u);
    if (HDr(catalog_2, u?.fetchedAt, O), kind_2 === "seed") p("model_catalog_published", "seed", s);else if (i) p("model_catalog_published", "remote_settings_unconfirmed", H());else g("model_catalog_published", H());
    t(`[publishedCatalog] primary: using ${kind_2} rows (${GT(catalog_2).length} rows via ${v}${O ? ", stale" : ""})`);
  } catch (error) {
    l(error);
    let a = t$t();
    if ((a === void 0 || Xrr(a)) && jYr() === "primary") R("exception", "exception", H());
  }
}
function Je(e, o) {
  if (e !== void 0) return {
    catalog: _Ct(e.document, o),
    kind: e.source
  };
  return {
    catalog: re(o),
    kind: "seed"
  };
}
async function Xe(e) {
  if (Qe()) {
    let o = e - Date.now();
    if (o > 0) t(`[publishedCatalog] waiting up to ${o}ms for server-managed settings to be confirmed`), await et(o);
  }
  if (!x6t()) return !1;
  return t("[publishedCatalog] server-managed settings name managed model-catalog source settings the server has not confirmed; deciding this session without them"), !0;
}
function Ze() {
  let e = Yrr();
  return e === null || e === "essential_traffic" && (iis() || N_() === null);
}
function Qe() {
  if (!BC() || cm() || oT() !== void 0) return !1;
  return x6t() || N_() === null;
}
async function et(e) {
  let o = () => {},
    promise = new Promise(i => {
      if (o = uTe(s => {
        if (s !== void 0) i();
      }), oT() !== void 0) i();
    });
  try {
    await je(promise, e);
  } finally {
    o();
  }
}
function H() {
  return {
    auth_kind: c(DKe())
  };
}
function R(e, o, a) {
  HDr(null), p("model_catalog_published", e, a), t(`[publishedCatalog] primary: published rows unavailable (${o}); using compiled behavior`);
}
function Hvn({
  headless: headless_4
}) {
  let o = Or();
  if (o.catalogDecision === void 0) o.catalogDecision = tt(headless_4).catch(a => l(a));
  return o.catalogDecision;
}
async function tt(headless_5) {
  await Z({
    headless: headless_5
  }), await ue({
    allowNetwork: !headless_5
  });
}
export { CVt, Lvn, jrr, Nvn, Fvn, MXo, Hvn };