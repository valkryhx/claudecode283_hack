// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d4t } from "B:/~BUN/root/chunk-30ttjk6q.js";
import { URe } from "B:/~BUN/root/chunk-d8rhtyyx.js";
import { C4, L0e } from "B:/~BUN/root/chunk-9j3awrp0.js";
import { o, b1t, v, M, JJ, T, u, _t, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { D2 } from "B:/~BUN/root/chunk-axjnbnmy.js";
var d = b1t().superRefine((e, t) => {
    if (!URL.canParse(e)) return t.addIssue({
      code: C4.custom,
      message: "URL must be parseable",
      fatal: !0
    }), D2;
  }).refine(e => {
    let t = new URL(e);
    return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
  }, {
    message: "URL cannot use javascript:, data:, or vbscript: scheme"
  }),
  Z = _t({
    resource: o().url(),
    authorization_servers: T(d).optional(),
    jwks_uri: o().url().optional(),
    scopes_supported: T(o()).optional(),
    bearer_methods_supported: T(o()).optional(),
    resource_signing_alg_values_supported: T(o()).optional(),
    resource_name: o().optional(),
    resource_documentation: o().optional(),
    resource_policy_uri: o().url().optional(),
    resource_tos_uri: o().url().optional(),
    tls_client_certificate_bound_access_tokens: M().optional(),
    authorization_details_types_supported: T(o()).optional(),
    dpop_signing_alg_values_supported: T(o()).optional(),
    dpop_bound_access_tokens_required: M().optional()
  }),
  $Cn = _t({
    issuer: o(),
    authorization_endpoint: d,
    token_endpoint: d,
    registration_endpoint: d.optional(),
    scopes_supported: T(o()).optional(),
    response_types_supported: T(o()),
    response_modes_supported: T(o()).optional(),
    grant_types_supported: T(o()).optional(),
    token_endpoint_auth_methods_supported: T(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    service_documentation: d.optional(),
    revocation_endpoint: d.optional(),
    revocation_endpoint_auth_methods_supported: T(o()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    introspection_endpoint: o().optional(),
    introspection_endpoint_auth_methods_supported: T(o()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    code_challenge_methods_supported: T(o()).optional(),
    client_id_metadata_document_supported: M().optional()
  }),
  ne = _t({
    issuer: o(),
    authorization_endpoint: d,
    token_endpoint: d,
    userinfo_endpoint: d.optional(),
    jwks_uri: d,
    registration_endpoint: d.optional(),
    scopes_supported: T(o()).optional(),
    response_types_supported: T(o()),
    response_modes_supported: T(o()).optional(),
    grant_types_supported: T(o()).optional(),
    acr_values_supported: T(o()).optional(),
    subject_types_supported: T(o()),
    id_token_signing_alg_values_supported: T(o()),
    id_token_encryption_alg_values_supported: T(o()).optional(),
    id_token_encryption_enc_values_supported: T(o()).optional(),
    userinfo_signing_alg_values_supported: T(o()).optional(),
    userinfo_encryption_alg_values_supported: T(o()).optional(),
    userinfo_encryption_enc_values_supported: T(o()).optional(),
    request_object_signing_alg_values_supported: T(o()).optional(),
    request_object_encryption_alg_values_supported: T(o()).optional(),
    request_object_encryption_enc_values_supported: T(o()).optional(),
    token_endpoint_auth_methods_supported: T(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    display_values_supported: T(o()).optional(),
    claim_types_supported: T(o()).optional(),
    claims_supported: T(o()).optional(),
    service_documentation: o().optional(),
    claims_locales_supported: T(o()).optional(),
    ui_locales_supported: T(o()).optional(),
    claims_parameter_supported: M().optional(),
    request_parameter_supported: M().optional(),
    request_uri_parameter_supported: M().optional(),
    require_request_uri_registration: M().optional(),
    op_policy_uri: d.optional(),
    op_tos_uri: d.optional(),
    client_id_metadata_document_supported: M().optional()
  }),
  aar = u({
    ...ne.shape,
    ...$Cn.pick({
      code_challenge_methods_supported: !0
    }).shape
  }),
  lar = u({
    access_token: o(),
    id_token: o().optional(),
    token_type: o(),
    expires_in: L0e().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }).strip(),
  dar = u({
    error: o(),
    error_description: o().optional(),
    error_uri: o().optional()
  }),
  F = d.optional().or(C("").transform(() => {
    return;
  })),
  ae = u({
    redirect_uris: T(d),
    token_endpoint_auth_method: o().optional(),
    grant_types: T(o()).optional(),
    response_types: T(o()).optional(),
    client_name: o().optional(),
    client_uri: d.optional(),
    logo_uri: F,
    scope: o().optional(),
    contacts: T(o()).optional(),
    tos_uri: F,
    policy_uri: o().optional(),
    jwks_uri: d.optional(),
    jwks: JJ().optional(),
    software_id: o().optional(),
    software_version: o().optional(),
    software_statement: o().optional()
  }).strip(),
  se = u({
    client_id: o(),
    client_secret: o().optional(),
    client_id_issued_at: v().optional(),
    client_secret_expires_at: v().optional()
  }).strip(),
  J = ae.merge(se),
  Ce = u({
    error: o(),
    error_description: o().optional()
  }).strip(),
  ke = u({
    token: o(),
    token_type_hint: o().optional()
  }).strip();
function E(e) {
  let t = typeof e === "string" ? new URL(e) : new URL(e.href);
  return t.hash = "", t;
}
function Y({
  requestedResource: requestedResource,
  configuredResource: configuredResource
}) {
  let r = typeof requestedResource === "string" ? new URL(requestedResource) : new URL(requestedResource.href),
    n = typeof configuredResource === "string" ? new URL(configuredResource) : new URL(configuredResource.href);
  if (r.origin !== n.origin) return !1;
  if (r.pathname.length < n.pathname.length) return !1;
  let a = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/",
    i = n.pathname.endsWith("/") ? n.pathname : n.pathname + "/";
  return a.startsWith(i);
}
class OP extends Error {
  constructor(e, t) {
    super(e);
    this.errorUri = t, this.name = this.constructor.name;
  }
  toResponseObject() {
    let e = {
      error: this.errorCode,
      error_description: this.message
    };
    if (this.errorUri) e.error_uri = this.errorUri;
    return e;
  }
  get errorCode() {
    return this.constructor.errorCode;
  }
}
class x extends OP {}
x.errorCode = "invalid_request";
class g extends OP {}
g.errorCode = "invalid_client";
class tot extends OP {}
tot.errorCode = "invalid_grant";
class w extends OP {}
w.errorCode = "unauthorized_client";
class U extends OP {}
U.errorCode = "unsupported_grant_type";
class R extends OP {}
R.errorCode = "invalid_scope";
class k extends OP {}
k.errorCode = "access_denied";
class yNe extends OP {}
yNe.errorCode = "server_error";
class i4t extends OP {}
i4t.errorCode = "temporarily_unavailable";
class b extends OP {}
b.errorCode = "unsupported_response_type";
class S extends OP {}
S.errorCode = "unsupported_token_type";
class L extends OP {}
L.errorCode = "invalid_token";
class P extends OP {}
P.errorCode = "method_not_allowed";
class a4t extends OP {}
a4t.errorCode = "too_many_requests";
class z extends OP {}
z.errorCode = "invalid_client_metadata";
class A extends OP {}
A.errorCode = "insufficient_scope";
class O extends OP {}
O.errorCode = "invalid_target";
var K = {
  [x.errorCode]: x,
  [g.errorCode]: g,
  [tot.errorCode]: tot,
  [w.errorCode]: w,
  [U.errorCode]: U,
  [R.errorCode]: R,
  [k.errorCode]: k,
  [yNe.errorCode]: yNe,
  [i4t.errorCode]: i4t,
  [b.errorCode]: b,
  [S.errorCode]: S,
  [L.errorCode]: L,
  [P.errorCode]: P,
  [a4t.errorCode]: a4t,
  [z.errorCode]: z,
  [A.errorCode]: A,
  [O.errorCode]: O
};
class IP extends Error {
  constructor(e) {
    super(e ?? "Unauthorized");
  }
}
function ie(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
var j = "code",
  W = "S256";
function ce(e, t) {
  let r = e.client_secret !== void 0;
  if ("token_endpoint_auth_method" in e && e.token_endpoint_auth_method && ie(e.token_endpoint_auth_method) && (t.length === 0 || t.includes(e.token_endpoint_auth_method))) return e.token_endpoint_auth_method;
  if (t.length === 0) return r ? "client_secret_basic" : "none";
  if (r && t.includes("client_secret_basic")) return "client_secret_basic";
  if (r && t.includes("client_secret_post")) return "client_secret_post";
  if (t.includes("none")) return "none";
  return r ? "client_secret_post" : "none";
}
function ue(e, t, r, n) {
  let {
    client_id: client_id,
    client_secret: client_secret
  } = t;
  switch (e) {
    case "client_secret_basic":
      le(client_id, client_secret, r);
      return;
    case "client_secret_post":
      pe(client_id, client_secret, n);
      return;
    case "none":
      de(client_id, n);
      return;
    default:
      throw Error(`Unsupported client authentication method: ${e}`);
  }
}
function le(e, t, r) {
  if (!t) throw Error("client_secret_basic authentication requires a client_secret");
  let n = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${n}`);
}
function pe(e, t, r) {
  if (r.set("client_id", e), t) r.set("client_secret", t);
}
function de(e, t) {
  t.set("client_id", e);
}
async function X(e) {
  let t = e instanceof Response ? e.status : void 0,
    r = e instanceof Response ? await e.text() : e;
  try {
    let n = dar.parse(JSON.parse(r)),
      {
        error: error,
        error_description: error_description,
        error_uri: error_uri
      } = n;
    return new (K[error] || yNe)(error_description || "", error_uri);
  } catch (error) {
    let a = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${error}. Raw body: ${r}`;
    return new yNe(a);
  }
}
async function hoe(e, t) {
  try {
    return await H(e, t);
  } catch (error) {
    if (error instanceof g || error instanceof w) return await e.invalidateCredentials?.("all"), await H(e, t);else if (error instanceof tot) return await e.invalidateCredentials?.("tokens"), await H(e, t);
    throw error;
  }
}
async function H(e, {
  serverUrl: serverUrl,
  authorizationCode: authorizationCode,
  scope: scope,
  resourceMetadataUrl: resourceMetadataUrl,
  fetchFn: fetchFn
}) {
  let c = await e.discoveryState?.(),
    resourceMetadata,
    l,
    p,
    resourceMetadataUrl_2 = resourceMetadataUrl;
  if (!resourceMetadataUrl_2 && c?.resourceMetadataUrl) resourceMetadataUrl_2 = new URL(c.resourceMetadataUrl);
  if (c?.authorizationServerUrl) {
    if (l = c.authorizationServerUrl, resourceMetadata = c.resourceMetadata, p = c.authorizationServerMetadata ?? (await QEt(l, {
      fetchFn: fetchFn
    })), !resourceMetadata) try {
      resourceMetadata = await car(serverUrl, {
        resourceMetadataUrl: resourceMetadataUrl_2
      }, fetchFn);
    } catch {}
    if (p !== c.authorizationServerMetadata || resourceMetadata !== c.resourceMetadata) await e.saveDiscoveryState?.({
      authorizationServerUrl: String(l),
      resourceMetadataUrl: resourceMetadataUrl_2?.toString(),
      resourceMetadata: resourceMetadata,
      authorizationServerMetadata: p
    });
  } else {
    let _ = await V9r(serverUrl, {
      resourceMetadataUrl: resourceMetadataUrl_2,
      fetchFn: fetchFn
    });
    l = _.authorizationServerUrl, p = _.authorizationServerMetadata, resourceMetadata = _.resourceMetadata, await e.saveDiscoveryState?.({
      authorizationServerUrl: String(l),
      resourceMetadataUrl: resourceMetadataUrl_2?.toString(),
      resourceMetadata: resourceMetadata,
      authorizationServerMetadata: p
    });
  }
  let resource = await he(serverUrl, e, resourceMetadata),
    scope_2 = scope || resourceMetadata?.scopes_supported?.join(" ") || e.clientMetadata.scope,
    clientInformation = await Promise.resolve(e.clientInformation());
  if (!clientInformation) {
    if (authorizationCode !== void 0) throw Error("Existing OAuth client information is required when exchanging an authorization code");
    let _ = p?.client_id_metadata_document_supported === !0,
      y = e.clientMetadataUrl;
    if (y && !_e(y)) throw new z(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${y}`);
    if (_ && y) clientInformation = {
      client_id: y
    }, await e.saveClientInformation?.(clientInformation);else {
      if (!e.saveClientInformation) throw Error("OAuth client information must be saveable for dynamic registration");
      let B = await ye(l, {
        metadata: p,
        clientMetadata: e.clientMetadata,
        scope: scope_2,
        fetchFn: fetchFn
      });
      await e.saveClientInformation(B), clientInformation = B;
    }
  }
  let ee = !e.redirectUrl;
  if (authorizationCode !== void 0 || ee) {
    let _ = await me(e, l, {
      metadata: p,
      resource: resource,
      authorizationCode: authorizationCode,
      fetchFn: fetchFn
    });
    return await e.saveTokens(_), "AUTHORIZED";
  }
  let N = await e.tokens();
  if (N?.refresh_token) try {
    let _ = await K9r(l, {
      metadata: p,
      clientInformation: clientInformation,
      refreshToken: N.refresh_token,
      resource: resource,
      addClientAuthentication: e.addClientAuthentication,
      fetchFn: fetchFn
    });
    return await e.saveTokens(_), "AUTHORIZED";
  } catch (error) {
    if (!(error instanceof OP) || error instanceof yNe) ;else throw error;
  }
  let state = e.state ? await e.state() : void 0,
    {
      authorizationUrl: authorizationUrl,
      codeVerifier: codeVerifier
    } = await q9r(l, {
      metadata: p,
      clientInformation: clientInformation,
      state: state,
      redirectUrl: e.redirectUrl,
      scope: scope_2,
      resource: resource
    });
  return await e.saveCodeVerifier(codeVerifier), await e.redirectToAuthorization(authorizationUrl), "REDIRECT";
}
function _e(e) {
  if (!e) return !1;
  try {
    let t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function he(e, t, r) {
  let requestedResource_2 = E(e);
  if (t.validateResourceURL) return await t.validateResourceURL(requestedResource_2, r?.resource);
  if (!r) return;
  if (!Y({
    requestedResource: requestedResource_2,
    configuredResource: r.resource
  })) throw Error(`Protected resource ${r.resource} does not match expected ${requestedResource_2} (or origin)`);
  return new URL(r.resource);
}
function PRe(e) {
  let t = e.headers.get("WWW-Authenticate");
  if (!t) return {};
  let [r, n] = t.split(" ");
  if (r.toLowerCase() !== "bearer" || !n) return {};
  let a = q(e, "resource_metadata") || void 0,
    resourceMetadataUrl_3;
  if (a) try {
    resourceMetadataUrl_3 = new URL(a);
  } catch {}
  let scope_3 = q(e, "scope") || void 0,
    error_2 = q(e, "error") || void 0;
  return {
    resourceMetadataUrl: resourceMetadataUrl_3,
    scope: scope_3,
    error: error_2
  };
}
function q(e, t) {
  let r = e.headers.get("WWW-Authenticate");
  if (!r) return null;
  let regExp = new RegExp(`${t}=(?:"([^"]+)"|([^\\s,]+))`),
    a = r.match(regExp);
  if (a) return a[1] || a[2];
  return null;
}
async function car(e, t, r = fetch) {
  let n = await we(e, "oauth-protected-resource", r, {
    protocolVersion: t?.protocolVersion,
    metadataUrl: t?.resourceMetadataUrl
  });
  if (!n || n.status === 404) throw await n?.body?.cancel(), Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!n.ok) throw await n.body?.cancel(), Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`);
  return Z.parse(await n.json());
}
async function I(e, headers, r = fetch) {
  try {
    return await r(e, {
      headers: headers
    });
  } catch (error) {
    if (error instanceof TypeError) if (headers) return I(e, void 0, r);else return;
    throw error;
  }
}
function fe(e, t = "", r = {}) {
  if (t.endsWith("/")) t = t.slice(0, -1);
  return r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Q(e, t, r = fetch) {
  return await I(e, {
    "MCP-Protocol-Version": t
  }, r);
}
function ge(e, t) {
  return !e || e.status >= 400 && e.status < 500 && t !== "/";
}
async function we(e, t, r, n) {
  let a = new URL(e),
    i = n?.protocolVersion ?? URe,
    c;
  if (n?.metadataUrl) c = new URL(n.metadataUrl);else {
    let l = fe(t, a.pathname);
    c = new URL(l, n?.metadataServerUrl ?? a), c.search = a.search;
  }
  let s = await Q(c, i, r);
  if (!n?.metadataUrl && ge(s, a.pathname)) {
    let l = new URL(`/.well-known/${t}`, a);
    s = await Q(l, i, r);
  }
  return s;
}
function ze(e) {
  let t = typeof e === "string" ? new URL(e) : e,
    r = t.pathname !== "/",
    n = [];
  if (!r) return n.push({
    url: new URL("/.well-known/oauth-authorization-server", t.origin),
    type: "oauth"
  }), n.push({
    url: new URL("/.well-known/openid-configuration", t.origin),
    type: "oidc"
  }), n;
  let pathname = t.pathname;
  if (pathname.endsWith("/")) pathname = pathname.slice(0, -1);
  return n.push({
    url: new URL(`/.well-known/oauth-authorization-server${pathname}`, t.origin),
    type: "oauth"
  }), n.push({
    url: new URL(`/.well-known/openid-configuration${pathname}`, t.origin),
    type: "oidc"
  }), n.push({
    url: new URL(`${pathname}/.well-known/openid-configuration`, t.origin),
    type: "oidc"
  }), n;
}
async function QEt(e, {
  fetchFn: fetchFn_2 = fetch,
  protocolVersion = URe
} = {}) {
  let n = {
      "MCP-Protocol-Version": protocolVersion,
      Accept: "application/json"
    },
    a = ze(e);
  for (let {
    url: url,
    type: type
  } of a) {
    let s = await I(url, n, fetchFn_2);
    if (!s) continue;
    if (!s.ok) {
      if (await s.body?.cancel(), s.status >= 400 && s.status < 500) continue;
      throw Error(`HTTP ${s.status} trying to load ${type === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${url}`);
    }
    if (type === "oauth") return $Cn.parse(await s.json());else return aar.parse(await s.json());
  }
  return;
}
async function V9r(e, t) {
  let resourceMetadata_2, authorizationServerUrl;
  try {
    if (resourceMetadata_2 = await car(e, {
      resourceMetadataUrl: t?.resourceMetadataUrl
    }, t?.fetchFn), resourceMetadata_2.authorization_servers && resourceMetadata_2.authorization_servers.length > 0) authorizationServerUrl = resourceMetadata_2.authorization_servers[0];
  } catch {}
  if (!authorizationServerUrl) authorizationServerUrl = String(new URL("/", e));
  let authorizationServerMetadata = await QEt(authorizationServerUrl, {
    fetchFn: t?.fetchFn
  });
  return {
    authorizationServerUrl: authorizationServerUrl,
    authorizationServerMetadata: authorizationServerMetadata,
    resourceMetadata: resourceMetadata_2
  };
}
async function q9r(e, {
  metadata: metadata,
  clientInformation: clientInformation_2,
  redirectUrl: redirectUrl,
  scope: scope_4,
  state: state_2,
  resource: resource_2
}) {
  let authorizationUrl_2;
  if (metadata) {
    if (authorizationUrl_2 = new URL(metadata.authorization_endpoint), !metadata.response_types_supported.includes(j)) throw Error(`Incompatible auth server: does not support response type ${j}`);
    if (metadata.code_challenge_methods_supported && !metadata.code_challenge_methods_supported.includes(W)) throw Error(`Incompatible auth server: does not support code challenge method ${W}`);
  } else authorizationUrl_2 = new URL("/authorize", e);
  let l = await d4t(),
    {
      code_verifier: p,
      code_challenge: code_challenge
    } = l;
  if (authorizationUrl_2.searchParams.set("response_type", j), authorizationUrl_2.searchParams.set("client_id", clientInformation_2.client_id), authorizationUrl_2.searchParams.set("code_challenge", code_challenge), authorizationUrl_2.searchParams.set("code_challenge_method", W), authorizationUrl_2.searchParams.set("redirect_uri", String(redirectUrl)), state_2) authorizationUrl_2.searchParams.set("state", state_2);
  if (scope_4) authorizationUrl_2.searchParams.set("scope", scope_4);
  if (scope_4?.includes("offline_access")) authorizationUrl_2.searchParams.append("prompt", "consent");
  if (resource_2) authorizationUrl_2.searchParams.set("resource", resource_2.href);
  return {
    authorizationUrl: authorizationUrl_2,
    codeVerifier: p
  };
}
function G(code, code_verifier, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    code_verifier: code_verifier,
    redirect_uri: String(r)
  });
}
async function D(e, {
  metadata: metadata_2,
  tokenRequestParams: r,
  clientInformation: clientInformation_3,
  addClientAuthentication: addClientAuthentication,
  resource: resource_3,
  fetchFn: fetchFn_3
}) {
  let s = metadata_2?.token_endpoint ? new URL(metadata_2.token_endpoint) : new URL("/token", e),
    headers_2 = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    });
  if (resource_3) r.set("resource", resource_3.href);
  if (addClientAuthentication) await addClientAuthentication(headers_2, r, s, metadata_2);else if (clientInformation_3) {
    let h = metadata_2?.token_endpoint_auth_methods_supported ?? [],
      m = ce(clientInformation_3, h);
    ue(m, clientInformation_3, headers_2, r);
  }
  let p = await (fetchFn_3 ?? fetch)(s, {
    method: "POST",
    headers: headers_2,
    body: r
  });
  if (!p.ok) throw await X(p);
  return lar.parse(await p.json());
}
async function ats(e, {
  metadata: metadata_3,
  clientInformation: clientInformation_4,
  authorizationCode: authorizationCode_2,
  codeVerifier: codeVerifier_2,
  redirectUri: redirectUri,
  resource: resource_4,
  addClientAuthentication: addClientAuthentication_2,
  fetchFn: fetchFn_4
}) {
  let tokenRequestParams = G(authorizationCode_2, codeVerifier_2, redirectUri);
  return D(e, {
    metadata: metadata_3,
    tokenRequestParams: tokenRequestParams,
    clientInformation: clientInformation_4,
    addClientAuthentication: addClientAuthentication_2,
    resource: resource_4,
    fetchFn: fetchFn_4
  });
}
async function K9r(e, {
  metadata: metadata_4,
  clientInformation: clientInformation_5,
  refreshToken: n,
  resource: resource_5,
  addClientAuthentication: addClientAuthentication_3,
  fetchFn: fetchFn_5
}) {
  let s = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: n
    }),
    l = await D(e, {
      metadata: metadata_4,
      tokenRequestParams: s,
      clientInformation: clientInformation_5,
      addClientAuthentication: addClientAuthentication_3,
      resource: resource_5,
      fetchFn: fetchFn_5
    });
  return {
    refresh_token: n,
    ...l
  };
}
async function me(e, t, {
  metadata: metadata_5,
  resource: resource_6,
  authorizationCode: authorizationCode_3,
  fetchFn: fetchFn_6
} = {}) {
  let scope_5 = e.clientMetadata.scope,
    tokenRequestParams_2;
  if (e.prepareTokenRequest) tokenRequestParams_2 = await e.prepareTokenRequest(scope_5);
  if (!tokenRequestParams_2) {
    if (!authorizationCode_3) throw Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e.redirectUrl) throw Error("redirectUrl is required for authorization_code flow");
    let p = await e.codeVerifier();
    tokenRequestParams_2 = G(authorizationCode_3, p, e.redirectUrl);
  }
  let l = await e.clientInformation();
  return D(t, {
    metadata: metadata_5,
    tokenRequestParams: tokenRequestParams_2,
    clientInformation: l ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: resource_6,
    fetchFn: fetchFn_6
  });
}
async function ye(e, {
  metadata: metadata_6,
  clientMetadata: clientMetadata,
  scope: scope_6,
  fetchFn: fetchFn_7
}) {
  let i;
  if (metadata_6) {
    if (!metadata_6.registration_endpoint) throw Error("Incompatible auth server: does not support dynamic client registration");
    i = new URL(metadata_6.registration_endpoint);
  } else i = new URL("/register", e);
  let c = await (fetchFn_7 ?? fetch)(i, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...clientMetadata,
      ...(scope_6 !== void 0 ? {
        scope: scope_6
      } : {})
    })
  });
  if (!c.ok) throw await X(c);
  return J.parse(await c.json());
}
export { $Cn, aar, lar, dar, OP, tot, yNe, i4t, a4t, IP, hoe, PRe, car, QEt, V9r, q9r, ats, K9r };