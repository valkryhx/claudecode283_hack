// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Jrt, WEt, zEt, moe, $V, Qrt, Zir, PP, GEt, fNe, ear, VEt, tar, U9r } from "B:/~BUN/root/chunk-n2zx2zrd.js";
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c, pe, tY, fl, JS } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ve, x, d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { wGe } from "B:/~BUN/root/chunk-jpdys232.js";
import { _, J, se } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { dl } from "B:/~BUN/root/chunk-7c8rc0p5.js";
import { ra } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { wl, qn, AB, S2, yg } from "B:/~BUN/root/chunk-245a2x6v.js";
import { jx, GD } from "B:/~BUN/root/chunk-q4sexgb0.js";
import { mB, Dte, Sge, md, qT, E, RJe, AJe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Ft } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { Ice } from "B:/~BUN/root/chunk-hds3n5r0.js";
import { LL } from "B:/~BUN/root/chunk-qp5mhwjf.js";
import { ah, LEt, DL } from "B:/~BUN/root/chunk-jynk66qn.js";
import { zKt, zqe, ERe } from "B:/~BUN/root/chunk-bx04wv39.js";
import { Nce, FCn, hT, to, NL, FL } from "B:/~BUN/root/chunk-71zxaep1.js";
import { Ik } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { oCn, Gir, Vir, sCn, O9r } from "B:/~BUN/root/chunk-2srbr7fd.js";
import { kRe, iCn, aCn, MEt, Pce, lCn, dCn } from "B:/~BUN/root/chunk-0zx5qj65.js";
import { $G, Hs } from "B:/~BUN/root/chunk-ac9kwvf4.js";
import { L0e } from "B:/~BUN/root/chunk-9j3awrp0.js";
import { an } from "B:/~BUN/root/chunk-31x8pa20.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
import { randomBytes as et, randomUUID as tt } from "crypto";
import { createServer as rt } from "http";
import { join as it } from "path";
import { parse as nt } from "url";
var je = 30000,
  grant_type = "urn:ietf:params:oauth:grant-type:token-exchange",
  grant_type_2 = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  requested_token_type = "urn:ietf:params:oauth:token-type:id-jag",
  subject_token_type = "urn:ietf:params:oauth:token-type:id_token";
function Re(e) {
  return (t, n) => {
    let r = AbortSignal.timeout(je),
      signal = e ? AbortSignal.any([r, e]) : r;
    return fetch(t, {
      ...n,
      ...ra({
        url: String(t)
      }),
      signal: signal
    }).catch(l => FL(l, t));
  };
}
var ce = Re();
function ae(e) {
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
var We = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function te(e) {
  return (typeof e === "string" ? e : _(e)).replace(We, (n, r) => `"${r}":"[REDACTED]"`);
}
var Ge = f(() => u({
    access_token: o().optional(),
    issued_token_type: o().optional(),
    expires_in: L0e().optional(),
    scope: o().optional()
  })),
  qe = f(() => u({
    access_token: o().min(1),
    token_type: o().default("Bearer"),
    expires_in: L0e().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }));
async function Je(e, t) {
  let n;
  try {
    n = await ear(e, void 0, t?.fetchFn ?? ce);
  } catch (error) {
    if (Ve(error)) throw error;
    let h = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : void 0;
    throw Error(`XAA: PRM discovery failed for ${to(e)} (${h ? `HTTP ${h}` : error instanceof Error ? error.name : typeof error})`);
  }
  if (!n.resource || !n.authorization_servers?.[0]) throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (ae(n.resource) !== ae(e)) throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${to(e)}, got ${to(n.resource)}`);
  return {
    resource: n.resource,
    authorization_servers: n.authorization_servers
  };
}
async function Ye(e, t) {
  let n;
  try {
    n = await VEt(e, {
      fetchFn: t?.fetchFn ?? ce,
      skipIssuerValidation: !0
    });
  } catch (error) {
    if (Ve(error)) throw error;
    let h = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : void 0;
    throw new x(`XAA: AS metadata discovery failed (${h ? `HTTP ${h}` : error instanceof Error ? error.name : typeof error})`, "XAA: AS metadata discovery failed");
  }
  if (!n?.issuer || !n.token_endpoint) throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${to(e)}`);
  if (ae(n.issuer) !== ae(e)) throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${to(e)}, got ${to(n.issuer)}`);
  if (!URL.canParse(n.token_endpoint) || new URL(n.token_endpoint).protocol !== "https:") throw Error(`XAA: refusing non-HTTPS token endpoint: ${to(n.token_endpoint)}`);
  return {
    issuer: n.issuer,
    token_endpoint: n.token_endpoint,
    grant_types_supported: n.grant_types_supported,
    token_endpoint_auth_methods_supported: n.token_endpoint_auth_methods_supported
  };
}
async function Ze(e) {
  let t = e.fetchFn ?? ce,
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
  if (e.scope) n.set("scope", e.scope);
  let r = await t(e.tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: n
  });
  if (!r.ok) {
    let S = te(await r.text()).slice(0, 200),
      v = r.status < 500;
    throw new XaaTokenExchangeError(`XAA: token exchange failed: HTTP ${r.status}: ${S}`, v);
  }
  let h;
  try {
    h = await r.json();
  } catch {
    throw new XaaTokenExchangeError(`XAA: token exchange returned non-JSON (captive portal?) at ${to(e.tokenEndpoint)}`, !1);
  }
  let l = Ge().safeParse(h);
  if (!l.success) throw new XaaTokenExchangeError(`XAA: token exchange response did not match expected shape: ${te(h)}`, !0);
  let s = l.data;
  if (!s.access_token) throw new XaaTokenExchangeError(`XAA: token exchange response missing access_token: ${te(s)}`, !0);
  if (s.issued_token_type !== requested_token_type) throw new XaaTokenExchangeError(`XAA: token exchange returned unexpected issued_token_type: ${s.issued_token_type}`, !0);
  return {
    jwtAuthGrant: s.access_token,
    expiresIn: s.expires_in,
    scope: s.scope
  };
}
async function Qe(e) {
  let t = e.fetchFn ?? ce,
    n = e.authMethod ?? "client_secret_basic",
    r = new URLSearchParams({
      grant_type: grant_type_2,
      assertion: e.assertion
    });
  if (e.scope) r.set("scope", e.scope);
  let headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  if (n === "client_secret_basic") {
    let v = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
    headers.Authorization = `Basic ${v}`, ah().record(v);
  } else r.set("client_id", e.clientId), r.set("client_secret", e.clientSecret);
  ah().record(e.clientSecret), ah().record(e.assertion);
  let l = await t(e.tokenEndpoint, {
    method: "POST",
    headers: headers,
    body: r
  });
  if (!l.ok) {
    let v = te(await l.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${l.status}: ${v}`);
  }
  let s;
  try {
    s = await l.json();
  } catch {
    throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${to(e.tokenEndpoint)}`);
  }
  let S = qe().safeParse(s);
  if (!S.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${te(s)}`);
  return S.data;
}
async function ve(e, t, n = "xaa", r) {
  let fetchFn = Re(r);
  re(n, `XAA: discovering PRM for ${to(e)}`);
  let l = await Je(e, {
    fetchFn: fetchFn
  });
  re(n, `XAA: discovered resource=${to(l.resource)} ASes=[${l.authorization_servers.map(to).join(", ")}]`);
  let s,
    S = [];
  for (let w of l.authorization_servers) {
    let R;
    try {
      R = await Ye(w, {
        fetchFn: fetchFn
      });
    } catch (error) {
      if (r?.aborted) throw error;
      S.push(`${to(w)}: ${error instanceof Error ? error.message : String(error)}`);
      continue;
    }
    if (R.grant_types_supported && !R.grant_types_supported.includes(grant_type_2)) {
      S.push(`${to(w)}: does not advertise jwt-bearer grant (supported: ${R.grant_types_supported.join(", ")})`);
      continue;
    }
    s = R;
    break;
  }
  if (!s) throw new x(`XAA: no authorization server supports jwt-bearer. Tried: ${S.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${l.authorization_servers.length})`);
  let token_endpoint_auth_methods_supported = s.token_endpoint_auth_methods_supported,
    authMethod = token_endpoint_auth_methods_supported && !token_endpoint_auth_methods_supported.includes("client_secret_basic") && token_endpoint_auth_methods_supported.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
  re(n, `XAA: AS issuer=${to(s.issuer)} token_endpoint=${to(s.token_endpoint)} auth_method=${authMethod}`), re(n, "XAA: exchanging id_token for ID-JAG at IdP");
  let y = await Ze({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: s.issuer,
    resource: l.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: fetchFn
  });
  re(n, "XAA: ID-JAG obtained"), re(n, "XAA: exchanging ID-JAG for access_token at AS");
  let T = await Qe({
    tokenEndpoint: s.token_endpoint,
    assertion: y.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: authMethod,
    fetchFn: fetchFn
  });
  return re(n, "XAA: access_token obtained"), {
    ...T,
    authorizationServerUrl: s.issuer
  };
}
var st = 30000,
  ot = 500,
  Me = 600000,
  at = new Set([...S2, ...AB, "ETIMEDOUT"]);
