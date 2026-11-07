// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { YRt, pYt, mYt, fge, F8, XRt, V8r, z0, gYt, S3e, K8r, yYt, q8r, Z8o } from "B:/~BUN/root/chunk-w089myk0.js";
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de, x7, ka, Qv } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { We, R, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Ent } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { _, ee, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ae } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Zd } from "B:/~BUN/root/chunk-3vtkd50k.js";
import { ba } from "B:/~BUN/root/chunk-wthaftk0.js";
import { Bs, Kn } from "B:/~BUN/root/chunk-gvasf6q6.js";
import { FU, HU } from "B:/~BUN/root/chunk-hacd8gcc.js";
import { GOr, qx, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
import { fte, i_t, CV, Xfe, KD, ha } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { _e } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { Uz, O4, Gm } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { yve } from "B:/~BUN/root/chunk-zqf91de4.js";
import { FB } from "B:/~BUN/root/chunk-s7zmwmdt.js";
import { YC } from "B:/~BUN/root/chunk-27h4st9h.js";
import { eze, k_r, v_r, h7t, xZ } from "B:/~BUN/root/chunk-1tbewxs3.js";
import { NB } from "B:/~BUN/root/chunk-7jbamvvk.js";
import { Ng, lYt } from "B:/~BUN/root/chunk-j6qn83yk.js";
import { Tve, Bir, mx, Mo, UB, BB } from "B:/~BUN/root/chunk-4rgskab2.js";
import { For, U8r, B8r, Hor, G8o } from "B:/~BUN/root/chunk-f7krwhvr.js";
import { Fkn, Uor, Bor, Hkn, dve, Gor, Vor, Kor } from "B:/~BUN/root/chunk-re62m27y.js";
import { Yor } from "B:/~BUN/root/chunk-t24nmad3.js";
import { Wkn, Xat, m1e } from "B:/~BUN/root/chunk-5d6w0m6e.js";
import { tV, Zi } from "B:/~BUN/root/chunk-r2kdqtaa.js";
import { uqe } from "B:/~BUN/root/chunk-9e7wny6c.js";
import { kn } from "B:/~BUN/root/chunk-t7d2hp9h.js";
import { o, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { randomBytes as rt, randomUUID as it } from "crypto";
import { createServer as nt } from "http";
import { join as st } from "path";
import { parse as ot } from "url";
var Ke = 30000,
  grant_type = "urn:ietf:params:oauth:grant-type:token-exchange",
  grant_type_2 = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  requested_token_type = "urn:ietf:params:oauth:token-type:id-jag",
  subject_token_type = "urn:ietf:params:oauth:token-type:id_token";
function Me(e) {
  return (t, n) => {
    let r = AbortSignal.timeout(Ke),
      signal = e ? AbortSignal.any([r, e]) : r;
    return fetch(t, {
      ...n,
      ...ba({
        url: String(t)
      }),
      signal: signal
    }).catch(S => BB(S, t));
  };
}
var le = Me();
function re(e) {
  try {
    return new URL(e).href.replace(/\/$/, "");
  } catch {
    return e.replace(/\/$/, "");
  }
}
class XaaTokenExchangeError extends Error {
  shouldClearIdToken;
  constructor(e, t) {
    super(e);
    this.name = "XaaTokenExchangeError", this.shouldClearIdToken = t;
  }
}
var Ve = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function se(e) {
  return (typeof e === "string" ? e : _(e)).replace(Ve, (n, r) => `"${r}":"[REDACTED]"`);
}
var Je = p(() => u({
    access_token: o().optional(),
    issued_token_type: o().optional(),
    expires_in: uqe().optional(),
    scope: o().optional()
  })),
  Ye = p(() => u({
    access_token: o().min(1),
    token_type: o().default("Bearer"),
    expires_in: uqe().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }));
async function Ze(e, t) {
  let n;
  try {
    n = await K8r(e, void 0, t?.fetchFn ?? le);
  } catch (error) {
    if (We(error)) throw error;
    let s = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : void 0;
    throw Error(`XAA: PRM discovery failed for ${Mo(e)} (${s ? `HTTP ${s}` : error instanceof Error ? error.name : typeof error})`);
  }
  if (!n.resource || !n.authorization_servers?.[0]) throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (re(n.resource) !== re(e)) throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${Mo(e)}, got ${Mo(n.resource)}`);
  return {
    resource: n.resource,
    authorization_servers: n.authorization_servers
  };
}
async function Qe(e, t) {
  let n;
  try {
    n = await yYt(e, {
      fetchFn: t?.fetchFn ?? le,
      skipIssuerValidation: !0
    });
  } catch (error) {
    if (We(error)) throw error;
    let s = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : void 0;
    throw new R(`XAA: AS metadata discovery failed (${s ? `HTTP ${s}` : error instanceof Error ? error.name : typeof error})`, "XAA: AS metadata discovery failed");
  }
  if (!n?.issuer || !n.token_endpoint) throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${Mo(e)}`);
  if (re(n.issuer) !== re(e)) throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${Mo(e)}, got ${Mo(n.issuer)}`);
  if (!URL.canParse(n.token_endpoint) || new URL(n.token_endpoint).protocol !== "https:") throw Error(`XAA: refusing non-HTTPS token endpoint: ${Mo(n.token_endpoint)}`);
  return {
    issuer: n.issuer,
    token_endpoint: n.token_endpoint,
    grant_types_supported: n.grant_types_supported,
    token_endpoint_auth_methods_supported: n.token_endpoint_auth_methods_supported
  };
}
async function et(e) {
  let t = e.fetchFn ?? le,
    n = new URLSearchParams({
      grant_type: grant_type,
      requested_token_type: requested_token_type,
      audience: e.audience,
      resource: e.resource,
      subject_token: e.idToken,
      subject_token_type: subject_token_type,
      client_id: e.clientId
    });
  if (e.clientSecret) n.set("client_secret", e.clientSecret);
  let r = await t(e.tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: n
  });
  if (!r.ok) {
    let A = se(await r.text()).slice(0, 200),
      h = r.status < 500;
    throw new XaaTokenExchangeError(`XAA: token exchange failed: HTTP ${r.status}: ${A}`, h);
  }
  let s;
  try {
    s = await r.json();
  } catch {
    throw new XaaTokenExchangeError(`XAA: token exchange returned non-JSON (captive portal?) at ${Mo(e.tokenEndpoint)}`, !1);
  }
  let S = Je().safeParse(s);
  if (!S.success) throw new XaaTokenExchangeError(`XAA: token exchange response did not match expected shape: ${se(s)}`, !0);
  let a = S.data;
  if (!a.access_token) throw new XaaTokenExchangeError(`XAA: token exchange response missing access_token: ${se(a)}`, !0);
  if (a.issued_token_type !== requested_token_type) throw new XaaTokenExchangeError(`XAA: token exchange returned unexpected issued_token_type: ${a.issued_token_type}`, !0);
  return {
    jwtAuthGrant: a.access_token,
    expiresIn: a.expires_in,
    scope: a.scope
  };
}
async function tt(e) {
  let t = e.fetchFn ?? le,
    n = e.authMethod ?? "client_secret_basic",
    r = new URLSearchParams({
      grant_type: grant_type_2,
      assertion: e.assertion
    }),
    headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
  if (n === "client_secret_basic") {
    let h = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
    headers.Authorization = `Basic ${h}`, Ng().record(h);
  } else r.set("client_id", e.clientId), r.set("client_secret", e.clientSecret);
  Ng().record(e.clientSecret), Ng().record(e.assertion);
  let S = await t(e.tokenEndpoint, {
    method: "POST",
    headers: headers,
    body: r
  });
  if (!S.ok) {
    let h = se(await S.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${S.status}: ${h}`);
  }
  let a;
  try {
    a = await S.json();
  } catch {
    throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${Mo(e.tokenEndpoint)}`);
  }
  let A = Ye().safeParse(a);
  if (!A.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${se(a)}`);
  return A.data;
}
async function Ae(e, t, n = "xaa", r) {
  let fetchFn = Me(r);
  ae(n, `XAA: discovering PRM for ${Mo(e)}`);
  let S = await Ze(e, {
    fetchFn: fetchFn
  });
  ae(n, `XAA: discovered resource=${Mo(S.resource)} ASes=[${S.authorization_servers.map(Mo).join(", ")}]`);
  let pinnedAuthorizationServer = t.pinnedAuthorizationServer,
    A = pinnedAuthorizationServer === void 0 ? S.authorization_servers : S.authorization_servers.filter(item => re(item) === re(pinnedAuthorizationServer));
  if (pinnedAuthorizationServer !== void 0 && A.length === 0) throw new R(`XAA: authorization server changed: signed in with ${Mo(pinnedAuthorizationServer)}, server now names [${S.authorization_servers.map(Mo).join(", ")}]. If this move is expected, run \`claude mcp remove\` for this server and add it again with its client secret.`, "XAA: authorization server changed");
  let h,
    y = [];
  for (let F of A) {
    let P;
    try {
      P = await Qe(F, {
        fetchFn: fetchFn
      });
    } catch (error) {
      if (r?.aborted) throw error;
      y.push(`${Mo(F)}: ${error instanceof Error ? error.message : String(error)}`);
      continue;
    }
    if (P.grant_types_supported && !P.grant_types_supported.includes(grant_type_2)) {
      y.push(`${Mo(F)}: does not advertise jwt-bearer grant (supported: ${P.grant_types_supported.join(", ")})`);
      continue;
    }
    h = P;
    break;
  }
  if (!h) throw new R(`XAA: no authorization server supports jwt-bearer. Tried: ${y.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${A.length})`);
  let token_endpoint_auth_methods_supported = h.token_endpoint_auth_methods_supported,
    authMethod = token_endpoint_auth_methods_supported && !token_endpoint_auth_methods_supported.includes("client_secret_basic") && token_endpoint_auth_methods_supported.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
  ae(n, `XAA: AS issuer=${Mo(h.issuer)} token_endpoint=${Mo(h.token_endpoint)} auth_method=${authMethod}`), ae(n, "XAA: exchanging id_token for ID-JAG at IdP");
  let T = await et({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: h.issuer,
    resource: S.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: fetchFn
  });
  ae(n, "XAA: ID-JAG obtained"), ae(n, "XAA: exchanging ID-JAG for access_token at AS");
  let E = await tt({
    tokenEndpoint: h.token_endpoint,
    assertion: T.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: authMethod,
    fetchFn: fetchFn
  });
  return ae(n, "XAA: access_token obtained"), {
    ...E,
    authorizationServerUrl: h.issuer
  };
}
var at = 30000,
  ct = 500,
  Ie = 600000,
  dt = new Set([...O4, ...Uz, "ETIMEDOUT"]);
