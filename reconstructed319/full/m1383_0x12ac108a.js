// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  j5
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  UNe,
  Qa,
  Wm,
  uh,
  Rt,
  fp,
  hn,
  vR,
  gV,
  vE,
  dJ,
  jt,
  Le,
  fe,
  EE
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  gH
} from "B:/~BUN/root/chunk-qfq22jk9.js";
import {
  ume
} from "B:/~BUN/root/chunk-4hj5k2m3.js";
import {
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
var S = 3600000,
  _ = 86400000,
  h = "/api/claude_code/organizations/metrics_enabled";
class s extends Error {}
async function w() {
  let e = UNe(await gV(), `${nn().BASE_API_URL}${h}`);
  if (e.error) throw new s("Auth error: no credential usable for the metrics opt-out check");
  let n = await jt.get(h, {
    auth: "none",
    headers: e.headers,
    timeout: 5000,
    bypassEssentialTrafficOnly: !0,
    maxRedirects: 0
  });
  if (!n.ok) throw new s(`metrics_enabled unavailable: ${n.reason}`);
  if (typeof n.data?.metrics_logging_enabled !== "boolean") throw Error("metrics_enabled response missing metrics_logging_enabled");
  return n.data
}
async function M(e) {
  try {
    let n = await vE(w, {
      also403Revoked: !0,
      gateToSessionOAuthCredential: !0,
      oauthRefreshLatch: e
    });
    return e.attempted = !1, t(`${dJ} Metrics opt-out API response: enabled=${n.metrics_logging_enabled}`), g("api_metrics_opt_out_check"), {
      enabled: n.metrics_logging_enabled,
      hasError: !1
    }
  } catch (n) {
    return t(`${dJ} Failed to check metrics opt-out status: ${d(n)}`, n instanceof s ? {
      level: "error"
    } : void 0), m("api_metrics_opt_out_check", "request_failed"), {
      enabled: !1,
      hasError: !0
    }
  }
}
var y = new W(() => {
    let e = {
      attempted: !1
    };
    return {
      memo: ume(() => M(e), S),
      oauthRefreshLatch: e
    }
  }),
  E = new W(() => ({
    identity: void 0
  }));

function l() {
  let {
    key: e,
    source: n
  } = Wm();
  if (e === null) return null;
  if (n === "apiKeyHelper") {
    let r = uh();
    return r ? `key:helper:${nt(r).slice(0,16)}` : null
  }
  return `key:${nt(e).slice(0,16)}`
}

function u(e) {
  let n = vR();
  if (n !== void 0) return n.organizationUuid !== void 0 ? `acct:${n.accountUuid}/${n.organizationUuid}` : null;
  if (!e?.accountUuid || !e.organizationUuid) return null;
  return i.CLAUDE_CODE_OAUTH_TOKEN || j5() || gH() !== null ? null : `acct:${e.accountUuid}/${e.organizationUuid}`
}

function c() {
  let e = hn();
  if (e !== void 0) return u(e);
  return Qa() ? null : l()
}
async function p(e) {
  let n = hn();
  if (n === void 0) return Qa() ? null : l();
  if (vR() !== void 0) return u(n);
  return u(await EE(e))
}

function P() {
  let e = hn();
  if (e !== void 0 || Qa()) {
    let n = vR();
    if (n !== void 0) return `acct:${n.accountUuid}/${n.organizationUuid??"?"}`;
    if (e !== void 0) return `acct:${e.accountUuid??"?"}/${e.organizationUuid??"?"}`;
    return "oauth:no-record"
  }
  return l() ?? "none"
}

function I() {
  let e = H().host,
    n = y.of(e),
    r = E.of(e),
    o = P();
  if (r.identity !== void 0 && r.identity !== o) n.memo.cache.clear(), n.oauthRefreshLatch.attempted = !1;
  return r.identity = o, n.memo()
}

function wli() {
  let e = H().host,
    n = y.of(e);
  n.memo.cache.clear(), n.oauthRefreshLatch.attempted = !1, E.of(e).identity = void 0
}
async function b(e) {
  let n = c() === null ? null : await p(e),
    r = await I();
  if (r.hasError) return r;
  if (n === null) return r;
  if (await p(e) !== n) return m("api_metrics_opt_out_check", "principal_changed_mid_flight"), {
    enabled: !1,
    hasError: !0
  };
  if (c() !== n) return r;
  let o = k(n);
  if (o !== void 0 && o.enabled === r.enabled && Date.now() - o.timestamp < _) return r;
  return await Le((C) => T(C, n, r.enabled), e), r
}

function T(e, n, r) {
  if (c() !== n || n.startsWith("acct:") && e.oauthAccount === void 0) return e;
  return {
    ...e,
    metricsStatusCache: void 0,
    metricsStatusCacheByPrincipal: O({
      ...e.metricsStatusCacheByPrincipal,
      [n]: {
        enabled: r,
        timestamp: Date.now()
      }
    })
  }
}
var F = 8;

function O(e) {
  let r = Object.entries(e).filter(([, o]) => A(o)).sort(([, o], [, f]) => f.timestamp - o.timestamp).slice(0, F);
  return Object.fromEntries(r)
}

function A(e) {
  return typeof e?.enabled === "boolean" && Number.isFinite(e.timestamp) && e.timestamp <= Date.now()
}

function k(e) {
  let n = fe().metricsStatusCacheByPrincipal?.[e];
  return n !== void 0 && A(n) ? n : void 0
}
async function kli(e) {
  if (Rt() && !fp()) return {
    enabled: !1,
    hasError: !1
  };
  let n = c(),
    r = n === null ? void 0 : k(n);
  if (r !== void 0) {
    if (Date.now() - r.timestamp > _) b(e).catch(a);
    return {
      enabled: r.enabled,
      hasError: !1
    }
  }
  return b(e)
}
export {
  wli,
  kli
};
