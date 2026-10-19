// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { $Cn, lar, dar, OP, tot, yNe, i4t, a4t, IP, hoe, PRe, car, QEt, V9r, K9r } from "B:/~BUN/root/chunk-ntnsdnjk.js";
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c, pe, tY } from "B:/~BUN/root/chunk-jthpk6wv.js";
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
import { Ft } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { Ice } from "B:/~BUN/root/chunk-hds3n5r0.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { mB, Dte, Sge, md, RJe, AJe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { LL } from "B:/~BUN/root/chunk-qp5mhwjf.js";
import { ah, LEt, DL } from "B:/~BUN/root/chunk-jynk66qn.js";
import { zqe, ERe } from "B:/~BUN/root/chunk-bx04wv39.js";
import { Nce, FCn, hT, to, NL, FL } from "B:/~BUN/root/chunk-71zxaep1.js";
import { Ik } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { cTn, Fir, Hir, uTn, l9r } from "B:/~BUN/root/chunk-61ytxz4j.js";
import { kRe, iCn, aCn, MEt, Pce, lCn, dCn } from "B:/~BUN/root/chunk-0zx5qj65.js";
import { $G, Hs } from "B:/~BUN/root/chunk-ac9kwvf4.js";
import { L0e } from "B:/~BUN/root/chunk-9j3awrp0.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
import { randomBytes as Ge, randomUUID as qe } from "crypto";
import { createServer as Je } from "http";
import { join as Ye } from "path";
import { parse as Ze } from "url";
var Le = 30000,
  grant_type = "urn:ietf:params:oauth:grant-type:token-exchange",
  grant_type_2 = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  requested_token_type = "urn:ietf:params:oauth:token-type:id-jag",
  subject_token_type = "urn:ietf:params:oauth:token-type:id_token";
function Ue(e) {
  return (t, r) => {
    let n = AbortSignal.timeout(Le),
      signal = e ? AbortSignal.any([n, e]) : n;
    return fetch(t, {
      ...r,
      ...ra({
        url: String(t)
      }),
      signal: signal
    }).catch(h => FL(h, t));
  };
}
var oe = Ue();
function ie(e) {
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
var De = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function te(e) {
  return (typeof e === "string" ? e : _(e)).replace(De, (r, n) => `"${n}":"[REDACTED]"`);
}
var Xe = f(() => u({
    access_token: o().optional(),
    issued_token_type: o().optional(),
    expires_in: L0e().optional(),
    scope: o().optional()
  })),
  He = f(() => u({
    access_token: o().min(1),
    token_type: o().default("Bearer"),
    expires_in: L0e().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }));
async function je(e, t) {
  let r;
  try {
    r = await car(e, void 0, t?.fetchFn ?? oe);
  } catch (error) {
    if (Ve(error)) throw error;
    let l = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : void 0;
    throw Error(`XAA: PRM discovery failed for ${to(e)} (${l ? `HTTP ${l}` : error instanceof Error ? error.name : typeof error})`);
  }
  if (!r.resource || !r.authorization_servers?.[0]) throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (ie(r.resource) !== ie(e)) throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${to(e)}, got ${to(r.resource)}`);
  return {
    resource: r.resource,
    authorization_servers: r.authorization_servers
  };
}
async function Be(e, t) {
  let r;
  try {
    r = await QEt(e, {
      fetchFn: t?.fetchFn ?? oe
    });
  } catch (error) {
    if (Ve(error)) throw error;
    let l = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : void 0;
    throw new x(`XAA: AS metadata discovery failed (${l ? `HTTP ${l}` : error instanceof Error ? error.name : typeof error})`, "XAA: AS metadata discovery failed");
  }
  if (!r?.issuer || !r.token_endpoint) throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${to(e)}`);
  if (ie(r.issuer) !== ie(e)) throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${to(e)}, got ${to(r.issuer)}`);
  if (!URL.canParse(r.token_endpoint) || new URL(r.token_endpoint).protocol !== "https:") throw Error(`XAA: refusing non-HTTPS token endpoint: ${to(r.token_endpoint)}`);
  return {
    issuer: r.issuer,
    token_endpoint: r.token_endpoint,
    grant_types_supported: r.grant_types_supported,
    token_endpoint_auth_methods_supported: r.token_endpoint_auth_methods_supported
  };
}
async function Ke(e) {
  let t = e.fetchFn ?? oe,
    r = new URLSearchParams({
      grant_type: grant_type,
      requested_token_type: requested_token_type,
      audience: e.audience,
      resource: e.resource,
      subject_token: e.idToken,
      subject_token_type: subject_token_type,
      client_id: e.clientId
    });
  if (e.clientSecret) r.set("client_secret", e.clientSecret);
  if (e.scope) r.set("scope", e.scope);
  let n = await t(e.tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: r
  });
  if (!n.ok) {
    let S = te(await n.text()).slice(0, 200),
      v = n.status < 500;
    throw new XaaTokenExchangeError(`XAA: token exchange failed: HTTP ${n.status}: ${S}`, v);
  }
  let l;
  try {
    l = await n.json();
  } catch {
    throw new XaaTokenExchangeError(`XAA: token exchange returned non-JSON (captive portal?) at ${to(e.tokenEndpoint)}`, !1);
  }
  let h = Xe().safeParse(l);
  if (!h.success) throw new XaaTokenExchangeError(`XAA: token exchange response did not match expected shape: ${te(l)}`, !0);
  let s = h.data;
  if (!s.access_token) throw new XaaTokenExchangeError(`XAA: token exchange response missing access_token: ${te(s)}`, !0);
  if (s.issued_token_type !== requested_token_type) throw new XaaTokenExchangeError(`XAA: token exchange returned unexpected issued_token_type: ${s.issued_token_type}`, !0);
  return {
    jwtAuthGrant: s.access_token,
    expiresIn: s.expires_in,
    scope: s.scope
  };
}
async function We(e) {
  let t = e.fetchFn ?? oe,
    r = e.authMethod ?? "client_secret_basic",
    n = new URLSearchParams({
      grant_type: grant_type_2,
      assertion: e.assertion
    });
  if (e.scope) n.set("scope", e.scope);
  let headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  if (r === "client_secret_basic") {
    let v = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
    headers.Authorization = `Basic ${v}`, ah().record(v);
  } else n.set("client_id", e.clientId), n.set("client_secret", e.clientSecret);
  ah().record(e.clientSecret), ah().record(e.assertion);
  let h = await t(e.tokenEndpoint, {
    method: "POST",
    headers: headers,
    body: n
  });
  if (!h.ok) {
    let v = te(await h.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${h.status}: ${v}`);
  }
  let s;
  try {
    s = await h.json();
  } catch {
    throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${to(e.tokenEndpoint)}`);
  }
  let S = He().safeParse(s);
  if (!S.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${te(s)}`);
  return S.data;
}
async function he(e, t, r = "xaa", n) {
  let fetchFn = Ue(n);
  re(r, `XAA: discovering PRM for ${to(e)}`);
  let h = await je(e, {
    fetchFn: fetchFn
  });
  re(r, `XAA: discovered resource=${to(h.resource)} ASes=[${h.authorization_servers.map(to).join(", ")}]`);
  let s,
    S = [];
  for (let y of h.authorization_servers) {
    let R;
    try {
      R = await Be(y, {
        fetchFn: fetchFn
      });
    } catch (error) {
      if (n?.aborted) throw error;
      S.push(`${to(y)}: ${error instanceof Error ? error.message : String(error)}`);
      continue;
    }
    if (R.grant_types_supported && !R.grant_types_supported.includes(grant_type_2)) {
      S.push(`${to(y)}: does not advertise jwt-bearer grant (supported: ${R.grant_types_supported.join(", ")})`);
      continue;
    }
    s = R;
    break;
  }
  if (!s) throw new x(`XAA: no authorization server supports jwt-bearer. Tried: ${S.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${h.authorization_servers.length})`);
  let token_endpoint_auth_methods_supported = s.token_endpoint_auth_methods_supported,
    authMethod = token_endpoint_auth_methods_supported && !token_endpoint_auth_methods_supported.includes("client_secret_basic") && token_endpoint_auth_methods_supported.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
  re(r, `XAA: AS issuer=${to(s.issuer)} token_endpoint=${to(s.token_endpoint)} auth_method=${authMethod}`), re(r, "XAA: exchanging id_token for ID-JAG at IdP");
  let w = await Ke({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: s.issuer,
    resource: h.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: fetchFn
  });
  re(r, "XAA: ID-JAG obtained"), re(r, "XAA: exchanging ID-JAG for access_token at AS");
  let C = await We({
    tokenEndpoint: s.token_endpoint,
    assertion: w.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: authMethod,
    fetchFn: fetchFn
  });
  return re(r, "XAA: access_token obtained"), {
    ...C,
    authorizationServerUrl: s.issuer
  };
}
var Qe = 30000,
  et = 500,
  tt = new Set([...S2, ...AB, "ETIMEDOUT"]);