function ut(e) {
  if (We(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = Gm(e);
  return t !== null && dt.has(t.code);
}
function we(e) {
  let t = e;
  return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues);
}
var ht = new Set(Object.values(fge)),
  lt = ["authorization_pending", "expired_token", "slow_down"],
  ft = [...Object.values(fge), ...lt];
function vaa(e) {
  let t = ft.find(item => item === e);
  return de(t) ?? b("other");
}
function Eaa(e, t) {
  let n = t instanceof Error ? `${e}
${t.message}` : e;
  if (t instanceof IssuerEchoCrossOriginError) return "issuer_echo_denied";
  if (t instanceof XRt) return t.kind === "metadata" ? "issuer_echo_mismatch" : "issuer_response_mismatch";
  if (t instanceof V8r) return "dcr_rejected";
  if (n.includes("dynamic client registration") || t instanceof F8 && t.code === "invalid_client_metadata") return "dcr_failed";
  if (n.includes("trying to load") && n.includes("metadata") || n.includes("Incompatible auth server")) return "discovery_failed";
  if (t instanceof F8) return "dcr_rejected";
  if (n.includes("Issuer mismatch in authorization server metadata")) return "issuer_echo_mismatch";
  if (n.includes("Issuer mismatch in authorization response")) return "issuer_response_mismatch";
  let r = k(t) ?? k(t instanceof Error ? t.cause : void 0);
  if (r && i_t.has(r)) return "network_failed";
  return "sdk_auth_failed";
}
var ye = 5;
function Bui(e) {
  return Mo(e.origin + e.pathname) + Bir(e);
}
var pt = new Set(["invalid_refresh_token", "expired_refresh_token", "token_expired"]);
async function jui(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    n;
  try {
    n = ee(t);
  } catch {
    return new Response(t, e);
  }
  if (pYt.safeParse(n).success) return new Response(t, e);
  let r = mYt.safeParse(n);
  if (!r.success) return new Response(t, e);
  let s = pt.has(r.data.error) ? {
    error: "invalid_grant",
    error_description: r.data.error_description ?? `Server returned non-standard error code: ${r.data.error}`
  } : r.data;
  return new Response(_(s), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers
  });
}
function Mkn() {
  return async (e, t) => {
    try {
      return await Pe(e, t);
    } catch (error) {
      if (t?.signal?.aborted || !ut(error)) throw error;
      return await J(ct, t?.signal ?? void 0), await Pe(e, t);
    }
  };
}
async function Pe(e, t) {
  let signal_2 = AbortSignal.timeout(at),
    r = t?.method?.toUpperCase() === "POST",
    s = ba({
      url: String(e)
    });
  if (!t?.signal) {
    let h;
    try {
      h = await fetch(e, {
        ...t,
        ...s,
        signal: signal_2
      });
    } catch (error) {
      BB(error, e);
    }
    return r ? jui(h) : h;
  }
  let abortController = new AbortController(),
    a = () => abortController.abort();
  t.signal.addEventListener("abort", a), signal_2.addEventListener("abort", a);
  let A = () => {
    t.signal?.removeEventListener("abort", a), signal_2.removeEventListener("abort", a);
  };
  if (t.signal.aborted) abortController.abort();
  try {
    let h = await fetch(e, {
      ...t,
      ...s,
      signal: abortController.signal
    });
    return A(), r ? jui(h) : h;
  } catch (error) {
    A(), BB(error, e);
  }
}
async function pe(serverName, t, n) {
  let {
      configuredMetadataUrl: configuredMetadataUrl,
      fetchFn: fetchFn_2,
      resourceMetadataUrl: resourceMetadataUrl,
      serverConfigForAnalytics: a
    } = n ?? {},
    fetchFn_3 = fetchFn_2 ?? Mkn();
  if (configuredMetadataUrl) {
    if (!configuredMetadataUrl.startsWith("https://")) throw Error(`authServerMetadataUrl must use https:// (got: ${Mo(configuredMetadataUrl)})`);
    let y = await fetchFn_3(configuredMetadataUrl, {
      headers: {
        Accept: "application/json"
      }
    });
    if (y.ok) {
      let w;
      try {
        w = await y.json();
      } catch {
        throw Error(`Configured auth server metadata at ${Mo(configuredMetadataUrl)} is not valid JSON`);
      }
      return YRt.parse(w);
    }
    throw Error(`HTTP ${y.status} fetching configured auth server metadata from ${Mo(configuredMetadataUrl)}`);
  }
  try {
    let {
      authorizationServerUrl: y,
      authorizationServerMetadata: authorizationServerMetadata
    } = await q8r(t, {
      fetchFn: fetchFn_3,
      ...(resourceMetadataUrl && {
        resourceMetadataUrl: resourceMetadataUrl
      }),
      skipIssuerMetadataValidation: !0
    });
    if (authorizationServerMetadata) return Lor({
      serverName: serverName,
      site: "rfc9728_chain",
      expectedIssuer: y,
      receivedIssuer: authorizationServerMetadata.issuer,
      serverConfig: a
    }), authorizationServerMetadata;
  } catch (error) {
    if (error instanceof IssuerEchoCrossOriginError) throw error;
    ae(serverName, `RFC 9728 discovery failed, falling back: ${UB(error, t)}`);
  }
  let h = new URL(t);
  if (h.pathname === "/") return;
  try {
    let y = await yYt(h, {
      fetchFn: fetchFn_3,
      skipIssuerValidation: !0
    });
    if (y) Lor({
      serverName: serverName,
      site: "legacy_path_fallback",
      expectedIssuer: h.href,
      receivedIssuer: y.issuer,
      serverConfig: a
    });
    return y;
  } catch (error) {
    if (error instanceof IssuerEchoCrossOriginError) throw error;
    ae(serverName, `Path-aware auth server discovery failed: ${UB(error, t)}`);
    return;
  }
}
class IssuerEchoCrossOriginError extends R {
  expected;
  received;
  constructor(e, t) {
    super(`Issuer echo cross-origin mismatch (RFC 8414 \xA73.3): expected ${_(e)}, received ${_(t)}`, "issuer echo cross-origin mismatch (RFC 8414 \xA73.3)", "issuer_echo_denied");
    this.expected = e;
    this.received = t;
    this.name = "IssuerEchoCrossOriginError";
  }
}
function fe() {
  try {
    return v("tengu_mcp_issuer_strict_echo", !1) === !0;
  } catch {
    return !1;
  }
}
function _t(e, t) {
  return t === e || e.endsWith("/") && t === e.slice(0, -1);
}
function me(e) {
  try {
    let t = new URL(e);
    if ((t.protocol === "https:" || t.protocol === "http:") && t.origin !== "null") return t;
  } catch {}
  return;
}
function mt(e, t) {
  let n = me(e),
    r = me(t);
  if (!n || !r) return "unparseable";
  if (n.username !== "" || n.password !== "" || r.username !== "" || r.password !== "" || r.search !== "" || r.hash !== "") return "cross_origin";
  return n.origin === r.origin ? "same_origin" : "cross_origin";
}
function vt(e, t) {
  let n = me(e),
    r = me(t);
  if (!n || !r) return [];
  let s = [];
  if (n.protocol !== r.protocol) s.push("scheme");
  if (n.username !== r.username || n.password !== r.password) s.push("userinfo");
  if (n.hostname !== r.hostname) s.push("host");
  if (n.port !== r.port) s.push("port");
  if (n.pathname !== r.pathname) s.push("path");
  if (n.search !== r.search) s.push("query");
  if (n.hash !== r.hash) s.push("fragment");
  if (s.length === 0) s.push("normalization_only");
  return s;
}
function Lor({
  serverName: serverName_2,
  site: site,
  expectedIssuer: expectedIssuer,
  receivedIssuer: receivedIssuer,
  serverConfig: serverConfig
}) {
  if (expectedIssuer === void 0) return;
  if (receivedIssuer !== void 0 && _t(expectedIssuer, receivedIssuer)) return;
  let S = receivedIssuer === void 0 ? "unparseable" : mt(expectedIssuer, receivedIssuer),
    a = fe() ? "enforce" : "observe",
    A = a === "enforce" && S !== "same_origin";
  try {
    let h = receivedIssuer === void 0 ? ["issuer_missing"] : vt(expectedIssuer, receivedIssuer),
      mcpServerBaseUrl = serverConfig ? YC(serverConfig) : void 0,
      mcpServerName = serverConfig ? Qv(serverName_2, qx(serverName_2, serverConfig)) : void 0;
    l("tengu_mcp_oauth_issuer_echo_mismatch", {
      site: f(site),
      mode: f(a),
      originRelation: f(S),
      outcome: A ? b("denied") : b("proceeded"),
      ...(h.length > 0 && {
        mismatchFacets: ka(h)
      }),
      expectedIssuerHash: kn(expectedIssuer),
      ...(receivedIssuer !== void 0 && {
        receivedIssuerHash: kn(receivedIssuer)
      }),
      ...(mcpServerBaseUrl && {
        mcpServerBaseUrl: mcpServerBaseUrl
      }),
      ...(mcpServerName && {
        mcpServerName: mcpServerName
      })
    });
  } catch (error) {
    try {
      ae(serverName_2, `issuer-echo telemetry failed: ${d(error)}`);
    } catch {}
  }
  if (A) throw new IssuerEchoCrossOriginError(expectedIssuer, receivedIssuer);
}
class McpClientRegistrationDeferredError extends z0 {
  serverName;
  constructor(e) {
    super("Authentication required; client registration is deferred until the user authenticates");
    this.serverName = e;
    this.name = "McpClientRegistrationDeferredError";
  }
}
class AuthenticationCancelledError extends Error {
  constructor() {
    super("Authentication was cancelled");
    this.name = "AuthenticationCancelledError";
  }
}
function Te(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}
function Ne(e) {
  let t = Te(e);
  return t === "http://127.0.0.1" || t === "http://localhost";
}
function xe(e) {
  if (!e?.clientId || !e.redirectUri || !Ne(e.redirectUri)) return;
  let t = Number(new URL(e.redirectUri).port);
  return t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === Xat(t) ? t : void 0;
}
function Fe() {
  return i.MCP_OAUTH_CLIENT_METADATA_URL || Ent;
}
function $e(e) {
  if (!Ne(e)) return !1;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return !1;
  }
}
function gt(e) {
  return e !== void 0 && (e === Ent || e === Fe());
}
function D_a(e) {
  return bt().oauthCallbackSubmitters.get(e);
}
function L_a(e, t) {
  let activeOAuthFlows = bt().activeOAuthFlows;
  activeOAuthFlows.set(e, t), t.finally(() => {
    if (activeOAuthFlows.get(e) === t) activeOAuthFlows.delete(e);
  }).catch(() => {});
}
function N_a(e) {
  return bt().activeOAuthFlows.get(e);
}
async function $8r(e, t) {
  let n = ha(e, t),
    r = (await Kn().readAsync())?.mcpOAuth?.[n];
  if (!r || r.accessToken || r.refreshToken || xZ(r.discoveryState)) return;
  try {
    await Kn().mutate(s => {
      let S = s.mcpOAuth?.[n];
      if (!S || S.accessToken || S.refreshToken || xZ(S.discoveryState)) return s;
      let mcpOAuth = {
        ...s.mcpOAuth
      };
      return delete mcpOAuth[n], {
        ...s,
        mcpOAuth: mcpOAuth
      };
    });
  } catch (error) {
    ae(e, `clear tokenless stub failed: ${d(error)}`);
  }
}
async function De({
  serverName: serverName_3,
  endpoint: endpoint,
  token: token,
  tokenTypeHint: tokenTypeHint,
  clientId: clientId,
  clientSecret: clientSecret,
  accessToken: accessToken,
  authMethod: authMethod_2 = "client_secret_basic",
  configuredHeaders: configuredHeaders
}) {
  let uRLSearchParams = new URLSearchParams();
  uRLSearchParams.set("token", token), uRLSearchParams.set("token_type_hint", tokenTypeHint);
  let headers_2 = {
      ...configuredHeaders,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    U = Object.keys(configuredHeaders).length > 0 ? {
      beforeRedirect: Vor(endpoint)
    } : {};
  if (clientId && clientSecret) {
    if (authMethod_2 === "client_secret_post") uRLSearchParams.set("client_id", clientId), uRLSearchParams.set("client_secret", clientSecret);else {
      let T = Buffer.from(`${encodeURIComponent(clientId)}:${encodeURIComponent(clientSecret)}`).toString("base64");
      headers_2.Authorization = `Basic ${T}`, Ng().record(T);
    }
  } else if (clientId) uRLSearchParams.set("client_id", clientId);else ae(serverName_3, `No client_id available for ${tokenTypeHint} revocation - server may reject`);
  try {
    await Wt.post(endpoint, uRLSearchParams, {
      headers: headers_2,
      ...U
    }), ae(serverName_3, `Successfully revoked ${tokenTypeHint}`);
  } catch (error) {
    if (Wt.isAxiosError(error) && error.response?.status === 401 && accessToken) ae(serverName_3, `Got 401, retrying ${tokenTypeHint} revocation with Bearer auth`), uRLSearchParams.delete("client_id"), uRLSearchParams.delete("client_secret"), await Wt.post(endpoint, uRLSearchParams, {
      headers: {
        ...headers_2,
        Authorization: `Bearer ${accessToken}`
      },
      ...U
    }), ae(serverName_3, `Successfully revoked ${tokenTypeHint} with Bearer auth`);else throw error;
  }
}
async function F_a(e, t) {
  let r = (await Kn().readAsync())?.mcpOAuth?.[ha(e, t)];
  if (!r?.accessToken && !r?.refreshToken) return;
  return {
    accessToken: r.accessToken || void 0,
    refreshToken: r.refreshToken,
    clientId: r.clientId,
    clientSecret: r.clientSecret,
    ...(r.discoveryState && {
      discoveryState: eze(r.discoveryState)
    })
  };
}
async function ze(serverName_4, serverConfigForAnalytics, n) {
  let r = Ng();
  r.record(n.accessToken), r.record(n.refreshToken), r.record(n.clientSecret);
  let s;
  try {
    let S = n.discoveryState?.authorizationServerUrl ?? serverConfigForAnalytics.url,
      a = await pe(serverName_4, S, {
        configuredMetadataUrl: xZ(n.discoveryState) ? void 0 : serverConfigForAnalytics.oauth?.authServerMetadataUrl,
        fetchFn: dve(serverName_4, serverConfigForAnalytics, Mkn()),
        serverConfigForAnalytics: serverConfigForAnalytics
      });
    if (!a) ae(serverName_4, "No OAuth metadata found"), s = "no_metadata";else {
      let A = "revocation_endpoint" in a ? a.revocation_endpoint : null;
      if (!A) ae(serverName_4, "Server does not support token revocation"), s = "no_revocation_endpoint";else {
        let endpoint_2 = String(A),
          configuredHeaders_2 = await Gor(serverName_4, serverConfigForAnalytics, endpoint_2),
          w = ("revocation_endpoint_auth_methods_supported" in a ? a.revocation_endpoint_auth_methods_supported : void 0) ?? ("token_endpoint_auth_methods_supported" in a ? a.token_endpoint_auth_methods_supported : void 0),
          authMethod_3 = w && !w.includes("client_secret_basic") && w.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
        if (ae(serverName_4, `Revoking tokens via ${Mo(endpoint_2)} (${authMethod_3})`), n.refreshToken) try {
          await De({
            serverName: serverName_4,
            endpoint: endpoint_2,
            token: n.refreshToken,
            tokenTypeHint: "refresh_token",
            clientId: n.clientId,
            clientSecret: n.clientSecret,
            accessToken: n.accessToken,
            authMethod: authMethod_3,
            configuredHeaders: configuredHeaders_2
          });
        } catch (error) {
          ae(serverName_4, `Failed to revoke refresh token: ${d(error)}`), s = "server_revoke_failed";
        }
        if (n.accessToken) try {
          await De({
            serverName: serverName_4,
            endpoint: endpoint_2,
            token: n.accessToken,
            tokenTypeHint: "access_token",
            clientId: n.clientId,
            clientSecret: n.clientSecret,
            accessToken: n.accessToken,
            authMethod: authMethod_3,
            configuredHeaders: configuredHeaders_2
          });
        } catch (error) {
          ae(serverName_4, `Failed to revoke access token: ${d(error)}`), s = "server_revoke_failed";
        }
      }
    }
  } catch (error) {
    ae(serverName_4, `Failed to revoke tokens: ${d(error)}`), s = error instanceof IssuerEchoCrossOriginError ? "issuer_echo_denied" : "server_revoke_failed";
  }
  return s;
}
async function H_a(e, t, n) {
  let r;
  try {
    let s = (await Kn().readAsync())?.mcpOAuth?.[ha(e, t)],
      S = {
        ...n,
        accessToken: n.accessToken && n.accessToken !== s?.accessToken ? n.accessToken : void 0,
        refreshToken: n.refreshToken && n.refreshToken !== s?.refreshToken ? n.refreshToken : void 0
      };
    if (!S.accessToken && !S.refreshToken) {
      ae(e, "No replaced tokens to revoke"), g("mcp_oauth_revoke");
      return;
    }
    r = await ze(e, t, S);
  } catch (error) {
    ae(e, `Failed to revoke replaced tokens: ${d(error)}`), r = "server_revoke_failed";
  }
  if (r) c("mcp_oauth_revoke", r);else g("mcp_oauth_revoke");
}
async function $_a(serverName_5, t, {
  preserveStepUpState = !1
} = {}) {
  let r = Kn(),
    s = await KD();
  if (s === Bs) return ae(serverName_5, "Could not read the credential store to clear tokens"), m("mcp_oauth_revoke", "local_read_failed"), {
    cleared: !1,
    reason: "credential_store_failed"
  };
  let S = ha(serverName_5, t),
    a = s?.mcpOAuth?.[S],
    A;
  if (a?.accessToken || a?.refreshToken) A = await ze(serverName_5, t, {
    accessToken: a.accessToken || void 0,
    refreshToken: a.refreshToken,
    clientId: a.clientId,
    clientSecret: a.clientSecret,
    ...(a.discoveryState && {
      discoveryState: eze(a.discoveryState)
    })
  });else ae(serverName_5, "No tokens to revoke");
  let h = !1;
  try {
    if (preserveStepUpState && a && (a.stepUpScope || a.discoveryState || a.clientId)) {
      let y = await r.mutate(w => {
        let U = w.mcpOAuth?.[S];
        if (U?.accessToken !== a.accessToken || U?.clientId !== a.clientId) return w;
        return {
          ...w,
          mcpOAuth: {
            ...w.mcpOAuth,
            [S]: {
              serverName: serverName_5,
              serverUrl: t.url,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: void 0,
              ...(a.clientId && {
                clientId: a.clientId,
                ...(a.redirectUri && {
                  redirectUri: a.redirectUri
                }),
                ...(a.clientSecret !== void 0 && {
                  clientSecret: a.clientSecret
                })
              }),
              ...(a.stepUpScope && {
                stepUpScope: a.stepUpScope
              }),
              ...(a.discoveryState && {
                discoveryState: {
                  ...eze(a.discoveryState),
                  resourceMetadataUrl: a.discoveryState.resourceMetadataUrl,
                  tokenlessRejectedAt: a.discoveryState.tokenlessRejectedAt
                }
              })
            }
          }
        };
      });
      h = y.success, ae(serverName_5, y.success ? "Preserved step-up auth state across revocation" : `clear local tokens failed: ${y.warning ?? "storage write failed"}`);
    } else if (preserveStepUpState) h = (await zui(serverName_5, t)).success;else {
      let y = await GOr(r, w => {
        if (!w.mcpOAuth?.[S]) return w;
        let {
          [S]: U,
          ...mcpOAuth_2
        } = w.mcpOAuth;
        return {
          ...w,
          mcpOAuth: mcpOAuth_2
        };
      }, w => w.mcpOAuth?.[S] !== void 0);
      if (!y.confirmed && y.reason === "keychain_unreadable") return ae(serverName_5, "Could not read the keychain to clear tokens"), m("mcp_oauth_revoke", "keychain_unreadable"), {
        cleared: !1,
        reason: "keychain_unreadable"
      };
      h = y.confirmed;
    }
  } catch (error) {
    ae(serverName_5, `clear local tokens failed: ${d(error)}`);
  }
  if (!h) A ??= "local_clear_failed";
  if (NB(serverName_5), A) c("mcp_oauth_revoke", A);else g("mcp_oauth_revoke");
  return h ? {
    cleared: !0
  } : {
    cleared: !1,
    reason: "credential_store_failed"
  };
}
async function zui(e, t, n) {
  let r = ha(e, t),
    s,
    S = await Kn().mutate(a => {
      let A = a.mcpOAuth?.[r];
      if (!A) return a;
      let mcpOAuth_3 = {
        ...a.mcpOAuth
      };
      if (A.clientId && n?.preserveClientRegistration?.(A)) {
        if (!A.accessToken && !A.refreshToken) return a;
        mcpOAuth_3[r] = {
          ...A,
          accessToken: "",
          refreshToken: void 0,
          expiresAt: 0,
          scope: void 0
        }, s = "tokens";
      } else if (n?.keepXaaPin && xZ(A.discoveryState)) mcpOAuth_3[r] = {
        serverName: A.serverName,
        serverUrl: A.serverUrl,
        accessToken: "",
        expiresAt: 0,
        discoveryState: A.discoveryState
      }, s = "all";else delete mcpOAuth_3[r], s = "all";
      return {
        ...a,
        mcpOAuth: mcpOAuth_3
      };
    });
  if (s) ae(e, s === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens");
  return S;
}
function Le(e, t, n, r) {
  if (n?.success) return;
  let s = r ? "mutate_rejected" : "storage_write_failed",
    S = r ? d(r) : n?.warning ?? "storage write failed";
  ae(e, `Token persist failed: ${S}`);
  let mcpServerBaseUrl_2 = YC(t);
  l("tengu_mcp_oauth_token_persist_failed", {
    transportType: f(t.type),
    ...(mcpServerBaseUrl_2 && {
      mcpServerBaseUrl: mcpServerBaseUrl_2
    }),
    reason: f(s)
  });
}
async function oe(e, t) {
  let n = ha(e, t),
    r = await KD();
  if (r === Bs || t.oauth?.xaa && !r?.mcpOAuthClientConfig?.[n]) return Bs;
  return xZ(r?.mcpOAuth?.[n]?.discoveryState);
}
async function St(serverName_6, t, onAuthorizationUrl, abortSignal, skipBrowserOpen) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let S = Xfe();
  if (!S) throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
  let clientId_2 = t.oauth?.clientId;
  if (!clientId_2) throw Error(`XAA: server '${serverName_6}' needs an AS client_id. Re-add with --client-id.`);
  let clientSecret_2 = (await Gui(serverName_6, t))?.clientSecret;
  if (!clientSecret_2) {
    let T = ha(serverName_6, t),
      E = Object.keys((await Kn().readAsync())?.mcpOAuthClientConfig ?? {}),
      F = Tve(t.headers ?? {});
    throw ae(serverName_6, `XAA: secret lookup miss. wanted=${T} have=[${E.join(", ")}] configHeaders=${_(F)}`), Error(`XAA: AS client secret not found for '${serverName_6}'. Re-add with --client-secret.`);
  }
  if ((await oe(serverName_6, t)) === Bs) throw new fte(serverName_6);
  ae(serverName_6, "XAA: starting cross-app access flow");
  let idpClientSecret = await B8r(S.issuer),
    idTokenCacheHit = (await For(S.issuer)) !== void 0,
    U = "idp_login";
  try {
    let idpIdToken;
    try {
      idpIdToken = await G8o({
        idpIssuer: S.issuer,
        idpClientId: S.clientId,
        idpClientSecret: idpClientSecret,
        callbackPort: S.callbackPort,
        onAuthorizationUrl: onAuthorizationUrl,
        skipBrowserOpen: skipBrowserOpen,
        abortSignal: abortSignal
      });
    } catch (error) {
      if (abortSignal?.aborted) throw new AuthenticationCancelledError();
      throw error;
    }
    U = "discovery";
    let E = await Hor(S.issuer);
    U = "token_exchange", Ng().record(clientSecret_2);
    let pinnedAuthorizationServer_2 = await oe(serverName_6, t);
    if (pinnedAuthorizationServer_2 === Bs) throw new fte(serverName_6);
    let P;
    try {
      P = await Ae(t.url, {
        clientId: clientId_2,
        clientSecret: clientSecret_2,
        idpClientId: S.clientId,
        idpClientSecret: idpClientSecret,
        idpIdToken: idpIdToken,
        idpTokenEndpoint: E.token_endpoint,
        pinnedAuthorizationServer: pinnedAuthorizationServer_2
      }, serverName_6, abortSignal);
    } catch (error) {
      if (abortSignal?.aborted) throw new AuthenticationCancelledError();
      let M = d(error);
      if (error instanceof XaaTokenExchangeError) {
        if (error.shouldClearIdToken) await U8r(S.issuer), ae(serverName_6, "XAA: cleared cached id_token after token-exchange failure");
      } else if (M.includes("PRM discovery failed") || M.includes("AS metadata discovery failed") || M.includes("no authorization server supports jwt-bearer") || M.includes("authorization server changed")) U = "discovery";else if (M.includes("jwt-bearer")) U = "jwt_bearer";
      throw error;
    }
    let C = ha(serverName_6, t),
      I = Ng();
    I.record(P.access_token), I.record(P.refresh_token);
    let D, K;
    try {
      D = await Kn().mutate(O => {
        let M = O.mcpOAuth?.[C];
        return {
          ...O,
          mcpOAuth: {
            ...O.mcpOAuth,
            [C]: {
              ...M,
              serverName: serverName_6,
              serverUrl: t.url,
              accessToken: P.access_token,
              refreshToken: P.refresh_token ?? M?.refreshToken,
              expiresAt: P.expires_in != null ? Date.now() + P.expires_in * 1000 : void 0,
              scope: P.scope,
              clientId: clientId_2,
              clientSecret: clientSecret_2,
              discoveryState: h7t({
                previous: M?.discoveryState,
                issuedBy: P.authorizationServerUrl,
                interactiveSignIn: !0
              })
            }
          }
        };
      });
    } catch (error) {
      K = error;
    }
    if (D?.success) ae(serverName_6, "XAA: tokens saved");else Le(serverName_6, t, D, K);
    l("tengu_mcp_oauth_flow_success", {
      authMethod: b("xaa"),
      idTokenCacheHit: idTokenCacheHit
    }), g("mcp_oauth_flow");
  } catch (error) {
    if (error instanceof AuthenticationCancelledError) throw error;
    throw m("mcp_oauth_flow", "mcp_oauth_xaa_failed"), l("tengu_mcp_oauth_flow_failure", {
      authMethod: b("xaa"),
      xaaFailureStage: f(U),
      idTokenCacheHit: idTokenCacheHit
    }), error;
  }
}
async function z8o(e, serverConfigForAnalytics_2, n, r, s) {
  if (!URL.canParse(serverConfigForAnalytics_2.url)) {
    m("mcp_oauth_flow", "mcp_oauth_no_valid_url");
    let C = "configError" in serverConfigForAnalytics_2 && typeof serverConfigForAnalytics_2.configError === "string" ? serverConfigForAnalytics_2.configError : void 0;
    throw new R(C || "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.", "MCP OAuth refused: no valid server URL");
  }
  if (s?.redirectUriOnly) Yor(s.redirectUri, serverConfigForAnalytics_2);
  if (serverConfigForAnalytics_2.oauth?.xaa) {
    if (!CV()) throw Error(`XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`);
    l("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: b("xaa"),
      transportType: f(serverConfigForAnalytics_2.type),
      ...(YC(serverConfigForAnalytics_2) && {
        mcpServerBaseUrl: YC(serverConfigForAnalytics_2)
      })
    }), await St(e, serverConfigForAnalytics_2, n, r, s?.skipBrowserOpen);
    return;
  }
  let S = Kn(),
    a = ha(e, serverConfigForAnalytics_2),
    A = (await S.readAsync())?.mcpOAuth?.[a],
    scope = A?.stepUpScope,
    y = A?.discoveryState?.resourceMetadataUrl,
    w = xe(A),
    resourceMetadataUrl_2;
  if (y) try {
    resourceMetadataUrl_2 = new URL(y);
  } catch {
    ae(e, `Invalid cached resourceMetadataUrl: ${Mo(y)}`);
  }
  let T = {
      scope: scope,
      resourceMetadataUrl: resourceMetadataUrl_2
    },
    E = it(),
    F = Kor(serverConfigForAnalytics_2, s?.redirectUri);
  l("tengu_mcp_oauth_flow_start", {
    flowAttemptId: _e(E),
    isOAuthFlow: !0,
    transportType: f(serverConfigForAnalytics_2.type),
    ...F,
    ...(YC(serverConfigForAnalytics_2) && {
      mcpServerBaseUrl: YC(serverConfigForAnalytics_2)
    })
  });
  let P = !1;
  try {
    let C = serverConfigForAnalytics_2.oauth?.callbackPort,
      I = !!s?.redirectUri,
      D = I ? 0 : C ?? (await m1e(w)),
      K = s?.redirectUri ?? Xat(D);
    ae(e, I ? `Using custom redirectUri: ${Mo(K)} (no localhost listener)` : `Using redirect port: ${D}${C ? " (from config)" : w && D === w ? " (reusing registered port)" : ""}`);
    try {
      await zui(e, serverConfigForAnalytics_2, {
        preserveClientRegistration: j => D === xe(j) || j.redirectUri === K,
        keepXaaPin: !0
      });
    } catch (error) {
      ae(e, `clear stored credentials failed: ${d(error)}`);
    }
    let O = bt(),
      abortController_2 = new AbortController();
    if (!I) O.oauthCallbackListeners.get(D)?.abort(), O.oauthCallbackListeners.set(D, abortController_2);
    let W = new Lkn(e, serverConfigForAnalytics_2, K, !0, n, s?.skipBrowserOpen),
      ce = Boolean(serverConfigForAnalytics_2.oauth?.scopes || serverConfigForAnalytics_2.oauth?.authServerMetadataUrl);
    if (T.scope && !ce) W.markStepUpPending(T.scope);
    let fetchFn_4 = dve(e, serverConfigForAnalytics_2, Mkn());
    try {
      let j = await pe(e, serverConfigForAnalytics_2.url, {
        configuredMetadataUrl: serverConfigForAnalytics_2.oauth?.authServerMetadataUrl,
        fetchFn: fetchFn_4,
        resourceMetadataUrl: T.resourceMetadataUrl,
        serverConfigForAnalytics: serverConfigForAnalytics_2
      });
      if (j) W.setMetadata(j), ae(e, `Fetched OAuth metadata with scope: ${mx("scope", je(j) ?? "") || "NONE"}`);
    } catch (error) {
      if (error instanceof IssuerEchoCrossOriginError) throw error;
      ae(e, `Failed to fetch OAuth metadata: ${UB(error, serverConfigForAnalytics_2.url)}`);
    }
    let Q = await W.state(),
      L = null,
      z = null,
      X = null,
      Ce = null,
      V = () => {
        if (L) L.removeAllListeners(), L.on("error", () => {}), L.close(), L = null;
        if (z) clearTimeout(z), z = null;
        if (X) r?.removeEventListener("abort", X), abortController_2.signal.removeEventListener("abort", X), X = null;
        if (O.oauthCallbackListeners.get(D) === abortController_2) O.oauthCallbackListeners.delete(D);
        if (O.oauthCallbackSubmitters.get(e) === Ce) O.oauthCallbackSubmitters.delete(e);
        ae(e, "MCP OAuth server cleaned up");
      },
      {
        code: Ue,
        iss: iss
      } = await new Promise((j, He) => {
        let ue = !1,
          Re = (code, iss_2) => {
            if (ue) return;
            ue = !0, j({
              code: code,
              iss: iss_2
            });
          },
          Y = N => {
            if (ue) return;
            ue = !0, He(N);
          };
        if (X = () => {
          V(), Y(new AuthenticationCancelledError());
        }, r?.aborted || abortController_2.signal.aborted) {
          X();
          return;
        }
        r?.addEventListener("abort", X), abortController_2.signal.addEventListener("abort", X);
        {
          let N = H => {
            try {
              let B = new URL(H),
                te = B.searchParams.get("code"),
                Se = B.searchParams.get("state"),
                Z = B.searchParams.get("error"),
                ne = Wkn(B.searchParams.get("iss"));
              if (!te && !Z) return !1;
              if (Se !== Q) return ae(e, "Ignoring manual callback URL whose state belongs to a different flow"), !1;
              if (Z) {
                let he = B.searchParams.get("error_description") || "";
                return V(), Y(Error(`OAuth error: ${Z} - ${he}`)), !0;
              }
              if (!te) return !1;
              return ae(e, "Received auth code via manual callback URL"), V(), Re(te, ne), !0;
            } catch {
              return !1;
            }
          };
          Ce = N, O.oauthCallbackSubmitters.set(e, N), s?.onWaitingForCallback?.(N, D, Q);
        }
        let Oe = async () => {
          try {
            ae(e, "Starting SDK auth"), ae(e, `Server URL: ${Mo(serverConfigForAnalytics_2.url)}`);
            let N = await gYt(W, {
              serverUrl: serverConfigForAnalytics_2.url,
              scope: T.scope,
              resourceMetadataUrl: T.resourceMetadataUrl,
              fetchFn: fetchFn_4,
              skipIssuerMetadataValidation: !0
            });
            if (ae(e, `Initial auth result: ${N}`), N !== "REDIRECT") ae(e, `Unexpected auth result, expected REDIRECT: ${N}`);
          } catch (N) {
            ae(e, `SDK auth error: ${UB(N, serverConfigForAnalytics_2.url)}`), V(), Y(Object.assign(new R(`SDK auth failed: ${UB(N, serverConfigForAnalytics_2.url)}`, "SDK auth failed"), {
              cause: N
            }));
          }
        };
        if (I) Oe();else L = nt((N, H) => {
          let B = ot(N.url || "", !0);
          if (B.pathname === "/callback") {
            let te = B.query.code,
              state = B.query.state,
              Z = B.query.error,
              error_description = B.query.error_description,
              error_uri = B.query.error_uri,
              Be = Wkn(B.query.iss);
            if (state !== Q) {
              H.writeHead(400, {
                "Content-Type": "text/html"
              }), H.end(FB({
                ok: !1,
                heading: "Authentication failed",
                message: "Invalid state parameter. Close this tab and try again from Claude Code."
              }));
              return;
            }
            if (Z) {
              H.writeHead(200, {
                "Content-Type": "text/html"
              }), H.end(FB({
                ok: !1,
                heading: "Authentication failed",
                message: "Close this tab and try again from Claude Code.",
                detail: `${String(Z)}: ${error_description ?? ""}`
              })), V();
              let ke = `OAuth error: ${Z}`;
              if (error_description) ke += ` - ${error_description}`;
              if (error_uri) ke += ` (See: ${error_uri})`;
              Y(Error(ke));
              return;
            }
            if (te) H.writeHead(200, {
              "Content-Type": "text/html"
            }), H.end(FB({
              ok: !0,
              heading: "Authentication successful",
              message: "You can close this tab and return to Claude Code."
            })), V(), Re(te, Be);
          } else H.writeHead(404, {
            "Content-Type": "text/html"
          }), H.end(FB({
            ok: !1,
            heading: "Not found",
            message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${Mo(K)}.`
          }));
        }), L.on("error", N => {
          if (V(), N.code === "EADDRINUSE") {
            let H = x() === "windows" ? `netstat -ano | findstr :${D}` : `lsof -ti:${D} -sTCP:LISTEN`;
            Y(new R(`OAuth callback port ${D} is already in use \u2014 another process may be holding it. ` + `Run \`${H}\` to find it.`, "OAuth callback port already in use"));
          } else Y(new R(`OAuth callback server failed: ${N.message}`, "OAuth callback server failed"));
        }), L.listen(D, "127.0.0.1", () => void Oe()), L.unref();
        z = setTimeout((N, H) => {
          N(), H(new R("Authentication timeout", "Authentication timeout"));
        }, 300000, V, Y), z.unref();
      });
    P = !0, ae(e, "Completing auth flow with authorization code"), Ng().record(Ue);
    let ge = await gYt(W, {
      serverUrl: serverConfigForAnalytics_2.url,
      authorizationCode: Ue,
      iss: iss,
      resourceMetadataUrl: T.resourceMetadataUrl,
      fetchFn: dve(e, serverConfigForAnalytics_2, Mkn()),
      skipIssuerMetadataValidation: !0
    });
    if (ae(e, `Auth result: ${ge}`), ge === "AUTHORIZED") {
      let j = await W.tokens().catch(() => {
        return;
      });
      if (ae(e, `Tokens after auth: ${j ? "Present" : "Missing"}`), j) ae(e, `Token expires_in: ${j.expires_in}`);
      l("tengu_mcp_oauth_flow_success", {
        flowAttemptId: _e(E),
        transportType: f(serverConfigForAnalytics_2.type),
        ...F,
        ...(YC(serverConfigForAnalytics_2) && {
          mcpServerBaseUrl: YC(serverConfigForAnalytics_2)
        })
      }), g("mcp_oauth_flow");
    } else throw new R("Unexpected auth result: " + ge, "Unexpected auth result");
  } catch (C) {
    ae(e, `Error during auth completion: ${UB(C, serverConfigForAnalytics_2.url)}`);
    let I = "unknown",
      D,
      K,
      O = d(C),
      M = C instanceof Error ? C.cause : void 0;
    if (C instanceof AuthenticationCancelledError) I = "cancelled";else if (C instanceof IssuerEchoCrossOriginError || M instanceof IssuerEchoCrossOriginError) I = "issuer_echo_denied";else if (C instanceof XRt || M instanceof XRt) I = [C, M].find(item => item instanceof XRt)?.kind === "metadata" ? "issuer_echo_mismatch" : "issuer_response_mismatch";else if (/AADSTS\d/.test(O)) I = "entra_specific";else if (/redirect[_ ]uri/i.test(O)) I = "redirect_uri_mismatch";else if (P && (we(C) || we(M))) I = "token_response_schema_rejected";else if (P) I = "token_exchange_failed";else if (O.includes("Authentication timeout")) I = "timeout";else if (O.includes("OAuth error:")) I = "provider_denied";else if (O.includes("already in use") || O.includes("EADDRINUSE") || O.includes("callback server failed") || O.includes("No available port")) I = "port_unavailable";else if (O.includes("SDK auth failed")) I = Eaa(O, M);
    let W = [M, C].find(item => item instanceof V8r),
      ce = (M instanceof Error ? M : C instanceof Error ? C : null)?.message.match(/^HTTP (\d{3})\b/);
    if (W) K = W.status;else if (ce) K = Number(ce[1]);
    if (M instanceof F8) D = M.code;
    if (C instanceof F8) {
      if (D = C.code, C.code === "invalid_client" || C.code === "unauthorized_client") {
        let L = ha(e, serverConfigForAnalytics_2);
        try {
          await Kn().mutate(z => {
            let X = z.mcpOAuth?.[L];
            if (!X) return z;
            return {
              ...z,
              mcpOAuth: {
                ...z.mcpOAuth,
                [L]: {
                  ...X,
                  clientId: void 0,
                  clientSecret: void 0
                }
              }
            };
          });
        } catch (error) {
          ae(e, `clear clientId failed: ${d(error)}`);
        }
      }
    }
    if (!/^OAuth error: access_denied(?: |$)/.test(O) && (I === "timeout" || O.includes("OAuth error:"))) {
      let L = ha(e, serverConfigForAnalytics_2);
      await Kn().mutate(z => {
        let X = z.mcpOAuth?.[L];
        if (!X?.clientId || X.accessToken || X.refreshToken || X.clientId !== A?.clientId) return z;
        return {
          ...z,
          mcpOAuth: {
            ...z.mcpOAuth,
            [L]: {
              ...X,
              clientId: void 0,
              clientSecret: void 0
            }
          }
        };
      }).catch(z => ae(e, `drop clientId failed: ${d(z)}`));
    }
    if (I !== "cancelled") m("mcp_oauth_flow", "mcp_oauth_flow_failed");
    l("tengu_mcp_oauth_flow_error", {
      flowAttemptId: _e(E),
      reason: f(I),
      error_code: D === void 0 ? void 0 : vaa(D),
      http_status: x7(K),
      transportType: f(serverConfigForAnalytics_2.type),
      ...F,
      ...(YC(serverConfigForAnalytics_2) && {
        mcpServerBaseUrl: YC(serverConfigForAnalytics_2)
      })
    });
    let Q = UB(C, serverConfigForAnalytics_2.url);
    throw Q === d(C) ? C : Error(Q, {
      cause: C
    });
  }
}
function Nor(e, t) {
  return async (n, r) => {
    let s = await e(n, r);
    if (s.status === 401 || s.status === 403) t.sawAuthChallenge = !0;
    if (t.noteServerAnswer(n, s.status === 401 || s.status === 403 && S3e(s).error === "insufficient_scope"), s.status === 401 || s.status === 403) t.noteAuthRejection(n, s.status, new Headers(r?.headers).get("authorization"));
    if (!new Headers(r?.headers).has("authorization")) return s;
    if (s.status === 403) {
      let {
        error: error_2,
        scope: scope_2
      } = S3e(s);
      if (error_2 === "insufficient_scope" && scope_2) t.markStepUpPending(scope_2);
    } else if (s.status === 401) t.clearStepUpPending();
    return s;
  };
}
class Lkn {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
  _flowDiscoveryState;
  _flowDiscoveryStateAt = 0;
  _flowDiscoveryStateFromConfiguredUrl = !1;
  _metadataEchoMode;
  _authorizationUrl;
  _state;
  _scopes;
  _metadata;
  _refreshInProgress;
  _pendingStepUpScope;
  _servedOverrideAuthorizationServerUrl;
  _servedOverrideDocuments = new WeakMap();
  _discoveredAuthorizationServer;
  _lastServedClientId;
  _lastServedAccessToken;
  _lastServedRefreshToken;
  _lastAuthRejection;
  _presented;
  onAuthorizationUrlCallback;
  skipBrowserOpen;
  constructor(e, t, n = Xat(), r = !1, s, S) {
    this.serverName = e, this.serverConfig = t, this.redirectUri = n, this.handleRedirection = r, this.onAuthorizationUrlCallback = s, this.skipBrowserOpen = S ?? !1, this._presented = Ng();
  }
  get redirectUrl() {
    return this.redirectUri;
  }
  get authorizationUrl() {
    return this._authorizationUrl;
  }
  get clientMetadata() {
    let e = {
        client_name: `Claude Code (${this.serverName})`,
        redirect_uris: [this.redirectUri],
        grant_types: ["authorization_code", "refresh_token"],
        response_types: ["code"],
        token_endpoint_auth_method: "none"
      },
      t = this.getCuratedMetadataScope();
    if (t) e.scope = t, ae(this.serverName, `Using scope from metadata: ${mx("scope", e.scope)}`);
    return e;
  }
  get clientMetadataUrl() {
    if (!$e(this.redirectUri)) {
      ae(this.serverName, `redirectUri ${Mo(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
      return;
    }
    let e = Fe();
    if (e !== Ent) ae(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    this._metadata = e, this._metadataEchoMode = fe() ? "enforce" : "observe";
  }
  getCuratedMetadataScope() {
    let e = je(this._metadata);
    if (e !== void 0) return e;
    if (this.serverConfig.oauth?.authServerMetadataUrl && Array.isArray(this._metadata?.scopes_supported)) return this._metadata.scopes_supported.join(" ");
    return;
  }
  markStepUpPending(e) {
    this._pendingStepUpScope = e, ae(this.serverName, `Marked step-up pending: ${mx("scope", e)}`);
  }
  get pendingStepUpScope() {
    return this._pendingStepUpScope;
  }
  get lastAuthRejection() {
    return this._lastAuthRejection;
  }
  noteAuthRejection(e, status, n) {
    let r = this.serverConfig.url;
    if (String(e) === (URL.canParse(r) ? new URL(r).href : r)) this._lastAuthRejection = {
      status: status,
      accessToken: n?.startsWith("Bearer ") ? n.slice(7) : void 0
    };
  }
  clearStepUpPending() {
    this._pendingStepUpScope = void 0;
  }
  clearStepUpPendingOnCredentialGone() {
    if (!this.handleRedirection) this.clearStepUpPending();
  }
  sawAuthChallenge = !1;
  authChallengeOpen = !1;
  noteServerAnswer(e, t) {
    let n = this.serverConfig.url;
    if (String(e) === (URL.canParse(n) ? new URL(n).href : n)) this.authChallengeOpen = t;
  }
  registrationOfferedByDiscovery = !1;
  async readCredentialStore() {
    let e = await KD(this.handleRedirection ? void 0 : {
      serverName: this.serverName,
      serverConfig: this.serverConfig,
      challenged: this.authChallengeOpen
    });
    if (e === Bs) throw ae(this.serverName, "Credential store could not be read (the login keychain may be locked); not reporting credentials as absent"), new fte(this.serverName);
    return e;
  }
  async state() {
    if (!this._state) this._state = rt(32).toString("base64url"), ae(this.serverName, "Generated new OAuth state");
    return this._state;
  }
  async clientInformation() {
    let e = await this.resolveClientInformation();
    return this._presented.record(e?.client_secret), this._presented.record(lYt(e?.client_id, e?.client_secret)), e;
  }
  async resolveClientInformation() {
    let e = await this.readCredentialStore(),
      t = ha(this.serverName, this.serverConfig),
      client_secret = e?.mcpOAuthClientConfig?.[t]?.clientSecret,
      r = this.serverConfig.oauth?.clientId,
      s = e?.mcpOAuth?.[t],
      S = this.handleRedirection && gt(s?.clientId) && !$e(this.redirectUri);
    if (S) {
      if (ae(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${Mo(this.redirectUri)} \u2014 ${r ? "serving the configured client" : "registering via DCR"} instead`), r) await this.patchStoredClientEntry(t, {
        clientId: r,
        clientSecret: void 0,
        redirectUri: this.redirectUri
      }, "stale CIMD client_id repair");
    }
    if (s?.clientId && !S) {
      let redirectUri = s.redirectUri;
      if (this.handleRedirection && (redirectUri ? Te(redirectUri) !== Te(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
        let A = redirectUri ? Mo(redirectUri) : "localhost";
        if (!r) {
          ae(this.serverName, `Cached client_id was registered for ${A}; current redirectUri is ${Mo(this.redirectUri)} \u2014 forcing re-DCR`);
          return;
        }
        if (s.clientId !== r) return ae(this.serverName, `Stored client_id is stale and its redirectUri ${A} predates ${Mo(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`), await this.patchStoredClientEntry(t, {
          clientId: r,
          clientSecret: void 0,
          redirectUri: this.redirectUri
        }, "stale client_id repair"), this._lastServedClientId = r, {
          client_id: r,
          issuer: s.issuer,
          client_secret: client_secret
        };
        ae(this.serverName, `Stored redirectUri ${A} predates ${Mo(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`), await this.patchStoredClientEntry(t, {
          redirectUri: this.redirectUri
        }, "stored redirectUri convergence");
      }
      return ae(this.serverName, "Found client info"), this._lastServedClientId = s.clientId, {
        client_id: s.clientId,
        issuer: s.issuer,
        client_secret: s.clientSecret ?? (s.clientId === r ? client_secret : void 0)
      };
    }
    if (r) return ae(this.serverName, "Using pre-configured client ID"), this._lastServedClientId = r, {
      client_id: r,
      client_secret: client_secret
    };
    if (!this.handleRedirection && this.registrationOfferedByDiscovery && !s?.accessToken && !s?.refreshToken) throw ae(this.serverName, "No client info found; deferring client registration to authentication time"), new McpClientRegistrationDeferredError(this.serverName);
    ae(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, t, n) {
    try {
      if (!(await Kn().mutate(s => {
        let S = s.mcpOAuth?.[e];
        if (!S) return s;
        return {
          ...s,
          mcpOAuth: {
            ...s.mcpOAuth,
            [e]: {
              ...S,
              ...t
            }
          }
        };
      }))?.success) ae(this.serverName, `${n} resolved unsuccessful`);
    } catch (error) {
      ae(this.serverName, `${n} failed: ${d(error)}`);
    }
  }
  async saveClientInformation(e) {
    this._presented.record(e.client_secret), this._presented.record(lYt(e.client_id, e.client_secret));
    let t = ha(this.serverName, this.serverConfig);
    try {
      if ((await Kn().mutate(r => ({
        ...r,
        mcpOAuth: {
          ...r.mcpOAuth,
          [t]: {
            ...r.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            clientId: e.client_id,
            clientSecret: e.issuer !== void 0 && e.client_id === r.mcpOAuth?.[t]?.clientId && r.mcpOAuth?.[t]?.clientSecret === void 0 && e.client_id === this.serverConfig.oauth?.clientId ? void 0 : e.client_secret,
            issuer: e.issuer ?? r.mcpOAuth?.[t]?.issuer,
            redirectUri: !this.handleRedirection && e.client_id === r.mcpOAuth?.[t]?.clientId ? r.mcpOAuth?.[t]?.redirectUri : this.redirectUri,
            accessToken: r.mcpOAuth?.[t]?.accessToken || "",
            expiresAt: r.mcpOAuth?.[t]?.expiresAt
          }
        }
      })))?.success) this._lastServedClientId = e.client_id;else ae(this.serverName, "saveClientInformation persist resolved unsuccessful");
    } catch (error) {
      ae(this.serverName, `saveClientInformation persist failed: ${d(error)}`);
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(),
      t = ha(this.serverName, this.serverConfig),
      n = e?.mcpOAuth?.[t];
    if (CV() && this.serverConfig.oauth?.xaa && !n?.refreshToken && (!n?.accessToken || n.expiresAt != null && (n.expiresAt - Date.now()) / 1000 <= 300)) {
      if (!this._refreshInProgress) ae(this.serverName, n ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange"), this._refreshInProgress = this.xaaRefresh().finally(() => {
        this._refreshInProgress = void 0;
      });
      try {
        let A = await this._refreshInProgress;
        if (A) return this._lastServedAccessToken = A.access_token, this._presented.record(A.access_token), this._presented.record(A.refresh_token), this._lastServedRefreshToken = A.refresh_token ?? this._lastServedRefreshToken, {
          ...A,
          issuer: n?.issuer
        };
      } catch (error) {
        ae(this.serverName, `XAA silent exchange failed: ${d(error)}`);
      }
    }
    if (!n) {
      ae(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (!n.accessToken) {
      ae(this.serverName, "No access token in storage"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (Hkn(t, n.accessToken)) {
      ae(this.serverName, "Not sending the stored access token, because the server rejected it earlier in this session");
      return;
    }
    this._lastServedAccessToken = n.accessToken, this._presented.record(n.accessToken), this._presented.record(n.refreshToken), this._lastServedRefreshToken = n.refreshToken;
    let expires_in = n.expiresAt != null ? (n.expiresAt - Date.now()) / 1000 : void 0,
      _pendingStepUpScope = this._pendingStepUpScope,
      S = _pendingStepUpScope !== void 0;
    if (S) ae(this.serverName, `Step-up pending (${mx("scope", _pendingStepUpScope)}), omitting refresh_token`);
    if (expires_in != null && expires_in <= 0 && !n.refreshToken) {
      ae(this.serverName, "Token expired without refresh token"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (expires_in != null && expires_in <= 300 && n.refreshToken && !S) {
      if (!this._refreshInProgress) ae(this.serverName, `Token expires in ${Math.floor(expires_in)}s, attempting proactive refresh`), this._refreshInProgress = this.refreshAuthorization(n.refreshToken).finally(() => {
        this._refreshInProgress = void 0;
      });else ae(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let A = await this._refreshInProgress;
        if (A) return ae(this.serverName, "Token refreshed successfully"), this._lastServedAccessToken = A.access_token, this._presented.record(A.access_token), this._presented.record(A.refresh_token), this._lastServedRefreshToken = A.refresh_token ?? this._lastServedRefreshToken, {
          ...A,
          issuer: n?.issuer
        };
        ae(this.serverName, "Token refresh failed, returning current tokens");
      } catch (error) {
        ae(this.serverName, `Token refresh error: ${UB(error, this.serverConfig.url)}`);
      }
    }
    let a = {
      access_token: n.accessToken,
      refresh_token: S ? void 0 : n.refreshToken,
      expires_in: expires_in,
      scope: n.scope,
      token_type: "Bearer",
      issuer: n.issuer
    };
    return ae(this.serverName, "Returning tokens"), ae(this.serverName, `Has refresh token: ${!!a.refresh_token}`), ae(this.serverName, expires_in != null ? `Expires in: ${Math.floor(expires_in)}s` : "No expiration specified"), a;
  }
  async saveTokens(e) {
    this._presented.record(e.access_token), this._presented.record(e.refresh_token);
    let t = e.access_token !== this._lastServedAccessToken,
      _flowDiscoveryStateAt = this._flowDiscoveryStateAt;
    if (t && this.handleRedirection) this._pendingStepUpScope = void 0;
    let r = ha(this.serverName, this.serverConfig);
    ae(this.serverName, "Saving tokens"), ae(this.serverName, `Token expires in: ${e.expires_in}`), ae(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
    let signIn = this._servedOverrideAuthorizationServerUrl === void 0 ? this._discoveredAuthorizationServer : {
        authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
        oauthMetadataFound: !0
      },
      servedMetadataUrl = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl,
      a,
      A;
    try {
      a = await Kn().mutate(h => ({
        ...h,
        mcpOAuth: {
          ...h.mcpOAuth,
          [r]: {
            ...h.mcpOAuth?.[r],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? h.mcpOAuth?.[r]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope,
            issuer: e.issuer ?? h.mcpOAuth?.[r]?.issuer,
            discoveryState: Fkn(v_r({
              previous: h.mcpOAuth?.[r]?.discoveryState,
              signIn: signIn,
              servedMetadataUrl: servedMetadataUrl,
              interactiveSignIn: this.handleRedirection
            }))
          }
        }
      }));
    } catch (error) {
      A = error;
    }
    if (a?.success) this._lastServedAccessToken = e.access_token, this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken, Uor(r, e.access_token);
    if (this.logTokenPersistFailed(a, A), t && this._flowDiscoveryStateAt === _flowDiscoveryStateAt) this._flowDiscoveryState = void 0, this._flowDiscoveryStateAt = 0;
  }
  logTokenPersistFailed(e, t) {
    Le(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = Xfe();
    if (!e) return;
    let idpIdToken_2 = await For(e.issuer);
    if (!idpIdToken_2) {
      ae(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let clientId_3 = this.serverConfig.oauth?.clientId,
      r = await Gui(this.serverName, this.serverConfig);
    if (!clientId_3 || !r?.clientSecret) {
      ae(this.serverName, "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh");
      return;
    }
    let s = await oe(this.serverName, this.serverConfig);
    if (s === Bs) {
      ae(this.serverName, "XAA: stored credentials unreadable");
      return;
    }
    let S = s ? void 0 : await Kn().readAsyncStrict?.(void 0, {
      inaccessibleAs: "failure"
    });
    if (S === Bs) {
      ae(this.serverName, "XAA: no pin and the keychain is unreadable");
      return;
    }
    let pinnedAuthorizationServer_3 = s ?? xZ(S?.mcpOAuth?.[ha(this.serverName, this.serverConfig)]?.discoveryState),
      idpClientSecret_2 = await B8r(e.issuer),
      h;
    try {
      h = await Hor(e.issuer);
    } catch (error) {
      ae(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${d(error)}`);
      return;
    }
    this._presented.record(r.clientSecret);
    try {
      let y = await Ae(this.serverConfig.url, {
          clientId: clientId_3,
          clientSecret: r.clientSecret,
          idpClientId: e.clientId,
          idpClientSecret: idpClientSecret_2,
          idpIdToken: idpIdToken_2,
          idpTokenEndpoint: h.token_endpoint,
          pinnedAuthorizationServer: pinnedAuthorizationServer_3
        }, this.serverName),
        w = ha(this.serverName, this.serverConfig),
        U,
        T;
      try {
        U = await Kn().mutate(E => {
          let F = E.mcpOAuth?.[w];
          return {
            ...E,
            mcpOAuth: {
              ...E.mcpOAuth,
              [w]: {
                ...F,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: y.access_token,
                refreshToken: y.refresh_token ?? F?.refreshToken,
                expiresAt: y.expires_in != null ? Date.now() + y.expires_in * 1000 : void 0,
                scope: y.scope,
                clientId: clientId_3,
                clientSecret: r.clientSecret,
                discoveryState: h7t({
                  previous: F?.discoveryState,
                  issuedBy: y.authorizationServerUrl,
                  interactiveSignIn: !1
                })
              }
            }
          };
        });
      } catch (error) {
        T = error;
      }
      return this.logTokenPersistFailed(U, T), {
        access_token: y.access_token,
        token_type: "Bearer",
        expires_in: y.expires_in,
        scope: y.scope,
        refresh_token: y.refresh_token
      };
    } catch (error) {
      if (error instanceof XaaTokenExchangeError && error.shouldClearIdToken) await U8r(e.issuer), ae(this.serverName, "XAA: cleared id_token after exchange failure");
      throw error;
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope ? void 0 : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : void 0),
      n = e.searchParams.get("scope"),
      r = t ?? n;
    if (r !== n) ae(this.serverName, `Overrode authorization scope from ${n ? mx("scope", n) : "NONE"} to configured: ${r ? mx("scope", r) : "NONE"}`);
    let s = r === null ? null : Taa(r, this._metadata);
    if (s !== null && s !== n) {
      if (e.searchParams.set("scope", s), s !== t) ae(this.serverName, "Appended offline_access to authorization scope");
    }
    let S = Caa(e),
      a = e.searchParams.getAll("prompt"),
      A = S ? a.filter(item => item !== "consent") : a;
    if (A.length !== a.length || A.length > 1) {
      if (e.searchParams.delete("prompt"), A.length > 0) e.searchParams.set("prompt", A.includes("consent") ? "consent" : A.at(-1));
    }
    this._authorizationUrl = e.toString();
    let h = e.searchParams.get("scope");
    if (ae(this.serverName, `Authorization URL: ${Bui(e)}`), ae(this.serverName, `Scopes in URL: ${h ? mx("scope", h) : "NOT FOUND"}`), h) this._scopes = h, ae(this.serverName, `Captured scopes from authorization URL: ${mx("scope", h)}`);else {
      let E = this.getCuratedMetadataScope();
      if (E) this._scopes = E, ae(this.serverName, `Using scopes from metadata: ${mx("scope", E)}`);else ae(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let E = ha(this.serverName, this.serverConfig),
        F = this._scopes,
        P = !1;
      try {
        await Kn().mutate(C => {
          let I = C.mcpOAuth?.[E];
          if (!I) return C;
          return P = !0, {
            ...C,
            mcpOAuth: {
              ...C.mcpOAuth,
              [E]: {
                ...I,
                stepUpScope: F
              }
            }
          };
        });
      } catch (error) {
        ae(this.serverName, `step-up scope persist failed: ${d(error)}`);
      }
      if (P) ae(this.serverName, `Persisted step-up scope: ${mx("scope", F)}`);
    }
    if (!this.handleRedirection) {
      ae(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let y = e.toString();
    if (!y.startsWith("http://") && !y.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    ae(this.serverName, "Redirecting to authorization URL");
    let w = Bui(e);
    if (ae(this.serverName, `Authorization URL: ${w}`), this.onAuthorizationUrlCallback) this.onAuthorizationUrlCallback(y);
    if (this.skipBrowserOpen) {
      ae(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${w}`);
      return;
    }
    let headless = tV();
    if (headless) ae(this.serverName, `Skipping browser open (headless environment). URL: ${w}`);else ae(this.serverName, `Opening authorization URL: ${w}`);
    let success = headless ? !1 : await Zi(y);
    if (l("tengu_mcp_oauth_browser_open", {
      success: success,
      headless: headless,
      platform: f(x())
    }), !headless && !success) ae(this.serverName, "Browser didn't open automatically. URL is shown in UI.");
  }
  async saveCodeVerifier(e) {
    ae(this.serverName, "Saving code verifier"), this._codeVerifier = e;
  }
  async codeVerifier() {
    if (!this._codeVerifier) throw ae(this.serverName, "No code verifier saved"), Error("No code verifier saved");
    return ae(this.serverName, "Returning code verifier"), this._presented.record(this._codeVerifier), this._codeVerifier;
  }
  async invalidateCredentials(e) {
    if (e === "verifier") {
      this._codeVerifier = void 0, ae(this.serverName, "Invalidated credentials (scope: verifier)");
      return;
    }
    let t = e,
      n = ha(this.serverName, this.serverConfig),
      r = !1;
    try {
      let _lastServedClientId = this._lastServedClientId,
        _lastServedAccessToken = this._lastServedAccessToken,
        _lastServedRefreshToken = this._lastServedRefreshToken;
      await Kn().mutate(A => {
        let h = A.mcpOAuth?.[n];
        if (!h) return A;
        let mcpOAuth_4 = {
          ...A.mcpOAuth
        };
        switch (t) {
          case "all":
            {
              let w = _lastServedAccessToken != null && !!h.accessToken && h.accessToken !== _lastServedAccessToken,
                U = _lastServedClientId != null && h.clientId != null && h.clientId !== _lastServedClientId;
              if (w || U) return ae(this.serverName, `invalidateCredentials('all') preserved: ${w ? "foreign token" : "concurrent re-registration"}`), A;
              if (!h.clientId && !h.refreshToken && h.accessToken === "") return A;
              mcpOAuth_4[n] = {
                serverName: h.serverName,
                serverUrl: h.serverUrl,
                accessToken: "",
                ...(h.discoveryState && {
                  discoveryState: h.discoveryState
                }),
                ...(h.stepUpScope && {
                  stepUpScope: h.stepUpScope
                })
              };
              break;
            }
          case "client":
            mcpOAuth_4[n] = {
              ...h,
              clientId: void 0,
              clientSecret: void 0
            };
            break;
          case "tokens":
            {
              if (_lastServedRefreshToken != null && h.refreshToken && h.refreshToken !== _lastServedRefreshToken || _lastServedAccessToken != null && !!h.accessToken && h.accessToken !== _lastServedAccessToken) return ae(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation"), A;
              mcpOAuth_4[n] = {
                ...h,
                accessToken: "",
                refreshToken: void 0,
                expiresAt: 0
              };
              break;
            }
          case "discovery":
            {
              if (!h.discoveryState?.authorizationServerMetadata) return ae(this.serverName, "invalidateCredentials('discovery') preserved: concurrent URL-only re-save"), A;
              mcpOAuth_4[n] = {
                ...h,
                discoveryState: eze(h.discoveryState)
              };
              break;
            }
        }
        return r = !0, {
          ...A,
          mcpOAuth: mcpOAuth_4
        };
      });
    } catch (error) {
      ae(this.serverName, `invalidateCredentials persist failed: ${d(error)}`);
    }
    if (r) ae(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    if (e.authorizationServerMetadata) Lor({
      serverName: this.serverName,
      site: "sdk_auth",
      expectedIssuer: e.authorizationServerUrl,
      receivedIssuer: e.authorizationServerMetadata.issuer,
      serverConfig: this.serverConfig
    });
    if (this.serverConfig.oauth?.xaa) return;
    this._flowDiscoveryState = e, this._flowDiscoveryStateAt = Date.now(), this._flowDiscoveryStateFromConfiguredUrl = !1;
    let t = ha(this.serverName, this.serverConfig);
    ae(this.serverName, `Saving discovery state (authServer: ${Mo(e.authorizationServerUrl)})`);
    let authorizationServerMetadata_2 = e.authorizationServerMetadata;
    this.registrationOfferedByDiscovery = authorizationServerMetadata_2 !== void 0 && (typeof authorizationServerMetadata_2.registration_endpoint === "string" || authorizationServerMetadata_2.client_id_metadata_document_supported === !0 && this.clientMetadataUrl !== void 0);
    let discovered = {
        authorizationServerUrl: e.authorizationServerUrl,
        oauthMetadataFound: !!e.authorizationServerMetadata
      },
      servedMetadataUrl_2 = (e.authorizationServerMetadata !== void 0 ? this._servedOverrideDocuments.get(e.authorizationServerMetadata) : void 0) ?? this.servedMetadataUrl();
    this._discoveredAuthorizationServer = {
      ...discovered,
      servedMetadataUrl: servedMetadataUrl_2
    };
    try {
      await Kn().mutate(S => {
        let a = k_r({
          previous: S.mcpOAuth?.[t]?.discoveryState,
          discovered: discovered,
          servedMetadataUrl: servedMetadataUrl_2
        });
        return {
          ...S,
          mcpOAuth: {
            ...S.mcpOAuth,
            [t]: {
              ...S.mcpOAuth?.[t],
              serverName: this.serverName,
              serverUrl: this.serverConfig.url,
              accessToken: S.mcpOAuth?.[t]?.accessToken || "",
              expiresAt: S.mcpOAuth?.[t]?.expiresAt,
              discoveryState: {
                ...a,
                resourceMetadataUrl: e.resourceMetadataUrl,
                tokenlessRejectedAt: Bor(t, S.mcpOAuth?.[t]),
                registrationNotOfferedAt: authorizationServerMetadata_2 === void 0 ? S.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt : typeof authorizationServerMetadata_2.registration_endpoint !== "string" && authorizationServerMetadata_2.client_id_metadata_document_supported !== !0 ? Date.now() : void 0
              }
            }
          }
        };
      });
    } catch (error) {
      ae(this.serverName, `saveDiscoveryState persist failed: ${d(error)}`);
    }
  }
  servePolicyCheckedDiscoveryState(e) {
    if (e?.authorizationServerMetadata && e.authorizationServerUrl) try {
      Lor({
        serverName: this.serverName,
        site: "persisted_state",
        expectedIssuer: e.authorizationServerUrl,
        receivedIssuer: e.authorizationServerMetadata.issuer,
        serverConfig: this.serverConfig
      });
    } catch (error) {
      if (error instanceof IssuerEchoCrossOriginError && this._flowDiscoveryState === e) this._flowDiscoveryState = void 0, this._flowDiscoveryStateAt = 0;
      throw error;
    }
    return e;
  }
  servedMetadataUrl() {
    return this._servedOverrideAuthorizationServerUrl === void 0 ? void 0 : this.serverConfig.oauth?.authServerMetadataUrl;
  }
  async discoveryState() {
    this._servedOverrideAuthorizationServerUrl = void 0;
    let configuredMetadataUrl_2 = this.serverConfig.oauth?.authServerMetadataUrl;
    if (this.authChallengeOpen) await this.readCredentialStore();
    let authorizationServerUrl = await oe(this.serverName, this.serverConfig);
    if (authorizationServerUrl === Bs) {
      if (this.serverConfig.oauth?.xaa) throw new fte(this.serverName);
    } else if (authorizationServerUrl) return {
      authorizationServerUrl: authorizationServerUrl
    };
    if (configuredMetadataUrl_2) {
      ae(this.serverName, `Fetching metadata from configured URL: ${Mo(configuredMetadataUrl_2)}`);
      try {
        let authorizationServerMetadata_3 = await pe(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: configuredMetadataUrl_2,
          fetchFn: dve(this.serverName, this.serverConfig, Mkn())
        });
        if (authorizationServerMetadata_3) {
          let h = {
            authorizationServerUrl: authorizationServerMetadata_3.issuer,
            authorizationServerMetadata: authorizationServerMetadata_3
          };
          return this._servedOverrideAuthorizationServerUrl = authorizationServerMetadata_3.issuer, this._servedOverrideDocuments.set(authorizationServerMetadata_3, configuredMetadataUrl_2), this._flowDiscoveryState = h, this._flowDiscoveryStateFromConfiguredUrl = !0, this.servePolicyCheckedDiscoveryState(h);
        }
      } catch (error) {
        ae(this.serverName, `Failed to fetch from configured metadata URL: ${UB(error, this.serverConfig.url)}`);
      }
      if (this._flowDiscoveryStateFromConfiguredUrl) this._servedOverrideAuthorizationServerUrl = this._flowDiscoveryState?.authorizationServerUrl;
      return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    }
    if (this._flowDiscoveryState && Date.now() - this._flowDiscoveryStateAt < Ie) return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let _flowDiscoveryStateAt_2 = this._flowDiscoveryStateAt,
      s = await Kn().readAsync();
    if (this._flowDiscoveryState && this._flowDiscoveryStateAt !== _flowDiscoveryStateAt_2 && Date.now() - this._flowDiscoveryStateAt < Ie) return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let S = ha(this.serverName, this.serverConfig),
      a = s?.mcpOAuth?.[S]?.discoveryState;
    if (a?.authorizationServerUrl) {
      ae(this.serverName, `Returning cached discovery state (authServer: ${Mo(a.authorizationServerUrl)})`);
      let A = {
        authorizationServerUrl: a.authorizationServerUrl,
        resourceMetadataUrl: a.resourceMetadataUrl,
        resourceMetadata: a.resourceMetadata,
        authorizationServerMetadata: a.authorizationServerMetadata
      };
      try {
        this.servePolicyCheckedDiscoveryState(A);
      } catch (error) {
        if (error instanceof IssuerEchoCrossOriginError) {
          if (await this.invalidateCredentials("discovery").catch(() => {}), this._flowDiscoveryStateAt === _flowDiscoveryStateAt_2) this._flowDiscoveryState = void 0, this._flowDiscoveryStateAt = 0;
        }
        throw error;
      }
      return this._flowDiscoveryStateFromConfiguredUrl = !1, this._flowDiscoveryState = A;
    }
    return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
  }
  async refreshAuthorization(e) {
    if (q()) {
      ae(this.serverName, "claude-code-server session; skipping refresh");
      return;
    }
    let t = ha(this.serverName, this.serverConfig),
      n = FU();
    await ie().mkdir(n);
    let r = t.replace(/[^a-zA-Z0-9]/g, "_"),
      s = st(n, `mcp-refresh-${r}.lock`),
      S;
    for (let a = 0; a < ye; a++) try {
      ae(this.serverName, `Acquiring refresh lock (attempt ${a + 1})`), S = await Zd(s, {
        realpath: !1,
        stale: 60000,
        update: 5000,
        onCompromised: () => {
          ae(this.serverName, "Refresh lock was compromised");
        }
      }), ae(this.serverName, "Acquired refresh lock");
      break;
    } catch (error) {
      let h = k(error);
      if (h === "ELOCKED") {
        ae(this.serverName, `Refresh lock held by another process, waiting (attempt ${a + 1}/${ye})`), await J(1000 + Math.random() * 1000);
        continue;
      }
      ae(this.serverName, `Failed to acquire refresh lock: ${h}; skipping refresh`);
      return;
    }
    if (!S) {
      ae(this.serverName, `Could not acquire refresh lock after ${ye} retries; skipping refresh`);
      return;
    }
    try {
      HU();
      let h = (await Kn().readAsync())?.mcpOAuth?.[t];
      if (h) {
        let expires_in_2 = h.expiresAt != null ? (h.expiresAt - Date.now()) / 1000 : void 0;
        if (h.accessToken && (expires_in_2 == null || expires_in_2 > 300)) return ae(this.serverName, expires_in_2 != null ? `Another process already refreshed tokens (expires in ${Math.floor(expires_in_2)}s)` : "Another process already refreshed tokens (no expiration)"), {
          access_token: h.accessToken,
          refresh_token: h.refreshToken,
          expires_in: expires_in_2,
          scope: h.scope,
          token_type: "Bearer"
        };
        if (h.refreshToken) e = h.refreshToken, this._lastServedRefreshToken = h.refreshToken, this._presented.record(h.refreshToken);
      }
      return await this._doRefresh(e);
    } finally {
      if (S) try {
        await S(), ae(this.serverName, "Released refresh lock");
      } catch {
        ae(this.serverName, "Failed to release refresh lock");
      }
    }
  }
  async readConcurrentRefreshWinner() {
    HU();
    let tokenData = (await Kn().readAsync())?.mcpOAuth?.[ha(this.serverName, this.serverConfig)],
      expires_in_3 = tokenData?.expiresAt != null ? (tokenData.expiresAt - Date.now()) / 1000 : void 0;
    if (tokenData?.accessToken && (expires_in_3 == null || expires_in_3 > 300)) {
      ae(this.serverName, "Another process landed fresh tokens; using those");
      let freshTokens = {
        access_token: tokenData.accessToken,
        refresh_token: tokenData.refreshToken,
        expires_in: expires_in_3,
        scope: tokenData.scope,
        token_type: "Bearer"
      };
      return {
        tokenData: tokenData,
        freshTokens: freshTokens
      };
    }
    return {
      tokenData: tokenData,
      freshTokens: void 0
    };
  }
  async _doRefresh(refreshToken) {
    this._presented.record(refreshToken);
    let t = 3,
      mcpServerBaseUrl_3 = YC(this.serverConfig),
      r = (s, S) => {
        l(s === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
          transportType: f(this.serverConfig.type),
          ...(mcpServerBaseUrl_3 && {
            mcpServerBaseUrl: mcpServerBaseUrl_3
          }),
          ...(S && {
            reason: f(S)
          })
        });
      };
    for (let s = 1; s <= t; s++) {
      let clientInformation;
      try {
        ae(this.serverName, "Starting token refresh");
        let fetchFn_5 = dve(this.serverName, this.serverConfig, Mkn()),
          A = fe() ? "enforce" : "observe",
          metadata = this._metadataEchoMode === A ? this._metadata : void 0;
        if (!metadata) {
          let w = await this.discoveryState();
          if (w?.authorizationServerMetadata) metadata = w.authorizationServerMetadata;else if (w?.authorizationServerUrl) {
            ae(this.serverName, `Re-discovering metadata from persisted auth server URL: ${Mo(w.authorizationServerUrl)}`);
            let U = w.authorizationServerUrl;
            if (metadata = await yYt(U, {
              fetchFn: fetchFn_5,
              skipIssuerValidation: !0
            }), metadata) Lor({
              serverName: this.serverName,
              site: "refresh_rediscovery",
              expectedIssuer: U,
              receivedIssuer: metadata.issuer,
              serverConfig: this.serverConfig
            });
          }
        }
        if (!metadata && !this.serverConfig.oauth?.xaa && (await oe(this.serverName, this.serverConfig)) === void 0) metadata = await pe(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
          fetchFn: fetchFn_5,
          serverConfigForAnalytics: this.serverConfig
        });
        if (!metadata) {
          ae(this.serverName, "Failed to discover OAuth metadata"), r("failure", "metadata_discovery_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
          return;
        }
        if (this._metadata = metadata, this._metadataEchoMode = fe() ? "enforce" : "observe", clientInformation = await this.clientInformation(), !clientInformation) {
          ae(this.serverName, "No client information available"), r("failure", "no_client_info"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
          return;
        }
        let y = await Z8o(new URL(this.serverConfig.url), {
          metadata: metadata,
          clientInformation: clientInformation,
          refreshToken: refreshToken,
          resource: new URL(this.serverConfig.url),
          fetchFn: fetchFn_5
        });
        if (y) return ae(this.serverName, "Token refresh successful"), await this.saveTokens(y), r("success"), g("mcp_oauth_refresh"), y;
        ae(this.serverName, "Token refresh returned no tokens"), r("failure", "no_tokens_returned"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
        return;
      } catch (error) {
        if (error instanceof IssuerEchoCrossOriginError) {
          ae(this.serverName, `Token refresh denied by issuer-echo policy: ${d(error)}`), r("failure", "issuer_echo_denied"), m("mcp_oauth_refresh", "mcp_oauth_refresh_issuer_echo_denied");
          return;
        }
        if (error instanceof F8 && error.code === fge.InvalidGrant) {
          ae(this.serverName, `Token refresh failed with invalid_grant: ${error.message}`);
          let {
            freshTokens: freshTokens_2
          } = await this.readConcurrentRefreshWinner();
          if (freshTokens_2) return c("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), freshTokens_2;
          ae(this.serverName, "No valid tokens in storage, clearing stored tokens"), r("failure", "invalid_grant"), m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"), await this.invalidateCredentials("tokens"), yve.emit(this.serverName);
          return;
        }
        if (error instanceof F8 && (error.code === "invalid_client" || error.code === "unauthorized_client")) {
          ae(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
          let {
            tokenData: tokenData_2,
            freshTokens: freshTokens_3
          } = await this.readConcurrentRefreshWinner();
          if (freshTokens_3) return c("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), freshTokens_3;
          if (tokenData_2?.clientId && clientInformation && tokenData_2.clientId !== clientInformation.client_id) {
            ae(this.serverName, "Another process re-registered client; preserving"), r("failure", "concurrent_reregister"), c("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
            return;
          }
          r("failure", error.code === "unauthorized_client" ? "unauthorized_client" : "invalid_client"), m("mcp_oauth_refresh", error.code === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client"), await this.invalidateCredentials("all"), yve.emit(this.serverName);
          return;
        }
        if (we(error)) {
          ae(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${d(error)}`), r("failure", "token_response_schema_rejected"), m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
          return;
        }
        let A = error instanceof fte,
          h = error instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(error.message),
          y = error instanceof F8 && (error.code === fge.ServerError || error.code === fge.TemporarilyUnavailable || error.code === fge.TooManyRequests || !ht.has(error.code)),
          w = h || y || A;
        if (!w || s >= t) {
          ae(this.serverName, `Token refresh failed: ${UB(error, this.serverConfig.url)}`), r("failure", w ? "transient_retries_exhausted" : "request_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed");
          return;
        }
        let U = 1000 * Math.pow(2, s - 1);
        ae(this.serverName, `Token refresh failed, retrying in ${U}ms (attempt ${s}/${t})`), await J(U);
      }
    }
    return;
  }
}
async function U_a() {
  let MCP_CLIENT_SECRET = process.env.MCP_CLIENT_SECRET;
  if (MCP_CLIENT_SECRET) return MCP_CLIENT_SECRET;
  if (!process.stdin.isTTY) throw Error("No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.");
  return new Promise((t, n) => {
    process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0);
    let r = "",
      s = S => {
        let a = S.toString();
        if (a === `
` || a === "\r") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", s), process.stderr.write(`
`), t(r);else if (a === "\x03") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", s), n(Error("Cancelled"));else if (a === "\x7F" || a === "\b") r = r.slice(0, -1);else r += a;
      };
    process.stdin.on("data", s);
  });
}
async function B_a(e, t, clientSecret_3) {
  let r = ha(e, t);
  try {
    return await Kn().mutate(s => ({
      ...s,
      mcpOAuthClientConfig: {
        ...s.mcpOAuthClientConfig,
        [r]: {
          clientSecret: clientSecret_3
        }
      }
    }));
  } catch (error) {
    return {
      success: !1,
      warning: d(error)
    };
  }
}
async function j_a(e, t) {
  let n = ha(e, t);
  await Kn().mutate(r => {
    if (!r.mcpOAuthClientConfig?.[n]) return r;
    let mcpOAuthClientConfig = {
      ...r.mcpOAuthClientConfig
    };
    return delete mcpOAuthClientConfig[n], {
      ...r,
      mcpOAuthClientConfig: mcpOAuthClientConfig
    };
  });
}
async function Gui(e, t) {
  let r = await Kn().readAsync(),
    s = ha(e, t);
  return r?.mcpOAuthClientConfig?.[s];
}
function je(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return;
}
function Taa(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}
var kt = ["login.microsoftonline.com", "login.microsoftonline.us", "login.partner.microsoftonline.cn", "login.chinacloudapi.cn"],
  At = [".b2clogin.com", ".ciamlogin.com"];
function Caa(e) {
  try {
    let hostname = (typeof e === "string" ? new URL(e) : e).hostname;
    return kt.includes(hostname) || At.some(item => hostname.endsWith(item));
  } catch {
    return !1;
  }
}
export { vaa, Eaa, Bui, jui, Mkn, IssuerEchoCrossOriginError as N8, Lor, McpClientRegistrationDeferredError as Wui, AuthenticationCancelledError as Dkn, D_a, L_a, N_a, $8r, F_a, H_a, $_a, zui, z8o, Nor, Lkn, U_a, B_a, j_a, Gui, Taa, Caa };