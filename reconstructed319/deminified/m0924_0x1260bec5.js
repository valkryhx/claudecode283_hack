// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { k, K, Ai } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { zt, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { BSe, pr, Te, us } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { bZe, kfe, mk, q2e, GUn, mYi, nPs, wwo, FPr, bon, Son as maxContentLength, qX, BPr, Cwo, won, jPr, WNe, Wgt, vYi, Rwo, kon, XUn, EYi, TYi, CYi, Efe, wZe, Pwo, Ggt, sPs, _V, vU, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { A3r, x3r, QYo, V6e, XOe, P3r, qCt, twn, O3r, ZYo, nwn, tdi, ndi, YCt, HBe, rat, Fle, Gne } from "B:/~BUN/root/chunk-c1km8051.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Yp, Jy, Lpe, Pw } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { BEt, w2r, BBo, y7s, jBo, k2r, WBo, _7s, b7s, zBo, jEt, v9n, v2r, Cgn, E9n, T9n, Rgn } from "B:/~BUN/root/chunk-ss4p7j8j.js";
import { Aar, T6t } from "B:/~BUN/root/chunk-pfdcv2sc.js";
import { Rb } from "B:/~BUN/root/chunk-1zzrbtzr.js";
import { Car, VEn, Bmi, Blt, Rar, E6t } from "B:/~BUN/root/chunk-6dms8sre.js";
import { cb } from "B:/~BUN/root/chunk-xwsv2hvn.js";
var timeout = 5000,
  ke = ["not_permitted", "ip_restricted", "lane_unavailable"];
function F(e) {
  return ke.some(item => item === e);
}
async function ee(e, r, {
  etag: etag
} = {}) {
  let n = V6e(e);
  try {
    let s = Pe(e, r),
      headers = {
        ...s.headers,
        ...(etag !== void 0 && {
          "If-None-Match": etag
        })
      },
      d = await jt.get(s.path, {
        auth: s.auth,
        isBackground: !0,
        timeout: timeout,
        maxContentLength: maxContentLength,
        validateStatus: () => !0,
        ...(Object.keys(headers).length > 0 && {
          headers: headers
        })
      });
    if (!d.ok) return t(`[servedCatalog] fetch (${n}) skipped: ${d.reason}${d.reason === "no-auth" ? ` (${d.detail})` : ""}`), {
      status: "skipped",
      reason: d.reason
    };
    let httpStatus = d.status;
    if (httpStatus === 304 && etag !== void 0) return t(`[servedCatalog] fetch (${n}): not modified`), {
      status: "not_modified",
      httpStatus: httpStatus
    };
    if (httpStatus < 200 || httpStatus >= 300) {
      let m = Z(e, httpStatus, d.data);
      return t(`[servedCatalog] fetch (${n}): HTTP ${httpStatus}${Oe(m)}`), m ?? {
        status: "error",
        reason: "http_status",
        httpStatus: httpStatus
      };
    }
    let h = Cwo().safeParse(d.data);
    if (!h.success) return t(`[servedCatalog] fetch (${n}): response failed validation`), {
      status: "error",
      reason: "parse_failed",
      httpStatus: httpStatus
    };
    let etag_2 = xe(d.response?.headers),
      S = n === "orgless" ? Ee(h.data) : {},
      catalog = won(h.data, r);
    if (catalog === null) return t(`[servedCatalog] fetch (${n}) ok: surface not served${H(S)}`), {
      status: "empty",
      etag: etag_2,
      httpStatus: httpStatus,
      ...S
    };
    if (GUn(catalog)) return t(`[servedCatalog] fetch (${n}) ok: ${catalog.config.models?.length ?? 0} rows kept after row validation dropped others; etag withheld, full refetch next refresh${H(S)}`), {
      status: "ok",
      catalog: catalog,
      etag: void 0,
      httpStatus: httpStatus,
      ...S
    };
    return t(`[servedCatalog] fetch (${n}) ok: ${catalog.config.models?.length ?? 0} rows${H(S)}`), {
      status: "ok",
      catalog: catalog,
      etag: etag_2,
      httpStatus: httpStatus,
      ...S
    };
  } catch (error) {
    let {
      kind: kind,
      status: d
    } = Ai(error);
    switch (t(`[servedCatalog] fetch (${n}) failed: ${kind}${d !== void 0 ? ` ${d}` : ""}`), kind) {
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
        return d === void 0 ? {
          status: "error",
          reason: "network"
        } : Z(e, d, $e(error)) ?? {
          status: "error",
          reason: "http_status",
          httpStatus: d
        };
      case "other":
        return {
          status: "error",
          reason: "exception"
        };
    }
  }
}
function Pe(e, r) {
  switch (e.kind) {
    case "account":
      return {
        path: `/api/organizations/:orgUUID/model_selector/${r}`,
        auth: "teleport-org",
        headers: {}
      };
    case "token":
      return {
        path: `/api/model_selector/${r}`,
        auth: "claude-ai-oauth",
        headers: {
          "anthropic-client-platform": cb()
        }
      };
    case "api_key":
      return {
        path: `/api/model_selector/${r}`,
        auth: "required",
        headers: {
          "anthropic-client-platform": cb()
        }
      };
    case "profile":
    case "federation":
      return {
        path: `/api/model_selector/${r}`,
        auth: "async",
        headers: {
          "anthropic-client-platform": cb()
        }
      };
  }
}
function Ee(e) {
  let organizationUuid = Nt(e.organization_uuid)?.toLowerCase(),
    resolution = BPr.find(item => item === e.resolution);
  return {
    ...(organizationUuid !== void 0 && {
      organizationUuid: organizationUuid
    }),
    ...(resolution !== void 0 && {
      resolution: resolution
    })
  };
}
function H(e) {
  return e.resolution === void 0 ? "" : ` (resolution ${e.resolution})`;
}
var te = ["oauth_scope_insufficient", "oauth_token_narrowed"],
  errorCode_2 = "ip_not_in_allowed_range",
  re = ["not_found", "account_session_invalid", "organization_not_visible"],
  Rt = [...te, errorCode_2, ...re];
