// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  dV
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  Fe,
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  L,
  at,
  j,
  Xgn
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  vGe
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  Bhe
} from "B:/~BUN/root/chunk-5ygt6t95.js";
import {
  $yt,
  jd,
  XEe
} from "B:/~BUN/root/chunk-we0fhavr.js";
import {
  er,
  H4
} from "B:/~BUN/root/chunk-k9zm82w3.js";
import {
  Zpn,
  D0e
} from "B:/~BUN/root/chunk-a3eqgdv2.js";
import {
  $a
} from "B:/~BUN/root/chunk-m0xdacj9.js";
import {
  Ai
} from "B:/~BUN/root/chunk-0r89607w.js";
import {
  tun
} from "B:/~BUN/root/chunk-hwnj8m4g.js";
import {
  an
} from "B:/~BUN/root/chunk-31x8pa20.js";
class U {
  reconnect = null;
  toggle = null;
  isDisabled = null;
  dialBlockCause = null;
  policyColdStartWaiter = null;
  skippedDynamicServers = [];
  cliOwnedConfigs = new WeakSet;
  cliOwnedBearerProviders = new WeakMap;
  cliOwnedAsyncBearerProviders = new WeakMap;
  cliOwnedResponseObservers = new WeakMap;
  cliOwnedRequestHeaderProviders = new WeakMap;
  cliOwnedBeforeRequestHooks = new WeakMap;
  cliOwnedCredentialRequestHeaders = new WeakMap;
  cliOwnedResendDeciders = new WeakMap;
  ccrInjectedConfigs = new WeakSet;
  ccrMetaEntries = new WeakSet;
  clientAuthProviders = new WeakMap;
  clientFirstPartyBearers = new WeakMap;
  firstToolsListReports = new WeakMap;
  toolsListAhead = new WeakMap;
  stepUpReauthFlights = new Map;
  stepUpReauthExhausted = new Map;
  identityEpoch = 0;
  identityBaseline = void 0;
  identitySeedAttempted = !1;
  identityChangedThisProcess = !1;
  identityTrippedHandler = null;
  identityTripUnowned = !1;
  headlessMcpTeardown = null;
  headlessConnectorMountInFlight = void 0;
  transientRetryPasses = new Map;
  awaitsNextTurnRedial = null;
  authCacheRead = null;
  authCacheWriteChain = Promise.resolve();
  discoverVerdictsRead = null;
  discoverVerdictsWriteChain = Promise.resolve();
  firstPartyDesignConsentAsks = new Map;
  claudeAiConfigsFetch = null;
  claudeAiConnectorIdIndex = void 0;
  claudeAiConnectorListStatus = "pending";
  claudeAiConnectorListGeneration = 0;
  claudeAiConnectorListFetchSeq = 0;
  claudeAiConnectorListSettledSeq = 0;
  claudeAiConfigsFetchTransientFailures = new WeakSet;
  pendingCrossOrgNotice = void 0;
  claudeAiConnectedThisSession = new Set;
  needsAuthNoticedThisSession = new Set;
  pendingScopeExpansionNotice = void 0;
  scopeExpansionDisclosed = !1;
  officialUrls = void 0;
  vscodeClient = null;
  stopVscodePolicyGatesRefresh = null;
  toolRefreshSequences = new WeakMap;
  droppedToolsSeqByConnection = new WeakMap;
  toolsListErrorByResult = new WeakMap;
  discoveryFetchErrors = new WeakMap;
  rawToolsByResult = new WeakMap;
  rawCommandsByResult = new WeakMap;
  rawResourcesByResult = new WeakMap;
  rawFetchedAtByResult = new WeakMap;
  persistedDiscoveryRounds = new WeakSet;
  listChangedRefetchHandlers = new WeakMap;
  burnedListingDiscoverPriors = new Set;
  skillsFunnelSeen = new Set;
  skillsFetcher = null;
  discoveryCacheStore = null;
  connectionCache = null;
  cachedFirstDialArmsRan = new WeakSet;
  supersededDials = new WeakSet;
  swrRefreshDialsInFlight = new WeakSet;
  reauthDecisionSinkForTest = void 0;
  holdStaleReauthEntryForTest = !1;
  oauthCallbackListeners = new Map;
  oauthCallbackSubmitters = new Map;
  activeOAuthFlows = new Map;
  authLost = Me();
  reauthReconnect = Me();
  cachedAdopt = Me();
  cachedDialFailed = Me()
}
var pe = new z(() => new U);

function Ft() {
  return pe.of(j().host)
}

