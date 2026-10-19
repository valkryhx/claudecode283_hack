// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j,
  X4
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  ln
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  Wke,
  Sl,
  Mp,
  Fm,
  Et,
  Jp,
  wn,
  fA,
  dB,
  lv,
  ZK,
  Gt,
  Ce,
  ue,
  Yk
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Une
} from "B:/~BUN/root/chunk-eya7pdzx.js";
import {
  st
} from "B:/~BUN/root/chunk-7aw74be3.js";
var S = 3600000,
  _ = 86400000,
  h = "/api/claude_code/organizations/metrics_enabled";
class o extends Error {}
async function w() {
  let e = Wke(await dB(), `${ln().BASE_API_URL}${h}`);
  if (e.error) throw new o("Auth error: no credential usable for the metrics opt-out check");
  let n = await Gt.get(h, {
    auth: "none",
    headers: e.headers,
    timeout: 5000,
    bypassEssentialTrafficOnly: !0,
    maxRedirects: 0
  });
  if (!n.ok) throw new o(`metrics_enabled unavailable: ${n.reason}`);
  if (typeof n.data?.metrics_logging_enabled !== "boolean") throw Error("metrics_enabled response missing metrics_logging_enabled");
  return n.data
}
async function M(e) {
  try {
    let n = await lv(w, {
      also403Revoked: !0,
      gateToSessionOAuthCredential: !0,
      oauthRefreshLatch: e
    });
    return e.attempted = !1, t(`${ZK} Metrics opt-out API response: enabled=${n.metrics_logging_enabled}`), g("api_metrics_opt_out_check"), {
      enabled: n.metrics_logging_enabled,
      hasError: !1
    }
  } catch (n) {
    return t(`${ZK} Failed to check metrics opt-out status: ${d(n)}`, n instanceof o ? {
      level: "error"
    } : void 0), m("api_metrics_opt_out_check", "request_failed"), {
      enabled: !1,
      hasError: !0
    }
  }
}
var y = new z(() => {
    let e = {
      attempted: !1
    };
    return {
      memo: Une(() => M(e), S),
      oauthRefreshLatch: e
    }
  }),
  E = new z(() => ({
    identity: void 0
  }));

function u() {
  let {
    key: e,
    source: n
  } = Mp();
  if (e === null) return null;
  if (n === "apiKeyHelper") {
    let r = Fm();
    return r ? `key:helper:${st(r).slice(0,16)}` : null
  }
  return `key:${st(e).slice(0,16)}`
}

function c(e) {
  let n = fA();
  if (n !== void 0) return n.organizationUuid !== void 0 ? `acct:${n.accountUuid}/${n.organizationUuid}` : null;
  if (!e?.accountUuid || !e.organizationUuid) return null;
  return a.CLAUDE_CODE_OAUTH_TOKEN || X4() ? null : `acct:${e.accountUuid}/${e.organizationUuid}`
}

function s() {
  let e = wn();
  if (e !== void 0) return c(e);
  return Sl() ? null : u()
}
async function p(e) {
  let n = wn();
  if (n === void 0) return Sl() ? null : u();
  if (fA() !== void 0) return c(n);
  return c(await Yk(e))
}

function P() {
  let e = wn();
  if (e !== void 0 || Sl()) {
    let n = fA();
    if (n !== void 0) return `acct:${n.accountUuid}/${n.organizationUuid??"?"}`;
    if (e !== void 0) return `acct:${e.accountUuid??"?"}/${e.organizationUuid??"?"}`;
    return "oauth:no-record"
  }
  return u() ?? "none"
}

function I() {
  let e = j().host,
    n = y.of(e),
    r = E.of(e),
    i = P();
  if (r.identity !== void 0 && r.identity !== i) n.memo.cache.clear(), n.oauthRefreshLatch.attempted = !1;
  return r.identity = i, n.memo()
}

function wns() {
  let e = j().host,
    n = y.of(e);
  n.memo.cache.clear(), n.oauthRefreshLatch.attempted = !1, E.of(e).identity = void 0
}
async function b(e) {
  let n = s() === null ? null : await p(e),
    r = await I();
  if (r.hasError) return r;
  if (n === null) return r;
  if (await p(e) !== n) return m("api_metrics_opt_out_check", "principal_changed_mid_flight"), {
    enabled: !1,
    hasError: !0
  };
  if (s() !== n) return r;
  let i = C(n);
  if (i !== void 0 && i.enabled === r.enabled && Date.now() - i.timestamp < _) return r;
  return await Ce((k) => T(k, n, r.enabled), e), r
}

function T(e, n, r) {
  if (s() !== n || n.startsWith("acct:") && e.oauthAccount === void 0) return e;
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
  let r = Object.entries(e).filter(([, i]) => A(i)).sort(([, i], [, f]) => f.timestamp - i.timestamp).slice(0, F);
  return Object.fromEntries(r)
}

function A(e) {
  return typeof e?.enabled === "boolean" && Number.isFinite(e.timestamp) && e.timestamp <= Date.now()
}

function C(e) {
  let n = ue().metricsStatusCacheByPrincipal?.[e];
  return n !== void 0 && A(n) ? n : void 0
}
async function vns(e) {
  if (Et() && !Jp()) return {
    enabled: !1,
    hasError: !1
  };
  let n = s(),
    r = n === null ? void 0 : C(n);
  if (r !== void 0) {
    if (Date.now() - r.timestamp > _) b(e).catch(l);
    return {
      enabled: r.enabled,
      hasError: !1
    }
  }
  return b(e)
}
export {
  wns,
  vns
};