function oe(e, r) {
  let o = ae(r);
  return e.find(item => item === o);
}
function Z(e, r, o) {
  return Fe(r, o) ?? Ae(r, o) ?? Me(e, r, o);
}
function Oe(e) {
  if (e === void 0 || !F(e.reason)) return "";
  return `${e.errorCode !== void 0 ? ` ${e.errorCode}` : ""} (${N(e.reason)})`;
}
function N(e) {
  switch (e) {
    case "not_permitted":
      return "this credential cannot read the served list";
    case "ip_restricted":
      return "the organization's IP allowlist refuses this network";
    case "lane_unavailable":
      return "the server has not enabled the org-less route for this session";
  }
}
function Fe(httpStatus_2, r) {
  let errorCode = oe(te, r);
  if (httpStatus_2 === 403 && errorCode !== void 0) return {
    status: "error",
    reason: "not_permitted",
    httpStatus: httpStatus_2,
    errorCode: errorCode
  };
  return;
}
function Ae(httpStatus_3, r) {
  if (httpStatus_3 === 403 && ae(r) === errorCode_2) return {
    status: "error",
    reason: "ip_restricted",
    httpStatus: httpStatus_3,
    errorCode: errorCode_2
  };
  return;
}
function Me(e, httpStatus_4, o) {
  if (V6e(e) !== "orgless") return;
  let errorCode_3 = oe(re, o);
  if (httpStatus_4 === 404 || httpStatus_4 === 403 && errorCode_3 === "account_session_invalid" || httpStatus_4 === 401 && errorCode_3 === "organization_not_visible" && XOe(e) === "profile") return {
    status: "error",
    reason: "lane_unavailable",
    httpStatus: httpStatus_4,
    ...(errorCode_3 !== void 0 && {
      errorCode: errorCode_3
    })
  };
  return;
}
function ae(e) {
  let r = T(e, "error"),
    o = T(T(r, "details"), "error_code");
  return typeof o === "string" && o.length > 0 ? o : void 0;
}
function T(e, r) {
  return typeof e === "object" && e !== null && r in e ? e[r] : void 0;
}
function $e(e) {
  return T(T(e, "response"), "data");
}
function xe(e) {
  let r = e?.etag;
  return qX(r) ? r : void 0;
}
var De = 30000,
  ne = A3r,
  Ie = 2000,
  Le = 256;