function r5n(e) {
  return Ft().clientAuthProviders.has(Ai(e.client))
}

function $ge(e, r) {
  let n = Ft();
  if (n.cliOwnedConfigs.add(e), r?.getBearerToken) n.cliOwnedBearerProviders.set(e, r.getBearerToken);
  if (r?.resolveBearerToken) n.cliOwnedAsyncBearerProviders.set(e, r.resolveBearerToken);
  if (r?.onResponse) n.cliOwnedResponseObservers.set(e, r.onResponse);
  if (r?.requestHeaders) n.cliOwnedRequestHeaderProviders.set(e, r.requestHeaders);
  if (r?.beforeRequest) n.cliOwnedBeforeRequestHooks.set(e, r.beforeRequest);
  if (r?.credentialRequestHeaders) n.cliOwnedCredentialRequestHeaders.set(e, new Set(r.credentialRequestHeaders.map((t) => t.toLowerCase())));
  if (r?.resendAfter) n.cliOwnedResendDeciders.set(e, r.resendAfter);
  return e
}

function Np(e) {
  return typeof e === "object" && e !== null && Ft().cliOwnedConfigs.has(e)
}

function JWe(e) {
  if (typeof e !== "object" || e === null) return !1;
  let r = Ft();
  return r.cliOwnedBearerProviders.has(e) || r.cliOwnedAsyncBearerProviders.has(e)
}

function fe(e) {
  if (typeof e !== "object" || e === null) return null;
  let r = Ft().cliOwnedBearerProviders.get(e);
  if (!r) return null;
  try {
    return r() || null
  } catch {
    return null
  }
}
async function o5n(e) {
  if (typeof e !== "object" || e === null) return null;
  let r = Ft().cliOwnedAsyncBearerProviders.get(e);
  if (!r) return fe(e);
  try {
    return await r() || null
  } catch {
    return null
  }
}
async function s5n(e, r) {
  if (typeof e !== "object" || e === null) return;
  try {
    await Ft().cliOwnedBeforeRequestHooks.get(e)?.(r)
  } catch {}
}

function i5n(e, r) {
  if (typeof e !== "object" || e === null) return {};
  let n = Ft().cliOwnedRequestHeaderProviders.get(e);
  if (!n) return {};
  try {
    return n(r)
  } catch {
    return {}
  }
}

function ZUt(e, r) {
  return typeof e === "object" && e !== null && (Ft().cliOwnedCredentialRequestHeaders.get(e)?.has(r.toLowerCase()) ?? !1)
}
async function eBt(e, r, n) {
  if (typeof e !== "object" || e === null) return !1;
  try {
    let t = Ft().cliOwnedResendDeciders.get(e);
    return t === void 0 ? !1 : await t({
      status: r.status,
      headers: r.headers
    }, n)
  } catch {
    return !1
  }
}

function a5n(e, r) {
  if (typeof e !== "object" || e === null) return;
  let n = Ft().cliOwnedResponseObservers.get(e);
  if (!n) return;
  try {
    n({
      method: r.method,
      status: r.status,
      headers: r.headers,
      requestHeaders: r.requestHeaders,
      bearerFingerprint: r.bearerFingerprint
    })
  } catch {}
}
var Ss = "remote-devices";
var _Qe = "claude_ai",
  Iyt = "widgets",
  F2s = "visualize",
  l5 = "memory",
  Xcn = `mcp__${l5}__memory_`,
  l5n = "a471caf9-e559-5ad8-836c-4e5972877185",
  Jcn = "63d0e670-f310-5da6-b45c-86ffaf444223";

function VEe(e, r) {
  return dV(r, dV(e, me))
}
var me = "00000000-0000-0000-0000-000000000000";

function Uge(e) {
  if (e.type !== "http") return;
  let r = "headers" in e ? e.headers : void 0;
  for (let [n, t] of Object.entries(r ?? {}))
    if (n.toLowerCase() === "x-mcp-server-id") return t.toLowerCase();
  return
}
var Myt = new at(() => ({}));

function H2s(e) {
  return Uge(e) === Jcn
}
var Dyt = "758bbc64-7e6c-5dab-a3a5-2a4c7ca423fc",
  d5n = "667a974b-0f6b-57fc-8973-52854120fcb3",
  tBt = new Set(["Claude_Pages", "Claude_Docs"]),
  pFo = "1a59c906-04da-521d-bda7-7f71b9f9e01c",
  c5n = "/v1/pages/mcp",
  u5n = "2cd180e1-ecb6-5156-82c8-41224ae6346e",
  $2s = "claude-artifacts",
  U2s = "/v1/code/mcp/ccr-artifacts",
  nBt = "/api/artifacts/mcp";