function ct(e) {
  if (Ve(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = yg(e);
  return t !== null && at.has(t.code);
}
function ke(e) {
  let t = e;
  return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues);
}
var dt = new Set(Object.values(moe)),
  ut = ["authorization_pending", "expired_token", "slow_down"],
  ht = [...Object.values(moe), ...ut];
function J5s(e) {
  let t = ht.find(item => item === e);
  return pe(t) ?? b("other");
}
function Q5s(e, t) {
  let n = t instanceof Error ? `${e}
${t.message}` : e;
  if (t instanceof IssuerEchoCrossOriginError) return "issuer_echo_denied";
  if (t instanceof Qrt) return t.kind === "metadata" ? "issuer_echo_mismatch" : "issuer_response_mismatch";
  if (t instanceof Zir) return "dcr_rejected";
  if (n.includes("dynamic client registration") || t instanceof $V && t.code === "invalid_client_metadata") return "dcr_failed";
  if (n.includes("trying to load") && n.includes("metadata") || n.includes("Incompatible auth server")) return "discovery_failed";
  if (t instanceof $V) return "dcr_rejected";
  if (n.includes("Issuer mismatch in authorization server metadata")) return "issuer_echo_mismatch";
  if (n.includes("Issuer mismatch in authorization response")) return "issuer_response_mismatch";
  let r = k(t) ?? k(t instanceof Error ? t.cause : void 0);
  if (r && AJe.has(r)) return "network_failed";
  return "sdk_auth_failed";
}
var Se = 5;
function Wes(e) {
  return to(e.origin + e.pathname) + FCn(e);
}
var lt = new Set(["invalid_refresh_token", "expired_refresh_token", "token_expired"]);
async function zes(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    n;
  try {
    n = J(t);
  } catch {
    return new Response(t, e);
  }
  if (WEt.safeParse(n).success) return new Response(t, e);
  let r = zEt.safeParse(n);
  if (!r.success) return new Response(t, e);
  let h = lt.has(r.data.error) ? {
    error: "invalid_grant",
    error_description: r.data.error_description ?? `Server returned non-standard error code: ${r.data.error}`
  } : r.data;
  return new Response(_(h), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers
  });
}
function NKt() {
  return async (e, t) => {
    try {
      return await be(e, t);
    } catch (error) {
      if (t?.signal?.aborted || !ct(error)) throw error;
      return await Y(ot, t?.signal ?? void 0), await be(e, t);
    }
  };
}
async function be(e, t) {
  let signal_2 = AbortSignal.timeout(st),
    r = t?.method?.toUpperCase() === "POST",
    h = ra({
      url: String(e)
    });
  if (!t?.signal) {
    let v;
    try {
      v = await fetch(e, {
        ...t,
        ...h,
        signal: signal_2
      });
    } catch (error) {
      FL(error, e);
    }
    return r ? zes(v) : v;
  }
  let abortController = new AbortController(),
    s = () => abortController.abort();
  t.signal.addEventListener("abort", s), signal_2.addEventListener("abort", s);
  let S = () => {
    t.signal?.removeEventListener("abort", s), signal_2.removeEventListener("abort", s);
  };
  if (t.signal.aborted) abortController.abort();
  try {
    let v = await fetch(e, {
      ...t,
      ...h,
      signal: abortController.signal
    });
    return S(), r ? zes(v) : v;
  } catch (error) {
    S(), FL(error, e);
  }
}
async function he(serverName, t, n) {
  let {
      configuredMetadataUrl: configuredMetadataUrl,
      fetchFn: fetchFn_2,
      resourceMetadataUrl: resourceMetadataUrl,
      serverConfigForAnalytics: s
    } = n ?? {},
    fetchFn_3 = fetchFn_2 ?? NKt();
  if (configuredMetadataUrl) {
    if (!configuredMetadataUrl.startsWith("https://")) throw Error(`authServerMetadataUrl must use https:// (got: ${to(configuredMetadataUrl)})`);
    let A = await fetchFn_3(configuredMetadataUrl, {
      headers: {
        Accept: "application/json"
      }
    });
    if (A.ok) {
      let y;
      try {
        y = await A.json();
      } catch {
        throw Error(`Configured auth server metadata at ${to(configuredMetadataUrl)} is not valid JSON`);
      }
      return Jrt.parse(y);
    }
    throw Error(`HTTP ${A.status} fetching configured auth server metadata from ${to(configuredMetadataUrl)}`);
  }
  try {
    let {
      authorizationServerUrl: A,
      authorizationServerMetadata: authorizationServerMetadata
    } = await tar(t, {
      fetchFn: fetchFn_3,
      ...(resourceMetadataUrl && {
        resourceMetadataUrl: resourceMetadataUrl
      }),
      skipIssuerMetadataValidation: !0
    });
    if (authorizationServerMetadata) return nCn({
      serverName: serverName,
      site: "rfc9728_chain",
      expectedIssuer: A,
      receivedIssuer: authorizationServerMetadata.issuer,
      serverConfig: s
    }), authorizationServerMetadata;
  } catch (error) {
    if (error instanceof IssuerEchoCrossOriginError) throw error;
    re(serverName, `RFC 9728 discovery failed, falling back: ${NL(error, t)}`);
  }
  let v = new URL(t);
  if (v.pathname === "/") return;
  try {
    let A = await VEt(v, {
      fetchFn: fetchFn_3,
      skipIssuerValidation: !0
    });
    if (A) nCn({
      serverName: serverName,
      site: "legacy_path_fallback",
      expectedIssuer: v.href,
      receivedIssuer: A.issuer,
      serverConfig: s
    });
    return A;
  } catch (error) {
    if (error instanceof IssuerEchoCrossOriginError) throw error;
    re(serverName, `Path-aware auth server discovery failed: ${NL(error, t)}`);
    return;
  }
}
class IssuerEchoCrossOriginError extends x {
  expected;
  received;
  constructor(e, t) {
    super(`Issuer echo cross-origin mismatch (RFC 8414 \xA73.3): expected ${_(e)}, received ${_(t)}`, "issuer echo cross-origin mismatch (RFC 8414 \xA73.3)", "issuer_echo_denied");
    this.expected = e;
    this.received = t;
    this.name = "IssuerEchoCrossOriginError";
  }
}
function ue() {
  try {
    return E("tengu_mcp_issuer_strict_echo", !1) === !0;
  } catch {
    return !1;
  }
}
function ft(e, t) {
  return t === e || e.endsWith("/") && t === e.slice(0, -1);
}
function le(e) {
  try {
    let t = new URL(e);
    if ((t.protocol === "https:" || t.protocol === "http:") && t.origin !== "null") return t;
  } catch {}
  return;
}
function pt(e, t) {
  let n = le(e),
    r = le(t);
  if (!n || !r) return "unparseable";
  if (n.username !== "" || n.password !== "" || r.username !== "" || r.password !== "" || r.search !== "" || r.hash !== "") return "cross_origin";
  return n.origin === r.origin ? "same_origin" : "cross_origin";
}
function _t(e, t) {
  let n = le(e),
    r = le(t);
  if (!n || !r) return [];
  let h = [];
  if (n.protocol !== r.protocol) h.push("scheme");
  if (n.username !== r.username || n.password !== r.password) h.push("userinfo");
  if (n.hostname !== r.hostname) h.push("host");
  if (n.port !== r.port) h.push("port");
  if (n.pathname !== r.pathname) h.push("path");
  if (n.search !== r.search) h.push("query");
  if (n.hash !== r.hash) h.push("fragment");
  if (h.length === 0) h.push("normalization_only");
  return h;
}
function nCn({
  serverName: serverName_2,
  site: site,
  expectedIssuer: expectedIssuer,
  receivedIssuer: receivedIssuer,
  serverConfig: serverConfig
}) {
  if (expectedIssuer === void 0) return;
  if (receivedIssuer !== void 0 && ft(expectedIssuer, receivedIssuer)) return;
  let l = receivedIssuer === void 0 ? "unparseable" : pt(expectedIssuer, receivedIssuer),
    s = ue() ? "enforce" : "observe",
    S = s === "enforce" && l !== "same_origin";
  try {
    let v = receivedIssuer === void 0 ? ["issuer_missing"] : _t(expectedIssuer, receivedIssuer),
      mcpServerBaseUrl = serverConfig ? Ik(serverConfig) : void 0,
      mcpServerName = serverConfig ? JS(serverName_2, qT(serverName_2, serverConfig)) : void 0;
    i("tengu_mcp_oauth_issuer_echo_mismatch", {
      site: c(site),
      mode: c(s),
      originRelation: c(l),
      outcome: S ? b("denied") : b("proceeded"),
      ...(v.length > 0 && {
        mismatchFacets: fl(v)
      }),
      expectedIssuerHash: an(expectedIssuer),
      ...(receivedIssuer !== void 0 && {
        receivedIssuerHash: an(receivedIssuer)
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
      re(serverName_2, `issuer-echo telemetry failed: ${d(error)}`);
    } catch {}
  }
  if (S) throw new IssuerEchoCrossOriginError(expectedIssuer, receivedIssuer);
}
class McpClientRegistrationDeferredError extends PP {
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
function Ae(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}
function $e(e) {
  let t = Ae(e);
  return t === "http://127.0.0.1" || t === "http://localhost";
}
function Ie(e) {
  if (!e?.clientId || !e.redirectUri || !$e(e.redirectUri)) return;
  let t = Number(new URL(e.redirectUri).port);
  return t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === zqe(t) ? t : void 0;
}
function De() {
  return a.MCP_OAUTH_CLIENT_METADATA_URL || wGe;
}
function Pe(e) {
  if (!$e(e)) return !1;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return !1;
  }
}
function mt(e) {
  return e !== void 0 && (e === wGe || e === De());
}
function dni(e) {
  return Ft().oauthCallbackSubmitters.get(e);
}
function cni(e, t) {
  let activeOAuthFlows = Ft().activeOAuthFlows;
  activeOAuthFlows.set(e, t), t.finally(() => {
    if (activeOAuthFlows.get(e) === t) activeOAuthFlows.delete(e);
  }).catch(() => {});
}
function uni(e) {
  return Ft().activeOAuthFlows.get(e);
}
async function zir(e, t) {
  let n = md(e, t),
    r = (await qn().readAsync())?.mcpOAuth?.[n];
  if (!r || r.accessToken || r.refreshToken) return;
  try {
    await qn().mutate(h => {
      let l = h.mcpOAuth?.[n];
      if (!l || l.accessToken || l.refreshToken) return h;
      let mcpOAuth = {
        ...h.mcpOAuth
      };
      return delete mcpOAuth[n], {
        ...h,
        mcpOAuth: mcpOAuth
      };
    });
  } catch (error) {
    re(e, `clear tokenless stub failed: ${d(error)}`);
  }
}
async function xe({
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
    T = Object.keys(configuredHeaders).length > 0 ? {
      beforeRedirect: dCn(endpoint)
    } : {};
  if (clientId && clientSecret) {
    if (authMethod_2 === "client_secret_post") uRLSearchParams.set("client_id", clientId), uRLSearchParams.set("client_secret", clientSecret);else {
      let w = Buffer.from(`${encodeURIComponent(clientId)}:${encodeURIComponent(clientSecret)}`).toString("base64");
      headers_2.Authorization = `Basic ${w}`, ah().record(w);
    }
  } else if (clientId) uRLSearchParams.set("client_id", clientId);else re(serverName_3, `No client_id available for ${tokenTypeHint} revocation - server may reject`);
  try {
    await Ct.post(endpoint, uRLSearchParams, {
      headers: headers_2,
      ...T
    }), re(serverName_3, `Successfully revoked ${tokenTypeHint}`);
  } catch (error) {
    if (Ct.isAxiosError(error) && error.response?.status === 401 && accessToken) re(serverName_3, `Got 401, retrying ${tokenTypeHint} revocation with Bearer auth`), uRLSearchParams.delete("client_id"), uRLSearchParams.delete("client_secret"), await Ct.post(endpoint, uRLSearchParams, {
      headers: {
        ...headers_2,
        Authorization: `Bearer ${accessToken}`
      },
      ...T
    }), re(serverName_3, `Successfully revoked ${tokenTypeHint} with Bearer auth`);else throw error;
  }
}
async function pni(e, t) {
  let r = (await qn().readAsync())?.mcpOAuth?.[md(e, t)];
  if (!r?.accessToken && !r?.refreshToken) return;
  return {
    accessToken: r.accessToken || void 0,
    refreshToken: r.refreshToken,
    clientId: r.clientId,
    clientSecret: r.clientSecret,
    ...(r.discoveryState && {
      discoveryState: kRe(r.discoveryState)
    })
  };
}
async function Ne(serverName_4, serverConfigForAnalytics, n) {
  let r = ah();
  r.record(n.accessToken), r.record(n.refreshToken), r.record(n.clientSecret);
  let h;
  try {
    let l = n.discoveryState?.authorizationServerUrl ?? serverConfigForAnalytics.url,
      s = await he(serverName_4, l, {
        configuredMetadataUrl: serverConfigForAnalytics.oauth?.authServerMetadataUrl,
        fetchFn: Pce(serverName_4, serverConfigForAnalytics, NKt()),
        serverConfigForAnalytics: serverConfigForAnalytics
      });
    if (!s) re(serverName_4, "No OAuth metadata found"), h = "no_metadata";else {
      let S = "revocation_endpoint" in s ? s.revocation_endpoint : null;
      if (!S) re(serverName_4, "Server does not support token revocation"), h = "no_revocation_endpoint";else {
        let endpoint_2 = String(S),
          configuredHeaders_2 = await lCn(serverName_4, serverConfigForAnalytics, endpoint_2),
          y = ("revocation_endpoint_auth_methods_supported" in s ? s.revocation_endpoint_auth_methods_supported : void 0) ?? ("token_endpoint_auth_methods_supported" in s ? s.token_endpoint_auth_methods_supported : void 0),
          authMethod_3 = y && !y.includes("client_secret_basic") && y.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
        if (re(serverName_4, `Revoking tokens via ${to(endpoint_2)} (${authMethod_3})`), n.refreshToken) try {
          await xe({
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
          re(serverName_4, `Failed to revoke refresh token: ${d(error)}`), h = "server_revoke_failed";
        }
        if (n.accessToken) try {
          await xe({
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
          re(serverName_4, `Failed to revoke access token: ${d(error)}`), h = "server_revoke_failed";
        }
      }
    }
  } catch (error) {
    re(serverName_4, `Failed to revoke tokens: ${d(error)}`), h = error instanceof IssuerEchoCrossOriginError ? "issuer_echo_denied" : "server_revoke_failed";
  }
  return h;
}
async function fni(e, t, n) {
  let r;
  try {
    let h = (await qn().readAsync())?.mcpOAuth?.[md(e, t)],
      l = {
        ...n,
        accessToken: n.accessToken && n.accessToken !== h?.accessToken ? n.accessToken : void 0,
        refreshToken: n.refreshToken && n.refreshToken !== h?.refreshToken ? n.refreshToken : void 0
      };
    if (!l.accessToken && !l.refreshToken) {
      re(e, "No replaced tokens to revoke"), g("mcp_oauth_revoke");
      return;
    }
    r = await Ne(e, t, l);
  } catch (error) {
    re(e, `Failed to revoke replaced tokens: ${d(error)}`), r = "server_revoke_failed";
  }
  if (r) p("mcp_oauth_revoke", r);else g("mcp_oauth_revoke");
}
async function mni(serverName_5, t, {
  preserveStepUpState = !1
} = {}) {
  let r = qn(),
    h = await r.readAsync();
  if (!h?.mcpOAuth) {
    g("mcp_oauth_revoke");
    return;
  }
  let l = md(serverName_5, t),
    s = h.mcpOAuth[l],
    S;
  if (s?.accessToken || s?.refreshToken) S = await Ne(serverName_5, t, {
    accessToken: s.accessToken || void 0,
    refreshToken: s.refreshToken,
    clientId: s.clientId,
    clientSecret: s.clientSecret,
    ...(s.discoveryState && {
      discoveryState: kRe(s.discoveryState)
    })
  });else re(serverName_5, "No tokens to revoke");
  try {
    if (preserveStepUpState && s && (s.stepUpScope || s.discoveryState || s.clientId)) await r.mutate(v => {
      let A = v.mcpOAuth?.[l];
      if (A?.accessToken !== s.accessToken || A?.clientId !== s.clientId) return v;
      return {
        ...v,
        mcpOAuth: {
          ...v.mcpOAuth,
          [l]: {
            serverName: serverName_5,
            serverUrl: t.url,
            accessToken: "",
            refreshToken: void 0,
            expiresAt: void 0,
            ...(s.clientId && {
              clientId: s.clientId,
              ...(s.redirectUri && {
                redirectUri: s.redirectUri
              }),
              ...(s.clientSecret !== void 0 && {
                clientSecret: s.clientSecret
              })
            }),
            ...(s.stepUpScope && {
              stepUpScope: s.stepUpScope
            }),
            ...(s.discoveryState && {
              discoveryState: {
                ...kRe(s.discoveryState),
                resourceMetadataUrl: s.discoveryState.resourceMetadataUrl
              }
            })
          }
        }
      };
    }), re(serverName_5, "Preserved step-up auth state across revocation");else await Ves(serverName_5, t);
  } catch (error) {
    re(serverName_5, `clear local tokens failed: ${d(error)}`), S ??= "local_clear_failed";
  }
  if (DL(serverName_5), S) p("mcp_oauth_revoke", S);else g("mcp_oauth_revoke");
}
async function Ves(e, t, n) {
  let r = md(e, t),
    h;
  if (await qn().mutate(l => {
    let s = l.mcpOAuth?.[r];
    if (!s) return l;
    let mcpOAuth_2 = {
      ...l.mcpOAuth
    };
    if (s.clientId && n?.preserveClientRegistration?.(s)) {
      if (!s.accessToken && !s.refreshToken) return l;
      mcpOAuth_2[r] = {
        ...s,
        accessToken: "",
        refreshToken: void 0,
        expiresAt: 0,
        scope: void 0
      }, h = "tokens";
    } else delete mcpOAuth_2[r], h = "all";
    return {
      ...l,
      mcpOAuth: mcpOAuth_2
    };
  }), h) re(e, h === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens");
}
function Fe(e, t, n, r) {
  if (n?.success) return;
  let h = r ? "mutate_rejected" : "storage_write_failed",
    l = r ? d(r) : n?.warning ?? "storage write failed";
  re(e, `Token persist failed: ${l}`);
  let mcpServerBaseUrl_2 = Ik(t);
  i("tengu_mcp_oauth_token_persist_failed", {
    transportType: c(t.type),
    ...(mcpServerBaseUrl_2 && {
      mcpServerBaseUrl: mcpServerBaseUrl_2
    }),
    reason: c(h)
  });
}
async function gt(serverName_6, t, onAuthorizationUrl, abortSignal, skipBrowserOpen) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let l = Dte();
  if (!l) throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
  let clientId_2 = t.oauth?.clientId;
  if (!clientId_2) throw Error(`XAA: server '${serverName_6}' needs an AS client_id. Re-add with --client-id.`);
  let clientSecret_2 = (await qes(serverName_6, t))?.clientSecret;
  if (!clientSecret_2) {
    let w = md(serverName_6, t),
      R = Object.keys((await qn().readAsync())?.mcpOAuthClientConfig ?? {}),
      D = Nce(t.headers ?? {});
    throw re(serverName_6, `XAA: secret lookup miss. wanted=${w} have=[${R.join(", ")}] configHeaders=${_(D)}`), Error(`XAA: AS client secret not found for '${serverName_6}'. Re-add with --client-secret.`);
  }
  re(serverName_6, "XAA: starting cross-app access flow");
  let idpClientSecret = await Vir(l.issuer),
    idTokenCacheHit = (await oCn(l.issuer)) !== void 0,
    T = "idp_login";
  try {
    let idpIdToken;
    try {
      idpIdToken = await O9r({
        idpIssuer: l.issuer,
        idpClientId: l.clientId,
        idpClientSecret: idpClientSecret,
        callbackPort: l.callbackPort,
        onAuthorizationUrl: onAuthorizationUrl,
        skipBrowserOpen: skipBrowserOpen,
        abortSignal: abortSignal
      });
    } catch (error) {
      if (abortSignal?.aborted) throw new AuthenticationCancelledError();
      throw error;
    }
    T = "discovery";
    let R = await sCn(l.issuer);
    T = "token_exchange", ah().record(clientSecret_2);
    let D;
    try {
      D = await ve(t.url, {
        clientId: clientId_2,
        clientSecret: clientSecret_2,
        idpClientId: l.clientId,
        idpClientSecret: idpClientSecret,
        idpIdToken: idpIdToken,
        idpTokenEndpoint: R.token_endpoint
      }, serverName_6, abortSignal);
    } catch (error) {
      if (abortSignal?.aborted) throw new AuthenticationCancelledError();
      let P = d(error);
      if (error instanceof XaaTokenExchangeError) {
        if (error.shouldClearIdToken) await Gir(l.issuer), re(serverName_6, "XAA: cleared cached id_token after token-exchange failure");
      } else if (P.includes("PRM discovery failed") || P.includes("AS metadata discovery failed") || P.includes("no authorization server supports jwt-bearer")) T = "discovery";else if (P.includes("jwt-bearer")) T = "jwt_bearer";
      throw error;
    }
    let U = md(serverName_6, t),
      O = ah();
    O.record(D.access_token), O.record(D.refresh_token);
    let M, B;
    try {
      M = await qn().mutate(C => {
        let P = C.mcpOAuth?.[U];
        return {
          ...C,
          mcpOAuth: {
            ...C.mcpOAuth,
            [U]: {
              ...P,
              serverName: serverName_6,
              serverUrl: t.url,
              accessToken: D.access_token,
              refreshToken: D.refresh_token ?? P?.refreshToken,
              expiresAt: D.expires_in != null ? Date.now() + D.expires_in * 1000 : void 0,
              scope: D.scope,
              clientId: clientId_2,
              clientSecret: clientSecret_2,
              discoveryState: MEt({
                previous: P?.discoveryState,
                issuedBy: D.authorizationServerUrl,
                interactiveSignIn: !0
              })
            }
          }
        };
      });
    } catch (error) {
      B = error;
    }
    if (M?.success) re(serverName_6, "XAA: tokens saved");else Fe(serverName_6, t, M, B);
    i("tengu_mcp_oauth_flow_success", {
      authMethod: b("xaa"),
      idTokenCacheHit: idTokenCacheHit
    }), g("mcp_oauth_flow");
  } catch (error) {
    if (error instanceof AuthenticationCancelledError) throw error;
    throw m("mcp_oauth_flow", "mcp_oauth_xaa_failed"), i("tengu_mcp_oauth_flow_failure", {
      authMethod: b("xaa"),
      xaaFailureStage: c(T),
      idTokenCacheHit: idTokenCacheHit
    }), error;
  }
}
async function P9r(e, serverConfigForAnalytics_2, n, r, h) {
  if (!URL.canParse(serverConfigForAnalytics_2.url)) {
    m("mcp_oauth_flow", "mcp_oauth_no_valid_url");
    let U = "configError" in serverConfigForAnalytics_2 && typeof serverConfigForAnalytics_2.configError === "string" ? serverConfigForAnalytics_2.configError : void 0;
    throw new x(U || "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.", "MCP OAuth refused: no valid server URL");
  }
  if (serverConfigForAnalytics_2.oauth?.xaa) {
    if (!mB()) throw Error(`XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`);
    i("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: b("xaa"),
      transportType: c(serverConfigForAnalytics_2.type),
      ...(Ik(serverConfigForAnalytics_2) && {
        mcpServerBaseUrl: Ik(serverConfigForAnalytics_2)
      })
    }), await gt(e, serverConfigForAnalytics_2, n, r, h?.skipBrowserOpen);
    return;
  }
  let l = qn(),
    s = md(e, serverConfigForAnalytics_2),
    S = (await l.readAsync())?.mcpOAuth?.[s],
    scope = S?.stepUpScope,
    A = S?.discoveryState?.resourceMetadataUrl,
    y = Ie(S),
    resourceMetadataUrl_2;
  if (A) try {
    resourceMetadataUrl_2 = new URL(A);
  } catch {
    re(e, `Invalid cached resourceMetadataUrl: ${to(A)}`);
  }
  let w = {
      scope: scope,
      resourceMetadataUrl: resourceMetadataUrl_2
    },
    R = tt();
  i("tengu_mcp_oauth_flow_start", {
    flowAttemptId: ye(R),
    isOAuthFlow: !0,
    transportType: c(serverConfigForAnalytics_2.type),
    ...(Ik(serverConfigForAnalytics_2) && {
      mcpServerBaseUrl: Ik(serverConfigForAnalytics_2)
    })
  });
  let D = !1;
  try {
    let U = serverConfigForAnalytics_2.oauth?.callbackPort,
      O = !!h?.redirectUri,
      M = O ? 0 : U ?? (await ERe(y)),
      B = h?.redirectUri ?? zqe(M);
    re(e, O ? `Using custom redirectUri: ${to(B)} (no localhost listener)` : `Using redirect port: ${M}${U ? " (from config)" : y && M === y ? " (reusing registered port)" : ""}`);
    try {
      await Ves(e, serverConfigForAnalytics_2, {
        preserveClientRegistration: L => M === Ie(L) || L.redirectUri === B
      });
    } catch (error) {
      re(e, `clear stored credentials failed: ${d(error)}`);
    }
    let C = Ft(),
      abortController_2 = new AbortController();
    if (!O) C.oauthCallbackListeners.get(M)?.abort(), C.oauthCallbackListeners.set(M, abortController_2);
    let K = new HKt(e, serverConfigForAnalytics_2, B, !0, n, h?.skipBrowserOpen),
      ie = Boolean(serverConfigForAnalytics_2.oauth?.scopes || serverConfigForAnalytics_2.oauth?.authServerMetadataUrl);
    if (w.scope && !ie) K.markStepUpPending(w.scope);
    let fetchFn_4 = Pce(e, serverConfigForAnalytics_2, NKt());
    try {
      let L = await he(e, serverConfigForAnalytics_2.url, {
        configuredMetadataUrl: serverConfigForAnalytics_2.oauth?.authServerMetadataUrl,
        fetchFn: fetchFn_4,
        resourceMetadataUrl: w.resourceMetadataUrl,
        serverConfigForAnalytics: serverConfigForAnalytics_2
      });
      if (L) K.setMetadata(L), re(e, `Fetched OAuth metadata with scope: ${hT("scope", ze(L) ?? "") || "NONE"}`);
    } catch (error) {
      if (error instanceof IssuerEchoCrossOriginError) throw error;
      re(e, `Failed to fetch OAuth metadata: ${NL(error, serverConfigForAnalytics_2.url)}`);
    }
    let Z = await K.state(),
      z = null,
      F = null,
      H = null,
      we = null,
      G = () => {
        if (z) z.removeAllListeners(), z.on("error", () => {}), z.close(), z = null;
        if (F) clearTimeout(F), F = null;
        if (H) r?.removeEventListener("abort", H), abortController_2.signal.removeEventListener("abort", H), H = null;
        if (C.oauthCallbackListeners.get(M) === abortController_2) C.oauthCallbackListeners.delete(M);
        if (C.oauthCallbackSubmitters.get(e) === we) C.oauthCallbackSubmitters.delete(e);
        re(e, "MCP OAuth server cleaned up");
      },
      {
        code: Te,
        iss: iss
      } = await new Promise((L, He) => {
        let ne = !1,
          Ce = (code, iss_2) => {
            if (ne) return;
            ne = !0, L({
              code: code,
              iss: iss_2
            });
          },
          q = N => {
            if (ne) return;
            ne = !0, He(N);
          };
        if (H = () => {
          G(), q(new AuthenticationCancelledError());
        }, r?.aborted || abortController_2.signal.aborted) {
          H();
          return;
        }
        r?.addEventListener("abort", H), abortController_2.signal.addEventListener("abort", H);
        {
          let N = X => {
            try {
              let j = new URL(X),
                Q = j.searchParams.get("code"),
                me = j.searchParams.get("state"),
                V = j.searchParams.get("error"),
                ee = zKt(j.searchParams.get("iss"));
              if (!Q && !V) return !1;
              if (me !== Z) return re(e, "Ignoring manual callback URL whose state belongs to a different flow"), !1;
              if (V) {
                let oe = j.searchParams.get("error_description") || "";
                return G(), q(Error(`OAuth error: ${V} - ${oe}`)), !0;
              }
              if (!Q) return !1;
              return re(e, "Received auth code via manual callback URL"), G(), Ce(Q, ee), !0;
            } catch {
              return !1;
            }
          };
          we = N, C.oauthCallbackSubmitters.set(e, N), h?.onWaitingForCallback?.(N, M, Z);
        }
        let Ue = async () => {
          try {
            re(e, "Starting SDK auth"), re(e, `Server URL: ${to(serverConfigForAnalytics_2.url)}`);
            let N = await GEt(K, {
              serverUrl: serverConfigForAnalytics_2.url,
              scope: w.scope,
              resourceMetadataUrl: w.resourceMetadataUrl,
              fetchFn: fetchFn_4,
              skipIssuerMetadataValidation: !0
            });
            if (re(e, `Initial auth result: ${N}`), N !== "REDIRECT") re(e, `Unexpected auth result, expected REDIRECT: ${N}`);
          } catch (N) {
            re(e, `SDK auth error: ${NL(N, serverConfigForAnalytics_2.url)}`), G(), q(Object.assign(new x(`SDK auth failed: ${NL(N, serverConfigForAnalytics_2.url)}`, "SDK auth failed"), {
              cause: N
            }));
          }
        };
        if (O) Ue();else z = rt((N, X) => {
          let j = nt(N.url || "", !0);
          if (j.pathname === "/callback") {
            let Q = j.query.code,
              state = j.query.state,
              V = j.query.error,
              error_description = j.query.error_description,
              error_uri = j.query.error_uri,
              Xe = zKt(j.query.iss);
            if (state !== Z) {
              X.writeHead(400, {
                "Content-Type": "text/html"
              }), X.end(LL({
                ok: !1,
                heading: "Authentication failed",
                message: "Invalid state parameter. Close this tab and try again from Claude Code."
              }));
              return;
            }
            if (V) {
              X.writeHead(200, {
                "Content-Type": "text/html"
              }), X.end(LL({
                ok: !1,
                heading: "Authentication failed",
                message: "Close this tab and try again from Claude Code.",
                detail: `${String(V)}: ${error_description ?? ""}`
              })), G();
              let ge = `OAuth error: ${V}`;
              if (error_description) ge += ` - ${error_description}`;
              if (error_uri) ge += ` (See: ${error_uri})`;
              q(Error(ge));
              return;
            }
            if (Q) X.writeHead(200, {
              "Content-Type": "text/html"
            }), X.end(LL({
              ok: !0,
              heading: "Authentication successful",
              message: "You can close this tab and return to Claude Code."
            })), G(), Ce(Q, Xe);
          } else X.writeHead(404, {
            "Content-Type": "text/html"
          }), X.end(LL({
            ok: !1,
            heading: "Not found",
            message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${to(B)}.`
          }));
        }), z.on("error", N => {
          if (G(), N.code === "EADDRINUSE") {
            let X = I() === "windows" ? `netstat -ano | findstr :${M}` : `lsof -ti:${M} -sTCP:LISTEN`;
            q(new x(`OAuth callback port ${M} is already in use \u2014 another process may be holding it. ` + `Run \`${X}\` to find it.`, "OAuth callback port already in use"));
          } else q(new x(`OAuth callback server failed: ${N.message}`, "OAuth callback server failed"));
        }), z.listen(M, "127.0.0.1", () => void Ue()), z.unref();
        F = setTimeout((N, X) => {
          N(), X(new x("Authentication timeout", "Authentication timeout"));
        }, 300000, G, q), F.unref();
      });
    D = !0, re(e, "Completing auth flow with authorization code"), ah().record(Te);
    let _e = await GEt(K, {
      serverUrl: serverConfigForAnalytics_2.url,
      authorizationCode: Te,
      iss: iss,
      resourceMetadataUrl: w.resourceMetadataUrl,
      fetchFn: Pce(e, serverConfigForAnalytics_2, NKt()),
      skipIssuerMetadataValidation: !0
    });
    if (re(e, `Auth result: ${_e}`), _e === "AUTHORIZED") {
      let L = await K.tokens().catch(() => {
        return;
      });
      if (re(e, `Tokens after auth: ${L ? "Present" : "Missing"}`), L) re(e, `Token expires_in: ${L.expires_in}`);
      i("tengu_mcp_oauth_flow_success", {
        flowAttemptId: ye(R),
        transportType: c(serverConfigForAnalytics_2.type),
        ...(Ik(serverConfigForAnalytics_2) && {
          mcpServerBaseUrl: Ik(serverConfigForAnalytics_2)
        })
      }), g("mcp_oauth_flow");
    } else throw new x("Unexpected auth result: " + _e, "Unexpected auth result");
  } catch (U) {
    re(e, `Error during auth completion: ${NL(U, serverConfigForAnalytics_2.url)}`);
    let O = "unknown",
      M,
      B,
      C = d(U),
      P = U instanceof Error ? U.cause : void 0;
    if (U instanceof AuthenticationCancelledError) O = "cancelled";else if (U instanceof IssuerEchoCrossOriginError || P instanceof IssuerEchoCrossOriginError) O = "issuer_echo_denied";else if (U instanceof Qrt || P instanceof Qrt) O = [U, P].find(item => item instanceof Qrt)?.kind === "metadata" ? "issuer_echo_mismatch" : "issuer_response_mismatch";else if (/AADSTS\d/.test(C)) O = "entra_specific";else if (/redirect[_ ]uri/i.test(C)) O = "redirect_uri_mismatch";else if (D && (ke(U) || ke(P))) O = "token_response_schema_rejected";else if (D) O = "token_exchange_failed";else if (C.includes("Authentication timeout")) O = "timeout";else if (C.includes("OAuth error:")) O = "provider_denied";else if (C.includes("already in use") || C.includes("EADDRINUSE") || C.includes("callback server failed") || C.includes("No available port")) O = "port_unavailable";else if (C.includes("SDK auth failed")) O = Q5s(C, P);
    let K = [P, U].find(item => item instanceof Zir),
      ie = (P instanceof Error ? P : U instanceof Error ? U : null)?.message.match(/^HTTP (\d{3})\b/);
    if (K) B = K.status;else if (ie) B = Number(ie[1]);
    if (P instanceof $V) M = P.code;
    if (U instanceof $V) {
      if (M = U.code, U.code === "invalid_client" || U.code === "unauthorized_client") {
        let z = md(e, serverConfigForAnalytics_2);
        try {
          await qn().mutate(F => {
            let H = F.mcpOAuth?.[z];
            if (!H) return F;
            return {
              ...F,
              mcpOAuth: {
                ...F.mcpOAuth,
                [z]: {
                  ...H,
                  clientId: void 0,
                  clientSecret: void 0
                }
              }
            };
          });
        } catch (error) {
          re(e, `clear clientId failed: ${d(error)}`);
        }
      }
    }
    if (!/^OAuth error: access_denied(?: |$)/.test(C) && (O === "timeout" || C.includes("OAuth error:"))) {
      let z = md(e, serverConfigForAnalytics_2);
      await qn().mutate(F => {
        let H = F.mcpOAuth?.[z];
        if (!H?.clientId || H.accessToken || H.refreshToken || H.clientId !== S?.clientId) return F;
        return {
          ...F,
          mcpOAuth: {
            ...F.mcpOAuth,
            [z]: {
              ...H,
              clientId: void 0,
              clientSecret: void 0
            }
          }
        };
      }).catch(F => re(e, `drop clientId failed: ${d(F)}`));
    }
    if (O !== "cancelled") m("mcp_oauth_flow", "mcp_oauth_flow_failed");
    i("tengu_mcp_oauth_flow_error", {
      flowAttemptId: ye(R),
      reason: c(O),
      error_code: M === void 0 ? void 0 : J5s(M),
      http_status: tY(B),
      transportType: c(serverConfigForAnalytics_2.type),
      ...(Ik(serverConfigForAnalytics_2) && {
        mcpServerBaseUrl: Ik(serverConfigForAnalytics_2)
      })
    });
    let Z = NL(U, serverConfigForAnalytics_2.url);
    throw Z === d(U) ? U : Error(Z, {
      cause: U
    });
  }
}
function rCn(e, t) {
  return async (n, r) => {
    let h = await e(n, r);
    if (h.status === 401 || h.status === 403) t.sawAuthChallenge = !0;
    if (t.noteServerAnswer(n, h.status === 401 || h.status === 403 && fNe(h).error === "insufficient_scope"), !new Headers(r?.headers).has("authorization")) return h;
    if (h.status === 403) {
      let {
        error: error_2,
        scope: scope_2
      } = fNe(h);
      if (error_2 === "insufficient_scope" && scope_2) t.markStepUpPending(scope_2);
    } else if (h.status === 401) t.clearStepUpPending();
    return h;
  };
}
class HKt {
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
  _presented;
  onAuthorizationUrlCallback;
  skipBrowserOpen;
  constructor(e, t, n = zqe(), r = !1, h, l) {
    this.serverName = e, this.serverConfig = t, this.redirectUri = n, this.handleRedirection = r, this.onAuthorizationUrlCallback = h, this.skipBrowserOpen = l ?? !1, this._presented = ah();
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
    if (t) e.scope = t, re(this.serverName, `Using scope from metadata: ${hT("scope", e.scope)}`);
    return e;
  }
  get clientMetadataUrl() {
    if (!Pe(this.redirectUri)) {
      re(this.serverName, `redirectUri ${to(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
      return;
    }
    let e = De();
    if (e !== wGe) re(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    this._metadata = e, this._metadataEchoMode = ue() ? "enforce" : "observe";
  }
  getCuratedMetadataScope() {
    let e = ze(this._metadata);
    if (e !== void 0) return e;
    if (this.serverConfig.oauth?.authServerMetadataUrl && Array.isArray(this._metadata?.scopes_supported)) return this._metadata.scopes_supported.join(" ");
    return;
  }
  markStepUpPending(e) {
    this._pendingStepUpScope = e, re(this.serverName, `Marked step-up pending: ${hT("scope", e)}`);
  }
  get pendingStepUpScope() {
    return this._pendingStepUpScope;
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
    let e = await Sge();
    if (e === wl) throw re(this.serverName, "Credential store read failed; not reporting credentials as absent"), new RJe(this.serverName);
    return e;
  }
  async state() {
    if (!this._state) this._state = et(32).toString("base64url"), re(this.serverName, "Generated new OAuth state");
    return this._state;
  }
  async clientInformation() {
    let e = await this.resolveClientInformation();
    return this._presented.record(e?.client_secret), this._presented.record(LEt(e?.client_id, e?.client_secret)), e;
  }
  async resolveClientInformation() {
    let e = await this.readCredentialStore(),
      t = md(this.serverName, this.serverConfig),
      client_secret = e?.mcpOAuthClientConfig?.[t]?.clientSecret,
      r = this.serverConfig.oauth?.clientId,
      h = e?.mcpOAuth?.[t],
      l = this.handleRedirection && mt(h?.clientId) && !Pe(this.redirectUri);
    if (l) {
      if (re(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${to(this.redirectUri)} \u2014 ${r ? "serving the configured client" : "registering via DCR"} instead`), r) await this.patchStoredClientEntry(t, {
        clientId: r,
        clientSecret: void 0,
        redirectUri: this.redirectUri
      }, "stale CIMD client_id repair");
    }
    if (h?.clientId && !l) {
      let redirectUri = h.redirectUri;
      if (this.handleRedirection && (redirectUri ? Ae(redirectUri) !== Ae(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
        let S = redirectUri ? to(redirectUri) : "localhost";
        if (!r) {
          re(this.serverName, `Cached client_id was registered for ${S}; current redirectUri is ${to(this.redirectUri)} \u2014 forcing re-DCR`);
          return;
        }
        if (h.clientId !== r) return re(this.serverName, `Stored client_id is stale and its redirectUri ${S} predates ${to(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`), await this.patchStoredClientEntry(t, {
          clientId: r,
          clientSecret: void 0,
          redirectUri: this.redirectUri
        }, "stale client_id repair"), this._lastServedClientId = r, {
          client_id: r,
          issuer: h.issuer,
          client_secret: client_secret
        };
        re(this.serverName, `Stored redirectUri ${S} predates ${to(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`), await this.patchStoredClientEntry(t, {
          redirectUri: this.redirectUri
        }, "stored redirectUri convergence");
      }
      return re(this.serverName, "Found client info"), this._lastServedClientId = h.clientId, {
        client_id: h.clientId,
        issuer: h.issuer,
        client_secret: h.clientSecret ?? (h.clientId === r ? client_secret : void 0)
      };
    }
    if (r) return re(this.serverName, "Using pre-configured client ID"), this._lastServedClientId = r, {
      client_id: r,
      client_secret: client_secret
    };
    if (!this.handleRedirection && this.registrationOfferedByDiscovery && !h?.accessToken && !h?.refreshToken) throw re(this.serverName, "No client info found; deferring client registration to authentication time"), new McpClientRegistrationDeferredError(this.serverName);
    re(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, t, n) {
    try {
      if (!(await qn().mutate(h => {
        let l = h.mcpOAuth?.[e];
        if (!l) return h;
        return {
          ...h,
          mcpOAuth: {
            ...h.mcpOAuth,
            [e]: {
              ...l,
              ...t
            }
          }
        };
      }))?.success) re(this.serverName, `${n} resolved unsuccessful`);
    } catch (error) {
      re(this.serverName, `${n} failed: ${d(error)}`);
    }
  }
  async saveClientInformation(e) {
    this._presented.record(e.client_secret), this._presented.record(LEt(e.client_id, e.client_secret));
    let t = md(this.serverName, this.serverConfig);
    try {
      if ((await qn().mutate(r => ({
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
      })))?.success) this._lastServedClientId = e.client_id;else re(this.serverName, "saveClientInformation persist resolved unsuccessful");
    } catch (error) {
      re(this.serverName, `saveClientInformation persist failed: ${d(error)}`);
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(),
      t = md(this.serverName, this.serverConfig),
      n = e?.mcpOAuth?.[t];
    if (mB() && this.serverConfig.oauth?.xaa && !n?.refreshToken && (!n?.accessToken || n.expiresAt != null && (n.expiresAt - Date.now()) / 1000 <= 300)) {
      if (!this._refreshInProgress) re(this.serverName, n ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange"), this._refreshInProgress = this.xaaRefresh().finally(() => {
        this._refreshInProgress = void 0;
      });
      try {
        let S = await this._refreshInProgress;
        if (S) return this._lastServedAccessToken = S.access_token, this._presented.record(S.access_token), this._presented.record(S.refresh_token), this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken, {
          ...S,
          issuer: n?.issuer
        };
      } catch (error) {
        re(this.serverName, `XAA silent exchange failed: ${d(error)}`);
      }
    }
    if (!n) {
      re(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (!n.accessToken) {
      re(this.serverName, "No access token in storage"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    this._lastServedAccessToken = n.accessToken, this._presented.record(n.accessToken), this._presented.record(n.refreshToken), this._lastServedRefreshToken = n.refreshToken;
    let expires_in = n.expiresAt != null ? (n.expiresAt - Date.now()) / 1000 : void 0,
      _pendingStepUpScope = this._pendingStepUpScope,
      l = _pendingStepUpScope !== void 0;
    if (l) re(this.serverName, `Step-up pending (${hT("scope", _pendingStepUpScope)}), omitting refresh_token`);
    if (expires_in != null && expires_in <= 0 && !n.refreshToken) {
      re(this.serverName, "Token expired without refresh token"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (expires_in != null && expires_in <= 300 && n.refreshToken && !l) {
      if (!this._refreshInProgress) re(this.serverName, `Token expires in ${Math.floor(expires_in)}s, attempting proactive refresh`), this._refreshInProgress = this.refreshAuthorization(n.refreshToken).finally(() => {
        this._refreshInProgress = void 0;
      });else re(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let S = await this._refreshInProgress;
        if (S) return re(this.serverName, "Token refreshed successfully"), this._lastServedAccessToken = S.access_token, this._presented.record(S.access_token), this._presented.record(S.refresh_token), this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken, {
          ...S,
          issuer: n?.issuer
        };
        re(this.serverName, "Token refresh failed, returning current tokens");
      } catch (error) {
        re(this.serverName, `Token refresh error: ${NL(error, this.serverConfig.url)}`);
      }
    }
    let s = {
      access_token: n.accessToken,
      refresh_token: l ? void 0 : n.refreshToken,
      expires_in: expires_in,
      scope: n.scope,
      token_type: "Bearer",
      issuer: n.issuer
    };
    return re(this.serverName, "Returning tokens"), re(this.serverName, `Has refresh token: ${!!s.refresh_token}`), re(this.serverName, expires_in != null ? `Expires in: ${Math.floor(expires_in)}s` : "No expiration specified"), s;
  }
  async saveTokens(e) {
    this._presented.record(e.access_token), this._presented.record(e.refresh_token);
    let t = e.access_token !== this._lastServedAccessToken,
      _flowDiscoveryStateAt = this._flowDiscoveryStateAt;
    if (t && this.handleRedirection) this._pendingStepUpScope = void 0;
    let r = md(this.serverName, this.serverConfig);
    re(this.serverName, "Saving tokens"), re(this.serverName, `Token expires in: ${e.expires_in}`), re(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
    let signIn = this._servedOverrideAuthorizationServerUrl === void 0 ? this._discoveredAuthorizationServer : {
        authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
        oauthMetadataFound: !0
      },
      servedMetadataUrl = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl,
      s,
      S;
    try {
      s = await qn().mutate(v => ({
        ...v,
        mcpOAuth: {
          ...v.mcpOAuth,
          [r]: {
            ...v.mcpOAuth?.[r],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? v.mcpOAuth?.[r]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope,
            issuer: e.issuer ?? v.mcpOAuth?.[r]?.issuer,
            discoveryState: aCn({
              previous: v.mcpOAuth?.[r]?.discoveryState,
              signIn: signIn,
              servedMetadataUrl: servedMetadataUrl,
              interactiveSignIn: this.handleRedirection
            })
          }
        }
      }));
    } catch (error) {
      S = error;
    }
    if (s?.success) this._lastServedAccessToken = e.access_token, this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken;
    if (this.logTokenPersistFailed(s, S), t && this._flowDiscoveryStateAt === _flowDiscoveryStateAt) this._flowDiscoveryState = void 0, this._flowDiscoveryStateAt = 0;
  }
  logTokenPersistFailed(e, t) {
    Fe(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = Dte();
    if (!e) return;
    let idpIdToken_2 = await oCn(e.issuer);
    if (!idpIdToken_2) {
      re(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let clientId_3 = this.serverConfig.oauth?.clientId,
      r = await qes(this.serverName, this.serverConfig);
    if (!clientId_3 || !r?.clientSecret) {
      re(this.serverName, "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh");
      return;
    }
    let idpClientSecret_2 = await Vir(e.issuer),
      l;
    try {
      l = await sCn(e.issuer);
    } catch (error) {
      re(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${d(error)}`);
      return;
    }
    this._presented.record(r.clientSecret);
    try {
      let s = await ve(this.serverConfig.url, {
          clientId: clientId_3,
          clientSecret: r.clientSecret,
          idpClientId: e.clientId,
          idpClientSecret: idpClientSecret_2,
          idpIdToken: idpIdToken_2,
          idpTokenEndpoint: l.token_endpoint
        }, this.serverName),
        S = md(this.serverName, this.serverConfig),
        v,
        A;
      try {
        v = await qn().mutate(y => {
          let T = y.mcpOAuth?.[S];
          return {
            ...y,
            mcpOAuth: {
              ...y.mcpOAuth,
              [S]: {
                ...T,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: s.access_token,
                refreshToken: s.refresh_token ?? T?.refreshToken,
                expiresAt: s.expires_in != null ? Date.now() + s.expires_in * 1000 : void 0,
                scope: s.scope,
                clientId: clientId_3,
                clientSecret: r.clientSecret,
                discoveryState: MEt({
                  previous: T?.discoveryState,
                  issuedBy: s.authorizationServerUrl,
                  interactiveSignIn: !1
                })
              }
            }
          };
        });
      } catch (error) {
        A = error;
      }
      return this.logTokenPersistFailed(v, A), {
        access_token: s.access_token,
        token_type: "Bearer",
        expires_in: s.expires_in,
        scope: s.scope,
        refresh_token: s.refresh_token
      };
    } catch (error) {
      if (error instanceof XaaTokenExchangeError && error.shouldClearIdToken) await Gir(e.issuer), re(this.serverName, "XAA: cleared id_token after exchange failure");
      throw error;
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope ? void 0 : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : void 0),
      n = e.searchParams.get("scope"),
      r = t ?? n;
    if (r !== n) re(this.serverName, `Overrode authorization scope from ${n ? hT("scope", n) : "NONE"} to configured: ${r ? hT("scope", r) : "NONE"}`);
    let h = r === null ? null : Z5s(r, this._metadata);
    if (h !== null && h !== n) {
      if (e.searchParams.set("scope", h), h !== t) re(this.serverName, "Appended offline_access to authorization scope");
    }
    let l = e8s(e),
      s = e.searchParams.getAll("prompt"),
      S = l ? s.filter(item => item !== "consent") : s;
    if (S.length !== s.length || S.length > 1) {
      if (e.searchParams.delete("prompt"), S.length > 0) e.searchParams.set("prompt", S.includes("consent") ? "consent" : S.at(-1));
    }
    this._authorizationUrl = e.toString();
    let v = e.searchParams.get("scope");
    if (re(this.serverName, `Authorization URL: ${Wes(e)}`), re(this.serverName, `Scopes in URL: ${v ? hT("scope", v) : "NOT FOUND"}`), v) this._scopes = v, re(this.serverName, `Captured scopes from authorization URL: ${hT("scope", v)}`);else {
      let R = this.getCuratedMetadataScope();
      if (R) this._scopes = R, re(this.serverName, `Using scopes from metadata: ${hT("scope", R)}`);else re(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let R = md(this.serverName, this.serverConfig),
        D = this._scopes,
        U = !1;
      try {
        await qn().mutate(O => {
          let M = O.mcpOAuth?.[R];
          if (!M) return O;
          return U = !0, {
            ...O,
            mcpOAuth: {
              ...O.mcpOAuth,
              [R]: {
                ...M,
                stepUpScope: D
              }
            }
          };
        });
      } catch (error) {
        re(this.serverName, `step-up scope persist failed: ${d(error)}`);
      }
      if (U) re(this.serverName, `Persisted step-up scope: ${hT("scope", D)}`);
    }
    if (!this.handleRedirection) {
      re(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let A = e.toString();
    if (!A.startsWith("http://") && !A.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    re(this.serverName, "Redirecting to authorization URL");
    let y = Wes(e);
    if (re(this.serverName, `Authorization URL: ${y}`), this.onAuthorizationUrlCallback) this.onAuthorizationUrlCallback(A);
    if (this.skipBrowserOpen) {
      re(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${y}`);
      return;
    }
    let headless = $G();
    if (headless) re(this.serverName, `Skipping browser open (headless environment). URL: ${y}`);else re(this.serverName, `Opening authorization URL: ${y}`);
    let success = headless ? !1 : await Hs(A);
    if (i("tengu_mcp_oauth_browser_open", {
      success: success,
      headless: headless,
      platform: c(I())
    }), !headless && !success) re(this.serverName, "Browser didn't open automatically. URL is shown in UI.");
  }
  async saveCodeVerifier(e) {
    re(this.serverName, "Saving code verifier"), this._codeVerifier = e;
  }
  async codeVerifier() {
    if (!this._codeVerifier) throw re(this.serverName, "No code verifier saved"), Error("No code verifier saved");
    return re(this.serverName, "Returning code verifier"), this._presented.record(this._codeVerifier), this._codeVerifier;
  }
  async invalidateCredentials(e) {
    if (e === "verifier") {
      this._codeVerifier = void 0, re(this.serverName, "Invalidated credentials (scope: verifier)");
      return;
    }
    let t = e,
      n = md(this.serverName, this.serverConfig),
      r = !1;
    try {
      let _lastServedClientId = this._lastServedClientId,
        _lastServedAccessToken = this._lastServedAccessToken,
        _lastServedRefreshToken = this._lastServedRefreshToken;
      await qn().mutate(S => {
        let v = S.mcpOAuth?.[n];
        if (!v) return S;
        let mcpOAuth_3 = {
          ...S.mcpOAuth
        };
        switch (t) {
          case "all":
            {
              let y = _lastServedAccessToken != null && !!v.accessToken && v.accessToken !== _lastServedAccessToken,
                T = _lastServedClientId != null && v.clientId != null && v.clientId !== _lastServedClientId;
              if (y || T) return re(this.serverName, `invalidateCredentials('all') preserved: ${y ? "foreign token" : "concurrent re-registration"}`), S;
              if (!v.clientId && !v.refreshToken && v.accessToken === "") return S;
              mcpOAuth_3[n] = {
                serverName: v.serverName,
                serverUrl: v.serverUrl,
                accessToken: "",
                ...(v.discoveryState && {
                  discoveryState: v.discoveryState
                }),
                ...(v.stepUpScope && {
                  stepUpScope: v.stepUpScope
                })
              };
              break;
            }
          case "client":
            mcpOAuth_3[n] = {
              ...v,
              clientId: void 0,
              clientSecret: void 0
            };
            break;
          case "tokens":
            {
              if (_lastServedRefreshToken != null && v.refreshToken && v.refreshToken !== _lastServedRefreshToken || _lastServedAccessToken != null && !!v.accessToken && v.accessToken !== _lastServedAccessToken) return re(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation"), S;
              mcpOAuth_3[n] = {
                ...v,
                accessToken: "",
                refreshToken: void 0,
                expiresAt: 0
              };
              break;
            }
          case "discovery":
            {
              if (!v.discoveryState?.authorizationServerMetadata) return re(this.serverName, "invalidateCredentials('discovery') preserved: concurrent URL-only re-save"), S;
              mcpOAuth_3[n] = {
                ...v,
                discoveryState: kRe(v.discoveryState)
              };
              break;
            }
        }
        return r = !0, {
          ...S,
          mcpOAuth: mcpOAuth_3
        };
      });
    } catch (error) {
      re(this.serverName, `invalidateCredentials persist failed: ${d(error)}`);
    }
    if (r) re(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    if (e.authorizationServerMetadata) nCn({
      serverName: this.serverName,
      site: "sdk_auth",
      expectedIssuer: e.authorizationServerUrl,
      receivedIssuer: e.authorizationServerMetadata.issuer,
      serverConfig: this.serverConfig
    });
    this._flowDiscoveryState = e, this._flowDiscoveryStateAt = Date.now(), this._flowDiscoveryStateFromConfiguredUrl = !1;
    let t = md(this.serverName, this.serverConfig);
    re(this.serverName, `Saving discovery state (authServer: ${to(e.authorizationServerUrl)})`);
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
      await qn().mutate(l => {
        let s = iCn({
          previous: l.mcpOAuth?.[t]?.discoveryState,
          discovered: discovered,
          servedMetadataUrl: servedMetadataUrl_2
        });
        return {
          ...l,
          mcpOAuth: {
            ...l.mcpOAuth,
            [t]: {
              ...l.mcpOAuth?.[t],
              serverName: this.serverName,
              serverUrl: this.serverConfig.url,
              accessToken: l.mcpOAuth?.[t]?.accessToken || "",
              expiresAt: l.mcpOAuth?.[t]?.expiresAt,
              discoveryState: {
                ...s,
                resourceMetadataUrl: e.resourceMetadataUrl,
                registrationNotOfferedAt: authorizationServerMetadata_2 === void 0 ? l.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt : typeof authorizationServerMetadata_2.registration_endpoint !== "string" && authorizationServerMetadata_2.client_id_metadata_document_supported !== !0 ? Date.now() : void 0
              }
            }
          }
        };
      });
    } catch (error) {
      re(this.serverName, `saveDiscoveryState persist failed: ${d(error)}`);
    }
  }
  servePolicyCheckedDiscoveryState(e) {
    if (e?.authorizationServerMetadata && e.authorizationServerUrl) try {
      nCn({
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
    if (configuredMetadataUrl_2) {
      re(this.serverName, `Fetching metadata from configured URL: ${to(configuredMetadataUrl_2)}`);
      try {
        let authorizationServerMetadata_3 = await he(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: configuredMetadataUrl_2,
          fetchFn: Pce(this.serverName, this.serverConfig, NKt())
        });
        if (authorizationServerMetadata_3) {
          let S = {
            authorizationServerUrl: authorizationServerMetadata_3.issuer,
            authorizationServerMetadata: authorizationServerMetadata_3
          };
          return this._servedOverrideAuthorizationServerUrl = authorizationServerMetadata_3.issuer, this._servedOverrideDocuments.set(authorizationServerMetadata_3, configuredMetadataUrl_2), this._flowDiscoveryState = S, this._flowDiscoveryStateFromConfiguredUrl = !0, this.servePolicyCheckedDiscoveryState(S);
        }
      } catch (error) {
        re(this.serverName, `Failed to fetch from configured metadata URL: ${NL(error, this.serverConfig.url)}`);
      }
      if (this._flowDiscoveryStateFromConfiguredUrl) this._servedOverrideAuthorizationServerUrl = this._flowDiscoveryState?.authorizationServerUrl;
      return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    }
    if (this._flowDiscoveryState && Date.now() - this._flowDiscoveryStateAt < Me) return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let _flowDiscoveryStateAt_2 = this._flowDiscoveryStateAt,
      r = await qn().readAsync();
    if (this._flowDiscoveryState && this._flowDiscoveryStateAt !== _flowDiscoveryStateAt_2 && Date.now() - this._flowDiscoveryStateAt < Me) return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let h = md(this.serverName, this.serverConfig),
      l = r?.mcpOAuth?.[h]?.discoveryState;
    if (l?.authorizationServerUrl) {
      re(this.serverName, `Returning cached discovery state (authServer: ${to(l.authorizationServerUrl)})`);
      let s = {
        authorizationServerUrl: l.authorizationServerUrl,
        resourceMetadataUrl: l.resourceMetadataUrl,
        resourceMetadata: l.resourceMetadata,
        authorizationServerMetadata: l.authorizationServerMetadata
      };
      try {
        this.servePolicyCheckedDiscoveryState(s);
      } catch (error) {
        if (error instanceof IssuerEchoCrossOriginError) {
          if (await this.invalidateCredentials("discovery").catch(() => {}), this._flowDiscoveryStateAt === _flowDiscoveryStateAt_2) this._flowDiscoveryState = void 0, this._flowDiscoveryStateAt = 0;
        }
        throw error;
      }
      return this._flowDiscoveryStateFromConfiguredUrl = !1, this._flowDiscoveryState = s;
    }
    return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
  }
  async refreshAuthorization(e) {
    if (de()) {
      re(this.serverName, "claude-code-server session; skipping refresh");
      return;
    }
    let t = md(this.serverName, this.serverConfig),
      n = jx();
    await se().mkdir(n);
    let r = t.replace(/[^a-zA-Z0-9]/g, "_"),
      h = it(n, `mcp-refresh-${r}.lock`),
      l;
    for (let s = 0; s < Se; s++) try {
      re(this.serverName, `Acquiring refresh lock (attempt ${s + 1})`), l = await dl(h, {
        realpath: !1,
        stale: 60000,
        update: 5000,
        onCompromised: () => {
          re(this.serverName, "Refresh lock was compromised");
        }
      }), re(this.serverName, "Acquired refresh lock");
      break;
    } catch (error) {
      let v = k(error);
      if (v === "ELOCKED") {
        re(this.serverName, `Refresh lock held by another process, waiting (attempt ${s + 1}/${Se})`), await Y(1000 + Math.random() * 1000);
        continue;
      }
      re(this.serverName, `Failed to acquire refresh lock: ${v}; skipping refresh`);
      return;
    }
    if (!l) {
      re(this.serverName, `Could not acquire refresh lock after ${Se} retries; skipping refresh`);
      return;
    }
    try {
      GD();
      let v = (await qn().readAsync())?.mcpOAuth?.[t];
      if (v) {
        let expires_in_2 = v.expiresAt != null ? (v.expiresAt - Date.now()) / 1000 : void 0;
        if (v.accessToken && (expires_in_2 == null || expires_in_2 > 300)) return re(this.serverName, expires_in_2 != null ? `Another process already refreshed tokens (expires in ${Math.floor(expires_in_2)}s)` : "Another process already refreshed tokens (no expiration)"), {
          access_token: v.accessToken,
          refresh_token: v.refreshToken,
          expires_in: expires_in_2,
          scope: v.scope,
          token_type: "Bearer"
        };
        if (v.refreshToken) e = v.refreshToken, this._lastServedRefreshToken = v.refreshToken, this._presented.record(v.refreshToken);
      }
      return await this._doRefresh(e);
    } finally {
      if (l) try {
        await l(), re(this.serverName, "Released refresh lock");
      } catch {
        re(this.serverName, "Failed to release refresh lock");
      }
    }
  }
  async readConcurrentRefreshWinner() {
    GD();
    let tokenData = (await qn().readAsync())?.mcpOAuth?.[md(this.serverName, this.serverConfig)],
      expires_in_3 = tokenData?.expiresAt != null ? (tokenData.expiresAt - Date.now()) / 1000 : void 0;
    if (tokenData?.accessToken && (expires_in_3 == null || expires_in_3 > 300)) {
      re(this.serverName, "Another process landed fresh tokens; using those");
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
      mcpServerBaseUrl_3 = Ik(this.serverConfig),
      r = (h, l) => {
        i(h === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
          transportType: c(this.serverConfig.type),
          ...(mcpServerBaseUrl_3 && {
            mcpServerBaseUrl: mcpServerBaseUrl_3
          }),
          ...(l && {
            reason: c(l)
          })
        });
      };
    for (let h = 1; h <= t; h++) {
      let clientInformation;
      try {
        re(this.serverName, "Starting token refresh");
        let fetchFn_5 = Pce(this.serverName, this.serverConfig, NKt()),
          S = ue() ? "enforce" : "observe",
          metadata = this._metadataEchoMode === S ? this._metadata : void 0;
        if (!metadata) {
          let y = await this.discoveryState();
          if (y?.authorizationServerMetadata) metadata = y.authorizationServerMetadata;else if (y?.authorizationServerUrl) {
            re(this.serverName, `Re-discovering metadata from persisted auth server URL: ${to(y.authorizationServerUrl)}`);
            let T = y.authorizationServerUrl;
            if (metadata = await VEt(T, {
              fetchFn: fetchFn_5,
              skipIssuerValidation: !0
            }), metadata) nCn({
              serverName: this.serverName,
              site: "refresh_rediscovery",
              expectedIssuer: T,
              receivedIssuer: metadata.issuer,
              serverConfig: this.serverConfig
            });
          }
        }
        if (!metadata) metadata = await he(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
          fetchFn: fetchFn_5,
          serverConfigForAnalytics: this.serverConfig
        });
        if (!metadata) {
          re(this.serverName, "Failed to discover OAuth metadata"), r("failure", "metadata_discovery_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
          return;
        }
        if (this._metadata = metadata, this._metadataEchoMode = ue() ? "enforce" : "observe", clientInformation = await this.clientInformation(), !clientInformation) {
          re(this.serverName, "No client information available"), r("failure", "no_client_info"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
          return;
        }
        let A = await U9r(new URL(this.serverConfig.url), {
          metadata: metadata,
          clientInformation: clientInformation,
          refreshToken: refreshToken,
          resource: new URL(this.serverConfig.url),
          fetchFn: fetchFn_5
        });
        if (A) return re(this.serverName, "Token refresh successful"), await this.saveTokens(A), r("success"), g("mcp_oauth_refresh"), A;
        re(this.serverName, "Token refresh returned no tokens"), r("failure", "no_tokens_returned"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
        return;
      } catch (error) {
        if (error instanceof IssuerEchoCrossOriginError) {
          re(this.serverName, `Token refresh denied by issuer-echo policy: ${d(error)}`), r("failure", "issuer_echo_denied"), m("mcp_oauth_refresh", "mcp_oauth_refresh_issuer_echo_denied");
          return;
        }
        if (error instanceof $V && error.code === moe.InvalidGrant) {
          re(this.serverName, `Token refresh failed with invalid_grant: ${error.message}`);
          let {
            freshTokens: freshTokens_2
          } = await this.readConcurrentRefreshWinner();
          if (freshTokens_2) return p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), freshTokens_2;
          re(this.serverName, "No valid tokens in storage, clearing stored tokens"), r("failure", "invalid_grant"), m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"), await this.invalidateCredentials("tokens"), Ice.emit(this.serverName);
          return;
        }
        if (error instanceof $V && (error.code === "invalid_client" || error.code === "unauthorized_client")) {
          re(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
          let {
            tokenData: tokenData_2,
            freshTokens: freshTokens_3
          } = await this.readConcurrentRefreshWinner();
          if (freshTokens_3) return p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), freshTokens_3;
          if (tokenData_2?.clientId && clientInformation && tokenData_2.clientId !== clientInformation.client_id) {
            re(this.serverName, "Another process re-registered client; preserving"), r("failure", "concurrent_reregister"), p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
            return;
          }
          r("failure", error.code === "unauthorized_client" ? "unauthorized_client" : "invalid_client"), m("mcp_oauth_refresh", error.code === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client"), await this.invalidateCredentials("all"), Ice.emit(this.serverName);
          return;
        }
        if (ke(error)) {
          re(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${d(error)}`), r("failure", "token_response_schema_rejected"), m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
          return;
        }
        let S = error instanceof RJe,
          v = error instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(error.message),
          A = error instanceof $V && (error.code === moe.ServerError || error.code === moe.TemporarilyUnavailable || error.code === moe.TooManyRequests || !dt.has(error.code)),
          y = v || A || S;
        if (!y || h >= t) {
          re(this.serverName, `Token refresh failed: ${NL(error, this.serverConfig.url)}`), r("failure", y ? "transient_retries_exhausted" : "request_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed");
          return;
        }
        let T = 1000 * Math.pow(2, h - 1);
        re(this.serverName, `Token refresh failed, retrying in ${T}ms (attempt ${h}/${t})`), await Y(T);
      }
    }
    return;
  }
}
async function gni() {
  let MCP_CLIENT_SECRET = process.env.MCP_CLIENT_SECRET;
  if (MCP_CLIENT_SECRET) return MCP_CLIENT_SECRET;
  if (!process.stdin.isTTY) throw Error("No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.");
  return new Promise((t, n) => {
    process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0);
    let r = "",
      h = l => {
        let s = l.toString();
        if (s === `
` || s === "\r") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", h), process.stderr.write(`
`), t(r);else if (s === "\x03") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", h), n(Error("Cancelled"));else if (s === "\x7F" || s === "\b") r = r.slice(0, -1);else r += s;
      };
    process.stdin.on("data", h);
  });
}
async function hni(e, t, clientSecret_3) {
  let r = md(e, t);
  try {
    return await qn().mutate(h => ({
      ...h,
      mcpOAuthClientConfig: {
        ...h.mcpOAuthClientConfig,
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
async function yni(e, t) {
  let n = md(e, t);
  await qn().mutate(r => {
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
async function qes(e, t) {
  let r = await qn().readAsync(),
    h = md(e, t);
  return r?.mcpOAuthClientConfig?.[h];
}
function ze(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return;
}
function Z5s(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}
var vt = ["login.microsoftonline.com", "login.microsoftonline.us", "login.partner.microsoftonline.cn", "login.chinacloudapi.cn"],
  St = [".b2clogin.com", ".ciamlogin.com"];
function e8s(e) {
  try {
    let hostname = (typeof e === "string" ? new URL(e) : e).hostname;
    return vt.includes(hostname) || St.some(item => hostname.endsWith(item));
  } catch {
    return !1;
  }
}
export { J5s, Q5s, Wes, zes, NKt, IssuerEchoCrossOriginError as HV, nCn, McpClientRegistrationDeferredError as Ges, AuthenticationCancelledError as FKt, dni, cni, uni, zir, pni, fni, mni, Ves, P9r, rCn, HKt, gni, hni, yni, qes, Z5s, e8s };