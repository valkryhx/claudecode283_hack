// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { trr, N5r, F5r, B0, TRt, o3e, Ywn, Xwn, j0, sge, t1e, H5r, x4t, L5o, F5o } from "B:/~BUN/root/chunk-z2e0ksra.js";
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de, x7 } from "B:/~BUN/root/chunk-drx9cnw1.js";
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
import { Uz, O4, Gm } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
import { yve } from "B:/~BUN/root/chunk-zqf91de4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { fte, i_t, CV, Xfe, KD, ha } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { _e } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { FB } from "B:/~BUN/root/chunk-s7zmwmdt.js";
import { GOr } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { YC } from "B:/~BUN/root/chunk-27h4st9h.js";
import { eze, k_r, v_r, h7t, xZ } from "B:/~BUN/root/chunk-1tbewxs3.js";
import { NB } from "B:/~BUN/root/chunk-7jbamvvk.js";
import { Ng, lYt } from "B:/~BUN/root/chunk-j6qn83yk.js";
import { Tve, Bir, mx, Mo, UB, BB } from "B:/~BUN/root/chunk-4rgskab2.js";
import { G7n, n4r, r4r, V7n, $2o } from "B:/~BUN/root/chunk-1j1q5jh4.js";
import { Fkn, Uor, Bor, Hkn, dve, Gor, Vor, Kor } from "B:/~BUN/root/chunk-re62m27y.js";
import { Yor } from "B:/~BUN/root/chunk-t24nmad3.js";
import { Xat, m1e } from "B:/~BUN/root/chunk-5d6w0m6e.js";
import { tV, Zi } from "B:/~BUN/root/chunk-r2kdqtaa.js";
import { uqe } from "B:/~BUN/root/chunk-9e7wny6c.js";
import { o, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { randomBytes as Ve, randomUUID as Ye } from "crypto";
import { createServer as Ze } from "http";
import { join as Qe } from "path";
import { parse as et } from "url";
var ze = 30000,
  grant_type = "urn:ietf:params:oauth:grant-type:token-exchange",
  grant_type_2 = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  requested_token_type = "urn:ietf:params:oauth:token-type:id-jag",
  subject_token_type = "urn:ietf:params:oauth:token-type:id_token";
function Re(e) {
  return (t, r) => {
    let n = AbortSignal.timeout(ze),
      signal = e ? AbortSignal.any([n, e]) : n;
    return fetch(t, {
      ...r,
      ...ba({
        url: String(t)
      }),
      signal: signal
    }).catch(h => BB(h, t));
  };
}
var ue = Re();
function te(e) {
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
var Xe = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function se(e) {
  return (typeof e === "string" ? e : _(e)).replace(Xe, (r, n) => `"${n}":"[REDACTED]"`);
}
var He = p(() => u({
    access_token: o().optional(),
    issued_token_type: o().optional(),
    expires_in: uqe().optional(),
    scope: o().optional()
  })),
  Be = p(() => u({
    access_token: o().min(1),
    token_type: o().default("Bearer"),
    expires_in: uqe().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }));
async function Ke(e, t) {
  let r;
  try {
    r = await H5r(e, void 0, t?.fetchFn ?? ue);
  } catch (error) {
    if (We(error)) throw error;
    let s = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : void 0;
    throw Error(`XAA: PRM discovery failed for ${Mo(e)} (${s ? `HTTP ${s}` : error instanceof Error ? error.name : typeof error})`);
  }
  if (!r.resource || !r.authorization_servers?.[0]) throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (te(r.resource) !== te(e)) throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${Mo(e)}, got ${Mo(r.resource)}`);
  return {
    resource: r.resource,
    authorization_servers: r.authorization_servers
  };
}
async function Ge(e, t) {
  let r;
  try {
    r = await x4t(e, {
      fetchFn: t?.fetchFn ?? ue
    });
  } catch (error) {
    if (We(error)) throw error;
    let s = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : void 0;
    throw new R(`XAA: AS metadata discovery failed (${s ? `HTTP ${s}` : error instanceof Error ? error.name : typeof error})`, "XAA: AS metadata discovery failed");
  }
  if (!r?.issuer || !r.token_endpoint) throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${Mo(e)}`);
  if (te(r.issuer) !== te(e)) throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${Mo(e)}, got ${Mo(r.issuer)}`);
  if (!URL.canParse(r.token_endpoint) || new URL(r.token_endpoint).protocol !== "https:") throw Error(`XAA: refusing non-HTTPS token endpoint: ${Mo(r.token_endpoint)}`);
  return {
    issuer: r.issuer,
    token_endpoint: r.token_endpoint,
    grant_types_supported: r.grant_types_supported,
    token_endpoint_auth_methods_supported: r.token_endpoint_auth_methods_supported
  };
}
async function qe(e) {
  let t = e.fetchFn ?? ue,
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
  let n = await t(e.tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: r
  });
  if (!n.ok) {
    let S = se(await n.text()).slice(0, 200),
      v = n.status < 500;
    throw new XaaTokenExchangeError(`XAA: token exchange failed: HTTP ${n.status}: ${S}`, v);
  }
  let s;
  try {
    s = await n.json();
  } catch {
    throw new XaaTokenExchangeError(`XAA: token exchange returned non-JSON (captive portal?) at ${Mo(e.tokenEndpoint)}`, !1);
  }
  let h = He().safeParse(s);
  if (!h.success) throw new XaaTokenExchangeError(`XAA: token exchange response did not match expected shape: ${se(s)}`, !0);
  let a = h.data;
  if (!a.access_token) throw new XaaTokenExchangeError(`XAA: token exchange response missing access_token: ${se(a)}`, !0);
  if (a.issued_token_type !== requested_token_type) throw new XaaTokenExchangeError(`XAA: token exchange returned unexpected issued_token_type: ${a.issued_token_type}`, !0);
  return {
    jwtAuthGrant: a.access_token,
    expiresIn: a.expires_in,
    scope: a.scope
  };
}
async function Je(e) {
  let t = e.fetchFn ?? ue,
    r = e.authMethod ?? "client_secret_basic",
    n = new URLSearchParams({
      grant_type: grant_type_2,
      assertion: e.assertion
    }),
    headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
  if (r === "client_secret_basic") {
    let v = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
    headers.Authorization = `Basic ${v}`, Ng().record(v);
  } else n.set("client_id", e.clientId), n.set("client_secret", e.clientSecret);
  Ng().record(e.clientSecret), Ng().record(e.assertion);
  let h = await t(e.tokenEndpoint, {
    method: "POST",
    headers: headers,
    body: n
  });
  if (!h.ok) {
    let v = se(await h.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${h.status}: ${v}`);
  }
  let a;
  try {
    a = await h.json();
  } catch {
    throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${Mo(e.tokenEndpoint)}`);
  }
  let S = Be().safeParse(a);
  if (!S.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${se(a)}`);
  return S.data;
}
async function me(e, t, r = "xaa", n) {
  let fetchFn = Re(n);
  ae(r, `XAA: discovering PRM for ${Mo(e)}`);
  let h = await Ke(e, {
    fetchFn: fetchFn
  });
  ae(r, `XAA: discovered resource=${Mo(h.resource)} ASes=[${h.authorization_servers.map(Mo).join(", ")}]`);
  let pinnedAuthorizationServer = t.pinnedAuthorizationServer,
    S = pinnedAuthorizationServer === void 0 ? h.authorization_servers : h.authorization_servers.filter(item => te(item) === te(pinnedAuthorizationServer));
  if (pinnedAuthorizationServer !== void 0 && S.length === 0) throw new R(`XAA: authorization server changed: signed in with ${Mo(pinnedAuthorizationServer)}, server now names [${h.authorization_servers.map(Mo).join(", ")}]. If this move is expected, run \`claude mcp remove\` for this server and add it again with its client secret.`, "XAA: authorization server changed");
  let v,
    A = [];
  for (let F of S) {
    let P;
    try {
      P = await Ge(F, {
        fetchFn: fetchFn
      });
    } catch (error) {
      if (n?.aborted) throw error;
      A.push(`${Mo(F)}: ${error instanceof Error ? error.message : String(error)}`);
      continue;
    }
    if (P.grant_types_supported && !P.grant_types_supported.includes(grant_type_2)) {
      A.push(`${Mo(F)}: does not advertise jwt-bearer grant (supported: ${P.grant_types_supported.join(", ")})`);
      continue;
    }
    v = P;
    break;
  }
  if (!v) throw new R(`XAA: no authorization server supports jwt-bearer. Tried: ${A.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${S.length})`);
  let token_endpoint_auth_methods_supported = v.token_endpoint_auth_methods_supported,
    authMethod = token_endpoint_auth_methods_supported && !token_endpoint_auth_methods_supported.includes("client_secret_basic") && token_endpoint_auth_methods_supported.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
  ae(r, `XAA: AS issuer=${Mo(v.issuer)} token_endpoint=${Mo(v.token_endpoint)} auth_method=${authMethod}`), ae(r, "XAA: exchanging id_token for ID-JAG at IdP");
  let w = await qe({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: v.issuer,
    resource: h.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: fetchFn
  });
  ae(r, "XAA: ID-JAG obtained"), ae(r, "XAA: exchanging ID-JAG for access_token at AS");
  let O = await Je({
    tokenEndpoint: v.token_endpoint,
    assertion: w.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: authMethod,
    fetchFn: fetchFn
  });
  return ae(r, "XAA: access_token obtained"), {
    ...O,
    authorizationServerUrl: v.issuer
  };
}
var tt = 30000,
  rt = 500,
  nt = new Set([...O4, ...Uz, "ETIMEDOUT"]);