function p5n(e) {
  return Uge(e) === pFo
}
var bQe = `mcp__${Ss}__device_bash`,
  fFo = `mcp__${Ss}__device_stage_files`,
  mFo = `mcp__${Ss}__device_commit_files`,
  oHr = "ide",
  B2s = `mcp__${oHr}__executeCode`,
  D = "office_bridge.listing";

function VMe(e) {
  let r = e._meta,
    n = typeof r === "object" && r !== null && D in r ? r[D] : void 0;
  return n === "stub" || n === "live" ? n : void 0
}
var j2s = [bQe, `mcp__${Ss}__device_list_dir`, fFo, mFo],
  gFo = new Set([oHr, Ss]),
  ge = ["claude_in_chrome", "claude_browser", "claude_preview", "claude_code_ios_simulator", "claude_code_android_emulator", "computer_use", "framebuffer", "plugins", "skills", "mcp_registry", "scheduled_tasks", "cowork", "session_info", "dispatch", "remote_devices", "ccd_directory"],
  _e = new Set(["workspace", "terminal", "office", "visualize", "window_halo", "dev_debug", "ccd_session", tun]);

function R(e) {
  return e.replace(/[^a-zA-Z0-9_-]+/g, "_").toLowerCase().replace(/-/g, "_")
}
var k = ["claude_browser"];

function Qcn(e, r = k) {
  let n = R(e);
  return r.find((t) => R(t) === n) ?? null
}

function Lyt(e) {
  return e.toLowerCase().replace(/[^a-z0-9]/g, "")
}

function Nyt(e, r) {
  let n = Lyt(e);
  return n.length > 0 && n === Lyt(r)
}

function W2s(e, r = k) {
  if (gFo.has(e)) return !0;
  if (Qcn(e, r) !== null) return !1;
  let n = R(e);
  return _e.has(n) || ge.some((t) => n.startsWith(t))
}
import {
  posix as m
} from "path";
var S = (e) => JSON.stringify(e);
var N = new Set(["api.anthropic.com", "api-staging.anthropic.com"]),
  Se = new Set([...N, ...vGe.map((e) => new URL(e).hostname)]);

function L2s(e) {
  return N.has(e)
}

function N2s(e) {
  let r = QUt();
  if (!e) {
    if (r.status === "absent") return null;
    return r.status === "rejected" ? {
      code: r.code,
      reason: r.reason
    } : {
      code: "view_mismatch",
      reason: "the eager argv scan sees a --sdk-url value commander did not bind"
    }
  }
  if (r.status === "rejected") return {
    code: r.code,
    reason: r.reason
  };
  if (r.status === "absent" || r.url !== e) return {
    code: "view_mismatch",
    reason: "the --sdk-url value commander bound disagrees with the eager argv scan"
  };
  return null
}

function Oyt(e) {
  let r;
  try {
    r = new URL(e)
  } catch {
    return {
      code: "unparseable",
      reason: `could not parse ${S(e)} as a URL`
    }
  }
  if (Se.has(r.hostname)) {
    if (r.protocol !== "wss:" && r.protocol !== "https:") return {
      code: "bad_scheme",
      reason: `scheme ${S(r.protocol)} is not permitted for host ${S(r.hostname)}; only wss:// and https:// are accepted`
    };
    return null
  }
  return {
    code: "not_allowlisted",
    reason: `host ${S(r.hostname)} is not an approved Anthropic endpoint`
  }
}

function QUt() {
  let e = Xgn();
  if (e !== void 0) return {
    status: "ok",
    url: e
  };
  let r = Bhe("--sdk-url"),
    n = r.filter(Boolean).at(-1);
  if (!n) return {
    status: "absent"
  };
  if (new Set(r).size > 1) return {
    status: "rejected",
    code: "conflicting",
    reason: "conflicting --sdk-url occurrences"
  };
  let t = Oyt(n);
  if (t) return {
    status: "rejected",
    ...t
  };
  return {
    status: "ok",
    url: n
  }
}

function GMe(e) {
  if (e.protocol === "wss:") e.protocol = "https:";
  else if (e.protocol === "ws:") e.protocol = "http:";
  return e
}
var p = ["/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/", "/v2/ccr-sessions/", "/v1/code/"],
  z2s = "spent";