function rt(e) {
  if (Ve(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = yg(e);
  return t !== null && tt.has(t.code);
}
function _e(e) {
  let t = e;
  return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues);
}
var nt = ["invalid_request", "invalid_client", "invalid_grant", "unauthorized_client", "unsupported_grant_type", "invalid_scope", "access_denied", "server_error", "temporarily_unavailable", "unsupported_response_type", "unsupported_token_type", "invalid_token", "method_not_allowed", "too_many_requests", "invalid_client_metadata", "insufficient_scope", "invalid_target", "authorization_pending", "expired_token", "slow_down"];
function q5s(e) {
  let t = nt.find(item => item === e);
  return pe(t) ?? b("other");
}
function K5s(e, t) {
  let r = t instanceof Error ? `${e}
${t.message}` : e;
  if (r.includes("dynamic client registration") || t instanceof OP && t.errorCode === "invalid_client_metadata") return "dcr_failed";
  if (r.includes("trying to load") && r.includes("metadata") || r.includes("Incompatible auth server")) return "discovery_failed";
  if (t instanceof OP) return "dcr_rejected";
  let n = k(t) ?? k(t instanceof Error ? t.cause : void 0);
  if (n && AJe.has(n)) return "network_failed";
  return "sdk_auth_failed";
}
var fe = 5;
function ues(e) {
  return to(e.origin + e.pathname) + FCn(e);
}
var it = new Set(["invalid_refresh_token", "expired_refresh_token", "token_expired"]);
async function pes(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    r;
  try {
    r = J(t);
  } catch {
    return new Response(t, e);
  }
  if (lar.safeParse(r).success) return new Response(t, e);
  let n = dar.safeParse(r);
  if (!n.success) return new Response(t, e);
  let l = it.has(n.data.error) ? {
    error: "invalid_grant",
    error_description: n.data.error_description ?? `Server returned non-standard error code: ${n.data.error}`
  } : n.data;
  return new Response(_(l), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers
  });
}
function hKt() {
  return async (e, t) => {
    try {
      return await Oe(e, t);
    } catch (error) {
      if (t?.signal?.aborted || !rt(error)) throw error;
      return await Y(et, t?.signal ?? void 0), await Oe(e, t);
    }
  };
}
async function Oe(e, t) {
  let signal_2 = AbortSignal.timeout(Qe),
    n = t?.method?.toUpperCase() === "POST",
    l = ra({
      url: String(e)
    });
  if (!t?.signal) {
    let v;
    try {
      v = await fetch(e, {
        ...t,
        ...l,
        signal: signal_2
      });
    } catch (error) {
      FL(error, e);
    }
    return n ? pes(v) : v;
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
      ...l,
      signal: abortController.signal
    });
    return S(), n ? pes(v) : v;
  } catch (error) {
    S(), FL(error, e);
  }
}
async function ae(e, t, r) {
  let {
      configuredMetadataUrl: configuredMetadataUrl,
      fetchFn: fetchFn_2,
      resourceMetadataUrl: resourceMetadataUrl
    } = r ?? {},
    fetchFn_3 = fetchFn_2 ?? hKt();
  if (configuredMetadataUrl) {
    if (!configuredMetadataUrl.startsWith("https://")) throw Error(`authServerMetadataUrl must use https:// (got: ${to(configuredMetadataUrl)})`);
    let v = await fetchFn_3(configuredMetadataUrl, {
      headers: {
        Accept: "application/json"
      }
    });
    if (v.ok) {
      let A;
      try {
        A = await v.json();
      } catch {
        throw Error(`Configured auth server metadata at ${to(configuredMetadataUrl)} is not valid JSON`);
      }
      return $Cn.parse(A);
    }
    throw Error(`HTTP ${v.status} fetching configured auth server metadata from ${to(configuredMetadataUrl)}`);
  }
  try {
    let {
      authorizationServerMetadata: authorizationServerMetadata
    } = await V9r(t, {
      fetchFn: fetchFn_3,
      ...(resourceMetadataUrl && {
        resourceMetadataUrl: resourceMetadataUrl
      })
    });
    if (authorizationServerMetadata) return authorizationServerMetadata;
  } catch (error) {
    re(e, `RFC 9728 discovery failed, falling back: ${NL(error, t)}`);
  }
  let S = new URL(t);
  if (S.pathname === "/") return;
  try {
    return await QEt(S, {
      fetchFn: fetchFn_3
    });
  } catch (error) {
    re(e, `Path-aware auth server discovery failed: ${NL(error, t)}`);
    return;
  }
}
class McpClientRegistrationDeferredError extends IP {
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
function me(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}
function Me(e) {
  let t = me(e);
  return t === "http://127.0.0.1" || t === "http://localhost";
}
function Re(e) {
  if (!e?.clientId || !e.redirectUri || !Me(e.redirectUri)) return;
  let t = Number(new URL(e.redirectUri).port);
  return t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === zqe(t) ? t : void 0;
}
function Ie() {
  return a.MCP_OAUTH_CLIENT_METADATA_URL || wGe;
}
function Ee(e) {
  if (!Me(e)) return !1;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return !1;
  }
}
function st(e) {
  return e !== void 0 && (e === wGe || e === Ie());
}
function qti(e) {
  return Ft().oauthCallbackSubmitters.get(e);
}
function Kti(e, t) {
  let activeOAuthFlows = Ft().activeOAuthFlows;
  activeOAuthFlows.set(e, t), t.finally(() => {
    if (activeOAuthFlows.get(e) === t) activeOAuthFlows.delete(e);
  }).catch(() => {});
}
function Yti(e) {
  return Ft().activeOAuthFlows.get(e);
}
async function Nir(e, t) {
  let r = md(e, t),
    n = (await qn().readAsync())?.mcpOAuth?.[r];
  if (!n || n.accessToken || n.refreshToken) return;
  try {
    await qn().mutate(l => {
      let h = l.mcpOAuth?.[r];
      if (!h || h.accessToken || h.refreshToken) return l;
      let mcpOAuth = {
        ...l.mcpOAuth
      };
      return delete mcpOAuth[r], {
        ...l,
        mcpOAuth: mcpOAuth
      };
    });
  } catch (error) {
    re(e, `clear tokenless stub failed: ${d(error)}`);
  }
}
async function be({
  serverName: serverName,
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
    C = Object.keys(configuredHeaders).length > 0 ? {
      beforeRedirect: dCn(endpoint)
    } : {};
  if (clientId && clientSecret) {
    if (authMethod_2 === "client_secret_post") uRLSearchParams.set("client_id", clientId), uRLSearchParams.set("client_secret", clientSecret);else {
      let y = Buffer.from(`${encodeURIComponent(clientId)}:${encodeURIComponent(clientSecret)}`).toString("base64");
      headers_2.Authorization = `Basic ${y}`, ah().record(y);
    }
  } else if (clientId) uRLSearchParams.set("client_id", clientId);else re(serverName, `No client_id available for ${tokenTypeHint} revocation - server may reject`);
  try {
    await Ct.post(endpoint, uRLSearchParams, {
      headers: headers_2,
      ...C
    }), re(serverName, `Successfully revoked ${tokenTypeHint}`);
  } catch (error) {
    if (Ct.isAxiosError(error) && error.response?.status === 401 && accessToken) re(serverName, `Got 401, retrying ${tokenTypeHint} revocation with Bearer auth`), uRLSearchParams.delete("client_id"), uRLSearchParams.delete("client_secret"), await Ct.post(endpoint, uRLSearchParams, {
      headers: {
        ...headers_2,
        Authorization: `Bearer ${accessToken}`
      },
      ...C
    }), re(serverName, `Successfully revoked ${tokenTypeHint} with Bearer auth`);else throw error;
  }
}
async function Xti(e, t) {
  let n = (await qn().readAsync())?.mcpOAuth?.[md(e, t)];
  if (!n?.accessToken && !n?.refreshToken) return;
  return {
    accessToken: n.accessToken || void 0,
    refreshToken: n.refreshToken,
    clientId: n.clientId,
    clientSecret: n.clientSecret,
    ...(n.discoveryState && {
      discoveryState: kRe(n.discoveryState)
    })
  };
}
async function Pe(serverName_2, t, r) {
  let n = ah();
  n.record(r.accessToken), n.record(r.refreshToken), n.record(r.clientSecret);
  let l;
  try {
    let h = r.discoveryState?.authorizationServerUrl ?? t.url,
      s = await ae(serverName_2, h, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: Pce(serverName_2, t, hKt())
      });
    if (!s) re(serverName_2, "No OAuth metadata found"), l = "no_metadata";else {
      let S = "revocation_endpoint" in s ? s.revocation_endpoint : null;
      if (!S) re(serverName_2, "Server does not support token revocation"), l = "no_revocation_endpoint";else {
        let endpoint_2 = String(S),
          configuredHeaders_2 = await lCn(serverName_2, t, endpoint_2),
          w = ("revocation_endpoint_auth_methods_supported" in s ? s.revocation_endpoint_auth_methods_supported : void 0) ?? ("token_endpoint_auth_methods_supported" in s ? s.token_endpoint_auth_methods_supported : void 0),
          authMethod_3 = w && !w.includes("client_secret_basic") && w.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
        if (re(serverName_2, `Revoking tokens via ${to(endpoint_2)} (${authMethod_3})`), r.refreshToken) try {
          await be({
            serverName: serverName_2,
            endpoint: endpoint_2,
            token: r.refreshToken,
            tokenTypeHint: "refresh_token",
            clientId: r.clientId,
            clientSecret: r.clientSecret,
            accessToken: r.accessToken,
            authMethod: authMethod_3,
            configuredHeaders: configuredHeaders_2
          });
        } catch (error) {
          re(serverName_2, `Failed to revoke refresh token: ${d(error)}`), l = "server_revoke_failed";
        }
        if (r.accessToken) try {
          await be({
            serverName: serverName_2,
            endpoint: endpoint_2,
            token: r.accessToken,
            tokenTypeHint: "access_token",
            clientId: r.clientId,
            clientSecret: r.clientSecret,
            accessToken: r.accessToken,
            authMethod: authMethod_3,
            configuredHeaders: configuredHeaders_2
          });
        } catch (error) {
          re(serverName_2, `Failed to revoke access token: ${d(error)}`), l = "server_revoke_failed";
        }
      }
    }
  } catch (error) {
    re(serverName_2, `Failed to revoke tokens: ${d(error)}`), l = "server_revoke_failed";
  }
  return l;
}
async function Jti(e, t, r) {
  let n;
  try {
    let l = (await qn().readAsync())?.mcpOAuth?.[md(e, t)],
      h = {
        ...r,
        accessToken: r.accessToken && r.accessToken !== l?.accessToken ? r.accessToken : void 0,
        refreshToken: r.refreshToken && r.refreshToken !== l?.refreshToken ? r.refreshToken : void 0
      };
    if (!h.accessToken && !h.refreshToken) {
      re(e, "No replaced tokens to revoke"), g("mcp_oauth_revoke");
      return;
    }
    n = await Pe(e, t, h);
  } catch (error) {
    re(e, `Failed to revoke replaced tokens: ${d(error)}`), n = "server_revoke_failed";
  }
  if (n) p("mcp_oauth_revoke", n);else g("mcp_oauth_revoke");
}
async function Qti(serverName_3, t, {
  preserveStepUpState = !1
} = {}) {
  let n = qn(),
    l = await n.readAsync();
  if (!l?.mcpOAuth) {
    g("mcp_oauth_revoke");
    return;
  }
  let h = md(serverName_3, t),
    s = l.mcpOAuth[h],
    S;
  if (s?.accessToken || s?.refreshToken) S = await Pe(serverName_3, t, {
    accessToken: s.accessToken || void 0,
    refreshToken: s.refreshToken,
    clientId: s.clientId,
    clientSecret: s.clientSecret,
    ...(s.discoveryState && {
      discoveryState: kRe(s.discoveryState)
    })
  });else re(serverName_3, "No tokens to revoke");
  try {
    if (preserveStepUpState && s && (s.stepUpScope || s.discoveryState || s.clientId)) await n.mutate(v => {
      let A = v.mcpOAuth?.[h];
      if (A?.accessToken !== s.accessToken || A?.clientId !== s.clientId) return v;
      return {
        ...v,
        mcpOAuth: {
          ...v.mcpOAuth,
          [h]: {
            serverName: serverName_3,
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
    }), re(serverName_3, "Preserved step-up auth state across revocation");else await mes(serverName_3, t);
  } catch (error) {
    re(serverName_3, `clear local tokens failed: ${d(error)}`), S ??= "local_clear_failed";
  }
  if (DL(serverName_3), S) p("mcp_oauth_revoke", S);else g("mcp_oauth_revoke");
}
async function mes(e, t, r) {
  let n = md(e, t),
    l;
  if (await qn().mutate(h => {
    let s = h.mcpOAuth?.[n];
    if (!s) return h;
    let mcpOAuth_2 = {
      ...h.mcpOAuth
    };
    if (s.clientId && r?.preserveClientRegistration?.(s)) {
      if (!s.accessToken && !s.refreshToken) return h;
      mcpOAuth_2[n] = {
        ...s,
        accessToken: "",
        refreshToken: void 0,
        expiresAt: 0,
        scope: void 0
      }, l = "tokens";
    } else delete mcpOAuth_2[n], l = "all";
    return {
      ...h,
      mcpOAuth: mcpOAuth_2
    };
  }), l) re(e, l === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens");
}
function xe(e, t, r, n) {
  if (r?.success) return;
  let l = n ? "mutate_rejected" : "storage_write_failed",
    h = n ? d(n) : r?.warning ?? "storage write failed";
  re(e, `Token persist failed: ${h}`);
  let mcpServerBaseUrl = Ik(t);
  i("tengu_mcp_oauth_token_persist_failed", {
    transportType: c(t.type),
    ...(mcpServerBaseUrl && {
      mcpServerBaseUrl: mcpServerBaseUrl
    }),
    reason: c(l)
  });
}
async function ot(serverName_4, t, onAuthorizationUrl, abortSignal, skipBrowserOpen) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let h = Dte();
  if (!h) throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
  let clientId_2 = t.oauth?.clientId;
  if (!clientId_2) throw Error(`XAA: server '${serverName_4}' needs an AS client_id. Re-add with --client-id.`);
  let clientSecret_2 = (await ges(serverName_4, t))?.clientSecret;
  if (!clientSecret_2) {
    let y = md(serverName_4, t),
      R = Object.keys((await qn().readAsync())?.mcpOAuthClientConfig ?? {}),
      M = Nce(t.headers ?? {});
    throw re(serverName_4, `XAA: secret lookup miss. wanted=${y} have=[${R.join(", ")}] configHeaders=${_(M)}`), Error(`XAA: AS client secret not found for '${serverName_4}'. Re-add with --client-secret.`);
  }
  re(serverName_4, "XAA: starting cross-app access flow");
  let idpClientSecret = await Hir(h.issuer),
    idTokenCacheHit = (await cTn(h.issuer)) !== void 0,
    C = "idp_login";
  try {
    let idpIdToken;
    try {
      idpIdToken = await l9r({
        idpIssuer: h.issuer,
        idpClientId: h.clientId,
        idpClientSecret: idpClientSecret,
        callbackPort: h.callbackPort,
        onAuthorizationUrl: onAuthorizationUrl,
        skipBrowserOpen: skipBrowserOpen,
        abortSignal: abortSignal
      });
    } catch (error) {
      if (abortSignal?.aborted) throw new AuthenticationCancelledError();
      throw error;
    }
    C = "discovery";
    let R = await uTn(h.issuer);
    C = "token_exchange", ah().record(clientSecret_2);
    let M;
    try {
      M = await he(t.url, {
        clientId: clientId_2,
        clientSecret: clientSecret_2,
        idpClientId: h.clientId,
        idpClientSecret: idpClientSecret,
        idpIdToken: idpIdToken,
        idpTokenEndpoint: R.token_endpoint
      }, serverName_4, abortSignal);
    } catch (error) {
      if (abortSignal?.aborted) throw new AuthenticationCancelledError();
      let L = d(error);
      if (error instanceof XaaTokenExchangeError) {
        if (error.shouldClearIdToken) await Fir(h.issuer), re(serverName_4, "XAA: cleared cached id_token after token-exchange failure");
      } else if (L.includes("PRM discovery failed") || L.includes("AS metadata discovery failed") || L.includes("no authorization server supports jwt-bearer")) C = "discovery";else if (L.includes("jwt-bearer")) C = "jwt_bearer";
      throw error;
    }
    let U = md(serverName_4, t),
      O = ah();
    O.record(M.access_token), O.record(M.refresh_token);
    let E, H;
    try {
      E = await qn().mutate(T => {
        let L = T.mcpOAuth?.[U];
        return {
          ...T,
          mcpOAuth: {
            ...T.mcpOAuth,
            [U]: {
              ...L,
              serverName: serverName_4,
              serverUrl: t.url,
              accessToken: M.access_token,
              refreshToken: M.refresh_token ?? L?.refreshToken,
              expiresAt: M.expires_in != null ? Date.now() + M.expires_in * 1000 : void 0,
              scope: M.scope,
              clientId: clientId_2,
              clientSecret: clientSecret_2,
              discoveryState: MEt({
                previous: L?.discoveryState,
                issuedBy: M.authorizationServerUrl,
                interactiveSignIn: !0
              })
            }
          }
        };
      });
    } catch (error) {
      H = error;
    }
    if (E?.success) re(serverName_4, "XAA: tokens saved");else xe(serverName_4, t, E, H);
    i("tengu_mcp_oauth_flow_success", {
      authMethod: b("xaa"),
      idTokenCacheHit: idTokenCacheHit
    }), g("mcp_oauth_flow");
  } catch (error) {
    if (error instanceof AuthenticationCancelledError) throw error;
    throw m("mcp_oauth_flow", "mcp_oauth_xaa_failed"), i("tengu_mcp_oauth_flow_failure", {
      authMethod: b("xaa"),
      xaaFailureStage: c(C),
      idTokenCacheHit: idTokenCacheHit
    }), error;
  }
}
async function Zti(e, t, r, n, l) {
  if (!URL.canParse(t.url)) {
    m("mcp_oauth_flow", "mcp_oauth_no_valid_url");
    let U = "configError" in t && typeof t.configError === "string" ? t.configError : void 0;
    throw new x(U || "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.", "MCP OAuth refused: no valid server URL");
  }
  if (t.oauth?.xaa) {
    if (!mB()) throw Error(`XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`);
    i("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: b("xaa"),
      transportType: c(t.type),
      ...(Ik(t) && {
        mcpServerBaseUrl: Ik(t)
      })
    }), await ot(e, t, r, n, l?.skipBrowserOpen);
    return;
  }
  let h = qn(),
    s = md(e, t),
    S = (await h.readAsync())?.mcpOAuth?.[s],
    scope = S?.stepUpScope,
    A = S?.discoveryState?.resourceMetadataUrl,
    w = Re(S),
    resourceMetadataUrl_2;
  if (A) try {
    resourceMetadataUrl_2 = new URL(A);
  } catch {
    re(e, `Invalid cached resourceMetadataUrl: ${to(A)}`);
  }
  let y = {
      scope: scope,
      resourceMetadataUrl: resourceMetadataUrl_2
    },
    R = qe();
  i("tengu_mcp_oauth_flow_start", {
    flowAttemptId: ye(R),
    isOAuthFlow: !0,
    transportType: c(t.type),
    ...(Ik(t) && {
      mcpServerBaseUrl: Ik(t)
    })
  });
  let M = !1;
  try {
    let U = t.oauth?.callbackPort,
      O = !!l?.redirectUri,
      E = O ? 0 : U ?? (await ERe(w)),
      H = l?.redirectUri ?? zqe(E);
    re(e, O ? `Using custom redirectUri: ${to(H)} (no localhost listener)` : `Using redirect port: ${E}${U ? " (from config)" : w && E === w ? " (reusing registered port)" : ""}`);
    try {
      await mes(e, t, {
        preserveClientRegistration: F => E === Re(F) || F.redirectUri === H
      });
    } catch (error) {
      re(e, `clear stored credentials failed: ${d(error)}`);
    }
    let T = Ft(),
      abortController_2 = new AbortController();
    if (!O) T.oauthCallbackListeners.get(E)?.abort(), T.oauthCallbackListeners.set(E, abortController_2);
    let j = new _Kt(e, t, H, !0, r, l?.skipBrowserOpen),
      ge = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (y.scope && !ge) j.markStepUpPending(y.scope);
    let fetchFn_4 = Pce(e, t, hKt());
    try {
      let F = await ae(e, t.url, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: fetchFn_4,
        resourceMetadataUrl: y.resourceMetadataUrl
      });
      if (F) j.setMetadata(F), re(e, `Fetched OAuth metadata with scope: ${hT("scope", $e(F) ?? "") || "NONE"}`);
    } catch (error) {
      re(e, `Failed to fetch OAuth metadata: ${NL(error, t.url)}`);
    }
    let B = await j.state(),
      P = null,
      z = null,
      W = null,
      ve = null,
      G = () => {
        if (P) P.removeAllListeners(), P.on("error", () => {}), P.close(), P = null;
        if (z) clearTimeout(z), z = null;
        if (W) n?.removeEventListener("abort", W), abortController_2.signal.removeEventListener("abort", W), W = null;
        if (T.oauthCallbackListeners.get(E) === abortController_2) T.oauthCallbackListeners.delete(E);
        if (T.oauthCallbackSubmitters.get(e) === ve) T.oauthCallbackSubmitters.delete(e);
        re(e, "MCP OAuth server cleaned up");
      },
      authorizationCode = await new Promise((F, Ne) => {
        let ne = !1,
          Se = N => {
            if (ne) return;
            ne = !0, F(N);
          },
          q = N => {
            if (ne) return;
            ne = !0, Ne(N);
          };
        if (W = () => {
          G(), q(new AuthenticationCancelledError());
        }, n?.aborted || abortController_2.signal.aborted) {
          W();
          return;
        }
        n?.addEventListener("abort", W), abortController_2.signal.addEventListener("abort", W);
        {
          let N = D => {
            try {
              let X = new URL(D),
                Z = X.searchParams.get("code"),
                ue = X.searchParams.get("state"),
                V = X.searchParams.get("error");
              if (!Z && !V) return !1;
              if (ue !== B) return re(e, "Ignoring manual callback URL whose state belongs to a different flow"), !1;
              if (V) {
                let ee = X.searchParams.get("error_description") || "";
                return G(), q(Error(`OAuth error: ${V} - ${ee}`)), !0;
              }
              if (!Z) return !1;
              return re(e, "Received auth code via manual callback URL"), G(), Se(Z), !0;
            } catch {
              return !1;
            }
          };
          ve = N, T.oauthCallbackSubmitters.set(e, N), l?.onWaitingForCallback?.(N, E, B);
        }
        let Ae = async () => {
          try {
            re(e, "Starting SDK auth"), re(e, `Server URL: ${to(t.url)}`);
            let N = await hoe(j, {
              serverUrl: t.url,
              scope: y.scope,
              resourceMetadataUrl: y.resourceMetadataUrl,
              fetchFn: fetchFn_4
            });
            if (re(e, `Initial auth result: ${N}`), N !== "REDIRECT") re(e, `Unexpected auth result, expected REDIRECT: ${N}`);
          } catch (N) {
            re(e, `SDK auth error: ${NL(N, t.url)}`), G(), q(Object.assign(new x(`SDK auth failed: ${NL(N, t.url)}`, "SDK auth failed"), {
              cause: N
            }));
          }
        };
        if (O) Ae();else P = Je((N, D) => {
          let X = Ze(N.url || "", !0);
          if (X.pathname === "/callback") {
            let Z = X.query.code,
              state = X.query.state,
              V = X.query.error,
              error_description = X.query.error_description,
              error_uri = X.query.error_uri;
            if (state !== B) {
              D.writeHead(400, {
                "Content-Type": "text/html"
              }), D.end(LL({
                ok: !1,
                heading: "Authentication failed",
                message: "Invalid state parameter. Close this tab and try again from Claude Code."
              }));
              return;
            }
            if (V) {
              D.writeHead(200, {
                "Content-Type": "text/html"
              }), D.end(LL({
                ok: !1,
                heading: "Authentication failed",
                message: "Close this tab and try again from Claude Code.",
                detail: `${String(V)}: ${error_description ?? ""}`
              })), G();
              let le = `OAuth error: ${V}`;
              if (error_description) le += ` - ${error_description}`;
              if (error_uri) le += ` (See: ${error_uri})`;
              q(Error(le));
              return;
            }
            if (Z) D.writeHead(200, {
              "Content-Type": "text/html"
            }), D.end(LL({
              ok: !0,
              heading: "Authentication successful",
              message: "You can close this tab and return to Claude Code."
            })), G(), Se(Z);
          } else D.writeHead(404, {
            "Content-Type": "text/html"
          }), D.end(LL({
            ok: !1,
            heading: "Not found",
            message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${to(H)}.`
          }));
        }), P.on("error", N => {
          if (G(), N.code === "EADDRINUSE") {
            let D = I() === "windows" ? `netstat -ano | findstr :${E}` : `lsof -ti:${E} -sTCP:LISTEN`;
            q(new x(`OAuth callback port ${E} is already in use \u2014 another process may be holding it. ` + `Run \`${D}\` to find it.`, "OAuth callback port already in use"));
          } else q(new x(`OAuth callback server failed: ${N.message}`, "OAuth callback server failed"));
        }), P.listen(E, "127.0.0.1", () => void Ae()), P.unref();
        z = setTimeout((N, D) => {
          N(), D(new x("Authentication timeout", "Authentication timeout"));
        }, 300000, G, q), z.unref();
      });
    M = !0, re(e, "Completing auth flow with authorization code"), ah().record(authorizationCode);
    let ce = await hoe(j, {
      serverUrl: t.url,
      authorizationCode: authorizationCode,
      resourceMetadataUrl: y.resourceMetadataUrl,
      fetchFn: Pce(e, t, hKt())
    });
    if (re(e, `Auth result: ${ce}`), ce === "AUTHORIZED") {
      let F = await j.tokens().catch(() => {
        return;
      });
      if (re(e, `Tokens after auth: ${F ? "Present" : "Missing"}`), F) re(e, `Token expires_in: ${F.expires_in}`);
      i("tengu_mcp_oauth_flow_success", {
        flowAttemptId: ye(R),
        transportType: c(t.type),
        ...(Ik(t) && {
          mcpServerBaseUrl: Ik(t)
        })
      }), g("mcp_oauth_flow");
    } else throw new x("Unexpected auth result: " + ce, "Unexpected auth result");
  } catch (U) {
    re(e, `Error during auth completion: ${NL(U, t.url)}`);
    let O = "unknown",
      E,
      H,
      T = d(U),
      L = U instanceof Error ? U.cause : void 0;
    if (U instanceof AuthenticationCancelledError) O = "cancelled";else if (/AADSTS\d/.test(T)) O = "entra_specific";else if (/redirect[_ ]uri/i.test(T)) O = "redirect_uri_mismatch";else if (M && (_e(U) || _e(L))) O = "token_response_schema_rejected";else if (M) O = "token_exchange_failed";else if (T.includes("Authentication timeout")) O = "timeout";else if (T.includes("OAuth error:")) O = "provider_denied";else if (T.includes("already in use") || T.includes("EADDRINUSE") || T.includes("callback server failed") || T.includes("No available port")) O = "port_unavailable";else if (T.includes("SDK auth failed")) O = K5s(T, L);
    let j = (L instanceof Error ? L : U instanceof Error ? U : null)?.message.match(/^HTTP (\d{3})\b/);
    if (j) H = Number(j[1]);
    if (L instanceof OP) E = L.errorCode;
    if (U instanceof OP) {
      if (E = U.errorCode, U.errorCode === "invalid_client" || U.errorCode === "unauthorized_client") {
        let B = md(e, t);
        try {
          await qn().mutate(P => {
            let z = P.mcpOAuth?.[B];
            if (!z) return P;
            return {
              ...P,
              mcpOAuth: {
                ...P.mcpOAuth,
                [B]: {
                  ...z,
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
    if (!/^OAuth error: access_denied(?: |$)/.test(T) && (O === "timeout" || T.includes("OAuth error:"))) {
      let B = md(e, t);
      await qn().mutate(P => {
        let z = P.mcpOAuth?.[B];
        if (!z?.clientId || z.accessToken || z.refreshToken || z.clientId !== S?.clientId) return P;
        return {
          ...P,
          mcpOAuth: {
            ...P.mcpOAuth,
            [B]: {
              ...z,
              clientId: void 0,
              clientSecret: void 0
            }
          }
        };
      }).catch(P => re(e, `drop clientId failed: ${d(P)}`));
    }
    if (O !== "cancelled") m("mcp_oauth_flow", "mcp_oauth_flow_failed");
    i("tengu_mcp_oauth_flow_error", {
      flowAttemptId: ye(R),
      reason: c(O),
      error_code: E === void 0 ? void 0 : q5s(E),
      http_status: tY(H),
      transportType: c(t.type),
      ...(Ik(t) && {
        mcpServerBaseUrl: Ik(t)
      })
    });
    let Q = NL(U, t.url);
    throw Q === d(U) ? U : Error(Q, {
      cause: U
    });
  }
}
function dTn(e, t) {
  return async (r, n) => {
    let l = await e(r, n);
    if (l.status === 401 || l.status === 403) t.sawAuthChallenge = !0;
    if (t.noteServerAnswer(r, l.status === 401 || l.status === 403 && PRe(l).error === "insufficient_scope"), !new Headers(n?.headers).has("authorization")) return l;
    if (l.status === 403) {
      let {
        error: error_2,
        scope: scope_2
      } = PRe(l);
      if (error_2 === "insufficient_scope" && scope_2) t.markStepUpPending(scope_2);
    } else if (l.status === 401) t.clearStepUpPending();
    return l;
  };
}
class _Kt {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
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
  constructor(e, t, r = zqe(), n = !1, l, h) {
    this.serverName = e, this.serverConfig = t, this.redirectUri = r, this.handleRedirection = n, this.onAuthorizationUrlCallback = l, this.skipBrowserOpen = h ?? !1, this._presented = ah();
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
    if (!Ee(this.redirectUri)) {
      re(this.serverName, `redirectUri ${to(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
      return;
    }
    let e = Ie();
    if (e !== wGe) re(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    this._metadata = e;
  }
  getCuratedMetadataScope() {
    let e = $e(this._metadata);
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
    let r = this.serverConfig.url;
    if (String(e) === (URL.canParse(r) ? new URL(r).href : r)) this.authChallengeOpen = t;
  }
  registrationOfferedByDiscovery = !1;
  async readCredentialStore() {
    let e = await Sge();
    if (e === wl) throw re(this.serverName, "Credential store read failed; not reporting credentials as absent"), new RJe(this.serverName);
    return e;
  }
  async state() {
    if (!this._state) this._state = Ge(32).toString("base64url"), re(this.serverName, "Generated new OAuth state");
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
      n = this.serverConfig.oauth?.clientId,
      l = e?.mcpOAuth?.[t],
      h = this.handleRedirection && st(l?.clientId) && !Ee(this.redirectUri);
    if (h) {
      if (re(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${to(this.redirectUri)} \u2014 ${n ? "serving the configured client" : "registering via DCR"} instead`), n) await this.patchStoredClientEntry(t, {
        clientId: n,
        clientSecret: void 0,
        redirectUri: this.redirectUri
      }, "stale CIMD client_id repair");
    }
    if (l?.clientId && !h) {
      let redirectUri = l.redirectUri;
      if (this.handleRedirection && (redirectUri ? me(redirectUri) !== me(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
        let S = redirectUri ? to(redirectUri) : "localhost";
        if (!n) {
          re(this.serverName, `Cached client_id was registered for ${S}; current redirectUri is ${to(this.redirectUri)} \u2014 forcing re-DCR`);
          return;
        }
        if (l.clientId !== n) return re(this.serverName, `Stored client_id is stale and its redirectUri ${S} predates ${to(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`), await this.patchStoredClientEntry(t, {
          clientId: n,
          clientSecret: void 0,
          redirectUri: this.redirectUri
        }, "stale client_id repair"), this._lastServedClientId = n, {
          client_id: n,
          client_secret: client_secret
        };
        re(this.serverName, `Stored redirectUri ${S} predates ${to(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`), await this.patchStoredClientEntry(t, {
          redirectUri: this.redirectUri
        }, "stored redirectUri convergence");
      }
      return re(this.serverName, "Found client info"), this._lastServedClientId = l.clientId, {
        client_id: l.clientId,
        client_secret: l.clientSecret ?? (l.clientId === n ? client_secret : void 0)
      };
    }
    if (n) return re(this.serverName, "Using pre-configured client ID"), this._lastServedClientId = n, {
      client_id: n,
      client_secret: client_secret
    };
    if (!this.handleRedirection && this.registrationOfferedByDiscovery && !l?.accessToken && !l?.refreshToken) throw re(this.serverName, "No client info found; deferring client registration to authentication time"), new McpClientRegistrationDeferredError(this.serverName);
    re(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, t, r) {
    try {
      if (!(await qn().mutate(l => {
        let h = l.mcpOAuth?.[e];
        if (!h) return l;
        return {
          ...l,
          mcpOAuth: {
            ...l.mcpOAuth,
            [e]: {
              ...h,
              ...t
            }
          }
        };
      }))?.success) re(this.serverName, `${r} resolved unsuccessful`);
    } catch (error) {
      re(this.serverName, `${r} failed: ${d(error)}`);
    }
  }
  async saveClientInformation(e) {
    this._presented.record(e.client_secret), this._presented.record(LEt(e.client_id, e.client_secret));
    let t = md(this.serverName, this.serverConfig);
    try {
      if ((await qn().mutate(n => ({
        ...n,
        mcpOAuth: {
          ...n.mcpOAuth,
          [t]: {
            ...n.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            clientId: e.client_id,
            clientSecret: e.client_secret,
            redirectUri: this.redirectUri,
            accessToken: n.mcpOAuth?.[t]?.accessToken || "",
            expiresAt: n.mcpOAuth?.[t]?.expiresAt
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
      r = e?.mcpOAuth?.[t];
    if (mB() && this.serverConfig.oauth?.xaa && !r?.refreshToken && (!r?.accessToken || r.expiresAt != null && (r.expiresAt - Date.now()) / 1000 <= 300)) {
      if (!this._refreshInProgress) re(this.serverName, r ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange"), this._refreshInProgress = this.xaaRefresh().finally(() => {
        this._refreshInProgress = void 0;
      });
      try {
        let S = await this._refreshInProgress;
        if (S) return this._lastServedAccessToken = S.access_token, this._presented.record(S.access_token), this._presented.record(S.refresh_token), this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken, S;
      } catch (error) {
        re(this.serverName, `XAA silent exchange failed: ${d(error)}`);
      }
    }
    if (!r) {
      re(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (!r.accessToken) {
      re(this.serverName, "No access token in storage"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    this._lastServedAccessToken = r.accessToken, this._presented.record(r.accessToken), this._presented.record(r.refreshToken), this._lastServedRefreshToken = r.refreshToken;
    let expires_in = r.expiresAt != null ? (r.expiresAt - Date.now()) / 1000 : void 0,
      _pendingStepUpScope = this._pendingStepUpScope,
      h = _pendingStepUpScope !== void 0;
    if (h) re(this.serverName, `Step-up pending (${hT("scope", _pendingStepUpScope)}), omitting refresh_token`);
    if (expires_in != null && expires_in <= 0 && !r.refreshToken) {
      re(this.serverName, "Token expired without refresh token"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (expires_in != null && expires_in <= 300 && r.refreshToken && !h) {
      if (!this._refreshInProgress) re(this.serverName, `Token expires in ${Math.floor(expires_in)}s, attempting proactive refresh`), this._refreshInProgress = this.refreshAuthorization(r.refreshToken).finally(() => {
        this._refreshInProgress = void 0;
      });else re(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let S = await this._refreshInProgress;
        if (S) return re(this.serverName, "Token refreshed successfully"), this._lastServedAccessToken = S.access_token, this._presented.record(S.access_token), this._presented.record(S.refresh_token), this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken, S;
        re(this.serverName, "Token refresh failed, returning current tokens");
      } catch (error) {
        re(this.serverName, `Token refresh error: ${NL(error, this.serverConfig.url)}`);
      }
    }
    let s = {
      access_token: r.accessToken,
      refresh_token: h ? void 0 : r.refreshToken,
      expires_in: expires_in,
      scope: r.scope,
      token_type: "Bearer"
    };
    return re(this.serverName, "Returning tokens"), re(this.serverName, `Has refresh token: ${!!s.refresh_token}`), re(this.serverName, expires_in != null ? `Expires in: ${Math.floor(expires_in)}s` : "No expiration specified"), s;
  }
  async saveTokens(e) {
    if (this._presented.record(e.access_token), this._presented.record(e.refresh_token), this.handleRedirection) this._pendingStepUpScope = void 0;
    let t = md(this.serverName, this.serverConfig);
    re(this.serverName, "Saving tokens"), re(this.serverName, `Token expires in: ${e.expires_in}`), re(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
    let signIn = this._servedOverrideAuthorizationServerUrl === void 0 ? this._discoveredAuthorizationServer : {
        authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
        oauthMetadataFound: !0
      },
      servedMetadataUrl = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl,
      l,
      h;
    try {
      l = await qn().mutate(s => ({
        ...s,
        mcpOAuth: {
          ...s.mcpOAuth,
          [t]: {
            ...s.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? s.mcpOAuth?.[t]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope,
            discoveryState: aCn({
              previous: s.mcpOAuth?.[t]?.discoveryState,
              signIn: signIn,
              servedMetadataUrl: servedMetadataUrl,
              interactiveSignIn: this.handleRedirection
            })
          }
        }
      }));
    } catch (error) {
      h = error;
    }
    if (l?.success) this._lastServedAccessToken = e.access_token, this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken;
    this.logTokenPersistFailed(l, h);
  }
  logTokenPersistFailed(e, t) {
    xe(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = Dte();
    if (!e) return;
    let idpIdToken_2 = await cTn(e.issuer);
    if (!idpIdToken_2) {
      re(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let clientId_3 = this.serverConfig.oauth?.clientId,
      n = await ges(this.serverName, this.serverConfig);
    if (!clientId_3 || !n?.clientSecret) {
      re(this.serverName, "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh");
      return;
    }
    let idpClientSecret_2 = await Hir(e.issuer),
      h;
    try {
      h = await uTn(e.issuer);
    } catch (error) {
      re(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${d(error)}`);
      return;
    }
    this._presented.record(n.clientSecret);
    try {
      let s = await he(this.serverConfig.url, {
          clientId: clientId_3,
          clientSecret: n.clientSecret,
          idpClientId: e.clientId,
          idpClientSecret: idpClientSecret_2,
          idpIdToken: idpIdToken_2,
          idpTokenEndpoint: h.token_endpoint
        }, this.serverName),
        S = md(this.serverName, this.serverConfig),
        v,
        A;
      try {
        v = await qn().mutate(w => {
          let C = w.mcpOAuth?.[S];
          return {
            ...w,
            mcpOAuth: {
              ...w.mcpOAuth,
              [S]: {
                ...C,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: s.access_token,
                refreshToken: s.refresh_token ?? C?.refreshToken,
                expiresAt: s.expires_in != null ? Date.now() + s.expires_in * 1000 : void 0,
                scope: s.scope,
                clientId: clientId_3,
                clientSecret: n.clientSecret,
                discoveryState: MEt({
                  previous: C?.discoveryState,
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
      if (error instanceof XaaTokenExchangeError && error.shouldClearIdToken) await Fir(e.issuer), re(this.serverName, "XAA: cleared id_token after exchange failure");
      throw error;
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope ? void 0 : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : void 0),
      r = e.searchParams.get("scope"),
      n = t ?? r;
    if (n !== r) re(this.serverName, `Overrode authorization scope from ${r ? hT("scope", r) : "NONE"} to configured: ${n ? hT("scope", n) : "NONE"}`);
    let l = n === null ? null : Y5s(n, this._metadata);
    if (l !== null && l !== r) {
      if (e.searchParams.set("scope", l), l !== t) re(this.serverName, "Appended offline_access to authorization scope");
    }
    let h = X5s(e),
      s = e.searchParams.getAll("prompt"),
      S = h ? s.filter(item => item !== "consent") : s;
    if (S.length !== s.length || S.length > 1) {
      if (e.searchParams.delete("prompt"), S.length > 0) e.searchParams.set("prompt", S.includes("consent") ? "consent" : S.at(-1));
    }
    this._authorizationUrl = e.toString();
    let v = e.searchParams.get("scope");
    if (re(this.serverName, `Authorization URL: ${ues(e)}`), re(this.serverName, `Scopes in URL: ${v ? hT("scope", v) : "NOT FOUND"}`), v) this._scopes = v, re(this.serverName, `Captured scopes from authorization URL: ${hT("scope", v)}`);else {
      let R = this.getCuratedMetadataScope();
      if (R) this._scopes = R, re(this.serverName, `Using scopes from metadata: ${hT("scope", R)}`);else re(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let R = md(this.serverName, this.serverConfig),
        M = this._scopes,
        U = !1;
      try {
        await qn().mutate(O => {
          let E = O.mcpOAuth?.[R];
          if (!E) return O;
          return U = !0, {
            ...O,
            mcpOAuth: {
              ...O.mcpOAuth,
              [R]: {
                ...E,
                stepUpScope: M
              }
            }
          };
        });
      } catch (error) {
        re(this.serverName, `step-up scope persist failed: ${d(error)}`);
      }
      if (U) re(this.serverName, `Persisted step-up scope: ${hT("scope", M)}`);
    }
    if (!this.handleRedirection) {
      re(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let A = e.toString();
    if (!A.startsWith("http://") && !A.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    re(this.serverName, "Redirecting to authorization URL");
    let w = ues(e);
    if (re(this.serverName, `Authorization URL: ${w}`), this.onAuthorizationUrlCallback) this.onAuthorizationUrlCallback(A);
    if (this.skipBrowserOpen) {
      re(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${w}`);
      return;
    }
    let headless = $G();
    if (headless) re(this.serverName, `Skipping browser open (headless environment). URL: ${w}`);else re(this.serverName, `Opening authorization URL: ${w}`);
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
      r = md(this.serverName, this.serverConfig),
      n = !1;
    try {
      let _lastServedClientId = this._lastServedClientId,
        _lastServedAccessToken = this._lastServedAccessToken,
        _lastServedRefreshToken = this._lastServedRefreshToken;
      await qn().mutate(S => {
        let v = S.mcpOAuth?.[r];
        if (!v) return S;
        let mcpOAuth_3 = {
          ...S.mcpOAuth
        };
        switch (t) {
          case "all":
            {
              let w = _lastServedAccessToken != null && !!v.accessToken && v.accessToken !== _lastServedAccessToken,
                C = _lastServedClientId != null && v.clientId != null && v.clientId !== _lastServedClientId;
              if (w || C) return re(this.serverName, `invalidateCredentials('all') preserved: ${w ? "foreign token" : "concurrent re-registration"}`), S;
              if (!v.clientId && !v.refreshToken && v.accessToken === "") return S;
              mcpOAuth_3[r] = {
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
            mcpOAuth_3[r] = {
              ...v,
              clientId: void 0,
              clientSecret: void 0
            };
            break;
          case "tokens":
            {
              if (_lastServedRefreshToken != null && v.refreshToken && v.refreshToken !== _lastServedRefreshToken || _lastServedAccessToken != null && !!v.accessToken && v.accessToken !== _lastServedAccessToken) return re(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation"), S;
              mcpOAuth_3[r] = {
                ...v,
                accessToken: "",
                refreshToken: void 0,
                expiresAt: 0
              };
              break;
            }
          case "discovery":
            mcpOAuth_3[r] = {
              ...v,
              discoveryState: v.discoveryState && kRe(v.discoveryState),
              stepUpScope: void 0
            };
            break;
        }
        return n = !0, {
          ...S,
          mcpOAuth: mcpOAuth_3
        };
      });
    } catch (error) {
      re(this.serverName, `invalidateCredentials persist failed: ${d(error)}`);
    }
    if (n) re(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
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
      await qn().mutate(h => {
        let s = iCn({
          previous: h.mcpOAuth?.[t]?.discoveryState,
          discovered: discovered,
          servedMetadataUrl: servedMetadataUrl_2
        });
        return {
          ...h,
          mcpOAuth: {
            ...h.mcpOAuth,
            [t]: {
              ...h.mcpOAuth?.[t],
              serverName: this.serverName,
              serverUrl: this.serverConfig.url,
              accessToken: h.mcpOAuth?.[t]?.accessToken || "",
              expiresAt: h.mcpOAuth?.[t]?.expiresAt,
              discoveryState: {
                ...s,
                resourceMetadataUrl: e.resourceMetadataUrl,
                registrationNotOfferedAt: authorizationServerMetadata_2 === void 0 ? h.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt : typeof authorizationServerMetadata_2.registration_endpoint !== "string" && authorizationServerMetadata_2.client_id_metadata_document_supported !== !0 ? Date.now() : void 0
              }
            }
          }
        };
      });
    } catch (error) {
      re(this.serverName, `saveDiscoveryState persist failed: ${d(error)}`);
    }
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
        let authorizationServerMetadata_3 = await ae(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: configuredMetadataUrl_2,
          fetchFn: Pce(this.serverName, this.serverConfig, hKt())
        });
        if (authorizationServerMetadata_3) return this._servedOverrideAuthorizationServerUrl = authorizationServerMetadata_3.issuer, this._servedOverrideDocuments.set(authorizationServerMetadata_3, configuredMetadataUrl_2), {
          authorizationServerUrl: authorizationServerMetadata_3.issuer,
          authorizationServerMetadata: authorizationServerMetadata_3
        };
      } catch (error) {
        re(this.serverName, `Failed to fetch from configured metadata URL: ${NL(error, this.serverConfig.url)}`);
      }
      return;
    }
    let r = await qn().readAsync(),
      n = md(this.serverName, this.serverConfig),
      l = r?.mcpOAuth?.[n]?.discoveryState;
    if (l?.authorizationServerUrl) return re(this.serverName, `Returning cached discovery state (authServer: ${to(l.authorizationServerUrl)})`), {
      authorizationServerUrl: l.authorizationServerUrl,
      resourceMetadataUrl: l.resourceMetadataUrl,
      resourceMetadata: l.resourceMetadata,
      authorizationServerMetadata: l.authorizationServerMetadata
    };
    return;
  }
  async refreshAuthorization(e) {
    if (de()) {
      re(this.serverName, "claude-code-server session; skipping refresh");
      return;
    }
    let t = md(this.serverName, this.serverConfig),
      r = jx();
    await se().mkdir(r);
    let n = t.replace(/[^a-zA-Z0-9]/g, "_"),
      l = Ye(r, `mcp-refresh-${n}.lock`),
      h;
    for (let s = 0; s < fe; s++) try {
      re(this.serverName, `Acquiring refresh lock (attempt ${s + 1})`), h = await dl(l, {
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
        re(this.serverName, `Refresh lock held by another process, waiting (attempt ${s + 1}/${fe})`), await Y(1000 + Math.random() * 1000);
        continue;
      }
      re(this.serverName, `Failed to acquire refresh lock: ${v}; skipping refresh`);
      return;
    }
    if (!h) {
      re(this.serverName, `Could not acquire refresh lock after ${fe} retries; skipping refresh`);
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
      if (h) try {
        await h(), re(this.serverName, "Released refresh lock");
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
      mcpServerBaseUrl_2 = Ik(this.serverConfig),
      n = (l, h) => {
        i(l === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
          transportType: c(this.serverConfig.type),
          ...(mcpServerBaseUrl_2 && {
            mcpServerBaseUrl: mcpServerBaseUrl_2
          }),
          ...(h && {
            reason: c(h)
          })
        });
      };
    for (let l = 1; l <= t; l++) {
      let clientInformation;
      try {
        re(this.serverName, "Starting token refresh");
        let fetchFn_5 = Pce(this.serverName, this.serverConfig, hKt()),
          S = this._metadata;
        if (!S) {
          let A = await this.discoveryState();
          if (A?.authorizationServerMetadata) S = A.authorizationServerMetadata;else if (A?.authorizationServerUrl) re(this.serverName, `Re-discovering metadata from persisted auth server URL: ${to(A.authorizationServerUrl)}`), S = await QEt(A.authorizationServerUrl, {
            fetchFn: fetchFn_5
          });
        }
        if (!S) S = await ae(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
          fetchFn: fetchFn_5
        });
        if (!S) {
          re(this.serverName, "Failed to discover OAuth metadata"), n("failure", "metadata_discovery_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
          return;
        }
        if (this._metadata = S, clientInformation = await this.clientInformation(), !clientInformation) {
          re(this.serverName, "No client information available"), n("failure", "no_client_info"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
          return;
        }
        let v = await K9r(new URL(this.serverConfig.url), {
          metadata: S,
          clientInformation: clientInformation,
          refreshToken: refreshToken,
          resource: new URL(this.serverConfig.url),
          fetchFn: fetchFn_5
        });
        if (v) return re(this.serverName, "Token refresh successful"), await this.saveTokens(v), n("success"), g("mcp_oauth_refresh"), v;
        re(this.serverName, "Token refresh returned no tokens"), n("failure", "no_tokens_returned"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
        return;
      } catch (error) {
        if (error instanceof tot) {
          re(this.serverName, `Token refresh failed with invalid_grant: ${error.message}`);
          let {
            freshTokens: freshTokens_2
          } = await this.readConcurrentRefreshWinner();
          if (freshTokens_2) return p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), freshTokens_2;
          re(this.serverName, "No valid tokens in storage, clearing stored tokens"), n("failure", "invalid_grant"), m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"), await this.invalidateCredentials("tokens"), Ice.emit(this.serverName);
          return;
        }
        if (error instanceof OP && (error.errorCode === "invalid_client" || error.errorCode === "unauthorized_client")) {
          re(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
          let {
            tokenData: tokenData_2,
            freshTokens: freshTokens_3
          } = await this.readConcurrentRefreshWinner();
          if (freshTokens_3) return p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), freshTokens_3;
          if (tokenData_2?.clientId && clientInformation && tokenData_2.clientId !== clientInformation.client_id) {
            re(this.serverName, "Another process re-registered client; preserving"), n("failure", "concurrent_reregister"), p("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
            return;
          }
          n("failure", error.errorCode === "unauthorized_client" ? "unauthorized_client" : "invalid_client"), m("mcp_oauth_refresh", error.errorCode === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client"), await this.invalidateCredentials("all"), Ice.emit(this.serverName);
          return;
        }
        if (_e(error)) {
          re(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${d(error)}`), n("failure", "token_response_schema_rejected"), m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
          return;
        }
        let S = error instanceof RJe,
          v = error instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(error.message),
          A = error instanceof yNe || error instanceof i4t || error instanceof a4t,
          w = v || A || S;
        if (!w || l >= t) {
          re(this.serverName, `Token refresh failed: ${NL(error, this.serverConfig.url)}`), n("failure", w ? "transient_retries_exhausted" : "request_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed");
          return;
        }
        let C = 1000 * Math.pow(2, l - 1);
        re(this.serverName, `Token refresh failed, retrying in ${C}ms (attempt ${l}/${t})`), await Y(C);
      }
    }
    return;
  }
}
async function eni() {
  let MCP_CLIENT_SECRET = process.env.MCP_CLIENT_SECRET;
  if (MCP_CLIENT_SECRET) return MCP_CLIENT_SECRET;
  if (!process.stdin.isTTY) throw Error("No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.");
  return new Promise((t, r) => {
    process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0);
    let n = "",
      l = h => {
        let s = h.toString();
        if (s === `
` || s === "\r") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", l), process.stderr.write(`
`), t(n);else if (s === "\x03") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", l), r(Error("Cancelled"));else if (s === "\x7F" || s === "\b") n = n.slice(0, -1);else n += s;
      };
    process.stdin.on("data", l);
  });
}
async function tni(e, t, clientSecret_3) {
  let n = md(e, t);
  try {
    return await qn().mutate(l => ({
      ...l,
      mcpOAuthClientConfig: {
        ...l.mcpOAuthClientConfig,
        [n]: {
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
async function nni(e, t) {
  let r = md(e, t);
  await qn().mutate(n => {
    if (!n.mcpOAuthClientConfig?.[r]) return n;
    let mcpOAuthClientConfig = {
      ...n.mcpOAuthClientConfig
    };
    return delete mcpOAuthClientConfig[r], {
      ...n,
      mcpOAuthClientConfig: mcpOAuthClientConfig
    };
  });
}
async function ges(e, t) {
  let n = await qn().readAsync(),
    l = md(e, t);
  return n?.mcpOAuthClientConfig?.[l];
}
function $e(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return;
}
function Y5s(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}
var at = ["login.microsoftonline.com", "login.microsoftonline.us", "login.partner.microsoftonline.cn", "login.chinacloudapi.cn"],
  ct = [".b2clogin.com", ".ciamlogin.com"];
function X5s(e) {
  try {
    let hostname = (typeof e === "string" ? new URL(e) : e).hostname;
    return at.includes(hostname) || ct.some(item => hostname.endsWith(item));
  } catch {
    return !1;
  }
}
export { q5s, K5s, ues, pes, hKt, McpClientRegistrationDeferredError as fes, AuthenticationCancelledError as yKt, qti, Kti, Yti, Nir, Xti, Jti, Qti, mes, Zti, dTn, _Kt, eni, tni, nni, ges, Y5s, X5s };