function se(e) {
  return `${e.replace(/\.json$/, "")}.headless-failed.json`;
}
function ie(e, r = Math.random()) {
  return QYo(ue(e), r);
}
function ue(e) {
  return Math.min(De * 2 ** (Math.max(1, e) - 1), ne);
}
function Ue(e) {
  return ue(e) * (1 + x3r);
}
async function $Et(e, r = Date.now(), o = Math.random()) {
  let n = await j(e);
  if (n === void 0 || n.failedAt > r) return !0;
  return r - n.failedAt >= ie(n.failures, o);
}
async function le(e, r = Date.now(), o = Math.random()) {
  let n = await j(e);
  if (n === void 0 || n.failedAt > r) return !1;
  return n.timedOut || r - n.failedAt < ie(n.failures, o);
}
async function j(e) {
  let r;
  try {
    r = (await _V().readRange(se(e), 0, Le)).toString("utf8");
  } catch (error) {
    if (!K(error)) t(`[servedCatalog] headless retry marker read failed: ${k(error) ?? "unknown"}`);
    return;
  }
  let o = et(r, !1);
  if (typeof o !== "object" || o === null) return;
  let failedAt = "failedAt" in o ? o.failedAt : void 0;
  if (typeof failedAt !== "number" || !Number.isFinite(failedAt)) return;
  let s = "failures" in o ? o.failures : void 0;
  return {
    failedAt: failedAt,
    failures: typeof s === "number" && Number.isSafeInteger(s) && s >= 1 ? s : 1,
    timedOut: "timedOut" in o && o.timedOut === !0
  };
}
function Be(e, r) {
  return e.failedAt <= r && r - e.failedAt < Ue(e.failures) + ne;
}
async function x(e, r, failedAt_2 = Date.now(), timedOut = !1) {
  let s = _V(),
    i = se(e);
  try {
    if (r === "clear") {
      await s.delete(i);
      return;
    }
    let d = r === "back_off" ? await j(e) : void 0,
      u = {
        failedAt: failedAt_2,
        failures: d !== void 0 && Be(d, failedAt_2) ? d.failures + 1 : 1,
        ...(timedOut && {
          timedOut: timedOut
        })
      };
    await s.mkdir(vU()), await s.atomicWrite(i, _(u), 384);
  } catch (error) {
    if (!K(error)) t(`[servedCatalog] headless retry marker write failed: ${k(error) ?? "unknown"}`);
  }
}
async function _2r(e, r) {
  let servedCatalogSettledRefreshes = pr().servedCatalogSettledRefreshes;
  if (servedCatalogSettledRefreshes.has(r)) return;
  switch (servedCatalogSettledRefreshes.add(r), r.fetchStatus) {
    case "error":
    case "skipped":
      await x(e, He(r) ? "retry_soon" : "back_off");
      return;
    case "ok":
    case "empty":
    case "not_modified":
      await x(e, r.entry === void 0 || YCt(r.entry) ? "back_off" : "clear");
      return;
    default:
      return;
  }
}
function He(e) {
  return e.prior === void 0 && e.fetchStatus === "error" && !F(e.fetchReason);
}
async function b2r(e, r, o = z(r)) {
  if (!o) return;
  let n = r.fetchReason === "timeout" || (r.fetchMs ?? 0) >= Ie;
  switch (r.fetchStatus) {
    case "error":
    case "rejected":
      await x(e, "back_off", Date.now(), n);
      return;
    case "ok":
    case "not_modified":
      await x(e, r.entry === void 0 || jEt(r.entry) ? "back_off" : "clear", Date.now(), n);
      return;
    default:
      return;
  }
}
function z(e) {
  let publishedCatalogSettledRefreshes = pr().publishedCatalogSettledRefreshes;
  if (publishedCatalogSettledRefreshes.has(e)) return !1;
  return publishedCatalogSettledRefreshes.add(e), !0;
}
function S9n({
  allowNetwork: allowNetwork
}) {
  let mode = HBe(),
    surface = Gne(),
    scope = Fle();
  if (mode === "off" || scope === null) return Promise.resolve({
    mode: "off",
    surface: surface,
    fetchStatus: "off",
    entry: void 0,
    prior: void 0
  });
  let servedCatalogRefreshes = pr().servedCatalogRefreshes,
    i = twn(scope, surface),
    d = servedCatalogRefreshes.get(i);
  if (d) return d;
  let u = We({
    mode: mode,
    surface: surface,
    scope: scope,
    allowNetwork: allowNetwork
  }).finally(() => {
    servedCatalogRefreshes.delete(i);
  });
  return servedCatalogRefreshes.set(i, u), u;
}
async function We({
  mode: mode_2,
  surface: surface_2,
  scope: scope_2,
  allowNetwork: allowNetwork_2
}) {
  let s,
    fetchMs,
    route = V6e(scope_2),
    credential = XOe(scope_2),
    h = S => ({
      mode: mode_2,
      surface: surface_2,
      route: route,
      credential: credential,
      ...(S?.resolution !== void 0 && {
        resolution: S.resolution
      }),
      prior: s,
      ...(fetchMs !== void 0 && {
        fetchMs: fetchMs
      })
    }),
    l = () => h(s);
  try {
    if (s = await O3r(scope_2, surface_2), s && !YCt(s)) return {
      ...l(),
      fetchStatus: "cache_fresh",
      entry: s
    };
    if (!allowNetwork_2) return {
      ...l(),
      fetchStatus: "cache_only",
      entry: s
    };
    let S = pr().servedCatalogRefusal;
    if (S !== void 0) return {
      ...l(),
      fetchStatus: "cache_only",
      fetchReason: S,
      entry: s
    };
    let v = performance.now(),
      m = await ee(scope_2, surface_2, {
        etag: s?.etag
      });
    if (fetchMs = Math.round(performance.now() - v), !P3r(Fle(), scope_2)) return t("[servedCatalog] scope changed during fetch; answer dropped"), {
      ...l(),
      fetchStatus: "error",
      fetchReason: "scope_changed",
      entry: void 0
    };
    switch (m.status) {
      case "ok":
      case "empty":
        {
          let entry = tdi({
            catalog: m.status === "ok" ? m.catalog : null,
            etag: m.etag,
            organizationUuid: m.organizationUuid,
            resolution: m.resolution
          });
          if (await nwn(scope_2, surface_2, entry), m.status === "ok") FPr(m.catalog);
          return {
            ...l(),
            resolution: m.resolution,
            fetchStatus: m.status,
            httpStatus: m.httpStatus,
            entry: entry
          };
        }
      case "not_modified":
        {
          let entry_2 = s ? ndi(s) : void 0;
          if (entry_2) await nwn(scope_2, surface_2, entry_2);
          return {
            ...l(),
            fetchStatus: "not_modified",
            httpStatus: m.httpStatus,
            entry: entry_2
          };
        }
      case "skipped":
        return {
          ...l(),
          fetchStatus: "skipped",
          fetchReason: m.reason,
          entry: s
        };
      case "error":
        {
          if (F(m.reason)) pr().servedCatalogRefusal = m.reason;
          let entry_3 = s;
          if (m.reason === "lane_unavailable" && s !== void 0) t("[servedCatalog] org-less route not enabled; cached entry discarded"), await ZYo(scope_2, surface_2), entry_3 = void 0;
          return {
            ...h(entry_3),
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
    return a(error), {
      ...l(),
      fetchStatus: "error",
      fetchReason: "exception",
      entry: s
    };
  }
}
async function I(e) {
  if (e.trust.kind === "untrusted") return;
  let r = await w2r(e.cacheKey);
  if (r === void 0) return;
  let o = await Ke(r, e);
  if (!o.ok) {
    if (o.reason === "unknown_key" && e.kind !== "hosted" && VEn()) {
      t("[publishedCatalog] cached document names a key this session does not hold while server-managed settings are unconfirmed; not using it this session, keeping the file"), y7s(e.cacheKey);
      return;
    }
    t(`[publishedCatalog] cached document not re-established (${o.reason}); discarding`), await BBo(e.cacheKey);
    return;
  }
  let entry_4 = o.entry;
  return await k2r(e.cacheKey, entry_4, {
    verified: !0
  }), entry_4;
}
async function Ke(e, r) {
  let trust = r.trust;
  if (trust.kind === "untrusted") return {
    ok: !1,
    reason: "untrusted_source"
  };
  let documentBytes = Ne(e.documentBytes);
  if (documentBytes === void 0) return {
    ok: !1,
    reason: "undecodable_bytes"
  };
  let s = await E6t({
    documentBytes: documentBytes,
    sidecar: e.sidecar,
    roots: trust.roots
  });
  if (!s.ok) return {
    ok: !1,
    reason: s.reason
  };
  let document = je(documentBytes);
  if (document === void 0) return {
    ok: !1,
    reason: "unparseable_document"
  };
  let reason = await G(document, r, void 0, s.rootId);
  if (reason !== void 0) return {
    ok: !1,
    reason: reason
  };
  return await T6t(r.cacheKey, document), {
    ok: !0,
    entry: {
      ...e,
      document: document,
      rootId: s.rootId,
      source: r.kind
    }
  };
}
function Ne(e) {
  let r = Buffer.from(e, "base64");
  if (r.toString("base64") !== e) return;
  return r.length > 0 && r.length <= WNe ? new Uint8Array(r) : void 0;
}
function je(e) {
  let r = et(Buffer.from(e).toString("utf8"), !1);
  if (Rwo(r) !== jPr) return;
  let o = Wgt().safeParse(r);
  return o.success ? o.data : void 0;
}
function Ve(e, r, o) {
  let n = e.kind === "hosted" || Car(o) === "compiled_roots";
  return Math.max(r?.document.version ?? 0, n ? EYi() : 0);
}
async function G(e, r, o, n) {
  if (e.version < Ve(r, o, n)) return "replayed_version";
  if (e.version < (await Aar(r.cacheKey))) return "catalog_version_rollback";
  return;
}
function S2r({
  allowNetwork: allowNetwork_3
}) {
  let mode_3 = T9n();
  if (!Cgn()) return Promise.resolve({
    mode: mode_3,
    source: void 0,
    fetchStatus: "off",
    expired: !1,
    entry: void 0
  });
  let o = Blt();
  if (!o.ok) return Promise.resolve({
    mode: mode_3,
    source: void 0,
    fetchStatus: "invalid_url",
    expired: !1,
    entry: void 0
  });
  let {
      source: source
    } = o,
    publishedCatalogRefreshes = pr().publishedCatalogRefreshes,
    i = publishedCatalogRefreshes.get(source.cacheKey);
  if (i) return i;
  let d = ze({
    mode: mode_3,
    source: source,
    allowNetwork: allowNetwork_3
  }).finally(() => {
    publishedCatalogRefreshes.delete(source.cacheKey);
  });
  return publishedCatalogRefreshes.set(source.cacheKey, d), d;
}
async function ze({
  mode: mode_4,
  source: source_2,
  allowNetwork: allowNetwork_4
}) {
  let fetchMs_2,
    s = () => ({
      mode: mode_4,
      source: source_2,
      ...(fetchMs_2 !== void 0 && {
        fetchMs: fetchMs_2
      })
    }),
    i,
    d = u => u !== void 0 && zBo(u.document);
  try {
    if (source_2.trust.kind === "untrusted") return t(`[publishedCatalog] ${source_2.kind} source skipped: ${source_2.trust.reason}`), {
      ...s(),
      fetchStatus: "skipped",
      fetchReason: source_2.trust.reason,
      expired: !1,
      entry: void 0
    };
    if (i = await I(source_2), i && !jEt(i)) return {
      ...s(),
      fetchStatus: "cache_fresh",
      expired: !1,
      entry: i
    };
    if (i && d(i)) t("[publishedCatalog] cached document is past its expires_at; refreshing");
    if (!allowNetwork_4 && source_2.kind !== "file") return {
      ...s(),
      fetchStatus: "cache_only",
      expired: d(i),
      entry: i
    };
    let u = performance.now(),
      result = await Rar(source_2, {
        etag: i?.etag
      });
    if (source_2.kind !== "file") fetchMs_2 = Math.round(performance.now() - u);
    switch (result.status) {
      case "not_modified":
        {
          let entry_5 = i ? b7s(i) : void 0;
          if (entry_5) await jBo(source_2.cacheKey, entry_5);
          return {
            ...s(),
            fetchStatus: "not_modified",
            httpStatus: result.httpStatus,
            expired: d(entry_5),
            entry: entry_5
          };
        }
      case "error":
        return {
          ...s(),
          fetchStatus: "error",
          fetchReason: result.reason,
          httpStatus: result.httpStatus,
          expired: d(i),
          entry: i
        };
      case "ok":
        {
          let l = await Ge({
            source: source_2,
            cached: i,
            result: result
          });
          if (!l.ok) return t(`[publishedCatalog] document rejected: ${l.reason}; keeping ${i ? "last good document" : "nothing"}`), {
            ...s(),
            fetchStatus: "rejected",
            fetchReason: l.reason,
            httpStatus: result.httpStatus,
            expired: d(i),
            entry: i
          };
          let entry_6 = _7s({
            document: l.document,
            documentBytes: result.documentBytes,
            sidecar: result.sidecar,
            etag: result.etag,
            source: source_2.kind,
            rootId: l.rootId
          });
          await jBo(source_2.cacheKey, entry_6);
          let expired = d(entry_6);
          return t(`[publishedCatalog] accepted ${source_2.kind} document v${l.document.version} (verified by ${l.rootId})${expired ? ", past its expires_at" : ""}`), {
            ...s(),
            fetchStatus: "ok",
            httpStatus: result.httpStatus,
            expired: expired,
            entry: entry_6
          };
        }
    }
  } catch (error) {
    return a(error), {
      ...s(),
      fetchStatus: "error",
      fetchReason: "exception",
      expired: d(i),
      entry: i
    };
  }
}
async function Ge({
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
  let s = await E6t({
    documentBytes: result_2.documentBytes,
    sidecar: result_2.sidecar,
    roots: trust_2.roots
  });
  if (!s.ok) return {
    ok: !1,
    reason: s.reason
  };
  let i = et(Buffer.from(result_2.documentBytes).toString("utf8"), !1),
    d = Rwo(i);
  if (d === void 0) return {
    ok: !1,
    reason: "parse_failed"
  };
  if (d !== jPr) return {
    ok: !1,
    reason: "unsupported_schema"
  };
  let u = Wgt().safeParse(i);
  if (!u.success) return {
    ok: !1,
    reason: "parse_failed"
  };
  let document_2 = u.data,
    reason_2 = await G(document_2, source_3, cached, s.rootId);
  if (reason_2 !== void 0) return await WBo(document_2), {
    ok: !1,
    reason: reason_2
  };
  return await T6t(source_3.cacheKey, document_2), {
    ok: !0,
    document: document_2,
    rootId: s.rootId
  };
}
var qe = 1750,
  Ye = 1500,
  Je = 4500;
function Xe(e) {
  if (Gne() === "ccr") return Je;
  return e ? Ye : qe;
}
var budgetMs = 2000;
async function fe({
  headless: headless
}) {
  if (pr().servedCatalogActive !== void 0) return;
  try {
    if (HBe() !== "primary" || Ze()) {
      tt(headless);
      return;
    }
    let scope_3 = Fle();
    if (scope_3 === null) {
      D("no_scope", "no cache scope");
      return;
    }
    let o = Gne(),
      n = await O3r(scope_3, o),
      s = "cache",
      i,
      d = {},
      timing,
      h = !1,
      l;
    if (n === void 0) {
      let C = headless ? qCt(scope_3, o) : null;
      if (C !== null && !(await $Et(C))) h = !0;else {
        let R = S9n({
          allowNetwork: !0
        });
        if (C !== null) R = R.then(async A => (await _2r(C, A), A));
        let P = await ce(R, {
          wait: "first_fetch",
          headless: headless,
          budgetMs: Xe(headless),
          scope: scope_3
        });
        timing = P.timing, l = P.outcome, n = P.outcome?.entry, i = P.outcome === void 0 ? "timeout" : P.outcome.fetchStatus, d = he(P.outcome), s = `fetch:${i}`;
      }
    } else if (!headless && YCt(n)) {
      let C = await ce(S9n({
        allowNetwork: !0
      }), {
        wait: "stale_refresh",
        headless: headless,
        budgetMs: budgetMs,
        scope: scope_3
      });
      if (timing = C.timing, l = C.outcome, i = C.outcome === void 0 ? "timeout" : C.outcome.fetchStatus, C.outcome?.fetchReason === "lane_unavailable") n = void 0;else n = C.outcome?.entry ?? n, s = `stale cache: waited ${timing.wait_ms}ms for refresh \u2192 ${YCt(n) ? "kept stale" : "refreshed"} (fetch:${i})`;
    }
    if (pr().servedCatalogActive !== void 0 || !P3r(Fle(), scope_3)) return;
    let S = n?.catalog ?? null,
      v = n?.resolution ?? l?.resolution,
      lane = ge(scope_3, v);
    if (S === null) {
      if (n !== void 0) D("surface_not_served", "server serves this surface no rows", {
        ...lane,
        ...timing
      }, scope_3);else if (h) D("headless_held_off", "nothing cached, and a recent headless request failed, so this run does not ask again", lane, scope_3);else if (l !== void 0 && at(l)) st(l, {
        headless: headless,
        timing: timing,
        lane: lane,
        scope: scope_3
      });else D(`${headless ? "headless_" : ""}fetch_${i ?? "none"}`, `nothing cached, ${s} produced no rows`, {
        ...lane,
        ...d,
        ...timing
      }, scope_3);
      return;
    }
    if (wZe(S).length === 0) {
      D(q2e(S).length === 0 ? "no_selectable_rows" : "no_offered_rows", `served rows hold no model this build offers (${mk(S).length} rows via ${s})`, {
        ...lane,
        ...timing
      }, scope_3);
      return;
    }
    let p = n !== void 0 && YCt(n);
    mYi(S, n?.fetchedAt, p, {
      route: V6e(scope_3),
      credential: XOe(scope_3),
      organizationUuid: n?.organizationUuid,
      resolution: n?.resolution
    }), g("model_catalog_primary", {
      decision: f("served"),
      ...lane,
      ...timing
    }), t(`[servedCatalog] primary: using served rows (${mk(S).length} rows via ${s} over the ${V6e(scope_3)} route${rt(XOe(scope_3))}, fetched ${Math.max(0, Math.round((Date.now() - (n?.fetchedAt ?? Date.now())) / 1000))}s ago${p ? ", stale" : ""}); the served list replaces the compiled picker for this session`);
  } catch (error) {
    if (a(error), pr().servedCatalogActive === void 0 && HBe() === "primary") D("exception", "exception");
  }
}
async function m7s() {}
function Ze() {
  return !1;
}
function tt(e) {}
function he(e) {
  let fetch_reason = de(e?.fetchReason),
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
function ge(e, r) {
  let o = V6e(e);
  return {
    route: f(o),
    credential: f(XOe(e)),
    auth_kind: f(rat()),
    ...(o === "orgless" && {
      resolution: f(r ?? "unknown")
    })
  };
}
function rt(e) {
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
function me(e) {
  return {
    route: V6e(e),
    credential: XOe(e)
  };
}
async function ce(e, r) {
  let {
      budgetMs: o
    } = r,
    n = performance.now(),
    outcome = await zt(e, o, `served catalog ${r.wait}`).catch(() => {
      return;
    });
  if (outcome === void 0) e.then(d => ot(d, r)).catch(d => a(d));
  let fetch_ms = outcome?.fetchMs;
  return V(outcome === void 0 ? "warn" : "info", "model_catalog_refresh_wait", {
    budget_ms: o,
    waited_ms: Math.round(performance.now() - n),
    timed_out: outcome === void 0,
    first_fetch: r.wait === "first_fetch"
  }), {
    outcome: outcome,
    timing: {
      wait_ms: Math.round(performance.now() - n),
      wait_budget_ms: o,
      wait_timed_out: outcome === void 0,
      ...(fetch_ms !== void 0 && {
        fetch_ms: fetch_ms
      }),
      startup_ms: Math.round(n)
    }
  };
}
function ot(e, {
  wait: wait,
  headless: headless_2,
  budgetMs: n,
  scope: scope_4
}) {
  let i = e.fetchStatus === "error" || e.fetchStatus === "skipped",
    d = {
      wait: f(wait),
      headless: headless_2,
      wait_budget_ms: n,
      ...ge(scope_4, e.resolution),
      ...(e.fetchMs !== void 0 && {
        fetch_ms: e.fetchMs
      }),
      fetch_status: f(e.fetchStatus),
      ...he(e),
      cache_written: !i && e.fetchStatus !== "cache_fresh" && e.fetchStatus !== "cache_only" && e.entry !== void 0
    };
  if (i) c("model_catalog_late_fetch", `fetch_${e.fetchStatus}`, d);else g("model_catalog_late_fetch", d);
  t(`[servedCatalog] ${wait} settled after its ${n}ms wait: fetch:${e.fetchStatus}, request took ${e.fetchMs ?? "?"}ms`);
}
function at(e) {
  return F(e.fetchReason);
}
var nt = {
  not_permitted: "credential_scope",
  ip_restricted: "ip_restricted",
  lane_unavailable: "lane_unavailable"
};
function st(e, {
  headless: headless_3,
  timing: timing_2,
  lane: lane_2,
  scope: scope_5
}) {
  let i = nt[e.fetchReason];
  nPs(i, me(scope_5)), g("model_catalog_primary", {
    decision: f("off"),
    off_reason: f(i),
    ...pe(i),
    headless: headless_3,
    ...lane_2,
    ...(e.httpStatus !== void 0 && {
      http_status: e.httpStatus
    }),
    ...(e.errorCode !== void 0 && {
      refusal_code: f(e.errorCode)
    }),
    ...timing_2
  });
  let d = `${e.httpStatus ?? "?"}${e.errorCode !== void 0 ? ` ${e.errorCode}` : ""}`;
  t(`[servedCatalog] primary: served rows unavailable (${N(e.fetchReason)}: ${d}); using compiled behavior`);
}
function D(e, r, o, n, organizationUuid_2) {
  nPs(e, {
    ...(n !== void 0 && me(n)),
    ...(organizationUuid_2 !== void 0 && {
      organizationUuid: organizationUuid_2
    })
  }), c("model_catalog_primary", e, {
    ...pe(e),
    ...o
  }), t(`[servedCatalog] primary: served rows unavailable (${r}); using compiled behavior`);
}
function pe(e) {
  return {};
}
var q = 2000,
  it = 1500;
async function Ce({
  headless: headless_4
}) {
  let r = {};
  try {
    let o = bon();
    if (o !== void 0 && !v2r(o)) return;
    let n = !headless_4 || E9n(),
      s = n && us(),
      i = !s ? 0 : headless_4 ? it : q,
      d = Date.now() + i,
      u = ft() && T9n() === "primary" && (await ct(d)),
      h = v9n();
    if (h !== null) {
      if (u && h === "essential_traffic") c("model_catalog_published", "essential_traffic", y(headless_4, r, u)), t("[publishedCatalog] primary: nonessential traffic is disabled and the server-managed catalog source is not yet confirmed by the server; published path off this session");
      return;
    }
    let l = Rgn(),
      S = Blt();
    if (!S.ok) {
      if (l === "primary") w(S.reason, "configured catalog URL is unusable", y(headless_4, r, u));
      return;
    }
    let {
      source: source_4
    } = S;
    if (source_4.trust.kind === "untrusted") {
      if (l === "primary") w(source_4.trust.reason, `custom source is untrusted (${source_4.trust.reason})`, y(headless_4, r, u));
      return;
    }
    if (l !== "primary") {
      await w2r(source_4.cacheKey);
      return;
    }
    let m = Gne(),
      p = await I(source_4),
      C = p === void 0 ? "nothing cached, no request" : "cache",
      R,
      P = !1,
      A = s || source_4.kind === "file",
      U = (headless_4 || !s) && source_4.kind === "file",
      _e = () => U ? q : Math.max(0, d - Date.now()),
      budgetMs_2 = U ? q : i,
      M = s && source_4.kind !== "file" ? BEt(source_4.cacheKey) : null,
      B = p === void 0 ? A : jEt(p) && (headless_4 ? U : A),
      Y = async label => {
        let O = Se(M, n),
          Q = await dt(O.refresh, {
            waitMs: _e(),
            budgetMs: budgetMs_2,
            label: label
          });
        if (Q.outcome === void 0) await O.countSpentWait();
        return Q;
      };
    if (B && M !== null && (headless_4 ? !(await $Et(M)) : await le(M))) {
      if (P = !0, r = {
        held_off: !0
      }, !headless_4) Se(M, n).refresh.catch(b => a(b));
      C = `${p === void 0 ? "nothing cached" : "stale cache"}, ${headless_4 ? "no request: a recent headless request failed and its hold-off has not passed" : "not waiting: the last request timed out or failed recently, so this one runs in the background"}`;
    } else if (B && p === void 0) {
      let b = await Y("published catalog first fetch");
      p = b.outcome?.entry, R = b.fetchStatus, r = b.fields, C = `fetch:${R} after ${b.waitMs}ms`;
    } else if (B && p !== void 0) {
      let b = await Y("published catalog stale refresh");
      R = b.fetchStatus, r = b.fields, p = b.outcome?.entry ?? p, C = `stale cache: waited ${b.waitMs}ms for refresh \u2192 ${jEt(p) ? "kept stale" : "refreshed"} (fetch:${R})`;
    }
    if (bon() !== o) return;
    let J = p?.document ?? XUn();
    if (J !== null && vYi(J, kfe(Te()))) {
      w("publisher_hold", "the publisher holds this backend on compiled behavior", y(headless_4, r, u));
      return;
    }
    let {
      catalog: catalog_2,
      kind: kind_2
    } = lt(p, m);
    if (catalog_2 === null) {
      if (p !== void 0) w("surface_not_served", "document serves this surface no rows", y(headless_4, r, u));else if (P) w(headless_4 ? "headless_held_off" : "held_off", `no seed, ${C}`, y(headless_4, r, u));else if (A) w(`${headless_4 && M !== null ? "headless_" : ""}fetch_${R ?? "none"}`, `nothing cached and no seed, ${C} produced no rows`, y(headless_4, r, u));else w(n ? "deferred_no_cache" : "headless_no_cache", `nothing cached, ${n ? "a third-party launch does not wait for the fetch" : "this headless launch may not fetch"}, no seed`, y(headless_4, r, u));
      return;
    }
    if (kind_2 === "seed") {
      let b = CYi(catalog_2);
      if (b !== null) {
        w("seed_stale", `${C}; compiled seed resolves ${b.family} to ${b.seed}, this build to ${b.compiled}`, y(headless_4, r, u));
        return;
      }
      let O = us() ? null : ut(catalog_2);
      if (O !== null) {
        w("seed_moves_model", `compiled seed would move ${O.what} to ${O.seed}${O.compiled === void 0 ? "" : `, this build's table says ${O.compiled}`}`, y(headless_4, r, u));
        return;
      }
    }
    if (wZe(catalog_2).length === 0) {
      w(q2e(catalog_2).length === 0 ? "no_selectable_rows" : "no_offered_rows", `published rows hold no model this build offers (${mk(catalog_2).length} rows via ${kind_2})`, y(headless_4, r, u));
      return;
    }
    let X = p !== void 0 && jEt(p);
    if (wwo(catalog_2, p?.fetchedAt, X), kind_2 === "seed") c("model_catalog_published", "seed", y(headless_4, r, u));else if (u) c("model_catalog_published", "remote_settings_unconfirmed", y(headless_4, r, !1));else g("model_catalog_published", y(headless_4, r, !1));
    t(`[publishedCatalog] primary: using ${kind_2} rows (${mk(catalog_2).length} rows via ${C}${X ? ", stale" : ""})`);
  } catch (error) {
    a(error);
    let n = bon();
    if ((n === void 0 || v2r(n)) && Rgn() === "primary") w("exception", "exception", y(headless_4, r, !1));
  }
}
function Se(e, allowNetwork_5) {
  let refresh = S2r({
    allowNetwork: allowNetwork_5
  });
  if (e === null) return {
    refresh: refresh,
    countSpentWait: () => Promise.resolve()
  };
  let n = Promise.resolve(),
    s = !1,
    i = !1;
  return {
    refresh: refresh.then(async h => {
      s = !0;
      let l = z(h);
      return n = n.then(async () => {
        if (!i || h.fetchStatus === "ok" || h.fetchStatus === "not_modified") await b2r(e, h, l);
      }), await n, h;
    }),
    countSpentWait: () => (n = n.then(async () => {
      if (!s) i = !0, await x(e, "back_off", Date.now(), !0);
    }), n)
  };
}
async function dt(e, {
  waitMs: waitMs,
  budgetMs: o,
  label: label_2
}) {
  let s = performance.now(),
    outcome_2 = await zt(e, waitMs, label_2).catch(() => {
      return;
    }),
    fetchStatus = outcome_2 === void 0 ? "timeout" : outcome_2.fetchStatus,
    u = Math.round(performance.now() - s);
  return {
    outcome: outcome_2,
    fetchStatus: fetchStatus,
    waitMs: u,
    fields: {
      fetch_status: f(fetchStatus),
      ...(outcome_2?.fetchReason !== void 0 && {
        fetch_reason: f(outcome_2.fetchReason)
      }),
      ...(outcome_2?.httpStatus !== void 0 && {
        http_status: outcome_2.httpStatus
      }),
      ...(outcome_2?.fetchMs !== void 0 && {
        fetch_ms: outcome_2.fetchMs
      }),
      wait_ms: u,
      wait_budget_ms: o,
      wait_timed_out: outcome_2 === void 0
    }
  };
}
async function be() {
  try {
    if (v9n() === "policy") return;
    let {
      hasManagedModelDenies: hasManagedModelDenies
    } = await import("B:/~BUN/root/chunk-e7nprxtg.js");
    if (!hasManagedModelDenies()) return;
    let r = new Set(),
      o = [];
    for (let s of [Blt({
      ignoreEnvUrl: !0
    }), Blt()]) {
      if (!s.ok || r.has(s.source.cacheKey)) continue;
      r.add(s.source.cacheKey);
      let i = await I(s.source);
      if (i !== void 0) o.push(i.document);
    }
    let n = pr();
    n.publishedDenyDocuments = o, n.publishedRowNames = void 0;
  } catch (error) {
    a(error);
  }
}
function ut(e) {
  let r = Te();
  for (let s of [...bZe, "fable"]) {
    let seed = sPs(e, s);
    if (seed === void 0) continue;
    let compiled = BSe(s, kfe(r));
    if (compiled === void 0 || Efe(seed) !== Efe(compiled) || ve(seed) !== ve(compiled)) return {
      what: `the ${s} alias`,
      seed: seed,
      compiled: compiled
    };
  }
  let o = Ggt() ? Pwo(e, "default") : {},
    seed_2 = o.perProvider ?? o.everywhere ?? (r === "firstParty" ? e.state?.model : void 0);
  return seed_2 === void 0 ? null : {
    what: "the Default",
    seed: seed_2,
    compiled: void 0
  };
}
function ve(e) {
  return /\[1m\]/i.test(e);
}
function lt(e, r) {
  if (e !== void 0) return {
    catalog: kon(e.document, r),
    kind: e.source
  };
  return {
    catalog: TYi(r),
    kind: "seed"
  };
}
async function ct(e) {
  if (ht()) {
    let r = e - Date.now();
    if (r > 0) t(`[publishedCatalog] waiting up to ${r}ms for server-managed settings to be confirmed`), await gt(r);
  }
  if (!VEn()) return !1;
  return t("[publishedCatalog] server-managed settings name managed model-catalog source settings the server has not confirmed; deciding this session without them"), !0;
}
function ft() {
  let e = v9n();
  return e === null || e === "essential_traffic" && (Bmi() || Pw() === null);
}
function ht() {
  if (!Rb() || Yp() || Jy() !== void 0) return !1;
  return VEn() || Pw() === null;
}
async function gt(e) {
  let r = () => {},
    promise = new Promise(n => {
      if (r = Lpe(s => {
        if (s !== void 0) n();
      }), Jy() !== void 0) n();
    });
  try {
    await we(promise, e);
  } finally {
    r();
  }
}
function y(headless_5, r, o) {
  return {
    auth_kind: f(rat()),
    headless: headless_5,
    ...r,
    ...(o && {
      remote_settings_unconfirmed: !0
    })
  };
}
function w(e, r, o) {
  wwo(null), c("model_catalog_published", e, o), t(`[publishedCatalog] primary: published rows unavailable (${r}); using compiled behavior`);
}
function w9n({
  headless: headless_6
}) {
  let r = pr();
  if (r.catalogDecision === void 0) r.catalogDecision = mt(headless_6).catch(o => a(o));
  return r.catalogDecision;
}
async function mt(headless_7) {
  await fe({
    headless: headless_7
  }), await Ce({
    headless: headless_7
  }), await be();
}
export { $Et, _2r, b2r, S9n, S2r, m7s, w9n };