class ee {
  captured = Y();
  capturedOwn = G();
  carrier = K();
  ownSessionIds = Z();
  selfHostedRunnerChild = X();
  get atStartup() {
    return this.captured
  }
  get isSessionIngressUrlSet() {
    return this.capturedOwn
  }
  get ownCcrSessionIds() {
    return this.ownSessionIds
  }
  get isSelfHostedRunnerChild() {
    return this.selfHostedRunnerChild
  }
  get bridgeCarrier() {
    return this.carrier
  }
  get isBridgeCarrierChild() {
    return this.carrier === "child"
  }
  reset() {
    this.captured = Y(), this.capturedOwn = G(), this.carrier = K(), this.ownSessionIds = Z(), this.selfHostedRunnerChild = X()
  }
}
var lm = new ee;

function hFo() {
  return lm.bridgeCarrier ? ["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "SESSION_INGRESS_URL", "CLAUDE_CODE_BRIDGE_PROMPT_SHA256"] : []
}

function Yy(e) {
  let r = lm.atStartup;
  if (!r) return !1;
  let n, t;
  try {
    n = new URL(e), t = new URL(r)
  } catch {
    return !1
  }
  if ((n.protocol === "wss:" ? `https://${n.host}` : n.protocol === "ws:" ? `http://${n.host}` : n.origin) !== t.origin) return !1;
  return p.some((o) => n.pathname.includes(o))
}

function f5n(e, r) {
  if (!("url" in r) || typeof r.url !== "string") return !1;
  if (!Yy(r.url)) return !1;
  switch (lm.bridgeCarrier) {
    case void 0:
      return !0;
    case "child":
      return r.scope === "dynamic" && e === jd;
    case "descendant":
      return !1
  }
}

function he(e, r) {
  let n = u(e, r);
  if (!n) return !1;
  if (n.pathname === $yt) return n.search === "";
  let t = n.searchParams.getAll("toolbox_mcp_server_id");
  return p.some((s) => n.pathname.includes(s)) && t.length === 1 && t[0] === XEe
}

function G2s(e) {
  let r = Fyt();
  if (r === null) return !1;
  let n = u(e, r);
  if (!n) return !1;
  let t = SQe.exec(n.pathname)?.[1];
  if (t === void 0) return !1;
  if (!lm.ownCcrSessionIds.some((l) => er(l) === er(t))) return !1;
  let s = [...n.searchParams.keys()],
    o = n.searchParams.getAll("toolbox_mcp_server_id"),
    i = n.searchParams.get("mcp_server_id"),
    a = n.searchParams.get("mcp_url");
  return new Set(s).size === s.length && s.every((l) => v.includes(l)) && o.length === 1 && o[0] === Dyt && (i === null || re().has(i)) && (a === null || u(a, r) !== null)
}

function V2s(e) {
  if (!Yy(e)) return !1;
  let r;
  try {
    r = new URL(e)
  } catch {
    return !1
  }
  let n = [...r.searchParams.getAll("mcp_server_id"), ...r.searchParams.getAll("toolbox_mcp_server_id")];
  if (n.length === 0) return !1;
  let t;
  try {
    t = decodeURIComponent(r.pathname)
  } catch {
    return !0
  }
  let s = m.normalize(t),
    o;
  for (let d of [SQe, O, ae, ce])
    if (o = d.exec(r.pathname)?.[1] ?? d.exec(s)?.[1], o !== void 0) break;
  if (o === void 0 && ["/v2/ccr-sessions/", "/v1/code/sessions/", "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/"].some((d) => r.pathname.includes(d) || t.includes(d) || s.includes(d))) return !0;
  if (o === de && lm.ownCcrSessionIds.length === 0) return !0;
  let a = re(),
    l = o === void 0 ? [] : ne(er(o));
  return n.some((d) => a.has(d) || l.includes(d) || d.toLowerCase() === $a)
}

function re() {
  let e = new Set([Dyt]);
  for (let r of lm.ownCcrSessionIds)
    for (let n of ne(er(r))) e.add(n);
  return e
}

function ne(e) {
  return Ce(e, $a)
}

function Ce(e, r) {
  return [`cse_${e}`, `session_${e}`].map((n) => VEe(n, r))
}
var Re = /^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/memory\/mcp$/;

function m5n(e, r) {
  if (e !== l5 || r.scope !== "dynamic" || Np(r) || !("url" in r) || typeof r.url !== "string" || !Yy(r.url)) return !1;
  let n;
  try {
    n = new URL(r.url)
  } catch {
    return !1
  }
  if (n.username !== "" || n.password !== "" || n.hash !== "") return !1;
  if (Re.test(n.pathname)) return n.search === "";
  let t = n.searchParams.getAll("toolbox_mcp_server_id");
  return SQe.test(n.pathname) && t.length === 1 && t[0] === l5n
}

function q2s(e) {
  if (!("url" in e) || typeof e.url !== "string" || Np(e)) return !1;
  let r = "headers" in e ? e.headers : void 0,
    n = Object.entries(typeof r === "object" && r !== null ? r : {}),
    t = n.flatMap(([s, o]) => f(s) === "xmcpserverid" && typeof o === "string" && o.trim() !== "" ? [o.trim()] : []);
  if ("headersHelper" in e && e.headersHelper) return Yy(e.url);
  return ye(e.url, t, n.flat().filter((s) => typeof s === "string"))
}

function Ee(e) {
  return [l5n, ...e.flatMap((r) => {
    let n = er(r);
    return [`cse_${n}`, `session_${n}`].map((t) => VEe(t, l5))
  })].map(f)
}

function E(e, r, {
  orItsName: n = !0
} = {}) {
  if (n && C(e).some((s) => s.replace(ve, "") === l5)) return !0;
  let t = e;
  for (let s = 0; s <= 3; s++) {
    if (te(t, r)) return !0;
    let o = oe(t);
    if (s === 3 && o !== t) return !0;
    t = o
  }
  return !1
}

function te(e, r) {
  let n = [e, e.replace(/%[0-9a-f]{2}/gi, "")].map(f);
  return r.some((t) => n.some((s) => s.includes(t)))
}
var H = /[\\\p{Cc}]/u,
  se = /[%?#\\\s\p{Cc}]/u,
  B = /^(?:https?|wss?):\/\/(?:[^/?#\\]*@)?[^/?#\\@:]+(?::[^/?#\\@]*)?(?=[/?#\\]|$)/i;

function f(e) {
  return e.toLowerCase().replace(/[^0-9a-z]/g, "")
}

function ye(e, r = [], n = r) {
  if (!Yy(e)) return !1;
  if (e.length > 32768) return !0;
  let t;
  try {
    t = new URL(e)
  } catch {
    return !1
  }
  if ([e, ...r].some((c) => c.includes("${"))) return !0;
  if (Ae(t.pathname)) return !0;
  let s = [...[...t.searchParams].flat(), ...[t.hash, t.username, t.password].filter((c) => c !== ""), ...n];
  if (s.length > 64 || t.pathname.length + s.join("").length > 8192) return !0;
  let o = L(s.flatMap(C));
  if (o.some((c) => M(c, we)) || F(t, ["mcp_url"]).some((c) => Oe(c, t.hostname))) return !0;
  let i = F(t, ["mcp_server_id", "toolbox_mcp_server_id"]),
    a = [t.pathname, m.normalize(t.pathname)],
    l = h(ae, a) ?? h(ce, a),
    d = h(SQe, a) ?? h(O, a) ?? l,
    {
      ownCcrSessionIds: b
    } = lm,
    A = L([...a, ...o].flatMap((c) => y.flatMap((_) => {
      let T = c.indexOf(_),
        x = T === -1 ? void 0 : /^[A-Za-z0-9_-]+(?=[/?#&;]|$)/.exec(c.slice(T + _.length))?.[0];
      return x === void 0 ? [] : [x]
    })));
  if (A.length > 8) return !0;
  let g = Ee(L([...b, ...d === void 0 ? [] : [d], ...A]));
  if ([...o, ...C(t.pathname + t.search + t.hash)].some((c) => te(c, g))) return !0;
  if ([...r, ...l === void 0 ? [] : [l]].some((c) => E(c, g)) || t.pathname.split("/").some((c) => E(c, g, {
      orItsName: !1
    }))) return !0;
  let I = d === de && b.length === 0;
  if (r.length > 0 && I) return !0;
  if (i.length === 0) return !1;
  if (d === void 0 ? y.some((c) => a.some((_) => _.includes(c))) : I) return !0;
  return i.some((c) => E(c, g))
}

function F(e, r) {
  let n = r.map(f);
  return [...e.searchParams].filter(([t]) => C(t).some((s) => n.includes(f(s)))).map(([, t]) => t)
}

function h(e, r) {
  for (let n of r) {
    let t = e.exec(n)?.[1];
    if (t !== void 0) return t
  }
  return
}
var yFo = ["/v2/ccr-sessions/", "/v1/code/sessions/"],
  y = [...yFo, "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/"],
  we = [...y, "/v1/code/local/", "/v1/code/mcp/"];

function Oe(e, r) {
  return !Ie(e, r) && (se.test(e) || M(e, p))
}

function C(e) {
  let r = [e],
    n = [e];
  for (let t = 1; t <= 3; t++) n = L(n.flatMap((s) => [V(s), V(s.replace(Pe, (o, i, a) => o.length === 3 ? o : `	%${i}${a}	`))])), r.push(...n);
  return L(r)
}
var ve = /[\s\p{Cc}\ufffd+]/gu,
  Pe = /%[\s\p{Cc}\ufffd+]*([0-9a-f])[\s\p{Cc}\ufffd+]*([0-9a-f])/giu;

function V(e) {
  return e.replace(/(?:%[0-9a-f]{2})+/gi, (r) => new TextDecoder().decode(Uint8Array.from(r.slice(1).split("%"), (n) => parseInt(n, 16))))
}

function M(e, r) {
  let n = q(e);
  return r.some((t) => {
    let s = q(t).filter((o) => o !== "");
    return [
      [...s, "memory", "mcp"],
      [...s, "mcp", "memory"], ...s.includes("mcp") ? [
        [...s, "memory"]
      ] : []
    ].some((o) => be(n, o))
  })
}

function q(e) {
  return e.toLowerCase().split(/[^a-z0-9_\-\s\p{Cc}\ufffd+]+/u).flatMap((r) => [...r.split(/[\s\p{Cc}\ufffd+]+/u), ""])
}

function be(e, r) {
  let n = 0;
  for (let t = 0; t < e.length && n < r.length; t++) {
    let s = r[n] ?? "",
      o = 0;
    for (let i = t;; i++) {
      let a = e[i] ?? "";
      if (a === "" || !s.startsWith(a, o)) break;
      if (o += a.length, o === s.length) {
        n++, t = i;
        break
      }
    }
  }
  return n === r.length
}

function Ae(e) {
  if (se.test(e) || M(e, p)) return !0;
  let r = e.toLowerCase();
  return [r, m.normalize(r)].some((n) => p.some((t) => {
    let s = n.indexOf(t);
    return s !== -1 && Te(n.slice(s))
  }))
}

function Ie(e, r) {
  let n = B.exec(e)?.[0];
  if (n === void 0 || H.test(e) || !URL.canParse(e) || W(e, r)) return !1;
  for (let t = 0; t <= 3; t++) {
    let s = oe(n);
    if (s === n) return !0;
    if (H.test(s) || !B.test(s) || s.toLowerCase().includes(w(r)) || URL.canParse(s) && W(s, r)) return !1;
    n = s
  }
  return !1
}

function W(e, r) {
  return [w(r), ""].includes(w(new URL(e).hostname))
}

function w(e) {
  let r = e.length;
  while (e[r - 1] === ".") r--;
  return e.slice(0, r)
}

function Te(e) {
  return [e, m.normalize(e)].some((r) => {
    let n = r.split("/").filter((s) => s !== ""),
      t = n.indexOf("memory");
    return t !== -1 && n.includes("mcp", t + 1) || n.some((s, o) => s === "mcp" && n[o + 1] === "memory")
  })
}

function oe(e) {
  try {
    return decodeURIComponent(e)
  } catch {
    return e.replace(/%[0-7][0-9a-f]/gi, (r) => String.fromCharCode(Number.parseInt(r.slice(1), 16)))
  }
}
var SQe = /^\/v2\/ccr-sessions\/([A-Za-z0-9_-]+)\/mcp$/,
  O = /^\/v1\/code\/sessions\/([A-Za-z0-9_-]+)\/mcp$/;

function ie(e) {
  return `/internal/v2/ccr-sessions/${e}/toolport/`
}
var xe = new RegExp(`^${ie("[A-Za-z0-9_-]+")}mcp$`);

function _Fo(e) {
  return Yy(e) && xe.test(new URL(e).pathname)
}
var Ue = new RegExp(`^${ie("[^/]+")}`);

function wQe(e) {
  if (!Yy(e)) return !1;
  let r;
  try {
    r = m.normalize(decodeURIComponent(new URL(e).pathname))
  } catch {
    return !0
  }
  return Ue.test(r)
}
var ae = /^\/v2\/session_ingress\/shttp\/mcp\/([A-Za-z0-9_-]+)$/,
  ce = /^\/v2\/session_ingress\/mcp\/ws\/([A-Za-z0-9_-]+)$/,
  de = "-";

function g5n(e, r, n) {
  let t = u(e, r);
  if (!t) return null;
  let s = SQe.exec(t.pathname),
    o = Le(t, r);
  if (!s || s[1] !== n || !o) return null;
  return `${r}/v2/ccr-sessions/${n}/mcp?${o}`
}
var v = ["mcp_url", "mcp_server_id", "toolbox_mcp_server_id"],
  sHr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function Le(e, r) {
  let n = [...e.searchParams.keys()];
  if (new Set(n).size !== n.length || n.some((i) => !v.includes(i)) || e.searchParams.get("toolbox_mcp_server_id") !== XEe) return null;
  let t = new URLSearchParams,
    s = e.searchParams.get("mcp_url");
  if (s !== null) {
    let i = u(s, r);
    if (!i || i.pathname !== $yt || i.search !== "") return null;
    t.set("mcp_url", `${r}${$yt}`)
  }
  let o = e.searchParams.get("mcp_server_id");
  if (o !== null) {
    if (!sHr.test(o)) return null;
    t.set("mcp_server_id", o)
  }
  return t.set("toolbox_mcp_server_id", XEe), t.toString()
}

function u(e, r) {
  let n;
  try {
    n = new URL(e)
  } catch {
    return null
  }
  return n.origin === r && n.username === "" && n.password === "" && n.hash === "" ? n : null
}

function Fyt() {
  let e = lm.atStartup;
  if (!e) return null;
  try {
    return new URL(e).origin
  } catch {
    return null
  }
}

function K2s(e) {
  let r = Fyt(),
    n = r === null ? null : u(e, r);
  if (!n) return !1;
  let t = (SQe.exec(n.pathname) ?? O.exec(n.pathname))?.[1];
  return t !== void 0 && lm.ownCcrSessionIds.some((s) => er(s) === er(t))
}

function h5n(e) {
  let r = Fyt();
  return r !== null && he(e, r)
}

function Y2s(e) {
  let r = Fyt(),
    n = r === null ? null : u(e, r),
    t = n ? SQe.exec(n.pathname)?.[1] : void 0;
  if (!n || t === void 0) return null;
  let s = [...n.searchParams.keys()],
    o = n.searchParams.get("mcp_server_id"),
    i = n.searchParams.get("toolbox_mcp_server_id");
  if (new Set(s).size !== s.length || s.some((a) => !v.includes(a)) || o === null || !sHr.test(o) || i === null) return null;
  return {
    sessionSegment: t,
    mcpServerId: o,
    toolboxMcpServerId: i,
    upstreamUrl: n.searchParams.get("mcp_url") ?? void 0
  }
}

function Hyt(e) {
  return e !== void 0 && Oyt(e) === null ? new URL(e).origin : null
}
var De = "/v1/code/mcp/hearthbot",
  ke = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/hearthbot\/mcp$/;

function y5n(e) {
  if (!Yy(e)) return !1;
  let r;
  try {
    r = new URL(e)
  } catch {
    return !1
  }
  return r.username === "" && r.password === "" && r.hash === "" && r.search === "" && (r.pathname === De || ke.test(r.pathname))
}
var P = new Set(["bridge.claudeusercontent.com", "bridge-staging.claudeusercontent.com"]),
  le = "/devices/mcp";

function iHr(e) {
  let r;
  try {
    r = new URL(e)
  } catch {
    return !1
  }
  return r.protocol === "wss:" && r.username === "" && r.password === "" && P.has(r.hostname)
}

function qMe(e) {
  if ("url" in e && typeof e.url === "string" && Yy(e.url)) return !0;
  return Np(e)
}

function ue(e) {
  if (!Yy(e) || !URL.canParse(e)) return;
  return new URL(e).searchParams.get("mcp_url") || void 0
}
var Ne = new Set(["http:", "https:", "ws:", "wss:"]);

function bFo(e) {
  let r = ue(e);
  if (r === void 0 || !URL.canParse(r)) return;
  let n = new URL(r);
  return Ne.has(n.protocol) ? n.hostname.toLowerCase() : void 0
}

function qEe(e) {
  let r = ue(e);
  if (!r) return !1;
  try {
    let n = new URL(r);
    return P.has(n.hostname) && n.pathname === le
  } catch {
    return !1
  }
}
var X2s = [...P].map((e) => `https://${e}${le}`);

function KEe(e) {
  if (!("url" in e) || typeof e.url !== "string") return;
  try {
    let r = new URL(e.url);
    return r.search = "", r.username = "", r.password = "", r.hash = "", r.toString().replace(/\/$/, "")
  } catch {
    return
  }
}

function t$(e) {
  return e ? an(e) : void 0
}

function J2s(e) {
  if (!URL.canParse(e)) return;
  let r = new URL(e);
  if (r.origin === "null") return;
  return r.pathname !== "/" || r.search !== "" || r.hash !== "" ? `${r.origin}/\u2026` : r.origin
}

function Y() {
  return process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL
}

function G() {
  return process.env.SESSION_INGRESS_URL !== void 0
}

function K() {
  let e = process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
  if (e === "1" || !e) return e ? "child" : void 0;
  if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && Fe(process.env.CLAUDE_CODE_REMOTE)) {
    delete process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
    return
  }
  return "descendant"
}

function Z() {
  return [process.env.CLAUDE_CODE_REMOTE_SESSION_ID, process.env.CLAUDE_CODE_SESSION_ID].filter((e) => e !== void 0 && H4(e))
}

function X() {
  return Fe(process.env.CLAUDE_CODE_REMOTE) && process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted"
}

function QWe(e) {
  return "url" in e ? e.url : null
}

function vQe(e) {
  if (e.type !== void 0 && e.type !== "stdio") return null;
  let r = e;
  return [r.command, ...r.args ?? []]
}

function SFo(e) {
  if (!p.some((r) => e.includes(r))) return e;
  try {
    return new URL(e).searchParams.get("mcp_url") || e
  } catch {
    return e
  }
}

function Ule(e) {
  return e.type ?? ("command" in e ? "stdio" : "unknown")
}

function _5n(e) {
  let {
    authoredUnexpanded: r,
    expanded: n,
    cliOwned: t
  } = e, s = e.detail ?? "endpoint";
  if (r) {
    let i = QWe(r);
    if (i) {
      if (s === "endpoint") return D0e(i);
      if (He(i)) return J(i);
      return Q(i) ?? J(i)
    }
    let a = vQe(r);
    if (a) return s === "endpoint" ? D0e(a.join(" ")) : void 0;
    return s === "endpoint" ? Ule(r) : void 0
  }
  let o = QWe(n);
  if (o) {
    let i = t && Yy(o) ? SFo(o) : o,
      a = Q(i);
    if (a !== void 0) return a
  }
  return s === "endpoint" ? Ule(n) : void 0
}

function Q(e) {
  try {
    let r = new URL(e).origin;
    return r === "null" ? void 0 : r
  } catch {
    return
  }
}

function Zcn(e, r = e) {
  let n = (i) => {
      let a = e.length;
      for (let l of ["/", "?", "#", "\\"]) {
        let d = r.indexOf(l, i);
        if (d !== -1 && d < a) a = d
      }
      return a
    },
    t = r.indexOf("://"),
    s = t !== -1 && t < n(0) && /^[A-Za-z][A-Za-z0-9+.-]*$/.test(r.slice(0, t)) ? t + 3 : 0,
    o = n(s);
  return {
    scheme: e.slice(0, s),
    authority: e.slice(s, o),
    rest: e.slice(o)
  }
}

function He(e) {
  return Zcn(e, Zpn(e)).authority.includes("${")
}

function J(e) {
  let r = Zpn(e),
    {
      scheme: n,
      authority: t
    } = Zcn(r),
    s = n.length,
    o = s + t.length;
  if (r.includes("@", o)) return D0e(e.slice(0, s)) + "[unparseable-authority]";
  let i = t.lastIndexOf("@"),
    a = e.slice(i === -1 ? s : s + i + 1, o);
  if (a === "") return;
  return D0e(e.slice(0, s) + a)
}
export {
  L2s,
  N2s,
  Oyt,
  QUt,
  GMe,
  Ft,
  r5n,
  $ge,
  Np,
  JWe,
  o5n,
  s5n,
  i5n,
  ZUt,
  eBt,
  a5n,
  Ss,
  _Qe,
  Iyt,
  F2s,
  l5,
  Xcn,
  l5n,
  Jcn,
  VEe,
  Uge,
  Myt,
  H2s,
  Dyt,
  d5n,
  tBt,
  pFo,
  c5n,
  u5n,
  $2s,
  U2s,
  nBt,
  p5n,
  bQe,
  fFo,
  mFo,
  oHr,
  B2s,
  VMe,
  j2s,
  gFo,
  Qcn,
  Lyt,
  Nyt,
  W2s,
  z2s,
  lm,
  hFo,
  Yy,
  f5n,
  G2s,
  V2s,
  m5n,
  q2s,
  yFo,
  SQe,
  _Fo,
  wQe,
  g5n,
  sHr,
  Fyt,
  K2s,
  h5n,
  Y2s,
  Hyt,
  y5n,
  iHr,
  qMe,
  bFo,
  qEe,
  X2s,
  KEe,
  t$,
  J2s,
  QWe,
  vQe,
  SFo,
  Ule,
  _5n,
  Zcn
};