function it(e) {
  if (We(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = Gm(e);
  return t !== null && nt.has(t.code);
}
function ve(e) {
  let t = e;
  return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues);
}
var st = ["invalid_request", "invalid_client", "invalid_grant", "unauthorized_client", "unsupported_grant_type", "invalid_scope", "access_denied", "server_error", "temporarily_unavailable", "unsupported_response_type", "unsupported_token_type", "invalid_token", "method_not_allowed", "too_many_requests", "invalid_client_metadata", "insufficient_scope", "invalid_target", "authorization_pending", "expired_token", "slow_down"];
function Tia(e) {
  let t = st.find(item => item === e);
  return de(t) ?? b("other");
}
function Cia(e, t) {
  let r = t instanceof Error ? `${e}
${t.message}` : e;
  if (r.includes("dynamic client registration") || t instanceof B0 && t.errorCode === "invalid_client_metadata") return "dcr_failed";
  if (r.includes("trying to load") && r.includes("metadata") || r.includes("Incompatible auth server")) return "discovery_failed";
  if (t instanceof B0) return "dcr_rejected";
  let n = k(t) ?? k(t instanceof Error ? t.cause : void 0);
  if (n && i_t.has(n)) return "network_failed";
  return "sdk_auth_failed";
}
var ge = 5;
function soi(e) {
  return Mo(e.origin + e.pathname) + Bir(e);
}
var ot = new Set(["invalid_refresh_token", "expired_refresh_token", "token_expired"]);
async function ioi(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    r;
  try {
    r = ee(t);
  } catch {
    return new Response(t, e);
  }
  if (N5r.safeParse(r).success) return new Response(t, e);
  let n = F5r.safeParse(r);
  if (!n.success) return new Response(t, e);
  let s = ot.has(n.data.error) ? {
    error: "invalid_grant",
    error_description: n.data.error_description ?? `Server returned non-standard error code: ${n.data.error}`
  } : n.data;
  return new Response(_(s), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers
  });
}
function C_n() {
  return async (e, t) => {
    try {
      return await Ee(e, t);
    } catch (error) {
      if (t?.signal?.aborted || !it(error)) throw error;
      return await J(rt, t?.signal ?? void 0), await Ee(e, t);
    }
  };
}
async function Ee(e, t) {
  let signal_2 = AbortSignal.timeout(tt),
    n = t?.method?.toUpperCase() === "POST",
    s = ba({
      url: String(e)
    });
  if (!t?.signal) {
    let v;
    try {
      v = await fetch(e, {
        ...t,
        ...s,
        signal: signal_2
      });
    } catch (error) {
      BB(error, e);
    }
    return n ? ioi(v) : v;
  }
  let abortController = new AbortController(),
    a = () => abortController.abort();
  t.signal.addEventListener("abort", a), signal_2.addEventListener("abort", a);
  let S = () => {
    t.signal?.removeEventListener("abort", a), signal_2.removeEventListener("abort", a);
  };
  if (t.signal.aborted) abortController.abort();
  try {
    let v = await fetch(e, {
      ...t,
      ...s,
      signal: abortController.signal
    });
    return S(), n ? ioi(v) : v;
  } catch (error) {
    S(), BB(error, e);
  }
}
async function le(e, t, r) {
  let {
      configuredMetadataUrl: configuredMetadataUrl,
      fetchFn: fetchFn_2,
      resourceMetadataUrl: resourceMetadataUrl
    } = r ?? {},
    fetchFn_3 = fetchFn_2 ?? C_n();
  if (configuredMetadataUrl) {
    if (!configuredMetadataUrl.startsWith("https://")) throw Error(`authServerMetadataUrl must use https:// (got: ${Mo(configuredMetadataUrl)})`);
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
        throw Error(`Configured auth server metadata at ${Mo(configuredMetadataUrl)} is not valid JSON`);
      }
      return trr.parse(A);
    }
    throw Error(`HTTP ${v.status} fetching configured auth server metadata from ${Mo(configuredMetadataUrl)}`);
  }
  try {
    let {
      authorizationServerMetadata: authorizationServerMetadata
    } = await L5o(t, {
      fetchFn: fetchFn_3,
      ...(resourceMetadataUrl && {
        resourceMetadataUrl: resourceMetadataUrl
      })
    });
    if (authorizationServerMetadata) return authorizationServerMetadata;
  } catch (error) {
    ae(e, `RFC 9728 discovery failed, falling back: ${UB(error, t)}`);
  }
  let S = new URL(t);
  if (S.pathname === "/") return;
  try {
    return await x4t(S, {
      fetchFn: fetchFn_3
    });
  } catch (error) {
    ae(e, `Path-aware auth server discovery failed: ${UB(error, t)}`);
    return;
  }
}
class McpClientRegistrationDeferredError extends j0 {
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
function ke(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}
function Ie(e) {
  let t = ke(e);
  return t === "http://127.0.0.1" || t === "http://localhost";
}
function be(e) {
  if (!e?.clientId || !e.redirectUri || !Ie(e.redirectUri)) return;
  let t = Number(new URL(e.redirectUri).port);
  return t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === Xat(t) ? t : void 0;
}
function xe() {
  return i.MCP_OAUTH_CLIENT_METADATA_URL || Ent;
}
function Me(e) {
  if (!Ie(e)) return !1;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return !1;
  }
}
function at(e) {
  return e !== void 0 && (e === Ent || e === xe());
}
function Dga(e) {
  return bt().oauthCallbackSubmitters.get(e);
}
function Lga(e, t) {
  let activeOAuthFlows = bt().activeOAuthFlows;
  activeOAuthFlows.set(e, t), t.finally(() => {
    if (activeOAuthFlows.get(e) === t) activeOAuthFlows.delete(e);
  }).catch(() => {});
}
function Nga(e) {
  return bt().activeOAuthFlows.get(e);
}
async function t4r(e, t) {
  let r = ha(e, t),
    n = (await Kn().readAsync())?.mcpOAuth?.[r];
  if (!n || n.accessToken || n.refreshToken || xZ(n.discoveryState)) return;
  try {
    await Kn().mutate(s => {
      let h = s.mcpOAuth?.[r];
      if (!h || h.accessToken || h.refreshToken || xZ(h.discoveryState)) return s;
      let mcpOAuth = {
        ...s.mcpOAuth
      };
      return delete mcpOAuth[r], {
        ...s,
        mcpOAuth: mcpOAuth
      };
    });
  } catch (error) {
    ae(e, `clear tokenless stub failed: ${d(error)}`);
  }
}
async function Pe({
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
      beforeRedirect: Vor(endpoint)
    } : {};
  if (clientId && clientSecret) {
    if (authMethod_2 === "client_secret_post") uRLSearchParams.set("client_id", clientId), uRLSearchParams.set("client_secret", clientSecret);else {
      let w = Buffer.from(`${encodeURIComponent(clientId)}:${encodeURIComponent(clientSecret)}`).toString("base64");
      headers_2.Authorization = `Basic ${w}`, Ng().record(w);
    }
  } else if (clientId) uRLSearchParams.set("client_id", clientId);else ae(serverName, `No client_id available for ${tokenTypeHint} revocation - server may reject`);
  try {
    await Wt.post(endpoint, uRLSearchParams, {
      headers: headers_2,
      ...C
    }), ae(serverName, `Successfully revoked ${tokenTypeHint}`);
  } catch (error) {
    if (Wt.isAxiosError(error) && error.response?.status === 401 && accessToken) ae(serverName, `Got 401, retrying ${tokenTypeHint} revocation with Bearer auth`), uRLSearchParams.delete("client_id"), uRLSearchParams.delete("client_secret"), await Wt.post(endpoint, uRLSearchParams, {
      headers: {
        ...headers_2,
        Authorization: `Bearer ${accessToken}`
      },
      ...C
    }), ae(serverName, `Successfully revoked ${tokenTypeHint} with Bearer auth`);else throw error;
  }
}
async function Fga(e, t) {
  let n = (await Kn().readAsync())?.mcpOAuth?.[ha(e, t)];
  if (!n?.accessToken && !n?.refreshToken) return;
  return {
    accessToken: n.accessToken || void 0,
    refreshToken: n.refreshToken,
    clientId: n.clientId,
    clientSecret: n.clientSecret,
    ...(n.discoveryState && {
      discoveryState: eze(n.discoveryState)
    })
  };
}
async function $e(serverName_2, t, r) {
  let n = Ng();
  n.record(r.accessToken), n.record(r.refreshToken), n.record(r.clientSecret);
  let s;
  try {
    let h = r.discoveryState?.authorizationServerUrl ?? t.url,
      a = await le(serverName_2, h, {
        configuredMetadataUrl: xZ(r.discoveryState) ? void 0 : t.oauth?.authServerMetadataUrl,
        fetchFn: dve(serverName_2, t, C_n())
      });
    if (!a) ae(serverName_2, "No OAuth metadata found"), s = "no_metadata";else {
      let S = "revocation_endpoint" in a ? a.revocation_endpoint : null;
      if (!S) ae(serverName_2, "Server does not support token revocation"), s = "no_revocation_endpoint";else {
        let endpoint_2 = String(S),
          configuredHeaders_2 = await Gor(serverName_2, t, endpoint_2),
          y = ("revocation_endpoint_auth_methods_supported" in a ? a.revocation_endpoint_auth_methods_supported : void 0) ?? ("token_endpoint_auth_methods_supported" in a ? a.token_endpoint_auth_methods_supported : void 0),
          authMethod_3 = y && !y.includes("client_secret_basic") && y.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
        if (ae(serverName_2, `Revoking tokens via ${Mo(endpoint_2)} (${authMethod_3})`), r.refreshToken) try {
          await Pe({
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
          ae(serverName_2, `Failed to revoke refresh token: ${d(error)}`), s = "server_revoke_failed";
        }
        if (r.accessToken) try {
          await Pe({
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
          ae(serverName_2, `Failed to revoke access token: ${d(error)}`), s = "server_revoke_failed";
        }
      }
    }
  } catch (error) {
    ae(serverName_2, `Failed to revoke tokens: ${d(error)}`), s = "server_revoke_failed";
  }
  return s;
}
async function Hga(e, t, r) {
  let n;
  try {
    let s = (await Kn().readAsync())?.mcpOAuth?.[ha(e, t)],
      h = {
        ...r,
        accessToken: r.accessToken && r.accessToken !== s?.accessToken ? r.accessToken : void 0,
        refreshToken: r.refreshToken && r.refreshToken !== s?.refreshToken ? r.refreshToken : void 0
      };
    if (!h.accessToken && !h.refreshToken) {
      ae(e, "No replaced tokens to revoke"), g("mcp_oauth_revoke");
      return;
    }
    n = await $e(e, t, h);
  } catch (error) {
    ae(e, `Failed to revoke replaced tokens: ${d(error)}`), n = "server_revoke_failed";
  }
  if (n) c("mcp_oauth_revoke", n);else g("mcp_oauth_revoke");
}
async function $ga(serverName_3, t, {
  preserveStepUpState = !1
} = {}) {
  let n = Kn(),
    s = await KD();
  if (s === Bs) return ae(serverName_3, "Could not read the credential store to clear tokens"), m("mcp_oauth_revoke", "local_read_failed"), {
    cleared: !1,
    reason: "credential_store_failed"
  };
  let h = ha(serverName_3, t),
    a = s?.mcpOAuth?.[h],
    S;
  if (a?.accessToken || a?.refreshToken) S = await $e(serverName_3, t, {
    accessToken: a.accessToken || void 0,
    refreshToken: a.refreshToken,
    clientId: a.clientId,
    clientSecret: a.clientSecret,
    ...(a.discoveryState && {
      discoveryState: eze(a.discoveryState)
    })
  });else ae(serverName_3, "No tokens to revoke");
  let v = !1;
  try {
    if (preserveStepUpState && a && (a.stepUpScope || a.discoveryState || a.clientId)) {
      let A = await n.mutate(y => {
        let C = y.mcpOAuth?.[h];
        if (C?.accessToken !== a.accessToken || C?.clientId !== a.clientId) return y;
        return {
          ...y,
          mcpOAuth: {
            ...y.mcpOAuth,
            [h]: {
              serverName: serverName_3,
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
      v = A.success, ae(serverName_3, A.success ? "Preserved step-up auth state across revocation" : `clear local tokens failed: ${A.warning ?? "storage write failed"}`);
    } else if (preserveStepUpState) v = (await loi(serverName_3, t)).success;else {
      let A = await GOr(n, y => {
        if (!y.mcpOAuth?.[h]) return y;
        let {
          [h]: C,
          ...mcpOAuth_2
        } = y.mcpOAuth;
        return {
          ...y,
          mcpOAuth: mcpOAuth_2
        };
      }, y => y.mcpOAuth?.[h] !== void 0);
      if (!A.confirmed && A.reason === "keychain_unreadable") return ae(serverName_3, "Could not read the keychain to clear tokens"), m("mcp_oauth_revoke", "keychain_unreadable"), {
        cleared: !1,
        reason: "keychain_unreadable"
      };
      v = A.confirmed;
    }
  } catch (error) {
    ae(serverName_3, `clear local tokens failed: ${d(error)}`);
  }
  if (!v) S ??= "local_clear_failed";
  if (NB(serverName_3), S) c("mcp_oauth_revoke", S);else g("mcp_oauth_revoke");
  return v ? {
    cleared: !0
  } : {
    cleared: !1,
    reason: "credential_store_failed"
  };
}
async function loi(e, t, r) {
  let n = ha(e, t),
    s,
    h = await Kn().mutate(a => {
      let S = a.mcpOAuth?.[n];
      if (!S) return a;
      let mcpOAuth_3 = {
        ...a.mcpOAuth
      };
      if (S.clientId && r?.preserveClientRegistration?.(S)) {
        if (!S.accessToken && !S.refreshToken) return a;
        mcpOAuth_3[n] = {
          ...S,
          accessToken: "",
          refreshToken: void 0,
          expiresAt: 0,
          scope: void 0
        }, s = "tokens";
      } else if (r?.keepXaaPin && xZ(S.discoveryState)) mcpOAuth_3[n] = {
        serverName: S.serverName,
        serverUrl: S.serverUrl,
        accessToken: "",
        expiresAt: 0,
        discoveryState: S.discoveryState
      }, s = "all";else delete mcpOAuth_3[n], s = "all";
      return {
        ...a,
        mcpOAuth: mcpOAuth_3
      };
    });
  if (s) ae(e, s === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens");
  return h;
}
function Ne(e, t, r, n) {
  if (r?.success) return;
  let s = n ? "mutate_rejected" : "storage_write_failed",
    h = n ? d(n) : r?.warning ?? "storage write failed";
  ae(e, `Token persist failed: ${h}`);
  let mcpServerBaseUrl = YC(t);
  l("tengu_mcp_oauth_token_persist_failed", {
    transportType: f(t.type),
    ...(mcpServerBaseUrl && {
      mcpServerBaseUrl: mcpServerBaseUrl
    }),
    reason: f(s)
  });
}
async function oe(e, t) {
  let r = ha(e, t),
    n = await KD();
  if (n === Bs || t.oauth?.xaa && !n?.mcpOAuthClientConfig?.[r]) return Bs;
  return xZ(n?.mcpOAuth?.[r]?.discoveryState);
}
async function ct(serverName_4, t, onAuthorizationUrl, abortSignal, skipBrowserOpen) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let h = Xfe();
  if (!h) throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
  let clientId_2 = t.oauth?.clientId;
  if (!clientId_2) throw Error(`XAA: server '${serverName_4}' needs an AS client_id. Re-add with --client-id.`);
  let clientSecret_2 = (await doi(serverName_4, t))?.clientSecret;
  if (!clientSecret_2) {
    let w = ha(serverName_4, t),
      O = Object.keys((await Kn().readAsync())?.mcpOAuthClientConfig ?? {}),
      F = Tve(t.headers ?? {});
    throw ae(serverName_4, `XAA: secret lookup miss. wanted=${w} have=[${O.join(", ")}] configHeaders=${_(F)}`), Error(`XAA: AS client secret not found for '${serverName_4}'. Re-add with --client-secret.`);
  }
  if ((await oe(serverName_4, t)) === Bs) throw new fte(serverName_4);
  ae(serverName_4, "XAA: starting cross-app access flow");
  let idpClientSecret = await r4r(h.issuer),
    idTokenCacheHit = (await G7n(h.issuer)) !== void 0,
    C = "idp_login";
  try {
    let idpIdToken;
    try {
      idpIdToken = await $2o({
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
    let O = await V7n(h.issuer);
    C = "token_exchange", Ng().record(clientSecret_2);
    let pinnedAuthorizationServer_2 = await oe(serverName_4, t);
    if (pinnedAuthorizationServer_2 === Bs) throw new fte(serverName_4);
    let P;
    try {
      P = await me(t.url, {
        clientId: clientId_2,
        clientSecret: clientSecret_2,
        idpClientId: h.clientId,
        idpClientSecret: idpClientSecret,
        idpIdToken: idpIdToken,
        idpTokenEndpoint: O.token_endpoint,
        pinnedAuthorizationServer: pinnedAuthorizationServer_2
      }, serverName_4, abortSignal);
    } catch (error) {
      if (abortSignal?.aborted) throw new AuthenticationCancelledError();
      let N = d(error);
      if (error instanceof XaaTokenExchangeError) {
        if (error.shouldClearIdToken) await n4r(h.issuer), ae(serverName_4, "XAA: cleared cached id_token after token-exchange failure");
      } else if (N.includes("PRM discovery failed") || N.includes("AS metadata discovery failed") || N.includes("no authorization server supports jwt-bearer") || N.includes("authorization server changed")) C = "discovery";else if (N.includes("jwt-bearer")) C = "jwt_bearer";
      throw error;
    }
    let T = ha(serverName_4, t),
      E = Ng();
    E.record(P.access_token), E.record(P.refresh_token);
    let I, H;
    try {
      I = await Kn().mutate(U => {
        let N = U.mcpOAuth?.[T];
        return {
          ...U,
          mcpOAuth: {
            ...U.mcpOAuth,
            [T]: {
              ...N,
              serverName: serverName_4,
              serverUrl: t.url,
              accessToken: P.access_token,
              refreshToken: P.refresh_token ?? N?.refreshToken,
              expiresAt: P.expires_in != null ? Date.now() + P.expires_in * 1000 : void 0,
              scope: P.scope,
              clientId: clientId_2,
              clientSecret: clientSecret_2,
              discoveryState: h7t({
                previous: N?.discoveryState,
                issuedBy: P.authorizationServerUrl,
                interactiveSignIn: !0
              })
            }
          }
        };
      });
    } catch (error) {
      H = error;
    }
    if (I?.success) ae(serverName_4, "XAA: tokens saved");else Ne(serverName_4, t, I, H);
    l("tengu_mcp_oauth_flow_success", {
      authMethod: b("xaa"),
      idTokenCacheHit: idTokenCacheHit
    }), g("mcp_oauth_flow");
  } catch (error) {
    if (error instanceof AuthenticationCancelledError) throw error;
    throw m("mcp_oauth_flow", "mcp_oauth_xaa_failed"), l("tengu_mcp_oauth_flow_failure", {
      authMethod: b("xaa"),
      xaaFailureStage: f(C),
      idTokenCacheHit: idTokenCacheHit
    }), error;
  }
}
async function Uga(e, t, r, n, s) {
  if (!URL.canParse(t.url)) {
    m("mcp_oauth_flow", "mcp_oauth_no_valid_url");
    let T = "configError" in t && typeof t.configError === "string" ? t.configError : void 0;
    throw new R(T || "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.", "MCP OAuth refused: no valid server URL");
  }
  if (s?.redirectUriOnly) Yor(s.redirectUri, t);
  if (t.oauth?.xaa) {
    if (!CV()) throw Error(`XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`);
    l("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: b("xaa"),
      transportType: f(t.type),
      ...(YC(t) && {
        mcpServerBaseUrl: YC(t)
      })
    }), await ct(e, t, r, n, s?.skipBrowserOpen);
    return;
  }
  let h = Kn(),
    a = ha(e, t),
    S = (await h.readAsync())?.mcpOAuth?.[a],
    scope = S?.stepUpScope,
    A = S?.discoveryState?.resourceMetadataUrl,
    y = be(S),
    resourceMetadataUrl_2;
  if (A) try {
    resourceMetadataUrl_2 = new URL(A);
  } catch {
    ae(e, `Invalid cached resourceMetadataUrl: ${Mo(A)}`);
  }
  let w = {
      scope: scope,
      resourceMetadataUrl: resourceMetadataUrl_2
    },
    O = Ye(),
    F = Kor(t, s?.redirectUri);
  l("tengu_mcp_oauth_flow_start", {
    flowAttemptId: _e(O),
    isOAuthFlow: !0,
    transportType: f(t.type),
    ...F,
    ...(YC(t) && {
      mcpServerBaseUrl: YC(t)
    })
  });
  let P = !1;
  try {
    let T = t.oauth?.callbackPort,
      E = !!s?.redirectUri,
      I = E ? 0 : T ?? (await m1e(y)),
      H = s?.redirectUri ?? Xat(I);
    ae(e, E ? `Using custom redirectUri: ${Mo(H)} (no localhost listener)` : `Using redirect port: ${I}${T ? " (from config)" : y && I === y ? " (reusing registered port)" : ""}`);
    try {
      await loi(e, t, {
        preserveClientRegistration: z => I === be(z) || z.redirectUri === H,
        keepXaaPin: !0
      });
    } catch (error) {
      ae(e, `clear stored credentials failed: ${d(error)}`);
    }
    let U = bt(),
      abortController_2 = new AbortController();
    if (!E) U.oauthCallbackListeners.get(I)?.abort(), U.oauthCallbackListeners.set(I, abortController_2);
    let B = new A_n(e, t, H, !0, r, s?.skipBrowserOpen),
      Se = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (w.scope && !Se) B.markStepUpPending(w.scope);
    let fetchFn_4 = dve(e, t, C_n());
    try {
      let z = await le(e, t.url, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: fetchFn_4,
        resourceMetadataUrl: w.resourceMetadataUrl
      });
      if (z) B.setMetadata(z), ae(e, `Fetched OAuth metadata with scope: ${mx("scope", Le(z) ?? "") || "NONE"}`);
    } catch (error) {
      ae(e, `Failed to fetch OAuth metadata: ${UB(error, t.url)}`);
    }
    let K = await B.state(),
      M = null,
      D = null,
      G = null,
      Ae = null,
      V = () => {
        if (M) M.removeAllListeners(), M.on("error", () => {}), M.close(), M = null;
        if (D) clearTimeout(D), D = null;
        if (G) n?.removeEventListener("abort", G), abortController_2.signal.removeEventListener("abort", G), G = null;
        if (U.oauthCallbackListeners.get(I) === abortController_2) U.oauthCallbackListeners.delete(I);
        if (U.oauthCallbackSubmitters.get(e) === Ae) U.oauthCallbackSubmitters.delete(e);
        ae(e, "MCP OAuth server cleaned up");
      },
      authorizationCode = await new Promise((z, Fe) => {
        let ce = !1,
          we = L => {
            if (ce) return;
            ce = !0, z(L);
          },
          Y = L => {
            if (ce) return;
            ce = !0, Fe(L);
          };
        if (G = () => {
          V(), Y(new AuthenticationCancelledError());
        }, n?.aborted || abortController_2.signal.aborted) {
          G();
          return;
        }
        n?.addEventListener("abort", G), abortController_2.signal.addEventListener("abort", G);
        {
          let L = j => {
            try {
              let X = new URL(j),
                Q = X.searchParams.get("code"),
                fe = X.searchParams.get("state"),
                Z = X.searchParams.get("error");
              if (!Q && !Z) return !1;
              if (fe !== K) return ae(e, "Ignoring manual callback URL whose state belongs to a different flow"), !1;
              if (Z) {
                let ne = X.searchParams.get("error_description") || "";
                return V(), Y(Error(`OAuth error: ${Z} - ${ne}`)), !0;
              }
              if (!Q) return !1;
              return ae(e, "Received auth code via manual callback URL"), V(), we(Q), !0;
            } catch {
              return !1;
            }
          };
          Ae = L, U.oauthCallbackSubmitters.set(e, L), s?.onWaitingForCallback?.(L, I, K);
        }
        let Te = async () => {
          try {
            ae(e, "Starting SDK auth"), ae(e, `Server URL: ${Mo(t.url)}`);
            let L = await sge(B, {
              serverUrl: t.url,
              scope: w.scope,
              resourceMetadataUrl: w.resourceMetadataUrl,
              fetchFn: fetchFn_4
            });
            if (ae(e, `Initial auth result: ${L}`), L !== "REDIRECT") ae(e, `Unexpected auth result, expected REDIRECT: ${L}`);
          } catch (L) {
            ae(e, `SDK auth error: ${UB(L, t.url)}`), V(), Y(Object.assign(new R(`SDK auth failed: ${UB(L, t.url)}`, "SDK auth failed"), {
              cause: L
            }));
          }
        };
        if (E) Te();else M = Ze((L, j) => {
          let X = et(L.url || "", !0);
          if (X.pathname === "/callback") {
            let Q = X.query.code,
              state = X.query.state,
              Z = X.query.error,
              error_description = X.query.error_description,
              error_uri = X.query.error_uri;
            if (state !== K) {
              j.writeHead(400, {
                "Content-Type": "text/html"
              }), j.end(FB({
                ok: !1,
                heading: "Authentication failed",
                message: "Invalid state parameter. Close this tab and try again from Claude Code."
              }));
              return;
            }
            if (Z) {
              j.writeHead(200, {
                "Content-Type": "text/html"
              }), j.end(FB({
                ok: !1,
                heading: "Authentication failed",
                message: "Close this tab and try again from Claude Code.",
                detail: `${String(Z)}: ${error_description ?? ""}`
              })), V();
              let pe = `OAuth error: ${Z}`;
              if (error_description) pe += ` - ${error_description}`;
              if (error_uri) pe += ` (See: ${error_uri})`;
              Y(Error(pe));
              return;
            }
            if (Q) j.writeHead(200, {
              "Content-Type": "text/html"
            }), j.end(FB({
              ok: !0,
              heading: "Authentication successful",
              message: "You can close this tab and return to Claude Code."
            })), V(), we(Q);
          } else j.writeHead(404, {
            "Content-Type": "text/html"
          }), j.end(FB({
            ok: !1,
            heading: "Not found",
            message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${Mo(H)}.`
          }));
        }), M.on("error", L => {
          if (V(), L.code === "EADDRINUSE") {
            let j = x() === "windows" ? `netstat -ano | findstr :${I}` : `lsof -ti:${I} -sTCP:LISTEN`;
            Y(new R(`OAuth callback port ${I} is already in use \u2014 another process may be holding it. ` + `Run \`${j}\` to find it.`, "OAuth callback port already in use"));
          } else Y(new R(`OAuth callback server failed: ${L.message}`, "OAuth callback server failed"));
        }), M.listen(I, "127.0.0.1", () => void Te()), M.unref();
        D = setTimeout((L, j) => {
          L(), j(new R("Authentication timeout", "Authentication timeout"));
        }, 300000, V, Y), D.unref();
      });
    P = !0, ae(e, "Completing auth flow with authorization code"), Ng().record(authorizationCode);
    let he = await sge(B, {
      serverUrl: t.url,
      authorizationCode: authorizationCode,
      resourceMetadataUrl: w.resourceMetadataUrl,
      fetchFn: dve(e, t, C_n())
    });
    if (ae(e, `Auth result: ${he}`), he === "AUTHORIZED") {
      let z = await B.tokens().catch(() => {
        return;
      });
      if (ae(e, `Tokens after auth: ${z ? "Present" : "Missing"}`), z) ae(e, `Token expires_in: ${z.expires_in}`);
      l("tengu_mcp_oauth_flow_success", {
        flowAttemptId: _e(O),
        transportType: f(t.type),
        ...F,
        ...(YC(t) && {
          mcpServerBaseUrl: YC(t)
        })
      }), g("mcp_oauth_flow");
    } else throw new R("Unexpected auth result: " + he, "Unexpected auth result");
  } catch (T) {
    ae(e, `Error during auth completion: ${UB(T, t.url)}`);
    let E = "unknown",
      I,
      H,
      U = d(T),
      N = T instanceof Error ? T.cause : void 0;
    if (T instanceof AuthenticationCancelledError) E = "cancelled";else if (/AADSTS\d/.test(U)) E = "entra_specific";else if (/redirect[_ ]uri/i.test(U)) E = "redirect_uri_mismatch";else if (P && (ve(T) || ve(N))) E = "token_response_schema_rejected";else if (P) E = "token_exchange_failed";else if (U.includes("Authentication timeout")) E = "timeout";else if (U.includes("OAuth error:")) E = "provider_denied";else if (U.includes("already in use") || U.includes("EADDRINUSE") || U.includes("callback server failed") || U.includes("No available port")) E = "port_unavailable";else if (U.includes("SDK auth failed")) E = Cia(U, N);
    let B = (N instanceof Error ? N : T instanceof Error ? T : null)?.message.match(/^HTTP (\d{3})\b/);
    if (B) H = Number(B[1]);
    if (N instanceof B0) I = N.errorCode;
    if (T instanceof B0) {
      if (I = T.errorCode, T.errorCode === "invalid_client" || T.errorCode === "unauthorized_client") {
        let K = ha(e, t);
        try {
          await Kn().mutate(M => {
            let D = M.mcpOAuth?.[K];
            if (!D) return M;
            return {
              ...M,
              mcpOAuth: {
                ...M.mcpOAuth,
                [K]: {
                  ...D,
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
    if (!/^OAuth error: access_denied(?: |$)/.test(U) && (E === "timeout" || U.includes("OAuth error:"))) {
      let K = ha(e, t);
      await Kn().mutate(M => {
        let D = M.mcpOAuth?.[K];
        if (!D?.clientId || D.accessToken || D.refreshToken || D.clientId !== S?.clientId) return M;
        return {
          ...M,
          mcpOAuth: {
            ...M.mcpOAuth,
            [K]: {
              ...D,
              clientId: void 0,
              clientSecret: void 0
            }
          }
        };
      }).catch(M => ae(e, `drop clientId failed: ${d(M)}`));
    }
    if (E !== "cancelled") m("mcp_oauth_flow", "mcp_oauth_flow_failed");
    l("tengu_mcp_oauth_flow_error", {
      flowAttemptId: _e(O),
      reason: f(E),
      error_code: I === void 0 ? void 0 : Tia(I),
      http_status: x7(H),
      transportType: f(t.type),
      ...F,
      ...(YC(t) && {
        mcpServerBaseUrl: YC(t)
      })
    });
    let re = UB(T, t.url);
    throw re === d(T) ? T : Error(re, {
      cause: T
    });
  }
}
function z7n(e, t) {
  return async (r, n) => {
    let s = await e(r, n);
    if (s.status === 401 || s.status === 403) t.sawAuthChallenge = !0;
    if (t.noteServerAnswer(r, s.status === 401 || s.status === 403 && t1e(s).error === "insufficient_scope"), s.status === 401 || s.status === 403) t.noteAuthRejection(r, s.status, new Headers(n?.headers).get("authorization"));
    if (!new Headers(n?.headers).has("authorization")) return s;
    if (s.status === 403) {
      let {
        error: error_2,
        scope: scope_2
      } = t1e(s);
      if (error_2 === "insufficient_scope" && scope_2) t.markStepUpPending(scope_2);
    } else if (s.status === 401) t.clearStepUpPending();
    return s;
  };
}
class A_n {
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
  _lastAuthRejection;
  _presented;
  onAuthorizationUrlCallback;
  skipBrowserOpen;
  constructor(e, t, r = Xat(), n = !1, s, h) {
    this.serverName = e, this.serverConfig = t, this.redirectUri = r, this.handleRedirection = n, this.onAuthorizationUrlCallback = s, this.skipBrowserOpen = h ?? !1, this._presented = Ng();
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
    if (!Me(this.redirectUri)) {
      ae(this.serverName, `redirectUri ${Mo(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
      return;
    }
    let e = xe();
    if (e !== Ent) ae(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    this._metadata = e;
  }
  getCuratedMetadataScope() {
    let e = Le(this._metadata);
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
  noteAuthRejection(e, status, r) {
    let n = this.serverConfig.url;
    if (String(e) === (URL.canParse(n) ? new URL(n).href : n)) this._lastAuthRejection = {
      status: status,
      accessToken: r?.startsWith("Bearer ") ? r.slice(7) : void 0
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
    let r = this.serverConfig.url;
    if (String(e) === (URL.canParse(r) ? new URL(r).href : r)) this.authChallengeOpen = t;
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
    if (!this._state) this._state = Ve(32).toString("base64url"), ae(this.serverName, "Generated new OAuth state");
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
      n = this.serverConfig.oauth?.clientId,
      s = e?.mcpOAuth?.[t],
      h = this.handleRedirection && at(s?.clientId) && !Me(this.redirectUri);
    if (h) {
      if (ae(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${Mo(this.redirectUri)} \u2014 ${n ? "serving the configured client" : "registering via DCR"} instead`), n) await this.patchStoredClientEntry(t, {
        clientId: n,
        clientSecret: void 0,
        redirectUri: this.redirectUri
      }, "stale CIMD client_id repair");
    }
    if (s?.clientId && !h) {
      let redirectUri = s.redirectUri;
      if (this.handleRedirection && (redirectUri ? ke(redirectUri) !== ke(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
        let S = redirectUri ? Mo(redirectUri) : "localhost";
        if (!n) {
          ae(this.serverName, `Cached client_id was registered for ${S}; current redirectUri is ${Mo(this.redirectUri)} \u2014 forcing re-DCR`);
          return;
        }
        if (s.clientId !== n) return ae(this.serverName, `Stored client_id is stale and its redirectUri ${S} predates ${Mo(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`), await this.patchStoredClientEntry(t, {
          clientId: n,
          clientSecret: void 0,
          redirectUri: this.redirectUri
        }, "stale client_id repair"), this._lastServedClientId = n, {
          client_id: n,
          client_secret: client_secret
        };
        ae(this.serverName, `Stored redirectUri ${S} predates ${Mo(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`), await this.patchStoredClientEntry(t, {
          redirectUri: this.redirectUri
        }, "stored redirectUri convergence");
      }
      return ae(this.serverName, "Found client info"), this._lastServedClientId = s.clientId, {
        client_id: s.clientId,
        client_secret: s.clientSecret ?? (s.clientId === n ? client_secret : void 0)
      };
    }
    if (n) return ae(this.serverName, "Using pre-configured client ID"), this._lastServedClientId = n, {
      client_id: n,
      client_secret: client_secret
    };
    if (!this.handleRedirection && this.registrationOfferedByDiscovery && !s?.accessToken && !s?.refreshToken) throw ae(this.serverName, "No client info found; deferring client registration to authentication time"), new McpClientRegistrationDeferredError(this.serverName);
    ae(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, t, r) {
    try {
      if (!(await Kn().mutate(s => {
        let h = s.mcpOAuth?.[e];
        if (!h) return s;
        return {
          ...s,
          mcpOAuth: {
            ...s.mcpOAuth,
            [e]: {
              ...h,
              ...t
            }
          }
        };
      }))?.success) ae(this.serverName, `${r} resolved unsuccessful`);
    } catch (error) {
      ae(this.serverName, `${r} failed: ${d(error)}`);
    }
  }
  async saveClientInformation(e) {
    this._presented.record(e.client_secret), this._presented.record(lYt(e.client_id, e.client_secret));
    let t = ha(this.serverName, this.serverConfig);
    try {
      if ((await Kn().mutate(n => ({
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
      })))?.success) this._lastServedClientId = e.client_id;else ae(this.serverName, "saveClientInformation persist resolved unsuccessful");
    } catch (error) {
      ae(this.serverName, `saveClientInformation persist failed: ${d(error)}`);
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(),
      t = ha(this.serverName, this.serverConfig),
      r = e?.mcpOAuth?.[t];
    if (CV() && this.serverConfig.oauth?.xaa && !r?.refreshToken && (!r?.accessToken || r.expiresAt != null && (r.expiresAt - Date.now()) / 1000 <= 300)) {
      if (!this._refreshInProgress) ae(this.serverName, r ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange"), this._refreshInProgress = this.xaaRefresh().finally(() => {
        this._refreshInProgress = void 0;
      });
      try {
        let S = await this._refreshInProgress;
        if (S) return this._lastServedAccessToken = S.access_token, this._presented.record(S.access_token), this._presented.record(S.refresh_token), this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken, S;
      } catch (error) {
        ae(this.serverName, `XAA silent exchange failed: ${d(error)}`);
      }
    }
    if (!r) {
      ae(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (!r.accessToken) {
      ae(this.serverName, "No access token in storage"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (Hkn(t, r.accessToken)) {
      ae(this.serverName, "Not sending the stored access token, because the server rejected it earlier in this session");
      return;
    }
    this._lastServedAccessToken = r.accessToken, this._presented.record(r.accessToken), this._presented.record(r.refreshToken), this._lastServedRefreshToken = r.refreshToken;
    let expires_in = r.expiresAt != null ? (r.expiresAt - Date.now()) / 1000 : void 0,
      _pendingStepUpScope = this._pendingStepUpScope,
      h = _pendingStepUpScope !== void 0;
    if (h) ae(this.serverName, `Step-up pending (${mx("scope", _pendingStepUpScope)}), omitting refresh_token`);
    if (expires_in != null && expires_in <= 0 && !r.refreshToken) {
      ae(this.serverName, "Token expired without refresh token"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (expires_in != null && expires_in <= 300 && r.refreshToken && !h) {
      if (!this._refreshInProgress) ae(this.serverName, `Token expires in ${Math.floor(expires_in)}s, attempting proactive refresh`), this._refreshInProgress = this.refreshAuthorization(r.refreshToken).finally(() => {
        this._refreshInProgress = void 0;
      });else ae(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let S = await this._refreshInProgress;
        if (S) return ae(this.serverName, "Token refreshed successfully"), this._lastServedAccessToken = S.access_token, this._presented.record(S.access_token), this._presented.record(S.refresh_token), this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken, S;
        ae(this.serverName, "Token refresh failed, returning current tokens");
      } catch (error) {
        ae(this.serverName, `Token refresh error: ${UB(error, this.serverConfig.url)}`);
      }
    }
    let a = {
      access_token: r.accessToken,
      refresh_token: h ? void 0 : r.refreshToken,
      expires_in: expires_in,
      scope: r.scope,
      token_type: "Bearer"
    };
    return ae(this.serverName, "Returning tokens"), ae(this.serverName, `Has refresh token: ${!!a.refresh_token}`), ae(this.serverName, expires_in != null ? `Expires in: ${Math.floor(expires_in)}s` : "No expiration specified"), a;
  }
  async saveTokens(e) {
    if (this._presented.record(e.access_token), this._presented.record(e.refresh_token), this.handleRedirection) this._pendingStepUpScope = void 0;
    let t = ha(this.serverName, this.serverConfig);
    ae(this.serverName, "Saving tokens"), ae(this.serverName, `Token expires in: ${e.expires_in}`), ae(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
    let signIn = this._servedOverrideAuthorizationServerUrl === void 0 ? this._discoveredAuthorizationServer : {
        authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
        oauthMetadataFound: !0
      },
      servedMetadataUrl = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl,
      s,
      h;
    try {
      s = await Kn().mutate(a => ({
        ...a,
        mcpOAuth: {
          ...a.mcpOAuth,
          [t]: {
            ...a.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? a.mcpOAuth?.[t]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope,
            discoveryState: Fkn(v_r({
              previous: a.mcpOAuth?.[t]?.discoveryState,
              signIn: signIn,
              servedMetadataUrl: servedMetadataUrl,
              interactiveSignIn: this.handleRedirection
            }))
          }
        }
      }));
    } catch (error) {
      h = error;
    }
    if (s?.success) this._lastServedAccessToken = e.access_token, this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken, Uor(t, e.access_token);
    this.logTokenPersistFailed(s, h);
  }
  logTokenPersistFailed(e, t) {
    Ne(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = Xfe();
    if (!e) return;
    let idpIdToken_2 = await G7n(e.issuer);
    if (!idpIdToken_2) {
      ae(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let clientId_3 = this.serverConfig.oauth?.clientId,
      n = await doi(this.serverName, this.serverConfig);
    if (!clientId_3 || !n?.clientSecret) {
      ae(this.serverName, "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh");
      return;
    }
    let s = await oe(this.serverName, this.serverConfig);
    if (s === Bs) {
      ae(this.serverName, "XAA: stored credentials unreadable");
      return;
    }
    let h = s ? void 0 : await Kn().readAsyncStrict?.(void 0, {
      inaccessibleAs: "failure"
    });
    if (h === Bs) {
      ae(this.serverName, "XAA: no pin and the keychain is unreadable");
      return;
    }
    let pinnedAuthorizationServer_3 = s ?? xZ(h?.mcpOAuth?.[ha(this.serverName, this.serverConfig)]?.discoveryState),
      idpClientSecret_2 = await r4r(e.issuer),
      v;
    try {
      v = await V7n(e.issuer);
    } catch (error) {
      ae(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${d(error)}`);
      return;
    }
    this._presented.record(n.clientSecret);
    try {
      let A = await me(this.serverConfig.url, {
          clientId: clientId_3,
          clientSecret: n.clientSecret,
          idpClientId: e.clientId,
          idpClientSecret: idpClientSecret_2,
          idpIdToken: idpIdToken_2,
          idpTokenEndpoint: v.token_endpoint,
          pinnedAuthorizationServer: pinnedAuthorizationServer_3
        }, this.serverName),
        y = ha(this.serverName, this.serverConfig),
        C,
        w;
      try {
        C = await Kn().mutate(O => {
          let F = O.mcpOAuth?.[y];
          return {
            ...O,
            mcpOAuth: {
              ...O.mcpOAuth,
              [y]: {
                ...F,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: A.access_token,
                refreshToken: A.refresh_token ?? F?.refreshToken,
                expiresAt: A.expires_in != null ? Date.now() + A.expires_in * 1000 : void 0,
                scope: A.scope,
                clientId: clientId_3,
                clientSecret: n.clientSecret,
                discoveryState: h7t({
                  previous: F?.discoveryState,
                  issuedBy: A.authorizationServerUrl,
                  interactiveSignIn: !1
                })
              }
            }
          };
        });
      } catch (error) {
        w = error;
      }
      return this.logTokenPersistFailed(C, w), {
        access_token: A.access_token,
        token_type: "Bearer",
        expires_in: A.expires_in,
        scope: A.scope,
        refresh_token: A.refresh_token
      };
    } catch (error) {
      if (error instanceof XaaTokenExchangeError && error.shouldClearIdToken) await n4r(e.issuer), ae(this.serverName, "XAA: cleared id_token after exchange failure");
      throw error;
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope ? void 0 : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : void 0),
      r = e.searchParams.get("scope"),
      n = t ?? r;
    if (n !== r) ae(this.serverName, `Overrode authorization scope from ${r ? mx("scope", r) : "NONE"} to configured: ${n ? mx("scope", n) : "NONE"}`);
    let s = n === null ? null : Ria(n, this._metadata);
    if (s !== null && s !== r) {
      if (e.searchParams.set("scope", s), s !== t) ae(this.serverName, "Appended offline_access to authorization scope");
    }
    let h = Aia(e),
      a = e.searchParams.getAll("prompt"),
      S = h ? a.filter(item => item !== "consent") : a;
    if (S.length !== a.length || S.length > 1) {
      if (e.searchParams.delete("prompt"), S.length > 0) e.searchParams.set("prompt", S.includes("consent") ? "consent" : S.at(-1));
    }
    this._authorizationUrl = e.toString();
    let v = e.searchParams.get("scope");
    if (ae(this.serverName, `Authorization URL: ${soi(e)}`), ae(this.serverName, `Scopes in URL: ${v ? mx("scope", v) : "NOT FOUND"}`), v) this._scopes = v, ae(this.serverName, `Captured scopes from authorization URL: ${mx("scope", v)}`);else {
      let O = this.getCuratedMetadataScope();
      if (O) this._scopes = O, ae(this.serverName, `Using scopes from metadata: ${mx("scope", O)}`);else ae(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let O = ha(this.serverName, this.serverConfig),
        F = this._scopes,
        P = !1;
      try {
        await Kn().mutate(T => {
          let E = T.mcpOAuth?.[O];
          if (!E) return T;
          return P = !0, {
            ...T,
            mcpOAuth: {
              ...T.mcpOAuth,
              [O]: {
                ...E,
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
    let A = e.toString();
    if (!A.startsWith("http://") && !A.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    ae(this.serverName, "Redirecting to authorization URL");
    let y = soi(e);
    if (ae(this.serverName, `Authorization URL: ${y}`), this.onAuthorizationUrlCallback) this.onAuthorizationUrlCallback(A);
    if (this.skipBrowserOpen) {
      ae(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${y}`);
      return;
    }
    let headless = tV();
    if (headless) ae(this.serverName, `Skipping browser open (headless environment). URL: ${y}`);else ae(this.serverName, `Opening authorization URL: ${y}`);
    let success = headless ? !1 : await Zi(A);
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
      r = ha(this.serverName, this.serverConfig),
      n = !1;
    try {
      let _lastServedClientId = this._lastServedClientId,
        _lastServedAccessToken = this._lastServedAccessToken,
        _lastServedRefreshToken = this._lastServedRefreshToken;
      await Kn().mutate(S => {
        let v = S.mcpOAuth?.[r];
        if (!v) return S;
        let mcpOAuth_4 = {
          ...S.mcpOAuth
        };
        switch (t) {
          case "all":
            {
              let y = _lastServedAccessToken != null && !!v.accessToken && v.accessToken !== _lastServedAccessToken,
                C = _lastServedClientId != null && v.clientId != null && v.clientId !== _lastServedClientId;
              if (y || C) return ae(this.serverName, `invalidateCredentials('all') preserved: ${y ? "foreign token" : "concurrent re-registration"}`), S;
              if (!v.clientId && !v.refreshToken && v.accessToken === "") return S;
              mcpOAuth_4[r] = {
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
            mcpOAuth_4[r] = {
              ...v,
              clientId: void 0,
              clientSecret: void 0
            };
            break;
          case "tokens":
            {
              if (_lastServedRefreshToken != null && v.refreshToken && v.refreshToken !== _lastServedRefreshToken || _lastServedAccessToken != null && !!v.accessToken && v.accessToken !== _lastServedAccessToken) return ae(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation"), S;
              mcpOAuth_4[r] = {
                ...v,
                accessToken: "",
                refreshToken: void 0,
                expiresAt: 0
              };
              break;
            }
          case "discovery":
            mcpOAuth_4[r] = {
              ...v,
              discoveryState: v.discoveryState && eze(v.discoveryState),
              stepUpScope: void 0
            };
            break;
        }
        return n = !0, {
          ...S,
          mcpOAuth: mcpOAuth_4
        };
      });
    } catch (error) {
      ae(this.serverName, `invalidateCredentials persist failed: ${d(error)}`);
    }
    if (n) ae(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    if (this.serverConfig.oauth?.xaa) return;
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
      await Kn().mutate(h => {
        let a = k_r({
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
                ...a,
                resourceMetadataUrl: e.resourceMetadataUrl,
                tokenlessRejectedAt: Bor(t, h.mcpOAuth?.[t]),
                registrationNotOfferedAt: authorizationServerMetadata_2 === void 0 ? h.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt : typeof authorizationServerMetadata_2.registration_endpoint !== "string" && authorizationServerMetadata_2.client_id_metadata_document_supported !== !0 ? Date.now() : void 0
              }
            }
          }
        };
      });
    } catch (error) {
      ae(this.serverName, `saveDiscoveryState persist failed: ${d(error)}`);
    }
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
        let authorizationServerMetadata_3 = await le(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: configuredMetadataUrl_2,
          fetchFn: dve(this.serverName, this.serverConfig, C_n())
        });
        if (authorizationServerMetadata_3) return this._servedOverrideAuthorizationServerUrl = authorizationServerMetadata_3.issuer, this._servedOverrideDocuments.set(authorizationServerMetadata_3, configuredMetadataUrl_2), {
          authorizationServerUrl: authorizationServerMetadata_3.issuer,
          authorizationServerMetadata: authorizationServerMetadata_3
        };
      } catch (error) {
        ae(this.serverName, `Failed to fetch from configured metadata URL: ${UB(error, this.serverConfig.url)}`);
      }
      return;
    }
    let n = await Kn().readAsync(),
      s = ha(this.serverName, this.serverConfig),
      h = n?.mcpOAuth?.[s]?.discoveryState;
    if (h?.authorizationServerUrl) return ae(this.serverName, `Returning cached discovery state (authServer: ${Mo(h.authorizationServerUrl)})`), {
      authorizationServerUrl: h.authorizationServerUrl,
      resourceMetadataUrl: h.resourceMetadataUrl,
      resourceMetadata: h.resourceMetadata,
      authorizationServerMetadata: h.authorizationServerMetadata
    };
    return;
  }
  async refreshAuthorization(e) {
    if (q()) {
      ae(this.serverName, "claude-code-server session; skipping refresh");
      return;
    }
    let t = ha(this.serverName, this.serverConfig),
      r = FU();
    await ie().mkdir(r);
    let n = t.replace(/[^a-zA-Z0-9]/g, "_"),
      s = Qe(r, `mcp-refresh-${n}.lock`),
      h;
    for (let a = 0; a < ge; a++) try {
      ae(this.serverName, `Acquiring refresh lock (attempt ${a + 1})`), h = await Zd(s, {
        realpath: !1,
        stale: 60000,
        update: 5000,
        onCompromised: () => {
          ae(this.serverName, "Refresh lock was compromised");
        }
      }), ae(this.serverName, "Acquired refresh lock");
      break;
    } catch (error) {
      let v = k(error);
      if (v === "ELOCKED") {
        ae(this.serverName, `Refresh lock held by another process, waiting (attempt ${a + 1}/${ge})`), await J(1000 + Math.random() * 1000);
        continue;
      }
      ae(this.serverName, `Failed to acquire refresh lock: ${v}; skipping refresh`);
      return;
    }
    if (!h) {
      ae(this.serverName, `Could not acquire refresh lock after ${ge} retries; skipping refresh`);
      return;
    }
    try {
      HU();
      let v = (await Kn().readAsync())?.mcpOAuth?.[t];
      if (v) {
        let expires_in_2 = v.expiresAt != null ? (v.expiresAt - Date.now()) / 1000 : void 0;
        if (v.accessToken && (expires_in_2 == null || expires_in_2 > 300)) return ae(this.serverName, expires_in_2 != null ? `Another process already refreshed tokens (expires in ${Math.floor(expires_in_2)}s)` : "Another process already refreshed tokens (no expiration)"), {
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
        await h(), ae(this.serverName, "Released refresh lock");
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
      mcpServerBaseUrl_2 = YC(this.serverConfig),
      n = (s, h) => {
        l(s === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
          transportType: f(this.serverConfig.type),
          ...(mcpServerBaseUrl_2 && {
            mcpServerBaseUrl: mcpServerBaseUrl_2
          }),
          ...(h && {
            reason: f(h)
          })
        });
      };
    for (let s = 1; s <= t; s++) {
      let clientInformation;
      try {
        ae(this.serverName, "Starting token refresh");
        let fetchFn_5 = dve(this.serverName, this.serverConfig, C_n()),
          S = this._metadata;
        if (!S) {
          let A = await this.discoveryState();
          if (A?.authorizationServerMetadata) S = A.authorizationServerMetadata;else if (A?.authorizationServerUrl) ae(this.serverName, `Re-discovering metadata from persisted auth server URL: ${Mo(A.authorizationServerUrl)}`), S = await x4t(A.authorizationServerUrl, {
            fetchFn: fetchFn_5
          });
        }
        if (!S && !this.serverConfig.oauth?.xaa && (await oe(this.serverName, this.serverConfig)) === void 0) S = await le(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
          fetchFn: fetchFn_5
        });
        if (!S) {
          ae(this.serverName, "Failed to discover OAuth metadata"), n("failure", "metadata_discovery_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
          return;
        }
        if (this._metadata = S, clientInformation = await this.clientInformation(), !clientInformation) {
          ae(this.serverName, "No client information available"), n("failure", "no_client_info"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
          return;
        }
        let v = await F5o(new URL(this.serverConfig.url), {
          metadata: S,
          clientInformation: clientInformation,
          refreshToken: refreshToken,
          resource: new URL(this.serverConfig.url),
          fetchFn: fetchFn_5
        });
        if (v) return ae(this.serverName, "Token refresh successful"), await this.saveTokens(v), n("success"), g("mcp_oauth_refresh"), v;
        ae(this.serverName, "Token refresh returned no tokens"), n("failure", "no_tokens_returned"), m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
        return;
      } catch (error) {
        if (error instanceof TRt) {
          ae(this.serverName, `Token refresh failed with invalid_grant: ${error.message}`);
          let {
            freshTokens: freshTokens_2
          } = await this.readConcurrentRefreshWinner();
          if (freshTokens_2) return c("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), freshTokens_2;
          ae(this.serverName, "No valid tokens in storage, clearing stored tokens"), n("failure", "invalid_grant"), m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"), await this.invalidateCredentials("tokens"), yve.emit(this.serverName);
          return;
        }
        if (error instanceof B0 && (error.errorCode === "invalid_client" || error.errorCode === "unauthorized_client")) {
          ae(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
          let {
            tokenData: tokenData_2,
            freshTokens: freshTokens_3
          } = await this.readConcurrentRefreshWinner();
          if (freshTokens_3) return c("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), freshTokens_3;
          if (tokenData_2?.clientId && clientInformation && tokenData_2.clientId !== clientInformation.client_id) {
            ae(this.serverName, "Another process re-registered client; preserving"), n("failure", "concurrent_reregister"), c("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
            return;
          }
          n("failure", error.errorCode === "unauthorized_client" ? "unauthorized_client" : "invalid_client"), m("mcp_oauth_refresh", error.errorCode === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client"), await this.invalidateCredentials("all"), yve.emit(this.serverName);
          return;
        }
        if (ve(error)) {
          ae(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${d(error)}`), n("failure", "token_response_schema_rejected"), m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
          return;
        }
        let S = error instanceof fte,
          v = error instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(error.message),
          A = error instanceof o3e || error instanceof Ywn || error instanceof Xwn,
          y = v || A || S;
        if (!y || s >= t) {
          ae(this.serverName, `Token refresh failed: ${UB(error, this.serverConfig.url)}`), n("failure", y ? "transient_retries_exhausted" : "request_failed"), m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed");
          return;
        }
        let C = 1000 * Math.pow(2, s - 1);
        ae(this.serverName, `Token refresh failed, retrying in ${C}ms (attempt ${s}/${t})`), await J(C);
      }
    }
    return;
  }
}
async function Bga() {
  let MCP_CLIENT_SECRET = process.env.MCP_CLIENT_SECRET;
  if (MCP_CLIENT_SECRET) return MCP_CLIENT_SECRET;
  if (!process.stdin.isTTY) throw Error("No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.");
  return new Promise((t, r) => {
    process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0);
    let n = "",
      s = h => {
        let a = h.toString();
        if (a === `
` || a === "\r") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", s), process.stderr.write(`
`), t(n);else if (a === "\x03") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", s), r(Error("Cancelled"));else if (a === "\x7F" || a === "\b") n = n.slice(0, -1);else n += a;
      };
    process.stdin.on("data", s);
  });
}
async function jga(e, t, clientSecret_3) {
  let n = ha(e, t);
  try {
    return await Kn().mutate(s => ({
      ...s,
      mcpOAuthClientConfig: {
        ...s.mcpOAuthClientConfig,
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
async function Wga(e, t) {
  let r = ha(e, t);
  await Kn().mutate(n => {
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
async function doi(e, t) {
  let n = await Kn().readAsync(),
    s = ha(e, t);
  return n?.mcpOAuthClientConfig?.[s];
}
function Le(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return;
}
function Ria(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}
var dt = ["login.microsoftonline.com", "login.microsoftonline.us", "login.partner.microsoftonline.cn", "login.chinacloudapi.cn"],
  ut = [".b2clogin.com", ".ciamlogin.com"];
function Aia(e) {
  try {
    let hostname = (typeof e === "string" ? new URL(e) : e).hostname;
    return dt.includes(hostname) || ut.some(item => hostname.endsWith(item));
  } catch {
    return !1;
  }
}
export { Tia, Cia, soi, ioi, C_n, McpClientRegistrationDeferredError as aoi, AuthenticationCancelledError as R_n, Dga, Lga, Nga, t4r, Fga, Hga, $ga, loi, Uga, z7n, A_n, Bga, jga, Wga, doi, Ria, Aia };